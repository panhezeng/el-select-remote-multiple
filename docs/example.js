!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){e.exports=r(8)},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=Vue},function(e,t,r){"use strict";function n(e,t,r,n,o,i,a,l){var c,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var u=s.render;s.render=function(e,t){return c.call(t),u(e,t)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:s}}r.d(t,"a",function(){return n})},function(e,t){function r(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise(function(o,i){var a=e.apply(t,n);function l(e){r(a,o,i,l,c,"next",e)}function c(e){r(a,o,i,l,c,"throw",e)}l(void 0)})}}},function(e,t){e.exports=ELEMENT},function(e,t,r){window,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}({4:function(e,t){e.exports=function(e,t,r){if("[object Object]"===Object.prototype.toString.call(e)&&"[object String]"===Object.prototype.toString.call(t)){for(var n=t.split("."),o=0,i=n.length;"[object Object]"===Object.prototype.toString.call(e)&&o<i;)e=e[n[o++]];return o&&o==i?e:r}return r}}})},function(e,t,r){"use strict";r.r(t),r.d(t,"ElSelectRemoteMultiple",function(){return o});var n,o=r(11).default;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"!=typeof window&&window.ElSelectRemoteMultipleOptions;n?console.warn("[ElSelectRemoteMultiple] already installed. Vue.use(ElSelectRemoteMultiple) should be called only once."):(n=e,"[object Object]"===Object.prototype.toString.call(t)&&t.ajax instanceof Object&&t.ajax.hasOwnProperty("get")&&t.ajax.hasOwnProperty("post")&&Object.assign(o.props.ajax,{required:!1,default:function(){return t.ajax}}),n.component(o.name,o))}o.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(9),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"==typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{(u=t.regeneratorRuntime=s?e.exports:{}).wrap=O;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",y={},v={};v[a]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(U([])));m&&m!==n&&o.call(m,a)&&(v=m);var g=S.prototype=j.prototype=Object.create(v);w.prototype=g.constructor=S,S.constructor=w,S[c]=w.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(g),e},u.awrap=function(e){return{__await:e}},_(E.prototype),E.prototype[l]=function(){return this},u.AsyncIterator=E,u.async=function(e,t,r,n){var o=new E(O(e,t,r,n));return u.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},_(g),g[c]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=U,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return l.type="throw",l.arg=e,t.next=n,o&&(t.method="next",t.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:U(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function O(e,t,r,n){var o=t&&t.prototype instanceof j?t:j,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(e,t,r){var n=p;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return K()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=L(a,r);if(l){if(l===y)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=x(e,t,r);if("normal"===c.type){if(n=r.done?h:f,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function x(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function j(){}function w(){}function S(){}function _(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function E(e){var t;this._invoke=function(r,n){function i(){return new Promise(function(t,i){!function t(r,n,i,a){var l=x(e[r],e,n);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(s).then(function(e){c.value=e,i(c)},function(e){return t("throw",e,i,a)})}a(l.arg)}(r,n,t,i)})}return t=t?t.then(i,i):i()}}function L(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,L(e,t),"throw"===t.method))return y;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=x(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,y;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,y):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function U(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:K}}function K(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("\n    因为apiary的mock比较弱，如想获得预期效果，纯搜索只支持输入 Option name 1\n    ，创建功能只支持输入 Option name 2\n  ")]),e._v(" "),r("el-select-remote-multiple",{attrs:{"api-url-options":e.apiUrlOptions,"api-url-create":e.apiUrlCreate,"api-url-options-res-path":"data.data","selected-obj":e.selectedObj,selected:e.selected,placeholder:"输入关键字，从搜索结果中选择"},on:{"update:selectedObj":function(t){e.selectedObj=t},"update:selected-obj":function(t){e.selectedObj=t},"update:selected":function(t){e.selected=t}},scopedSlots:e._u([{key:"prefix",fn:function(){return[r("span",[e._v("test")])]},proxy:!0},{key:"empty",fn:function(){return[r("el-option",{attrs:{label:"empty1",value:1e12}})]},proxy:!0}])})],1)};i._withStripped=!0,window.ElSelectRemoteMultipleOptions={ajax:o.a.http},r(7);var a={name:"App",data:function(){return{apiUrlOptions:"https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/options",apiUrlCreate:"https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/option",selected:[],selectedObj:[]}}},l=r(3),c=Object(l.a)(a,i,[],!1,null,null,null);c.options.__file="example/components/App.vue";var s=c.exports;new o.a({el:"#app",render:function(e){return e(s)}})},function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-select",e._g(e._b({staticStyle:{width:"100%"},attrs:{placeholder:e.placeholder,disabled:e.disabled,multiple:"",filterable:"",remote:"","remote-method":e.getLabelsOptions,loading:e.labelsLoading},on:{change:e.updateSelected},scopedSlots:e._u([{key:"prefix",fn:function(){return[e._t("prefix")]},proxy:!0},{key:"empty",fn:function(){return[e._t("empty")]},proxy:!0}],!0),model:{value:e.labelsSelected,callback:function(t){e.labelsSelected=t},expression:"labelsSelected"}},"el-select",e.$attrs,!1),e.$listeners),[e._t("default"),e._v(" "),e._v(" "),e._v(" "),e._l(e.labelsOptions,function(t){return[t&&t[e.valueKey]?[r("el-option",{key:t[e.valueKey],attrs:{label:t[e.labelKey],value:t[e.valueKey]}})]:e._e()]})],2),e._v(" "),e._t("default")],2)};n._withStripped=!0;var o=r(0),i=r.n(o),a=r(1),l=r.n(a),c=r(4),s=r.n(c),u=r(5),p=r(6),f=r.n(p),d={name:"ElSelectRemoteMultiple",components:{"el-select":u.Select,"el-option":u.Option},inheritAttrs:!1,props:{selectedObj:{type:Array,required:!0,default:function(){return[]}},selected:{type:Array,default:function(){return[]}},labelKey:{type:String,default:"name"},valueKey:{type:String,default:"id"},ajax:{validator:function(e){return e instanceof Object&&e.hasOwnProperty("get")&&e.hasOwnProperty("post")},required:!0},apiUrlOptions:{type:String,required:!0},apiUrlOptionsParamsKey:{type:Object,default:function(){return{limit:"limit",offset:"offset",search:"search"}}},apiUrlOptionsLimit:{type:Number,default:10},apiUrlOptionsResPath:{type:String,default:"data"},apiUrlCreate:String,apiUrlCreateResPath:{type:String,default:"data"},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{labelsSelected:[],labelsOptions:[],labelsLoading:!1,needInitData:!0}},watch:{selectedObj:{immediate:!0,handler:function(e,t){this.initData(),this.needInitData=!0}}},methods:{initData:function(){var e=this;this.needInitData&&(this.labelsOptions=this.selectedObj,this.labelsSelected=this.selectedObj.reduce(function(t,r){return"[object Object]"===Object.prototype.toString.call(r)&&r[e.valueKey]&&t.push(r[e.valueKey]),t},[]),this.$emit("update:selected",this.labelsSelected.slice()),this.$nextTick(function(){this.labelsOptions=[]}))},updateSelected:function(){var e=s()(i.a.mark(function e(){var t,r,n,o,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.labelsOptions=this.selectedObj.concat(this.labelsOptions),r=[],n=i.a.mark(function e(n){var o,c,s,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a.labelsSelected[n],c=t.find(function(e){return String(e[a.valueKey])===String(o)}),"[object Object]"!==Object.prototype.toString.call(c)){e.next=22;break}if("ElSelectRemoteMultipleCreateTempPlaceholderValue"!==String(o)){e.next=19;break}return e.prev=4,e.next=7,a.ajax.post(a.apiUrlCreate,l()({},a.labelKey,c[a.labelKey]));case 7:s=e.sent,u=f()(s,a.apiUrlCreateResPath),r.push(u),a.labelsOptions.push(u),a.labelsSelected[n]=u[a.valueKey],e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),a.labelsSelected.splice(n,1);case 17:e.next=20;break;case 19:r.push(c);case 20:e.next=23;break;case 22:a.labelsSelected.splice(n,1);case 23:case"end":return e.stop()}},e,this,[[4,14]])}),o=this.labelsSelected.length;case 5:if(!o--){e.next=9;break}return e.delegateYield(n(o),"t0",7);case 7:e.next=5;break;case 9:this.needInitData=!1,this.$emit("update:selectedObj",r),this.$emit("update:selected",this.labelsSelected.slice()),this.$nextTick(function(){this.labelsOptions=[]});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getLabelsOptions:function(){var e=s()(i.a.mark(function e(){var t,r,n,o,a,c,s,u,p=this,d=arguments;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.length>0&&void 0!==d[0]?d[0]:"",r=[],this.labelsLoading=!0,!(t=String(t).trim())){e.next=15;break}return e.prev=5,e.next=8,this.ajax.get(this.apiUrlOptions,{params:(n={},l()(n,this.apiUrlOptionsParamsKey.limit,this.apiUrlOptionsLimit),l()(n,this.apiUrlOptionsParamsKey.offset,0),l()(n,this.apiUrlOptionsParamsKey.search,t),n)});case 8:o=e.sent,r=f()(o,this.apiUrlOptionsResPath),"[object Array]"===Object.prototype.toString.call(r)?-1===(a=r.findIndex(function(e){return String(e[p.labelKey])===t}))?(c=this.selectedObj.find(function(e){return String(e[p.labelKey])===String(t)}),"[object Object]"===Object.prototype.toString.call(c)?r.unshift(c):this.apiUrlCreate&&r.unshift((s={},l()(s,this.labelKey,t),l()(s,this.valueKey,"ElSelectRemoteMultipleCreateTempPlaceholderValue"),s))):a>0&&(u=r[0],r[0]=r[a],r[a]=u):r=[],e.next=15;break;case 13:e.prev=13,e.t0=e.catch(5);case 15:this.labelsOptions=r,this.labelsLoading=!1;case 17:case"end":return e.stop()}},e,this,[[5,13]])}));return function(){return e.apply(this,arguments)}}()}},h=r(3),y=Object(h.a)(d,n,[],!1,null,null,null);y.options.__file="src/ElSelectRemoteMultiple.vue";t.default=y.exports}]);