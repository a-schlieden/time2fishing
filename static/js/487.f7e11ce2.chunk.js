"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[487],{487:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var s=t(433),c=t(439),i=t(791),a=t(689),r=t(474),o="FischTackle_head__OWLgk",l="FischTackle_fischTAckleList__AsawT",u=t(184),d=function(e){var n=e.tacklesArray,t=e.head,s=e.fnAddToLS,c=e.fnRemoveFromLS,i=e.isInLS;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{className:o,children:t}),(0,u.jsx)("ul",{className:l,children:n.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)("input",{type:"checkbox",id:e.id,name:"vehicle4",checked:i.some((function(n){return n===e.id})),onChange:i.some((function(n){return n===e.id}))?function(){return c(e)}:function(){return s(e)}}),(0,u.jsx)("span",{children:e.name})]},e.id)}))})]})},m="CustomTackleForm_formInput__YPsUr",f="CustomTackleForm_formBtn__3E+Lo",h=function(e){var n=e.onSubmitForm,t=(0,i.useState)(""),s=(0,c.Z)(t,2),a=s[0],r=s[1];return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({formInfo:a}),r("")},children:[(0,u.jsx)("input",{className:m,type:"text",name:"text",value:a,placeholder:"Enter task text...",onChange:function(e){r(e.target.value)}}),(0,u.jsx)("button",{className:f,type:"submit",children:"Add task"})]})},x="CustomTackleList_ctList__GKZ-h",j=function(){return(0,u.jsxs)("ul",{className:x,children:[(0,u.jsxs)("li",{children:[(0,u.jsx)("input",{type:"checkbox",id:"13424",name:"vehicle4"}),(0,u.jsx)("span",{children:"My Tackle 1"})]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("input",{type:"checkbox",id:"134243",name:"vehicle4"}),(0,u.jsx)("span",{children:"My Tackle 2"})]})]})},k={ctHead:"CustomTackle_ctHead__uBzsj"},p=function(){var e=(0,i.useState)(""),n=(0,c.Z)(e,2),t=n[0],s=n[1];console.log(t);return(0,u.jsxs)("div",{className:k.ctWrapp,children:[(0,u.jsx)("h3",{className:k.ctHead,children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u0441\u043d\u0430\u0441\u0442\u0456"}),(0,u.jsx)(h,{onSubmitForm:function(e){console.log("infoFromForm",e),s([])}}),(0,u.jsx)(j,{customTackles:!0})]})},_=t(87),v="BackLink_backLink__JiXo7",g=function(){var e,n,t=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";return(0,u.jsx)(_.OL,{className:v,to:t,children:"\u041d\u0430\u0437\u0430\u0434"})},S="ClearButton_clearBtn__+DYq-",T=function(e){var n=e.reset;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("button",{className:S,onClick:n,children:"\u041d\u0430 \u0440\u0438\u0431\u0430\u043b\u043a\u0443"})})},b="fischArtDetails_wrapp__frjKn",L=function(e){var n,t=e.tackleArr,o="tackles",l=(0,a.TH)(),m=l.pathname.split("/")[2],f=t.find((function(e){return e.loc===m})),h=l.state,x=(0,i.useState)(null!==(n=JSON.parse(window.localStorage.getItem(o)))&&void 0!==n?n:[]),j=(0,c.Z)(x,2),k=j[0],_=j[1];(0,i.useEffect)((function(){window.localStorage.setItem(o,JSON.stringify(k))}),[k,o]);var v=k.map((function(e){return e.id}));return(0,u.jsxs)("div",{style:{backgroundImage:"url(".concat("../images/"+m+".jpg",")")},className:b,children:[(0,u.jsx)(g,{link:h}),(0,u.jsx)(d,{tacklesArray:f.tackle,head:f.name,fnAddToLS:function(e){var n={id:e.id,name:e.name};_((function(e){return[n].concat((0,s.Z)(e))}))},fnRemoveFromLS:function(e){_(k.filter((function(n){return n.id!==e.id})))},isInLS:v}),(0,u.jsx)(p,{}),(0,u.jsx)(T,{reset:function(){_([])}}),(0,u.jsx)(i.Suspense,{fallback:(0,u.jsx)(r.a,{}),children:(0,u.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=487.f7e11ce2.chunk.js.map