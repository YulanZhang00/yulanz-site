/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xn="srgb",ga="srgb-linear",_a="linear",Et="srgb";const oo="300 es";function ec(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tc(){const i=Lr("canvas");return i.style.display="block",i}const lo={};function co(...i){const e="THREE."+i.shift();console.log(e,...i)}function ml(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=ml(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ct(...i){i=ml(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ar(...i){const e=i.join(" ");e in lo||(lo[e]=!0,He(...i))}function nc(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ic={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uo=1234567;const Cr=Math.PI/180,Ir=180/Math.PI;function dr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[t&63|128]+an[t>>8&255]+"-"+an[t>>16&255]+an[t>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function As(i,e){return(i%e+e)%e}function rc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ac(i,e,t){return i!==e?(t-i)/(e-i):0}function Pr(i,e,t){return(1-t)*i+t*e}function sc(i,e,t,n){return Pr(i,e,1-Math.exp(-t*n))}function oc(i,e=1){return e-Math.abs(As(i,e*2)-e)}function lc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dc(i,e){return i+Math.random()*(e-i)}function hc(i){return i*(.5-Math.random())}function fc(i){i!==void 0&&(uo=i);let e=uo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pc(i){return i*Cr}function mc(i){return i*Ir}function gc(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _c(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vc(i,e,t,n,r){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),u=s((e+n)/2),h=a((e-n)/2),d=s((e-n)/2),p=a((n-e)/2),v=s((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*p,o*u,o*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Qt={DEG2RAD:Cr,RAD2DEG:Ir,generateUUID:dr,clamp:tt,euclideanModulo:As,mapLinear:rc,inverseLerp:ac,lerp:Pr,damp:sc,pingpong:oc,smoothstep:lc,smootherstep:cc,randInt:uc,randFloat:dc,randFloatSpread:hc,seededRandom:fc,degToRad:pc,radToDeg:mc,isPowerOfTwo:gc,ceilPowerOfTwo:_c,floorPowerOfTwo:xc,setQuaternionFromProperEuler:vc,normalize:un,denormalize:tr};class Oe{static{Oe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ri{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=a[s+0],p=a[s+1],v=a[s+2],y=a[s+3];if(h!==y||c!==d||l!==p||u!==v){let g=c*d+l*p+u*v+h*y;g<0&&(d=-d,p=-p,v=-v,y=-y,g=-g);let f=1-o;if(g<.9995){const A=Math.acos(g),D=Math.sin(A);f=Math.sin(f*A)/D,o=Math.sin(o*A)/D,c=c*f+d*o,l=l*f+p*o,u=u*f+v*o,h=h*f+y*o}else{c=c*f+d*o,l=l*f+p*o,u=u*f+v*o,h=h*f+y*o;const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=a[s],d=a[s+1],p=a[s+2],v=a[s+3];return e[t]=o*v+u*h+c*p-l*d,e[t+1]=c*v+u*d+l*h-o*p,e[t+2]=l*v+u*p+o*d-c*h,e[t+3]=u*v-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(a/2),d=c(n/2),p=c(r/2),v=c(a/2);switch(s){case"XYZ":this._x=d*u*h+l*p*v,this._y=l*p*h-d*u*v,this._z=l*u*v+d*p*h,this._w=l*u*h-d*p*v;break;case"YXZ":this._x=d*u*h+l*p*v,this._y=l*p*h-d*u*v,this._z=l*u*v-d*p*h,this._w=l*u*h+d*p*v;break;case"ZXY":this._x=d*u*h-l*p*v,this._y=l*p*h+d*u*v,this._z=l*u*v+d*p*h,this._w=l*u*h-d*p*v;break;case"ZYX":this._x=d*u*h-l*p*v,this._y=l*p*h+d*u*v,this._z=l*u*v-d*p*h,this._w=l*u*h+d*p*v;break;case"YZX":this._x=d*u*h+l*p*v,this._y=l*p*h+d*u*v,this._z=l*u*v-d*p*h,this._w=l*u*h-d*p*v;break;case"XZY":this._x=d*u*h-l*p*v,this._y=l*p*h-d*u*v,this._z=l*u*v+d*p*h,this._w=l*u*h+d*p*v;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+r*l-a*c,this._y=r*u+s*c+a*o-n*l,this._z=a*u+s*l+n*c-r*o,this._w=s*u-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+a*t,this._w=this._w*c+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{static{z.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),u=2*(o*t-a*r),h=2*(a*n-s*t);return this.x=t+c*l+s*h-o*u,this.y=n+c*u+o*l-a*h,this.z=r+c*h+a*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ha=new z,ho=new ri;class Xe{static{Xe.prototype.isMatrix3=!0}constructor(e,t,n,r,a,s,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],v=n[8],y=r[0],g=r[3],f=r[6],A=r[1],D=r[4],E=r[7],M=r[2],S=r[5],w=r[8];return a[0]=s*y+o*A+c*M,a[3]=s*g+o*D+c*S,a[6]=s*f+o*E+c*w,a[1]=l*y+u*A+h*M,a[4]=l*g+u*D+h*S,a[7]=l*f+u*E+h*w,a[2]=d*y+p*A+v*M,a[5]=d*g+p*D+v*S,a[8]=d*f+p*E+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*a*u+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*s-o*l,d=o*c-u*a,p=l*a-s*c,v=t*h+n*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=h*y,e[1]=(r*l-u*n)*y,e[2]=(o*n-r*s)*y,e[3]=d*y,e[4]=(u*t-r*c)*y,e[5]=(r*a-o*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Va.makeScale(e,t)),this}rotate(e){return ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Xe,fo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),po=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sc(){const i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===Et&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Et&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?_a:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ar("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ar("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ga]:{primaries:e,whitePoint:n,transfer:_a,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const rt=Sc();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class Mc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zi===void 0&&(zi=Lr("canvas")),zi.width=e.width,zi.height=e.height;const r=zi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ai(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ec=0;class ws{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ka(r[s].image)):a.push(ka(r[s]))}else a=ka(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let yc=0;const Wa=new z;class en extends Di{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=1001,r=1001,a=1006,s=1008,o=1023,c=1009,l=en.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=dr(),this.name="",this.source=new ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=300;en.DEFAULT_ANISOTROPY=1;class Ut{static{Ut.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],v=c[9],y=c[2],g=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(l+1)/2,E=(p+1)/2,M=(f+1)/2,S=(u+d)/4,w=(h+y)/4,_=(v+g)/4;return D>E&&D>M?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=S/n,a=w/n):E>M?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=S/r,a=_/r):M<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(M),n=w/a,r=_/a),this.set(n,r,a,t),this}let A=Math.sqrt((g-v)*(g-v)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(h-y)/A,this.z=(d-u)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tc extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new en(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ws(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Tc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bc extends en{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ft{static{Ft.prototype.isMatrix4=!0}constructor(e,t,n,r,a,s,o,c,l,u,h,d,p,v,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,u,h,d,p,v,y,g)}set(e,t,n,r,a,s,o,c,l,u,h,d,p,v,y,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=y,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Hi.setFromMatrixColumn(e,0).length(),a=1/Hi.setFromMatrixColumn(e,1).length(),s=1/Hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*u,p=s*h,v=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+v*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=v+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,v=l*u,y=l*h;t[0]=d+y*o,t[4]=v*o-p,t[8]=s*l,t[1]=s*h,t[5]=s*u,t[9]=-o,t[2]=p*o-v,t[6]=y+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,v=l*u,y=l*h;t[0]=d-y*o,t[4]=-s*h,t[8]=v+p*o,t[1]=p+v*o,t[5]=s*u,t[9]=y-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,p=s*h,v=o*u,y=o*h;t[0]=c*u,t[4]=v*l-p,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=p*l-v,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,v=o*c,y=o*l;t[0]=c*u,t[4]=y-d*h,t[8]=v*h+p,t[1]=h,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+v,t[10]=d-y*h}else if(e.order==="XZY"){const d=s*c,p=s*l,v=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=s*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ac,e,wc)}lookAt(e,t,n){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),ui.crossVectors(n,En),ui.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ui.crossVectors(n,En)),ui.normalize(),Yr.crossVectors(En,ui),r[0]=ui.x,r[4]=Yr.x,r[8]=En.x,r[1]=ui.y,r[5]=Yr.y,r[9]=En.y,r[2]=ui.z,r[6]=Yr.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],v=n[2],y=n[6],g=n[10],f=n[14],A=n[3],D=n[7],E=n[11],M=n[15],S=r[0],w=r[4],_=r[8],T=r[12],P=r[1],I=r[5],B=r[9],N=r[13],F=r[2],k=r[6],Q=r[10],q=r[14],ae=r[3],K=r[7],ne=r[11],ie=r[15];return a[0]=s*S+o*P+c*F+l*ae,a[4]=s*w+o*I+c*k+l*K,a[8]=s*_+o*B+c*Q+l*ne,a[12]=s*T+o*N+c*q+l*ie,a[1]=u*S+h*P+d*F+p*ae,a[5]=u*w+h*I+d*k+p*K,a[9]=u*_+h*B+d*Q+p*ne,a[13]=u*T+h*N+d*q+p*ie,a[2]=v*S+y*P+g*F+f*ae,a[6]=v*w+y*I+g*k+f*K,a[10]=v*_+y*B+g*Q+f*ne,a[14]=v*T+y*N+g*q+f*ie,a[3]=A*S+D*P+E*F+M*ae,a[7]=A*w+D*I+E*k+M*K,a[11]=A*_+D*B+E*Q+M*ne,a[15]=A*T+D*N+E*q+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],v=e[3],y=e[7],g=e[11],f=e[15],A=c*p-l*d,D=o*p-l*h,E=o*d-c*h,M=s*p-l*u,S=s*d-c*u,w=s*h-o*u;return t*(y*A-g*D+f*E)-n*(v*A-g*M+f*S)+r*(v*D-y*M+f*w)-a*(v*E-y*S+g*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],s=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(s*u-o*l)-n*(a*u-o*c)+r*(a*l-s*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],v=e[12],y=e[13],g=e[14],f=e[15],A=t*o-n*s,D=t*c-r*s,E=t*l-a*s,M=n*c-r*o,S=n*l-a*o,w=r*l-a*c,_=u*y-h*v,T=u*g-d*v,P=u*f-p*v,I=h*g-d*y,B=h*f-p*y,N=d*f-p*g,F=A*N-D*B+E*I+M*P-S*T+w*_;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/F;return e[0]=(o*N-c*B+l*I)*k,e[1]=(r*B-n*N-a*I)*k,e[2]=(y*w-g*S+f*M)*k,e[3]=(d*S-h*w-p*M)*k,e[4]=(c*P-s*N-l*T)*k,e[5]=(t*N-r*P+a*T)*k,e[6]=(g*E-v*w-f*D)*k,e[7]=(u*w-d*E+p*D)*k,e[8]=(s*B-o*P+l*_)*k,e[9]=(n*P-t*B-a*_)*k,e[10]=(v*S-y*E+f*A)*k,e[11]=(h*E-u*S-p*A)*k,e[12]=(o*T-s*I-c*_)*k,e[13]=(t*I-n*T+r*_)*k,e[14]=(y*D-v*M-g*A)*k,e[15]=(u*M-h*D+d*A)*k,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,u=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*s,0,l*c-r*o,u*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,u=s+s,h=o+o,d=a*l,p=a*u,v=a*h,y=s*u,g=s*h,f=o*h,A=c*l,D=c*u,E=c*h,M=n.x,S=n.y,w=n.z;return r[0]=(1-(y+f))*M,r[1]=(p+E)*M,r[2]=(v-D)*M,r[3]=0,r[4]=(p-E)*S,r[5]=(1-(d+f))*S,r[6]=(g+A)*S,r[7]=0,r[8]=(v+D)*w,r[9]=(g-A)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),c=Hi.set(r[8],r[9],r[10]).length();a<0&&(s=-s),Dn.copy(this);const l=1/s,u=1/o,h=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=s,n.y=o,n.z=c,this}makePerspective(e,t,n,r,a,s,o=2e3,c=!1){const l=this.elements,u=2*a/(t-e),h=2*a/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let v,y;if(c)v=a/(s-a),y=s*a/(s-a);else if(o===2e3)v=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===2001)v=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=2e3,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let v,y;if(c)v=1/(s-a),y=s/(s-a);else if(o===2e3)v=-2/(s-a),y=-(s+a)/(s-a);else if(o===2001)v=-1/(s-a),y=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hi=new z,Dn=new Ft,Ac=new z(0,0,0),wc=new z(1,1,1),ui=new z,Yr=new z,En=new z,mo=new Ft,go=new ri;class qn{constructor(e=0,t=0,n=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Rs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rc=0;const _o=new z,Vi=new ri,Jn=new Ft,$r=new z,Mr=new z,Cc=new z,Pc=new ri,xo=new z(1,0,0),vo=new z(0,1,0),So=new z(0,0,1),Mo={type:"added"},Dc={type:"removed"},ki={type:"childadded",child:null},Xa={type:"childremoved",child:null};class ln extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new z,t=new qn,n=new ri,r=new z(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Xe}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(xo,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(So,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xo,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(So,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Mr,$r,this.up):Jn.lookAt($r,Mr,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Jn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mo),ki.child=e,this.dispatchEvent(ki),ki.child=null):ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dc),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mo),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Cc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Pc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),v=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ln.DEFAULT_UP=new z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lc={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),f=this._getHandJoint(l,y);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,v=.005;l.inputState.pinching&&d>p+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _l={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=As(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Ya(s,a,e+1/3),this.g=Ya(s,a,e),this.b=Ya(s,a,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,t=xn){function n(a){a!==void 0&&parseFloat(a)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=_l[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return rt.workingToColorSpace(sn.copy(this),e),Math.round(tt(sn.r*255,0,255))*65536+Math.round(tt(sn.g*255,0,255))*256+Math.round(tt(sn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(sn.copy(this),t);const n=sn.r,r=sn.g,a=sn.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=u<=.5?h/(s+o):h/(2-s-o),s){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=xn){rt.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,r=sn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Kr);const n=Pr(di.h,Kr.h,t),r=Pr(di.s,Kr.s,t),a=Pr(di.l,Kr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new ke;ke.NAMES=_l;class vs extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ln=new z,Qn=new z,$a=new z,jn=new z,Wi=new z,Xi=new z,Eo=new z,Ka=new z,Za=new z,Ja=new z,Qa=new Ut,ja=new Ut,es=new Ut;class Fn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ln.subVectors(r,t),Qn.subVectors(n,t),$a.subVectors(e,t);const s=Ln.dot(Ln),o=Ln.dot(Qn),c=Ln.dot($a),l=Qn.dot(Qn),u=Qn.dot($a),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,v=(s*u-o*c)*d;return a.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,jn.x),c.addScaledVector(s,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return Qa.setScalar(0),ja.setScalar(0),es.setScalar(0),Qa.fromBufferAttribute(e,t),ja.fromBufferAttribute(e,n),es.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Qa,a.x),s.addScaledVector(ja,a.y),s.addScaledVector(es,a.z),s}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Qn.subVectors(e,t),Ln.cross(Qn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Ln.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Wi.subVectors(r,n),Xi.subVectors(a,n),Ka.subVectors(e,n);const c=Wi.dot(Ka),l=Xi.dot(Ka);if(c<=0&&l<=0)return t.copy(n);Za.subVectors(e,r);const u=Wi.dot(Za),h=Xi.dot(Za);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(Wi,s);Ja.subVectors(e,a);const p=Wi.dot(Ja),v=Xi.dot(Ja);if(v>=0&&p<=v)return t.copy(a);const y=p*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(Xi,o);const g=u*v-p*h;if(g<=0&&h-u>=0&&p-v>=0)return Eo.subVectors(a,r),o=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Eo,o);const f=1/(g+y+d);return s=y*f,o=d*f,t.copy(n).addScaledVector(Wi,s).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,In):In.fromBufferAttribute(a,s),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),Jr.subVectors(this.max,Er),qi.subVectors(e.a,Er),Yi.subVectors(e.b,Er),$i.subVectors(e.c,Er),hi.subVectors(Yi,qi),fi.subVectors($i,Yi),Ti.subVectors(qi,$i);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ti.z,Ti.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ti.z,0,-Ti.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ti.y,Ti.x,0];return!ts(t,qi,Yi,$i,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ts(t,qi,Yi,$i,Jr))?!1:(Qr.crossVectors(hi,fi),t=[Qr.x,Qr.y,Qr.z],ts(t,qi,Yi,$i,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new z,new z,new z,new z,new z,new z,new z,new z],In=new z,Zr=new Fr,qi=new z,Yi=new z,$i=new z,hi=new z,fi=new z,Ti=new z,Er=new z,Jr=new z,Qr=new z,bi=new z;function ts(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){bi.fromArray(i,a);const o=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),c=e.dot(bi),l=t.dot(bi),u=n.dot(bi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const kt=new z,jr=new Oe;let Ic=0;class si extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ic++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),r=un(r,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class xl extends si{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vl extends si{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends si{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Uc=new Fr,yr=new z,ns=new z;class Cs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Uc.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(ns)),this.expandByPoint(yr.copy(e.center).sub(ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fc=0;const bn=new Ft,is=new ln,Ki=new z,yn=new Fr,Tr=new Fr,Jt=new z;class Bn extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ec(e)?vl:xl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Xe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new pn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];yn.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(yn.min,Tr.min),yn.expandByPoint(Jt),Jt.addVectors(yn.max,Tr.max),yn.expandByPoint(Jt)):(yn.expandByPoint(Tr.min),yn.expandByPoint(Tr.max))}yn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Jt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Jt.fromBufferAttribute(o,l),c&&(Ki.fromBufferAttribute(e,l),Jt.add(Ki)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let s=this.getAttribute("tangent");(s===void 0||s.count!==n.count)&&(s=new si(new Float32Array(4*n.count),4),this.setAttribute("tangent",s));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new z,c[_]=new z;const l=new z,u=new z,h=new z,d=new Oe,p=new Oe,v=new Oe,y=new z,g=new z;function f(_,T,P){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,P),d.fromBufferAttribute(a,_),p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,P),u.sub(l),h.sub(l),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(I),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),o[_].add(y),o[T].add(y),o[P].add(y),c[_].add(g),c[T].add(g),c[P].add(g))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let _=0,T=A.length;_<T;++_){const P=A[_],I=P.start,B=P.count;for(let N=I,F=I+B;N<F;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const D=new z,E=new z,M=new z,S=new z;function w(_){M.fromBufferAttribute(r,_),S.copy(M);const T=o[_];D.copy(T),D.sub(M.multiplyScalar(M.dot(T))).normalize(),E.crossVectors(S,T);const I=E.dot(c[_])<0?-1:1;s.setXYZW(_,D.x,D.y,D.z,I)}for(let _=0,T=A.length;_<T;++_){const P=A[_],I=P.start,B=P.count;for(let N=I,F=I+B;N<F;N+=3)w(e.getX(N+0)),w(e.getX(N+1)),w(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new z,a=new z,s=new z,o=new z,c=new z,l=new z,u=new z,h=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,g),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,a),h.subVectors(r,a),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,v=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?p=c[y]*o.data.stride+o.offset:p=c[y]*u;for(let f=0;f<u;f++)d[v++]=l[p++]}return new si(d,u,h)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const a=e.morphAttributes;for(const l in a){const u=[],h=a[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rs=new z,Nc=new z,Oc=new Xe;class kn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=rs.subVectors(n,t).cross(Nc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(rs),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oc.getNormalMatrix(e),r=this.coplanarPoint(rs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Bc=0;class Nr extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bc++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ti=new z,as=new z,ea=new z,ta=new z;class Sl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),ta.copy(this.origin).sub(as);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ea),o=ta.dot(this.direction),c=-ta.dot(ea),l=ta.lengthSq(),u=Math.abs(1-s*s);let h,d,p,v;if(u>0)if(h=s*c-o,d=s*o-c,v=a*u,h>=0)if(d>=-v)if(d<=v){const y=1/u;h*=y,d*=y,p=h*(h+s*d+2*o)+d*(s*h+d+2*c)+l}else d=a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),p=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),p=-h*h+d*(d+2*c)+l);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(as).addScaledVector(ea,d),p}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),r=ti.dot(ti)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(a=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,a){const s=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-s.x,d=e.y-s.y,p=e.z-s.z,v=t.x-s.x,y=t.y-s.y,g=t.z-s.z,f=n.x-s.x,A=n.y-s.y,D=n.z-s.z,E=Math.abs(c),M=Math.abs(l),S=Math.abs(u);let w,_,T,P,I,B,N,F,k,Q,q,ae;if(E>=M&&E>=S?(T=c,B=h,k=v,ae=f,c>=0?(w=l,_=u,P=d,I=p,N=y,F=g,Q=A,q=D):(w=u,_=l,P=p,I=d,N=g,F=y,Q=D,q=A)):M>=S?(T=l,B=d,k=y,ae=A,l>=0?(w=u,_=c,P=p,I=h,N=g,F=v,Q=D,q=f):(w=c,_=u,P=h,I=p,N=v,F=g,Q=f,q=D)):(T=u,B=p,k=g,ae=D,u>=0?(w=c,_=l,P=h,I=d,N=v,F=y,Q=f,q=A):(w=l,_=c,P=d,I=h,N=y,F=v,Q=A,q=f)),T===0)return null;const K=w/T,ne=_/T,ie=1/T,Ue=P-K*B,Ee=I-ne*B,gt=N-K*k,Je=F-ne*k,at=Q-K*ae,Z=q-ne*ae,te=at*Je-Z*gt,ye=Ue*Z-Ee*at,Pe=gt*Ee-Je*Ue;if(r){if(te<0||ye<0||Pe<0)return null}else if((te<0||ye<0||Pe<0)&&(te>0||ye>0||Pe>0))return null;const Me=te+ye+Pe;if(Me===0)return null;const qe=ie*(te*B+ye*k+Pe*ae);return(Me>0?qe<0:qe>0)?null:this.at(qe/Me,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pi extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yo=new Ft,Ai=new Sl,na=new Cs,To=new z,ia=new z,ra=new z,aa=new z,ss=new z,sa=new z,bo=new z,oa=new z;class mt extends ln{constructor(e=new Bn,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){sa.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const u=o[c],h=a[c];u!==0&&(ss.fromBufferAttribute(h,e),s?sa.addScaledVector(ss,u):sa.addScaledVector(ss.sub(t),u))}t.add(sa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(a),Ai.copy(e.ray).recast(e.near),!(na.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(na,To)===null||Ai.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(yo.copy(a).invert(),Ai.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,u=a.attributes.uv1,h=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,y=d.length;v<y;v++){const g=d[v],f=s[g.materialIndex],A=Math.max(g.start,p.start),D=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=A,M=D;E<M;E+=3){const S=o.getX(E),w=o.getX(E+1),_=o.getX(E+2);r=la(this,f,e,n,l,u,h,S,w,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const A=o.getX(g),D=o.getX(g+1),E=o.getX(g+2);r=la(this,s,e,n,l,u,h,A,D,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,y=d.length;v<y;v++){const g=d[v],f=s[g.materialIndex],A=Math.max(g.start,p.start),D=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let E=A,M=D;E<M;E+=3){const S=E,w=E+1,_=E+2;r=la(this,f,e,n,l,u,h,S,w,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=v,f=y;g<f;g+=3){const A=g,D=g+1,E=g+2;r=la(this,s,e,n,l,u,h,A,D,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Gc(i,e,t,n,r,a,s,o){let c;if(e.side===1?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===0,o),c===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(oa);return l<t.near||l>t.far?null:{distance:l,point:oa.clone(),object:i}}function la(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,ia),i.getVertexPosition(c,ra),i.getVertexPosition(l,aa);const u=Gc(i,e,t,n,ia,ra,aa,bo);if(u){const h=new z;Fn.getBarycoord(bo,ia,ra,aa,h),r&&(u.uv=Fn.getInterpolatedAttribute(r,o,c,l,h,new Oe)),a&&(u.uv1=Fn.getInterpolatedAttribute(a,o,c,l,h,new Oe)),s&&(u.normal=Fn.getInterpolatedAttribute(s,o,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new z,materialIndex:0};Fn.getNormal(ia,ra,aa,d.normal),u.face=d,u.barycoord=h}return u}class zc extends en{constructor(e=null,t=1,n=1,r,a,s,o,c,l=1003,u=1003,h,d){super(null,s,o,c,l,u,r,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wi=new Cs,Hc=new Oe(.5,.5),ca=new z;class Ps{constructor(e=new kn,t=new kn,n=new kn,r=new kn,a=new kn,s=new kn){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],u=a[4],h=a[5],d=a[6],p=a[7],v=a[8],y=a[9],g=a[10],f=a[11],A=a[12],D=a[13],E=a[14],M=a[15];if(r[0].setComponents(l-s,p-u,f-v,M-A).normalize(),r[1].setComponents(l+s,p+u,f+v,M+A).normalize(),r[2].setComponents(l+o,p+h,f+y,M+D).normalize(),r[3].setComponents(l-o,p-h,f-y,M-D).normalize(),n)r[4].setComponents(c,d,g,E).normalize(),r[5].setComponents(l-c,p-d,f-g,M-E).normalize();else if(r[4].setComponents(l-c,p-d,f-g,M-E).normalize(),t===2e3)r[5].setComponents(l+c,p+d,f+g,M+E).normalize();else if(t===2001)r[5].setComponents(c,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=Hc.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ao extends en{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}class Ml extends en{constructor(e=[],t=301,n,r,a,s,o,c,l,u){super(e,t,n,r,a,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ds extends en{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ur extends en{constructor(e,t,n=1014,r,a,s,o=1003,c=1003,l,u=1026,h=1){if(u!==1026&&u!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,a,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vc extends Ur{constructor(e,t=1014,n=301,r,a,s=1003,o=1003,c,l=1026){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,a,s,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class El extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Bn{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],u=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,r,s,2),v("x","z","y",1,-1,e,n,-t,r,s,3),v("x","y","z",1,-1,e,t,n,r,a,4),v("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function v(y,g,f,A,D,E,M,S,w,_,T){const P=E/w,I=M/_,B=E/2,N=M/2,F=S/2,k=w+1,Q=_+1;let q=0,ae=0;const K=new z;for(let ne=0;ne<Q;ne++){const ie=ne*I-N;for(let Ue=0;Ue<k;Ue++){const Ee=Ue*P-B;K[y]=Ee*A,K[g]=ie*D,K[f]=F,l.push(K.x,K.y,K.z),K[y]=0,K[g]=0,K[f]=S>0?1:-1,u.push(K.x,K.y,K.z),h.push(Ue/w),h.push(1-ne/_),q+=1}}for(let ne=0;ne<_;ne++)for(let ie=0;ie<w;ie++){const Ue=d+ie+k*ne,Ee=d+ie+k*(ne+1),gt=d+(ie+1)+k*(ne+1),Je=d+(ie+1)+k*ne;c.push(Ue,Ee,Je),c.push(Ee,gt,Je),ae+=6}o.addGroup(p,ae,T),p+=ae,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Yt extends Bn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],v=[],y=[],g=[];for(let f=0;f<u;f++){const A=f*d-s;for(let D=0;D<l;D++){const E=D*h-a;v.push(E,-A,0),y.push(0,0,1),g.push(D/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<o;A++){const D=A+l*f,E=A+l*(f+1),M=A+1+l*(f+1),S=A+1+l*f;p.push(D,E,S),p.push(E,M,S)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.widthSegments,e.heightSegments)}}class xa extends Bn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const u=[],h=new z,d=new z,p=[],v=[],y=[],g=[];for(let f=0;f<=n;f++){const A=[],D=f/n,E=s+D*o,M=e*Math.cos(E),S=Math.sqrt(e*e-M*M);let w=0;f===0&&s===0?w=.5/t:f===n&&c===Math.PI&&(w=-.5/t);for(let _=0;_<=t;_++){const T=_/t,P=r+T*a;h.x=-S*Math.cos(P),h.y=M,h.z=S*Math.sin(P),v.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(T+w,1-D),A.push(l++)}u.push(A)}for(let f=0;f<n;f++)for(let A=0;A<t;A++){const D=u[f][A+1],E=u[f][A],M=u[f+1][A],S=u[f+1][A+1];(f!==0||s>0)&&p.push(D,E,S),(f!==n-1||c<Math.PI)&&p.push(E,M,S)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function cr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(wo(r))r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(wo(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=cr(i[t]);for(const r in n)e[r]=n[r]}return e}function wo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Wc={clone:cr,merge:hn};var Xc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xc,this.fragmentShader=qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=kc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(r.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new z().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Yc extends vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ls extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Is extends Ls{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Tl extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $c extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const os={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ro(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ro(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ro(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Kc{constructor(e,t,n){const r=this;let a=!1,s=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,a===!1&&r.onStart!==void 0&&r.onStart(u,s,o),a=!0},this.itemEnd=function(u){s++,r.onProgress!==void 0&&r.onProgress(u,s,o),s===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],v=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zc=new Kc;class Us{constructor(e){this.manager=e!==void 0?e:Zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Us.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi=new WeakMap;class Jc extends Us{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=os.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0);else{let h=Zi.get(s);h===void 0&&(h=[],Zi.set(s,h)),h.push({onLoad:t,onError:r})}return s}const o=Lr("img");function c(){u(),t&&t(this);const h=Zi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Zi.delete(this),a.manager.itemEnd(e)}function l(h){u(),r&&r(h),os.remove(`image:${e}`);const d=Zi.get(this)||[];for(let p=0;p<d.length;p++){const v=d[p];v.onError&&v.onError(h)}Zi.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),os.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class Qc extends Us{constructor(e){super(e)}load(e,t,n,r){const a=new en,s=new Jc(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class bl extends ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ls=new Ft,Co=new z,Po=new z;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Co.setFromMatrixPosition(e.matrixWorld),t.position.copy(Co),Po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Po),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ls,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,s=r?r.z/a.x:1,o=r?r.w/a.y:1,c=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*s,0,0,.5*s+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(ls)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ua=new z,da=new ri,zn=new z;class Al extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ua,da,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ua,da,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,da,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const pi=new z,Do=new Oe,Lo=new Oe;class An extends Al{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(Cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Do,Lo),t.subVectors(Lo,Do)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class va extends Al{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eu extends jc{constructor(){super(new va(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cs extends bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new eu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class tu extends bl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ji=-90,Qi=1;class nu extends ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new An(Ji,Qi,e,t);r.layers=this.layers,this.add(r);const a=new An(Ji,Qi,e,t);a.layers=this.layers,this.add(a);const s=new An(Ji,Qi,e,t);s.layers=this.layers,this.add(s);const o=new An(Ji,Qi,e,t);o.layers=this.layers,this.add(o);const c=new An(Ji,Qi,e,t);c.layers=this.layers,this.add(c);const l=new An(Ji,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class iu extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ru{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=au.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function au(){this._document.hidden===!1&&this.reset()}const Io=new Ft;class Uo{constructor(e,t,n=0,r=1/0){this.ray=new Sl(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ct("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Io.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Io),this}intersectObject(e,t=!0,n=[]){return Ss(e,this,n,t),n.sort(Fo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Ss(e[r],this,n,t);return n.sort(Fo),n}}function Fo(i,e){return i.distance-e.distance}function Ss(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let s=0,o=a.length;s<o;s++)Ss(a[s],e,t,!0)}}class wl{static{wl.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}}function No(i,e,t,n){const r=su(n);switch(t){case 1021:return i*e;case 1028:return i*e/r.components*r.byteLength;case 1029:return i*e/r.components*r.byteLength;case 1030:return i*e*2/r.components*r.byteLength;case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case 1023:return i*e*4/r.components*r.byteLength;case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function su(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rl(){let i=null,e=!1,t=null,n=null;function r(a,s){n=i.requestAnimationFrame(r),t(a,s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function ou(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const y=h[p];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Su=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ru=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Du=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ku=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,od=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ih=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ch=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ph=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_h=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Th=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ch=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ph=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ih=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:hu,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:_u,begin_vertex:xu,beginnormal_vertex:vu,bsdfs:Su,iridescence_fragment:Mu,bumpmap_pars_fragment:Eu,clipping_planes_fragment:yu,clipping_planes_pars_fragment:Tu,clipping_planes_pars_vertex:bu,clipping_planes_vertex:Au,color_fragment:wu,color_pars_fragment:Ru,color_pars_vertex:Cu,color_vertex:Pu,common:Du,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Iu,displacementmap_pars_vertex:Uu,displacementmap_vertex:Fu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Ou,colorspace_fragment:Bu,colorspace_pars_fragment:Gu,envmap_fragment:zu,envmap_common_pars_fragment:Hu,envmap_pars_fragment:Vu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:ed,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Yu,fog_pars_fragment:$u,gradientmap_pars_fragment:Ku,lightmap_pars_fragment:Zu,lights_lambert_fragment:Ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:ju,lights_toon_fragment:td,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:rd,lights_physical_fragment:ad,lights_physical_pars_fragment:sd,lights_fragment_begin:od,lights_fragment_maps:ld,lights_fragment_end:cd,lightprobes_pars_fragment:ud,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:xd,metalnessmap_fragment:vd,metalnessmap_pars_fragment:Sd,morphinstance_vertex:Md,morphcolor_vertex:Ed,morphnormal_vertex:yd,morphtarget_pars_vertex:Td,morphtarget_vertex:bd,normal_fragment_begin:Ad,normal_fragment_maps:wd,normal_pars_fragment:Rd,normal_pars_vertex:Cd,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Fd,opaque_fragment:Nd,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:Gd,dithering_fragment:zd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:$d,skinning_pars_vertex:Kd,skinning_vertex:Zd,skinnormal_vertex:Jd,specularmap_fragment:Qd,specularmap_pars_fragment:jd,tonemapping_fragment:eh,tonemapping_pars_fragment:th,transmission_fragment:nh,transmission_pars_fragment:ih,uv_pars_fragment:rh,uv_pars_vertex:ah,uv_vertex:sh,worldpos_vertex:oh,background_vert:lh,background_frag:ch,backgroundCube_vert:uh,backgroundCube_frag:dh,cube_vert:hh,cube_frag:fh,depth_vert:ph,depth_frag:mh,distance_vert:gh,distance_frag:_h,equirect_vert:xh,equirect_frag:vh,linedashed_vert:Sh,linedashed_frag:Mh,meshbasic_vert:Eh,meshbasic_frag:yh,meshlambert_vert:Th,meshlambert_frag:bh,meshmatcap_vert:Ah,meshmatcap_frag:wh,meshnormal_vert:Rh,meshnormal_frag:Ch,meshphong_vert:Ph,meshphong_frag:Dh,meshphysical_vert:Lh,meshphysical_frag:Ih,meshtoon_vert:Uh,meshtoon_frag:Fh,points_vert:Nh,points_frag:Oh,shadow_vert:Bh,shadow_frag:Gh,sprite_vert:zh,sprite_frag:Hh},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Wn={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Wn.physical={uniforms:hn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const ha={r:0,b:0,g:0},Vh=new Ft,Cl=new Xe;Cl.set(-1,0,0,0,1,0,0,0,1);function kh(i,e,t,n,r,a){const s=new ke(0);let o=r===!0?0:1,c,l,u=null,h=0,d=null;function p(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const E=A.backgroundBlurriness>0;D=e.get(D,E)}return D}function v(A){let D=!1;const E=p(A);E===null?g(s,o):E&&E.isColor&&(g(E,1),D=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(A,D){const E=p(D);E&&(E.isCubeTexture||E.mapping===306)?(l===void 0&&(l=new mt(new Or(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:cr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Vh.makeRotationFromEuler(D.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Cl),l.material.toneMapped=rt.getTransfer(E.colorSpace)!==Et,(u!==E||h!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,h=E.version,d=i.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new mt(new Yt(2,2),new vn({name:"BackgroundMaterial",uniforms:cr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==Et,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,d=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,D){A.getRGB(ha,yl(i)),t.buffers.color.setClear(ha.r,ha.g,ha.b,D,a)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(A,D=1){s.set(A),o=D,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(A){o=A,g(s,o)},render:v,addToRenderList:y,dispose:f}}function Wh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(I,B,N,F,k){let Q=!1;const q=h(I,F,N,B);a!==q&&(a=q,l(a.object)),Q=p(I,F,N,k),Q&&v(I,F,N,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Q||s)&&(s=!1,E(I,B,N,F),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function h(I,B,N,F){const k=F.wireframe===!0;let Q=n[B.id];Q===void 0&&(Q={},n[B.id]=Q);const q=I.isInstancedMesh===!0?I.id:0;let ae=Q[q];ae===void 0&&(ae={},Q[q]=ae);let K=ae[N.id];K===void 0&&(K={},ae[N.id]=K);let ne=K[k];return ne===void 0&&(ne=d(c()),K[k]=ne),ne}function d(I){const B=[],N=[],F=[];for(let k=0;k<t;k++)B[k]=0,N[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:N,attributeDivisors:F,object:I,attributes:{},index:null}}function p(I,B,N,F){const k=a.attributes,Q=B.attributes;let q=0;const ae=N.getAttributes();for(const K in ae)if(ae[K].location>=0){const ie=k[K];let Ue=Q[K];if(Ue===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(Ue=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(Ue=I.instanceColor)),ie===void 0||ie.attribute!==Ue||Ue&&ie.data!==Ue.data)return!0;q++}return a.attributesNum!==q||a.index!==F}function v(I,B,N,F){const k={},Q=B.attributes;let q=0;const ae=N.getAttributes();for(const K in ae)if(ae[K].location>=0){let ie=Q[K];ie===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor));const Ue={};Ue.attribute=ie,ie&&ie.data&&(Ue.data=ie.data),k[K]=Ue,q++}a.attributes=k,a.attributesNum=q,a.index=F}function y(){const I=a.newAttributes;for(let B=0,N=I.length;B<N;B++)I[B]=0}function g(I){f(I,0)}function f(I,B){const N=a.newAttributes,F=a.enabledAttributes,k=a.attributeDivisors;N[I]=1,F[I]===0&&(i.enableVertexAttribArray(I),F[I]=1),k[I]!==B&&(i.vertexAttribDivisor(I,B),k[I]=B)}function A(){const I=a.newAttributes,B=a.enabledAttributes;for(let N=0,F=B.length;N<F;N++)B[N]!==I[N]&&(i.disableVertexAttribArray(N),B[N]=0)}function D(I,B,N,F,k,Q,q){q===!0?i.vertexAttribIPointer(I,B,N,k,Q):i.vertexAttribPointer(I,B,N,F,k,Q)}function E(I,B,N,F){y();const k=F.attributes,Q=N.getAttributes(),q=B.defaultAttributeValues;for(const ae in Q){const K=Q[ae];if(K.location>=0){let ne=k[ae];if(ne===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){const ie=ne.normalized,Ue=ne.itemSize,Ee=e.get(ne);if(Ee===void 0)continue;const gt=Ee.buffer,Je=Ee.type,at=Ee.bytesPerElement,Z=Je===i.INT||Je===i.UNSIGNED_INT||ne.gpuType===1013;if(ne.isInterleavedBufferAttribute){const te=ne.data,ye=te.stride,Pe=ne.offset;if(te.isInstancedInterleavedBuffer){for(let Me=0;Me<K.locationSize;Me++)f(K.location+Me,te.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<K.locationSize;Me++)g(K.location+Me);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Me=0;Me<K.locationSize;Me++)D(K.location+Me,Ue/K.locationSize,Je,ie,ye*at,(Pe+Ue/K.locationSize*Me)*at,Z)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<K.locationSize;te++)f(K.location+te,ne.meshPerAttribute);I.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<K.locationSize;te++)g(K.location+te);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let te=0;te<K.locationSize;te++)D(K.location+te,Ue/K.locationSize,Je,ie,Ue*at,Ue/K.locationSize*te*at,Z)}}else if(q!==void 0){const ie=q[ae];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(K.location,ie);break;case 3:i.vertexAttrib3fv(K.location,ie);break;case 4:i.vertexAttrib4fv(K.location,ie);break;default:i.vertexAttrib1fv(K.location,ie)}}}}A()}function M(){T();for(const I in n){const B=n[I];for(const N in B){const F=B[N];for(const k in F){const Q=F[k];for(const q in Q)u(Q[q].object),delete Q[q];delete F[k]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;const B=n[I.id];for(const N in B){const F=B[N];for(const k in F){const Q=F[k];for(const q in Q)u(Q[q].object),delete Q[q];delete F[k]}}delete n[I.id]}function w(I){for(const B in n){const N=n[B];for(const F in N){const k=N[F];if(k[I.id]===void 0)continue;const Q=k[I.id];for(const q in Q)u(Q[q].object),delete Q[q];delete k[I.id]}}}function _(I){for(const B in n){const N=n[B],F=I.isInstancedMesh===!0?I.id:0,k=N[F];if(k!==void 0){for(const Q in k){const q=k[Q];for(const ae in q)u(q[ae].object),delete q[ae];delete k[Q]}delete N[F],Object.keys(N).length===0&&delete n[B]}}}function T(){P(),s=!0,a!==r&&(a=r,l(a.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:A}}function Xh(i,e,t){let n;function r(c){n=c}function a(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function s(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];t.update(d,n,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function qh(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(w){return!(w!==1023&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const _=w===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==1009&&w!==1015&&!_&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(He("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:E,maxSamples:M,samples:S}}function Yh(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new kn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,f=i.get(h);if(!r||v===null||v.length===0||a&&!g)a?u(null):l();else{const A=a?0:n,D=A*4;let E=f.clippingState||null;c.value=E,E=u(v,d,D,p);for(let M=0;M!==D;++M)E[M]=t[M];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,v){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=c.value,v!==!0||g===null){const f=p+y*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(g===null||g.length<f)&&(g=new Float32Array(f));for(let D=0,E=p;D!==y;++D,E+=4)s.copy(h[D]).applyMatrix4(A,o),s.normal.toArray(g,E),g[E+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const ir=4,$h=6,Kh=20,Zh=256,br=new va,Oo=new ke;let us=null,ds=0,hs=0,fs=!1;const Jh=new z,Ri=new z;class Ms{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Jh}=a;us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(us,ds,hs),this._renderer.xr.enabled=fs,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),us=this._renderer.getRenderTarget(),ds=this._renderer.getActiveCubeFace(),hs=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ga,depthBuffer:!1},r=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Qh(a)),this._blurMaterial=ef(a,e,t),this._ggxMaterial=jh(a,e,t)}return r}_compileMaterial(e){const t=new mt(new Bn,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,r,a){const c=new An(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Oo),h.toneMapping=0,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Or,new Pi({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let f=!1;const A=e.background;A?A.isColor&&(g.color.copy(A),e.background=null,f=!0):(g.color.copy(Oo),f=!0);for(let D=0;D<6;D++){const E=D%3;E===0?(c.up.set(0,l[D],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+u[D],a.y,a.z)):E===1?(c.up.set(0,0,l[D]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+u[D],a.z)):(c.up.set(0,l[D],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+u[D]));const M=this._cubeSize;ji(r,E*M,D>2?M:0,M,M),h.setRenderTarget(r),f&&h.render(y,c),h.render(e,c)}h.toneMapping=p,h.autoClear=d,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const c=s.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,p=h*d,{_lodMax:v}=this,y=this._sizeLods[n],g=3*y*(n>v-ir?n-v+ir:0),f=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=v-t,ji(a,g,f,3*y,2*y),r.setRenderTarget(a),r.render(o,br),c.envMap.value=a.texture,c.roughness.value=0,c.mipInt.value=v-n,ji(e,g,f,3*y,2*y),r.setRenderTarget(e),r.render(o,br)}_blur(e,t,n,r){const a=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,n,s),this._blurPass(a,e,n,n,s)}_blurPass(e,t,n,r,a){const s=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[r],h=3*u*(r>this._lodMax-ir?r-this._lodMax+ir:0),d=4*(this._cubeSize-u);ji(t,h,d,3*u,2*u),s.setRenderTarget(t),s.render(c,br)}}function Qh(i){const e=[],t=[];let n=i;const r=i-ir+1+$h;for(let a=0;a<r;a++){const s=Math.pow(2,n);e.push(s);const o=1/(s-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,p=3,v=new Float32Array(p*d*h),y=new Float32Array(p*d*h);for(let f=0;f<h;f++){const A=f%3*2/3-1,D=f>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(E,p*d*f);for(let M=0;M<d;M++){const S=u[M*2]*2-1,w=u[M*2+1]*2-1;f===0?Ri.set(1,w,S):f===1?Ri.set(-S,1,-w):f===2?Ri.set(-S,w,1):f===3?Ri.set(-1,w,-S):f===4?Ri.set(-S,-1,w):Ri.set(S,w,-1),Ri.toArray(y,(f*d+M)*p)}}const g=new Bn;g.setAttribute("position",new si(v,p)),g.setAttribute("outputDirection",new si(y,p)),t.push(new mt(g,null)),n>ir&&n--}return{lodMeshes:t,sizeLods:e}}function Bo(i,e,t){const n=new Tn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function jh(i,e,t){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ef(i,e,t){return new vn({name:"SphericalGaussianBlur",defines:{SAMPLES:Kh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Sa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zo(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Pl extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ml(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Or(5,5,5),a=new vn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const s=new mt(r,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new nu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function tf(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?s(d):a(d)}function a(d){if(d&&d.isTexture){const p=d.mapping;if(p===303||p===304)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const y=new Pl(v.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const p=d.mapping,v=p===303||p===304,y=p===301||p===302;if(v||y){let g=t.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Ms(i)),g=v?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const A=d.image;return v&&A&&A.height>0||y&&A&&c(A)?(n===null&&(n=new Ms(i)),g=v?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,p){return p===303?d.mapping=301:p===304&&(d.mapping=302),d}function c(d){let p=0;const v=6;for(let y=0;y<v;y++)d[y]!==void 0&&p++;return p===v}function l(d){const p=d.target;p.removeEventListener("dispose",l);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function nf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ar("WebGLRenderer: "+n+" extension not supported."),r}}}function rf(i,e,t,n){const r={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",s),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,v=h.attributes.position;let y=0;if(v===void 0)return;if(p!==null){const A=p.array;y=p.version;for(let D=0,E=A.length;D<E;D+=3){const M=A[D+0],S=A[D+1],w=A[D+2];d.push(M,S,S,w,w,M)}}else{const A=v.array;y=v.version;for(let D=0,E=A.length/3-1;D<E;D+=3){const M=D+0,S=D+1,w=D+2;d.push(M,S,S,w,w,M)}}const g=new(v.count>=65535?vl:xl)(d,1);g.version=y;const f=a.get(h);f&&e.remove(f),a.set(h,g)}function u(h){const d=a.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function af(i,e,t){let n;function r(h){n=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function c(h,d){i.drawElements(n,d,a,h*s),t.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,a,h*s,p),t.update(d,n,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,h,0,p);let y=0;for(let g=0;g<p;g++)y+=d[g];t.update(y,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:ct("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function of(i,e,t){const n=new WeakMap,r=new Ut;function a(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var p=P;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],D=o.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),g===!0&&(E=3);let M=o.attributes.position.count*E,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*S*4*h),_=new gl(w,M,S,h);_.type=1015,_.needsUpdate=!0;const T=E*4;for(let I=0;I<h;I++){const B=f[I],N=A[I],F=D[I],k=M*S*4*I;for(let Q=0;Q<B.count;Q++){const q=Q*T;v===!0&&(r.fromBufferAttribute(B,Q),w[k+q+0]=r.x,w[k+q+1]=r.y,w[k+q+2]=r.z,w[k+q+3]=0),y===!0&&(r.fromBufferAttribute(N,Q),w[k+q+4]=r.x,w[k+q+5]=r.y,w[k+q+6]=r.z,w[k+q+7]=0),g===!0&&(r.fromBufferAttribute(F,Q),w[k+q+8]=r.x,w[k+q+9]=r.y,w[k+q+10]=r.z,w[k+q+11]=F.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new Oe(M,S)},n.set(o,d),o.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let v=0;for(let g=0;g<l.length;g++)v+=l[g];const y=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function lf(i,e,t,n,r){let a=new WeakMap;function s(l){const u=r.render.frame,h=l.geometry,d=e.get(l,h);if(a.get(d)!==u&&(e.update(d),a.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),a.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return d}function o(){a=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const cf={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function uf(i,e,t,n,r,a){const s=new Tn(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Bn;l.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pn([0,2,0,0,2,0],2));const u=new Yc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new mt(l,u),d=new va(-1,1,1,-1,0,1);let p=null,v=null,y=!1,g,f=null,A=[],D=!1;this.setSize=function(E,M){s.setSize(E,M),o!==null&&o.setSize(E,M),c!==null&&c.setSize(E,M);for(let S=0;S<A.length;S++){const w=A[S];w.setSize&&w.setSize(E,M)}},this.setEffects=function(E){A=E,D=A.length>0&&A[0].isRenderPass===!0;const M=s.width,S=s.height;A.length>0&&o===null&&(o=new Tn(M,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}),c=new Tn(M,S,{type:1016,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<A.length;w++){const _=A[w];_.setSize&&_.setSize(M,S)}},this.begin=function(E,M){if(y||E.toneMapping===0&&A.length===0)return!1;if(f=M,M!==null){const S=M.width,w=M.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return D===!1&&E.setRenderTarget(s),g=E.toneMapping,E.toneMapping=0,!0},this.hasRenderPass=function(){return D},this.end=function(E,M){E.toneMapping=g,y=!0;let S=s,w=o;for(let _=0;_<A.length;_++){const T=A[_];T.enabled!==!1&&(T.render(E,w,S,M),T.needsSwap!==!1&&(S=w,w=w===o?c:o))}if(p!==E.outputColorSpace||v!==E.toneMapping){p=E.outputColorSpace,v=E.toneMapping,u.defines={},rt.getTransfer(p)===Et&&(u.defines.SRGB_TRANSFER="");const _=cf[v];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(f),E.render(h,d),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const Dl=new en,Es=new Ur(1,1),Ll=new gl,Il=new bc,Ul=new Ml,Ho=[],Vo=[],ko=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function hr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ho[r];if(a===void 0&&(a=new Float32Array(r),Ho[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=Vo[e];t===void 0&&(t=new Int32Array(e),Vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function mf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Xo.set(n),i.uniformMatrix2fv(this.addr,!1,Xo),Kt(t,n)}}function gf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Wo.set(n),i.uniformMatrix3fv(this.addr,!1,Wo),Kt(t,n)}}function _f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;ko.set(n),i.uniformMatrix4fv(this.addr,!1,ko),Kt(t,n)}}function xf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function Sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Af(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Es.compareFunction=t.isReversedDepthBuffer()?518:515,a=Es):a=Dl,t.setTexture2D(e||a,r)}function wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Il,r)}function Rf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ul,r)}function Cf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ll,r)}function Pf(i){switch(i){case 5126:return df;case 35664:return hf;case 35665:return ff;case 35666:return pf;case 35674:return mf;case 35675:return gf;case 35676:return _f;case 5124:case 35670:return xf;case 35667:case 35671:return vf;case 35668:case 35672:return Sf;case 35669:case 35673:return Mf;case 5125:return Ef;case 36294:return yf;case 36295:return Tf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Rf;case 36289:case 36303:case 36311:case 36292:return Cf}}function Df(i,e){i.uniform1fv(this.addr,e)}function Lf(i,e){const t=hr(e,this.size,2);i.uniform2fv(this.addr,t)}function If(i,e){const t=hr(e,this.size,3);i.uniform3fv(this.addr,t)}function Uf(i,e){const t=hr(e,this.size,4);i.uniform4fv(this.addr,t)}function Ff(i,e){const t=hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nf(i,e){const t=hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Of(i,e){const t=hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bf(i,e){i.uniform1iv(this.addr,e)}function Gf(i,e){i.uniform2iv(this.addr,e)}function zf(i,e){i.uniform3iv(this.addr,e)}function Hf(i,e){i.uniform4iv(this.addr,e)}function Vf(i,e){i.uniform1uiv(this.addr,e)}function kf(i,e){i.uniform2uiv(this.addr,e)}function Wf(i,e){i.uniform3uiv(this.addr,e)}function Xf(i,e){i.uniform4uiv(this.addr,e)}function qf(i,e,t){const n=this.cache,r=e.length,a=Ma(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=Es:s=Dl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function Yf(i,e,t){const n=this.cache,r=e.length,a=Ma(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Il,a[s])}function $f(i,e,t){const n=this.cache,r=e.length,a=Ma(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Ul,a[s])}function Kf(i,e,t){const n=this.cache,r=e.length,a=Ma(t,r);$t(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Ll,a[s])}function Zf(i){switch(i){case 5126:return Df;case 35664:return Lf;case 35665:return If;case 35666:return Uf;case 35674:return Ff;case 35675:return Nf;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return Gf;case 35668:case 35672:return zf;case 35669:case 35673:return Hf;case 5125:return Vf;case 36294:return kf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return Kf}}class Jf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Pf(t.type)}}class Qf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zf(t.type)}}class jf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function qo(i,e){i.seq.push(e),i.map[e.id]=e}function ep(i,e,t){const n=i.name,r=n.length;for(ps.lastIndex=0;;){const a=ps.exec(n),s=ps.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){qo(t,l===void 0?new Jf(o,i,e):new Qf(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new jf(o),qo(t,h)),t=h}}}class ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),c=e.getUniformLocation(t,o.name);ep(o,c,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const tp=37297;let np=0;function ip(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const $o=new Xe;function rp(i){rt._getMatrix($o,rt.workingColorSpace,i);const e=`mat3( ${$o.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case _a:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ko(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+ip(i.getShaderSource(e),o)}else return a}function ap(i,e){const t=rp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sp={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function op(i,e){const t=sp[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fa=new z;function lp(){rt.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function up(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Rr(i){return i!==""}function Zo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ys(i){return i.replace(hp,pp)}const fp=new Map;function pp(i,e){let t=$e[e];if(t===void 0){const n=fp.get(e);if(n!==void 0)t=$e[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ys(t)}const mp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(i){return i.replace(mp,gp)}function gp(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function jo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _p={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function xp(i){return _p[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vp={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Sp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mp={302:"ENVMAP_MODE_REFRACTION"};function Ep(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Mp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yp={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function Tp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":yp[i.combine]||"ENVMAP_BLENDING_NONE"}function bp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ap(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=xp(t),l=Sp(t),u=Ep(t),h=Tp(t),d=bp(t),p=cp(t),v=up(a),y=r.createProgram();let g,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(g=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?$e.tonemapping_pars_fragment:"",t.toneMapping!==0?op("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,ap("linearToOutputTexel",t.outputColorSpace),lp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),s=ys(s),s=Zo(s,t),s=Jo(s,t),o=ys(o),o=Zo(o,t),o=Jo(o,t),s=Qo(s),o=Qo(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const D=A+g+s,E=A+f+o,M=Yo(r,r.VERTEX_SHADER,D),S=Yo(r,r.FRAGMENT_SHADER,E);r.attachShader(y,M),r.attachShader(y,S),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(I){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(y)||"",N=r.getShaderInfoLog(M)||"",F=r.getShaderInfoLog(S)||"",k=B.trim(),Q=N.trim(),q=F.trim();let ae=!0,K=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,M,S);else{const ne=Ko(r,M,"vertex"),ie=Ko(r,S,"fragment");ct("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ne+`
`+ie)}else k!==""?He("WebGLProgram: Program Info Log:",k):(Q===""||q==="")&&(K=!1);K&&(I.diagnostics={runnable:ae,programLog:k,vertexShader:{log:Q,prefix:g},fragmentShader:{log:q,prefix:f}})}r.deleteShader(M),r.deleteShader(S),_=new ma(r,y),T=dp(r,y)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,tp)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=np++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=S,this}let wp=0;class Rp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Cp(e),t.set(e,n)),n}}class Cp{constructor(e){this.id=wp++,this.code=e,this.usedTimes=0}}function Pp(i){return i===1030||i===37490||i===36285}function Dp(i,e,t,n,r,a){const s=new Rs,o=new Rp,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,T,P,I,B,N){const F=I.fog,k=B.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ae=e.get(_.envMap||Q,q),K=ae&&ae.mapping===306?ae.image.height:null,ne=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ue=ie!==void 0?ie.length:0;let Ee=0;k.morphAttributes.position!==void 0&&(Ee=1),k.morphAttributes.normal!==void 0&&(Ee=2),k.morphAttributes.color!==void 0&&(Ee=3);let gt,Je,at,Z;if(ne){const yt=Wn[ne];gt=yt.vertexShader,Je=yt.fragmentShader}else{gt=_.vertexShader,Je=_.fragmentShader;const yt=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,yt,ut),at=yt.id,Z=ut.id}const te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Pe=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,qe=!!_.map,Nt=!!_.matcap,We=!!ae,nt=!!_.aoMap,vt=!!_.lightMap,Ke=!!_.bumpMap&&_.wireframe===!1,bt=!!_.normalMap,_t=!!_.displacementMap,Zt=!!_.emissiveMap,At=!!_.metalnessMap,ht=!!_.roughnessMap,U=_.anisotropy>0,zt=_.clearcoat>0,st=_.dispersion>0,b=_.retroreflectivity>0,m=_.iridescence>0,O=_.sheen>0,V=_.transmission>0,$=U&&!!_.anisotropyMap,oe=zt&&!!_.clearcoatMap,he=zt&&!!_.clearcoatNormalMap,J=zt&&!!_.clearcoatRoughnessMap,ee=m&&!!_.iridescenceMap,de=m&&!!_.iridescenceThicknessMap,Re=O&&!!_.sheenColorMap,fe=O&&!!_.sheenRoughnessMap,le=!!_.specularMap,Le=!!_.specularColorMap,Ne=!!_.specularIntensityMap,Be=V&&!!_.transmissionMap,L=V&&!!_.thicknessMap,ce=!!_.gradientMap,j=!!_.alphaMap,_e=_.alphaTest>0,xe=!!_.alphaHash,re=!!_.extensions;let Ie=0;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const we={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:gt,fragmentShader:Je,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&B.instanceColor!==null,instancingMorph:Pe&&B.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:Nt,envMap:We,envMapMode:We&&ae.mapping,envMapCubeUVHeight:K,aoMap:nt,lightMap:vt,bumpMap:Ke,normalMap:bt,displacementMap:_t,emissiveMap:Zt,normalMapObjectSpace:bt&&_.normalMapType===1,normalMapTangentSpace:bt&&_.normalMapType===0,packedNormalMap:bt&&_.normalMapType===0&&Pp(_.normalMap.format),metalnessMap:At,roughnessMap:ht,anisotropy:U,anisotropyMap:$,clearcoat:zt,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:J,dispersion:st,retroreflection:b,iridescence:m,iridescenceMap:ee,iridescenceThicknessMap:de,sheen:O,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:le,specularColorMap:Le,specularIntensityMap:Ne,transmission:V,transmissionMap:Be,thicknessMap:L,gradientMap:ce,opaque:_.transparent===!1&&_.blending===1&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:_e,alphaHash:xe,combine:_.combine,mapUv:qe&&v(_.map.channel),aoMapUv:nt&&v(_.aoMap.channel),lightMapUv:vt&&v(_.lightMap.channel),bumpMapUv:Ke&&v(_.bumpMap.channel),normalMapUv:bt&&v(_.normalMap.channel),displacementMapUv:_t&&v(_.displacementMap.channel),emissiveMapUv:Zt&&v(_.emissiveMap.channel),metalnessMapUv:At&&v(_.metalnessMap.channel),roughnessMapUv:ht&&v(_.roughnessMap.channel),anisotropyMapUv:$&&v(_.anisotropyMap.channel),clearcoatMapUv:oe&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:fe&&v(_.sheenRoughnessMap.channel),specularMapUv:le&&v(_.specularMap.channel),specularColorMapUv:Le&&v(_.specularColorMap.channel),specularIntensityMapUv:Ne&&v(_.specularIntensityMap.channel),transmissionMapUv:Be&&v(_.transmissionMap.channel),thicknessMapUv:L&&v(_.thicknessMap.channel),alphaMapUv:j&&v(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(bt||U),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!k.attributes.uv&&(qe||j),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&bt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&rt.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:Zt&&_.emissiveMap.isVideoTexture===!0&&rt.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:re&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&_.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(f(T,_),A(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function f(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function A(_,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.retroreflection&&s.enable(24),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),T.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function D(_){const T=p[_.type];let P;if(T){const I=Wn[T];P=Wc.clone(I.uniforms)}else P=_.uniforms;return P}function E(_,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new Ap(i,T,_,r),l.push(P),u.set(T,P)),P}function M(_){if(--_.usedTimes===0){const T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:E,releaseProgram:M,releaseShaderCache:S,programs:l,dispose:w}}function Lp(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Ip(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function el(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,y,g,f){let A=i[e];return A===void 0?(A={id:d.id,object:d,geometry:p,material:v,materialVariant:s(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:f},i[e]=A):(A.id=d.id,A.object=d,A.geometry=p,A.material=v,A.materialVariant=s(d),A.groupOrder=y,A.renderOrder=d.renderOrder,A.z=g,A.group=f),e++,A}function c(d,p,v,y,g,f,A){A.reversedDepth===!0&&(g=-g);const D=o(d,p,v,y,g,f);v.transmission>0?n.push(D):v.transparent===!0?r.push(D):t.push(D)}function l(d,p,v,y,g,f){const A=o(d,p,v,y,g,f);v.transmission>0?n.unshift(A):v.transparent===!0?r.unshift(A):t.unshift(A)}function u(d,p){t.length>1&&t.sort(d||Ip),n.length>1&&n.sort(p||el),r.length>1&&r.sort(p||el)}function h(){for(let d=e,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:l,finish:h,sort:u}}function Up(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new tl,i.set(n,[s])):r>=a.length?(s=new tl,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new ke};break;case"SpotLight":t={position:new z,direction:new z,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Np(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Op=0;function Bp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gp(i){const e=new Fp,t=Np(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const r=new z,a=new Ft,s=new Ft;function o(l){let u=0,h=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let p=0,v=0,y=0,g=0,f=0,A=0,D=0,E=0,M=0,S=0,w=0,_=0,T=0,P=0;l.sort(Bp);for(let B=0,N=l.length;B<N;B++){const F=l[B],k=F.color,Q=F.intensity,q=F.distance;let ae=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===1030?ae=F.shadow.map.texture:ae=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=k.r*Q,h+=k.g*Q,d+=k.b*Q;else if(F.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(F.sh.coefficients[K],Q);P++}else if(F.isSunLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,ie=t.get(F);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),n.sunShadow[v]=ie,n.sunShadowMap[v]=ae;const Ue=ne.getViewportCount();for(let Ee=0;Ee<Ue;Ee++)n.sunShadowMatrix[y+Ee]=ne.getMatrix(Ee),n.sunShadowCascade[y+Ee]=ne._cascadeData[Ee];y+=Ue,v++}n.sun[p]=K,p++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ne=F.shadow,ie=t.get(F);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.directionalShadow[g]=ie,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=F.shadow.matrix,M++}n.directional[g]=K,g++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(k).multiplyScalar(Q),K.distance=q,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,n.spot[A]=K;const ne=F.shadow;if(F.map&&(n.spotLightMap[_]=F.map,_++,ne.updateMatrices(F),F.castShadow&&T++),n.spotLightMatrix[A]=ne.matrix,F.castShadow){const ie=t.get(F);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,n.spotShadow[A]=ie,n.spotShadowMap[A]=ae,w++}A++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(k).multiplyScalar(Q),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),n.rectArea[D]=K,D++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const ne=F.shadow,ie=t.get(F);ie.shadowIntensity=ne.intensity,ie.shadowBias=ne.bias,ie.shadowNormalBias=ne.normalBias,ie.shadowRadius=ne.radius,ie.shadowMapSize=ne.mapSize,ie.shadowCameraNear=ne.camera.near,ie.shadowCameraFar=ne.camera.far,n.pointShadow[f]=ie,n.pointShadowMap[f]=ae,n.pointShadowMatrix[f]=F.shadow.matrix,S++}n.point[f]=K,f++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(Q),K.groundColor.copy(F.groundColor).multiplyScalar(Q),n.hemi[E]=K,E++}}D>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==f||I.spotLength!==A||I.rectAreaLength!==D||I.hemiLength!==E||I.numSunShadows!==v||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==w||I.numSpotMaps!==_||I.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=A,n.rectArea.length=D,n.point.length=f,n.hemi.length=E,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.sunLength=p,I.directionalLength=g,I.pointLength=f,I.spotLength=A,I.rectAreaLength=D,I.hemiLength=E,I.numSunShadows=v,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=w,I.numSpotMaps=_,I.numLightProbes=P,n.version=Op++)}function c(l,u){let h=0,d=0,p=0,v=0,y=0,g=0;const f=u.matrixWorldInverse;for(let A=0,D=l.length;A<D;A++){const E=l[A];if(E.isSunLight){const M=n.sun[h];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),h++}else if(E.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(E.isSpotLight){const M=n.spot[v];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),v++}else if(E.isRectAreaLight){const M=n.rectArea[y];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),s.identity(),a.copy(E.matrixWorld),a.premultiply(f),s.extractRotation(a),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:n}}function nl(i){const e=new Gp(i),t=[],n=[],r=[];function a(d){h.camera=d,t.length=0,n.length=0,r.length=0}function s(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o,pushLightProbeGrid:c}}function zp(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new nl(i),e.set(r,[o])):a>=s.length?(o=new nl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kp=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Wp=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],il=new Ft,Ar=new z,ms=new z;function Xp(i,e,t){let n=new Ps;const r=new Oe,a=new Oe,s=new Ut,o=new Tl,c=new $c,l={},u=t.maxTextureSize,h={0:1,1:0,2:2},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Hp,fragmentShader:Vp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mt(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(S,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===2&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=1);const T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(0),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=f!==this.type;N&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(k=>k.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,k=S.length;F<k;F++){const Q=S[F],q=Q.shadow;if(q===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const ae=q.getFrameExtents();r.multiply(ae),a.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ae.x),r.x=a.x*ae.x,q.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ae.y),r.y=a.y*ae.y,q.mapSize.y=a.y));const K=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=K,q.map===null||N===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===3){if(Q.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Tn(r.x,r.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Ur(r.x,r.y,1015),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=1026,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=1003,q.map.depthTexture.magFilter=1003}else Q.isPointLight?(q.map=new Pl(r.x),q.map.depthTexture=new Vc(r.x,1014)):(q.map=new Tn(r.x,r.y),q.map.depthTexture=new Ur(r.x,r.y,1014)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=1026,this.type===1?(q.map.depthTexture.compareFunction=K?518:515,q.map.depthTexture.minFilter=1006,q.map.depthTexture.magFilter=1006):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=1003,q.map.depthTexture.magFilter=1003);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==r.x||q.map.height!==r.y)&&q.map.setSize(r.x,r.y);const ne=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Q.isPointLight!==!0&&q.updateMatrices(Q,_);for(let ie=0;ie<ne;ie++){const Ue=q.getCamera(ie);if(Q.isPointLight){const Ee=q.camera,gt=q.matrix,Je=Q.distance||Ee.far;Je!==Ee.far&&(Ee.far=Je,Ee.updateProjectionMatrix()),Ar.setFromMatrixPosition(Q.matrixWorld),Ee.position.copy(Ar),ms.copy(Ee.position),ms.add(kp[ie]),Ee.up.copy(Wp[ie]),Ee.lookAt(ms),Ee.updateMatrixWorld(),gt.makeTranslation(-Ar.x,-Ar.y,-Ar.z),il.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),q._frustum.setFromProjectionMatrix(il,Ee.coordinateSystem,Ee.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(q.map),i.clear());const Ee=q.getViewport(ie);s.set(a.x*Ee.x,a.y*Ee.y,a.x*Ee.z,a.y*Ee.w),B.viewport(s)}n=q.getFrustum(ie),E(w,_,Ue,Q,this.type)}q.isPointLightShadow!==!0&&this.type===3&&A(q,_),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(T,P,I)};function A(S,w){const _=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Tn(r.x,r.y,{format:1030,type:1016}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,_,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,_,p,y,null)}function D(S,w,_,T){let P=null;const I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=P.uuid,N=w.uuid;let F=l[B];F===void 0&&(F={},l[B]=F);let k=F[N];k===void 0&&(k=P.clone(),F[N]=k,w.addEventListener("dispose",M)),P=k}if(P.visible=w.visible,P.wireframe=w.wireframe,T===3?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:h[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const B=i.properties.get(P);B.light=_}return P}function E(S,w,_,T,P){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===3)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);const N=e.update(S),F=S.material;if(Array.isArray(F)){const k=N.groups;for(let Q=0,q=k.length;Q<q;Q++){const ae=k[Q],K=F[ae.materialIndex];if(K&&K.visible){const ne=D(S,K,T,P);S.onBeforeShadow(i,S,w,_,N,ne,ae),i.renderBufferDirect(_,null,N,ne,S,ae),S.onAfterShadow(i,S,w,_,N,ne,ae)}}}else if(F.visible){const k=D(S,F,T,P);S.onBeforeShadow(i,S,w,_,N,k,null),i.renderBufferDirect(_,null,N,k,S,null),S.onAfterShadow(i,S,w,_,N,k,null)}}const B=S.children;for(let N=0,F=B.length;N<F;N++)E(B[N],w,_,T,P)}function M(S){S.target.removeEventListener("dispose",M);for(const _ in l){const T=l[_],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function qp(i,e){function t(){let L=!1;const ce=new Ut;let j=null;const _e=new Ut(0,0,0,0);return{setMask:function(xe){j!==xe&&!L&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){L=xe},setClear:function(xe,re,Ie,we,yt){yt===!0&&(xe*=we,re*=we,Ie*=we),ce.set(xe,re,Ie,we),_e.equals(ce)===!1&&(i.clearColor(xe,re,Ie,we),_e.copy(ce))},reset:function(){L=!1,j=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,j=null,_e=null,xe=null;return{setReversed:function(re){if(ce!==re){const Ie=e.get("EXT_clip_control");re?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ce=re;const we=xe;xe=null,this.setClear(we)}},getReversed:function(){return ce},setTest:function(re){re?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(re){j!==re&&!L&&(i.depthMask(re),j=re)},setFunc:function(re){if(ce&&(re=ic[re]),_e!==re){switch(re){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=re}},setLocked:function(re){L=re},setClear:function(re){xe!==re&&(xe=re,ce&&(re=1-re),i.clearDepth(re))},reset:function(){L=!1,j=null,_e=null,xe=null,ce=!1}}}function r(){let L=!1,ce=null,j=null,_e=null,xe=null,re=null,Ie=null,we=null,yt=null;return{setTest:function(ut){L||(ut?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ut){ce!==ut&&!L&&(i.stencilMask(ut),ce=ut)},setFunc:function(ut,Sn,tn){(j!==ut||_e!==Sn||xe!==tn)&&(i.stencilFunc(ut,Sn,tn),j=ut,_e=Sn,xe=tn)},setOp:function(ut,Sn,tn){(re!==ut||Ie!==Sn||we!==tn)&&(i.stencilOp(ut,Sn,tn),re=ut,Ie=Sn,we=tn)},setLocked:function(ut){L=ut},setClear:function(ut){yt!==ut&&(i.clearStencil(ut),yt=ut)},reset:function(){L=!1,ce=null,j=null,_e=null,xe=null,re=null,Ie=null,we=null,yt=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d={},p=new WeakMap,v=[],y=null,g=!1,f=null,A=null,D=null,E=null,M=null,S=null,w=null,_=new ke(0,0,0),T=0,P=!1,I=null,B=null,N=null,F=null,k=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ae=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=ae>=1):K.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=ae>=2);let ne=null,ie={};const Ue=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),gt=new Ut().fromArray(Ue),Je=new Ut().fromArray(Ee);function at(L,ce,j,_e){const xe=new Uint8Array(4),re=i.createTexture();i.bindTexture(L,re),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<j;Ie++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ce+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return re}const Z={};Z[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),te(i.DEPTH_TEST),s.setFunc(3),Ke(!1),bt(1),te(i.CULL_FACE),nt(0);function te(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ye(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Pe(L,ce){return d[L]!==ce?(i.bindFramebuffer(L,ce),d[L]=ce,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ce),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Me(L,ce){let j=v,_e=!1;if(L){j=p.get(ce),j===void 0&&(j=[],p.set(ce,j));const xe=L.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Ie=xe.length;re<Ie;re++)j[re]=i.COLOR_ATTACHMENT0+re;j.length=xe.length,_e=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_e=!0);_e&&i.drawBuffers(j)}function qe(L){return y!==L?(i.useProgram(L),y=L,!0):!1}const Nt={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};Nt[103]=i.MIN,Nt[104]=i.MAX;const We={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function nt(L,ce,j,_e,xe,re,Ie,we,yt,ut){if(L===0){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),L!==5){if(L!==f||ut!==P){if((A!==100||M!==100)&&(i.blendEquation(i.FUNC_ADD),A=100,M=100),ut)switch(L){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ct("WebGLState: Invalid blending: ",L);break}else switch(L){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ct("WebGLState: Invalid blending: ",L);break}D=null,E=null,S=null,w=null,_.set(0,0,0),T=0,f=L,P=ut}return}xe=xe||ce,re=re||j,Ie=Ie||_e,(ce!==A||xe!==M)&&(i.blendEquationSeparate(Nt[ce],Nt[xe]),A=ce,M=xe),(j!==D||_e!==E||re!==S||Ie!==w)&&(i.blendFuncSeparate(We[j],We[_e],We[re],We[Ie]),D=j,E=_e,S=re,w=Ie),(we.equals(_)===!1||yt!==T)&&(i.blendColor(we.r,we.g,we.b,yt),_.copy(we),T=yt),f=L,P=!1}function vt(L,ce){L.side===2?ye(i.CULL_FACE):te(i.CULL_FACE);let j=L.side===1;ce&&(j=!j),Ke(j),L.blending===1&&L.transparent===!1?nt(0):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function bt(L){L!==0?(te(i.CULL_FACE),L!==B&&(L===1?i.cullFace(i.BACK):L===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),B=L}function _t(L){L!==N&&(q&&i.lineWidth(L),N=L)}function Zt(L,ce,j){L?(te(i.POLYGON_OFFSET_FILL),(F!==ce||k!==j)&&(F=ce,k=j,s.getReversed()&&(ce=-ce),i.polygonOffset(ce,j))):ye(i.POLYGON_OFFSET_FILL)}function At(L){L?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function ht(L){L===void 0&&(L=i.TEXTURE0+Q-1),ne!==L&&(i.activeTexture(L),ne=L)}function U(L,ce,j){j===void 0&&(ne===null?j=i.TEXTURE0+Q-1:j=ne);let _e=ie[j];_e===void 0&&(_e={type:void 0,texture:void 0},ie[j]=_e),(_e.type!==L||_e.texture!==ce)&&(ne!==j&&(i.activeTexture(j),ne=j),i.bindTexture(L,ce||Z[L]),_e.type=L,_e.texture=ce)}function zt(){const L=ie[ne];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(L){ct("WebGLState:",L)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(L){ct("WebGLState:",L)}}function m(){try{i.texSubImage2D(...arguments)}catch(L){ct("WebGLState:",L)}}function O(){try{i.texSubImage3D(...arguments)}catch(L){ct("WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){ct("WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(L){ct("WebGLState:",L)}}function oe(){try{i.texStorage2D(...arguments)}catch(L){ct("WebGLState:",L)}}function he(){try{i.texStorage3D(...arguments)}catch(L){ct("WebGLState:",L)}}function J(){try{i.texImage2D(...arguments)}catch(L){ct("WebGLState:",L)}}function ee(){try{i.texImage3D(...arguments)}catch(L){ct("WebGLState:",L)}}function de(L){return h[L]!==void 0?h[L]:i.getParameter(L)}function Re(L,ce){h[L]!==ce&&(i.pixelStorei(L,ce),h[L]=ce)}function fe(L){gt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),gt.copy(L))}function le(L){Je.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Je.copy(L))}function Le(L,ce){let j=l.get(ce);j===void 0&&(j=new WeakMap,l.set(ce,j));let _e=j.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(ce,L.name),j.set(L,_e))}function Ne(L,ce){const _e=l.get(ce).get(L);c.get(ce)!==_e&&(i.uniformBlockBinding(ce,_e,L.__bindingPointIndex),c.set(ce,_e))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},ne=null,ie={},d={},p=new WeakMap,v=[],y=null,g=!1,f=null,A=null,D=null,E=null,M=null,S=null,w=null,_=new ke(0,0,0),T=0,P=!1,I=null,B=null,N=null,F=null,k=null,gt.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:te,disable:ye,bindFramebuffer:Pe,drawBuffers:Me,useProgram:qe,setBlending:nt,setMaterial:vt,setFlipSided:Ke,setCullFace:bt,setLineWidth:_t,setPolygonOffset:Zt,setScissorTest:At,activeTexture:ht,bindTexture:U,unbindTexture:zt,compressedTexImage2D:st,compressedTexImage3D:b,texImage2D:J,texImage3D:ee,pixelStorei:Re,getParameter:de,updateUBOMapping:Le,uniformBlockBinding:Ne,texStorage2D:oe,texStorage3D:he,texSubImage2D:m,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:fe,viewport:le,reset:Be}}function Yp(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap,h=new Set;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,m){return v?new OffscreenCanvas(b,m):Lr("canvas")}function g(b,m,O){let V=1;const $=st(b);if(($.width>O||$.height>O)&&(V=O/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const oe=Math.floor(V*$.width),he=Math.floor(V*$.height);d===void 0&&(d=y(oe,he));const J=m?y(oe,he):d;return J.width=oe,J.height=he,J.getContext("2d").drawImage(b,0,0,oe,he),He("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+oe+"x"+he+")."),J}else return"data"in b&&He("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function f(b){return b.generateMipmaps}function A(b){i.generateMipmap(b)}function D(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,m,O,V,$,oe=!1){if(b!==null){if(i[b]!==void 0)return i[b];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he;V&&(he=e.get("EXT_texture_norm16"),he||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=m;if(m===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&he&&(J=he.R16_EXT),O===i.SHORT&&he&&(J=he.R16_SNORM_EXT)),m===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),m===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&he&&(J=he.RG16_EXT),O===i.SHORT&&he&&(J=he.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),m===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),m===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),m===i.RGB&&(O===i.UNSIGNED_SHORT&&he&&(J=he.RGB16_EXT),O===i.SHORT&&he&&(J=he.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),m===i.RGBA){const ee=oe?_a:rt.getTransfer($);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=ee===Et?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&he&&(J=he.RGBA16_EXT),O===i.SHORT&&he&&(J=he.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(b,m){let O;return b?m===null||m===1014||m===1020?O=i.DEPTH24_STENCIL8:m===1015?O=i.DEPTH32F_STENCIL8:m===1012&&(O=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===1014||m===1020?O=i.DEPTH_COMPONENT24:m===1015?O=i.DEPTH_COMPONENT32F:m===1012&&(O=i.DEPTH_COMPONENT16),O}function S(b,m){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==1003&&b.minFilter!==1006?Math.log2(Math.max(m.width,m.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?m.mipmaps.length:1}function w(b){const m=b.target;m.removeEventListener("dispose",w),T(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&h.delete(m)}function _(b){const m=b.target;m.removeEventListener("dispose",_),I(m)}function T(b){const m=n.get(b);if(m.__webglInit===void 0)return;const O=b.source,V=p.get(O);if(V){const $=V[m.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(b),Object.keys(V).length===0&&p.delete(O)}n.remove(b)}function P(b){const m=n.get(b);i.deleteTexture(m.__webglTexture);const O=b.source,V=p.get(O);delete V[m.__cacheKey],s.memory.textures--}function I(b){const m=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(m.__webglFramebuffer[V]))for(let $=0;$<m.__webglFramebuffer[V].length;$++)i.deleteFramebuffer(m.__webglFramebuffer[V][$]);else i.deleteFramebuffer(m.__webglFramebuffer[V]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[V])}else{if(Array.isArray(m.__webglFramebuffer))for(let V=0;V<m.__webglFramebuffer.length;V++)i.deleteFramebuffer(m.__webglFramebuffer[V]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let V=0;V<m.__webglColorRenderbuffer.length;V++)m.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[V]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const O=b.textures;for(let V=0,$=O.length;V<$;V++){const oe=n.get(O[V]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),s.memory.textures--),n.remove(O[V])}n.remove(b)}let B=0;function N(){B=0}function F(){return B}function k(b){B=b}function Q(){const b=B;return b>=r.maxTextures&&He("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,b}function q(b){const m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function ae(b,m){const O=n.get(b);if(b.isVideoTexture&&U(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const V=b.image;if(V===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(O,b,m);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+m)}function K(b,m){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ye(O,b,m);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+m)}function ne(b,m){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ye(O,b,m);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+m)}function ie(b,m){const O=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){Pe(O,b,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+m)}const Ue={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ee={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},gt={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function Je(b,m){if(m.type===1015&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===1006||m.magFilter===1007||m.magFilter===1005||m.magFilter===1008||m.minFilter===1006||m.minFilter===1007||m.minFilter===1005||m.minFilter===1008)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ue[m.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ue[m.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ue[m.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Ee[m.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Ee[m.minFilter]),m.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,gt[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===1003||m.minFilter!==1005&&m.minFilter!==1008||m.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function at(b,m){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,m.addEventListener("dispose",w));const V=m.source;let $=p.get(V);$===void 0&&($={},p.set(V,$));const oe=q(m);if(oe!==b.__cacheKey){$[oe]===void 0&&($[oe]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),$[oe].usedTimes++;const he=$[b.__cacheKey];he!==void 0&&($[b.__cacheKey].usedTimes--,he.usedTimes===0&&P(m)),b.__cacheKey=oe,b.__webglTexture=$[oe].texture}return O}function Z(b,m,O){return Math.floor(Math.floor(b/O)/m)}function te(b,m,O,V){const oe=b.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,O,V,m.data);else{oe.sort((Re,fe)=>Re.start-fe.start);let he=0;for(let Re=1;Re<oe.length;Re++){const fe=oe[he],le=oe[Re],Le=fe.start+fe.count,Ne=Z(le.start,m.width,4),Be=Z(fe.start,m.width,4);le.start<=Le+1&&Ne===Be&&Z(le.start+le.count-1,m.width,4)===Ne?fe.count=Math.max(fe.count,le.start+le.count-fe.start):(++he,oe[he]=le)}oe.length=he+1;const J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),de=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Re=0,fe=oe.length;Re<fe;Re++){const le=oe[Re],Le=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),Be=Le%m.width,L=Math.floor(Le/m.width),ce=Ne,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),t.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,ce,j,O,V,m.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,de)}}function ye(b,m,O){let V=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(V=i.TEXTURE_3D);const $=at(b,m),oe=m.source;t.bindTexture(V,b.__webglTexture,i.TEXTURE0+O);const he=n.get(oe);if(oe.version!==he.__version||$===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const j=rt.getPrimaries(rt.workingColorSpace),_e=m.colorSpace===""?null:rt.getPrimaries(m.colorSpace),xe=m.colorSpace===""||j===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let ee=g(m.image,!1,r.maxTextureSize);ee=zt(m,ee);const de=a.convert(m.format,m.colorSpace),Re=a.convert(m.type);let fe=E(m.internalFormat,de,Re,m.normalized,m.colorSpace,m.isVideoTexture);Je(V,m);let le;const Le=m.mipmaps,Ne=m.isVideoTexture!==!0,Be=he.__version===void 0||$===!0,L=oe.dataReady,ce=S(m,ee);if(m.isDepthTexture)fe=M(m.format===1027,m.type),Be&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,fe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,de,Re,null));else if(m.isDataTexture)if(Le.length>0){Ne&&Be&&t.texStorage2D(i.TEXTURE_2D,ce,fe,Le[0].width,Le[0].height);for(let j=0,_e=Le.length;j<_e;j++)le=Le[j],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,de,Re,le.data):t.texImage2D(i.TEXTURE_2D,j,fe,le.width,le.height,0,de,Re,le.data);m.generateMipmaps=!1}else Ne?(Be&&t.texStorage2D(i.TEXTURE_2D,ce,fe,ee.width,ee.height),L&&te(m,ee,de,Re)):t.texImage2D(i.TEXTURE_2D,0,fe,ee.width,ee.height,0,de,Re,ee.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Ne&&Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,fe,Le[0].width,Le[0].height,ee.depth);for(let j=0,_e=Le.length;j<_e;j++)if(le=Le[j],m.format!==1023)if(de!==null)if(Ne){if(L)if(m.layerUpdates.size>0){const xe=No(le.width,le.height,m.format,m.type);for(const re of m.layerUpdates){const Ie=le.data.subarray(re*xe/le.data.BYTES_PER_ELEMENT,(re+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,re,le.width,le.height,1,de,Ie)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,de,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,fe,le.width,le.height,ee.depth,0,le.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,le.width,le.height,ee.depth,de,Re,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,fe,le.width,le.height,ee.depth,0,de,Re,le.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{Ne&&Be&&t.texStorage2D(i.TEXTURE_2D,ce,fe,Le[0].width,Le[0].height);for(let j=0,_e=Le.length;j<_e;j++)le=Le[j],m.format!==1023?de!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,de,le.data):t.compressedTexImage2D(i.TEXTURE_2D,j,fe,le.width,le.height,0,le.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le.width,le.height,de,Re,le.data):t.texImage2D(i.TEXTURE_2D,j,fe,le.width,le.height,0,de,Re,le.data)}else if(m.isDataArrayTexture)if(Ne){if(Be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,fe,ee.width,ee.height,ee.depth),L)if(m.layerUpdates.size>0){const j=No(ee.width,ee.height,m.format,m.type);for(const _e of m.layerUpdates){const xe=ee.data.subarray(_e*j/ee.data.BYTES_PER_ELEMENT,(_e+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,ee.width,ee.height,1,de,Re,xe)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,de,Re,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,ee.width,ee.height,ee.depth,0,de,Re,ee.data);else if(m.isData3DTexture)Ne?(Be&&t.texStorage3D(i.TEXTURE_3D,ce,fe,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,de,Re,ee.data)):t.texImage3D(i.TEXTURE_3D,0,fe,ee.width,ee.height,ee.depth,0,de,Re,ee.data);else if(m.isFramebufferTexture){if(Be)if(Ne)t.texStorage2D(i.TEXTURE_2D,ce,fe,ee.width,ee.height);else{let j=ee.width,_e=ee.height;for(let xe=0;xe<ce;xe++)t.texImage2D(i.TEXTURE_2D,xe,fe,j,_e,0,de,Re,null),j>>=1,_e>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){const j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),h.add(m),j.onpaint=_e=>{const xe=_e.changedElements;for(const re of h)xe.includes(re.image)&&(re.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{const xe=i.RGBA,re=i.RGBA,Ie=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,re,Ie,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ne&&Be){const j=st(Le[0]);t.texStorage2D(i.TEXTURE_2D,ce,fe,j.width,j.height)}for(let j=0,_e=Le.length;j<_e;j++)le=Le[j],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de,Re,le):t.texImage2D(i.TEXTURE_2D,j,fe,de,Re,le);m.generateMipmaps=!1}else if(Ne){if(Be){const j=st(ee);t.texStorage2D(i.TEXTURE_2D,ce,fe,j.width,j.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Re,ee)}else t.texImage2D(i.TEXTURE_2D,0,fe,de,Re,ee);f(m)&&A(V),he.__version=oe.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function Pe(b,m,O){if(m.image.length!==6)return;const V=at(b,m),$=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const oe=n.get($);if($.version!==oe.__version||V===!0){t.activeTexture(i.TEXTURE0+O);const he=rt.getPrimaries(rt.workingColorSpace),J=m.colorSpace===""?null:rt.getPrimaries(m.colorSpace),ee=m.colorSpace===""||he===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const de=m.isCompressedTexture||m.image[0].isCompressedTexture,Re=m.image[0]&&m.image[0].isDataTexture,fe=[];for(let re=0;re<6;re++)!de&&!Re?fe[re]=g(m.image[re],!0,r.maxCubemapSize):fe[re]=Re?m.image[re].image:m.image[re],fe[re]=zt(m,fe[re]);const le=fe[0],Le=a.convert(m.format,m.colorSpace),Ne=a.convert(m.type),Be=E(m.internalFormat,Le,Ne,m.normalized,m.colorSpace),L=m.isVideoTexture!==!0,ce=oe.__version===void 0||V===!0,j=$.dataReady;let _e=S(m,le);Je(i.TEXTURE_CUBE_MAP,m);let xe;if(de){L&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Be,le.width,le.height);for(let re=0;re<6;re++){xe=fe[re].mipmaps;for(let Ie=0;Ie<xe.length;Ie++){const we=xe[Ie];m.format!==1023?Le!==null?L?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Be,we.width,we.height,0,we.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,0,0,we.width,we.height,Le,Ne,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie,Be,we.width,we.height,0,Le,Ne,we.data)}}}else{if(xe=m.mipmaps,L&&ce){xe.length>0&&_e++;const re=st(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Be,re.width,re.height)}for(let re=0;re<6;re++)if(Re){L?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,fe[re].width,fe[re].height,Le,Ne,fe[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,fe[re].width,fe[re].height,0,Le,Ne,fe[re].data);for(let Ie=0;Ie<xe.length;Ie++){const yt=xe[Ie].image[re].image;L?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,yt.width,yt.height,Le,Ne,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Be,yt.width,yt.height,0,Le,Ne,yt.data)}}else{L?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Le,Ne,fe[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Be,Le,Ne,fe[re]);for(let Ie=0;Ie<xe.length;Ie++){const we=xe[Ie];L?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,0,0,Le,Ne,we.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ie+1,Be,Le,Ne,we.image[re])}}}f(m)&&A(i.TEXTURE_CUBE_MAP),oe.__version=$.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function Me(b,m,O,V,$,oe){const he=a.convert(O.format,O.colorSpace),J=a.convert(O.type),ee=E(O.internalFormat,he,J,O.normalized,O.colorSpace),de=n.get(m),Re=n.get(O);if(Re.__renderTarget=m,!de.__hasExternalTextures){const fe=Math.max(1,m.width>>oe),le=Math.max(1,m.height>>oe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,oe,ee,fe,le,m.depth,0,he,J,null):t.texImage2D($,oe,ee,fe,le,0,he,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ht(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,$,Re.__webglTexture,0,At(m)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,$,Re.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(b,m,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),m.depthBuffer){const V=m.depthTexture,$=V&&V.isDepthTexture?V.type:null,oe=M(m.stencilBuffer,$),he=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(m),oe,m.width,m.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(m),oe,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,oe,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,b)}else{const V=m.textures;for(let $=0;$<V.length;$++){const oe=V[$],he=a.convert(oe.format,oe.colorSpace),J=a.convert(oe.type),ee=E(oe.internalFormat,he,J,oe.normalized,oe.colorSpace);ht(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At(m),ee,m.width,m.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,At(m),ee,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,ee,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Nt(b,m,O){const V=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(m.depthTexture);if($.__renderTarget=m,(!$.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),V){if($.__webglInit===void 0&&($.__webglInit=!0,m.depthTexture.addEventListener("dispose",w)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Je(i.TEXTURE_CUBE_MAP,m.depthTexture);const de=a.convert(m.depthTexture.format),Re=a.convert(m.depthTexture.type);let fe;m.depthTexture.format===1026?fe=i.DEPTH_COMPONENT24:m.depthTexture.format===1027&&(fe=i.DEPTH24_STENCIL8);for(let le=0;le<6;le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,fe,m.width,m.height,0,de,Re,null)}}else ae(m.depthTexture,0);const oe=$.__webglTexture,he=At(m),J=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ee=m.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===1026)ht(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else if(m.depthTexture.format===1027)ht(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(b){const m=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),V){const $=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),m.__depthDisposeCallback=$}m.__boundDepthTexture=V}if(b.depthTexture&&!m.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Nt(m.__webglFramebuffer[V],b,V);else{const V=b.texture.mipmaps;V&&V.length>0?Nt(m.__webglFramebuffer[0],b,0):Nt(m.__webglFramebuffer,b,0)}else if(O){m.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[V]),m.__webglDepthbuffer[V]===void 0)m.__webglDepthbuffer[V]=i.createRenderbuffer(),qe(m.__webglDepthbuffer[V],b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=m.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),qe(m.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(b,m,O){const V=n.get(b);m!==void 0&&Me(V.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&We(b)}function vt(b){const m=b.texture,O=n.get(b),V=n.get(m);b.addEventListener("dispose",_);const $=b.textures,oe=b.isWebGLCubeRenderTarget===!0,he=$.length>1;if(he||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=m.version,s.memory.textures++),oe){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ee=0;ee<m.mipmaps.length;ee++)O.__webglFramebuffer[J][ee]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<m.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(he)for(let J=0,ee=$.length;J<ee;J++){const de=n.get($[J]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),s.memory.textures++)}if(b.samples>0&&ht(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<$.length;J++){const ee=$[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const de=a.convert(ee.format,ee.colorSpace),Re=a.convert(ee.type),fe=E(ee.internalFormat,de,Re,ee.normalized,ee.colorSpace,b.isXRRenderTarget===!0),le=At(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Je(i.TEXTURE_CUBE_MAP,m);for(let J=0;J<6;J++)if(m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)Me(O.__webglFramebuffer[J][ee],b,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else Me(O.__webglFramebuffer[J],b,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(m)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let J=0,ee=$.length;J<ee;J++){const de=$[J],Re=n.get(de);let fe=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,Re.__webglTexture),Je(fe,de),Me(O.__webglFramebuffer,b,de,i.COLOR_ATTACHMENT0+J,fe,0),f(de)&&A(fe)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,V.__webglTexture),Je(J,m),m.mipmaps&&m.mipmaps.length>0)for(let ee=0;ee<m.mipmaps.length;ee++)Me(O.__webglFramebuffer[ee],b,m,i.COLOR_ATTACHMENT0,J,ee);else Me(O.__webglFramebuffer,b,m,i.COLOR_ATTACHMENT0,J,0);f(m)&&A(J),t.unbindTexture()}b.depthBuffer&&We(b)}function Ke(b){const m=b.textures;for(let O=0,V=m.length;O<V;O++){const $=m[O];if(f($)){const oe=D(b),he=n.get($).__webglTexture;t.bindTexture(oe,he),A(oe),t.unbindTexture()}}}const bt=[],_t=[];function Zt(b){if(b.samples>0){if(ht(b)===!1){const m=b.textures,O=b.width,V=b.height;let $=i.COLOR_BUFFER_BIT;const oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(b),J=m.length>1;if(J)for(let de=0;de<m.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ee=b.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let de=0;de<m.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const Re=n.get(m[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,O,V,0,0,O,V,$,i.NEAREST),c===!0&&(bt.length=0,_t.length=0,bt.push(i.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(bt.push(oe),_t.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,_t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<m.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,he.__webglColorRenderbuffer[de]);const Re=n.get(m[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){const m=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function At(b){return Math.min(r.maxSamples,b.samples)}function ht(b){const m=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function U(b){const m=s.render.frame;u.get(b)!==m&&(u.set(b,m),b.update())}function zt(b,m){const O=b.colorSpace,V=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ga&&O!==""&&(rt.getTransfer(O)===Et?(V!==1023||$!==1009)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ct("WebGLTextures: Unsupported texture color space:",O)),m}function st(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=N,this.getTextureUnits=F,this.setTextureUnits=k,this.setTexture2D=ae,this.setTexture2DArray=K,this.setTexture3D=ne,this.setTextureCube=ie,this.rebindTextures=nt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $p(i,e){function t(n,r=""){let a;const s=rt.getTransfer(r);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(s===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===36196||n===37492)return s===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return a.COMPRESSED_R11_EAC;if(n===37489)return a.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return a.COMPRESSED_RG11_EAC;if(n===37491)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===37808)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return s===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===36492)return s===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===36283)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new El(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends Di{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,v=null;const y=typeof XRWebGLBinding<"u",g=new Jp,f={},A=t.getContextAttributes();let D=null,E=null;const M=[],S=[],w=new Oe;let _=null,T=null;const P=new An;P.viewport=new Ut;const I=new An;I.viewport=new Ut;const B=[P,I],N=new iu;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=M[Z];return te===void 0&&(te=new qa,M[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=M[Z];return te===void 0&&(te=new qa,M[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=M[Z];return te===void 0&&(te=new qa,M[Z]=te),te.getHandSpace()};function Q(Z){const te=S.indexOf(Z.inputSource);if(te===-1)return;const ye=M[te];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||s),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function q(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",ae);for(let Z=0;Z<M.length;Z++){const te=S[Z];te!==null&&(S[Z]=null,M[Z].disconnect(te))}F=null,k=null,g.reset();for(const Z in f)delete f[Z];if(e.setRenderTarget(D),p=null,d=null,h=null,r=null,E=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),T!==null){const Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",q),r.addEventListener("inputsourceschange",ae),A.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Pe=null,Me=null;A.depth&&(Me=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=A.stencil?1027:1026,Pe=A.stencil?1020:1014);const qe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(qe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Tn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Ur(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const ye={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Tn(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),at.setContext(r),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(Z){for(let te=0;te<Z.removed.length;te++){const ye=Z.removed[te],Pe=S.indexOf(ye);Pe>=0&&(S[Pe]=null,M[Pe].disconnect(ye))}for(let te=0;te<Z.added.length;te++){const ye=Z.added[te];let Pe=S.indexOf(ye);if(Pe===-1){for(let qe=0;qe<M.length;qe++)if(qe>=S.length){S.push(ye),Pe=qe;break}else if(S[qe]===null){S[qe]=ye,Pe=qe;break}if(Pe===-1)break}const Me=M[Pe];Me&&Me.connect(ye)}}const K=new z,ne=new z;function ie(Z,te,ye){K.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(ye.matrixWorld);const Pe=K.distanceTo(ne),Me=te.projectionMatrix.elements,qe=ye.projectionMatrix.elements,Nt=Me[14]/(Me[10]-1),We=Me[14]/(Me[10]+1),nt=(Me[9]+1)/Me[5],vt=(Me[9]-1)/Me[5],Ke=(Me[8]-1)/Me[0],bt=(qe[8]+1)/qe[0],_t=Nt*Ke,Zt=Nt*bt,At=Pe/(-Ke+bt),ht=At*-Ke;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ht),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Me[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=Nt+At,zt=We+At,st=_t-ht,b=Zt+(Pe-ht),m=nt*We/zt*U,O=vt*We/zt*U;Z.projectionMatrix.makePerspective(st,b,m,O,U,zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ue(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),N.near=I.near=P.near=te,N.far=I.far=P.far=ye,(F!==N.near||k!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,k=N.far),N.layers.mask=Z.layers.mask|6,P.layers.mask=N.layers.mask&-5,I.layers.mask=N.layers.mask&-3;const Pe=Z.parent,Me=N.cameras;Ue(N,Pe);for(let qe=0;qe<Me.length;qe++)Ue(Me[qe],Pe);Me.length===2?ie(N,P,I):N.projectionMatrix.copy(P.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ee(Z,N,Pe)};function Ee(Z,te,ye){ye===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ir*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return f[Z]};let gt=null;function Je(Z,te){if(u=te.getViewerPose(l||s),v=te,u!==null){const ye=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Pe=!1;ye.length!==N.cameras.length&&(N.cameras.length=0,Pe=!0);for(let We=0;We<ye.length;We++){const nt=ye[We];let vt=null;if(p!==null)vt=p.getViewport(nt);else{const bt=h.getViewSubImage(d,nt);vt=bt.viewport,We===0&&(e.setRenderTargetTextures(E,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(E))}let Ke=B[We];Ke===void 0&&(Ke=new An,Ke.layers.enable(We),Ke.viewport=new Ut,B[We]=Ke),Ke.matrix.fromArray(nt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(nt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(vt.x,vt.y,vt.width,vt.height),We===0&&(N.matrix.copy(Ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Pe===!0&&N.cameras.push(Ke)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();const We=h.getDepthInformation(ye[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Me&&Me.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let We=0;We<ye.length;We++){const nt=ye[We].camera;if(nt){let vt=f[nt];vt||(vt=new El,f[nt]=vt);const Ke=h.getCameraImage(nt);vt.sourceTexture=Ke}}}}for(let ye=0;ye<M.length;ye++){const Pe=S[ye],Me=M[ye];Pe!==null&&Me!==void 0&&Me.update(Pe,te,l||s)}gt&&gt(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const at=new Rl;at.setAnimationLoop(Je),this.setAnimationLoop=function(Z){gt=Z},this.dispose=function(){}}}const jp=new Ft,Fl=new Xe;Fl.set(-1,0,0,0,1,0,0,0,1);function em(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,yl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,A,D,E){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(g,f):f.isMeshLambertMaterial?(a(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(g,f),h(g,f)):f.isMeshPhongMaterial?(a(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(g,f),d(g,f),f.isMeshPhysicalMaterial&&p(g,f,E)):f.isMeshMatcapMaterial?(a(g,f),v(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),y(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(s(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,A,D):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const A=e.get(f),D=A.envMap,E=A.envMapRotation;D&&(g.envMap.value=D,g.envMapRotation.value.setFromMatrix4(jp.makeRotationFromEuler(E)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fl),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function s(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,A,D){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*A,g.scale.value=D*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,A){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function y(g,f){const A=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tm(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const S=M.program;n.uniformBlockBinding(E,S)}function l(E,M){let S=r[E.id];S===void 0&&(g(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",A));const w=M.program;n.updateUBOMapping(E,w);const _=e.render.frame;a[E.id]!==_&&(d(E),a[E.id]=_)}function u(E){const M=h();E.__bindingPointIndex=M;const S=i.createBuffer(),w=E.__size,_=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function h(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=r[E.id],S=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=S.length;_<T;_++){const P=S[_];if(Array.isArray(P))for(let I=0,B=P.length;I<B;I++)p(P[I],_,I,w);else p(P,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,M,S,w){if(y(E,M,S,w)===!0){const _=E.__offset,T=E.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){const B=T[I],N=f(B);v(B,E.__data,P),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(T,E.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,E.__data)}}function v(E,M,S){typeof E=="number"||typeof E=="boolean"?M[0]=E:E.isMatrix3?(M[0]=E.elements[0],M[1]=E.elements[1],M[2]=E.elements[2],M[3]=0,M[4]=E.elements[3],M[5]=E.elements[4],M[6]=E.elements[5],M[7]=0,M[8]=E.elements[6],M[9]=E.elements[7],M[10]=E.elements[8],M[11]=0):ArrayBuffer.isView(E)?M.set(new E.constructor(E.buffer,E.byteOffset,M.length)):E.toArray(M,S)}function y(E,M,S,w){const _=E.value,T=M+"_"+S;if(w[T]===void 0)return typeof _=="number"||typeof _=="boolean"?w[T]=_:ArrayBuffer.isView(_)?w[T]=_.slice():w[T]=_.clone(),!0;{const P=w[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(E){const M=E.uniforms;let S=0;const w=16;for(let T=0,P=M.length;T<P;T++){const I=Array.isArray(M[T])?M[T]:[M[T]];for(let B=0,N=I.length;B<N;B++){const F=I[B],k=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,q=k.length;Q<q;Q++){const ae=k[Q],K=f(ae),ne=S%w,ie=ne%K.boundary,Ue=ne+ie;S+=ie,Ue!==0&&w-Ue<K.storage&&(S+=w-Ue),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}const _=S%w;return _>0&&(S+=w-_),E.__size=S,E.__cache={},this}function f(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(E)?(M.boundary=16,M.storage=E.byteLength):He("WebGLRenderer: Unsupported uniform value type.",E),M}function A(E){const M=E.target;M.removeEventListener("dispose",A);const S=s.indexOf(M.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete a[M.id]}function D(){for(const E in r)i.deleteBuffer(r[E]);s=[],r={},a={}}return{bind:c,update:l,dispose:D}}const nm=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function im(){return Hn===null&&(Hn=new zc(nm,16,16,1030,1016),Hn.name="DFG_LUT",Hn.minFilter=1006,Hn.magFilter=1006,Hn.wrapS=1001,Hn.wrapT=1001,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class rm{constructor(e={}){const{canvas:t=tc(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=1009}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=s;const y=p,g=new Set([1033,1031,1029]),f=new Set([1009,1014,1012,1020,1017,1018]),A=new Uint32Array(4),D=new Int32Array(4),E=new z;let M=null,S=null;const w=[],_=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,B=null,N=null,F=null,k=null;this._outputColorSpace=xn;let Q=0,q=0,ae=null,K=-1,ne=null;const ie=new Ut,Ue=new Ut;let Ee=null;const gt=new ke(0);let Je=0,at=t.width,Z=t.height,te=1,ye=null,Pe=null;const Me=new Ut(0,0,at,Z),qe=new Ut(0,0,at,Z);let Nt=!1;const We=new Ps;let nt=!1,vt=!1;const Ke=new Ft,bt=new z,_t=new Ut,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function ht(){return ae===null?te:1}let U=n;function zt(x,C){return t.getContext(x,C)}let st,b,m,O,V,$,oe,he,J,ee,de,Re,fe,le,Le,Ne,Be,L,ce,j,_e,xe,re;try{const x={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",yt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),U===null){const C="webgl2";if(U=zt(C,x),U===null)throw zt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(x){throw t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ct("WebGLRenderer: "+x.message),x}function Ie(){st=new nf(U),st.init(),_e=new $p(U,st),b=new qh(U,st,e,_e),m=new qp(U,st),b.reversedDepthBuffer&&d&&m.buffers.depth.setReversed(!0),N=U.createFramebuffer(),F=U.createFramebuffer(),k=U.createFramebuffer(),O=new sf(U),V=new Lp,$=new Yp(U,st,m,V,b,_e,O),oe=new tf(P),he=new ou(U),xe=new Wh(U,he),J=new rf(U,he,O,xe),ee=new lf(U,J,he,xe,O),L=new of(U,b,$),Le=new Yh(V),de=new Dp(P,oe,st,b,xe,Le),Re=new em(P,V),fe=new Up,le=new zp(st),Be=new kh(P,oe,m,ee,v,c),Ne=new Xp(P,ee,b),re=new tm(U,O,b,m),ce=new Xh(U,st,O),j=new af(U,st,O),O.programs=de.programs,P.capabilities=b,P.extensions=st,P.properties=V,P.renderLists=fe,P.shadowMap=Ne,P.state=m,P.info=O}y!==1009&&(T=new uf(y,t.width,t.height,o,r,a));const we=new Qp(P,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(x){x!==void 0&&(te=x,this.setSize(at,Z,!1))},this.getSize=function(x){return x.set(at,Z)},this.setSize=function(x,C,W=!0){if(we.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}at=x,Z=C,t.width=Math.floor(x*te),t.height=Math.floor(C*te),W===!0&&(t.style.width=x+"px",t.style.height=C+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(at*te,Z*te).floor()},this.setDrawingBufferSize=function(x,C,W){at=x,Z=C,te=W,t.width=Math.floor(x*W),t.height=Math.floor(C*W),this.setViewport(0,0,x,C)},this.setEffects=function(x){if(y===1009){ct("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let C=0;C<x.length;C++)if(x[C].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ie)},this.getViewport=function(x){return x.copy(Me)},this.setViewport=function(x,C,W,G){x.isVector4?Me.set(x.x,x.y,x.z,x.w):Me.set(x,C,W,G),m.viewport(ie.copy(Me).multiplyScalar(te).round())},this.getScissor=function(x){return x.copy(qe)},this.setScissor=function(x,C,W,G){x.isVector4?qe.set(x.x,x.y,x.z,x.w):qe.set(x,C,W,G),m.scissor(Ue.copy(qe).multiplyScalar(te).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(x){m.setScissorTest(Nt=x)},this.setOpaqueSort=function(x){ye=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,W=!0){let G=0;if(x){let H=!1;if(ae!==null){const me=ae.texture.format;H=g.has(me)}if(H){const me=ae.texture.type,Se=f.has(me),pe=Be.getClearColor(),Te=Be.getClearAlpha(),Ce=pe.r,Fe=pe.g,Ye=pe.b;Se?(A[0]=Ce,A[1]=Fe,A[2]=Ye,A[3]=Te,U.clearBufferuiv(U.COLOR,0,A)):(D[0]=Ce,D[1]=Fe,D[2]=Ye,D[3]=Te,U.clearBufferiv(U.COLOR,0,D))}else G|=U.COLOR_BUFFER_BIT}C&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),B=x},this.dispose=function(){t.removeEventListener("webglcontextlost",yt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Be.dispose(),fe.dispose(),le.dispose(),V.dispose(),oe.dispose(),ee.dispose(),xe.dispose(),re.dispose(),de.dispose(),we.dispose(),we.removeEventListener("sessionstart",xi),we.removeEventListener("sessionend",zr),wn.stop()};function yt(x){x.preventDefault(),co("WebGLRenderer: Context Lost."),I=!0}function ut(){co("WebGLRenderer: Context Restored."),I=!1;const x=O.autoReset,C=Ne.enabled,W=Ne.autoUpdate,G=Ne.needsUpdate,H=Ne.type;Ie(),O.autoReset=x,Ne.enabled=C,Ne.autoUpdate=W,Ne.needsUpdate=G,Ne.type=H}function Sn(x){ct("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function tn(x){const C=x.target;C.removeEventListener("dispose",tn),Aa(C)}function Aa(x){Gr(x),V.remove(x)}function Gr(x){const C=V.get(x).programs;C!==void 0&&(C.forEach(function(W){de.releaseProgram(W)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,W,G,H,me){C===null&&(C=Zt);const Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,pe=Si(x,C,W,G,H);m.setMaterial(G,Se);let Te=W.index,Ce=1;if(G.wireframe===!0){if(Te=J.getWireframeAttribute(W),Te===void 0)return;Ce=2}const Fe=W.drawRange,Ye=W.attributes.position;let be=Fe.start*Ce,ot=(Fe.start+Fe.count)*Ce;me!==null&&(be=Math.max(be,me.start*Ce),ot=Math.min(ot,(me.start+me.count)*Ce)),Te!==null?(be=Math.max(be,0),ot=Math.min(ot,Te.count)):Ye!=null&&(be=Math.max(be,0),ot=Math.min(ot,Ye.count));const Ct=ot-be;if(Ct<0||Ct===1/0)return;xe.setup(H,G,pe,W,Te);let it,et=ce;if(Te!==null&&(it=he.get(Te),et=j,et.setIndex(it)),H.isMesh)G.wireframe===!0?(m.setLineWidth(G.wireframeLinewidth*ht()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if(H.isLine){let Xt=G.linewidth;Xt===void 0&&(Xt=1),m.setLineWidth(Xt*ht()),H.isLineSegments?et.setMode(U.LINES):H.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else H.isPoints?et.setMode(U.POINTS):H.isSprite&&et.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Xt=H._multiDrawStarts,ge=H._multiDrawCounts,qt=H._multiDrawCount,Qe=Te?he.get(Te).bytesPerElement:1,gn=V.get(G).currentProgram.getUniforms();for(let Pt=0;Pt<qt;Pt++)gn.setValue(U,"_gl_DrawID",Pt),et.render(Xt[Pt]/Qe,ge[Pt])}else if(H.isInstancedMesh)et.renderInstances(be,Ct,H.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ge=Math.min(W.instanceCount,Xt);et.renderInstances(be,Ct,ge)}else et.render(be,Ct)};function fr(x,C,W,G){B!==null&&x.isNodeMaterial&&B.setObject(G,x),nt===!0&&Le.setState(x,W,!1),x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,Mn(x,C,G),x.side=0,x.needsUpdate=!0,Mn(x,C,G),x.side=2):Mn(x,C,G)}this.compile=function(x,C,W=null){W===null&&(W=x),B!==null&&B.renderStart(x,C,W),S=le.get(W),S.init(C),_.push(S),W.traverseVisible(function(H){H.isLight&&H.layers.test(C.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),x!==W&&x.traverseVisible(function(H){H.isLight&&H.layers.test(C.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights(),B!==null&&B.updateLights(S.state.lightsArray),vt=this.localClippingEnabled,nt=Le.init(this.clippingPlanes,vt),nt===!0&&Le.setGlobalState(this.clippingPlanes,C),B!==null&&Ne.render(S.state.shadowsArray,W,C);const G=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const me=H.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const pe=me[Se];fr(pe,W,C,H),G.add(pe)}else fr(me,W,C,H),G.add(me)}),S=_.pop(),B!==null&&B.renderEnd(),G},this.compileAsync=function(x,C,W=null){const G=this.compile(x,C,W);return new Promise(H=>{function me(){if(G.forEach(function(Se){const Te=V.get(Se).currentProgram;(Te===void 0||Te.isReady())&&G.delete(Se)}),G.size===0){H(x);return}setTimeout(me,10)}st.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Li=null;function Ii(x){Li&&Li(x)}function xi(){wn.stop()}function zr(){wn.start()}const wn=new Rl;wn.setAnimationLoop(Ii),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(x){Li=x,we.setAnimationLoop(x),x===null?wn.stop():wn.start()},we.addEventListener("sessionstart",xi),we.addEventListener("sessionend",zr),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(x,C);const W=we.enabled===!0&&we.isPresenting===!0,G=T!==null&&(ae===null||W)&&T.begin(P,ae);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(C),C=we.getCamera()),x.isScene===!0&&x.onBeforeRender(P,x,C,ae),S=le.get(x,_.length),S.init(C),S.state.textureUnits=$.getTextureUnits(),_.push(S),Ke.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),We.setFromProjectionMatrix(Ke,2e3,C.reversedDepth),vt=this.localClippingEnabled,nt=Le.init(this.clippingPlanes,vt),M=fe.get(x,w.length),M.init(),w.push(M),we.enabled===!0&&we.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&Ht(Se,C,-1/0,P.sortObjects)}Ht(x,C,0,P.sortObjects),M.finish(),B!==null&&B.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(ye,Pe),At=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,At&&Be.addToRenderList(M,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Le.beginShadows();const H=S.state.shadowsArray;if(Ne.render(H,x,C),nt===!0&&Le.endShadows(),(G&&T.hasRenderPass())===!1){const Se=M.opaque,pe=M.transmissive;if(S.setupLights(),C.isArrayCamera){const Te=C.cameras;if(pe.length>0)for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Ye=Te[Ce];Ui(Se,pe,x,Ye)}At&&Be.render(x);for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Ye=Te[Ce];vi(M,x,Ye,Ye.viewport)}}else pe.length>0&&Ui(Se,pe,x,C),At&&Be.render(x),vi(M,x,C)}ae!==null&&q===0&&($.updateMultisampleRenderTarget(ae),$.updateRenderTargetMipmap(ae)),G&&T.end(P),x.isScene===!0&&x.onAfterRender(P,x,C),xe.resetDefaultState(),K=-1,ne=null,_.pop(),_.length>0?(S=_[_.length-1],$.setTextureUnits(S.state.textureUnits),nt===!0&&Le.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,w.pop(),w.length>0?M=w[w.length-1]:M=null,B!==null&&B.renderEnd()};function Ht(x,C,W,G){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)W=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLightProbeGrid)S.pushLightProbeGrid(x);else if(x.isLight)S.pushLight(x),x.castShadow&&S.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(We)){G&&_t.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ke);const Se=ee.update(x),pe=x.material;pe.visible&&M.push(x,Se,pe,W,_t.z,null,C)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(We))){const Se=ee.update(x),pe=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),_t.copy(x.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),_t.copy(Se.boundingSphere.center)),_t.applyMatrix4(x.matrixWorld).applyMatrix4(Ke)),Array.isArray(pe)){const Te=Se.groups;for(let Ce=0,Fe=Te.length;Ce<Fe;Ce++){const Ye=Te[Ce],be=pe[Ye.materialIndex];be&&be.visible&&M.push(x,Se,be,W,_t.z,Ye,C)}}else pe.visible&&M.push(x,Se,pe,W,_t.z,null,C)}}const me=x.children;for(let Se=0,pe=me.length;Se<pe;Se++)Ht(me[Se],C,W,G)}function vi(x,C,W,G){const{opaque:H,transmissive:me,transparent:Se}=x;S.setupLightsView(W),nt===!0&&Le.setGlobalState(P.clippingPlanes,W),G&&m.viewport(ie.copy(G)),H.length>0&&oi(H,C,W),me.length>0&&oi(me,C,W),Se.length>0&&oi(Se,C,W),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Ui(x,C,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[G.id]===void 0){const be=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[G.id]=new Tn(1,1,{generateMipmaps:!0,type:be?1016:1009,minFilter:1008,samples:Math.max(4,b.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const me=S.state.transmissionRenderTarget[G.id],Se=G.viewport||ie;me.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const pe=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(me),P.getClearColor(gt),Je=P.getClearAlpha(),Je<1&&P.setClearColor(16777215,.5),P.clear(),At&&Be.render(W);const Fe=P.toneMapping;P.toneMapping=0;const Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),S.setupLightsView(G),nt===!0&&Le.setGlobalState(P.clippingPlanes,G),oi(x,W,G),$.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me),st.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let ot=0,Ct=C.length;ot<Ct;ot++){const it=C[ot],{object:et,geometry:Xt,material:ge,group:qt}=it;if(ge.side===2&&et.layers.test(G.layers)){const Qe=ge.side;ge.side=1,ge.needsUpdate=!0,mn(et,W,G,Xt,ge,qt),ge.side=Qe,ge.needsUpdate=!0,be=!0}}be===!0&&($.updateMultisampleRenderTarget(me),$.updateRenderTargetMipmap(me))}P.setRenderTarget(pe,Te,Ce),P.setClearColor(gt,Je),Ye!==void 0&&(G.viewport=Ye),P.toneMapping=Fe}function oi(x,C,W){const G=C.isScene===!0?C.overrideMaterial:null;for(let H=0,me=x.length;H<me;H++){const Se=x[H],{object:pe,geometry:Te,group:Ce}=Se;let Fe=Se.material;Fe.allowOverride===!0&&G!==null&&(Fe=G),pe.layers.test(W.layers)&&mn(pe,C,W,Te,Fe,Ce)}}function mn(x,C,W,G,H,me){B!==null&&H.isNodeMaterial&&B.setObject(x,H),x.onBeforeRender(P,C,W,G,H,me),x.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(P,C,W,G,x,me),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,P.renderBufferDirect(W,C,G,H,x,me),H.side=0,H.needsUpdate=!0,P.renderBufferDirect(W,C,G,H,x,me),H.side=2):P.renderBufferDirect(W,C,G,H,x,me),x.onAfterRender(P,C,W,G,H,me)}function Mn(x,C,W){C.isScene!==!0&&(C=Zt);const G=V.get(x),H=S.state.lights,me=S.state.shadowsArray,Se=H.state.version,pe=de.getParameters(x,H.state,me,C,W,S.state.lightProbeGridArray),Te=de.getProgramCacheKey(pe);let Ce=G.programs;G.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,G.fog=C.fog;const Fe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;G.envMap=oe.get(x.envMap||G.environment,Fe),G.envMapRotation=G.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",tn),Ce=new Map,G.programs=Ce);let Ye=Ce.get(Te);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Se)return $n(x,pe),Ye}else pe.uniforms=de.getUniforms(x),B!==null&&x.isNodeMaterial&&B.build(x,W,pe),x.onBeforeCompile(pe,P),Ye=de.acquireProgram(pe,Te),Ce.set(Te,Ye),G.uniforms=pe.uniforms;const be=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=Le.uniform),$n(x,pe),G.needsLights=wt(x),G.lightsStateVersion=Se,G.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.sunLights.value=H.state.sun,be.sunLightShadows.value=H.state.sunShadow,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.sunShadowMatrix.value=H.state.sunShadowMatrix,be.sunShadowCascade.value=H.state.sunShadowCascade,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=S.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function Yn(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=ma.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function $n(x,C){const W=V.get(x);W.outputColorSpace=C.outputColorSpace,W.batching=C.batching,W.batchingColor=C.batchingColor,W.instancing=C.instancing,W.instancingColor=C.instancingColor,W.instancingMorph=C.instancingMorph,W.skinning=C.skinning,W.morphTargets=C.morphTargets,W.morphNormals=C.morphNormals,W.morphColors=C.morphColors,W.morphTargetsCount=C.morphTargetsCount,W.numClippingPlanes=C.numClippingPlanes,W.numIntersection=C.numClipIntersection,W.vertexAlphas=C.vertexAlphas,W.vertexTangents=C.vertexTangents,W.toneMapping=C.toneMapping}function pr(x,C){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;E.setFromMatrixPosition(C.matrixWorld);for(let W=0,G=x.length;W<G;W++){const H=x[W];if(H.texture!==null&&H.boundingBox.containsPoint(E))return H}return null}function Si(x,C,W,G,H){C.isScene!==!0&&(C=Zt),$.resetTextureUnits();const me=C.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?C.environment:null,pe=ae===null?P.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:rt.workingColorSpace,Te=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ce=oe.get(G.envMap||Se,Te),Fe=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!W.morphAttributes.position,ot=!!W.morphAttributes.normal,Ct=!!W.morphAttributes.color;let it=0;G.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(it=P.toneMapping);const et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=et!==void 0?et.length:0,ge=V.get(G),qt=S.state.lights;if(nt===!0&&(vt===!0||x!==ne)){const pt=x===ne&&G.id===K;Le.setState(G,x,pt)}let Qe=!1;G.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==qt.state.version||ge.outputColorSpace!==pe||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==Ce||G.fog===!0&&ge.fog!==me||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==Le.numPlanes||ge.numIntersection!==Le.numIntersection)||ge.vertexAlphas!==Fe||ge.vertexTangents!==Ye||ge.morphTargets!==be||ge.morphNormals!==ot||ge.morphColors!==Ct||ge.toneMapping!==it||ge.morphTargetsCount!==Xt||!!ge.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ge.__version=G.version);let gn=ge.currentProgram;Qe===!0&&(gn=Mn(G,C,H),B&&G.isNodeMaterial&&B.onUpdateProgram(G,gn,ge));let Pt=!1,cn=!1,Kn=!1;const ft=gn.getUniforms(),Lt=ge.uniforms;if(m.useProgram(gn.program)&&(Pt=!0,cn=!0,Kn=!0),G.id!==K&&(K=G.id,cn=!0),ge.needsLights){const pt=pr(S.state.lightProbeGridArray,H);ge.lightProbeGrid!==pt&&(ge.lightProbeGrid=pt,cn=!0)}if(Pt||ne!==x){m.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ft.setValue(U,"projectionMatrix",x.projectionMatrix),ft.setValue(U,"viewMatrix",x.matrixWorldInverse);const _n=ft.map.cameraPosition;_n!==void 0&&_n.setValue(U,bt.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),ne!==x&&(ne=x,cn=!0,Kn=!0)}if(ge.needsLights&&(qt.state.sunShadowMap.length>0&&ft.setValue(U,"sunShadowMap",qt.state.sunShadowMap,$),qt.state.directionalShadowMap.length>0&&ft.setValue(U,"directionalShadowMap",qt.state.directionalShadowMap,$),qt.state.spotShadowMap.length>0&&ft.setValue(U,"spotShadowMap",qt.state.spotShadowMap,$),qt.state.pointShadowMap.length>0&&ft.setValue(U,"pointShadowMap",qt.state.pointShadowMap,$)),H.isSkinnedMesh){ft.setOptional(U,H,"bindMatrix"),ft.setOptional(U,H,"bindMatrixInverse");const pt=H.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ft.setValue(U,"boneTexture",pt.boneTexture,$))}H.isBatchedMesh&&(ft.setOptional(U,H,"batchingTexture"),ft.setValue(U,"batchingTexture",H._matricesTexture,$),ft.setOptional(U,H,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",H._indirectTexture,$),ft.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",H._colorsTexture,$));const Rn=W.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&L.update(H,W,gn),(cn||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,ft.setValue(U,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&C.environment!==null&&(Lt.envMapIntensity.value=C.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=im()),cn){if(ft.setValue(U,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&Ot(Lt,Kn),me&&G.fog===!0&&Re.refreshFogUniforms(Lt,me),Re.refreshMaterialUniforms(Lt,G,te,Z,S.state.transmissionRenderTarget[x.id]),ge.needsLights&&ge.lightProbeGrid){const pt=ge.lightProbeGrid;Lt.probesSH.value=pt.texture,Lt.probesMin.value.copy(pt.boundingBox.min),Lt.probesMax.value.copy(pt.boundingBox.max),Lt.probesResolution.value.copy(pt.resolution)}ma.upload(U,Yn(ge),Lt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ma.upload(U,Yn(ge),Lt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(U,"center",H.center),ft.setValue(U,"modelViewMatrix",H.modelViewMatrix),ft.setValue(U,"normalMatrix",H.normalMatrix),ft.setValue(U,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){const pt=G.uniformsGroups;for(let _n=0,Gn=pt.length;_n<Gn;_n++){const Cn=pt[_n];re.update(Cn,gn),re.bind(Cn,gn)}}return gn}function Ot(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.sunLights.needsUpdate=C,x.sunLightShadows.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function wt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(x,C,W){const G=V.get(x);G.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),V.get(x.texture).__webglTexture=C,V.get(x.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const W=V.get(x);W.__webglFramebuffer=C,W.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(x,C=0,W=0){ae=x,Q=C,q=W;let G=null,H=!1,me=!1;if(x){const pe=V.get(x);if(pe.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(U.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(x.viewport),Ue.copy(x.scissor),Ee=x.scissorTest,m.viewport(ie),m.scissor(Ue),m.setScissorTest(Ee),K=-1;return}else if(pe.__webglFramebuffer===void 0)$.setupRenderTarget(x);else if(pe.__hasExternalTextures)$.rebindTextures(x,V.get(x.texture).__webglTexture,V.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Fe=x.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&V.has(Fe)&&(x.width!==Fe.image.width||x.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(me=!0);const Ce=V.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ce[C])?G=Ce[C][W]:G=Ce[C],H=!0):x.samples>0&&$.useMultisampledRTT(x)===!1?G=V.get(x).__webglMultisampledFramebuffer:Array.isArray(Ce)?G=Ce[W]:G=Ce,ie.copy(x.viewport),Ue.copy(x.scissor),Ee=x.scissorTest}else ie.copy(Me).multiplyScalar(te).floor(),Ue.copy(qe).multiplyScalar(te).floor(),Ee=Nt;if(W!==0&&(G=N),m.bindFramebuffer(U.FRAMEBUFFER,G)&&m.drawBuffers(x,G),m.viewport(ie),m.scissor(Ue),m.setScissorTest(Ee),H){const pe=V.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+C,pe.__webglTexture,W)}else if(me){const pe=C;for(let Te=0;Te<x.textures.length;Te++){const Ce=V.get(x.textures[Te]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,W,pe)}}else if(x!==null&&W!==0){const pe=V.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,W)}K=-1};function mr(x){const C=V.get(x);return(C.__readFormat!==x.format||C.__readType!==x.type)&&(C.__readFormat=x.format,C.__readType=x.type,C.__formatReadable=b.textureFormatReadable(x.format),C.__typeReadable=b.textureTypeReadable(x.type)),C}this.readRenderTargetPixels=function(x,C,W,G,H,me,Se,pe=0){if(!(x&&x.isWebGLRenderTarget)){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){m.bindFramebuffer(U.FRAMEBUFFER,Te);try{const Ce=x.textures[pe],Fe=Ce.format,Ye=Ce.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);const be=mr(Ce);if(be.__formatReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-G&&W>=0&&W<=x.height-H&&U.readPixels(C,W,G,H,_e.convert(Fe),_e.convert(Ye),me)}finally{const Ce=ae!==null?V.get(ae).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(x,C,W,G,H,me,Se,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=V.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(C>=0&&C<=x.width-G&&W>=0&&W<=x.height-H){m.bindFramebuffer(U.FRAMEBUFFER,Te);const Ce=x.textures[pe],Fe=Ce.format,Ye=Ce.type;x.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pe);const be=mr(Ce);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(C,W,G,H,_e.convert(Fe),_e.convert(Ye),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Ct=ae!==null?V.get(ae).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,Ct);const it=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await nc(U,it,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ot),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ot),U.deleteSync(it),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,W=0){const G=Math.pow(2,-W),H=Math.floor(x.image.width*G),me=Math.floor(x.image.height*G),Se=C!==null?C.x:0,pe=C!==null?C.y:0;$.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Se,pe,H,me),m.unbindTexture()},this.copyTextureToTexture=function(x,C,W=null,G=null,H=0,me=0){let Se,pe,Te,Ce,Fe,Ye,be,ot,Ct;const it=x.isCompressedTexture?x.mipmaps[me]:x.image;if(W!==null)Se=W.max.x-W.min.x,pe=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,Ce=W.min.x,Fe=W.min.y,Ye=W.isBox3?W.min.z:0;else{const Lt=Math.pow(2,-H);Se=Math.floor(it.width*Lt),pe=Math.floor(it.height*Lt),x.isDataArrayTexture?Te=it.depth:x.isData3DTexture?Te=Math.floor(it.depth*Lt):Te=1,Ce=0,Fe=0,Ye=0}G!==null?(be=G.x,ot=G.y,Ct=G.z):(be=0,ot=0,Ct=0);const et=_e.convert(C.format),Xt=_e.convert(C.type);let ge;C.isData3DTexture?($.setTexture3D(C,0),ge=U.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?($.setTexture2DArray(C,0),ge=U.TEXTURE_2D_ARRAY):($.setTexture2D(C,0),ge=U.TEXTURE_2D),m.activeTexture(U.TEXTURE0),m.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,C.flipY),m.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),m.pixelStorei(U.UNPACK_ALIGNMENT,C.unpackAlignment);const qt=m.getParameter(U.UNPACK_ROW_LENGTH),Qe=m.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=m.getParameter(U.UNPACK_SKIP_PIXELS),Pt=m.getParameter(U.UNPACK_SKIP_ROWS),cn=m.getParameter(U.UNPACK_SKIP_IMAGES);m.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),m.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),m.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),m.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const Kn=x.isDataArrayTexture||x.isData3DTexture,ft=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const Lt=V.get(x),Rn=V.get(C),pt=V.get(Lt.__renderTarget),_n=V.get(Rn.__renderTarget);m.bindFramebuffer(U.READ_FRAMEBUFFER,pt.__webglFramebuffer),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let Gn=0;Gn<Te;Gn++)Kn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(x).__webglTexture,H,Ye+Gn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(C).__webglTexture,me,Ct+Gn)),U.blitFramebuffer(Ce,Fe,Se,pe,be,ot,Se,pe,U.DEPTH_BUFFER_BIT,U.NEAREST);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||V.has(x)){const Lt=V.get(x),Rn=V.get(C);m.bindFramebuffer(U.READ_FRAMEBUFFER,F),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let pt=0;pt<Te;pt++)Kn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,H,Ye+pt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,H),ft?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rn.__webglTexture,me,Ct+pt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rn.__webglTexture,me),H!==0?U.blitFramebuffer(Ce,Fe,Se,pe,be,ot,Se,pe,U.COLOR_BUFFER_BIT,U.NEAREST):ft?U.copyTexSubImage3D(ge,me,be,ot,Ct+pt,Ce,Fe,Se,pe):U.copyTexSubImage2D(ge,me,be,ot,Ce,Fe,Se,pe);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ft?x.isDataTexture||x.isData3DTexture?U.texSubImage3D(ge,me,be,ot,Ct,Se,pe,Te,et,Xt,it.data):C.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,me,be,ot,Ct,Se,pe,Te,et,it.data):U.texSubImage3D(ge,me,be,ot,Ct,Se,pe,Te,et,Xt,it):x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,be,ot,Se,pe,et,Xt,it.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,be,ot,it.width,it.height,et,it.data):U.texSubImage2D(U.TEXTURE_2D,me,be,ot,Se,pe,et,Xt,it);m.pixelStorei(U.UNPACK_ROW_LENGTH,qt),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),m.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),m.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),m.pixelStorei(U.UNPACK_SKIP_IMAGES,cn),me===0&&C.generateMipmaps&&U.generateMipmap(ge),m.unbindTexture()},this.initRenderTarget=function(x){V.get(x).__webglFramebuffer===void 0&&$.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?$.setTextureCube(x,0):x.isData3DTexture?$.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?$.setTexture2DArray(x,0):$.setTexture2D(x,0),m.unbindTexture()},this.resetState=function(){Q=0,q=0,ae=null,m.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function am(){const i=new Xn,e=new Qc;let t=!1;const n=[],r=(o,c,l)=>{const u=new Pi({transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1,alphaTest:.015}),h=new mt(new Yt(c,l),u);h.raycast=()=>{};const d={mesh:h,ready:!1};return n.push(d),u.map=e.load(o,p=>{if(t){p.dispose();return}d.ready=!0}),u.map.colorSpace=xn,u.map.anisotropy=4,i.add(h),h},a=r("/showcase/desk/kraft-envelope-open-empty.png",4.8,7.2),s=r("/showcase/desk/water-glass-overhead.png",3,3);return a.rotation.z=Math.PI+.65,{group:i,layout(o,c,l,u){const h=c<=720,d=!h&&c<=1100,p=h?.48:d?1.02:1.38,v=h?.33:d?.5:.65;a.scale.setScalar(p),a.position.set(-o*1.24+(h?2.15:d?2.75:3.2),h?5.75:d?5.65:6.55,-1.6),s.scale.setScalar(v);const y=7.85*Math.tan(Qt.degToRad(65)/2),g=v*1.5*l/(2*y)*.84,f=Math.max(l*.32,u-g-(h?36:64));s.position.set(-o*1.19+(h?.59:d?1.6:1.9),(1-2*f/l)*y,-1.25)},update(o,c){const l=(1-Qt.smoothstep(o,0,.28))*(1-c);i.visible=l>.002;for(const u of n)u.mesh.material.opacity=u.ready?l:0},dispose(){t=!0,i.removeFromParent();for(const{mesh:o}of n)o.geometry.dispose(),o.material.map?.dispose(),o.material.dispose()}}}const Vn=2.2/160,_i=260,je={w:1.2,h:(1124+_i)/540,d:.0045,r:.022,notch:.024,bevel:8e-4},Un=je.h+.32,Wt={fov:65,y:.3,z:6.6,tiltDeg:15},ni={speed:5,z:-1.05,camZ:4,portraitCamZ:3.5,portraitY:.74,flyOut:8},mi={angle:Qt.degToRad(8.75),pixels:10,stiffness:150,damping:18},rl=-1.7,sm=280,om=.14,lm=20,pa={coral:new ke("#f4efe7"),peach:new ke("#f8f4ec"),cream:new ke("#fffcf6"),burnt:new ke("#efe8dd")},er=i=>`rgba(42,39,36,${i})`,Nn='"Fragment Mono", "PingFang SC", "SFMono-Regular", Menlo, monospace',Dr='-apple-system, "SF Pro Text", "PingFang SC", "Hiragino Sans GB", system-ui, sans-serif',xt=648,Dt=1124+_i,Rt={x:26,y:80,w:596,h:728,r:34},cm=.37,On=Rt.w/xt*cm*je.w,Fs=On*.85,Nl=Fs*.92,um=je.h/2-(Rt.y+Rt.h/2)/Dt*je.h,Ol=On*1.12,Ea=`if (uHole > 0.5 && length(vCardXY - vec2(0.0, ${um})) < ${Ol}) discard;`,Ts=1.8,al=24,sl=[{angle:.64,a:[.12,.42],b:[.53,.92]},{angle:1.45,a:[.84,.73],b:[.17,.72]},{angle:-2.3,a:[.39,.09],b:[.89,.57]},{angle:2.45,a:[.89,.42],b:[.48,.92]},{angle:3,a:[.76,.17],b:[.68,.87]}],Ci=942+_i,nr=je.h/2-Ci/Dt*je.h,ur=[{paper:"#faf9f5",stub:"#f8f7f3"},{paper:"#e1eaf2",stub:"#d9e3ec"},{paper:"#f7e3d5",stub:"#f2dbcb"},{paper:"#e7efdf",stub:"#e0e9d7"},{paper:"#f5f0dc",stub:"#f0ead3"}],fn={ink:"#22211f",muted:"#797269",accent:"#9b4639",dot:"#df622f"},ol='"Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif',ll=.75,Gt=Qt.lerp,dn=i=>Math.min(1,Math.max(0,i)),gs=i=>Math.atan2(Math.sin(i),Math.cos(i)),wr=(i,e,t)=>i+(((e-i)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI)*t;function rr(i,e,t,n,r,a){const s=Math.min(a,n/2,r/2);i.beginPath(),i.moveTo(e+s,t),i.arcTo(e+n,t,e+n,t+r,s),i.arcTo(e+n,t+r,e,t+r,s),i.arcTo(e,t+r,e,t,s),i.arcTo(e,t,e+n,t,s),i.closePath()}function Bl(i,e,t){const n=e.match(/[A-Za-z0-9@.&'’\-]+\s*|\s+|./gu)??[],r=[];let a="";for(const s of n){const o=a+s;a&&i.measureText(o.trimEnd()).width>t?(r.push(a.trimEnd()),a=s.trimStart()):a=o}return a.trim()&&r.push(a.trimEnd()),r}function ii(i){const e=new Ds(i);return e.colorSpace=xn,e.anisotropy=8,e.minFilter=1008,e.magFilter=1006,e.needsUpdate=!0,e}function on(i,e){let t=Math.imul(i+1,374761393)^Math.imul(e+1,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function or(i,e){const t=Math.floor(i),n=Math.floor(e),r=i-t,a=e-n,s=r*r*(3-2*r),o=a*a*(3-2*a);return Gt(Gt(on(t,n),on(t+1,n),s),Gt(on(t,n+1),on(t+1,n+1),s),o)}function dm(i,e){const t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=n.data,a=new Uint8ClampedArray(r),s=e.width*4,o=[-4,4,-s,s];for(let c=2;c<e.height-2;c++){const l=c>_i+740&&c<Ci-14,u=c>_i+838&&c<Ci-14,h=u?.12:l?1:.24,d=u?1:.94+.06*or(17,c*.21);for(let p=2;p<e.width-2;p++){const v=(c*e.width+p)*4+3,y=a[v];let g=v;for(const T of o)a[v+T]>a[g]&&(g=v+T);if(!a[g])continue;const f=on(p,c),A=or(p*.34+13,c*.38+7),D=or(p*.048+31,c*.085+19),E=Math.min(a[v-8],a[v+8],a[v-s*2],a[v+s*2])/255,M=dn((A-.63)/.18)*.86*E+(f>.89?.38*E:0),S=1-h*((1-D)*.18+M),w=a[g]*(u?.05:.1+h*.38)*A,_=Math.max(y,w);y||(r[v-3]=a[g-3],r[v-2]=a[g-2],r[v-1]=a[g-1]),r[v]=Math.round(_*Math.max(u?.94:.1,S)*d)}}t.putImageData(n,0,0),i.save(),i.globalAlpha=.1,i.drawImage(e,.25,-.1),i.globalAlpha=1,i.drawImage(e,0,0),i.restore()}function cl(i,e,t=document.createElement("canvas")){const n=ur[e%ur.length];t.width=xt,t.height=Dt;const r=t.getContext("2d");let a=r;a.fillStyle=n.paper,a.fillRect(0,0,xt,Dt),a.fillStyle=n.stub,a.fillRect(0,Ci,xt,Dt-Ci);const s=a.createLinearGradient(0,0,xt,Dt*.12);s.addColorStop(0,"rgba(126,117,101,0.028)"),s.addColorStop(.22,"rgba(255,255,255,0.2)"),s.addColorStop(.72,"rgba(155,148,132,0.012)"),s.addColorStop(1,"rgba(255,255,255,0.08)"),a.fillStyle=s,a.fillRect(0,0,xt,Dt);const o=document.createElement("canvas");o.width=xt/4,o.height=Dt/4;const c=o.getContext("2d"),l=c.createImageData(o.width,o.height);for(let M=0;M<o.height;M++)for(let S=0;S<o.width;S++){const w=(M*o.width+S)*4,_=on(S+79,M+113)*.6+or(S*.14,M*.1)*.4;l.data.set([74,73,70,Math.round(2+_*10)],w)}c.putImageData(l,0,0),a.drawImage(o,0,0,xt,Dt);let u=8127;for(let M=0;M<3e4;M++){u=Math.imul(u,1664525)+1013904223>>>0;const S=u%xt;u=Math.imul(u,1664525)+1013904223>>>0;const w=u%Dt;a.fillStyle=M%3?"rgba(107,99,87,0.065)":"rgba(255,255,255,0.22)",a.fillRect(S,w,M%7===0?2:1,M%5===0?4:1)}for(let M=0;M<2400;M++){const S=on(M,37)*xt,w=on(M,91)*Dt,_=or(S*.017,w*.019),T=Math.round(34+on(M,143)*52),P=.1+_*.15,I=.8+on(M,151)*1.5;a.fillStyle=`rgba(${T},${T},${T},${P})`,a.fillRect(S,w,I,M%23===0?3.2:.8+on(M,157))}const h=document.createElement("canvas");h.width=xt,h.height=Dt,a=h.getContext("2d"),a.fillStyle=fn.accent,a.fillRect(28,29,9,9),a.fillStyle=fn.ink,a.font=`400 17px ${Nn}`,a.fillText("YULAN ZHANG",48,40),a.textAlign="right",a.fillText(`NO. ${i.ruler}`,xt-28,40),a.textAlign="left",a.translate(0,_i);const[d,p]=i.date;a.fillStyle=fn.ink,a.textBaseline="alphabetic",a.font=`400 54px ${Dr}`,a.textAlign="left",a.fillText(d,32,803);const v=a.measureText(d).width;a.textAlign="right",a.fillText(p,xt-32,803);const y=32+v+24,g=xt-32-a.measureText(p).width-24;a.fillStyle=fn.muted,a.fillRect(y,783,g-y,1.5),a.font=`400 16px ${Nn}`,a.fillText(i.dateSub.toUpperCase(),xt-32,835),a.strokeStyle=fn.muted,a.lineWidth=1.5,a.setLineDash([5,6]),a.beginPath(),a.moveTo(24,Ci-_i),a.lineTo(xt-24,Ci-_i),a.stroke(),a.setLineDash([]),a.fillStyle="#151412",a.textAlign="left";let f=84;a.font=`900 ${f}px ${ol}`;const A=a.measureText(i.cardTitle).width;A>xt-72&&(f=Math.floor(f*(xt-72)/A)),a.font=`900 ${f}px ${ol}`,a.strokeStyle="#151412",a.lineWidth=f*.018,a.lineJoin="round",a.strokeText(i.cardTitle,32,911),a.fillText(i.cardTitle,32,911),i.kicker&&(a.fillStyle=fn.ink,a.beginPath(),a.arc(43,979,8,0,Math.PI*2),a.fill(),a.font=`500 21px ${Dr}`,a.fillText(i.kicker,61,987)),a.fillStyle=fn.muted,a.font=`400 16px ${Dr}`,Bl(a,i.tagline,250).slice(0,3).forEach((M,S)=>a.fillText(M,34,(i.kicker?1016:987)+S*21)),a.fillStyle=fn.ink;let D=0;for(const M of i.cardTitle)D=D*31+M.codePointAt(0)>>>0;const E=D;for(let M=320;;){D=D*1103515245+12345>>>0;const S=1.6*(1+(D>>>28)%4);if(M+S>xt-40)break;a.fillRect(M,1003,S,44),M+=S+2+(D>>>24&3)}return a.font=`400 13px ${Nn}`,a.fillText(String(E%1e8).padStart(8,"0"),320,1059),a.fillStyle=fn.muted,a.fillRect(34,1075,xt-68,1),a.font=`400 12px ${Nn}`,a.fillText("SELECTED WORK / PORTFOLIO",34,1100),a.textAlign="right",a.fillText(`20${p}`,xt-34,1100),dm(r,h),t}function ul(i,e,t=document.createElement("canvas")){t.width=xt,t.height=Dt;const n=t.getContext("2d");return n.fillStyle=ur[e%ur.length].paper,n.fillRect(0,0,xt,Dt),i.img?Gl(n,"LOADING…"):hm(n,i),t}function hm(i,e){const{x:t,y:n,w:r,h:a,r:s}=Rt;i.save(),rr(i,t,n,r,a,s),i.clip(),i.fillStyle="#1a0f0a",i.fillRect(t,n,r,a);const o=i.createRadialGradient(t+r*.2,n,0,t+r*.2,n,r*.9);o.addColorStop(0,"rgba(232,137,107,0.38)"),o.addColorStop(1,"rgba(232,137,107,0)"),i.fillStyle=o,i.fillRect(t,n,r,a);const c=80;if(e.cardArt){i.fillStyle="#f6bd8d";const l=e.cardArt.split(`
`);let u=55;i.font=`400 ${u}px ${Nn}`;const h=Math.max(...l.map(p=>i.measureText(p).width));h>r-2*c&&(u*=(r-2*c)/h),i.font=`400 ${u}px ${Nn}`,i.textAlign="center",i.textBaseline="middle";const d=u*1.2;if(l.forEach((p,v)=>i.fillText(p,t+r/2,n+a*.43+(v-(l.length-1)/2)*d)),!e.cardDesc){const p=l[l.length-1];i.fillRect(t+r/2+i.measureText(p).width/2+6,n+a*.43+(l.length-1)/2*d-u*.4,16,u*.8)}}e.cardDesc&&(i.fillStyle="rgba(246,237,226,0.62)",i.font=`400 20px ${Dr}`,i.textBaseline="alphabetic",i.textAlign="center",Bl(i,e.cardDesc,r-2*c).forEach((u,h)=>i.fillText(u,t+r/2,n+a*.7+h*30))),i.restore(),i.textBaseline="alphabetic"}function Gl(i,e){const{x:t,y:n,w:r,h:a,r:s}=Rt;i.save(),rr(i,t,n,r,a,s),i.clip(),i.fillStyle="#d3d0cb",i.fillRect(t,n,r,a),i.fillStyle="rgba(31,29,27,0.07)",rr(i,t+36,n+48,r*.42,16,8),i.fill(),[.72,.6,.66].forEach((o,c)=>{rr(i,t+36,n+96+c*30,r*o,10,5),i.fill()}),rr(i,t+36,n+a-200,r-72,140,14),i.fill(),i.fillStyle="rgba(31,29,27,0.55)",i.font=`400 16px ${Nn}`,i.letterSpacing="2px",i.textAlign="center",i.textBaseline="middle",i.fillText(e,t+r/2,n+a/2-20),i.restore()}function dl(i,e,t){const n=new Image;n.decoding="async",n.onload=()=>{const r=i.getContext("2d"),{x:a,y:s,w:o,h:c,r:l}=Rt;r.save(),rr(r,a,s,o,c,l),r.clip();const u=Math.max(o/n.width,c/n.height);r.drawImage(n,a+(o-n.width*u)/2,s+(c-n.height*u)/2,n.width*u,n.height*u),r.restore(),e.needsUpdate=!0},n.onerror=()=>{const r=i.getContext("2d");Gl(r,"图片未能加载"),e.needsUpdate=!0},n.src=t}function _s(i,e,t,n){const{w:r,d:a,r:s,bevel:o,h:c}=je,l=192,u=Math.max(12,Math.ceil((e-i)/c*96)),h=[],d=[],p=[],v=[],y=S=>{const w=Math.abs(S*12%1-.5)*r/12;return w<.027?.021*(1+Math.cos(Math.PI*w/.027))/2:0},g=(S,w,_)=>{const T=i+(n?y(S)+_:0),P=e-(t?y(S)+_:0),I=Gt(T,P,w),B=Math.min(t?e-I:10,n?I-i:10),N=B<s?s-Math.sqrt(Math.max(0,s*s-(s-B)**2)):0,F=je.notch*Math.exp(-(((I-nr)/je.notch)**2));return[Gt(-1,1,S)*(r/2-_-N-F),I]},f=(S,w,_,T)=>{const P=h.length/3;return h.push(S,w,_),d.push(...T),p.push((S+r/2)/r,(w+c/2)/c),P};for(const S of[1,-1]){const w=h.length/3;for(let _=0;_<=u;_++)for(let T=0;T<=l;T++){const[P,I]=g(T/l,_/u,o);f(P,I,S*a/2,[0,0,S])}for(let _=0;_<u;_++)for(let T=0;T<l;T++){const P=w+_*(l+1)+T,I=P+1,B=P+l+1,N=B+1;S>0?v.push(P,I,B,I,N,B):v.push(P,B,I,I,B,N)}}const A=[];for(let S=0;S<l;S++)A.push([S/l,0]);for(let S=0;S<u;S++)A.push([1,S/u]);for(let S=l;S>0;S--)A.push([S/l,1]);for(let S=u;S>0;S--)A.push([0,S/u]);const D=h.length/3,E=[[a/2,o,1],[a/2-o,0,0],[-a/2+o,0,0],[-a/2,o,-1]];for(const[S,w,_]of E)A.forEach(([T,P],I)=>{const[B,N]=g(T,P,w),F=g(...A[(I+A.length-1)%A.length],w),k=g(...A[(I+1)%A.length],w),Q=new z(k[1]-F[1],F[0]-k[0],0).normalize();f(B,N,S,_?[0,0,_]:[Q.x,Q.y,0])});for(let S=0;S<E.length-1;S++)A.forEach((w,_)=>{const T=D+S*A.length+_,P=D+S*A.length+(_+1)%A.length,I=T+A.length,B=P+A.length;v.push(T,I,P,P,I,B)});const M=new Bn;return M.setAttribute("position",new pn(h,3)),M.setAttribute("normal",new pn(d,3)),M.setAttribute("uv",new pn(p,2)),M.setIndex(v),M.computeBoundingSphere(),M}const Br=`
  float receiptHeight(vec2 p, float bend) {
    return -bend * p.y * p.y;
  }
`,ya="transformed.z += receiptHeight(transformed.xy, uBend);";function fm(){const i=document.createElement("canvas");i.width=i.height=256;const e=i.getContext("2d"),t=e.createImageData(256,256);let n=8127;for(let a=0;a<t.data.length;a+=4){n=Math.imul(n,1664525)+1013904223>>>0;const s=128+n%39-19;t.data.set([s,s,s,255],a)}e.putImageData(t,0,0);const r=new Ds(i);return r.wrapS=r.wrapT=1e3,r.repeat.set(3,6),r}const Ns=`
  float waterRadius(float a) {
    float r = 0.89 + 0.038 * sin(3.0 * a + uPhase)
      + 0.021 * cos(5.0 * a + uPhase * 0.7)
      + 0.025 * sin(2.0 * a + uPhase * 1.4);
    // 固定方向上的缓慢起伏，避免波峰绕着轮廓游走。
    return r + 0.032 * sin(3.0 * a + uPhase) * sin(uTime * 0.72)
      + 0.021 * cos(2.0 * a - uPhase) * sin(uTime * 0.51 + uPhase);
  }
`;function pm(i){const e=new vs,t=[],n=(s,o,c,l,u,h)=>{const d=new mt(new Yt(s,o),new Pi({color:new ke().setScalar(h),side:2}));d.position.set(c,l,u),d.lookAt(0,0,0),e.add(d),t.push(d)};e.background=new ke(.12,.12,.12),n(2.2,5.5,-3.2,3.1,3.5,2.6),n(.7,5,3.6,.8,2.8,1.8),n(5.5,1.6,0,-3.5,2.2,1.4);const r=new Ms(i),a=r.fromScene(e,.02,.1,30);return r.dispose(),t.forEach(s=>{s.geometry.dispose(),s.material.dispose()}),a}const zl=`#include <lights_fragment_end>
  if (uIntroFill > 0.0) {
    IncidentLight introFill;
    introFill.color = vec3(uIntroFill);
    introFill.direction = normalize((viewMatrix * vec4(-0.24, 0.38, 0.90, 0.0)).xyz);
    introFill.visible = true;
    RE_Direct(introFill, geometryPosition, geometryNormal, geometryViewDir,
      geometryClearcoatNormal, material, reflectedLight);
  }`;function mm(i,e,t,n){const r=new Is({color:"#ffffff",metalness:0,roughness:.045,transmission:1,ior:1.333,thickness:Fs*1.3,attenuationColor:"#ffffff",attenuationDistance:1/0,envMap:i,envMapIntensity:n===0?.95:.72,transparent:!0,depthWrite:!1});return r.customProgramCacheKey=()=>"showcase-contained-water-volume",r.onBeforeCompile=a=>{Object.assign(a.uniforms,{uTime:t.userData.time,uPhase:{value:n*1.37},uWaterInertia:t.userData.waterInertia,uIntroFill:t.userData.introFill,uArtwork:{value:e}});const s=`uniform float uTime; uniform float uPhase;
      uniform vec2 uWaterInertia;
      varying vec2 vWaterPoint;
      ${Ns}
      vec3 waterPoint(vec3 p) {
        float angle = atan(p.y, p.x);
        vec3 q = p;
        q.xy *= waterRadius(angle);
        q.xy += uWaterInertia * p.z * 0.20;
        float wave = sin(length(p.xy) * 9.0 - uTime * 1.5 + uPhase)
          * exp(-length(p.xy) * 1.3);
        q.z *= 1.0 + 0.065 * sin(uTime * 0.9 + uPhase) + 0.07 * wave;
        return q;
      }`;a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
${s}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        // 从实际变形曲面重算法线，反光与体积同步，而非贴上滑动亮斑。
        vec3 sphereNormal = normalize(position);
        vec3 axis = abs(sphereNormal.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0);
        vec3 tangent = normalize(cross(axis, sphereNormal));
        vec3 bitangent = cross(sphereNormal, tangent);
        vec3 du = waterPoint(normalize(position + tangent * 0.003))
          - waterPoint(normalize(position - tangent * 0.003));
        vec3 dv = waterPoint(normalize(position + bitangent * 0.003))
          - waterPoint(normalize(position - bitangent * 0.003));
        objectNormal = normalize(cross(du, dv));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed = waterPoint(position);
        vWaterPoint = position.xy;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${s}
uniform sampler2D uArtwork; uniform float uIntroFill;`).replace("#include <lights_fragment_end>",zl).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        vec2 delta = vWaterPoint - vec2(-0.22, 0.18);
        float distanceToOrigin = max(length(delta), 0.001);
        float wave = sin(distanceToOrigin * 19.0 - uTime * 0.95 + uPhase)
          * exp(-distanceToOrigin * 1.3);
        normal = normalize(normal + vec3(delta / distanceToOrigin * wave * 0.026, 0.0));`).replace("#include <transmission_fragment>",`
        #include <transmission_fragment>
        #ifdef USE_TRANSMISSION
          // 正圆水球内按等比取图；球面折射让中心放大、边缘挤压，并在球缘变暗。
          float ballR = length(vWaterPoint);
          vec2 lensPoint = vWaterPoint * mix(0.62, 1.0, ballR * ballR);
          vec2 imageUv = vec2(${(Rt.x+Rt.w/2)/xt}, ${1-(Rt.y+Rt.h/2)/Dt})
            + lensPoint * 0.40 * vec2(${Rt.w/xt}, ${Rt.w/Dt});
          vec3 imageColor = texture2D(uArtwork, imageUv).rgb
            * mix(1.0, 0.78, smoothstep(0.55, 0.98, ballR));
          vec3 glassFresnel = EnvironmentBRDF(normal, geometryViewDir,
            material.specularColorBlended, material.specularF90, material.roughness);
          // 内容属于水滴内部，统一使用水滴的局部坐标，彻底消除纸上残留和轮廓外露。
          // 外缘使用真实背景透射，内容在内部柔和收口，避免深色图把水滴变成实心棋子。
          float interior = (1.0 - smoothstep(0.80, 0.99, length(vWaterPoint))) * 0.90;
          totalDiffuse = mix(totalDiffuse, imageColor * (1.0 - glassFresnel), interior);
        #endif`)},r}function gm(i,e){const t=je.h/2-(Rt.y+Rt.h/2)/Dt*je.h;return new vn({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{uTime:i.userData.time,uPhase:{value:e*1.37},uBend:i.userData.bend,uOpacity:{value:0},uLightDirection:{value:new z},uWaterHeight:{value:Nl},uHole:i.userData.hole,uWaterRadius:{value:new Oe(On,On)},uWaterInertia:i.userData.waterInertia},vertexShader:`uniform float uBend; varying vec2 vProjection; varying vec2 vPaperPoint;
      ${Br}
      void main() {
        vProjection = uv * 2.0 - 1.0;
        vPaperPoint = position.xy;
        vec3 p = position;
        p.z += receiptHeight(p.xy, uBend) + 0.004;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,fragmentShader:`uniform float uTime; uniform float uPhase; uniform float uOpacity;
      uniform vec2 uWaterInertia; uniform vec2 uWaterRadius;
      uniform vec3 uLightDirection; uniform float uWaterHeight; uniform float uBend;
      uniform float uHole;
      varying vec2 vProjection; varying vec2 vPaperPoint;
      ${Ns}
      void main() {
        vec2 vCardXY = vPaperPoint;
        ${Ea}
        // 光固定在世界坐标中；每帧将它变换到晃动后的卡片坐标，再估算折射落点。
        // 光纹仍是轮廓聚光的近似，不给光源附加鼠标运动或独立正弦动画。
        if (abs(vPaperPoint.x) > ${je.w/2-.005}
          || abs(vPaperPoint.y) > ${je.h/2-.028}) discard;
        vec3 light = normalize(uLightDirection);
        vec3 surfaceNormal = normalize(vec3(-uWaterInertia * 0.16, 1.0));
        vec3 ray = refract(-light, surfaceNormal, 1.0 / 1.333);
        vec3 paperNormal = normalize(vec3(0.0, 2.0 * uBend * ${t}, 1.0));
        float thickness = 1.0 + 0.065 * sin(uTime * 0.9 + uPhase);
        float height = uWaterHeight + 0.095 * (thickness - 1.0);
        // 近缘焦散只取折射位移的一小部分，避免把两圈当作完整投影推离水滴。
        float focusTravel = min(height * 0.28, 0.06);
        vec2 offset = ray.xy * focusTravel * paperNormal.z / max(-dot(ray, paperNormal), 0.35);
        vec2 projectedOffset = offset / uWaterRadius;
        projectedOffset *= min(1.0, 0.11 / max(length(projectedOffset), 0.0001));
        projectedOffset += uWaterInertia * 0.04;
        vec2 p = vProjection * ${Ts} - projectedOffset;
        vec2 lightAxis = normalize(offset / uWaterRadius + vec2(0.00001));
        float incidence = clamp(dot(light, paperNormal), 0.0, 1.0);
        float stretch = 1.0 + 0.06 * (1.0 - incidence);
        p -= lightAxis * dot(p, lightAxis) * (1.0 - 1.0 / stretch);
        float angle = atan(p.y, p.x);
        float radius = waterRadius(angle);
        float edge = length(p) - radius;
        float shadow = exp(-pow(max(edge, 0.0) / 0.11, 2.0)) * 0.085;
        // 焦散从水滴实际轮廓推导：曲率决定局部聚光，光源方向决定明暗位置。
        float before = waterRadius(angle - 0.035);
        float after = waterRadius(angle + 0.035);
        float slope = (after - before) / 0.07;
        float curve = (after - 2.0 * radius + before) / (0.035 * 0.035);
        float curvature = (radius * radius + 2.0 * slope * slope - radius * curve)
          / pow(radius * radius + slope * slope, 1.5);
        vec2 outward = normalize(p + vec2(0.0001));
        float direction = smoothstep(-0.45, 0.80, dot(outward, lightAxis));
        float concentration = clamp(0.40 + curvature * 0.27, 0.18, 1.0);
        float focusEdge = 0.025 * thickness + 0.010 * clamp(slope, -1.0, 1.0);
        float width = mix(0.032, 0.018, concentration);
        float core = exp(-pow((edge - focusEdge) / width, 2.0));
        float halo = exp(-pow((edge - focusEdge) / 0.075, 2.0));
        // 外圈是同一水滴轮廓的等比例放大，波峰和波谷保持对应。
        float outerEdge = length(p) / 1.16 - radius;
        float outerRing = exp(-pow((outerEdge - focusEdge) / (width * 1.10), 2.0));
        float focus = (core * 0.56 + halo * 0.11 + outerRing * 0.30)
          * direction * concentration * mix(0.65, 1.05, incidence);
        float facing = smoothstep(-0.05, 0.22, light.z);
        float alpha = (shadow + focus) * uOpacity * facing;
        vec3 color = mix(vec3(0.43, 0.42, 0.40), vec3(1.0, 0.99, 0.96), focus / max(shadow + focus, 0.001));
        gl_FragColor = vec4(color, alpha);
        #include <colorspace_fragment>
      }`})}function hl(i,e,t,n,r){const a=n*1.37,s=sl[n%sl.length],o=Ol+al*je.w/xt+.03,c=Rt.w/xt*je.w,l=Rt.h/Dt*je.h,u=([M,S])=>{const w=(M-.5)*c,_=(.5-S)*l,T=r?Math.max(1,o/Math.max(Math.hypot(w,_),1e-4)):1;return[.5+w*T/c,.5-_*T/l]},h=u(s.a),d=u(s.b),p=je.d/2,v=Math.min(2.2*je.bevel+1e-4,p*.85),y=new Is({map:i,roughness:.93,metalness:0,clearcoat:0,reflectivity:.12,bumpMap:e,bumpScale:.0016});y.dithering=!0,y.customProgramCacheKey=()=>"showcase-paper-under-water-volume";const g={value:0},f={value:new Oe(.35,.75)},A={value:0},D={value:0},E={value:1};return y.userData.bend=g,y.userData.glassPointer=f,y.userData.glassHover=A,y.userData.time=D,y.userData.waterInertia={value:new Oe},y.userData.introFill={value:n===0?1.15:0},y.userData.viewportHeight=E,y.userData.hole={value:r?1:0},y.onBeforeCompile=M=>{Object.assign(M.uniforms,{uHalfDepth:{value:p},uCapBand:{value:v},uBend:g,uEdgeColor:{value:new ke(ur[n%ur.length].paper)},uPrintMap:{value:i},uArtMap:{value:t},uPhase:{value:a},uTime:D,uGlassPointer:f,uGlassHover:A,uIntroFill:y.userData.introFill,uDotColor:{value:new ke(fn.dot)},uViewportHeight:E,uHole:y.userData.hole,uDotRing:{value:r?o/On:.89},uDotAngle:{value:s.angle},uDotAnchors:{value:new Ut(h[0],1-(Rt.y+h[1]*Rt.h)/Dt,d[0],1-(Rt.y+d[1]*Rt.h)/Dt)}}),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
        uniform float uHalfDepth;
        uniform float uCapBand;
        uniform float uBend;
        uniform float uViewportHeight;
        ${Br}
        varying float vFront;
        varying float vEdge;
        varying float vDotScreenRadius;
        varying vec2 vCardXY;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        // 用未弯曲的几何法线区分侧壁，避免把正面图片染成纸芯色。
        vEdge = 1.0 - smoothstep(0.1, 0.85, abs(normalize(objectNormal).z));
        float epsilon = 0.001;
        vec2 slope = vec2(
          receiptHeight(position.xy + vec2(epsilon, 0.0), uBend) - receiptHeight(position.xy - vec2(epsilon, 0.0), uBend),
          receiptHeight(position.xy + vec2(0.0, epsilon), uBend) - receiptHeight(position.xy - vec2(0.0, epsilon), uBend)
        ) / (2.0 * epsilon);
        objectNormal = normalize(vec3(objectNormal.xy - slope * objectNormal.z, objectNormal.z));`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vCardXY = position.xy;
        ${ya}
        float cardDepth = max(0.1, -(modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).z);
        vDotScreenRadius = ${al*je.w/xt} * length(modelMatrix[0].xyz)
          * projectionMatrix[1][1] * uViewportHeight * 0.5 / cardDepth;`).replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
        vFront = smoothstep( uHalfDepth - uCapBand, uHalfDepth, position.z ) * smoothstep( 0.08, 0.5, normalize( objectNormal ).z );`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
        varying float vFront;
        varying float vEdge;
        varying float vDotScreenRadius;
        varying vec2 vCardXY;
        uniform float uHole;
        uniform float uDotRing;
        uniform vec3 uEdgeColor;
        uniform sampler2D uPrintMap;
        uniform sampler2D uArtMap;
        uniform float uPhase;
        uniform float uTime;
        uniform float uIntroFill;
        uniform vec2 uGlassPointer;
        uniform float uGlassHover;
        uniform vec3 uDotColor;
        uniform float uDotAngle;
        uniform vec4 uDotAnchors;
        float screenDotDistance(vec2 delta, vec2 dx, vec2 dy) {
          float det = max(abs(dx.x * dy.y - dx.y * dy.x), 0.00001);
          return length(vec2(dy.y * delta.x - dy.x * delta.y,
            dx.x * delta.y - dx.y * delta.x)) / det;
        }
        ${Ns}
        vec3 receiptPrint(vec2 uv) {
          vec3 paper = texture2D(uPrintMap, uv).rgb;
          vec2 center = vec2(0.5, ${1-(Rt.y+Rt.h/2)/Dt});
          vec2 radius = vec2(${On/je.w}, ${On/je.h});
          vec3 result = paper;
          // 每张卡使用独立点位，三个点共用同一屏幕半径，只有一点轻轻呼应水波。
          vec2 pixels = vec2(${xt}.0, ${Dt}.0);
          vec2 anchor = vec2(0.5, ${1-(Rt.y+Rt.h/2)/Dt});
          float a1 = uDotAngle;
          float dotRadius = uDotRing + 0.35 * (waterRadius(a1) - 0.89);
          vec2 dot1 = mix(anchor, center, 0.35) + radius * vec2(cos(a1), sin(a1)) * dotRadius;
          vec2 dx = dFdx(uv * pixels), dy = dFdy(uv * pixels);
          // 把纸面距离换回屏幕距离，抵消倾斜与弯曲造成的椭圆变形。
          float dotEdge = min(screenDotDistance((uv - dot1) * pixels, dx, dy),
            min(screenDotDistance((uv - uDotAnchors.xy) * pixels, dx, dy),
              screenDotDistance((uv - uDotAnchors.zw) * pixels, dx, dy))) - vDotScreenRadius;
          return mix(result, uDotColor, 1.0 - smoothstep(-0.8, 0.8, dotEdge));
        }`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        ${Ea}`).replace("#include <map_fragment>",`#include <map_fragment>
        // 侧壁与正面使用相同的白纸底色，靠光照和倒角体现体积。
        diffuseColor.rgb = mix(uEdgeColor, receiptPrint(vMapUv), vFront * (1.0 - vEdge));`).replace("#include <lights_fragment_end>",zl).replace("#include <colorspace_fragment>",`#ifdef USE_MAP
        vec3 printColor = receiptPrint(vMapUv);
        // 保留大部分曲面光照和实物投影，只轻微校准印刷颜色。
        gl_FragColor.rgb = mix(gl_FragColor.rgb, printColor, 0.34 * vFront);
        float grain = fract( sin( dot( floor( vMapUv * vec2( ${xt}.0, ${Dt}.0 ) ), vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
        gl_FragColor.rgb *= 1.0 + ( grain - 0.5 ) * 0.018 * vFront;
        #endif
        #include <colorspace_fragment>`)},y}function xs(i,e={value:0}){const t=new Tl({depthPacking:3201});return t.customProgramCacheKey=()=>"showcase-receipt-shadow",t.onBeforeCompile=n=>{n.uniforms.uBend=i,n.uniforms.uHole=e,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uBend;
varying vec2 vCardXY;
${Br}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCardXY = position.xy;
${ya}`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHole;
varying vec2 vCardXY;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${Ea}`)},t}function _m(){const i=document.createElement("canvas");i.width=512,i.height=1024;const e=i.getContext("2d");e.fillStyle=fn.dot,e.fillRect(0,0,i.width,i.height);const t=e.getImageData(0,0,i.width,i.height);for(let n=0;n<i.height;n++)for(let r=0;r<i.width;r++){const a=(n*i.width+r)*4,s=(on(r+173,n+61)-.5)*24+(or(r*.16,n*.12)-.5)*18;t.data[a]+=s,t.data[a+1]+=s*.6,t.data[a+2]+=s*.4}e.putImageData(t,0,0);for(let n=0;n<16e3;n++)e.fillStyle=n%3?"rgba(87,37,17,0.13)":"rgba(255,226,196,0.23)",e.fillRect(on(n,41)*i.width,on(n,83)*i.height,.7+on(n,97),1+on(n,103)*4);return ii(i)}function xm(i,e,t){const n=new Ls({map:i,roughness:1,metalness:0,bumpMap:e,bumpScale:.004,transparent:!0,opacity:0});return n.dithering=!0,n.userData.bend=t,n.userData.railMorph={value:0},n.customProgramCacheKey=()=>"showcase-rough-red-backing",n.onBeforeCompile=r=>{r.uniforms.uBend=t,r.uniforms.uRailMorph=n.userData.railMorph,r.uniforms.uRailColor={value:new ke(fn.dot)},r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
uniform float uBend;
${Br}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        objectNormal = normalize(vec3(objectNormal.x,
          objectNormal.y + 2.0 * uBend * position.y * objectNormal.z, objectNormal.z));`).replace("#include <begin_vertex>",`#include <begin_vertex>
${ya}`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
        uniform float uRailMorph; uniform vec3 uRailColor;`).replace("#include <colorspace_fragment>",`
      // 与红点共用底色，同时保留纤维和曲面光照。
      gl_FragColor.rgb = mix(gl_FragColor.rgb, texture2D(map, vMapUv).rgb, 0.34);
      // 纸收成细线时逐渐去掉纤维和受光明暗，接入同色的作品进度线。
      gl_FragColor.rgb = mix(gl_FragColor.rgb, uRailColor, uRailMorph);
      #include <colorspace_fragment>`)},n}function vm(){const i=new Ls({color:"#ffffff",roughness:1,metalness:0});i.dithering=!0,i.toneMapped=!1;const e={uRes:{value:new Oe(1,1)},uTime:{value:0}};return i.customProgramCacheKey=()=>"showcase-backdrop",i.onBeforeCompile=t=>{Object.assign(t.uniforms,e,{uCoral:{value:pa.coral},uPeach:{value:pa.peach},uCream:{value:pa.cream},uBurnt:{value:pa.burnt}}),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec2 uRes;
        uniform float uTime;
        uniform vec3 uCoral;
        uniform vec3 uPeach;
        uniform vec3 uCream;
        uniform vec3 uBurnt;`).replace("#include <map_fragment>",`#include <map_fragment>
        {
          // 色场按屏幕坐标算，镜头倾斜时不跟着动；平面受光、接住卡片阴影
          vec2 p = gl_FragCoord.xy / uRes;
          float aspect = uRes.x / uRes.y;
          vec2 q = vec2( p.x * aspect, p.y );
          vec3 f = mix( uPeach, uCoral, smoothstep( 0.3, 1.0, p.y ) );
          float sun = distance( q, vec2( 0.82 * aspect, -0.06 ) );
          f += uCream * exp( -sun * sun * 2.4 ) * 0.06;
          float arc = distance( q, vec2( -0.15 * aspect, -0.9 ) );
          f = mix( f, uBurnt, ( 1.0 - smoothstep( 1.42, 1.55, arc ) ) * 0.9 );
          f += uCream * exp( -pow( ( arc - 1.56 ) * 14.0, 2.0 ) ) * 0.04;
          diffuseColor.rgb = f * 1.08; // 按实测校准到纸白 #f8f5ef 附近
        }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        // 纸面底色：灯光照下来约等于原色；不走色调映射（见 toneMapped=false），投影仍由灯光决定
        totalEmissiveRadiance += diffuseColor.rgb * 0.04;`).replace("#include <colorspace_fragment>",`{
          vec2 cell = floor( gl_FragCoord.xy / 3.0 );
          float shuffle = mod( floor( uTime * 12.0 ), 97.0 );
          float n = fract( sin( dot( cell + shuffle, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
          gl_FragColor.rgb += ( n - 0.5 ) * 0.035;
        }
        #include <colorspace_fragment>`)},{material:i,uniforms:e}}function Sm(i,e){const t=ii(i),n=new Pi({map:t,transparent:!0,depthWrite:!1,toneMapped:!1}),r=new mt(new Yt(i.width*e,i.height*e),n);return r.raycast=()=>{},r}function Mm(i,e,t,n,r,a,s){const o=matchMedia("(prefers-reduced-motion: reduce)").matches,c=t.length,l=t.map((R,Y)=>-Y*Un),u=(c-1)*Un,h=new rm({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),h.toneMapping=4;const d=new Oe;let p=new Ao(1,1);const v=new Tn(1,1,{depthBuffer:!1}),y=v.clone(),g=new Tn(1,1,{samples:4}),f=new vs,A=new ke,D=new va(-1,1,1,-1,0,1),E="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",M=new vn({uniforms:{tSrc:{value:null},tMask:{value:g.texture},uMaskInput:{value:!1},uStep:{value:new Oe}},vertexShader:E,fragmentShader:`
      uniform sampler2D tSrc;
      uniform sampler2D tMask;
      uniform bool uMaskInput;
      uniform vec2 uStep;
      varying vec2 vUv;
      vec4 sampleBackground(vec2 uv) {
        vec4 c = texture2D(tSrc, uv);
        if (uMaskInput) {
          // 排除清晰卡片后再模糊，防止卡片文字和轮廓扩散成外圈重影。
          float weight = 1.0 - texture2D(tMask, uv).a;
          c = vec4(c.rgb * weight, weight);
        }
        return c;
      }
      void main() {
        vec4 c = sampleBackground(vUv) * 0.227027;
        c += (sampleBackground(vUv + uStep) + sampleBackground(vUv - uStep)) * 0.1945946;
        c += (sampleBackground(vUv + 2.0 * uStep) + sampleBackground(vUv - 2.0 * uStep)) * 0.1216216;
        c += (sampleBackground(vUv + 3.0 * uStep) + sampleBackground(vUv - 3.0 * uStep)) * 0.054054;
        c += (sampleBackground(vUv + 4.0 * uStep) + sampleBackground(vUv - 4.0 * uStep)) * 0.016216;
        gl_FragColor = c;
      }`,depthTest:!1,depthWrite:!1}),S=new vn({uniforms:{tSrc:{value:y.texture},tMask:{value:g.texture},uAmt:{value:0},uPaper:{value:new z(.973,.961,.937)}},vertexShader:E,fragmentShader:`
      uniform sampler2D tSrc;
      uniform sampler2D tMask;
      uniform float uAmt;
      uniform vec3 uPaper;
      varying vec2 vUv;
      void main() {
        vec4 blurred = texture2D(tSrc, vUv);
        vec3 c = mix(blurred.rgb / max(blurred.a, 0.0001), uPaper, 0.25);
        float coverage = texture2D(tMask, vUv).a;
        gl_FragColor = vec4(c, uAmt * (1.0 - coverage));
      }`,transparent:!0,depthTest:!1,depthWrite:!1}),w=new mt(new Yt(2,2),M);w.frustumCulled=!1;let _=0,T=-1;function P(R,Y,X,se,Ae=!1){M.uniforms.tSrc.value=R,M.uniforms.uMaskInput.value=Ae,M.uniforms.uStep.value.set(X,se),h.setRenderTarget(Y),h.render(w,D)}function I(){h.copyFramebufferToTexture(p);const R=_t[T],Y=[R.mesh,R.pivot.children[0]];vt.forEach((ze,lt)=>{ze.matrix.copy(Y[lt].matrixWorld),ze.material.uniforms.uBend.value=R.mats[lt].userData.bend.value,ze.material.uniforms.uHole.value=R.mats[lt].userData.hole.value,ze.visible=R.mesh.visible&&R.mats[lt].opacity>.002}),h.getClearColor(A);const X=h.getClearAlpha();h.setClearColor(0,0),h.setRenderTarget(g),h.render(f,N),h.setClearColor(A,X);const se=3/i.clientWidth,Ae=3/i.clientHeight;w.material=M,P(p,v,se,0,!0),P(v.texture,y,0,Ae),P(y.texture,v,se,0),P(v.texture,y,0,Ae),h.setRenderTarget(null),w.material=S,S.uniforms.uAmt.value=_,h.autoClear=!1,h.render(w,D),h.autoClear=!0}h.shadowMap.enabled=!0,h.shadowMap.type=1;const B=new vs,N=new An(Wt.fov,1,.1,1e3);B.add(new tu("#ffffff",.6));const F=new cs("#ffffff",3.1);F.position.set(20,9,3);const k=new cs("#eadfce",1.7);k.position.set(0,-8,3);const Q=new cs("#eef2f8",3.4);Q.position.set(12,9.2,7),Q.castShadow=!0,Q.shadow.mapSize.set(2048,2048),Q.shadow.radius=42,Q.shadow.bias=-3e-4,Q.shadow.normalBias=.02,Q.shadow.intensity=.4,B.add(F,k,Q);const q=new z().subVectors(Q.position,Q.target.position).normalize(),ae=new ri,K=vm(),ne=new mt(new Yt(80,50),K.material);ne.position.z=rl,ne.receiveShadow=!0,ne.raycast=()=>{},B.add(ne);const ie=new Xn;B.add(ie);const Ue=[],Ee=new Xn;B.add(Ee);const gt=_s(nr,je.h/2,!0,!1),Je=_s(-2.562962962962963/2,nr,!1,!0),at=_s(-2.562962962962963/2,je.h/2,!0,!0),Z=_m(),te=fm(),ye={value:.11},Pe=new mt(at,xm(Z,te,ye));Pe.customDepthMaterial=xs(ye),Pe.castShadow=!0,Pe.receiveShadow=!0,Pe.raycast=()=>{},B.add(Pe);const Me=pm(h),qe=am();B.add(qe.group);const Nt=new xa(1,64,40),We=je.h/2-(Rt.y+Rt.h/2)/Dt*je.h,nt=new Yt(On*2*Ts,On*2*Ts,1,24);nt.translate(0,We,0);const vt=[gt,Je].map(R=>{const Y=new vn({uniforms:{uBend:{value:0},uHole:{value:0}},vertexShader:`uniform float uBend; varying vec2 vCardXY;
        ${Br}
        void main() {
          vec3 transformed = position;
          vCardXY = position.xy;
          ${ya}
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }`,fragmentShader:`uniform float uHole; varying vec2 vCardXY;
        void main() { ${Ea} gl_FragColor = vec4(1.0); }`}),X=new mt(R,Y);return X.matrixAutoUpdate=!1,X.frustumCulled=!1,f.add(X),X}),Ke=R=>(R%2===0?-1:1)*om,bt=(R,Y)=>{R.mats.forEach((X,se)=>{X.opacity=se?Y*R.stubFade:Y,X.transparent=X.opacity<.999}),R.mesh.visible=Y>.002,R.water.material.opacity=Y,R.waterProjection.material.uniforms.uOpacity.value=Y},_t=t.map((R,Y)=>{const X=cl(R,Y),se=ii(X),Ae=ul(R,Y),ze=ii(Ae);R.img&&dl(Ae,ze,R.img);const lt=!!R.img,Ze=[hl(se,te,ze,Y,lt),hl(se,te,ze,Y,!1)];for(const It of Ze)It.transparent=!0,It.opacity=0;const St=new mt(gt,Ze[0]),Ge=new mt(Nt,mm(Me.texture,ze,Ze[0],Y));Ge.scale.set(On,On,Fs),Ge.userData.lift=lt?0:Nl,Ge.position.set(0,We,Ge.userData.lift),Ge.userData.index=Y,Ge.renderOrder=1,St.add(Ge);const De=new mt(nt,gm(Ze[0],Y));De.raycast=()=>{},St.add(De);const dt=new Xn;dt.position.set(-1.2/2,nr,0);const Ve=new mt(Je,Ze[1]);St.customDepthMaterial=xs(Ze[0].userData.bend,Ze[0].userData.hole),Ve.customDepthMaterial=xs(Ze[1].userData.bend),Ve.position.set(je.w/2,-nr,0),dt.add(Ve),St.add(dt);for(const It of[St,Ve])It.castShadow=!0,It.receiveShadow=!0,It.userData.index=Y;St.rotation.order="YXZ",St.position.set(2.05,l[Y],0),Ee.add(St);const Tt=Ke(Y);return{mesh:St,pivot:dt,mats:Ze,canvas:X,map:se,artCanvas:Ae,artMap:ze,water:Ge,waterProjection:De,stubFade:1,x:2.05,y:l[Y],hover:0,yaw:Tt,pitch:0,savedRot:null,wobble:new Oe,wobbleVelocity:new Oe,waterVelocity:new Oe,glass:0,pos:new z(2.05,l[Y],0),scale:1}}),Zt=new xa(1,24,16),At=Array.from({length:8},()=>{const R=new Is({color:"#ffffff",roughness:.018,metalness:0,transmission:1,ior:1.333,thickness:2,clearcoat:.7,clearcoatRoughness:.035,attenuationColor:"#ffffff",attenuationDistance:1/0,envMap:Me.texture,envMapIntensity:1.65,transparent:!0,depthWrite:!1});R.customProgramCacheKey=()=>"showcase-clear-cursor-water",R.onBeforeCompile=se=>{se.fragmentShader=se.fragmentShader.replace("#include <opaque_fragment>",`
        // 透明体保留背景折射；掠射薄边和固定方向的细反光让小尺寸也能看出水感。
        float beadFacing = clamp(dot(normal, geometryViewDir), 0.0, 1.0);
        outgoingLight *= 1.0 - 0.38 * pow(1.0 - beadFacing, 2.2);
        vec3 beadLight = normalize((viewMatrix * vec4(-0.5, 0.7, 0.8, 0.0)).xyz);
        float beadGlint = pow(max(dot(reflect(-beadLight, normal), geometryViewDir), 0.0), 52.0);
        outgoingLight += vec3(1.5) * beadGlint;
        #include <opaque_fragment>`)};const Y=new mt(Zt,R);Y.visible=!1,Y.renderOrder=2,Y.raycast=()=>{},B.add(Y);const X=new mt(Zt,new Pi({color:"#ffffff",transparent:!0,opacity:0}));return X.matrixAutoUpdate=!1,X.frustumCulled=!1,X.visible=!1,f.add(X),{mesh:Y,mask:X,point:new Oe,origin:new Oe,velocity:new Oe,card:-1,age:0,delay:0,order:0,life:1.5,radius:4,angle:0}}),ht=new Oe;let U=0,zt=!1,st=0,b=0,m=-1,O=0,V=0;const $=new Oe,oe=new Oe,he=new kn,J=new z,ee=new z,de=new z,Re=new z,fe=new z,le=new Uo;function Le(R){const Y=U;if(U=R,!zt){ht.copy(Ht),zt=!0;return}const X=R-Y,se=Math.hypot((Ht.x-ht.x)*i.clientWidth,(Ht.y-ht.y)*i.clientHeight)*.5,Ae=ot();if(o||X>180||se<.5||Cn!==null||Ae>.02){ht.copy(Ht);return}const ze=_t.filter(Ge=>Ge.mesh.visible&&Ge.mats[0].opacity>.8),lt=ze.map(Ge=>Ge.mesh);let Ze=0,St=!1;for(const Ge of ze){const De=Ge.water.userData.index;if(Ot&&C!==De||(Ge.mesh.updateWorldMatrix(!0,!0),Ge.water.getWorldPosition(ee),J.set(0,0,1).transformDirection(Ge.mesh.matrixWorld),he.setFromNormalAndCoplanarPoint(J,ee),le.setFromCamera(ht,N),!le.ray.intersectPlane(he,de))||(le.setFromCamera(Ht,N),!le.ray.intersectPlane(he,Re)))continue;Ge.mesh.worldToLocal(de),Ge.mesh.worldToLocal(Re);const dt=Ge.water.scale.x,Ve=Ge.water.scale.y,Tt=de.x/dt,It=(de.y-We)/Ve,Fi=(Re.x-de.x)/dt,ci=(Re.y-de.y)/Ve,Ni=Fi*Fi+ci*ci,Oi=2*(Tt*Fi+It*ci),_r=Oi*Oi-4*Ni*(Tt*Tt+It*It-.89*.89);if(Ni<1e-5||_r<=0)continue;const xr=(-Oi-Math.sqrt(_r))/(2*Ni),Pn=(-Oi+Math.sqrt(_r))/(2*Ni);if(Pn<=0||xr>1)continue;const Bi=(Math.max(0,xr)+Math.min(1,Pn))*.5;fe.copy(de).lerp(Re,Bi),fe.z=Ge.water.position.z+Ge.water.scale.z,Ge.mesh.localToWorld(fe).project(N),le.setFromCamera(new Oe(fe.x,fe.y),N);const Mi=le.intersectObjects(lt,!0)[0];if(!(!Mi||Mi.object.userData.index!==De)){(R-b>180||m!==De)&&(O=5,V=0),m=De,b=R,st=R+650,St=Pn>=1,Ze=Math.min(1,Math.max(0,Pn))*se,St||$.copy(ht).lerp(Ht,dn(Pn));break}}if(St)V=0;else if(R<=st&&O>0){const De=Math.atan2((Ht.y-ht.y)*i.clientHeight,(Ht.x-ht.x)*i.clientWidth);for(let dt=Ze+25-V;dt<=se&&O>0;dt+=25){const Ve=At.find(Tt=>!Tt.mesh.visible);if(!Ve)break;Ve.card=m,Ve.age=0,Ve.order=5-O,Ve.delay=Ve.order*.065,Ve.life=1.55-Ve.order*.075,Ve.radius=[8,5.8,4.2,3.1,2.3][Ve.order],Ve.angle=De,Ve.origin.copy($),Ve.point.copy(ht).lerp(Ht,dt/se),$.copy(Ve.point),Ve.velocity.set(Math.cos(De)*2,Math.sin(De)*2-2),Ve.mesh.material.opacity=0,Ve.mesh.scale.setScalar(1e-5),Ve.mesh.visible=!0,O--}V=(V+se-Ze)%25}ht.copy(Ht)}function Ne(R,Y){Y>.02&&(st=0,O=0,V=0,zt=!1);for(const X of At){if(!X.mesh.visible)continue;const se=_t[X.card];if(X.age+=R,o||X.age>=X.life+X.delay||!se.mesh.visible||se.mats[0].opacity<.2||Y>.02||Cn!==null){X.mesh.visible=!1,X.mask.visible=!1;continue}const Ae=Math.max(0,X.age-X.delay),ze=Qt.smootherstep(Ae,0,X.order===0?.3:.22);X.point.x+=X.velocity.x*R*2/i.clientWidth,X.point.y+=X.velocity.y*R*2/i.clientHeight,oe.copy(X.origin).lerp(X.point,ze),le.setFromCamera(oe,N),X.mesh.position.copy(le.ray.origin).addScaledVector(le.ray.direction,2);const Ze=2*-fe.copy(X.mesh.position).applyMatrix4(N.matrixWorldInverse).z*Math.tan(Qt.degToRad(Wt.fov)*.5)/i.clientHeight,St=1-Qt.smoothstep(Ae/X.life,.5,1),Ge=Math.max(1e-5,X.radius*Ze*Math.cbrt(ze)*Math.sqrt(St)),De=1+.48*Math.sin(Math.PI*ze)+.06*Math.exp(-Ae*5);X.mesh.quaternion.copy(N.quaternion),X.mesh.rotateZ(X.angle),X.mesh.scale.set(Ge*De,Ge/Math.sqrt(De),Ge*.9),X.mesh.material.opacity=St*Math.min(1,ze*5)*se.mats[0].opacity,X.mesh.updateMatrixWorld(),X.mask.matrix.copy(X.mesh.matrixWorld),X.mask.material.opacity=X.mesh.material.opacity,X.mask.visible=X.mesh.material.opacity>.01}}const Be=new Xn;Ee.add(Be);const L=[],ce=(R,Y=1)=>{const X=new Pi({transparent:!0,depthWrite:!1,toneMapped:!1,...R});return X.opacity=Y,L.push({m:X,base:Y}),X},j=.95,_e=.9,xe=.0094;{const R=document.createElement("canvas");R.width=4,R.height=22;const Y=R.getContext("2d");Y.fillStyle=er(.34),Y.fillRect(0,0,4,8);const X=new Ds(R);X.wrapT=1e3;const se=j+u+_e;X.repeat.set(1,se/(5.5*xe));const Ae=new mt(new Yt(1.2*xe,se),ce({map:X}));Ae.position.set(0,j-se/2,-.02),Ae.raycast=()=>{},Be.add(Ae)}const re=(()=>{const R=document.createElement("canvas");R.width=64,R.height=4;const Y=R.getContext("2d");for(let Ae=0;Ae<64;Ae++){const ze=Math.abs(Ae+.5-32),lt=ze<.8?1:.24*Math.exp(-(ze-.8)/5);Y.fillStyle=fn.dot,Y.globalAlpha=lt,Y.fillRect(Ae,0,1,4)}const X=new Yt(64*xe,1);X.translate(0,-.5,0);const se=new mt(X,ce({map:ii(R)}));return se.position.set(0,j,-.01),se.raycast=()=>{},Be.add(se),se})(),Ie=(()=>{const R=document.createElement("canvas");R.width=64,R.height=64;const Y=R.getContext("2d"),X=Y.createRadialGradient(32,32,0,32,32,32);X.addColorStop(0,fn.dot),X.addColorStop(.09,fn.dot),X.addColorStop(.14,"rgba(223,98,47,0.35)"),X.addColorStop(1,"rgba(223,98,47,0)"),Y.fillStyle=X,Y.fillRect(0,0,64,64);const se=new mt(new Yt(56*xe,56*xe),ce({map:ii(R)}));return se.raycast=()=>{},Be.add(se),se})(),we=(R,Y=!1)=>{const X=document.createElement("canvas");X.width=64,X.height=64;const se=X.getContext("2d"),Ae=R?"rgba(176,68,58,1)":er(.42);return se.beginPath(),se.arc(32,32,24,0,Math.PI*2),Y||(se.fillStyle="#faf7f2",se.fill()),se.lineWidth=4,se.strokeStyle=Ae,se.stroke(),Y||(se.beginPath(),se.arc(32,32,11,0,Math.PI*2),se.fillStyle=R?Ae:er(.34),se.fill()),ii(X)},yt=we(!1),ut=we(!0),Sn=we(!0,!0),tn=17*xe,Aa=t.map((R,Y)=>{const X=new mt(new Yt(tn,tn),ce({map:yt})),se=ce({map:ut},1),Ae=new mt(new Yt(tn,tn),se),ze=ce({map:Sn},0),lt=new mt(new Yt(tn,tn),ze);for(const Ze of[X,Ae,lt])Ze.position.set(0,l[Y],0),Ze.raycast=()=>{},Be.add(Ze);return Ae.position.z=.001,lt.position.z=.002,{litMat:se,pulseM:lt,pulseMat:ze,lit:Y<=a?1:0,wasLit:Y<=a,pulse:1}}),Gr=[],fr=-.42,Li=.3,Ii=new Xn;Be.add(Ii);const xi=new mt(new Yt(10*Vn,19*Vn),ce({color:"#2a2724"},.9));xi.raycast=()=>{},Ii.add(xi);const zr=Promise.race([document.fonts.load('400 19px "Fragment Mono"'),new Promise(R=>setTimeout(R,2500))]);let wn=null;zr.then(()=>{_t.forEach((R,Y)=>{cl(t[Y],Y,R.canvas),R.map.needsUpdate=!0,ul(t[Y],Y,R.artCanvas),R.artMap.needsUpdate=!0,t[Y].img&&dl(R.artCanvas,R.artMap,t[Y].img)}),t.forEach((R,Y)=>{const X=document.createElement("canvas"),se=X.getContext("2d"),Ae=`500 288px ${Dr}`;se.font=Ae,X.width=Math.ceil(se.measureText(R.ghost).width)+40,X.height=360,se.font=Ae,se.textAlign="center",se.textBaseline="middle",se.fillStyle=er(.06),se.fillText(R.ghost,X.width/2,X.height/2);const ze=Sm(X,1.8/360);ze.position.set(Fe.ghostX,.62*l[Y],-1.5),ie.add(ze),Ue[Y]=ze}),t.forEach((R,Y)=>{const X=document.createElement("canvas"),se=X.getContext("2d"),Ae=`400 19px ${Nn}`,ze=`400 11px ${Nn}`;se.font=Ae;const lt=se.measureText(R.ruler).width;se.font=ze,se.letterSpacing="1px";const Ze=R.rulerSub?se.measureText(R.rulerSub).width:0;X.width=Math.ceil(Math.max(lt,Ze))+8,X.height=44,se.textAlign="right",se.textBaseline="alphabetic",R.rulerSub&&(se.font=ze,se.letterSpacing="1px",se.fillStyle=er(.55),se.fillText(R.rulerSub.toUpperCase(),X.width-4,12)),se.font=Ae,se.letterSpacing="0px",se.fillStyle=er(1),se.fillText(R.ruler,X.width-4,36);const St=ii(X),Ge=ce({map:St},Y===a?1:.45),De=new mt(new Yt(X.width*Vn,X.height*Vn),Ge);De.raycast=()=>{},De.position.set(fr-X.width*Vn/2,l[Y]+7*Vn,0),Ii.add(De),Gr.push({mesh:De,mat:Ge,k:Y===a?1:0})});{const R=document.createElement("canvas");R.width=96,R.height=56;const Y=R.getContext("2d");Y.textAlign="center",Y.fillStyle="rgba(176,68,58,1)",Y.font=`400 11px ${Nn}`,Y.letterSpacing="2px",Y.fillText("INDEX",48,14),Y.letterSpacing="0px",Y.font=`400 19px ${Nn}`,Y.fillText("↓",48,44);const X=new mt(new Yt(R.width*Vn,R.height*Vn),ce({map:ii(R)}));X.position.set(0,j+R.height/2*Vn+.04,0),X.raycast=()=>{},Be.add(X)}Kn(),ft(),wn=gr.getElapsed()});const Ht=new Oe(0,0);let vi=!1,Ui=0,oi=0,mn=a*Un,Mn=mn,Yn=0,$n=null,pr=!1,Si=a,Ot=!1,wt=0,mr=0,x=Mn,C=null,W=null,G=null,H=null,me=0,Se=5,pe=4,Te=ni.camZ,Ce=0,Fe={cardX:2.5,railX:-3.2,labels:!0,briefs:!0,ghostX:4.5},Ye=107;const be=n.map(()=>0),ot=()=>dn(window.scrollY/Math.max(1,window.innerHeight)),Ct=()=>ot()>.995;let it=t.map(()=>null),et=null,Xt=0;const ge=(R,Y,X,se,Ae,ze,lt=1)=>({p:new z(R,Y,X),q:new ri().setFromEuler(new qn(se,Ae,ze,"YXZ")),s:lt}),qt=new ri,Qe=new Uo,gn=new Oe,Pt=new z,cn=new z;function Kn(){const R=Se,Y=document.querySelector(".hero-intro"),X=Y?Y.getBoundingClientRect().top+window.scrollY:i.clientHeight*.75;if(qe.layout(R,i.clientWidth,i.clientHeight,X),N.aspect>=.65){const De=Math.min(2.5,R-je.w/2-.35),dt=R>=4,Ve=dt?-3.2:-(R-.35);Fe={cardX:De,railX:Ve,labels:dt,briefs:!0,ghostX:dt?De+2:De}}else Fe={cardX:0,railX:-(R-.3),labels:!1,briefs:!1,ghostX:0};_t.forEach(De=>De.x=Fe.cardX);const se=i.clientWidth>1100&&R>=4;se?it=[ge(4.2,1.05,0,.08,-.22,.16,.92),ge(.85,-.2,.3,.05,.18,.2),ge(2.05,.6,.05,-.06,-.12,-.13),ge(1.55,-1.45,.45,.1,.1,-.3),null]:N.aspect>=.65?it=[null,ge(.6,-.3,.3,.05,.18,.2,.9),ge(1.6,.5,.05,-.06,-.12,-.13,.9),ge(1.5,-1.4,.45,.1,.1,-.3,.9),null]:it=[null,ge(-.5,.45,.2,.05,.16,.18,.82),ge(.55,.95,0,-.06,-.12,-.15,.82),ge(.05,-.55,.3,.1,.1,-.28,.82),null];const Ae=i.clientWidth<=720?1.2:se?1.6:1.45;it.forEach((De,dt)=>{if(!De)return;De.s*=Ae,i.clientWidth>720&&(De.p.y-=.16);const Tt=[0,1.1,.05,2.05][dt]??De.p.z,It=(Wt.z-Tt)/(Wt.z-De.p.z);De.p.x*=It,De.p.y=Wt.y+(De.p.y-Wt.y)*It,De.p.z=Tt,De.s*=It}),Xt=Math.max(...it.map(De=>De?De.p.z:0));const ze=it[0],lt=it[2];if(lt){const dt=Tt=>{const It=(Wt.z- -.85)/(Wt.z-Tt.p.z);return{x:Tt.p.x*It,y:Wt.y+(Tt.p.y-Wt.y)*It,s:Tt.s*It}},Ve=dt(lt);if(ze){const Tt=dt(ze);et=ge((Ve.x+Tt.x)*.5,(Ve.y+Tt.y)*.5+.12,-.85,.025,-.05,.035,(Ve.s+Tt.s)*.5)}else et=ge(Ve.x+.08,Ve.y+.1,-.85,-.06,-.12,-.13,Ve.s*.98)}Be.position.x=Fe.railX,Ii.visible=Fe.labels,Ue.forEach(De=>De&&(De.position.x=Fe.ghostX));const Ze=Fe.railX+Li,St=Fe.cardX-je.w/2-.32,Ge=Math.max(0,(St-Ze)*Ye);n.forEach(De=>De.style.width=`${Math.round(Math.min(Ge,460))}px`),s.onLayout(Fe.briefs),ft()}function ft(){n.forEach((R,Y)=>{const X=R.querySelector("[data-brief-title]");be[Y]=X?X.offsetTop+X.offsetHeight/2:0})}function Lt(){const R=i.clientWidth,Y=i.clientHeight;if(!R||!Y)return;h.setSize(R,Y,!1),N.aspect=R/Y,N.updateProjectionMatrix(),h.getDrawingBufferSize(K.uniforms.uRes.value),h.getDrawingBufferSize(d),_t.forEach(St=>St.mats.forEach(Ge=>{Ge.userData.viewportHeight.value=d.y})),p.dispose(),p=new Ao(d.x,d.y),p.minFilter=p.magFilter=1006,v.setSize(d.x>>1,d.y>>1),y.setSize(d.x>>1,d.y>>1),g.setSize(d.x,d.y),pe=Wt.z*Math.tan(Qt.degToRad(Wt.fov)/2),Se=pe*N.aspect,Ye=Y/(2*pe);const X=dn((.9-N.aspect)/.4);Te=Gt(ni.camZ,ni.portraitCamZ,X),Ce=Gt(0,ni.portraitY,X),Kn();const se=Math.max(1,Wt.z-rl)*Math.tan(Qt.degToRad(Wt.tiltDeg))*1.2,Ae=42/2048*(Se+pe+2*se),ze=Se+2*je.w+se+Ae,lt=pe+2*je.h+se+Ae,Ze=Q.shadow.camera;Ze.left=-ze,Ze.right=ze,Ze.top=lt,Ze.bottom=-lt,Ze.near=.1,Ze.far=80,Ze.updateProjectionMatrix()}const Rn=new ResizeObserver(Lt);Rn.observe(i);const pt=R=>Math.max(0,Math.min(c-1,Math.round(R/Un))),_n=R=>me=Math.min(1,me+R);function Gn(R){if(R===null){Ot=!1;return}Ot=!0,C=R}let Cn=null,wa=0,Ra=!1;function Ca(R){if(!(Cn!==null||!t[R].href)){if(o){s.onOpen(R);return}Cn=R,wa=gr.getElapsed(),Ra=!1}}const Bs=()=>Cn=null,Gs=R=>R.persisted&&Bs();window.addEventListener("pageshow",Gs);const zs=new kn,Hs=new z,Pa=new z,Hr=new z;function Vs(R,Y,X,se=1){const Ae=R.mesh;let ze=0,lt=0,Ze=!1;if(Ae.updateWorldMatrix(!0,!1),Ae.getWorldPosition(Pa),Y&&vi&&!o&&(Hs.set(0,0,1).transformDirection(Ae.matrixWorld),zs.setFromNormalAndCoplanarPoint(Hs,Pa),Qe.setFromCamera(Ht,N),Qe.ray.intersectPlane(zs,Hr))){Ae.worldToLocal(Hr);const De=Hr.x/(je.w/2),dt=Hr.y/(je.h/2);Ze=Math.abs(De)<=1.12&&Math.abs(dt)<=1.12,Ze&&(ze=Qt.clamp(De,-1,1),lt=Qt.clamp(dt,-1,1))}if(o)R.wobble.set(0,0),R.wobbleVelocity.set(0,0);else{const De=Math.max(1,Math.ceil(X*120)),dt=X/De;for(let Ve=0;Ve<De;Ve++)R.wobbleVelocity.x+=((ze-R.wobble.x)*mi.stiffness-R.wobbleVelocity.x*mi.damping)*dt,R.wobbleVelocity.y+=((lt-R.wobble.y)*mi.stiffness-R.wobbleVelocity.y*mi.damping)*dt,R.wobble.addScaledVector(R.wobbleVelocity,dt)}R.glass=Gt(R.glass,Ze?1:0,1-Math.exp(-10*X));for(const De of R.mats)De.userData.glassPointer.value.set(.35+.4*R.wobble.x,.75+.25*R.wobble.y),De.userData.glassHover.value=R.glass;Ae.rotateX(-R.wobble.y*mi.angle*se),Ae.rotateY(R.wobble.x*mi.angle*se);const St=2*Math.max(.5,N.position.z-Pa.z)*Math.tan(Qt.degToRad(Wt.fov)/2)/i.clientHeight;Ae.position.x+=R.wobble.x*mi.pixels*St*se,Ae.position.y+=R.wobble.y*mi.pixels*St*se;const Ge=R.mats[0].userData.waterInertia.value;if(o)Ge.set(0,0),R.waterVelocity.set(0,0);else{const De=Qt.clamp(-R.wobbleVelocity.x*.065-R.wobble.x*.035,-.22,.22),dt=Qt.clamp(-R.wobbleVelocity.y*.065-R.wobble.y*.035,-.22,.22),Ve=Math.max(1,Math.ceil(X*120)),Tt=X/Ve;for(let It=0;It<Ve;It++)R.waterVelocity.x+=((De-Ge.x)*42-R.waterVelocity.x*6.5)*Tt,R.waterVelocity.y+=((dt-Ge.y)*42-R.waterVelocity.y*6.5)*Tt,Ge.addScaledVector(R.waterVelocity,Tt)}}function ks(R){if(R.pointerType==="touch")return;vi=!0;const Y=e.getBoundingClientRect();Ht.x=(R.clientX-Y.left)/Y.width*2-1,Ht.y=-((R.clientY-Y.top)/Y.height)*2+1,Le(performance.now())}function kl(){Ht.set(0,0),vi=!1,G=null,zt=!1,st=0}function Ws(R=Ht){Qe.setFromCamera(R,N);const Y=Qe.intersectObjects(_t.map(X=>X.mesh),!0)[0];return Y?Y.object.userData.index:null}let Xs=0,qs=0,Da=!1;function Wl(R){Xs=R.clientX,qs=R.clientY,Da=!1,ks(R)}function Xl(R){if(Da||Math.hypot(R.clientX-Xs,R.clientY-qs)>6)return;const Y=e.getBoundingClientRect(),X=Ws(gn.set((R.clientX-Y.left)/Y.width*2-1,-((R.clientY-Y.top)/Y.height)*2+1));if(!Ct()){X!==null&&s.onHeroPick(X);return}if(X===null){G=null,Ot=!1;return}if(Ot&&C===X){Ca(X);return}Gn(X)}let Ys=0,$s=!1,Ks=0;function ql(R){if(!Ct())return;R.preventDefault();const Y=performance.now();if(Y-Ys<650)return;const X=Math.abs(R.deltaX)>Math.abs(R.deltaY)?R.deltaX:R.deltaY;if(!Ot&&X<-4&&mn<=.001){Y-Ks>900&&(Ks=Y,s.onLeaveTop());return}Yn+=.0032*X,_n(Math.min(.5,.006*Math.abs(X)))}let li=null,Vr=0,kr=0,Wr=0,La=!1;function Yl(R){if(La=!1,!Ct()){li=null;return}li=R.touches[0]?.clientY??null,Vr=R.timeStamp,kr=0,Wr=0}function $l(R){const Y=R.touches[0]?.clientY;if(Y===void 0||li===null)return;const X=li-Y;X<0&&mn<=.001&&!Ot&&(La=!0);const se=(R.timeStamp-Vr)/1e3;Yn+=.008*X,Wr+=Math.abs(X),se>0&&(kr=.7*kr+.008*X/se*.3),_n(Math.min(.4,.02*Math.abs(X))),li=Y,Vr=R.timeStamp,Wr>6&&(Da=!0)}function Kl(R){const Y=R.timeStamp-Vr>90;if(li!==null&&La){li=null,s.onLeaveTop();return}li=null,Wr>6&&($n=pt(mn+Yn+.16*(Y?0:kr))*Un,_n(.25))}function Zs(R){if(R.key==="Escape"){Ot=!1;return}if(!Ct())return;if(R.key==="Enter"){if(R.repeat||R.target.closest?.("a, button"))return;Ot&&C!==null?Ca(C):Gn(pt(mn));return}if(Ot)return;const Y=pt(mn);if((["ArrowUp","ArrowLeft","PageUp"].includes(R.key)||R.key===" "&&R.shiftKey)&&Y===0&&!R.target.closest?.("a, button")){R.preventDefault(),s.onLeaveTop();return}let se=null;["ArrowDown","ArrowRight","PageDown"].includes(R.key)||R.key===" "&&!R.shiftKey?se=Math.min(c-1,Y+1):["ArrowUp","ArrowLeft","PageUp"].includes(R.key)||R.key===" "&&R.shiftKey?se=Math.max(0,Y-1):R.key==="Home"?se=0:R.key==="End"&&(se=c-1),se!==null&&(R.target.closest?.("a, button")&&R.key===" "||(R.preventDefault(),$n=se*Un,_n(.5)))}e.addEventListener("pointermove",ks),e.addEventListener("pointerleave",kl),e.addEventListener("pointerdown",Wl),e.addEventListener("click",Xl),i.addEventListener("wheel",ql,{passive:!1}),i.addEventListener("touchstart",Yl,{passive:!0}),i.addEventListener("touchmove",$l,{passive:!0}),i.addEventListener("touchend",Kl),window.addEventListener("keydown",Zs);const gr=new ru;let Js=0;Lt();function Qs(){Js=requestAnimationFrame(Qs),gr.update();const R=Math.min(.05,gr.getDelta());if(!i.clientWidth||!i.clientHeight)return;const Y=gr.getElapsed(),X=1-Math.exp(-1e3*R/sm),se=Math.min(1,10*R),Ae=ot(),ze=Ae*Ae*(3-2*Ae),lt=dn((Ae-.45)/.55),Ze=lt*lt*(3-2*lt);Ae>.995&&!$s&&(Ys=performance.now()),$s=Ae>.995;const St=Ot?1:0;St===1&&mr===0&&(x=Ee.position.y),mr=St,wt+=(St-wt)*Math.min(1,R*ni.speed),!Ot&&wt<.01&&wt!==0&&(wt=0,C=null,Mn=x);const Ge=wt>.001,De=Ot&&Ge,dt=!Ot&&!Ge;dt&&Yn!==0&&(mn+=Yn,pr=!1),Yn=0,$n!==null&&(dt&&(mn=$n,pr=!0),$n=null),mn=Math.min(u,Math.max(0,mn)),Mn+=(mn-Mn)*Math.min(1,R*(pr?11:7)),Ee.position.y=Ot||Ge?x:Mn,ie.position.y=Ee.position.y*.62;const Ve=pt(Mn);Ve!==Si&&(Si=Ve,s.onIndex(Ve));const Tt=Gt(Wt.z,Te,wt);N.position.set(0,Wt.y,Tt),N.lookAt(0,0,0);const It=(De?0:o?.35:1)*(.3+.7*ze),Fi=Qt.degToRad(Wt.tiltDeg);Ui=Gt(Ui,Ht.y*Fi*It,X),oi=Gt(oi,-Ht.x*Fi*It,X),N.rotateX(Ui),N.rotateY(oi),N.updateMatrixWorld(),G=Ge?Ot?null:H:vi?Ws():null;const ci=G!==null&&it[G]&&Ae<.3?G:null;ci!==null&&(T=ci),_+=((ci!==null?1-ze:0)-_)*Math.min(1,12*R),Ge||(H=null),i.style.cursor=G!==null||De?"pointer":"";const Ni=(ni.z-Tt)/-Tt,Oi=Wt.y+Ni*-.3,_r=Wt.z/Math.max(.5,Tt-ni.z),xr=pe+ni.flyOut,Pn=wn===null?-1:Math.max(0,Y-wn);_t.forEach((ue,Mt)=>{ue.hover+=((G===Mt?1:0)-ue.hover)*se;const Bt=De&&C===Mt,nn=Bt?1:ue.hover,Ei=.08+Math.abs(Mt-a)*.07,yi=o?Pn<0?0:1:Pn<0?0:1-Math.pow(1-dn((Pn-Ei)/.7),3),js=(Ot||Ge?C===Mt?1:dn(1-wt):1)*yi,Sr=Cn===Mt?dn((Y-wa)/ll):0,Zl=1-Math.pow(1-dn(Sr/.3),3),Zn=dn((Sr-.3)/.7)**2;ue.pivot.rotation.set(-.6*Zn,.5*Zn*Math.sin(Zn*8),-(.06*Zl+.5*Zn)),ue.pivot.position.set(-1.2/2+.2*Zn*Math.sin(Zn*6),nr-.9*Zn,0),ue.stubFade=1-Zn;const Ba=Gt(.13,.075,nn);ue.mats[0].userData.bend.value=Ba,ue.mats[1].userData.bend.value=Ba+.6*Zn,ue.mats.forEach(rn=>{rn.userData.time.value=o?0:Y*.6}),ue.water.position.z=ue.water.userData.lift-Ba*We*We,bt(ue,js);const Vt=ue.mesh,Jl=(1-yi)*.15,Ql=.985+.015*yi;if(Ge){ue.savedRot||(ue.savedRot=new qn(gs(Vt.rotation.x),gs(Vt.rotation.y),gs(Vt.rotation.z),"YXZ"));let rn,qr,Gi,Ga;if(C===Mt?(rn=0,qr=Oi+Ce-x,Gi=ni.z,Ga=_r):(rn=ue.x,qr=(C!==null&&Mt<C?xr:-xr)-Ee.position.y,Gi=0,Ga=1),ue.pos.set(Gt(ue.x,rn,wt),Gt(ue.y,qr,wt),Gt(0,Gi,wt)),ue.scale=Gt(1,Ga,wt),Vt.position.copy(ue.pos),Vt.scale.setScalar(ue.scale),C===Mt&&(Pt.set(ue.pos.x,Ee.position.y+ue.pos.y-je.h/2*ue.scale,ue.pos.z+je.d/2*ue.scale).project(N),s.onCardBottom((1-(.5*Pt.y+.5))*i.clientHeight)),Ot){const za=ue.savedRot;let ao=wr(za.x,0,wt),so=wr(za.y,0,wt);const jl=wr(za.z,0,wt);Vt.rotation.set(ao,so,jl),ue.yaw=so,ue.pitch=ao,Vs(ue,Bt,R,wt);return}}else ue.savedRot=null,Vt.position.set(ue.x,ue.y+Jl,0),Vt.scale.setScalar(Ql);const eo=Ke(Mt);let to=eo,no=0;nn>.001&&!o&&(Vt.getWorldPosition(Pt),cn.subVectors(N.position,Pt),to=wr(eo,Math.atan2(cn.x,cn.z),nn),no=Gt(0,-Math.atan2(cn.y,Math.hypot(cn.x,cn.z)),nn));const io=Math.min(1,R*lm);if(ue.yaw=wr(ue.yaw,to,io),ue.pitch=Gt(ue.pitch,no,io),Vt.rotation.set(ue.pitch,ue.yaw,0),ze<.999){const rn=it[Mt];if(rn){const Gi=ue.hover*(2-ue.hover)*Math.max(0,Xt+.9-rn.p.z)/(N.position.z-rn.p.z);Pt.copy(rn.p).lerp(N.position,Gi).sub(Ee.position),Vt.position.lerpVectors(Pt,Vt.position,ze),qt.setFromEuler(Vt.rotation),Vt.quaternion.slerpQuaternions(rn.q,qt,ze),Vt.scale.setScalar(Gt(rn.s*(1-Gi),Vt.scale.x,ze))}else bt(ue,ue.mats[0].opacity*ze)}const ro=ue.hover*(2-ue.hover)*(1-wt);if(Vt.quaternion.slerp(N.quaternion,ro),Vt.scale.multiplyScalar(1+.16*ro),!o){const rn=1-.7*nn;Vt.position.y+=.035*rn*Math.sin(Y*.9+Mt*1.7),Vt.rotation.z+=.018*rn*Math.sin(Y*.63+Mt*2.3),Vt.rotation.x+=.03*rn*Math.sin(Y*.77+Mt*.9)}Vs(ue,G===Mt&&!Ge,R,1-wt)});const Bi=Pn<0?0:dn(Pn/.5),Mi=(1-.85*wt)*Bi*Ze,Ia=-Ee.position.y,Ua=Math.max(1e-4,j-Ia),vr=Qt.smoothstep(Ae,.02,.74),Xr=Qt.smoothstep(Ae,.08,.88),Fa=Qt.smoothstep(Ae,.88,1),Na=Math.max(..._t.map(ue=>ue.mats[0].opacity))*(1-Fa)*(1-wt);Pe.visible=!!et&&Na>.002,Pe.material.opacity=Na,Pe.material.transparent=Na<.999,Pe.material.userData.railMorph.value=vr,ye.value=.11*(1-vr),Pe.castShadow=vr<.85,et&&(Pt.set(Fe.railX,Ee.position.y+j-Ua*.5,-.01),Pe.position.lerpVectors(et.p,Pt,Xr),Pe.position.y+=o?0:Math.sin(Y*.72)*.018*(1-Xr),Pe.quaternion.slerpQuaternions(et.q,qt.identity(),Xr),Pe.scale.set(Gt(et.s,1.6*xe/je.w,vr),Gt(et.s,Ua/je.h,Xr),Gt(et.s,.08,vr)));for(const ue of L)ue.m.opacity=ue.base*Mi;if(re.material.opacity*=Fa,Ie.material.opacity*=Fa,re.scale.y=Ua,Ie.position.set(0,Ia,.003),Aa.forEach((ue,Mt)=>{const Bt=l[Mt]>=Ia-.05;Bt&&!ue.wasLit&&!o&&(ue.pulse=0),ue.wasLit=Bt,ue.lit+=((Bt?1:0)-ue.lit)*Math.min(1,R*8),ue.litMat.opacity=ue.lit*Mi,ue.pulse=Math.min(1,ue.pulse+R/.72);const nn=1-Math.pow(1-ue.pulse,3);ue.pulseM.scale.setScalar(1+2.6*nn),ue.pulseMat.opacity=(1-nn)*.8*Mi}),Gr.forEach((ue,Mt)=>{ue.k+=((Si===Mt?1:.45)-ue.k)*se,ue.mat.opacity=ue.k*Mi}),xi.position.set(fr+9*Vn,l[Si],0),xi.visible=wt<.2&&(o||Y%1.06<.56),Ue.forEach((ue,Mt)=>{if(!ue)return;const Bt=Math.abs(Mt*Un-Mn)/Un;ue.material.opacity=dn(1.4-Bt*1.2)*dn(1-wt*.4)*Bi*Ze}),Fe.briefs){const ue=i.clientWidth,Mt=i.clientHeight;n.forEach((Bt,nn)=>{Pt.set(Fe.railX+Li,Ee.position.y+l[nn],0).project(N);const Ei=(Pt.x*.5+.5)*ue,yi=(1-(Pt.y*.5+.5))*Mt-be[nn],Sr=(.35+.65*dn(1.6-Math.abs(nn*Un-Mn)/Un))*(1-wt)*Bi*Ze;Bt.style.transform=`translate3d(${Ei.toFixed(1)}px, ${yi.toFixed(1)}px, 0)`,Bt.style.opacity=Sr.toFixed(3),Bt.style.visibility=Sr<.01?"hidden":"visible",Bt.classList.toggle("is-current",nn===Si)})}r.forEach((ue,Mt)=>{if(!ue)return;const Bt=it[Mt],nn=ci===Mt;ue.classList.toggle("is-hot",nn);const Ei=Bt?dn(1-Ae*3)*Bi*(nn?1:1-.85*_):0;if(ue.style.opacity=Ei.toFixed(3),ue.style.visibility=Ei<.01?"hidden":"visible",!Bt||Ei<.01)return;const yi=Mt===3;Pt.set(Bt.p.x-je.w/2*Bt.s,Bt.p.y+(yi?-1.2814814814814814*Bt.s-.3:je.h/2*Bt.s+.16),Bt.p.z).project(N),ue.style.transform=`translate3d(${((Pt.x*.5+.5)*i.clientWidth).toFixed(1)}px, ${((1-(Pt.y*.5+.5))*i.clientHeight).toFixed(1)}px, 0)`}),Cn!==null&&!Ra&&Y-wa>=ll&&(Ra=!0,s.onOpen(Cn),setTimeout(Bs,1500));const Oa=Ot&&wt>.4?C:null;Oa!==W&&(W=Oa,s.onFocus(Oa)),me*=Math.exp(-3.4*R),me<.001&&(me=0),s.onBloom(o?0:Math.min(1,me)),K.uniforms.uTime.value=Y;for(const ue of _t){if(!ue.mesh.visible)continue;ue.mesh.getWorldQuaternion(ae).invert();const Mt=ue.waterProjection.material.uniforms;Mt.uLightDirection.value.copy(q).applyQuaternion(ae),Mt.uWaterHeight.value=ue.water.position.z+ue.mats[0].userData.bend.value*We*We}qe.update(Ae,wt),Ne(R,Ae),h.render(B,N),_>.003&&T>=0&&I()}return Qs(),{travelTo(R){Ot||($n=Math.max(0,Math.min(c-1,R))*Un,_n(.5))},focus:Gn,open:Ca,dispose(){cancelAnimationFrame(Js),window.removeEventListener("pageshow",Gs),Rn.disconnect(),window.removeEventListener("keydown",Zs),p.dispose(),v.dispose(),y.dispose(),g.dispose(),vt.forEach(R=>R.material.dispose()),te.dispose(),Z.dispose(),Pe.material.dispose(),Pe.customDepthMaterial?.dispose(),At.forEach(R=>{R.mesh.removeFromParent(),R.mesh.material.dispose(),R.mask.removeFromParent(),R.mask.material.dispose()}),Zt.dispose(),qe.dispose(),Nt.dispose(),nt.dispose(),Me.dispose(),_t.forEach(R=>{R.map.dispose(),R.artMap.dispose(),R.water.material.dispose(),R.waterProjection.material.dispose(),R.mats.forEach(Y=>Y.dispose()),R.mesh.customDepthMaterial?.dispose(),R.pivot.children[0].customDepthMaterial?.dispose()}),gt.dispose(),Je.dispose(),at.dispose(),w.geometry.dispose(),M.dispose(),S.dispose(),h.dispose()}}}const gi=JSON.parse(document.getElementById("sc-data").textContent),jt=document.querySelector(".sc-stage"),Em=jt.querySelector(".sc-canvas"),Ta=jt.querySelector(".sc-heading"),fl=Ta.querySelector(".sc-kicker"),ym=Ta.querySelector(".sc-title"),Tm=Ta.querySelector(".sc-tagline"),Os=jt.querySelector(".sc-era"),bm=Os.querySelector(".sc-era-tools"),Am=Os.querySelector(".sc-era-label"),Hl=[...jt.querySelectorAll(".sc-dot")],wm=jt.querySelector(".sc-bloom"),Rm=jt.querySelector(".sc-esc"),ba=jt.querySelector(".sc-focus-info"),Cm=ba.querySelector(".sc-focus-desc"),Pm=ba.querySelector(".sc-focus-meta"),lr=ba.querySelector(".sc-open"),Dm=lr.querySelector(".sc-open-text"),Lm=lr.querySelector(".sc-open-arrow"),pl=i=>{i.style.animation="none",i.offsetWidth,i.style.animation=""};let Vl=Number(jt.dataset.start)||0;function Im(i){const e=gi[i];fl.textContent=e.kicker??"",fl.hidden=!e.kicker,ym.textContent=e.title,Tm.textContent=e.tagline,bm.textContent=e.role,Am.textContent=e.roleLabel,pl(Ta),pl(Os),Vl=i,Hl.forEach((t,n)=>{t.classList.toggle("sc-dot--on",n===i),t.setAttribute("aria-current",n===i?"true":"false")})}let bs=null;function Um(i){if(bs=i,jt.classList.toggle("is-focused",i!==null),ba.hidden=i===null,i===null)return;const e=gi[i];Cm.textContent=e.desc,Pm.textContent=e.meta,lr.hidden=!e.href,e.href&&(Dm.textContent=e.cta??"",lr.href=e.href,lr.setAttribute("aria-label",`${e.cta}：${e.title}`),Lm.textContent=e.external?"↗":"→")}try{const i=[...jt.querySelectorAll(".sc-brief")],e=gi.map((u,h)=>jt.querySelector(`.hero-tag[data-tag="${h}"]`)),t=matchMedia("(prefers-reduced-motion: reduce)").matches,n=()=>window.scrollTo({top:window.innerHeight,behavior:t?"auto":"smooth"}),r=()=>window.scrollTo({top:0,behavior:t?"auto":"smooth"}),a=Mm(jt,Em,gi,i,e,Number(jt.dataset.start)||0,{onIndex:Im,onFocus:Um,onCardBottom:u=>jt.style.setProperty("--sc-card-bottom",`${Math.round(u)}px`),onOpen:u=>{gi[u].href&&(location.href=gi[u].href)},onBloom:u=>wm.style.opacity=String(.55*u),onLayout:u=>jt.classList.toggle("has-briefs",u),onHeroPick:u=>{n(),a.travelTo(u)},onLeaveTop:r}),s=()=>{const u=Math.min(1,Math.max(0,window.scrollY/Math.max(1,window.innerHeight)));document.documentElement.style.setProperty("--intro",u.toFixed(3)),jt.classList.toggle("chain-on",u>.995)};s(),window.addEventListener("scroll",s,{passive:!0});let o=0;window.addEventListener("wheel",u=>{const h=window.scrollY/Math.max(1,window.innerHeight);if(h>.995)return;u.preventDefault();const d=performance.now();if(d<o)return;const p=Math.abs(u.deltaX)>Math.abs(u.deltaY)?u.deltaX:u.deltaY;p>4?(o=d+900,n()):p<-4&&h>.005&&(o=d+900,r())},{passive:!1}),window.addEventListener("resize",s),document.querySelectorAll("[data-to-chain]").forEach(u=>u.addEventListener("click",h=>{h.preventDefault(),n()})),Hl.forEach((u,h)=>u.addEventListener("click",d=>{d.detail&&u.blur(),h===Vl?a.focus(h):a.travelTo(h)}));const c=jt.querySelector(".sc-dots"),l=u=>{u.stopPropagation();const h=u.touches[0]?.clientY;if(h===void 0)return;const d=c.getBoundingClientRect();a.travelTo(Math.min(gi.length-1,Math.max(0,Math.floor((h-d.top)/d.height*gi.length))))};c.addEventListener("touchstart",l,{passive:!0}),c.addEventListener("touchmove",l,{passive:!0}),c.addEventListener("touchend",u=>u.stopPropagation()),Rm.addEventListener("click",()=>a.focus(null)),lr.addEventListener("click",u=>{bs===null||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||(u.preventDefault(),a.open(bs))})}catch{jt.classList.add("no-webgl")}
