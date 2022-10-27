import{c as T,a as f,h,b as W,r as y,i as K,o as O,d as P,n as X,e as D,g as R,l as k,f as L,w as S,j as Z,k as Y,m as M,p as G,q as ee,s as A,t as te,u as Q,v as oe,x as ne,_ as ie,y as le,z as re,A as ae,B as C,C as se,D as q,E as ue,F as ce}from"./index.96efde1f.js";var de=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:u}){const o=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},W(u.default))}}),fe=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const o=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},W(u.default))}});function ve(){const e=y(!K.value);return e.value===!1&&O(()=>{e.value=!0}),e}const J=typeof ResizeObserver!="undefined",U=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var N=T({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let o=null,t,i={width:-1,height:-1};function a(s){s===!0||e.debounce===0||e.debounce==="0"?c():o===null&&(o=setTimeout(c,e.debounce))}function c(){if(clearTimeout(o),o=null,t){const{offsetWidth:s,offsetHeight:l}=t;(s!==i.width||l!==i.height)&&(i={width:s,height:l},u("resize",i))}}const{proxy:m}=R();if(J===!0){let s;const l=g=>{t=m.$el.parentNode,t?(s=new ResizeObserver(a),s.observe(t),c()):g!==!0&&D(()=>{l(!0)})};return O(()=>{l()}),P(()=>{clearTimeout(o),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),X}else{let g=function(){clearTimeout(o),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",a,k.passive),l=void 0)},p=function(){g(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",a,k.passive),c())};const s=ve();let l;return O(()=>{D(()=>{t=m.$el,t&&p()})}),P(g),m.trigger=a,()=>{if(s.value===!0)return h("object",{style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:p})}}}}),he=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:o}){const{proxy:{$q:t}}=R(),i=Y(M,L);if(i===L)return console.error("QHeader needs to be child of QLayout"),L;const a=y(parseInt(e.heightHint,10)),c=y(!0),m=f(()=>e.reveal===!0||i.view.value.indexOf("H")>-1||t.platform.is.ios&&i.isContainer.value===!0),s=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?a.value:0;const n=a.value-i.scroll.value.position;return n>0?n:0}),l=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),g=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),p=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const n=i.rows.value.top,b={};return n[0]==="l"&&i.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${i.left.size}px`),n[2]==="r"&&i.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${i.right.size}px`),b});function d(n,b){i.update("header",n,b)}function w(n,b){n.value!==b&&(n.value=b)}function H({height:n}){w(a,n),d("size",n)}function V(n){g.value===!0&&w(c,!0),o("focusin",n)}S(()=>e.modelValue,n=>{d("space",n),w(c,!0),i.animate()}),S(s,n=>{d("offset",n)}),S(()=>e.reveal,n=>{n===!1&&w(c,e.modelValue)}),S(c,n=>{i.animate(),o("reveal",n)}),S(i.scroll,n=>{e.reveal===!0&&w(c,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const _={};return i.instances.header=_,e.modelValue===!0&&d("size",a.value),d("space",e.modelValue),d("offset",s.value),P(()=>{i.instances.header===_&&(i.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const n=Z(u.default,[]);return e.elevated===!0&&n.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(h(N,{debounce:0,onResize:H})),h("header",{class:p.value,style:z.value,onFocusin:V},n)}}}),me=T({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:o}}=R(),t=Y(M,L);if(t===L)return console.error("QPageContainer needs to be child of QLayout"),L;G(ee,!0);const i=f(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:i.value},W(u.default))}});const ge=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,u){let o=te(u);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return ge.includes(o)?window:o}function be(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function we(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let E;function F(){if(E!==void 0)return E;const e=document.createElement("p"),u=document.createElement("div");A(e,{width:"100%",height:"200px"}),A(u,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),u.appendChild(e),document.body.appendChild(u);const o=e.offsetWidth;u.style.overflow="scroll";let t=e.offsetWidth;return o===t&&(t=u.clientWidth),u.remove(),E=o-t,E}const{passive:I}=k,ye=["both","horizontal","vertical"];var ze=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,a;S(()=>e.scrollTarget,()=>{s(),m()});function c(){t!==null&&t();const p=Math.max(0,be(i)),z=we(i),d={top:p-o.position.top,left:z-o.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const w=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";o.position={top:p,left:z},o.directionChanged=o.direction!==w,o.delta=d,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),u("scroll",{...o})}function m(){i=pe(a,e.scrollTarget),i.addEventListener("scroll",l,I),l(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",l,I),i=void 0)}function l(p){if(p===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[z,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(z),t=null}}}const{proxy:g}=R();return O(()=>{a=g.$el.parentNode,m()}),P(()=>{t!==null&&t(),s()}),Object.assign(g,{trigger:l,getPosition:()=>o}),X}}),xe=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:o}){const{proxy:{$q:t}}=R(),i=y(null),a=y(t.screen.height),c=y(e.container===!0?0:t.screen.width),m=y({position:0,direction:"down",inflectionPoint:0}),s=y(0),l=y(K.value===!0?0:F()),g=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function w(r){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};m.value=v,e.onScroll!==void 0&&o("scroll",v)}}function H(r){const{height:v,width:x}=r;let $=!1;a.value!==v&&($=!0,a.value=v,e.onScrollHeight!==void 0&&o("scroll-height",v),_()),c.value!==x&&($=!0,c.value=x),$===!0&&e.onResize!==void 0&&o("resize",r)}function V({height:r}){s.value!==r&&(s.value=r,_())}function _(){if(e.container===!0){const r=a.value>s.value?F():0;l.value!==r&&(l.value=r)}}let n;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:i,height:a,containerHeight:s,scrollbarWidth:l,totalWidth:f(()=>c.value+l.value),rows:f(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:Q({size:0,offset:0,space:!1}),right:Q({size:300,offset:0,space:!1}),footer:Q({size:0,offset:0,space:!1}),left:Q({size:300,offset:0,space:!1}),scroll:m,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(r,v,x){b[r][v]=x}};if(G(M,b),F()>0){let x=function(){r=null,v.classList.remove("hide-scrollbar")},$=function(){if(r===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(x,300)},B=function(j){r!==null&&j==="remove"&&(clearTimeout(r),x()),window[`${j}EventListener`]("resize",$)},r=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),oe(()=>{B("remove")})}return()=>{const r=ne(u.default,[h(ze,{onScroll:w}),h(N,{onResize:H})]),v=h("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:i,tabindex:-1},r);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(N,{onResize:V}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:d.value},[v])])]):v}}});const Se=le({name:"MainLayout"}),Te=ce("div",null,null,-1);function Le(e,u,o,t,i,a){const c=se("router-view");return re(),ae(xe,{view:"lHh Lpr lFf"},{default:C(()=>[q(he,{elevated:""},{default:C(()=>[q(fe,null,{default:C(()=>[q(de,null,{default:C(()=>[ue(" Order App ")]),_:1}),Te]),_:1})]),_:1}),q(me,null,{default:C(()=>[q(c)]),_:1})]),_:1})}var $e=ie(Se,[["render",Le]]);export{$e as default};
