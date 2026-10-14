/* ============================================================
   Data Agent 智能体管理 — 应用逻辑
   布局契约：所有设计发生在平台内容区之内
   · 列表页：顶部页签（数据集/仪表板智能体）+ 工具行 + 卡片
   · 详情页：返回+名称+操作 头部；内容区内左侧子导航
   · 管理中心：返回 + 顶部横向页签（与现有产品一致）
   ============================================================ */
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const main = $('#main');

  const state = {
    listTab: 'dataset',
    knowledgeTab: 'biz',
    expTab: 'display',
    opsTab: 'history',
    evalRunning: false,
    evalProgress: 0,
  };

  /* ---------- 基础组件 ---------- */
  function toast(msg, ico) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="t-ico">${ico || '✓'}</span>${msg}`;
    $('#toast-root').appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 240); }, 2400);
  }

  function openDrawer(title, bodyHTML, footHTML) {
    $('#drawer-root').innerHTML = `
      <div class="drawer-mask" data-action="close-drawer"></div>
      <div class="drawer">
        <div class="drawer-head">
          <div class="drawer-title">${title}</div>
          <button class="drawer-close" data-action="close-drawer">✕</button>
        </div>
        <div class="drawer-body">${bodyHTML}</div>
        ${footHTML ? `<div class="drawer-foot">${footHTML}</div>` : ''}
      </div>`;
  }
  function closeDrawer() { $('#drawer-root').innerHTML = ''; }

  function openModal(title, bodyHTML, footHTML) {
    $('#modal-root').innerHTML = `
      <div class="modal-mask" data-action="close-modal">
        <div class="modal" onclick="event.stopPropagation()">
          <div class="modal-head"><div class="modal-title">${title}</div></div>
          <div class="modal-body">${bodyHTML}</div>
          ${footHTML ? `<div class="modal-foot">${footHTML}</div>` : ''}
        </div>
      </div>`;
  }
  function closeModal() { $('#modal-root').innerHTML = ''; }

  const statusTag = (st) => {
    const m = STATUS_META[st];
    return `<span class="status-tag ${m.cls}">${m.text}</span>`;
  };

  const learnPill = (s, msg) => {
    if (s === 'ok') return '<span class="pill ok">✓ 学习成功</span>';
    if (s === 'learning') return '<span class="pill info"><span class="spin">◌</span> 学习中</span>';
    if (s === 'fail') return `<span class="pill err" title="${msg || ''}">✕ 学习失败</span>`;
    return '<span class="pill plain">排队中</span>';
  };

  /* ---------- 路由 ---------- */
  function parseRoute() {
    const h = location.hash.replace(/^#\/?/, '') || 'agents';
    const seg = h.split('/');
    if (seg[0] === 'agent' && seg[1]) return { area: 'agent', id: seg[1], page: seg[2] || 'overview' };
    if (seg[0] === 'center') return { area: 'center', page: seg[1] || 'models' };
    return { area: 'agents' };
  }

  function render() {
    const r = parseRoute();
    if (r.area === 'agents') renderAgentList();
    else if (r.area === 'center') renderCenter(r.page);
    else {
      const agent = DB.agents.find(a => a.id === r.id);
      if (!agent) { location.hash = '#/agents'; return; }
      renderAgentDetail(agent, r.page);
    }
    main.scrollTop = 0;
  }

  /* ============================================================
     列表页（贴合现有：页签 + 搜索 + 简洁卡片）
     ============================================================ */
  function renderAgentList() {
    const isDataset = state.listTab === 'dataset';
    main.innerHTML = `
    <div class="page-tabs">
      <button class="page-tab ${isDataset ? 'active' : ''}" data-action="list-tab" data-tab="dataset">数据集智能体</button>
      <button class="page-tab ${!isDataset ? 'active' : ''}" data-action="list-tab" data-tab="dashboard">仪表板智能体</button>
    </div>
    <div class="main-inner">
      ${isDataset ? datasetAgentList() : `
        <div class="empty" style="padding-top:90px">
          <div class="e-ico">▦</div>
          <div class="e-title">仪表板智能体</div>
          <div class="e-sub">本次重设计聚焦数据集智能体；此页签保持现有功能不变。</div>
        </div>`}
    </div>`;
  }

  function datasetAgentList() {
    return `
      <div class="list-toolbar">
        <div class="search-inline"><span class="ico">⌕</span><input placeholder="搜索关键词" /></div>
        <div class="spacer"></div>
        <button class="btn primary" data-action="new-agent">＋ 新建智能体</button>
        <button class="btn" data-action="goto" data-href="#/center/models">⚙ 管理中心</button>
      </div>
      <div class="agent-grid stagger">
        ${DB.agents.map(a => `
        <div class="agent-card" data-action="open-agent" data-id="${a.id}">
          <div class="agent-card-top">
            <div class="agent-avatar" style="background:${a.color}">${a.emoji}</div>
            <div class="agent-name">${a.name}</div>
            ${statusTag(a.status)}
          </div>
          <div class="agent-desc">${a.desc || '暂无描述'}</div>
          <div class="agent-card-foot">
            <span class="owner-avatar">${a.owner[0]}</span>${a.owner}
            ${a.pendingFeedback ? `<span class="pill err" style="margin-left:auto" title="待处理反馈">${a.pendingFeedback} 条待处理</span>` : ''}
          </div>
        </div>`).join('')}
        <div class="agent-card new-card" data-action="new-agent">
          <span class="plus">＋</span><span>新建智能体</span>
        </div>
      </div>`;
  }

  /* ============================================================
     智能体详情（内容区内左侧子导航）
     ============================================================ */
  const AGENT_NAV = [
    { key: 'overview', ico: '◎', name: '概览' },
    { key: 'data', ico: '▤', name: '数据' },
    { key: 'knowledge', ico: '✎', name: '知识' },
    { key: 'experience', ico: '◐', name: '体验与能力' },
    { key: 'evaluation', ico: '✓', name: '评测' },
    { key: 'ops', ico: '◷', name: '运营' },
    { key: 'settings', ico: '⚙', name: '设置' },
  ];

  function renderAgentDetail(agent, page) {
    const pages = { overview: pageOverview, data: pageData, knowledge: pageKnowledge, experience: pageExperience, evaluation: pageEvaluation, ops: pageOps, settings: pageSettings };
    const content = (pages[page] || pageOverview)(agent);
    main.innerHTML = `
    <div class="detail-head">
      <span class="detail-back" data-action="goto" data-href="#/agents">‹</span>
      <div class="detail-title">${agent.name} ${statusTag(agent.status)}</div>
      <div class="detail-actions">
        <button class="btn" data-action="mock" data-msg="更多操作：重命名 / 另存为 / 导入导出 / 删除">···</button>
        ${agent.status === 'live'
          ? `<button class="btn" data-action="toggle-agent-status" data-id="${agent.id}">停用</button>`
          : `<button class="btn" data-action="toggle-agent-status" data-id="${agent.id}">启用</button>`}
        <button class="btn primary" data-action="test-chat">测试</button>
      </div>
    </div>
    <div class="detail-body">
      <aside class="detail-side">
        ${AGENT_NAV.map(n => `
          <div class="side-item ${page === n.key ? 'active' : ''}" data-action="goto" data-href="#/agent/${agent.id}/${n.key}">
            <span class="si-ico">${n.ico}</span>${n.name}
            ${n.key === 'ops' && agent.pendingFeedback ? `<span class="badge-dot">${agent.pendingFeedback}</span>` : ''}
          </div>`).join('')}
      </aside>
      <section class="detail-content">${content}</section>
    </div>`;
  }

  function secHead(title, desc, actions) {
    return `
      <div class="sec-head">
        <div><div class="sec-title">${title}</div>${desc ? `<div class="sec-desc">${desc}</div>` : ''}</div>
        ${actions ? `<div class="sec-actions">${actions}</div>` : ''}
      </div>`;
  }

  /* ---------- 概览 ---------- */
  function pageOverview(agent) {
    const doneCount = agent.checklist.filter(c => c.done).length;
    const allDone = doneCount === agent.checklist.length;
    const days = ['一', '二', '三', '四', '五', '六', '日'];
    const maxTrend = Math.max(...agent.trend, 1);
    const C = 2 * Math.PI * 44;

    return `
      ${secHead('概览', '一眼看清这个智能体「能不能上、跑得好不好、哪里要修」。',
        `<button class="btn" data-action="goto" data-href="#/agent/${agent.id}/evaluation">运行评测</button>`)}
      <div class="overview-grid">
        <div class="ov-col stagger">
          <div class="card health-card">
            <div class="health-ring">
              <svg width="104" height="104" viewBox="0 0 104 104">
                <circle cx="52" cy="52" r="44" fill="none" stroke="var(--bg-grey)" stroke-width="9"/>
                <circle cx="52" cy="52" r="44" fill="none"
                  stroke="${agent.health >= 80 ? 'var(--chart)' : agent.health >= 50 ? 'var(--amber)' : 'var(--red)'}"
                  stroke-width="9" stroke-linecap="round"
                  stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - agent.health / 100)}"
                  style="transition:stroke-dashoffset 1s cubic-bezier(.2,.7,.3,1)"/>
              </svg>
              <div class="hr-num"><b>${agent.health}</b><span>健康分</span></div>
            </div>
            <div class="health-facts">
              <div class="hfact"><div class="hf-l">测试准确率</div><div class="hf-v">${agent.accuracy != null ? agent.accuracy + '%' : '未评测'} ${agent.accuracy >= 90 ? '<span class="pill ok">达标</span>' : agent.accuracy != null ? '<span class="pill warn">未达 90%</span>' : ''}</div></div>
              <div class="hfact"><div class="hf-l">问答满意度（赞占比）</div><div class="hf-v">${agent.satisfy != null ? agent.satisfy + '%' : '—'}</div></div>
              <div class="hfact"><div class="hf-l">平均响应耗时</div><div class="hf-v">${agent.avgLatency || '—'}</div></div>
              <div class="hfact"><div class="hf-l">知识规模</div><div class="hf-v">${agent.knowledge} 条知识 · ${agent.samples} 条样例</div></div>
            </div>
          </div>

          <div class="card">
            <div class="card-head">
              <div class="card-title">近 7 天问答趋势</div>
              <div class="card-sub spacer" style="text-align:right">共 ${agent.questions7d.toLocaleString()} 次 · ${agent.activeUsers} 位活跃用户</div>
            </div>
            <div class="trend-chart">
              <div class="trend-bars">
                ${agent.trend.map((v, i) => `
                  <div class="trend-bar" title="${v} 次">
                    <i style="height:${Math.max(v / maxTrend * 100, 2)}%;animation-delay:${i * 0.05}s"></i><span>周${days[i]}</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-head">
              <div class="card-title">${allDone ? '上线检查清单' : '距离上线还差 ' + (agent.checklist.length - doneCount) + ' 项'}</div>
              <div class="card-sub spacer" style="text-align:right">${doneCount}/${agent.checklist.length} 已完成</div>
            </div>
            <div>
              ${agent.checklist.map(c => `
                <div class="checklist-item">
                  <div class="ck-mark ${c.done ? 'done' : 'todo'}">✓</div>
                  <div class="ck-body">
                    <div class="ck-name ${c.done ? 'done' : ''}">${c.name}</div>
                    <div class="ck-hint">${c.hint}</div>
                  </div>
                  <span class="ck-go" data-action="goto" data-href="#/agent/${agent.id}/${c.go}">${c.done ? '查看' : '去完成'} →</span>
                </div>`).join('')}
            </div>
          </div>
        </div>

        <div class="ov-col stagger">
          <div class="card">
            <div class="card-head"><div class="card-title">待办收件箱</div>
              ${agent.inbox.length ? `<span class="pill err spacer" style="margin-left:auto">${agent.inbox.length} 项待处理</span>` : ''}
            </div>
            ${agent.inbox.length ? agent.inbox.map(it => `
              <div class="inbox-item" data-action="inbox" data-target="${it.action}" data-id="${agent.id}">
                <div class="inbox-ico ${it.type}">${it.ico}</div>
                <div style="flex:1;min-width:0">
                  <div class="inbox-title">${it.title}</div>
                  <div class="inbox-sub">${it.sub}</div>
                </div>
                <div class="inbox-time">${it.time}</div>
              </div>`).join('')
            : `<div class="empty"><div class="e-ico">☀</div><div class="e-title">没有待办</div><div class="e-sub">点踩反馈、学习失败、异常对话都会汇集到这里。</div></div>`}
          </div>

          <div class="card">
            <div class="card-head"><div class="card-title">配置速览</div></div>
            <div style="padding:4px 0">
              ${[
                ['问数分析模式', '标准', `#/agent/${agent.id}/experience`],
                ['洞察分析', '已开启', `#/agent/${agent.id}/experience`],
                ['大模型', '继承域默认策略', `#/agent/${agent.id}/settings`],
                ['分析专家', DB.experts.filter(e => e.enabled).length + ' 个启用中', `#/agent/${agent.id}/experience`],
                ['订阅推送', DB.subscriptions.filter(s => s.enabled).length + ' 个运行中', `#/agent/${agent.id}/ops`],
                ['使用权限', DB.members.length + ' 个用户/组', `#/agent/${agent.id}/settings`],
              ].map(([k, v, href]) => `
                <div style="display:flex;justify-content:space-between;padding:9px 20px;font-size:12.5px;border-bottom:1px solid var(--border);cursor:pointer" data-action="goto" data-href="${href}">
                  <span style="color:var(--text-3)">${k}</span><span style="font-weight:550">${v} →</span>
                </div>`).join('')}
            </div>
          </div>
        </div>
      </div>`;
  }

  /* ---------- 数据 ---------- */
  function pageData(agent) {
    const ds = DB.datasets[agent.id] || [];
    const failCount = ds.filter(d => d.learnStatus === 'fail').length;
    return `
      ${secHead('数据', '智能体回答问题的数据边界。数据集的描述、结构与字段注释会作为知识供模型学习——学习状态直接决定问答准确率。',
        `<button class="btn" data-action="learn-all">♺ 学习全部</button>
         <button class="btn primary" data-action="add-dataset">＋ 添加数据集</button>`)}

      ${failCount ? `<div class="learn-banner" style="background:var(--red-soft);border-color:#eed3cf;color:var(--red)">⚠ ${failCount} 个数据集学习失败，模型可能使用过期的表结构回答问题。</div>`
      : `<div class="learn-banner">◷ 数据集每天自动重新学习一次（最近：今天 06:00）。数据结构变更后建议手动触发学习。</div>`}

      <div class="card">
        <div class="table-wrap">
          <table class="tbl">
            <thead><tr>
              <th>数据集</th><th>类型</th><th>行数</th><th>字段</th><th>学习状态</th><th>最近学习</th><th style="width:150px">操作</th>
            </tr></thead>
            <tbody>
              ${ds.map(d => `
              <tr>
                <td>
                  <div style="font-weight:550">${d.label}</div>
                  <div class="mono" style="color:var(--text-3);margin-top:2px">${d.name}
                    ${d.quality === 'warn' ? `<span class="pill warn" title="${d.qualityMsg}" style="margin-left:6px">质量提示</span>` : ''}
                  </div>
                  ${d.learnStatus === 'fail' ? `<div style="font-size:11.5px;color:var(--red);margin-top:5px">✕ ${d.failMsg}</div>` : ''}
                </td>
                <td><span class="pill plain">${d.type}</span></td>
                <td class="num">${d.rows}</td>
                <td class="num">${d.fields}<span style="color:var(--text-3)">${d.disabled ? ' (禁用 ' + d.disabled + ')' : ''}</span></td>
                <td>${learnPill(d.learnStatus, d.failMsg)}</td>
                <td style="color:var(--text-3);font-size:12px">${d.learnTime}<br><span style="font-size:11px">${d.trigger}触发</span></td>
                <td>
                  <div class="actions">
                    <button class="btn ghost sm" title="重新学习" data-action="relearn" data-ds="${d.label}">♺</button>
                    <button class="btn ghost sm" title="字段学习配置：选择学习枚举值的字段、禁用敏感字段" data-action="field-config" data-ds="${d.label}">▤</button>
                    <button class="btn ghost sm" title="切换数据集（字段映射自动同步样例集）" data-action="switch-ds" data-ds="${d.label}">⇄</button>
                    <button class="btn ghost sm" title="移除" data-action="remove-ds" data-ds="${d.label}" style="color:var(--red)">✕</button>
                  </div>
                </td>
              </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-label">数据建模增强</div>
      <div class="card">
        <div class="toggle-row">
          <div class="toggle-info">
            <div class="toggle-name">表关系设置</div>
            <div class="toggle-why">图形化定义多张表之间的关联关系（如 销售表.store_id → 门店维表.id），为多表分析提供确定性的 JOIN 知识，避免模型自行猜测关联字段。</div>
            <div class="toggle-extra"><button class="btn sm" data-action="table-relation">打开关系图 →</button></div>
          </div>
          <button class="switch on" data-action="toggle" data-name="表关系设置"></button>
        </div>
        <div class="toggle-row">
          <div class="toggle-info">
            <div class="toggle-name">指标汇总表识别 <span class="tip-tag">EAV 转置</span></div>
            <div class="toggle-why">当数据集是「指标名称一列 + 指标值一列」的结构时开启：系统自动将指标行转置为列，用户即可按「销售额」「利润」等列名直接提问。需在数据集学习前配置。</div>
          </div>
          <button class="switch" data-action="toggle" data-name="指标汇总表识别"></button>
        </div>
      </div>

      <div class="section-label">命名规范</div>
      <div class="callout">
        <b>为什么数据集名称不能包含特殊字符？</b><br>
        空格、运算符、括号等 32 类字符会严重影响大模型生成表名的准确率。包含这类字符的数据集无法加入智能体——建议先在 BI 侧重命名（不影响下游卡片和 ETL 引用）。全域字符白名单在 <span style="color:var(--primary);text-decoration:underline;cursor:pointer" data-action="goto" data-href="#/center/features">管理中心 · 全局功能配置</span> 中调整。
      </div>`;
  }

  /* ---------- 知识 ---------- */
  function pageKnowledge(agent) {
    const tab = state.knowledgeTab;
    const failSamples = DB.samples.filter(s => !s.valid).length;
    return `
      ${secHead('知识', '让模型「懂业务」的三类知识：<b>业务知识</b>教口径与黑话，<b>样例集</b>教难写的 SQL，<b>偏好</b>教回答风格。优先维护业务知识，难以表达的再进样例集。',
        `<button class="btn" data-action="export-knowledge">↧ 导出</button>
         <button class="btn" data-action="import-knowledge">↥ 批量导入</button>
         <button class="btn primary" data-action="new-knowledge">＋ 新建</button>`)}

      <div class="tabs">
        <button class="tab ${tab === 'biz' ? 'active' : ''}" data-action="ktab" data-tab="biz">业务知识 <span class="cnt">${DB.bizKnowledge.length}</span></button>
        <button class="tab ${tab === 'sample' ? 'active' : ''}" data-action="ktab" data-tab="sample">样例集 <span class="cnt">${DB.samples.length}</span>${failSamples ? ' <span class="pill err">' + failSamples + ' 条失效</span>' : ''}</button>
        <button class="tab ${tab === 'pref' ? 'active' : ''}" data-action="ktab" data-tab="pref">通用偏好 <span class="cnt">7 类</span></button>
      </div>
      ${tab === 'biz' ? knowledgeBiz() : tab === 'sample' ? knowledgeSamples() : knowledgePrefs()}`;
  }

  function knowledgeToolbar(placeholder) {
    return `
      <div class="knowledge-toolbar">
        <div class="search-inline" style="width:260px"><span class="ico">⌕</span><input placeholder="${placeholder}" /></div>
        <select class="select-mini"><option>全部标签</option><option>指标口径</option><option>行业黑话</option><option>系统生成</option></select>
        <select class="select-mini"><option>全部学习状态</option><option>已完成</option><option>学习中</option><option>学习失败</option></select>
        <div class="spacer"></div>
        <button class="btn ghost sm" data-action="tag-manage">标签管理</button>
      </div>`;
  }

  function recallBar(n, max) {
    const pct = Math.min(n / max * 100, 100);
    return `<span class="recall-heat"><span class="bar"><i style="width:${pct}%"></i></span><span style="font-family:var(--mono);font-size:11.5px">${n}</span></span>`;
  }

  function knowledgeBiz() {
    return `
      ${knowledgeToolbar('搜索知识内容…')}
      <div class="card">
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th style="width:44%">知识内容</th><th>标签</th><th>学习状态</th><th title="近 30 天被问答召回的次数，反映知识的实际价值">召回次数</th><th>启用</th><th style="width:100px">操作</th></tr></thead>
          <tbody>
            ${DB.bizKnowledge.map(k => `
            <tr style="${!k.enabled ? 'opacity:.5' : ''}">
              <td><div style="line-height:1.6">${k.text}</div><div class="mono" style="color:var(--text-3);font-size:11px;margin-top:4px">${k.id} · 更新于 ${k.updated}</div></td>
              <td>${k.tags.length ? k.tags.map(t => `<span class="tag-chip">${t}</span>`).join('') : '<span style="color:var(--text-3)">—</span>'}</td>
              <td>${learnPill(k.status)}</td>
              <td>${recallBar(k.recall, 342)}</td>
              <td><button class="switch ${k.enabled ? 'on' : ''}" data-action="toggle" data-name="知识 ${k.id}"></button></td>
              <td><div class="actions">
                <button class="btn ghost sm" data-action="edit-knowledge" data-id="${k.id}">✎</button>
                <button class="btn ghost sm" style="color:var(--red)" data-action="del-knowledge" data-id="${k.id}">✕</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table></div>
      </div>
      <div class="callout" style="margin-top:14px">💡 <b>低召回 ≠ 无用，但零召回值得清理。</b>按召回次数排序可以发现从未被使用的知识——它们可能表述模糊或与实际提问脱节，建议改写或禁用，减少对模型的干扰。</div>`;
  }

  function knowledgeSamples() {
    return `
      ${knowledgeToolbar('搜索样例问题…')}
      <div class="card">
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th style="width:36%">问题 → SQL</th><th>SQL 有效性</th><th>标签</th><th>学习状态</th><th>召回次数</th><th>启用</th><th style="width:100px">操作</th></tr></thead>
          <tbody>
            ${DB.samples.map(s => `
            <tr>
              <td>
                <div style="font-weight:550">${s.q}</div>
                <div class="mono" style="color:var(--text-3);font-size:11px;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:340px">${s.sql}</div>
              </td>
              <td>${s.valid ? '<span class="pill ok">✓ 有效</span>' : `<span class="pill err" title="${s.validMsg}">✕ 失效</span>`}
                ${!s.valid ? `<div style="font-size:11px;color:var(--red);margin-top:4px;max-width:170px;line-height:1.5">${s.validMsg}</div>` : ''}</td>
              <td>${s.tags.length ? s.tags.map(t => `<span class="tag-chip">${t}</span>`).join('') : '<span style="color:var(--text-3)">—</span>'}</td>
              <td>${learnPill(s.status)}</td>
              <td>${recallBar(s.recall, 96)}</td>
              <td><button class="switch ${s.enabled ? 'on' : ''}" data-action="toggle" data-name="样例 ${s.id}"></button></td>
              <td><div class="actions">
                <button class="btn ghost sm" data-action="edit-sample" data-id="${s.id}">✎</button>
                <button class="btn ghost sm" style="color:var(--red)" data-action="del-knowledge" data-id="${s.id}">✕</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table></div>
      </div>
      <div class="callout" style="margin-top:14px">⚠ <b>样例集是「高级武器」，不要滥用。</b>请勿加入过于简单或非长期有效的问题；数据集字段变更会让样例 SQL 失效——失效样例会出现在概览的待办收件箱中。</div>`;
  }

  function knowledgePrefs() {
    return `
      <div class="pref-grid stagger">
        ${DB.prefTypes.map(p => `
        <div class="card pref-card" data-action="edit-pref" data-key="${p.key}">
          <div class="pref-head">
            <div class="pref-ico">${p.ico}</div>
            <div><div class="pref-name">${p.name}</div><div class="pref-meta">${p.why}</div></div>
          </div>
          ${p.content ? `<div class="pref-preview">${p.content}</div>` : '<div class="pref-preview empty">尚未配置，点击填写</div>'}
        </div>`).join('')}
      </div>

      <div class="section-label">企业偏好引用</div>
      <div class="card">
        <div class="card-head">
          <div><div class="card-title">来自管理中心的企业级偏好</div>
          <div class="card-sub">平台管理员在域级维护、开放给本智能体的通用偏好。开启即引用，无需重复维护。</div></div>
        </div>
        ${DB.enterprisePrefs.map(p => `
          <div class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-name">${p.text} <span class="tag-chip">${p.type}</span></div>
              <div class="toggle-why">由 ${p.operator} 维护 · 更新于 ${p.updated}</div>
            </div>
            <button class="switch ${p.referenced ? 'on' : ''}" data-action="toggle" data-name="企业偏好 ${p.id}"></button>
          </div>`).join('')}
      </div>`;
  }

  /* ---------- 体验与能力 ---------- */
  function pageExperience(agent) {
    const tab = state.expTab;
    return `
      ${secHead('体验与能力', '决定业务用户「看到什么、能做什么」。每个开关都注明了它解决的问题——不确定就保持默认。')}
      <div class="tabs">
        <button class="tab ${tab === 'display' ? 'active' : ''}" data-action="etab" data-tab="display">前台展示</button>
        <button class="tab ${tab === 'query' ? 'active' : ''}" data-action="etab" data-tab="query">问数能力</button>
        <button class="tab ${tab === 'insight' ? 'active' : ''}" data-action="etab" data-tab="insight">洞察能力</button>
        <button class="tab ${tab === 'expert' ? 'active' : ''}" data-action="etab" data-tab="expert">分析专家 <span class="cnt">${DB.experts.length}</span></button>
      </div>
      ${tab === 'display' ? expDisplay(agent) : tab === 'query' ? expQuery() : tab === 'insight' ? expInsight() : expExperts()}`;
  }

  function expDisplay(agent) {
    return `
    <div class="card stagger">
      <div class="form-row">
        <div class="form-label">问答头像<small>展示在前台对话中</small></div>
        <div class="form-field" style="display:flex;align-items:center;gap:14px">
          <div class="agent-avatar" style="background:${agent.color};width:52px;height:52px;font-size:25px">${agent.emoji}</div>
          <button class="btn sm" data-action="mock" data-msg="已打开头像配置">更换</button>
          <button class="btn ghost sm" data-action="mock" data-msg="已随机生成头像">随机</button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">名称<small>会作为训练知识给到大模型，请用业务视角命名（≤30 字）</small></div>
        <div class="form-field"><input class="input" value="${agent.name}" /></div>
      </div>
      <div class="form-row">
        <div class="form-label">描述<small>同样作为训练知识。写清「这个智能体能回答哪类问题」</small></div>
        <div class="form-field"><textarea class="input">${agent.desc}</textarea></div>
      </div>
      <div class="form-row">
        <div class="form-label">欢迎语<small>富文本，支持引用用户属性和数据集更新时间</small></div>
        <div class="form-field">
          <div class="callout" style="max-width:460px">👋 早上好，{{用户姓名}}！<br>销售数据已更新至 {{dws_sales_daily.更新时间}}。可以问我各区域、渠道、门店的销售表现。</div>
          <div class="field-hint"><span style="color:var(--primary);cursor:pointer" data-action="mock" data-msg="已打开欢迎语编辑器">编辑欢迎语 →</span></div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-label">开场白推荐<small>新对话时展示的推荐问题（≤20 条）</small></div>
        <div class="form-field">
          <div style="display:flex;flex-wrap:wrap;gap:8px;max-width:560px">
            ${['昨天全国销售额是多少', '本月各大区销售进度', '上周销量 TOP10 商品', '华东区毛利率月度趋势'].map(q => `<span class="chip" style="cursor:default">${q}</span>`).join('')}
            <button class="chip" data-action="mock" data-msg="已打开推荐问题管理">＋ 管理</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;margin-top:12px">
            <button class="switch on" data-action="toggle" data-name="推荐问题智能泛化"></button>
            <span style="font-size:12px;color:var(--text-3)">智能泛化：以配置的问题为示例，由模型结合用户历史与数据结构动态生成 3 条推荐</span>
          </div>
        </div>
      </div>
    </div>`;
  }

  function expQuery() {
    return `
    <div class="card" style="margin-bottom:16px">
      <div class="card-head"><div><div class="card-title">问数分析模式</div><div class="card-sub">速度与准确率的取舍，作用于该智能体的所有前台提问</div></div></div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:18px 20px">
        ${[
          { k: '极速', d: '响应最快。默认只出表格（可在管理中心开启极速可视化）', on: false },
          { k: '标准', d: '速度与质量平衡，推荐默认', on: true },
          { k: '高精度', d: '每次生成多条 SQL 交叉验证，选信心更高者执行。更准，也更慢更贵', on: false },
        ].map(m => `
          <div class="card" style="padding:14px;cursor:pointer;${m.on ? 'border-color:var(--primary);box-shadow:0 0 0 2.5px rgba(22,102,94,.12)' : ''}" data-action="mock" data-msg="问数分析模式已切换为「${m.k}」">
            <div style="font-weight:600;font-size:13.5px;display:flex;align-items:center;gap:8px">${m.k}${m.on ? '<span class="pill ok">当前</span>' : ''}</div>
            <div style="font-size:11.5px;color:var(--text-3);margin-top:6px;line-height:1.6">${m.d}</div>
          </div>`).join('')}
      </div>
    </div>

    <div class="card">
      ${[
        { n: '猜你想问', on: true, why: '回答完成后，按你编写的策略推荐后续问题。例如「用户分析销售数据时，推荐收入、毛利相关指标」。', extra: '<button class="btn sm" data-action="mock" data-msg="已打开推荐策略编辑">编辑推荐策略 →</button>' },
        { n: '问答流程带入用户属性', on: true, why: '提问时把当前用户的区域、门店等属性传给模型。用户问「我的销售额」时自动限定其负责范围，无需显式指定。依赖 BI 用户属性配置。', tag: '个性化' },
        { n: '个性化固定回答', on: true, why: '当提问越权（如华东员工问全国数据）时直接返回固定话术，不执行查询。避免空结果或模型自由发挥。需先开启「带入用户属性」。', extra: '<button class="btn sm" data-action="mock" data-msg="已打开话术规则管理">管理话术规则（2 条）→</button>' },
        { n: '样例匹配', on: true, why: '提问与样例集高度相似时优先复用样例 SQL（或仅改写筛选条件），比重新生成更稳。' },
        { n: '个性化记忆', on: false, why: '自动记住用户对话中提到的口径偏好，应用于该用户在所有智能体的后续问答。', tag: '跨智能体生效', tagWarn: true },
        { n: '自动数值量程', on: false, why: '按数值大小自动用「万 / 亿」展示。若数据集已做过量程换算请勿开启，否则会出现「2 万万元」。', tag: '谨慎', tagWarn: true },
        { n: '仪表板推荐', on: true, why: '回答后从关联的仪表板中智能推荐至多 3 张相关卡片，引导用户深入探索。仪表板变更后需重新学习。', extra: '<button class="btn sm" data-action="mock" data-msg="已打开仪表板关联管理">管理关联仪表板（6 个）→</button>' },
      ].map(t => `
        <div class="toggle-row">
          <div class="toggle-info">
            <div class="toggle-name">${t.n}${t.tag ? ` <span class="tip-tag ${t.tagWarn ? 'warn' : ''}">${t.tag}</span>` : ''}</div>
            <div class="toggle-why">${t.why}</div>
            ${t.extra ? `<div class="toggle-extra">${t.extra}</div>` : ''}
          </div>
          <button class="switch ${t.on ? 'on' : ''}" data-action="toggle" data-name="${t.n}"></button>
        </div>`).join('')}
    </div>`;
  }

  function expInsight() {
    return `
    <div class="card">
      <div class="toggle-row" style="background:var(--bg-grey)">
        <div class="toggle-info">
          <div class="toggle-name" style="font-size:14.5px">洞察分析（L2）</div>
          <div class="toggle-why">开启后，用户可选择本智能体做深度洞察：模型基于知识库自主调用工具查询、分析并生成完整报告。以下能力均在洞察开启后生效。</div>
        </div>
        <button class="switch on" data-action="toggle" data-name="洞察分析"></button>
      </div>
      ${[
        { n: '规划模式', on: true, why: '回答前先与用户确认分析思路，确认后才生成报告。复杂分析建议开启，避免长时间跑偏。' },
        { n: '联网搜索', on: false, why: '允许获取公开的互联网信息辅助分析（如行业动态）。涉敏环境建议关闭。', tag: '外部数据', tagWarn: true },
        { n: '文件上传', on: true, why: '允许用户上传 Excel / CSV 作为洞察分析的补充输入。' },
        { n: '数据引用依据', on: true, why: '报告的关键结论旁展示数据角标，点击可溯源到具体查询。建议保持开启，这是洞察报告可信度的基础。' },
      ].map(t => `
        <div class="toggle-row">
          <div class="toggle-info">
            <div class="toggle-name">${t.n}${t.tag ? ` <span class="tip-tag ${t.tagWarn ? 'warn' : ''}">${t.tag}</span>` : ''}</div>
            <div class="toggle-why">${t.why}</div>
          </div>
          <button class="switch ${t.on ? 'on' : ''}" data-action="toggle" data-name="${t.n}"></button>
        </div>`).join('')}
    </div>`;
  }

  function expExperts() {
    return `
    <div style="display:flex;justify-content:flex-end;margin-bottom:14px">
      <button class="btn primary" data-action="mock" data-msg="已打开新建分析专家">＋ 添加专家</button>
    </div>
    <div class="pref-grid stagger">
      ${DB.experts.map(e => `
      <div class="card pref-card">
        <div class="pref-head">
          <div class="pref-ico" style="font-size:17px">${e.emoji}</div>
          <div style="flex:1"><div class="pref-name">${e.name}</div><div class="pref-meta">近 30 天被调用 ${e.used30d} 次 · ${e.questions} 条推荐问题</div></div>
          <button class="switch ${e.enabled ? 'on' : ''}" data-action="toggle" data-name="${e.name}" onclick="event.stopPropagation()"></button>
        </div>
        <div class="pref-preview">${e.desc}</div>
        <div style="display:flex;gap:8px;margin-top:12px">
          <button class="btn ghost sm" data-action="mock" data-msg="已打开专家配置">编辑</button>
          <button class="btn ghost sm" data-action="mock" data-msg="已进入专家测试">保存并测试</button>
        </div>
      </div>`).join('')}
    </div>
    <div class="callout" style="margin-top:16px">💡 分析专家 = 洞察场景的<b>标准化分析模板</b>：预定义分析思路、输出要求与报告大纲，让周报、促销复盘这类周期性分析每次都产出结构一致的报告。订阅推送依赖分析专家，请先在这里创建。</div>`;
  }

  /* ---------- 评测 ---------- */
  function pageEvaluation(agent) {
    const ev = DB.evaluation[agent.id];
    return `
      ${secHead('评测', '上线前的质检关卡：批量跑测试问题 → 系统自动校验 SQL 与数据 → 人工批改。建议准确率 ≥ 90% 再启用。批改产生的正确 SQL 自动沉淀为答案集，错误问题一键进样例集。',
        `<button class="btn" data-action="mock" data-msg="已打开批量导入（Excel 模板）">↥ 批量导入</button>
         <button class="btn" data-action="mock" data-msg="AI 正在结合数据集字段生成测试问题…">✦ AI 生成问题</button>
         ${state.evalRunning
          ? `<span class="progress-inline"><span class="spin">◌</span> 测试中 <span class="pbar"><i style="width:${state.evalProgress}%"></i></span> ${state.evalProgress}%</span>`
          : `<button class="btn primary" data-action="run-eval">▶ 开始测试</button>`}`)}

      ${ev ? `
      <div class="eval-hero stagger">
        <div class="card eval-score">
          <div class="es-num" style="color:${ev.accuracy >= 90 ? 'var(--primary-ink)' : 'var(--amber)'}">${ev.accuracy}<small>%</small></div>
          <div class="es-label">测试准确率 · ${ev.total} 题 · 最近运行 ${ev.lastRun}</div>
          <div class="es-verdict">${ev.accuracy >= 90
            ? '<span class="pill ok">✓ 达到上线标准（≥90%）</span>'
            : '<span class="pill warn">未达上线标准，还差 ' + (90 - ev.accuracy) + ' 个百分点</span>'}</div>
        </div>
        <div class="card eval-breakdown">
          ${ev.breakdown.map(b => `
            <div class="eb-row">
              <span class="eb-l">${b.label}</span>
              <span class="eb-bar"><i style="width:${b.v}%;background:${b.color.replace('var(--viridian)', 'var(--chart)').replace('var(--mist)', 'var(--blue)')}"></i></span>
              <span class="eb-v">${b.v}%</span>
            </div>`).join('')}
          <div style="font-size:11.5px;color:var(--text-3)">带答案集的问题由系统自动比对数据结果判分；无答案集的需要人工批改。</div>
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div class="card-title">测试问题（${ev.questions.length} / ${ev.total}）</div>
          <div class="spacer"></div>
          <select class="select-mini"><option>全部批改结果</option><option>正确</option><option>错误</option><option>待批改</option></select>
          <button class="btn sm" data-action="mock" data-msg="已选中问题重新测试">重测选中</button>
        </div>
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th style="width:34%">测试问题</th><th>来源</th><th>SQL 有效性</th><th>批改结果</th><th>答案集</th><th style="width:130px">操作</th></tr></thead>
          <tbody>
            ${ev.questions.map(q => `
            <tr>
              <td><div style="font-weight:550">${q.q}</div>
                ${q.failWhy ? `<div style="font-size:11.5px;color:var(--red);margin-top:4px;line-height:1.5">↳ ${q.failWhy}</div>` : ''}</td>
              <td><span class="pill plain">${q.src}</span></td>
              <td>${q.sqlOk ? '<span class="pill ok">✓ 可执行</span>' : '<span class="pill err">✕ 执行出错</span>'}</td>
              <td>${q.verdict === 'pass' ? '<span class="pill ok">正确</span>' : q.verdict === 'fail' ? '<span class="pill err">错误</span>' : '<span class="pill warn">待批改</span>'}</td>
              <td>${q.hasAnswer ? '<span class="pill info">已维护</span>' : '<span style="color:var(--text-3);font-size:12px">—</span>'}</td>
              <td><div class="actions">
                <button class="btn ghost sm" data-action="grade" data-q="${q.q}" data-id="${q.id}">批改</button>
                ${q.verdict === 'fail' ? `<button class="btn ghost sm" style="color:var(--primary)" data-action="to-sample" data-q="${q.q}">进样例集</button>` : ''}
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table></div>
      </div>`
      : `<div class="card"><div class="empty">
          <div class="e-ico">✓</div><div class="e-title">还没有测试集</div>
          <div class="e-sub">用「AI 生成问题」基于已关联的数据集快速起步，或下载 Excel 模板批量导入调研收集的真实问题。</div>
          <button class="btn primary" data-action="mock" data-msg="AI 正在生成测试问题…">✦ AI 生成测试问题</button>
        </div></div>`}`;
  }

  /* ---------- 运营 ---------- */
  function pageOps(agent) {
    const tab = state.opsTab;
    return `
      ${secHead('运营', '上线后的日常：看清用户在问什么、哪里出了问题，并把每个 Bad Case 变成知识库的一次进化。',
        `<button class="btn" data-action="mock" data-msg="已导出对话历史（含异常标记）">↧ 导出对话</button>
         <button class="btn" data-action="batch-diag">☍ 批量诊断</button>`)}

      <div class="kpi-strip stagger">
        <div class="kpi"><div class="kpi-label">近 7 天提问次数</div><div class="kpi-value">${agent.questions7d.toLocaleString()}</div><div class="kpi-foot"><span class="up">▲ 12%</span> 较上周</div></div>
        <div class="kpi"><div class="kpi-label">提问人数 / 活跃用户</div><div class="kpi-value">${agent.activeUsers}</div><div class="kpi-foot">覆盖 3 个用户组</div></div>
        <div class="kpi"><div class="kpi-label">问答满意度</div><div class="kpi-value">${agent.satisfy || '—'}<small>%</small></div><div class="kpi-foot">来自前台赞踩反馈</div></div>
        <div class="kpi"><div class="kpi-label">待处理点踩</div><div class="kpi-value" style="color:var(--red)">${DB.conversations.filter(c => c.feedback === 'down' && !c.handled).length}</div><div class="kpi-foot">处理后可标记「已处理 / 无需处理」</div></div>
      </div>

      <div class="tabs">
        <button class="tab ${tab === 'history' ? 'active' : ''}" data-action="otab" data-tab="history">对话历史</button>
        <button class="tab ${tab === 'badcase' ? 'active' : ''}" data-action="otab" data-tab="badcase">待优化队列 <span class="cnt">${DB.conversations.filter(c => (c.feedback === 'down' || c.anomaly) && !c.handled).length}</span></button>
        <button class="tab ${tab === 'subs' ? 'active' : ''}" data-action="otab" data-tab="subs">订阅推送 <span class="cnt">${DB.subscriptions.length}</span></button>
      </div>
      ${tab === 'history' ? opsHistory() : tab === 'badcase' ? opsBadcase() : opsSubs()}`;
  }

  function convRow(c, showHandle) {
    return `
    <tr>
      <td>
        <div style="font-weight:550">${c.q}</div>
        <div class="mono" style="font-size:11px;color:var(--text-3);margin-top:3px">${c.id} · ${c.time} · ${c.user}</div>
        ${c.anomaly ? `<div style="font-size:11.5px;color:var(--red);margin-top:4px">⚠ ${c.anomalyMsg}</div>` : ''}
        ${c.feedbackNote ? `<div style="font-size:11.5px;color:var(--amber);margin-top:4px">💬 用户反馈：${c.feedbackNote}</div>` : ''}
      </td>
      <td><span class="pill ${c.type === '洞察' ? 'info' : 'plain'}">${c.type}</span></td>
      <td>${c.status === 'ok' ? '<span class="pill ok">成功</span>' : '<span class="pill err">失败</span>'}</td>
      <td class="feedback-face">${c.feedback === 'up' ? '👍' : c.feedback === 'down' ? '👎' : '<span style="color:var(--text-3);font-size:12px">—</span>'}</td>
      <td class="num" style="${c.type === '问数' && parseFloat(c.latency) > 30 ? 'color:var(--red)' : ''}">${c.latency}</td>
      <td style="font-size:12px;color:var(--text-3)">${c.expert}</td>
      <td><div class="actions">
        <button class="btn ghost sm" title="回放对话（与前台一致的可视化）" data-action="mock" data-msg="已打开对话回放">▶</button>
        <button class="btn ghost sm" title="查看召回知识：本次发给模型的表知识 / 业务知识 / 样例" data-action="recall-view" data-q="${c.q}">☷</button>
        <button class="btn ghost sm" title="一键诊断" data-action="diagnose" data-id="${c.id}" data-q="${c.q}">☍</button>
        ${showHandle && !c.handled ? `<button class="btn ghost sm" style="color:var(--primary)" title="标记处理结果" data-action="handle-case" data-id="${c.id}">处理</button>` : ''}
      </div></td>
    </tr>`;
  }

  function opsHistory() {
    return `
      <div class="ops-filters">
        <div class="search-inline" style="width:250px"><span class="ico">⌕</span><input placeholder="消息 ID / 对话内容 / 用户名…" /></div>
        <select class="select-mini"><option>全部类型</option><option>问数</option><option>洞察</option><option>归因</option></select>
        <select class="select-mini"><option>全部评价</option><option>👍 赞</option><option>👎 踩</option><option>未评价</option></select>
        <select class="select-mini"><option>全部状态</option><option>成功</option><option>失败</option></select>
        <select class="select-mini"><option>过程异常</option><option>仅看异常</option></select>
        <select class="select-mini"><option>近 7 天</option><option>近 30 天</option><option>自定义</option></select>
      </div>
      <div class="card"><div class="table-wrap"><table class="tbl">
        <thead><tr><th style="width:36%">对话</th><th>类型</th><th>状态</th><th>评价</th><th>耗时</th><th>分析专家</th><th style="width:150px">操作</th></tr></thead>
        <tbody>${DB.conversations.map(c => convRow(c, false)).join('')}</tbody>
      </table></div></div>`;
  }

  function opsBadcase() {
    const cases = DB.conversations.filter(c => (c.feedback === 'down' || c.anomaly) && !c.handled);
    return `
      <div class="callout" style="margin-bottom:14px">
        <b>优化闭环：</b>诊断定位根因 → 修正 SQL 进样例集 / 补充业务知识 → 标记「已处理」→（建议）回归评测。处理完成后，可通知反馈用户重新尝试。
      </div>
      ${cases.length ? `
      <div class="card"><div class="table-wrap"><table class="tbl">
        <thead><tr><th style="width:36%">问题对话</th><th>类型</th><th>状态</th><th>评价</th><th>耗时</th><th>分析专家</th><th style="width:150px">操作</th></tr></thead>
        <tbody>${cases.map(c => convRow(c, true)).join('')}</tbody>
      </table></div></div>`
      : '<div class="card"><div class="empty"><div class="e-ico">☀</div><div class="e-title">待优化队列已清空</div><div class="e-sub">用户点踩与过程异常的对话会自动进入这里。</div></div></div>'}`;
  }

  function opsSubs() {
    return `
      <div style="display:flex;justify-content:flex-end;margin-bottom:14px">
        <button class="btn primary" data-action="mock" data-msg="已打开创建订阅">＋ 创建订阅</button>
      </div>
      <div class="card"><div class="table-wrap"><table class="tbl">
        <thead><tr><th style="width:26%">订阅任务</th><th>分析专家</th><th>触发</th><th>渠道 / 格式</th><th>接收人</th><th>最近发送</th><th>启用</th><th style="width:110px">操作</th></tr></thead>
        <tbody>
          ${DB.subscriptions.map(s => `
          <tr>
            <td style="font-weight:550">${s.name}</td>
            <td style="font-size:12px">${s.expert}</td>
            <td style="font-size:12px">${s.trigger}</td>
            <td><span class="pill plain">${s.channel}</span> <span class="pill plain">${s.format}</span></td>
            <td style="font-size:12px;color:var(--text-3)">${s.receivers}</td>
            <td style="font-size:12px;color:${s.lastSent.includes('成功') ? 'var(--green)' : 'var(--text-3)'}">${s.lastSent}</td>
            <td><button class="switch ${s.enabled ? 'on' : ''}" data-action="toggle" data-name="订阅 ${s.name}"></button></td>
            <td><div class="actions">
              <button class="btn ghost sm" data-action="mock" data-msg="已手动触发一次推送">⚡</button>
              <button class="btn ghost sm" data-action="mock" data-msg="已打开发送历史">☰</button>
              <button class="btn ghost sm" data-action="mock" data-msg="已打开订阅编辑">✎</button>
            </div></td>
          </tr>`).join('')}
        </tbody>
      </table></div></div>
      <div class="callout" style="margin-top:14px">💡 订阅按「触发问题」定期向分析专家提问并推送结果。命名建议：<b>业务场景_数据内容_周期</b>。生成者权限决定报告的数据范围——选择用户组时请确认已授予本智能体权限。</div>`;
  }

  /* ---------- 设置 ---------- */
  function pageSettings(agent) {
    return `
      ${secHead('设置', '模型、权限与生命周期管理。')}
      <div class="settings-grid stagger">

        <div class="card">
          <div class="card-head">
            <div><div class="card-title">大模型配置</div><div class="card-sub">默认继承管理中心的域级策略；仅当本智能体有特殊需求（成本、精度、数据敏感）时才单独指定</div></div>
            <span class="inherit-tag spacer" style="margin-left:auto">当前：继承域默认</span>
          </div>
          <div class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-name">自定义模型服务</div>
              <div class="toggle-why">开启后可为语义处理 / 数据处理 / 推理分析分别指定模型（候选来自管理中心已接入的模型池）。典型场景：高频智能体换性价比模型省成本、关键智能体换旗舰模型提质量、敏感数据智能体锁定私有化模型。</div>
              <div class="toggle-extra">
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;max-width:640px;opacity:.5;pointer-events:none">
                  ${DB.modelStrategy.map(s => `
                    <div><div style="font-size:11.5px;color:var(--text-3);margin-bottom:5px">${s.name}</div>
                    <select class="select"><option>${s.current}（域默认）</option></select></div>`).join('')}
                </div>
                <div class="field-hint">切换模型后，建议通过前台问答或洞察验证效果。</div>
              </div>
            </div>
            <button class="switch" data-action="toggle-llm"></button>
          </div>
        </div>

        <div class="card">
          <div class="card-head">
            <div><div class="card-title">使用权限</div><div class="card-sub">所有者可管理配置并提问；使用者仅可在前台提问。上线后业务用户能否看到该智能体由这里决定</div></div>
            <button class="btn sm spacer" style="margin-left:auto" data-action="mock" data-msg="已打开添加用户/用户组">＋ 添加用户/用户组</button>
          </div>
          <div class="table-wrap"><table class="tbl">
            <thead><tr><th>用户 / 用户组</th><th>类型</th><th>权限</th><th style="width:90px">操作</th></tr></thead>
            <tbody>
              ${DB.members.map(mb => `
              <tr>
                <td style="font-weight:550">${mb.name} <span style="color:var(--text-3);font-weight:400;font-size:12px">${mb.note}</span></td>
                <td><span class="pill plain">${mb.type === 'group' ? '用户组' : '用户'}</span></td>
                <td>${mb.role === 'owner' ? '<span class="pill info">所有者</span>' : '<span class="pill plain">使用者</span>'}</td>
                <td><div class="actions"><button class="btn ghost sm" style="color:var(--red)" data-action="mock" data-msg="已移除该成员">移除</button></div></td>
              </tr>`).join('')}
            </tbody>
          </table></div>
        </div>

        <div class="card">
          <div class="card-head"><div><div class="card-title">迁移与复制</div><div class="card-sub">完整配置（知识库、禁用字段、枚举值、专家、订阅、开关）随导出文件走，用于测试环境 → 生产环境迁移</div></div></div>
          <div style="display:flex;gap:10px;padding:18px 20px">
            <button class="btn" data-action="mock" data-msg="已导出智能体配置文件">↧ 导出配置</button>
            <button class="btn" data-action="mock" data-msg="已打开导入">↥ 导入配置</button>
            <button class="btn" data-action="mock" data-msg="已基于当前配置创建副本「${agent.name} 副本」">⧉ 另存为新智能体</button>
          </div>
        </div>

        <div class="card danger-zone">
          <div class="card-head"><div class="card-title" style="color:var(--red)">危险操作</div></div>
          <div class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-name">${agent.status === 'live' ? '停用智能体' : '启用智能体'}</div>
              <div class="toggle-why">${agent.status === 'live' ? '停用后业务用户将无法在前台看到并提问该智能体，配置与知识全部保留。' : '启用后，有权限的业务用户即可在前台提问。建议测试准确率 ≥90% 再启用。'}</div>
            </div>
            <button class="btn sm ${agent.status === 'live' ? 'danger' : 'primary'}" data-action="toggle-agent-status" data-id="${agent.id}">${agent.status === 'live' ? '停用' : '启用'}</button>
          </div>
          <div class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-name">删除智能体</div>
              <div class="toggle-why">不可恢复。将删除全部知识、样例、测试集与对话历史。</div>
            </div>
            <button class="btn sm danger" data-action="delete-agent" data-id="${agent.id}">删除</button>
          </div>
        </div>
      </div>`;
  }

  /* ============================================================
     管理中心（顶部横向页签，与现有产品一致）
     ============================================================ */
  const CENTER_TABS = [
    { key: 'quota', name: '用量管控' },
    { key: 'features', name: '开关功能设置' },
    { key: 'prefs', name: '企业通用偏好' },
    { key: 'trace', name: 'Trace 导出' },
    { key: 'models', name: '大模型配置' },
  ];

  function renderCenter(page) {
    const pages = { models: centerModels, quota: centerQuota, prefs: centerPrefs, features: centerFeatures, trace: centerTrace };
    const content = (pages[page] || centerModels)();
    main.innerHTML = `
      <div class="center-tabs">
        <span class="center-back" data-action="goto" data-href="#/agents">‹</span>
        ${CENTER_TABS.map(t => `
          <button class="center-tab ${page === t.key ? 'active' : ''}" data-action="goto" data-href="#/center/${t.key}">${t.name}</button>`).join('')}
      </div>
      <div class="main-inner">${content}</div>`;
  }

  function centerModels() {
    return `
      ${secHead('大模型配置', '维护整个域可用的模型池，并为三类任务指定默认模型。所有智能体默认继承这里的策略——单个智能体可在其「设置」中覆盖。')}

      <div class="section-label">任务模型策略（域默认）</div>
      <div class="card stagger">
        ${DB.modelStrategy.map(s => `
        <div class="strategy-row">
          <div><div class="strategy-name">${s.name}</div><span class="strategy-scene">${s.scene}</span></div>
          <div class="strategy-desc">${s.desc}</div>
          <select class="select" data-action-change="strategy" data-name="${s.name}">
            ${[...DB.models.builtin, ...DB.models.thirdparty.filter(m => m.status === 'ok')].map(m =>
              `<option ${m.alias === s.current ? 'selected' : ''}>${m.alias}</option>`).join('')}
          </select>
        </div>`).join('')}
      </div>

      <div class="section-label">内置模型服务（观远提供）</div>
      <div class="model-grid stagger">
        ${DB.models.builtin.map(m => modelCard(m, '观远')).join('')}
        <div class="agent-card new-card" style="min-height:126px" data-action="mock" data-msg="已打开添加观远大模型（需测试连接通过后才能保存）"><span class="plus">＋</span><span>添加模型</span></div>
      </div>

      <div class="section-label">第三方模型服务（自有接入）</div>
      <div class="model-grid stagger">
        ${DB.models.thirdparty.map(m => modelCard(m, '第三方')).join('')}
        <div class="agent-card new-card" style="min-height:126px" data-action="mock" data-msg="已打开添加第三方模型（需接口地址 + API Key，测试连接通过后才能保存）"><span class="plus">＋</span><span>添加模型</span></div>
      </div>
      <div class="callout" style="margin-top:16px">🔐 添加任何模型都必须先<b>测试连接</b>通过（页面显示「完成模型测评」）才能保存，避免把不可用的模型放进池子。温度默认 0.0——BI 场景优先输出稳定性，除非明确需要发散性再调高。</div>`;
  }

  function modelCard(m, provider) {
    return `
    <div class="card model-card">
      <div class="model-provider">${provider}</div>
      <div class="model-name">${m.alias} ${m.status === 'ok' ? '<span class="pill ok">✓ 可用</span>' : `<span class="pill err" title="${m.failMsg}">✕ 连接失败</span>`}</div>
      <div class="model-alias">${m.name}${m.endpoint ? ' · ' + m.endpoint : ''}</div>
      ${m.status !== 'ok' ? `<div style="font-size:11.5px;color:var(--red);margin-top:6px">${m.failMsg}</div>` : ''}
      <div class="model-meta">
        <span>温度 <b>${m.temp}</b></span>
        <span>均耗时 <b>${m.latency}</b></span>
        <span>30 天调用 <b>${m.calls30d}</b></span>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <button class="btn ghost sm" data-action="mock" data-msg="正在测试连接…连接成功 ✓">测试连接</button>
        <button class="btn ghost sm" data-action="mock" data-msg="已打开模型编辑">编辑</button>
      </div>
    </div>`;
  }

  function centerQuota() {
    const u = DB.usage;
    const pct = Math.round(u.used / u.total * 100);
    return `
      ${secHead('用量管控', '问量包是全域共享的成本池：前台问答、后台测试（含生成知识）都会消耗。给高频用户组设配额，防止个别场景耗尽全域额度。',
        `<button class="btn" data-action="mock" data-msg="统计周期已切换。注意：切换周期会重置已产生的用量计数">周期：${u.cycle} ⇄</button>
         <button class="btn primary" data-action="mock" data-msg="已打开添加配额规则">＋ 添加规则</button>`)}

      <div class="card usage-hero stagger">
        <div>
          <div class="usage-num">${u.used.toLocaleString()}<small> / ${u.total.toLocaleString()}</small></div>
          <div style="font-size:12px;color:var(--text-3);margin-top:6px">本${u.cycle.replace('每', '')}已用问量 · ${u.resetAt}重置</div>
        </div>
        <div class="usage-bar-big">
          <div class="ub-track"><i style="width:${pct}%"></i></div>
          <div class="ub-legend"><span>已用 ${pct}%</span><span>按当前速度预计月末用至 ~87%</span></div>
        </div>
      </div>

      <div class="section-label">问量规则</div>
      <div class="card">
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th>作用对象</th><th>类型</th><th>${u.cycle}上限</th><th>当前用量</th><th>备注</th><th style="width:90px">操作</th></tr></thead>
          <tbody>
            ${u.rules.map(r => `
            <tr>
              <td style="font-weight:550">${r.target}</td>
              <td><span class="pill plain">${r.type === 'group' ? '用户组' : '用户'}</span></td>
              <td class="num">${r.limit} 次</td>
              <td class="num">${r.used}</td>
              <td style="font-size:12px;color:var(--text-3)">${r.note || '—'}</td>
              <td><div class="actions">
                <button class="btn ghost sm" data-action="mock" data-msg="已打开规则编辑">✎</button>
                <button class="btn ghost sm" style="color:var(--red)" data-action="mock" data-msg="已删除规则">✕</button>
              </div></td>
            </tr>`).join('')}
            <tr><td style="font-weight:550;color:var(--text-3)">其他所有人</td><td><span class="pill plain">默认</span></td><td class="num">无限制</td><td>—</td><td style="font-size:12px;color:var(--text-3)">未命中规则的用户及管理员不受限</td><td></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="callout" style="margin-top:14px">📏 <b>规则生效逻辑：</b>同一用户命中多条规则时按<b>配额最高</b>的一条生效；切换统计周期会重置已产生的用量且不做换算，请在切换后核对各规则数值。</div>`;
  }

  function centerPrefs() {
    return `
      ${secHead('企业通用偏好', '跨智能体复用的知识规则：财年定义、集团口径、合规约束等在这里维护一次，所有智能体统一生效——不必在每个智能体里重复配置。',
        `<button class="btn primary" data-action="mock" data-msg="已打开新建企业偏好">＋ 新建偏好</button>`)}

      <div class="card">
        <div class="table-wrap"><table class="tbl">
          <thead><tr><th style="width:40%">偏好内容</th><th>类型</th><th>开放范围</th><th title="开启后对范围内智能体立即生效；关闭则需各智能体管理员手动引用">默认启用</th><th>更新</th><th style="width:100px">操作</th></tr></thead>
          <tbody>
            ${DB.enterprisePrefs.map(p => `
            <tr>
              <td><div style="line-height:1.6">${p.text}</div><div class="mono" style="font-size:11px;color:var(--text-3);margin-top:4px">${p.id} · ${p.operator}</div></td>
              <td><span class="tag-chip">${p.type}</span></td>
              <td style="font-size:12px">${p.scope}</td>
              <td><button class="switch ${p.enabled ? 'on' : ''}" data-action="toggle" data-name="企业偏好 ${p.id}"></button></td>
              <td style="font-size:12px;color:var(--text-3)">${p.updated}</td>
              <td><div class="actions">
                <button class="btn ghost sm" title="编辑（支持 AI 一键优化）" data-action="mock" data-msg="已打开偏好编辑（含 AI 优化）">✎</button>
                <button class="btn ghost sm" style="color:var(--red)" data-action="mock" data-msg="已删除。引用该偏好的智能体将不再受其影响">✕</button>
              </div></td>
            </tr>`).join('')}
          </tbody>
        </table></div>
      </div>
      <div class="callout" style="margin-top:14px">🔁 <b>两种生效方式：</b>勾选「默认启用」→ 范围内智能体立即应用（智能体管理员可手动禁用）；不勾选 → 仅对范围内可见，由智能体管理员在「知识 · 通用偏好 · 企业偏好引用」中手动开启。</div>`;
  }

  function centerFeatures() {
    return `
      ${secHead('开关功能设置', '作用于整个域所有智能体的功能开关。每一项都注明了它解决的问题与关闭的影响。')}
      ${DB.globalFeatures.map(g => `
        <div class="section-label">${g.group}</div>
        <div class="card" style="margin-bottom:6px">
          ${g.items.map(t => `
          <div class="toggle-row">
            <div class="toggle-info">
              <div class="toggle-name">${t.name}</div>
              <div class="toggle-why">${t.why}</div>
              ${t.extra ? `<div class="toggle-extra"><span style="font-size:12px;color:var(--text-3)">${t.extra} · </span><button class="btn ghost sm" data-action="mock" data-msg="已打开配置">配置</button></div>` : ''}
              ${t.modes ? `<div class="toggle-extra"><select class="select-mini" data-action-change="mode" data-name="${t.name}">${t.modes.map(m => `<option ${m === t.mode ? 'selected' : ''}>${m}</option>`).join('')}</select></div>` : ''}
            </div>
            ${t.on === null
              ? `<div style="display:flex;align-items:center;gap:10px"><span class="pill plain">${t.value}</span><button class="btn ghost sm" data-action="mock" data-msg="已打开编辑">编辑</button></div>`
              : `<button class="switch ${t.on ? 'on' : ''}" data-action="toggle" data-name="${t.name}"></button>`}
          </div>`).join('')}
        </div>`).join('')}`;
  }

  function centerTrace() {
    return `
      ${secHead('Trace 导出', '查询并导出全域用户提问的完整处理链路，用于问题排查、效果分析与审计追溯。<span class="pill warn" style="margin-left:6px">仅私有化部署可用</span>',
        `<button class="btn primary" data-action="mock" data-msg="已导出选中记录的完整处理链路">↧ 导出选中</button>`)}

      <div class="card" style="margin-bottom:16px">
        <div style="display:flex;gap:12px;padding:16px 20px;align-items:flex-end;flex-wrap:wrap">
          <div style="flex:1;min-width:240px">
            <label style="font-size:12px;font-weight:600;display:block;margin-bottom:6px">Trace ID（多个用逗号分隔）</label>
            <input class="input" style="max-width:none" placeholder="TRC-xxxxxx, TRC-xxxxxx" />
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;display:block;margin-bottom:6px">时间范围（最长 3 小时）</label>
            <select class="select" style="width:170px"><option>最近 15 分钟</option><option>最近 30 分钟</option><option selected>最近 1 小时</option><option>最近 3 小时</option></select>
          </div>
          <button class="btn primary" data-action="mock" data-msg="查询完成，命中 4 条记录">查询</button>
          <button class="btn ghost" data-action="mock" data-msg="已重置筛选条件">重置</button>
        </div>
      </div>

      <div class="card"><div class="table-wrap"><table class="tbl">
        <thead><tr><th style="width:34px"><input type="checkbox" /></th><th>Trace ID</th><th>类型</th><th>用户问题</th><th>创建时间</th><th>状态</th><th style="width:90px">操作</th></tr></thead>
        <tbody>
          ${DB.traces.map(t => `
          <tr>
            <td><input type="checkbox" /></td>
            <td class="mono">${t.id}</td>
            <td><span class="pill ${t.type === '洞察' ? 'info' : 'plain'}">${t.type}</span></td>
            <td>${t.q}</td>
            <td class="mono" style="color:var(--text-3)">今天 ${t.time}</td>
            <td>${t.status === 'ok' ? '<span class="pill ok">成功</span>' : '<span class="pill err">失败</span>'}</td>
            <td><div class="actions"><button class="btn ghost sm" data-action="mock" data-msg="已打开完整处理链路（Langfuse）">链路 →</button></div></td>
          </tr>`).join('')}
        </tbody>
      </table></div></div>`;
  }

  /* ============================================================
     抽屉：诊断 / 批改 / 召回知识 / 新建
     ============================================================ */
  function openDiagnosis(id, q) {
    openDrawer(`Bad Case 诊断 · <span class="mono" style="font-size:12px;color:var(--text-3)">${id}</span>`, `
      <div class="diag-step">
        <div class="diag-dot">1</div>
        <div class="diag-content">
          <div class="diag-title">问题对话</div>
          <div class="diag-text">「${q}」— 用户反馈数据有误。以下为本次执行的 SQL：</div>
          <div class="sql-block"><span class="kw">SELECT</span> region, SUM(gross_amount) <span class="kw">AS</span> 毛利
<span class="kw">FROM</span> dws_sales_daily
<span class="kw">WHERE</span> region = '华东' <span class="kw">AND</span> quarter = 'Q2'
<span class="kw">GROUP BY</span> region</div>
        </div>
      </div>
      <div class="diag-step">
        <div class="diag-dot">2</div>
        <div class="diag-content">
          <div class="diag-title">AI 诊断结论</div>
          <div class="diag-text">
            模型将「毛利」映射到了 <span class="mono">gross_amount</span>（含税销售额），而业务口径应为 <span class="mono">net_amount − cost_amount</span>。知识库中「毛利」的计算口径缺失，导致模型按字段名直译。
            <div style="margin-top:8px"><span class="pill err">根因：知识缺失 — 指标口径</span></div>
          </div>
        </div>
      </div>
      <div class="diag-step">
        <div class="diag-dot">3</div>
        <div class="diag-content">
          <div class="diag-title">处理建议</div>
          <div class="diag-text">① 在业务知识中补充「毛利 = 净销售额 − 成本」的计算口径；② 将修正后的 SQL 加入样例集；③ 建议把该问题补充进测试集防止回归。</div>
        </div>
      </div>`, `
      <button class="btn" data-action="mock" data-msg="已复制诊断结果">⧉ 复制诊断</button>
      <button class="btn" data-action="mock" data-msg="已重新诊断">↻ 重新诊断</button>
      <button class="btn" data-action="drawer-then-toast" data-msg="已将修正 SQL 加入样例集，并标记该反馈为「已处理」">✎ 修正并进样例集</button>
      <button class="btn primary" data-action="drawer-then-toast" data-msg="已在业务知识中新建「毛利」计算口径">＋ 补充业务知识</button>`);
  }

  function openGrade(id, q) {
    openDrawer(`批改 · <span class="mono" style="font-size:12px;color:var(--text-3)">${id}</span>`, `
      <div class="fgroup"><label>测试问题</label><div class="callout">${q}</div></div>
      <div class="fgroup"><label>模型生成的 SQL <span class="pill ok" style="margin-left:6px">✓ 可执行</span></label>
        <div class="sql-block"><span class="kw">SELECT</span> channel, SUM(net_amount)/SUM(orders) <span class="kw">AS</span> 客单价
<span class="kw">FROM</span> dws_sales_daily
<span class="kw">WHERE</span> dt <span class="kw">BETWEEN</span> '2026-06-01' <span class="kw">AND</span> '2026-06-30'
<span class="kw">GROUP BY</span> channel</div>
        <div class="fhint">可「复制执行 SQL」到数据库验证；消息 ID 可提供给产研排查。</div>
      </div>
      <div class="fgroup"><label>数据结果（前 3 行）</label>
        <div class="callout mono" style="font-size:12px">线下门店 ¥186.4 ｜ 电商平台 ¥98.2 ｜ 小程序 ¥76.8</div>
      </div>`, `
      <button class="btn" data-action="mock" data-msg="已复制执行 SQL">⧉ 复制 SQL</button>
      <button class="btn" data-action="drawer-then-toast" data-msg="已复制到答案集，请修正后保存">✎ 复制到答案集并编辑</button>
      <button class="btn danger" data-action="drawer-then-toast" data-msg="已标记为错误并添加至样例集">✕ 标错并进样例集</button>
      <button class="btn primary" data-action="drawer-then-toast" data-msg="已标记为正确，SQL 自动录入答案集">✓ 标记为正确</button>`);
  }

  function openRecallView(q) {
    openDrawer('召回知识 · 本次发给模型的内容', `
      <div class="fgroup"><label>用户问题</label><div class="callout">${q}</div></div>
      <div class="section-label">表知识（2 张）</div>
      <div class="callout mono" style="font-size:12px;line-height:1.8">dws_sales_daily（门店销售日汇总，46 字段）<br>dim_store（门店维表，22 字段，含 region 枚举：华东/华南/华北/西南/东北）</div>
      <div class="section-label">业务知识（2 条命中）</div>
      <div class="callout" style="margin-bottom:8px">「GMV」指含退款的成交总额；「净销售额」= GMV − 退款金额 − 优惠券抵扣。 <span style="color:var(--primary);cursor:pointer" data-action="mock" data-msg="已打开知识编辑">编辑</span></div>
      <div class="callout">「大区」指华东、华南、华北、西南、东北五个销售大区，不含线上渠道。 <span style="color:var(--primary);cursor:pointer" data-action="mock" data-msg="已打开知识编辑">编辑</span></div>
      <div class="section-label">样例集（1 条命中）</div>
      <div class="callout">Q:「华东区最近30天每日销售额趋势」→ 历史修正 SQL（S-330）</div>
      <div class="field-hint" style="margin-top:12px">⚠ 此处展示的是<b>当次问答召回时</b>的内容快照。若知识此后被修改，点击「编辑」将显示知识库中的最新版本；已删除的知识其编辑入口会置灰。</div>`,
      `<button class="btn primary" data-action="close-drawer-btn">知道了</button>`);
  }

  function openNewAgent() {
    openModal('新建智能体', `
      <div class="fgroup">
        <label>名称 <em>*</em></label>
        <input class="input" style="max-width:none" placeholder="例：零售销售分析" />
        <div class="fhint">名称会作为训练知识给到大模型——用业务视角概括这个智能体「管什么数据、答什么问题」，最多 30 字。</div>
      </div>
      <div class="fgroup">
        <label>描述</label>
        <textarea class="input" style="max-width:none" placeholder="帮助业务用户了解这个智能体能解决哪些问题；同样作为训练知识。"></textarea>
      </div>
      <div class="fgroup">
        <label>关联数据集</label>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="chip" data-action="mock" data-msg="已打开数据集选择">＋ 选择数据集</button>
        </div>
        <div class="fhint">💡 <b>建议先从单表开始</b>：单表问答准确率达到 80% 后再扩展其他表。支持抽取数据集与 MySQL / StarRocks / Doris 等直连库。</div>
      </div>
      <div class="fgroup">
        <label>创建方式</label>
        <div style="display:flex;gap:10px">
          <div class="card" style="flex:1;padding:13px;cursor:pointer;border-color:var(--primary);box-shadow:0 0 0 2.5px rgba(22,102,94,.1)">
            <div style="font-weight:600;font-size:13px">直接新建</div>
            <div style="font-size:11.5px;color:var(--text-3);margin-top:4px">知识库后续在「知识」页补充</div>
          </div>
          <div class="card" style="flex:1;padding:13px;cursor:pointer">
            <div style="font-weight:600;font-size:13px">下一步：配置知识</div>
            <div style="font-size:11.5px;color:var(--text-3);margin-top:4px">知识已准备好，创建时一并导入</div>
          </div>
        </div>
      </div>`, `
      <button class="btn ghost" data-action="close-modal">取消</button>
      <button class="btn primary" data-action="modal-then-toast" data-msg="智能体已创建，进入详情完成配置与评测后再启用">创建</button>`);
  }

  /* ============================================================
     事件委托
     ============================================================ */
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const act = el.dataset.action;

    switch (act) {
      case 'list-tab': state.listTab = el.dataset.tab; renderAgentList(); break;
      case 'open-agent': location.hash = `#/agent/${el.dataset.id}/overview`; break;
      case 'new-agent': openNewAgent(); break;
      case 'goto': location.hash = el.dataset.href; break;
      case 'test-chat': toast('已在新窗口打开前台试问', '⌲'); break;

      case 'ktab': state.knowledgeTab = el.dataset.tab; render(); break;
      case 'etab': state.expTab = el.dataset.tab; render(); break;
      case 'otab': state.opsTab = el.dataset.tab; render(); break;

      case 'toggle': {
        el.classList.toggle('on');
        toast(`「${el.dataset.name}」已${el.classList.contains('on') ? '开启' : '关闭'}`);
        break;
      }
      case 'toggle-llm': {
        el.classList.toggle('on');
        const grid = el.closest('.toggle-row').querySelector('.toggle-extra > div');
        const on = el.classList.contains('on');
        grid.style.opacity = on ? '1' : '.5';
        grid.style.pointerEvents = on ? 'auto' : 'none';
        toast(on ? '已开启自定义模型服务，可分别指定三类模型' : '已恢复继承域默认策略');
        break;
      }
      case 'toggle-agent-status': {
        const agent = DB.agents.find(a => a.id === el.dataset.id);
        if (agent.status === 'live') { agent.status = 'off'; toast(`「${agent.name}」已停用，前台不再可见`, '◌'); }
        else {
          if (agent.accuracy != null && agent.accuracy < 90) toast(`已启用「${agent.name}」。注意：测试准确率 ${agent.accuracy}% 未达建议标准 90%`, '⚠');
          else toast(`「${agent.name}」已启用，有权限的用户现在可以提问`, '✓');
          agent.status = 'live';
        }
        render(); break;
      }
      case 'delete-agent': {
        openModal('确认删除？', `<p style="font-size:13px;line-height:1.7;color:var(--text-2)">删除后不可恢复，将同时删除全部知识、样例、测试集与对话历史。<br>如只是暂时下线，请使用「停用」。</p>`,
          `<button class="btn ghost" data-action="close-modal">取消</button><button class="btn danger" data-action="modal-then-toast" data-msg="已删除（演示环境不实际删除）">确认删除</button>`);
        break;
      }

      case 'inbox': {
        const target = el.dataset.target;
        if (target === 'badcase') { state.opsTab = 'badcase'; location.hash = `#/agent/${el.dataset.id}/ops`; render(); }
        else if (target === 'knowledge') { state.knowledgeTab = 'sample'; location.hash = `#/agent/${el.dataset.id}/knowledge`; render(); }
        else if (target === 'ops') { state.opsTab = 'history'; location.hash = `#/agent/${el.dataset.id}/ops`; render(); }
        else location.hash = `#/agent/${el.dataset.id}/${target}`;
        break;
      }

      case 'relearn': toast(`已触发「${el.dataset.ds}」重新学习，可在学习历史中查看进度`, '♺'); break;
      case 'learn-all': toast('已触发全部数据集重新学习（耗时较长，存在额外模型调用开销）', '♺'); break;
      case 'add-dataset': toast('已打开添加数据集（名称含特殊字符的数据集无法加入）', '＋'); break;
      case 'switch-ds': toast(`已打开「${el.dataset.ds}」切换向导：确认字段映射后，样例集与答案集会自动同步替换`, '⇄'); break;
      case 'remove-ds': toast('移除数据集需二次确认（演示环境不实际删除）', '✕'); break;
      case 'field-config': {
        openDrawer(`字段学习配置 · ${el.dataset.ds}`, `
          <p style="font-size:12.5px;color:var(--text-2);line-height:1.7;margin-bottom:16px">勾选「学习枚举值」让模型认识字段的具体取值（如大区名称）；勾选「禁用」的字段不会被模型使用——用于排除无关字段的干扰，或保护敏感字段不被查询。</p>
          <table class="tbl" style="border:1px solid var(--border);border-radius:8px;overflow:hidden">
            <thead><tr><th>字段</th><th>类型</th><th>学习枚举值</th><th>禁用</th></tr></thead>
            <tbody>
              ${[['region', '大区', 'string', true, false], ['store_name', '门店名称', 'string', true, false], ['net_amount', '净销售额', 'double', false, false], ['customer_phone', '客户手机号', 'string', false, true], ['remark', '备注', 'string', false, true]].map(([f, l, t, learn, dis]) => `
              <tr>
                <td><div style="font-weight:550">${l}</div><div class="mono" style="font-size:11px;color:var(--text-3)">${f}</div></td>
                <td><span class="pill plain">${t}</span></td>
                <td><input type="checkbox" ${learn ? 'checked' : ''} ${t !== 'string' ? 'disabled' : ''} /></td>
                <td><input type="checkbox" ${dis ? 'checked' : ''} /></td>
              </tr>`).join('')}
            </tbody>
          </table>`, `
          <button class="btn ghost" data-action="close-drawer-btn">取消</button>
          <button class="btn primary" data-action="drawer-then-toast" data-msg="字段配置已保存，将在下次学习时生效">保存</button>`);
        break;
      }
      case 'table-relation': toast('已打开表关系图（图形化定义 JOIN 关系）', '▤'); break;

      case 'new-knowledge': {
        const t = state.knowledgeTab;
        if (t === 'sample') openDrawer('新建样例', `
          <div class="fgroup"><label>问题描述 <em>*</em></label><input class="input" style="max-width:none" placeholder="用户会怎么问这个问题" /></div>
          <div class="fgroup"><label>查询 SQL <em>*</em></label><textarea class="input" style="max-width:none;font-family:var(--mono);font-size:12px" placeholder="SELECT ..."></textarea>
          <div class="fhint">保存前会自动预览校验 SQL（抽取数据集为 Spark 语法）；不支持跨数据库混合查询。</div></div>
          <div class="fgroup"><label>标签（≤3 个）</label><div><span class="tag-chip">指标口径</span><span class="tag-chip">行业黑话</span><button class="chip" style="font-size:11px;padding:2px 8px">＋</button></div></div>`,
          `<button class="btn" data-action="mock" data-msg="SQL 校验通过 ✓">预览校验</button><button class="btn primary" data-action="drawer-then-toast" data-msg="样例已保存并触发学习">保存</button>`);
        else openDrawer('新建业务知识', `
          <div class="fgroup"><label>知识描述 <em>*</em></label><textarea class="input" style="max-width:none;min-height:110px" placeholder="例：「毛利」= 净销售额 − 成本。写清楚口径、范围与例外情况。"></textarea>
          <div class="fhint">✦ 保存前可用「AI 优化」对内容做结构化润色，优化结果需手动确认后替换。</div></div>
          <div class="fgroup"><label>标签（≤3 个）</label><div><span class="tag-chip">指标口径</span><span class="tag-chip">行业黑话</span><button class="chip" style="font-size:11px;padding:2px 8px">＋</button></div></div>`,
          `<button class="btn" data-action="mock" data-msg="AI 优化完成，请确认后替换原文">✦ AI 优化</button><button class="btn primary" data-action="drawer-then-toast" data-msg="知识已保存并触发学习">保存</button>`);
        break;
      }
      case 'edit-knowledge': case 'edit-sample': toast('已打开编辑（保存后自动重新学习）', '✎'); break;
      case 'del-knowledge': toast('删除需二次确认（演示环境不实际删除）', '✕'); break;
      case 'export-knowledge': toast('已导出 Excel（可修改后回导，按 ID 覆盖/新增）', '↧'); break;
      case 'import-knowledge': toast('已打开批量导入（下载模板 → 填写 → 上传自动校验）', '↥'); break;
      case 'tag-manage': toast('已打开标签管理（每条知识至多 3 个标签，样例集与业务知识的标签相互独立）', '⌗'); break;
      case 'edit-pref': {
        const p = DB.prefTypes.find(x => x.key === el.dataset.key);
        openDrawer(`${p.ico} ${p.name}`, `
          <p style="font-size:12.5px;color:var(--text-3);line-height:1.7;margin-bottom:14px">${p.why}。</p>
          <textarea class="input" style="max-width:none;min-height:180px">${p.content || ''}</textarea>
          <div class="field-hint">写「规则」，不写「示例对话」；一条规则一行，避免相互矛盾。</div>`, `
          <button class="btn" data-action="mock" data-msg="AI 优化完成，请确认后替换原文">✦ AI 优化</button>
          <button class="btn primary" data-action="drawer-then-toast" data-msg="偏好已保存，当前智能体内生效">保存</button>`);
        break;
      }

      case 'run-eval': {
        state.evalRunning = true; state.evalProgress = 0;
        render();
        const timer = setInterval(() => {
          state.evalProgress += Math.floor(Math.random() * 18) + 8;
          if (state.evalProgress >= 100) {
            state.evalProgress = 100; state.evalRunning = false;
            clearInterval(timer);
            toast('测试完成：120 题 · 准确率 94%（+0）', '✓');
          }
          if (parseRoute().page === 'evaluation') render();
        }, 700);
        break;
      }
      case 'grade': openGrade(el.dataset.id, el.dataset.q); break;
      case 'to-sample': toast(`「${el.dataset.q}」已复制到样例集编辑器，请修正 SQL 后保存`, '✎'); break;

      case 'diagnose': openDiagnosis(el.dataset.id, el.dataset.q); break;
      case 'batch-diag': toast('已进入批量诊断：勾选至多 10 条记录（支持跨页），描述问题现象后开始诊断', '☍'); break;
      case 'recall-view': openRecallView(el.dataset.q); break;
      case 'handle-case': {
        openModal('标记处理结果', `
          <div class="fgroup"><label>处理结果</label>
            <div style="display:flex;gap:10px">
              <div class="card" style="flex:1;padding:13px;cursor:pointer;border-color:var(--primary);box-shadow:0 0 0 2.5px rgba(22,102,94,.1)"><div style="font-weight:600;font-size:13px">已处理</div><div style="font-size:11.5px;color:var(--text-3);margin-top:4px">已完成知识库优化，用户可重新尝试</div></div>
              <div class="card" style="flex:1;padding:13px;cursor:pointer"><div style="font-weight:600;font-size:13px">无需处理</div><div style="font-size:11.5px;color:var(--text-3);margin-top:4px">表现符合预期，不需要优化</div></div>
            </div>
          </div>
          <div class="fgroup"><label>处理说明</label><textarea class="input" style="max-width:none" placeholder="记录做了什么优化，便于团队追溯"></textarea></div>`,
          `<button class="btn ghost" data-action="close-modal">取消</button><button class="btn primary" data-action="modal-then-toast" data-msg="已记录处理结果">提交</button>`);
        break;
      }

      case 'mock': toast(el.dataset.msg); break;
      case 'close-drawer': case 'close-drawer-btn': closeDrawer(); break;
      case 'close-modal': closeModal(); break;
      case 'drawer-then-toast': closeDrawer(); toast(el.dataset.msg); break;
      case 'modal-then-toast': closeModal(); toast(el.dataset.msg); break;
    }
  });

  document.addEventListener('change', (e) => {
    const el = e.target.closest('[data-action-change]');
    if (!el) return;
    if (el.dataset.actionChange === 'strategy') toast(`「${el.dataset.name}」域默认已切换为 ${el.value}。建议前台验证效果`);
    if (el.dataset.actionChange === 'mode') toast(`「${el.dataset.name}」已切换为：${el.value}`);
  });

  window.addEventListener('hashchange', render);
  render();
})();
