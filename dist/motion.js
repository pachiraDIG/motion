!function(){return function e(t,r,n){function o(u,a){if(!r[u]){if(!t[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var r=t[u][1][e];return o(r||e)},f,f.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}}()({1:[function(e,t,r){t.exports={default:e("core-js/library/fn/array/from"),__esModule:!0}},{"core-js/library/fn/array/from":5}],2:[function(e,t,r){t.exports={default:e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":6}],3:[function(e,t,r){"use strict";r.__esModule=!0;var n,o=e("../core-js/object/define-property"),i=(n=o)&&n.__esModule?n:{default:n};r.default=function(e,t,r){return t in e?(0,i.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},{"../core-js/object/define-property":2}],4:[function(e,t,r){"use strict";r.__esModule=!0;var n,o=e("../core-js/array/from"),i=(n=o)&&n.__esModule?n:{default:n};r.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,i.default)(e)}},{"../core-js/array/from":1}],5:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/es6.array.from"),t.exports=e("../../modules/_core").Array.from},{"../../modules/_core":12,"../../modules/es6.array.from":56,"../../modules/es6.string.iterator":58}],6:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":12,"../../modules/es6.object.define-property":57}],7:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],8:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":28}],9:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-absolute-index");t.exports=function(e){return function(t,r,u){var a,c=n(t),s=o(c.length),f=i(u,s);if(e&&r!=r){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((e||f in c)&&c[f]===r)return e||f||0;return!e&&-1}}},{"./_to-absolute-index":47,"./_to-iobject":49,"./_to-length":50}],10:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?r:i?n(t):"Object"==(u=n(t))&&"function"==typeof t.callee?"Arguments":u}},{"./_cof":11,"./_wks":54}],11:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],12:[function(e,t,r){var n=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=n)},{}],13:[function(e,t,r){"use strict";var n=e("./_object-dp"),o=e("./_property-desc");t.exports=function(e,t,r){t in e?n.f(e,t,o(0,r)):e[t]=r}},{"./_object-dp":36,"./_property-desc":41}],14:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":7}],15:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],16:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":20}],17:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":21,"./_is-object":28}],18:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],19:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),u=e("./_hide"),a="prototype",c=function(e,t,r){var s,f,l,_=e&c.F,d=e&c.G,b=e&c.S,p=e&c.P,E=e&c.B,O=e&c.W,v=d?o:o[t]||(o[t]={}),h=v[a],M=d?n:b?n[t]:(n[t]||{})[a];for(s in d&&(r=t),r)(f=!_&&M&&void 0!==M[s])&&s in v||(l=f?M[s]:r[s],v[s]=d&&"function"!=typeof M[s]?r[s]:E&&f?i(l,n):O&&M[s]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[a]=e[a],t}(l):p&&"function"==typeof l?i(Function.call,l):l,p&&((v.virtual||(v.virtual={}))[s]=l,e&c.R&&h&&!h[s]&&u(h,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},{"./_core":12,"./_ctx":14,"./_global":21,"./_hide":23}],20:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(e){return!0}}},{}],21:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],22:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],23:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":16,"./_object-dp":36,"./_property-desc":41}],24:[function(e,t,r){var n=e("./_global").document;t.exports=n&&n.documentElement},{"./_global":21}],25:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":16,"./_dom-create":17,"./_fails":20}],26:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":11}],27:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":33,"./_wks":54}],28:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],29:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(t){var i=e.return;throw void 0!==i&&n(i.call(e)),t}}},{"./_an-object":8}],30:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),u={};e("./_hide")(u,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(u,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":23,"./_object-create":35,"./_property-desc":41,"./_set-to-string-tag":43,"./_wks":54}],31:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),u=e("./_hide"),a=e("./_has"),c=e("./_iterators"),s=e("./_iter-create"),f=e("./_set-to-string-tag"),l=e("./_object-gpo"),_=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),b="values",p=function(){return this};t.exports=function(e,t,r,E,O,v,h){s(r,t,E);var M,y,T,g=function(e){if(!d&&e in P)return P[e];switch(e){case"keys":case b:return function(){return new r(this,e)}}return function(){return new r(this,e)}},R=t+" Iterator",j=O==b,I=!1,P=e.prototype,m=P[_]||P["@@iterator"]||O&&P[O],x=!d&&m||g(O),A=O?j?g("entries"):x:void 0,N="Array"==t&&P.entries||m;if(N&&(T=l(N.call(new e)))!==Object.prototype&&T.next&&(f(T,R,!0),n||a(T,_)||u(T,_,p)),j&&m&&m.name!==b&&(I=!0,x=function(){return m.call(this)}),n&&!h||!d&&!I&&P[_]||u(P,_,x),c[t]=x,c[R]=p,O)if(M={values:j?x:g(b),keys:v?x:g("keys"),entries:A},h)for(y in M)y in P||i(P,y,M[y]);else o(o.P+o.F*(d||I),t,M);return M}},{"./_export":19,"./_has":22,"./_hide":23,"./_iter-create":30,"./_iterators":33,"./_library":34,"./_object-gpo":38,"./_redefine":42,"./_set-to-string-tag":43,"./_wks":54}],32:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(e){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],u=i[n]();u.next=function(){return{done:r=!0}},i[n]=function(){return u},e(i)}catch(e){}return r}},{"./_wks":54}],33:[function(e,t,r){t.exports={}},{}],34:[function(e,t,r){t.exports=!0},{}],35:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),u=e("./_shared-key")("IE_PROTO"),a=function(){},c="prototype",s=function(){var t,r=e("./_dom-create")("iframe"),n=i.length;for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",(t=r.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;n--;)delete s[c][i[n]];return s()};t.exports=Object.create||function(e,t){var r;return null!==e?(a[c]=n(e),r=new a,a[c]=null,r[u]=e):r=s(),void 0===t?r:o(r,t)}},{"./_an-object":8,"./_dom-create":17,"./_enum-bug-keys":18,"./_html":24,"./_object-dps":37,"./_shared-key":44}],36:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),u=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return u(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":8,"./_descriptors":16,"./_ie8-dom-define":25,"./_to-primitive":52}],37:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,u=i(t),a=u.length,c=0;a>c;)n.f(e,r=u[c++],t[r]);return e}},{"./_an-object":8,"./_descriptors":16,"./_object-dp":36,"./_object-keys":40}],38:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},{"./_has":22,"./_shared-key":44,"./_to-object":51}],39:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),u=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,a=o(e),c=0,s=[];for(r in a)r!=u&&n(a,r)&&s.push(r);for(;t.length>c;)n(a,r=t[c++])&&(~i(s,r)||s.push(r));return s}},{"./_array-includes":9,"./_has":22,"./_shared-key":44,"./_to-iobject":49}],40:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":18,"./_object-keys-internal":39}],41:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],42:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":23}],43:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":22,"./_object-dp":36,"./_wks":54}],44:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":45,"./_uid":53}],45:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":21}],46:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,u,a=String(o(t)),c=n(r),s=a.length;return c<0||c>=s?e?"":void 0:(i=a.charCodeAt(c))<55296||i>56319||c+1===s||(u=a.charCodeAt(c+1))<56320||u>57343?e?a.charAt(c):i:e?a.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},{"./_defined":15,"./_to-integer":48}],47:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return(e=n(e))<0?o(e+t,0):i(e,t)}},{"./_to-integer":48}],48:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],49:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":15,"./_iobject":26}],50:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":48}],51:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":15}],52:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":28}],53:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],54:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,u="function"==typeof i;(t.exports=function(e){return n[e]||(n[e]=u&&i[e]||(u?i:o)("Symbol."+e))}).store=n},{"./_global":21,"./_shared":45,"./_uid":53}],55:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[o]||e["@@iterator"]||i[n(e)]}},{"./_classof":10,"./_core":12,"./_iterators":33,"./_wks":54}],56:[function(e,t,r){"use strict";var n=e("./_ctx"),o=e("./_export"),i=e("./_to-object"),u=e("./_iter-call"),a=e("./_is-array-iter"),c=e("./_to-length"),s=e("./_create-property"),f=e("./core.get-iterator-method");o(o.S+o.F*!e("./_iter-detect")(function(e){Array.from(e)}),"Array",{from:function(e){var t,r,o,l,_=i(e),d="function"==typeof this?this:Array,b=arguments.length,p=b>1?arguments[1]:void 0,E=void 0!==p,O=0,v=f(_);if(E&&(p=n(p,b>2?arguments[2]:void 0,2)),void 0==v||d==Array&&a(v))for(r=new d(t=c(_.length));t>O;O++)s(r,O,E?p(_[O],O):_[O]);else for(l=v.call(_),r=new d;!(o=l.next()).done;O++)s(r,O,E?u(l,p,[o.value,O],!0):o.value);return r.length=O,r}})},{"./_create-property":13,"./_ctx":14,"./_export":19,"./_is-array-iter":27,"./_iter-call":29,"./_iter-detect":32,"./_to-length":50,"./_to-object":51,"./core.get-iterator-method":55}],57:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":16,"./_export":19,"./_object-dp":36}],58:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":31,"./_string-at":46}],59:[function(e,t,r){"use strict";var n,o,i,u,a,c,s=_(e("babel-runtime/helpers/toConsumableArray")),f=_(e("babel-runtime/helpers/defineProperty")),l=_(e("./constants.js"));function _(e){return e&&e.__esModule?e:{default:e}}var d=(a={},(0,f.default)(a,l.default.PROPERTY_MOVE,(n={},(0,f.default)(n,l.default.MOMENT_EXPRESSIVE,{easeInOut:"cubic-bezier(0.4, 0.14, 0.3, 1)",easeIn:"cubic-bezier(0.4, 0.14, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(n,l.default.MOMENT_PRODUCTIVE,{easeInOut:"cubic-bezier(0.2, 0.2, 0.38, 0.9)",easeIn:"cubic-bezier(0.2, 0, 1, 0.9)",easeOut:"cubic-bezier(0, 0, 0.38, 0.9)"}),(0,f.default)(n,l.default.MOMENT_NARRATIVE,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(n,l.default.MOMENT_CELEBRATORY,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),n)),(0,f.default)(a,l.default.PROPERTY_SCALE,(o={},(0,f.default)(o,l.default.MOMENT_EXPRESSIVE,{easeInOut:"cubic-bezier(0.4, 0.14, 0.3, 1)",easeIn:"cubic-bezier(0.4, 0.14, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(o,l.default.MOMENT_PRODUCTIVE,{easeInOut:"cubic-bezier(0.2, 0.2, 0.38, 0.9)",easeIn:"cubic-bezier(0.2, 0, 1, 0.9)",easeOut:"cubic-bezier(0, 0, 0.38, 0.9)"}),(0,f.default)(o,l.default.MOMENT_NARRATIVE,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(o,l.default.MOMENT_CELEBRATORY,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),o)),(0,f.default)(a,l.default.PROPERTY_FADE,(i={},(0,f.default)(i,l.default.MOMENT_EXPRESSIVE,{easeInOut:"cubic-bezier(0.4, 0.14, 0.3, 1)",easeIn:"cubic-bezier(0.4, 0.14, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(i,l.default.MOMENT_PRODUCTIVE,{easeInOut:"cubic-bezier(0.2, 0.2, 0.38, 0.9)",easeIn:"cubic-bezier(0.2, 0, 1, 0.9)",easeOut:"cubic-bezier(0, 0, 0.38, 0.9)"}),(0,f.default)(i,l.default.MOMENT_NARRATIVE,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(i,l.default.MOMENT_CELEBRATORY,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),i)),(0,f.default)(a,l.default.PROPERTY_ROTATE,(u={},(0,f.default)(u,l.default.MOMENT_EXPRESSIVE,{easeInOut:"cubic-bezier(0.4, 0.14, 0.3, 1)",easeIn:"cubic-bezier(0.4, 0.14, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(u,l.default.MOMENT_PRODUCTIVE,{easeInOut:"cubic-bezier(0.2, 0.2, 0.38, 0.9)",easeIn:"cubic-bezier(0.2, 0, 1, 0.9)",easeOut:"cubic-bezier(0, 0, 0.38, 0.9)"}),(0,f.default)(u,l.default.MOMENT_NARRATIVE,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),(0,f.default)(u,l.default.MOMENT_CELEBRATORY,{easeInOut:"cubic-bezier(0.29, 0.04, 0.23, 1)",easeIn:"cubic-bezier(0.39, .06, 1, 1)",easeOut:"cubic-bezier(0, 0, 0.3, 1)"}),u)),a),b=[l.default.MOMENT_EXPRESSIVE,l.default.MOMENT_PRODUCTIVE,l.default.MOMENT_NARRATIVE,l.default.MOMENT_CELEBRATORY],p=(c={},(0,f.default)(c,l.default.PROPERTY_MOVE,[10,25,50,75,100,200,400,800,1600,3200]),(0,f.default)(c,l.default.PROPERTY_SCALE,[100,200,400,800,1600,3200,6400,12800,25600,51200,102400,204800]),(0,f.default)(c,l.default.PROPERTY_FADE,[25,50,75,100]),(0,f.default)(c,l.default.PROPERTY_ROTATE,[30,60,90,120,150,180,270,360]),c),E="123456789".split("").reduce(function(e,t,r){return[].concat((0,s.default)(e),[4*e[e.length-1]])},[64]);t.exports={curves:d,distances:p,sizes:E,motionModes:b}},{"./constants.js":60,"babel-runtime/helpers/defineProperty":3,"babel-runtime/helpers/toConsumableArray":4}],60:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={MOMENT_EXPRESSIVE:"expr",MOMENT_PRODUCTIVE:"prod",MOMENT_NARRATIVE:"narr",MOMENT_CELEBRATORY:"celeb",SIZE_BASE:20,PROPERTY_MOVE:"move",PROPERTY_SCALE:"scale",PROPERTY_FADE:"fade",PROPERTY_ROTATE:"rotate",EASE_IN_OUT:"easeInOut",EASE_IN:"easeIn",EASE_OUT:"easeOut"}},{}],61:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=i(e("./config-constants.js")),o=i(e("./constants.js"));function i(e){return e&&e.__esModule?e:{default:e}}r.default=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o.default.PROPERTY_MOVE,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:o.default.MOMENT_PRODUCTIVE,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.default.EASE_IN_OUT;arguments.length>5&&void 0!==arguments[5]&&arguments[5],arguments.length>6&&void 0!==arguments[6]&&arguments[6];return n.default.curves[e][t][r]}},{"./config-constants.js":59,"./constants.js":60}],62:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=i(e("./constants")),o=i(e("./helpers"));function i(e){return e&&e.__esModule?e:{default:e}}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.default.PROPERTY_MOVE,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.default.MOMENT_PRODUCTIVE,u=(arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.default.EASE_IN_OUT,arguments.length>5&&void 0!==arguments[5]?arguments[5]:"rem"),a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:16;"rem"===u&&(r!==n.default.PROPERTY_MOVE&&r!==n.default.PROPERTY_SCALE||(e*=a),t*=a*a),console.log("_distance is "+e),console.log("_size is "+t);var c=Math.max(10,parseFloat(e)),s=Math.max("rem"===u?1:16,parseFloat(t)),f=void n.default.SIZE_BASE;o.default.getSizeFactor(c,s,n.default.MOMENT_EXPRESSIVE,1),o.default.getSizeFactor(c,s,n.default.MOMENT_PRODUCTIVE,1);switch(r){case n.default.PROPERTY_FADE:switch(i){case n.default.MOMENT_CELEBRATORY:var l=128/157696;f=Math.max(310,l*s+308.12987012987014);break;case n.default.MOMENT_NARRATIVE:var _=116/157696;f=Math.max(230,_*s+226.30519480519482);break;case n.default.MOMENT_EXPRESSIVE:var d=94/157696;f=Math.max(150,d*s+144.62662337662337);break;default:case n.default.MOMENT_PRODUCTIVE:var b=52/157696;f=Math.max(110,b*s+107.24025974025975)}f=f/100*c,console.log("fade:ret==="+f);break;case n.default.PROPERTY_ROTATE:switch(i){case n.default.MOMENT_CELEBRATORY:var p=120/159840;f=p*s+359.87987987987987;break;case n.default.MOMENT_NARRATIVE:var E=126/159840;f=E*s+267.8738738738739;break;case n.default.MOMENT_EXPRESSIVE:var O=92/159840;f=O*s+187.9079079079079;break;default:case n.default.MOMENT_PRODUCTIVE:var v=62/159840;f=v*s+127.93793793793793}f=f/180*c;break;case n.default.PROPERTY_SCALE:switch(i){case n.default.MOMENT_CELEBRATORY:f=124/14e4*s+259.14285714285717;break;case n.default.MOMENT_NARRATIVE:f=52/14e4*s+204.28571428571428;break;case n.default.MOMENT_EXPRESSIVE:f=40/14e4*s+125.14285714285714;break;default:case n.default.MOMENT_PRODUCTIVE:f=35e-5*s+90.5}break;case n.default.PROPERTY_MOVE:default:switch(i){case n.default.MOMENT_CELEBRATORY:f=190/1300*c+261.38461538461536;break;case n.default.MOMENT_NARRATIVE:f=168/1300*c+188.07692307692307;break;case n.default.MOMENT_EXPRESSIVE:f=140/1300*c+117.23076923076923;break;default:case n.default.MOMENT_PRODUCTIVE:f=100/1300*c+82.3076923076923}}return f}},{"./constants":60,"./helpers":63}],63:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=e("./constants.js"),i=(n=o)&&n.__esModule?n:{default:n};r.default={getSizeFactor:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.default.PRODUCTIVE_MOTION,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return Math.min(1.5,Math.pow(i.default.SIZE_BASE/e,(t===i.default.PRODUCTIVE_MOTION?.05:.1)*r||1))}}},{"./constants.js":60}],64:[function(e,t,r){"use strict";var n=i(e("./getCurve.js")),o=i(e("./getDuration.js"));function i(e){return e&&e.__esModule?e:{default:e}}window.IBM=window.IBM||{},window.IBM.motion={getCurve:n.default,getDuration:o.default}},{"./getCurve.js":61,"./getDuration.js":62}]},{},[64]);
//# sourceMappingURL=dist/maps/motion.js.map
