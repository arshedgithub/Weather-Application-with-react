(this["webpackJsonpweather-application"]=this["webpackJsonpweather-application"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(16),s=c.n(r),i=(c(21),c(2)),o=(c(22),c(4)),u=c.n(o),d=c(6),b=c(7),j=c.n(b),l=(c(42),c(0));j.a.interceptors.response.use(null,(function(e){if(!e.response)return alert("An unexpected error occured"),void console.log(e);var t=e.response.status;404===t||t>=400&&t<=500?alert("Enter a valid city name"):alert("An unexpected error occured")}));var h=function(e){var t=e.city,c=e.onLocErr,n=Object(a.useState)(),r=Object(i.a)(n,2),s=r[0],o=r[1],b=Object(a.useState)(),h=Object(i.a)(b,2),p=h[0],O=h[1],m=Object(a.useState)(),f=Object(i.a)(m,2),x=f[0],v=f[1],y=Object(a.useState)(),w=Object(i.a)(y,2),g=w[0],S=w[1],k=Object(a.useState)(),N=Object(i.a)(k,2),L=N[0],A=N[1],C=Object(a.useState)(),E=Object(i.a)(C,2),P=E[0],F=E[1],T=Object(a.useState)(),B=Object(i.a)(T,2),D=B[0],I=B[1],J=Object(a.useState)(),M=Object(i.a)(J,2),W=M[0],q=M[1],H=Object(a.useState)(),U=Object(i.a)(H,2),Y=U[0],z=U[1],G=Object(a.useState)(),K=Object(i.a)(G,2),Q=K[0],R=K[1],V=Object(a.useState)(),X=Object(i.a)(V,2),Z=X[0],$=X[1],_=Object(a.useState)(),ee=Object(i.a)(_,2),te=ee[0],ce=ee[1],ae="wi-thunderstorm",ne="wi-sleet",re="wi-storm-showers",se="wi-snow",ie="wi-fog",oe="wi-day-sunny",ue="wi-day-fog",de=function(){var e;switch(!0){case Q>=200&&Q<232:e=ae;break;case Q>=300&&Q<=321:e=ne;break;case Q>=500&&Q<=521:e=re;break;case Q>=600&&Q<=622:e=se;break;case Q>=701&&Q<=781:e=ie;break;case 800===Q:e=oe;break;default:e=ue}$(e)},be=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{navigator.geolocation.getCurrentPosition(function(){var e=Object(d.a)(u.a.mark((function e(c){var a,n,r,s,i,d,b,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(c.coords.latitude),O(c.coords.longitude),a=t?"q=".concat(t):"lat=".concat(c.coords.latitude,"&lon=").concat(c.coords.longitude),e.next=5,j.a.get("".concat("https://api.openweathermap.org/data/2.5/","weather?").concat(a,"&appid=").concat("0c30318b677b001768b4d3b4b667a8b7"));case 5:if(n=e.sent){e.next=8;break}return e.abrupt("return");case 8:r=n.data,s=r.name,i=r.main,d=r.weather,b=r.wind,l=r.sys,R(d[0].id),v(s),S(l.country),q(d[0].description),A(Math.round(i.temp-273.15)),F(i.humidity),I(i.pressure),z(b.speed);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){if(e.code){var t;switch(c(),e.code){case 1:t="You should allow this site to access your Location, And refresh the page";break;case 2:t="Location Unavailable";break;default:t="Searching Timeout"}ce(t)}})),de()}catch(a){console.log(a)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){be()}),[s,p,t]),Object(l.jsx)("div",{className:"card-content m-auto p-4 my-4 rounded",style:{maxWidth:"400px"},children:x?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:[x,", ",g]}),Object(l.jsx)("div",{className:"py-3",children:Object(l.jsx)("i",{className:"wi ".concat(Z," display-1")})}),Object(l.jsx)("h4",{children:W}),Object(l.jsxs)("h1",{children:[L,"\xb0C"]}),Object(l.jsxs)("h4",{children:["Humidity : ",P,"%"]}),Object(l.jsxs)("h6",{children:["Average Wind Speed : ",Y," m/s"]}),Object(l.jsxs)("h6",{children:["Air Pressure : ",D," Pa"]})]}):Object(l.jsx)("div",{children:te?Object(l.jsx)("h4",{className:"py-5 text-danger m-5",children:te}):Object(l.jsx)("div",{className:"spinner-border my-5 p-2",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})},p=function(e){var t=e.onSubmit;return e.loc?null:Object(l.jsxs)("form",{className:"my-3",onSubmit:t,children:[Object(l.jsx)("input",{type:"text",className:"px-2 rounded",placeholder:"seach city",name:"city",autoComplete:"off"}),Object(l.jsx)("button",{className:"mx-2 border-0 rounded px-2",type:"submit",children:"get weather"})]})};var O=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(l.jsxs)("div",{className:"App mx-2",children:[Object(l.jsx)(p,{onSubmit:function(e){e.preventDefault(),n(e.target.city.value)},loc:o}),Object(l.jsx)(h,{city:c,onLocErr:function(){u(!0)}})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(44);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),m()}},[[45,1,2]]]);
//# sourceMappingURL=main.b6d649ae.chunk.js.map