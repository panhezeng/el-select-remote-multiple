!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){t.exports=n(8)},function(t,e){t.exports=Vue},function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,l){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):o&&(c=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(s.functional){s._injectStyles=c;var u=s.render;s.render=function(t,e){return c.call(e),u(t,e)}}else{var p=s.beforeCreate;s.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},function(t,e){function n(t,e,n,r,o,i,a){try{var l=t[i](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function l(t){n(a,o,i,l,c,"next",t)}function c(t){n(a,o,i,l,c,"throw",t)}l(void 0)}))}}},function(t,e){t.exports=ELEMENT},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}({4:function(t,e){t.exports=function(t,e,n){if("[object Object]"===Object.prototype.toString.call(t)&&"[object String]"===Object.prototype.toString.call(e)){for(var r=e.split("."),o=0,i=r.length;"[object Object]"===Object.prototype.toString.call(t)&&o<i;)t=t[r[o++]];return o&&o==i?t:n}return n}}})},function(t,e,n){"use strict";n.r(e),n.d(e,"ElSelectRemoteMultiple",(function(){return o}));var r,o=n(10).default;function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"undefined"!=typeof window&&window.ElSelectRemoteMultipleOptions;r?console.warn("[ElSelectRemoteMultiple] already installed. Vue.use(ElSelectRemoteMultiple) should be called only once."):(r=t,"[object Object]"===Object.prototype.toString.call(e)&&e.ajax instanceof Object&&e.ajax.hasOwnProperty("get")&&e.ajax.hasOwnProperty("post")&&Object.assign(o.props.ajax,{required:!1,default:function(){return e.ajax}}),r.component(o.name,o))}o.install=i,"undefined"!=typeof window&&window.Vue&&i(window.Vue)},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r=u;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=_(a,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?h:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var u="suspendedStart",p="suspendedYield",f="executing",h="completed",d={};function y(){}function v(){}function b(){}var m={};m[i]=function(){return this};var g=Object.getPrototypeOf,O=g&&g(g(L([])));O&&O!==n&&r.call(O,i)&&(m=O);var x=b.prototype=y.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var l=s(t[n],t,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(l.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function _(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,_(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function L(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=x.constructor=b,b.constructor=v,b[l]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,o){var i=new j(c(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),x[l]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return l.type="throw",l.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:L(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("\n    因为apiary的mock比较弱，如想获得预期效果，纯搜索只支持输入 Option name 1\n    ，创建功能只支持输入 Option name 2\n  ")]),t._v(" "),n("el-select-remote-multiple",{attrs:{"api-options-url":t.apiOptionsUrl,"api-create-url":t.apiCreateUrl,"api-options-res-path":"data.data","api-options-callback":t.apiOptionsCallback,"selected-obj":t.selectedObj,selected:t.selected,placeholder:"输入关键字，从搜索结果中选择"},on:{"update:selectedObj":function(e){t.selectedObj=e},"update:selected-obj":function(e){t.selectedObj=e},"update:selected":function(e){t.selected=e}},scopedSlots:t._u([{key:"prefix",fn:function(){return[n("span",[t._v("test")])]},proxy:!0}])})],1)};i._withStripped=!0,window.ElSelectRemoteMultipleOptions={ajax:o.a.http},n(7);var a={name:"App",data:function(){return{apiOptionsUrl:"https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/options",apiCreateUrl:"https://private-87040-publicexample.apiary-mock.com/el-select-remote-multiple/option",selected:[],selectedObj:[]}},methods:{apiOptionsCallback:function(t){var e=this;t.forEach((function(t){t.nameBackup||(t.nameBackup=t.name),e.$set(t,"name","id:"+t.id+" name:"+t.nameBackup)}))}}},l=n(3),c=Object(l.a)(a,i,[],!1,null,null,null);c.options.__file="example/components/App.vue";var s=c.exports;new o.a({el:"#app",render:function(t){return t(s)}})},function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-select",t._g(t._b({staticStyle:{width:"100%"},attrs:{placeholder:t.placeholder,disabled:t.disabled,multiple:"",filterable:"",remote:"","remote-method":t.getLabelsOptions,loading:t.labelsLoading},on:{change:t.updateSelected},scopedSlots:t._u([{key:"prefix",fn:function(){return[t._t("prefix")]},proxy:!0},{key:"empty",fn:function(){return[t._t("empty")]},proxy:!0}],null,!0),model:{value:t.labelsSelected,callback:function(e){t.labelsSelected=e},expression:"labelsSelected"}},"el-select",t.$attrs,!1),t.$listeners),[t._t("default"),t._v(" "),t._v(" "),t._v(" "),t._l(t.labelsOptions,(function(e){return[e&&e[t.valueKey]?[n("el-option",{key:e[t.valueKey],attrs:{label:e[t.labelKey],value:e[t.valueKey]}})]:t._e()]}))],2),t._v(" "),t._t("default")],2)};r._withStripped=!0;var o,i,a=n(1),l=n.n(a),c=n(0),s=n.n(c),u=n(4),p=n.n(u),f=n(5),h=n(6),d=n.n(h),y={name:"ElSelectRemoteMultiple",components:{"el-select":f.Select,"el-option":f.Option},inheritAttrs:!1,props:{selectedObj:{type:Array,required:!0,default:function(){return[]}},selected:{type:Array,default:function(){return[]}},labelKey:{type:String,default:"name"},valueKey:{type:String,default:"id"},ajax:{validator:function(t){return t instanceof Object&&t.hasOwnProperty("get")&&t.hasOwnProperty("post")},required:!0},apiOptionsUrl:{type:String,required:!0},apiOptionsParamKeys:{type:Object,default:function(){return{limit:"limit",offset:"offset",search:"search"}}},apiOptionsLimit:{type:Number,default:10},apiOptionsResPath:{type:String,default:"data"},apiOptionsCallback:{type:Function,default:void 0},apiCreateUrl:{type:String,default:""},apiCreateResPath:{type:String,default:"data"},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:""}},data:function(){return{labelsSelected:[],labelsOptions:[],labelsLoading:!1}},watch:{selectedObj:{immediate:!0,handler:function(){this.update()}}},methods:{updateOptions:function(t){/^\[object [^F]*Function\]$/.test(Object.prototype.toString.call(this.apiOptionsCallback))&&this.apiOptionsCallback(t),this.labelsOptions=t},update:function(){this.labelsSelected=[],this.$nextTick((function(){this.updateOptions(this.selectedObj),this.$nextTick((function(){var t=this;this.labelsSelected=this.selectedObj.reduce((function(e,n){return"[object Object]"===Object.prototype.toString.call(n)&&n[t.valueKey]&&e.push(n[t.valueKey]),e}),[]),JSON.stringify(this.selected.slice().sort())!==JSON.stringify(this.labelsSelected.slice().sort())&&this.$emit("update:selected",this.labelsSelected.slice())}))}))},updateSelected:(i=p()(l.a.mark((function t(){var e,n,r,o,i,a,c,u,p,f,h;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.labelsSelected.slice(),n=this.selectedObj.concat(this.labelsOptions),r=[],o=0,i=e.length;case 4:if(!(o<i)){t.next=34;break}a=e[o],c=null,u=n.length;case 8:if(!u--){t.next=15;break}if(p=n[u],String(p[this.valueKey])!==String(a)){t.next=13;break}return c=p,t.abrupt("break",15);case 13:t.next=8;break;case 15:if(!c){t.next=31;break}if(" "!==String(a)){t.next=30;break}return t.prev=17,t.next=20,this.ajax.post(this.apiCreateUrl,s()({},this.labelKey,c[this.labelKey]));case 20:f=t.sent,h=d()(f,this.apiCreateResPath),r.push(h),t.next=28;break;case 25:return t.prev=25,t.t0=t.catch(17),t.abrupt("continue",31);case 28:t.next=31;break;case 30:r.push(c);case 31:o++,t.next=4;break;case 34:this.$emit("update:selectedObj",r);case 35:case"end":return t.stop()}}),t,this,[[17,25]])}))),function(){return i.apply(this,arguments)}),getLabelsOptions:(o=p()(l.a.mark((function t(){var e,n,r,o,i,a=this,c=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:"",n=[],this.labelsLoading=!0,!(e=String(e).trim())){t.next=9;break}return t.next=7,this.ajax.get(this.apiOptionsUrl,{params:(r={},s()(r,this.apiOptionsParamKeys.limit,this.apiOptionsLimit),s()(r,this.apiOptionsParamKeys.offset,0),s()(r,this.apiOptionsParamKeys.search,e),r)});case 7:o=t.sent,n=d()(o,this.apiOptionsResPath);case 9:this.apiCreateUrl&&!this.selectedObj.concat(n).some((function(t){return String(t[a.labelKey])===e}))&&n.unshift((i={},s()(i,this.labelKey,e),s()(i,this.valueKey," "),i)),n.length||(n=this.selectedObj),this.updateOptions(n),this.labelsLoading=!1;case 13:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}},v=n(3),b=Object(v.a)(y,r,[],!1,null,null,null);b.options.__file="src/ElSelectRemoteMultiple.vue";e.default=b.exports}]);