(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(7),i=c.n(a),r=(c(12),c(2)),o=(c(13),"1c9e829440469e37534d620c72e6f0bb"),l=(c(14),c(15),c(37),c(0));var d=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),d=i[0],j=i[1],h=Object(n.useState)(),u=Object(r.a)(h,2),b=u[0],m=u[1],p=Object(n.useState)({}),O=Object(r.a)(p,2),x=O[0],f=O[1];function g(){var e,t,c=(new Date).getHours(),n=c>5&&c<19,s=x.weather[0].id;switch(t=n?"day":"night",s){case 200:case 230:e="wi wi-".concat(t,"-storm-showers");break;default:e="wi wi-owm-".concat(t,"-").concat(s)}m(e)}function w(){return Object(l.jsx)("div",{className:"outercard shadow-lg rounded container",children:Object(l.jsx)("div",{className:"card-body",children:Object(l.jsxs)("div",{className:"row d-flex align-items-center",children:[Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("b",{children:[x.name,", ",x.sys.country]})}),Object(l.jsxs)("h1",{className:"display-1 fw-bold",children:[Math.round(x.main.temp)," \u2103"]}),Object(l.jsxs)("h6",{children:[x.weather[0].main,", ",x.weather[0].description]}),Object(l.jsxs)("h4",{children:["Realfeel\xae ",x.main.feels_like," \u2103"]}),Object(l.jsx)("h1",{className:"display-1",children:Object(l.jsx)("i",{className:b})})]})}),Object(l.jsx)("div",{className:"col-lg-6",children:Object(l.jsxs)("div",{className:"m-1 innercard p-3",children:[Object(l.jsxs)("p",{children:["Latitude: ",x.coord.lat]}),Object(l.jsxs)("p",{children:["Longitude: ",x.coord.lon]}),Object(l.jsxs)("p",{children:["Min: ",x.main.temp_min," \u2103"]}),Object(l.jsxs)("p",{children:["Max: ",x.main.temp_max," \u2103"]}),Object(l.jsxs)("p",{children:["Pressure: ",x.main.pressure," hPa"]}),Object(l.jsxs)("p",{children:["Humidity: ",x.main.humidity," %"]}),Object(l.jsxs)("p",{children:["Cloud: ",x.clouds.all," %"]}),Object(l.jsxs)("p",{children:["Wind Speed: ",x.wind.speed," m/sec"]})]})})]})})})}return Object(l.jsxs)("div",{className:"container text-white font-weight-bold p-3",children:[Object(l.jsx)("div",{className:"row d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(c,",110034,IN&appid=").concat(o,"&units=metric");fetch(e).then((function(e){return e.json()})).then((function(e){f(e),g(),j(!0),console.log("hi")})).catch((function(e){return console.log(e)}))},children:Object(l.jsx)("i",{className:"fa fa-search"})})}),Object(l.jsx)("input",{type:"text",value:c,className:"form-control",onInput:function(e){return s(e.target.value)},placeholder:"Enter city name or country name"}),Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.longitude,c=e.coords.latitude,n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(c,"&lon=").concat(t,"&appid=").concat(o,"&units=metric");fetch(n).then((function(e){return e.json()})).then((function(e){f(e),g(),j(!0),console.log("hi")})).catch((function(e){return console.log(e)}))}))},children:Object(l.jsx)("i",{className:"fa fa-map-marker"})})})]})}),Object(l.jsx)("br",{}),Object(l.jsx)("div",{className:"row d-flex justify-content-center mt-5",children:Object(l.jsx)("div",{className:"col-lg-6",children:d?Object(l.jsx)(w,{}):null})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),j()}},[[39,1,2]]]);
//# sourceMappingURL=main.670ca3be.chunk.js.map