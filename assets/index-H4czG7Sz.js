(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function eb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var df={exports:{}},aa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function tb(){if(Ym)return aa;Ym=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(a,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:h,ref:o!==void 0?o:null,props:c}}return aa.Fragment=t,aa.jsx=i,aa.jsxs=i,aa}var Fm;function nb(){return Fm||(Fm=1,df.exports=tb()),df.exports}var U=nb(),pf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm;function ib(){if(Qm)return ee;Qm=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=E&&b[E]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,j={};function V(b,x,B){this.props=b,this.context=x,this.refs=j,this.updater=B||k}V.prototype.isReactComponent={},V.prototype.setState=function(b,x){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,x,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function se(){}se.prototype=V.prototype;function $(b,x,B){this.props=b,this.context=x,this.refs=j,this.updater=B||k}var te=$.prototype=new se;te.constructor=$,z(te,V.prototype),te.isPureReactComponent=!0;var be=Array.isArray,ne={H:null,A:null,T:null,S:null,V:null},Xe=Object.prototype.hasOwnProperty;function et(b,x,B,H,Y,he){return B=he.ref,{$$typeof:s,type:b,key:x,ref:B!==void 0?B:null,props:he}}function lt(b,x){return et(b.type,x,void 0,void 0,void 0,b.props)}function ft(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function Un(b){var x={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(B){return x[B]})}var un=/\/+/g;function tt(b,x){return typeof b=="object"&&b!==null&&b.key!=null?Un(""+b.key):x.toString(36)}function bi(){}function Ti(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(bi,bi):(b.status="pending",b.then(function(x){b.status==="pending"&&(b.status="fulfilled",b.value=x)},function(x){b.status==="pending"&&(b.status="rejected",b.reason=x)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function nt(b,x,B,H,Y){var he=typeof b;(he==="undefined"||he==="boolean")&&(b=null);var J=!1;if(b===null)J=!0;else switch(he){case"bigint":case"string":case"number":J=!0;break;case"object":switch(b.$$typeof){case s:case t:J=!0;break;case y:return J=b._init,nt(J(b._payload),x,B,H,Y)}}if(J)return Y=Y(b),J=H===""?"."+tt(b,0):H,be(Y)?(B="",J!=null&&(B=J.replace(un,"$&/")+"/"),nt(Y,x,B,"",function(Ln){return Ln})):Y!=null&&(ft(Y)&&(Y=lt(Y,B+(Y.key==null||b&&b.key===Y.key?"":(""+Y.key).replace(un,"$&/")+"/")+J)),x.push(Y)),1;J=0;var St=H===""?".":H+":";if(be(b))for(var Oe=0;Oe<b.length;Oe++)H=b[Oe],he=St+tt(H,Oe),J+=nt(H,x,B,he,Y);else if(Oe=S(b),typeof Oe=="function")for(b=Oe.call(b),Oe=0;!(H=b.next()).done;)H=H.value,he=St+tt(H,Oe++),J+=nt(H,x,B,he,Y);else if(he==="object"){if(typeof b.then=="function")return nt(Ti(b),x,B,H,Y);throw x=String(b),Error("Objects are not valid as a React child (found: "+(x==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":x)+"). If you meant to render a collection of children, use an array instead.")}return J}function D(b,x,B){if(b==null)return b;var H=[],Y=0;return nt(b,H,"","",function(he){return x.call(B,he,Y++)}),H}function P(b){if(b._status===-1){var x=b._result;x=x(),x.then(function(B){(b._status===0||b._status===-1)&&(b._status=1,b._result=B)},function(B){(b._status===0||b._status===-1)&&(b._status=2,b._result=B)}),b._status===-1&&(b._status=0,b._result=x)}if(b._status===1)return b._result.default;throw b._result}var K=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var x=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(x))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function Te(){}return ee.Children={map:D,forEach:function(b,x,B){D(b,function(){x.apply(this,arguments)},B)},count:function(b){var x=0;return D(b,function(){x++}),x},toArray:function(b){return D(b,function(x){return x})||[]},only:function(b){if(!ft(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ee.Component=V,ee.Fragment=i,ee.Profiler=o,ee.PureComponent=$,ee.StrictMode=a,ee.Suspense=_,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne,ee.__COMPILER_RUNTIME={__proto__:null,c:function(b){return ne.H.useMemoCache(b)}},ee.cache=function(b){return function(){return b.apply(null,arguments)}},ee.cloneElement=function(b,x,B){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var H=z({},b.props),Y=b.key,he=void 0;if(x!=null)for(J in x.ref!==void 0&&(he=void 0),x.key!==void 0&&(Y=""+x.key),x)!Xe.call(x,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&x.ref===void 0||(H[J]=x[J]);var J=arguments.length-2;if(J===1)H.children=B;else if(1<J){for(var St=Array(J),Oe=0;Oe<J;Oe++)St[Oe]=arguments[Oe+2];H.children=St}return et(b.type,Y,void 0,void 0,he,H)},ee.createContext=function(b){return b={$$typeof:h,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:c,_context:b},b},ee.createElement=function(b,x,B){var H,Y={},he=null;if(x!=null)for(H in x.key!==void 0&&(he=""+x.key),x)Xe.call(x,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Y[H]=x[H]);var J=arguments.length-2;if(J===1)Y.children=B;else if(1<J){for(var St=Array(J),Oe=0;Oe<J;Oe++)St[Oe]=arguments[Oe+2];Y.children=St}if(b&&b.defaultProps)for(H in J=b.defaultProps,J)Y[H]===void 0&&(Y[H]=J[H]);return et(b,he,void 0,void 0,null,Y)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(b){return{$$typeof:d,render:b}},ee.isValidElement=ft,ee.lazy=function(b){return{$$typeof:y,_payload:{_status:-1,_result:b},_init:P}},ee.memo=function(b,x){return{$$typeof:m,type:b,compare:x===void 0?null:x}},ee.startTransition=function(b){var x=ne.T,B={};ne.T=B;try{var H=b(),Y=ne.S;Y!==null&&Y(B,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Te,K)}catch(he){K(he)}finally{ne.T=x}},ee.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()},ee.use=function(b){return ne.H.use(b)},ee.useActionState=function(b,x,B){return ne.H.useActionState(b,x,B)},ee.useCallback=function(b,x){return ne.H.useCallback(b,x)},ee.useContext=function(b){return ne.H.useContext(b)},ee.useDebugValue=function(){},ee.useDeferredValue=function(b,x){return ne.H.useDeferredValue(b,x)},ee.useEffect=function(b,x,B){var H=ne.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return H.useEffect(b,x)},ee.useId=function(){return ne.H.useId()},ee.useImperativeHandle=function(b,x,B){return ne.H.useImperativeHandle(b,x,B)},ee.useInsertionEffect=function(b,x){return ne.H.useInsertionEffect(b,x)},ee.useLayoutEffect=function(b,x){return ne.H.useLayoutEffect(b,x)},ee.useMemo=function(b,x){return ne.H.useMemo(b,x)},ee.useOptimistic=function(b,x){return ne.H.useOptimistic(b,x)},ee.useReducer=function(b,x,B){return ne.H.useReducer(b,x,B)},ee.useRef=function(b){return ne.H.useRef(b)},ee.useState=function(b){return ne.H.useState(b)},ee.useSyncExternalStore=function(b,x,B){return ne.H.useSyncExternalStore(b,x,B)},ee.useTransition=function(){return ne.H.useTransition()},ee.version="19.1.0",ee}var Km;function nh(){return Km||(Km=1,pf.exports=ib()),pf.exports}var ut=nh();const Fi=eb(ut);var _f={exports:{}},la={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function sb(){return Xm||(Xm=1,function(s){function t(D,P){var K=D.length;D.push(P);e:for(;0<K;){var Te=K-1>>>1,b=D[Te];if(0<o(b,P))D[Te]=P,D[K]=b,K=Te;else break e}}function i(D){return D.length===0?null:D[0]}function a(D){if(D.length===0)return null;var P=D[0],K=D.pop();if(K!==P){D[0]=K;e:for(var Te=0,b=D.length,x=b>>>1;Te<x;){var B=2*(Te+1)-1,H=D[B],Y=B+1,he=D[Y];if(0>o(H,K))Y<b&&0>o(he,H)?(D[Te]=he,D[Y]=K,Te=Y):(D[Te]=H,D[B]=K,Te=B);else if(Y<b&&0>o(he,K))D[Te]=he,D[Y]=K,Te=Y;else break e}}return P}function o(D,P){var K=D.sortIndex-P.sortIndex;return K!==0?K:D.id-P.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var _=[],m=[],y=1,E=null,S=3,k=!1,z=!1,j=!1,V=!1,se=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function be(D){for(var P=i(m);P!==null;){if(P.callback===null)a(m);else if(P.startTime<=D)a(m),P.sortIndex=P.expirationTime,t(_,P);else break;P=i(m)}}function ne(D){if(j=!1,be(D),!z)if(i(_)!==null)z=!0,Xe||(Xe=!0,tt());else{var P=i(m);P!==null&&nt(ne,P.startTime-D)}}var Xe=!1,et=-1,lt=5,ft=-1;function Un(){return V?!0:!(s.unstable_now()-ft<lt)}function un(){if(V=!1,Xe){var D=s.unstable_now();ft=D;var P=!0;try{e:{z=!1,j&&(j=!1,$(et),et=-1),k=!0;var K=S;try{t:{for(be(D),E=i(_);E!==null&&!(E.expirationTime>D&&Un());){var Te=E.callback;if(typeof Te=="function"){E.callback=null,S=E.priorityLevel;var b=Te(E.expirationTime<=D);if(D=s.unstable_now(),typeof b=="function"){E.callback=b,be(D),P=!0;break t}E===i(_)&&a(_),be(D)}else a(_);E=i(_)}if(E!==null)P=!0;else{var x=i(m);x!==null&&nt(ne,x.startTime-D),P=!1}}break e}finally{E=null,S=K,k=!1}P=void 0}}finally{P?tt():Xe=!1}}}var tt;if(typeof te=="function")tt=function(){te(un)};else if(typeof MessageChannel<"u"){var bi=new MessageChannel,Ti=bi.port2;bi.port1.onmessage=un,tt=function(){Ti.postMessage(null)}}else tt=function(){se(un,0)};function nt(D,P){et=se(function(){D(s.unstable_now())},P)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(D){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var K=S;S=P;try{return D()}finally{S=K}},s.unstable_requestPaint=function(){V=!0},s.unstable_runWithPriority=function(D,P){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var K=S;S=D;try{return P()}finally{S=K}},s.unstable_scheduleCallback=function(D,P,K){var Te=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Te+K:Te):K=Te,D){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=K+b,D={id:y++,callback:P,priorityLevel:D,startTime:K,expirationTime:b,sortIndex:-1},K>Te?(D.sortIndex=K,t(m,D),i(_)===null&&D===i(m)&&(j?($(et),et=-1):j=!0,nt(ne,K-Te))):(D.sortIndex=b,t(_,D),z||k||(z=!0,Xe||(Xe=!0,tt()))),D},s.unstable_shouldYield=Un,s.unstable_wrapCallback=function(D){var P=S;return function(){var K=S;S=P;try{return D.apply(this,arguments)}finally{S=K}}}}(gf)),gf}var Wm;function rb(){return Wm||(Wm=1,mf.exports=sb()),mf.exports}var vf={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function ab(){if(Zm)return rt;Zm=1;var s=nh();function t(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(_,m,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:E==null?null:""+E,children:_,containerInfo:m,implementation:y}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,rt.createPortal=function(_,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(_,m,null,y)},rt.flushSync=function(_){var m=h.T,y=a.p;try{if(h.T=null,a.p=2,_)return _()}finally{h.T=m,a.p=y,a.d.f()}},rt.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(_,m))},rt.prefetchDNS=function(_){typeof _=="string"&&a.d.D(_)},rt.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var y=m.as,E=d(y,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?a.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:S,fetchPriority:k}):y==="script"&&a.d.X(_,{crossOrigin:E,integrity:S,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},rt.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);a.d.M(_,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(_)},rt.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,E=d(y,m.crossOrigin);a.d.L(_,y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},rt.preloadModule=function(_,m){if(typeof _=="string")if(m){var y=d(m.as,m.crossOrigin);a.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(_)},rt.requestFormReset=function(_){a.d.r(_)},rt.unstable_batchedUpdates=function(_,m){return _(m)},rt.useFormState=function(_,m,y){return h.H.useFormState(_,m,y)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.1.0",rt}var Jm;function lb(){if(Jm)return vf.exports;Jm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vf.exports=ab(),vf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ob(){if($m)return la;$m=1;var s=rb(),t=nh(),i=lb();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,r=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(r=n.return),e=n.return;while(e)}return n.tag===3?r:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(a(188))}function _(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(a(188));return n!==e?null:e}for(var r=e,l=n;;){var u=r.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){r=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===r)return d(u),e;if(f===l)return d(u),n;f=f.sibling}throw Error(a(188))}if(r.return!==l.return)r=u,l=f;else{for(var p=!1,g=u.child;g;){if(g===r){p=!0,r=u,l=f;break}if(g===l){p=!0,l=u,r=f;break}g=g.sibling}if(!p){for(g=f.child;g;){if(g===r){p=!0,r=f,l=u;break}if(g===l){p=!0,l=f,r=u;break}g=g.sibling}if(!p)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),$=Symbol.for("react.consumer"),te=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),et=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),ft=Symbol.for("react.activity"),Un=Symbol.for("react.memo_cache_sentinel"),un=Symbol.iterator;function tt(e){return e===null||typeof e!="object"?null:(e=un&&e[un]||e["@@iterator"],typeof e=="function"?e:null)}var bi=Symbol.for("react.client.reference");function Ti(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bi?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case z:return"Fragment";case V:return"Profiler";case j:return"StrictMode";case ne:return"Suspense";case Xe:return"SuspenseList";case ft:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case te:return(e.displayName||"Context")+".Provider";case $:return(e._context.displayName||"Context")+".Consumer";case be:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case et:return n=e.displayName||null,n!==null?n:Ti(e.type)||"Memo";case lt:n=e._payload,e=e._init;try{return Ti(e(n))}catch{}}return null}var nt=Array.isArray,D=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Te=[],b=-1;function x(e){return{current:e}}function B(e){0>b||(e.current=Te[b],Te[b]=null,b--)}function H(e,n){b++,Te[b]=e.current,e.current=n}var Y=x(null),he=x(null),J=x(null),St=x(null);function Oe(e,n){switch(H(J,n),H(he,e),H(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ym(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ym(n),e=Em(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(Y),H(Y,e)}function Ln(){B(Y),B(he),B(J)}function Zo(e){e.memoizedState!==null&&H(St,e);var n=Y.current,r=Em(n,e.type);n!==r&&(H(he,e),H(Y,r))}function Va(e){he.current===e&&(B(Y),B(he)),St.current===e&&(B(St),ta._currentValue=K)}var Jo=Object.prototype.hasOwnProperty,$o=s.unstable_scheduleCallback,eu=s.unstable_cancelCallback,M0=s.unstable_shouldYield,x0=s.unstable_requestPaint,$t=s.unstable_now,k0=s.unstable_getCurrentPriorityLevel,$h=s.unstable_ImmediatePriority,ed=s.unstable_UserBlockingPriority,Ga=s.unstable_NormalPriority,U0=s.unstable_LowPriority,td=s.unstable_IdlePriority,L0=s.log,z0=s.unstable_setDisableYieldValue,ur=null,bt=null;function zn(e){if(typeof L0=="function"&&z0(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(ur,e)}catch{}}var Tt=Math.clz32?Math.clz32:B0,H0=Math.log,P0=Math.LN2;function B0(e){return e>>>=0,e===0?32:31-(H0(e)/P0|0)|0}var Ya=256,Fa=4194304;function Ci(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qa(e,n,r){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~f,l!==0?u=Ci(l):(p&=g,p!==0?u=Ci(p):r||(r=g&~e,r!==0&&(u=Ci(r))))):(g=l&~f,g!==0?u=Ci(g):p!==0?u=Ci(p):r||(r=l&~e,r!==0&&(u=Ci(r)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,r=n&-n,f>=r||f===32&&(r&4194048)!==0)?n:u}function cr(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function j0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nd(){var e=Ya;return Ya<<=1,(Ya&4194048)===0&&(Ya=256),e}function id(){var e=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),e}function tu(e){for(var n=[],r=0;31>r;r++)n.push(e);return n}function fr(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function q0(e,n,r,l,u,f){var p=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var g=e.entanglements,v=e.expirationTimes,w=e.hiddenUpdates;for(r=p&~r;0<r;){var O=31-Tt(r),M=1<<O;g[O]=0,v[O]=-1;var R=w[O];if(R!==null)for(w[O]=null,O=0;O<R.length;O++){var N=R[O];N!==null&&(N.lane&=-536870913)}r&=~M}l!==0&&sd(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(p&~n))}function sd(e,n,r){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-Tt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|r&4194090}function rd(e,n){var r=e.entangledLanes|=n;for(e=e.entanglements;r;){var l=31-Tt(r),u=1<<l;u&n|e[l]&n&&(e[l]|=n),r&=~u}}function nu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function iu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ad(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Pm(e.type))}function V0(e,n){var r=P.p;try{return P.p=e,n()}finally{P.p=r}}var Hn=Math.random().toString(36).slice(2),it="__reactFiber$"+Hn,ht="__reactProps$"+Hn,is="__reactContainer$"+Hn,su="__reactEvents$"+Hn,G0="__reactListeners$"+Hn,Y0="__reactHandles$"+Hn,ld="__reactResources$"+Hn,hr="__reactMarker$"+Hn;function ru(e){delete e[it],delete e[ht],delete e[su],delete e[G0],delete e[Y0]}function ss(e){var n=e[it];if(n)return n;for(var r=e.parentNode;r;){if(n=r[is]||r[it]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(e=Cm(e);e!==null;){if(r=e[it])return r;e=Cm(e)}return n}e=r,r=e.parentNode}return null}function rs(e){if(e=e[it]||e[is]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function dr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function as(e){var n=e[ld];return n||(n=e[ld]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qe(e){e[hr]=!0}var od=new Set,ud={};function Ai(e,n){ls(e,n),ls(e+"Capture",n)}function ls(e,n){for(ud[e]=n,e=0;e<n.length;e++)od.add(n[e])}var F0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cd={},fd={};function Q0(e){return Jo.call(fd,e)?!0:Jo.call(cd,e)?!1:F0.test(e)?fd[e]=!0:(cd[e]=!0,!1)}function Ka(e,n,r){if(Q0(n))if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+r)}}function Xa(e,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+r)}}function cn(e,n,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(n,r,""+l)}}var au,hd;function os(e){if(au===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);au=n&&n[1]||"",hd=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+au+e+hd}var lu=!1;function ou(e,n){if(!e||lu)return"";lu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(N){var R=N}Reflect.construct(e,[],M)}else{try{M.call()}catch(N){R=N}e.call(M.prototype)}}else{try{throw Error()}catch(N){R=N}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(N){if(N&&R&&typeof N.stack=="string")return[N.stack,R.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),p=f[0],g=f[1];if(p&&g){var v=p.split(`
`),w=g.split(`
`);for(u=l=0;l<v.length&&!v[l].includes("DetermineComponentFrameRoot");)l++;for(;u<w.length&&!w[u].includes("DetermineComponentFrameRoot");)u++;if(l===v.length||u===w.length)for(l=v.length-1,u=w.length-1;1<=l&&0<=u&&v[l]!==w[u];)u--;for(;1<=l&&0<=u;l--,u--)if(v[l]!==w[u]){if(l!==1||u!==1)do if(l--,u--,0>u||v[l]!==w[u]){var O=`
`+v[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=u);break}}}finally{lu=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?os(r):""}function K0(e){switch(e.tag){case 26:case 27:case 5:return os(e.type);case 16:return os("Lazy");case 13:return os("Suspense");case 19:return os("SuspenseList");case 0:case 15:return ou(e.type,!1);case 11:return ou(e.type.render,!1);case 1:return ou(e.type,!0);case 31:return os("Activity");default:return""}}function dd(e){try{var n="";do n+=K0(e),e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function X0(e){var n=pd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,f.call(this,p)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wa(e){e._valueTracker||(e._valueTracker=X0(e))}function _d(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var r=n.getValue(),l="";return e&&(l=pd(e)?e.checked?"true":"false":e.value),e=l,e!==r?(n.setValue(e),!0):!1}function Za(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var W0=/[\n"\\]/g;function xt(e){return e.replace(W0,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function uu(e,n,r,l,u,f,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mt(n)):e.value!==""+Mt(n)&&(e.value=""+Mt(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?cu(e,p,Mt(n)):r!=null?cu(e,p,Mt(r)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Mt(g):e.removeAttribute("name")}function md(e,n,r,l,u,f,p,g){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||r!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;r=r!=null?""+Mt(r):"",n=n!=null?""+Mt(n):r,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p)}function cu(e,n,r){n==="number"&&Za(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function us(e,n,r,l){if(e=e.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<e.length;r++)u=n.hasOwnProperty("$"+e[r].value),e[r].selected!==u&&(e[r].selected=u),u&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Mt(r),n=null,u=0;u<e.length;u++){if(e[u].value===r){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gd(e,n,r){if(n!=null&&(n=""+Mt(n),n!==e.value&&(e.value=n),r==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=r!=null?""+Mt(r):""}function vd(e,n,r,l){if(n==null){if(l!=null){if(r!=null)throw Error(a(92));if(nt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),n=r}r=Mt(n),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l)}function cs(e,n){if(n){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=n;return}}e.textContent=n}var Z0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,r){var l=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,r):typeof r!="number"||r===0||Z0.has(n)?n==="float"?e.cssFloat=r:e[n]=(""+r).trim():e[n]=r+"px"}function Ed(e,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in n)l=n[u],n.hasOwnProperty(u)&&r[u]!==l&&yd(e,u,l)}else for(var f in n)n.hasOwnProperty(f)&&yd(e,f,n[f])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ja(e){return $0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fs=null,hs=null;function Sd(e){var n=rs(e);if(n&&(e=n.stateNode)){var r=e[ht]||null;e:switch(e=n.stateNode,n.type){case"input":if(uu(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var l=r[n];if(l!==e&&l.form===e.form){var u=l[ht]||null;if(!u)throw Error(a(90));uu(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)l=r[n],l.form===e.form&&_d(l)}break e;case"textarea":gd(e,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&us(e,!!r.multiple,n,!1)}}}var pu=!1;function bd(e,n,r){if(pu)return e(n,r);pu=!0;try{var l=e(n);return l}finally{if(pu=!1,(fs!==null||hs!==null)&&(zl(),fs&&(n=fs,e=hs,hs=fs=null,Sd(n),e)))for(n=0;n<e.length;n++)Sd(e[n])}}function pr(e,n){var r=e.stateNode;if(r===null)return null;var l=r[ht]||null;if(l===null)return null;r=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(fn)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){_u=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{_u=!1}var Pn=null,mu=null,$a=null;function Td(){if($a)return $a;var e,n=mu,r=n.length,l,u="value"in Pn?Pn.value:Pn.textContent,f=u.length;for(e=0;e<r&&n[e]===u[e];e++);var p=r-e;for(l=1;l<=p&&n[r-l]===u[f-l];l++);return $a=u.slice(e,1<l?1-l:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function Cd(){return!1}function dt(e){function n(r,l,u,f,p){this._reactName=r,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(r=e[g],this[g]=r?r(f):f[g]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Cd,this.isPropagationStopped=Cd,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=dt(wi),mr=y({},wi,{view:0,detail:0}),eE=dt(mr),gu,vu,gr,il=y({},mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(gu=e.screenX-gr.screenX,vu=e.screenY-gr.screenY):vu=gu=0,gr=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ad=dt(il),tE=y({},il,{dataTransfer:0}),nE=dt(tE),iE=y({},mr,{relatedTarget:0}),yu=dt(iE),sE=y({},wi,{animationName:0,elapsedTime:0,pseudoElement:0}),rE=dt(sE),aE=y({},wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lE=dt(aE),oE=y({},wi,{data:0}),wd=dt(oE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=fE[e])?!!n[e]:!1}function Eu(){return hE}var dE=y({},mr,{key:function(e){if(e.key){var n=uE[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pE=dt(dE),_E=y({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=dt(_E),mE=y({},mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),gE=dt(mE),vE=y({},wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yE=dt(vE),EE=y({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),SE=dt(EE),bE=y({},wi,{newState:0,oldState:0}),TE=dt(bE),CE=[9,13,27,32],Su=fn&&"CompositionEvent"in window,vr=null;fn&&"documentMode"in document&&(vr=document.documentMode);var AE=fn&&"TextEvent"in window&&!vr,Nd=fn&&(!Su||vr&&8<vr&&11>=vr),Od=" ",Dd=!1;function Id(e,n){switch(e){case"keyup":return CE.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function wE(e,n){switch(e){case"compositionend":return Md(n);case"keypress":return n.which!==32?null:(Dd=!0,Od);case"textInput":return e=n.data,e===Od&&Dd?null:e;default:return null}}function RE(e,n){if(ds)return e==="compositionend"||!Su&&Id(e,n)?(e=Td(),$a=mu=Pn=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nd&&n.locale!=="ko"?null:n.data;default:return null}}var NE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!NE[e.type]:n==="textarea"}function kd(e,n,r,l){fs?hs?hs.push(l):hs=[l]:fs=l,n=Vl(n,"onChange"),0<n.length&&(r=new nl("onChange","change",null,r,l),e.push({event:r,listeners:n}))}var yr=null,Er=null;function OE(e){pm(e,0)}function sl(e){var n=dr(e);if(_d(n))return e}function Ud(e,n){if(e==="change")return n}var Ld=!1;if(fn){var bu;if(fn){var Tu="oninput"in document;if(!Tu){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Tu=typeof zd.oninput=="function"}bu=Tu}else bu=!1;Ld=bu&&(!document.documentMode||9<document.documentMode)}function Hd(){yr&&(yr.detachEvent("onpropertychange",Pd),Er=yr=null)}function Pd(e){if(e.propertyName==="value"&&sl(Er)){var n=[];kd(n,Er,e,du(e)),bd(OE,n)}}function DE(e,n,r){e==="focusin"?(Hd(),yr=n,Er=r,yr.attachEvent("onpropertychange",Pd)):e==="focusout"&&Hd()}function IE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Er)}function ME(e,n){if(e==="click")return sl(n)}function xE(e,n){if(e==="input"||e==="change")return sl(n)}function kE(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ct=typeof Object.is=="function"?Object.is:kE;function Sr(e,n){if(Ct(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var r=Object.keys(e),l=Object.keys(n);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var u=r[l];if(!Jo.call(n,u)||!Ct(e[u],n[u]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,n){var r=Bd(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=n&&l>=n)return{node:r,offset:n-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bd(r)}}function qd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Vd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Za(e.document);n instanceof e.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)e=n.contentWindow;else break;n=Za(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var UE=fn&&"documentMode"in document&&11>=document.documentMode,ps=null,Au=null,br=null,wu=!1;function Gd(e,n,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;wu||ps==null||ps!==Za(l)||(l=ps,"selectionStart"in l&&Cu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),br&&Sr(br,l)||(br=l,l=Vl(Au,"onSelect"),0<l.length&&(n=new nl("onSelect","select",null,n,r),e.push({event:n,listeners:l}),n.target=ps)))}function Ri(e,n){var r={};return r[e.toLowerCase()]=n.toLowerCase(),r["Webkit"+e]="webkit"+n,r["Moz"+e]="moz"+n,r}var _s={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionrun:Ri("Transition","TransitionRun"),transitionstart:Ri("Transition","TransitionStart"),transitioncancel:Ri("Transition","TransitionCancel"),transitionend:Ri("Transition","TransitionEnd")},Ru={},Yd={};fn&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Ni(e){if(Ru[e])return Ru[e];if(!_s[e])return e;var n=_s[e],r;for(r in n)if(n.hasOwnProperty(r)&&r in Yd)return Ru[e]=n[r];return e}var Fd=Ni("animationend"),Qd=Ni("animationiteration"),Kd=Ni("animationstart"),LE=Ni("transitionrun"),zE=Ni("transitionstart"),HE=Ni("transitioncancel"),Xd=Ni("transitionend"),Wd=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Gt(e,n){Wd.set(e,n),Ai(n,[e])}var Zd=new WeakMap;function kt(e,n){if(typeof e=="object"&&e!==null){var r=Zd.get(e);return r!==void 0?r:(n={value:e,source:n,stack:dd(n)},Zd.set(e,n),n)}return{value:e,source:n,stack:dd(n)}}var Ut=[],ms=0,Ou=0;function rl(){for(var e=ms,n=Ou=ms=0;n<e;){var r=Ut[n];Ut[n++]=null;var l=Ut[n];Ut[n++]=null;var u=Ut[n];Ut[n++]=null;var f=Ut[n];if(Ut[n++]=null,l!==null&&u!==null){var p=l.pending;p===null?u.next=u:(u.next=p.next,p.next=u),l.pending=u}f!==0&&Jd(r,u,f)}}function al(e,n,r,l){Ut[ms++]=e,Ut[ms++]=n,Ut[ms++]=r,Ut[ms++]=l,Ou|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Du(e,n,r,l){return al(e,n,r,l),ll(e)}function gs(e,n){return al(e,null,null,n),ll(e)}function Jd(e,n,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var u=!1,f=e.return;f!==null;)f.childLanes|=r,l=f.alternate,l!==null&&(l.childLanes|=r),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Tt(r),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[n]:l.push(n),n.lane=r|536870912),f):null}function ll(e){if(50<Qr)throw Qr=0,Lc=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var vs={};function PE(e,n,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,n,r,l){return new PE(e,n,r,l)}function Iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hn(e,n){var r=e.alternate;return r===null?(r=At(e.tag,n,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=n,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,n=e.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function $d(e,n){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,n=r.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,r,l,u,f){var p=0;if(l=e,typeof e=="function")Iu(e)&&(p=1);else if(typeof e=="string")p=jS(e,r,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ft:return e=At(31,r,n,u),e.elementType=ft,e.lanes=f,e;case z:return Oi(r.children,u,f,n);case j:p=8,u|=24;break;case V:return e=At(12,r,n,u|2),e.elementType=V,e.lanes=f,e;case ne:return e=At(13,r,n,u),e.elementType=ne,e.lanes=f,e;case Xe:return e=At(19,r,n,u),e.elementType=Xe,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case se:case te:p=10;break e;case $:p=9;break e;case be:p=11;break e;case et:p=14;break e;case lt:p=16,l=null;break e}p=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=At(p,r,n,u),n.elementType=e,n.type=l,n.lanes=f,n}function Oi(e,n,r,l){return e=At(7,e,l,n),e.lanes=r,e}function Mu(e,n,r){return e=At(6,e,null,n),e.lanes=r,e}function xu(e,n,r){return n=At(4,e.children!==null?e.children:[],e.key,n),n.lanes=r,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ys=[],Es=0,ul=null,cl=0,Lt=[],zt=0,Di=null,dn=1,pn="";function Ii(e,n){ys[Es++]=cl,ys[Es++]=ul,ul=e,cl=n}function ep(e,n,r){Lt[zt++]=dn,Lt[zt++]=pn,Lt[zt++]=Di,Di=e;var l=dn;e=pn;var u=32-Tt(l)-1;l&=~(1<<u),r+=1;var f=32-Tt(n)+u;if(30<f){var p=u-u%5;f=(l&(1<<p)-1).toString(32),l>>=p,u-=p,dn=1<<32-Tt(n)+u|r<<u|l,pn=f+e}else dn=1<<f|r<<u|l,pn=e}function ku(e){e.return!==null&&(Ii(e,1),ep(e,1,0))}function Uu(e){for(;e===ul;)ul=ys[--Es],ys[Es]=null,cl=ys[--Es],ys[Es]=null;for(;e===Di;)Di=Lt[--zt],Lt[zt]=null,pn=Lt[--zt],Lt[zt]=null,dn=Lt[--zt],Lt[zt]=null}var ot=null,Me=null,pe=!1,Mi=null,en=!1,Lu=Error(a(519));function xi(e){var n=Error(a(418,""));throw Ar(kt(n,e)),Lu}function tp(e){var n=e.stateNode,r=e.type,l=e.memoizedProps;switch(n[it]=e,n[ht]=l,r){case"dialog":ue("cancel",n),ue("close",n);break;case"iframe":case"object":case"embed":ue("load",n);break;case"video":case"audio":for(r=0;r<Xr.length;r++)ue(Xr[r],n);break;case"source":ue("error",n);break;case"img":case"image":case"link":ue("error",n),ue("load",n);break;case"details":ue("toggle",n);break;case"input":ue("invalid",n),md(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Wa(n);break;case"select":ue("invalid",n);break;case"textarea":ue("invalid",n),vd(n,l.value,l.defaultValue,l.children),Wa(n)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||l.suppressHydrationWarning===!0||vm(n.textContent,r)?(l.popover!=null&&(ue("beforetoggle",n),ue("toggle",n)),l.onScroll!=null&&ue("scroll",n),l.onScrollEnd!=null&&ue("scrollend",n),l.onClick!=null&&(n.onclick=Gl),n=!0):n=!1,n||xi(e)}function np(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 13:en=!1;return;case 27:case 3:en=!0;return;default:ot=ot.return}}function Tr(e){if(e!==ot)return!1;if(!pe)return np(e),pe=!0,!1;var n=e.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Jc(e.type,e.memoizedProps)),r=!r),r&&Me&&xi(e),np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(r=e.data,r==="/$"){if(n===0){Me=Ft(e.nextSibling);break e}n--}else r!=="$"&&r!=="$!"&&r!=="$?"||n++;e=e.nextSibling}Me=null}}else n===27?(n=Me,ti(e.type)?(e=nf,nf=null,Me=e):Me=n):Me=ot?Ft(e.stateNode.nextSibling):null;return!0}function Cr(){Me=ot=null,pe=!1}function ip(){var e=Mi;return e!==null&&(mt===null?mt=e:mt.push.apply(mt,e),Mi=null),e}function Ar(e){Mi===null?Mi=[e]:Mi.push(e)}var zu=x(null),ki=null,_n=null;function Bn(e,n,r){H(zu,n._currentValue),n._currentValue=r}function mn(e){e._currentValue=zu.current,B(zu)}function Hu(e,n,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===r)break;e=e.return}}function Pu(e,n,r,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var p=u.child;f=f.firstContext;e:for(;f!==null;){var g=f;f=u;for(var v=0;v<n.length;v++)if(g.context===n[v]){f.lanes|=r,g=f.alternate,g!==null&&(g.lanes|=r),Hu(f.return,r,e),l||(p=null);break e}f=g.next}}else if(u.tag===18){if(p=u.return,p===null)throw Error(a(341));p.lanes|=r,f=p.alternate,f!==null&&(f.lanes|=r),Hu(p,r,e),p=null}else p=u.child;if(p!==null)p.return=u;else for(p=u;p!==null;){if(p===e){p=null;break}if(u=p.sibling,u!==null){u.return=p.return,p=u;break}p=p.return}u=p}}function wr(e,n,r,l){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var p=u.alternate;if(p===null)throw Error(a(387));if(p=p.memoizedProps,p!==null){var g=u.type;Ct(u.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(u===St.current){if(p=u.alternate,p===null)throw Error(a(387));p.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(ta):e=[ta])}u=u.return}e!==null&&Pu(n,e,r,l),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ui(e){ki=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return sp(ki,e)}function hl(e,n){return ki===null&&Ui(e),sp(e,n)}function sp(e,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},_n===null){if(e===null)throw Error(a(308));_n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else _n=_n.next=n;return r}var BE=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(r){return r()})}},jE=s.unstable_scheduleCallback,qE=s.unstable_NormalPriority,Pe={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new BE,data:new Map,refCount:0}}function Rr(e){e.refCount--,e.refCount===0&&jE(qE,function(){e.controller.abort()})}var Nr=null,ju=0,Ss=0,bs=null;function VE(e,n){if(Nr===null){var r=Nr=[];ju=0,Ss=Vc(),bs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ju++,n.then(rp,rp),n}function rp(){if(--ju===0&&Nr!==null){bs!==null&&(bs.status="fulfilled");var e=Nr;Nr=null,Ss=0,bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function GE(e,n){var r=[],l={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(l.status="rejected",l.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),l}var ap=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&VE(e,n),ap!==null&&ap(e,n)};var Li=x(null);function qu(){var e=Li.current;return e!==null?e:we.pooledCache}function dl(e,n){n===null?H(Li,Li.current):H(Li,n.pool)}function lp(){var e=qu();return e===null?null:{parent:Pe._currentValue,pool:e}}var Or=Error(a(460)),op=Error(a(474)),pl=Error(a(542)),Vu={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function cp(e,n,r){switch(r=e[r],r===void 0?e.push(n):r!==n&&(n.then(_l,_l),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=l}},function(l){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e}throw Dr=n,Or}}var Dr=null;function fp(){if(Dr===null)throw Error(a(459));var e=Dr;return Dr=null,e}function hp(e){if(e===Or||e===pl)throw Error(a(483))}var jn=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,n,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,n=ll(e),Jd(e,null,r),n}return al(e,l,n,r),ll(e)}function Ir(e,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,rd(e,r)}}function Fu(e,n){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var u=null,f=null;if(r=r.firstBaseUpdate,r!==null){do{var p={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};f===null?u=f=p:f=f.next=p,r=r.next}while(r!==null);f===null?u=f=n:f=f.next=n}else u=f=n;r={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=n:e.next=n,r.lastBaseUpdate=n}var Qu=!1;function Mr(){if(Qu){var e=bs;if(e!==null)throw e}}function xr(e,n,r,l){Qu=!1;var u=e.updateQueue;jn=!1;var f=u.firstBaseUpdate,p=u.lastBaseUpdate,g=u.shared.pending;if(g!==null){u.shared.pending=null;var v=g,w=v.next;v.next=null,p===null?f=w:p.next=w,p=v;var O=e.alternate;O!==null&&(O=O.updateQueue,g=O.lastBaseUpdate,g!==p&&(g===null?O.firstBaseUpdate=w:g.next=w,O.lastBaseUpdate=v))}if(f!==null){var M=u.baseState;p=0,O=w=v=null,g=f;do{var R=g.lane&-536870913,N=R!==g.lane;if(N?(fe&R)===R:(l&R)===R){R!==0&&R===Ss&&(Qu=!0),O!==null&&(O=O.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var W=e,F=g;R=n;var Ee=r;switch(F.tag){case 1:if(W=F.payload,typeof W=="function"){M=W.call(Ee,M,R);break e}M=W;break e;case 3:W.flags=W.flags&-65537|128;case 0:if(W=F.payload,R=typeof W=="function"?W.call(Ee,M,R):W,R==null)break e;M=y({},M,R);break e;case 2:jn=!0}}R=g.callback,R!==null&&(e.flags|=64,N&&(e.flags|=8192),N=u.callbacks,N===null?u.callbacks=[R]:N.push(R))}else N={lane:R,tag:g.tag,payload:g.payload,callback:g.callback,next:null},O===null?(w=O=N,v=M):O=O.next=N,p|=R;if(g=g.next,g===null){if(g=u.shared.pending,g===null)break;N=g,g=N.next,N.next=null,u.lastBaseUpdate=N,u.shared.pending=null}}while(!0);O===null&&(v=M),u.baseState=v,u.firstBaseUpdate=w,u.lastBaseUpdate=O,f===null&&(u.shared.lanes=0),Zn|=p,e.lanes=p,e.memoizedState=M}}function dp(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function pp(e,n){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)dp(r[e],n)}var Ts=x(null),ml=x(0);function _p(e,n){e=Tn,H(ml,e),H(Ts,n),Tn=e|n.baseLanes}function Ku(){H(ml,Tn),H(Ts,Ts.current)}function Xu(){Tn=ml.current,B(Ts),B(ml)}var Gn=0,ie=null,ve=null,ze=null,gl=!1,Cs=!1,zi=!1,vl=0,kr=0,As=null,YE=0;function Ue(){throw Error(a(321))}function Wu(e,n){if(n===null)return!1;for(var r=0;r<n.length&&r<e.length;r++)if(!Ct(e[r],n[r]))return!1;return!0}function Zu(e,n,r,l,u,f){return Gn=f,ie=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Jp:$p,zi=!1,f=r(l,u),zi=!1,Cs&&(f=gp(n,r,l,u)),mp(e),f}function mp(e){D.H=Cl;var n=ve!==null&&ve.next!==null;if(Gn=0,ze=ve=ie=null,gl=!1,kr=0,As=null,n)throw Error(a(300));e===null||Ve||(e=e.dependencies,e!==null&&fl(e)&&(Ve=!0))}function gp(e,n,r,l){ie=e;var u=0;do{if(Cs&&(As=null),kr=0,Cs=!1,25<=u)throw Error(a(301));if(u+=1,ze=ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}D.H=JE,f=n(r,l)}while(Cs);return f}function FE(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Ur(n):n,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ie.flags|=1024),n}function Ju(){var e=vl!==0;return vl=0,e}function $u(e,n,r){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r}function ec(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}Gn=0,ze=ve=ie=null,Cs=!1,kr=vl=0,As=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?ie.memoizedState=ze=e:ze=ze.next=e,ze}function He(){if(ve===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=ze===null?ie.memoizedState:ze.next;if(n!==null)ze=n,ve=e;else{if(e===null)throw ie.alternate===null?Error(a(467)):Error(a(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ze===null?ie.memoizedState=ze=e:ze=ze.next=e}return ze}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ur(e){var n=kr;return kr+=1,As===null&&(As=[]),e=cp(As,e,n),n=ie,(ze===null?n.memoizedState:ze.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Jp:$p),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ur(e);if(e.$$typeof===te)return st(e)}throw Error(a(438,String(e)))}function nc(e){var n=null,r=ie.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var l=ie.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=tc(),ie.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(e),l=0;l<e;l++)r[l]=Un;return n.index++,r}function gn(e,n){return typeof n=="function"?n(e):n}function El(e){var n=He();return ic(n,ve,e)}function ic(e,n,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var p=u.next;u.next=f.next,f.next=p}n.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var g=p=null,v=null,w=n,O=!1;do{var M=w.lane&-536870913;if(M!==w.lane?(fe&M)===M:(Gn&M)===M){var R=w.revertLane;if(R===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),M===Ss&&(O=!0);else if((Gn&R)===R){w=w.next,R===Ss&&(O=!0);continue}else M={lane:0,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=M,p=f):v=v.next=M,ie.lanes|=R,Zn|=R;M=w.action,zi&&r(f,M),f=w.hasEagerState?w.eagerState:r(f,M)}else R={lane:M,revertLane:w.revertLane,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null},v===null?(g=v=R,p=f):v=v.next=R,ie.lanes|=M,Zn|=M;w=w.next}while(w!==null&&w!==n);if(v===null?p=f:v.next=g,!Ct(f,e.memoizedState)&&(Ve=!0,O&&(r=bs,r!==null)))throw r;e.memoizedState=f,e.baseState=p,e.baseQueue=v,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sc(e){var n=He(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,u=r.pending,f=n.memoizedState;if(u!==null){r.pending=null;var p=u=u.next;do f=e(f,p.action),p=p.next;while(p!==u);Ct(f,n.memoizedState)||(Ve=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),r.lastRenderedState=f}return[f,l]}function vp(e,n,r){var l=ie,u=He(),f=pe;if(f){if(r===void 0)throw Error(a(407));r=r()}else r=n();var p=!Ct((ve||u).memoizedState,r);p&&(u.memoizedState=r,Ve=!0),u=u.queue;var g=Sp.bind(null,l,u,e);if(Lr(2048,8,g,[e]),u.getSnapshot!==n||p||ze!==null&&ze.memoizedState.tag&1){if(l.flags|=2048,ws(9,Sl(),Ep.bind(null,l,u,r,n),null),we===null)throw Error(a(349));f||(Gn&124)!==0||yp(l,n,r)}return r}function yp(e,n,r){e.flags|=16384,e={getSnapshot:n,value:r},n=ie.updateQueue,n===null?(n=tc(),ie.updateQueue=n,n.stores=[e]):(r=n.stores,r===null?n.stores=[e]:r.push(e))}function Ep(e,n,r,l){n.value=r,n.getSnapshot=l,bp(n)&&Tp(e)}function Sp(e,n,r){return r(function(){bp(n)&&Tp(e)})}function bp(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!Ct(e,r)}catch{return!0}}function Tp(e){var n=gs(e,2);n!==null&&Dt(n,e,2)}function rc(e){var n=pt();if(typeof e=="function"){var r=e;if(e=r(),zi){zn(!0);try{r()}finally{zn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:e},n}function Cp(e,n,r,l){return e.baseState=r,ic(e,ve,typeof l=="function"?l:gn)}function QE(e,n,r,l,u){if(Tl(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){f.listeners.push(p)}};D.T!==null?r(!0):f.isTransition=!1,l(f),r=n.pending,r===null?(f.next=n.pending=f,Ap(n,f)):(f.next=r.next,n.pending=r.next=f)}}function Ap(e,n){var r=n.action,l=n.payload,u=e.state;if(n.isTransition){var f=D.T,p={};D.T=p;try{var g=r(u,l),v=D.S;v!==null&&v(p,g),wp(e,n,g)}catch(w){ac(e,n,w)}finally{D.T=f}}else try{f=r(u,l),wp(e,n,f)}catch(w){ac(e,n,w)}}function wp(e,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Rp(e,n,l)},function(l){return ac(e,n,l)}):Rp(e,n,r)}function Rp(e,n,r){n.status="fulfilled",n.value=r,Np(n),e.state=r,n=e.pending,n!==null&&(r=n.next,r===n?e.pending=null:(r=r.next,n.next=r,Ap(e,r)))}function ac(e,n,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=r,Np(n),n=n.next;while(n!==l)}e.action=null}function Np(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Op(e,n){return n}function Dp(e,n){if(pe){var r=we.formState;if(r!==null){e:{var l=ie;if(pe){if(Me){t:{for(var u=Me,f=en;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ft(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Me=Ft(u.nextSibling),l=u.data==="F!";break e}}xi(l)}l=!1}l&&(n=r[0])}}return r=pt(),r.memoizedState=r.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Op,lastRenderedState:n},r.queue=l,r=Xp.bind(null,ie,l),l.dispatch=r,l=rc(!1),f=fc.bind(null,ie,!1,l.queue),l=pt(),u={state:n,dispatch:null,action:e,pending:null},l.queue=u,r=QE.bind(null,ie,u,f,r),u.dispatch=r,l.memoizedState=e,[n,r,!1]}function Ip(e){var n=He();return Mp(n,ve,e)}function Mp(e,n,r){if(n=ic(e,n,Op)[0],e=El(gn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ur(n)}catch(p){throw p===Or?pl:p}else l=n;n=He();var u=n.queue,f=u.dispatch;return r!==n.memoizedState&&(ie.flags|=2048,ws(9,Sl(),KE.bind(null,u,r),null)),[l,f,e]}function KE(e,n){e.action=n}function xp(e){var n=He(),r=ve;if(r!==null)return Mp(n,r,e);He(),n=n.memoizedState,r=He();var l=r.queue.dispatch;return r.memoizedState=e,[n,l,!1]}function ws(e,n,r,l){return e={tag:e,create:r,deps:l,inst:n,next:null},n=ie.updateQueue,n===null&&(n=tc(),ie.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,n.lastEffect=e),e}function Sl(){return{destroy:void 0,resource:void 0}}function kp(){return He().memoizedState}function bl(e,n,r,l){var u=pt();l=l===void 0?null:l,ie.flags|=e,u.memoizedState=ws(1|n,Sl(),r,l)}function Lr(e,n,r,l){var u=He();l=l===void 0?null:l;var f=u.memoizedState.inst;ve!==null&&l!==null&&Wu(l,ve.memoizedState.deps)?u.memoizedState=ws(n,f,r,l):(ie.flags|=e,u.memoizedState=ws(1|n,f,r,l))}function Up(e,n){bl(8390656,8,e,n)}function Lp(e,n){Lr(2048,8,e,n)}function zp(e,n){return Lr(4,2,e,n)}function Hp(e,n){return Lr(4,4,e,n)}function Pp(e,n){if(typeof n=="function"){e=e();var r=n(e);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bp(e,n,r){r=r!=null?r.concat([e]):null,Lr(4,4,Pp.bind(null,n,e),r)}function lc(){}function jp(e,n){var r=He();n=n===void 0?null:n;var l=r.memoizedState;return n!==null&&Wu(n,l[1])?l[0]:(r.memoizedState=[e,n],e)}function qp(e,n){var r=He();n=n===void 0?null:n;var l=r.memoizedState;if(n!==null&&Wu(n,l[1]))return l[0];if(l=e(),zi){zn(!0);try{e()}finally{zn(!1)}}return r.memoizedState=[l,n],l}function oc(e,n,r){return r===void 0||(Gn&1073741824)!==0?e.memoizedState=n:(e.memoizedState=r,e=Y_(),ie.lanes|=e,Zn|=e,r)}function Vp(e,n,r,l){return Ct(r,n)?r:Ts.current!==null?(e=oc(e,r,l),Ct(e,n)||(Ve=!0),e):(Gn&42)===0?(Ve=!0,e.memoizedState=r):(e=Y_(),ie.lanes|=e,Zn|=e,n)}function Gp(e,n,r,l,u){var f=P.p;P.p=f!==0&&8>f?f:8;var p=D.T,g={};D.T=g,fc(e,!1,n,r);try{var v=u(),w=D.S;if(w!==null&&w(g,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var O=GE(v,l);zr(e,n,O,Ot(e))}else zr(e,n,l,Ot(e))}catch(M){zr(e,n,{then:function(){},status:"rejected",reason:M},Ot())}finally{P.p=f,D.T=p}}function XE(){}function uc(e,n,r,l){if(e.tag!==5)throw Error(a(476));var u=Yp(e).queue;Gp(e,u,n,K,r===null?XE:function(){return Fp(e),r(l)})}function Yp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:K},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:gn,lastRenderedState:r},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Fp(e){var n=Yp(e).next.queue;zr(e,n,{},Ot())}function cc(){return st(ta)}function Qp(){return He().memoizedState}function Kp(){return He().memoizedState}function WE(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=Ot();e=qn(r);var l=Vn(n,e,r);l!==null&&(Dt(l,n,r),Ir(l,n,r)),n={cache:Bu()},e.payload=n;return}n=n.return}}function ZE(e,n,r){var l=Ot();r={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Wp(n,r):(r=Du(e,n,r,l),r!==null&&(Dt(r,e,l),Zp(r,n,l)))}function Xp(e,n,r){var l=Ot();zr(e,n,r,l)}function zr(e,n,r,l){var u={lane:l,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Wp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var p=n.lastRenderedState,g=f(p,r);if(u.hasEagerState=!0,u.eagerState=g,Ct(g,p))return al(e,n,u,0),we===null&&rl(),!1}catch{}finally{}if(r=Du(e,n,u,l),r!==null)return Dt(r,e,l),Zp(r,n,l),!0}return!1}function fc(e,n,r,l){if(l={lane:2,revertLane:Vc(),action:l,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(a(479))}else n=Du(e,r,l,2),n!==null&&Dt(n,e,2)}function Tl(e){var n=e.alternate;return e===ie||n!==null&&n===ie}function Wp(e,n){Cs=gl=!0;var r=e.pending;r===null?n.next=n:(n.next=r.next,r.next=n),e.pending=n}function Zp(e,n,r){if((r&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,r|=l,n.lanes=r,rd(e,r)}}var Cl={readContext:st,use:yl,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue},Jp={readContext:st,use:yl,useCallback:function(e,n){return pt().memoizedState=[e,n===void 0?null:n],e},useContext:st,useEffect:Up,useImperativeHandle:function(e,n,r){r=r!=null?r.concat([e]):null,bl(4194308,4,Pp.bind(null,n,e),r)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var r=pt();n=n===void 0?null:n;var l=e();if(zi){zn(!0);try{e()}finally{zn(!1)}}return r.memoizedState=[l,n],l},useReducer:function(e,n,r){var l=pt();if(r!==void 0){var u=r(n);if(zi){zn(!0);try{r(n)}finally{zn(!1)}}}else u=n;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=ZE.bind(null,ie,e),[l.memoizedState,e]},useRef:function(e){var n=pt();return e={current:e},n.memoizedState=e},useState:function(e){e=rc(e);var n=e.queue,r=Xp.bind(null,ie,n);return n.dispatch=r,[e.memoizedState,r]},useDebugValue:lc,useDeferredValue:function(e,n){var r=pt();return oc(r,e,n)},useTransition:function(){var e=rc(!1);return e=Gp.bind(null,ie,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,r){var l=ie,u=pt();if(pe){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),we===null)throw Error(a(349));(fe&124)!==0||yp(l,n,r)}u.memoizedState=r;var f={value:r,getSnapshot:n};return u.queue=f,Up(Sp.bind(null,l,f,e),[e]),l.flags|=2048,ws(9,Sl(),Ep.bind(null,l,f,r,n),null),r},useId:function(){var e=pt(),n=we.identifierPrefix;if(pe){var r=pn,l=dn;r=(l&~(1<<32-Tt(l)-1)).toString(32)+r,n="«"+n+"R"+r,r=vl++,0<r&&(n+="H"+r.toString(32)),n+="»"}else r=YE++,n="«"+n+"r"+r.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:cc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e){var n=pt();n.memoizedState=n.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=fc.bind(null,ie,!0,r),r.dispatch=n,[e,n]},useMemoCache:nc,useCacheRefresh:function(){return pt().memoizedState=WE.bind(null,ie)}},$p={readContext:st,use:yl,useCallback:jp,useContext:st,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:zp,useLayoutEffect:Hp,useMemo:qp,useReducer:El,useRef:kp,useState:function(){return El(gn)},useDebugValue:lc,useDeferredValue:function(e,n){var r=He();return Vp(r,ve.memoizedState,e,n)},useTransition:function(){var e=El(gn)[0],n=He().memoizedState;return[typeof e=="boolean"?e:Ur(e),n]},useSyncExternalStore:vp,useId:Qp,useHostTransitionStatus:cc,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,n){var r=He();return Cp(r,ve,e,n)},useMemoCache:nc,useCacheRefresh:Kp},JE={readContext:st,use:yl,useCallback:jp,useContext:st,useEffect:Lp,useImperativeHandle:Bp,useInsertionEffect:zp,useLayoutEffect:Hp,useMemo:qp,useReducer:sc,useRef:kp,useState:function(){return sc(gn)},useDebugValue:lc,useDeferredValue:function(e,n){var r=He();return ve===null?oc(r,e,n):Vp(r,ve.memoizedState,e,n)},useTransition:function(){var e=sc(gn)[0],n=He().memoizedState;return[typeof e=="boolean"?e:Ur(e),n]},useSyncExternalStore:vp,useId:Qp,useHostTransitionStatus:cc,useFormState:xp,useActionState:xp,useOptimistic:function(e,n){var r=He();return ve!==null?Cp(r,ve,e,n):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:nc,useCacheRefresh:Kp},Rs=null,Hr=0;function Al(e){var n=Hr;return Hr+=1,Rs===null&&(Rs=[]),cp(Rs,e,n)}function Pr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function wl(e,n){throw n.$$typeof===E?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function e_(e){var n=e._init;return n(e._payload)}function t_(e){function n(C,T){if(e){var A=C.deletions;A===null?(C.deletions=[T],C.flags|=16):A.push(T)}}function r(C,T){if(!e)return null;for(;T!==null;)n(C,T),T=T.sibling;return null}function l(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function u(C,T){return C=hn(C,T),C.index=0,C.sibling=null,C}function f(C,T,A){return C.index=A,e?(A=C.alternate,A!==null?(A=A.index,A<T?(C.flags|=67108866,T):A):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function p(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function g(C,T,A,I){return T===null||T.tag!==6?(T=Mu(A,C.mode,I),T.return=C,T):(T=u(T,A),T.return=C,T)}function v(C,T,A,I){var q=A.type;return q===z?O(C,T,A.props.children,I,A.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===lt&&e_(q)===T.type)?(T=u(T,A.props),Pr(T,A),T.return=C,T):(T=ol(A.type,A.key,A.props,null,C.mode,I),Pr(T,A),T.return=C,T)}function w(C,T,A,I){return T===null||T.tag!==4||T.stateNode.containerInfo!==A.containerInfo||T.stateNode.implementation!==A.implementation?(T=xu(A,C.mode,I),T.return=C,T):(T=u(T,A.children||[]),T.return=C,T)}function O(C,T,A,I,q){return T===null||T.tag!==7?(T=Oi(A,C.mode,I,q),T.return=C,T):(T=u(T,A),T.return=C,T)}function M(C,T,A){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=Mu(""+T,C.mode,A),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case S:return A=ol(T.type,T.key,T.props,null,C.mode,A),Pr(A,T),A.return=C,A;case k:return T=xu(T,C.mode,A),T.return=C,T;case lt:var I=T._init;return T=I(T._payload),M(C,T,A)}if(nt(T)||tt(T))return T=Oi(T,C.mode,A,null),T.return=C,T;if(typeof T.then=="function")return M(C,Al(T),A);if(T.$$typeof===te)return M(C,hl(C,T),A);wl(C,T)}return null}function R(C,T,A,I){var q=T!==null?T.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return q!==null?null:g(C,T,""+A,I);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return A.key===q?v(C,T,A,I):null;case k:return A.key===q?w(C,T,A,I):null;case lt:return q=A._init,A=q(A._payload),R(C,T,A,I)}if(nt(A)||tt(A))return q!==null?null:O(C,T,A,I,null);if(typeof A.then=="function")return R(C,T,Al(A),I);if(A.$$typeof===te)return R(C,T,hl(C,A),I);wl(C,A)}return null}function N(C,T,A,I,q){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return C=C.get(A)||null,g(T,C,""+I,q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case S:return C=C.get(I.key===null?A:I.key)||null,v(T,C,I,q);case k:return C=C.get(I.key===null?A:I.key)||null,w(T,C,I,q);case lt:var re=I._init;return I=re(I._payload),N(C,T,A,I,q)}if(nt(I)||tt(I))return C=C.get(A)||null,O(T,C,I,q,null);if(typeof I.then=="function")return N(C,T,A,Al(I),q);if(I.$$typeof===te)return N(C,T,A,hl(T,I),q);wl(T,I)}return null}function W(C,T,A,I){for(var q=null,re=null,G=T,Q=T=0,Ye=null;G!==null&&Q<A.length;Q++){G.index>Q?(Ye=G,G=null):Ye=G.sibling;var de=R(C,G,A[Q],I);if(de===null){G===null&&(G=Ye);break}e&&G&&de.alternate===null&&n(C,G),T=f(de,T,Q),re===null?q=de:re.sibling=de,re=de,G=Ye}if(Q===A.length)return r(C,G),pe&&Ii(C,Q),q;if(G===null){for(;Q<A.length;Q++)G=M(C,A[Q],I),G!==null&&(T=f(G,T,Q),re===null?q=G:re.sibling=G,re=G);return pe&&Ii(C,Q),q}for(G=l(G);Q<A.length;Q++)Ye=N(G,C,Q,A[Q],I),Ye!==null&&(e&&Ye.alternate!==null&&G.delete(Ye.key===null?Q:Ye.key),T=f(Ye,T,Q),re===null?q=Ye:re.sibling=Ye,re=Ye);return e&&G.forEach(function(ai){return n(C,ai)}),pe&&Ii(C,Q),q}function F(C,T,A,I){if(A==null)throw Error(a(151));for(var q=null,re=null,G=T,Q=T=0,Ye=null,de=A.next();G!==null&&!de.done;Q++,de=A.next()){G.index>Q?(Ye=G,G=null):Ye=G.sibling;var ai=R(C,G,de.value,I);if(ai===null){G===null&&(G=Ye);break}e&&G&&ai.alternate===null&&n(C,G),T=f(ai,T,Q),re===null?q=ai:re.sibling=ai,re=ai,G=Ye}if(de.done)return r(C,G),pe&&Ii(C,Q),q;if(G===null){for(;!de.done;Q++,de=A.next())de=M(C,de.value,I),de!==null&&(T=f(de,T,Q),re===null?q=de:re.sibling=de,re=de);return pe&&Ii(C,Q),q}for(G=l(G);!de.done;Q++,de=A.next())de=N(G,C,Q,de.value,I),de!==null&&(e&&de.alternate!==null&&G.delete(de.key===null?Q:de.key),T=f(de,T,Q),re===null?q=de:re.sibling=de,re=de);return e&&G.forEach(function($S){return n(C,$S)}),pe&&Ii(C,Q),q}function Ee(C,T,A,I){if(typeof A=="object"&&A!==null&&A.type===z&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case S:e:{for(var q=A.key;T!==null;){if(T.key===q){if(q=A.type,q===z){if(T.tag===7){r(C,T.sibling),I=u(T,A.props.children),I.return=C,C=I;break e}}else if(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===lt&&e_(q)===T.type){r(C,T.sibling),I=u(T,A.props),Pr(I,A),I.return=C,C=I;break e}r(C,T);break}else n(C,T);T=T.sibling}A.type===z?(I=Oi(A.props.children,C.mode,I,A.key),I.return=C,C=I):(I=ol(A.type,A.key,A.props,null,C.mode,I),Pr(I,A),I.return=C,C=I)}return p(C);case k:e:{for(q=A.key;T!==null;){if(T.key===q)if(T.tag===4&&T.stateNode.containerInfo===A.containerInfo&&T.stateNode.implementation===A.implementation){r(C,T.sibling),I=u(T,A.children||[]),I.return=C,C=I;break e}else{r(C,T);break}else n(C,T);T=T.sibling}I=xu(A,C.mode,I),I.return=C,C=I}return p(C);case lt:return q=A._init,A=q(A._payload),Ee(C,T,A,I)}if(nt(A))return W(C,T,A,I);if(tt(A)){if(q=tt(A),typeof q!="function")throw Error(a(150));return A=q.call(A),F(C,T,A,I)}if(typeof A.then=="function")return Ee(C,T,Al(A),I);if(A.$$typeof===te)return Ee(C,T,hl(C,A),I);wl(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,T!==null&&T.tag===6?(r(C,T.sibling),I=u(T,A),I.return=C,C=I):(r(C,T),I=Mu(A,C.mode,I),I.return=C,C=I),p(C)):r(C,T)}return function(C,T,A,I){try{Hr=0;var q=Ee(C,T,A,I);return Rs=null,q}catch(G){if(G===Or||G===pl)throw G;var re=At(29,G,null,C.mode);return re.lanes=I,re.return=C,re}finally{}}}var Ns=t_(!0),n_=t_(!1),Ht=x(null),tn=null;function Yn(e){var n=e.alternate;H(Be,Be.current&1),H(Ht,e),tn===null&&(n===null||Ts.current!==null||n.memoizedState!==null)&&(tn=e)}function i_(e){if(e.tag===22){if(H(Be,Be.current),H(Ht,e),tn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(tn=e)}}else Fn()}function Fn(){H(Be,Be.current),H(Ht,Ht.current)}function vn(e){B(Ht),tn===e&&(tn=null),B(Be)}var Be=x(0);function Rl(e){for(var n=e;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||tf(r)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function hc(e,n,r,l){n=e.memoizedState,r=r(l,n),r=r==null?n:y({},n,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var dc={enqueueSetState:function(e,n,r){e=e._reactInternals;var l=Ot(),u=qn(l);u.payload=n,r!=null&&(u.callback=r),n=Vn(e,u,l),n!==null&&(Dt(n,e,l),Ir(n,e,l))},enqueueReplaceState:function(e,n,r){e=e._reactInternals;var l=Ot(),u=qn(l);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Vn(e,u,l),n!==null&&(Dt(n,e,l),Ir(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var r=Ot(),l=qn(r);l.tag=2,n!=null&&(l.callback=n),n=Vn(e,l,r),n!==null&&(Dt(n,e,r),Ir(n,e,r))}};function s_(e,n,r,l,u,f,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,p):n.prototype&&n.prototype.isPureReactComponent?!Sr(r,l)||!Sr(u,f):!0}function r_(e,n,r,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,l),n.state!==e&&dc.enqueueReplaceState(n,n.state,null)}function Hi(e,n){var r=n;if("ref"in n){r={};for(var l in n)l!=="ref"&&(r[l]=n[l])}if(e=e.defaultProps){r===n&&(r=y({},r));for(var u in e)r[u]===void 0&&(r[u]=e[u])}return r}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function a_(e){Nl(e)}function l_(e){console.error(e)}function o_(e){Nl(e)}function Ol(e,n){try{var r=e.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function u_(e,n,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pc(e,n,r){return r=qn(r),r.tag=3,r.payload={element:null},r.callback=function(){Ol(e,n)},r}function c_(e){return e=qn(e),e.tag=3,e}function f_(e,n,r,l){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){u_(n,r,l)}}var p=r.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){u_(n,r,l),typeof u!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function $E(e,n,r,l,u){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=r.alternate,n!==null&&wr(n,r,u,!0),r=Ht.current,r!==null){switch(r.tag){case 13:return tn===null?Hc():r.alternate===null&&xe===0&&(xe=3),r.flags&=-257,r.flags|=65536,r.lanes=u,l===Vu?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([l]):n.add(l),Bc(e,l,u)),!1;case 22:return r.flags|=65536,l===Vu?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([l]):r.add(l)),Bc(e,l,u)),!1}throw Error(a(435,r.tag))}return Bc(e,l,u),Hc(),!1}if(pe)return n=Ht.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,l!==Lu&&(e=Error(a(422),{cause:l}),Ar(kt(e,r)))):(l!==Lu&&(n=Error(a(423),{cause:l}),Ar(kt(n,r))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=kt(l,r),u=pc(e.stateNode,l,u),Fu(e,u),xe!==4&&(xe=2)),!1;var f=Error(a(520),{cause:l});if(f=kt(f,r),Fr===null?Fr=[f]:Fr.push(f),xe!==4&&(xe=2),n===null)return!0;l=kt(l,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,e=u&-u,r.lanes|=e,e=pc(r.stateNode,l,e),Fu(r,e),!1;case 1:if(n=r.type,f=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Jn===null||!Jn.has(f))))return r.flags|=65536,u&=-u,r.lanes|=u,u=c_(u),f_(u,e,r,l),Fu(r,u),!1}r=r.return}while(r!==null);return!1}var h_=Error(a(461)),Ve=!1;function We(e,n,r,l){n.child=e===null?n_(n,null,r,l):Ns(n,e.child,r,l)}function d_(e,n,r,l,u){r=r.render;var f=n.ref;if("ref"in l){var p={};for(var g in l)g!=="ref"&&(p[g]=l[g])}else p=l;return Ui(n),l=Zu(e,n,r,p,f,u),g=Ju(),e!==null&&!Ve?($u(e,n,u),yn(e,n,u)):(pe&&g&&ku(n),n.flags|=1,We(e,n,l,u),n.child)}function p_(e,n,r,l,u){if(e===null){var f=r.type;return typeof f=="function"&&!Iu(f)&&f.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=f,__(e,n,f,l,u)):(e=ol(r.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!bc(e,u)){var p=f.memoizedProps;if(r=r.compare,r=r!==null?r:Sr,r(p,l)&&e.ref===n.ref)return yn(e,n,u)}return n.flags|=1,e=hn(f,l),e.ref=n.ref,e.return=n,n.child=e}function __(e,n,r,l,u){if(e!==null){var f=e.memoizedProps;if(Sr(f,l)&&e.ref===n.ref)if(Ve=!1,n.pendingProps=l=f,bc(e,u))(e.flags&131072)!==0&&(Ve=!0);else return n.lanes=e.lanes,yn(e,n,u)}return _c(e,n,r,l,u)}function m_(e,n,r){var l=n.pendingProps,u=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((n.flags&128)!==0){if(l=f!==null?f.baseLanes|r:r,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~l}else n.childLanes=0,n.child=null;return g_(e,n,l,r)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&dl(n,f!==null?f.cachePool:null),f!==null?_p(n,f):Ku(),i_(n);else return n.lanes=n.childLanes=536870912,g_(e,n,f!==null?f.baseLanes|r:r,r)}else f!==null?(dl(n,f.cachePool),_p(n,f),Fn(),n.memoizedState=null):(e!==null&&dl(n,null),Ku(),Fn());return We(e,n,u,r),n.child}function g_(e,n,r,l){var u=qu();return u=u===null?null:{parent:Pe._currentValue,pool:u},n.memoizedState={baseLanes:r,cachePool:u},e!==null&&dl(n,null),Ku(),i_(n),e!==null&&wr(e,n,l,!0),null}function Dl(e,n){var r=n.ref;if(r===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(n.flags|=4194816)}}function _c(e,n,r,l,u){return Ui(n),r=Zu(e,n,r,l,void 0,u),l=Ju(),e!==null&&!Ve?($u(e,n,u),yn(e,n,u)):(pe&&l&&ku(n),n.flags|=1,We(e,n,r,u),n.child)}function v_(e,n,r,l,u,f){return Ui(n),n.updateQueue=null,r=gp(n,l,r,u),mp(e),l=Ju(),e!==null&&!Ve?($u(e,n,f),yn(e,n,f)):(pe&&l&&ku(n),n.flags|=1,We(e,n,r,f),n.child)}function y_(e,n,r,l,u){if(Ui(n),n.stateNode===null){var f=vs,p=r.contextType;typeof p=="object"&&p!==null&&(f=st(p)),f=new r(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=dc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Gu(n),p=r.contextType,f.context=typeof p=="object"&&p!==null?st(p):vs,f.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(hc(n,r,p,l),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(p=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),p!==f.state&&dc.enqueueReplaceState(f,f.state,null),xr(n,l,f,u),Mr(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var g=n.memoizedProps,v=Hi(r,g);f.props=v;var w=f.context,O=r.contextType;p=vs,typeof O=="object"&&O!==null&&(p=st(O));var M=r.getDerivedStateFromProps;O=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g||w!==p)&&r_(n,f,l,p),jn=!1;var R=n.memoizedState;f.state=R,xr(n,l,f,u),Mr(),w=n.memoizedState,g||R!==w||jn?(typeof M=="function"&&(hc(n,r,M,l),w=n.memoizedState),(v=jn||s_(n,r,v,l,R,w,p))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=w),f.props=l,f.state=w,f.context=p,l=v):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Yu(e,n),p=n.memoizedProps,O=Hi(r,p),f.props=O,M=n.pendingProps,R=f.context,w=r.contextType,v=vs,typeof w=="object"&&w!==null&&(v=st(w)),g=r.getDerivedStateFromProps,(w=typeof g=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(p!==M||R!==v)&&r_(n,f,l,v),jn=!1,R=n.memoizedState,f.state=R,xr(n,l,f,u),Mr();var N=n.memoizedState;p!==M||R!==N||jn||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof g=="function"&&(hc(n,r,g,l),N=n.memoizedState),(O=jn||s_(n,r,O,l,R,N,v)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(w||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,N,v),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,N,v)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=N),f.props=l,f.state=N,f.context=v,l=O):(typeof f.componentDidUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&R===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,Dl(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=Ns(n,e.child,null,u),n.child=Ns(n,null,r,u)):We(e,n,r,u),n.memoizedState=f.state,e=n.child):e=yn(e,n,u),e}function E_(e,n,r,l){return Cr(),n.flags|=256,We(e,n,r,l),n.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gc(e){return{baseLanes:e,cachePool:lp()}}function vc(e,n,r){return e=e!==null?e.childLanes&~r:0,n&&(e|=Pt),e}function S_(e,n,r){var l=n.pendingProps,u=!1,f=(n.flags&128)!==0,p;if((p=f)||(p=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),p&&(u=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(pe){if(u?Yn(n):Fn(),pe){var g=Me,v;if(v=g){e:{for(v=g,g=en;v.nodeType!==8;){if(!g){g=null;break e}if(v=Ft(v.nextSibling),v===null){g=null;break e}}g=v}g!==null?(n.memoizedState={dehydrated:g,treeContext:Di!==null?{id:dn,overflow:pn}:null,retryLane:536870912,hydrationErrors:null},v=At(18,null,null,0),v.stateNode=g,v.return=n,n.child=v,ot=n,Me=null,v=!0):v=!1}v||xi(n)}if(g=n.memoizedState,g!==null&&(g=g.dehydrated,g!==null))return tf(g)?n.lanes=32:n.lanes=536870912,null;vn(n)}return g=l.children,l=l.fallback,u?(Fn(),u=n.mode,g=Il({mode:"hidden",children:g},u),l=Oi(l,u,r,null),g.return=n,l.return=n,g.sibling=l,n.child=g,u=n.child,u.memoizedState=gc(r),u.childLanes=vc(e,p,r),n.memoizedState=mc,l):(Yn(n),yc(n,g))}if(v=e.memoizedState,v!==null&&(g=v.dehydrated,g!==null)){if(f)n.flags&256?(Yn(n),n.flags&=-257,n=Ec(e,n,r)):n.memoizedState!==null?(Fn(),n.child=e.child,n.flags|=128,n=null):(Fn(),u=l.fallback,g=n.mode,l=Il({mode:"visible",children:l.children},g),u=Oi(u,g,r,null),u.flags|=2,l.return=n,u.return=n,l.sibling=u,n.child=l,Ns(n,e.child,null,r),l=n.child,l.memoizedState=gc(r),l.childLanes=vc(e,p,r),n.memoizedState=mc,n=u);else if(Yn(n),tf(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var w=p.dgst;p=w,l=Error(a(419)),l.stack="",l.digest=p,Ar({value:l,source:null,stack:null}),n=Ec(e,n,r)}else if(Ve||wr(e,n,r,!1),p=(r&e.childLanes)!==0,Ve||p){if(p=we,p!==null&&(l=r&-r,l=(l&42)!==0?1:nu(l),l=(l&(p.suspendedLanes|r))!==0?0:l,l!==0&&l!==v.retryLane))throw v.retryLane=l,gs(e,l),Dt(p,e,l),h_;g.data==="$?"||Hc(),n=Ec(e,n,r)}else g.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Me=Ft(g.nextSibling),ot=n,pe=!0,Mi=null,en=!1,e!==null&&(Lt[zt++]=dn,Lt[zt++]=pn,Lt[zt++]=Di,dn=e.id,pn=e.overflow,Di=n),n=yc(n,l.children),n.flags|=4096);return n}return u?(Fn(),u=l.fallback,g=n.mode,v=e.child,w=v.sibling,l=hn(v,{mode:"hidden",children:l.children}),l.subtreeFlags=v.subtreeFlags&65011712,w!==null?u=hn(w,u):(u=Oi(u,g,r,null),u.flags|=2),u.return=n,l.return=n,l.sibling=u,n.child=l,l=u,u=n.child,g=e.child.memoizedState,g===null?g=gc(r):(v=g.cachePool,v!==null?(w=Pe._currentValue,v=v.parent!==w?{parent:w,pool:w}:v):v=lp(),g={baseLanes:g.baseLanes|r,cachePool:v}),u.memoizedState=g,u.childLanes=vc(e,p,r),n.memoizedState=mc,l):(Yn(n),r=e.child,e=r.sibling,r=hn(r,{mode:"visible",children:l.children}),r.return=n,r.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=r,n.memoizedState=null,r)}function yc(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=At(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ec(e,n,r){return Ns(n,e.child,null,r),e=yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function b_(e,n,r){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Hu(e.return,n,r)}function Sc(e,n,r,l,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=r,f.tailMode=u)}function T_(e,n,r){var l=n.pendingProps,u=l.revealOrder,f=l.tail;if(We(e,n,l.children,r),l=Be.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b_(e,r,n);else if(e.tag===19)b_(e,r,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(H(Be,l),u){case"forwards":for(r=n.child,u=null;r!==null;)e=r.alternate,e!==null&&Rl(e)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Sc(n,!1,u,r,f);break;case"backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=r,r=u,u=e}Sc(n,!0,r,null,f);break;case"together":Sc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yn(e,n,r){if(e!==null&&(n.dependencies=e.dependencies),Zn|=n.lanes,(r&n.childLanes)===0)if(e!==null){if(wr(e,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,r=hn(e,e.pendingProps),n.child=r,r.return=n;e.sibling!==null;)e=e.sibling,r=r.sibling=hn(e,e.pendingProps),r.return=n;r.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function eS(e,n,r){switch(n.tag){case 3:Oe(n,n.stateNode.containerInfo),Bn(n,Pe,e.memoizedState.cache),Cr();break;case 27:case 5:Zo(n);break;case 4:Oe(n,n.stateNode.containerInfo);break;case 10:Bn(n,n.type,n.memoizedProps.value);break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Yn(n),n.flags|=128,null):(r&n.child.childLanes)!==0?S_(e,n,r):(Yn(n),e=yn(e,n,r),e!==null?e.sibling:null);Yn(n);break;case 19:var u=(e.flags&128)!==0;if(l=(r&n.childLanes)!==0,l||(wr(e,n,r,!1),l=(r&n.childLanes)!==0),u){if(l)return T_(e,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),H(Be,Be.current),l)break;return null;case 22:case 23:return n.lanes=0,m_(e,n,r);case 24:Bn(n,Pe,e.memoizedState.cache)}return yn(e,n,r)}function C_(e,n,r){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ve=!0;else{if(!bc(e,r)&&(n.flags&128)===0)return Ve=!1,eS(e,n,r);Ve=(e.flags&131072)!==0}else Ve=!1,pe&&(n.flags&1048576)!==0&&ep(n,cl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var l=n.elementType,u=l._init;if(l=u(l._payload),n.type=l,typeof l=="function")Iu(l)?(e=Hi(l,e),n.tag=1,n=y_(null,n,l,e,r)):(n.tag=0,n=_c(null,n,l,e,r));else{if(l!=null){if(u=l.$$typeof,u===be){n.tag=11,n=d_(null,n,l,e,r);break e}else if(u===et){n.tag=14,n=p_(null,n,l,e,r);break e}}throw n=Ti(l)||l,Error(a(306,n,""))}}return n;case 0:return _c(e,n,n.type,n.pendingProps,r);case 1:return l=n.type,u=Hi(l,n.pendingProps),y_(e,n,l,u,r);case 3:e:{if(Oe(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;u=f.element,Yu(e,n),xr(n,l,null,r);var p=n.memoizedState;if(l=p.cache,Bn(n,Pe,l),l!==f.cache&&Pu(n,[Pe],r,!0),Mr(),l=p.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=E_(e,n,l,r);break e}else if(l!==u){u=kt(Error(a(424)),n),Ar(u),n=E_(e,n,l,r);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Me=Ft(e.firstChild),ot=n,pe=!0,Mi=null,en=!0,r=n_(n,null,l,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Cr(),l===u){n=yn(e,n,r);break e}We(e,n,l,r)}n=n.child}return n;case 26:return Dl(e,n),e===null?(r=Nm(n.type,null,n.pendingProps,null))?n.memoizedState=r:pe||(r=n.type,e=n.pendingProps,l=Yl(J.current).createElement(r),l[it]=n,l[ht]=e,Je(l,r,e),qe(l),n.stateNode=l):n.memoizedState=Nm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zo(n),e===null&&pe&&(l=n.stateNode=Am(n.type,n.pendingProps,J.current),ot=n,en=!0,u=Me,ti(n.type)?(nf=u,Me=Ft(l.firstChild)):Me=u),We(e,n,n.pendingProps.children,r),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&pe&&((u=l=Me)&&(l=NS(l,n.type,n.pendingProps,en),l!==null?(n.stateNode=l,ot=n,Me=Ft(l.firstChild),en=!1,u=!0):u=!1),u||xi(n)),Zo(n),u=n.type,f=n.pendingProps,p=e!==null?e.memoizedProps:null,l=f.children,Jc(u,f)?l=null:p!==null&&Jc(u,p)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(e,n,FE,null,null,r),ta._currentValue=u),Dl(e,n),We(e,n,l,r),n.child;case 6:return e===null&&pe&&((e=r=Me)&&(r=OS(r,n.pendingProps,en),r!==null?(n.stateNode=r,ot=n,Me=null,e=!0):e=!1),e||xi(n)),null;case 13:return S_(e,n,r);case 4:return Oe(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Ns(n,null,l,r):We(e,n,l,r),n.child;case 11:return d_(e,n,n.type,n.pendingProps,r);case 7:return We(e,n,n.pendingProps,r),n.child;case 8:return We(e,n,n.pendingProps.children,r),n.child;case 12:return We(e,n,n.pendingProps.children,r),n.child;case 10:return l=n.pendingProps,Bn(n,n.type,l.value),We(e,n,l.children,r),n.child;case 9:return u=n.type._context,l=n.pendingProps.children,Ui(n),u=st(u),l=l(u),n.flags|=1,We(e,n,l,r),n.child;case 14:return p_(e,n,n.type,n.pendingProps,r);case 15:return __(e,n,n.type,n.pendingProps,r);case 19:return T_(e,n,r);case 31:return l=n.pendingProps,r=n.mode,l={mode:l.mode,children:l.children},e===null?(r=Il(l,r),r.ref=n.ref,n.child=r,r.return=n,n=r):(r=hn(e.child,l),r.ref=n.ref,n.child=r,r.return=n,n=r),n;case 22:return m_(e,n,r);case 24:return Ui(n),l=st(Pe),e===null?(u=qu(),u===null&&(u=we,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=r),u=f),n.memoizedState={parent:l,cache:u},Gu(n),Bn(n,Pe,u)):((e.lanes&r)!==0&&(Yu(e,n),xr(n,null,null,r),Mr()),u=e.memoizedState,f=n.memoizedState,u.parent!==l?(u={parent:l,cache:l},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Bn(n,Pe,l)):(l=f.cache,Bn(n,Pe,l),l!==u.cache&&Pu(n,[Pe],r,!0))),We(e,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function En(e){e.flags|=4}function A_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!xm(n)){if(n=Ht.current,n!==null&&((fe&4194048)===fe?tn!==null:(fe&62914560)!==fe&&(fe&536870912)===0||n!==tn))throw Dr=Vu,op;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?id():536870912,e.lanes|=n,Ms|=n)}function Br(e,n){if(!pe)switch(e.tailMode){case"hidden":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ie(e){var n=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(n)for(var u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)r|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=r,n}function tS(e,n,r){var l=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return r=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),mn(Pe),Ln(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Tr(n)?En(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ip())),Ie(n),null;case 26:return r=n.memoizedState,e===null?(En(n),r!==null?(Ie(n),A_(n,r)):(Ie(n),n.flags&=-16777217)):r?r!==e.memoizedState?(En(n),Ie(n),A_(n,r)):(Ie(n),n.flags&=-16777217):(e.memoizedProps!==l&&En(n),Ie(n),n.flags&=-16777217),null;case 27:Va(n),r=J.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==l&&En(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ie(n),null}e=Y.current,Tr(n)?tp(n):(e=Am(u,l,r),n.stateNode=e,En(n))}return Ie(n),null;case 5:if(Va(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&En(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Ie(n),null}if(e=Y.current,Tr(n))tp(n);else{switch(u=Yl(J.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}e[it]=n,e[ht]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;e:switch(Je(e,r,l),r){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&En(n)}}return Ie(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&En(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=J.current,Tr(n)){if(e=n.stateNode,r=n.memoizedProps,l=null,u=ot,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[it]=n,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||vm(e.nodeValue,r)),e||xi(n)}else e=Yl(e).createTextNode(l),e[it]=n,n.stateNode=e}return Ie(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Tr(n),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[it]=n}else Cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=ip(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(vn(n),n):(vn(n),null)}if(vn(n),(n.flags&128)!==0)return n.lanes=r,n;if(r=l!==null,e=e!==null&&e.memoizedState!==null,r){l=n.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var f=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)}return r!==e&&r&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ie(n),null;case 4:return Ln(),e===null&&Qc(n.stateNode.containerInfo),Ie(n),null;case 10:return mn(n.type),Ie(n),null;case 19:if(B(Be),u=n.memoizedState,u===null)return Ie(n),null;if(l=(n.flags&128)!==0,f=u.rendering,f===null)if(l)Br(u,!1);else{if(xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Rl(e),f!==null){for(n.flags|=128,Br(u,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=r,r=n.child;r!==null;)$d(r,e),r=r.sibling;return H(Be,Be.current&1|2),n.child}e=e.sibling}u.tail!==null&&$t()>Ul&&(n.flags|=128,l=!0,Br(u,!1),n.lanes=4194304)}else{if(!l)if(e=Rl(f),e!==null){if(n.flags|=128,l=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),Br(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!pe)return Ie(n),null}else 2*$t()-u.renderingStartTime>Ul&&r!==536870912&&(n.flags|=128,l=!0,Br(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=$t(),n.sibling=null,e=Be.current,H(Be,l?e&1|2:e&1),n):(Ie(n),null);case 22:case 23:return vn(n),Xu(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(r&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),r=n.updateQueue,r!==null&&Ml(n,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==r&&(n.flags|=2048),e!==null&&B(Li),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),mn(Pe),Ie(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function nS(e,n){switch(Uu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return mn(Pe),Ln(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Va(n),null;case 13:if(vn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Be),null;case 4:return Ln(),null;case 10:return mn(n.type),null;case 22:case 23:return vn(n),Xu(),e!==null&&B(Li),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return mn(Pe),null;case 25:return null;default:return null}}function w_(e,n){switch(Uu(n),n.tag){case 3:mn(Pe),Ln();break;case 26:case 27:case 5:Va(n);break;case 4:Ln();break;case 13:vn(n);break;case 19:B(Be);break;case 10:mn(n.type);break;case 22:case 23:vn(n),Xu(),e!==null&&B(Li);break;case 24:mn(Pe)}}function jr(e,n){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&e)===e){l=void 0;var f=r.create,p=r.inst;l=f(),p.destroy=l}r=r.next}while(r!==u)}}catch(g){Ce(n,n.return,g)}}function Qn(e,n,r){try{var l=n.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var p=l.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,u=n;var v=r,w=g;try{w()}catch(O){Ce(u,v,O)}}}l=l.next}while(l!==f)}}catch(O){Ce(n,n.return,O)}}function R_(e){var n=e.updateQueue;if(n!==null){var r=e.stateNode;try{pp(n,r)}catch(l){Ce(e,e.return,l)}}}function N_(e,n,r){r.props=Hi(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Ce(e,n,l)}}function qr(e,n){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(u){Ce(e,n,u)}}function nn(e,n){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(u){Ce(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Ce(e,n,u)}else r.current=null}function O_(e){var n=e.type,r=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(u){Ce(e,e.return,u)}}function Tc(e,n,r){try{var l=e.stateNode;TS(l,e.type,r,n),l[ht]=n}catch(u){Ce(e,e.return,u)}}function D_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ti(e.type)||e.tag===4}function Cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ti(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ac(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(e),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Gl));else if(l!==4&&(l===27&&ti(e.type)&&(r=e.stateNode,n=null),e=e.child,e!==null))for(Ac(e,n,r),e=e.sibling;e!==null;)Ac(e,n,r),e=e.sibling}function xl(e,n,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?r.insertBefore(e,n):r.appendChild(e);else if(l!==4&&(l===27&&ti(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(xl(e,n,r),e=e.sibling;e!==null;)xl(e,n,r),e=e.sibling}function I_(e){var n=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Je(n,l,r),n[it]=e,n[ht]=r}catch(f){Ce(e,e.return,f)}}var Sn=!1,Le=!1,wc=!1,M_=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function iS(e,n){if(e=e.containerInfo,Wc=Zl,e=Vd(e),Cu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{r.nodeType,f.nodeType}catch{r=null;break e}var p=0,g=-1,v=-1,w=0,O=0,M=e,R=null;t:for(;;){for(var N;M!==r||u!==0&&M.nodeType!==3||(g=p+u),M!==f||l!==0&&M.nodeType!==3||(v=p+l),M.nodeType===3&&(p+=M.nodeValue.length),(N=M.firstChild)!==null;)R=M,M=N;for(;;){if(M===e)break t;if(R===r&&++w===u&&(g=p),R===f&&++O===l&&(v=p),(N=M.nextSibling)!==null)break;M=R,R=M.parentNode}M=N}r=g===-1||v===-1?null:{start:g,end:v}}else r=null}r=r||{start:0,end:0}}else r=null;for(Zc={focusedElem:e,selectionRange:r},Zl=!1,Ge=n;Ge!==null;)if(n=Ge,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ge=e;else for(;Ge!==null;){switch(n=Ge,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,r=n,u=f.memoizedProps,f=f.memoizedState,l=r.stateNode;try{var W=Hi(r.type,u,r.elementType===r.type);e=l.getSnapshotBeforeUpdate(W,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(F){Ce(r,r.return,F)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,r=e.nodeType,r===9)ef(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,Ge=e;break}Ge=n.return}}function x_(e,n,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Kn(e,r),l&4&&jr(5,r);break;case 1:if(Kn(e,r),l&4)if(e=r.stateNode,n===null)try{e.componentDidMount()}catch(p){Ce(r,r.return,p)}else{var u=Hi(r.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){Ce(r,r.return,p)}}l&64&&R_(r),l&512&&qr(r,r.return);break;case 3:if(Kn(e,r),l&64&&(e=r.updateQueue,e!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{pp(e,n)}catch(p){Ce(r,r.return,p)}}break;case 27:n===null&&l&4&&I_(r);case 26:case 5:Kn(e,r),n===null&&l&4&&O_(r),l&512&&qr(r,r.return);break;case 12:Kn(e,r);break;case 13:Kn(e,r),l&4&&L_(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=hS.bind(null,r),DS(e,r))));break;case 22:if(l=r.memoizedState!==null||Sn,!l){n=n!==null&&n.memoizedState!==null||Le,u=Sn;var f=Le;Sn=l,(Le=n)&&!f?Xn(e,r,(r.subtreeFlags&8772)!==0):Kn(e,r),Sn=u,Le=f}break;case 30:break;default:Kn(e,r)}}function k_(e){var n=e.alternate;n!==null&&(e.alternate=null,k_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ru(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,_t=!1;function bn(e,n,r){for(r=r.child;r!==null;)U_(e,n,r),r=r.sibling}function U_(e,n,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(ur,r)}catch{}switch(r.tag){case 26:Le||nn(r,n),bn(e,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Le||nn(r,n);var l=De,u=_t;ti(r.type)&&(De=r.stateNode,_t=!1),bn(e,n,r),Zr(r.stateNode),De=l,_t=u;break;case 5:Le||nn(r,n);case 6:if(l=De,u=_t,De=null,bn(e,n,r),De=l,_t=u,De!==null)if(_t)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(r.stateNode)}catch(f){Ce(r,n,f)}else try{De.removeChild(r.stateNode)}catch(f){Ce(r,n,f)}break;case 18:De!==null&&(_t?(e=De,Tm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),ra(e)):Tm(De,r.stateNode));break;case 4:l=De,u=_t,De=r.stateNode.containerInfo,_t=!0,bn(e,n,r),De=l,_t=u;break;case 0:case 11:case 14:case 15:Le||Qn(2,r,n),Le||Qn(4,r,n),bn(e,n,r);break;case 1:Le||(nn(r,n),l=r.stateNode,typeof l.componentWillUnmount=="function"&&N_(r,n,l)),bn(e,n,r);break;case 21:bn(e,n,r);break;case 22:Le=(l=Le)||r.memoizedState!==null,bn(e,n,r),Le=l;break;default:bn(e,n,r)}}function L_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ra(e)}catch(r){Ce(n,n.return,r)}}function sS(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new M_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new M_),n;default:throw Error(a(435,e.tag))}}function Rc(e,n){var r=sS(e);n.forEach(function(l){var u=dS.bind(null,e,l);r.has(l)||(r.add(l),l.then(u,u))})}function wt(e,n){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],f=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(ti(g.type)){De=g.stateNode,_t=!1;break e}break;case 5:De=g.stateNode,_t=!1;break e;case 3:case 4:De=g.stateNode.containerInfo,_t=!0;break e}g=g.return}if(De===null)throw Error(a(160));U_(f,p,u),De=null,_t=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)z_(n,e),n=n.sibling}var Yt=null;function z_(e,n){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wt(n,e),Rt(e),l&4&&(Qn(3,e,e.return),jr(3,e),Qn(5,e,e.return));break;case 1:wt(n,e),Rt(e),l&512&&(Le||r===null||nn(r,r.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var u=Yt;if(wt(n,e),Rt(e),l&512&&(Le||r===null||nn(r,r.return)),l&4){var f=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){e:{l=e.type,r=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[hr]||f[it]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),Je(f,l,r),f[it]=e,qe(f),l=f;break e;case"link":var p=Im("link","href",u).get(l+(r.href||""));if(p){for(var g=0;g<p.length;g++)if(f=p[g],f.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&f.getAttribute("rel")===(r.rel==null?null:r.rel)&&f.getAttribute("title")===(r.title==null?null:r.title)&&f.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){p.splice(g,1);break t}}f=u.createElement(l),Je(f,l,r),u.head.appendChild(f);break;case"meta":if(p=Im("meta","content",u).get(l+(r.content||""))){for(g=0;g<p.length;g++)if(f=p[g],f.getAttribute("content")===(r.content==null?null:""+r.content)&&f.getAttribute("name")===(r.name==null?null:r.name)&&f.getAttribute("property")===(r.property==null?null:r.property)&&f.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&f.getAttribute("charset")===(r.charSet==null?null:r.charSet)){p.splice(g,1);break t}}f=u.createElement(l),Je(f,l,r),u.head.appendChild(f);break;default:throw Error(a(468,l))}f[it]=e,qe(f),l=f}e.stateNode=l}else Mm(u,e.type,e.stateNode);else e.stateNode=Dm(u,l,e.memoizedProps);else f!==l?(f===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):f.count--,l===null?Mm(u,e.type,e.stateNode):Dm(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Tc(e,e.memoizedProps,r.memoizedProps)}break;case 27:wt(n,e),Rt(e),l&512&&(Le||r===null||nn(r,r.return)),r!==null&&l&4&&Tc(e,e.memoizedProps,r.memoizedProps);break;case 5:if(wt(n,e),Rt(e),l&512&&(Le||r===null||nn(r,r.return)),e.flags&32){u=e.stateNode;try{cs(u,"")}catch(N){Ce(e,e.return,N)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Tc(e,u,r!==null?r.memoizedProps:u)),l&1024&&(wc=!0);break;case 6:if(wt(n,e),Rt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(N){Ce(e,e.return,N)}}break;case 3:if(Kl=null,u=Yt,Yt=Fl(n.containerInfo),wt(n,e),Yt=u,Rt(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{ra(n.containerInfo)}catch(N){Ce(e,e.return,N)}wc&&(wc=!1,H_(e));break;case 4:l=Yt,Yt=Fl(e.stateNode.containerInfo),wt(n,e),Rt(e),Yt=l;break;case 12:wt(n,e),Rt(e);break;case 13:wt(n,e),Rt(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(xc=$t()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rc(e,l)));break;case 22:u=e.memoizedState!==null;var v=r!==null&&r.memoizedState!==null,w=Sn,O=Le;if(Sn=w||u,Le=O||v,wt(n,e),Le=O,Sn=w,Rt(e),l&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||v||Sn||Le||Pi(e)),r=null,n=e;;){if(n.tag===5||n.tag===26){if(r===null){v=r=n;try{if(f=v.stateNode,u)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=v.stateNode;var M=v.memoizedProps.style,R=M!=null&&M.hasOwnProperty("display")?M.display:null;g.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(N){Ce(v,v.return,N)}}}else if(n.tag===6){if(r===null){v=n;try{v.stateNode.nodeValue=u?"":v.memoizedProps}catch(N){Ce(v,v.return,N)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,Rc(e,r))));break;case 19:wt(n,e),Rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Rc(e,l)));break;case 30:break;case 21:break;default:wt(n,e),Rt(e)}}function Rt(e){var n=e.flags;if(n&2){try{for(var r,l=e.return;l!==null;){if(D_(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,f=Cc(e);xl(e,f,u);break;case 5:var p=r.stateNode;r.flags&32&&(cs(p,""),r.flags&=-33);var g=Cc(e);xl(e,g,p);break;case 3:case 4:var v=r.stateNode.containerInfo,w=Cc(e);Ac(e,w,v);break;default:throw Error(a(161))}}catch(O){Ce(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function H_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;H_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Kn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)x_(e,n.alternate,n),n=n.sibling}function Pi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Qn(4,n,n.return),Pi(n);break;case 1:nn(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&N_(n,n.return,r),Pi(n);break;case 27:Zr(n.stateNode);case 26:case 5:nn(n,n.return),Pi(n);break;case 22:n.memoizedState===null&&Pi(n);break;case 30:Pi(n);break;default:Pi(n)}e=e.sibling}}function Xn(e,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,u=e,f=n,p=f.flags;switch(f.tag){case 0:case 11:case 15:Xn(u,f,r),jr(4,f);break;case 1:if(Xn(u,f,r),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(w){Ce(l,l.return,w)}if(l=f,u=l.updateQueue,u!==null){var g=l.stateNode;try{var v=u.shared.hiddenCallbacks;if(v!==null)for(u.shared.hiddenCallbacks=null,u=0;u<v.length;u++)dp(v[u],g)}catch(w){Ce(l,l.return,w)}}r&&p&64&&R_(f),qr(f,f.return);break;case 27:I_(f);case 26:case 5:Xn(u,f,r),r&&l===null&&p&4&&O_(f),qr(f,f.return);break;case 12:Xn(u,f,r);break;case 13:Xn(u,f,r),r&&p&4&&L_(u,f);break;case 22:f.memoizedState===null&&Xn(u,f,r),qr(f,f.return);break;case 30:break;default:Xn(u,f,r)}n=n.sibling}}function Nc(e,n){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&Rr(r))}function Oc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rr(e))}function sn(e,n,r,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)P_(e,n,r,l),n=n.sibling}function P_(e,n,r,l){var u=n.flags;switch(n.tag){case 0:case 11:case 15:sn(e,n,r,l),u&2048&&jr(9,n);break;case 1:sn(e,n,r,l);break;case 3:sn(e,n,r,l),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Rr(e)));break;case 12:if(u&2048){sn(e,n,r,l),e=n.stateNode;try{var f=n.memoizedProps,p=f.id,g=f.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(n,n.return,v)}}else sn(e,n,r,l);break;case 13:sn(e,n,r,l);break;case 23:break;case 22:f=n.stateNode,p=n.alternate,n.memoizedState!==null?f._visibility&2?sn(e,n,r,l):Vr(e,n):f._visibility&2?sn(e,n,r,l):(f._visibility|=2,Os(e,n,r,l,(n.subtreeFlags&10256)!==0)),u&2048&&Nc(p,n);break;case 24:sn(e,n,r,l),u&2048&&Oc(n.alternate,n);break;default:sn(e,n,r,l)}}function Os(e,n,r,l,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,p=n,g=r,v=l,w=p.flags;switch(p.tag){case 0:case 11:case 15:Os(f,p,g,v,u),jr(8,p);break;case 23:break;case 22:var O=p.stateNode;p.memoizedState!==null?O._visibility&2?Os(f,p,g,v,u):Vr(f,p):(O._visibility|=2,Os(f,p,g,v,u)),u&&w&2048&&Nc(p.alternate,p);break;case 24:Os(f,p,g,v,u),u&&w&2048&&Oc(p.alternate,p);break;default:Os(f,p,g,v,u)}n=n.sibling}}function Vr(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=e,l=n,u=l.flags;switch(l.tag){case 22:Vr(r,l),u&2048&&Nc(l.alternate,l);break;case 24:Vr(r,l),u&2048&&Oc(l.alternate,l);break;default:Vr(r,l)}n=n.sibling}}var Gr=8192;function Ds(e){if(e.subtreeFlags&Gr)for(e=e.child;e!==null;)B_(e),e=e.sibling}function B_(e){switch(e.tag){case 26:Ds(e),e.flags&Gr&&e.memoizedState!==null&&VS(Yt,e.memoizedState,e.memoizedProps);break;case 5:Ds(e);break;case 3:case 4:var n=Yt;Yt=Fl(e.stateNode.containerInfo),Ds(e),Yt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Gr,Gr=16777216,Ds(e),Gr=n):Ds(e));break;default:Ds(e)}}function j_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yr(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ge=l,V_(l,e)}j_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)q_(e),e=e.sibling}function q_(e){switch(e.tag){case 0:case 11:case 15:Yr(e),e.flags&2048&&Qn(9,e,e.return);break;case 3:Yr(e);break;case 12:Yr(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,kl(e)):Yr(e);break;default:Yr(e)}}function kl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];Ge=l,V_(l,e)}j_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qn(8,n,n.return),kl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,kl(n));break;default:kl(n)}e=e.sibling}}function V_(e,n){for(;Ge!==null;){var r=Ge;switch(r.tag){case 0:case 11:case 15:Qn(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Rr(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Ge=l;else e:for(r=e;Ge!==null;){l=Ge;var u=l.sibling,f=l.return;if(k_(l),l===r){Ge=null;break e}if(u!==null){u.return=f,Ge=u;break e}Ge=f}}}var rS={getCacheForType:function(e){var n=st(Pe),r=n.data.get(e);return r===void 0&&(r=e(),n.data.set(e,r)),r}},aS=typeof WeakMap=="function"?WeakMap:Map,me=0,we=null,oe=null,fe=0,ge=0,Nt=null,Wn=!1,Is=!1,Dc=!1,Tn=0,xe=0,Zn=0,Bi=0,Ic=0,Pt=0,Ms=0,Fr=null,mt=null,Mc=!1,xc=0,Ul=1/0,Ll=null,Jn=null,Ze=0,$n=null,xs=null,ks=0,kc=0,Uc=null,G_=null,Qr=0,Lc=null;function Ot(){if((me&2)!==0&&fe!==0)return fe&-fe;if(D.T!==null){var e=Ss;return e!==0?e:Vc()}return ad()}function Y_(){Pt===0&&(Pt=(fe&536870912)===0||pe?nd():536870912);var e=Ht.current;return e!==null&&(e.flags|=32),Pt}function Dt(e,n,r){(e===we&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(Us(e,0),ei(e,fe,Pt,!1)),fr(e,r),((me&2)===0||e!==we)&&(e===we&&((me&2)===0&&(Bi|=r),xe===4&&ei(e,fe,Pt,!1)),rn(e))}function F_(e,n,r){if((me&6)!==0)throw Error(a(327));var l=!r&&(n&124)===0&&(n&e.expiredLanes)===0||cr(e,n),u=l?uS(e,n):Pc(e,n,!0),f=l;do{if(u===0){Is&&!l&&ei(e,n,0,!1);break}else{if(r=e.current.alternate,f&&!lS(r)){u=Pc(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;u=Fr;var v=g.current.memoizedState.isDehydrated;if(v&&(Us(g,p).flags|=256),p=Pc(g,p,!1),p!==2){if(Dc&&!v){g.errorRecoveryDisabledLanes|=f,Bi|=f,u=4;break e}f=mt,mt=u,f!==null&&(mt===null?mt=f:mt.push.apply(mt,f))}u=p}if(f=!1,u!==2)continue}}if(u===1){Us(e,0),ei(e,n,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:ei(l,n,Pt,!Wn);break e;case 2:mt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=xc+300-$t(),10<u)){if(ei(l,n,Pt,!Wn),Qa(l,0,!0)!==0)break e;l.timeoutHandle=Sm(Q_.bind(null,l,r,mt,Ll,Mc,n,Pt,Bi,Ms,Wn,f,2,-0,0),u);break e}Q_(l,r,mt,Ll,Mc,n,Pt,Bi,Ms,Wn,f,0,-0,0)}}break}while(!0);rn(e)}function Q_(e,n,r,l,u,f,p,g,v,w,O,M,R,N){if(e.timeoutHandle=-1,M=n.subtreeFlags,(M&8192||(M&16785408)===16785408)&&(ea={stylesheets:null,count:0,unsuspend:qS},B_(n),M=GS(),M!==null)){e.cancelPendingCommit=M(em.bind(null,e,n,f,r,l,u,p,g,v,O,1,R,N)),ei(e,f,p,!w);return}em(e,n,f,r,l,u,p,g,v)}function lS(e){for(var n=e;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var u=r[l],f=u.getSnapshot;u=u.value;try{if(!Ct(f(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ei(e,n,r,l){n&=~Ic,n&=~Bi,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var u=n;0<u;){var f=31-Tt(u),p=1<<f;l[f]=-1,u&=~p}r!==0&&sd(e,r,n)}function zl(){return(me&6)===0?(Kr(0),!1):!0}function zc(){if(oe!==null){if(ge===0)var e=oe.return;else e=oe,_n=ki=null,ec(e),Rs=null,Hr=0,e=oe;for(;e!==null;)w_(e.alternate,e),e=e.return;oe=null}}function Us(e,n){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,AS(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),zc(),we=e,oe=r=hn(e.current,null),fe=n,ge=0,Nt=null,Wn=!1,Is=cr(e,n),Dc=!1,Ms=Pt=Ic=Bi=Zn=xe=0,mt=Fr=null,Mc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var u=31-Tt(l),f=1<<u;n|=e[u],l&=~f}return Tn=n,rl(),r}function K_(e,n){ie=null,D.H=Cl,n===Or||n===pl?(n=fp(),ge=3):n===op?(n=fp(),ge=4):ge=n===h_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Nt=n,oe===null&&(xe=1,Ol(e,kt(n,e.current)))}function X_(){var e=D.H;return D.H=Cl,e===null?Cl:e}function W_(){var e=D.A;return D.A=rS,e}function Hc(){xe=4,Wn||(fe&4194048)!==fe&&Ht.current!==null||(Is=!0),(Zn&134217727)===0&&(Bi&134217727)===0||we===null||ei(we,fe,Pt,!1)}function Pc(e,n,r){var l=me;me|=2;var u=X_(),f=W_();(we!==e||fe!==n)&&(Ll=null,Us(e,n)),n=!1;var p=xe;e:do try{if(ge!==0&&oe!==null){var g=oe,v=Nt;switch(ge){case 8:zc(),p=6;break e;case 3:case 2:case 9:case 6:Ht.current===null&&(n=!0);var w=ge;if(ge=0,Nt=null,Ls(e,g,v,w),r&&Is){p=0;break e}break;default:w=ge,ge=0,Nt=null,Ls(e,g,v,w)}}oS(),p=xe;break}catch(O){K_(e,O)}while(!0);return n&&e.shellSuspendCounter++,_n=ki=null,me=l,D.H=u,D.A=f,oe===null&&(we=null,fe=0,rl()),p}function oS(){for(;oe!==null;)Z_(oe)}function uS(e,n){var r=me;me|=2;var l=X_(),u=W_();we!==e||fe!==n?(Ll=null,Ul=$t()+500,Us(e,n)):Is=cr(e,n);e:do try{if(ge!==0&&oe!==null){n=oe;var f=Nt;t:switch(ge){case 1:ge=0,Nt=null,Ls(e,n,f,1);break;case 2:case 9:if(up(f)){ge=0,Nt=null,J_(n);break}n=function(){ge!==2&&ge!==9||we!==e||(ge=7),rn(e)},f.then(n,n);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:up(f)?(ge=0,Nt=null,J_(n)):(ge=0,Nt=null,Ls(e,n,f,7));break;case 5:var p=null;switch(oe.tag){case 26:p=oe.memoizedState;case 5:case 27:var g=oe;if(!p||xm(p)){ge=0,Nt=null;var v=g.sibling;if(v!==null)oe=v;else{var w=g.return;w!==null?(oe=w,Hl(w)):oe=null}break t}}ge=0,Nt=null,Ls(e,n,f,5);break;case 6:ge=0,Nt=null,Ls(e,n,f,6);break;case 8:zc(),xe=6;break e;default:throw Error(a(462))}}cS();break}catch(O){K_(e,O)}while(!0);return _n=ki=null,D.H=l,D.A=u,me=r,oe!==null?0:(we=null,fe=0,rl(),xe)}function cS(){for(;oe!==null&&!M0();)Z_(oe)}function Z_(e){var n=C_(e.alternate,e,Tn);e.memoizedProps=e.pendingProps,n===null?Hl(e):oe=n}function J_(e){var n=e,r=n.alternate;switch(n.tag){case 15:case 0:n=v_(r,n,n.pendingProps,n.type,void 0,fe);break;case 11:n=v_(r,n,n.pendingProps,n.type.render,n.ref,fe);break;case 5:ec(n);default:w_(r,n),n=oe=$d(n,Tn),n=C_(r,n,Tn)}e.memoizedProps=e.pendingProps,n===null?Hl(e):oe=n}function Ls(e,n,r,l){_n=ki=null,ec(n),Rs=null,Hr=0;var u=n.return;try{if($E(e,u,n,r,fe)){xe=1,Ol(e,kt(r,e.current)),oe=null;return}}catch(f){if(u!==null)throw oe=u,f;xe=1,Ol(e,kt(r,e.current)),oe=null;return}n.flags&32768?(pe||l===1?e=!0:Is||(fe&536870912)!==0?e=!1:(Wn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ht.current,l!==null&&l.tag===13&&(l.flags|=16384))),$_(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){$_(n,Wn);return}e=n.return;var r=tS(n.alternate,n,Tn);if(r!==null){oe=r;return}if(n=n.sibling,n!==null){oe=n;return}oe=n=e}while(n!==null);xe===0&&(xe=5)}function $_(e,n){do{var r=nS(e.alternate,e);if(r!==null){r.flags&=32767,oe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(e=e.sibling,e!==null)){oe=e;return}oe=e=r}while(e!==null);xe=6,oe=null}function em(e,n,r,l,u,f,p,g,v){e.cancelPendingCommit=null;do Pl();while(Ze!==0);if((me&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Ou,q0(e,r,f,p,g,v),e===we&&(oe=we=null,fe=0),xs=n,$n=e,ks=r,kc=f,Uc=u,G_=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,pS(Ga,function(){return rm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=D.T,D.T=null,u=P.p,P.p=2,p=me,me|=4;try{iS(e,n,r)}finally{me=p,P.p=u,D.T=l}}Ze=1,tm(),nm(),im()}}function tm(){if(Ze===1){Ze=0;var e=$n,n=xs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null;var l=P.p;P.p=2;var u=me;me|=4;try{z_(n,e);var f=Zc,p=Vd(e.containerInfo),g=f.focusedElem,v=f.selectionRange;if(p!==g&&g&&g.ownerDocument&&qd(g.ownerDocument.documentElement,g)){if(v!==null&&Cu(g)){var w=v.start,O=v.end;if(O===void 0&&(O=w),"selectionStart"in g)g.selectionStart=w,g.selectionEnd=Math.min(O,g.value.length);else{var M=g.ownerDocument||document,R=M&&M.defaultView||window;if(R.getSelection){var N=R.getSelection(),W=g.textContent.length,F=Math.min(v.start,W),Ee=v.end===void 0?F:Math.min(v.end,W);!N.extend&&F>Ee&&(p=Ee,Ee=F,F=p);var C=jd(g,F),T=jd(g,Ee);if(C&&T&&(N.rangeCount!==1||N.anchorNode!==C.node||N.anchorOffset!==C.offset||N.focusNode!==T.node||N.focusOffset!==T.offset)){var A=M.createRange();A.setStart(C.node,C.offset),N.removeAllRanges(),F>Ee?(N.addRange(A),N.extend(T.node,T.offset)):(A.setEnd(T.node,T.offset),N.addRange(A))}}}}for(M=[],N=g;N=N.parentNode;)N.nodeType===1&&M.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<M.length;g++){var I=M[g];I.element.scrollLeft=I.left,I.element.scrollTop=I.top}}Zl=!!Wc,Zc=Wc=null}finally{me=u,P.p=l,D.T=r}}e.current=n,Ze=2}}function nm(){if(Ze===2){Ze=0;var e=$n,n=xs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=D.T,D.T=null;var l=P.p;P.p=2;var u=me;me|=4;try{x_(e,n.alternate,n)}finally{me=u,P.p=l,D.T=r}}Ze=3}}function im(){if(Ze===4||Ze===3){Ze=0,x0();var e=$n,n=xs,r=ks,l=G_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ze=5:(Ze=0,xs=$n=null,sm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Jn=null),iu(r),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(ur,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=D.T,u=P.p,P.p=2,D.T=null;try{for(var f=e.onRecoverableError,p=0;p<l.length;p++){var g=l[p];f(g.value,{componentStack:g.stack})}}finally{D.T=n,P.p=u}}(ks&3)!==0&&Pl(),rn(e),u=e.pendingLanes,(r&4194090)!==0&&(u&42)!==0?e===Lc?Qr++:(Qr=0,Lc=e):Qr=0,Kr(0)}}function sm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Rr(n)))}function Pl(e){return tm(),nm(),im(),rm()}function rm(){if(Ze!==5)return!1;var e=$n,n=kc;kc=0;var r=iu(ks),l=D.T,u=P.p;try{P.p=32>r?32:r,D.T=null,r=Uc,Uc=null;var f=$n,p=ks;if(Ze=0,xs=$n=null,ks=0,(me&6)!==0)throw Error(a(331));var g=me;if(me|=4,q_(f.current),P_(f,f.current,p,r),me=g,Kr(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(ur,f)}catch{}return!0}finally{P.p=u,D.T=l,sm(e,n)}}function am(e,n,r){n=kt(r,n),n=pc(e.stateNode,n,2),e=Vn(e,n,2),e!==null&&(fr(e,2),rn(e))}function Ce(e,n,r){if(e.tag===3)am(e,e,r);else for(;n!==null;){if(n.tag===3){am(n,e,r);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Jn===null||!Jn.has(l))){e=kt(r,e),r=c_(2),l=Vn(n,r,2),l!==null&&(f_(r,l,n,e),fr(l,2),rn(l));break}}n=n.return}}function Bc(e,n,r){var l=e.pingCache;if(l===null){l=e.pingCache=new aS;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(r)||(Dc=!0,u.add(r),e=fS.bind(null,e,n,r),n.then(e,e))}function fS(e,n,r){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,we===e&&(fe&r)===r&&(xe===4||xe===3&&(fe&62914560)===fe&&300>$t()-xc?(me&2)===0&&Us(e,0):Ic|=r,Ms===fe&&(Ms=0)),rn(e)}function lm(e,n){n===0&&(n=id()),e=gs(e,n),e!==null&&(fr(e,n),rn(e))}function hS(e){var n=e.memoizedState,r=0;n!==null&&(r=n.retryLane),lm(e,r)}function dS(e,n){var r=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(r=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),lm(e,r)}function pS(e,n){return $o(e,n)}var Bl=null,zs=null,jc=!1,jl=!1,qc=!1,ji=0;function rn(e){e!==zs&&e.next===null&&(zs===null?Bl=zs=e:zs=zs.next=e),jl=!0,jc||(jc=!0,mS())}function Kr(e,n){if(!qc&&jl){qc=!0;do for(var r=!1,l=Bl;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var p=l.suspendedLanes,g=l.pingedLanes;f=(1<<31-Tt(42|e)+1)-1,f&=u&~(p&~g),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(r=!0,fm(l,f))}else f=fe,f=Qa(l,l===we?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||cr(l,f)||(r=!0,fm(l,f));l=l.next}while(r);qc=!1}}function _S(){om()}function om(){jl=jc=!1;var e=0;ji!==0&&(CS()&&(e=ji),ji=0);for(var n=$t(),r=null,l=Bl;l!==null;){var u=l.next,f=um(l,n);f===0?(l.next=null,r===null?Bl=u:r.next=u,u===null&&(zs=r)):(r=l,(e!==0||(f&3)!==0)&&(jl=!0)),l=u}Kr(e)}function um(e,n){for(var r=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var p=31-Tt(f),g=1<<p,v=u[p];v===-1?((g&r)===0||(g&l)!==0)&&(u[p]=j0(g,n)):v<=n&&(e.expiredLanes|=g),f&=~g}if(n=we,r=fe,r=Qa(e,e===n?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===n&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&eu(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||cr(e,r)){if(n=r&-r,n===e.callbackPriority)return n;switch(l!==null&&eu(l),iu(r)){case 2:case 8:r=ed;break;case 32:r=Ga;break;case 268435456:r=td;break;default:r=Ga}return l=cm.bind(null,e),r=$o(r,l),e.callbackPriority=n,e.callbackNode=r,n}return l!==null&&l!==null&&eu(l),e.callbackPriority=2,e.callbackNode=null,2}function cm(e,n){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(Pl()&&e.callbackNode!==r)return null;var l=fe;return l=Qa(e,e===we?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(F_(e,l,n),um(e,$t()),e.callbackNode!=null&&e.callbackNode===r?cm.bind(null,e):null)}function fm(e,n){if(Pl())return null;F_(e,n,!0)}function mS(){wS(function(){(me&6)!==0?$o($h,_S):om()})}function Vc(){return ji===0&&(ji=nd()),ji}function hm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ja(""+e)}function dm(e,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,e.id&&r.setAttribute("form",e.id),n.parentNode.insertBefore(r,n),e=new FormData(e),r.parentNode.removeChild(r),e}function gS(e,n,r,l,u){if(n==="submit"&&r&&r.stateNode===u){var f=hm((u[ht]||null).action),p=l.submitter;p&&(n=(n=p[ht]||null)?hm(n.formAction):p.getAttribute("formAction"),n!==null&&(f=n,p=null));var g=new nl("action","action",null,l,u);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ji!==0){var v=p?dm(u,p):new FormData(u);uc(r,{pending:!0,data:v,method:u.method,action:f},null,v)}}else typeof f=="function"&&(g.preventDefault(),v=p?dm(u,p):new FormData(u),uc(r,{pending:!0,data:v,method:u.method,action:f},f,v))},currentTarget:u}]})}}for(var Gc=0;Gc<Nu.length;Gc++){var Yc=Nu[Gc],vS=Yc.toLowerCase(),yS=Yc[0].toUpperCase()+Yc.slice(1);Gt(vS,"on"+yS)}Gt(Fd,"onAnimationEnd"),Gt(Qd,"onAnimationIteration"),Gt(Kd,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(LE,"onTransitionRun"),Gt(zE,"onTransitionStart"),Gt(HE,"onTransitionCancel"),Gt(Xd,"onTransitionEnd"),ls("onMouseEnter",["mouseout","mouseover"]),ls("onMouseLeave",["mouseout","mouseover"]),ls("onPointerEnter",["pointerout","pointerover"]),ls("onPointerLeave",["pointerout","pointerover"]),Ai("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ai("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ai("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ai("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ai("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ES=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));function pm(e,n){n=(n&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],u=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var p=l.length-1;0<=p;p--){var g=l[p],v=g.instance,w=g.currentTarget;if(g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){Nl(O)}u.currentTarget=null,f=v}else for(p=0;p<l.length;p++){if(g=l[p],v=g.instance,w=g.currentTarget,g=g.listener,v!==f&&u.isPropagationStopped())break e;f=g,u.currentTarget=w;try{f(u)}catch(O){Nl(O)}u.currentTarget=null,f=v}}}}function ue(e,n){var r=n[su];r===void 0&&(r=n[su]=new Set);var l=e+"__bubble";r.has(l)||(_m(n,e,2,!1),r.add(l))}function Fc(e,n,r){var l=0;n&&(l|=4),_m(r,e,l,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[ql]){e[ql]=!0,od.forEach(function(r){r!=="selectionchange"&&(ES.has(r)||Fc(r,!1,e),Fc(r,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Fc("selectionchange",!1,n))}}function _m(e,n,r,l){switch(Pm(n)){case 2:var u=QS;break;case 8:u=KS;break;default:u=of}r=u.bind(null,n,r,e),u=void 0,!_u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,r,{capture:!0,passive:u}):e.addEventListener(n,r,!0):u!==void 0?e.addEventListener(n,r,{passive:u}):e.addEventListener(n,r,!1)}function Kc(e,n,r,l,u){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var g=l.stateNode.containerInfo;if(g===u)break;if(p===4)for(p=l.return;p!==null;){var v=p.tag;if((v===3||v===4)&&p.stateNode.containerInfo===u)return;p=p.return}for(;g!==null;){if(p=ss(g),p===null)return;if(v=p.tag,v===5||v===6||v===26||v===27){l=f=p;continue e}g=g.parentNode}}l=l.return}bd(function(){var w=f,O=du(r),M=[];e:{var R=Wd.get(e);if(R!==void 0){var N=nl,W=e;switch(e){case"keypress":if(el(r)===0)break e;case"keydown":case"keyup":N=pE;break;case"focusin":W="focus",N=yu;break;case"focusout":W="blur",N=yu;break;case"beforeblur":case"afterblur":N=yu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=nE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=gE;break;case Fd:case Qd:case Kd:N=rE;break;case Xd:N=yE;break;case"scroll":case"scrollend":N=eE;break;case"wheel":N=SE;break;case"copy":case"cut":case"paste":N=lE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Rd;break;case"toggle":case"beforetoggle":N=TE}var F=(n&4)!==0,Ee=!F&&(e==="scroll"||e==="scrollend"),C=F?R!==null?R+"Capture":null:R;F=[];for(var T=w,A;T!==null;){var I=T;if(A=I.stateNode,I=I.tag,I!==5&&I!==26&&I!==27||A===null||C===null||(I=pr(T,C),I!=null&&F.push(Wr(T,I,A))),Ee)break;T=T.return}0<F.length&&(R=new N(R,W,null,r,O),M.push({event:R,listeners:F}))}}if((n&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",R&&r!==hu&&(W=r.relatedTarget||r.fromElement)&&(ss(W)||W[is]))break e;if((N||R)&&(R=O.window===O?O:(R=O.ownerDocument)?R.defaultView||R.parentWindow:window,N?(W=r.relatedTarget||r.toElement,N=w,W=W?ss(W):null,W!==null&&(Ee=c(W),F=W.tag,W!==Ee||F!==5&&F!==27&&F!==6)&&(W=null)):(N=null,W=w),N!==W)){if(F=Ad,I="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(F=Rd,I="onPointerLeave",C="onPointerEnter",T="pointer"),Ee=N==null?R:dr(N),A=W==null?R:dr(W),R=new F(I,T+"leave",N,r,O),R.target=Ee,R.relatedTarget=A,I=null,ss(O)===w&&(F=new F(C,T+"enter",W,r,O),F.target=A,F.relatedTarget=Ee,I=F),Ee=I,N&&W)t:{for(F=N,C=W,T=0,A=F;A;A=Hs(A))T++;for(A=0,I=C;I;I=Hs(I))A++;for(;0<T-A;)F=Hs(F),T--;for(;0<A-T;)C=Hs(C),A--;for(;T--;){if(F===C||C!==null&&F===C.alternate)break t;F=Hs(F),C=Hs(C)}F=null}else F=null;N!==null&&mm(M,R,N,F,!1),W!==null&&Ee!==null&&mm(M,Ee,W,F,!0)}}e:{if(R=w?dr(w):window,N=R.nodeName&&R.nodeName.toLowerCase(),N==="select"||N==="input"&&R.type==="file")var q=Ud;else if(xd(R))if(Ld)q=xE;else{q=IE;var re=DE}else N=R.nodeName,!N||N.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?w&&fu(w.elementType)&&(q=Ud):q=ME;if(q&&(q=q(e,w))){kd(M,q,r,O);break e}re&&re(e,R,w),e==="focusout"&&w&&R.type==="number"&&w.memoizedProps.value!=null&&cu(R,"number",R.value)}switch(re=w?dr(w):window,e){case"focusin":(xd(re)||re.contentEditable==="true")&&(ps=re,Au=w,br=null);break;case"focusout":br=Au=ps=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Gd(M,r,O);break;case"selectionchange":if(UE)break;case"keydown":case"keyup":Gd(M,r,O)}var G;if(Su)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else ds?Id(e,r)&&(Q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Q="onCompositionStart");Q&&(Nd&&r.locale!=="ko"&&(ds||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&ds&&(G=Td()):(Pn=O,mu="value"in Pn?Pn.value:Pn.textContent,ds=!0)),re=Vl(w,Q),0<re.length&&(Q=new wd(Q,e,null,r,O),M.push({event:Q,listeners:re}),G?Q.data=G:(G=Md(r),G!==null&&(Q.data=G)))),(G=AE?wE(e,r):RE(e,r))&&(Q=Vl(w,"onBeforeInput"),0<Q.length&&(re=new wd("onBeforeInput","beforeinput",null,r,O),M.push({event:re,listeners:Q}),re.data=G)),gS(M,e,w,r,O)}pm(M,n)})}function Wr(e,n,r){return{instance:e,listener:n,currentTarget:r}}function Vl(e,n){for(var r=n+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=pr(e,r),u!=null&&l.unshift(Wr(e,u,f)),u=pr(e,n),u!=null&&l.push(Wr(e,u,f))),e.tag===3)return l;e=e.return}return[]}function Hs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function mm(e,n,r,l,u){for(var f=n._reactName,p=[];r!==null&&r!==l;){var g=r,v=g.alternate,w=g.stateNode;if(g=g.tag,v!==null&&v===l)break;g!==5&&g!==26&&g!==27||w===null||(v=w,u?(w=pr(r,f),w!=null&&p.unshift(Wr(r,w,v))):u||(w=pr(r,f),w!=null&&p.push(Wr(r,w,v)))),r=r.return}p.length!==0&&e.push({event:n,listeners:p})}var SS=/\r\n?/g,bS=/\u0000|\uFFFD/g;function gm(e){return(typeof e=="string"?e:""+e).replace(SS,`
`).replace(bS,"")}function vm(e,n){return n=gm(n),gm(e)===n}function Gl(){}function ye(e,n,r,l,u,f){switch(r){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||cs(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&cs(e,""+l);break;case"className":Xa(e,"class",l);break;case"tabIndex":Xa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xa(e,r,l);break;case"style":Ed(e,l,f);break;case"data":if(n!=="object"){Xa(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ja(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(r==="formAction"?(n!=="input"&&ye(e,n,"name",u.name,u,null),ye(e,n,"formEncType",u.formEncType,u,null),ye(e,n,"formMethod",u.formMethod,u,null),ye(e,n,"formTarget",u.formTarget,u,null)):(ye(e,n,"encType",u.encType,u,null),ye(e,n,"method",u.method,u,null),ye(e,n,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Ja(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Gl);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Ja(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ue("beforetoggle",e),ue("toggle",e),Ka(e,"popover",l);break;case"xlinkActuate":cn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":cn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":cn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":cn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":cn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":cn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":cn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":cn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":cn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ka(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=J0.get(r)||r,Ka(e,r,l))}}function Xc(e,n,r,l,u,f){switch(r){case"style":Ed(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(u.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?cs(e,l):(typeof l=="number"||typeof l=="bigint")&&cs(e,""+l);break;case"onScroll":l!=null&&ue("scroll",e);break;case"onScrollEnd":l!=null&&ue("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),f=e[ht]||null,f=f!=null?f[r]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(n,l,u);break e}r in e?e[r]=l:l===!0?e.setAttribute(r,""):Ka(e,r,l)}}}function Je(e,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ue("error",e),ue("load",e);var l=!1,u=!1,f;for(f in r)if(r.hasOwnProperty(f)){var p=r[f];if(p!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ye(e,n,f,p,r,null)}}u&&ye(e,n,"srcSet",r.srcSet,r,null),l&&ye(e,n,"src",r.src,r,null);return;case"input":ue("invalid",e);var g=f=p=u=null,v=null,w=null;for(l in r)if(r.hasOwnProperty(l)){var O=r[l];if(O!=null)switch(l){case"name":u=O;break;case"type":p=O;break;case"checked":v=O;break;case"defaultChecked":w=O;break;case"value":f=O;break;case"defaultValue":g=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(137,n));break;default:ye(e,n,l,O,r,null)}}md(e,f,g,v,w,p,u,!1),Wa(e);return;case"select":ue("invalid",e),l=p=f=null;for(u in r)if(r.hasOwnProperty(u)&&(g=r[u],g!=null))switch(u){case"value":f=g;break;case"defaultValue":p=g;break;case"multiple":l=g;default:ye(e,n,u,g,r,null)}n=f,r=p,e.multiple=!!l,n!=null?us(e,!!l,n,!1):r!=null&&us(e,!!l,r,!0);return;case"textarea":ue("invalid",e),f=u=l=null;for(p in r)if(r.hasOwnProperty(p)&&(g=r[p],g!=null))switch(p){case"value":l=g;break;case"defaultValue":u=g;break;case"children":f=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(a(91));break;default:ye(e,n,p,g,r,null)}vd(e,l,u,f),Wa(e);return;case"option":for(v in r)if(r.hasOwnProperty(v)&&(l=r[v],l!=null))switch(v){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ye(e,n,v,l,r,null)}return;case"dialog":ue("beforetoggle",e),ue("toggle",e),ue("cancel",e),ue("close",e);break;case"iframe":case"object":ue("load",e);break;case"video":case"audio":for(l=0;l<Xr.length;l++)ue(Xr[l],e);break;case"image":ue("error",e),ue("load",e);break;case"details":ue("toggle",e);break;case"embed":case"source":case"link":ue("error",e),ue("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(w in r)if(r.hasOwnProperty(w)&&(l=r[w],l!=null))switch(w){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ye(e,n,w,l,r,null)}return;default:if(fu(n)){for(O in r)r.hasOwnProperty(O)&&(l=r[O],l!==void 0&&Xc(e,n,O,l,r,void 0));return}}for(g in r)r.hasOwnProperty(g)&&(l=r[g],l!=null&&ye(e,n,g,l,r,null))}function TS(e,n,r,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,p=null,g=null,v=null,w=null,O=null;for(N in r){var M=r[N];if(r.hasOwnProperty(N)&&M!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":v=M;default:l.hasOwnProperty(N)||ye(e,n,N,null,l,M)}}for(var R in l){var N=l[R];if(M=r[R],l.hasOwnProperty(R)&&(N!=null||M!=null))switch(R){case"type":f=N;break;case"name":u=N;break;case"checked":w=N;break;case"defaultChecked":O=N;break;case"value":p=N;break;case"defaultValue":g=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(137,n));break;default:N!==M&&ye(e,n,R,N,l,M)}}uu(e,p,g,v,w,O,f,u);return;case"select":N=p=g=R=null;for(f in r)if(v=r[f],r.hasOwnProperty(f)&&v!=null)switch(f){case"value":break;case"multiple":N=v;default:l.hasOwnProperty(f)||ye(e,n,f,null,l,v)}for(u in l)if(f=l[u],v=r[u],l.hasOwnProperty(u)&&(f!=null||v!=null))switch(u){case"value":R=f;break;case"defaultValue":g=f;break;case"multiple":p=f;default:f!==v&&ye(e,n,u,f,l,v)}n=g,r=p,l=N,R!=null?us(e,!!r,R,!1):!!l!=!!r&&(n!=null?us(e,!!r,n,!0):us(e,!!r,r?[]:"",!1));return;case"textarea":N=R=null;for(g in r)if(u=r[g],r.hasOwnProperty(g)&&u!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ye(e,n,g,null,l,u)}for(p in l)if(u=l[p],f=r[p],l.hasOwnProperty(p)&&(u!=null||f!=null))switch(p){case"value":R=u;break;case"defaultValue":N=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==f&&ye(e,n,p,u,l,f)}gd(e,R,N);return;case"option":for(var W in r)if(R=r[W],r.hasOwnProperty(W)&&R!=null&&!l.hasOwnProperty(W))switch(W){case"selected":e.selected=!1;break;default:ye(e,n,W,null,l,R)}for(v in l)if(R=l[v],N=r[v],l.hasOwnProperty(v)&&R!==N&&(R!=null||N!=null))switch(v){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:ye(e,n,v,R,l,N)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in r)R=r[F],r.hasOwnProperty(F)&&R!=null&&!l.hasOwnProperty(F)&&ye(e,n,F,null,l,R);for(w in l)if(R=l[w],N=r[w],l.hasOwnProperty(w)&&R!==N&&(R!=null||N!=null))switch(w){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(137,n));break;default:ye(e,n,w,R,l,N)}return;default:if(fu(n)){for(var Ee in r)R=r[Ee],r.hasOwnProperty(Ee)&&R!==void 0&&!l.hasOwnProperty(Ee)&&Xc(e,n,Ee,void 0,l,R);for(O in l)R=l[O],N=r[O],!l.hasOwnProperty(O)||R===N||R===void 0&&N===void 0||Xc(e,n,O,R,l,N);return}}for(var C in r)R=r[C],r.hasOwnProperty(C)&&R!=null&&!l.hasOwnProperty(C)&&ye(e,n,C,null,l,R);for(M in l)R=l[M],N=r[M],!l.hasOwnProperty(M)||R===N||R==null&&N==null||ye(e,n,M,R,l,N)}var Wc=null,Zc=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $c=null;function CS(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var Sm=typeof setTimeout=="function"?setTimeout:void 0,AS=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,wS=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(e){return bm.resolve(null).then(e).catch(RS)}:Sm;function RS(e){setTimeout(function(){throw e})}function ti(e){return e==="head"}function Tm(e,n){var r=n,l=0,u=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"){if(0<l&&8>l){r=l;var p=e.ownerDocument;if(r&1&&Zr(p.documentElement),r&2&&Zr(p.body),r&4)for(r=p.head,Zr(r),p=r.firstChild;p;){var g=p.nextSibling,v=p.nodeName;p[hr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&p.rel.toLowerCase()==="stylesheet"||r.removeChild(p),p=g}}if(u===0){e.removeChild(f),ra(n);return}u--}else r==="$"||r==="$?"||r==="$!"?u++:l=r.charCodeAt(0)-48;else l=0;r=f}while(r);ra(n)}function ef(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ef(r),ru(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function NS(e,n,r,l){for(;e.nodeType===1;){var u=r;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[hr])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ft(e.nextSibling),e===null)break}return null}function OS(e,n,r){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Ft(e.nextSibling),e===null))return null;return e}function tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function DS(e,n){var r=e.ownerDocument;if(e.data!=="$?"||r.readyState==="complete")n();else{var l=function(){n(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ft(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var nf=null;function Cm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(n===0)return e;n--}else r==="/$"&&n++}e=e.previousSibling}return null}function Am(e,n,r){switch(n=Yl(r),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Zr(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ru(e)}var Bt=new Map,wm=new Set;function Fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Cn=P.d;P.d={f:IS,r:MS,D:xS,C:kS,L:US,m:LS,X:HS,S:zS,M:PS};function IS(){var e=Cn.f(),n=zl();return e||n}function MS(e){var n=rs(e);n!==null&&n.tag===5&&n.type==="form"?Fp(n):Cn.r(e)}var Ps=typeof document>"u"?null:document;function Rm(e,n,r){var l=Ps;if(l&&typeof n=="string"&&n){var u=xt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),wm.has(u)||(wm.add(u),e={rel:e,crossOrigin:r,href:n},l.querySelector(u)===null&&(n=l.createElement("link"),Je(n,"link",e),qe(n),l.head.appendChild(n)))}}function xS(e){Cn.D(e),Rm("dns-prefetch",e,null)}function kS(e,n){Cn.C(e,n),Rm("preconnect",e,n)}function US(e,n,r){Cn.L(e,n,r);var l=Ps;if(l&&e&&n){var u='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+xt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+xt(r.imageSizes)+'"]')):u+='[href="'+xt(e)+'"]';var f=u;switch(n){case"style":f=Bs(e);break;case"script":f=js(e)}Bt.has(f)||(e=y({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:e,as:n},r),Bt.set(f,e),l.querySelector(u)!==null||n==="style"&&l.querySelector(Jr(f))||n==="script"&&l.querySelector($r(f))||(n=l.createElement("link"),Je(n,"link",e),qe(n),l.head.appendChild(n)))}}function LS(e,n){Cn.m(e,n);var r=Ps;if(r&&e){var l=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xt(l)+'"][href="'+xt(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=js(e)}if(!Bt.has(f)&&(e=y({rel:"modulepreload",href:e},n),Bt.set(f,e),r.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector($r(f)))return}l=r.createElement("link"),Je(l,"link",e),qe(l),r.head.appendChild(l)}}}function zS(e,n,r){Cn.S(e,n,r);var l=Ps;if(l&&e){var u=as(l).hoistableStyles,f=Bs(e);n=n||"default";var p=u.get(f);if(!p){var g={loading:0,preload:null};if(p=l.querySelector(Jr(f)))g.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},r),(r=Bt.get(f))&&sf(e,r);var v=p=l.createElement("link");qe(v),Je(v,"link",e),v._p=new Promise(function(w,O){v.onload=w,v.onerror=O}),v.addEventListener("load",function(){g.loading|=1}),v.addEventListener("error",function(){g.loading|=2}),g.loading|=4,Ql(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:g},u.set(f,p)}}}function HS(e,n){Cn.X(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=js(e),f=l.get(u);f||(f=r.querySelector($r(u)),f||(e=y({src:e,async:!0},n),(n=Bt.get(u))&&rf(e,n),f=r.createElement("script"),qe(f),Je(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function PS(e,n){Cn.M(e,n);var r=Ps;if(r&&e){var l=as(r).hoistableScripts,u=js(e),f=l.get(u);f||(f=r.querySelector($r(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=Bt.get(u))&&rf(e,n),f=r.createElement("script"),qe(f),Je(f,"link",e),r.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Nm(e,n,r,l){var u=(u=J.current)?Fl(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=Bs(r.href),r=as(u).hoistableStyles,l=r.get(n),l||(l={type:"style",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Bs(r.href);var f=as(u).hoistableStyles,p=f.get(e);if(p||(u=u.ownerDocument||u,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,p),(f=u.querySelector(Jr(e)))&&!f._p&&(p.instance=f,p.state.loading=5),Bt.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bt.set(e,r),f||BS(u,e,r,p.state))),n&&l===null)throw Error(a(528,""));return p}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=js(r),r=as(u).hoistableScripts,l=r.get(n),l||(l={type:"script",instance:null,count:0,state:null},r.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Bs(e){return'href="'+xt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function Om(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function BS(e,n,r,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Je(n,"link",r),qe(n),e.head.appendChild(n))}function js(e){return'[src="'+xt(e)+'"]'}function $r(e){return"script[async]"+e}function Dm(e,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+xt(r.href)+'"]');if(l)return n.instance=l,qe(l),l;var u=y({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Je(l,"style",u),Ql(l,r.precedence,e),n.instance=l;case"stylesheet":u=Bs(r.href);var f=e.querySelector(Jr(u));if(f)return n.state.loading|=4,n.instance=f,qe(f),f;l=Om(r),(u=Bt.get(u))&&sf(l,u),f=(e.ownerDocument||e).createElement("link"),qe(f);var p=f;return p._p=new Promise(function(g,v){p.onload=g,p.onerror=v}),Je(f,"link",l),n.state.loading|=4,Ql(f,r.precedence,e),n.instance=f;case"script":return f=js(r.src),(u=e.querySelector($r(f)))?(n.instance=u,qe(u),u):(l=r,(u=Bt.get(f))&&(l=y({},r),rf(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),qe(u),Je(u,"link",l),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ql(l,r.precedence,e));return n.instance}function Ql(e,n,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,p=0;p<l.length;p++){var g=l[p];if(g.dataset.precedence===n)f=g;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(e,n.firstChild))}function sf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function Im(e,n,r){if(Kl===null){var l=new Map,u=Kl=new Map;u.set(r,l)}else u=Kl,l=u.get(r),l||(l=new Map,u.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),u=0;u<r.length;u++){var f=r[u];if(!(f[hr]||f[it]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var p=f.getAttribute(n)||"";p=e+p;var g=l.get(p);g?g.push(f):l.set(p,[f])}}return l}function Mm(e,n,r){e=e.ownerDocument||e,e.head.insertBefore(r,n==="title"?e.querySelector("head > title"):null)}function jS(e,n,r){if(r===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ea=null;function qS(){}function VS(e,n,r){if(ea===null)throw Error(a(475));var l=ea;if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Bs(r.href),f=e.querySelector(Jr(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xl.bind(l),e.then(l,l)),n.state.loading|=4,n.instance=f,qe(f);return}f=e.ownerDocument||e,r=Om(r),(u=Bt.get(u))&&sf(r,u),f=f.createElement("link"),qe(f);var p=f;p._p=new Promise(function(g,v){p.onload=g,p.onerror=v}),Je(f,"link",r),n.instance=f}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=Xl.bind(l),e.addEventListener("load",n),e.addEventListener("error",n))}}function GS(){if(ea===null)throw Error(a(475));var e=ea;return e.stylesheets&&e.count===0&&af(e,e.stylesheets),0<e.count?function(n){var r=setTimeout(function(){if(e.stylesheets&&af(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r)}}:null}function Xl(){if(this.count--,this.count===0){if(this.stylesheets)af(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function af(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(YS,e),Wl=null,Xl.call(e))}function YS(e,n){if(!(n.state.loading&4)){var r=Wl.get(e);if(r)var l=r.get(null);else{r=new Map,Wl.set(e,r);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var p=u[f];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(r.set(p.dataset.precedence,p),l=p)}l&&r.set(null,l)}u=n.instance,p=u.getAttribute("data-precedence"),f=r.get(p)||l,f===l&&r.set(null,u),r.set(p,u),this.count++,l=Xl.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var ta={$$typeof:te,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function FS(e,n,r,l,u,f,p,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.hiddenUpdates=tu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function km(e,n,r,l,u,f,p,g,v,w,O,M){return e=new FS(e,n,r,p,g,v,w,M),n=1,f===!0&&(n|=24),f=At(3,null,null,n),e.current=f,f.stateNode=e,n=Bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:r,cache:n},Gu(f),e}function Um(e){return e?(e=vs,e):vs}function Lm(e,n,r,l,u,f){u=Um(u),l.context===null?l.context=u:l.pendingContext=u,l=qn(n),l.payload={element:r},f=f===void 0?null:f,f!==null&&(l.callback=f),r=Vn(e,l,n),r!==null&&(Dt(r,e,n),Ir(r,e,n))}function zm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<n?r:n}}function lf(e,n){zm(e,n),(e=e.alternate)&&zm(e,n)}function Hm(e){if(e.tag===13){var n=gs(e,67108864);n!==null&&Dt(n,e,67108864),lf(e,67108864)}}var Zl=!0;function QS(e,n,r,l){var u=D.T;D.T=null;var f=P.p;try{P.p=2,of(e,n,r,l)}finally{P.p=f,D.T=u}}function KS(e,n,r,l){var u=D.T;D.T=null;var f=P.p;try{P.p=8,of(e,n,r,l)}finally{P.p=f,D.T=u}}function of(e,n,r,l){if(Zl){var u=uf(l);if(u===null)Kc(e,n,l,Jl,r),Bm(e,l);else if(WS(u,e,n,r,l))l.stopPropagation();else if(Bm(e,l),n&4&&-1<XS.indexOf(e)){for(;u!==null;){var f=rs(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var p=Ci(f.pendingLanes);if(p!==0){var g=f;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var v=1<<31-Tt(p);g.entanglements[1]|=v,p&=~v}rn(f),(me&6)===0&&(Ul=$t()+500,Kr(0))}}break;case 13:g=gs(f,2),g!==null&&Dt(g,f,2),zl(),lf(f,2)}if(f=uf(l),f===null&&Kc(e,n,l,Jl,r),f===u)break;u=f}u!==null&&l.stopPropagation()}else Kc(e,n,l,null,r)}}function uf(e){return e=du(e),cf(e)}var Jl=null;function cf(e){if(Jl=null,e=ss(e),e!==null){var n=c(e);if(n===null)e=null;else{var r=n.tag;if(r===13){if(e=h(n),e!==null)return e;e=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function Pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k0()){case $h:return 2;case ed:return 8;case Ga:case U0:return 32;case td:return 268435456;default:return 32}default:return 32}}var ff=!1,ni=null,ii=null,si=null,na=new Map,ia=new Map,ri=[],XS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bm(e,n){switch(e){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":na.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(n.pointerId)}}function sa(e,n,r,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:r,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rs(n),n!==null&&Hm(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function WS(e,n,r,l,u){switch(n){case"focusin":return ni=sa(ni,e,n,r,l,u),!0;case"dragenter":return ii=sa(ii,e,n,r,l,u),!0;case"mouseover":return si=sa(si,e,n,r,l,u),!0;case"pointerover":var f=u.pointerId;return na.set(f,sa(na.get(f)||null,e,n,r,l,u)),!0;case"gotpointercapture":return f=u.pointerId,ia.set(f,sa(ia.get(f)||null,e,n,r,l,u)),!0}return!1}function jm(e){var n=ss(e.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=h(r),n!==null){e.blockedOn=n,V0(e.priority,function(){if(r.tag===13){var l=Ot();l=nu(l);var u=gs(r,l);u!==null&&Dt(u,r,l),lf(r,l)}});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var r=uf(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);hu=l,r.target.dispatchEvent(l),hu=null}else return n=rs(r),n!==null&&Hm(n),e.blockedOn=r,!1;n.shift()}return!0}function qm(e,n,r){$l(e)&&r.delete(n)}function ZS(){ff=!1,ni!==null&&$l(ni)&&(ni=null),ii!==null&&$l(ii)&&(ii=null),si!==null&&$l(si)&&(si=null),na.forEach(qm),ia.forEach(qm)}function eo(e,n){e.blockedOn===n&&(e.blockedOn=null,ff||(ff=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ZS)))}var to=null;function Vm(e){to!==e&&(to=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){to===e&&(to=null);for(var n=0;n<e.length;n+=3){var r=e[n],l=e[n+1],u=e[n+2];if(typeof l!="function"){if(cf(l||r)===null)continue;break}var f=rs(r);f!==null&&(e.splice(n,3),n-=3,uc(f,{pending:!0,data:u,method:r.method,action:l},l,u))}}))}function ra(e){function n(v){return eo(v,e)}ni!==null&&eo(ni,e),ii!==null&&eo(ii,e),si!==null&&eo(si,e),na.forEach(n),ia.forEach(n);for(var r=0;r<ri.length;r++){var l=ri[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ri.length&&(r=ri[0],r.blockedOn===null);)jm(r),r.blockedOn===null&&ri.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var u=r[l],f=r[l+1],p=u[ht]||null;if(typeof f=="function")p||Vm(r);else if(p){var g=null;if(f&&f.hasAttribute("formAction")){if(u=f,p=f[ht]||null)g=p.formAction;else if(cf(u)!==null)continue}else g=p.action;typeof g=="function"?r[l+1]=g:(r.splice(l,3),l-=3),Vm(r)}}}function hf(e){this._internalRoot=e}no.prototype.render=hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,l=Ot();Lm(r,l,e,n,null,null)},no.prototype.unmount=hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Lm(e.current,2,null,e,null,null),zl(),n[is]=null}};function no(e){this._internalRoot=e}no.prototype.unstable_scheduleHydration=function(e){if(e){var n=ad();e={blockedOn:null,target:e,priority:n};for(var r=0;r<ri.length&&n!==0&&n<ri[r].priority;r++);ri.splice(r,0,e),r===0&&jm(e)}};var Gm=t.version;if(Gm!=="19.1.0")throw Error(a(527,Gm,"19.1.0"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=_(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var JS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ur=io.inject(JS),bt=io}catch{}}return la.createRoot=function(e,n){if(!o(e))throw Error(a(299));var r=!1,l="",u=a_,f=l_,p=o_,g=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(g=n.unstable_transitionCallbacks)),n=km(e,1,!1,null,null,r,l,u,f,p,g,null),e[is]=n.current,Qc(e),new hf(n)},la.hydrateRoot=function(e,n,r){if(!o(e))throw Error(a(299));var l=!1,u="",f=a_,p=l_,g=o_,v=null,w=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(g=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(v=r.unstable_transitionCallbacks),r.formState!==void 0&&(w=r.formState)),n=km(e,1,!0,n,r??null,l,u,f,p,g,v,w),n.context=Um(null),r=n.current,l=Ot(),l=nu(l),u=qn(l),u.callback=null,Vn(r,u,l),r=l,n.current.lanes=r,fr(n,r),rn(n),e[is]=n.current,Qc(e),new no(n)},la.version="19.1.0",la}var eg;function ub(){if(eg)return _f.exports;eg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),_f.exports=ob(),_f.exports}var cb=ub();const fb=()=>{};var tg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(s,t){if(!s)throw nr(t)},nr=function(s){return new Error("Firebase Database ("+gv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):(o&64512)===55296&&a+1<s.length&&(s.charCodeAt(a+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++a)&1023),t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},hb=function(s){const t=[];let i=0,a=0;for(;i<s.length;){const o=s[i++];if(o<128)t[a++]=String.fromCharCode(o);else if(o>191&&o<224){const c=s[i++];t[a++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=s[i++],h=s[i++],d=s[i++],_=((o&7)<<18|(c&63)<<12|(h&63)<<6|d&63)-65536;t[a++]=String.fromCharCode(55296+(_>>10)),t[a++]=String.fromCharCode(56320+(_&1023))}else{const c=s[i++],h=s[i++];t[a++]=String.fromCharCode((o&15)<<12|(c&63)<<6|h&63)}}return t.join("")},ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let o=0;o<s.length;o+=3){const c=s[o],h=o+1<s.length,d=h?s[o+1]:0,_=o+2<s.length,m=_?s[o+2]:0,y=c>>2,E=(c&3)<<4|d>>4;let S=(d&15)<<2|m>>6,k=m&63;_||(k=64,h||(S=64)),a.push(i[y],i[E],i[S],i[k])}return a.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(vv(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):hb(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let o=0;o<s.length;){const c=i[s.charAt(o++)],d=o<s.length?i[s.charAt(o)]:0;++o;const m=o<s.length?i[s.charAt(o)]:64;++o;const E=o<s.length?i[s.charAt(o)]:64;if(++o,c==null||d==null||m==null||E==null)throw new db;const S=c<<2|d>>4;if(a.push(S),m!==64){const k=d<<4&240|m>>2;if(a.push(k),E!==64){const z=m<<6&192|E;a.push(z)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(s){const t=vv(s);return ih.encodeByteArray(t,!0)},ho=function(s){return yv(s).replace(/\./g,"")},po=function(s){try{return ih.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(s){return Ev(void 0,s)}function Ev(s,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const i=t;return new Date(i.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return t}for(const i in t)!t.hasOwnProperty(i)||!_b(i)||(s[i]=Ev(s[i],t[i]));return s}function _b(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=()=>mb().__FIREBASE_DEFAULTS__,vb=()=>{if(typeof process>"u"||typeof tg>"u")return;const s=tg.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},yb=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&po(s[1]);return t&&JSON.parse(t)},sh=()=>{try{return fb()||gb()||vb()||yb()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},Sv=s=>{var t,i;return(i=(t=sh())===null||t===void 0?void 0:t.emulatorHosts)===null||i===void 0?void 0:i[s]},Eb=s=>{const t=Sv(s);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const a=parseInt(t.substring(i+1),10);return t[0]==="["?[t.substring(1,i-1),a]:[t.substring(0,i),a]},bv=()=>{var s;return(s=sh())===null||s===void 0?void 0:s.config},Tv=s=>{var t;return(t=sh())===null||t===void 0?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,i)=>{this.resolve=t,this.reject=i})}wrapCallback(t){return(i,a)=>{i?this.reject(i):this.resolve(a),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(i):t(i,a))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(s){return s.endsWith(".cloudworkstations.dev")}async function Cv(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},a=t||"demo-project",o=s.iat||0,c=s.sub||s.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},s);return[ho(JSON.stringify(i)),ho(JSON.stringify(h)),""].join(".")}const pa={};function bb(){const s={prod:[],emulator:[]};for(const t of Object.keys(pa))pa[t]?s.emulator.push(t):s.prod.push(t);return s}function Tb(s){let t=document.getElementById(s),i=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),i=!0),{created:i,element:t}}let ng=!1;function Av(s,t){if(typeof window>"u"||typeof document>"u"||!Ia(window.location.host)||pa[s]===t||pa[s]||ng)return;pa[s]=t;function i(S){return`__firebase__banner__${S}`}const a="__firebase__banner",c=bb().prod.length>0;function h(){const S=document.getElementById(a);S&&S.remove()}function d(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function _(S,k){S.setAttribute("width","24"),S.setAttribute("id",k),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function m(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{ng=!0,h()},S}function y(S,k){S.setAttribute("id",k),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function E(){const S=Tb(a),k=i("text"),z=document.getElementById(k)||document.createElement("span"),j=i("learnmore"),V=document.getElementById(j)||document.createElement("a"),se=i("preprendIcon"),$=document.getElementById(se)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const te=S.element;d(te),y(V,j);const be=m();_($,se),te.append($,z,V,be),document.body.appendChild(te)}c?(z.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Cb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ab(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function wv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wb(){const s=ct();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function Rb(){return gv.NODE_ADMIN===!0}function Nb(){try{return typeof indexedDB=="object"}catch{return!1}}function Ob(){return new Promise((s,t)=>{try{let i=!0;const a="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(a);o.onsuccess=()=>{o.result.close(),i||self.indexedDB.deleteDatabase(a),s(!0)},o.onupgradeneeded=()=>{i=!1},o.onerror=()=>{var c;t(((c=o.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){t(i)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db="FirebaseError";class vi extends Error{constructor(t,i,a){super(i),this.code=t,this.customData=a,this.name=Db,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ma.prototype.create)}}class Ma{constructor(t,i,a){this.service=t,this.serviceName=i,this.errors=a}create(t,...i){const a=i[0]||{},o=`${this.service}/${t}`,c=this.errors[t],h=c?Ib(c,a):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new vi(o,d,a)}}function Ib(s,t){return s.replace(Mb,(i,a)=>{const o=t[a];return o!=null?String(o):`<${a}?>`})}const Mb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(s){return JSON.parse(s)}function Ke(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv=function(s){let t={},i={},a={},o="";try{const c=s.split(".");t=Sa(po(c[0])||""),i=Sa(po(c[1])||""),o=c[2],a=i.d||{},delete i.d}catch{}return{header:t,claims:i,data:a,signature:o}},xb=function(s){const t=Rv(s),i=t.claims;return!!i&&typeof i=="object"&&i.hasOwnProperty("iat")},kb=function(s){const t=Rv(s).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(s,t){return Object.prototype.hasOwnProperty.call(s,t)}function Zs(s,t){if(Object.prototype.hasOwnProperty.call(s,t))return s[t]}function xf(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function _o(s,t,i){const a={};for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&(a[o]=t.call(i,s[o],o,s));return a}function Qi(s,t){if(s===t)return!0;const i=Object.keys(s),a=Object.keys(t);for(const o of i){if(!a.includes(o))return!1;const c=s[o],h=t[o];if(ig(c)&&ig(h)){if(!Qi(c,h))return!1}else if(c!==h)return!1}for(const o of a)if(!i.includes(o))return!1;return!0}function ig(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(s){const t=[];for(const[i,a]of Object.entries(s))Array.isArray(a)?a.forEach(o=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(i)+"="+encodeURIComponent(a));return t.length?"&"+t.join("&"):""}function ha(s){const t={};return s.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[o,c]=a.split("=");t[decodeURIComponent(o)]=decodeURIComponent(c)}}),t}function da(s){const t=s.indexOf("?");if(!t)return"";const i=s.indexOf("#",t);return s.substring(t,i>0?i:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,i){i||(i=0);const a=this.W_;if(typeof t=="string")for(let E=0;E<16;E++)a[E]=t.charCodeAt(i)<<24|t.charCodeAt(i+1)<<16|t.charCodeAt(i+2)<<8|t.charCodeAt(i+3),i+=4;else for(let E=0;E<16;E++)a[E]=t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3],i+=4;for(let E=16;E<80;E++){const S=a[E-3]^a[E-8]^a[E-14]^a[E-16];a[E]=(S<<1|S>>>31)&4294967295}let o=this.chain_[0],c=this.chain_[1],h=this.chain_[2],d=this.chain_[3],_=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^c&(h^d),y=1518500249):(m=c^h^d,y=1859775393):E<60?(m=c&h|d&(c|h),y=2400959708):(m=c^h^d,y=3395469782);const S=(o<<5|o>>>27)+m+_+y+a[E]&4294967295;_=d,d=h,h=(c<<30|c>>>2)&4294967295,c=o,o=S}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(t,i){if(t==null)return;i===void 0&&(i=t.length);const a=i-this.blockSize;let o=0;const c=this.buf_;let h=this.inbuf_;for(;o<i;){if(h===0)for(;o<=a;)this.compress_(t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<i;)if(c[h]=t.charCodeAt(o),++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}else for(;o<i;)if(c[h]=t[o],++h,++o,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=i}digest(){const t=[];let i=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=i&255,i/=256;this.compress_(this.buf_);let a=0;for(let o=0;o<5;o++)for(let c=24;c>=0;c-=8)t[a]=this.chain_[o]>>c&255,++a;return t}}function Lb(s,t){const i=new zb(s,t);return i.subscribe.bind(i)}class zb{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{t(this)}).catch(a=>{this.error(a)})}next(t){this.forEachObserver(i=>{i.next(t)})}error(t){this.forEachObserver(i=>{i.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,i,a){let o;if(t===void 0&&i===void 0&&a===void 0)throw new Error("Missing Observer.");Hb(t,["next","error","complete"])?o=t:o={next:t,error:i,complete:a},o.next===void 0&&(o.next=yf),o.error===void 0&&(o.error=yf),o.complete===void 0&&(o.complete=yf);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{i(this.observers[t])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hb(s,t){if(typeof s!="object"||s===null)return!1;for(const i of t)if(i in s&&typeof s[i]=="function")return!0;return!1}function yf(){}function ah(s,t){return`${s} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=function(s){const t=[];let i=0;for(let a=0;a<s.length;a++){let o=s.charCodeAt(a);if(o>=55296&&o<=56319){const c=o-55296;a++,L(a<s.length,"Surrogate pair missing trail surrogate.");const h=s.charCodeAt(a)-56320;o=65536+(c<<10)+h}o<128?t[i++]=o:o<2048?(t[i++]=o>>6|192,t[i++]=o&63|128):o<65536?(t[i++]=o>>12|224,t[i++]=o>>6&63|128,t[i++]=o&63|128):(t[i++]=o>>18|240,t[i++]=o>>12&63|128,t[i++]=o>>6&63|128,t[i++]=o&63|128)}return t},Po=function(s){let t=0;for(let i=0;i<s.length;i++){const a=s.charCodeAt(i);a<128?t++:a<2048?t+=2:a>=55296&&a<=56319?(t+=4,i++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(s){return s&&s._delegate?s._delegate:s}class Ki{constructor(t,i,a){this.name=t,this.instanceFactory=i,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const a=new Ho;if(this.instancesDeferred.set(i,a),this.isInitialized(i)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:i});o&&a.resolve(o)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const a=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(i=t==null?void 0:t.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(c){if(o)return null;throw c}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qb(t))try{this.getOrInitializeService({instanceIdentifier:qi})}catch{}for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:o});a.resolve(c)}catch{}}}}clearInstance(t=qi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...t.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qi){return this.instances.has(t)}getOptions(t=qi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:a,options:i});for(const[c,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(c);a===d&&h.resolve(o)}return o}onInit(t,i){var a;const o=this.normalizeInstanceIdentifier(i),c=(a=this.onInitCallbacks.get(o))!==null&&a!==void 0?a:new Set;c.add(t),this.onInitCallbacks.set(o,c);const h=this.instances.get(o);return h&&t(h,o),()=>{c.delete(t)}}invokeOnInitCallbacks(t,i){const a=this.onInitCallbacks.get(i);if(a)for(const o of a)try{o(t,i)}catch{}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let a=this.instances.get(t);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:jb(t),options:i}),this.instances.set(t,a),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(a,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,a)}catch{}return a||null}normalizeInstanceIdentifier(t=qi){return this.component?this.component.multipleInstances?t:qi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jb(s){return s===qi?void 0:s}function qb(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new Bb(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(Se||(Se={}));const Gb={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},Yb=Se.INFO,Fb={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},Qb=(s,t,...i)=>{if(t<s.logLevel)return;const a=new Date().toISOString(),o=Fb[t];if(o)console[o](`[${a}]  ${s.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class lh{constructor(t){this.name=t,this._logLevel=Yb,this._logHandler=Qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Gb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...t),this._logHandler(this,Se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...t),this._logHandler(this,Se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...t),this._logHandler(this,Se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...t),this._logHandler(this,Se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...t),this._logHandler(this,Se.ERROR,...t)}}const Kb=(s,t)=>t.some(i=>s instanceof i);let sg,rg;function Xb(){return sg||(sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wb(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nv=new WeakMap,kf=new WeakMap,Ov=new WeakMap,Ef=new WeakMap,oh=new WeakMap;function Zb(s){const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("success",c),s.removeEventListener("error",h)},c=()=>{i(hi(s.result)),o()},h=()=>{a(s.error),o()};s.addEventListener("success",c),s.addEventListener("error",h)});return t.then(i=>{i instanceof IDBCursor&&Nv.set(i,s)}).catch(()=>{}),oh.set(t,s),t}function Jb(s){if(kf.has(s))return;const t=new Promise((i,a)=>{const o=()=>{s.removeEventListener("complete",c),s.removeEventListener("error",h),s.removeEventListener("abort",h)},c=()=>{i(),o()},h=()=>{a(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",c),s.addEventListener("error",h),s.addEventListener("abort",h)});kf.set(s,t)}let Uf={get(s,t,i){if(s instanceof IDBTransaction){if(t==="done")return kf.get(s);if(t==="objectStoreNames")return s.objectStoreNames||Ov.get(s);if(t==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return hi(s[t])},set(s,t,i){return s[t]=i,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function $b(s){Uf=s(Uf)}function eT(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...i){const a=s.call(Sf(this),t,...i);return Ov.set(a,t.sort?t.sort():[t]),hi(a)}:Wb().includes(s)?function(...t){return s.apply(Sf(this),t),hi(Nv.get(this))}:function(...t){return hi(s.apply(Sf(this),t))}}function tT(s){return typeof s=="function"?eT(s):(s instanceof IDBTransaction&&Jb(s),Kb(s,Xb())?new Proxy(s,Uf):s)}function hi(s){if(s instanceof IDBRequest)return Zb(s);if(Ef.has(s))return Ef.get(s);const t=tT(s);return t!==s&&(Ef.set(s,t),oh.set(t,s)),t}const Sf=s=>oh.get(s);function nT(s,t,{blocked:i,upgrade:a,blocking:o,terminated:c}={}){const h=indexedDB.open(s,t),d=hi(h);return a&&h.addEventListener("upgradeneeded",_=>{a(hi(h.result),_.oldVersion,_.newVersion,hi(h.transaction),_)}),i&&h.addEventListener("blocked",_=>i(_.oldVersion,_.newVersion,_)),d.then(_=>{c&&_.addEventListener("close",()=>c()),o&&_.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const iT=["get","getKey","getAll","getAllKeys","count"],sT=["put","add","delete","clear"],bf=new Map;function ag(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(bf.get(t))return bf.get(t);const i=t.replace(/FromIndex$/,""),a=t!==i,o=sT.includes(i);if(!(i in(a?IDBIndex:IDBObjectStore).prototype)||!(o||iT.includes(i)))return;const c=async function(h,...d){const _=this.transaction(h,o?"readwrite":"readonly");let m=_.store;return a&&(m=m.index(d.shift())),(await Promise.all([m[i](...d),o&&_.done]))[0]};return bf.set(t,c),c}$b(s=>({...s,get:(t,i,a)=>ag(t,i)||s.get(t,i,a),has:(t,i)=>!!ag(t,i)||s.has(t,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(aT(i)){const a=i.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(i=>i).join(" ")}}function aT(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lf="@firebase/app",lg="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new lh("@firebase/app"),lT="@firebase/app-compat",oT="@firebase/analytics-compat",uT="@firebase/analytics",cT="@firebase/app-check-compat",fT="@firebase/app-check",hT="@firebase/auth",dT="@firebase/auth-compat",pT="@firebase/database",_T="@firebase/data-connect",mT="@firebase/database-compat",gT="@firebase/functions",vT="@firebase/functions-compat",yT="@firebase/installations",ET="@firebase/installations-compat",ST="@firebase/messaging",bT="@firebase/messaging-compat",TT="@firebase/performance",CT="@firebase/performance-compat",AT="@firebase/remote-config",wT="@firebase/remote-config-compat",RT="@firebase/storage",NT="@firebase/storage-compat",OT="@firebase/firestore",DT="@firebase/ai",IT="@firebase/firestore-compat",MT="firebase",xT="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="[DEFAULT]",kT={[Lf]:"fire-core",[lT]:"fire-core-compat",[uT]:"fire-analytics",[oT]:"fire-analytics-compat",[fT]:"fire-app-check",[cT]:"fire-app-check-compat",[hT]:"fire-auth",[dT]:"fire-auth-compat",[pT]:"fire-rtdb",[_T]:"fire-data-connect",[mT]:"fire-rtdb-compat",[gT]:"fire-fn",[vT]:"fire-fn-compat",[yT]:"fire-iid",[ET]:"fire-iid-compat",[ST]:"fire-fcm",[bT]:"fire-fcm-compat",[TT]:"fire-perf",[CT]:"fire-perf-compat",[AT]:"fire-rc",[wT]:"fire-rc-compat",[RT]:"fire-gcs",[NT]:"fire-gcs-compat",[OT]:"fire-fst",[IT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[MT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map,UT=new Map,Hf=new Map;function og(s,t){try{s.container.addComponent(t)}catch(i){Dn.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,i)}}function Js(s){const t=s.name;if(Hf.has(t))return Dn.debug(`There were multiple attempts to register component ${t}.`),!1;Hf.set(t,s);for(const i of mo.values())og(i,s);for(const i of UT.values())og(i,s);return!0}function uh(s,t){const i=s.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),s.container.getProvider(t)}function Vt(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new Ma("app","Firebase",LT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(t,i,a){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=xT;function Dv(s,t={}){let i=s;typeof t!="object"&&(t={name:t});const a=Object.assign({name:zf,automaticDataCollectionEnabled:!0},t),o=a.name;if(typeof o!="string"||!o)throw di.create("bad-app-name",{appName:String(o)});if(i||(i=bv()),!i)throw di.create("no-options");const c=mo.get(o);if(c){if(Qi(i,c.options)&&Qi(a,c.config))return c;throw di.create("duplicate-app",{appName:o})}const h=new Vb(o);for(const _ of Hf.values())h.addComponent(_);const d=new zT(i,a,h);return mo.set(o,d),d}function Iv(s=zf){const t=mo.get(s);if(!t&&s===zf&&bv())return Dv();if(!t)throw di.create("no-app",{appName:s});return t}function pi(s,t,i){var a;let o=(a=kT[s])!==null&&a!==void 0?a:s;i&&(o+=`-${i}`);const c=o.match(/\s|\//),h=t.match(/\s|\//);if(c||h){const d=[`Unable to register library "${o}" with version "${t}":`];c&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),c&&h&&d.push("and"),h&&d.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dn.warn(d.join(" "));return}Js(new Ki(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="firebase-heartbeat-database",PT=1,ba="firebase-heartbeat-store";let Tf=null;function Mv(){return Tf||(Tf=nT(HT,PT,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(ba)}catch(i){console.warn(i)}}}}).catch(s=>{throw di.create("idb-open",{originalErrorMessage:s.message})})),Tf}async function BT(s){try{const i=(await Mv()).transaction(ba),a=await i.objectStore(ba).get(xv(s));return await i.done,a}catch(t){if(t instanceof vi)Dn.warn(t.message);else{const i=di.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dn.warn(i.message)}}}async function ug(s,t){try{const a=(await Mv()).transaction(ba,"readwrite");await a.objectStore(ba).put(t,xv(s)),await a.done}catch(i){if(i instanceof vi)Dn.warn(i.message);else{const a=di.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Dn.warn(a.message)}}}function xv(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=1024,qT=30;class VT{constructor(t){this.container=t,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new YT(i),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var t,i;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=cg();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(h=>h.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>qT){const h=FT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){Dn.warn(a)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=cg(),{heartbeatsToSend:a,unsentEntries:o}=GT(this._heartbeatsCache.heartbeats),c=ho(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Dn.warn(i),""}}}function cg(){return new Date().toISOString().substring(0,10)}function GT(s,t=jT){const i=[];let a=s.slice();for(const o of s){const c=i.find(h=>h.agent===o.agent);if(c){if(c.dates.push(o.date),fg(i)>t){c.dates.pop();break}}else if(i.push({agent:o.agent,dates:[o.date]}),fg(i)>t){i.pop();break}a=a.slice(1)}return{heartbeatsToSend:i,unsentEntries:a}}class YT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nb()?Ob().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await BT(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ug(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var i;if(await this._canUseIndexedDBPromise){const o=await this.read();return ug(this.app,{lastSentHeartbeatDate:(i=t.lastSentHeartbeatDate)!==null&&i!==void 0?i:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function fg(s){return ho(JSON.stringify({version:2,heartbeats:s})).length}function FT(s){if(s.length===0)return-1;let t=0,i=s[0].date;for(let a=1;a<s.length;a++)s[a].date<i&&(i=s[a].date,t=a);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(s){Js(new Ki("platform-logger",t=>new rT(t),"PRIVATE")),Js(new Ki("heartbeat",t=>new VT(t),"PRIVATE")),pi(Lf,lg,s),pi(Lf,lg,"esm2017"),pi("fire-js","")}QT("");function ch(s,t){var i={};for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&t.indexOf(a)<0&&(i[a]=s[a]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(s);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(s,a[o])&&(i[a[o]]=s[a[o]]);return i}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KT=kv,Uv=new Ma("auth","Firebase",kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new lh("@firebase/auth");function XT(s,...t){go.logLevel<=Se.WARN&&go.warn(`Auth (${sr}): ${s}`,...t)}function lo(s,...t){go.logLevel<=Se.ERROR&&go.error(`Auth (${sr}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(s,...t){throw fh(s,...t)}function ln(s,...t){return fh(s,...t)}function Lv(s,t,i){const a=Object.assign(Object.assign({},KT()),{[t]:i});return new Ma("auth","Firebase",a).create(t,{appName:s.name})}function Nn(s){return Lv(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fh(s,...t){if(typeof s!="string"){const i=t[0],a=[...t.slice(1)];return a[0]&&(a[0].appName=s.name),s._errorFactory.create(i,...a)}return Uv.create(s,...t)}function X(s,t,...i){if(!s)throw fh(t,...i)}function An(s){const t="INTERNAL ASSERTION FAILED: "+s;throw lo(t),new Error(t)}function In(s,t){s||An(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.href)||""}function WT(){return hg()==="http:"||hg()==="https:"}function hg(){var s;return typeof self<"u"&&((s=self.location)===null||s===void 0?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WT()||Ab()||"connection"in navigator)?navigator.onLine:!0}function JT(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,i){this.shortDelay=t,this.longDelay=i,In(i>t,"Short delay should be less than long delay!"),this.isMobile=rh()||wv()}get(){return ZT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(s,t){In(s.emulator,"Emulator should always be set here");const{url:i}=s.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{static initialize(t,i,a){this.fetchImpl=t,i&&(this.headersImpl=i),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],t1=new xa(3e4,6e4);function yi(s,t){return s.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:s.tenantId}):t}async function Ei(s,t,i,a,o={}){return Hv(s,o,async()=>{let c={},h={};a&&(t==="GET"?h=a:c={body:JSON.stringify(a)});const d=ir(Object.assign({key:s.config.apiKey},h)).slice(1),_=await s._getAdditionalHeaders();_["Content-Type"]="application/json",s.languageCode&&(_["X-Firebase-Locale"]=s.languageCode);const m=Object.assign({method:t,headers:_},c);return Cb()||(m.referrerPolicy="no-referrer"),s.emulatorConfig&&Ia(s.emulatorConfig.host)&&(m.credentials="include"),zv.fetch()(await Pv(s,s.config.apiHost,i,d),m)})}async function Hv(s,t,i){s._canInitEmulator=!1;const a=Object.assign(Object.assign({},$T),t);try{const o=new i1(s),c=await Promise.race([i(),o.promise]);o.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw so(s,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const d=c.ok?h.errorMessage:h.error.message,[_,m]=d.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(s,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw so(s,"email-already-in-use",h);if(_==="USER_DISABLED")throw so(s,"user-disabled",h);const y=a[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Lv(s,y,m);Jt(s,y)}}catch(o){if(o instanceof vi)throw o;Jt(s,"network-request-failed",{message:String(o)})}}async function ka(s,t,i,a,o={}){const c=await Ei(s,t,i,a,o);return"mfaPendingCredential"in c&&Jt(s,"multi-factor-auth-required",{_serverResponse:c}),c}async function Pv(s,t,i,a){const o=`${t}${i}?${a}`,c=s,h=c.config.emulator?hh(s.config,o):`${s.config.apiScheme}://${o}`;return e1.includes(i)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function n1(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((i,a)=>{this.timer=setTimeout(()=>a(ln(this.auth,"network-request-failed")),t1.get())})}}function so(s,t,i){const a={appName:s.name};i.email&&(a.email=i.email),i.phoneNumber&&(a.phoneNumber=i.phoneNumber);const o=ln(s,t,a);return o.customData._tokenResponse=i,o}function dg(s){return s!==void 0&&s.enterprise!==void 0}class s1{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===t)return n1(i.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function r1(s,t){return Ei(s,"GET","/v2/recaptchaConfig",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(s,t){return Ei(s,"POST","/v1/accounts:delete",t)}async function vo(s,t){return Ei(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function l1(s,t=!1){const i=It(s),a=await i.getIdToken(t),o=dh(a);X(o&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,h=c==null?void 0:c.sign_in_provider;return{claims:o,token:a,authTime:_a(Cf(o.auth_time)),issuedAtTime:_a(Cf(o.iat)),expirationTime:_a(Cf(o.exp)),signInProvider:h||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Cf(s){return Number(s)*1e3}function dh(s){const[t,i,a]=s.split(".");if(t===void 0||i===void 0||a===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const o=po(i);return o?JSON.parse(o):(lo("Failed to decode base64 JWT payload"),null)}catch(o){return lo("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pg(s){const t=dh(s);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(s,t,i=!1){if(i)return t;try{return await t}catch(a){throw a instanceof vi&&o1(a)&&s.auth.currentUser===s&&await s.auth.signOut(),a}}function o1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const o=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(s){var t;const i=s.auth,a=await s.getIdToken(),o=await Ta(s,vo(i,{idToken:a}));X(o==null?void 0:o.users.length,i,"internal-error");const c=o.users[0];s._notifyReloadListener(c);const h=!((t=c.providerUserInfo)===null||t===void 0)&&t.length?Bv(c.providerUserInfo):[],d=f1(s.providerData,h),_=s.isAnonymous,m=!(s.email&&c.passwordHash)&&!(d!=null&&d.length),y=_?m:!1,E={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:d,metadata:new Bf(c.createdAt,c.lastLoginAt),isAnonymous:y};Object.assign(s,E)}async function c1(s){const t=It(s);await yo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function f1(s,t){return[...s.filter(a=>!t.some(o=>o.providerId===a.providerId)),...t]}function Bv(s){return s.map(t=>{var{providerId:i}=t,a=ch(t,["providerId"]);return{providerId:i,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1(s,t){const i=await Hv(s,{},async()=>{const a=ir({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=s.config,h=await Pv(s,o,"/v1/token",`key=${c}`),d=await s._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",zv.fetch()(h,{method:"POST",headers:d,body:a})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function d1(s,t){return Ei(s,"POST","/v2/accounts:revokeToken",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const i="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}updateFromIdToken(t){X(t.length!==0,"internal-error");const i=pg(t);this.updateTokensAndExpiration(t,null,i)}async getToken(t,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:a,refreshToken:o,expiresIn:c}=await h1(t,i);this.updateTokensAndExpiration(a,o,Number(c))}updateTokensAndExpiration(t,i,a){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(t,i){const{refreshToken:a,accessToken:o,expirationTime:c}=i,h=new Ys;return a&&(X(typeof a=="string","internal-error",{appName:t}),h.refreshToken=a),o&&(X(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),c&&(X(typeof c=="number","internal-error",{appName:t}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(s,t){X(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Kt{constructor(t){var{uid:i,auth:a,stsTokenManager:o}=t,c=ch(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new Bf(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(t){const i=await Ta(this,this.stsTokenManager.getToken(this.auth,t));return X(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return l1(this,t)}reload(){return c1(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(i=>Object.assign({},i)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const i=new Kt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let a=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),a=!0),i&&await yo(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(Nn(this.auth));const t=await this.getIdToken();return await Ta(this,a1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var a,o,c,h,d,_,m,y;const E=(a=i.displayName)!==null&&a!==void 0?a:void 0,S=(o=i.email)!==null&&o!==void 0?o:void 0,k=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,z=(h=i.photoURL)!==null&&h!==void 0?h:void 0,j=(d=i.tenantId)!==null&&d!==void 0?d:void 0,V=(_=i._redirectEventId)!==null&&_!==void 0?_:void 0,se=(m=i.createdAt)!==null&&m!==void 0?m:void 0,$=(y=i.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:be,isAnonymous:ne,providerData:Xe,stsTokenManager:et}=i;X(te&&et,t,"internal-error");const lt=Ys.fromJSON(this.name,et);X(typeof te=="string",t,"internal-error"),li(E,t.name),li(S,t.name),X(typeof be=="boolean",t,"internal-error"),X(typeof ne=="boolean",t,"internal-error"),li(k,t.name),li(z,t.name),li(j,t.name),li(V,t.name),li(se,t.name),li($,t.name);const ft=new Kt({uid:te,auth:t,email:S,emailVerified:be,displayName:E,isAnonymous:ne,photoURL:z,phoneNumber:k,tenantId:j,stsTokenManager:lt,createdAt:se,lastLoginAt:$});return Xe&&Array.isArray(Xe)&&(ft.providerData=Xe.map(Un=>Object.assign({},Un))),V&&(ft._redirectEventId=V),ft}static async _fromIdTokenResponse(t,i,a=!1){const o=new Ys;o.updateFromServerResponse(i);const c=new Kt({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:a});return await yo(c),c}static async _fromGetAccountInfoResponse(t,i,a){const o=i.users[0];X(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Bv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),d=new Ys;d.updateFromIdToken(a);const _=new Kt({uid:o.localId,auth:t,stsTokenManager:d,isAnonymous:h}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Bf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(_,m),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;function wn(s){In(s instanceof Function,"Expected a class definition");let t=_g.get(s);return t?(In(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,_g.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return i===void 0?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}jv.type="NONE";const mg=jv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(s,t,i){return`firebase:${s}:${t}:${i}`}class Fs{constructor(t,i,a){this.persistence=t,this.auth=i,this.userKey=a;const{config:o,name:c}=this.auth;this.fullUserKey=oo(this.userKey,o.apiKey,c),this.fullPersistenceKey=oo("persistence",o.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const i=await vo(this.auth,{idToken:t}).catch(()=>{});return i?Kt._fromGetAccountInfoResponse(this.auth,i,t):null}return Kt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,a="authUser"){if(!i.length)return new Fs(wn(mg),t,a);const o=(await Promise.all(i.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let c=o[0]||wn(mg);const h=oo(a,t.config.apiKey,t.name);let d=null;for(const m of i)try{const y=await m._get(h);if(y){let E;if(typeof y=="string"){const S=await vo(t,{idToken:y}).catch(()=>{});if(!S)break;E=await Kt._fromGetAccountInfoResponse(t,S,y)}else E=Kt._fromJSON(t,y);m!==c&&(d=E),c=m;break}}catch{}const _=o.filter(m=>m._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new Fs(c,t,a):(c=_[0],d&&await c._set(h,d.toJSON()),await Promise.all(i.map(async m=>{if(m!==c)try{await m._remove(h)}catch{}})),new Fs(c,t,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Qv(t))return"Blackberry";if(Kv(t))return"Webos";if(Vv(t))return"Safari";if((t.includes("chrome/")||Gv(t))&&!t.includes("edge/"))return"Chrome";if(Fv(t))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=s.match(i);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function qv(s=ct()){return/firefox\//i.test(s)}function Vv(s=ct()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Gv(s=ct()){return/crios\//i.test(s)}function Yv(s=ct()){return/iemobile/i.test(s)}function Fv(s=ct()){return/android/i.test(s)}function Qv(s=ct()){return/blackberry/i.test(s)}function Kv(s=ct()){return/webos/i.test(s)}function ph(s=ct()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function p1(s=ct()){var t;return ph(s)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _1(){return wb()&&document.documentMode===10}function Xv(s=ct()){return ph(s)||Fv(s)||Kv(s)||Qv(s)||/windows phone/i.test(s)||Yv(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(s,t=[]){let i;switch(s){case"Browser":i=gg(ct());break;case"Worker":i=`${gg(ct())}-${s}`;break;default:i=s}const a=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${sr}/${a}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,i){const a=c=>new Promise((h,d)=>{try{const _=t(c);h(_)}catch(_){d(_)}});a.onAbort=i,this.queue.push(a);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const i=[];try{for(const a of this.queue)await a(t),a.onAbort&&i.push(a.onAbort)}catch(a){i.reverse();for(const o of i)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(s,t={}){return Ei(s,"GET","/v2/passwordPolicy",yi(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=6;class y1{constructor(t){var i,a,o,c;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=h.minPasswordLength)!==null&&i!==void 0?i:v1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(a=t.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(c=t.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var i,a,o,c,h,d;const _={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,_),this.validatePasswordCharacterOptions(t,_),_.isValid&&(_.isValid=(i=_.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),_.isValid&&(_.isValid=(a=_.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),_.isValid&&(_.isValid=(o=_.containsLowercaseLetter)!==null&&o!==void 0?o:!0),_.isValid&&(_.isValid=(c=_.containsUppercaseLetter)!==null&&c!==void 0?c:!0),_.isValid&&(_.isValid=(h=_.containsNumericCharacter)!==null&&h!==void 0?h:!0),_.isValid&&(_.isValid=(d=_.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),_}validatePasswordLengthOptions(t,i){const a=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;a&&(i.meetsMinPasswordLength=t.length>=a),o&&(i.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let a;for(let o=0;o<t.length;o++)a=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(t,i,a,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(t,i,a,o){this.app=t,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=a,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vg(this),this.idTokenSubscription=new vg(this),this.beforeStateQueue=new m1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=wn(i)),this._initializationPromise=this.queue(async()=>{var a,o,c;if(!this._deleted&&(this.persistenceManager=await Fs.create(this,t),(a=this._resolvePersistenceManagerAvailable)===null||a===void 0||a.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((c=this.currentUser)===null||c===void 0?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const i=await vo(this,{idToken:t}),a=await Kt._fromGetAccountInfoResponse(this,i,t);await this.directlySetCurrentUser(a)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var i;if(Vt(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let o=a,c=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,d=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!h||h===d)&&(_!=null&&_.user)&&(o=_.user,c=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await yo(t)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=JT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Vt(this.app))return Promise.reject(Nn(this));const i=t?It(t):null;return i&&X(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t,i=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Vt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await g1(this),i=new y1(t);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ma("auth","Firebase",t())}onAuthStateChanged(t,i,a){return this.registerStateListener(this.authStateSubscription,t,i,a)}beforeAuthStateChanged(t,i){return this.beforeStateQueue.pushCallback(t,i)}onIdTokenChanged(t,i,a){return this.registerStateListener(this.idTokenSubscription,t,i,a)}authStateReady(){return new Promise((t,i)=>{if(this.currentUser)t();else{const a=this.onAuthStateChanged(()=>{a(),t()},i)}})}async revokeAccessToken(t){if(this.currentUser){const i=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:i};this.tenantId!=null&&(a.tenantId=this.tenantId),await d1(this,a)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,i){const a=await this.getOrInitRedirectPersistenceManager(i);return t===null?a.removeCurrentUser():a.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&wn(t)||this._popupRedirectResolver;X(i,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[wn(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,a;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===t?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(i=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,a,o){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(d,this,"internal-error"),d.then(()=>{h||c(this.currentUser)}),typeof i=="function"){const _=t.addObserver(i,a,o);return()=>{h=!0,_()}}else{const _=t.addObserver(i);return()=>{h=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const a=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());a&&(i["X-Firebase-Client"]=a);const o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var t;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return i!=null&&i.error&&XT(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function ts(s){return It(s)}class vg{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lb(i=>this.observer=i)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S1(s){Bo=s}function Zv(s){return Bo.loadJS(s)}function b1(){return Bo.recaptchaEnterpriseScript}function T1(){return Bo.gapiScript}function C1(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class A1{constructor(){this.enterprise=new w1}ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}class w1{ready(t){t()}execute(t,i){return Promise.resolve("token")}render(t,i){return""}}const R1="recaptcha-enterprise",Jv="NO_RECAPTCHA";class N1{constructor(t){this.type=R1,this.auth=ts(t)}async verify(t="verify",i=!1){async function a(c){if(!i){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,d)=>{r1(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new s1(_);return c.tenantId==null?c._agentRecaptchaConfig=m:c._tenantRecaptchaConfigs[c.tenantId]=m,h(m.siteKey)}}).catch(_=>{d(_)})})}function o(c,h,d){const _=window.grecaptcha;dg(_)?_.enterprise.ready(()=>{_.enterprise.execute(c,{action:t}).then(m=>{h(m)}).catch(()=>{h(Jv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new A1().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{a(this.auth).then(d=>{if(!i&&dg(window.grecaptcha))o(d,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let _=b1();_.length!==0&&(_+=d),Zv(_).then(()=>{o(d,c,h)}).catch(m=>{h(m)})}}).catch(d=>{h(d)})})}}async function yg(s,t,i,a=!1,o=!1){const c=new N1(s);let h;if(o)h=Jv;else try{h=await c.verify(i)}catch{h=await c.verify(i,!0)}const d=Object.assign({},t);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const _=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const _=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function jf(s,t,i,a,o){var c;if(!((c=s._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await yg(s,t,i,i==="getOobCode");return a(s,h)}else return a(s,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await yg(s,t,i,i==="getOobCode");return a(s,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(s,t){const i=uh(s,"auth");if(i.isInitialized()){const o=i.getImmediate(),c=i.getOptions();if(Qi(c,t??{}))return o;Jt(o,"already-initialized")}return i.initialize({options:t})}function D1(s,t){const i=(t==null?void 0:t.persistence)||[],a=(Array.isArray(i)?i:[i]).map(wn);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(a,t==null?void 0:t.popupRedirectResolver)}function I1(s,t,i){const a=ts(s);X(/^https?:\/\//.test(t),a,"invalid-emulator-scheme");const o=!1,c=$v(t),{host:h,port:d}=M1(t),_=d===null?"":`:${d}`,m={url:`${c}//${h}${_}/`},y=Object.freeze({host:h,port:d,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!a._canInitEmulator){X(a.config.emulator&&a.emulatorConfig,a,"emulator-config-failed"),X(Qi(m,a.config.emulator)&&Qi(y,a.emulatorConfig),a,"emulator-config-failed");return}a.config.emulator=m,a.emulatorConfig=y,a.settings.appVerificationDisabledForTesting=!0,Ia(h)?(Cv(`${c}//${h}${_}`),Av("Auth",!0)):x1()}function $v(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function M1(s){const t=$v(s),i=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!i)return{host:"",port:null};const a=i[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(a);if(o){const c=o[1];return{host:c,port:Eg(a.substr(c.length+1))}}else{const[c,h]=a.split(":");return{host:c,port:Eg(h)}}}function Eg(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function x1(){function s(){const t=document.createElement("p"),i=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return An("not implemented")}_getIdTokenResponse(t){return An("not implemented")}_linkToIdToken(t,i){return An("not implemented")}_getReauthenticationResolver(t){return An("not implemented")}}async function k1(s,t){return Ei(s,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(s,t){return ka(s,"POST","/v1/accounts:signInWithPassword",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(s,t){return ka(s,"POST","/v1/accounts:signInWithEmailLink",yi(s,t))}async function z1(s,t){return ka(s,"POST","/v1/accounts:signInWithEmailLink",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends _h{constructor(t,i,a,o=null){super("password",a),this._email=t,this._password=i,this._tenantId=o}static _fromEmailAndPassword(t,i){return new Ca(t,i,"password")}static _fromEmailAndCode(t,i,a=null){return new Ca(t,i,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(t,i,"signInWithPassword",U1);case"emailLink":return L1(t,{email:this._email,oobCode:this._password});default:Jt(t,"internal-error")}}async _linkToIdToken(t,i){switch(this.signInMethod){case"password":const a={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jf(t,a,"signUpPassword",k1);case"emailLink":return z1(t,{idToken:i,email:this._email,oobCode:this._password});default:Jt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(s,t){return ka(s,"POST","/v1/accounts:signInWithIdp",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="http://localhost";class Xi extends _h{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Xi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Jt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i=typeof t=="string"?JSON.parse(t):t,{providerId:a,signInMethod:o}=i,c=ch(i,["providerId","signInMethod"]);if(!a||!o)return null;const h=new Xi(a,o);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(t){const i=this.buildRequest();return Qs(t,i)}_linkToIdToken(t,i){const a=this.buildRequest();return a.idToken=i,Qs(t,a)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Qs(t,i)}buildRequest(){const t={requestUri:H1,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=ir(i)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B1(s){const t=ha(da(s)).link,i=t?ha(da(t)).deep_link_id:null,a=ha(da(s)).deep_link_id;return(a?ha(da(a)).link:null)||a||i||t||s}class mh{constructor(t){var i,a,o,c,h,d;const _=ha(da(t)),m=(i=_.apiKey)!==null&&i!==void 0?i:null,y=(a=_.oobCode)!==null&&a!==void 0?a:null,E=P1((o=_.mode)!==null&&o!==void 0?o:null);X(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(c=_.continueUrl)!==null&&c!==void 0?c:null,this.languageCode=(h=_.lang)!==null&&h!==void 0?h:null,this.tenantId=(d=_.tenantId)!==null&&d!==void 0?d:null}static parseLink(t){const i=B1(t);try{return new mh(i)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.providerId=rr.PROVIDER_ID}static credential(t,i){return Ca._fromEmailAndPassword(t,i)}static credentialWithLink(t,i){const a=mh.parseLink(i);return X(a,"argument-error"),Ca._fromEmailAndCode(t,a.code,a.tenantId)}}rr.PROVIDER_ID="password";rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends ey{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ua{constructor(){super("facebook.com")}static credential(t){return Xi._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return oi.credentialFromTaggedObject(t)}static credentialFromError(t){return oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return oi.credential(t.oauthAccessToken)}catch{return null}}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com";oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ua{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Xi._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return ui.credentialFromTaggedObject(t)}static credentialFromError(t){return ui.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:a}=t;if(!i&&!a)return null;try{return ui.credential(i,a)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ua{constructor(){super("github.com")}static credential(t){return Xi._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ci.credentialFromTaggedObject(t)}static credentialFromError(t){return ci.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ci.credential(t.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends Ua{constructor(){super("twitter.com")}static credential(t,i){return Xi._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:i})}static credentialFromResult(t){return fi.credentialFromTaggedObject(t)}static credentialFromError(t){return fi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:i,oauthTokenSecret:a}=t;if(!i||!a)return null;try{return fi.credential(i,a)}catch{return null}}}fi.TWITTER_SIGN_IN_METHOD="twitter.com";fi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(s,t){return ka(s,"POST","/v1/accounts:signUp",yi(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,a,o=!1){const c=await Kt._fromIdTokenResponse(t,a,o),h=Sg(a);return new Wi({user:c,providerId:h,_tokenResponse:a,operationType:i})}static async _forOperation(t,i,a){await t._updateTokensIfNecessary(a,!0);const o=Sg(a);return new Wi({user:t,providerId:o,_tokenResponse:a,operationType:i})}}function Sg(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo extends vi{constructor(t,i,a,o){var c;super(i.code,i.message),this.operationType=a,this.user=o,Object.setPrototypeOf(this,Eo.prototype),this.customData={appName:t.name,tenantId:(c=t.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(t,i,a,o){return new Eo(t,i,a,o)}}function ty(s,t,i,a){return(t==="reauthenticate"?i._getReauthenticationResolver(s):i._getIdTokenResponse(s)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?Eo._fromErrorAndOperation(s,c,t,a):c})}async function q1(s,t,i=!1){const a=await Ta(s,t._linkToIdToken(s.auth,await s.getIdToken()),i);return Wi._forOperation(s,"link",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(s,t,i=!1){const{auth:a}=s;if(Vt(a.app))return Promise.reject(Nn(a));const o="reauthenticate";try{const c=await Ta(s,ty(a,o,t,s),i);X(c.idToken,a,"internal-error");const h=dh(c.idToken);X(h,a,"internal-error");const{sub:d}=h;return X(s.uid===d,a,"user-mismatch"),Wi._forOperation(s,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&Jt(a,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(s,t,i=!1){if(Vt(s.app))return Promise.reject(Nn(s));const a="signIn",o=await ty(s,a,t),c=await Wi._fromIdTokenResponse(s,a,o);return i||await s._updateCurrentUser(c.user),c}async function G1(s,t){return ny(ts(s),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(s){const t=ts(s);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Y1(s,t,i){if(Vt(s.app))return Promise.reject(Nn(s));const a=ts(s),h=await jf(a,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",j1).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&iy(s),_}),d=await Wi._fromIdTokenResponse(a,"signIn",h);return await a._updateCurrentUser(d.user),d}function F1(s,t,i){return Vt(s.app)?Promise.reject(Nn(s)):G1(It(s),rr.credential(t,i)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&iy(s),a})}function Q1(s,t,i,a){return It(s).onIdTokenChanged(t,i,a)}function K1(s,t,i){return It(s).beforeAuthStateChanged(t,i)}function X1(s,t,i,a){return It(s).onAuthStateChanged(t,i,a)}const So="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(So,"1"),this.storage.removeItem(So),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=1e3,Z1=10;class ry extends sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const a=this.storage.getItem(i),o=this.localCache[i];a!==o&&t(i,o,a)}}onStorageEvent(t,i=!1){if(!t.key){this.forAllChangedKeys((h,d,_)=>{this.notifyListeners(h,_)});return}const a=t.key;i?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(a);!i&&this.localCache[a]===h||this.notifyListeners(a,h)},c=this.storage.getItem(a);_1()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,Z1):o()}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,i,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:a}),!0)})},W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}ry.type="LOCAL";const J1=ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay extends sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,i){}_removeListener(t,i){}}ay.type="SESSION";const ly=ay;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find(o=>o.isListeningto(t));if(i)return i;const a=new jo(t);return this.receivers.push(a),a}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:a,eventType:o,data:c}=i.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;i.ports[0].postMessage({status:"ack",eventId:a,eventType:o});const d=Array.from(h).map(async m=>m(i.origin,c)),_=await $1(d);i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:_})}_subscribe(t,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),(!i||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(s="",t=10){let i="";for(let a=0;a<t;a++)i+=Math.floor(Math.random()*10);return s+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,a=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,h;return new Promise((d,_)=>{const m=gh("",20);o.port1.start();const y=setTimeout(()=>{_(new Error("unsupported_event"))},a);h={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===m)switch(S.data.status){case"ack":clearTimeout(y),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),d(S.data.response);break;default:clearTimeout(y),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:m,data:i},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function tC(s){on().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function nC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iC(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)===null||s===void 0?void 0:s.controller)||null}function sC(){return oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="firebaseLocalStorageDb",rC=1,bo="firebaseLocalStorage",cy="fbase_key";class La{constructor(t){this.request=t}toPromise(){return new Promise((t,i)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function qo(s,t){return s.transaction([bo],t?"readwrite":"readonly").objectStore(bo)}function aC(){const s=indexedDB.deleteDatabase(uy);return new La(s).toPromise()}function qf(){const s=indexedDB.open(uy,rC);return new Promise((t,i)=>{s.addEventListener("error",()=>{i(s.error)}),s.addEventListener("upgradeneeded",()=>{const a=s.result;try{a.createObjectStore(bo,{keyPath:cy})}catch(o){i(o)}}),s.addEventListener("success",async()=>{const a=s.result;a.objectStoreNames.contains(bo)?t(a):(a.close(),await aC(),t(await qf()))})})}async function bg(s,t,i){const a=qo(s,!0).put({[cy]:t,value:i});return new La(a).toPromise()}async function lC(s,t){const i=qo(s,!1).get(t),a=await new La(i).toPromise();return a===void 0?null:a.value}function Tg(s,t){const i=qo(s,!0).delete(t);return new La(i).toPromise()}const oC=800,uC=3;class fy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(t){let i=0;for(;;)try{const a=await this._openDb();return await t(a)}catch(a){if(i++>uC)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jo._getInstance(sC()),this.receiver._subscribe("keyChanged",async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(t,i)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await nC(),!this.activeServiceWorker)return;this.sender=new eC(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((t=a[0])===null||t===void 0)&&t.fulfilled&&!((i=a[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||iC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await qf();return await bg(t,So,"1"),await Tg(t,So),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite(async()=>(await this._withRetries(a=>bg(a,t,i)),this.localCache[t]=i,this.notifyServiceWorker(t)))}async _get(t){const i=await this._withRetries(a=>lC(a,t));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Tg(i,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=qo(o,!1).getAll();return new La(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const i=[],a=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)a.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),i.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!a.has(o)&&(this.notifyListeners(o,null),i.push(o));return i}notifyListeners(t,i){this.localCache[t]=i;const a=this.listeners[t];if(a)for(const o of Array.from(a))o(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fy.type="LOCAL";const cC=fy;new xa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(s,t){return t?wn(t):(X(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends _h{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qs(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Qs(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Qs(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function hC(s){return ny(s.auth,new vh(s),s.bypassAuthState)}function dC(s){const{auth:t,user:i}=s;return X(i,t,"internal-error"),V1(i,new vh(s),s.bypassAuthState)}async function pC(s){const{auth:t,user:i}=s;return X(i,t,"internal-error"),q1(i,new vh(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t,i,a,o,c=!1){this.auth=t,this.resolver=a,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(t){const{urlResponse:i,sessionId:a,postBody:o,tenantId:c,error:h,type:d}=t;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:i,sessionId:a,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(_))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return hC;case"linkViaPopup":case"linkViaRedirect":return pC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:Jt(this.auth,"internal-error")}}resolve(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new xa(2e3,1e4);class Vs extends hy{constructor(t,i,a,o,c){super(t,i,o,c),this.provider=a,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const t=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,a;if(!((a=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_C.get())};t()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="pendingRedirect",uo=new Map;class gC extends hy{constructor(t,i,a=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a),this.eventId=null}async execute(){let t=uo.get(this.auth._key());if(!t){try{const a=await vC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(a)}catch(i){t=()=>Promise.reject(i)}uo.set(this.auth._key(),t)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vC(s,t){const i=SC(t),a=EC(s);if(!await a._isAvailable())return!1;const o=await a._get(i)==="true";return await a._remove(i),o}function yC(s,t){uo.set(s._key(),t)}function EC(s){return wn(s._redirectPersistence)}function SC(s){return oo(mC,s.config.apiKey,s.name)}async function bC(s,t,i=!1){if(Vt(s.app))return Promise.reject(Nn(s));const a=ts(s),o=fC(a,t),h=await new gC(a,o,i).execute();return h&&!i&&(delete h.user._redirectEventId,await a._persistUserIfCurrent(h.user),await a._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=10*60*1e3;class CC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(t,a)&&(i=!0,this.sendToConsumer(t,a),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AC(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var a;if(t.error&&!dy(t)){const o=((a=t.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";i.onError(ln(this.auth,o))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const a=i.eventId===null||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&a}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=TC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cg(t))}saveEventToCache(t){this.cachedEventUids.add(Cg(t)),this.lastProcessedEventTime=Date.now()}}function Cg(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function dy({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AC(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wC(s,t={}){return Ei(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NC=/^https?/;async function OC(s){if(s.config.emulator)return;const{authorizedDomains:t}=await wC(s);for(const i of t)try{if(DC(i))return}catch{}Jt(s,"unauthorized-domain")}function DC(s){const t=Pf(),{protocol:i,hostname:a}=new URL(t);if(s.startsWith("chrome-extension://")){const h=new URL(s);return h.hostname===""&&a===""?i==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):i==="chrome-extension:"&&h.hostname===a}if(!NC.test(i))return!1;if(RC.test(s))return a===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new xa(3e4,6e4);function Ag(){const s=on().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let i=0;i<s.CP.length;i++)s.CP[i]=null}}function MC(s){return new Promise((t,i)=>{var a,o,c;function h(){Ag(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ag(),i(ln(s,"network-request-failed"))},timeout:IC.get()})}if(!((o=(a=on().gapi)===null||a===void 0?void 0:a.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((c=on().gapi)===null||c===void 0)&&c.load)h();else{const d=C1("iframefcb");return on()[d]=()=>{gapi.load?h():i(ln(s,"network-request-failed"))},Zv(`${T1()}?onload=${d}`).catch(_=>i(_))}}).catch(t=>{throw co=null,t})}let co=null;function xC(s){return co=co||MC(s),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=new xa(5e3,15e3),UC="__/auth/iframe",LC="emulator/auth/iframe",zC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PC(s){const t=s.config;X(t.authDomain,s,"auth-domain-config-required");const i=t.emulator?hh(t,LC):`https://${s.config.authDomain}/${UC}`,a={apiKey:t.apiKey,appName:s.name,v:sr},o=HC.get(s.config.apiHost);o&&(a.eid=o);const c=s._getFrameworks();return c.length&&(a.fw=c.join(",")),`${i}?${ir(a).slice(1)}`}async function BC(s){const t=await xC(s),i=on().gapi;return X(i,s,"internal-error"),t.open({where:document.body,url:PC(s),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zC,dontclear:!0},a=>new Promise(async(o,c)=>{await a.restyle({setHideOnLeave:!1});const h=ln(s,"network-request-failed"),d=on().setTimeout(()=>{c(h)},kC.get());function _(){on().clearTimeout(d),o(a)}a.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qC=500,VC=600,GC="_blank",YC="http://localhost";class wg{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FC(s,t,i,a=qC,o=VC){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const _=Object.assign(Object.assign({},jC),{width:a.toString(),height:o.toString(),top:c,left:h}),m=ct().toLowerCase();i&&(d=Gv(m)?GC:i),qv(m)&&(t=t||YC,_.scrollbars="yes");const y=Object.entries(_).reduce((S,[k,z])=>`${S}${k}=${z},`,"");if(p1(m)&&d!=="_self")return QC(t||"",d),new wg(null);const E=window.open(t||"",d,y);X(E,s,"popup-blocked");try{E.focus()}catch{}return new wg(E)}function QC(s,t){const i=document.createElement("a");i.href=s,i.target=t;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="__/auth/handler",XC="emulator/auth/handler",WC=encodeURIComponent("fac");async function Rg(s,t,i,a,o,c){X(s.config.authDomain,s,"auth-domain-config-required"),X(s.config.apiKey,s,"invalid-api-key");const h={apiKey:s.config.apiKey,appName:s.name,authType:i,redirectUrl:a,v:sr,eventId:o};if(t instanceof ey){t.setDefaultLanguage(s.languageCode),h.providerId=t.providerId||"",xf(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[y,E]of Object.entries({}))h[y]=E}if(t instanceof Ua){const y=t.getScopes().filter(E=>E!=="");y.length>0&&(h.scopes=y.join(","))}s.tenantId&&(h.tid=s.tenantId);const d=h;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const _=await s._getAppCheckToken(),m=_?`#${WC}=${encodeURIComponent(_)}`:"";return`${ZC(s)}?${ir(d).slice(1)}${m}`}function ZC({config:s}){return s.emulator?hh(s,XC):`https://${s.authDomain}/${KC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ly,this._completeRedirectFn=bC,this._overrideRedirectResult=yC}async _openPopup(t,i,a,o){var c;In((c=this.eventManagers[t._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const h=await Rg(t,i,a,Pf(),o);return FC(t,h,gh())}async _openRedirect(t,i,a,o){await this._originValidation(t);const c=await Rg(t,i,a,Pf(),o);return tC(c),new Promise(()=>{})}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:o,promise:c}=this.eventManagers[i];return o?Promise.resolve(o):(In(c,"If manager is not set, promise should be"),c)}const a=this.initAndGetManager(t);return this.eventManagers[i]={promise:a},a.catch(()=>{delete this.eventManagers[i]}),a}async initAndGetManager(t){const i=await BC(t),a=new CC(t);return i.register("authEvent",o=>(X(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:a.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:a},this.iframes[t._key()]=i,a}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send(Af,{type:Af},o=>{var c;const h=(c=o==null?void 0:o[0])===null||c===void 0?void 0:c[Af];h!==void 0&&i(!!h),Jt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=OC(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Xv()||Vv()||ph()}}const $C=JC;var Ng="@firebase/auth",Og="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged(a=>{t((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nA(s){Js(new Ki("auth",(t,{options:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=a.options;X(h&&!h.includes(":"),"invalid-api-key",{appName:a.name});const _={apiKey:h,authDomain:d,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(s)},m=new E1(a,o,c,_);return D1(m,i),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,i,a)=>{t.getProvider("auth-internal").initialize()})),Js(new Ki("auth-internal",t=>{const i=ts(t.getProvider("auth").getImmediate());return(a=>new eA(a))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),pi(Ng,Og,tA(s)),pi(Ng,Og,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=5*60,sA=Tv("authIdTokenMaxAge")||iA;let Dg=null;const rA=s=>async t=>{const i=t&&await t.getIdTokenResult(),a=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(a&&a>sA)return;const o=i==null?void 0:i.token;Dg!==o&&(Dg=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function py(s=Iv()){const t=uh(s,"auth");if(t.isInitialized())return t.getImmediate();const i=O1(s,{popupRedirectResolver:$C,persistence:[cC,J1,ly]}),a=Tv("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(a,location.origin);if(location.origin===c.origin){const h=rA(c.toString());K1(i,h,()=>h(i.currentUser)),Q1(i,d=>h(d))}}const o=Sv("auth");return o&&I1(i,`http://${o}`),i}function aA(){var s,t;return(t=(s=document.getElementsByTagName("head"))===null||s===void 0?void 0:s[0])!==null&&t!==void 0?t:document}S1({loadJS(s){return new Promise((t,i)=>{const a=document.createElement("script");a.setAttribute("src",s),a.onload=t,a.onerror=o=>{const c=ln("internal-error");c.customData=o,i(c)},a.type="text/javascript",a.charset="UTF-8",aA().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nA("Browser");var Ig={};const Mg="@firebase/database",xg="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _y="";function lA(s){_y=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,i){i==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Ke(i))}get(t){const i=this.domStorage_.getItem(this.prefixedName_(t));return i==null?null:Sa(i)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,i){i==null?delete this.cache_[t]:this.cache_[t]=i}get(t){return kn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const t=window[s];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new oA(t)}}catch{}return new uA},Gi=my("localStorage"),cA=my("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=new lh("@firebase/database"),fA=function(){let s=1;return function(){return s++}}(),gy=function(s){const t=Pb(s),i=new Ub;i.update(t);const a=i.digest();return ih.encodeByteArray(a)},za=function(...s){let t="";for(let i=0;i<s.length;i++){const a=s[i];Array.isArray(a)||a&&typeof a=="object"&&typeof a.length=="number"?t+=za.apply(null,a):typeof a=="object"?t+=Ke(a):t+=a,t+=" "}return t};let ma=null,kg=!0;const hA=function(s,t){L(!0,"Can't turn on custom loggers persistently."),Ks.logLevel=Se.VERBOSE,ma=Ks.log.bind(Ks)},at=function(...s){if(kg===!0&&(kg=!1,ma===null&&cA.get("logging_enabled")===!0&&hA()),ma){const t=za.apply(null,s);ma(t)}},Ha=function(s){return function(...t){at(s,...t)}},Vf=function(...s){const t="FIREBASE INTERNAL ERROR: "+za(...s);Ks.error(t)},Mn=function(...s){const t=`FIREBASE FATAL ERROR: ${za(...s)}`;throw Ks.error(t),new Error(t)},yt=function(...s){const t="FIREBASE WARNING: "+za(...s);Ks.warn(t)},dA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vy=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},pA=function(s){if(document.readyState==="complete")s();else{let t=!1;const i=function(){if(!document.body){setTimeout(i,Math.floor(10));return}t||(t=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&i()}),window.attachEvent("onload",i))}},$s="[MIN_NAME]",Zi="[MAX_NAME]",ar=function(s,t){if(s===t)return 0;if(s===$s||t===Zi)return-1;if(t===$s||s===Zi)return 1;{const i=Ug(s),a=Ug(t);return i!==null?a!==null?i-a===0?s.length-t.length:i-a:-1:a!==null?1:s<t?-1:1}},_A=function(s,t){return s===t?0:s<t?-1:1},oa=function(s,t){if(t&&s in t)return t[s];throw new Error("Missing required key ("+s+") in object: "+Ke(t))},yh=function(s){if(typeof s!="object"||s===null)return Ke(s);const t=[];for(const a in s)t.push(a);t.sort();let i="{";for(let a=0;a<t.length;a++)a!==0&&(i+=","),i+=Ke(t[a]),i+=":",i+=yh(s[t[a]]);return i+="}",i},yy=function(s,t){const i=s.length;if(i<=t)return[s];const a=[];for(let o=0;o<i;o+=t)o+t>i?a.push(s.substring(o,i)):a.push(s.substring(o,o+t));return a};function Et(s,t){for(const i in s)s.hasOwnProperty(i)&&t(i,s[i])}const Ey=function(s){L(!vy(s),"Invalid JSON number");const t=11,i=52,a=(1<<t-1)-1;let o,c,h,d,_;s===0?(c=0,h=0,o=1/s===-1/0?1:0):(o=s<0,s=Math.abs(s),s>=Math.pow(2,1-a)?(d=Math.min(Math.floor(Math.log(s)/Math.LN2),a),c=d+a,h=Math.round(s*Math.pow(2,i-d)-Math.pow(2,i))):(c=0,h=Math.round(s/Math.pow(2,1-a-i))));const m=[];for(_=i;_;_-=1)m.push(h%2?1:0),h=Math.floor(h/2);for(_=t;_;_-=1)m.push(c%2?1:0),c=Math.floor(c/2);m.push(o?1:0),m.reverse();const y=m.join("");let E="";for(_=0;_<64;_+=8){let S=parseInt(y.substr(_,8),2).toString(16);S.length===1&&(S="0"+S),E=E+S}return E.toLowerCase()},mA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},gA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vA(s,t){let i="Unknown Error";s==="too_big"?i="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?i="Client doesn't have permission to access the desired data.":s==="unavailable"&&(i="The service is unavailable");const a=new Error(s+" at "+t._path.toString()+": "+i);return a.code=s.toUpperCase(),a}const yA=new RegExp("^-?(0*)\\d{1,10}$"),EA=-2147483648,SA=2147483647,Ug=function(s){if(yA.test(s)){const t=Number(s);if(t>=EA&&t<=SA)return t}return null},lr=function(s){try{s()}catch(t){setTimeout(()=>{const i=t.stack||"";throw yt("Exception was thrown by user callback.",i),t},Math.floor(0))}},bA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ga=function(s,t){const i=setTimeout(s,t);return typeof i=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(i):typeof i=="object"&&i.unref&&i.unref(),i};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(t,i){this.appCheckProvider=i,this.appName=t.name,Vt(t)&&t.settings.appCheckToken&&(this.serverAppAppCheckToken=t.settings.appCheckToken),this.appCheck=i==null?void 0:i.getImmediate({optional:!0}),this.appCheck||i==null||i.get().then(a=>this.appCheck=a)}getToken(t){if(this.serverAppAppCheckToken){if(t)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(t):new Promise((i,a)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){var i;(i=this.appCheckProvider)===null||i===void 0||i.get().then(a=>a.addTokenListener(t))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t,i,a){this.appName_=t,this.firebaseOptions_=i,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(o=>this.auth_=o)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(i=>i&&i.code==="auth/token-not-initialized"?(at("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((i,a)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(i,a):i(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(i=>i.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(i=>i.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(t)}}class fo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}fo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="5",Sy="v",by="s",Ty="r",Cy="f",Ay=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wy="ls",Ry="p",Gf="ac",Ny="websocket",Oy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(t,i,a,o,c=!1,h="",d=!1,_=!1,m=null){this.secure=i,this.namespace=a,this.webSocketOnly=o,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=_,this.emulatorOptions=m,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gi.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Gi.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",i=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${i}`}}function AA(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function Iy(s,t,i){L(typeof t=="string","typeof type must == string"),L(typeof i=="object","typeof params must == object");let a;if(t===Ny)a=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(t===Oy)a=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);AA(s)&&(i.ns=s.namespace);const o=[];return Et(i,(c,h)=>{o.push(c+"="+h)}),a+o.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.counters_={}}incrementCounter(t,i=1){kn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=i}get(){return pb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={},Rf={};function Sh(s){const t=s.toString();return wf[t]||(wf[t]=new wA),wf[t]}function RA(s,t){const i=s.toString();return Rf[i]||(Rf[i]=t()),Rf[i]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,i){this.closeAfterResponse=t,this.onClose=i,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,i){for(this.pendingResponses[t]=i;this.pendingResponses[this.currentResponseNum];){const a=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<a.length;++o)a[o]&&lr(()=>{this.onMessage_(a[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="start",OA="close",DA="pLPCommand",IA="pRTLPCB",My="id",xy="pw",ky="ser",MA="cb",xA="seg",kA="ts",UA="d",LA="dframe",Uy=1870,Ly=30,zA=Uy-Ly,HA=25e3,PA=3e4;class Gs{constructor(t,i,a,o,c,h,d){this.connId=t,this.repoInfo=i,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.transportSessionId=h,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ha(t),this.stats_=Sh(i),this.urlFn=_=>(this.appCheckToken&&(_[Gf]=this.appCheckToken),Iy(i,Oy,_))}open(t,i){this.curSegmentNum=0,this.onDisconnect_=i,this.myPacketOrderer=new NA(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PA)),pA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bh((...c)=>{const[h,d,_,m,y]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Lg)this.id=d,this.password=_;else if(h===OA)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,d]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,d)},()=>{this.onClosed_()},this.urlFn);const a={};a[Lg]="t",a[ky]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(a[MA]=this.scriptTagHolder.uniqueCallbackIdentifier),a[Sy]=Eh,this.transportSessionId&&(a[by]=this.transportSessionId),this.lastSessionId&&(a[wy]=this.lastSessionId),this.applicationId&&(a[Ry]=this.applicationId),this.appCheckToken&&(a[Gf]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ay.test(location.hostname)&&(a[Ty]=Cy);const o=this.urlFn(a);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gs.forceAllow_=!0}static forceDisallow(){Gs.forceDisallow_=!0}static isAvailable(){return Gs.forceAllow_?!0:!Gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!mA()&&!gA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const i=Ke(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=yv(i),o=yy(a,zA);for(let c=0;c<o.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[c]),this.curSegmentNum++}addDisconnectPingFrame(t,i){this.myDisconnFrame=document.createElement("iframe");const a={};a[LA]="t",a[My]=t,a[xy]=i,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const i=Ke(t).length;this.bytesReceived+=i,this.stats_.incrementCounter("bytes_received",i)}}class bh{constructor(t,i,a,o){this.onDisconnect=a,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fA(),window[DA+this.uniqueCallbackIdentifier]=t,window[IA+this.uniqueCallbackIdentifier]=i,this.myIFrame=bh.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(d){at("frame writing exception"),d.stack&&at(d.stack),at(d)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||at("No IE domain setting required")}catch{const a=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,i){for(this.myID=t,this.myPW=i,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[My]=this.myID,t[xy]=this.myPW,t[ky]=this.currentSerial;let i=this.urlFn(t),a="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ly+a.length<=Uy;){const h=this.pendingSegs.shift();a=a+"&"+xA+o+"="+h.seg+"&"+kA+o+"="+h.ts+"&"+UA+o+"="+h.d,o++}return i=i+a,this.addLongPollTag_(i,this.currentSerial),!0}else return!1}enqueueSegment(t,i,a){this.pendingSegs.push({seg:t,ts:i,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(t,i){this.outstandingRequests.add(i);const a=()=>{this.outstandingRequests.delete(i),this.newRequest_()},o=setTimeout(a,Math.floor(HA)),c=()=>{clearTimeout(o),a()};this.addTag(t,c)}addTag(t,i){setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=t,a.onload=a.onreadystatechange=function(){const o=a.readyState;(!o||o==="loaded"||o==="complete")&&(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),i())},a.onerror=()=>{at("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=16384,jA=45e3;let To=null;typeof MozWebSocket<"u"?To=MozWebSocket:typeof WebSocket<"u"&&(To=WebSocket);class Qt{constructor(t,i,a,o,c,h,d){this.connId=t,this.applicationId=a,this.appCheckToken=o,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ha(this.connId),this.stats_=Sh(i),this.connURL=Qt.connectionURL_(i,h,d,o,a),this.nodeAdmin=i.nodeAdmin}static connectionURL_(t,i,a,o,c){const h={};return h[Sy]=Eh,typeof location<"u"&&location.hostname&&Ay.test(location.hostname)&&(h[Ty]=Cy),i&&(h[by]=i),a&&(h[wy]=a),o&&(h[Gf]=o),c&&(h[Ry]=c),Iy(t,Ny,h)}open(t,i){this.onDisconnect=i,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gi.set("previous_websocket_failure",!0);try{let a;Rb(),this.mySock=new To(this.connURL,[],a)}catch(a){this.log_("Error instantiating WebSocket.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=a=>{this.handleIncomingFrame(a)},this.mySock.onerror=a=>{this.log_("WebSocket error.  Closing connection.");const o=a.message||a.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const i=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(i);a&&a.length>1&&parseFloat(a[1])<4.4&&(t=!0)}return!t&&To!==null&&!Qt.forceDisallow_}static previouslyFailed(){return Gi.isInMemoryStorage||Gi.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gi.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const i=this.frames.join("");this.frames=null;const a=Sa(i);this.onMessage(a)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(L(this.frames===null,"We already have a frame buffer"),t.length<=6){const i=Number(t);if(!isNaN(i))return this.handleNewFrameCount_(i),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const i=t.data;if(this.bytesReceived+=i.length,this.stats_.incrementCounter("bytes_received",i.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(i);else{const a=this.extractFrameCount_(i);a!==null&&this.appendFrame_(a)}}send(t){this.resetKeepAlive();const i=Ke(t);this.bytesSent+=i.length,this.stats_.incrementCounter("bytes_sent",i.length);const a=yy(i,BA);a.length>1&&this.sendString_(String(a.length));for(let o=0;o<a.length;o++)this.sendString_(a[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jA))}sendString_(t){try{this.mySock.send(t)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{static get ALL_TRANSPORTS(){return[Gs,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(t){this.initTransports_(t)}initTransports_(t){const i=Qt&&Qt.isAvailable();let a=i&&!Qt.previouslyFailed();if(t.webSocketOnly&&(i||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[Qt];else{const o=this.transports_=[];for(const c of Aa.ALL_TRANSPORTS)c&&c.isAvailable()&&o.push(c);Aa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Aa.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=6e4,VA=5e3,GA=10*1024,YA=100*1024,Nf="t",zg="d",FA="s",Hg="r",QA="e",Pg="o",Bg="a",jg="n",qg="p",KA="h";class XA{constructor(t,i,a,o,c,h,d,_,m,y){this.id=t,this.repoInfo_=i,this.applicationId_=a,this.appCheckToken_=o,this.authToken_=c,this.onMessage_=h,this.onReady_=d,this.onDisconnect_=_,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ha("c:"+this.id+":"),this.transportManager_=new Aa(i),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(i,a)},Math.floor(0));const o=t.healthyTimeout||0;o>0&&(this.healthyTimeout_=ga(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>YA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return i=>{t===this.conn_?this.onConnectionLost_(i):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return i=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(i):t===this.secondaryConn_?this.onSecondaryMessageReceived_(i):this.log_("message on old connection"))}}sendRequest(t){const i={t:"d",d:t};this.sendData_(i)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Nf in t){const i=t[Nf];i===Bg?this.upgradeIfSecondaryHealthy_():i===Hg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):i===Pg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const i=oa("t",t),a=oa("d",t);if(i==="c")this.onSecondaryControl_(a);else if(i==="d")this.pendingDataMessages.push(a);else throw new Error("Unknown protocol layer: "+i)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const i=oa("t",t),a=oa("d",t);i==="c"?this.onControl_(a):i==="d"&&this.onDataMessage_(a)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const i=oa(Nf,t);if(zg in t){const a=t[zg];if(i===KA){const o=Object.assign({},a);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(i===jg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else i===FA?this.onConnectionShutdown_(a):i===Hg?this.onReset_(a):i===QA?Vf("Server Error: "+a):i===Pg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vf("Unknown control packet command: "+i)}}onHandshake_(t){const i=t.ts,a=t.v,o=t.h;this.sessionId=t.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,i),Eh!==a&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const i=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(i,a),ga(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qA))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,i){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(i,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ga(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qg,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gi.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{put(t,i,a,o){}merge(t,i,a,o){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,i,a){}onDisconnectMerge(t,i,a){}onDisconnectCancel(t,i){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(t){this.allowedEvents_=t,this.listeners_={},L(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...i){if(Array.isArray(this.listeners_[t])){const a=[...this.listeners_[t]];for(let o=0;o<a.length;o++)a[o].callback.apply(a[o].context,i)}}on(t,i,a){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:i,context:a});const o=this.getInitialEvent(t);o&&i.apply(a,o)}off(t,i,a){this.validateEventType_(t);const o=this.listeners_[t]||[];for(let c=0;c<o.length;c++)if(o[c].callback===i&&(!a||a===o[c].context)){o.splice(c,1);return}}validateEventType_(t){L(this.allowedEvents_.find(i=>i===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Hy{static getInstance(){return new Co}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(t){return L(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=32,Gg=768;class Ae{constructor(t,i){if(i===void 0){this.pieces_=t.split("/");let a=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[a]=this.pieces_[o],a++);this.pieces_.length=a,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=i}toString(){let t="";for(let i=this.pieceNum_;i<this.pieces_.length;i++)this.pieces_[i]!==""&&(t+="/"+this.pieces_[i]);return t||"/"}}function _e(){return new Ae("")}function ae(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function mi(s){return s.pieces_.length-s.pieceNum_}function Re(s){let t=s.pieceNum_;return t<s.pieces_.length&&t++,new Ae(s.pieces_,t)}function Py(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function WA(s){let t="";for(let i=s.pieceNum_;i<s.pieces_.length;i++)s.pieces_[i]!==""&&(t+="/"+encodeURIComponent(String(s.pieces_[i])));return t||"/"}function By(s,t=0){return s.pieces_.slice(s.pieceNum_+t)}function jy(s){if(s.pieceNum_>=s.pieces_.length)return null;const t=[];for(let i=s.pieceNum_;i<s.pieces_.length-1;i++)t.push(s.pieces_[i]);return new Ae(t,0)}function je(s,t){const i=[];for(let a=s.pieceNum_;a<s.pieces_.length;a++)i.push(s.pieces_[a]);if(t instanceof Ae)for(let a=t.pieceNum_;a<t.pieces_.length;a++)i.push(t.pieces_[a]);else{const a=t.split("/");for(let o=0;o<a.length;o++)a[o].length>0&&i.push(a[o])}return new Ae(i,0)}function ce(s){return s.pieceNum_>=s.pieces_.length}function gt(s,t){const i=ae(s),a=ae(t);if(i===null)return t;if(i===a)return gt(Re(s),Re(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+s+")")}function Th(s,t){if(mi(s)!==mi(t))return!1;for(let i=s.pieceNum_,a=t.pieceNum_;i<=s.pieces_.length;i++,a++)if(s.pieces_[i]!==t.pieces_[a])return!1;return!0}function Xt(s,t){let i=s.pieceNum_,a=t.pieceNum_;if(mi(s)>mi(t))return!1;for(;i<s.pieces_.length;){if(s.pieces_[i]!==t.pieces_[a])return!1;++i,++a}return!0}class ZA{constructor(t,i){this.errorPrefix_=i,this.parts_=By(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Po(this.parts_[a]);qy(this)}}function JA(s,t){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(t),s.byteLength_+=Po(t),qy(s)}function $A(s){const t=s.parts_.pop();s.byteLength_-=Po(t),s.parts_.length>0&&(s.byteLength_-=1)}function qy(s){if(s.byteLength_>Gg)throw new Error(s.errorPrefix_+"has a key path longer than "+Gg+" bytes ("+s.byteLength_+").");if(s.parts_.length>Vg)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vg+") or object contains a cycle "+Vi(s))}function Vi(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends Hy{static getInstance(){return new Ch}constructor(){super(["visible"]);let t,i;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(i="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(i="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(i="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(i="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,i&&document.addEventListener(i,()=>{const a=!document[t];a!==this.visible_&&(this.visible_=a,this.trigger("visible",a))},!1)}getInitialEvent(t){return L(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=1e3,ew=60*5*1e3,Yg=30*1e3,tw=1.3,nw=3e4,iw="server_kill",Fg=3;class On extends zy{constructor(t,i,a,o,c,h,d,_){if(super(),this.repoInfo_=t,this.applicationId_=i,this.onDataUpdate_=a,this.onConnectStatus_=o,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=d,this.authOverride_=_,this.id=On.nextPersistentConnectionId_++,this.log_=Ha("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ua,this.maxReconnectDelay_=ew,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ch.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Co.getInstance().on("online",this.onOnline_,this)}sendRequest(t,i,a){const o=++this.requestNumber_,c={r:o,a:t,b:i};this.log_(Ke(c)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),a&&(this.requestCBHash_[o]=a)}get(t){this.initConnection_();const i=new Ho,o={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:h=>{const d=h.d;h.s==="ok"?i.resolve(d):i.reject(d)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),i.promise}listen(t,i,a,o){this.initConnection_();const c=t._queryIdentifier,h=t._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const d={onComplete:o,hashFn:i,query:t,tag:a};this.listens.get(h).set(c,d),this.connected_&&this.sendListen_(d)}sendGet_(t){const i=this.outstandingGets_[t];this.sendRequest("g",i.request,a=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),i.onComplete&&i.onComplete(a)})}sendListen_(t){const i=t.query,a=i._path.toString(),o=i._queryIdentifier;this.log_("Listen on "+a+" for "+o);const c={p:a},h="q";t.tag&&(c.q=i._queryObject,c.t=t.tag),c.h=t.hashFn(),this.sendRequest(h,c,d=>{const _=d.d,m=d.s;On.warnOnListenWarnings_(_,i),(this.listens.get(a)&&this.listens.get(a).get(o))===t&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(a,o),t.onComplete&&t.onComplete(m,_))})}static warnOnListenWarnings_(t,i){if(t&&typeof t=="object"&&kn(t,"w")){const a=Zs(t,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const o='".indexOn": "'+i._queryParams.getIndex().toString()+'"',c=i._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||kb(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yg)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,i=xb(t)?"auth":"gauth",a={cred:t};this.authOverride_===null?a.noauth=!0:typeof this.authOverride_=="object"&&(a.authvar=this.authOverride_),this.sendRequest(i,a,o=>{const c=o.s,h=o.d||"error";this.authToken_===t&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const i=t.s,a=t.d||"error";i==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(i,a)})}unlisten(t,i){const a=t._path.toString(),o=t._queryIdentifier;this.log_("Unlisten called for "+a+" "+o),L(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(a,o)&&this.connected_&&this.sendUnlisten_(a,o,t._queryObject,i)}sendUnlisten_(t,i,a,o){this.log_("Unlisten on "+t+" for "+i);const c={p:t},h="n";o&&(c.q=a,c.t=o),this.sendRequest(h,c)}onDisconnectPut(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:i,onComplete:a})}onDisconnectMerge(t,i,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,i,a):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:i,onComplete:a})}onDisconnectCancel(t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:i})}sendOnDisconnect_(t,i,a,o){const c={p:i,d:a};this.log_("onDisconnect "+t,c),this.sendRequest(t,c,h=>{o&&setTimeout(()=>{o(h.s,h.d)},Math.floor(0))})}put(t,i,a,o){this.putInternal("p",t,i,a,o)}merge(t,i,a,o){this.putInternal("m",t,i,a,o)}putInternal(t,i,a,o,c){this.initConnection_();const h={p:i,d:a};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:t,request:h,onComplete:o}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+i)}sendPut_(t){const i=this.outstandingPuts_[t].action,a=this.outstandingPuts_[t].request,o=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(i,a,c=>{this.log_(i+" response",c),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(c.s,c.d)})}reportStats(t){if(this.connected_){const i={c:t};this.log_("reportStats",i),this.sendRequest("s",i,a=>{if(a.s!=="ok"){const c=a.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Ke(t));const i=t.r,a=this.requestCBHash_[i];a&&(delete this.requestCBHash_[i],a(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,i){this.log_("handleServerMessage",t,i),t==="d"?this.onDataUpdate_(i.p,i.d,!1,i.t):t==="m"?this.onDataUpdate_(i.p,i.d,!0,i.t):t==="c"?this.onListenRevoked_(i.p,i.q):t==="ac"?this.onAuthRevoked_(i.s,i.d):t==="apc"?this.onAppCheckRevoked_(i.s,i.d):t==="sd"?this.onSecurityDebugPacket_(i):Vf("Unrecognized action received from server: "+Ke(t)+`
Are you using the latest client?`)}onReady_(t,i){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=i,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nw&&(this.reconnectDelay_=ua),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let i=Math.max(0,this.reconnectDelay_-t);i=Math.random()*i,this.log_("Trying to reconnect in "+i+"ms"),this.scheduleConnect_(i),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),i=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+On.nextConnectionId_++,c=this.lastSessionId;let h=!1,d=null;const _=function(){d?d.close():(h=!0,a())},m=function(E){L(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:_,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,S]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);h?at("getToken() completed but was canceled"):(at("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=S&&S.token,d=new XA(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,i,a,k=>{yt(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(iw)},c))}catch(E){this.log_("Failed to get token: "+E),h||(this.repoInfo_.nodeAdmin&&yt(E),_())}}}interrupt(t){at("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){at("Resuming connection for reason: "+t),delete this.interruptReasons_[t],xf(this.interruptReasons_)&&(this.reconnectDelay_=ua,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const i=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:i})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const i=this.outstandingPuts_[t];i&&"h"in i.request&&i.queued&&(i.onComplete&&i.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,i){let a;i?a=i.map(c=>yh(c)).join("$"):a="default";const o=this.removeListen_(t,a);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(t,i){const a=new Ae(t).toString();let o;if(this.listens.has(a)){const c=this.listens.get(a);o=c.get(i),c.delete(i),c.size===0&&this.listens.delete(a)}else o=void 0;return o}onAuthRevoked_(t,i){at("Auth token revoked: "+t+"/"+i),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fg&&(this.reconnectDelay_=Yg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,i){at("App check token revoked: "+t+"/"+i),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const i of t.values())this.sendListen_(i);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let i="js";t["sdk."+i+"."+_y.replace(/\./g,"-")]=1,rh()?t["framework.cordova"]=1:wv()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Co.getInstance().currentlyOnline();return xf(this.interruptReasons_)&&t}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,i){this.name=t,this.node=i}static Wrap(t,i){return new le(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,i){const a=new le($s,t),o=new le($s,i);return this.compare(a,o)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;class Vy extends Vo{static get __EMPTY_NODE(){return ro}static set __EMPTY_NODE(t){ro=t}compare(t,i){return ar(t.name,i.name)}isDefinedOn(t){throw nr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,i){return!1}minPost(){return le.MIN}maxPost(){return new le(Zi,ro)}makePost(t,i){return L(typeof t=="string","KeyIndex indexValue must always be a string."),new le(t,ro)}toString(){return".key"}}const Xs=new Vy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t,i,a,o,c=null){this.isReverse_=o,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!t.isEmpty();)if(t=t,h=i?a(t.key,i):1,o&&(h*=-1),h<0)this.isReverse_?t=t.left:t=t.right;else if(h===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),i;if(this.resultGenerator_?i=this.resultGenerator_(t.key,t.value):i={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Qe{constructor(t,i,a,o,c){this.key=t,this.value=i,this.color=a??Qe.RED,this.left=o??vt.EMPTY_NODE,this.right=c??vt.EMPTY_NODE}copy(t,i,a,o,c){return new Qe(t??this.key,i??this.value,a??this.color,o??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,i,a){let o=this;const c=a(t,o.key);return c<0?o=o.copy(null,null,null,o.left.insert(t,i,a),null):c===0?o=o.copy(null,i,null,null,null):o=o.copy(null,null,null,null,o.right.insert(t,i,a)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,i){let a,o;if(a=this,i(t,a.key)<0)!a.left.isEmpty()&&!a.left.isRed_()&&!a.left.left.isRed_()&&(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(t,i),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),!a.right.isEmpty()&&!a.right.isRed_()&&!a.right.left.isRed_()&&(a=a.moveRedRight_()),i(t,a.key)===0){if(a.right.isEmpty())return vt.EMPTY_NODE;o=a.right.min_(),a=a.copy(o.key,o.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(t,i))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,i)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class sw{copy(t,i,a,o,c){return this}insert(t,i,a){return new Qe(t,i,null)}remove(t,i){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(t,i=vt.EMPTY_NODE){this.comparator_=t,this.root_=i}insert(t,i){return new vt(this.comparator_,this.root_.insert(t,i,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(t){return new vt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(t){let i,a=this.root_;for(;!a.isEmpty();){if(i=this.comparator_(t,a.key),i===0)return a.value;i<0?a=a.left:i>0&&(a=a.right)}return null}getPredecessorKey(t){let i,a=this.root_,o=null;for(;!a.isEmpty();)if(i=this.comparator_(t,a.key),i===0){if(a.left.isEmpty())return o?o.key:null;for(a=a.left;!a.right.isEmpty();)a=a.right;return a.key}else i<0?a=a.left:i>0&&(o=a,a=a.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new ao(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,i){return new ao(this.root_,t,this.comparator_,!1,i)}getReverseIteratorFrom(t,i){return new ao(this.root_,t,this.comparator_,!0,i)}getReverseIterator(t){return new ao(this.root_,null,this.comparator_,!0,t)}}vt.EMPTY_NODE=new sw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(s,t){return ar(s.name,t.name)}function Ah(s,t){return ar(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;function aw(s){Yf=s}const Gy=function(s){return typeof s=="number"?"number:"+Ey(s):"string:"+s},Yy=function(s){if(s.isLeafNode()){const t=s.val();L(typeof t=="string"||typeof t=="number"||typeof t=="object"&&kn(t,".sv"),"Priority must be a string or number.")}else L(s===Yf||s.isEmpty(),"priority of unexpected type.");L(s===Yf||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg;class Fe{static set __childrenNodeConstructor(t){Qg=t}static get __childrenNodeConstructor(){return Qg}constructor(t,i=Fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=i,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Fe(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return ce(t)?this:ae(t)===".priority"?this.priorityNode_:Fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,i){return null}updateImmediateChild(t,i){return t===".priority"?this.updatePriority(i):i.isEmpty()&&t!==".priority"?this:Fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,i).updatePriority(this.priorityNode_)}updateChild(t,i){const a=ae(t);return a===null?i:i.isEmpty()&&a!==".priority"?this:(L(a!==".priority"||mi(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(a,Fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Re(t),i)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,i){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Gy(this.priorityNode_.val())+":");const i=typeof this.value_;t+=i+":",i==="number"?t+=Ey(this.value_):t+=this.value_,this.lazyHash_=gy(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Fe.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Fe.__childrenNodeConstructor?-1:(L(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const i=typeof t.value_,a=typeof this.value_,o=Fe.VALUE_TYPE_ORDER.indexOf(i),c=Fe.VALUE_TYPE_ORDER.indexOf(a);return L(o>=0,"Unknown leaf type: "+i),L(c>=0,"Unknown leaf type: "+a),o===c?a==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:c-o}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const i=t;return this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}else return!1}}Fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fy,Qy;function lw(s){Fy=s}function ow(s){Qy=s}class uw extends Vo{compare(t,i){const a=t.node.getPriority(),o=i.node.getPriority(),c=a.compareTo(o);return c===0?ar(t.name,i.name):c}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,i){return!t.getPriority().equals(i.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Zi,new Fe("[PRIORITY-POST]",Qy))}makePost(t,i){const a=Fy(t);return new le(i,new Fe("[PRIORITY-POST]",a))}toString(){return".priority"}}const ke=new uw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=Math.log(2);class fw{constructor(t){const i=c=>parseInt(Math.log(c)/cw,10),a=c=>parseInt(Array(c+1).join("1"),2);this.count=i(t+1),this.current_=this.count-1;const o=a(this.count);this.bits_=t+1&o}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ao=function(s,t,i,a){s.sort(t);const o=function(_,m){const y=m-_;let E,S;if(y===0)return null;if(y===1)return E=s[_],S=i?i(E):E,new Qe(S,E.node,Qe.BLACK,null,null);{const k=parseInt(y/2,10)+_,z=o(_,k),j=o(k+1,m);return E=s[k],S=i?i(E):E,new Qe(S,E.node,Qe.BLACK,z,j)}},c=function(_){let m=null,y=null,E=s.length;const S=function(z,j){const V=E-z,se=E;E-=z;const $=o(V+1,se),te=s[V],be=i?i(te):te;k(new Qe(be,te.node,j,null,$))},k=function(z){m?(m.left=z,m=z):(y=z,m=z)};for(let z=0;z<_.count;++z){const j=_.nextBitIsOne(),V=Math.pow(2,_.count-(z+1));j?S(V,Qe.BLACK):(S(V,Qe.BLACK),S(V,Qe.RED))}return y},h=new fw(s.length),d=c(h);return new vt(a||t,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Of;const qs={};class Rn{static get Default(){return L(qs&&ke,"ChildrenNode.ts has not been loaded"),Of=Of||new Rn({".priority":qs},{".priority":ke}),Of}constructor(t,i){this.indexes_=t,this.indexSet_=i}get(t){const i=Zs(this.indexes_,t);if(!i)throw new Error("No index defined for "+t);return i instanceof vt?i:null}hasIndex(t){return kn(this.indexSet_,t.toString())}addIndex(t,i){L(t!==Xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let o=!1;const c=i.getIterator(le.Wrap);let h=c.getNext();for(;h;)o=o||t.isDefinedOn(h.node),a.push(h),h=c.getNext();let d;o?d=Ao(a,t.getCompare()):d=qs;const _=t.toString(),m=Object.assign({},this.indexSet_);m[_]=t;const y=Object.assign({},this.indexes_);return y[_]=d,new Rn(y,m)}addToIndexes(t,i){const a=_o(this.indexes_,(o,c)=>{const h=Zs(this.indexSet_,c);if(L(h,"Missing index implementation for "+c),o===qs)if(h.isDefinedOn(t.node)){const d=[],_=i.getIterator(le.Wrap);let m=_.getNext();for(;m;)m.name!==t.name&&d.push(m),m=_.getNext();return d.push(t),Ao(d,h.getCompare())}else return qs;else{const d=i.get(t.name);let _=o;return d&&(_=_.remove(new le(t.name,d))),_.insert(t,t.node)}});return new Rn(a,this.indexSet_)}removeFromIndexes(t,i){const a=_o(this.indexes_,o=>{if(o===qs)return o;{const c=i.get(t.name);return c?o.remove(new le(t.name,c)):o}});return new Rn(a,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;class Z{static get EMPTY_NODE(){return ca||(ca=new Z(new vt(Ah),null,Rn.Default))}constructor(t,i,a){this.children_=t,this.priorityNode_=i,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Yy(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ca}updatePriority(t){return this.children_.isEmpty()?this:new Z(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const i=this.children_.get(t);return i===null?ca:i}}getChild(t){const i=ae(t);return i===null?this:this.getImmediateChild(i).getChild(Re(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,i){if(L(i,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(i);{const a=new le(t,i);let o,c;i.isEmpty()?(o=this.children_.remove(t),c=this.indexMap_.removeFromIndexes(a,this.children_)):(o=this.children_.insert(t,i),c=this.indexMap_.addToIndexes(a,this.children_));const h=o.isEmpty()?ca:this.priorityNode_;return new Z(o,h,c)}}updateChild(t,i){const a=ae(t);if(a===null)return i;{L(ae(t)!==".priority"||mi(t)===1,".priority must be the last token in a path");const o=this.getImmediateChild(a).updateChild(Re(t),i);return this.updateImmediateChild(a,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const i={};let a=0,o=0,c=!0;if(this.forEachChild(ke,(h,d)=>{i[h]=d.val(t),a++,c&&Z.INTEGER_REGEXP_.test(h)?o=Math.max(o,Number(h)):c=!1}),!t&&c&&o<2*a){const h=[];for(const d in i)h[d]=i[d];return h}else return t&&!this.getPriority().isEmpty()&&(i[".priority"]=this.getPriority().val()),i}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Gy(this.getPriority().val())+":"),this.forEachChild(ke,(i,a)=>{const o=a.hash();o!==""&&(t+=":"+i+":"+o)}),this.lazyHash_=t===""?"":gy(t)}return this.lazyHash_}getPredecessorChildName(t,i,a){const o=this.resolveIndex_(a);if(o){const c=o.getPredecessorKey(new le(t,i));return c?c.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.minKey();return a&&a.name}else return this.children_.minKey()}getFirstChild(t){const i=this.getFirstChildName(t);return i?new le(i,this.children_.get(i)):null}getLastChildName(t){const i=this.resolveIndex_(t);if(i){const a=i.maxKey();return a&&a.name}else return this.children_.maxKey()}getLastChild(t){const i=this.getLastChildName(t);return i?new le(i,this.children_.get(i)):null}forEachChild(t,i){const a=this.resolveIndex_(t);return a?a.inorderTraversal(o=>i(o.name,o.node)):this.children_.inorderTraversal(i)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getIteratorFrom(t,o=>o);{const o=this.children_.getIteratorFrom(t.name,le.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)<0;)o.getNext(),c=o.peek();return o}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,i){const a=this.resolveIndex_(i);if(a)return a.getReverseIteratorFrom(t,o=>o);{const o=this.children_.getReverseIteratorFrom(t.name,le.Wrap);let c=o.peek();for(;c!=null&&i.compare(c,t)>0;)o.getNext(),c=o.peek();return o}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Pa?-1:0}withIndex(t){if(t===Xs||this.indexMap_.hasIndex(t))return this;{const i=this.indexMap_.addIndex(t,this.children_);return new Z(this.children_,this.priorityNode_,i)}}isIndexed(t){return t===Xs||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const i=t;if(this.getPriority().equals(i.getPriority()))if(this.children_.count()===i.children_.count()){const a=this.getIterator(ke),o=i.getIterator(ke);let c=a.getNext(),h=o.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=a.getNext(),h=o.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(t){return t===Xs?null:this.indexMap_.get(t.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hw extends Z{constructor(){super(new vt(Ah),Z.EMPTY_NODE,Rn.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return Z.EMPTY_NODE}isEmpty(){return!1}}const Pa=new hw;Object.defineProperties(le,{MIN:{value:new le($s,Z.EMPTY_NODE)},MAX:{value:new le(Zi,Pa)}});Vy.__EMPTY_NODE=Z.EMPTY_NODE;Fe.__childrenNodeConstructor=Z;aw(Pa);ow(Pa);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw=!0;function $e(s,t=null){if(s===null)return Z.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(t=s[".priority"]),L(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const i=s;return new Fe(i,$e(t))}if(!(s instanceof Array)&&dw){const i=[];let a=!1;if(Et(s,(h,d)=>{if(h.substring(0,1)!=="."){const _=$e(d);_.isEmpty()||(a=a||!_.getPriority().isEmpty(),i.push(new le(h,_)))}}),i.length===0)return Z.EMPTY_NODE;const c=Ao(i,rw,h=>h.name,Ah);if(a){const h=Ao(i,ke.getCompare());return new Z(c,$e(t),new Rn({".priority":h},{".priority":ke}))}else return new Z(c,$e(t),Rn.Default)}else{let i=Z.EMPTY_NODE;return Et(s,(a,o)=>{if(kn(s,a)&&a.substring(0,1)!=="."){const c=$e(o);(c.isLeafNode()||!c.isEmpty())&&(i=i.updateImmediateChild(a,c))}}),i.updatePriority($e(t))}}lw($e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw extends Vo{constructor(t){super(),this.indexPath_=t,L(!ce(t)&&ae(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,i){const a=this.extractChild(t.node),o=this.extractChild(i.node),c=a.compareTo(o);return c===0?ar(t.name,i.name):c}makePost(t,i){const a=$e(t),o=Z.EMPTY_NODE.updateChild(this.indexPath_,a);return new le(i,o)}maxPost(){const t=Z.EMPTY_NODE.updateChild(this.indexPath_,Pa);return new le(Zi,t)}toString(){return By(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w extends Vo{compare(t,i){const a=t.node.compareTo(i.node);return a===0?ar(t.name,i.name):a}isDefinedOn(t){return!0}indexedValueChanged(t,i){return!t.equals(i)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(t,i){const a=$e(t);return new le(i,a)}toString(){return".value"}}const mw=new _w;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(s){return{type:"value",snapshotNode:s}}function er(s,t){return{type:"child_added",snapshotNode:t,childName:s}}function wa(s,t){return{type:"child_removed",snapshotNode:t,childName:s}}function Ra(s,t,i){return{type:"child_changed",snapshotNode:t,childName:s,oldSnap:i}}function gw(s,t){return{type:"child_moved",snapshotNode:t,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.index_=t}updateChild(t,i,a,o,c,h){L(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=t.getImmediateChild(i);return d.getChild(o).equals(a.getChild(o))&&d.isEmpty()===a.isEmpty()||(h!=null&&(a.isEmpty()?t.hasChild(i)?h.trackChildChange(wa(i,d)):L(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?h.trackChildChange(er(i,a)):h.trackChildChange(Ra(i,a,d))),t.isLeafNode()&&a.isEmpty())?t:t.updateImmediateChild(i,a).withIndex(this.index_)}updateFullNode(t,i,a){return a!=null&&(t.isLeafNode()||t.forEachChild(ke,(o,c)=>{i.hasChild(o)||a.trackChildChange(wa(o,c))}),i.isLeafNode()||i.forEachChild(ke,(o,c)=>{if(t.hasChild(o)){const h=t.getImmediateChild(o);h.equals(c)||a.trackChildChange(Ra(o,c,h))}else a.trackChildChange(er(o,c))})),i.withIndex(this.index_)}updatePriority(t,i){return t.isEmpty()?Z.EMPTY_NODE:t.updatePriority(i)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t){this.indexedFilter_=new wh(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Na.getStartPost_(t),this.endPost_=Na.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const i=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,a=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return i&&a}updateChild(t,i,a,o,c,h){return this.matches(new le(i,a))||(a=Z.EMPTY_NODE),this.indexedFilter_.updateChild(t,i,a,o,c,h)}updateFullNode(t,i,a){i.isLeafNode()&&(i=Z.EMPTY_NODE);let o=i.withIndex(this.index_);o=o.updatePriority(Z.EMPTY_NODE);const c=this;return i.forEachChild(ke,(h,d)=>{c.matches(new le(h,d))||(o=o.updateImmediateChild(h,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const i=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),i)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const i=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),i)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(t){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{const a=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?a<=0:a<0},this.withinEndPost=i=>{const a=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?a<=0:a<0},this.rangedFilter_=new Na(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,i,a,o,c,h){return this.rangedFilter_.matches(new le(i,a))||(a=Z.EMPTY_NODE),t.getImmediateChild(i).equals(a)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,i,a,o,c,h):this.fullLimitUpdateChild_(t,i,a,c,h)}updateFullNode(t,i,a){let o;if(i.isLeafNode()||i.isEmpty())o=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<i.numChildren()&&i.isIndexed(this.index_)){o=Z.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=i.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=i.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const d=c.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))o=o.updateImmediateChild(d.name,d.node),h++;else break;else continue}}else{o=i.withIndex(this.index_),o=o.updatePriority(Z.EMPTY_NODE);let c;this.reverse_?c=o.getReverseIterator(this.index_):c=o.getIterator(this.index_);let h=0;for(;c.hasNext();){const d=c.getNext();h<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?h++:o=o.updateImmediateChild(d.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,o,a)}updatePriority(t,i){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,i,a,o,c){let h;if(this.reverse_){const E=this.index_.getCompare();h=(S,k)=>E(k,S)}else h=this.index_.getCompare();const d=t;L(d.numChildren()===this.limit_,"");const _=new le(i,a),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(_);if(d.hasChild(i)){const E=d.getImmediateChild(i);let S=o.getChildAfterChild(this.index_,m,this.reverse_);for(;S!=null&&(S.name===i||d.hasChild(S.name));)S=o.getChildAfterChild(this.index_,S,this.reverse_);const k=S==null?1:h(S,_);if(y&&!a.isEmpty()&&k>=0)return c!=null&&c.trackChildChange(Ra(i,a,E)),d.updateImmediateChild(i,a);{c!=null&&c.trackChildChange(wa(i,E));const j=d.updateImmediateChild(i,Z.EMPTY_NODE);return S!=null&&this.rangedFilter_.matches(S)?(c!=null&&c.trackChildChange(er(S.name,S.node)),j.updateImmediateChild(S.name,S.node)):j}}else return a.isEmpty()?t:y&&h(m,_)>=0?(c!=null&&(c.trackChildChange(wa(m.name,m.node)),c.trackChildChange(er(i,a))),d.updateImmediateChild(i,a).updateImmediateChild(m.name,Z.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$s}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ke}copy(){const t=new Rh;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function yw(s){return s.loadsAllData()?new wh(s.getIndex()):s.hasLimit()?new vw(s):new Na(s)}function Kg(s){const t={};if(s.isDefault())return t;let i;if(s.index_===ke?i="$priority":s.index_===mw?i="$value":s.index_===Xs?i="$key":(L(s.index_ instanceof pw,"Unrecognized index type!"),i=s.index_.toString()),t.orderBy=Ke(i),s.startSet_){const a=s.startAfterSet_?"startAfter":"startAt";t[a]=Ke(s.indexStartValue_),s.startNameSet_&&(t[a]+=","+Ke(s.indexStartName_))}if(s.endSet_){const a=s.endBeforeSet_?"endBefore":"endAt";t[a]=Ke(s.indexEndValue_),s.endNameSet_&&(t[a]+=","+Ke(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?t.limitToFirst=s.limit_:t.limitToLast=s.limit_),t}function Xg(s){const t={};if(s.startSet_&&(t.sp=s.indexStartValue_,s.startNameSet_&&(t.sn=s.indexStartName_),t.sin=!s.startAfterSet_),s.endSet_&&(t.ep=s.indexEndValue_,s.endNameSet_&&(t.en=s.indexEndName_),t.ein=!s.endBeforeSet_),s.limitSet_){t.l=s.limit_;let i=s.viewFrom_;i===""&&(s.isViewFromLeft()?i="l":i="r"),t.vf=i}return s.index_!==ke&&(t.i=s.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends zy{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,i){return i!==void 0?"tag$"+i:(L(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}constructor(t,i,a,o){super(),this.repoInfo_=t,this.onDataUpdate_=i,this.authTokenProvider_=a,this.appCheckTokenProvider_=o,this.log_=Ha("p:rest:"),this.listens_={}}listen(t,i,a,o){const c=t._path.toString();this.log_("Listen called for "+c+" "+t._queryIdentifier);const h=wo.getListenId_(t,a),d={};this.listens_[h]=d;const _=Kg(t._queryParams);this.restRequest_(c+".json",_,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(c,E,!1,a),Zs(this.listens_,h)===d){let S;m?m===401?S="permission_denied":S="rest_error:"+m:S="ok",o(S,null)}})}unlisten(t,i){const a=wo.getListenId_(t,i);delete this.listens_[a]}get(t){const i=Kg(t._queryParams),a=t._path.toString(),o=new Ho;return this.restRequest_(a+".json",i,(c,h)=>{let d=h;c===404&&(d=null,c=null),c===null?(this.onDataUpdate_(a,d,!1,null),o.resolve(d)):o.reject(new Error(d))}),o.promise}refreshAuthToken(t){}restRequest_(t,i={},a){return i.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,c])=>{o&&o.accessToken&&(i.auth=o.accessToken),c&&c.token&&(i.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ir(i);this.log_("Sending REST request for "+h);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(a&&d.readyState===4){this.log_("REST Response for "+h+" received. status:",d.status,"response:",d.responseText);let _=null;if(d.status>=200&&d.status<300){try{_=Sa(d.responseText)}catch{yt("Failed to parse JSON response for "+h+": "+d.responseText)}a(null,_)}else d.status!==401&&d.status!==404&&yt("Got unsuccessful REST response for "+h+" Status: "+d.status),a(d.status);a=null}},d.open("GET",h,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,i){this.rootNode_=this.rootNode_.updateChild(t,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(){return{value:null,children:new Map}}function Xy(s,t,i){if(ce(t))s.value=i,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(t,i);else{const a=ae(t);s.children.has(a)||s.children.set(a,Ro());const o=s.children.get(a);t=Re(t),Xy(o,t,i)}}function Ff(s,t,i){s.value!==null?i(t,s.value):Sw(s,(a,o)=>{const c=new Ae(t.toString()+"/"+a);Ff(o,c,i)})}function Sw(s,t){s.children.forEach((i,a)=>{t(a,i)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),i=Object.assign({},t);return this.last_&&Et(this.last_,(a,o)=>{i[a]=i[a]-o}),this.last_=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=10*1e3,Tw=30*1e3,Cw=5*60*1e3;class Aw{constructor(t,i){this.server_=i,this.statsToReport_={},this.statsListener_=new bw(t);const a=Wg+(Tw-Wg)*Math.random();ga(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const t=this.statsListener_.get(),i={};let a=!1;Et(t,(o,c)=>{c>0&&kn(this.statsToReport_,o)&&(i[o]=c,a=!0)}),a&&this.server_.reportStats(i),ga(this.reportStats_.bind(this),Math.floor(Math.random()*2*Cw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function Wy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Nh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Oh(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t,i,a){this.path=t,this.affectedTree=i,this.revert=a,this.type=Wt.ACK_USER_WRITE,this.source=Wy()}operationForChild(t){if(ce(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const i=this.affectedTree.subtree(new Ae(t));return new No(_e(),i,this.revert)}}else return L(ae(this.path)===t,"operationForChild called for unrelated child."),new No(Re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,i){this.source=t,this.path=i,this.type=Wt.LISTEN_COMPLETE}operationForChild(t){return ce(this.path)?new Oa(this.source,_e()):new Oa(this.source,Re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,i,a){this.source=t,this.path=i,this.snap=a,this.type=Wt.OVERWRITE}operationForChild(t){return ce(this.path)?new Ji(this.source,_e(),this.snap.getImmediateChild(t)):new Ji(this.source,Re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,i,a){this.source=t,this.path=i,this.children=a,this.type=Wt.MERGE}operationForChild(t){if(ce(this.path)){const i=this.children.subtree(new Ae(t));return i.isEmpty()?null:i.value?new Ji(this.source,_e(),i.value):new Da(this.source,_e(),i)}else return L(ae(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Da(this.source,Re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,i,a){this.node_=t,this.fullyInitialized_=i,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(ce(t))return this.isFullyInitialized()&&!this.filtered_;const i=ae(t);return this.isCompleteForChild(i)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function Rw(s,t,i,a){const o=[],c=[];return t.forEach(h=>{h.type==="child_changed"&&s.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(gw(h.childName,h.snapshotNode))}),fa(s,o,"child_removed",t,a,i),fa(s,o,"child_added",t,a,i),fa(s,o,"child_moved",c,a,i),fa(s,o,"child_changed",t,a,i),fa(s,o,"value",t,a,i),o}function fa(s,t,i,a,o,c){const h=a.filter(d=>d.type===i);h.sort((d,_)=>Ow(s,d,_)),h.forEach(d=>{const _=Nw(s,d,c);o.forEach(m=>{m.respondsTo(d.type)&&t.push(m.createEvent(_,s.query_))})})}function Nw(s,t,i){return t.type==="value"||t.type==="child_removed"||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,s.index_)),t}function Ow(s,t,i){if(t.childName==null||i.childName==null)throw nr("Should only compare child_ events.");const a=new le(t.childName,t.snapshotNode),o=new le(i.childName,i.snapshotNode);return s.index_.compare(a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(s,t){return{eventCache:s,serverCache:t}}function va(s,t,i,a){return Go(new $i(t,i,a),s.serverCache)}function Zy(s,t,i,a){return Go(s.eventCache,new $i(t,i,a))}function Qf(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function es(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;const Dw=()=>(Df||(Df=new vt(_A)),Df);class Ne{static fromObject(t){let i=new Ne(null);return Et(t,(a,o)=>{i=i.set(new Ae(a),o)}),i}constructor(t,i=Dw()){this.value=t,this.children=i}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,i){if(this.value!=null&&i(this.value))return{path:_e(),value:this.value};if(ce(t))return null;{const a=ae(t),o=this.children.get(a);if(o!==null){const c=o.findRootMostMatchingPathAndValue(Re(t),i);return c!=null?{path:je(new Ae(a),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(ce(t))return this;{const i=ae(t),a=this.children.get(i);return a!==null?a.subtree(Re(t)):new Ne(null)}}set(t,i){if(ce(t))return new Ne(i,this.children);{const a=ae(t),c=(this.children.get(a)||new Ne(null)).set(Re(t),i),h=this.children.insert(a,c);return new Ne(this.value,h)}}remove(t){if(ce(t))return this.children.isEmpty()?new Ne(null):new Ne(null,this.children);{const i=ae(t),a=this.children.get(i);if(a){const o=a.remove(Re(t));let c;return o.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,o),this.value===null&&c.isEmpty()?new Ne(null):new Ne(this.value,c)}else return this}}get(t){if(ce(t))return this.value;{const i=ae(t),a=this.children.get(i);return a?a.get(Re(t)):null}}setTree(t,i){if(ce(t))return i;{const a=ae(t),c=(this.children.get(a)||new Ne(null)).setTree(Re(t),i);let h;return c.isEmpty()?h=this.children.remove(a):h=this.children.insert(a,c),new Ne(this.value,h)}}fold(t){return this.fold_(_e(),t)}fold_(t,i){const a={};return this.children.inorderTraversal((o,c)=>{a[o]=c.fold_(je(t,o),i)}),i(t,this.value,a)}findOnPath(t,i){return this.findOnPath_(t,_e(),i)}findOnPath_(t,i,a){const o=this.value?a(i,this.value):!1;if(o)return o;if(ce(t))return null;{const c=ae(t),h=this.children.get(c);return h?h.findOnPath_(Re(t),je(i,c),a):null}}foreachOnPath(t,i){return this.foreachOnPath_(t,_e(),i)}foreachOnPath_(t,i,a){if(ce(t))return this;{this.value&&a(i,this.value);const o=ae(t),c=this.children.get(o);return c?c.foreachOnPath_(Re(t),je(i,o),a):new Ne(null)}}foreach(t){this.foreach_(_e(),t)}foreach_(t,i){this.children.inorderTraversal((a,o)=>{o.foreach_(je(t,a),i)}),this.value&&i(t,this.value)}foreachChild(t){this.children.inorderTraversal((i,a)=>{a.value&&t(i,a.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.writeTree_=t}static empty(){return new Zt(new Ne(null))}}function ya(s,t,i){if(ce(t))return new Zt(new Ne(i));{const a=s.writeTree_.findRootMostValueAndPath(t);if(a!=null){const o=a.path;let c=a.value;const h=gt(o,t);return c=c.updateChild(h,i),new Zt(s.writeTree_.set(o,c))}else{const o=new Ne(i),c=s.writeTree_.setTree(t,o);return new Zt(c)}}}function Zg(s,t,i){let a=s;return Et(i,(o,c)=>{a=ya(a,je(t,o),c)}),a}function Jg(s,t){if(ce(t))return Zt.empty();{const i=s.writeTree_.setTree(t,new Ne(null));return new Zt(i)}}function Kf(s,t){return ns(s,t)!=null}function ns(s,t){const i=s.writeTree_.findRootMostValueAndPath(t);return i!=null?s.writeTree_.get(i.path).getChild(gt(i.path,t)):null}function $g(s){const t=[],i=s.writeTree_.value;return i!=null?i.isLeafNode()||i.forEachChild(ke,(a,o)=>{t.push(new le(a,o))}):s.writeTree_.children.inorderTraversal((a,o)=>{o.value!=null&&t.push(new le(a,o.value))}),t}function _i(s,t){if(ce(t))return s;{const i=ns(s,t);return i!=null?new Zt(new Ne(i)):new Zt(s.writeTree_.subtree(t))}}function Xf(s){return s.writeTree_.isEmpty()}function tr(s,t){return Jy(_e(),s.writeTree_,t)}function Jy(s,t,i){if(t.value!=null)return i.updateChild(s,t.value);{let a=null;return t.children.inorderTraversal((o,c)=>{o===".priority"?(L(c.value!==null,"Priority writes must always be leaf nodes"),a=c.value):i=Jy(je(s,o),c,i)}),!i.getChild(s).isEmpty()&&a!==null&&(i=i.updateChild(je(s,".priority"),a)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(s,t){return n0(t,s)}function Iw(s,t,i,a,o){L(a>s.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),s.allWrites.push({path:t,snap:i,writeId:a,visible:o}),o&&(s.visibleWrites=ya(s.visibleWrites,t,i)),s.lastWriteId=a}function Mw(s,t){for(let i=0;i<s.allWrites.length;i++){const a=s.allWrites[i];if(a.writeId===t)return a}return null}function xw(s,t){const i=s.allWrites.findIndex(d=>d.writeId===t);L(i>=0,"removeWrite called with nonexistent writeId.");const a=s.allWrites[i];s.allWrites.splice(i,1);let o=a.visible,c=!1,h=s.allWrites.length-1;for(;o&&h>=0;){const d=s.allWrites[h];d.visible&&(h>=i&&kw(d,a.path)?o=!1:Xt(a.path,d.path)&&(c=!0)),h--}if(o){if(c)return Uw(s),!0;if(a.snap)s.visibleWrites=Jg(s.visibleWrites,a.path);else{const d=a.children;Et(d,_=>{s.visibleWrites=Jg(s.visibleWrites,je(a.path,_))})}return!0}else return!1}function kw(s,t){if(s.snap)return Xt(s.path,t);for(const i in s.children)if(s.children.hasOwnProperty(i)&&Xt(je(s.path,i),t))return!0;return!1}function Uw(s){s.visibleWrites=$y(s.allWrites,Lw,_e()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function Lw(s){return s.visible}function $y(s,t,i){let a=Zt.empty();for(let o=0;o<s.length;++o){const c=s[o];if(t(c)){const h=c.path;let d;if(c.snap)Xt(i,h)?(d=gt(i,h),a=ya(a,d,c.snap)):Xt(h,i)&&(d=gt(h,i),a=ya(a,_e(),c.snap.getChild(d)));else if(c.children){if(Xt(i,h))d=gt(i,h),a=Zg(a,d,c.children);else if(Xt(h,i))if(d=gt(h,i),ce(d))a=Zg(a,_e(),c.children);else{const _=Zs(c.children,ae(d));if(_){const m=_.getChild(Re(d));a=ya(a,_e(),m)}}}else throw nr("WriteRecord should have .snap or .children")}}return a}function e0(s,t,i,a,o){if(!a&&!o){const c=ns(s.visibleWrites,t);if(c!=null)return c;{const h=_i(s.visibleWrites,t);if(Xf(h))return i;if(i==null&&!Kf(h,_e()))return null;{const d=i||Z.EMPTY_NODE;return tr(h,d)}}}else{const c=_i(s.visibleWrites,t);if(!o&&Xf(c))return i;if(!o&&i==null&&!Kf(c,_e()))return null;{const h=function(m){return(m.visible||o)&&(!a||!~a.indexOf(m.writeId))&&(Xt(m.path,t)||Xt(t,m.path))},d=$y(s.allWrites,h,t),_=i||Z.EMPTY_NODE;return tr(d,_)}}}function zw(s,t,i){let a=Z.EMPTY_NODE;const o=ns(s.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(ke,(c,h)=>{a=a.updateImmediateChild(c,h)}),a;if(i){const c=_i(s.visibleWrites,t);return i.forEachChild(ke,(h,d)=>{const _=tr(_i(c,new Ae(h)),d);a=a.updateImmediateChild(h,_)}),$g(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}else{const c=_i(s.visibleWrites,t);return $g(c).forEach(h=>{a=a.updateImmediateChild(h.name,h.node)}),a}}function Hw(s,t,i,a,o){L(a||o,"Either existingEventSnap or existingServerSnap must exist");const c=je(t,i);if(Kf(s.visibleWrites,c))return null;{const h=_i(s.visibleWrites,c);return Xf(h)?o.getChild(i):tr(h,o.getChild(i))}}function Pw(s,t,i,a){const o=je(t,i),c=ns(s.visibleWrites,o);if(c!=null)return c;if(a.isCompleteForChild(i)){const h=_i(s.visibleWrites,o);return tr(h,a.getNode().getImmediateChild(i))}else return null}function Bw(s,t){return ns(s.visibleWrites,t)}function jw(s,t,i,a,o,c,h){let d;const _=_i(s.visibleWrites,t),m=ns(_,_e());if(m!=null)d=m;else if(i!=null)d=tr(_,i);else return[];if(d=d.withIndex(h),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=h.getCompare(),S=c?d.getReverseIteratorFrom(a,h):d.getIteratorFrom(a,h);let k=S.getNext();for(;k&&y.length<o;)E(k,a)!==0&&y.push(k),k=S.getNext();return y}else return[]}function qw(){return{visibleWrites:Zt.empty(),allWrites:[],lastWriteId:-1}}function Oo(s,t,i,a){return e0(s.writeTree,s.treePath,t,i,a)}function Ih(s,t){return zw(s.writeTree,s.treePath,t)}function ev(s,t,i,a){return Hw(s.writeTree,s.treePath,t,i,a)}function Do(s,t){return Bw(s.writeTree,je(s.treePath,t))}function Vw(s,t,i,a,o,c){return jw(s.writeTree,s.treePath,t,i,a,o,c)}function Mh(s,t,i){return Pw(s.writeTree,s.treePath,t,i)}function t0(s,t){return n0(je(s.treePath,t),s.writeTree)}function n0(s,t){return{treePath:s,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.changeMap=new Map}trackChildChange(t){const i=t.type,a=t.childName;L(i==="child_added"||i==="child_changed"||i==="child_removed","Only child changes supported for tracking"),L(a!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(a);if(o){const c=o.type;if(i==="child_added"&&c==="child_removed")this.changeMap.set(a,Ra(a,t.snapshotNode,o.snapshotNode));else if(i==="child_removed"&&c==="child_added")this.changeMap.delete(a);else if(i==="child_removed"&&c==="child_changed")this.changeMap.set(a,wa(a,o.oldSnap));else if(i==="child_changed"&&c==="child_added")this.changeMap.set(a,er(a,t.snapshotNode));else if(i==="child_changed"&&c==="child_changed")this.changeMap.set(a,Ra(a,t.snapshotNode,o.oldSnap));else throw nr("Illegal combination of changes: "+t+" occurred after "+o)}else this.changeMap.set(a,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{getCompleteChild(t){return null}getChildAfterChild(t,i,a){return null}}const i0=new Yw;class xh{constructor(t,i,a=null){this.writes_=t,this.viewCache_=i,this.optCompleteServerCache_=a}getCompleteChild(t){const i=this.viewCache_.eventCache;if(i.isCompleteForChild(t))return i.getNode().getImmediateChild(t);{const a=this.optCompleteServerCache_!=null?new $i(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mh(this.writes_,t,a)}}getChildAfterChild(t,i,a){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:es(this.viewCache_),c=Vw(this.writes_,o,i,1,a,t);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(s){return{filter:s}}function Qw(s,t){L(t.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),L(t.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function Kw(s,t,i,a,o){const c=new Gw;let h,d;if(i.type===Wt.OVERWRITE){const m=i;m.source.fromUser?h=Wf(s,t,m.path,m.snap,a,o,c):(L(m.source.fromServer,"Unknown source."),d=m.source.tagged||t.serverCache.isFiltered()&&!ce(m.path),h=Io(s,t,m.path,m.snap,a,o,d,c))}else if(i.type===Wt.MERGE){const m=i;m.source.fromUser?h=Ww(s,t,m.path,m.children,a,o,c):(L(m.source.fromServer,"Unknown source."),d=m.source.tagged||t.serverCache.isFiltered(),h=Zf(s,t,m.path,m.children,a,o,d,c))}else if(i.type===Wt.ACK_USER_WRITE){const m=i;m.revert?h=$w(s,t,m.path,a,o,c):h=Zw(s,t,m.path,m.affectedTree,a,o,c)}else if(i.type===Wt.LISTEN_COMPLETE)h=Jw(s,t,i.path,a,c);else throw nr("Unknown operation type: "+i.type);const _=c.getChanges();return Xw(t,h,_),{viewCache:h,changes:_}}function Xw(s,t,i){const a=t.eventCache;if(a.isFullyInitialized()){const o=a.getNode().isLeafNode()||a.getNode().isEmpty(),c=Qf(s);(i.length>0||!s.eventCache.isFullyInitialized()||o&&!a.getNode().equals(c)||!a.getNode().getPriority().equals(c.getPriority()))&&i.push(Ky(Qf(t)))}}function s0(s,t,i,a,o,c){const h=t.eventCache;if(Do(a,i)!=null)return t;{let d,_;if(ce(i))if(L(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const m=es(t),y=m instanceof Z?m:Z.EMPTY_NODE,E=Ih(a,y);d=s.filter.updateFullNode(t.eventCache.getNode(),E,c)}else{const m=Oo(a,es(t));d=s.filter.updateFullNode(t.eventCache.getNode(),m,c)}else{const m=ae(i);if(m===".priority"){L(mi(i)===1,"Can't have a priority with additional path components");const y=h.getNode();_=t.serverCache.getNode();const E=ev(a,i,y,_);E!=null?d=s.filter.updatePriority(y,E):d=h.getNode()}else{const y=Re(i);let E;if(h.isCompleteForChild(m)){_=t.serverCache.getNode();const S=ev(a,i,h.getNode(),_);S!=null?E=h.getNode().getImmediateChild(m).updateChild(y,S):E=h.getNode().getImmediateChild(m)}else E=Mh(a,m,t.serverCache);E!=null?d=s.filter.updateChild(h.getNode(),m,E,y,o,c):d=h.getNode()}}return va(t,d,h.isFullyInitialized()||ce(i),s.filter.filtersNodes())}}function Io(s,t,i,a,o,c,h,d){const _=t.serverCache;let m;const y=h?s.filter:s.filter.getIndexedFilter();if(ce(i))m=y.updateFullNode(_.getNode(),a,null);else if(y.filtersNodes()&&!_.isFiltered()){const k=_.getNode().updateChild(i,a);m=y.updateFullNode(_.getNode(),k,null)}else{const k=ae(i);if(!_.isCompleteForPath(i)&&mi(i)>1)return t;const z=Re(i),V=_.getNode().getImmediateChild(k).updateChild(z,a);k===".priority"?m=y.updatePriority(_.getNode(),V):m=y.updateChild(_.getNode(),k,V,z,i0,null)}const E=Zy(t,m,_.isFullyInitialized()||ce(i),y.filtersNodes()),S=new xh(o,E,c);return s0(s,E,i,o,S,d)}function Wf(s,t,i,a,o,c,h){const d=t.eventCache;let _,m;const y=new xh(o,t,c);if(ce(i))m=s.filter.updateFullNode(t.eventCache.getNode(),a,h),_=va(t,m,!0,s.filter.filtersNodes());else{const E=ae(i);if(E===".priority")m=s.filter.updatePriority(t.eventCache.getNode(),a),_=va(t,m,d.isFullyInitialized(),d.isFiltered());else{const S=Re(i),k=d.getNode().getImmediateChild(E);let z;if(ce(S))z=a;else{const j=y.getCompleteChild(E);j!=null?Py(S)===".priority"&&j.getChild(jy(S)).isEmpty()?z=j:z=j.updateChild(S,a):z=Z.EMPTY_NODE}if(k.equals(z))_=t;else{const j=s.filter.updateChild(d.getNode(),E,z,S,y,h);_=va(t,j,d.isFullyInitialized(),s.filter.filtersNodes())}}}return _}function tv(s,t){return s.eventCache.isCompleteForChild(t)}function Ww(s,t,i,a,o,c,h){let d=t;return a.foreach((_,m)=>{const y=je(i,_);tv(t,ae(y))&&(d=Wf(s,d,y,m,o,c,h))}),a.foreach((_,m)=>{const y=je(i,_);tv(t,ae(y))||(d=Wf(s,d,y,m,o,c,h))}),d}function nv(s,t,i){return i.foreach((a,o)=>{t=t.updateChild(a,o)}),t}function Zf(s,t,i,a,o,c,h,d){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let _=t,m;ce(i)?m=a:m=new Ne(null).setTree(i,a);const y=t.serverCache.getNode();return m.children.inorderTraversal((E,S)=>{if(y.hasChild(E)){const k=t.serverCache.getNode().getImmediateChild(E),z=nv(s,k,S);_=Io(s,_,new Ae(E),z,o,c,h,d)}}),m.children.inorderTraversal((E,S)=>{const k=!t.serverCache.isCompleteForChild(E)&&S.value===null;if(!y.hasChild(E)&&!k){const z=t.serverCache.getNode().getImmediateChild(E),j=nv(s,z,S);_=Io(s,_,new Ae(E),j,o,c,h,d)}}),_}function Zw(s,t,i,a,o,c,h){if(Do(o,i)!=null)return t;const d=t.serverCache.isFiltered(),_=t.serverCache;if(a.value!=null){if(ce(i)&&_.isFullyInitialized()||_.isCompleteForPath(i))return Io(s,t,i,_.getNode().getChild(i),o,c,d,h);if(ce(i)){let m=new Ne(null);return _.getNode().forEachChild(Xs,(y,E)=>{m=m.set(new Ae(y),E)}),Zf(s,t,i,m,o,c,d,h)}else return t}else{let m=new Ne(null);return a.foreach((y,E)=>{const S=je(i,y);_.isCompleteForPath(S)&&(m=m.set(y,_.getNode().getChild(S)))}),Zf(s,t,i,m,o,c,d,h)}}function Jw(s,t,i,a,o){const c=t.serverCache,h=Zy(t,c.getNode(),c.isFullyInitialized()||ce(i),c.isFiltered());return s0(s,h,i,a,i0,o)}function $w(s,t,i,a,o,c){let h;if(Do(a,i)!=null)return t;{const d=new xh(a,t,o),_=t.eventCache.getNode();let m;if(ce(i)||ae(i)===".priority"){let y;if(t.serverCache.isFullyInitialized())y=Oo(a,es(t));else{const E=t.serverCache.getNode();L(E instanceof Z,"serverChildren would be complete if leaf node"),y=Ih(a,E)}y=y,m=s.filter.updateFullNode(_,y,c)}else{const y=ae(i);let E=Mh(a,y,t.serverCache);E==null&&t.serverCache.isCompleteForChild(y)&&(E=_.getImmediateChild(y)),E!=null?m=s.filter.updateChild(_,y,E,Re(i),d,c):t.eventCache.getNode().hasChild(y)?m=s.filter.updateChild(_,y,Z.EMPTY_NODE,Re(i),d,c):m=_,m.isEmpty()&&t.serverCache.isFullyInitialized()&&(h=Oo(a,es(t)),h.isLeafNode()&&(m=s.filter.updateFullNode(m,h,c)))}return h=t.serverCache.isFullyInitialized()||Do(a,_e())!=null,va(t,m,h,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(t,i){this.query_=t,this.eventRegistrations_=[];const a=this.query_._queryParams,o=new wh(a.getIndex()),c=yw(a);this.processor_=Fw(c);const h=i.serverCache,d=i.eventCache,_=o.updateFullNode(Z.EMPTY_NODE,h.getNode(),null),m=c.updateFullNode(Z.EMPTY_NODE,d.getNode(),null),y=new $i(_,h.isFullyInitialized(),o.filtersNodes()),E=new $i(m,d.isFullyInitialized(),c.filtersNodes());this.viewCache_=Go(E,y),this.eventGenerator_=new ww(this.query_)}get query(){return this.query_}}function tR(s){return s.viewCache_.serverCache.getNode()}function nR(s,t){const i=es(s.viewCache_);return i&&(s.query._queryParams.loadsAllData()||!ce(t)&&!i.getImmediateChild(ae(t)).isEmpty())?i.getChild(t):null}function iv(s){return s.eventRegistrations_.length===0}function iR(s,t){s.eventRegistrations_.push(t)}function sv(s,t,i){const a=[];if(i){L(t==null,"A cancel should cancel all event registrations.");const o=s.query._path;s.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(i,o);h&&a.push(h)})}if(t){let o=[];for(let c=0;c<s.eventRegistrations_.length;++c){const h=s.eventRegistrations_[c];if(!h.matches(t))o.push(h);else if(t.hasAnyCallback()){o=o.concat(s.eventRegistrations_.slice(c+1));break}}s.eventRegistrations_=o}else s.eventRegistrations_=[];return a}function rv(s,t,i,a){t.type===Wt.MERGE&&t.source.queryId!==null&&(L(es(s.viewCache_),"We should always have a full cache before handling merges"),L(Qf(s.viewCache_),"Missing event cache, even though we have a server cache"));const o=s.viewCache_,c=Kw(s.processor_,o,t,i,a);return Qw(s.processor_,c.viewCache),L(c.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=c.viewCache,r0(s,c.changes,c.viewCache.eventCache.getNode(),null)}function sR(s,t){const i=s.viewCache_.eventCache,a=[];return i.getNode().isLeafNode()||i.getNode().forEachChild(ke,(c,h)=>{a.push(er(c,h))}),i.isFullyInitialized()&&a.push(Ky(i.getNode())),r0(s,a,i.getNode(),t)}function r0(s,t,i,a){const o=a?[a]:s.eventRegistrations_;return Rw(s.eventGenerator_,t,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo;class rR{constructor(){this.views=new Map}}function aR(s){L(!Mo,"__referenceConstructor has already been defined"),Mo=s}function lR(){return L(Mo,"Reference.ts has not been loaded"),Mo}function oR(s){return s.views.size===0}function kh(s,t,i,a){const o=t.source.queryId;if(o!==null){const c=s.views.get(o);return L(c!=null,"SyncTree gave us an op for an invalid query."),rv(c,t,i,a)}else{let c=[];for(const h of s.views.values())c=c.concat(rv(h,t,i,a));return c}}function uR(s,t,i,a,o){const c=t._queryIdentifier,h=s.views.get(c);if(!h){let d=Oo(i,o?a:null),_=!1;d?_=!0:a instanceof Z?(d=Ih(i,a),_=!1):(d=Z.EMPTY_NODE,_=!1);const m=Go(new $i(d,_,!1),new $i(a,o,!1));return new eR(t,m)}return h}function cR(s,t,i,a,o,c){const h=uR(s,t,a,o,c);return s.views.has(t._queryIdentifier)||s.views.set(t._queryIdentifier,h),iR(h,i),sR(h,i)}function fR(s,t,i,a){const o=t._queryIdentifier,c=[];let h=[];const d=gi(s);if(o==="default")for(const[_,m]of s.views.entries())h=h.concat(sv(m,i,a)),iv(m)&&(s.views.delete(_),m.query._queryParams.loadsAllData()||c.push(m.query));else{const _=s.views.get(o);_&&(h=h.concat(sv(_,i,a)),iv(_)&&(s.views.delete(o),_.query._queryParams.loadsAllData()||c.push(_.query)))}return d&&!gi(s)&&c.push(new(lR())(t._repo,t._path)),{removed:c,events:h}}function a0(s){const t=[];for(const i of s.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Ws(s,t){let i=null;for(const a of s.views.values())i=i||nR(a,t);return i}function l0(s,t){if(t._queryParams.loadsAllData())return Yo(s);{const a=t._queryIdentifier;return s.views.get(a)}}function o0(s,t){return l0(s,t)!=null}function gi(s){return Yo(s)!=null}function Yo(s){for(const t of s.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;function hR(s){L(!xo,"__referenceConstructor has already been defined"),xo=s}function dR(){return L(xo,"Reference.ts has not been loaded"),xo}let pR=1;class av{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Ne(null),this.pendingWriteTree_=qw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function u0(s,t,i,a,o){return Iw(s.pendingWriteTree_,t,i,a,o),o?Ba(s,new Ji(Wy(),t,i)):[]}function Yi(s,t,i=!1){const a=Mw(s.pendingWriteTree_,t);if(xw(s.pendingWriteTree_,t)){let c=new Ne(null);return a.snap!=null?c=c.set(_e(),!0):Et(a.children,h=>{c=c.set(new Ae(h),!0)}),Ba(s,new No(a.path,c,i))}else return[]}function Fo(s,t,i){return Ba(s,new Ji(Nh(),t,i))}function _R(s,t,i){const a=Ne.fromObject(i);return Ba(s,new Da(Nh(),t,a))}function mR(s,t){return Ba(s,new Oa(Nh(),t))}function gR(s,t,i){const a=Lh(s,i);if(a){const o=zh(a),c=o.path,h=o.queryId,d=gt(c,t),_=new Oa(Oh(h),d);return Hh(s,c,_)}else return[]}function Jf(s,t,i,a,o=!1){const c=t._path,h=s.syncPointTree_.get(c);let d=[];if(h&&(t._queryIdentifier==="default"||o0(h,t))){const _=fR(h,t,i,a);oR(h)&&(s.syncPointTree_=s.syncPointTree_.remove(c));const m=_.removed;if(d=_.events,!o){const y=m.findIndex(S=>S._queryParams.loadsAllData())!==-1,E=s.syncPointTree_.findOnPath(c,(S,k)=>gi(k));if(y&&!E){const S=s.syncPointTree_.subtree(c);if(!S.isEmpty()){const k=ER(S);for(let z=0;z<k.length;++z){const j=k[z],V=j.query,se=h0(s,j);s.listenProvider_.startListening(Ea(V),ko(s,V),se.hashFn,se.onComplete)}}}!E&&m.length>0&&!a&&(y?s.listenProvider_.stopListening(Ea(t),null):m.forEach(S=>{const k=s.queryToTagMap.get(Qo(S));s.listenProvider_.stopListening(Ea(S),k)}))}SR(s,m)}return d}function vR(s,t,i,a){const o=Lh(s,a);if(o!=null){const c=zh(o),h=c.path,d=c.queryId,_=gt(h,t),m=new Ji(Oh(d),_,i);return Hh(s,h,m)}else return[]}function yR(s,t,i,a){const o=Lh(s,a);if(o){const c=zh(o),h=c.path,d=c.queryId,_=gt(h,t),m=Ne.fromObject(i),y=new Da(Oh(d),_,m);return Hh(s,h,y)}else return[]}function lv(s,t,i,a=!1){const o=t._path;let c=null,h=!1;s.syncPointTree_.foreachOnPath(o,(S,k)=>{const z=gt(S,o);c=c||Ws(k,z),h=h||gi(k)});let d=s.syncPointTree_.get(o);d?(h=h||gi(d),c=c||Ws(d,_e())):(d=new rR,s.syncPointTree_=s.syncPointTree_.set(o,d));let _;c!=null?_=!0:(_=!1,c=Z.EMPTY_NODE,s.syncPointTree_.subtree(o).foreachChild((k,z)=>{const j=Ws(z,_e());j&&(c=c.updateImmediateChild(k,j))}));const m=o0(d,t);if(!m&&!t._queryParams.loadsAllData()){const S=Qo(t);L(!s.queryToTagMap.has(S),"View does not exist, but we have a tag");const k=bR();s.queryToTagMap.set(S,k),s.tagToQueryMap.set(k,S)}const y=Dh(s.pendingWriteTree_,o);let E=cR(d,t,i,y,c,_);if(!m&&!h&&!a){const S=l0(d,t);E=E.concat(TR(s,t,S))}return E}function Uh(s,t,i){const o=s.pendingWriteTree_,c=s.syncPointTree_.findOnPath(t,(h,d)=>{const _=gt(h,t),m=Ws(d,_);if(m)return m});return e0(o,t,c,i,!0)}function Ba(s,t){return c0(t,s.syncPointTree_,null,Dh(s.pendingWriteTree_,_e()))}function c0(s,t,i,a){if(ce(s.path))return f0(s,t,i,a);{const o=t.get(_e());i==null&&o!=null&&(i=Ws(o,_e()));let c=[];const h=ae(s.path),d=s.operationForChild(h),_=t.children.get(h);if(_&&d){const m=i?i.getImmediateChild(h):null,y=t0(a,h);c=c.concat(c0(d,_,m,y))}return o&&(c=c.concat(kh(o,s,a,i))),c}}function f0(s,t,i,a){const o=t.get(_e());i==null&&o!=null&&(i=Ws(o,_e()));let c=[];return t.children.inorderTraversal((h,d)=>{const _=i?i.getImmediateChild(h):null,m=t0(a,h),y=s.operationForChild(h);y&&(c=c.concat(f0(y,d,_,m)))}),o&&(c=c.concat(kh(o,s,a,i))),c}function h0(s,t){const i=t.query,a=ko(s,i);return{hashFn:()=>(tR(t)||Z.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return a?gR(s,i._path,a):mR(s,i._path);{const c=vA(o,i);return Jf(s,i,null,c)}}}}function ko(s,t){const i=Qo(t);return s.queryToTagMap.get(i)}function Qo(s){return s._path.toString()+"$"+s._queryIdentifier}function Lh(s,t){return s.tagToQueryMap.get(t)}function zh(s){const t=s.indexOf("$");return L(t!==-1&&t<s.length-1,"Bad queryKey."),{queryId:s.substr(t+1),path:new Ae(s.substr(0,t))}}function Hh(s,t,i){const a=s.syncPointTree_.get(t);L(a,"Missing sync point for query tag that we're tracking");const o=Dh(s.pendingWriteTree_,t);return kh(a,i,o,null)}function ER(s){return s.fold((t,i,a)=>{if(i&&gi(i))return[Yo(i)];{let o=[];return i&&(o=a0(i)),Et(a,(c,h)=>{o=o.concat(h)}),o}})}function Ea(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(dR())(s._repo,s._path):s}function SR(s,t){for(let i=0;i<t.length;++i){const a=t[i];if(!a._queryParams.loadsAllData()){const o=Qo(a),c=s.queryToTagMap.get(o);s.queryToTagMap.delete(o),s.tagToQueryMap.delete(c)}}}function bR(){return pR++}function TR(s,t,i){const a=t._path,o=ko(s,t),c=h0(s,i),h=s.listenProvider_.startListening(Ea(t),o,c.hashFn,c.onComplete),d=s.syncPointTree_.subtree(a);if(o)L(!gi(d.value),"If we're adding a query, it shouldn't be shadowed");else{const _=d.fold((m,y,E)=>{if(!ce(m)&&y&&gi(y))return[Yo(y).query];{let S=[];return y&&(S=S.concat(a0(y).map(k=>k.query))),Et(E,(k,z)=>{S=S.concat(z)}),S}});for(let m=0;m<_.length;++m){const y=_[m];s.listenProvider_.stopListening(Ea(y),ko(s,y))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){this.node_=t}getImmediateChild(t){const i=this.node_.getImmediateChild(t);return new Ph(i)}node(){return this.node_}}class Bh{constructor(t,i){this.syncTree_=t,this.path_=i}getImmediateChild(t){const i=je(this.path_,t);return new Bh(this.syncTree_,i)}node(){return Uh(this.syncTree_,this.path_)}}const CR=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},ov=function(s,t,i){if(!s||typeof s!="object")return s;if(L(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return AR(s[".sv"],t,i);if(typeof s[".sv"]=="object")return wR(s[".sv"],t);L(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},AR=function(s,t,i){switch(s){case"timestamp":return i.timestamp;default:L(!1,"Unexpected server value: "+s)}},wR=function(s,t,i){s.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const a=s.increment;typeof a!="number"&&L(!1,"Unexpected increment value: "+a);const o=t.node();if(L(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return a;const h=o.getValue();return typeof h!="number"?a:h+a},RR=function(s,t,i,a){return jh(t,new Bh(i,s),a)},d0=function(s,t,i){return jh(s,new Ph(t),i)};function jh(s,t,i){const a=s.getPriority().val(),o=ov(a,t.getImmediateChild(".priority"),i);let c;if(s.isLeafNode()){const h=s,d=ov(h.getValue(),t,i);return d!==h.getValue()||o!==h.getPriority().val()?new Fe(d,$e(o)):s}else{const h=s;return c=h,o!==h.getPriority().val()&&(c=c.updatePriority(new Fe(o))),h.forEachChild(ke,(d,_)=>{const m=jh(_,t.getImmediateChild(d),i);m!==_&&(c=c.updateImmediateChild(d,m))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t="",i=null,a={children:{},childCount:0}){this.name=t,this.parent=i,this.node=a}}function Vh(s,t){let i=t instanceof Ae?t:new Ae(t),a=s,o=ae(i);for(;o!==null;){const c=Zs(a.node.children,o)||{children:{},childCount:0};a=new qh(o,a,c),i=Re(i),o=ae(i)}return a}function or(s){return s.node.value}function p0(s,t){s.node.value=t,$f(s)}function _0(s){return s.node.childCount>0}function NR(s){return or(s)===void 0&&!_0(s)}function Ko(s,t){Et(s.node.children,(i,a)=>{t(new qh(i,s,a))})}function m0(s,t,i,a){i&&t(s),Ko(s,o=>{m0(o,t,!0)})}function OR(s,t,i){let a=s.parent;for(;a!==null;){if(t(a))return!0;a=a.parent}return!1}function ja(s){return new Ae(s.parent===null?s.name:ja(s.parent)+"/"+s.name)}function $f(s){s.parent!==null&&DR(s.parent,s.name,s)}function DR(s,t,i){const a=NR(i),o=kn(s.node.children,t);a&&o?(delete s.node.children[t],s.node.childCount--,$f(s)):!a&&!o&&(s.node.children[t]=i.node,s.node.childCount++,$f(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/[\[\].#$\/\u0000-\u001F\u007F]/,MR=/[\[\].#$\u0000-\u001F\u007F]/,If=10*1024*1024,g0=function(s){return typeof s=="string"&&s.length!==0&&!IR.test(s)},v0=function(s){return typeof s=="string"&&s.length!==0&&!MR.test(s)},xR=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),v0(s)},kR=function(s,t,i,a){Gh(ah(s,"value"),t,i)},Gh=function(s,t,i){const a=i instanceof Ae?new ZA(i,s):i;if(t===void 0)throw new Error(s+"contains undefined "+Vi(a));if(typeof t=="function")throw new Error(s+"contains a function "+Vi(a)+" with contents = "+t.toString());if(vy(t))throw new Error(s+"contains "+t.toString()+" "+Vi(a));if(typeof t=="string"&&t.length>If/3&&Po(t)>If)throw new Error(s+"contains a string greater than "+If+" utf8 bytes "+Vi(a)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let o=!1,c=!1;if(Et(t,(h,d)=>{if(h===".value")o=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!g0(h)))throw new Error(s+" contains an invalid key ("+h+") "+Vi(a)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);JA(a,h),Gh(s,d,a),$A(a)}),o&&c)throw new Error(s+' contains ".value" child '+Vi(a)+" in addition to actual children.")}},y0=function(s,t,i,a){if(!v0(i))throw new Error(ah(s,t)+'was an invalid path = "'+i+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UR=function(s,t,i,a){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),y0(s,t,i)},LR=function(s,t){if(ae(t)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},zR=function(s,t){const i=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!g0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||i.length!==0&&!xR(i))throw new Error(ah(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yh(s,t){let i=null;for(let a=0;a<t.length;a++){const o=t[a],c=o.getPath();i!==null&&!Th(c,i.path)&&(s.eventLists_.push(i),i=null),i===null&&(i={events:[],path:c}),i.events.push(o)}i&&s.eventLists_.push(i)}function E0(s,t,i){Yh(s,i),S0(s,a=>Th(a,t))}function xn(s,t,i){Yh(s,i),S0(s,a=>Xt(a,t)||Xt(t,a))}function S0(s,t){s.recursionDepth_++;let i=!0;for(let a=0;a<s.eventLists_.length;a++){const o=s.eventLists_[a];if(o){const c=o.path;t(c)?(PR(s.eventLists_[a]),s.eventLists_[a]=null):i=!1}}i&&(s.eventLists_=[]),s.recursionDepth_--}function PR(s){for(let t=0;t<s.events.length;t++){const i=s.events[t];if(i!==null){s.events[t]=null;const a=i.getEventRunner();ma&&at("event: "+i.toString()),lr(a)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="repo_interrupt",jR=25;class qR{constructor(t,i,a,o){this.repoInfo_=t,this.forceRestClient_=i,this.authTokenProvider_=a,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new HR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ro(),this.transactionQueueTree_=new qh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VR(s,t,i){if(s.stats_=Sh(s.repoInfo_),s.forceRestClient_||bA())s.server_=new wo(s.repoInfo_,(a,o,c,h)=>{uv(s,a,o,c,h)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>cv(s,!0),0);else{if(typeof i<"u"&&i!==null){if(typeof i!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(i)}catch(a){throw new Error("Invalid authOverride provided: "+a)}}s.persistentConnection_=new On(s.repoInfo_,t,(a,o,c,h)=>{uv(s,a,o,c,h)},a=>{cv(s,a)},a=>{YR(s,a)},s.authTokenProvider_,s.appCheckProvider_,i),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(a=>{s.server_.refreshAuthToken(a)}),s.appCheckProvider_.addTokenChangeListener(a=>{s.server_.refreshAppCheckToken(a.token)}),s.statsReporter_=RA(s.repoInfo_,()=>new Aw(s.stats_,s.server_)),s.infoData_=new Ew,s.infoSyncTree_=new av({startListening:(a,o,c,h)=>{let d=[];const _=s.infoData_.getNode(a._path);return _.isEmpty()||(d=Fo(s.infoSyncTree_,a._path,_),setTimeout(()=>{h("ok")},0)),d},stopListening:()=>{}}),Qh(s,"connected",!1),s.serverSyncTree_=new av({startListening:(a,o,c,h)=>(s.server_.listen(a,c,o,(d,_)=>{const m=h(d,_);xn(s.eventQueue_,a._path,m)}),[]),stopListening:(a,o)=>{s.server_.unlisten(a,o)}})}function GR(s){const i=s.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+i}function Fh(s){return CR({timestamp:GR(s)})}function uv(s,t,i,a,o){s.dataUpdateCount++;const c=new Ae(t);i=s.interceptServerDataCallback_?s.interceptServerDataCallback_(t,i):i;let h=[];if(o)if(a){const _=_o(i,m=>$e(m));h=yR(s.serverSyncTree_,c,_,o)}else{const _=$e(i);h=vR(s.serverSyncTree_,c,_,o)}else if(a){const _=_o(i,m=>$e(m));h=_R(s.serverSyncTree_,c,_)}else{const _=$e(i);h=Fo(s.serverSyncTree_,c,_)}let d=c;h.length>0&&(d=Xo(s,c)),xn(s.eventQueue_,d,h)}function cv(s,t){Qh(s,"connected",t),t===!1&&QR(s)}function YR(s,t){Et(t,(i,a)=>{Qh(s,i,a)})}function Qh(s,t,i){const a=new Ae("/.info/"+t),o=$e(i);s.infoData_.updateSnapshot(a,o);const c=Fo(s.infoSyncTree_,a,o);xn(s.eventQueue_,a,c)}function b0(s){return s.nextWriteId_++}function FR(s,t,i,a,o){Kh(s,"set",{path:t.toString(),value:i,priority:a});const c=Fh(s),h=$e(i,a),d=Uh(s.serverSyncTree_,t),_=d0(h,d,c),m=b0(s),y=u0(s.serverSyncTree_,t,_,m,!0);Yh(s.eventQueue_,y),s.server_.put(t.toString(),h.val(!0),(S,k)=>{const z=S==="ok";z||yt("set at "+t+" failed: "+S);const j=Yi(s.serverSyncTree_,m,!z);xn(s.eventQueue_,t,j),WR(s,o,S,k)});const E=R0(s,t);Xo(s,E),xn(s.eventQueue_,E,[])}function QR(s){Kh(s,"onDisconnectEvents");const t=Fh(s),i=Ro();Ff(s.onDisconnect_,_e(),(o,c)=>{const h=RR(o,c,s.serverSyncTree_,t);Xy(i,o,h)});let a=[];Ff(i,_e(),(o,c)=>{a=a.concat(Fo(s.serverSyncTree_,o,c));const h=R0(s,o);Xo(s,h)}),s.onDisconnect_=Ro(),xn(s.eventQueue_,_e(),a)}function KR(s,t,i){let a;ae(t._path)===".info"?a=lv(s.infoSyncTree_,t,i):a=lv(s.serverSyncTree_,t,i),E0(s.eventQueue_,t._path,a)}function fv(s,t,i){let a;ae(t._path)===".info"?a=Jf(s.infoSyncTree_,t,i):a=Jf(s.serverSyncTree_,t,i),E0(s.eventQueue_,t._path,a)}function XR(s){s.persistentConnection_&&s.persistentConnection_.interrupt(BR)}function Kh(s,...t){let i="";s.persistentConnection_&&(i=s.persistentConnection_.id+":"),at(i,...t)}function WR(s,t,i,a){t&&lr(()=>{if(i==="ok")t(null);else{const o=(i||"error").toUpperCase();let c=o;a&&(c+=": "+a);const h=new Error(c);h.code=o,t(h)}})}function T0(s,t,i){return Uh(s.serverSyncTree_,t,i)||Z.EMPTY_NODE}function Xh(s,t=s.transactionQueueTree_){if(t||Wo(s,t),or(t)){const i=A0(s,t);L(i.length>0,"Sending zero length transaction queue"),i.every(o=>o.status===0)&&ZR(s,ja(t),i)}else _0(t)&&Ko(t,i=>{Xh(s,i)})}function ZR(s,t,i){const a=i.map(m=>m.currentWriteId),o=T0(s,t,a);let c=o;const h=o.hash();for(let m=0;m<i.length;m++){const y=i[m];L(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=gt(t,y.path);c=c.updateChild(E,y.currentOutputSnapshotRaw)}const d=c.val(!0),_=t;s.server_.put(_.toString(),d,m=>{Kh(s,"transaction put response",{path:_.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let S=0;S<i.length;S++)i[S].status=2,y=y.concat(Yi(s.serverSyncTree_,i[S].currentWriteId)),i[S].onComplete&&E.push(()=>i[S].onComplete(null,!0,i[S].currentOutputSnapshotResolved)),i[S].unwatcher();Wo(s,Vh(s.transactionQueueTree_,t)),Xh(s,s.transactionQueueTree_),xn(s.eventQueue_,t,y);for(let S=0;S<E.length;S++)lr(E[S])}else{if(m==="datastale")for(let E=0;E<i.length;E++)i[E].status===3?i[E].status=4:i[E].status=0;else{yt("transaction at "+_.toString()+" failed: "+m);for(let E=0;E<i.length;E++)i[E].status=4,i[E].abortReason=m}Xo(s,t)}},h)}function Xo(s,t){const i=C0(s,t),a=ja(i),o=A0(s,i);return JR(s,o,a),a}function JR(s,t,i){if(t.length===0)return;const a=[];let o=[];const h=t.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<t.length;d++){const _=t[d],m=gt(i,_.path);let y=!1,E;if(L(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)y=!0,E=_.abortReason,o=o.concat(Yi(s.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=jR)y=!0,E="maxretry",o=o.concat(Yi(s.serverSyncTree_,_.currentWriteId,!0));else{const S=T0(s,_.path,h);_.currentInputSnapshot=S;const k=t[d].update(S.val());if(k!==void 0){Gh("transaction failed: Data returned ",k,_.path);let z=$e(k);typeof k=="object"&&k!=null&&kn(k,".priority")||(z=z.updatePriority(S.getPriority()));const V=_.currentWriteId,se=Fh(s),$=d0(z,S,se);_.currentOutputSnapshotRaw=z,_.currentOutputSnapshotResolved=$,_.currentWriteId=b0(s),h.splice(h.indexOf(V),1),o=o.concat(u0(s.serverSyncTree_,_.path,$,_.currentWriteId,_.applyLocally)),o=o.concat(Yi(s.serverSyncTree_,V,!0))}else y=!0,E="nodata",o=o.concat(Yi(s.serverSyncTree_,_.currentWriteId,!0))}xn(s.eventQueue_,i,o),o=[],y&&(t[d].status=2,function(S){setTimeout(S,Math.floor(0))}(t[d].unwatcher),t[d].onComplete&&(E==="nodata"?a.push(()=>t[d].onComplete(null,!1,t[d].currentInputSnapshot)):a.push(()=>t[d].onComplete(new Error(E),!1,null))))}Wo(s,s.transactionQueueTree_);for(let d=0;d<a.length;d++)lr(a[d]);Xh(s,s.transactionQueueTree_)}function C0(s,t){let i,a=s.transactionQueueTree_;for(i=ae(t);i!==null&&or(a)===void 0;)a=Vh(a,i),t=Re(t),i=ae(t);return a}function A0(s,t){const i=[];return w0(s,t,i),i.sort((a,o)=>a.order-o.order),i}function w0(s,t,i){const a=or(t);if(a)for(let o=0;o<a.length;o++)i.push(a[o]);Ko(t,o=>{w0(s,o,i)})}function Wo(s,t){const i=or(t);if(i){let a=0;for(let o=0;o<i.length;o++)i[o].status!==2&&(i[a]=i[o],a++);i.length=a,p0(t,i.length>0?i:void 0)}Ko(t,a=>{Wo(s,a)})}function R0(s,t){const i=ja(C0(s,t)),a=Vh(s.transactionQueueTree_,t);return OR(a,o=>{Mf(s,o)}),Mf(s,a),m0(a,o=>{Mf(s,o)}),i}function Mf(s,t){const i=or(t);if(i){const a=[];let o=[],c=-1;for(let h=0;h<i.length;h++)i[h].status===3||(i[h].status===1?(L(c===h-1,"All SENT items should be at beginning of queue."),c=h,i[h].status=3,i[h].abortReason="set"):(L(i[h].status===0,"Unexpected transaction status in abort"),i[h].unwatcher(),o=o.concat(Yi(s.serverSyncTree_,i[h].currentWriteId,!0)),i[h].onComplete&&a.push(i[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?p0(t,void 0):i.length=c+1,xn(s.eventQueue_,ja(t),o);for(let h=0;h<a.length;h++)lr(a[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(s){let t="";const i=s.split("/");for(let a=0;a<i.length;a++)if(i[a].length>0){let o=i[a];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}t+="/"+o}return t}function eN(s){const t={};s.charAt(0)==="?"&&(s=s.substring(1));for(const i of s.split("&")){if(i.length===0)continue;const a=i.split("=");a.length===2?t[decodeURIComponent(a[0])]=decodeURIComponent(a[1]):yt(`Invalid query segment '${i}' in query '${s}'`)}return t}const hv=function(s,t){const i=tN(s),a=i.namespace;i.domain==="firebase.com"&&Mn(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!a||a==="undefined")&&i.domain!=="localhost"&&Mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||dA();const o=i.scheme==="ws"||i.scheme==="wss";return{repoInfo:new Dy(i.host,i.secure,a,o,t,"",a!==i.subdomain),path:new Ae(i.pathString)}},tN=function(s){let t="",i="",a="",o="",c="",h=!0,d="https",_=443;if(typeof s=="string"){let m=s.indexOf("//");m>=0&&(d=s.substring(0,m-1),s=s.substring(m+2));let y=s.indexOf("/");y===-1&&(y=s.length);let E=s.indexOf("?");E===-1&&(E=s.length),t=s.substring(0,Math.min(y,E)),y<E&&(o=$R(s.substring(y,E)));const S=eN(s.substring(Math.min(s.length,E)));m=t.indexOf(":"),m>=0?(h=d==="https"||d==="wss",_=parseInt(t.substring(m+1),10)):m=t.length;const k=t.slice(0,m);if(k.toLowerCase()==="localhost")i="localhost";else if(k.split(".").length<=2)i=k;else{const z=t.indexOf(".");a=t.substring(0,z).toLowerCase(),i=t.substring(z+1),c=a}"ns"in S&&(c=S.ns)}return{host:t,port:_,domain:i,subdomain:a,secure:h,scheme:d,pathString:o,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(t,i,a,o){this.eventType=t,this.eventRegistration=i,this.snapshot=a,this.prevName=o}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class iN{constructor(t,i,a){this.eventRegistration=t,this.error=i,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(t,i){this.snapshotCallback=t,this.cancelCallback=i}onValue(t,i){this.snapshotCallback.call(null,t,i)}onCancel(t){return L(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,i,a,o){this._repo=t,this._path=i,this._queryParams=a,this._orderByCalled=o}get key(){return ce(this._path)?null:Py(this._path)}get ref(){return new Si(this._repo,this._path)}get _queryIdentifier(){const t=Xg(this._queryParams),i=yh(t);return i==="{}"?"default":i}get _queryObject(){return Xg(this._queryParams)}isEqual(t){if(t=It(t),!(t instanceof Wh))return!1;const i=this._repo===t._repo,a=Th(this._path,t._path),o=this._queryIdentifier===t._queryIdentifier;return i&&a&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+WA(this._path)}}class Si extends Wh{constructor(t,i){super(t,i,new Rh,!1)}get parent(){const t=jy(this._path);return t===null?null:new Si(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Uo{constructor(t,i,a){this._node=t,this.ref=i,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const i=new Ae(t),a=eh(this.ref,t);return new Uo(this._node.getChild(i),a,ke)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(a,o)=>t(new Uo(o,eh(this.ref,a),ke)))}hasChild(t){const i=new Ae(t);return!this._node.getChild(i).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jt(s,t){return s=It(s),s._checkNotDeleted("ref"),t!==void 0?eh(s._root,t):s._root}function eh(s,t){return s=It(s),ae(s._path)===null?UR("child","path",t):y0("child","path",t),new Si(s._repo,je(s._path,t))}function an(s,t){s=It(s),LR("set",s._path),kR("set",t,s._path);const i=new Ho;return FR(s._repo,s._path,t,null,i.wrapCallback(()=>{})),i.promise}class Zh{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,i){const a=i._queryParams.getIndex();return new nN("value",this,new Uo(t.snapshotNode,new Si(i._repo,i._path),a))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,i){return this.callbackContext.hasCancelCallback?new iN(this,t,i):null}matches(t){return t instanceof Zh?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function rN(s,t,i,a,o){let c;if(typeof a=="object"&&(c=void 0,o=a),typeof a=="function"&&(c=a),o&&o.onlyOnce){const _=i,m=(y,E)=>{fv(s._repo,s,d),_(y,E)};m.userCallback=i.userCallback,m.context=i.context,i=m}const h=new sN(i,c||void 0),d=new Zh(h);return KR(s._repo,s,d),()=>fv(s._repo,s,d)}function dv(s,t,i,a){return rN(s,"value",t,i,a)}aR(Si);hR(Si);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN="FIREBASE_DATABASE_EMULATOR_HOST",th={};let lN=!1;function oN(s,t,i,a){const o=t.lastIndexOf(":"),c=t.substring(0,o),h=Ia(c);s.repoInfo_=new Dy(t,h,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,i),a&&(s.authTokenProvider_=a)}function uN(s,t,i,a,o){let c=a||s.options.databaseURL;c===void 0&&(s.options.projectId||Mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),at("Using default host for project ",s.options.projectId),c=`${s.options.projectId}-default-rtdb.firebaseio.com`);let h=hv(c,o),d=h.repoInfo,_;typeof process<"u"&&Ig&&(_=Ig[aN]),_?(c=`http://${_}?ns=${d.namespace}`,h=hv(c,o),d=h.repoInfo):h.repoInfo.secure;const m=new CA(s.name,s.options,t);zR("Invalid Firebase Database URL",h),ce(h.path)||Mn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=fN(d,s,m,new TA(s,i));return new hN(y,s)}function cN(s,t){const i=th[t];(!i||i[s.key]!==s)&&Mn(`Database ${t}(${s.repoInfo_}) has already been deleted.`),XR(s),delete i[s.key]}function fN(s,t,i,a){let o=th[t.name];o||(o={},th[t.name]=o);let c=o[s.toURLString()];return c&&Mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new qR(s,lN,i,a),o[s.toURLString()]=c,c}class hN{constructor(t,i){this._repoInternal=t,this.app=i,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Si(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(cN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Mn("Cannot call "+t+" on a deleted database.")}}function dN(s=Iv(),t){const i=uh(s,"database").getImmediate({identifier:t});if(!i._instanceStarted){const a=Eb("database");a&&pN(i,...a)}return i}function pN(s,t,i,a={}){s=It(s),s._checkNotDeleted("useEmulator");const o=`${t}:${i}`,c=s._repoInternal;if(s._instanceStarted){if(o===s._repoInternal.repoInfo_.host&&Qi(a,c.repoInfo_.emulatorOptions))return;Mn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)a.mockUserToken&&Mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new fo(fo.OWNER);else if(a.mockUserToken){const d=typeof a.mockUserToken=="string"?a.mockUserToken:Sb(a.mockUserToken,s.app.options.projectId);h=new fo(d)}Ia(t)&&(Cv(t),Av("Database",!0)),oN(c,o,a,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(s){lA(sr),Js(new Ki("database",(t,{instanceIdentifier:i})=>{const a=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),c=t.getProvider("app-check-internal");return uN(a,o,c,i)},"PUBLIC").setMultipleInstances(!0)),pi(Mg,xg,s),pi(Mg,xg,"esm2017")}On.prototype.simpleListen=function(s,t){this.sendRequest("q",{p:s},t)};On.prototype.echo=function(s,t){this.sendRequest("echo",{d:s},t)};_N();var mN="firebase",gN="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pi(mN,gN,"app");const vN={apiKey:"AIzaSyCM3jP5noU3wPlySoNYDoF-ykyZ_0vAKUk",authDomain:"todo-app-reat-js-database.firebaseapp.com",databaseURL:"https://todo-app-reat-js-database-default-rtdb.firebaseio.com",projectId:"todo-app-reat-js-database",storageBucket:"todo-app-reat-js-database.firebasestorage.app",messagingSenderId:"506964657857",appId:"1:506964657857:web:87ee9a6eb15f5718c23640",measurementId:"G-JSESG6PP2G"},Jh=Dv(vN),N0=py(Jh),yN=({onAdd:s})=>{const[t,i]=ut.useState(""),a=c=>c.charAt(0).toUpperCase()+c.slice(1),o=()=>{const c=a(t);s(c),i("")};return U.jsxs(U.Fragment,{children:[U.jsx("div",{className:"input-group",children:U.jsx("input",{type:"text",placeholder:"Enter Todo Here",value:t,onChange:c=>i(c.target.value),onKeyPress:c=>c.key==="Enter"&&o()})}),U.jsx("button",{onClick:o,children:"Add Todo"})]})};var O0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pv=Fi.createContext&&Fi.createContext(O0),EN=["attr","size","title"];function SN(s,t){if(s==null)return{};var i=bN(s,t),a,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(o=0;o<c.length;o++)a=c[o],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(s,a)&&(i[a]=s[a])}return i}function bN(s,t){if(s==null)return{};var i={};for(var a in s)if(Object.prototype.hasOwnProperty.call(s,a)){if(t.indexOf(a)>=0)continue;i[a]=s[a]}return i}function Lo(){return Lo=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=i[a])}return s},Lo.apply(this,arguments)}function _v(s,t){var i=Object.keys(s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(s);t&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(s,o).enumerable})),i.push.apply(i,a)}return i}function zo(s){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?_v(Object(i),!0).forEach(function(a){TN(s,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):_v(Object(i)).forEach(function(a){Object.defineProperty(s,a,Object.getOwnPropertyDescriptor(i,a))})}return s}function TN(s,t,i){return t=CN(t),t in s?Object.defineProperty(s,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):s[t]=i,s}function CN(s){var t=AN(s,"string");return typeof t=="symbol"?t:t+""}function AN(s,t){if(typeof s!="object"||!s)return s;var i=s[Symbol.toPrimitive];if(i!==void 0){var a=i.call(s,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function D0(s){return s&&s.map((t,i)=>Fi.createElement(t.tag,zo({key:i},t.attr),D0(t.child)))}function qa(s){return t=>Fi.createElement(wN,Lo({attr:zo({},s.attr)},t),D0(s.child))}function wN(s){var t=i=>{var{attr:a,size:o,title:c}=s,h=SN(s,EN),d=o||i.size||"1em",_;return i.className&&(_=i.className),s.className&&(_=(_?_+" ":"")+s.className),Fi.createElement("svg",Lo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,a,h,{className:_,style:zo(zo({color:s.color||i.color},i.style),s.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&Fi.createElement("title",null,c),s.children)};return pv!==void 0?Fi.createElement(pv.Consumer,null,i=>t(i)):t(O0)}function I0(s){return qa({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"},child:[]}]})(s)}function RN(s){return qa({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"},child:[]}]})(s)}function NN(s){return qa({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"},child:[]}]})(s)}function ON(s){return qa({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"},child:[]}]})(s)}function DN(s){return qa({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M688 312v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-392 88c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm376 116c-119.3 0-216 96.7-216 216s96.7 216 216 216 216-96.7 216-216-96.7-216-216-216zm107.5 323.5C750.8 868.2 712.6 884 672 884s-78.8-15.8-107.5-44.5C535.8 810.8 520 772.6 520 732s15.8-78.8 44.5-107.5C593.2 595.8 631.4 580 672 580s78.8 15.8 107.5 44.5C808.2 653.2 824 691.4 824 732s-15.8 78.8-44.5 107.5zM761 656h-44.3c-2.6 0-5 1.2-6.5 3.3l-63.5 87.8-23.1-31.9a7.92 7.92 0 0 0-6.5-3.3H573c-6.5 0-10.3 7.4-6.5 12.7l73.8 102.1c3.2 4.4 9.7 4.4 12.9 0l114.2-158c3.9-5.3.1-12.7-6.4-12.7zM440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"},child:[]}]})(s)}const IN=({todo:s,onDelete:t,isEditing:i,onEdit:a,onSave:o,onCancel:c,onFinish:h})=>U.jsx(U.Fragment,{children:U.jsx("div",{className:"todo-actions",children:i?U.jsxs(U.Fragment,{children:[U.jsx("button",{className:"save-btn",onClick:o,children:U.jsx(RN,{})}),U.jsx("button",{className:"cancel-btn",onClick:c,children:U.jsx(NN,{})})]}):U.jsxs(U.Fragment,{children:[U.jsx("button",{className:"delete-btn",onClick:()=>t(s.id),children:U.jsx(I0,{})}),U.jsx("button",{className:"edit-btn",onClick:a,children:U.jsx(ON,{})}),U.jsx("button",{className:"finish-btn",onClick:()=>h(s.id),children:U.jsx(DN,{})})]})})}),MN=({todo:s,onDelete:t,onUpdate:i,onFinish:a})=>{const[o,c]=ut.useState(!1),[h,d]=ut.useState(s.text),_=()=>{c(!0)},m=()=>{h.trim()&&(i(s.id,h.charAt(0).toUpperCase()+h.slice(1)),c(!1))},y=()=>{d(s.text),c(!1)},E=()=>{a(s.id)};return U.jsx(U.Fragment,{children:U.jsxs("div",{className:"todo-item",children:[o?U.jsx("input",{type:"text",value:h,onChange:S=>d(S.target.value),className:"edit-input",autoFocus:!0}):U.jsx("span",{children:s.text}),U.jsx(IN,{todo:s,onDelete:t,isEditing:o,onEdit:_,onSave:m,onCancel:y,onFinish:E})]},s.id)})},xN=({todos:s,onDelete:t,onUpdate:i,onFinish:a})=>U.jsx(U.Fragment,{children:U.jsx("div",{id:"show-output",children:s.map(o=>U.jsx(MN,{todo:o,onDelete:t,onUpdate:i,onFinish:a},o.id))})}),kN=({finishedTodos:s,onDelete:t,onUnfinish:i})=>U.jsx(U.Fragment,{children:U.jsxs("div",{className:"completed-tasks",children:[U.jsx("h2",{children:"Completed Tasks"}),U.jsx("div",{className:"completed-list",children:s.length===0?U.jsx("h2",{children:"No Task Completed"}):s.map(a=>U.jsxs("div",{className:"completed-card",children:[U.jsx("span",{children:a.text}),U.jsxs("div",{className:"buttons-group",children:[U.jsx("button",{onClick:()=>t(a.id),className:"completed-task-btn",children:U.jsx(I0,{})}),U.jsx("button",{onClick:()=>i(a.id),className:"unfinish-btn",children:"UnFinish Task"})]})]},a.id))})]})}),UN=()=>{const[s,t]=ut.useState(""),[i,a]=ut.useState(""),o=async()=>{try{await F1(N0,s,i),alert("Login Successful!")}catch(c){alert(c.message)}};return U.jsx(U.Fragment,{children:U.jsxs("div",{className:"auth-container",children:[U.jsx("h2",{children:"Login"}),U.jsx("input",{type:"email",placeholder:"Enter Your Email",id:"loginInput",onChange:c=>t(c.target.value),value:s}),U.jsx("input",{type:"password",placeholder:"Enter your password",id:"loginPass",className:"auth-input",onChange:c=>{a(c.target.value)},value:i}),U.jsx("button",{className:"auth-button",onClick:o,children:"Log In"})]})})},LN=()=>{const[s,t]=ut.useState(""),[i,a]=ut.useState(""),o=async()=>{try{await Y1(N0,s,i),alert("Sign Up Successful!")}catch(c){alert(c.message)}};return U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"auth-container",children:[U.jsx("h2",{children:"Sign Up"}),U.jsx("input",{type:"email",placeholder:"Enter Your Email",id:"signUpInput",className:"auth-input",onChange:c=>t(c.target.value)}),U.jsx("input",{type:"password",placeholder:"Enter a strong password",id:"passInput",onChange:c=>a(c.target.value)})]}),U.jsx("button",{className:"auth-button",onClick:o,children:"Sign Up"})]})},qt=dN(Jh),mv=py(Jh);function zN(){const[s,t]=ut.useState([]),[i,a]=ut.useState([]),[o,c]=ut.useState(null),[h,d]=ut.useState(!0);ut.useEffect(()=>{const j=X1(mv,V=>{c(V),d(!1)});return()=>j()},[]),ut.useEffect(()=>{if(!o)return;const j=jt(qt,`users/${o.uid}/todos`),V=jt(qt,`users/${o.uid}/finishedTodos`),se=$=>{console.error(`Firebase read error: ${$}`),alert(`Firebase data read error: ${$.message}`)};dv(j,$=>{const te=$.val();t(te||[])}),dv(V,$=>{const te=$.val();a(te||[])},se)},[o]);const _=()=>{o&&(an(jt(qt,`users/${o.uid}/todos`),s),an(jt(qt,`users/${o.uid}/finishedTodos`),i))},m=j=>{if(!o||j.trim()==="")return;const V={id:Date.now(),text:j},se=[...s,V];t(se),an(jt(qt,`users/${o.uid}/todos`),se),console.log(Date.now())},y=j=>{if(!o)return;const V=s.filter(se=>se.id!==j);t(V),an(jt(qt,`users/${o.uid}/todos`),V)},E=(j,V)=>{if(!o)return;const se=s.map($=>$.id===j?{...$,text:V}:$);t(se),an(jt(qt,`users/${o.uid}/todos`),se)},S=j=>{if(!o)return;const V=s.findIndex(be=>be.id===j),se=s.find(be=>be.id===j);if(!se)return;const $=s.filter(be=>be.id!==j),te=[...i,{...se,originalIndex:V}];t($),a(te),an(jt(qt,`users/${o.uid}/todos`),$),an(jt(qt,`users/${o.uid}/finishedTodos`),te)},k=j=>{if(!o)return;const V=i.find(ne=>ne.id===j);if(!V)return;const se=i.filter(ne=>ne.id!==j),$=[...s],te=typeof V.originalIndex=="number"?V.originalIndex:$.length,be={...V};delete be.originalIndex,$.splice(te,0,be),t($),a(se),an(jt(qt,`users/${o.uid}/todos`),$),an(jt(qt,`users/${o.uid}/finishedTodos`),se)},z=j=>{if(!o)return;const V=i.filter(se=>se.id!==j);a(V),an(jt(qt,`users/${o.uid}/finishedTodos`),V)};return h?U.jsx(U.Fragment,{children:U.jsx("div",{className:"loadin-screen",children:U.jsx("div",{className:"loading-spinner"})})}):U.jsx(U.Fragment,{children:o?U.jsxs(U.Fragment,{children:[U.jsxs("div",{className:"container",children:[o&&U.jsx(U.Fragment,{children:U.jsxs("div",{className:"user-credentials",children:[U.jsx("p",{className:"userId",children:`User Id: ${o.uid}`}),U.jsx("h2",{className:"welcomeUser",children:`Welcome: ${o.email}`})]})}),U.jsx(yN,{onAdd:m}),U.jsx(xN,{todos:s,onDelete:y,onUpdate:E,onFinish:S,putData:_}),U.jsx(kN,{finishedTodos:i,onDelete:z,onUnfinish:k,putData:_})]}),U.jsx("button",{onClick:()=>mv.signOut(),className:"auth-button",children:"Log Out"})]}):U.jsx(U.Fragment,{children:U.jsxs("div",{className:"auth-layout",children:[U.jsx("div",{className:"auth-card",children:U.jsx(LN,{})}),U.jsx("div",{className:"auth-card",children:U.jsx(UN,{})})]})})})}cb.createRoot(document.getElementById("root")).render(U.jsx(ut.StrictMode,{children:U.jsx(zN,{})}));
