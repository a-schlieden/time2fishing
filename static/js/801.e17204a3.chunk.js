"use strict";(self.webpackChunktime2fishing=self.webpackChunktime2fishing||[]).push([[801],{801:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(689),a=n(87),s="FischList_flWrap__pTT7g",i=n(184),c=function(e){var t=e.sublink,n=e.tackleArr,c=(0,r.TH)();return(0,i.jsx)("div",{className:s,children:n.length>0&&(0,i.jsx)("ul",{children:n.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"".concat(t?t+e.loc:e.loc),state:{from:c},children:e.name})},e.id)}))})})},o=n(861),u=n(439),d=n(757),h=n.n(d),l=n(791),p=n(426),f=n.n(p),m="Weather_weatherWrap__vD5yT",x="Weather_weatherDescriptionWrap__MFnIS",j=function(){var e=(0,l.useState)(51.3144537),t=(0,u.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)(12.2908344),s=(0,u.Z)(a,2),c=s[0],d=s[1],p=(0,l.useState)([]),j=(0,u.Z)(p,2),g=j[0],w=j[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){r(e.coords.latitude),d(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5/weather/","?id=").concat(6548737,"&units=metric&APPID=").concat("d166a591b291530de4f15fa7d5685607")).then((function(e){return e.json()})).then((function(e){w(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n,c]),(0,i.jsx)("div",{className:m,children:"undefined"!=typeof g.main?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h3",{children:["Weather in ",g.name," today"]}),(0,i.jsxs)("p",{children:[f()().format("dddd")," ",f()().subtract(10,"days").calendar()]}),(0,i.jsxs)("p",{children:["Temprature: ",g.main.temp," \xb0C"]}),(0,i.jsxs)("p",{children:["Sunrise: ",new Date(1e3*g.sys.sunrise).toLocaleTimeString("en-IN")]}),(0,i.jsxs)("p",{children:["Sunset: ",new Date(1e3*g.sys.sunset).toLocaleTimeString("en-IN")]}),(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)("p",{children:g.weather[0].main}),(0,i.jsx)("img",{src:"https://openweathermap.org/img/wn/"+g.weather[0].icon+".png",alt:"icon"})]}),(0,i.jsxs)("p",{children:["Humidity: ",g.main.humidity," %"]})]}):(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Sorry no data from server"})})})},g="WeatherWeekItem_weatherDescriptionWrap__P8DFO",w="WeatherWeekItem_weatherWeekItemList__XK20Y",_=function(e){var t=e.weatherArray,n=f()().format().substring(0,10),r=t.filter((function(e){return e.dt_txt.substring(0,10)!==n})).filter((function(e){return"12"===e.dt_txt.substring(11,13)}));function a(e){var t;switch(new Date(e).getDay()){case 0:t="\u043d\u0435\u0434\u0456\u043b\u044f";break;case 1:t="\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a";break;case 2:t="\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a";break;case 3:t="\u0441\u0435\u0440\u0435\u0434\u0430";break;case 4:t="\u0447\u0435\u0442\u0432\u0435\u0440";break;case 5:t="\u043f'\u044f\u0442\u043d\u0438\u0446\u044f";break;case 6:t="\u0441\u0443\u0431\u043e\u0442\u0430";break;default:console.log("Invalid subscription type")}return t}return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:w,children:r.map((function(e){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:[a(e.dt_txt.substring(0,10))," ",e.dt_txt.substring(0,10)]}),(0,i.jsxs)("p",{children:["Temprature: ",e.main.temp," \xb0C"]}),(0,i.jsxs)("p",{children:["Humidity: ",e.main.humidity," %"]}),(0,i.jsxs)("div",{className:g,children:[(0,i.jsx)("p",{children:e.weather[0].description}),(0,i.jsx)("img",{src:"https://openweathermap.org/img/wn/"+e.weather[0].icon+".png",alt:"icon"})]}),(0,i.jsxs)("p",{children:["Wind: ",e.wind.speed," m/s"]})]},e.dt)}))})})},v="WeatherWeek_weatherWrap__dwI+P",k=function(){var e=(0,l.useState)([]),t=(0,u.Z)(e,2),n=t[0],r=t[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,o.Z)(h().mark((function e(){return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.openweathermap.org/data/2.5/forecast","?id=").concat(6548737,"&lang=ua&appid=").concat("d166a591b291530de4f15fa7d5685607","&units=metric")).then((function(e){return e.json()})).then((function(e){r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,i.jsx)("div",{className:v,children:"undefined"!=typeof n.city?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h3",{children:["Weather Week in ",n.city.name]}),(0,i.jsx)(_,{weatherArray:n.list})]}):(0,i.jsx)("div",{children:(0,i.jsx)("p",{children:"Sorry no weather data from server"})})})},y="home_homeWrapp__r9n7O",W="home_homeWeatherWrapp__kV8zZ",b=function(e){var t=e.tackleArr;return(0,i.jsxs)("div",{className:y,children:[(0,i.jsx)(c,{sublink:"fishes/",tackleArr:t}),(0,i.jsxs)("div",{className:W,children:[(0,i.jsx)(j,{}),(0,i.jsx)(k,{})]})]})}}}]);
//# sourceMappingURL=801.e17204a3.chunk.js.map