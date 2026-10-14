/* ============================================================
   模拟数据 — 覆盖观远 ChatBI「智能体管理」全部功能域
   ============================================================ */
window.DB = {

  /* ---------- 智能体 ---------- */
  agents: [
    {
      id: 'retail', name: '零售销售分析', emoji: '🛍', color: '#e3efeb',
      status: 'live', statusText: '已上线',
      desc: '覆盖全国门店销售、渠道与商品维度的日常问数与洞察分析，支持销售日报、促销复盘等场景。',
      owner: '成员 A', updated: '2 小时前',
      accuracy: 94, questions7d: 1284, pendingFeedback: 3,
      datasets: 4, knowledge: 86, samples: 132, activeUsers: 96,
      satisfy: 91, avgLatency: '6.8s',
      trend: [148, 172, 155, 208, 196, 232, 173],
      health: 92,
      checklist: [
        { name: '关联至少 1 个数据集并完成学习', done: true, hint: '4 个数据集，全部学习成功', go: 'data' },
        { name: '维护业务知识或样例集', done: true, hint: '86 条业务知识 · 132 条样例', go: 'knowledge' },
        { name: '测试准确率达到 90% 以上', done: true, hint: '当前 94%（120 题）', go: 'evaluation' },
        { name: '配置使用权限', done: true, hint: '2 位所有者 · 3 个用户组', go: 'settings' },
      ],
      inbox: [
        { type: 'rust', ico: '👎', title: '3 条点踩反馈待处理', sub: '「华东区 Q2 毛利」等问题被标记为数据有误', time: '今天', action: 'badcase' },
        { type: 'amber', ico: '⚠', title: '1 条样例 SQL 校验失败', sub: '数据集字段变更导致「渠道月度对比」样例失效', time: '昨天', action: 'knowledge' },
        { type: 'mist', ico: '🕐', title: '2 条对话耗时超过 30s', sub: '建议检查涉及的多表关联查询', time: '3 天前', action: 'ops' },
      ],
    },
    {
      id: 'supply', name: '供应链库存助手', emoji: '📦', color: '#e6eef4',
      status: 'testing', statusText: '测试中',
      desc: '面向供应链团队的库存周转、缺货预警与补货建议问答。',
      owner: '成员 B', updated: '昨天',
      accuracy: 82, questions7d: 0, pendingFeedback: 0,
      datasets: 2, knowledge: 24, samples: 41, activeUsers: 0,
      satisfy: null, avgLatency: null,
      trend: [0,0,0,0,0,0,0],
      health: 58,
      checklist: [
        { name: '关联至少 1 个数据集并完成学习', done: true, hint: '2 个数据集，全部学习成功', go: 'data' },
        { name: '维护业务知识或样例集', done: true, hint: '24 条业务知识 · 41 条样例', go: 'knowledge' },
        { name: '测试准确率达到 90% 以上', done: false, hint: '当前 82%（68 题）— 还差 8 个百分点', go: 'evaluation' },
        { name: '配置使用权限', done: false, hint: '尚未添加使用者', go: 'settings' },
      ],
      inbox: [
        { type: 'amber', ico: '🎯', title: '测试准确率未达标', sub: '12 道测试题批改为错误，集中在「库龄分层」口径', time: '昨天', action: 'evaluation' },
      ],
    },
    {
      id: 'store', name: '门店巡检助手', emoji: '🏪', color: '#f8efdc',
      status: 'live', statusText: '已上线',
      desc: '支持拍照上传货架照片识别商品，结合门店数据做巡店分析。',
      owner: '成员 C', updated: '3 天前',
      accuracy: 92, questions7d: 436, pendingFeedback: 1,
      datasets: 3, knowledge: 52, samples: 67, activeUsers: 41,
      satisfy: 88, avgLatency: '8.2s',
      trend: [52, 61, 48, 75, 66, 82, 52],
      health: 86,
      checklist: [
        { name: '关联至少 1 个数据集并完成学习', done: true, hint: '3 个数据集，全部学习成功', go: 'data' },
        { name: '维护业务知识或样例集', done: true, hint: '52 条业务知识 · 67 条样例', go: 'knowledge' },
        { name: '测试准确率达到 90% 以上', done: true, hint: '当前 92%（80 题）', go: 'evaluation' },
        { name: '配置使用权限', done: true, hint: '1 位所有者 · 2 个用户组', go: 'settings' },
      ],
      inbox: [
        { type: 'rust', ico: '👎', title: '1 条点踩反馈待处理', sub: '「昨日缺货 SKU」返回数据为空', time: '今天', action: 'badcase' },
      ],
    },
    {
      id: 'finance', name: '财务费用分析', emoji: '🧾', color: '#f9e8e2',
      status: 'draft', statusText: '草稿',
      desc: '费用科目、预算执行率相关的财务问数（建设中）。',
      owner: '成员 A', updated: '1 周前',
      accuracy: null, questions7d: 0, pendingFeedback: 0,
      datasets: 1, knowledge: 3, samples: 0, activeUsers: 0,
      satisfy: null, avgLatency: null,
      trend: [0,0,0,0,0,0,0],
      health: 24,
      checklist: [
        { name: '关联至少 1 个数据集并完成学习', done: true, hint: '1 个数据集，学习成功', go: 'data' },
        { name: '维护业务知识或样例集', done: false, hint: '仅 3 条业务知识，建议补充费用口径', go: 'knowledge' },
        { name: '测试准确率达到 90% 以上', done: false, hint: '尚未创建测试集', go: 'evaluation' },
        { name: '配置使用权限', done: false, hint: '尚未添加使用者', go: 'settings' },
      ],
      inbox: [],
    },
    {
      id: 'member', name: '会员运营分析', emoji: '💳', color: '#eeede7',
      status: 'off', statusText: '已停用',
      desc: '会员拉新、复购与生命周期分析。因业务调整暂时下线。',
      owner: '成员 B', updated: '1 个月前',
      accuracy: 89, questions7d: 0, pendingFeedback: 0,
      datasets: 2, knowledge: 31, samples: 48, activeUsers: 0,
      satisfy: 85, avgLatency: '7.1s',
      trend: [0,0,0,0,0,0,0],
      health: 70,
      checklist: [
        { name: '关联至少 1 个数据集并完成学习', done: true, hint: '2 个数据集', go: 'data' },
        { name: '维护业务知识或样例集', done: true, hint: '31 条业务知识 · 48 条样例', go: 'knowledge' },
        { name: '测试准确率达到 90% 以上', done: false, hint: '当前 89%', go: 'evaluation' },
        { name: '配置使用权限', done: true, hint: '1 位所有者 · 1 个用户组', go: 'settings' },
      ],
      inbox: [],
    },
  ],

  /* ---------- 数据集（按智能体） ---------- */
  datasets: {
    retail: [
      { name: 'dws_sales_daily', label: '门店销售日汇总', type: '抽取', rows: '1.2 亿', fields: 46, disabled: 5, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
      { name: 'dim_store', label: '门店维表', type: '抽取', rows: '8,432', fields: 22, disabled: 2, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
      { name: 'dws_channel_month', label: '渠道月度汇总', type: '直连 · StarRocks', rows: '96 万', fields: 31, disabled: 0, learnStatus: 'ok', learnTime: '昨天 14:22', trigger: '手动', quality: 'warn', qualityMsg: '3 个字段缺少注释，可能影响生成准确率' },
      { name: 'dws_promo_effect', label: '促销活动效果', type: '抽取', rows: '210 万', fields: 28, disabled: 1, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
    ],
    supply: [
      { name: 'dws_inventory_daily', label: '库存日快照', type: '抽取', rows: '4,300 万', fields: 38, disabled: 0, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
      { name: 'dim_warehouse', label: '仓库维表', type: '抽取', rows: '126', fields: 14, disabled: 0, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
    ],
    store: [
      { name: 'dws_store_patrol', label: '巡店记录', type: '抽取', rows: '58 万', fields: 26, disabled: 0, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
      { name: 'dws_sales_daily', label: '门店销售日汇总', type: '抽取', rows: '1.2 亿', fields: 46, disabled: 8, learnStatus: 'ok', learnTime: '今天 06:00', trigger: '自动', quality: 'ok' },
      { name: 'dim_sku', label: '商品维表', type: '抽取', rows: '12 万', fields: 30, disabled: 3, learnStatus: 'fail', learnTime: '昨天 06:00', trigger: '自动', quality: 'ok', failMsg: '枚举值学习超时：sku_name 基数过高，建议在字段学习配置中排除' },
    ],
    finance: [
      { name: 'dws_expense_month', label: '费用月度汇总', type: '抽取', rows: '43 万', fields: 24, disabled: 0, learnStatus: 'ok', learnTime: '1 周前', trigger: '手动', quality: 'ok' },
    ],
    member: [
      { name: 'dws_member_lifecycle', label: '会员生命周期', type: '抽取', rows: '890 万', fields: 34, disabled: 0, learnStatus: 'ok', learnTime: '1 个月前', trigger: '手动', quality: 'ok' },
      { name: 'dws_member_trade', label: '会员交易汇总', type: '抽取', rows: '2.1 亿', fields: 41, disabled: 4, learnStatus: 'ok', learnTime: '1 个月前', trigger: '手动', quality: 'ok' },
    ],
  },

  /* ---------- 知识（业务知识 / 样例集） ---------- */
  bizKnowledge: [
    { id: 'K-201', text: '「GMV」指含退款的成交总额；「净销售额」= GMV − 退款金额 − 优惠券抵扣。', tags: ['指标口径'], status: 'ok', recall: 342, enabled: true, updated: '2 天前' },
    { id: 'K-198', text: '「大区」指华东、华南、华北、西南、东北五个销售大区，不含线上渠道。', tags: ['行业黑话'], status: 'ok', recall: 218, enabled: true, updated: '5 天前' },
    { id: 'K-187', text: '促销 ROI = 活动期间增量销售额 ÷ 活动费用；增量销售额以活动前 4 周日均为基线。', tags: ['指标口径', '系统生成'], status: 'ok', recall: 156, enabled: true, updated: '1 周前' },
    { id: 'K-176', text: '门店等级 S/A/B/C 按上一自然年销售额划分，每年 1 月更新。', tags: ['指标口径'], status: 'learning', recall: 89, enabled: true, updated: '刚刚' },
    { id: 'K-152', text: '「同店」指开业满 13 个月且当期正常营业的门店，翻牌店按新店计。', tags: ['指标口径'], status: 'ok', recall: 67, enabled: true, updated: '2 周前' },
    { id: 'K-140', text: '（旧口径，2025 年起废弃）会员销售占比按含税口径计算。', tags: [], status: 'ok', recall: 2, enabled: false, updated: '3 个月前' },
  ],
  samples: [
    { id: 'S-330', q: '华东区最近30天每日销售额趋势', sql: "SELECT dt, SUM(net_amount) FROM dws_sales_daily WHERE region='华东' AND dt >= date_sub(current_date, 30) GROUP BY dt ORDER BY dt", tags: ['系统生成'], status: 'ok', valid: true, recall: 96, enabled: true, updated: '3 天前' },
    { id: 'S-318', q: '各渠道本月与上月销售额对比', sql: 'SELECT channel, ...', tags: ['指标口径'], status: 'ok', valid: false, validMsg: '字段 channel_name 已在数据集中更名，SQL 校验失败', recall: 74, enabled: true, updated: '1 天前' },
    { id: 'S-301', q: 'S级门店今年累计净销售额TOP10', sql: 'SELECT store_name, ...', tags: [], status: 'ok', valid: true, recall: 61, enabled: true, updated: '1 周前' },
    { id: 'S-287', q: '618大促期间促销ROI最高的10个活动', sql: 'SELECT promo_id, ...', tags: ['指标口径'], status: 'ok', valid: true, recall: 43, enabled: true, updated: '2 周前' },
    { id: 'S-270', q: '每个大区上月客单价', sql: 'SELECT region, ...', tags: [], status: 'learning', valid: true, recall: 12, enabled: true, updated: '刚刚' },
  ],

  /* ---------- 通用偏好（7 类） ---------- */
  prefTypes: [
    { key: 'syn', name: '同义词偏好', ico: '🔤', why: '维护业务术语的别名与行业黑话，让模型稳定听懂业务表达', content: '「营收」「流水」「销售」均指净销售额；「爆品」指近 30 天销量 TOP50 SKU。' },
    { key: 'calc', name: '计算口径', ico: '🧮', why: '统一指标的计算逻辑，避免同一指标多种算法', content: '毛利率 = (净销售额 − 成本) ÷ 净销售额；客单价 = 净销售额 ÷ 订单数（剔除 0 元单）。' },
    { key: 'time', name: '时间逻辑', ico: '🗓', why: '规范「最近 7 天」「本月」「同比」等时间表达的理解方式', content: '「最近 N 天」不含当天；「本月」指自然月 1 日至今；同比默认对比去年同期同口径天数。' },
    { key: 'chart', name: '图形展现偏好', ico: '📊', why: '设定默认图表类型、坐标轴与图例规则', content: '趋势类问题默认折线图；对比类默认柱状图且按数值降序；占比类超过 6 项合并为「其他」。' },
    { key: 'summary', name: '数据总结偏好', ico: '📝', why: '定义数据解读的输出风格与关注要点', content: '' },
    { key: 'sql', name: 'SQL 生成偏好', ico: '⌨', why: '约束 SQL 生成规则：别名规范、排序、空值处理等', content: '金额字段统一保留 2 位小数；除法必须防零（NULLIF）；结果默认按主指标降序。' },
    { key: 'custom', name: '自定义偏好', ico: '✳', why: '补充以上类型未覆盖的个性化规则', content: '' },
  ],
  enterprisePrefs: [
    { id: 'EP-12', text: '财年从每年 2 月 1 日开始，「FY25」指 2025-02-01 至 2026-01-31。', type: '时间逻辑', scope: '全部智能体', enabled: true, updated: '1 周前', operator: '成员 A', referenced: true },
    { id: 'EP-09', text: '「集团口径」销售额需剔除内部调拨与员工内购。', type: '计算口径', scope: '指定 3 个智能体', enabled: true, updated: '2 周前', operator: '成员 A', referenced: true },
    { id: 'EP-05', text: '涉及个人薪酬、身份证号的提问一律拒答。', type: '自定义偏好', scope: '全部智能体', enabled: true, updated: '1 个月前', operator: '成员 D', referenced: false },
  ],

  /* ---------- 评测 ---------- */
  evaluation: {
    retail: {
      accuracy: 94, total: 120, passed: 113, failed: 7, lastRun: '昨天 18:40',
      breakdown: [
        { label: 'SQL 可执行', v: 98, color: 'var(--viridian)' },
        { label: '数据结果正确', v: 94, color: 'var(--viridian)' },
        { label: '带答案集比对', v: 91, color: 'var(--mist)' },
      ],
      questions: [
        { id: 'Q-118', q: '华东区本月净销售额是多少', sqlOk: true, verdict: 'pass', hasAnswer: true, src: 'AI 生成' },
        { id: 'Q-117', q: '各渠道 Q2 毛利率对比', sqlOk: true, verdict: 'fail', hasAnswer: true, src: '批量导入', failWhy: '毛利率使用了含税口径，与答案集不一致' },
        { id: 'Q-116', q: 'S级门店同比增长TOP10', sqlOk: true, verdict: 'pass', hasAnswer: true, src: '批量导入' },
        { id: 'Q-115', q: '618期间爆品销量日趋势', sqlOk: false, verdict: 'fail', hasAnswer: false, src: '手动添加', failWhy: 'SQL 有效性校验错误：字段 promo_flag 不存在' },
        { id: 'Q-114', q: '上月客单价最低的5个大区', sqlOk: true, verdict: 'pass', hasAnswer: false, src: 'AI 生成' },
        { id: 'Q-113', q: '今年累计退款率月度趋势', sqlOk: true, verdict: 'pending', hasAnswer: false, src: 'AI 生成' },
      ],
    },
    supply: {
      accuracy: 82, total: 68, passed: 56, failed: 12, lastRun: '昨天 11:20',
      breakdown: [
        { label: 'SQL 可执行', v: 93, color: 'var(--viridian)' },
        { label: '数据结果正确', v: 82, color: 'var(--amber)' },
        { label: '带答案集比对', v: 76, color: 'var(--amber)' },
      ],
      questions: [
        { id: 'Q-68', q: '各仓库当前库存周转天数', sqlOk: true, verdict: 'fail', hasAnswer: true, src: '批量导入', failWhy: '库龄分层口径不一致：模型按 30/60/90 分层，答案集按 30/90/180' },
        { id: 'Q-67', q: '本周缺货SKU数量按品类分布', sqlOk: true, verdict: 'pass', hasAnswer: true, src: '批量导入' },
        { id: 'Q-66', q: '华东仓近30天入库量趋势', sqlOk: true, verdict: 'pass', hasAnswer: false, src: 'AI 生成' },
      ],
    },
  },

  /* ---------- 对话历史 ---------- */
  conversations: [
    { id: 'MSG-8f2a41', time: '今天 14:32', user: '成员 E', type: '问数', q: '华东区 Q2 毛利是多少', status: 'ok', feedback: 'down', feedbackNote: '数据有误：与财报差 3%', anomaly: false, expert: '—', latency: '5.2s', handled: false },
    { id: 'MSG-8f1c02', time: '今天 13:18', user: '成员 F', type: '洞察', q: '分析 5 月华南区销售下滑的原因', status: 'ok', feedback: 'up', anomaly: false, expert: '销售分析专家', latency: '48s', handled: true },
    { id: 'MSG-8ecf77', time: '今天 11:05', user: '成员 E', type: '问数', q: '昨天全国销售额', status: 'ok', feedback: null, anomaly: false, expert: '—', latency: '3.1s', handled: true },
    { id: 'MSG-8e9b13', time: '今天 09:47', user: '成员 G', type: '问数', q: '各渠道上月净销售额与环比', status: 'error', feedback: 'down', feedbackNote: '没有数据', anomaly: true, anomalyMsg: 'SQL 执行超时（>60s），涉及 3 表关联', expert: '—', latency: '61s', handled: false },
    { id: 'MSG-8e5502', time: '昨天 19:22', user: '成员 C', type: '问数', q: '促销 ROI TOP10 活动', status: 'ok', feedback: null, anomaly: false, expert: '—', latency: '7.4s', handled: true },
    { id: 'MSG-8e30d8', time: '昨天 16:50', user: '成员 H', type: '洞察', q: '生成上周销售周报', status: 'ok', feedback: 'up', anomaly: false, expert: '周报专家', latency: '95s', handled: true },
    { id: 'MSG-8dfe21', time: '昨天 15:11', user: '成员 E', type: '问数', q: 'S级门店客单价对比', status: 'ok', feedback: 'down', feedbackNote: '图表不对：希望是柱状图', anomaly: false, expert: '—', latency: '4.9s', handled: false },
    { id: 'MSG-8dca6e', time: '昨天 10:02', user: '成员 I', type: '问数', q: '我负责区域的本月销售进度', status: 'ok', feedback: null, anomaly: false, expert: '—', latency: '5.5s', handled: true },
  ],

  /* ---------- 分析专家 ---------- */
  experts: [
    { id: 'EX-1', emoji: '📈', name: '销售分析专家', desc: '按「整体→区域→品类→单店」四层拆解销售波动，输出归因结论', questions: 8, enabled: true, used30d: 216 },
    { id: 'EX-2', emoji: '📰', name: '周报专家', desc: '按固定大纲生成销售周报：核心指标 → 异动归因 → 下周关注', questions: 5, enabled: true, used30d: 64 },
    { id: 'EX-3', emoji: '🎯', name: '促销复盘专家', desc: '活动 ROI、增量拆解与人群表现的标准化复盘模板', questions: 6, enabled: false, used30d: 0 },
  ],

  /* ---------- 订阅 ---------- */
  subscriptions: [
    { id: 'SUB-1', name: '销售日报_昨日业绩_每日', expert: '销售分析专家', trigger: '每天 08:30', channel: '飞书', format: 'PDF', enabled: true, lastSent: '今天 08:30 · 成功', receivers: '销售管理组（12 人）' },
    { id: 'SUB-2', name: '运营周报_渠道表现_每周', expert: '周报专家', trigger: '每周一 09:00', channel: '邮件', format: 'Word', enabled: true, lastSent: '周一 09:00 · 成功', receivers: '运营周会组（8 人）' },
    { id: 'SUB-3', name: '大促监控_618_限时', expert: '促销复盘专家', trigger: '每天 21:00 · 6.1~6.20 有效', channel: '钉钉', format: 'Markdown', enabled: false, lastSent: '6 月 20 日 · 已过期', receivers: '大促作战室（20 人）' },
  ],

  /* ---------- 权限 ---------- */
  members: [
    { name: '成员 A', type: 'user', role: 'owner', note: '平台管理员' },
    { name: '成员 B', type: 'user', role: 'owner', note: '业务负责人' },
    { name: '销售管理组', type: 'group', role: 'user', note: '12 人' },
    { name: '华东运营组', type: 'group', role: 'user', note: '26 人' },
    { name: '门店店长（全国）', type: 'group', role: 'user', note: '480 人' },
  ],

  /* ---------- 管理中心：模型 ---------- */
  models: {
    builtin: [
      { alias: '观远-语义-Pro', name: 'guan-semantic-pro', temp: 0.0, status: 'ok', latency: '0.8s', calls30d: '4.2 万' },
      { alias: '观远-SQL-Max', name: 'guan-sql-max', temp: 0.0, status: 'ok', latency: '1.6s', calls30d: '3.8 万' },
      { alias: '观远-推理-Ultra', name: 'guan-reasoning-ultra', temp: 0.2, status: 'ok', latency: '4.5s', calls30d: '0.9 万' },
    ],
    thirdparty: [
      { alias: '私有化-DeepSeek-V3', name: 'deepseek-chat', endpoint: 'https://llm.internal.acme.cn/v1', temp: 0.0, status: 'ok', latency: '1.2s', calls30d: '1.1 万' },
      { alias: '备用-Qwen-Max', name: 'qwen-max', endpoint: 'https://dashscope.aliyuncs.com/…', temp: 0.0, status: 'fail', failMsg: 'API Key 已过期，连接测试失败', latency: '—', calls30d: '0' },
    ],
  },
  modelStrategy: [
    { key: 'semantic', name: '语义处理模型', scene: 'L1 问数', desc: '理清模糊需求，提取问题里的核心业务信息：闲聊应答、业务价值抽取、猜你想问。', current: '观远-语义-Pro' },
    { key: 'data', name: '数据处理模型', scene: 'L1/L2 问数', desc: '把业务需求转成数据指令：SQL 生成、知识召回检索、数据集检索。对准确率影响最大。', current: '观远-SQL-Max' },
    { key: 'reasoning', name: '推理分析模型', scene: 'L2 洞察', desc: '承接深度分析：报告大纲推理、洞察内容剖析、完整分析报告生成。', current: '观远-推理-Ultra' },
  ],

  /* ---------- 管理中心：用量 ---------- */
  usage: {
    used: 4859, total: 10000, cycle: '每月', resetAt: '8 月 1 日',
    rules: [
      { target: '门店店长（全国）', type: 'group', limit: 30, used: '人均 11', note: '高频轻量场景' },
      { target: '华东运营组', type: 'group', limit: 100, used: '人均 38', note: '' },
      { target: '实习生-刘承', type: 'user', limit: 20, used: '17', note: '临时账号' },
    ],
  },

  /* ---------- 管理中心：全局功能 ---------- */
  globalFeatures: [
    { group: '问答体验', items: [
      { key: 'voice', name: '语音问答', on: true, why: '允许 PC / 移动端通过语音提问，适合一线门店快速问数', extra: '语音服务商：默认（可切换）' },
      { key: 'interpret', name: '数据智能解读与总结', on: true, why: '将查询结果发送给大模型生成解读。关闭则只展示图表，不产生额外模型调用', mode: '简单数据一句话概括', modes: ['关闭', '简单数据一句话概括', '数据结果全面解读'] },
      { key: 'fastviz', name: '极速模式可视化', on: true, why: '极速模式默认只出表格；开启后按可视化规则出图，兼顾速度与易读性' },
      { key: 'params', name: '分析参数展示', on: true, why: '在结果旁展示模型理解的维度、指标与筛选条件，帮助用户核对口径' },
      { key: 'image', name: '图片上传提问', on: false, why: '支持拍摄商品、货架、编码等图片发起提问，适用于巡店场景' },
    ]},
    { group: '查询与数据', items: [
      { key: 'rowlimit', name: '问数查询行数限制', on: null, value: '1,000 行', why: '限制单次查询返回行数（最大 10 万），防止大结果集拖垮体验与数据库' },
      { key: 'retention', name: '对话查询结果存储天数', on: null, value: '30 天', why: '超期的查询结果将被清空，无法再回看。按合规要求设置' },
      { key: 'sqlfix', name: '查询为空时自动 SQL 修正', on: true, why: '结果为空时自动检查并修正 SQL 后重跑一次，减少「查不到数据」类失败' },
      { key: 'charlimit', name: '数据集特殊字符限制', on: null, value: '32 类字符', why: '限制数据集名称中的特殊字符——它们会显著降低模型生成表名的准确率' },
    ]},
    { group: '分发与协作', items: [
      { key: 'copy', name: '表格内容复制', on: true, why: '关闭后所有端禁止复制表格内容，用于数据防泄露要求较高的场景' },
      { key: 'mail', name: '邮件推送', on: true, why: '问答页面展示邮件推送入口，用户可将结果发送至邮箱' },
      { key: 'todash', name: '问数结果插入仪表板', on: true, why: '允许有权限的用户把问数图表保存到 BI 仪表板，制作个人看板' },
    ]},
  ],

  /* ---------- 管理中心：Trace ---------- */
  traces: [
    { id: 'TRC-c41b09', type: '问数', q: '华东区 Q2 毛利是多少', time: '14:32:08', status: 'ok' },
    { id: 'TRC-c41880', type: '问数', q: '各渠道上月净销售额与环比', time: '14:29:51', status: 'error' },
    { id: 'TRC-c41552', type: '洞察', q: '分析 5 月华南区销售下滑的原因', time: '14:21:17', status: 'ok' },
    { id: 'TRC-c412fe', type: '问数', q: '昨天全国销售额', time: '14:15:40', status: 'ok' },
  ],
};

/* 状态映射 */
window.STATUS_META = {
  live: { text: '已上线', cls: 'live' },
  testing: { text: '测试中', cls: 'testing' },
  draft: { text: '草稿', cls: 'draft' },
  off: { text: '已停用', cls: 'off' },
};
