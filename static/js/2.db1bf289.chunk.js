(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{309:function(e,n,a){"use strict";a.r(n);var t=a(95),l=a(96),c=a(98),r=a(97),o=a(99),i=a(0),m=a.n(i),s=a(312),u=a(298),d=a(311),p=a(264),h=a(279),b={items:[{name:"Home",url:"/home",icon:"icon-home"},{name:"Dashboards",url:"/dashboards",icon:"icon-speedometer",badge:{variant:"info",text:"NEW"}},{name:"Settings",url:"/settings",icon:"icon-settings"}]},f=[{path:"/",exact:!0,name:"Base",component:x},{path:"/home",exact:!0,name:"Home",component:m.a.lazy(function(){return a.e(9).then(a.bind(null,305))})},{path:"/dashboards",exact:!0,name:"Dashboards",component:m.a.lazy(function(){return Promise.all([a.e(15),a.e(10)]).then(a.bind(null,308))})},{path:"/dashboards/:id",exact:!0,name:"Dashboard Details",component:m.a.lazy(function(){return Promise.all([a.e(16),a.e(11)]).then(a.bind(null,307))})},{path:"/settings",exact:!0,name:"Settings",component:m.a.lazy(function(){return a.e(12).then(a.bind(null,306))})}],E=m.a.lazy(function(){return a.e(7).then(a.bind(null,303))}),g=m.a.lazy(function(){return a.e(8).then(a.bind(null,304))}),y=function(e){function n(){var e,a;Object(t.a)(this,n);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(r.a)(n)).call.apply(e,[this].concat(o)))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(o.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return m.a.createElement("div",{className:"app"},m.a.createElement(h.c,{fixed:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(g,null))),m.a.createElement("div",{className:"app-body"},m.a.createElement(h.f,{fixed:!0,display:"lg"},m.a.createElement(h.i,null),m.a.createElement(h.h,null),m.a.createElement(i.Suspense,null,m.a.createElement(h.k,Object.assign({navConfig:b},this.props))),m.a.createElement(h.g,null),m.a.createElement(h.j,null)),m.a.createElement("main",{className:"main"},m.a.createElement(h.a,{appRoutes:f}),m.a.createElement(p.i,{fluid:!0},m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(s.a,null,f.map(function(e,n){return e.component?m.a.createElement(u.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return m.a.createElement(e.component,n)}}):null}),m.a.createElement(d.a,{from:"/",to:"/home"})))))),m.a.createElement(h.b,null,m.a.createElement(i.Suspense,{fallback:this.loading()},m.a.createElement(E,null))))}}]),n}(i.Component),x=n.default=y}}]);
//# sourceMappingURL=2.db1bf289.chunk.js.map