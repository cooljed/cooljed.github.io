/*! Tpb/tQuery v0.4.1 | (c) zhliner@gmail.com 2021.12.05 | MIT License */
import t,{ACCESS as e,EXTENT as n,ChainStore as a,DEBUG as r,Globals as i,PREVCELL as o,JUMPCELL as s,HEADCELL as l,TplrName as c,TplsPool as d,DataStore as u,TLoader as _,tplInit as h}from"./config.js";import{Util as f}from"./tools/util.js";import{Ease as p}from"./tools/ease.js";import{format as m}from"./tools/date.js";import{Spliter as g,UmpCaller as y,UmpString as w,UmpChars as b}from"./tools/spliter.js";import{Render as v}from"./tools/render.js";import{obtAttr as x,Templater as E}from"./tools/templater.js";
//! $ID: base.js 2021.10.11 Tpb.Base $
function A(e,n,a,r){return"Object"==t.type(e)?[t.assign(r[n]||{},e,A)]:t.isFunction(e)?(e.name.startsWith("bound ")||(e=e.bind(a)),[M(e,a[`__${n}`],a[`__${n}_x`])]):null}function $(e,n,a,r){return"Object"==t.type(e)?[t.assign(r[n]||{},e,$)]:t.isFunction(e)?[M(e,a[`__${n}`],a[`__${n}_x`])]:null}function M(t,a,r){return r&&(t[e]=!0),void 0!==a&&(t[n]=a),t}function S(t,e,a,r){let i=e.split("."),o=i.pop();void 0!==r&&(a[n]=r),(k(i,t)||t)[o]=a}function j(t,e,n){let r=a.get(t);return r||(r=new Map,a.set(t,r)),n&&r.set(e,n)}function k(e,n){let a=n;for(const r of e||"")if(a=n[r],a){if("Object"!==t.type(a))throw new Error(`the ${r} field is not a Object.`)}else n[r]=a={},n=a;return a}function C(t,e,n,a,r){let i=k(t?t.split("."):[],r);for(const t of n){let n=e[`__${t}`];void 0===n&&(n=a),i[t]=M(e[t].bind(e),n,e[`__${t}_x`])}}
//! $ID: pbs.base.js 2019.08.19 Tpb.Base $
const O={1:"trimStart",0:"trim","-1":"trimEnd"},N=/\s+/,T=/(\s)(\s*)/g,P=[/rgba?\(\s*([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.%]+))?\s*\)/,/rgba?\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.%]+))?\s*\)/],R=/^#(?:[0-9A-F]{3}|[0-9A-F]{6}(?:[0-9A-F]{2})?)$/i,F={},U=Symbol("Range-store"),I={pass(t,...e){let n=t.data;if(e.length&&(n=e.includes(n)),!n)return Promise.reject()},__pass:1,end(t,...e){let n=t.data;if(e.length&&(n=e.includes(n)),n)return Promise.reject()},__end:1,exit:()=>Promise.reject(),__exit:null,avoid(t,e){let n=t.data;if(void 0===n||n)return t.event.preventDefault(),e},__avoid:-1,stop(t,e){let n=t.data;if(void 0===n||n)return t.event.stopPropagation(),e},__stop:-1,stopAll(t,e){let n=t.data;if(void 0===n||n)return t.event.stopImmediatePropagation(),e},__stopAll:-1,loop(t,e){r&&Y(0,"[loop] too many cycles."),t.data&&t.entry(e)},__loop:1,effect(t,e){r&&Y(1,"[effect] too many cycles."),t.data&&requestAnimationFrame((()=>t.entry(e)))},__effect:1,pop(t,e,n=1){1==n?e.tpop():e.tpops(n)},__pop_x:!0,pick(t,e,n){e.tpick(n)},__pick_x:!0,clip(t,e,n,a=1){e.tsplice(n,a)},__clip_x:!0,index(e,n,...a){let r=a[0];if(t.isArray(r))return n.tslice(r[0],r[1]);n.tindex(r,...a)},__index_x:!0,tmp(t,e,...n){e.tpush(...n)},__tmp_x:!0,nil:(t,e,n)=>void 0===t.data||t.data?e.undefined():n,__nil:-1,__nil_x:!0,push(t,e,...n){void 0!==t.data&&n.push(t.data),n.length>0&&e.push(...n)},__push:0,__push_x:!0,dup(t,e,n=1){let a=e.tops(1)[0];for(;n-- >0;)e.push(a)},__dup_x:!0,dups(t,e,n=1){n>0&&e.push(...e.tops(n))},__dups_x:!0,pack:(t,e,n=1)=>n>0?e.pops(n):[],__pack_x:!0,move(t,e,n,a=1){e.push(...e.splice(n,a))},__move_x:!0,part:(t,e,n,a)=>e.slice(n,a),__part_x:!0,spread(e,n){let a=e.data;n.push(...t.isArray(a)?a:[a])},__spread:1,__spread_x:!0,vain(t,e,n=1){1==n?e.pop():e.pops(n)},__vain_x:!0,env(t,e,n){if(void 0===n){let t=i.get(e);return void 0===t?null:t}null===n?i.delete(e):i.set(e,n)},__env:null,sess(t,e,n){if(void 0===n)return window.sessionStorage.getItem(e);z(window.sessionStorage,e,n)},__sess:null,local(t,e,n){if(void 0===n)return window.localStorage.getItem(e);z(window.localStorage,e,n)},__local:null,$if:(t,e,n)=>t.data?e:n,__$if:1,$case:(t,...e)=>e.map((e=>e===t.data)),__$case:1,$switch(t,...e){let n,a;for([n,a]of t.data.entries())if(a)return e[n];let r=e[n+1];return void 0===r?null:r},__$switch:1,or:(t,e,n)=>void 0!==n?t.data===n?e:t.data:t.data||e,__or:1,and:(t,e,n)=>void 0!==n?t.data===n?e:t.data:t.data&&e,__and:1,vtrue(t,e){for(const n of t.data)if(n&&(!e||n.length>0))return n;return null},__vtrue:1},q={unique:(e,n)=>t.isCollector(e.data)?e.data.unique(e.data,n):t.unique(e.data,n),__unique:1,sort:(e,n)=>t.isCollector(e.data)?e.data.sort(n):Array.from(e.data).sort(n),__sort:1,reverse(e){let n=e.data;return t.isArray(n)?t.isCollector(n)?n.reverse():Array.from(n).reverse():n.reverse()},__reverse:1,mix(t,e,n){let a=e.data(n);return a[0].map(((t,e)=>a.map((t=>t[e]))))},__mix_x:!0,sum:t=>t.data.reduce(((t,e)=>t+e),0),__sum:1,clean:(e,n,a)=>(t.isArray(e.data)?J:B)(e.data,n,a),__clean:1,datetime:(t,e="yyyy-MM-dd hh:mm")=>m(t.data,e),__datetime:1,time:(t,e)=>(void 0===e&&(e=!!t.data.getSeconds()),m(t.data,e?"hh:mm:ss":"hh:mm")),__time:1,add:(t,e)=>L(t.data,(t=>t+e)),__add:1,sub:(t,e)=>L(t.data,(t=>t-e)),__sub:1,mul:(t,e)=>L(t.data,(t=>t*e)),__mul:1,div:(t,e)=>L(t.data,(t=>t/e)),__div:1,idiv:(t,e)=>L(t.data,(t=>parseInt(t/e))),__idiv:1,mod:(t,e)=>L(t.data,(t=>t%e)),__mod:1,pow:(t,e)=>L(t.data,(t=>t**e)),__pow:1,neg:t=>L(t.data,(t=>-t)),__neg:1,vnot:t=>L(t.data,(t=>!t)),__vnot:1,divmod:(t,e)=>L(t.data,(t=>[parseInt(t/e),t%e])),__divmod:1,abs:t=>L(t.data,(t=>Math.abs(t))),__abs:1,ceil:t=>L(t.data,(t=>Math.ceil(t))),__ceil:1,floor:t=>L(t.data,(t=>Math.floor(t))),__floor:1,round:t=>L(t.data,(t=>Math.round(t))),__round:1,trunc:t=>L(t.data,(t=>Math.trunc(t))),__trunc:1,log:t=>L(t.data,(t=>Math.log(t))),__log:1,log2:t=>L(t.data,(t=>Math.log2(t))),__log2:1,log10:t=>L(t.data,(t=>Math.log10(t))),__log10:1,sin:t=>L(t.data,(t=>Math.sin(t))),__sin:1,cos:t=>L(t.data,(t=>Math.cos(t))),__cos:1,tan:t=>L(t.data,(t=>Math.tan(t))),__tan:1,sqrt:t=>L(t.data,(t=>Math.sqrt(t))),__sqrt:1,cbrt:t=>L(t.data,(t=>Math.cbrt(t))),__cbrt:1,sinh:t=>L(t.data,(t=>Math.sinh(t))),__sinh:1,cosh:t=>L(t.data,(t=>Math.cosh(t))),__cosh:1,tanh:t=>L(t.data,(t=>Math.tanh(t))),__tanh:1,acos:t=>L(t.data,(t=>Math.acos(t))),__acos:1,acosh:t=>L(t.data,(t=>Math.acosh(t))),__acosh:1,asin:t=>L(t.data,(t=>Math.asin(t))),__asin:1,asinh:t=>L(t.data,(t=>Math.asinh(t))),__asinh:1,atan:t=>L(t.data,(t=>Math.atan(t))),__atan:1,atanh:t=>L(t.data,(t=>Math.atanh(t))),__atanh:1,random:(t,e,n=1)=>n>1?function(t,e){let n=new Array(t).fill();if(null==e)return n.map((()=>Math.random()));return n.map((()=>Math.floor(Math.random()*Math.floor(e))))}(n,e):void 0===e?Math.random():Math.floor(Math.random()*Math.floor(e)),__random:null,max:(t,...e)=>Math.max(...e.concat(t.data)),__max:1,min:(t,...e)=>Math.min(...e.concat(t.data)),__min:1,eq:(t,e)=>L(t.data,(t=>t===e)),__eq:1,neq:(t,e)=>L(t.data,(t=>t!==e)),__neq:1,lt:(t,e)=>L(t.data,(t=>t<e)),__lt:1,lte:(t,e)=>L(t.data,(t=>t<=e)),__lte:1,gt:(t,e)=>L(t.data,(t=>t>e)),__gt:1,gte:(t,e)=>L(t.data,(t=>t>=e)),__gte:1,eqarr:(t,e)=>t.data.length==e.length&&t.data.every(((t,n)=>t===e[n])),__eqarr:1,isNaN:t=>L(t.data,(t=>isNaN(t))),__isNaN:1,contains:(e,n)=>t.contains(e.data[0],e.data[1],n),__contains:2,test:(t,e)=>t.data.test(e),__test:1,within:(t,e,n)=>e<=t.data&&t.data<=n,__within:1,inside:(t,...e)=>e.includes(t.data),__inside:1,both(t,e){let[n,a]=t.data;return e?!0===n&&!0===a:!(!n||!a)},__both:2,either(t,e){let[n,a]=t.data;return e?!0===n||!0===a:!(!n&&!a)},__either:2,every:(e,n)=>t.every(e.data,n||(t=>t),null),__every:1,some:(e,n)=>t.some(e.data,n||(t=>t),null),__some:1,exist:(t,e)=>N.test(e)?e.split(N).map((e=>void 0!==t.data[e])):void 0!==t.data[e],__exist:1,trim:(t,e=0)=>L(t.data,((t,e)=>t[e]()),O[e]),__trim:1,trims:(t,e="$1")=>L(t.data,(t=>t.replace(T,e))),__trims:1,substr:(t,e,n)=>L(t.data,(t=>t.slice(e,n))),__substr:1,replace:(t,...e)=>L(t.data,(t=>t.replace(...e))),__replace:1,split:(e,n,a,r)=>L(e.data,(e=>t.split(e,n,a,r))),__split:1,repeat:(t,e)=>L(t.data,(t=>t.repeat(e))),__repeat:1,caseUpper:(t,e)=>L(t.data,(t=>{return n=t,e?n.replace(/^[a-z]/g,(t=>t.toUpperCase())):n.toUpperCase();var n})),__caseUpper:1,caseLower:t=>L(t.data,(t=>t.toLowerCase())),__caseLower:1,rgb16(t){let e=t.data;return R.test(e)?4===e.length?D(e):e:L(e,(t=>function(t){let e=null;for(const n of P)if(e=t.match(n),e)break;return e&&function(t,e,n,a=""){if(a){let t=parseFloat(a);a=255*(a.includes("%")?t/100:t)}return`#${W(+t)}${W(+e)}${W(+n)}`+(a&&W(a))}(...e.slice(1))}(t)))},__rgb16:1,rgba:(t,e)=>isNaN(e)?t.data:L(t.data,(t=>function(t,e){4===t.length?t=D(t):9===t.length&&(t=t.substring(0,7));return t+W(e)}(t,e))),__rgba:1,exec:(t,...e)=>t.data(...e),__exec:1,calc:(t,e)=>new Function("$",`return ${e};`)(t.data),__calc:1,hotKey:(t,e,...n)=>t.data.fire(e,t.event,...n),__hotKey:1,xRange(t,e=U){if(void 0===t.data)return F[e];t.data&&(F[e]=t.data)},__xRange:-1,addRange(t,e=!0){let n=window.getSelection();return e&&n.removeAllRanges(),n.addRange(t.data),t.data},__addRange:1,exeCmd:(t,e,n)=>(t.data&&t.data.focus(),document.execCommand(e,!1,n)),__exeCmd:-1,clipboard(t,e="text/plain"){if(void 0===t.data)return t.event.clipboardData.getData(e);t.event.clipboardData.setData(e,t.data)},__clipboard:-1};function L(e,n,...a){return t.isArray(e)?e.map((t=>n(t,...a))):n(e,...a)}function z(t,e,n){return null===e?t.clear():null===n?t.removeItem(e):void t.setItem(e,n)}function D(t){return"#"+t.substring(1).split("").map((t=>t+t)).join("")}function W(t){return(t=Math.floor(t))<16?`0${t.toString(16)}`:t.toString(16)}function J(e,n,a){for(const r of e)t.isArray(r)?J(r,n,a):B(r,n,a);return e}function B(t,e,n){for(const a of Object.keys(t))t[a]===e&&(t[a]=n,void 0===t[a]&&delete t[a]);return t}function K(){this._prev.next=null}["not","has","filter","map","each"].forEach((function(e){q[e]=function(n,a){return t.isCollector(n.data)?n.data[e](a):t[e](n.data,a)},q[`__${e}`]=1})),["slice","flat","concat","splice"].forEach((function(t){q[t]=function(e,...n){return e.data[t](...n)},q[`__${t}`]=1})),K[o]=!0;const X=[0,0];function V(t,e,n,a){t.data?(a>0&&e.pops(a),this.next=function(t,e){for(;e--&&t;)t=t.next;return t}(this._next,n)):this.next=this._next}function Y(t,e){if(!(X[t]++<65536))throw new Error(e)}function G(t,e,n=""){if(window.console.info(n,{ev:t.event,evo:t,next:this.next,tmp:e._tmp.slice(),buf:e._buf.slice()}),!1===n)return Promise.reject()}V[n]=1,V[e]=!0,V[s]=!0,G[e]=!0,G[n]=null;const H=t.assign({},I,A);H.delay=function(t,e=1){return new Promise((t=>{window.clearTimeout(this._delay),this._delay=window.setTimeout(t,e)}))},H.prune=K,H.jump=V,H.entry=function(t){r&&(X[0]=0,X[1]=0),t.entry=this.call.bind(this.next,t)},H.debug=G;const Q=t.proto(t.assign({},q,A),H),Z={"@":"attr",$:"prop","%":"css","^":"toggleAttr"},tt=new g(";",new y,new w),et=new g(" ",new y),nt=new g("|",new y,new b("[","]")),at=/^[@^]?(\w[\w.:-]*)(?:\(([^]*?)\))?$/,rt=/^(^|[$\w][$\w.-]*)(?:\(([^]*)\))?$/,it=/^\(([^]*?)\)\s*([([{][^]+[)\]}])?$/,ot=/^\(([^]*?)\)$/,st=/^\[([\d:,\s]*)\]$/,lt=/\s*:\s*/,ct=/^\{([^]*)\}$/,dt=/^(\w+)(?:\(([^]*)\))?$/,ut={_:Symbol(0),_1:Symbol(1),_2:Symbol(2),_3:Symbol(3),_4:Symbol(4),_5:Symbol(5),_6:Symbol(6),_7:Symbol(7),_8:Symbol(8),_9:Symbol(9)},_t=Object.keys(ut).reduce(((t,e)=>(t[ut[e]]=+e.substring(1),t)),{}),ht={*obts(t){let e=[...tt.split(t.by)],n=[...tt.split(t.to)],a=0;if(!tt.ready())throw new Error(`{\nby: ${t.by}\nto: ${t.to}\n} has something bad.`);for(let r of tt.split(t.on))r=Et(r),r&&(yield{on:r,by:Et(e[a]),to:Et(n[a])},a++)},on(t){let[e,n]=nt.split(t,1);return[this.evns(e),this.calls(Et(n))]},by(t){return this.calls(t)},to(t){if(!t)return"";let[e,n,a]=[...nt.split(t,2)].map(Et);return[new vt(e),this.updates(n),this.calls(a)]},evns(t){return t&&this._parse(t,yt)},calls(t){return t&&this._parse(t,bt)},updates(t){return t&&this._parse(t,xt)},_parse(t,e){let n=[];for(const a of et.split(t))a&&n.push(new e(a));return n}};
//! $ID: core.js 2019.08.19 Tpb.Base $
class ft{constructor(t,e){this._pbson=t.on,this._pbsby=t.by,this._pbst2=t.update,this._pbst3=t.next,this._store=e}build(e,n){if(n.on){for(const t of ht.obts(n)){let n=ht.on(t.on),a=ht.by(t.by),r=ht.to(t.to);this.bind(e,n[0],this.chain(n,a,r[0],r[1],r[2]))}return t.trigger(e,"obted",null,!1,!1),e}}chain(t,e,n,a,r){let i=new pt,o=yt.apply(new gt(i)),s=this._on(o,i,t[1]);return s=this._by(s,i,e),s=this._query(s,i,n),s=this._update(s,i,a),this._nextStage(s,i,r),o}bind(e,n,a){for(const r of n){if(r.store){this._store(e,r.name,a);continue}let n=r.once?"one":"on";t[n](e,r.name,r.selector,a,r.capture)}}_on(t,e,n){if(n)for(const a of n)t=a.apply(new gt(e,t),this._pbson,t);return t}_by(t,e,n){if(n)for(const a of n)t=a.apply(new gt(e,t),this._pbsby,t);return t}_query(t,e,n){return n?n.apply(new gt(e,t)):t}_update(t,e,n){if(n)for(const a of n)t=a.apply(new gt(e,t),this._pbst2);return t}_nextStage(t,e,n){if(n)for(const a of n)t=a.apply(new gt(e,t),this._pbst3,t);return t}}class pt{constructor(){this._buf=[],this._tmp=[]}data(t){return 0===t?this._tmpall():this._tmp.length?this._tmpval(t):t>0?t>1?this._buf.splice(-t):this._buf.pop():void 0}push(...t){t.forEach((t=>void 0!==t&&this._buf.push(t))),window.STACKDATA&&window.console.info(...t)}undefined(){this._buf.push(void 0)}tops(t){return this._buf.slice(-t)}slice(t,e){return this._buf.slice(t,e)}splice(t,e){return this._buf.splice(t,e)}pop(){return this._buf.pop()}pops(t){return this._buf.splice(-t)}reset(){this._buf.length=0,this._tmp.length=0}tpop(){this._tmp.push(this._buf.pop())}tpops(t){t>1&&this._tmp.push(...this._buf.splice(-t))}tpick(t){let e=this._buf.splice(t,1)[0];this._tmp.push(void 0===e?null:e)}tindex(...t){this._tmp.push(...t.map((t=>this._index(t))))}tsplice(t,e){this._tmp.push(...this._buf.splice(t,e))}tslice(t,e){this._tmp.push(...this._buf.slice(t,e))}tpush(...t){this._tmp.push(...t)}_index(t){let e=this._buf[t<0?this._buf.length+t:t];return void 0===e?null:e}_tmpval(t){return t<0&&(t=-t),t>1?this._tmp.splice(0,t):this._tmp.shift()}_tmpall(){let t=this._tmp.splice(0);return t.length>1?t:t[0]}}const mt=Symbol("stack-key");class gt{constructor(t,e=null){this.next=null,this[mt]=t,this._meth=null,e&&(e.next=this)}handleEvent(t,e){return e.event=t,this[mt].reset(),r&&window.DEBUG&&window.console.info(t.type,e),this.call(e,this._extra)}setInit(t){return void 0!==t&&(this._extra=t),this}setRest(t){if(!t)return this;let e=_t[t[t.length-1]];return void 0!==e&&(t.pop(),this._rest=e),this}setJUMP(t){return void 0!==t&&(this._next=t),this._next}clone(t){let e=Object.assign(new gt,this);return t&&(e[mt]=t),e}build(t,e,n,a){return n&&(t=[this[mt]].concat(t||[])),this._meth=e,t&&(this._args=t),null!=a&&(this._want=a),this.setRest(this._args)}call(t,e){return this[mt].push(e),e=this._meth(t,...this.args(t,this._args||[],this._rest)),this.nextCall(t,e)}args(t,e,n){return 0===n?e=e.concat(this[mt].pop()):n>0&&(e=e.concat(this[mt].pops(n))),t.data=this.data(this._want),e}nextCall(t,e){return this.next?e instanceof Promise?void e.then((e=>this.next.call(t,e)),Mt):this.next.call(t,e):e}data(t){if(null!=t)return this[mt].data(t)}}class yt{constructor(t){let e=t.match(at);if(!e)throw new Error(`[${t}] is invalid`);this.name=e[1],this.selector=null,this.capture,e[2]&&this.slrcap(e[2].trim()),this.once="^"==t[0],this.store="@"==t[0]}slrcap(t){t.endsWith("!true")?(this.capture=!0,t=t.slice(0,-5)):t.endsWith("!false")&&(this.capture=!1,t=t.slice(0,-6)),this.selector=t||null}static apply(t){return Reflect.defineProperty(t,l,{value:!0,enumerable:!1}),t.build(null,wt)}}function wt(){}class bt{constructor(t){let e=t.match(rt);if(!e)throw new Error(`[${t}] is invalid calling.`);this._meth=e[1]||"push",this._args=At(e[2])}apply(t,a,r){let i=$t(this._meth,a);if(!i)throw new Error(`${this._meth} is not in pbs:calls.`);return i[s]&&t.setJUMP(!0),r.setJUMP()&&r.setJUMP(t),t[o]&&(t._prev=r),t.build(this._args,i,i[e],i[n])}}class vt{constructor(t){this._slr=t,this._one=!0,this._flr=null,this._matchMore(t.match(it))}apply(t){return t.build([this._slr,this._one,this._flr],St,!1,-1)}_matchMore(t){t&&(this._slr=t[1],this._flr=this._handle(t[2]),this._one=!1)}_handle(t){return t?ot.test(t)?this._exclude(t.match(ot)[1]):st.test(t)?this._number(t.match(st)[1]):ct.test(t)?this._filter(t.match(ct)[1]):void 0:null}_exclude(e){return n=>n.filter((n=>!t.is(n,e)))}_number(t){let e=t.split(lt);return e.length>1?this._range(e):(e=JSON.parse(`[${t}]`),t=>e.map((e=>t[e])).filter((t=>t)))}_range([t,e]){return t=Math.trunc(t)||0,e=e.trim()?Math.trunc(e):void 0,n=>n.slice(t,e)}_filter(t){let e=new Function("v","i","c",`return ${t};`);return t=>t.filter(e)}}class xt{constructor(t){let e=this.methArgs(t);this._meth=e[0],this._args=At(e[1])}apply(t,e){let n=$t(this._meth,e);return t.build(this._args,jt.bind(n),!1,1)}methArgs(t){let e=Z[t[0]];return e?[e,`'${t.substring(1)}'`]:t.match(dt).slice(1)}}function Et(t){return(t=t&&t.trim())&&"-"!=t?t:""}function At(t){return t?new Function(...Object.keys(ut),`return [${t}]`)(...Object.values(ut)):null}function $t(t,e){return(t=t.split(".")).length>1?f.subObj(t,e):e[t[0]]}function Mt(t){if(t&&r)return"string"!=typeof t?window.console.dir(t):t.startsWith("warn:")?window.console.warn(t.substring(5)):t.startsWith("err:")?window.console.error(t.substring(4)):void window.console.info(t)}function St(t,e,n,a){let r=t.data;void 0===r&&(r=t.delegate),t.updated=t.primary=function(t,e,n,a,r){switch(e){case"~":return t.target;case"=":return t.current}let i=f.find(e,n,a);return a?i:r?r(i):i}(t,e,r,n,a)}function jt(t,...e){let n=this(t.updated,t.data,...e);void 0!==n&&(t.updated=n)}
//! $ID: pbs.on.js 2019.08.19 Tpb.Base $
const kt={0:"event",1:"target",2:"current",3:"delegate",4:"selector",6:"data",7:"entry",10:"primary",11:"updated"},Ct={1:/^(?:F[0-9]+)$/,2:/^(?:F[0-9]+$|^Escape)$/,3:/^(?:Home|End|PgUp|PgDn)$/,4:/^(?:Arrow(?:Up|Left|Down|Right))$/,5:/^(?:Enter|Delete|Backspace)$/,6:/^(?:b|i|u)$/i},Ot=["altKey","ctrlKey","metaKey","shiftKey"],Nt=/\s+/,Tt=Symbol("mouse-movementX"),Pt=Symbol("mouse-movementY"),Rt=Symbol("scroll-horizontal"),Ft=Symbol("scroll-vertical"),Ut={$:(t,e,n)=>f.find(e,t.data||t.delegate,!0,n),__$:-1,$$:(e,n,a)=>"string"!=typeof n?t(n):f.find(n,e.data||e.delegate,!1,a),__$$:-1,find(e,n,a){let r=e.data;return t.isArray(r)?t(r).find(n,a):t.find(n,r,a)},__find:1,evo:(t,e,n)=>null==n?t:"data"==(n=kt[n]||n)?e.data(0):t[n],__evo_x:!0,ev:(t,e)=>null==e?t.event:Lt(e,t.event),__ev:null,its:(t,e)=>It(t.data,(t=>Lt(e+"",t))),__its:1,len:t=>t.data.length,__len:1,size:t=>t.data.size,__size:1,call:(t,e,...n)=>t.data[e](...n),__call:1,calls:(t,e,...n)=>t.data.map((t=>t[e](...n))),__calls:1,valo:(e,n)=>t.controls(e.data,n).reduce(((e,n)=>(e[n.name]=t.val(n),e)),{}),__valo:1,value(e,n,a){let r=t.controls(e.data||e.delegate,n,!a).map((e=>e&&t.val(e)));return 1===r.length?r[0]:r},__value:-1,checked(e,n,a){let r=t.controls(e.data||e.delegate,n,!a).map((t=>t&&(t.indeterminate?null:t.checked)));return 1===r.length?r[0]:r},__checked:-1,style:(t,e)=>It(t.data,(t=>Lt(e,t.style))),__style:1,sRange(t,e=!1){let n=window.getSelection(),a=n.rangeCount>0&&n.getRangeAt(0);return!a||a.collapsed?null:(e||a.startContainer===a.endContainer||a.startContainer.parentNode===a.endContainer.parentNode)&&a},__sRange:null,wRange(e,n){let a=window.getSelection(),r=a.rangeCount>0&&a.getRangeAt(0);return r&&void 0!==e.data?t.contains(e.data,r.commonAncestorContainer,n)&&r:r||null},__wRange:-1,nodeRange(t,e){let n=document.createRange();return n.selectNode(t.data),null!=e&&n.collapse(!!e),n},__nodeRange:1,edbox(e){let n=e.data.nodeType?e.data:e.data.commonAncestorContainer;return t.closest(n,"[contenteditable]")},__edbox:1,int:(t,e)=>It(t.data,(t=>parseInt(t,e))),__int:1,float:t=>It(t.data,(t=>parseFloat(t))),__float:1,re:(t,e)=>It(t.data,(t=>RegExp(t,e))),__re:1,bool:(t,e)=>It(t.data,e?t=>{return!!("object"==typeof(e=t)?e&&Object.keys(e).length:e);var e}:t=>!!t),__bool:1,str:(t,e="",n="")=>It(t.data,(t=>`${e}${t}${n}`)),__str:1,strr:(t,e="")=>It(t.data,(t=>`${t}${e}`)),__strr:1,arr:e=>"string"!=typeof e.data&&e.data[Symbol.iterator]?t.isArray(e.data)?e.data:Array.from(e.data):[e.data],__arr:1,obj:(e,n)=>void 0===n?Object(e.data):Nt.test(n)?function(e,n){if(t.isArray(n))return e.reduce(((t,e,a)=>(t[e]=n[a],t)),{});return e.reduce(((t,e)=>(t[e]=n,t)),{})}(n.split(Nt),e.data):{[n]:e.data},__obj:1,objz:t=>Object.fromEntries(t.data),__objz:1,array(e,n,...a){let r=e.data;return t.isArray(r)||(r=[r]),Jt(r.concat(a),n)},__array:1,arr2j:(t,e)=>t.data.filter(((t,n)=>!!e[n])),__arr2j:1,obj2x(e,n,a){if(!a)return Object.assign(n,e.data);let r=new Set(a.split(Nt));return t.assign(n,e.data,((t,e)=>r.has(e)&&[t]))},__obj2x:1,elem(e,n,a){let r=e.data;return a>0&&(r=Jt(t.isArray(r)?r:[r],a)),t.isArray(r)?t(r).elem(n):t.elem(n,r)},__elem:-1,clone(t,...e){let n=t.data;return"function"===n.clone?n.clone(...e):qt(n,"clone",...e)},__clone:1,clones(t,e,n,a=!0,r){let i=[];for(;e-- >0;)i.push(qt(t.data,"clone",n,a,r));return i},__clones:1,item(e,n){let a=e.data,r=t.isArray(a)&&!t.isCollector(a)?a[n]:t(a).item(n);return void 0===r?null:r},__item:1,wrapAll:(e,n)=>t(e.data).wrapAll(n),__wrapAll:1,handles:(e,n)=>t.handles(e.data,n)||null,__handles:1,attrs:(e,n)=>(n=n.split(Nt),It(e.data,(e=>n.map((n=>t.attr(e,n)))))),__attrs:1,props(e,n,a){let r=a?Bt:t.prop;return n=n.split(Nt),It(e.data,(t=>n.map((e=>Kt(r(t,e))))))},__props:1,prop(e,n,a){let r=a?Bt:t.prop;return It(e.data,(t=>Kt(r(t,n))))},__prop:1,property:(t,e,n)=>(e=e.split(Nt),n?It(t.data,(t=>e.reduce(((e,n)=>(e[n]=Bt(t,n),e)),{}))):qt(t.data,"property",e)),__property:1,json:(t,e,n)=>JSON.stringify(t.data,n,e),__json:1,jsons:(t,e,n)=>t.data.map((t=>JSON.stringify(t,n,e))),__jsons:1,JSON:(t,e)=>It(t.data,(t=>JSON.parse(t,e))),__JSON:1,URL:(t,e)=>new URL(t.data,e),__URL:1,Date:(t,...e)=>new Date(t.data,...e),__Date:1,Map:(t,e=1)=>1==e?new Map(t.data):Array(e).fill().map((()=>new Map(t.data))),__Map:-1,Set:(t,e=1)=>1==e?new Set(t.data):Array(e).fill().map((()=>new Set(t.data))),__Set:-1,tpl:(t,e,n=c)=>(t.data||d.get(n)).get(e),__tpl:-1,tplr:(t,e=c)=>d.get(e),__tplr:null,node(t,e,n,a){let r=t.data||d.get(c);return Nt.test(e)?e.split(Nt).map((t=>r.node(t,n,a))):r.node(e,n,a)},__node:-1,keys:e=>t.isFunction(e.data.keys)?[...e.data.keys()]:Object.keys(e.data),__keys:1,values:e=>t.isFunction(e.data.values)?[...e.data.values()]:Object.values(e.data),__values:1,func:(t,...e)=>new Function(...e,t.data),__func:1,data(t,e){let n=t.data||t.delegate,a=u.get(n);return r&&!a&&window.console.warn("key:",n,"data-store is undefined."),a?function(t,e){if(!Nt.test(e))return t.get(e);return e.split(Nt).map((e=>t.get(e)))}(a,e):null},__data:-1,einfo:(t,e,n)=>It(t.data,(t=>function(t,e,n){let a=t.tagName.toLowerCase();e&&t.id&&(a+=`#${t.id}`);n&&t.classList.length&&(a+="."+[...t.classList].join("."));return a}(t,e,n))),__einfo:1,hasRange:(e,n,a)=>("string"==typeof n&&(n=f.find(n,e.delegate,!0)),e.data&&t.contains(n,e.data.commonAncestorContainer,a)),__hasRange:1,scam(t,e){let n=new Set(Wt(t.event));return e?Xt(e.split(Nt),n):!n.size},__scam:null,SCAM(t,...e){let n=new Set(Wt(t.event));return e.length?e.some((t=>Xt(t.split(Nt),n))):n},__SCAM:null,acmsk(t){let e=Wt(t.event),n=t.event.key;return void 0===n?null:`${e.join("+")}:${n.toLowerCase()}`},__acmsk:null,iskey(t,...e){let n=t.event.key;return e.some((t=>"number"==typeof t?Ct[t].test(n):n===t))},__key:null,chain(t,e,n){let r=a.get(t.data),i=r&&r.get(e);return i?n?zt(i):i:Promise.reject("err:chain-store is undefined or chain unfound.")},__chain:1,chains(t,e,n){let r=a.get(t.data);return r?e?function(t,e,n){let a=new Map;for(const r of e){let e=t.get(r);e&&a.set(r,n?zt(e):e)}return a}(r,e.split(Nt),n):function(t,e){let n=new Map;for(const[a,r]of t)n.set(a,e?zt(r):r);return n}(r,n):Promise.reject("err:pre-store chain is unfound.")},__chains:1,timeOut(e,n,...a){let r=e.data;return null===n?window.clearTimeout(r):t.isFunction(r.handleEvent)?window.setTimeout(((t,e)=>r.handleEvent(t,e)),n,e.event,Dt(e)):window.setTimeout(r,n,...a)},__timeOut:1,timeTick(e,n,...a){let r=e.data;return null===n?window.clearInterval(r):t.isFunction(r.handleEvent)?window.setInterval(((t,e)=>r.handleEvent(t,e)),n,e.event,Dt(e)):window.setInterval(r,n,...a)},__timeTick:1,ease:(t,e,n,a)=>new p(e,n,a||t.data||1/0),__ease:-1,easing:(t,e=1,n=0)=>t.data.value()*e+n,__easing:1,animate:(t,e,n)=>It(t.data,(t=>t.animate(e,n))),__animate:1,remove(t,e,n){"boolean"==typeof e&&([n,e]=[e]);let a=qt(t.data,"remove",e);if(n)return a},__remove:1,normalize(t){qt(t.data,"normalize")},__normalize:1,clear(e){let n=e.data;t.isArray(n)||(n=[n]),n.forEach((e=>1===e.nodeType?t.val(e,null):e.clear()))},__clear:1,change(e){t(e.data).trigger("change")},__change:1,changes(e,n){It(e.data,(e=>t.changes(e,n)))},__changes:1,select(t,e){qt(t.data,"select",e)},__select:1,intoView(e,n,a){t.intoView(e.data,n,a)},__intoView:1,movementX(t,e){let n=t.current;if(null!==e){let e=n[Tt];return(n[Tt]=t.event.pageX)-e||0}delete n[Tt]},__movementX:null,movementY(t,e){let n=t.current;if(null!==e){let e=n[Pt];return(n[Pt]=t.event.pageY)-e||0}delete n[Pt]},__movementY:null,scrolledX(t,e){let n=t.current,a=t.data||n;if(null!==e){let t=n[Rt];return(n[Rt]=a.scrollLeft)-t||0}delete n[Rt]},__scrolledX:-1,scrolledY(t,e){let n=t.current,a=t.data||n;if(null!==e){let t=n[Ft];return(n[Ft]=a.scrollTop)-t||0}delete n[Ft]},__scrolledY:-1};function It(e,n){return t.isArray(e)?e.map((t=>n(t))):n(e)}function qt(e,n,...a){return t.isArray(e)?t(e)[n](...a):t[n](e,...a)}function Lt(t,e){return Nt.test(t)?t.split(Nt).map((t=>Kt(e[t]))):Kt(e[t])}function zt(t){let e=new pt,n=t.clone(e),a=n;for(;t=t.next;)a.next=t.clone(e),a=a.next;return n}function Dt(t){return{target:t.target,current:t.current,selector:t.selector,delegate:t.delegate}}function Wt(t){return Ot.filter((e=>t[e])).map((t=>t.slice(0,-3)))}function Jt(t,e){let n=t.length,a=t[n-1];return t.length=e,n<e?t.fill(a,n):t}function Bt(e,n){return e.indeterminate?null:t.prop(e,n)}function Kt(t){return void 0===t?null:t}function Xt(t,e){return t.length===e.size&&t.every((t=>e.has(t.toLowerCase())))}["attr","attribute","xattr","css","cssGets","hasClass","parentsUntil","closest","is","wrap","wrapInner"].forEach((function(t){Ut[t]=function(e,n){return qt(e.data,t,n)},Ut[`__${t}`]=1})),["height","width","innerHeight","innerWidth","scroll","scrollTop","scrollLeft","offset","val","html","text","classAll","position","offsetParent"].forEach((function(t){Ut[t]=function(e){return qt(e.data,t)},Ut[`__${t}`]=1})),["outerWidth","outerHeight","next","nextAll","nextUntil","nextNode","nextNodes","prev","prevAll","prevUntil","prevNode","prevNodes","children","contents","siblings","siblingNodes","parent","parents","textNodes","Text","fragment"].forEach((function(t){Ut[t]=function(e,...n){return qt(e.data,t,...n)},Ut[`__${t}`]=1})),["Element","svg"].forEach((function(e){Ut[e]=function(n,a){return t.isArray(n.data)?t(n.data)[e](a):t[e](a,n.data)},Ut[`__${e}`]=1})),["slr","now"].forEach((function(e){Ut[e]=function(n,...a){return t[e](...a)},Ut[`__${e}`]=null})),["table","dataName","tags","range","isXML","controls","serialize","queryURL","isArray","isNumeric","isFunction","isCollector","type","kvsMap","paths","siblingNth","mergeArray"].forEach((function(e){Ut[e]=function(n,...a){return t[e](n.data,...a)},Ut[`__${e}`]=1})),["first","last"].forEach((function(e){Ut[e]=function(n,a){return t(n.data)[e](a)},Ut[`__${e}`]=1})),["shift","join","includes","indexOf","lastIndexOf"].forEach((function(t){Ut[t]=function(e,n="",a){return e.data[t](n,a)},Ut[`__${t}`]=1})),["pbo","pba"].forEach((function(t){Ut[t]=function(e){return It(e.data,(e=>f[t](e)))},Ut[`__${t}`]=1})),["hidden","lost","disabled","folded","truncated","fulled"].forEach((function(t){Ut[t]=function(e){return It(e.data,(e=>f.pbo(e).includes(t)))},Ut[`__${t}`]=1})),[["hide","hidden"],["lose","lost"],["disable","disabled"],["fold","folded"],["truncate","truncated"],["full","fulled"]].forEach((function(t){Ut[t[0]]=function(e,n=1){It(e.data,(e=>function(t,e,n){f.pbo(t,[`${Vt[+e]}${n}`])}(e,n,t[1])))},Ut[`__${t[0]}`]=1})),["empty","unwrap"].forEach((function(t){Ut[t]=function(e,n){let a=qt(e.data,t,n);if(void 0!==n)return a},Ut[`__${t}`]=1})),["click","blur","focus","load","play","pause","reset","submit","finish","cancel"].forEach((function(e){Ut[e]=function(n){if(t.isArray(n.data))return n.data.forEach((n=>t[e](n)));t[e](n.data)},Ut[`__${e}`]=1}));const Vt=["-","","^"];const Yt=t.proto(t.assign({},Ut,A),Q),Gt=Yt,Ht={render:(t,e)=>v.update(t.data,e),__render:1,GET(t,e,n){let a=t.data||{};return a.method="GET",fetch(n,a).then((t=>t.ok?t[e]():Promise.reject(t.statusText)))},__GET:-1,POST:(t,e,n={})=>("string"==typeof n&&(n={headers:new Headers({"Content-Type":n})}),n.method="POST",n.body=t.data,fetch(e,n).then((t=>t.ok?t:Promise.reject(t.statusText)))),__POST:1},Qt=t.proto(t.assign({},Ht,A),Yt),Zt=/\s+/,te=Symbol("tips-timer"),ee=new Set(["before","after","prepend","append","fill","replace","wrap","wrapInner","html","text","empty","unwrap"]),ne={bind(t,e,n,a){le("on",t,e,n,a)},once(t,e,n,a){le("one",t,e,n,a)},trigger(e,n,a,r=!1,i=!0){if(t.isArray(e))return e.forEach((e=>t.trigger(e,a,n,r,i)));t.trigger(e,a,n,r,i)},triggers(e,n,a,r=!1,i=!0){e.forEach(((e,o)=>t.trigger(e,a,n[o],r,i)))},cloneEvents(e,n,a){if(t.isArray(e))return t.isArray(n)?e.forEach(((e,r)=>t.cloneEvents(e,n[r],a))):e.forEach((e=>t.cloneEvents(e,n,a)));t.cloneEvents(e,n,a)},toggleAttr(e,n,a,r){if(t.isArray(e))return t(e).toggleAttr(a,n,r);t.toggleAttr(e,a,n,r)},wrapAll:(e,n,a,r,i)=>t(e).wrapAll(n,a,r,i),scroll(e,n){if(t.isArray(e))return t(e).scroll(_e(n));t.scroll(e,_e(n))},nodex(e,n,a,...r){if(!ee.has(a))throw new Error(`[${a}] is not a valid method`);return t.isArray(e)?t(e)[a](n,...r):t[a](e,n,...r)},render(e,n){if(t.isArray(e))return e.forEach((t=>v.update(t,n)));v.update(e,n)},set(t,e,n){if(1===(n=n.split(Zt)).length)return de(t,n[0],e);n.forEach(((n,a)=>de(t,n,e[a])))},add(e,n,...a){if(t.isArray(e))return e.forEach(((t,e)=>t.add(n[e],...a)));e.add(n,...a)},adds(e,n){if(t.isArray(e))return e.forEach((t=>n.forEach((e=>t.add(e)))));n.forEach((t=>e.add(t)))},apply(e,n,a,...r){if(t.isArray(e))return e.forEach((t=>t[a](n,...r)));e[a](n,...r)},applies(e,n,a){if(t.isArray(e))return e.forEach((t=>n.forEach((e=>t[a](...[].concat(e))))));n.forEach((t=>e[a](...[].concat(t))))},tips(e,n,a){if(t.isArray(e))return e.forEach((t=>ue(t,n,a)));ue(e,n,a)},only(e,n,a){t.isArray(e)||(e=[e]),n.forEach((n=>e.includes(n)||t.removeClass(n,a))),e.forEach((e=>t.addClass(e,a)))},data(e,n,a){if(t.isArray(e)||(e=[e]),Zt.test(a))return function(t,e,n,a){t.forEach((t=>a(re(u,t),e,n)))}(e,a.split(Zt),n,t.isArray(n)?ie:oe);e.forEach((t=>re(u,t).set(a,n)))},chain(e,n,a){if(t.isArray(e))return e.forEach((t=>j(t,a,n)));j(e,a,n)},chains(e,n){if(t.isArray(e))return e.forEach((t=>ce(t,n)));ce(e,n)}};["before","after","prepend","append","fill","replace","wrap","wrapInner"].forEach((function(e){ne[e]=function(n,a,r,i,o){return t.isArray(n)?t(n)[e](a,r,i,o):t[e](n,a,r,i,o)}})),["html","text"].forEach((function(e){ne[e]=function(n,a,r,i){if(void 0!==a)return t.isArray(n)?t(n)[e](a,r,i):t[e](n,a,r,i)}})),["empty","unwrap","remove"].forEach((function(e){ne[e]=function(n,a){return t.isArray(n)?t(n)[e](a):t[e](n,a)}})),[["beforeWith","insertBefore"],["afterWith","insertAfter"],["prependWith","prependTo"],["appendWith","appendTo"],["replaceWith","replaceAll"],["fillWith","fillTo"]].forEach((function(e){ne[e[0]]=function(n,a,r,i,o){return a=t(n)[e[1]](a,r,i,o),r?a.end(1):a}})),["attr","attribute","prop","property","css","cssSets"].forEach((function(e){ne[e]=function(n,a,r){t.isArray(n)?t(n)[e](r,a):t[e](n,r,a)}})),["height","width","scrollTop","scrollLeft","addClass","removeClass","toggleClass","removeAttr","val","offset"].forEach((function(e){ne[e]=function(n,a,...r){t.isArray(n)?t(n)[e](a,...r):t[e](n,a,...r)}})),["on","one","off"].forEach((function(e){ne[e]=function(n,a,r,i,o){if(void 0!==o&&a.setInit(o),t.isArray(n))return t(n)[e](r,i,a);t[e](n,r,i,a)}})),["pbo","pba"].forEach((function(e){ne[e]=function(n,a){if(t.isArray(n))return n.forEach((t=>f[e](t,a)));f[e](n,a)}})),[["hide","hidden"],["lose","lost"],["disable","disabled"],["fold","folded"],["truncate","truncated"],["full","fulled"]].forEach((function(e){ne[e[0]]=function(n,a){if(t.isArray(n))return t.isArray(a)?function(t,e,n){t.forEach(((t,a)=>void 0!==e[a]&&fe(t,e[a],n)))}(n,a,e[1]):function(t,e,n){t.forEach((t=>fe(t,e,n)))}(n,a,e[1]);fe(n,a,e[1])}}));const ae={target:(t,e=1)=>e>0?t.updated:t.primary,__target:null,goto(e,n){t.trigger(e.delegate,n,e.data,!1)},__goto:-1,fire(e,n,a,r=1,i=!0,o=!0){let s=pe(e,n);f.fireEvent(t(s),a,r,e.data,i,o)},__fire:-1,change(e,n=11,a){t(pe(e,n,!a)).trigger("change",e.data,!0)},__change:-1,changes(e,n=11,a){let r=pe(e,n,!a);for(const n of t(r))t.changes(n,e.data)},__changes:-1,select(e,n=11,a){t(e.data||pe(e,n,!0)).select(a)},__select:-1,normalize(e,n=11,a){t(pe(e,n,!a)).normalize()},__normalize:null,clear(e,n=11,a){t(pe(e,n,!a)).forEach((e=>1===e.nodeType?t.val(e,null):e.clear()))},__clear:null,intoView(e,n,a,r=11,i){t(pe(e,r,!i)).forEach((e=>t.intoView(e,n,a)))},__intoView:null};function re(t,e){let n=t.get(e);return n||t.set(e,n=new Map),n}function ie(t,e,n){e.forEach(((e,a)=>void 0!==n[a]&&t.set(e,n[a])))}function oe(t,e,n){e.forEach((e=>t.set(e,n)))}function se(e,n,r,i,o,s){let l=a.get(n);return l?function(e,n,a,r,i,o){a||(a=[...n.keys()]);for(const s of a)n.has(s)&&t[o](e,s.split(":",1)[0],r,n.get(s).setInit(i))}(r,l,o&&o.split(Zt),s,i,e):window.console.warn("no storage on:",n)}function le(e,n,a,r,i){if(t.isArray(n))return n.forEach((t=>se(e,t,t,a,r,i)));se(e,n,n,a,r,i)}function ce(t,e){for(const[n,a]of e)j(t,n,a)}function de(e,n,a){t.isFunction(e.set)?e.set(n,a):e[n]=a}function ue(e,n,a){a>0&&(clearTimeout(e[te]),e[te]=setTimeout((()=>t.empty(e)),1e3*a)),e.textContent=n}function _e(e){return"Object"==t.type(e)?e:"number"==typeof e?{top:e}:{left:e[0],top:e[1]}}["click","blur","focus","load","play","pause","reset","submit","finish","cancel"].forEach((function(e){ae[e]=function(n,a=11,r){t(n.data||pe(n,a,!r))[e]()},ae[`__${e}`]=-1}));const he=["-","","^"];function fe(t,e,n){f.pbo(t,[`${he[+e]}${n}`])}function pe(t,e,n){switch(+e){case 1:return t.target;case 2:return t.current;case 3:return t.delegate;case 10:return t.primary;case 11:return t.updated}return"string"==typeof e?f.find(e,t.delegate,n):e}const me={Update:t.assign({},ne,A),Next:t.proto(t.assign({},ae,A),Yt)};
//! $ID: app.js 2019.08.10 Tpb.Base $
class ge{constructor(t,e,n){this._c=this._getter(t||{}),this._m=this._getter(e||{}),this._v=this._getter(n||{})}run(t,e,...n){let a=this._c[e](t.data,...n);return Promise.resolve(a).then((t=>this._m[e](t))).then((t=>this._v[e](t)))}control(t={}){return Object.assign(this._c,t)}model(t={}){return Object.assign(this._m,t)}view(t={}){return Object.assign(this._v,t)}call(t,e,...n){return this.run(e,t,...n)}_getter(t){return new Proxy(t,{get:(t,e)=>t[e]||(t=>t),set:(t,e,n)=>{return"function"!=typeof n&&(a=n,window.console.warn(a));var a}})}}
//! $ID: tpb.js 2019.08.19 Tpb.Base $
function ye(e,n,a,r,i){if(t.isFunction(a))return S(e,n,a,r);C(n,a,r,i,e)}function we(e,n,a,r,i){return t.isFunction(a)?S(e,n,a,r):t.isArray(r)?C(n,a,r,i,e):void function(e,n,a,r){let i=a?$:A;t.assign(k(e.split("."),r),n||{},i)}(n,a,r,e)}function be(t,e,n,a){S(t,e,new Proxy({},{get:(t,e)=>M(n(e),a)}))}function ve(t,e,n,a=[]){let r=t[e];if(null!=r)throw new Error(`By[${e}] is already exist.`);t[e]=r={};let i=new ge(n.control,n.model,n.view);r.run=i.run.bind(i),a.forEach((t=>r[t]=i.call.bind(i,t)))}function xe(t,e){return new ft({on:t||Gt,by:e||Qt,update:me.Update,next:me.Next},j)}r&&(window.Update=me.Update,window.Next=me.Next,window.namedTpls=function(e,n){let a=new Map;t.isArray(e)||(e=[e]);e.forEach((t=>a.set(t,null))),_.clear(),Promise.all(e.map((e=>_.node(e).then((e=>t.find("[tpl-name]",e).map((e=>t.attr(e,"tpl-name"))))).then((t=>a.set(e,n?function(t){let e;return t.sort().map((t=>{let n=t===e?`[__REPEATED__]: ${t}`:t;return e=t,n}))}(t):t)))))).then((()=>function(t){let e={};for(const[n,a]of t)e[n]=a;window.console.info(JSON.stringify(e,null,"\t"))}(a)))},window.DataStore=u);const Ee={init:function(t,e,n=_){return h(new E(xe(t,e),n))},build:function(t,e,n,a,r=_){let i=xe(n,a);return e?i.build(t,e):x(t,r).then((e=>e.forEach((e=>i.build(t,e)))||t))},templater:function(t,e){return void 0===e?d.get(t||c):null===e?d.delete(t):void d.set(t,e)}};export{Qt as BaseBy,Gt as BaseOn,Ee as Tpb,ve as cmvApp,ye as customGetter,xe as obtBuilder,we as processExtend,be as processProxy};
