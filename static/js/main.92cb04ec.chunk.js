(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"feed",function(){return r}),n.d(e,"account",function(){return u});var o=n(212),c=n(213);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var r=new c.a,u=new o.a;"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}.call(this,n(15)(t))},208:function(t,e,n){"use strict";(function(t){var e=n(39),o=n(40);function c(){var t=Object(e.a)(["\n  width: 100%;\n  min-height: 100vh;\n  position: relative;\n  background: #09091d;\n"]);return c=function(){return t},t}"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);o.a.div(c());"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},209:function(t,e,n){"use strict";(function(t){var e=n(39),o=n(40);function c(){var t=Object(e.a)(["\n  height: 300px;\n"]);return c=function(){return t},t}"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);o.a.div(c());"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},210:function(t,e,n){"use strict";(function(t){var o=n(0),c=n.n(o),r=n(221),u=n(222);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var _,i=function(t){var e=t.feed,n=t.loading,o=t.onFeedEnd;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.a,{onScroll:function(t){var e=t.currentTarget;e.scrollHeight-e.scrollTop<2*e.clientHeight&&!n&&o&&o()},x:3},e.map(function(t,e){return c.a.createElement(u.a,{key:e,item:t})})))};_=i,i.defaultProps={feed:[]},e.a=i,__register__(_,"Feed"),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},211:function(t,e,n){"use strict";(function(t){var o=n(0),c=n.n(o),r=n(44),u=n(103),_=n(33),i=n(100),a=n(214),s=n(217);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var p,f=function(){return c.a.createElement(r.a,i,c.a.createElement(u.a,null,c.a.createElement(_.a,{exact:!0,path:"/",component:a.a}),c.a.createElement(_.a,{path:"/feed",component:s.a})))};p=f,e.a=f,__register__(p,"App"),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},212:function(t,e,n){"use strict";(function(t){var o,c,r,u=n(224),_=n(45),i=n.n(_),a=n(81),s=n(66),p=n(101),f=n(102),l=n(46),d=(n(207),n(5)),h=n(80);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var v=(o=function(){function t(){Object(p.a)(this,t),this.access="",Object(s.a)(this,"user",c,this),Object(s.a)(this,"ready",r,this)}return Object(f.a)(t,[{key:"init",value:function(){var t=Object(a.a)(i.a.mark(function t(){var e,n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.send("VKWebAppGetAuthToken",{app_id:7045022,scope:""});case 2:e=t.sent,n=e.data,this.access=n.access_token,console.log(this);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"api",value:function(){var t=Object(a.a)(i.a.mark(function t(e,n){var o,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.send("VKWebAppCallAPIMethod",{method:e,params:Object(u.a)({},n,{v:"5.77",access_token:this.access})});case 2:return o=t.sent,c=o.data,t.abrupt("return",c.response.items);case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),c=Object(l.a)(o.prototype,"user",[d.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),r=Object(l.a)(o.prototype,"ready",[d.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(l.a)(o.prototype,"init",[d.d],Object.getOwnPropertyDescriptor(o.prototype,"init"),o.prototype),o);e.a=v,"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},213:function(t,e,n){"use strict";(function(t){var o,c,r,u=n(45),_=n.n(u),i=n(81),a=n(66),s=n(101),p=n(102),f=n(46),l=(n(207),n(5)),d=n(100);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var h=(o=function(){function t(){Object(s.a)(this,t),Object(a.a)(this,"data",c,this),Object(a.a)(this,"loading",r,this),this.offset=0,this.count=99}return Object(p.a)(t,[{key:"fetch",value:function(){var t=Object(i.a)(_.a.mark(function t(){var e,n;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,d.account.api("photos.get",{owner_id:-95775916,album_id:"wall",count:this.count,offset:this.offset,rev:0});case 3:e=t.sent,n=this.parseImages(e).sort(function(){return Math.random()-.5}),this.data=this.data.concat(n),this.loading=!1,this.offset+=this.count;case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getPhotoSize",value:function(t,e){return t.sizes.find(function(t){return t.type===e})||{url:null,width:null,height:null}}},{key:"parseImages",value:function(t){var e=this;return t.map(function(t){var n=e.getPhotoSize(t,"x"),o=n.url,c=n.width,r=n.height;return{photo:o,text:t.text,width:c,height:r}})}}]),t}(),c=Object(f.a)(o.prototype,"data",[l.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),r=Object(f.a)(o.prototype,"loading",[l.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),Object(f.a)(o.prototype,"fetch",[l.d],Object.getOwnPropertyDescriptor(o.prototype,"fetch"),o.prototype),o);e.a=h,"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},214:function(t,e,n){"use strict";(function(t){var o=n(0),c=n.n(o),r=n(103),u=n(44),_=__signature__();"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var i,a=function(t){_();var e=t.account;return Object(o.useEffect)(function(){e.init()},[]),c.a.createElement("div",null,c.a.createElement("h1",null,"\u2728 imagical \u2728"),c.a.createElement(r.b,{to:"/feed"},"Go to feed!"))};_(a,"useEffect{}"),i=a,e.a=Object(u.b)("account")(Object(u.c)(a)),__register__(i,"Preview"),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},217:function(t,e,n){"use strict";(function(t){var o=n(0),c=n.n(o),r=n(44),u=n(218),_=__signature__();"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var i,a=function(t){_();t.account;var e=t.feed;return Object(o.useEffect)(function(){e.fetch()},[]),c.a.createElement(u.a,{onFeedEnd:e.fetch.bind(e),loading:e.loading,feed:e.data})};_(a,"useEffect{}"),i=a,e.a=Object(r.b)("account","feed")(Object(r.c)(a)),__register__(i,"Main"),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},218:function(t,e,n){"use strict";(function(t){n(208),n(209);var o=n(210);n.d(e,"a",function(){return o.a}),"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},221:function(t,e,n){"use strict";(function(t){var o=n(39),c=n(40);function r(){var t=Object(o.a)(["\n  display: grid;\n  height: 100vh;\n  overflow-y: scroll;\n  grid-template-columns: ",";\n"]);return r=function(){return t},t}"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var u=c.a.div(r(),function(t){var e=t.x;return"repeat(".concat(e,", 1fr)")});u.defaultProps={x:4},e.a=u,"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},222:function(t,e,n){"use strict";(function(t){var o=n(39),c=n(0),r=n.n(c),u=n(40);function _(){var t=Object(o.a)(["\n  position: relative;\n  padding-bottom: 100%;\n  width: 100%;\n"]);return _=function(){return t},t}function i(){var t=Object(o.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #09091d;\n  object-fit: cover;\n"]);return i=function(){return t},t}"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var a,s,p,f=a=u.a.img(i()),l=s=u.a.div(_()),d=function(t){var e=t.item;return r.a.createElement(l,null,r.a.createElement(f,{src:e.photo||""}))};p=d,e.a=d,__register__(a,"Image"),__register__(s,"Wrap"),__register__(p,"Item"),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},223:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o}),"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}).call(this,n(15)(t))},227:function(t,e,n){t.exports=n(228)},228:function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),o=n.n(e),c=n(79),r=n.n(c),u=n(80),_=(n(451),n(211)),i=n(223);"undefined"!==typeof __setCurrentModule__&&__setCurrentModule__(t);var a=document.getElementById("root");r.a.render(o.a.createElement(_.a,null),a),i.a(),u.a.send("VKWebAppInit",{}),"function"===typeof __shouldAccept__&&__shouldAccept__(t.__proto__.exports)&&t.hot.accept(function e(o){n.c[t.i].hot.accept(e)})}.call(this,n(15)(t))},451:function(t,e,n){}},[[227,1,2]]]);
//# sourceMappingURL=main.92cb04ec.chunk.js.map