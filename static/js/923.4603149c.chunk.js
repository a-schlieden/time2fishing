"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[923],{923:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(433),i=t(439),a=t(791),c=t(689),s=t(474),o={},u=t(184),l=function(n){var e=n.tacklesArray,t=n.head,r=n.fnAddToLS,i=n.fnRemoveFromLS,a=n.isInLS;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:t}),(0,u.jsx)("ul",{className:o.wrapp,children:e.map((function(n){return(0,u.jsxs)("li",{children:[(0,u.jsx)("input",{type:"checkbox",id:n.id,name:"vehicle4",checked:a.some((function(e){return e===n.id})),onChange:a.some((function(e){return e===n.id}))?function(){return i(n)}:function(){return r(n)}}),(0,u.jsx)("span",{children:n.name})]},n.id)}))})]})},f=t(87),d="BackLink_linkWrap__fFatJ",m=function(){var n,e,t=null!==(n=null===(e=(0,c.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,u.jsx)(f.OL,{className:d,to:t,children:"GoBack"})},h=function(n){var e=n.reset;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("button",{onClick:e,children:"Clear"})})},k="fischArtDetails_wrapp__frjKn",j=function(n){var e,t=n.tackleArr,o="tackles",f=(0,c.TH)(),d=f.pathname,j=d.split("/")[2];console.log(d);var p=t.find((function(n){return n.loc===j})),x=f.state,v=(0,a.useState)(null!==(e=JSON.parse(window.localStorage.getItem(o)))&&void 0!==e?e:[]),g=(0,i.Z)(v,2),S=g[0],w=g[1];(0,a.useEffect)((function(){window.localStorage.setItem(o,JSON.stringify(S))}),[S,o]);var L=S.map((function(n){return n.id}));return(0,u.jsxs)("div",{style:{backgroundImage:"url(".concat("/time2fishing/images/carp.img",")")},className:k,children:[(0,u.jsx)(m,{link:x}),(0,u.jsx)(l,{tacklesArray:p.tackle,head:p.name,fnAddToLS:function(n){var e={id:n.id,name:n.name};w((function(n){return[e].concat((0,r.Z)(n))}))},fnRemoveFromLS:function(n){w(S.filter((function(e){return e.id!==n.id})))},isInLS:L}),(0,u.jsx)(h,{reset:function(){w([])}}),(0,u.jsx)(a.Suspense,{fallback:(0,u.jsx)(s.a,{}),children:(0,u.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=923.4603149c.chunk.js.map