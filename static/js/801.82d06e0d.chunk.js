"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[801],{801:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(689),a=t(87),i="FischList_flWrap__pTT7g",s=t(184),c=function(e){var n=e.sublink,t=e.tackleArr,c=(0,r.TH)();return(0,s.jsx)("div",{className:i,children:t.length>0&&(0,s.jsx)("ul",{children:t.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(n?n+e.loc:e.loc),state:{from:c},children:e.name})},e.id)}))})})},h=t(861),o=t(439),d=t(757),u=t.n(d),l=t(791),f=t(426),p=t.n(f),m="Weather_weatherWrap__vD5yT",x="Weather_weatherDescriptionWrap__MFnIS",j=function(){var e=(0,l.useState)(51.3144537),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,l.useState)(12.2908344),i=(0,o.Z)(a,2),c=i[0],d=i[1],f=(0,l.useState)([]),j=(0,o.Z)(f,2),w=j[0],v=j[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,h.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){r(e.coords.latitude),d(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(t,"&lon=").concat(c,"&units=metric&APPID=").concat("d166a591b291530de4f15fa7d5685607")).then((function(e){return e.json()})).then((function(e){v(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),(0,s.jsx)("div",{className:m,children:"undefined"!=typeof w.main?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Weather in "}),(0,s.jsx)("h3",{children:w.name}),(0,s.jsxs)("p",{children:["Temprature: ",w.main.temp," \xb0C"]}),(0,s.jsxs)("p",{children:["Sunrise: ",new Date(1e3*w.sys.sunrise).toLocaleTimeString("en-IN")]}),(0,s.jsxs)("p",{children:["Sunset: ",new Date(1e3*w.sys.sunset).toLocaleTimeString("en-IN")]}),(0,s.jsxs)("div",{className:x,children:[(0,s.jsx)("p",{children:w.weather[0].main}),(0,s.jsx)("img",{src:"https://openweathermap.org/img/wn/"+w.weather[0].icon+".png",alt:"icon"})]}),(0,s.jsxs)("p",{children:["Humidity: ",w.main.humidity," %"]}),(0,s.jsxs)("p",{children:["Day: ",p()().format("dddd")]}),(0,s.jsxs)("p",{children:["Date: ",p()().format("LL")]})]}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"Sorry no data from server"})})})},w="WeatherWeekItem_weatherWeekItemItem__lD6Uf",v="WeatherWeekItem_weatherWeekItemList__XK20Y",_=function(e){var n=e.weatherArray;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{className:w,children:"There are Week list with weather for every day"}),(0,s.jsx)("ul",{className:v,children:n.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("span",{children:e.dt_txt})},e.dt)}))})]})},g="WeatherWeek_weatherWrap__dwI+P",W=function(){var e=(0,l.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,h.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5/forecast","?id=").concat(6548737,"&appid=").concat("d166a591b291530de4f15fa7d5685607","&units=metric")).then((function(e){return e.json()})).then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,s.jsx)("div",{className:g,children:"undefined"!=typeof t.city?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h3",{children:"Weather Week in "}),(0,s.jsx)("h3",{children:t.city.name}),(0,s.jsx)(_,{weatherArray:t.list})]}):(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:"Sorry no weather data from server"})})})},k="home_homeWrapp__r9n7O",y=function(e){var n=e.tackleArr;return(0,s.jsxs)("div",{className:k,children:[(0,s.jsx)(c,{sublink:"fishes/",tackleArr:n}),(0,s.jsxs)("div",{children:[(0,s.jsx)(j,{}),(0,s.jsx)(W,{})]})]})}}}]);
//# sourceMappingURL=801.82d06e0d.chunk.js.map