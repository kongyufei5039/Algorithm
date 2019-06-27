!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,function(e,t,n){"use strict";(function(t){var r=n(3);
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function i(e,t){if(e===t)return 0;for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var u=n(4),c=Object.prototype.hasOwnProperty,a=Array.prototype.slice,f="foo"===function(){}.name;function s(e){return Object.prototype.toString.call(e)}function l(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=v,y=/\s*function\s+([^\(\s]*)\s*/;function h(e){if(u.isFunction(e)){if(f)return e.name;var t=e.toString().match(y);return t&&t[1]}}function d(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(f||!u.isFunction(e))return u.inspect(e);var t=h(e);return"[Function"+(t?": "+t:"")+"]"}function b(e,t,n,r,i){throw new p.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function v(e,t){e||b(e,!0,t,"==",p.ok)}function m(e,t,n,r){if(e===t)return!0;if(o(e)&&o(t))return 0===i(e,t);if(u.isDate(e)&&u.isDate(t))return e.getTime()===t.getTime();if(u.isRegExp(e)&&u.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase;if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(l(e)&&l(t)&&s(e)===s(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer));if(o(e)!==o(t))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(e);return-1!==c&&c===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1;if(u.isPrimitive(e)||u.isPrimitive(t))return e===t;if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1;var i=w(e),o=w(t);if(i&&!o||!i&&o)return!1;if(i)return e=a.call(e),t=a.call(t),m(e,t,n);var c,f,s=x(e),l=x(t);if(s.length!==l.length)return!1;for(s.sort(),l.sort(),f=s.length-1;f>=0;f--)if(s[f]!==l[f])return!1;for(f=s.length-1;f>=0;f--)if(c=s[f],!m(e[c],t[c],n,r))return!1;return!0}(e,t,n,r))}return n?e===t:e==t}function w(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function O(e,t){if(!e||!t)return!1;if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e);try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function j(e,t,n,r){var i;if("function"!=typeof t)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=function(e){var t;try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&b(i,n,"Missing expected exception"+r);var o="string"==typeof r,c=!e&&i&&!n;if((!e&&u.isError(i)&&o&&O(i,n)||c)&&b(i,n,"Got unwanted exception"+r),e&&i&&n&&!O(i,n)||!e&&i)throw i}p.AssertionError=function(e){var t;this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=d(g((t=this).actual),128)+" "+t.operator+" "+d(g(t.expected),128),this.generatedMessage=!0);var n=e.stackStartFunction||b;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var i=r.stack,o=h(n),u=i.indexOf("\n"+o);if(u>=0){var c=i.indexOf("\n",u+1);i=i.substring(c+1)}this.stack=i}}},u.inherits(p.AssertionError,Error),p.fail=b,p.ok=v,p.equal=function(e,t,n){e!=t&&b(e,t,n,"==",p.equal)},p.notEqual=function(e,t,n){e==t&&b(e,t,n,"!=",p.notEqual)},p.deepEqual=function(e,t,n){m(e,t,!1)||b(e,t,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,n){m(e,t,!0)||b(e,t,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,n){m(e,t,!1)&&b(e,t,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,n,r){m(t,n,!0)&&b(t,n,r,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,n){e!==t&&b(e,t,n,"===",p.strictEqual)},p.notStrictEqual=function(e,t,n){e===t&&b(e,t,n,"!==",p.notStrictEqual)},p.throws=function(e,t,n){j(!0,e,t,n)},p.doesNotThrow=function(e,t,n){j(!1,e,t,n)},p.ifError=function(e){if(e)throw e},p.strict=r(function e(t,n){t||b(t,!0,n,"==",e)},p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var x=Object.keys||function(e){var t=[];for(var n in e)c.call(e,n)&&t.push(n);return t}}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in n=Object(arguments[a]))i.call(n,f)&&(c[f]=n[f]);if(r){u=r(n);for(var s=0;s<u.length;s++)o.call(n,u[s])&&(c[u[s]]=n[u[s]])}}return c}},function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r]);return n},i=/%[sdj%]/g;t.format=function(e){if(!b(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(c(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,u=String(e).replace(i,function(e){if("%%"===e)return"%";if(n>=o)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),a=r[n];n<o;a=r[++n])d(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n;if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}};var o,u={};function c(e,n){var r={seen:[],stylize:f};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),v(r.showHidden)&&(r.showHidden=!1),v(r.depth)&&(r.depth=2),v(r.colors)&&(r.colors=!1),v(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),s(r,e,r.depth)}function a(e,t){var n=c.styles[t];return n?"["+c.colors[n][0]+"m"+e+"["+c.colors[n][1]+"m":e}function f(e,t){return e}function s(e,n,r){if(e.customInspect&&n&&x(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e);return b(i)||(i=s(e,i,r)),i}var o=function(e,t){if(v(t))return e.stylize("undefined","undefined");if(b(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number");if(h(t))return e.stylize(""+t,"boolean");if(d(t))return e.stylize("null","null")}(e,n);if(o)return o;var u=Object.keys(n),c=function(e){var t={};return e.forEach(function(e,n){t[e]=!0}),t}(u);if(e.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return l(n);if(0===u.length){if(x(n)){var a=n.name?": "+n.name:"";return e.stylize("[Function"+a+"]","special")}if(m(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return e.stylize(Date.prototype.toString.call(n),"date");if(j(n))return l(n)}var f,w="",E=!1,S=["{","}"];(y(n)&&(E=!0,S=["[","]"]),x(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return m(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+l(n)),0!==u.length||E&&0!=n.length?r<0?m(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),f=E?function(e,t,n,r,i){for(var o=[],u=0,c=t.length;u<c;++u)z(t,String(u))?o.push(p(e,t,n,r,String(u),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(p(e,t,n,r,i,!0))}),o}(e,n,r,c,u):u.map(function(t){return p(e,n,r,c,t,E)}),e.seen.pop(),function(e,t,n){if(e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(f,w,S)):S[0]+w+S[1]}function l(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i,o){var u,c,a;if((a=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?c=a.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):a.set&&(c=e.stylize("[Setter]","special")),z(r,i)||(u="["+i+"]"),c||(e.seen.indexOf(a.value)<0?(c=d(n)?s(e,a.value,null):s(e,a.value,n-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+c.split("\n").map(function(e){return"   "+e}).join("\n")):c=e.stylize("[Circular]","special")),v(u)){if(o&&i.match(/^\d+$/))return c;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+c}function y(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function d(e){return null===e}function g(e){return"number"==typeof e}function b(e){return"string"==typeof e}function v(e){return void 0===e}function m(e){return w(e)&&"[object RegExp]"===E(e)}function w(e){return"object"==typeof e&&null!==e}function O(e){return w(e)&&"[object Date]"===E(e)}function j(e){return w(e)&&("[object Error]"===E(e)||e instanceof Error)}function x(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function S(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(v(o)&&(o=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=e.pid;u[n]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",n,r,e)}}else u[n]=function(){};return u[n]},t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=y,t.isBoolean=h,t.isNull=d,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=b,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=v,t.isRegExp=m,t.isObject=w,t.isDate=O,t.isError=j,t.isFunction=x,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n(6);var q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,n;console.log("%s - %s",(e=new Date,n=[S(e.getHours()),S(e.getMinutes()),S(e.getSeconds())].join(":"),[e.getDate(),q[e.getMonth()],n].join(" ")),t.format.apply(t,arguments))},t.inherits=n(7),t._extend=function(e,t){if(!t||!w(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e};var T="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value");n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(T&&e[T]){var t;if("function"!=typeof(t=e[T]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise(function(e,r){t=e,n=r}),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push(function(e,r){e?n(e):t(r)});try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),T&&Object.defineProperty(t,T,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=T,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};t.apply(this,n).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(P,t,u)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n(5))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var a,f=[],s=!1,l=-1;function p(){s&&a&&(s=!1,a.length?f=a.concat(f):l=-1,f.length&&y())}function y(){if(!s){var e=c(p);s=!0;for(var t=f.length;t;){for(a=f,f=[];++l<t;)a&&a[l].run();l=-1,t=f.length}a=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||s||c(y)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.r(t);var o=function e(t){i(this,e),this.element=t,this.next=null},u=function(){function e(){i(this,e),this.head=new o("head")}var t,n,u;return t=e,(n=[{key:"findByValue",value:function(e){for(var t=this.head.next;null!==t&&t.element!==e;)t=t.next;return null===t?-1:t}},{key:"findByIndex",value:function(e){for(var t=this.head.next,n=0;null!==t&&n!==e;)t=t.next,n++;return null===t?-1:t}},{key:"append",value:function(e){for(var t=new o(e),n=this.head;n.next;)n=n.next;n.next=t}},{key:"insert",value:function(e,t){var n=this.findByValue(t);if(-1!==n){var r=new o(e);r.next=n.next,n.next=r}}},{key:"findPrev",value:function(e){for(var t=this.head;null!==t.next&&t.next.element!==e;)t=t.next;return null==t.next?-1:t}},{key:"remove",value:function(e){var t=this.findPrev(e);-1!==t&&(t.next=t.next.next)}},{key:"display",value:function(){for(var e=this.head.next,t=[];null!==e;)t.push(e.element),e=e.next;return t}}])&&r(t.prototype,n),u&&r(t,u),e}(),c=n(1),a=new u;a.append("chen"),a.append("curry"),a.append("sang"),a.append("zhao"),describe("链表默认数据",function(){it("链表数据：chen -> curry -> sang -> zhao",function(){c.equal(a.display().join(" -> "),"chen -> curry -> sang -> zhao")})}),describe("根据 value 查找节点",function(){it("LList.findByValue('curry') 结果为：curry",function(){c.equal(a.findByValue("curry").element,"curry")})}),describe("根据 index 查找节点",function(){it("LList.findByIndex(2) 结果为：sang",function(){c.equal(a.findByIndex(2).element,"sang")})}),describe("链表插入数据",function(){it("LList.insert('qian', 'chen')、LList.insert('zhou', 'zhao') 后结果为：chen -> qian -> curry -> sang -> zhao -> zhou",function(){a.insert("qian","chen"),a.insert("zhou","zhao"),c.equal(a.display().join(" -> "),"chen -> qian -> curry -> sang -> zhao -> zhou")})}),describe("链表删除数据",function(){it("LList.remove('curry') 后结果为：chen -> qian -> sang -> zhao -> zhou",function(){a.remove("curry"),c.equal(a.display().join(" -> "),"chen -> qian -> sang -> zhao -> zhou")})}),describe("与头结点同值元素测试",function(){it("LList.insert('head', 'sang') 后结果为：chen -> qian -> sang -> head -> zhao -> zhou",function(){a.insert("head","sang"),c.equal(a.display().join(" -> "),"chen -> qian -> sang -> head -> zhao -> zhou")}),it("LList.findPrev('head') 结果为：sang",function(){c.equal(a.findPrev("head").element,"sang")}),it("LList.remove('head') 后结果为：chen -> qian -> sang -> zhao -> zhou",function(){a.remove("head"),c.equal(a.display().join(" -> "),"chen -> qian -> sang -> zhao -> zhou")})})}]);