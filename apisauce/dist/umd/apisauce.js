!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],n):n(e.apisauce={},e.axios)}(this,function(e,n){"use strict";var t=function(){return(t=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},r=function(e,n,t,r){return new(t||(t=Promise))(function(o,u){function a(e){try{c(r.next(e))}catch(e){u(e)}}function s(e){try{c(r.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new t(function(n){n(e.value)}).then(a,s)}c((r=r.apply(e,n||[])).next())})},o=function(e,n){var t,r,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function s(u){return function(s){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(e){u=[6,e],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}},u=function(e){return e instanceof Date?e.getTime():"number"==typeof e||null===e||void 0===e?e:Number(e)},a=function(e,n,t){return t>=e&&t<=n},s=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},c={Accept:"application/json","Content-Type":"application/json"},i={timeout:0},R=["ECONNABORTED"],l=["ENOTFOUND","ECONNREFUSED","ECONNRESET"],f=function(e){return a(200,299,e)},E=function(e){return"Network Error"===e.message?"NETWORK_ERROR":n.isCancel(e)?"CANCEL_ERROR":e.code?R.includes(e.code)?"TIMEOUT_ERROR":l.includes(e.code)?"CONNECTION_ERROR":"UNKNOWN_ERROR":O(e.response?e.response.status:null)},O=function(e){return e?f(e)?null:a(400,499,e)?"CLIENT_ERROR":function(e){return a(500,599,e)}(e)?"SERVER_ERROR":"UNKNOWN_ERROR":"UNKNOWN_ERROR"},d=function(e){var a,R=t({},c,e.headers||{});if(e.axiosInstance)a=e.axiosInstance;else{var l=t({},e,{headers:void 0}),d=t({},i,l);a=n.create(d)}var N=[],p=[],h=[],T=[],_=[],b=function(e,n){return R[e]=n,a},y=function(e){return function(n,r,o){return void 0===r&&(r={}),void 0===o&&(o={}),v(t({},o,{url:n,params:r,method:e}))}},C=function(e){return function(n,r,o){return void 0===o&&(o={}),v(t({},o,{url:n,method:e,data:r}))}},v=function(e){return r(void 0,void 0,void 0,function(){var n,c,i,l,f=this;return o(this,function(E){switch(E.label){case 0:if(e.headers=t({},R,e.headers),p.length>0&&p.forEach(function(n){return n(e)}),!(h.length>0))return[3,6];n=0,E.label=1;case 1:return n<h.length?(c=h[n](e),s(c)?[4,c]:[3,3]):[3,6];case 2:return E.sent(),[3,5];case 3:return[4,c(e)];case 4:E.sent(),E.label=5;case 5:return n++,[3,1];case 6:return i=u(new Date),l=function(e){return r(f,void 0,void 0,function(){var n;return o(this,function(t){switch(t.label){case 0:return[4,g(i,e)];case 1:return n=t.sent(),[2,m(n)]}})})},[2,a.request(e).then(l).catch(l)]}})})},m=function(e){return N.forEach(function(n){try{n(e)}catch(e){}}),e},g=function(e,t){return r(void 0,void 0,void 0,function(){var r,a,c,i,R,l,d,N,p,h,b,y,C,v,m,g;return o(this,function(o){switch(o.label){case 0:if(r=u(new Date),a=r-e,c=t instanceof Error||n.isCancel(t),i=t,R=t,l=c?R.response:i,d=l&&l.status||null,N=c?E(t):O(d),p=c?R:null,h=f(d),b=t.config||null,y=l&&l.headers||null,C=l&&l.data||null,v={duration:a,problem:N,originalError:p,ok:h,status:d,headers:y,config:b,data:C},T.length>0&&T.forEach(function(e){return e(v)}),!(_.length>0))return[3,6];m=0,o.label=1;case 1:return m<_.length?(g=_[m](v),s(g)?[4,g]:[3,3]):[3,6];case 2:return o.sent(),[3,5];case 3:return[4,g(v)];case 4:o.sent(),o.label=5;case 5:return m++,[3,1];case 6:return[2,v]}})})};return{axiosInstance:a,monitors:N,addMonitor:function(e){N.push(e)},requestTransforms:p,asyncRequestTransforms:h,responseTransforms:T,asyncResponseTransforms:_,addRequestTransform:function(e){return p.push(e)},addAsyncRequestTransform:function(e){return h.push(e)},addResponseTransform:function(e){return T.push(e)},addAsyncResponseTransform:function(e){return _.push(e)},setHeader:b,setHeaders:function(e){return Object.keys(e).forEach(function(n){return b(n,e[n])}),a},deleteHeader:function(e){return delete R[e],a},headers:R,setBaseURL:function(e){return a.defaults.baseURL=e,a},getBaseURL:function(){return a.defaults.baseURL},any:v,get:y("get"),delete:y("delete"),head:y("head"),post:C("post"),put:C("put"),patch:C("patch"),link:y("link"),unlink:y("unlink")}},N=(n=n&&n.hasOwnProperty("default")?n.default:n).isCancel,p=n.CancelToken,h={DEFAULT_HEADERS:c,NONE:null,CLIENT_ERROR:"CLIENT_ERROR",SERVER_ERROR:"SERVER_ERROR",TIMEOUT_ERROR:"TIMEOUT_ERROR",CONNECTION_ERROR:"CONNECTION_ERROR",NETWORK_ERROR:"NETWORK_ERROR",UNKNOWN_ERROR:"UNKNOWN_ERROR",create:d,isCancel:N,CancelToken:p};e.DEFAULT_HEADERS=c,e.NONE=null,e.CLIENT_ERROR="CLIENT_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT_ERROR="TIMEOUT_ERROR",e.CONNECTION_ERROR="CONNECTION_ERROR",e.NETWORK_ERROR="NETWORK_ERROR",e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.CANCEL_ERROR="CANCEL_ERROR",e.getProblemFromError=E,e.getProblemFromStatus=O,e.create=d,e.isCancel=N,e.CancelToken=p,e.default=h,Object.defineProperty(e,"__esModule",{value:!0})});
