(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(60),o=a.n(c),u=a(6),l=a.n(u),i=a(9),s=a(61),d=a(62),m=a(72),p=a(71),f=a(31),v=a.n(f),h=a(197),E=a(201),b=a(198),g=a(199),y=a(21),x=a.n(y),w=a(32),C=a.n(w),j=function(e){var t=e.Data,a=t.confirmed,n=t.recovered,c=(t.lastUpdate,t.deaths);if(!n||!c)return r.a.createElement(r.a.Fragment,null,"..loading");return r.a.createElement("div",{className:x.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12,md:3,component:E.a,className:x.a.card},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"infected"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(C.a,{start:0,end:(null===a||void 0===a?void 0:a.value)||0,duration:2})),r.a.createElement(g.a,{color:"textSecondary"},"REAL DATE"),r.a.createElement(g.a,{variant:"body2"},"Number of active cases of covid-19"))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:E.a,className:x.a.card},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"recoverd"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(C.a,{start:0,end:n.value,duration:2})),r.a.createElement(g.a,{color:"textSecondary"},"REAL DATE"),r.a.createElement(g.a,{variant:"body2"},"Number of recoveries from covid-19"))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:E.a,className:x.a.card},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h5"},r.a.createElement(C.a,{start:0,end:c.value,duration:2})),r.a.createElement(g.a,{color:"textSecondary"},"REAL DATE"),r.a.createElement(g.a,{variant:"body2"},"Number of Deaths case of covid-19")))))},k=a(30),_="https://covid19.mathdro.id/api",O=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,r,c,o,u,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=_,t&&(a="".concat(_,"/countries/").concat(t)),e.next=5,fetch(a,{method:"GET"}).then((function(e){return e.json()}));case 5:return n=e.sent,r=n.recovered,c=n.deaths,o=n.confirmed,u=n.lastUpdate,i={recovered:r,deaths:c,confirmed:o,lastUpdate:u},e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(_,"/daily"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return t=e.sent,a=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(_,"/countries"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e}));case 3:return t=e.sent,e.abrupt("return",t.countries);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=a(43),S=a(68),T=a.n(S),B=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var u=c.length?r.a.createElement(N.b,{data:{labels:c.map((function(e){return e.date})),datasets:[{data:c.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",backgroundColor:"rgba(5, 5, 255,0.5)",fill:!0},{data:c.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,5,5,0.5)",fill:!0}]}}):null,s=e.country,d=e.Data,m=(d.lastUpdate,d.confirmed),p=d.recovered,f=d.deaths,v=s?r.a.createElement(N.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",data:[null===m||void 0===m?void 0:m.value,null===p||void 0===p?void 0:p.value,null===f||void 0===f?void 0:f.value],backgroundColor:["blue","green","red"]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:T.a.container},s?v:u)},R=a(202),U=a(200),F=a(69),G=a.n(F),I=function(e){var t=Object(n.useState)([]),a=Object(k.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:t=e.sent,o(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[o]),r.a.createElement(R.a,{className:G.a.formControl},r.a.createElement(U.a,{defaultValue:"",onChange:function(t){return e.handleCountryChange(t)}},r.a.createElement("option",{value:""},"global"),c.map((function(e,t){var a=e.name;return r.a.createElement(r.a.Fragment,null,r.a.createElement("option",{key:t,value:a},a))}))))},L=a(70),P=a.n(L),V=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(l.a.mark((function t(a){var n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=a.target.value,t.next=4,O(n);case 4:r=t.sent,e.setState({data:r,country:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.App},r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.logo},r.a.createElement("img",{src:P.a,alt:"covid19-logo"})),r.a.createElement(j,{Data:t}),r.a.createElement(I,{handleCountryChange:this.handleCountryChange}),r.a.createElement(B,{country:a,Data:t})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t,a){e.exports={card:"Cards_card__1m8K9",container:"Cards_container__1PVKQ"}},31:function(e,t,a){e.exports={App:"App_App__Vnm6m",container:"App_container__1hEpy",logo:"App_logo__YFWEg"}},68:function(e,t,a){e.exports={container:"Chart_container__1xzSE"}},69:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2eYyz"}},70:function(e,t,a){e.exports=a.p+"static/media/covid19-logo.a691af5e.jpg"},75:function(e,t,a){e.exports=a(180)}},[[75,1,2]]]);
//# sourceMappingURL=main.cc589810.chunk.js.map