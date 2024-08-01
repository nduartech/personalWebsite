import{i as q}from"./index.BG2nPUTX.js";const y="data-astro-transition-persist";function U(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function B(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function W(t){for(const e of Array.from(document.head.children)){const n=j(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function V(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=t.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&G(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const K=()=>{const t=document.activeElement;if(t?.closest(`[${y}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>E({activeElement:t,start:e,end:n})}return()=>E({activeElement:t})}else return()=>E({activeElement:null})},E=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},j=(t,e)=>{const n=t.getAttribute(y),o=n&&e.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},G=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},z=t=>{U(t),B(t),W(t);const e=K();V(t.body,document.body),e()},J="astro:before-preparation",Q="astro:after-preparation",Z="astro:before-swap",tt="astro:after-swap",et=t=>document.dispatchEvent(new Event(t));class H extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,s,u,a,c,d,l){super(e,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=c,this.newDocument=d,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class nt extends H{formData;loader;constructor(e,n,o,r,s,u,a,c,d,l){super(J,{cancelable:!0},e,n,o,r,s,u,a,c),this.formData=d,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ot extends H{direction;viewTransition;swap;constructor(e,n){super(Z,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>z(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function rt(t,e,n,o,r,s,u,a,c){const d=new nt(t,e,n,o,r,s,window.document,u,a,c);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(et(Q),d.navigationType!=="traverse"&&R({scrollX,scrollY}))),d}function it(t,e){const n=new ot(t,e);return document.dispatchEvent(n),n.swap(),n}const st=history.pushState.bind(history),T=history.replaceState.bind(history),R=t=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...t},""))},x=!!document.startViewTransition,D=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),O=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,b,v;const X=t=>document.dispatchEvent(new Event(t)),Y=()=>X("astro:page-load"),at=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},L="data-astro-transition-persist",P="data-astro-transition",S="data-astro-transition-fallback";let k,g=0;history.state?(g=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):D()&&(T({index:g,scrollX,scrollY},""),history.scrollRestoration="manual");async function ct(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function _(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function lt(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const C=(t,e,n,o,r)=>{const s=O(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const c=history.state;T({...n.state,index:c.index,scrollX:c.scrollX,scrollY:c.scrollY},"",t.href)}else st({...n.state,index:++g,scrollX:0,scrollY:0},"",t.href);if(document.title=u,v=t,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const c=history.state;location.href=t.href,history.state||(T(c,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ut(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${L}="${n.getAttribute(L)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return e}async function I(t,e,n,o,r){async function s(c){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(S,c);const w=document.getAnimations().filter(h=>!l.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await s("old")}catch{}const u=document.title,a=it(t,n.viewTransition);C(a.to,a.from,e,u,o),X(tt),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function dt(){return f?.controller.abort(),f={controller:new AbortController}}async function $(t,e,n,o,r){const s=dt();if(!D()||location.origin!==n.origin){s===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&R({scrollX,scrollY}),O(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){C(n,e,o,document.title,r),s===f&&(f=void 0);return}const a=await rt(e,n,t,u,o.sourceElement,o.info,s.controller.signal,o.formData,c);if(a.defaultPrevented||a.signal.aborted){s===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function c(i){const w=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const p=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=p?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await ct(w,h);if(m===null){i.preventDefault();return}if(m.redirected){const p=new URL(m.redirected);if(p.origin!==i.to.origin){i.preventDefault();return}i.to=p}if(k??=new DOMParser,i.newDocument=k.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(p=>p.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const A=ut(i.newDocument);A.length&&!i.signal.aborted&&await Promise.all(A)}async function d(){if(b&&b.viewTransition){try{b.viewTransition.skipTransition()}catch{}try{await b.viewTransition.updateCallbackDone}catch{}}return b={transitionSkipped:!1}}const l=await d();if(a.signal.aborted){s===f&&(f=void 0);return}if(document.documentElement.setAttribute(P,a.direction),x)l.viewTransition=document.startViewTransition(async()=>await I(a,o,l,r));else{const i=(async()=>{await Promise.resolve(),await I(a,o,l,r,_())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(w=>l.viewTransitionFinished=w),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}l.viewTransition.updateCallbackDone.finally(async()=>{await lt(),Y(),at()}),l.viewTransition.finished.finally(()=>{l.viewTransition=void 0,l===b&&(b=void 0),s===f&&(f=void 0),document.documentElement.removeAttribute(P),document.documentElement.removeAttribute(S)});try{await l.viewTransition.updateCallbackDone}catch(i){const w=i;console.log("[astro]",w.name,w.message,w.stack)}}async function M(t,e){await $("forward",v,new URL(t,location.href),e??{})}function ft(t){if(!D()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>g?"forward":"back";g=n,$(o,v,new URL(location.href),{},e)}const N=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&R({scrollX,scrollY})};{if(x||_()!=="none")if(v=new URL(location.href),addEventListener("popstate",ft),addEventListener("load",Y),"onscrollend"in window)addEventListener("scrollend",N);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,N();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}function mt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function F(t){return t.dataset.astroReload!==void 0}(x||mt()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,o=e instanceof HTMLElement?e.href:e.href.baseVal,r=new URL(o,location.href).origin;F(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||r!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),M(o,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||F(e))return;const n=e,o=t.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const c=o?.getAttribute("formmethod")??u??"get";if(c==="dialog"||location.origin!==new URL(a,location.href).origin)return;const d={sourceElement:o??n};if(c==="get"){const l=new URLSearchParams(r),i=new URL(a);i.search=l.toString(),a=i.toString()}else d.formData=r;t.preventDefault(),M(a,d)}),q({prefetchAll:!0}));export{M as n};
