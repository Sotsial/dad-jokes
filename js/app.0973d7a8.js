(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dad-jokes/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("nav-bar"),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("v-app-bar",{attrs:{color:"primary",dark:""}},[n("v-toolbar-title",[e._v("Dad jokes")]),n("v-spacer"),n("v-btn",{staticClass:"ml-3",attrs:{to:"/",outlined:""}},[e._v("Главная")]),n("v-btn",{staticClass:"ml-3",attrs:{to:"/favorite",outlined:""}},[e._v("Избранные")])],1)],1)},s=[],c={name:"Navbar"},u=c,l=n("2877"),d=n("6544"),f=n.n(d),p=n("40dc"),v=n("8336"),h=n("2fa4"),k=n("2a7f"),m=Object(l["a"])(u,i,s,!1,null,null,null),b=m.exports;f()(m,{VAppBar:p["a"],VBtn:v["a"],VSpacer:h["a"],VToolbarTitle:k["a"]});var j={components:{"nav-bar":b},name:"App",mounted:function(){this.$store.dispatch("fetchJokes")}},_=j,w=n("7496"),y=Object(l["a"])(_,o,a,!1,null,null,null),x=y.exports;f()(y,{VApp:w["a"]});var O=n("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"d-flex flex-column align-center"},[n("h1",[e._v("Dad jokes")]),n("joke-card",{staticClass:"mb-5 joke-card",attrs:{joke:e.joke}}),n("div",[n("new-joke-button"),n("add-favorite",{staticClass:"ml-3"})],1)],1)},J=[],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{elevation:"2",outlined:""}},[n("v-card-title",[e._v(e._s(e.joke.joke))]),n("v-card-subtitle",{staticClass:"subtitle"},[e._v("ID: "+e._s(e.joke.id))])],1)},C=[],V={props:{joke:{type:Object,required:!0}}},E=V,F=(n("e800"),n("b0af")),S=n("99d9"),P=Object(l["a"])(E,$,C,!1,null,"43049d58",null),T=P.exports;f()(P,{VCard:F["a"],VCardSubtitle:S["a"],VCardTitle:S["b"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{large:"",color:"primary"},on:{click:function(t){return e.newJokes()}}},[e._v(" Загрузить еще ")])},B=[],M={methods:{newJokes:function(){this.$store.dispatch("fetchJokes")}}},D=M,L=Object(l["a"])(D,A,B,!1,null,null,null),R=L.exports;f()(L,{VBtn:v["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",{attrs:{outlined:e.added,color:"success",large:""},on:{click:function(t){return e.addFavorite()}}},[e._v("В избранное ")])},z=[],H={methods:{addFavorite:function(){this.$store.commit("addFavorite")}},computed:{added:function(){return this.$store.state.added}}},I=H,N=Object(l["a"])(I,q,z,!1,null,null,null),G=N.exports;f()(N,{VBtn:v["a"]});var K={components:{"joke-card":T,"new-joke-button":R,"add-favorite":G},computed:{joke:function(){return this.$store.state.joke}}},Q=K,U=(n("a282"),n("a523")),W=Object(l["a"])(Q,g,J,!1,null,"cf6dd954",null),X=W.exports;f()(W,{VContainer:U["a"]});var Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("h1",[e._v("Избранные анекдоты")]),n("find-jokes"),e.filterJokes.length>0?n("div",e._l(e.filterJokes,(function(e){return n("joke-card",{key:e.id,staticClass:"mb-2",attrs:{joke:e}})})),1):n("div",[n("h2",[e._v("Список пуст")])])],1)},Z=[],ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-text-field",{attrs:{placeholder:"Поиск"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})},te=[],ne=(n("4de4"),{data:function(){return{filter:""}},watch:{filter:function(){this.$store.commit("inputFilter",this.filter)}}}),re=ne,oe=n("8654"),ae=Object(l["a"])(re,ee,te,!1,null,null,null),ie=ae.exports;f()(ae,{VTextField:oe["a"]});var se={components:{"joke-card":T,"find-jokes":ie},computed:{filterJokes:function(){return this.$store.getters.filterJokes}}},ce=se,ue=Object(l["a"])(ce,Y,Z,!1,null,null,null),le=ue.exports;f()(ue,{VContainer:U["a"]}),r["a"].use(O["a"]);var de=[{path:"/",name:"Home",component:X},{path:"/favorite",name:"Favorite",component:le}],fe=new O["a"]({mode:"history",base:"/dad-jokes/",routes:de}),pe=fe,ve=n("1da1"),he=(n("96cf"),n("7db0"),n("caad"),n("2532"),n("d3b7"),n("2f62"));r["a"].use(he["a"]);var ke=new he["a"].Store({state:{joke:{},favoriteJokes:[],filter:"",added:!1},mutations:{updateJokes:function(e,t){e.joke=t,e.added=!1},addFavorite:function(e){e.favoriteJokes.find((function(t){return t.id==e.joke.id}))||e.favoriteJokes.push(e.joke),e.added=!0},inputFilter:function(e,t){e.filter=t}},getters:{filterJokes:function(e){return e.favoriteJokes.filter((function(t){return t.joke.toLowerCase().includes(e.filter.toLowerCase())}))}},actions:{fetchJokes:function(e){return Object(ve["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,e.commit("updateJokes",r);case 7:case"end":return t.stop()}}),t)})))()}},modules:{}}),me=n("f309");r["a"].use(me["a"]);var be=new me["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:pe,store:ke,vuetify:be,render:function(e){return e(x)}}).$mount("#app")},"98f6":function(e,t,n){},a282:function(e,t,n){"use strict";n("a4d7")},a4d7:function(e,t,n){},e800:function(e,t,n){"use strict";n("98f6")}});
//# sourceMappingURL=app.0973d7a8.js.map