"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(r,e,n){n.r(e);var t=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(7689),o=n(1022),f=n(184);e.default=function(){var r=(0,i.UO)().movieId,e=(0,s.useState)([]),n=(0,a.Z)(e,2),u=n[0],p=n[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Hx)(r);case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,f.jsxs)(f.Fragment,{children:[0!==u.length&&(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{children:"Movie Reviews"}),(0,f.jsx)("ul",{children:u.map((function(r){return(0,f.jsxs)("li",{children:[(0,f.jsx)("p",{children:r.author}),(0,f.jsx)("p",{children:r.content})]},r.id)}))})]}),0===u.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie."})]})}},1022:function(r,e,n){n.d(e,{Hx:function(){return v},Y5:function(){return o},o1:function(){return f},uV:function(){return p},wr:function(){return i}});var t=n(5861),a=n(4687),u=n.n(a),c=n(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"964914f168e0623aa3096b7b00e04259",language:"en-US"}},i=function(){var r=(0,t.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("trending/movie/day",s);case 2:return e=r.sent,r.abrupt("return",e.data.results);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/movie/".concat(e),s);case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("/search/movie?query=".concat(e),s);case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(e,"/credits?"),s);case 2:return n=r.sent,r.abrupt("return",n.data.cast);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(u().mark((function r(e){var n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.Z.get("movie/".concat(e,"/reviews?"),s);case 2:return n=r.sent,r.abrupt("return",n.data.results);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.b8f14c98.chunk.js.map