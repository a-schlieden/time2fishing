"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[415],{415:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var s=t(433),c=t(439),i=t(791),a=t(689),r=t(474),l="FischTackle_head__OWLgk",u="FischTackle_fischTAckleList__AsawT",o=t(184),d=function(e){var n=e.tacklesArray,t=e.head,s=e.fnAddToLS,c=e.fnRemoveFromLS,i=e.isInLS;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{className:l,children:t}),(0,o.jsx)("ul",{className:u,children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("input",{type:"checkbox",id:e.id,name:"vehicle4",checked:i.some((function(n){return n===e.id})),onChange:i.some((function(n){return n===e.id}))?function(){return c(e)}:function(){return s(e)}}),(0,o.jsx)("span",{children:e.name})]},e.id)}))})]})},m="CustomTackleForm_formInput__YPsUr",f="CustomTackleForm_formBtn__3E+Lo",h=function(){return(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),e.target.reset()},children:[(0,o.jsx)("input",{className:m,type:"text",name:"text",placeholder:"Enter task text..."}),(0,o.jsx)("button",{className:f,type:"submit",children:"Add task"})]})},x={ctHead:"CustomTackle_ctHead__uBzsj",ctList:"CustomTackle_ctList__Yb2iQ"},j=function(){return(0,o.jsxs)("div",{className:x.ctWrapp,children:[(0,o.jsx)("h3",{className:x.ctHead,children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u0441\u043d\u0430\u0441\u0442\u0456"}),(0,o.jsx)(h,{}),(0,o.jsxs)("ul",{className:x.ctList,children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("input",{type:"checkbox",id:"13424",name:"vehicle4"}),(0,o.jsx)("span",{children:"My Tackle 1"})]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("input",{type:"checkbox",id:"134243",name:"vehicle4"}),(0,o.jsx)("span",{children:"My Tackle 2"})]})]})]})},k=t(87),p="BackLink_backLink__JiXo7",_=function(){var e,n,t=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,o.jsx)(k.OL,{className:p,to:t,children:"\u041d\u0430\u0437\u0430\u0434"})},v="ClearButton_clearBtn__+DYq-",g=function(e){var n=e.reset;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("button",{className:v,onClick:n,children:"\u041d\u0430 \u0440\u0438\u0431\u0430\u043b\u043a\u0443"})})},L="fischArtDetails_wrapp__frjKn",T=function(e){var n,t=e.tackleArr,l="tackles",u=(0,a.TH)(),m=u.pathname.split("/")[2],f=t.find((function(e){return e.loc===m})),h=u.state,x=(0,i.useState)(null!==(n=JSON.parse(window.localStorage.getItem(l)))&&void 0!==n?n:[]),k=(0,c.Z)(x,2),p=k[0],v=k[1];(0,i.useEffect)((function(){window.localStorage.setItem(l,JSON.stringify(p))}),[p,l]);var T=p.map((function(e){return e.id}));return(0,o.jsxs)("div",{style:{backgroundImage:"url(".concat("../images/"+m+".jpg",")")},className:L,children:[(0,o.jsx)(_,{link:h}),(0,o.jsx)(d,{tacklesArray:f.tackle,head:f.name,fnAddToLS:function(e){var n={id:e.id,name:e.name};v((function(e){return[n].concat((0,s.Z)(e))}))},fnRemoveFromLS:function(e){v(p.filter((function(n){return n.id!==e.id})))},isInLS:T}),(0,o.jsx)(j,{}),(0,o.jsx)(g,{reset:function(){v([])}}),(0,o.jsx)(i.Suspense,{fallback:(0,o.jsx)(r.a,{}),children:(0,o.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=415.e41a79e8.chunk.js.map