import{Spliter as t,UmpString as e}from"./spliter.js";
//! $ID: util.js 2019.08.18 Tpb.Tools $
const r=window.$,n=/^(\w+)(?:\(([^]*)\))?$/,o=new t("/",new e),i={find:(t,e,n,i)=>t&&"/"!=t?(t.includes("/")?[t,e]=function(t,e,r){let n=[...o.split(t,1)];if(1==n.length)return[t,r];return[n[1],a(n[0].trim(),e)]}(t,e,i):e=i||void 0,n?function(t,e){return t?r.get(t,e):e}(t,e):function(t,e){return t?r(t,e):r(e)}(t,e)):e,pba(t,e){let n=t.getAttribute("data-pba");return void 0===e?n?n.split("-").slice(0,-1):[]:null===e?n&&r.removeAttr(t,"data-pba"):void r.attr(t,"data-pba",e.join("-")+"-")},pbo(t,e){let n=t.getAttribute("data-pbo"),o=n?n.split(/\s+/):[];return void 0===e?o:null===e?n&&r.removeAttr(t,"data-pbo"):void r.attr(t,"data-pbo",function(t,e){let r=new Set(e);for(const e of t)switch(e[0]){case"-":r.delete(e.substring(1));break;case"^":u(r,e.substring(1));break;default:r.add(e)}return[...r]}(e,o).join(" "))},subObj:(t,e)=>e&&t.length?t.reduce(((t,e)=>t[e]),e):e,funcArgs(t){var e=t.match(n);if(!e)throw new Error(`${t} is not a call().`);return{name:e[1],args:e[2]}},fireEvent:(t,e,r,...n)=>r?setTimeout((()=>t.trigger(e,...n)),r):t.trigger(e,...n),color216(){let t=["0","3","6","9","c","f"],e=[];for(let r=0;r<6;++r)for(let n=0;n<6;++n)for(let o=0;o<6;++o)e.push("#"+t[r]+t[n]+t[o]);return e}};function a(t,e){return t<=0?e:isNaN(t)?r.closest(e.parentNode,t):r.closest(e,((e,r)=>r==t))}function u(t,e){return t.has(e)?t.delete(e):t.add(e)}export{i as Util};
