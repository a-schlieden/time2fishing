"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[99],{99:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var c=n(433),a=n(439),s=n(791),r=n(689),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},o=n(474),l="FischTackle_head__OWLgk",u="FischTackle_fischTAckleList__AsawT",d=n(184),m=function(e){var t=e.tacklesArray,n=e.head,c=e.fnAddToLS,a=e.fnRemoveFromLS,s=e.isInLS;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:l,children:n}),(0,d.jsx)("ul",{className:u,children:t.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)("input",{type:"checkbox",id:e.id,name:"vehicle4",checked:s.some((function(t){return t===e.id})),onChange:s.some((function(t){return t===e.id}))?function(){return a(e)}:function(){return c(e)}}),(0,d.jsx)("span",{children:e.name})]},e.id)}))})]})},f="CustomTackleForm_ctForm__Jdyzx",h="CustomTackleForm_ctFormInput__TKfQh",k="CustomTackleForm_ctFormBtn__4d7Rk",x=function(e){var t=e.onSubmitForm,n=(0,s.useState)(""),c=(0,a.Z)(n,2),r=c[0],i=c[1];return(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({formInfo:r}),i("")},className:f,children:[(0,d.jsx)("input",{className:h,type:"text",name:"text",value:r,placeholder:"Enter task text...",onChange:function(e){i(e.target.value)}}),(0,d.jsx)("button",{className:k,type:"submit",children:"Add task"})]})},_="CustomTackleList_ctList__GKZ-h",j="CustomTackleList_ctListItemSpan__97pxd",p=function(e){var t=e.customTackles;return console.log("lng",0===t.length),console.log("lng + text",t),(0,d.jsx)(d.Fragment,{children:t.length>0&&(0,d.jsx)("ul",{className:_,children:t.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)("input",{type:"checkbox",id:e.id,name:"vehicle4"}),(0,d.jsx)("span",{className:j,children:e.text})]},e.id)}))})})},g={ctHead:"CustomTackle_ctHead__uBzsj"},v=function(e){var t=e.allcustomTackles,n=e.newCustomTackleAdd;return(0,d.jsxs)("div",{className:g.ctWrapp,children:[(0,d.jsx)("h3",{className:g.ctHead,children:"\u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u0441\u043d\u0430\u0441\u0442\u0456"}),(0,d.jsx)(x,{onSubmitForm:n}),(0,d.jsx)(p,{customTackles:t})]})},S=n(87),T="BackLink_backLink__JiXo7",N=function(){var e,t,n=null!==(e=null===(t=(0,r.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,d.jsx)(S.OL,{className:T,to:n,children:"\u041d\u0430\u0437\u0430\u0434"})},w="ClearButton_clearBtn__+DYq-",C=function(e){var t=e.reset;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("button",{className:w,onClick:t,children:"\u041d\u0430 \u0440\u0438\u0431\u0430\u043b\u043a\u0443"})})},F="fischArtDetails_wrapp__frjKn",L=function(e){var t,n,l=e.tackleArr,u="tackles",f="custom_tackles",h=(0,r.TH)(),k=h.pathname.split("/")[2],x=l.find((function(e){return e.loc===k})),_=h.state,j=(0,s.useState)(null!==(t=JSON.parse(window.localStorage.getItem(u)))&&void 0!==t?t:[]),p=(0,a.Z)(j,2),g=p[0],S=p[1],T=(0,s.useState)(null!==(n=JSON.parse(window.localStorage.getItem(f)))&&void 0!==n?n:[]),w=(0,a.Z)(T,2),L=w[0],b=w[1];(0,s.useEffect)((function(){window.localStorage.setItem(u,JSON.stringify(g))}),[g,u]),(0,s.useEffect)((function(){window.localStorage.setItem(f,JSON.stringify(L))}),[L,f]);var y=g.map((function(e){return e.id}));return(0,d.jsxs)("div",{style:{backgroundImage:"url(".concat("../images/"+k+".jpg",")")},className:F,children:[(0,d.jsx)(N,{link:_}),(0,d.jsx)(m,{tacklesArray:x.tackle,head:x.name,fnAddToLS:function(e){var t={id:e.id,name:e.name};S((function(e){return[t].concat((0,c.Z)(e))}))},fnRemoveFromLS:function(e){S(g.filter((function(t){return t.id!==e.id})))},isInLS:y}),(0,d.jsx)(v,{newCustomTackleAdd:function(e){var t={id:i(),text:e.formInfo,chk:!0};b((function(e){return[t].concat((0,c.Z)(e))}))},allcustomTackles:L}),(0,d.jsx)(C,{reset:function(){return S([]),void b([])}}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)(o.a,{}),children:(0,d.jsx)(r.j3,{})})]})}}}]);
//# sourceMappingURL=99.0de6995b.chunk.js.map