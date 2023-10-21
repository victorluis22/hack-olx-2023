var qb=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var wB=qb((CB,Ub)=>{function Kb(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Xb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var o1={exports:{}},Vl={},i1={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),Yb=Symbol.for("react.portal"),Qb=Symbol.for("react.fragment"),Jb=Symbol.for("react.strict_mode"),Zb=Symbol.for("react.profiler"),eC=Symbol.for("react.provider"),tC=Symbol.for("react.context"),nC=Symbol.for("react.forward_ref"),rC=Symbol.for("react.suspense"),oC=Symbol.for("react.memo"),iC=Symbol.for("react.lazy"),em=Symbol.iterator;function aC(e){return e===null||typeof e!="object"?null:(e=em&&e[em]||e["@@iterator"],typeof e=="function"?e:null)}var a1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s1=Object.assign,u1={};function ia(e,t,n){this.props=e,this.context=t,this.refs=u1,this.updater=n||a1}ia.prototype.isReactComponent={};ia.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ia.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function l1(){}l1.prototype=ia.prototype;function Up(e,t,n){this.props=e,this.context=t,this.refs=u1,this.updater=n||a1}var Vp=Up.prototype=new l1;Vp.constructor=Up;s1(Vp,ia.prototype);Vp.isPureReactComponent=!0;var tm=Array.isArray,c1=Object.prototype.hasOwnProperty,Hp={current:null},f1={key:!0,ref:!0,__self:!0,__source:!0};function d1(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)c1.call(t,r)&&!f1.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),l=0;l<s;l++)u[l]=arguments[l+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Es,type:e,key:i,ref:a,props:o,_owner:Hp.current}}function sC(e,t){return{$$typeof:Es,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Es}function uC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var nm=/\/+/g;function Vc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uC(""+e.key):t.toString(36)}function Eu(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Es:case Yb:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Vc(a,0):r,tm(o)?(n="",e!=null&&(n=e.replace(nm,"$&/")+"/"),Eu(o,t,n,"",function(l){return l})):o!=null&&(Gp(o)&&(o=sC(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(nm,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",tm(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Vc(i,s);a+=Eu(i,t,n,u,o)}else if(u=aC(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Vc(i,s++),a+=Eu(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Us(e,t,n){if(e==null)return e;var r=[],o=0;return Eu(e,r,"","",function(i){return t.call(n,i,o++)}),r}function lC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Lt={current:null},Su={transition:null},cC={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Su,ReactCurrentOwner:Hp};Ce.Children={map:Us,forEach:function(e,t,n){Us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Us(e,function(){t++}),t},toArray:function(e){return Us(e,function(t){return t})||[]},only:function(e){if(!Gp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ce.Component=ia;Ce.Fragment=Qb;Ce.Profiler=Zb;Ce.PureComponent=Up;Ce.StrictMode=Jb;Ce.Suspense=rC;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cC;Ce.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=s1({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Hp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)c1.call(t,u)&&!f1.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var l=0;l<u;l++)s[l]=arguments[l+2];r.children=s}return{$$typeof:Es,type:e.type,key:o,ref:i,props:r,_owner:a}};Ce.createContext=function(e){return e={$$typeof:tC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eC,_context:e},e.Consumer=e};Ce.createElement=d1;Ce.createFactory=function(e){var t=d1.bind(null,e);return t.type=e,t};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(e){return{$$typeof:nC,render:e}};Ce.isValidElement=Gp;Ce.lazy=function(e){return{$$typeof:iC,_payload:{_status:-1,_result:e},_init:lC}};Ce.memo=function(e,t){return{$$typeof:oC,type:e,compare:t===void 0?null:t}};Ce.startTransition=function(e){var t=Su.transition;Su.transition={};try{e()}finally{Su.transition=t}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(e,t){return Lt.current.useCallback(e,t)};Ce.useContext=function(e){return Lt.current.useContext(e)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(e){return Lt.current.useDeferredValue(e)};Ce.useEffect=function(e,t){return Lt.current.useEffect(e,t)};Ce.useId=function(){return Lt.current.useId()};Ce.useImperativeHandle=function(e,t,n){return Lt.current.useImperativeHandle(e,t,n)};Ce.useInsertionEffect=function(e,t){return Lt.current.useInsertionEffect(e,t)};Ce.useLayoutEffect=function(e,t){return Lt.current.useLayoutEffect(e,t)};Ce.useMemo=function(e,t){return Lt.current.useMemo(e,t)};Ce.useReducer=function(e,t,n){return Lt.current.useReducer(e,t,n)};Ce.useRef=function(e){return Lt.current.useRef(e)};Ce.useState=function(e){return Lt.current.useState(e)};Ce.useSyncExternalStore=function(e,t,n){return Lt.current.useSyncExternalStore(e,t,n)};Ce.useTransition=function(){return Lt.current.useTransition()};Ce.version="18.2.0";i1.exports=Ce;var K=i1.exports;const xe=Xb(K),fC=Kb({__proto__:null,default:xe},[K]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dC=K,pC=Symbol.for("react.element"),hC=Symbol.for("react.fragment"),vC=Object.prototype.hasOwnProperty,mC=dC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gC={key:!0,ref:!0,__self:!0,__source:!0};function p1(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)vC.call(t,r)&&!gC.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pC,type:e,key:i,ref:a,props:o,_owner:mC.current}}Vl.Fragment=hC;Vl.jsx=p1;Vl.jsxs=p1;o1.exports=Vl;var A=o1.exports,fd={},h1={exports:{}},cn={},v1={exports:{}},m1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var B=P.length;P.push(O);e:for(;0<B;){var X=B-1>>>1,Q=P[X];if(0<o(Q,O))P[X]=O,P[B]=Q,B=X;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],B=P.pop();if(B!==O){P[0]=B;e:for(var X=0,Q=P.length,re=Q>>>1;X<re;){var ue=2*(X+1)-1,ce=P[ue],le=ue+1,fe=P[le];if(0>o(ce,B))le<Q&&0>o(fe,ce)?(P[X]=fe,P[le]=B,X=le):(P[X]=ce,P[ue]=B,X=ue);else if(le<Q&&0>o(fe,B))P[X]=fe,P[le]=B,X=le;else break e}}return O}function o(P,O){var B=P.sortIndex-O.sortIndex;return B!==0?B:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],l=[],c=1,f=null,d=3,p=!1,h=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var O=n(l);O!==null;){if(O.callback===null)r(l);else if(O.startTime<=P)r(l),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(l)}}function w(P){if(m=!1,x(P),!h)if(n(u)!==null)h=!0,V(b);else{var O=n(l);O!==null&&U(w,O.startTime-P)}}function b(P,O){h=!1,m&&(m=!1,v(S),S=-1),p=!0;var B=d;try{for(x(O),f=n(u);f!==null&&(!(f.expirationTime>O)||P&&!D());){var X=f.callback;if(typeof X=="function"){f.callback=null,d=f.priorityLevel;var Q=X(f.expirationTime<=O);O=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(u)&&r(u),x(O)}else r(u);f=n(u)}if(f!==null)var re=!0;else{var ue=n(l);ue!==null&&U(w,ue.startTime-O),re=!1}return re}finally{f=null,d=B,p=!1}}var C=!1,E=null,S=-1,R=5,k=-1;function D(){return!(e.unstable_now()-k<R)}function T(){if(E!==null){var P=e.unstable_now();k=P;var O=!0;try{O=E(!0,P)}finally{O?z():(C=!1,E=null)}}else C=!1}var z;if(typeof y=="function")z=function(){y(T)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,$=L.port2;L.port1.onmessage=T,z=function(){$.postMessage(null)}}else z=function(){g(T,0)};function V(P){E=P,C||(C=!0,z())}function U(P,O){S=g(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){h||p||(h=!0,V(b))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var B=d;d=O;try{return P()}finally{d=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var B=d;d=P;try{return O()}finally{d=B}},e.unstable_scheduleCallback=function(P,O,B){var X=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?X+B:X):B=X,P){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=B+Q,P={id:c++,callback:O,priorityLevel:P,startTime:B,expirationTime:Q,sortIndex:-1},B>X?(P.sortIndex=B,t(l,P),n(u)===null&&P===n(l)&&(m?(v(S),S=-1):m=!0,U(w,B-X))):(P.sortIndex=Q,t(u,P),h||p||(h=!0,V(b))),P},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(P){var O=d;return function(){var B=d;d=O;try{return P.apply(this,arguments)}finally{d=B}}}})(m1);v1.exports=m1;var yC=v1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g1=K,ln=yC;function Y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y1=new Set,Ka={};function Go(e,t){$i(e,t),$i(e+"Capture",t)}function $i(e,t){for(Ka[e]=t,e=0;e<t.length;e++)y1.add(t[e])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,xC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rm={},om={};function wC(e){return dd.call(om,e)?!0:dd.call(rm,e)?!1:xC.test(e)?om[e]=!0:(rm[e]=!0,!1)}function bC(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function CC(e,t,n,r){if(t===null||typeof t>"u"||bC(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function zt(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){St[e]=new zt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];St[t]=new zt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){St[e]=new zt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){St[e]=new zt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){St[e]=new zt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){St[e]=new zt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){St[e]=new zt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){St[e]=new zt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){St[e]=new zt(e,5,!1,e.toLowerCase(),null,!1,!1)});var qp=/[\-:]([a-z])/g;function Kp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qp,Kp);St[t]=new zt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qp,Kp);St[t]=new zt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qp,Kp);St[t]=new zt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){St[e]=new zt(e,1,!1,e.toLowerCase(),null,!1,!1)});St.xlinkHref=new zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){St[e]=new zt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xp(e,t,n,r){var o=St.hasOwnProperty(t)?St[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(CC(t,n,o,r)&&(n=null),r||o===null?wC(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ir=g1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vs=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),pd=Symbol.for("react.profiler"),x1=Symbol.for("react.provider"),w1=Symbol.for("react.context"),Qp=Symbol.for("react.forward_ref"),hd=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),b1=Symbol.for("react.offscreen"),im=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=im&&e[im]||e["@@iterator"],typeof e=="function"?e:null)}var qe=Object.assign,Hc;function Aa(e){if(Hc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Hc=t&&t[1]||""}return`
`+Hc+e}var Gc=!1;function qc(e,t){if(!e||Gc)return"";Gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var o=l.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Gc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Aa(e):""}function EC(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=qc(e.type,!1),e;case 11:return e=qc(e.type.render,!1),e;case 1:return e=qc(e.type,!0),e;default:return""}}function md(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gi:return"Fragment";case mi:return"Portal";case pd:return"Profiler";case Yp:return"StrictMode";case hd:return"Suspense";case vd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case w1:return(e.displayName||"Context")+".Consumer";case x1:return(e._context.displayName||"Context")+".Provider";case Qp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jp:return t=e.displayName||null,t!==null?t:md(e.type)||"Memo";case jr:t=e._payload,e=e._init;try{return md(e(t))}catch{}}return null}function SC(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return md(t);case 8:return t===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function co(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function C1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _C(e){var t=C1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hs(e){e._valueTracker||(e._valueTracker=_C(e))}function E1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=C1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gd(e,t){var n=t.checked;return qe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function am(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=co(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function S1(e,t){t=t.checked,t!=null&&Xp(e,"checked",t,!1)}function yd(e,t){S1(e,t);var n=co(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xd(e,t.type,n):t.hasOwnProperty("defaultValue")&&xd(e,t.type,co(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xd(e,t,n){(t!=="number"||Hu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ta=Array.isArray;function Ai(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+co(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(Y(91));return qe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function um(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(Y(92));if(Ta(n)){if(1<n.length)throw Error(Y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:co(n)}}function _1(e,t){var n=co(t.value),r=co(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function k1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?k1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,R1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kC=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(e){kC.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oa[t]=Oa[e]})});function I1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Oa.hasOwnProperty(e)&&Oa[e]?(""+t).trim():t+"px"}function A1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=I1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var RC=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(e,t){if(t){if(RC[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(Y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(Y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(Y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(Y(62))}}function Ed(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function Zp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _d=null,Ti=null,Ni=null;function cm(e){if(e=ks(e)){if(typeof _d!="function")throw Error(Y(280));var t=e.stateNode;t&&(t=Xl(t),_d(e.stateNode,e.type,t))}}function T1(e){Ti?Ni?Ni.push(e):Ni=[e]:Ti=e}function N1(){if(Ti){var e=Ti,t=Ni;if(Ni=Ti=null,cm(e),t)for(e=0;e<t.length;e++)cm(t[e])}}function D1(e,t){return e(t)}function P1(){}var Kc=!1;function F1(e,t,n){if(Kc)return e(t,n);Kc=!0;try{return D1(e,t,n)}finally{Kc=!1,(Ti!==null||Ni!==null)&&(P1(),N1())}}function Ya(e,t){var n=e.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var kd=!1;if(Cr)try{var va={};Object.defineProperty(va,"passive",{get:function(){kd=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{kd=!1}function IC(e,t,n,r,o,i,a,s,u){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(c){this.onError(c)}}var Ma=!1,Gu=null,qu=!1,Rd=null,AC={onError:function(e){Ma=!0,Gu=e}};function TC(e,t,n,r,o,i,a,s,u){Ma=!1,Gu=null,IC.apply(AC,arguments)}function NC(e,t,n,r,o,i,a,s,u){if(TC.apply(this,arguments),Ma){if(Ma){var l=Gu;Ma=!1,Gu=null}else throw Error(Y(198));qu||(qu=!0,Rd=l)}}function qo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function O1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fm(e){if(qo(e)!==e)throw Error(Y(188))}function DC(e){var t=e.alternate;if(!t){if(t=qo(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fm(o),e;if(i===r)return fm(o),t;i=i.sibling}throw Error(Y(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(Y(189))}}if(n.alternate!==r)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function M1(e){return e=DC(e),e!==null?B1(e):null}function B1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=B1(e);if(t!==null)return t;e=e.sibling}return null}var L1=ln.unstable_scheduleCallback,dm=ln.unstable_cancelCallback,PC=ln.unstable_shouldYield,FC=ln.unstable_requestPaint,Ze=ln.unstable_now,OC=ln.unstable_getCurrentPriorityLevel,eh=ln.unstable_ImmediatePriority,z1=ln.unstable_UserBlockingPriority,Ku=ln.unstable_NormalPriority,MC=ln.unstable_LowPriority,W1=ln.unstable_IdlePriority,Hl=null,Jn=null;function BC(e){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Tn=Math.clz32?Math.clz32:WC,LC=Math.log,zC=Math.LN2;function WC(e){return e>>>=0,e===0?32:31-(LC(e)/zC|0)|0}var qs=64,Ks=4194304;function Na(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Na(s):(i&=a,i!==0&&(r=Na(i)))}else a=n&~o,a!==0?r=Na(a):i!==0&&(r=Na(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tn(t),o=1<<n,r|=e[n],t&=~o;return r}function jC(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $C(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Tn(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=jC(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Id(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function j1(){var e=qs;return qs<<=1,!(qs&4194240)&&(qs=64),e}function Xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ss(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tn(t),e[t]=n}function UC(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Tn(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function th(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var De=0;function $1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var U1,nh,V1,H1,G1,Ad=!1,Xs=[],Jr=null,Zr=null,eo=null,Qa=new Map,Ja=new Map,Ur=[],VC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(e,t){switch(e){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":eo=null;break;case"pointerover":case"pointerout":Qa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(t.pointerId)}}function ma(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ks(t),t!==null&&nh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function HC(e,t,n,r,o){switch(t){case"focusin":return Jr=ma(Jr,e,t,n,r,o),!0;case"dragenter":return Zr=ma(Zr,e,t,n,r,o),!0;case"mouseover":return eo=ma(eo,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Qa.set(i,ma(Qa.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ja.set(i,ma(Ja.get(i)||null,e,t,n,r,o)),!0}return!1}function q1(e){var t=ko(e.target);if(t!==null){var n=qo(t);if(n!==null){if(t=n.tag,t===13){if(t=O1(n),t!==null){e.blockedOn=t,G1(e.priority,function(){V1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _u(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Td(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return t=ks(n),t!==null&&nh(t),e.blockedOn=n,!1;t.shift()}return!0}function hm(e,t,n){_u(e)&&n.delete(t)}function GC(){Ad=!1,Jr!==null&&_u(Jr)&&(Jr=null),Zr!==null&&_u(Zr)&&(Zr=null),eo!==null&&_u(eo)&&(eo=null),Qa.forEach(hm),Ja.forEach(hm)}function ga(e,t){e.blockedOn===t&&(e.blockedOn=null,Ad||(Ad=!0,ln.unstable_scheduleCallback(ln.unstable_NormalPriority,GC)))}function Za(e){function t(o){return ga(o,e)}if(0<Xs.length){ga(Xs[0],e);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jr!==null&&ga(Jr,e),Zr!==null&&ga(Zr,e),eo!==null&&ga(eo,e),Qa.forEach(t),Ja.forEach(t),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)q1(n),n.blockedOn===null&&Ur.shift()}var Di=Ir.ReactCurrentBatchConfig,Yu=!0;function qC(e,t,n,r){var o=De,i=Di.transition;Di.transition=null;try{De=1,rh(e,t,n,r)}finally{De=o,Di.transition=i}}function KC(e,t,n,r){var o=De,i=Di.transition;Di.transition=null;try{De=4,rh(e,t,n,r)}finally{De=o,Di.transition=i}}function rh(e,t,n,r){if(Yu){var o=Td(e,t,n,r);if(o===null)af(e,t,r,Qu,n),pm(e,r);else if(HC(o,e,t,n,r))r.stopPropagation();else if(pm(e,r),t&4&&-1<VC.indexOf(e)){for(;o!==null;){var i=ks(o);if(i!==null&&U1(i),i=Td(e,t,n,r),i===null&&af(e,t,r,Qu,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else af(e,t,r,null,n)}}var Qu=null;function Td(e,t,n,r){if(Qu=null,e=Zp(r),e=ko(e),e!==null)if(t=qo(e),t===null)e=null;else if(n=t.tag,n===13){if(e=O1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qu=e,null}function K1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OC()){case eh:return 1;case z1:return 4;case Ku:case MC:return 16;case W1:return 536870912;default:return 16}default:return 16}}var Hr=null,oh=null,ku=null;function X1(){if(ku)return ku;var e,t=oh,n=t.length,r,o="value"in Hr?Hr.value:Hr.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return ku=o.slice(e,1<r?1-r:void 0)}function Ru(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ys(){return!0}function vm(){return!1}function fn(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ys:vm,this.isPropagationStopped=vm,this}return qe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),t}var aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=fn(aa),_s=qe({},aa,{view:0,detail:0}),XC=fn(_s),Yc,Qc,ya,Gl=qe({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ah,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(Yc=e.screenX-ya.screenX,Qc=e.screenY-ya.screenY):Qc=Yc=0,ya=e),Yc)},movementY:function(e){return"movementY"in e?e.movementY:Qc}}),mm=fn(Gl),YC=qe({},Gl,{dataTransfer:0}),QC=fn(YC),JC=qe({},_s,{relatedTarget:0}),Jc=fn(JC),ZC=qe({},aa,{animationName:0,elapsedTime:0,pseudoElement:0}),eE=fn(ZC),tE=qe({},aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nE=fn(tE),rE=qe({},aa,{data:0}),gm=fn(rE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aE[e])?!!t[e]:!1}function ah(){return sE}var uE=qe({},_s,{key:function(e){if(e.key){var t=oE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ru(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ah,charCode:function(e){return e.type==="keypress"?Ru(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ru(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lE=fn(uE),cE=qe({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=fn(cE),fE=qe({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ah}),dE=fn(fE),pE=qe({},aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hE=fn(pE),vE=qe({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mE=fn(vE),gE=[9,13,27,32],sh=Cr&&"CompositionEvent"in window,Ba=null;Cr&&"documentMode"in document&&(Ba=document.documentMode);var yE=Cr&&"TextEvent"in window&&!Ba,Y1=Cr&&(!sh||Ba&&8<Ba&&11>=Ba),xm=String.fromCharCode(32),wm=!1;function Q1(e,t){switch(e){case"keyup":return gE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yi=!1;function xE(e,t){switch(e){case"compositionend":return J1(t);case"keypress":return t.which!==32?null:(wm=!0,xm);case"textInput":return e=t.data,e===xm&&wm?null:e;default:return null}}function wE(e,t){if(yi)return e==="compositionend"||!sh&&Q1(e,t)?(e=X1(),ku=oh=Hr=null,yi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Y1&&t.locale!=="ko"?null:t.data;default:return null}}var bE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bE[e.type]:t==="textarea"}function Z1(e,t,n,r){T1(r),t=Ju(t,"onChange"),0<t.length&&(n=new ih("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var La=null,es=null;function CE(e){cy(e,0)}function ql(e){var t=bi(e);if(E1(t))return e}function EE(e,t){if(e==="change")return t}var ey=!1;if(Cr){var Zc;if(Cr){var ef="oninput"in document;if(!ef){var Cm=document.createElement("div");Cm.setAttribute("oninput","return;"),ef=typeof Cm.oninput=="function"}Zc=ef}else Zc=!1;ey=Zc&&(!document.documentMode||9<document.documentMode)}function Em(){La&&(La.detachEvent("onpropertychange",ty),es=La=null)}function ty(e){if(e.propertyName==="value"&&ql(es)){var t=[];Z1(t,es,e,Zp(e)),F1(CE,t)}}function SE(e,t,n){e==="focusin"?(Em(),La=t,es=n,La.attachEvent("onpropertychange",ty)):e==="focusout"&&Em()}function _E(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ql(es)}function kE(e,t){if(e==="click")return ql(t)}function RE(e,t){if(e==="input"||e==="change")return ql(t)}function IE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:IE;function ts(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!dd.call(t,o)||!Fn(e[o],t[o]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _m(e,t){var n=Sm(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function ny(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ny(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ry(){for(var e=window,t=Hu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hu(e.document)}return t}function uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function AE(e){var t=ry(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(r!==null&&uh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=_m(n,i);var a=_m(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var TE=Cr&&"documentMode"in document&&11>=document.documentMode,xi=null,Nd=null,za=null,Dd=!1;function km(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Dd||xi==null||xi!==Hu(r)||(r=xi,"selectionStart"in r&&uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),za&&ts(za,r)||(za=r,r=Ju(Nd,"onSelect"),0<r.length&&(t=new ih("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=xi)))}function Qs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wi={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},tf={},oy={};Cr&&(oy=document.createElement("div").style,"AnimationEvent"in window||(delete wi.animationend.animation,delete wi.animationiteration.animation,delete wi.animationstart.animation),"TransitionEvent"in window||delete wi.transitionend.transition);function Kl(e){if(tf[e])return tf[e];if(!wi[e])return e;var t=wi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oy)return tf[e]=t[n];return e}var iy=Kl("animationend"),ay=Kl("animationiteration"),sy=Kl("animationstart"),uy=Kl("transitionend"),ly=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ho(e,t){ly.set(e,t),Go(t,[e])}for(var nf=0;nf<Rm.length;nf++){var rf=Rm[nf],NE=rf.toLowerCase(),DE=rf[0].toUpperCase()+rf.slice(1);ho(NE,"on"+DE)}ho(iy,"onAnimationEnd");ho(ay,"onAnimationIteration");ho(sy,"onAnimationStart");ho("dblclick","onDoubleClick");ho("focusin","onFocus");ho("focusout","onBlur");ho(uy,"onTransitionEnd");$i("onMouseEnter",["mouseout","mouseover"]);$i("onMouseLeave",["mouseout","mouseover"]);$i("onPointerEnter",["pointerout","pointerover"]);$i("onPointerLeave",["pointerout","pointerover"]);Go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Go("onBeforeInput",["compositionend","keypress","textInput","paste"]);Go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Im(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,NC(r,t,void 0,e),e.currentTarget=null}function cy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,l=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Im(o,s,l),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,l=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Im(o,s,l),i=u}}}if(qu)throw e=Rd,qu=!1,Rd=null,e}function Me(e,t){var n=t[Bd];n===void 0&&(n=t[Bd]=new Set);var r=e+"__bubble";n.has(r)||(fy(t,e,2,!1),n.add(r))}function of(e,t,n){var r=0;t&&(r|=4),fy(n,e,r,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function ns(e){if(!e[Js]){e[Js]=!0,y1.forEach(function(n){n!=="selectionchange"&&(PE.has(n)||of(n,!1,e),of(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,of("selectionchange",!1,t))}}function fy(e,t,n,r){switch(K1(t)){case 1:var o=qC;break;case 4:o=KC;break;default:o=rh}n=o.bind(null,t,n,e),o=void 0,!kd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function af(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=ko(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}F1(function(){var l=i,c=Zp(n),f=[];e:{var d=ly.get(e);if(d!==void 0){var p=ih,h=e;switch(e){case"keypress":if(Ru(n)===0)break e;case"keydown":case"keyup":p=lE;break;case"focusin":h="focus",p=Jc;break;case"focusout":h="blur",p=Jc;break;case"beforeblur":case"afterblur":p=Jc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=QC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dE;break;case iy:case ay:case sy:p=eE;break;case uy:p=hE;break;case"scroll":p=XC;break;case"wheel":p=mE;break;case"copy":case"cut":case"paste":p=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ym}var m=(t&4)!==0,g=!m&&e==="scroll",v=m?d!==null?d+"Capture":null:d;m=[];for(var y=l,x;y!==null;){x=y;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,v!==null&&(w=Ya(y,v),w!=null&&m.push(rs(y,w,x)))),g)break;y=y.return}0<m.length&&(d=new p(d,h,null,n,c),f.push({event:d,listeners:m}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==Sd&&(h=n.relatedTarget||n.fromElement)&&(ko(h)||h[Er]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(h=n.relatedTarget||n.toElement,p=l,h=h?ko(h):null,h!==null&&(g=qo(h),h!==g||h.tag!==5&&h.tag!==6)&&(h=null)):(p=null,h=l),p!==h)){if(m=mm,w="onMouseLeave",v="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(m=ym,w="onPointerLeave",v="onPointerEnter",y="pointer"),g=p==null?d:bi(p),x=h==null?d:bi(h),d=new m(w,y+"leave",p,n,c),d.target=g,d.relatedTarget=x,w=null,ko(c)===l&&(m=new m(v,y+"enter",h,n,c),m.target=x,m.relatedTarget=g,w=m),g=w,p&&h)t:{for(m=p,v=h,y=0,x=m;x;x=oi(x))y++;for(x=0,w=v;w;w=oi(w))x++;for(;0<y-x;)m=oi(m),y--;for(;0<x-y;)v=oi(v),x--;for(;y--;){if(m===v||v!==null&&m===v.alternate)break t;m=oi(m),v=oi(v)}m=null}else m=null;p!==null&&Am(f,d,p,m,!1),h!==null&&g!==null&&Am(f,g,h,m,!0)}}e:{if(d=l?bi(l):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=EE;else if(bm(d))if(ey)b=RE;else{b=_E;var C=SE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=kE);if(b&&(b=b(e,l))){Z1(f,b,n,c);break e}C&&C(e,d,l),e==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&xd(d,"number",d.value)}switch(C=l?bi(l):window,e){case"focusin":(bm(C)||C.contentEditable==="true")&&(xi=C,Nd=l,za=null);break;case"focusout":za=Nd=xi=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,km(f,n,c);break;case"selectionchange":if(TE)break;case"keydown":case"keyup":km(f,n,c)}var E;if(sh)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else yi?Q1(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Y1&&n.locale!=="ko"&&(yi||S!=="onCompositionStart"?S==="onCompositionEnd"&&yi&&(E=X1()):(Hr=c,oh="value"in Hr?Hr.value:Hr.textContent,yi=!0)),C=Ju(l,S),0<C.length&&(S=new gm(S,e,null,n,c),f.push({event:S,listeners:C}),E?S.data=E:(E=J1(n),E!==null&&(S.data=E)))),(E=yE?xE(e,n):wE(e,n))&&(l=Ju(l,"onBeforeInput"),0<l.length&&(c=new gm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:l}),c.data=E))}cy(f,t)})}function rs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ju(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ya(e,n),i!=null&&r.unshift(rs(e,i,o)),i=Ya(e,t),i!=null&&r.push(rs(e,i,o))),e=e.return}return r}function oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Am(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,l=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&l!==null&&(s=l,o?(u=Ya(n,i),u!=null&&a.unshift(rs(n,u,s))):o||(u=Ya(n,i),u!=null&&a.push(rs(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var FE=/\r\n?/g,OE=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(FE,`
`).replace(OE,"")}function Zs(e,t,n){if(t=Tm(t),Tm(e)!==t&&n)throw Error(Y(425))}function Zu(){}var Pd=null,Fd=null;function Od(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Md=typeof setTimeout=="function"?setTimeout:void 0,ME=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(e){return Nm.resolve(null).then(e).catch(LE)}:Md;function LE(e){setTimeout(function(){throw e})}function sf(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Za(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Za(t)}function to(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sa=Math.random().toString(36).slice(2),qn="__reactFiber$"+sa,os="__reactProps$"+sa,Er="__reactContainer$"+sa,Bd="__reactEvents$"+sa,zE="__reactListeners$"+sa,WE="__reactHandles$"+sa;function ko(e){var t=e[qn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Er]||n[qn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Dm(e);e!==null;){if(n=e[qn])return n;e=Dm(e)}return t}e=n,n=e.parentNode}return null}function ks(e){return e=e[qn]||e[Er],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(Y(33))}function Xl(e){return e[os]||null}var Ld=[],Ci=-1;function vo(e){return{current:e}}function ze(e){0>Ci||(e.current=Ld[Ci],Ld[Ci]=null,Ci--)}function Fe(e,t){Ci++,Ld[Ci]=e.current,e.current=t}var fo={},Ft=vo(fo),Ht=vo(!1),Wo=fo;function Ui(e,t){var n=e.type.contextTypes;if(!n)return fo;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Gt(e){return e=e.childContextTypes,e!=null}function el(){ze(Ht),ze(Ft)}function Pm(e,t,n){if(Ft.current!==fo)throw Error(Y(168));Fe(Ft,t),Fe(Ht,n)}function dy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(Y(108,SC(e)||"Unknown",o));return qe({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fo,Wo=Ft.current,Fe(Ft,e),Fe(Ht,Ht.current),!0}function Fm(e,t,n){var r=e.stateNode;if(!r)throw Error(Y(169));n?(e=dy(e,t,Wo),r.__reactInternalMemoizedMergedChildContext=e,ze(Ht),ze(Ft),Fe(Ft,e)):ze(Ht),Fe(Ht,n)}var mr=null,Yl=!1,uf=!1;function py(e){mr===null?mr=[e]:mr.push(e)}function jE(e){Yl=!0,py(e)}function mo(){if(!uf&&mr!==null){uf=!0;var e=0,t=De;try{var n=mr;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}mr=null,Yl=!1}catch(o){throw mr!==null&&(mr=mr.slice(e+1)),L1(eh,mo),o}finally{De=t,uf=!1}}return null}var Ei=[],Si=0,nl=null,rl=0,dn=[],pn=0,jo=null,yr=1,xr="";function bo(e,t){Ei[Si++]=rl,Ei[Si++]=nl,nl=e,rl=t}function hy(e,t,n){dn[pn++]=yr,dn[pn++]=xr,dn[pn++]=jo,jo=e;var r=yr;e=xr;var o=32-Tn(r)-1;r&=~(1<<o),n+=1;var i=32-Tn(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,yr=1<<32-Tn(t)+o|n<<o|r,xr=i+e}else yr=1<<i|n<<o|r,xr=e}function lh(e){e.return!==null&&(bo(e,1),hy(e,1,0))}function ch(e){for(;e===nl;)nl=Ei[--Si],Ei[Si]=null,rl=Ei[--Si],Ei[Si]=null;for(;e===jo;)jo=dn[--pn],dn[pn]=null,xr=dn[--pn],dn[pn]=null,yr=dn[--pn],dn[pn]=null}var sn=null,tn=null,We=!1,Rn=null;function vy(e,t){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Om(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,sn=e,tn=to(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,sn=e,tn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jo!==null?{id:yr,overflow:xr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,sn=e,tn=null,!0):!1;default:return!1}}function zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wd(e){if(We){var t=tn;if(t){var n=t;if(!Om(e,t)){if(zd(e))throw Error(Y(418));t=to(n.nextSibling);var r=sn;t&&Om(e,t)?vy(r,n):(e.flags=e.flags&-4097|2,We=!1,sn=e)}}else{if(zd(e))throw Error(Y(418));e.flags=e.flags&-4097|2,We=!1,sn=e}}}function Mm(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;sn=e}function eu(e){if(e!==sn)return!1;if(!We)return Mm(e),We=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Od(e.type,e.memoizedProps)),t&&(t=tn)){if(zd(e))throw my(),Error(Y(418));for(;t;)vy(e,t),t=to(t.nextSibling)}if(Mm(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tn=to(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tn=null}}else tn=sn?to(e.stateNode.nextSibling):null;return!0}function my(){for(var e=tn;e;)e=to(e.nextSibling)}function Vi(){tn=sn=null,We=!1}function fh(e){Rn===null?Rn=[e]:Rn.push(e)}var $E=Ir.ReactCurrentBatchConfig;function _n(e,t){if(e&&e.defaultProps){t=qe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ol=vo(null),il=null,_i=null,dh=null;function ph(){dh=_i=il=null}function hh(e){var t=ol.current;ze(ol),e._currentValue=t}function jd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pi(e,t){il=e,dh=_i=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ut=!0),e.firstContext=null)}function wn(e){var t=e._currentValue;if(dh!==e)if(e={context:e,memoizedValue:t,next:null},_i===null){if(il===null)throw Error(Y(308));_i=e,il.dependencies={lanes:0,firstContext:e}}else _i=_i.next=e;return t}var Ro=null;function vh(e){Ro===null?Ro=[e]:Ro.push(e)}function gy(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,vh(t)):(n.next=o.next,o.next=n),t.interleaved=n,Sr(e,r)}function Sr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $r=!1;function mh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function no(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Sr(e,n)}return o=r.interleaved,o===null?(t.next=t,vh(r)):(t.next=o.next,o.next=t),r.interleaved=t,Sr(e,n)}function Iu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}function Bm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var o=e.updateQueue;$r=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,l=u.next;u.next=null,a===null?i=l:a.next=l,a=u;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=l:s.next=l,c.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;a=0,c=l=u=null,s=i;do{var d=s.lane,p=s.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(d=t,p=n,m.tag){case 1:if(h=m.payload,typeof h=="function"){f=h.call(p,f,d);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=m.payload,d=typeof h=="function"?h.call(p,f,d):h,d==null)break e;f=qe({},f,d);break e;case 2:$r=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,d=o.effects,d===null?o.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=p,u=f):c=c.next=p,a|=d;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;d=s,s=d.next,d.next=null,o.lastBaseUpdate=d,o.shared.pending=null}}while(1);if(c===null&&(u=f),o.baseState=u,o.firstBaseUpdate=l,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Uo|=a,e.lanes=a,e.memoizedState=f}}function Lm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(Y(191,o));o.call(r)}}}var xy=new g1.Component().refs;function $d(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:qe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ql={isMounted:function(e){return(e=e._reactInternals)?qo(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Bt(),o=oo(e),i=wr(r,o);i.payload=t,n!=null&&(i.callback=n),t=no(e,i,o),t!==null&&(Nn(t,e,o,r),Iu(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Bt(),o=oo(e),i=wr(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=no(e,i,o),t!==null&&(Nn(t,e,o,r),Iu(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Bt(),r=oo(e),o=wr(n,r);o.tag=2,t!=null&&(o.callback=t),t=no(e,o,r),t!==null&&(Nn(t,e,r,n),Iu(t,e,r))}};function zm(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ts(n,r)||!ts(o,i):!0}function wy(e,t,n){var r=!1,o=fo,i=t.contextType;return typeof i=="object"&&i!==null?i=wn(i):(o=Gt(t)?Wo:Ft.current,r=t.contextTypes,i=(r=r!=null)?Ui(e,o):fo),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Wm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ql.enqueueReplaceState(t,t.state,null)}function Ud(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=xy,mh(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wn(i):(i=Gt(t)?Wo:Ft.current,o.context=Ui(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&($d(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ql.enqueueReplaceState(o,o.state,null),al(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Y(309));var r=n.stateNode}if(!r)throw Error(Y(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;s===xy&&(s=o.refs={}),a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(Y(284));if(!n._owner)throw Error(Y(290,e))}return e}function tu(e,t){throw e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jm(e){var t=e._init;return t(e._payload)}function by(e){function t(v,y){if(e){var x=v.deletions;x===null?(v.deletions=[y],v.flags|=16):x.push(y)}}function n(v,y){if(!e)return null;for(;y!==null;)t(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function o(v,y){return v=io(v,y),v.index=0,v.sibling=null,v}function i(v,y,x){return v.index=x,e?(x=v.alternate,x!==null?(x=x.index,x<y?(v.flags|=2,y):x):(v.flags|=2,y)):(v.flags|=1048576,y)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,y,x,w){return y===null||y.tag!==6?(y=vf(x,v.mode,w),y.return=v,y):(y=o(y,x),y.return=v,y)}function u(v,y,x,w){var b=x.type;return b===gi?c(v,y,x.props.children,w,x.key):y!==null&&(y.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jr&&jm(b)===y.type)?(w=o(y,x.props),w.ref=xa(v,y,x),w.return=v,w):(w=Fu(x.type,x.key,x.props,null,v.mode,w),w.ref=xa(v,y,x),w.return=v,w)}function l(v,y,x,w){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=mf(x,v.mode,w),y.return=v,y):(y=o(y,x.children||[]),y.return=v,y)}function c(v,y,x,w,b){return y===null||y.tag!==7?(y=Fo(x,v.mode,w,b),y.return=v,y):(y=o(y,x),y.return=v,y)}function f(v,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=vf(""+y,v.mode,x),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vs:return x=Fu(y.type,y.key,y.props,null,v.mode,x),x.ref=xa(v,null,y),x.return=v,x;case mi:return y=mf(y,v.mode,x),y.return=v,y;case jr:var w=y._init;return f(v,w(y._payload),x)}if(Ta(y)||ha(y))return y=Fo(y,v.mode,x,null),y.return=v,y;tu(v,y)}return null}function d(v,y,x,w){var b=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return b!==null?null:s(v,y,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:return x.key===b?u(v,y,x,w):null;case mi:return x.key===b?l(v,y,x,w):null;case jr:return b=x._init,d(v,y,b(x._payload),w)}if(Ta(x)||ha(x))return b!==null?null:c(v,y,x,w,null);tu(v,x)}return null}function p(v,y,x,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(x)||null,s(y,v,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vs:return v=v.get(w.key===null?x:w.key)||null,u(y,v,w,b);case mi:return v=v.get(w.key===null?x:w.key)||null,l(y,v,w,b);case jr:var C=w._init;return p(v,y,x,C(w._payload),b)}if(Ta(w)||ha(w))return v=v.get(x)||null,c(y,v,w,b,null);tu(y,w)}return null}function h(v,y,x,w){for(var b=null,C=null,E=y,S=y=0,R=null;E!==null&&S<x.length;S++){E.index>S?(R=E,E=null):R=E.sibling;var k=d(v,E,x[S],w);if(k===null){E===null&&(E=R);break}e&&E&&k.alternate===null&&t(v,E),y=i(k,y,S),C===null?b=k:C.sibling=k,C=k,E=R}if(S===x.length)return n(v,E),We&&bo(v,S),b;if(E===null){for(;S<x.length;S++)E=f(v,x[S],w),E!==null&&(y=i(E,y,S),C===null?b=E:C.sibling=E,C=E);return We&&bo(v,S),b}for(E=r(v,E);S<x.length;S++)R=p(E,v,S,x[S],w),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?S:R.key),y=i(R,y,S),C===null?b=R:C.sibling=R,C=R);return e&&E.forEach(function(D){return t(v,D)}),We&&bo(v,S),b}function m(v,y,x,w){var b=ha(x);if(typeof b!="function")throw Error(Y(150));if(x=b.call(x),x==null)throw Error(Y(151));for(var C=b=null,E=y,S=y=0,R=null,k=x.next();E!==null&&!k.done;S++,k=x.next()){E.index>S?(R=E,E=null):R=E.sibling;var D=d(v,E,k.value,w);if(D===null){E===null&&(E=R);break}e&&E&&D.alternate===null&&t(v,E),y=i(D,y,S),C===null?b=D:C.sibling=D,C=D,E=R}if(k.done)return n(v,E),We&&bo(v,S),b;if(E===null){for(;!k.done;S++,k=x.next())k=f(v,k.value,w),k!==null&&(y=i(k,y,S),C===null?b=k:C.sibling=k,C=k);return We&&bo(v,S),b}for(E=r(v,E);!k.done;S++,k=x.next())k=p(E,v,S,k.value,w),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?S:k.key),y=i(k,y,S),C===null?b=k:C.sibling=k,C=k);return e&&E.forEach(function(T){return t(v,T)}),We&&bo(v,S),b}function g(v,y,x,w){if(typeof x=="object"&&x!==null&&x.type===gi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vs:e:{for(var b=x.key,C=y;C!==null;){if(C.key===b){if(b=x.type,b===gi){if(C.tag===7){n(v,C.sibling),y=o(C,x.props.children),y.return=v,v=y;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===jr&&jm(b)===C.type){n(v,C.sibling),y=o(C,x.props),y.ref=xa(v,C,x),y.return=v,v=y;break e}n(v,C);break}else t(v,C);C=C.sibling}x.type===gi?(y=Fo(x.props.children,v.mode,w,x.key),y.return=v,v=y):(w=Fu(x.type,x.key,x.props,null,v.mode,w),w.ref=xa(v,y,x),w.return=v,v=w)}return a(v);case mi:e:{for(C=x.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(v,y.sibling),y=o(y,x.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else t(v,y);y=y.sibling}y=mf(x,v.mode,w),y.return=v,v=y}return a(v);case jr:return C=x._init,g(v,y,C(x._payload),w)}if(Ta(x))return h(v,y,x,w);if(ha(x))return m(v,y,x,w);tu(v,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(v,y.sibling),y=o(y,x),y.return=v,v=y):(n(v,y),y=vf(x,v.mode,w),y.return=v,v=y),a(v)):n(v,y)}return g}var Hi=by(!0),Cy=by(!1),Rs={},Zn=vo(Rs),is=vo(Rs),as=vo(Rs);function Io(e){if(e===Rs)throw Error(Y(174));return e}function gh(e,t){switch(Fe(as,t),Fe(is,e),Fe(Zn,Rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:bd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=bd(t,e)}ze(Zn),Fe(Zn,t)}function Gi(){ze(Zn),ze(is),ze(as)}function Ey(e){Io(as.current);var t=Io(Zn.current),n=bd(t,e.type);t!==n&&(Fe(is,e),Fe(Zn,n))}function yh(e){is.current===e&&(ze(Zn),ze(is))}var Ue=vo(0);function sl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var lf=[];function xh(){for(var e=0;e<lf.length;e++)lf[e]._workInProgressVersionPrimary=null;lf.length=0}var Au=Ir.ReactCurrentDispatcher,cf=Ir.ReactCurrentBatchConfig,$o=0,Ge=null,it=null,ht=null,ul=!1,Wa=!1,ss=0,UE=0;function kt(){throw Error(Y(321))}function wh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fn(e[n],t[n]))return!1;return!0}function bh(e,t,n,r,o,i){if($o=i,Ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Au.current=e===null||e.memoizedState===null?qE:KE,e=n(r,o),Wa){i=0;do{if(Wa=!1,ss=0,25<=i)throw Error(Y(301));i+=1,ht=it=null,t.updateQueue=null,Au.current=XE,e=n(r,o)}while(Wa)}if(Au.current=ll,t=it!==null&&it.next!==null,$o=0,ht=it=Ge=null,ul=!1,t)throw Error(Y(300));return e}function Ch(){var e=ss!==0;return ss=0,e}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Ge.memoizedState=ht=e:ht=ht.next=e,ht}function bn(){if(it===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=ht===null?Ge.memoizedState:ht.next;if(t!==null)ht=t,it=e;else{if(e===null)throw Error(Y(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},ht===null?Ge.memoizedState=ht=e:ht=ht.next=e}return ht}function us(e,t){return typeof t=="function"?t(e):t}function ff(e){var t=bn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=it,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,l=i;do{var c=l.lane;if(($o&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:e(r,l.action);else{var f={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(s=u=f,a=r):u=u.next=f,Ge.lanes|=c,Uo|=c}l=l.next}while(l!==null&&l!==i);u===null?a=r:u.next=s,Fn(r,t.memoizedState)||(Ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Ge.lanes|=i,Uo|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function df(e){var t=bn(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Fn(i,t.memoizedState)||(Ut=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sy(){}function _y(e,t){var n=Ge,r=bn(),o=t(),i=!Fn(r.memoizedState,o);if(i&&(r.memoizedState=o,Ut=!0),r=r.queue,Eh(Iy.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,ls(9,Ry.bind(null,n,r,o,t),void 0,null),mt===null)throw Error(Y(349));$o&30||ky(n,t,o)}return o}function ky(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ry(e,t,n,r){t.value=n,t.getSnapshot=r,Ay(t)&&Ty(e)}function Iy(e,t,n){return n(function(){Ay(t)&&Ty(e)})}function Ay(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fn(e,n)}catch{return!0}}function Ty(e){var t=Sr(e,1);t!==null&&Nn(t,e,1,-1)}function $m(e){var t=Un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t.queue=e,e=e.dispatch=GE.bind(null,Ge,e),[t.memoizedState,e]}function ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ge.updateQueue,t===null?(t={lastEffect:null,stores:null},Ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ny(){return bn().memoizedState}function Tu(e,t,n,r){var o=Un();Ge.flags|=e,o.memoizedState=ls(1|t,n,void 0,r===void 0?null:r)}function Jl(e,t,n,r){var o=bn();r=r===void 0?null:r;var i=void 0;if(it!==null){var a=it.memoizedState;if(i=a.destroy,r!==null&&wh(r,a.deps)){o.memoizedState=ls(t,n,i,r);return}}Ge.flags|=e,o.memoizedState=ls(1|t,n,i,r)}function Um(e,t){return Tu(8390656,8,e,t)}function Eh(e,t){return Jl(2048,8,e,t)}function Dy(e,t){return Jl(4,2,e,t)}function Py(e,t){return Jl(4,4,e,t)}function Fy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Oy(e,t,n){return n=n!=null?n.concat([e]):null,Jl(4,4,Fy.bind(null,t,e),n)}function Sh(){}function My(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function By(e,t){var n=bn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ly(e,t,n){return $o&21?(Fn(n,t)||(n=j1(),Ge.lanes|=n,Uo|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ut=!0),e.memoizedState=n)}function VE(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=cf.transition;cf.transition={};try{e(!1),t()}finally{De=n,cf.transition=r}}function zy(){return bn().memoizedState}function HE(e,t,n){var r=oo(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wy(e))jy(t,n);else if(n=gy(e,t,n,r),n!==null){var o=Bt();Nn(n,e,r,o),$y(n,t,r)}}function GE(e,t,n){var r=oo(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wy(e))jy(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Fn(s,a)){var u=t.interleaved;u===null?(o.next=o,vh(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=gy(e,t,o,r),n!==null&&(o=Bt(),Nn(n,e,r,o),$y(n,t,r))}}function Wy(e){var t=e.alternate;return e===Ge||t!==null&&t===Ge}function jy(e,t){Wa=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $y(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,th(e,n)}}var ll={readContext:wn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},qE={readContext:wn,useCallback:function(e,t){return Un().memoizedState=[e,t===void 0?null:t],e},useContext:wn,useEffect:Um,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tu(4194308,4,Fy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tu(4,2,e,t)},useMemo:function(e,t){var n=Un();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Un();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HE.bind(null,Ge,e),[r.memoizedState,e]},useRef:function(e){var t=Un();return e={current:e},t.memoizedState=e},useState:$m,useDebugValue:Sh,useDeferredValue:function(e){return Un().memoizedState=e},useTransition:function(){var e=$m(!1),t=e[0];return e=VE.bind(null,e[1]),Un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ge,o=Un();if(We){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),mt===null)throw Error(Y(349));$o&30||ky(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Um(Iy.bind(null,r,i,e),[e]),r.flags|=2048,ls(9,Ry.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Un(),t=mt.identifierPrefix;if(We){var n=xr,r=yr;n=(r&~(1<<32-Tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ss++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=UE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},KE={readContext:wn,useCallback:My,useContext:wn,useEffect:Eh,useImperativeHandle:Oy,useInsertionEffect:Dy,useLayoutEffect:Py,useMemo:By,useReducer:ff,useRef:Ny,useState:function(){return ff(us)},useDebugValue:Sh,useDeferredValue:function(e){var t=bn();return Ly(t,it.memoizedState,e)},useTransition:function(){var e=ff(us)[0],t=bn().memoizedState;return[e,t]},useMutableSource:Sy,useSyncExternalStore:_y,useId:zy,unstable_isNewReconciler:!1},XE={readContext:wn,useCallback:My,useContext:wn,useEffect:Eh,useImperativeHandle:Oy,useInsertionEffect:Dy,useLayoutEffect:Py,useMemo:By,useReducer:df,useRef:Ny,useState:function(){return df(us)},useDebugValue:Sh,useDeferredValue:function(e){var t=bn();return it===null?t.memoizedState=e:Ly(t,it.memoizedState,e)},useTransition:function(){var e=df(us)[0],t=bn().memoizedState;return[e,t]},useMutableSource:Sy,useSyncExternalStore:_y,useId:zy,unstable_isNewReconciler:!1};function qi(e,t){try{var n="",r=t;do n+=EC(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function pf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var YE=typeof WeakMap=="function"?WeakMap:Map;function Uy(e,t,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){fl||(fl=!0,ep=r),Vd(e,t)},n}function Vy(e,t,n){n=wr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Vd(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vd(e,t),typeof r!="function"&&(ro===null?ro=new Set([this]):ro.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Vm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new YE;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=cS.bind(null,e,t,n),t.then(e,e))}function Hm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gm(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wr(-1,1),t.tag=2,no(n,t,1))),n.lanes|=1),e)}var QE=Ir.ReactCurrentOwner,Ut=!1;function Ot(e,t,n,r){t.child=e===null?Cy(t,null,n,r):Hi(t,e.child,n,r)}function qm(e,t,n,r,o){n=n.render;var i=t.ref;return Pi(t,o),r=bh(e,t,n,r,i,o),n=Ch(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_r(e,t,o)):(We&&n&&lh(t),t.flags|=1,Ot(e,t,r,o),t.child)}function Km(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Dh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hy(e,t,i,r,o)):(e=Fu(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(a,r)&&e.ref===t.ref)return _r(e,t,o)}return t.flags|=1,e=io(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hy(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ts(i,r)&&e.ref===t.ref)if(Ut=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ut=!0);else return t.lanes=e.lanes,_r(e,t,o)}return Hd(e,t,n,r,o)}function Gy(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Fe(Ri,Jt),Jt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Fe(Ri,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Fe(Ri,Jt),Jt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Fe(Ri,Jt),Jt|=r;return Ot(e,t,o,n),t.child}function qy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hd(e,t,n,r,o){var i=Gt(n)?Wo:Ft.current;return i=Ui(t,i),Pi(t,o),n=bh(e,t,n,r,i,o),r=Ch(),e!==null&&!Ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_r(e,t,o)):(We&&r&&lh(t),t.flags|=1,Ot(e,t,n,o),t.child)}function Xm(e,t,n,r,o){if(Gt(n)){var i=!0;tl(t)}else i=!1;if(Pi(t,o),t.stateNode===null)Nu(e,t),wy(t,n,r),Ud(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=wn(l):(l=Gt(n)?Wo:Ft.current,l=Ui(t,l));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==l)&&Wm(t,a,r,l),$r=!1;var d=t.memoizedState;a.state=d,al(t,r,a,o),u=t.memoizedState,s!==r||d!==u||Ht.current||$r?(typeof c=="function"&&($d(t,n,c,r),u=t.memoizedState),(s=$r||zm(t,n,s,r,d,u,l))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=l,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,yy(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:_n(t.type,s),a.props=l,f=t.pendingProps,d=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=wn(u):(u=Gt(n)?Wo:Ft.current,u=Ui(t,u));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||d!==u)&&Wm(t,a,r,u),$r=!1,d=t.memoizedState,a.state=d,al(t,r,a,o);var h=t.memoizedState;s!==f||d!==h||Ht.current||$r?(typeof p=="function"&&($d(t,n,p,r),h=t.memoizedState),(l=$r||zm(t,n,l,r,d,h,u)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,h,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,h,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=u,r=l):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Gd(e,t,n,r,i,o)}function Gd(e,t,n,r,o,i){qy(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Fm(t,n,!1),_r(e,t,i);r=t.stateNode,QE.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Hi(t,e.child,null,i),t.child=Hi(t,null,s,i)):Ot(e,t,s,i),t.memoizedState=r.state,o&&Fm(t,n,!0),t.child}function Ky(e){var t=e.stateNode;t.pendingContext?Pm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pm(e,t.context,!1),gh(e,t.containerInfo)}function Ym(e,t,n,r,o){return Vi(),fh(o),t.flags|=256,Ot(e,t,n,r),t.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Kd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xy(e,t,n){var r=t.pendingProps,o=Ue.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Fe(Ue,o&1),e===null)return Wd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=tc(a,r,0,null),e=Fo(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Kd(n),t.memoizedState=qd,e):_h(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return JE(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=io(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=io(s,i):(i=Fo(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Kd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=qd,r}return i=e.child,e=i.sibling,r=io(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _h(e,t){return t=tc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function nu(e,t,n,r){return r!==null&&fh(r),Hi(t,e.child,null,n),e=_h(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function JE(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=pf(Error(Y(422))),nu(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tc({mode:"visible",children:r.children},o,0,null),i=Fo(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Hi(t,e.child,null,a),t.child.memoizedState=Kd(a),t.memoizedState=qd,i);if(!(t.mode&1))return nu(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(Y(419)),r=pf(i,r,void 0),nu(e,t,a,r)}if(s=(a&e.childLanes)!==0,Ut||s){if(r=mt,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Sr(e,o),Nn(r,e,o,-1))}return Nh(),r=pf(Error(Y(421))),nu(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=fS.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,tn=to(o.nextSibling),sn=t,We=!0,Rn=null,e!==null&&(dn[pn++]=yr,dn[pn++]=xr,dn[pn++]=jo,yr=e.id,xr=e.overflow,jo=t),t=_h(t,r.children),t.flags|=4096,t)}function Qm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jd(e.return,t,n)}function hf(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yy(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ot(e,t,r.children,n),r=Ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,n,t);else if(e.tag===19)Qm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Fe(Ue,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&sl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),hf(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&sl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}hf(t,!0,n,null,i);break;case"together":hf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _r(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Uo|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=io(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=io(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ZE(e,t,n){switch(t.tag){case 3:Ky(t),Vi();break;case 5:Ey(t);break;case 1:Gt(t.type)&&tl(t);break;case 4:gh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Fe(ol,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Fe(Ue,Ue.current&1),t.flags|=128,null):n&t.child.childLanes?Xy(e,t,n):(Fe(Ue,Ue.current&1),e=_r(e,t,n),e!==null?e.sibling:null);Fe(Ue,Ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yy(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Fe(Ue,Ue.current),r)break;return null;case 22:case 23:return t.lanes=0,Gy(e,t,n)}return _r(e,t,n)}var Qy,Xd,Jy,Zy;Qy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xd=function(){};Jy=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Io(Zn.current);var i=null;switch(n){case"input":o=gd(e,o),r=gd(e,r),i=[];break;case"select":o=qe({},o,{value:void 0}),r=qe({},r,{value:void 0}),i=[];break;case"textarea":o=wd(e,o),r=wd(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zu)}Cd(n,r);var a;n=null;for(l in o)if(!r.hasOwnProperty(l)&&o.hasOwnProperty(l)&&o[l]!=null)if(l==="style"){var s=o[l];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ka.hasOwnProperty(l)?i||(i=[]):(i=i||[]).push(l,null));for(l in r){var u=r[l];if(s=o!=null?o[l]:void 0,r.hasOwnProperty(l)&&u!==s&&(u!=null||s!=null))if(l==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ka.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Me("scroll",e),i||s===u||(i=[])):(i=i||[]).push(l,u))}n&&(i=i||[]).push("style",n);var l=i;(t.updateQueue=l)&&(t.flags|=4)}};Zy=function(e,t,n,r){n!==r&&(t.flags|=4)};function wa(e,t){if(!We)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function eS(e,t,n){var r=t.pendingProps;switch(ch(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(t),null;case 1:return Gt(t.type)&&el(),Rt(t),null;case 3:return r=t.stateNode,Gi(),ze(Ht),ze(Ft),xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eu(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rn!==null&&(rp(Rn),Rn=null))),Xd(e,t),Rt(t),null;case 5:yh(t);var o=Io(as.current);if(n=t.type,e!==null&&t.stateNode!=null)Jy(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(Y(166));return Rt(t),null}if(e=Io(Zn.current),eu(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[qn]=t,r[os]=i,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<Da.length;o++)Me(Da[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":am(r,i),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Me("invalid",r);break;case"textarea":um(r,i),Me("invalid",r)}Cd(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Zs(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Zs(r.textContent,s,e),o=["children",""+s]):Ka.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":Hs(r),sm(r,i,!0);break;case"textarea":Hs(r),lm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zu)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=k1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[qn]=t,e[os]=r,Qy(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ed(n,r),n){case"dialog":Me("cancel",e),Me("close",e),o=r;break;case"iframe":case"object":case"embed":Me("load",e),o=r;break;case"video":case"audio":for(o=0;o<Da.length;o++)Me(Da[o],e);o=r;break;case"source":Me("error",e),o=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),o=r;break;case"details":Me("toggle",e),o=r;break;case"input":am(e,r),o=gd(e,r),Me("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=qe({},r,{value:void 0}),Me("invalid",e);break;case"textarea":um(e,r),o=wd(e,r),Me("invalid",e);break;default:o=r}Cd(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?A1(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&R1(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Xa(e,u):typeof u=="number"&&Xa(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ka.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Me("scroll",e):u!=null&&Xp(e,i,u,a))}switch(n){case"input":Hs(e),sm(e,r,!1);break;case"textarea":Hs(e),lm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+co(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ai(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ai(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Rt(t),null;case 6:if(e&&t.stateNode!=null)Zy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(Y(166));if(n=Io(as.current),Io(Zn.current),eu(t)){if(r=t.stateNode,n=t.memoizedProps,r[qn]=t,(i=r.nodeValue!==n)&&(e=sn,e!==null))switch(e.tag){case 3:Zs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zs(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=t,t.stateNode=r}return Rt(t),null;case 13:if(ze(Ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(We&&tn!==null&&t.mode&1&&!(t.flags&128))my(),Vi(),t.flags|=98560,i=!1;else if(i=eu(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(Y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Y(317));i[qn]=t}else Vi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rt(t),i=!1}else Rn!==null&&(rp(Rn),Rn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?at===0&&(at=3):Nh())),t.updateQueue!==null&&(t.flags|=4),Rt(t),null);case 4:return Gi(),Xd(e,t),e===null&&ns(t.stateNode.containerInfo),Rt(t),null;case 10:return hh(t.type._context),Rt(t),null;case 17:return Gt(t.type)&&el(),Rt(t),null;case 19:if(ze(Ue),i=t.memoizedState,i===null)return Rt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)wa(i,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=sl(e),a!==null){for(t.flags|=128,wa(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Fe(Ue,Ue.current&1|2),t.child}e=e.sibling}i.tail!==null&&Ze()>Ki&&(t.flags|=128,r=!0,wa(i,!1),t.lanes=4194304)}else{if(!r)if(e=sl(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!We)return Rt(t),null}else 2*Ze()-i.renderingStartTime>Ki&&n!==1073741824&&(t.flags|=128,r=!0,wa(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Ze(),t.sibling=null,n=Ue.current,Fe(Ue,r?n&1|2:n&1),t):(Rt(t),null);case 22:case 23:return Th(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Jt&1073741824&&(Rt(t),t.subtreeFlags&6&&(t.flags|=8192)):Rt(t),null;case 24:return null;case 25:return null}throw Error(Y(156,t.tag))}function tS(e,t){switch(ch(t),t.tag){case 1:return Gt(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gi(),ze(Ht),ze(Ft),xh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yh(t),null;case 13:if(ze(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));Vi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ue),null;case 4:return Gi(),null;case 10:return hh(t.type._context),null;case 22:case 23:return Th(),null;case 24:return null;default:return null}}var ru=!1,At=!1,nS=typeof WeakSet=="function"?WeakSet:Set,ee=null;function ki(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function Yd(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var Jm=!1;function rS(e,t){if(Pd=Yu,e=ry(),uh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,l=0,c=0,f=e,d=null;t:for(;;){for(var p;f!==n||o!==0&&f.nodeType!==3||(s=a+o),f!==i||r!==0&&f.nodeType!==3||(u=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===e)break t;if(d===n&&++l===o&&(s=a),d===i&&++c===r&&(u=a),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:e,selectionRange:n},Yu=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var m=h.memoizedProps,g=h.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?m:_n(t.type,m),g);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(w){Qe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return h=Jm,Jm=!1,h}function ja(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Yd(t,n,i)}o=o.next}while(o!==r)}}function Zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ex(e){var t=e.alternate;t!==null&&(e.alternate=null,ex(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[qn],delete t[os],delete t[Bd],delete t[zE],delete t[WE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tx(e){return e.tag===5||e.tag===3||e.tag===4}function Zm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zu));else if(r!==4&&(e=e.child,e!==null))for(Jd(e,t,n),e=e.sibling;e!==null;)Jd(e,t,n),e=e.sibling}function Zd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zd(e,t,n),e=e.sibling;e!==null;)Zd(e,t,n),e=e.sibling}var xt=null,kn=!1;function Mr(e,t,n){for(n=n.child;n!==null;)nx(e,t,n),n=n.sibling}function nx(e,t,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Hl,n)}catch{}switch(n.tag){case 5:At||ki(n,t);case 6:var r=xt,o=kn;xt=null,Mr(e,t,n),xt=r,kn=o,xt!==null&&(kn?(e=xt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xt.removeChild(n.stateNode));break;case 18:xt!==null&&(kn?(e=xt,n=n.stateNode,e.nodeType===8?sf(e.parentNode,n):e.nodeType===1&&sf(e,n),Za(e)):sf(xt,n.stateNode));break;case 4:r=xt,o=kn,xt=n.stateNode.containerInfo,kn=!0,Mr(e,t,n),xt=r,kn=o;break;case 0:case 11:case 14:case 15:if(!At&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Yd(n,t,a),o=o.next}while(o!==r)}Mr(e,t,n);break;case 1:if(!At&&(ki(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Qe(n,t,s)}Mr(e,t,n);break;case 21:Mr(e,t,n);break;case 22:n.mode&1?(At=(r=At)||n.memoizedState!==null,Mr(e,t,n),At=r):Mr(e,t,n);break;default:Mr(e,t,n)}}function eg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new nS),t.forEach(function(r){var o=dS.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Sn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:xt=s.stateNode,kn=!1;break e;case 3:xt=s.stateNode.containerInfo,kn=!0;break e;case 4:xt=s.stateNode.containerInfo,kn=!0;break e}s=s.return}if(xt===null)throw Error(Y(160));nx(i,a,o),xt=null,kn=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(l){Qe(o,t,l)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rx(t,e),t=t.sibling}function rx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sn(t,e),jn(e),r&4){try{ja(3,e,e.return),Zl(3,e)}catch(m){Qe(e,e.return,m)}try{ja(5,e,e.return)}catch(m){Qe(e,e.return,m)}}break;case 1:Sn(t,e),jn(e),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Sn(t,e),jn(e),r&512&&n!==null&&ki(n,n.return),e.flags&32){var o=e.stateNode;try{Xa(o,"")}catch(m){Qe(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&S1(o,i),Ed(s,a);var l=Ed(s,i);for(a=0;a<u.length;a+=2){var c=u[a],f=u[a+1];c==="style"?A1(o,f):c==="dangerouslySetInnerHTML"?R1(o,f):c==="children"?Xa(o,f):Xp(o,c,f,l)}switch(s){case"input":yd(o,i);break;case"textarea":_1(o,i);break;case"select":var d=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Ai(o,!!i.multiple,p,!1):d!==!!i.multiple&&(i.defaultValue!=null?Ai(o,!!i.multiple,i.defaultValue,!0):Ai(o,!!i.multiple,i.multiple?[]:"",!1))}o[os]=i}catch(m){Qe(e,e.return,m)}}break;case 6:if(Sn(t,e),jn(e),r&4){if(e.stateNode===null)throw Error(Y(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(m){Qe(e,e.return,m)}}break;case 3:if(Sn(t,e),jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(t.containerInfo)}catch(m){Qe(e,e.return,m)}break;case 4:Sn(t,e),jn(e);break;case 13:Sn(t,e),jn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ih=Ze())),r&4&&eg(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(At=(l=At)||c,Sn(t,e),At=l):Sn(t,e),jn(e),r&8192){if(l=e.memoizedState!==null,(e.stateNode.isHidden=l)&&!c&&e.mode&1)for(ee=e,c=e.child;c!==null;){for(f=ee=c;ee!==null;){switch(d=ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:ja(4,d,d.return);break;case 1:ki(d,d.return);var h=d.stateNode;if(typeof h.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(m){Qe(r,n,m)}}break;case 5:ki(d,d.return);break;case 22:if(d.memoizedState!==null){ng(f);continue}}p!==null?(p.return=d,ee=p):ng(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,l?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=I1("display",a))}catch(m){Qe(e,e.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=l?"":f.memoizedProps}catch(m){Qe(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Sn(t,e),jn(e),r&4&&eg(e);break;case 21:break;default:Sn(t,e),jn(e)}}function jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tx(n)){var r=n;break e}n=n.return}throw Error(Y(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xa(o,""),r.flags&=-33);var i=Zm(e);Zd(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Zm(e);Jd(e,s,a);break;default:throw Error(Y(161))}}catch(u){Qe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function oS(e,t,n){ee=e,ox(e)}function ox(e,t,n){for(var r=(e.mode&1)!==0;ee!==null;){var o=ee,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ru;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||At;s=ru;var l=At;if(ru=a,(At=u)&&!l)for(ee=o;ee!==null;)a=ee,u=a.child,a.tag===22&&a.memoizedState!==null?rg(o):u!==null?(u.return=a,ee=u):rg(o);for(;i!==null;)ee=i,ox(i),i=i.sibling;ee=o,ru=s,At=l}tg(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ee=i):tg(e)}}function tg(e){for(;ee!==null;){var t=ee;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:At||Zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!At)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:_n(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Lm(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Lm(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var l=t.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}At||t.flags&512&&Qd(t)}catch(d){Qe(t,t.return,d)}}if(t===e){ee=null;break}if(n=t.sibling,n!==null){n.return=t.return,ee=n;break}ee=t.return}}function ng(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ee=n;break}ee=t.return}}function rg(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zl(4,t)}catch(u){Qe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Qe(t,o,u)}}var i=t.return;try{Qd(t)}catch(u){Qe(t,i,u)}break;case 5:var a=t.return;try{Qd(t)}catch(u){Qe(t,a,u)}}}catch(u){Qe(t,t.return,u)}if(t===e){ee=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ee=s;break}ee=t.return}}var iS=Math.ceil,cl=Ir.ReactCurrentDispatcher,kh=Ir.ReactCurrentOwner,yn=Ir.ReactCurrentBatchConfig,ke=0,mt=null,tt=null,Et=0,Jt=0,Ri=vo(0),at=0,cs=null,Uo=0,ec=0,Rh=0,$a=null,Wt=null,Ih=0,Ki=1/0,hr=null,fl=!1,ep=null,ro=null,ou=!1,Gr=null,dl=0,Ua=0,tp=null,Du=-1,Pu=0;function Bt(){return ke&6?Ze():Du!==-1?Du:Du=Ze()}function oo(e){return e.mode&1?ke&2&&Et!==0?Et&-Et:$E.transition!==null?(Pu===0&&(Pu=j1()),Pu):(e=De,e!==0||(e=window.event,e=e===void 0?16:K1(e.type)),e):1}function Nn(e,t,n,r){if(50<Ua)throw Ua=0,tp=null,Error(Y(185));Ss(e,n,r),(!(ke&2)||e!==mt)&&(e===mt&&(!(ke&2)&&(ec|=n),at===4&&Vr(e,Et)),qt(e,r),n===1&&ke===0&&!(t.mode&1)&&(Ki=Ze()+500,Yl&&mo()))}function qt(e,t){var n=e.callbackNode;$C(e,t);var r=Xu(e,e===mt?Et:0);if(r===0)n!==null&&dm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&dm(n),t===1)e.tag===0?jE(og.bind(null,e)):py(og.bind(null,e)),BE(function(){!(ke&6)&&mo()}),n=null;else{switch($1(r)){case 1:n=eh;break;case 4:n=z1;break;case 16:n=Ku;break;case 536870912:n=W1;break;default:n=Ku}n=dx(n,ix.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ix(e,t){if(Du=-1,Pu=0,ke&6)throw Error(Y(327));var n=e.callbackNode;if(Fi()&&e.callbackNode!==n)return null;var r=Xu(e,e===mt?Et:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var o=ke;ke|=2;var i=sx();(mt!==e||Et!==t)&&(hr=null,Ki=Ze()+500,Po(e,t));do try{uS();break}catch(s){ax(e,s)}while(1);ph(),cl.current=i,ke=o,tt!==null?t=0:(mt=null,Et=0,t=at)}if(t!==0){if(t===2&&(o=Id(e),o!==0&&(r=o,t=np(e,o))),t===1)throw n=cs,Po(e,0),Vr(e,r),qt(e,Ze()),n;if(t===6)Vr(e,r);else{if(o=e.current.alternate,!(r&30)&&!aS(o)&&(t=pl(e,r),t===2&&(i=Id(e),i!==0&&(r=i,t=np(e,i))),t===1))throw n=cs,Po(e,0),Vr(e,r),qt(e,Ze()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(Y(345));case 2:Co(e,Wt,hr);break;case 3:if(Vr(e,r),(r&130023424)===r&&(t=Ih+500-Ze(),10<t)){if(Xu(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Bt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Md(Co.bind(null,e,Wt,hr),t);break}Co(e,Wt,hr);break;case 4:if(Vr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Tn(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iS(r/1960))-r,10<r){e.timeoutHandle=Md(Co.bind(null,e,Wt,hr),r);break}Co(e,Wt,hr);break;case 5:Co(e,Wt,hr);break;default:throw Error(Y(329))}}}return qt(e,Ze()),e.callbackNode===n?ix.bind(null,e):null}function np(e,t){var n=$a;return e.current.memoizedState.isDehydrated&&(Po(e,t).flags|=256),e=pl(e,t),e!==2&&(t=Wt,Wt=n,t!==null&&rp(t)),e}function rp(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function aS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Fn(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vr(e,t){for(t&=~Rh,t&=~ec,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tn(t),r=1<<n;e[n]=-1,t&=~r}}function og(e){if(ke&6)throw Error(Y(327));Fi();var t=Xu(e,0);if(!(t&1))return qt(e,Ze()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=Id(e);r!==0&&(t=r,n=np(e,r))}if(n===1)throw n=cs,Po(e,0),Vr(e,t),qt(e,Ze()),n;if(n===6)throw Error(Y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Co(e,Wt,hr),qt(e,Ze()),null}function Ah(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(Ki=Ze()+500,Yl&&mo())}}function Vo(e){Gr!==null&&Gr.tag===0&&!(ke&6)&&Fi();var t=ke;ke|=1;var n=yn.transition,r=De;try{if(yn.transition=null,De=1,e)return e()}finally{De=r,yn.transition=n,ke=t,!(ke&6)&&mo()}}function Th(){Jt=Ri.current,ze(Ri)}function Po(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ME(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(ch(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Gi(),ze(Ht),ze(Ft),xh();break;case 5:yh(r);break;case 4:Gi();break;case 13:ze(Ue);break;case 19:ze(Ue);break;case 10:hh(r.type._context);break;case 22:case 23:Th()}n=n.return}if(mt=e,tt=e=io(e.current,null),Et=Jt=t,at=0,cs=null,Rh=ec=Uo=0,Wt=$a=null,Ro!==null){for(t=0;t<Ro.length;t++)if(n=Ro[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Ro=null}return e}function ax(e,t){do{var n=tt;try{if(ph(),Au.current=ll,ul){for(var r=Ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ul=!1}if($o=0,ht=it=Ge=null,Wa=!1,ss=0,kh.current=null,n===null||n.return===null){at=1,cs=t,tt=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=Et,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=s,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Hm(a);if(p!==null){p.flags&=-257,Gm(p,a,s,i,t),p.mode&1&&Vm(i,l,t),t=p,u=l;var h=t.updateQueue;if(h===null){var m=new Set;m.add(u),t.updateQueue=m}else h.add(u);break e}else{if(!(t&1)){Vm(i,l,t),Nh();break e}u=Error(Y(426))}}else if(We&&s.mode&1){var g=Hm(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Gm(g,a,s,i,t),fh(qi(u,s));break e}}i=u=qi(u,s),at!==4&&(at=2),$a===null?$a=[i]:$a.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Uy(i,u,t);Bm(i,v);break e;case 1:s=u;var y=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ro===null||!ro.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Vy(i,s,t);Bm(i,w);break e}}i=i.return}while(i!==null)}lx(n)}catch(b){t=b,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(1)}function sx(){var e=cl.current;return cl.current=ll,e===null?ll:e}function Nh(){(at===0||at===3||at===2)&&(at=4),mt===null||!(Uo&268435455)&&!(ec&268435455)||Vr(mt,Et)}function pl(e,t){var n=ke;ke|=2;var r=sx();(mt!==e||Et!==t)&&(hr=null,Po(e,t));do try{sS();break}catch(o){ax(e,o)}while(1);if(ph(),ke=n,cl.current=r,tt!==null)throw Error(Y(261));return mt=null,Et=0,at}function sS(){for(;tt!==null;)ux(tt)}function uS(){for(;tt!==null&&!PC();)ux(tt)}function ux(e){var t=fx(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?lx(e):tt=t,kh.current=null}function lx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=tS(n,t),n!==null){n.flags&=32767,tt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,tt=null;return}}else if(n=eS(n,t,Jt),n!==null){tt=n;return}if(t=t.sibling,t!==null){tt=t;return}tt=t=e}while(t!==null);at===0&&(at=5)}function Co(e,t,n){var r=De,o=yn.transition;try{yn.transition=null,De=1,lS(e,t,n,r)}finally{yn.transition=o,De=r}return null}function lS(e,t,n,r){do Fi();while(Gr!==null);if(ke&6)throw Error(Y(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(Y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(UC(e,i),e===mt&&(tt=mt=null,Et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ou||(ou=!0,dx(Ku,function(){return Fi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yn.transition,yn.transition=null;var a=De;De=1;var s=ke;ke|=4,kh.current=null,rS(e,n),rx(n,e),AE(Fd),Yu=!!Pd,Fd=Pd=null,e.current=n,oS(n),FC(),ke=s,De=a,yn.transition=i}else e.current=n;if(ou&&(ou=!1,Gr=e,dl=o),i=e.pendingLanes,i===0&&(ro=null),BC(n.stateNode),qt(e,Ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(fl)throw fl=!1,e=ep,ep=null,e;return dl&1&&e.tag!==0&&Fi(),i=e.pendingLanes,i&1?e===tp?Ua++:(Ua=0,tp=e):Ua=0,mo(),null}function Fi(){if(Gr!==null){var e=$1(dl),t=yn.transition,n=De;try{if(yn.transition=null,De=16>e?16:e,Gr===null)var r=!1;else{if(e=Gr,Gr=null,dl=0,ke&6)throw Error(Y(331));var o=ke;for(ke|=4,ee=e.current;ee!==null;){var i=ee,a=i.child;if(ee.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var l=s[u];for(ee=l;ee!==null;){var c=ee;switch(c.tag){case 0:case 11:case 15:ja(8,c,i)}var f=c.child;if(f!==null)f.return=c,ee=f;else for(;ee!==null;){c=ee;var d=c.sibling,p=c.return;if(ex(c),c===l){ee=null;break}if(d!==null){d.return=p,ee=d;break}ee=p}}}var h=i.alternate;if(h!==null){var m=h.child;if(m!==null){h.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}ee=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,ee=a;else e:for(;ee!==null;){if(i=ee,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ja(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,ee=v;break e}ee=i.return}}var y=e.current;for(ee=y;ee!==null;){a=ee;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ee=x;else e:for(a=y;ee!==null;){if(s=ee,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zl(9,s)}}catch(b){Qe(s,s.return,b)}if(s===a){ee=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,ee=w;break e}ee=s.return}}if(ke=o,mo(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Hl,e)}catch{}r=!0}return r}finally{De=n,yn.transition=t}}return!1}function ig(e,t,n){t=qi(n,t),t=Uy(e,t,1),e=no(e,t,1),t=Bt(),e!==null&&(Ss(e,1,t),qt(e,t))}function Qe(e,t,n){if(e.tag===3)ig(e,e,n);else for(;t!==null;){if(t.tag===3){ig(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ro===null||!ro.has(r))){e=qi(n,e),e=Vy(t,e,1),t=no(t,e,1),e=Bt(),t!==null&&(Ss(t,1,e),qt(t,e));break}}t=t.return}}function cS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Bt(),e.pingedLanes|=e.suspendedLanes&n,mt===e&&(Et&n)===n&&(at===4||at===3&&(Et&130023424)===Et&&500>Ze()-Ih?Po(e,0):Rh|=n),qt(e,t)}function cx(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var n=Bt();e=Sr(e,t),e!==null&&(Ss(e,t,n),qt(e,n))}function fS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cx(e,n)}function dS(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(Y(314))}r!==null&&r.delete(t),cx(e,n)}var fx;fx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ht.current)Ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ut=!1,ZE(e,t,n);Ut=!!(e.flags&131072)}else Ut=!1,We&&t.flags&1048576&&hy(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nu(e,t),e=t.pendingProps;var o=Ui(t,Ft.current);Pi(t,n),o=bh(null,t,r,e,o,n);var i=Ch();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Gt(r)?(i=!0,tl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,mh(t),o.updater=Ql,t.stateNode=o,o._reactInternals=t,Ud(t,r,e,n),t=Gd(null,t,r,!0,i,n)):(t.tag=0,We&&i&&lh(t),Ot(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nu(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=hS(r),e=_n(r,e),o){case 0:t=Hd(null,t,r,e,n);break e;case 1:t=Xm(null,t,r,e,n);break e;case 11:t=qm(null,t,r,e,n);break e;case 14:t=Km(null,t,r,_n(r.type,e),n);break e}throw Error(Y(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_n(r,o),Hd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_n(r,o),Xm(e,t,r,o,n);case 3:e:{if(Ky(t),e===null)throw Error(Y(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yy(e,t),al(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=qi(Error(Y(423)),t),t=Ym(e,t,r,n,o);break e}else if(r!==o){o=qi(Error(Y(424)),t),t=Ym(e,t,r,n,o);break e}else for(tn=to(t.stateNode.containerInfo.firstChild),sn=t,We=!0,Rn=null,n=Cy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===o){t=_r(e,t,n);break e}Ot(e,t,r,n)}t=t.child}return t;case 5:return Ey(t),e===null&&Wd(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Od(r,o)?a=null:i!==null&&Od(r,i)&&(t.flags|=32),qy(e,t),Ot(e,t,a,n),t.child;case 6:return e===null&&Wd(t),null;case 13:return Xy(e,t,n);case 4:return gh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hi(t,null,r,n):Ot(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_n(r,o),qm(e,t,r,o,n);case 7:return Ot(e,t,t.pendingProps,n),t.child;case 8:return Ot(e,t,t.pendingProps.children,n),t.child;case 12:return Ot(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Fe(ol,r._currentValue),r._currentValue=a,i!==null)if(Fn(i.value,a)){if(i.children===o.children&&!Ht.current){t=_r(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=wr(-1,n&-n),u.tag=2;var l=i.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),jd(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(Y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),jd(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ot(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pi(t,n),o=wn(o),r=r(o),t.flags|=1,Ot(e,t,r,n),t.child;case 14:return r=t.type,o=_n(r,t.pendingProps),o=_n(r.type,o),Km(e,t,r,o,n);case 15:return Hy(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:_n(r,o),Nu(e,t),t.tag=1,Gt(r)?(e=!0,tl(t)):e=!1,Pi(t,n),wy(t,r,o),Ud(t,r,o,n),Gd(null,t,r,!0,e,n);case 19:return Yy(e,t,n);case 22:return Gy(e,t,n)}throw Error(Y(156,t.tag))};function dx(e,t){return L1(e,t)}function pS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,t,n,r){return new pS(e,t,n,r)}function Dh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hS(e){if(typeof e=="function")return Dh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qp)return 11;if(e===Jp)return 14}return 2}function io(e,t){var n=e.alternate;return n===null?(n=mn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Fu(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Dh(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case gi:return Fo(n.children,o,i,t);case Yp:a=8,o|=8;break;case pd:return e=mn(12,n,t,o|2),e.elementType=pd,e.lanes=i,e;case hd:return e=mn(13,n,t,o),e.elementType=hd,e.lanes=i,e;case vd:return e=mn(19,n,t,o),e.elementType=vd,e.lanes=i,e;case b1:return tc(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x1:a=10;break e;case w1:a=9;break e;case Qp:a=11;break e;case Jp:a=14;break e;case jr:a=16,r=null;break e}throw Error(Y(130,e==null?e:typeof e,""))}return t=mn(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Fo(e,t,n,r){return e=mn(7,e,r,t),e.lanes=n,e}function tc(e,t,n,r){return e=mn(22,e,r,t),e.elementType=b1,e.lanes=n,e.stateNode={isHidden:!1},e}function vf(e,t,n){return e=mn(6,e,null,t),e.lanes=n,e}function mf(e,t,n){return t=mn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vS(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xc(0),this.expirationTimes=Xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xc(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ph(e,t,n,r,o,i,a,s,u){return e=new vS(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=mn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(i),e}function mS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function px(e){if(!e)return fo;e=e._reactInternals;e:{if(qo(e)!==e||e.tag!==1)throw Error(Y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(Y(171))}if(e.tag===1){var n=e.type;if(Gt(n))return dy(e,n,t)}return t}function hx(e,t,n,r,o,i,a,s,u){return e=Ph(n,r,!0,e,o,i,a,s,u),e.context=px(null),n=e.current,r=Bt(),o=oo(n),i=wr(r,o),i.callback=t??null,no(n,i,o),e.current.lanes=o,Ss(e,o,r),qt(e,r),e}function nc(e,t,n,r){var o=t.current,i=Bt(),a=oo(o);return n=px(n),t.context===null?t.context=n:t.pendingContext=n,t=wr(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=no(o,t,a),e!==null&&(Nn(e,o,a,i),Iu(e,o,a)),a}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ag(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fh(e,t){ag(e,t),(e=e.alternate)&&ag(e,t)}function gS(){return null}var vx=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oh(e){this._internalRoot=e}rc.prototype.render=Oh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));nc(e,t,null,null)};rc.prototype.unmount=Oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vo(function(){nc(null,e,null,null)}),t[Er]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var t=H1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ur.length&&t!==0&&t<Ur[n].priority;n++);Ur.splice(n,0,e),n===0&&q1(e)}};function Mh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sg(){}function yS(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var l=hl(a);i.call(l)}}var a=hx(t,r,e,0,null,!1,!1,"",sg);return e._reactRootContainer=a,e[Er]=a.current,ns(e.nodeType===8?e.parentNode:e),Vo(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var l=hl(u);s.call(l)}}var u=Ph(e,0,!1,null,null,!1,!1,"",sg);return e._reactRootContainer=u,e[Er]=u.current,ns(e.nodeType===8?e.parentNode:e),Vo(function(){nc(t,u,n,r)}),u}function ic(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=hl(a);s.call(u)}}nc(t,a,e,o)}else a=yS(n,t,e,o,r);return hl(a)}U1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Na(t.pendingLanes);n!==0&&(th(t,n|1),qt(t,Ze()),!(ke&6)&&(Ki=Ze()+500,mo()))}break;case 13:Vo(function(){var r=Sr(e,1);if(r!==null){var o=Bt();Nn(r,e,1,o)}}),Fh(e,1)}};nh=function(e){if(e.tag===13){var t=Sr(e,134217728);if(t!==null){var n=Bt();Nn(t,e,134217728,n)}Fh(e,134217728)}};V1=function(e){if(e.tag===13){var t=oo(e),n=Sr(e,t);if(n!==null){var r=Bt();Nn(n,e,t,r)}Fh(e,t)}};H1=function(){return De};G1=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};_d=function(e,t,n){switch(t){case"input":if(yd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xl(r);if(!o)throw Error(Y(90));E1(r),yd(r,o)}}}break;case"textarea":_1(e,n);break;case"select":t=n.value,t!=null&&Ai(e,!!n.multiple,t,!1)}};D1=Ah;P1=Vo;var xS={usingClientEntryPoint:!1,Events:[ks,bi,Xl,T1,N1,Ah]},ba={findFiberByHostInstance:ko,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wS={bundleType:ba.bundleType,version:ba.version,rendererPackageName:ba.rendererPackageName,rendererConfig:ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=M1(e),e===null?null:e.stateNode},findFiberByHostInstance:ba.findFiberByHostInstance||gS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!iu.isDisabled&&iu.supportsFiber)try{Hl=iu.inject(wS),Jn=iu}catch{}}cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xS;cn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(t))throw Error(Y(200));return mS(e,t,null,n)};cn.createRoot=function(e,t){if(!Mh(e))throw Error(Y(299));var n=!1,r="",o=vx;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ph(e,1,!1,null,null,n,!1,r,o),e[Er]=t.current,ns(e.nodeType===8?e.parentNode:e),new Oh(t)};cn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=M1(t),e=e===null?null:e.stateNode,e};cn.flushSync=function(e){return Vo(e)};cn.hydrate=function(e,t,n){if(!oc(t))throw Error(Y(200));return ic(null,e,t,!0,n)};cn.hydrateRoot=function(e,t,n){if(!Mh(e))throw Error(Y(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=vx;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=hx(t,null,e,1,n??null,o,!1,i,a),e[Er]=t.current,ns(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rc(t)};cn.render=function(e,t,n){if(!oc(t))throw Error(Y(200));return ic(null,e,t,!1,n)};cn.unmountComponentAtNode=function(e){if(!oc(e))throw Error(Y(40));return e._reactRootContainer?(Vo(function(){ic(null,null,e,!1,function(){e._reactRootContainer=null,e[Er]=null})}),!0):!1};cn.unstable_batchedUpdates=Ah;cn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!oc(n))throw Error(Y(200));if(e==null||e._reactInternals===void 0)throw Error(Y(38));return ic(e,t,n,!1,r)};cn.version="18.2.0-next-9e3b772b8-20220608";function mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx)}catch(e){console.error(e)}}mx(),h1.exports=cn;var bS=h1.exports,ug=bS;fd.createRoot=ug.createRoot,fd.hydrateRoot=ug.hydrateRoot;var Vt=function(){return Vt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Vt.apply(this,arguments)};function vl(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Be="-ms-",Va="-moz-",Te="-webkit-",gx="comm",ac="rule",Bh="decl",CS="@import",yx="@keyframes",ES="@layer",SS=Math.abs,Lh=String.fromCharCode,op=Object.assign;function _S(e,t){return vt(e,0)^45?(((t<<2^vt(e,0))<<2^vt(e,1))<<2^vt(e,2))<<2^vt(e,3):0}function xx(e){return e.trim()}function vr(e,t){return(e=t.exec(e))?e[0]:e}function me(e,t,n){return e.replace(t,n)}function Ou(e,t){return e.indexOf(t)}function vt(e,t){return e.charCodeAt(t)|0}function Xi(e,t,n){return e.slice(t,n)}function Hn(e){return e.length}function wx(e){return e.length}function Pa(e,t){return t.push(e),e}function kS(e,t){return e.map(t).join("")}function lg(e,t){return e.filter(function(n){return!vr(n,t)})}var sc=1,Yi=1,bx=0,Cn=0,et=0,ua="";function uc(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:sc,column:Yi,length:a,return:"",siblings:s}}function Wr(e,t){return op(uc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ii(e){for(;e.root;)e=Wr(e.root,{children:[e]});Pa(e,e.siblings)}function RS(){return et}function IS(){return et=Cn>0?vt(ua,--Cn):0,Yi--,et===10&&(Yi=1,sc--),et}function Dn(){return et=Cn<bx?vt(ua,Cn++):0,Yi++,et===10&&(Yi=1,sc++),et}function Oo(){return vt(ua,Cn)}function Mu(){return Cn}function lc(e,t){return Xi(ua,e,t)}function ip(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AS(e){return sc=Yi=1,bx=Hn(ua=e),Cn=0,[]}function TS(e){return ua="",e}function gf(e){return xx(lc(Cn-1,ap(e===91?e+2:e===40?e+1:e)))}function NS(e){for(;(et=Oo())&&et<33;)Dn();return ip(e)>2||ip(et)>3?"":" "}function DS(e,t){for(;--t&&Dn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return lc(e,Mu()+(t<6&&Oo()==32&&Dn()==32))}function ap(e){for(;Dn();)switch(et){case e:return Cn;case 34:case 39:e!==34&&e!==39&&ap(et);break;case 40:e===41&&ap(e);break;case 92:Dn();break}return Cn}function PS(e,t){for(;Dn()&&e+et!==47+10;)if(e+et===42+42&&Oo()===47)break;return"/*"+lc(t,Cn-1)+"*"+Lh(e===47?e:Dn())}function FS(e){for(;!ip(Oo());)Dn();return lc(e,Cn)}function OS(e){return TS(Bu("",null,null,null,[""],e=AS(e),0,[0],e))}function Bu(e,t,n,r,o,i,a,s,u){for(var l=0,c=0,f=a,d=0,p=0,h=0,m=1,g=1,v=1,y=0,x="",w=o,b=i,C=r,E=x;g;)switch(h=y,y=Dn()){case 40:if(h!=108&&vt(E,f-1)==58){Ou(E+=me(gf(y),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:E+=gf(y);break;case 9:case 10:case 13:case 32:E+=NS(h);break;case 92:E+=DS(Mu()-1,7);continue;case 47:switch(Oo()){case 42:case 47:Pa(MS(PS(Dn(),Mu()),t,n,u),u);break;default:E+="/"}break;case 123*m:s[l++]=Hn(E)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:v==-1&&(E=me(E,/\f/g,"")),p>0&&Hn(E)-f&&Pa(p>32?fg(E+";",r,n,f-1,u):fg(me(E," ","")+";",r,n,f-2,u),u);break;case 59:E+=";";default:if(Pa(C=cg(E,t,n,l,c,o,s,x,w=[],b=[],f,i),i),y===123)if(c===0)Bu(E,t,C,C,w,i,f,s,b);else switch(d===99&&vt(E,3)===110?100:d){case 100:case 108:case 109:case 115:Bu(e,C,C,r&&Pa(cg(e,C,C,0,0,o,s,x,o,w=[],f,b),b),o,b,f,s,r?w:b);break;default:Bu(E,C,C,C,[""],b,0,s,b)}}l=c=p=0,m=v=1,x=E="",f=a;break;case 58:f=1+Hn(E),p=h;default:if(m<1){if(y==123)--m;else if(y==125&&m++==0&&IS()==125)continue}switch(E+=Lh(y),y*m){case 38:v=c>0?1:(E+="\f",-1);break;case 44:s[l++]=(Hn(E)-1)*v,v=1;break;case 64:Oo()===45&&(E+=gf(Dn())),d=Oo(),c=f=Hn(x=E+=FS(Mu())),y++;break;case 45:h===45&&Hn(E)==2&&(m=0)}}return i}function cg(e,t,n,r,o,i,a,s,u,l,c,f){for(var d=o-1,p=o===0?i:[""],h=wx(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=Xi(e,d+1,d=SS(g=a[m])),w=e;y<h;++y)(w=xx(g>0?p[y]+" "+x:me(x,/&\f/g,p[y])))&&(u[v++]=w);return uc(e,t,n,o===0?ac:s,u,l,c,f)}function MS(e,t,n,r){return uc(e,t,n,gx,Lh(RS()),Xi(e,2,-2),0,r)}function fg(e,t,n,r,o){return uc(e,t,n,Bh,Xi(e,0,r),Xi(e,r+1,-1),r,o)}function Cx(e,t,n){switch(_S(e,t)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 4789:return Va+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+Va+e+Be+e+e;case 5936:switch(vt(e,t+11)){case 114:return Te+e+Be+me(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+Be+me(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+Be+me(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Te+e+Be+e+e;case 6165:return Te+e+Be+"flex-"+e+e;case 5187:return Te+e+me(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Be+"flex-$1$2")+e;case 5443:return Te+e+Be+"flex-item-"+me(e,/flex-|-self/g,"")+(vr(e,/flex-|baseline/)?"":Be+"grid-row-"+me(e,/flex-|-self/g,""))+e;case 4675:return Te+e+Be+"flex-line-pack"+me(e,/align-content|flex-|-self/g,"")+e;case 5548:return Te+e+Be+me(e,"shrink","negative")+e;case 5292:return Te+e+Be+me(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+me(e,"-grow","")+Te+e+Be+me(e,"grow","positive")+e;case 4554:return Te+me(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return me(me(me(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return me(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return me(me(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4200:if(!vr(e,/flex-|baseline/))return Be+"grid-column-align"+Xi(e,t)+e;break;case 2592:case 3360:return Be+me(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vr(r.props,/grid-\w+-end/)})?~Ou(e+(n=n[t].value),"span")?e:Be+me(e,"-start","")+e+Be+"grid-row-span:"+(~Ou(n,"span")?vr(n,/\d+/):+vr(n,/\d+/)-+vr(e,/\d+/))+";":Be+me(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vr(r.props,/grid-\w+-start/)})?e:Be+me(me(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return me(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hn(e)-1-t>6)switch(vt(e,t+1)){case 109:if(vt(e,t+4)!==45)break;case 102:return me(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Va+(vt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ou(e,"stretch")?Cx(me(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return me(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,u,l){return Be+o+":"+i+l+(a?Be+o+"-span:"+(s?u:+u-+i)+l:"")+e});case 4949:if(vt(e,t+6)===121)return me(e,":",":"+Te)+e;break;case 6444:switch(vt(e,vt(e,14)===45?18:11)){case 120:return me(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(vt(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Be+"$2box$3")+e;case 100:return me(e,":",":"+Be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(e,"scroll-","scroll-snap-")+e}return e}function ml(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function BS(e,t,n,r){switch(e.type){case ES:if(e.children.length)break;case CS:case Bh:return e.return=e.return||e.value;case gx:return"";case yx:return e.return=e.value+"{"+ml(e.children,r)+"}";case ac:if(!Hn(e.value=e.props.join(",")))return""}return Hn(n=ml(e.children,r))?e.return=e.value+"{"+n+"}":""}function LS(e){var t=wx(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function zS(e){return function(t){t.root||(t=t.return)&&e(t)}}function WS(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Bh:e.return=Cx(e.value,e.length,n);return;case yx:return ml([Wr(e,{value:me(e.value,"@","@"+Te)})],r);case ac:if(e.length)return kS(n=e.props,function(o){switch(vr(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ii(Wr(e,{props:[me(o,/:(read-\w+)/,":"+Va+"$1")]})),ii(Wr(e,{props:[o]})),op(e,{props:lg(n,r)});break;case"::placeholder":ii(Wr(e,{props:[me(o,/:(plac\w+)/,":"+Te+"input-$1")]})),ii(Wr(e,{props:[me(o,/:(plac\w+)/,":"+Va+"$1")]})),ii(Wr(e,{props:[me(o,/:(plac\w+)/,Be+"input-$1")]})),ii(Wr(e,{props:[o]})),op(e,{props:lg(n,r)});break}return""})}}var jS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ex="active",Sx="data-styled-version",cc="6.0.9",zh=`/*!sc*/
`,Wh=typeof window<"u"&&"HTMLElement"in window,$S=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),fc=Object.freeze([]),Ji=Object.freeze({});function US(e,t,n){return n===void 0&&(n=Ji),e.theme!==n.theme&&e.theme||t||n.theme}var _x=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),VS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,HS=/(^-|-$)/g;function dg(e){return e.replace(VS,"-").replace(HS,"")}var GS=/(a)(d)/gi,au=52,pg=function(e){return String.fromCharCode(e+(e>25?39:97))};function sp(e){var t,n="";for(t=Math.abs(e);t>au;t=t/au|0)n=pg(t%au)+n;return(pg(t%au)+n).replace(GS,"$1-$2")}var yf,kx=5381,Ii=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rx=function(e){return Ii(kx,e)};function qS(e){return sp(Rx(e)>>>0)}function KS(e){return e.displayName||e.name||"Component"}function xf(e){return typeof e=="string"&&!0}var Ix=typeof Symbol=="function"&&Symbol.for,Ax=Ix?Symbol.for("react.memo"):60115,XS=Ix?Symbol.for("react.forward_ref"):60112,YS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},JS=((yf={})[XS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yf[Ax]=Tx,yf);function hg(e){return("type"in(t=e)&&t.type.$$typeof)===Ax?Tx:"$$typeof"in e?JS[e.$$typeof]:YS;var t}var ZS=Object.defineProperty,e_=Object.getOwnPropertyNames,vg=Object.getOwnPropertySymbols,t_=Object.getOwnPropertyDescriptor,n_=Object.getPrototypeOf,mg=Object.prototype;function Nx(e,t,n){if(typeof t!="string"){if(mg){var r=n_(t);r&&r!==mg&&Nx(e,r,n)}var o=e_(t);vg&&(o=o.concat(vg(t)));for(var i=hg(e),a=hg(t),s=0;s<o.length;++s){var u=o[s];if(!(u in QS||n&&n[u]||a&&u in a||i&&u in i)){var l=t_(t,u);try{ZS(e,u,l)}catch{}}}}return e}function Zi(e){return typeof e=="function"}function jh(e){return typeof e=="object"&&"styledComponentId"in e}function Ao(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function gg(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function up(e,t,n){if(n===void 0&&(n=!1),!n&&!fs(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=up(e[r],t[r]);else if(fs(t))for(var r in t)e[r]=up(e[r],t[r]);return e}function $h(e,t){Object.defineProperty(e,"toString",{value:t})}function Is(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var r_=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Is(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(zh);return n},e}(),Lu=new Map,gl=new Map,wf=1,su=function(e){if(Lu.has(e))return Lu.get(e);for(;gl.has(wf);)wf++;var t=wf++;return Lu.set(e,t),gl.set(t,e),t},o_=function(e,t){Lu.set(e,t),gl.set(t,e)},i_="style[".concat(Qi,"][").concat(Sx,'="').concat(cc,'"]'),a_=new RegExp("^".concat(Qi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),s_=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},u_=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(zh),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var u=s.match(a_);if(u){var l=0|parseInt(u[1],10),c=u[2];l!==0&&(o_(c,l),s_(e,c,u[3]),e.getTag().insertRules(l,o)),o.length=0}else o.push(s)}}};function l_(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Dx=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Qi,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Qi,Ex),r.setAttribute(Sx,cc);var a=l_();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},c_=function(){function e(t){this.element=Dx(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw Is(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),f_=function(){function e(t){this.element=Dx(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),d_=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yg=Wh,p_={isServer:!Wh,useCSSOMInjection:!$S},Px=function(){function e(t,n,r){t===void 0&&(t=Ji),n===void 0&&(n={});var o=this;this.options=Vt(Vt({},p_),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wh&&yg&&(yg=!1,function(i){for(var a=document.querySelectorAll(i_),s=0,u=a.length;s<u;s++){var l=a[s];l&&l.getAttribute(Qi)!==Ex&&(u_(i,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),$h(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",l=function(f){var d=function(v){return gl.get(v)}(f);if(d===void 0)return"continue";var p=i.names.get(d),h=a.getGroup(f);if(p===void 0||h.length===0)return"continue";var m="".concat(Qi,".g").concat(f,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(v){v.length>0&&(g+="".concat(v,","))}),u+="".concat(h).concat(m,'{content:"').concat(g,'"}').concat(zh)},c=0;c<s;c++)l(c);return u}(o)})}return e.registerId=function(t){return su(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Vt(Vt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new d_(o):r?new c_(o):new f_(o)}(this.options),new r_(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(su(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(su(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(su(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),h_=/&/g,v_=/^\s*\/\/.*$/gm;function Fx(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Fx(n.children,t)),n})}function m_(e){var t,n,r,o=e===void 0?Ji:e,i=o.options,a=i===void 0?Ji:i,s=o.plugins,u=s===void 0?fc:s,l=function(d,p,h){return h===n||h.startsWith(n)&&h.endsWith(n)&&h.replaceAll(n,"").length>0?".".concat(t):d},c=u.slice();c.push(function(d){d.type===ac&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(h_,n).replace(r,l))}),a.prefix&&c.push(WS),c.push(BS);var f=function(d,p,h,m){p===void 0&&(p=""),h===void 0&&(h=""),m===void 0&&(m="&"),t=m,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var g=d.replace(v_,""),v=OS(h||p?"".concat(h," ").concat(p," { ").concat(g," }"):g);a.namespace&&(v=Fx(v,a.namespace));var y=[];return ml(v,LS(c.concat(zS(function(x){return y.push(x)})))),y};return f.hash=u.length?u.reduce(function(d,p){return p.name||Is(15),Ii(d,p.name)},kx).toString():"",f}var g_=new Px,lp=m_(),Ox=xe.createContext({shouldForwardProp:void 0,styleSheet:g_,stylis:lp});Ox.Consumer;xe.createContext(void 0);function xg(){return K.useContext(Ox)}var y_=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=lp);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,$h(this,function(){throw Is(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lp),this.name+t.hash},e}(),x_=function(e){return e>="A"&&e<="Z"};function wg(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;x_(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Mx=function(e){return e==null||e===!1||e===""},Bx=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Mx(i)&&(Array.isArray(i)&&i.isCss||Zi(i)?r.push("".concat(wg(o),":"),i,";"):fs(i)?r.push.apply(r,vl(vl(["".concat(o," {")],Bx(i),!1),["}"],!1)):r.push("".concat(wg(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in jS||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mo(e,t,n,r){if(Mx(e))return[];if(jh(e))return[".".concat(e.styledComponentId)];if(Zi(e)){if(!Zi(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Mo(o,t,n,r)}var i;return e instanceof y_?n?(e.inject(n,r),[e.getName(r)]):[e]:fs(e)?Bx(e):Array.isArray(e)?Array.prototype.concat.apply(fc,e.map(function(a){return Mo(a,t,n,r)})):[e.toString()]}function w_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zi(n)&&!jh(n))return!1}return!0}var b_=Rx(cc),C_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&w_(t),this.componentId=n,this.baseHash=Ii(b_,n),this.baseStyle=r,Px.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ao(o,this.staticRulesId);else{var i=gg(Mo(this.rules,t,n,r)),a=sp(Ii(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=Ao(o,a),this.staticRulesId=a}else{for(var u=Ii(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")l+=f;else if(f){var d=gg(Mo(f,t,n,r));u=Ii(u,d+c),l+=d}}if(l){var p=sp(u>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(l,".".concat(p),void 0,this.componentId)),o=Ao(o,p)}}return o},e}(),Lx=xe.createContext(void 0);Lx.Consumer;var bf={};function E_(e,t,n){var r=jh(e),o=e,i=!xf(e),a=t.attrs,s=a===void 0?fc:a,u=t.componentId,l=u===void 0?function(x,w){var b=typeof x!="string"?"sc":dg(x);bf[b]=(bf[b]||0)+1;var C="".concat(b,"-").concat(qS(cc+b+bf[b]));return w?"".concat(w,"-").concat(C):C}(t.displayName,t.parentComponentId):u,c=t.displayName;c===void 0&&function(x){return xf(x)?"styled.".concat(x):"Styled(".concat(KS(x),")")}(e);var f=t.displayName&&t.componentId?"".concat(dg(t.displayName),"-").concat(t.componentId):t.componentId||l,d=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,p=t.shouldForwardProp;if(r&&o.shouldForwardProp){var h=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;p=function(x,w){return h(x,w)&&m(x,w)}}else p=h}var g=new C_(n,f,r?o.componentStyle:void 0);function v(x,w){return function(b,C,E){var S=b.attrs,R=b.componentStyle,k=b.defaultProps,D=b.foldedComponentIds,T=b.styledComponentId,z=b.target,L=xe.useContext(Lx),$=xg(),V=b.shouldForwardProp||$.shouldForwardProp,U=function(re,ue,ce){for(var le,fe=Vt(Vt({},ue),{className:void 0,theme:ce}),ge=0;ge<re.length;ge+=1){var ye=Zi(le=re[ge])?le(fe):le;for(var Ae in ye)fe[Ae]=Ae==="className"?Ao(fe[Ae],ye[Ae]):Ae==="style"?Vt(Vt({},fe[Ae]),ye[Ae]):ye[Ae]}return ue.className&&(fe.className=Ao(fe.className,ue.className)),fe}(S,C,US(C,L,k)||Ji),P=U.as||z,O={};for(var B in U)U[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?O.as=U.forwardedAs:V&&!V(B,P)||(O[B]=U[B]));var X=function(re,ue){var ce=xg(),le=re.generateAndInjectStyles(ue,ce.styleSheet,ce.stylis);return le}(R,U),Q=Ao(D,T);return X&&(Q+=" "+X),U.className&&(Q+=" "+U.className),O[xf(P)&&!_x.has(P)?"class":"className"]=Q,O.ref=E,K.createElement(P,O)}(y,x,w)}var y=xe.forwardRef(v);return y.attrs=d,y.componentStyle=g,y.shouldForwardProp=p,y.foldedComponentIds=r?Ao(o.foldedComponentIds,o.styledComponentId):"",y.styledComponentId=f,y.target=r?o.target:e,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(w){for(var b=[],C=1;C<arguments.length;C++)b[C-1]=arguments[C];for(var E=0,S=b;E<S.length;E++)up(w,S[E],!0);return w}({},o.defaultProps,x):x}}),$h(y,function(){return".".concat(y.styledComponentId)}),i&&Nx(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function bg(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Cg=function(e){return Object.assign(e,{isCss:!0})};function S_(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zi(e)||fs(e))return Cg(Mo(bg(fc,vl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Mo(r):Cg(Mo(bg(r,t)))}function cp(e,t,n){if(n===void 0&&(n=Ji),!t)throw Is(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,S_.apply(void 0,vl([o],i,!1)))};return r.attrs=function(o){return cp(e,t,Vt(Vt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return cp(e,t,Vt(Vt({},n),o))},r}var zx=function(e){return cp(E_,e)},j=zx;_x.forEach(function(e){j[e]=zx(e)});const __=j.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 0px 40px;
    z-index: 4;
    height: 81px;
`,k_=j.img`
    width: 60px;
    &:hover{
        cursor: pointer;
    }
`,R_=j.div`
    display: flex;
    padding: 0px 40px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px solid var(--color-neutral-90);;
    border-radius: 40px;
    margin: 10px 0px;

    &:hover{
        cursor: pointer;
    }
`,I_=j.img`
    width: 35px;
    border-radius: 50px;
`,A_=j.p`
    font-size: 18px;
`,T_=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    background-color: var(--gray);
    top: 81px;
    right: 50px;
`,N_=j.p`
    font-size: 20px;
    padding: 0px 40px;
    font-weight: bold;

    &:hover{
        color: var(--white);
        transition: 0.2s;
        cursor: pointer;
    }
`,D_="/hack-olx-2023/assets/LogoOlx-551233fe.svg",P_="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAqRXhpZgAASUkqAAgAAAABADEBAgAHAAAAGgAAAAAAAABHb29nbGUAAP/bAIQAAwICCAgIDQgICAgICA0KDQgICgoKCAoICAoICggICAgICAgICAgICAgICAgICggICAgJCgoKCAsNCggOCAgJCAEDBAQGBQYKBgYKDQ0KDQ0NDQ0NDQ0NDQ4NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0N/8AAEQgAZABkAwERAAIRAQMRAf/EAB4AAAAHAQEBAQAAAAAAAAAAAAIDBAUHCAkGAAEK/8QAQRAAAgEDAgMFBAcDCwUAAAAAAQIDAAQREiEFBjEHCBNBUSJhcYEJFDJCkbHBI4KhFVKSk6OzwtHh8PEkMzRDcv/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgQFAwb/xAAlEQEBAAICAgEEAgMAAAAAAAAAAQIRAyEEMRJBUWGBocETIuH/2gAMAwEAAhEDEQA/ALgrFXIPPDQBDwUgTSQUAmkt6iZJLbUJEFxa0A2XNpUaZpuralYZrkj3qFCMO9NyZ9c4HPgZkhAvY9snNv7UgUdcvB4qfvUpdV14svjl/DO6JxuB65+GevX359dsVHL22+HLrT2morOm7iR1dryL68VIhLxUkoIeKgaJ5IKR6JZIaZkU8FIjbcW1IzReW9Bme6t6VhjDYLJGUYZVgUYeRDDBHzBNc9Eyf5g5ZNpcS2xzmGd7Vs9W8J3RWO33hFnbbcdc1HJu8Pd+X3hsKjzrjdtGYt40StC140JlpAU0dBiXjoIS8dCRLNDSRhFLFRTIJ4KRmi8hoOGa6io0YXDk2IqFKs8u9Zy0IOPXYOwlhS+jHTcIquPiWguGz5k6cb5qNbXjZ7wx/F1/f9oLkNcNxp3betEq9Xj31koADJSMUyUwJdKCcX2i9qXDeFRiXiN7b2aHOjxXCvJp6iKMZkkI8witQHDcl96nl3iUixWnFbZ5XOmOOTxIJXbyVI7lImZj5KASfSg9JJnjoGjXdRUjMl5FTArhw3xUMoKpf3/uCmO9s7sLs8MtrI3kQjKVRj13juZ8e7VUWh4uV7n7VRkGCR6HG/XY43xVPTfnc23pjWtGvIPrLQiLIoOCHpkjbvA9rS8E4VLxAx+NIumK2hzjx7id1igjz5LrYM5G4RXIyQBQc7U2XuX3vGZTxPjvETJeSgO6xrlYFIDC3i1nSscJJVUVdO2dyzE8pyW3pp4eLNd0x9oH0d1tpzZ38sbY+zMiSRnA9U0Ov4til/lsdL4kvqrDd0znW9a2k4TxR2mv7PTpnLavrdpKXFvKXIBaSJkeCTXl8LE7FjJqM8cvl2z+TjvHdVNt1UnIzXa0wRWpw9RpVXb6QDl/xOExTjrDdoTt92dJIce79o8Z+VQWvGy1lr7z/qh999rI6EAj5qOvxO9V8p29HxZbxbzR1cryIRFLYgqQ0zJJGoJBHep5S+upYQtqMQ4ossoH3hFZ8QcKfLBYAb+ZB2wKhnbI78Mly7cledrlzasA38nY1afB8ZxOPTAKESHoD7KDNV5lps/HY/tH7S3i8OOK1Ms8yeJGmoIunYEvIwIUZIHQn3GpZZS9aT9RH/YbcTzczNM8PhaeGzQzBJPEi1G4sXiAcKmWx4mxQYwSCdRwcVk3Gf5c6lWjuTVhnGm7pykbkPtUXskdd7Xggn5euwRnRCLkfG2dJwfl4dQjtxWTOb+7LW7viD0zsOnu9n9K5Z47rdwz+M03+iNWNPOSBMaiYiWpAjlNNFwnP/CdckUpJIQnC521EaQwH87DsuRvpJFV+RoeLZqy+3Lcw9mvD9X114kEqKWLEgKvQlj6D2QTk49kE7qDSupGjjO0TdoXFeF8SmhtTLHMHjePQVyMMBggSLoORsNjkEiuP+Sb6WLx9dhdlPCrfhnEhBAxWFoGVwQvtSNJEUOQoCqgSQBVwPaHXFPG/HJneTj/AKftYOY1c9srRruqejhsZd6CJ+fOEC5sJ4GGRJbyREeR1xsuP40qUurKxztRqUE+g/IH099R6a+W7X6AI2qVY4TNQkJkagiOV6aJl5hOYm9ylh8VGR+WKjlJpPC6qN7rjrsn7MRttkh2YAj0GlH6+8YxVX6t3DtEvM/G9VwkjWVqGVziYmUOm2Mp4tohwoAwA53xuNjUMtfZdywkm5l+kfcI5jMt14wP/s9n/wCQT/rXKXdZ3P30trwa81xKfdWlj6ZF6r5cmpA3SVLRUvUZTHy/GooMY+eLMwX1xANhHdTRAegjmkQD8FFKxp4ZWyVvij0X2zXmlpok8s9AcTz52scN4auq/vrWzB+yJpY0d8b+xGza3OPJFY1KQlfOWu9ovHOIPa8NaOG0hGuVp0Y3XEY3LRarSLUgtreNtDPJL4k5DxqYbYnUYc8uGPr3/Cz4/HM8u76dJzVfT2ANxDGbiH7Txj/uRHqWiJ2ZPMxncdQSPZFH1NtfFXjtQ7yD3aGOOAxjGWZiuQBncBSd/IZI8vSuOXJMvS38enC9k3a7aXUkaLIIpNQHhSEK+3ku+H23Gkk+oByB0vDnjfx94yMuXHKflf7l2UeCvwq9j6UL7H3MlTgIi1SFONu3sfOl9UKyP7z3D/B5hvkAAH1kyf1yRzH8TJmnpd48um3ay1zUzRzbzZDZW0t3cuI4Io2mlc9FSMFm+LHGFUbsxAG5FS1b1EWZPbX39+LcR1RWjHhdqdgsDH626nUP2t2MMhKlW02oh0nI8SUYY2ceOT2jtV284g0khkdmeRjl3cs0jn1d2Jdj72JPvrtOgUcE5imtpluLeV4Z0bVHIhw6Hz9zKRlWRgUdSVYEEgmUlmr6GNsu57WF5e7/ALxWJPDurWzvBgAMBJBIcdWfSZYiW2+xFGBvtuMVMvHn0W8fJyntHHaP3hWv1YRcPtrN3PtyI8jtjzAUrGgLebFSeu3mOM8PHe665ebnZqIijjA8s+tXscdKFu0qdkPeN4rweVTBcyS2wwHtJnZ7Z0G2hA2o2xwfZkg0EELqWRQY2LhKJWmnZp2k23FrGO/tS3hSA5VhiSJ0JWSGQdA8bgqSMqwwyllZWNWzScP2d6DpZay+yaVKsuO/TZ+FzHOw28SOGY+8+EkWf7LFEm1jDkkxkbHCaoKrOn6Qrt0kuL08FhdltbdVkuVGwuLp1EqB9vbS1jaMouSnjNIWUtBEyWOPH6ltSq4f8On6fqKskTxy/wCf+/4igxgemi+M1AFtSMDNACoC7f0cnNuYrywOMLJHex+p8ZTBNt6DwIN8/e8sb1uSdpxcIyVz2kMt5NjUaizY+kMhxx5D62UTfhLcr/hrph6OtXuYOYorWCS5nYJDFG88rHoqRKXdj8FUmuWy9MV+feZ3vLqW8kBEk00l06ltWhp5HlaPV5iPWUHQaQNhgCr2Mc5+XHyvsR+Hw3x/HH8KaWhUL7/P89/1oFHZpk8zUwARSLTwFBjBSCeu49zN9X5gSMkhZ7eW29xZQtygPln/AKcgH1OPvVyz7SaM664JWjbV9jUaIzo+kKlH8txdf/Aj/v7yjGLHHljJ3v8AS9nfa41JDy3cmNtJZ7eBjtvHNdQRyrv5PGWQ+4np1BhN1WZScVfDnH878+tXdaLRkuDgkeX/AAaZgRdT8qYKUNNB4mggRUTDC04AqKTsOxLiTxcasnQ4b69An7ssyQuP3o5GX51zy9JtX3NcEgrdtj8M1Cl9WcHf3lJ46M+VpEB/TnP5k0sFjC9P/9k=";/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ds.apply(this,arguments)}var qr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(qr||(qr={}));const Eg="popstate";function F_(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return fp("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Wx(o)}return M_(t,n,null,e)}function st(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uh(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function O_(){return Math.random().toString(36).substr(2,8)}function Sg(e,t){return{usr:e.state,key:e.key,idx:t}}function fp(e,t,n,r){return n===void 0&&(n=null),ds({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?la(t):t,{state:n,key:t&&t.key||r||O_()})}function Wx(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function la(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M_(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=qr.Pop,u=null,l=c();l==null&&(l=0,a.replaceState(ds({},a.state,{idx:l}),""));function c(){return(a.state||{idx:null}).idx}function f(){s=qr.Pop;let g=c(),v=g==null?null:g-l;l=g,u&&u({action:s,location:m.location,delta:v})}function d(g,v){s=qr.Push;let y=fp(m.location,g,v);n&&n(y,g),l=c()+1;let x=Sg(y,l),w=m.createHref(y);try{a.pushState(x,"",w)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;o.location.assign(w)}i&&u&&u({action:s,location:m.location,delta:1})}function p(g,v){s=qr.Replace;let y=fp(m.location,g,v);n&&n(y,g),l=c();let x=Sg(y,l),w=m.createHref(y);a.replaceState(x,"",w),i&&u&&u({action:s,location:m.location,delta:0})}function h(g){let v=o.location.origin!=="null"?o.location.origin:o.location.href,y=typeof g=="string"?g:Wx(g);return st(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let m={get action(){return s},get location(){return e(o,a)},listen(g){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Eg,f),u=g,()=>{o.removeEventListener(Eg,f),u=null}},createHref(g){return t(o,g)},createURL:h,encodeLocation(g){let v=h(g);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:d,replace:p,go(g){return a.go(g)}};return m}var _g;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_g||(_g={}));function B_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?la(t):t,o=Ux(r.pathname||"/",n);if(o==null)return null;let i=jx(e);L_(i);let a=null;for(let s=0;a==null&&s<i.length;++s)a=q_(i[s],Y_(o));return a}function jx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(st(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let l=Bo([r,u.relativePath]),c=n.concat(u);i.children&&i.children.length>0&&(st(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),jx(i.children,t,c,l)),!(i.path==null&&!i.index)&&t.push({path:l,score:H_(l,i.index),routesMeta:c})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of $x(i.path))o(i,a,u)}),t}function $x(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=$x(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function L_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const z_=/^:\w+$/,W_=3,j_=2,$_=1,U_=10,V_=-2,kg=e=>e==="*";function H_(e,t){let n=e.split("/"),r=n.length;return n.some(kg)&&(r+=V_),t&&(r+=j_),n.filter(o=>!kg(o)).reduce((o,i)=>o+(z_.test(i)?W_:i===""?$_:U_),r)}function G_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function q_(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let a=0;a<n.length;++a){let s=n[a],u=a===n.length-1,l=o==="/"?t:t.slice(o.length)||"/",c=K_({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let f=s.route;i.push({params:r,pathname:Bo([o,c.pathname]),pathnameBase:nk(Bo([o,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(o=Bo([o,c.pathnameBase]))}return i}function K_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X_(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((l,c,f)=>{if(c==="*"){let d=s[f]||"";a=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=Q_(s[f]||"",c),l},{}),pathname:i,pathnameBase:a,pattern:e}}function X_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Uh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Y_(e){try{return decodeURI(e)}catch(t){return Uh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Q_(e,t){try{return decodeURIComponent(e)}catch(n){return Uh(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ux(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function J_(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?la(e):e;return{pathname:n?n.startsWith("/")?n:Z_(n,t):t,search:rk(r),hash:ok(o)}}function Z_(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Cf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ek(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tk(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=la(e):(o=ds({},e),st(!o.pathname||!o.pathname.includes("?"),Cf("?","pathname","search",o)),st(!o.pathname||!o.pathname.includes("#"),Cf("#","pathname","hash",o)),st(!o.search||!o.search.includes("#"),Cf("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(r||a==null)s=n;else{let f=t.length-1;if(a.startsWith("..")){let d=a.split("/");for(;d[0]==="..";)d.shift(),f-=1;o.pathname=d.join("/")}s=f>=0?t[f]:"/"}let u=J_(o,s),l=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(l||c)&&(u.pathname+="/"),u}const Bo=e=>e.join("/").replace(/\/\/+/g,"/"),nk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ok=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ik(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vx=["post","put","patch","delete"];new Set(Vx);const ak=["get",...Vx];new Set(ak);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}const Vh=K.createContext(null),sk=K.createContext(null),dc=K.createContext(null),pc=K.createContext(null),Ko=K.createContext({outlet:null,matches:[],isDataRoute:!1}),Hx=K.createContext(null);function hc(){return K.useContext(pc)!=null}function As(){return hc()||st(!1),K.useContext(pc).location}function Gx(e){K.useContext(dc).static||K.useLayoutEffect(e)}function Xo(){let{isDataRoute:e}=K.useContext(Ko);return e?bk():uk()}function uk(){hc()||st(!1);let e=K.useContext(Vh),{basename:t,navigator:n}=K.useContext(dc),{matches:r}=K.useContext(Ko),{pathname:o}=As(),i=JSON.stringify(ek(r).map(u=>u.pathnameBase)),a=K.useRef(!1);return Gx(()=>{a.current=!0}),K.useCallback(function(u,l){if(l===void 0&&(l={}),!a.current)return;if(typeof u=="number"){n.go(u);return}let c=tk(u,JSON.parse(i),o,l.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Bo([t,c.pathname])),(l.replace?n.replace:n.push)(c,l.state,l)},[t,n,i,o,e])}function lk(){let{matches:e}=K.useContext(Ko),t=e[e.length-1];return t?t.params:{}}function ck(e,t){return fk(e,t)}function fk(e,t,n){hc()||st(!1);let{navigator:r}=K.useContext(dc),{matches:o}=K.useContext(Ko),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=As(),l;if(t){var c;let m=typeof t=="string"?la(t):t;s==="/"||(c=m.pathname)!=null&&c.startsWith(s)||st(!1),l=m}else l=u;let f=l.pathname||"/",d=s==="/"?f:f.slice(s.length)||"/",p=B_(e,{pathname:d}),h=mk(p&&p.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Bo([s,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:Bo([s,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),o,n);return t&&h?K.createElement(pc.Provider,{value:{location:yl({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:qr.Pop}},h):h}function dk(){let e=wk(),t=ik(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return K.createElement(K.Fragment,null,K.createElement("h2",null,"Unexpected Application Error!"),K.createElement("h3",{style:{fontStyle:"italic"}},t),n?K.createElement("pre",{style:o},n):null,i)}const pk=K.createElement(dk,null);class hk extends K.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?K.createElement(Ko.Provider,{value:this.props.routeContext},K.createElement(Hx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vk(e){let{routeContext:t,match:n,children:r}=e,o=K.useContext(Vh);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),K.createElement(Ko.Provider,{value:t},r)}function mk(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,a=(r=n)==null?void 0:r.errors;if(a!=null){let s=i.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id]));s>=0||st(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,u,l)=>{let c=u.route.id?a==null?void 0:a[u.route.id]:null,f=null;n&&(f=u.route.errorElement||pk);let d=t.concat(i.slice(0,l+1)),p=()=>{let h;return c?h=f:u.route.Component?h=K.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=s,K.createElement(vk,{match:u,routeContext:{outlet:s,matches:d,isDataRoute:n!=null},children:h})};return n&&(u.route.ErrorBoundary||u.route.errorElement||l===0)?K.createElement(hk,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var qx=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qx||{}),xl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xl||{});function gk(e){let t=K.useContext(Vh);return t||st(!1),t}function yk(e){let t=K.useContext(sk);return t||st(!1),t}function xk(e){let t=K.useContext(Ko);return t||st(!1),t}function Kx(e){let t=xk(),n=t.matches[t.matches.length-1];return n.route.id||st(!1),n.route.id}function wk(){var e;let t=K.useContext(Hx),n=yk(xl.UseRouteError),r=Kx(xl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function bk(){let{router:e}=gk(qx.UseNavigateStable),t=Kx(xl.UseNavigateStable),n=K.useRef(!1);return Gx(()=>{n.current=!0}),K.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,yl({fromRouteId:t},i)))},[e,t])}function Xx(e){st(!1)}function Ck(e){let{basename:t="/",children:n=null,location:r,navigationType:o=qr.Pop,navigator:i,static:a=!1}=e;hc()&&st(!1);let s=t.replace(/^\/*/,"/"),u=K.useMemo(()=>({basename:s,navigator:i,static:a}),[s,i,a]);typeof r=="string"&&(r=la(r));let{pathname:l="/",search:c="",hash:f="",state:d=null,key:p="default"}=r,h=K.useMemo(()=>{let m=Ux(l,s);return m==null?null:{location:{pathname:m,search:c,hash:f,state:d,key:p},navigationType:o}},[s,l,c,f,d,p,o]);return h==null?null:K.createElement(dc.Provider,{value:u},K.createElement(pc.Provider,{children:n,value:h}))}function Ek(e){let{children:t,location:n}=e;return ck(dp(t),n)}new Promise(()=>{});function dp(e,t){t===void 0&&(t=[]);let n=[];return K.Children.forEach(e,(r,o)=>{if(!K.isValidElement(r))return;let i=[...t,o];if(r.type===K.Fragment){n.push.apply(n,dp(r.props.children,i));return}r.type!==Xx&&st(!1),!r.props.index||!r.props.children||st(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=dp(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Sk="startTransition",Rg=fC[Sk];function _k(e){let{basename:t,children:n,future:r,window:o}=e,i=K.useRef();i.current==null&&(i.current=F_({window:o,v5Compat:!0}));let a=i.current,[s,u]=K.useState({action:a.action,location:a.location}),{v7_startTransition:l}=r||{},c=K.useCallback(f=>{l&&Rg?Rg(()=>u(f)):u(f)},[u,l]);return K.useLayoutEffect(()=>a.listen(c),[a,c]),K.createElement(Ck,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a})}var Ig;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Ig||(Ig={}));var Ag;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ag||(Ag={}));const Hh=K.createContext(),kk=({children:e})=>{const[t,n]=K.useState({Nome:"Victor",TempoConta:100,Vendas:2}),r=(o,i,a)=>{n({Nome:o,TempoConta:i,Vendas:a})};return A.jsx(Hh.Provider,{value:{user:t,changeUser:r},children:e})},Rk=[{Nome:"Victor",TempoConta:100,Vendas:2},{Nome:"Picanha",TempoConta:20,Vendas:1},{Nome:"Caio",TempoConta:1,Vendas:2},{Nome:"Fellipe",TempoConta:90,Vendas:5}],Ik=()=>{const e=Xo(),{user:t,changeUser:n}=K.useContext(Hh),[r,o]=K.useState(!1);return A.jsxs(__,{children:[A.jsx(k_,{src:D_,onClick:()=>e("/")}),A.jsxs(R_,{onClick:()=>o(!r),children:[A.jsx(I_,{src:P_}),A.jsx(A_,{children:t.Nome})]}),r?A.jsx(T_,{children:Rk.map(i=>{const{Nome:a,TempoConta:s,Vendas:u}=i;return A.jsx(N_,{onClick:()=>{n(a,s,u),o(!r)},children:i.Nome})})}):null]})},Ak=j.div`
   display: flex;
   flex: 1;
   font-family: Arial, Helvetica, sans-serif;
   margin-bottom: 40px;
   padding: 50px;
    flex-direction: column;
`,Tk=j.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    
`,Nk=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`,Dk=j.img`
    width: 50%;
    height: 500px;
`,Ca=j.img`
    width: 80%;
    height: 75px;
    border-radius: 10px;
    padding: 6px;
`,Pk=j.div`
    display: flex;
    flex-direction: column;
`,Fk=j.h1`
    font-size: 20px;
    margin-bottom: 5px;
    color: var(--light-black);
    font-weight: 600;
`,Ok=j.h2`
    font-size: 16px;
    color: var(--light-black);
    font-weight: lighter;
`,Mk=j.h2`
    font-size: 18px;
    color: var(--light-black);
    font-weight: bold;
    margin-bottom: 10px;
`,Bk=j.p`
    font-size: 18px;
    color: var(--light-black);
    font-weight: lighter;
    width: 90%;
`,Lk=j.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
`,zk=j.div`
    width: 30%;
`,Wk=j.div`
    display: flex;
    flex-direction: row;
    margin: 0px;
`,pp="/hack-olx-2023/assets/Iphone-5d623536.svg",jk="/hack-olx-2023/assets/Iphonemesafrente-9575cb19.jpg",$k="/hack-olx-2023/assets/Iphonetelabaixo1-222a5f63.jpg",Uk="/hack-olx-2023/assets/Iphonetelabaixo2-5208e092.jpg",Vk="/hack-olx-2023/assets/Saudebateria-a76ab068.jpg",Hk=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--orange);
    border-radius: 50px;
    padding: 1px 40px;
    margin-right: 20px;
    font-weight: bold;

    transition: 0.2s;
    color: var(--orange);

    &:hover{
        cursor: pointer;
        border: 1px solid transparent;
    }

`,Gk=j.p`
    
    font-size: 14px;
`;var Yx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tg=xe.createContext&&xe.createContext(Yx),ao=globalThis&&globalThis.__assign||function(){return ao=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ao.apply(this,arguments)},qk=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function Qx(e){return e&&e.map(function(t,n){return xe.createElement(t.tag,ao({key:n},t.attr),Qx(t.child))})}function ca(e){return function(t){return xe.createElement(Kk,ao({attr:ao({},e.attr)},t),Qx(e.child))}}function Kk(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,a=qk(e,["attr","size","title"]),s=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),xe.createElement("svg",ao({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,a,{className:u,style:ao(ao({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&xe.createElement("title",null,i),e.children)};return Tg!==void 0?xe.createElement(Tg.Consumer,null,function(n){return t(n)}):t(Yx)}function Xk(e){return ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]})(e)}function Yk(e){return ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function Qk(e){return ca({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(e)}function Jk(e){return ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}}]})(e)}function Zk(e){return ca({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.68 160.68 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3 0 66.2 53.8 120 120 120s120-53.8 120-120-53.8-120-120-120zm0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52-52-23.3-52-52 23.3-52 52-52zM312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88 88 39.5 88 88-39.5 88-88 88zm440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52z"}}]})(e)}function eR(e){return ca({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}},{tag:"line",attr:{x1:"4",y1:"22",x2:"4",y2:"15"}}]})(e)}const Ef=({type:e,text:t})=>{const n=()=>{switch(e){case"fav":return A.jsx(Jk,{className:"icon",color:"orange",size:20});case"share":return A.jsx(Zk,{className:"icon",color:"orange",size:20});case"flag":return A.jsx(eR,{className:"icon",color:"orange",size:20})}};return A.jsxs(Hk,{children:[n(),A.jsx(Gk,{children:t})]})},tR=j.div`
    width: 100%;
`,nR=j.div`
    margin-top: 10%;
    width: 80%;
    background-color: #6E0AD6;
    height: 10vh;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 0px;
    padding-top: 0px;

    &::after{
        content: "";
        position:absolute;
        margin:-20px;
        width: 49.432px;
        height: 49.432px;
        transform:rotate(45deg);
        background-color: #6E0AD6; /* to see where it is */
        border-radius: 10px;
    }
`,rR=j.span`
    font-size: 25px;
    color: #fff;
    margin-left: 20%;
`,Ng=j.h1`
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 30px 0px;
    margin-bottom: 10px;
    color: var(--light-black);
    font-weight: lighter;
`,Sf=j.span`
    font-size: 14px;
    display: flex;
    justify-content: center;
    color: var(--gray);
    margin: 20px 0px;
    font-weight: lighter;
`,oR=j.div`
    background-color: #F9F9F9;
    margin-top: 10%;
    width: 80%;
    border: 2px solid #D8D8D8;
    padding: 20px 0px;
    border-radius: 5px;
`,iR=j.button`
    background-color: #F28000;
    border: 0px;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    padding: 10px 35px;
`,aR=j.button`
    background-color: #FDF0E2;
    border: 1px solid #F28000;
    border-radius: 20px;
    cursor: pointer;
    color: #F28000;
    margin: 0px;
    font-size: 18px;
    padding: 10px 35px;
`,sR=j.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 5%;
    justify-content: center;
`,uR=j.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`,lR=j.p`
    color:  var(--light-black);
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
`,Dg=j.p`
    color:  #993399;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
`,cR=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: line;
`,fR=j.img`
    width: 96px;
    height: 44px;
`,dR=j.img`
    width: 80px;
    height: 80px;
`,pR=j.img`
    margin-top: 20px;
    background-color: #F9F9F9;
    width: 80%;
    border: 2px solid #D8D8D8;
    border-radius: 5px;
`,hR=j.div`
    background-color: #F9F9F9;
    margin-top: 20px;
    width: 73%;
    border: 2px solid #D8D8D8;
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 4%;
`,vR=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`,mR="/hack-olx-2023/assets/reputacao-6d4be949.png",gR="/hack-olx-2023/assets/verificadoredes-e0ffad7f.svg",yR="/hack-olx-2023/assets/verificadoseg-ffec1dd7.svg",xR=()=>A.jsxs(tR,{children:[A.jsx(nR,{children:A.jsx(rR,{children:"R$ 4300"})}),A.jsxs(oR,{children:[A.jsx(Ng,{children:"Claudio Junior"}),A.jsxs(sR,{children:[A.jsx(iR,{children:"Solicitar"}),A.jsx(aR,{children:"Chat"})]}),A.jsx(Sf,{children:"Ultimo acesso há 18 horas"}),A.jsxs(uR,{children:[A.jsxs(cR,{children:[A.jsx(Sf,{style:{margin:5,fontSize:18,color:"#1a1d23"},children:"Verificado com:"}),A.jsx(fR,{src:gR,alt:"Foto de um ai fome"})]}),A.jsx(Sf,{style:{marginBottom:15},children:"Na OLX desde agosto de 2015"}),A.jsx(Dg,{children:"Ver todos os anúncios"})]})]}),A.jsx(pR,{src:mR,alt:"Ranking de Reputação"}),A.jsxs(hR,{children:[A.jsx(dR,{src:yR,alt:"Foto de um ai fome"}),A.jsxs(vR,{children:[A.jsx(Ng,{style:{fontSize:20},children:"Dicas de Segurança"}),A.jsx(lR,{style:{fontSize:16},children:"Não faça pagamentos antes de verificar o que..."}),A.jsx(Dg,{children:"Ver todos os anúncios."})]})]})]}),wR=j.div`
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: row;
`,Pg=j.p`
    font-size: 25px;
    font-style: normal;
`,bR="/hack-olx-2023/assets/SmartLogo-c113fd13.svg",CR=j.div`
    width: 300px;
    display: flex;
    justify-content: end;
    align-items: center;
    flex-direction: column;
    height: 400px;
`,ER=j.img`
    max-width: 150px;
    border-radius: 10px;
`,SR=j.p`
    color: #1A1D23;
    font-size: 20px;
`,_R=j.p`
    font-weight: bold;
    font-size: 30px;
`,kR=j.div`
    width: 50%;
    max-height: 100px;
    background-color: black;
    border: 2px solid #9027B0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;

    `,RR=j.span`
    font-size: 15px;
    color: white;
`,IR=j.img`
    width: 100px;
`,AR=({title:e,image:t,price:n,isSmart:r})=>(Xo(),A.jsxs(CR,{children:[A.jsx(ER,{src:t}),A.jsx(SR,{children:e}),A.jsxs(_R,{children:["R$",n]}),r?A.jsxs(kR,{children:[A.jsx(RR,{children:"Produto"}),A.jsx(IR,{src:bR})]}):A.jsx(A.Fragment,{})]})),TR="/hack-olx-2023/assets/Iphonemesafrente-0e18a627.svg",NR="/hack-olx-2023/assets/Iphonetelabaixo1-9fe682dc.svg",DR="/hack-olx-2023/assets/Iphonetelabaixo2-447d73cf.svg",PR=[{title:"iPhone",image:pp,price:"5.000",isSmart:!0},{title:"iPhone usado barato",image:TR,price:"3.200",isSmart:!0},{title:"iPhone usado",image:NR,price:"3.200",isSmart:!0},{title:"iPhone usado barato",image:DR,price:"3.200",isSmart:!0}],FR=()=>A.jsxs(A.Fragment,{children:[A.jsx(Pg,{children:"Também pode te interessar"}),A.jsx(wR,{children:PR.map((e,t)=>A.jsx(AR,{title:e.title,image:e.image,price:e.price,isSmart:e.isSmart},t))}),A.jsx(Pg,{children:"Similares a este anúncio"})]}),OR=()=>(Xo(),A.jsxs(Ak,{children:[A.jsxs(Wk,{children:[A.jsxs(Tk,{children:[A.jsx(Fk,{children:"iPhone 13 Pro"}),A.jsx(Ok,{children:"Publicado em 14/10 às 16:32 - cód. 1235163848"}),A.jsxs(Nk,{children:[A.jsx(Dk,{src:pp,alt:"Foto de um ai fome"}),A.jsxs(Pk,{children:[A.jsx(Ca,{src:pp,alt:"Foto de um ai fome"}),A.jsx(Ca,{src:jk,alt:"Foto de um ai fome"}),A.jsx(Ca,{src:$k,alt:"Foto de um ai fome"}),A.jsx(Ca,{src:Uk,alt:"Foto de um ai fome"}),A.jsx(Ca,{src:Vk,alt:"Foto de um ai fome"})]})]}),A.jsx(Mk,{children:"R$ 4.300,00"}),A.jsx(Bk,{children:"Armazenamento de 256GB, cor Azul Sierra, saúde da bateria 86%, não possui detalhes, foi comprado no inicio de 2022 e funciona perfeitamente."}),A.jsxs(Lk,{children:[A.jsx(Ef,{type:"fav",text:"Favoritar"}),A.jsx(Ef,{type:"share",text:"Compartilhar"}),A.jsx(Ef,{type:"flag",text:"Denunciar"})]})]}),A.jsx(zk,{children:A.jsx(xR,{})})]}),A.jsx(FR,{})]})),MR=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
`,BR=j.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
`,LR=j.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
`,zR=j.h2`
    font-size: 17px;
`,WR=j.div`
    border-radius: 4px;
    border: 2px solid var(--color-neutral-90);
    width: 80%;
    padding: 30px 40px;
    display: grid;
`,jR=j.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    /* width: 50%; */
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`,$R="/hack-olx-2023/assets/locationPin-17fc8b7d.svg",UR="/hack-olx-2023/assets/telephoneIcon-e2b0bad8.svg",VR="/hack-olx-2023/assets/exclamationIcon-461c7253.svg",HR=j.div`
   display: flex;
   flex-direction: column;
`,GR=j.p`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
`,qR=j.select`
    border-radius: 4px;
    font-size: 20px;
    max-width: 60%;
    padding: 10px 0px;
    padding-left: 10px;
`,ai=({label:e,options:t,onChangeFunction:n})=>A.jsxs(HR,{children:[A.jsxs(GR,{children:[e,"*"]}),A.jsxs(qR,{onChange:r=>n(r),children:[A.jsx("option",{value:"",children:"Selecione uma opção"}),t.map((r,o)=>A.jsx("option",{value:r,children:r},o))]})]}),KR=j.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
`,XR=j.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
`,YR=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
`,QR=j.textarea`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px 40px 0px;
    padding-left: 2%;
`,Ea=({title:e,hasTextArea:t,valueInput:n,onChangeFunction:r})=>A.jsxs(KR,{children:[A.jsx(XR,{children:e}),t?A.jsx(QR,{onChange:o=>r(o),value:n}):A.jsx(YR,{onChange:o=>r(o),value:n})]}),JR=j.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
`,ZR=j.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
    font-weight: bold;
`,eI=j.span`
    font-size: 16px;
    color: var(--text-color);
`,tI=j.div`
    display: flex;
`;j.img`
    width: 150px;
    margin-left: 0px;
    margin-right: 20px;
`;const nI=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
`,rI=j.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    width: fit-content;
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`;function Jx(e,t){return function(){return e.apply(t,arguments)}}const{toString:oI}=Object.prototype,{getPrototypeOf:Gh}=Object,vc=(e=>t=>{const n=oI.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),or=e=>(e=e.toLowerCase(),t=>vc(t)===e),mc=e=>t=>typeof t===e,{isArray:fa}=Array,ps=mc("undefined");function iI(e){return e!==null&&!ps(e)&&e.constructor!==null&&!ps(e.constructor)&&xn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Zx=or("ArrayBuffer");function aI(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Zx(e.buffer),t}const sI=mc("string"),xn=mc("function"),e2=mc("number"),gc=e=>e!==null&&typeof e=="object",uI=e=>e===!0||e===!1,zu=e=>{if(vc(e)!=="object")return!1;const t=Gh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},lI=or("Date"),cI=or("File"),fI=or("Blob"),dI=or("FileList"),pI=e=>gc(e)&&xn(e.pipe),hI=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xn(e.append)&&((t=vc(e))==="formdata"||t==="object"&&xn(e.toString)&&e.toString()==="[object FormData]"))},vI=or("URLSearchParams"),mI=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ts(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),fa(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(r=0;r<a;r++)s=i[r],t.call(null,e[s],s,e)}}function t2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const n2=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),r2=e=>!ps(e)&&e!==n2;function hp(){const{caseless:e}=r2(this)&&this||{},t={},n=(r,o)=>{const i=e&&t2(t,o)||o;zu(t[i])&&zu(r)?t[i]=hp(t[i],r):zu(r)?t[i]=hp({},r):fa(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&Ts(arguments[r],n);return t}const gI=(e,t,n,{allOwnKeys:r}={})=>(Ts(t,(o,i)=>{n&&xn(o)?e[i]=Jx(o,n):e[i]=o},{allOwnKeys:r}),e),yI=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),xI=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},wI=(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=n!==!1&&Gh(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},bI=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},CI=e=>{if(!e)return null;if(fa(e))return e;let t=e.length;if(!e2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},EI=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Gh(Uint8Array)),SI=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},_I=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},kI=or("HTMLFormElement"),RI=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Fg=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),II=or("RegExp"),o2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ts(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},AI=e=>{o2(e,(t,n)=>{if(xn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xn(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},TI=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return fa(e)?r(e):r(String(e).split(t)),n},NI=()=>{},DI=(e,t)=>(e=+e,Number.isFinite(e)?e:t),_f="abcdefghijklmnopqrstuvwxyz",Og="0123456789",i2={DIGIT:Og,ALPHA:_f,ALPHA_DIGIT:_f+_f.toUpperCase()+Og},PI=(e=16,t=i2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function FI(e){return!!(e&&xn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const OI=e=>{const t=new Array(10),n=(r,o)=>{if(gc(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=fa(r)?[]:{};return Ts(r,(a,s)=>{const u=n(a,o+1);!ps(u)&&(i[s]=u)}),t[o]=void 0,i}}return r};return n(e,0)},MI=or("AsyncFunction"),BI=e=>e&&(gc(e)||xn(e))&&xn(e.then)&&xn(e.catch),G={isArray:fa,isArrayBuffer:Zx,isBuffer:iI,isFormData:hI,isArrayBufferView:aI,isString:sI,isNumber:e2,isBoolean:uI,isObject:gc,isPlainObject:zu,isUndefined:ps,isDate:lI,isFile:cI,isBlob:fI,isRegExp:II,isFunction:xn,isStream:pI,isURLSearchParams:vI,isTypedArray:EI,isFileList:dI,forEach:Ts,merge:hp,extend:gI,trim:mI,stripBOM:yI,inherits:xI,toFlatObject:wI,kindOf:vc,kindOfTest:or,endsWith:bI,toArray:CI,forEachEntry:SI,matchAll:_I,isHTMLForm:kI,hasOwnProperty:Fg,hasOwnProp:Fg,reduceDescriptors:o2,freezeMethods:AI,toObjectSet:TI,toCamelCase:RI,noop:NI,toFiniteNumber:DI,findKey:t2,global:n2,isContextDefined:r2,ALPHABET:i2,generateString:PI,isSpecCompliantForm:FI,toJSONObject:OI,isAsyncFn:MI,isThenable:BI};function Se(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}G.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const a2=Se.prototype,s2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s2[e]={value:e}});Object.defineProperties(Se,s2);Object.defineProperty(a2,"isAxiosError",{value:!0});Se.from=(e,t,n,r,o,i)=>{const a=Object.create(a2);return G.toFlatObject(e,a,function(u){return u!==Error.prototype},s=>s!=="isAxiosError"),Se.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const LI=null;function vp(e){return G.isPlainObject(e)||G.isArray(e)}function u2(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function Mg(e,t,n){return e?e.concat(t).map(function(o,i){return o=u2(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function zI(e){return G.isArray(e)&&!e.some(vp)}const WI=G.toFlatObject(G,{},null,function(t){return/^is[A-Z]/.test(t)});function yc(e,t,n){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!G.isUndefined(g[m])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(o))throw new TypeError("visitor must be a function");function l(h){if(h===null)return"";if(G.isDate(h))return h.toISOString();if(!u&&G.isBlob(h))throw new Se("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(h)||G.isTypedArray(h)?u&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function c(h,m,g){let v=h;if(h&&!g&&typeof h=="object"){if(G.endsWith(m,"{}"))m=r?m:m.slice(0,-2),h=JSON.stringify(h);else if(G.isArray(h)&&zI(h)||(G.isFileList(h)||G.endsWith(m,"[]"))&&(v=G.toArray(h)))return m=u2(m),v.forEach(function(x,w){!(G.isUndefined(x)||x===null)&&t.append(a===!0?Mg([m],w,i):a===null?m:m+"[]",l(x))}),!1}return vp(h)?!0:(t.append(Mg(g,m,i),l(h)),!1)}const f=[],d=Object.assign(WI,{defaultVisitor:c,convertValue:l,isVisitable:vp});function p(h,m){if(!G.isUndefined(h)){if(f.indexOf(h)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(h),G.forEach(h,function(v,y){(!(G.isUndefined(v)||v===null)&&o.call(t,v,G.isString(y)?y.trim():y,m,d))===!0&&p(v,m?m.concat(y):[y])}),f.pop()}}if(!G.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Bg(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function qh(e,t){this._pairs=[],e&&yc(e,this,t)}const l2=qh.prototype;l2.append=function(t,n){this._pairs.push([t,n])};l2.toString=function(t){const n=t?function(r){return t.call(this,r,Bg)}:Bg;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function jI(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function c2(e,t,n){if(!t)return e;const r=n&&n.encode||jI,o=n&&n.serialize;let i;if(o?i=o(t,n):i=G.isURLSearchParams(t)?t.toString():new qh(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class $I{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){G.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Lg=$I,f2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},UI=typeof URLSearchParams<"u"?URLSearchParams:qh,VI=typeof FormData<"u"?FormData:null,HI=typeof Blob<"u"?Blob:null,GI=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qI=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Yn={isBrowser:!0,classes:{URLSearchParams:UI,FormData:VI,Blob:HI},isStandardBrowserEnv:GI,isStandardBrowserWebWorkerEnv:qI,protocols:["http","https","file","blob","url","data"]};function KI(e,t){return yc(e,new Yn.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Yn.isNode&&G.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function XI(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function YI(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function d2(e){function t(n,r,o,i){let a=n[i++];const s=Number.isFinite(+a),u=i>=n.length;return a=!a&&G.isArray(o)?o.length:a,u?(G.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!s):((!o[a]||!G.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&G.isArray(o[a])&&(o[a]=YI(o[a])),!s)}if(G.isFormData(e)&&G.isFunction(e.entries)){const n={};return G.forEachEntry(e,(r,o)=>{t(XI(r),o,n,0)}),n}return null}function QI(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Kh={transitional:f2,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=G.isObject(t);if(i&&G.isHTMLForm(t)&&(t=new FormData(t)),G.isFormData(t))return o&&o?JSON.stringify(d2(t)):t;if(G.isArrayBuffer(t)||G.isBuffer(t)||G.isStream(t)||G.isFile(t)||G.isBlob(t))return t;if(G.isArrayBufferView(t))return t.buffer;if(G.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return KI(t,this.formSerializer).toString();if((s=G.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return yc(s?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),QI(t)):t}],transformResponse:[function(t){const n=this.transitional||Kh.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&G.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Se.from(s,Se.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Yn.classes.FormData,Blob:Yn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],e=>{Kh.headers[e]={}});const Xh=Kh,JI=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ZI=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&JI[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},zg=Symbol("internals");function Sa(e){return e&&String(e).trim().toLowerCase()}function Wu(e){return e===!1||e==null?e:G.isArray(e)?e.map(Wu):String(e)}function e3(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const t3=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function kf(e,t,n,r,o){if(G.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!G.isString(t)){if(G.isString(r))return t.indexOf(r)!==-1;if(G.isRegExp(r))return r.test(t)}}function n3(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function r3(e,t){const n=G.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class xc{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(s,u,l){const c=Sa(u);if(!c)throw new Error("header name must be a non-empty string");const f=G.findKey(o,c);(!f||o[f]===void 0||l===!0||l===void 0&&o[f]!==!1)&&(o[f||u]=Wu(s))}const a=(s,u)=>G.forEach(s,(l,c)=>i(l,c,u));return G.isPlainObject(t)||t instanceof this.constructor?a(t,n):G.isString(t)&&(t=t.trim())&&!t3(t)?a(ZI(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Sa(t),t){const r=G.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return e3(o);if(G.isFunction(n))return n.call(this,o,r);if(G.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Sa(t),t){const r=G.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||kf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=Sa(a),a){const s=G.findKey(r,a);s&&(!n||kf(r,r[s],s,n))&&(delete r[s],o=!0)}}return G.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||kf(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return G.forEach(this,(o,i)=>{const a=G.findKey(r,i);if(a){n[a]=Wu(o),delete n[i];return}const s=t?n3(i):String(i).trim();s!==i&&delete n[i],n[s]=Wu(o),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return G.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&G.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[zg]=this[zg]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Sa(a);r[s]||(r3(o,a),r[s]=!0)}return G.isArray(t)?t.forEach(i):i(t),this}}xc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(xc.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});G.freezeMethods(xc);const br=xc;function Rf(e,t){const n=this||Xh,r=t||n,o=br.from(r.headers);let i=r.data;return G.forEach(e,function(s){i=s.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function p2(e){return!!(e&&e.__CANCEL__)}function Ns(e,t,n){Se.call(this,e??"canceled",Se.ERR_CANCELED,t,n),this.name="CanceledError"}G.inherits(Ns,Se,{__CANCEL__:!0});function o3(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Se("Request failed with status code "+n.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const i3=Yn.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,a,s){const u=[];u.push(n+"="+encodeURIComponent(r)),G.isNumber(o)&&u.push("expires="+new Date(o).toGMTString()),G.isString(i)&&u.push("path="+i),G.isString(a)&&u.push("domain="+a),s===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function a3(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function s3(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function h2(e,t){return e&&!a3(t)?s3(e,t):t}const u3=Yn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const s=G.isString(a)?o(a):a;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}();function l3(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function c3(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),c=r[i];a||(a=l),n[o]=u,r[o]=l;let f=i,d=0;for(;f!==o;)d+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),l-a<t)return;const p=c&&l-c;return p?Math.round(d*1e3/p):void 0}}function Wg(e,t){let n=0;const r=c3(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,u=r(s),l=i<=a;n=i;const c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&l?(a-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const f3=typeof XMLHttpRequest<"u",d3=f3&&function(e){return new Promise(function(n,r){let o=e.data;const i=br.from(e.headers).normalize(),a=e.responseType;let s;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}let l;G.isFormData(o)&&(Yn.isStandardBrowserEnv||Yn.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?G.isString(l=i.getContentType())&&i.setContentType(l.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(h+":"+m))}const f=h2(e.baseURL,e.url);c.open(e.method.toUpperCase(),c2(f,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function d(){if(!c)return;const h=br.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!a||a==="text"||a==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:h,config:e,request:c};o3(function(y){n(y),u()},function(y){r(y),u()},g),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new Se("Request aborted",Se.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new Se("Network Error",Se.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||f2;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new Se(m,g.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,e,c)),c=null},Yn.isStandardBrowserEnv){const h=(e.withCredentials||u3(f))&&e.xsrfCookieName&&i3.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}o===void 0&&i.setContentType(null),"setRequestHeader"in c&&G.forEach(i.toJSON(),function(m,g){c.setRequestHeader(g,m)}),G.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&a!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Wg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Wg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=h=>{c&&(r(!h||h.type?new Ns(null,e,c):h),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=l3(f);if(p&&Yn.protocols.indexOf(p)===-1){r(new Se("Unsupported protocol "+p+":",Se.ERR_BAD_REQUEST,e));return}c.send(o||null)})},mp={http:LI,xhr:d3};G.forEach(mp,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const jg=e=>`- ${e}`,p3=e=>G.isFunction(e)||e===null||e===!1,v2={getAdapter:e=>{e=G.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!p3(n)&&(r=mp[(a=String(n)).toLowerCase()],r===void 0))throw new Se(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([s,u])=>`adapter ${s} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(jg).join(`
`):" "+jg(i[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:mp};function If(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ns(null,e)}function $g(e){return If(e),e.headers=br.from(e.headers),e.data=Rf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),v2.getAdapter(e.adapter||Xh.adapter)(e).then(function(r){return If(e),r.data=Rf.call(e,e.transformResponse,r),r.headers=br.from(r.headers),r},function(r){return p2(r)||(If(e),r&&r.response&&(r.response.data=Rf.call(e,e.transformResponse,r.response),r.response.headers=br.from(r.response.headers))),Promise.reject(r)})}const Ug=e=>e instanceof br?e.toJSON():e;function ea(e,t){t=t||{};const n={};function r(l,c,f){return G.isPlainObject(l)&&G.isPlainObject(c)?G.merge.call({caseless:f},l,c):G.isPlainObject(c)?G.merge({},c):G.isArray(c)?c.slice():c}function o(l,c,f){if(G.isUndefined(c)){if(!G.isUndefined(l))return r(void 0,l,f)}else return r(l,c,f)}function i(l,c){if(!G.isUndefined(c))return r(void 0,c)}function a(l,c){if(G.isUndefined(c)){if(!G.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function s(l,c,f){if(f in t)return r(l,c);if(f in e)return r(void 0,l)}const u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(l,c)=>o(Ug(l),Ug(c),!0)};return G.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=u[c]||o,d=f(e[c],t[c],c);G.isUndefined(d)&&f!==s||(n[c]=d)}),n}const m2="1.5.1",Yh={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yh[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Vg={};Yh.transitional=function(t,n,r){function o(i,a){return"[Axios v"+m2+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,s)=>{if(t===!1)throw new Se(o(a," has been removed"+(n?" in "+n:"")),Se.ERR_DEPRECATED);return n&&!Vg[a]&&(Vg[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,s):!0}};function h3(e,t,n){if(typeof e!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const s=e[i],u=s===void 0||a(s,i,e);if(u!==!0)throw new Se("option "+i+" must be "+u,Se.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Se("Unknown option "+i,Se.ERR_BAD_OPTION)}}const gp={assertOptions:h3,validators:Yh},Br=gp.validators;class wl{constructor(t){this.defaults=t,this.interceptors={request:new Lg,response:new Lg}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ea(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&gp.assertOptions(r,{silentJSONParsing:Br.transitional(Br.boolean),forcedJSONParsing:Br.transitional(Br.boolean),clarifyTimeoutError:Br.transitional(Br.boolean)},!1),o!=null&&(G.isFunction(o)?n.paramsSerializer={serialize:o}:gp.assertOptions(o,{encode:Br.function,serialize:Br.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&G.merge(i.common,i[n.method]);i&&G.forEach(["delete","get","head","post","put","patch","common"],h=>{delete i[h]}),n.headers=br.concat(a,i);const s=[];let u=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(u=u&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let c,f=0,d;if(!u){const h=[$g.bind(this),void 0];for(h.unshift.apply(h,s),h.push.apply(h,l),d=h.length,c=Promise.resolve(n);f<d;)c=c.then(h[f++],h[f++]);return c}d=s.length;let p=n;for(f=0;f<d;){const h=s[f++],m=s[f++];try{p=h(p)}catch(g){m.call(this,g);break}}try{c=$g.call(this,p)}catch(h){return Promise.reject(h)}for(f=0,d=l.length;f<d;)c=c.then(l[f++],l[f++]);return c}getUri(t){t=ea(this.defaults,t);const n=h2(t.baseURL,t.url);return c2(n,t.params,t.paramsSerializer)}}G.forEach(["delete","get","head","options"],function(t){wl.prototype[t]=function(n,r){return this.request(ea(r||{},{method:t,url:n,data:(r||{}).data}))}});G.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,s){return this.request(ea(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}wl.prototype[t]=n(),wl.prototype[t+"Form"]=n(!0)});const ju=wl;class Qh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{r.subscribe(s),i=s}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,s){r.reason||(r.reason=new Ns(i,a,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Qh(function(o){t=o}),cancel:t}}}const v3=Qh;function m3(e){return function(n){return e.apply(null,n)}}function g3(e){return G.isObject(e)&&e.isAxiosError===!0}const yp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yp).forEach(([e,t])=>{yp[t]=e});const y3=yp;function g2(e){const t=new ju(e),n=Jx(ju.prototype.request,t);return G.extend(n,ju.prototype,t,{allOwnKeys:!0}),G.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return g2(ea(e,o))},n}const rt=g2(Xh);rt.Axios=ju;rt.CanceledError=Ns;rt.CancelToken=v3;rt.isCancel=p2;rt.VERSION=m2;rt.toFormData=yc;rt.AxiosError=Se;rt.Cancel=rt.CanceledError;rt.all=function(t){return Promise.all(t)};rt.spread=m3;rt.isAxiosError=g3;rt.mergeConfig=ea;rt.AxiosHeaders=br;rt.formToJSON=e=>d2(G.isHTMLForm(e)?new FormData(e):e);rt.getAdapter=v2.getAdapter;rt.HttpStatusCode=y3;rt.default=rt;const y2=rt,x3=({onUpload:e})=>{const[t,n]=K.useState(null),[r,o]=K.useState({started:!1,porcentage:0}),[i,a]=K.useState(null);function s(){if(!t){a("Nenhum arquivo selecionado.");return}const u=new FormData;for(let l=0;l<t.lenght;l++)u.append(`file${l+1}`,t[l]);a("Fazendo upload..."),o(l=>({...l,started:!0})),y2.post("https://httpbin.org/post",u,{onUploadProgress:l=>{o(c=>({...c,porcentage:l.progress*100}))},headers:{"Custom-Header":"value"}}).then(l=>{a("Upload feito com sucesso!"),console.log(l.data)}).catch(l=>{a("Upload não efetuado."),console.error(l)})}return A.jsxs(JR,{children:[A.jsx(ZR,{children:"Fotos"}),A.jsx(eI,{children:"Envie até 6 fotos"}),A.jsx(nI,{type:"file",onChange:u=>{n(u.target.files)},multiple:!0}),A.jsxs(tI,{children:[r.started&&A.jsx("progress",{max:"100",value:r.porcentage}),i&&A.jsx("span",{children:i})]}),A.jsx(rI,{onClick:s,children:"Fazer Upload"})]})},w3=j.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
`,b3=j.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
    font-weight: bold;
`,Af=j.span`
    font-size: 16px;
    color: var(--text-color);
`,Tf=j.div`
    display: flex;
    align-items: center
`,C3=j.img`
    width: 50px;
    margin-left: 0px;
    margin-right: 20px;
`,E3=j.img`
    width: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
`,S3=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
`,uu=({title:e,photo:t,content:n,bottomImage:r})=>A.jsxs(w3,{children:[A.jsx(b3,{children:e}),t!=null?A.jsxs(Tf,{children:[A.jsx(C3,{src:t}),A.jsx(Af,{children:n})]}):A.jsx(Tf,{children:A.jsx(Af,{children:n})}),r!=null?A.jsxs(A.Fragment,{children:[A.jsx(Tf,{children:A.jsx(E3,{src:r})}),A.jsx(S3,{}),A.jsx(Af,{children:"As informações com * são obrigatórias."})]}):A.jsx(A.Fragment,{})]}),_3=j.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
`,k3=j.span`
    font-size: 16px;
    margin: 20px 0px;
    color: var(--text-color);
    /* font-weight: bold; */
`,R3=j.div`
    display: flex;
    gap: 10px;
`;j.img`
    width: 150px;
    margin-left: 0px;
    margin-right: 20px;
`;const I3=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 58%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
`,A3=({title:e})=>A.jsx(_3,{children:A.jsxs(R3,{children:[A.jsx(I3,{type:"checkbox"}),A.jsx(k3,{children:e})]})}),T3="/hack-olx-2023/assets/verificationCode-59821551.png",si={brand:["Apple"],model:["iPhone 6","iPhone 6 Plus","iPhone 6s","iPhone 6s Plus","iPhone 7","iPhone 7 Plus","iPhone 8","iPhone 8 Plus","iPhone SE 2020","iPhone X","iPhone XR","iPhone XS","iPhone XS Max","iPhone 11","iPhone 11 Pro","iPhone 11 Pro Max","iPhone 12","iPhone 12 Mini","iPhone 12 Pro","iPhone 12 Pro Max","iPhone 13","iPhone 13 Mini","iPhone 13 Pro","iPhone 13 Pro Max","iPhone 14","iPhone 14 Plus","iPhone 14 Pro","iPhone 14 Pro Max","iPhone 15","iPhone 15 Plus","iPhone 15 Pro","iPhone 15 Pro Max"],condition:["Novo","Usado - Excelente","Usado - Bom","Recondicionado","Com defeito"],memory:[8,16,32,64,128,256,512,1024],color:["Azul Sierra","Rosa","Meia-noite","Estelar","Verde","Red"],batery:["Perfeita (95% ate 100%)","Boa (80% ate 94%)","Ok (60% ate 79%)","Ruim (40% ate 59%)","Muito Ruim (abaixo de 39%)"]};function x2(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=x2(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Kr(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=x2(e))&&(r&&(r+=" "),r+=t);return r}const $u=e=>typeof e=="number"&&!isNaN(e),bl=e=>typeof e=="string",nn=e=>typeof e=="function",Uu=e=>bl(e)||nn(e)?e:null,Nf=e=>K.isValidElement(e)||bl(e)||nn(e)||$u(e);function N3(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function wc(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:s,position:u,preventExitTransition:l,done:c,nodeRef:f,isIn:d}=a;const p=r?`${t}--${u}`:t,h=r?`${n}--${u}`:n,m=K.useRef(0);return K.useLayoutEffect(()=>{const g=f.current,v=p.split(" "),y=x=>{x.target===f.current&&(g.dispatchEvent(new Event("d")),g.removeEventListener("animationend",y),g.removeEventListener("animationcancel",y),m.current===0&&x.type!=="animationcancel"&&g.classList.remove(...v))};g.classList.add(...v),g.addEventListener("animationend",y),g.addEventListener("animationcancel",y)},[]),K.useEffect(()=>{const g=f.current,v=()=>{g.removeEventListener("animationend",v),o?N3(g,c,i):c()};d||(l?v():(m.current=1,g.className+=` ${h}`,g.addEventListener("animationend",v)))},[d]),xe.createElement(xe.Fragment,null,s)}}function Hg(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const To={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},lu=e=>{let{theme:t,type:n,...r}=e;return xe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Df={info:function(e){return xe.createElement(lu,{...e},xe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return xe.createElement(lu,{...e},xe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return xe.createElement(lu,{...e},xe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return xe.createElement(lu,{...e},xe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return xe.createElement("div",{className:"Toastify__spinner"})}};function D3(e){const[,t]=K.useReducer(p=>p+1,0),[n,r]=K.useState([]),o=K.useRef(null),i=K.useRef(new Map).current,a=p=>n.indexOf(p)!==-1,s=K.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:a,getToast:p=>i.get(p)}).current;function u(p){let{containerId:h}=p;const{limit:m}=s.props;!m||h&&s.containerId!==h||(s.count-=s.queue.length,s.queue=[])}function l(p){r(h=>p==null?[]:h.filter(m=>m!==p))}function c(){const{toastContent:p,toastProps:h,staleId:m}=s.queue.shift();d(p,h,m)}function f(p,h){let{delay:m,staleId:g,...v}=h;if(!Nf(p)||function(T){return!o.current||s.props.enableMultiContainer&&T.containerId!==s.props.containerId||i.has(T.toastId)&&T.updateId==null}(v))return;const{toastId:y,updateId:x,data:w}=v,{props:b}=s,C=()=>l(y),E=x==null;E&&s.count++;const S={...b,style:b.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(v).filter(T=>{let[z,L]=T;return L!=null})),toastId:y,updateId:x,data:w,closeToast:C,isIn:!1,className:Uu(v.className||b.toastClassName),bodyClassName:Uu(v.bodyClassName||b.bodyClassName),progressClassName:Uu(v.progressClassName||b.progressClassName),autoClose:!v.isLoading&&(R=v.autoClose,k=b.autoClose,R===!1||$u(R)&&R>0?R:k),deleteToast(){const T=Hg(i.get(y),"removed");i.delete(y),To.emit(4,T);const z=s.queue.length;if(s.count=y==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),z>0){const L=y==null?s.props.limit:1;if(z===1||L===1)s.displayedToast++,c();else{const $=L>z?z:L;s.displayedToast=$;for(let V=0;V<$;V++)c()}}else t()}};var R,k;S.iconOut=function(T){let{theme:z,type:L,isLoading:$,icon:V}=T,U=null;const P={theme:z,type:L};return V===!1||(nn(V)?U=V(P):K.isValidElement(V)?U=K.cloneElement(V,P):bl(V)||$u(V)?U=V:$?U=Df.spinner():(O=>O in Df)(L)&&(U=Df[L](P))),U}(S),nn(v.onOpen)&&(S.onOpen=v.onOpen),nn(v.onClose)&&(S.onClose=v.onClose),S.closeButton=b.closeButton,v.closeButton===!1||Nf(v.closeButton)?S.closeButton=v.closeButton:v.closeButton===!0&&(S.closeButton=!Nf(b.closeButton)||b.closeButton);let D=p;K.isValidElement(p)&&!bl(p.type)?D=K.cloneElement(p,{closeToast:C,toastProps:S,data:w}):nn(p)&&(D=p({closeToast:C,toastProps:S,data:w})),b.limit&&b.limit>0&&s.count>b.limit&&E?s.queue.push({toastContent:D,toastProps:S,staleId:g}):$u(m)?setTimeout(()=>{d(D,S,g)},m):d(D,S,g)}function d(p,h,m){const{toastId:g}=h;m&&i.delete(m);const v={content:p,props:h};i.set(g,v),r(y=>[...y,g].filter(x=>x!==m)),To.emit(4,Hg(v,v.props.updateId==null?"added":"updated"))}return K.useEffect(()=>(s.containerId=e.containerId,To.cancelEmit(3).on(0,f).on(1,p=>o.current&&l(p)).on(5,u).emit(2,s),()=>{i.clear(),To.emit(3,s)}),[]),K.useEffect(()=>{s.props=e,s.isToastActive=a,s.displayedToast=n.length}),{getToastToRender:function(p){const h=new Map,m=Array.from(i.values());return e.newestOnTop&&m.reverse(),m.forEach(g=>{const{position:v}=g.props;h.has(v)||h.set(v,[]),h.get(v).push(g)}),Array.from(h,g=>p(g[0],g[1]))},containerRef:o,isToastActive:a}}function Gg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function qg(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P3(e){const[t,n]=K.useState(!1),[r,o]=K.useState(!1),i=K.useRef(null),a=K.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=K.useRef(e),{autoClose:u,pauseOnHover:l,closeToast:c,onClick:f,closeOnClick:d}=e;function p(w){if(e.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),a.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",y),document.addEventListener("touchmove",v),document.addEventListener("touchend",y);const b=i.current;a.canCloseOnClick=!0,a.canDrag=!0,a.boundingRect=b.getBoundingClientRect(),b.style.transition="",a.x=Gg(w.nativeEvent),a.y=qg(w.nativeEvent),e.draggableDirection==="x"?(a.start=a.x,a.removalDistance=b.offsetWidth*(e.draggablePercent/100)):(a.start=a.y,a.removalDistance=b.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function h(w){if(a.boundingRect){const{top:b,bottom:C,left:E,right:S}=a.boundingRect;w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&a.x>=E&&a.x<=S&&a.y>=b&&a.y<=C?g():m()}}function m(){n(!0)}function g(){n(!1)}function v(w){const b=i.current;a.canDrag&&b&&(a.didMove=!0,t&&g(),a.x=Gg(w),a.y=qg(w),a.delta=e.draggableDirection==="x"?a.x-a.start:a.y-a.start,a.start!==a.x&&(a.canCloseOnClick=!1),b.style.transform=`translate${e.draggableDirection}(${a.delta}px)`,b.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function y(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",y);const w=i.current;if(a.canDrag&&a.didMove&&w){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),void e.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${e.draggableDirection}(0)`,w.style.opacity="1"}}K.useEffect(()=>{s.current=e}),K.useEffect(()=>(i.current&&i.current.addEventListener("d",m,{once:!0}),nn(e.onOpen)&&e.onOpen(K.isValidElement(e.children)&&e.children.props),()=>{const w=s.current;nn(w.onClose)&&w.onClose(K.isValidElement(w.children)&&w.children.props)}),[]),K.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||g(),window.addEventListener("focus",m),window.addEventListener("blur",g)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",m),window.removeEventListener("blur",g))}),[e.pauseOnFocusLoss]);const x={onMouseDown:p,onTouchStart:p,onMouseUp:h,onTouchEnd:h};return u&&l&&(x.onMouseEnter=g,x.onMouseLeave=m),d&&(x.onClick=w=>{f&&f(w),a.canCloseOnClick&&c()}),{playToast:m,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:x}}function w2(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return xe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:o=>{o.stopPropagation(),t(o)},"aria-label":r},xe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},xe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function F3(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:s,controlledProgress:u,progress:l,rtl:c,isIn:f,theme:d}=e;const p=i||u&&l===0,h={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};u&&(h.transform=`scaleX(${l})`);const m=Kr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":c}),g=nn(a)?a({rtl:c,type:o,defaultClassName:m}):Kr(m,a);return xe.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:g,style:h,[u&&l>=1?"onTransitionEnd":"onAnimationEnd"]:u&&l<1?null:()=>{f&&r()}})}const O3=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o}=P3(e),{closeButton:i,children:a,autoClose:s,onClick:u,type:l,hideProgressBar:c,closeToast:f,transition:d,position:p,className:h,style:m,bodyClassName:g,bodyStyle:v,progressClassName:y,progressStyle:x,updateId:w,role:b,progress:C,rtl:E,toastId:S,deleteToast:R,isIn:k,isLoading:D,iconOut:T,closeOnClick:z,theme:L}=e,$=Kr("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${l}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":z}),V=nn(h)?h({rtl:E,position:p,type:l,defaultClassName:$}):Kr($,h),U=!!C||!s,P={closeToast:f,type:l,theme:L};let O=null;return i===!1||(O=nn(i)?i(P):K.isValidElement(i)?K.cloneElement(i,P):w2(P)),xe.createElement(d,{isIn:k,done:R,position:p,preventExitTransition:n,nodeRef:r},xe.createElement("div",{id:S,onClick:u,className:V,...o,style:m,ref:r},xe.createElement("div",{...k&&{role:b},className:nn(g)?g({type:l}):Kr("Toastify__toast-body",g),style:v},T!=null&&xe.createElement("div",{className:Kr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},T),xe.createElement("div",null,a)),O,xe.createElement(F3,{...w&&!U?{key:`pb-${w}`}:{},rtl:E,theme:L,delay:s,isRunning:t,isIn:k,closeToast:f,hide:c,type:l,style:x,className:y,controlledProgress:U,progress:C||0})))},bc=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},M3=wc(bc("bounce",!0));wc(bc("slide",!0));wc(bc("zoom"));wc(bc("flip"));const Kg=K.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:o}=D3(e),{className:i,style:a,rtl:s,containerId:u}=e;function l(c){const f=Kr("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":s});return nn(i)?i({position:c,rtl:s,defaultClassName:f}):Kr(f,Uu(i))}return K.useEffect(()=>{t&&(t.current=r.current)},[]),xe.createElement("div",{ref:r,className:"Toastify",id:u},n((c,f)=>{const d=f.length?{...a}:{...a,pointerEvents:"none"};return xe.createElement("div",{className:l(c),style:d,key:`container-${c}`},f.map((p,h)=>{let{content:m,props:g}=p;return xe.createElement(O3,{...g,isIn:o(g.toastId),style:{...g.style,"--nth":h+1,"--len":f.length},key:`toast-${g.key}`},m)}))}))});Kg.displayName="ToastContainer",Kg.defaultProps={position:"top-right",transition:M3,autoClose:5e3,closeButton:w2,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Xg,Pf=new Map,Yg=[];To.on(2,e=>{Xg=e.containerId||e,Pf.set(Xg,e),Yg.forEach(t=>{To.emit(0,t.content,t.options)}),Yg=[]}).on(3,e=>{Pf.delete(e.containerId||e),Pf.size===0&&To.off(0).off(1).off(5)});const B3=()=>{const[e,t]=K.useState({Titulo:"",Descricao:"",Marca:"",Modelo:"",Condicao:"",Memoria:"",Cor:"",Bateria:"",Preco:"",Localizacao:"",Contato:""}),n=Xo(),r=()=>{const{Marca:m,Modelo:g,Condicao:v,Memoria:y,Bateria:x,Preco:w}=e;m&&g&&v&&y&&x&&w?(n("/verification",{state:{content:e}}),window.scrollTo(0,0)):alert("Preencha todos os campos obrigatórios!")},o=m=>{t({...e,Titulo:m.target.value})},i=m=>{t({...e,Descricao:m.target.value})},a=m=>{t({...e,Marca:m.target.value})},s=m=>{t({...e,Modelo:m.target.value})},u=m=>{t({...e,Condicao:m.target.value})},l=m=>{t({...e,Memoria:m.target.value})},c=m=>{t({...e,Cor:m.target.value})},f=m=>{t({...e,Bateria:m.target.value})},d=m=>{t({...e,Preco:m.target.value})},p=m=>{t({...e,Localizacao:m.target.value})},h=m=>{t({...e,Contato:m.target.value})};return A.jsxs(MR,{children:[A.jsx(BR,{children:"O que você está anunciando?"}),A.jsxs(WR,{children:[A.jsxs(LR,{children:[A.jsx(Xk,{size:18,color:"purple"}),A.jsx(zR,{children:"Celulares e Telefonia"})]}),A.jsx(Ea,{title:"Título*",valueInput:e.Titulo,onChangeFunction:o}),A.jsx(Ea,{title:"Descrição*",hasTextArea:!0,valueInput:e.Descricao,onChangeFunction:i,placeholder:"Descreva aqui seu aparelho"}),A.jsx(ai,{label:"Marca",options:si.brand,valueInput:e.Marca,onChangeFunction:a}),A.jsx(ai,{label:"Modelo",options:si.model,valueInput:e.Modelo,onChangeFunction:s}),A.jsx(ai,{label:"Condição",options:si.condition,valueInput:e.Condicao,onChangeFunction:u}),A.jsx(ai,{label:"Memória Interna",options:si.memory,valueInput:e.Memoria,onChangeFunction:l}),A.jsx(ai,{label:"Cor",options:si.color,valueInput:e.Cor,onChangeFunction:c}),A.jsx(ai,{label:"Saúde da bateria",options:si.batery,valueInput:e.Bateria,onChangeFunction:f}),A.jsx(Ea,{title:"Preço (R$)",valueInput:e.Preco,onChangeFunction:d}),A.jsx(x3,{}),A.jsx(Ea,{title:"Localização*",valueInput:e.Localizacao,onChangeFunction:p}),A.jsx(Ea,{title:"Contato*",valueInput:e.Contato,onChangeFunction:h}),A.jsx(uu,{title:"",content:"Olaria, Nova Friburgo - RJ",photo:$R}),A.jsx(uu,{title:"Contato",content:"(21)99999-9999",photo:UR}),A.jsx(uu,{title:"",content:"Não pedimos códigos por ligação, chat ou WhatsApp. Desconfie se alguém entrar em contato ou enviar comprovante de pagamento em nome da OLX.",photo:VR}),A.jsx(A3,{title:"Ocultar meu telefone neste anúncio"}),A.jsx(uu,{title:"Verificação de Segurança*",content:"Por favor, digite o texto mostrado na imagem abaixo para concluir o envio do seu anúncio.",photo:null,bottomImage:T3}),A.jsx(jR,{onClick:r,children:"Enviar"})]})]})},L3=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   color: var(--light-black);
   flex: 1;
`,z3=j.img`
    width: 150px;
    height: 150px;
`,W3=j.h1`
    font-size: 24px;

`;j.h2`
    
`;const j3=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,xp="/hack-olx-2023/assets/loading-b5fa5a5d.gif",$3=y2.create({baseURL:"http://localhost:5000"}),U3=async e=>{const t="/",{Marca:n,Modelo:r,Condicao:o,Memoria:i,Bateria:a,Preco:s}=e,u={Marca:n,Modelo:r,Condicao:o,Memoria:parseInt(i),Bateria:a,Preco:parseFloat(s),TempoConta:100,Vendas:2,Golpe:"Nao"};return $3.post(t,u)},V3=()=>{const e=Xo(),t=As(),{content:n,user:r}=t.state,o=async()=>{if(!r)return e("/verification/final/false",{state:{golpe:1,content:n,user:r}});try{const a=(await U3(n)).data.golpe;console.log(a),a>.7?e("/verification/final/false",{state:{golpe:a,content:n,user:r}}):e("/verification/final/true",{state:{golpe:a,content:n,user:r}})}catch{alert("Erro ao acessar API OLX Smart")}};return K.useEffect(()=>{o()},[]),A.jsx(L3,{children:A.jsxs(j3,{children:[A.jsx(z3,{src:xp,alt:"Carregando verificação..."}),A.jsx(W3,{children:"Aguarde enquanto nossa IA verifica o seu anúnicio..."})]})})},H3=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
   margin: 40px 0px;
`,G3=j.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 30%;
`,q3=j.h1`
    font-size: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 40px;
    /* color: var(--light-black); */
    font-weight: lighter;
`,K3=j.h2`
    font-size: 17px;
`;j.div`
    border-radius: 4px;
    border: 2px solid var(--color-neutral-90);
    width: 80%;
    padding: 30px 40px;
`;const X3=j.div`
    background-color: rgba(128, 128, 128, 0.07);
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 2px;
    /* padding-left: 50px; */
    /* padding-right: 50px; */
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 20px;
    width: 50%;
`,Y3=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 50%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.4);
`,Q3=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 70%;
    border-top: 1px solid rgba(128, 128, 128, 0.4);
`,Qg=j.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    /* width: 50%; */
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`,J3=j.div`
   display: flex;
   justify-content: left;
   align-items: center;
   flex-direction: row;
   color: var(--light-black);
`;j.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    /* color: var(--light-black); */
    font-weight: lighter;
`;const Z3=j.h2`
    font-size: 17px;
    font-weight: lighter;
`,e4=j.img`
    width: 75px;
`;j.div`
    width: 50px;
`;const fr=({image:e,title:t,key:n})=>A.jsxs(J3,{children:[A.jsx(e4,{src:e}),A.jsx(Z3,{children:t})]}),t4="/hack-olx-2023/assets/image1-f9bd94ba.svg",n4="/hack-olx-2023/assets/image2-980acf34.svg",r4="/hack-olx-2023/assets/image3-f9b07259.svg",o4="/hack-olx-2023/assets/image4-52ed6a41.svg",i4="/hack-olx-2023/assets/image5-1fddbb20.svg",a4="/hack-olx-2023/assets/image6-8f4acc94.svg",s4="/hack-olx-2023/assets/image7-7c552edf.svg",u4="/hack-olx-2023/assets/image8-5aa507b7.svg",l4="/hack-olx-2023/assets/image9-8a36f105.svg",c4=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
   margin: 40px 0px;
   width: 40%;
   
`;j.img`
    width: 60px;
    height: 60px;
`;const f4=j.h1`
    font-size: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--light-black);
    font-weight: bold;
`,Ff=j.h2`
    font-size: 17px;
    font-weight: lighter;
`,d4=j.ul`
    background-color: var(--color-neutral-90);
    border-radius: 20px;
    width: 90%;
`,Jg=j.li`
    margin: 20px;
    font-weight: bold;
`,p4=j.div`
   display: flex;
    justify-content: flex-start;
`,h4=j.img`
    width: 60px;
    height: 60px;
`,v4=j.h1`
    font-size: 25px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    /* color: var(--light-black); */
    font-weight: lighter;
`,m4="/hack-olx-2023/assets/neuralNet-72ec8813.svg",b2=()=>A.jsxs(p4,{children:[A.jsx(h4,{src:m4,alt:"Imagem de uma rede neural"}),A.jsx(v4,{children:"OLX Smart"})]}),g4=({golpe:e,user:t})=>A.jsxs(c4,{children:[A.jsx(b2,{}),A.jsx(Qk,{color:"red",size:60}),A.jsx(f4,{children:"Anúncio Verificado"}),t?A.jsxs(Ff,{children:["Probabilidade de golpe: ",e*100,"%"]}):A.jsx(Ff,{children:"Reconhecimento facial detectou uma irregularidade no seu cadastro"}),A.jsx(Ff,{children:"Nossa IA verificou uma possível ameaça de golpe. Infelizmente seu anúnico precisará de uma análise do time da OLX. Avisaremos assim que for liberado ou for excluido. Se for comprovada fraude:"}),A.jsxs(d4,{children:[A.jsx(Jg,{children:"Seu anúncio não será publicado"}),A.jsx(Jg,{children:"Sua reputação na OLX diminuirá"})]})]}),y4=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
   margin: 40px 0px;
   position: fixed;
   top: 50px;
   left: 50px;
   bottom: 10px;
   width: 30%;
`;j.img`
    width: 60px;
    height: 60px;
`;const x4=j.h1`
    font-size: 20px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--light-black);
    font-weight: bold;
`,Of=j.h2`
    font-size: 17px;
    font-weight: lighter;
`,w4=j.ul`
    background-color: var(--color-neutral-90);
    border-radius: 20px;
    width: 90%;
`,Zg=j.li`
    margin: 20px;
    font-weight: bold;
`,b4=({golpe:e,user:t})=>A.jsxs(y4,{children:[A.jsx(b2,{}),A.jsx(Yk,{color:"green",size:60}),A.jsx(x4,{children:"Anúncio Verificado"}),A.jsxs(Of,{children:["Probabilidade de golpe: ",e*100,"%"]}),A.jsx(Of,{children:"Usuário verificado com sucesso"}),A.jsx(Of,{children:"Parabéns, seu anúnico foi analisado pela inteligência artificial do OLX e foi classificada como verdadeiro."}),A.jsxs(w4,{children:[A.jsx(Zg,{children:"Seu anúnico contará com um selo de verificação"}),A.jsx(Zg,{children:"Sua reputação na OLX aumentou"})]})]}),C4=()=>{const{result:e}=lk(),t=As(),{content:n,golpe:r,user:o}=t.state,i=Xo();return A.jsx(H3,{children:e==="true"?A.jsxs(A.Fragment,{children:[A.jsx(b4,{golpe:r,user:o}),A.jsxs(G3,{children:[A.jsx(q3,{children:"Anuncie com garantia da OLX, pagamento e entrega fácil para todo o Brasil."}),A.jsxs(Y3,{children:[A.jsx(fr,{image:t4,title:"Seu anúncio é mais visto! Retornando mais chances de vender."}),A.jsx(fr,{image:n4,title:"Entrega fácil, venda para todo o Brasil sem custo de entrega para você."}),A.jsx(fr,{image:r4,title:"Garantia da OLX, você só envia o produto após confirmamos que o pagamento está com a gente."}),A.jsx(fr,{image:o4,title:"Seu comprador parcela sem juros e você recebe à vista."})]}),A.jsxs(K3,{children:["Após a venda você vai receber R$ ",parseFloat(n.Preco)*.9,"."]}),A.jsxs(X3,{children:[A.jsx(fr,{image:i4,title:"Fique Atento"}),A.jsxs(Q3,{children:[A.jsx(fr,{image:l4,title:"Dê preferência ao chat da OLX como forma de confirmação de status das suas vendas."},"information"),A.jsx(fr,{image:u4,title:"Evite clicar em links para outros sites no chat."},"information"),A.jsx(fr,{image:s4,title:"Desconfie de pessoas que entram em contato com você em nome da OLX solicitando informações ou pagamentos."},"information"),A.jsx(fr,{image:a4,title:"Nunca pedimos códigos de confirmação via chat ou aplicativos de mensagens."},"information")]})]}),A.jsx(Qg,{onClick:()=>{i("/announce"),window.scrollTo(0,0)},children:"Veja seu anúncio!"})]})]}):A.jsxs(A.Fragment,{children:[A.jsx(g4,{golpe:r,user:o}),A.jsx(Qg,{onClick:()=>{i("/"),window.scrollTo(0,0)},children:"Voltar ao Registro"})]})})},E4=j.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   color: var(--light-black);
`,e0=j.div`
    width: 80%;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`,S4=j.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
    text-align: center;
`,_4=j.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    gap: 40px;
`,k4=j.div`
    background-color: transparent;
    /* border: 1px solid black; */
    border-radius: 20px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`,R4=j.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 20px;
    width: 60%;
`,I4=j.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
`,A4=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 98%;
    padding: 10px 0px;
    padding-left: 2%;
    padding-right: 0px;
`,t0=({title:e,valueInput:t,onChangeFunction:n,placeholder:r})=>A.jsxs(R4,{children:[A.jsx(I4,{children:e}),A.jsx(A4,{onChange:o=>n(o),value:t,placeholder:r})]}),T4=j.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 20px;
    width: 40%;
`,N4=j.span`
    font-size: 18px;
    margin: 20px 0px;
    color: var(--text-color);
`,Mf=j.input`
    border: 1px solid gray;
    border-radius: 4px;
    font-size: 20px;
    max-width: 30%;
    padding: 10px 0px;
    padding-left: 2%;
`,D4=j.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`,P4=({title:e,valueInput:t,onChangeFunction:n,placeholder:r})=>A.jsxs(T4,{children:[A.jsx(N4,{children:e}),A.jsxs(D4,{children:[A.jsx(Mf,{type:"number",onChange:o=>n(o),value:t,placeholder:r.slice(0,2)}),A.jsx(Mf,{type:"number",onChange:o=>n(o),value:t,placeholder:r.slice(3,5)}),A.jsx(Mf,{type:"number",onChange:o=>n(o),value:t,placeholder:r.slice(6,8)})]})]}),F4=j.div`
    
`,O4=j.div`
    display: flex;
    justify-content: center;
    padding: 10px;
    flex-direction: column;
`,M4=j.video`
    border-radius: 20px;
`,n0=j.img`
    width: 150px;
    height: 150px;
`,B4=j.canvas`
    position: absolute;
`;j.h1`
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 40px 0px;
    color: var(--light-black);
    text-align: center;
`;const Bf=j.h2`
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--light-black);
    text-align: center;
`,L4=j.button`
    background-color: var(--orange);
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    margin-top: 2rem;
    justify-self: flex-end;
    padding: 15px 50px;
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        background-color: var(--hover-orange);
    }
`,r0=j.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var C2=function(e,t){return(C2=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])})(e,t)};function On(e,t){function n(){this.constructor=e}C2(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function te(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(l){try{u(r.next(l))}catch(c){i(c)}}function s(l){try{u(r.throw(l))}catch(c){i(c)}}function u(l){l.done?o(l.value):new n(function(c){c(l.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})}function ne(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){a=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(c[0]===6&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(f){c=[6,f],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([u,l])}}}var z4=function(){function e(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return e.prototype.setPlatform=function(t,n){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+n+"."),this.platformName=t,this.platform=n},e.prototype.registerFlag=function(t,n,r){if(this.flagRegistry[t]={evaluationFn:n,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},e.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},e.prototype.getNumber=function(t){return this.get(t)},e.prototype.getBool=function(t){return this.get(t)},e.prototype.getFlags=function(){return this.flags},Object.defineProperty(e.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),e.prototype.set=function(t,n){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)},e.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},e.prototype.setFlags=function(t){this.flags=Object.assign({},t)},e.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},e.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var n,r,o=(n=this.global.location.search,r={},n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return W4(r,a[0],a[1]),a.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(l,c){if((c=c.toLowerCase())==="true"||c==="false")return c==="true";if(""+ +c===c)return+c;throw new Error("Could not parse value flag value "+c+" for flag "+l+".")}(s,u)})}},e}();function W4(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function H(){return E2}var E2=null,Cl=new Map,wp=new Map;function S2(e,t){var n=k2(e,t);return Cl.get(n)}function j4(e){return wp.get(e)}function o0(e){for(var t=Cl.entries(),n=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===e&&n.push(s)}return n}function _2(e){var t=e.kernelName,n=e.backendName,r=k2(t,n);if(Cl.has(r))throw new Error("The kernel '"+t+"' for backend '"+n+"' is already registered");Cl.set(r,e)}function $4(e){var t=e.kernelName;wp.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),wp.set(t,e)}function k2(e,t){return t+"_"+e}function bp(e,t,n){return Math.max(e,Math.min(t,n))}function R2(e){return e%2==0?e:e+1}function U4(e){for(var t=0,n=0;n<e.length;n++)t+=e[n];return t}function I(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function Ne(e,t,n){n===void 0&&(n=""),I(gt(e,t),function(){return n+" Shapes "+e+" and "+t+" must match"})}function da(e){I(e!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function ta(e,t,n){if(t===void 0&&(t=[]),n===void 0&&(n=!1),t==null&&(t=[]),Array.isArray(e)||er(e)&&!n)for(var r=0;r<e.length;++r)ta(e[r],t,n);else t.push(e);return t}function oe(e){if(e.length===0)return 1;for(var t=e[0],n=1;n<e.length;n++)t*=e[n];return t}function gt(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function Je(e){return e%1==0}function V4(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;var t=Math.exp(2*e);return(t-1)/(t+1)}function Cp(e){var t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function Oi(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function i0(e,t,n){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var i=0,a=function(){if(e())r();else{i++;var s=t(i);n!=null&&i>=n?o():setTimeout(a,s)}};a()})}function H4(e,t){for(var n=1,r=-1,o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(e[o]<0)throw Error("Shapes can not be < 0. Found "+e[o]+" at dim "+o);if(r===-1){if(t>0&&t!==n)throw Error("Size("+t+") must match the product of shape "+e);return e}if(n===0)throw Error("Cannot infer the missing size in ["+e+"] when there are 0 elements");if(t%n!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+n);var i=e.slice();return i[r]=t/n,i}function dt(e,t){var n=t.length;return I((e=e==null?t.map(function(r,o){return o}):[].concat(e)).every(function(r){return r>=-n&&r<n}),function(){return"All values in axis param must be in range [-"+n+", "+n+") but got axis "+e}),I(e.every(function(r){return Je(r)}),function(){return"All values in axis param must be integers but got axis "+e}),e.map(function(r){return r<0?n+r:r})}function _o(e,t){for(var n=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:dt(t,e).sort(),a=0,s=0;s<e.length;++s){if(i!=null){if(i[a]===s&&e[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+e[s]+"' is not 1");(i[a]==null||i[a]>s)&&e[s]===1&&(n.push(e[s]),r.push(s)),i[a]<=s&&a++}e[s]!==1&&(n.push(e[s]),r.push(s))}return{newShape:n,keptDims:r}}function hs(e,t){var n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else{if(e!=="bool")throw new Error("Unknown data type "+e);n=new Uint8Array(t)}return n}function El(e,t){var n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else{if(e!=="string")throw new Error("Unknown data type "+e);n=new Array(t)}return n}function G4(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function q4(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function K4(e,t){return t!=="complex64"&&(t!=="float32"||e==="complex64")&&(t!=="int32"||e==="float32"||e==="complex64")&&(t!=="bool"||e!=="bool")}function er(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array}function I2(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error("Unknown dtype "+e)}function X4(e){if(e==null)return 0;var t=0;return e.forEach(function(n){return t+=n.length}),t}function Jh(e){return typeof e=="string"||e instanceof String}function Y4(e){return typeof e=="boolean"}function Q4(e){return typeof e=="number"}function Ds(e){return Array.isArray(e)?Ds(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array?"int32":Q4(e)?"float32":Jh(e)?"string":Y4(e)?"bool":"float32"}function Ep(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Sp(e,t){for(var n=t;n<e;++n)if(e%n==0)return n;return e}function tr(e){var t=e.length;if(t<2)return[];var n=new Array(t-1);n[t-2]=e[t-1];for(var r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function A2(e,t,n){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=ta(e)),n&&G4(e,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){for(var r=new Uint8Array(e.length),o=0;o<r.length;++o)Math.round(e[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function a0(e,t){if(e.length===0)return t[0];var n=e.reduce(function(r,o){return r*o});if(n===0)return[];if(n!==t.length)throw new Error("["+e+"] does not match the input size.");return function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],l=0;l<u;l++)s[l]=a[o+l];else{u=i[0];var c=i.slice(1),f=c.reduce(function(d,p){return d*p});for(l=0;l<u;l++)s[l]=r(o+l*f,c,a)}return s}(0,e,t)}function T2(e,t){for(var n=Ps(e,t),r=0;r<n.length;r++)n[r]=1;return n}function Ps(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error("Unknown data type "+t)}function Gn(){return H().platform.now()}function N2(e){e.forEach(function(t){I(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+e+"]."})})}function J4(e,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.encode(e,t)}function Sl(e,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.decode(e,t)}function s0(e,t,n){if(t===0)return 0;if(t===1)return e[0];for(var r=e[e.length-1],o=0;o<e.length-1;++o)r+=n[o]*e[o];return r}function Z4(e,t,n){if(t===0)return[];if(t===1)return[e];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(e/n[o]),e-=r[o]*n[o];return r[r.length-1]=e,r}var eA=function(){function e(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new tA)}return e.prototype.profileKernel=function(t,n,r){var o,i=this,a=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(l,c,f){if(c!=="float32")return!1;for(var d=0;d<l.length;d++){var p=l[d];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then(function(l){var c="";l.getExtraProfileInfo!=null&&(c=l.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,l.kernelMs,n,c)})})}),o},e}(),tA=function(){function e(){}return e.prototype.logKernelProfile=function(t,n,r,o,i,a){var s=typeof o=="number"?Oi(o+"ms",9):o.error,u=Oi(t,25),l=n.rank,c=n.size,f=Oi(n.shape.toString(),14),d="";for(var p in i){var h=i[p].shape||n.shape,m=h.length;d+=p+": "+m+"D "+(m>0?h:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+l+"D "+f+"	%c"+c+"	%c"+d+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},e}(),u0=20,_a=3,Lf=7;function nA(e,t,n,r){var o=tr(t),i=function(l,c,f,d){var p=oe(c),h=d[d.length-1],m=new Array(h).fill(0),g=c.length,v=f==="complex64"?Ra(l):l;if(g>1)for(var y=0;y<p/h;y++)for(var x=y*h,w=0;w<h;w++)m[w]=Math.max(m[w],ka(v[x+w],0,f).length);return m}(e,t,n,o),a=t.length,s=function l(c,f,d,p,h,m){m===void 0&&(m=!0);var g=d==="complex64"?2:1,v=f[0],y=f.length;if(y===0)return d==="complex64"?[ka(Ra(c)[0],0,d)]:d==="bool"?[D2(c[0])]:[c[0].toString()];if(y===1){if(v>u0){var x=_a*g,w=Array.from(c.slice(0,x)),b=Array.from(c.slice((v-_a)*g,v*g));return d==="complex64"&&(w=Ra(w),b=Ra(b)),["["+w.map(function($,V){return ka($,h[V],d)}).join(", ")+", ..., "+b.map(function($,V){return ka($,h[v-_a+V],d)}).join(", ")+"]"]}return["["+(d==="complex64"?Ra(c):Array.from(c)).map(function($,V){return ka($,h[V],d)}).join(", ")+"]"]}var C=f.slice(1),E=p.slice(1),S=p[0]*g,R=[];if(v>u0){for(var k=0;k<_a;k++){var D=(T=k*S)+S;R.push.apply(R,l(c.slice(T,D),C,d,E,h,!1))}for(R.push("..."),k=v-_a;k<v;k++)D=(T=k*S)+S,R.push.apply(R,l(c.slice(T,D),C,d,E,h,k===v-1))}else for(k=0;k<v;k++){var T;D=(T=k*S)+S,R.push.apply(R,l(c.slice(T,D),C,d,E,h,k===v-1))}var z=y===2?",":"";for(R[0]="["+R[0]+z,k=1;k<R.length-1;k++)R[k]=" "+R[k]+z;var L=`,
`;for(k=2;k<y;k++)L+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(m?"":L),R}(e,t,n,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+n),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(l){return"    "+l}).join(`
`)),u.join(`
`)}function ka(e,t,n){return Oi(Array.isArray(e)?parseFloat(e[0].toFixed(Lf))+" + "+parseFloat(e[1].toFixed(Lf))+"j":Jh(e)?"'"+e+"'":n==="bool"?D2(e):parseFloat(e.toFixed(Lf)).toString(),t)}function D2(e){return e===0?"false":"true"}function Ra(e){for(var t=[],n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var vs=function(){function e(t,n,r){var o=this;if(this.dtype=n,this.shape=t.slice(),this.size=oe(t),r!=null){var i=r.length;I(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||El(n,this.size),this.strides=tr(t)}return e.prototype.set=function(t){for(var n=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),I(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+n.rank+")"});var i=this.locToIndex(r);this.values[i]=t},e.prototype.get=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],l=0;l<t.length-1;++l)u+=this.strides[l]*t[l];return this.values[u]},e.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var n=t[t.length-1],r=0;r<t.length-1;++r)n+=this.strides[r]*t[r];return n},e.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var n=new Array(this.shape.length),r=0;r<n.length-1;++r)n[r]=Math.floor(t/this.strides[r]),t-=n[r]*this.strides[r];return n[n.length-1]=t,n},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.toTensor=function(){return Kn().makeTensor(this.values,this.shape,this.dtype)},e}(),Kn=null,W=null,P2=null,Ve=function(){function e(t,n,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=oe(t),this.strides=tr(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return e.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},e.prototype.asScalar=function(){return this.throwIfDisposed(),I(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},e.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},e.prototype.as2D=function(t,n){return this.throwIfDisposed(),this.reshape([t,n])},e.prototype.as3D=function(t,n,r){return this.throwIfDisposed(),this.reshape([t,n,r])},e.prototype.as4D=function(t,n,r,o){return this.throwIfDisposed(),this.reshape([t,n,r,o])},e.prototype.as5D=function(t,n,r,o,i){return this.throwIfDisposed(),this.reshape([t,n,r,o,i])},e.prototype.asType=function(t){return this.throwIfDisposed(),W.cast(this,t)},Object.defineProperty(e.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),e.prototype.buffer=function(){return te(this,void 0,void 0,function(){var t;return ne(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,W.buffer(this.shape,this.dtype,t)]}})})},e.prototype.bufferSync=function(){return W.buffer(this.shape,this.dtype,this.dataSync())},e.prototype.array=function(){return te(this,void 0,void 0,function(){var t;return ne(this,function(n){switch(n.label){case 0:return[4,this.data()];case 1:return t=n.sent(),[2,a0(this.shape,t)]}})})},e.prototype.arraySync=function(){return a0(this.shape,this.dataSync())},e.prototype.data=function(){return te(this,void 0,void 0,function(){var t,n;return ne(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=Kn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:n=r.sent();try{return[2,n.map(function(o){return Sl(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},e.prototype.dataSync=function(){this.throwIfDisposed();var t=Kn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(n){return Sl(n)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},e.prototype.bytes=function(){return te(this,void 0,void 0,function(){var t;return ne(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),[4,Kn().read(this.dataId)];case 1:return t=n.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},e.prototype.dispose=function(){this.isDisposed||(Kn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(e.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),e.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},e.prototype.toFloat=function(){return this.asType("float32")},e.prototype.toInt=function(){return this.asType("int32")},e.prototype.toBool=function(){return this.asType("bool")},e.prototype.print=function(t){return t===void 0&&(t=!1),W.print(this,t)},e.prototype.reshape=function(t){return this.throwIfDisposed(),W.reshape(this,t)},e.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},e.prototype.expandDims=function(t){return t===void 0&&(t=0),W.expandDims(this,t)},e.prototype.cumsum=function(t,n,r){return t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1),W.cumsum(this,t,n,r)},e.prototype.squeeze=function(t){return this.throwIfDisposed(),W.squeeze(this,t)},e.prototype.clone=function(){return this.throwIfDisposed(),W.clone(this)},e.prototype.oneHot=function(t,n,r){return this.throwIfDisposed(),W.oneHot(this,t,n,r)},e.prototype.toString=function(t){return t===void 0&&(t=!1),nA(this.dataSync(),this.shape,this.dtype,t)},e.prototype.tile=function(t){return this.throwIfDisposed(),W.tile(this,t)},e.prototype.gather=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),W.gather(this,t,n)},e.prototype.matMul=function(t,n,r){return n===void 0&&(n=!1),r===void 0&&(r=!1),this.throwIfDisposed(),W.matMul(this,t,n,r)},e.prototype.dot=function(t){return this.throwIfDisposed(),W.dot(this,t)},e.prototype.norm=function(t,n,r){return t===void 0&&(t="euclidean"),n===void 0&&(n=null),r===void 0&&(r=!1),this.throwIfDisposed(),W.norm(this,t,n,r)},e.prototype.slice=function(t,n){return this.throwIfDisposed(),W.slice(this,t,n)},e.prototype.reverse=function(t){return this.throwIfDisposed(),W.reverse(this,t)},e.prototype.concat=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),t instanceof e&&(t=[t]),W.concat([this].concat(t),n)},e.prototype.split=function(t,n){return n===void 0&&(n=0),this.throwIfDisposed(),W.split(this,t,n)},e.prototype.stack=function(t,n){return n===void 0&&(n=0),W.stack([this,t],n)},e.prototype.unstack=function(t){return t===void 0&&(t=0),W.unstack(this,t)},e.prototype.pad=function(t,n){return n===void 0&&(n=0),W.pad(this,t,n)},e.prototype.batchNormalization=function(t,n,r,o,i){return r===void 0&&(r=.001),P2("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,n,i,o,r)},e.prototype.batchNorm=function(t,n,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),W.batchNorm(this,t,n,r,o,i)},e.prototype.all=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.all(this,t,n)},e.prototype.any=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.any(this,t,n)},e.prototype.logSumExp=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.logSumExp(this,t,n)},e.prototype.sum=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.sum(this,t,n)},e.prototype.prod=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.prod(this,t,n)},e.prototype.mean=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.mean(this,t,n)},e.prototype.min=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.min(this,t,n)},e.prototype.max=function(t,n){return t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),W.max(this,t,n)},e.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),W.argMin(this,t)},e.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),W.argMax(this,t)},e.prototype.cast=function(t){return this.throwIfDisposed(),W.cast(this,t)},e.prototype.add=function(t){return this.throwIfDisposed(),W.add(this,t)},e.prototype.addStrict=function(t){return this.throwIfDisposed(),W.addStrict(this,t)},e.prototype.atan2=function(t){return this.throwIfDisposed(),W.atan2(this,t)},e.prototype.sub=function(t){return this.throwIfDisposed(),W.sub(this,t)},e.prototype.subStrict=function(t){return this.throwIfDisposed(),W.subStrict(this,t)},e.prototype.pow=function(t){return this.throwIfDisposed(),W.pow(this,t)},e.prototype.powStrict=function(t){return this.throwIfDisposed(),W.powStrict(this,t)},e.prototype.mul=function(t){return this.throwIfDisposed(),W.mul(this,t)},e.prototype.mulStrict=function(t){return this.throwIfDisposed(),W.mulStrict(this,t)},e.prototype.div=function(t){return this.throwIfDisposed(),W.div(this,t)},e.prototype.divNoNan=function(t){return this.throwIfDisposed(),W.divNoNan(this,t)},e.prototype.floorDiv=function(t){return this.throwIfDisposed(),W.floorDiv(this,t)},e.prototype.divStrict=function(t){return this.throwIfDisposed(),W.divStrict(this,t)},e.prototype.minimum=function(t){return this.throwIfDisposed(),W.minimum(this,t)},e.prototype.minimumStrict=function(t){return this.throwIfDisposed(),W.minimumStrict(this,t)},e.prototype.maximum=function(t){return this.throwIfDisposed(),W.maximum(this,t)},e.prototype.maximumStrict=function(t){return this.throwIfDisposed(),W.maximumStrict(this,t)},e.prototype.mod=function(t){return this.throwIfDisposed(),W.mod(this,t)},e.prototype.modStrict=function(t){return this.throwIfDisposed(),W.modStrict(this,t)},e.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),W.squaredDifferenceStrict(this,t)},e.prototype.transpose=function(t){return this.throwIfDisposed(),W.transpose(this,t)},e.prototype.notEqual=function(t){return this.throwIfDisposed(),W.notEqual(this,t)},e.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),W.notEqualStrict(this,t)},e.prototype.less=function(t){return this.throwIfDisposed(),W.less(this,t)},e.prototype.lessStrict=function(t){return this.throwIfDisposed(),W.lessStrict(this,t)},e.prototype.equal=function(t){return this.throwIfDisposed(),W.equal(this,t)},e.prototype.equalStrict=function(t){return this.throwIfDisposed(),W.equalStrict(this,t)},e.prototype.lessEqual=function(t){return this.throwIfDisposed(),W.lessEqual(this,t)},e.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),W.lessEqualStrict(this,t)},e.prototype.greater=function(t){return this.throwIfDisposed(),W.greater(this,t)},e.prototype.greaterStrict=function(t){return this.throwIfDisposed(),W.greaterStrict(this,t)},e.prototype.greaterEqual=function(t){return this.throwIfDisposed(),W.greaterEqual(this,t)},e.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),W.greaterEqualStrict(this,t)},e.prototype.logicalAnd=function(t){return this.throwIfDisposed(),W.logicalAnd(this,t)},e.prototype.logicalOr=function(t){return this.throwIfDisposed(),W.logicalOr(this,t)},e.prototype.logicalNot=function(){return this.throwIfDisposed(),W.logicalNot(this)},e.prototype.logicalXor=function(t){return this.throwIfDisposed(),W.logicalXor(this,t)},e.prototype.where=function(t,n){return this.throwIfDisposed(),W.where(t,this,n)},e.prototype.neg=function(){return this.throwIfDisposed(),W.neg(this)},e.prototype.ceil=function(){return this.throwIfDisposed(),W.ceil(this)},e.prototype.floor=function(){return this.throwIfDisposed(),W.floor(this)},e.prototype.sign=function(){return this.throwIfDisposed(),W.sign(this)},e.prototype.isNaN=function(){return this.throwIfDisposed(),W.isNaN(this)},e.prototype.isInf=function(){return this.throwIfDisposed(),W.isInf(this)},e.prototype.isFinite=function(){return this.throwIfDisposed(),W.isFinite(this)},e.prototype.exp=function(){return this.throwIfDisposed(),W.exp(this)},e.prototype.expm1=function(){return this.throwIfDisposed(),W.expm1(this)},e.prototype.log=function(){return this.throwIfDisposed(),W.log(this)},e.prototype.log1p=function(){return this.throwIfDisposed(),W.log1p(this)},e.prototype.sqrt=function(){return this.throwIfDisposed(),W.sqrt(this)},e.prototype.rsqrt=function(){return this.throwIfDisposed(),W.rsqrt(this)},e.prototype.square=function(){return this.throwIfDisposed(),W.square(this)},e.prototype.reciprocal=function(){return this.throwIfDisposed(),W.reciprocal(this)},e.prototype.abs=function(){return this.throwIfDisposed(),W.abs(this)},e.prototype.clipByValue=function(t,n){return this.throwIfDisposed(),W.clipByValue(this,t,n)},e.prototype.relu=function(){return this.throwIfDisposed(),W.relu(this)},e.prototype.relu6=function(){return this.throwIfDisposed(),W.relu6(this)},e.prototype.elu=function(){return this.throwIfDisposed(),W.elu(this)},e.prototype.selu=function(){return this.throwIfDisposed(),W.selu(this)},e.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),W.leakyRelu(this,t)},e.prototype.prelu=function(t){return this.throwIfDisposed(),W.prelu(this,t)},e.prototype.sigmoid=function(){return this.throwIfDisposed(),W.sigmoid(this)},e.prototype.logSigmoid=function(){return this.throwIfDisposed(),W.logSigmoid(this)},e.prototype.softplus=function(){return this.throwIfDisposed(),W.softplus(this)},e.prototype.zerosLike=function(){return this.throwIfDisposed(),W.zerosLike(this)},e.prototype.onesLike=function(){return this.throwIfDisposed(),W.onesLike(this)},e.prototype.sin=function(){return this.throwIfDisposed(),W.sin(this)},e.prototype.cos=function(){return this.throwIfDisposed(),W.cos(this)},e.prototype.tan=function(){return this.throwIfDisposed(),W.tan(this)},e.prototype.asin=function(){return this.throwIfDisposed(),W.asin(this)},e.prototype.acos=function(){return this.throwIfDisposed(),W.acos(this)},e.prototype.atan=function(){return this.throwIfDisposed(),W.atan(this)},e.prototype.sinh=function(){return this.throwIfDisposed(),W.sinh(this)},e.prototype.cosh=function(){return this.throwIfDisposed(),W.cosh(this)},e.prototype.tanh=function(){return this.throwIfDisposed(),W.tanh(this)},e.prototype.asinh=function(){return this.throwIfDisposed(),W.asinh(this)},e.prototype.acosh=function(){return this.throwIfDisposed(),W.acosh(this)},e.prototype.atanh=function(){return this.throwIfDisposed(),W.atanh(this)},e.prototype.erf=function(){return this.throwIfDisposed(),W.erf(this)},e.prototype.round=function(){return this.throwIfDisposed(),W.round(this)},e.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),W.step(this,t)},e.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),W.softmax(this,t)},e.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),W.logSoftmax(this,t)},e.prototype.resizeBilinear=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),W.image.resizeBilinear(this,t,n)},e.prototype.resizeNearestNeighbor=function(t,n){return n===void 0&&(n=!1),this.throwIfDisposed(),W.image.resizeNearestNeighbor(this,t,n)},e.prototype.conv1d=function(t,n,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),W.conv1d(this,t,n,r,o,i,a)},e.prototype.conv2d=function(t,n,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),W.conv2d(this,t,n,r,o,i,a)},e.prototype.conv2dTranspose=function(t,n,r,o,i){return this.throwIfDisposed(),W.conv2dTranspose(this,t,n,r,o,i)},e.prototype.depthwiseConv2D=function(t,n,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),W.depthwiseConv2d(this,t,n,r,o,i,a)},e.prototype.separableConv2d=function(t,n,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),W.separableConv2d(this,t,n,r,o,i,a)},e.prototype.avgPool=function(t,n,r,o){return this.throwIfDisposed(),W.avgPool(this,t,n,r,o)},e.prototype.maxPool=function(t,n,r,o){return this.throwIfDisposed(),W.maxPool(this,t,n,r,o)},e.prototype.localResponseNormalization=function(t,n,r,o){return t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),o===void 0&&(o=.5),W.localResponseNormalization(this,t,n,r,o)},e.prototype.pool=function(t,n,r,o,i){return this.throwIfDisposed(),W.pool(this,t,n,r,o,i)},e.prototype.variable=function(t,n,r){return t===void 0&&(t=!0),this.throwIfDisposed(),Kn().makeVariable(this,t,n,r)},e.prototype.unsortedSegmentSum=function(t,n){return this.throwIfDisposed(),W.unsortedSegmentSum(this,t,n)},e.prototype.batchToSpaceND=function(t,n){return this.throwIfDisposed(),W.batchToSpaceND(this,t,n)},e.prototype.spaceToBatchND=function(t,n){return this.throwIfDisposed(),W.spaceToBatchND(this,t,n)},e.prototype.topk=function(t,n){return t===void 0&&(t=1),n===void 0&&(n=!0),this.throwIfDisposed(),W.topk(this,t,n)},e.prototype.stridedSlice=function(t,n,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),W.stridedSlice(this,t,n,r,o,i,a,s,u)},e.prototype.depthToSpace=function(t,n){return this.throwIfDisposed(),W.depthToSpace(this,t,n)},e.prototype.fft=function(){return this.throwIfDisposed(),W.spectral.fft(this)},e.prototype.ifft=function(){return this.throwIfDisposed(),W.spectral.ifft(this)},e.prototype.rfft=function(){return this.throwIfDisposed(),W.spectral.rfft(this)},e.prototype.irfft=function(){return this.throwIfDisposed(),W.spectral.irfft(this)},e}();Object.defineProperty(Ve,Symbol.hasInstance,{value:function(e){return!!e&&e.dataId!=null&&e.shape!=null&&e.dtype!=null}});var l0,_p,kp,Rp,Ip,na=function(e){function t(n,r,o,i){var a=e.call(this,n.shape,n.dtype,n.dataId,i)||this;return a.trainable=r,a.name=o,a}return On(t,e),t.prototype.assign=function(n){if(n.dtype!==this.dtype)throw new Error("dtype of the new value ("+n.dtype+") and previous value ("+this.dtype+") must match");if(!gt(n.shape,this.shape))throw new Error("shape of the new value ("+n.shape+") and previous value ("+this.shape+") must match");Kn().disposeTensor(this),this.dataId=n.dataId,Kn().incRef(this,null)},t.prototype.dispose=function(){Kn().disposeVariable(this),this.isDisposedInternal=!0},t}(Ve);Object.defineProperty(na,Symbol.hasInstance,{value:function(e){return e instanceof Ve&&e.assign!=null&&e.assign instanceof Function}}),function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"}(l0||(l0={})),function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"}(_p||(_p={})),function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"}(kp||(kp={})),function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"}(Rp||(Rp={})),function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"}(Ip||(Ip={}));var rA={float32:Rp,int32:_p,bool:kp,complex64:Ip};function bt(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error("Can not upcast "+e+" with "+t)}return rA[e][t]}function zf(e){return bt(e,"int32")}function Ke(e,t){if(e.dtype===t.dtype)return[e,t];var n=bt(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function oA(e,t){I(e.dtype===t.dtype,function(){return"The dtypes of the first("+e.dtype+") and second("+t.dtype+") input must match"})}function F2(e){var t=[];return function n(r,o,i){if(r!=null){if(r instanceof Ve)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var l=s[u];i.has(l)||(i.add(l),n(l,o,i))}}}}(e,t,new Set),t}var Wf,c0=function(){function e(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return e.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},e}(),iA=function(){function e(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new c0}return e.prototype.ready=function(){return te(this,void 0,void 0,function(){var t,n,r;return ne(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),n=0,o.label=1;case 1:return n<t.length?(r=t[n],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return n++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(e.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),n=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+n+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(n)}return this.backendInstance},enumerable:!0,configurable:!0}),e.prototype.backendNames=function(){return Object.keys(this.registryFactory)},e.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},e.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},e.prototype.registerBackend=function(t,n,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:n,priority:r},!0)},e.prototype.setBackend=function(t){return te(this,void 0,void 0,function(){var n,r,o;return ne(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,n=this.initializeBackend(t),r=n.success,n.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new eA(this.backendInstance),[2,!0]}})})},e.prototype.setupRegisteredKernels=function(){var t=this;o0(this.backendName).forEach(function(n){n.setupFunc!=null&&n.setupFunc(t.backendInstance)})},e.prototype.disposeRegisteredKernels=function(t){var n=this;o0(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(n.registry[t])})},e.prototype.initializeBackend=function(t){var n=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<n.pendingBackendInitId)&&(n.registry[t]=s,n.pendingBackendInit=null,!0)}).catch(function(s){return!(i<n.pendingBackendInitId)&&(n.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},e.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},e.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(n,r){return t.registryFactory[r].priority-t.registryFactory[n].priority})},e.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),n=0;n<t.length;n++){var r=t[n],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},e.prototype.moveData=function(t,n){var r=this.state.tensorInfo.get(n),o=r.backend,i=this.readSync(n);o.disposeData(n),r.backend=t,t.move(n,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},e.prototype.tidy=function(t,n){var r,o=this,i=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(r)},function(){return(r=n())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},e.prototype.scopedRun=function(t,n,r){t();try{var o=r();return n(),o}catch(i){throw n(),i}},e.prototype.nextTensorId=function(){return e.nextTensorId++},e.prototype.nextVariableId=function(){return e.nextVariableId++},e.prototype.clone=function(t){var n=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[n],function(o){return{x:function(){return o.toFloat()}}},[]),n},e.prototype.runKernel=function(t,n,r,o,i){return this.runKernelFunc(null,n,null,t,r,o,i)},e.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},e.prototype.checkKernelForMemLeak=function(t,n,r){var o=this.backend.numDataIds(),i=0;r.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-n-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},e.prototype.runKernelFunc=function(t,n,r,o,i,a,s){var u,l=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var c=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var d,p=function(y){f&&(c=y.map(function(x){return l.keep(l.clone(x))}))},h=this.state.numBytes,m=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var g,v=S2(o,this.backendName);return d=v!=null?function(){var y=l.backend.numDataIds();g=v.kernelFunc({inputs:n,attrs:i,backend:l.backend});var x=Array.isArray(g)?g:[g];l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(o,y,x);var w=x.map(function(C){var E=C.dataId,S=C.shape,R=C.dtype;return l.makeTensorFromDataId(E,S,R)}),b=w.filter(function(C,E){return s[E]});return p((a||[]).slice().concat(b)),w}:function(){var y=l.backend.numDataIds();g=l.tidy(function(){return t(l.backend,p)});var x=Array.isArray(g)?g:[g];return l.shouldCheckForMemLeaks()&&l.checkKernelForMemLeak(o,y,x),x},this.scopedRun(function(){return l.state.kernelDepth++},function(){return l.state.kernelDepth--},function(){u=l.ENV.getBool("DEBUG")?l.profiler.profileKernel(o,n,function(){return d()}):d()}),f&&this.addTapeNode(o,n,u,r,c),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-h,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-m,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(n).map(function(y){return n[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(g)?u:u[0]},e.prototype.makeTensor=function(t,n,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&Jh(t[0])&&(i=t.map(function(c){return J4(c)}));var a=o.write(i,n,r),s=new Ve(n,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),l=X4(i);this.state.numBytes+=l-u.bytes,u.bytes=l}return s},e.prototype.makeTensorFromDataId=function(t,n,r,o){var i=new Ve(n,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},e.prototype.makeVariable=function(t,n,r,o){n===void 0&&(n=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new na(t,n,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},e.prototype.incRef=function(t,n){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*I2(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof na||this.track(t)},e.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var n=this.state.tensorInfo.get(t.dataId);n.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=n.bytes),this.state.numDataBuffers--,n.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},e.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var n=this.state.registeredVariables[t];this.disposeVariable(n)}},e.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},e.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},e.prototype.profile=function(t){return te(this,void 0,void 0,function(){var n,r;return ne(this,function(o){return this.state.profiling=!0,n=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},e.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},e.prototype.addTapeNode=function(t,n,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:r,saved:i},u=j4(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(l){return l=l.map(function(c,f){if(c==null){var d=r[f],p=Ps(d.size,d.dtype);return a.makeTensor(p,d.shape,d.dtype)}return c}),o(l.length>1?l:l[0],i)}),this.state.activeTape.push(s)},e.prototype.keep=function(t){return t.kept=!0,t},e.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},e.prototype.endTape=function(){this.state.gradientDepth--},e.prototype.startScope=function(t){var n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n},e.prototype.endScope=function(t){for(var n=this,r=F2(t),o=new Set(r.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||n.track(u)})},e.prototype.gradients=function(t,n,r,o){var i=this;if(o===void 0&&(o=!1),I(n.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});I(a instanceof Ve,function(){return"The result y returned by f() must be a tensor."});var s=function(u,l,c){for(var f={},d={},p=0;p<l.length;p++)f[l[p].id]=!0;for(p=0;p<u.length;p++){var h=(C=u[p]).inputs;for(var m in h){for(var g=h[m],v=!1,y=0;y<l.length;y++)if(f[g.id]){C.outputs.forEach(function(k){return f[k.id]=!0}),v=!0,d[C.id]=!0;break}if(v)break}}var x={};x[c.id]=!0;var w={};for(p=u.length-1;p>=0;p--)for(h=(C=u[p]).inputs,y=0;y<C.outputs.length;y++)if(x[C.outputs[y].id]){for(var m in h)x[h[m].id]=!0,w[C.id]=!0;break}var b=[];for(p=0;p<u.length;p++){var C;if(d[(C=u[p]).id]&&w[C.id]){var E={};for(var m in C.inputs){var S=C.inputs[m];f[S.id]&&(E[m]=S)}var R=Object.assign({},C);R.inputs=E,R.outputs=C.outputs,b.push(R)}}return b}(this.state.activeTape,n,a);if(!o&&s.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,l,c={};c[a.id]=r??(u=a.shape,l=T2(oe(u),"float32"),F.makeTensor(l,u,"float32")),function(d,p,h){for(var m=function(v){var y=p[v],x=[];if(y.outputs.forEach(function(E){var S=d[E.id];S!=null?x.push(S):x.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var w=y.gradient(x),b=function(E){if(!(E in w))throw new Error("Cannot backprop through input "+E+". Available gradients found: "+Object.keys(w)+".");var S=h(function(){return w[E]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+E+" must have 'float32' dtype, but has '"+S.dtype+"'");var R=y.inputs[E];if(!gt(S.shape,R.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+E+"' has shape '"+S.shape+"', which does not match the shape of the input '"+R.shape+"'");if(d[R.id]==null)d[R.id]=S;else{var k=d[R.id];d[R.id]=k.add(S),k.dispose()}};for(var C in y.inputs)b(C)},g=p.length-1;g>=0;g--)m(g)}(c,s,function(d){return i.tidy(d)});var f=n.map(function(d){return c[d.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(d){for(var p=0,h=d.saved;p<h.length;p++)h[p].dispose()}),i.state.activeTape=null),{value:a,grads:f}})},e.prototype.customGrad=function(t){var n=this;return I(Ep(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];I(o.every(function(s){return s instanceof Ve}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),n.runKernelFunc(function(s,u){return I((r=t.apply(void 0,o.concat([u]))).value instanceof Ve,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),I(Ep(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},a,function(s,u){var l=r.gradFunc(s,u),c=Array.isArray(l)?l:[l];I(c.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),I(c.every(function(d){return d instanceof Ve}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return c.forEach(function(d,p){f[p]=function(){return d}}),f})}},e.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},e.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},e.prototype.time=function(t){return te(this,void 0,void 0,function(){var n,r;return ne(this,function(o){switch(o.label){case 0:return n=Gn(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=Gn()-n,[2,r]}})})},e.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(e.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),e.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new c0,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},e.nextTensorId=0,e.nextVariableId=0,e}(),F=function(){var e=function(){if(Wf==null){var n=void 0;if(typeof window<"u")n=window;else if(typeof global<"u")n=global;else if(typeof process<"u")n=process;else{if(typeof self>"u")throw new Error("Could not find a global object");n=self}Wf=n}return Wf}();if(e._tfengine==null){var t=new z4(e);e._tfengine=new iA(t)}return function(n){E2=n}(e._tfengine.ENV),Kn=function(){return e._tfengine},e._tfengine}();function O2(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var dr=H();dr.registerFlag("DEBUG",function(){return!1},function(e){e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),dr.registerFlag("IS_BROWSER",function(){return O2()}),dr.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),dr.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),dr.registerFlag("PROD",function(){return!1}),dr.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return dr.getBool("DEBUG")}),dr.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),dr.registerFlag("IS_TEST",function(){return!1});var ms,rn,en,Eo={},jf={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function aA(e,t){Eo[e]=t}function ir(e){e in Eo||(Eo[e]=function(n){if(n!==1&&n!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(n);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete Eo[n]},!1),n===1?r.getContext("webgl",jf)||r.getContext("experimental-webgl",jf):r.getContext("webgl2",jf)}(e));var t=Eo[e];return t.isContextLost()?(delete Eo[e],ir(e)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Eo[e])}function Cc(e,t){return[t,e]}function Ha(e){var t=oe(e);return Cp(Math.ceil(t/4))}function Fs(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function Zh(e,t){var n,r,o,i,a,s,u,l,c,f=e;return H().getNumber("WEBGL_VERSION")===2?(n=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,l=f.HALF_FLOAT,c=f.FLOAT):(n=e.RGBA,r=e.RGBA,o=e.RGBA,i=f.RGBA,a=e.RGBA,s=4,u=4,l=t!=null?t.HALF_FLOAT_OES:null,c=e.FLOAT),{internalFormatFloat:n,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:e.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:l,textureTypeFloat:c}}function se(e,t,n){var r=n();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+cA(o,i))}(e),r}(function(e){e[e.DENSE=0]="DENSE",e[e.SHARED_BATCH=1]="SHARED_BATCH"})(ms||(ms={})),function(e){e[e.RENDER=0]="RENDER",e[e.UPLOAD=1]="UPLOAD",e[e.PIXELS=2]="PIXELS",e[e.DOWNLOAD=3]="DOWNLOAD"}(rn||(rn={})),function(e){e[e.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",e[e.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",e[e.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",e[e.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",e[e.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(en||(en={}));var sA=596e-10,uA=65504;function lA(e){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||e===0||sA<Math.abs(e)&&Math.abs(e)<uA)}function cA(e,t){switch(t){case e.NO_ERROR:return"NO_ERROR";case e.INVALID_ENUM:return"INVALID_ENUM";case e.INVALID_VALUE:return"INVALID_VALUE";case e.INVALID_OPERATION:return"INVALID_OPERATION";case e.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case e.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case e.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function cu(e,t,n){return Ar(e,t,function(){return e.getExtension(n)},'Extension "'+n+'" not supported on this browser.')}function fA(e,t,n){var r=Ar(e,t,function(){return e.createShader(e.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(se(e,t,function(){return e.shaderSource(r,n)}),se(e,t,function(){return e.compileShader(r)}),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function dA(e,t,n){var r=Ar(e,t,function(){return e.createShader(e.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(se(e,t,function(){return e.shaderSource(r,n)}),se(e,t,function(){return e.compileShader(r)}),e.getShaderParameter(r,e.COMPILE_STATUS)===!1)throw function(o,i){var a=pA.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),l=u.length.toString().length+2,c=u.map(function(g,v){return Oi((v+1).toString(),l)+g}),f=0,d=0;d<c.length;d++)f=Math.max(c[d].length,f);var p=c.slice(0,s-1),h=c.slice(s-1,s),m=c.slice(s);console.log(p.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+Oi(h[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(m.join(`
`))}(n,e.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var $f,Uf,pA=/ERROR: [0-9]+:([0-9]+):/g;function hA(e,t){return Ar(e,t,function(){return e.createProgram()},"Unable to create WebGLProgram.")}function vA(e,t,n){if(se(e,t,function(){return e.linkProgram(n)}),e.getProgramParameter(n,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(n)),new Error("Failed to link vertex and fragment shaders.")}function Vf(e,t,n){if(se(e,t,function(){return e.validateProgram(n)}),e.getProgramParameter(n,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(n)),new Error("Shader program validation failed.")}function mA(e,t,n){var r=Ar(e,t,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return se(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),se(e,t,function(){return e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function gA(e,t,n){var r=Ar(e,t,function(){return e.createBuffer()},"Unable to create WebGLBuffer");return se(e,t,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,r)}),se(e,t,function(){return e.bufferData(e.ELEMENT_ARRAY_BUFFER,n,e.STATIC_DRAW)}),r}function yA(e,t){return Ar(e,t,function(){return e.createTexture()},"Unable to create WebGLTexture.")}function xA(e,t){var n=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e<=0||t<=0){var r="["+e+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(e>n||t>n)throw r="["+e+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+n+"x"+n+"]")+".")}function wA(e,t){return Ar(e,t,function(){return e.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function f0(e,t,n,r,o,i,a,s){var u=e.getAttribLocation(n,r);return u!==-1&&(se(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,o)}),se(e,t,function(){return e.vertexAttribPointer(u,i,e.FLOAT,!1,a,s)}),se(e,t,function(){return e.enableVertexAttribArray(u)}),!0)}function bA(e,t,n,r){kA(e,r),se(e,t,function(){return e.activeTexture(e.TEXTURE0+r)}),se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)})}function CA(e,t,n,r){return Ar(e,t,function(){return e.getUniformLocation(n,r)},'uniform "'+r+'" not present in program.')}function EA(e,t,n){return e.getUniformLocation(t,n)}function SA(e,t,n,r,o,i){se(e,t,function(){return bA(e,t,r,i)}),se(e,t,function(){return e.uniform1i(o,i)})}function Hf(e,t,n,r){se(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,r)}),se(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)})}function d0(e,t,n){se(e,t,function(){return e.bindFramebuffer(e.FRAMEBUFFER,n)}),se(e,t,function(){return e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)})}function fu(e){var t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+_A(e,t))}function _A(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case e.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Ar(e,t,n,r){var o=se(e,t,function(){return n()});if(o==null)throw new Error(r);return o}function kA(e,t){var n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+n+"]")+".")}function _l(e,t){return t===void 0&&(t=2),oe(e.slice(0,e.length-t))}function kl(e){if(e.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Gf(e){var t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[_l(e)].concat(kl(e))),t}function RA(e,t){var n;t===void 0&&(t=!1);var r=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(e=e.map(function(l,c){return c>=e.length-2?R2(e[c]):e[c]})).length===1&&(e=[2,e[0]])),e.length!==2){var o=_o(e);e=o.newShape}var i=oe(e);if(e.length<=1&&i<=r)return[1,i];if(e.length===2&&e[0]<=r&&e[1]<=r)return e;if(e.length===3&&e[0]*e[1]<=r&&e[2]<=r)return[e[0]*e[1],e[2]];if(e.length===3&&e[0]<=r&&e[1]*e[2]<=r)return[e[0],e[1]*e[2]];if(e.length===4&&e[0]*e[1]*e[2]<=r&&e[3]<=r)return[e[0]*e[1]*e[2],e[3]];if(e.length===4&&e[0]<=r&&e[1]*e[2]*e[3]<=r)return[e[0],e[1]*e[2]*e[3]];if(t){var a=_l(e),s=2,u=2;return e.length&&(s=(n=kl(e))[0],u=n[1]),Cp(i=a*(s/2)*(u/2)).map(function(l){return 2*l})}return Cp(i)}function du(e){return e%2==0}function pu(e,t){if(gt(e=e.slice(-2),t=t.slice(-2))||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){var n=e.slice(-1)[0],r=t.slice(-1)[0];if(n===r||du(n)&&du(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&du(e[0])&&du(t[0])}function IA(e){if($f==null){var t=ir(e);$f=t.getParameter(t.MAX_TEXTURE_SIZE)}return $f}function AA(e){if(Uf==null){var t=ir(e);Uf=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Uf)}function TA(e){if(e===0)return 0;var t=ir(e);return gn(t,"EXT_disjoint_timer_query_webgl2")&&e===2?2:gn(t,"EXT_disjoint_timer_query")?1:0}function gn(e,t){return e.getExtension(t)!=null}function p0(e){try{if(ir(e)!=null)return!0}catch{return!1}return!1}function NA(e){if(e===0)return!1;var t=ir(e);if(e===1){if(!gn(t,"OES_texture_float"))return!1}else if(!gn(t,"EXT_color_buffer_float"))return!1;return Ap(t)}function DA(e){if(e===0)return!1;var t=ir(e);if(e!==1){if(gn(t,"EXT_color_buffer_float"))return Ap(t);if(gn(t,"EXT_color_buffer_half_float")){var n=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var i=Zh(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u}(t,n)}return!1}return!!gn(t,"OES_texture_float")&&!!gn(t,"WEBGL_color_buffer_float")&&Ap(t)}function Ap(e){var t=Zh(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);var o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),o}function PA(e){return e===2&&ir(e).fenceSync!=null}var de=H();function M2(e){H().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function Z(e,t){return F.tidy(e,t)}function Kt(e){F2(e).forEach(function(t){return t.dispose()})}function FA(e){return F.keep(e)}function Rl(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];H().getBool("IS_TEST")||console.warn.apply(console,e)}function go(e,t){var n=e;if(er(e))return t==="string"?[]:[e.length];if(!Array.isArray(e))return[];for(var r=[];Array.isArray(n)||er(n)&&t!=="string";)r.push(n.length),n=n[0];return Array.isArray(e)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!er(i))return void I(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});I(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),I(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),l=0;l<i.length;++l)o(i[l],u,s.concat(l))}(e,r,[]),r}function h0(e,t,n,r){if(e!=null&&(e!=="numeric"&&e!==t||e==="numeric"&&t==="string"))throw new Error("Argument '"+n+"' passed to '"+r+"' must be "+e+" tensor, but got "+t+" tensor")}function _(e,t,n,r){if(r===void 0&&(r="numeric"),e instanceof Ve)return h0(r,e.dtype,t,n),e;var o=Ds(e);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),h0(r,o,t,n),e==null||!er(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){var i=e==null?"null":e.constructor.name;throw new Error("Argument '"+t+"' passed to '"+n+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=go(e,o);er(e)||Array.isArray(e)||(e=[e]);var s=o!=="string"?A2(e,o,H().getBool("DEBUG")):ta(e,[],!0);return F.makeTensor(s,a,o)}function Il(e,t,n,r){if(r===void 0&&(r="numeric"),!Array.isArray(e))throw new Error("Argument "+t+" passed to "+n+" must be a `Tensor[]` or `TensorLike[]`");return e.map(function(o,i){return _(o,t+"["+i+"]",n)},r)}function B2(e,t){for(var n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function OA(e,t,n){for(var r=e.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)n.indexOf(s)===-1?o.push(e[i++]):o.push(t[a++]);return o}function It(e,t){for(var n=[],r=e.length,o=0;o<r;o++)t.indexOf(o)===-1&&n.push(e[o]);return[n,t.map(function(i){return e[i]})]}function Xt(e,t){return OA(e,t.map(function(n){return 1}),t)}function Zt(e,t,n){I(B2(t,n),function(){return e+" supports only inner-most axes for now. Got axes "+t+" and rank-"+n+" input."})}function ar(e,t){if(B2(e,t))return null;for(var n=[],r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(function(o){return n.push(o)}),n}function ev(e){return e.map(function(t,n){return[n,t]}).sort(function(t,n){return t[1]-n[1]}).map(function(t){return t[0]})}function sr(e,t){for(var n=[],r=t-e;r<t;++r)n.push(r);return n}function MA(e,t){var n=e[0].length;e.forEach(function(o,i){I(o.length===n,function(){return"Error in concat"+n+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+n+")"})}),I(t>=0&&t<n,function(){return"Error in concat"+n+"D: axis must be between 0 and "+(n-1)+"."});var r=e[0];e.forEach(function(o,i){for(var a=0;a<n;a++)I(a===t||o[a]===r[a],function(){return"Error in concat"+n+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."})})}function ra(e,t){for(var n=e[0].slice(),r=1;r<e.length;r++)n[t]+=e[r][t];return n}function N(e){var t=Object.keys(e);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var n=t[0],r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];F.startScope(n);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),F.endScope(s),s}catch(u){throw F.endScope(null),u}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}de.registerFlag("HAS_WEBGL",function(){return de.getNumber("WEBGL_VERSION")>0}),de.registerFlag("WEBGL_VERSION",function(){return p0(2)?2:p0(1)?1:0}),de.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return de.get("WEBGL_VERSION")===2}),de.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),de.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),de.registerFlag("WEBGL_PACK",function(){return de.getBool("HAS_WEBGL")}),de.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_CLIP",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),de.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_PACK_REDUCE",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_LAZILY_UNPACK",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_CONV_IM2COL",function(){return de.getBool("WEBGL_PACK")}),de.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return IA(de.getNumber("WEBGL_VERSION"))}),de.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return AA(de.getNumber("WEBGL_VERSION"))}),de.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var e=de.getNumber("WEBGL_VERSION");return e===0?0:TA(e)}),de.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return de.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(e=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))));var e}),de.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return NA(de.getNumber("WEBGL_VERSION"))}),de.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!de.getBool("WEBGL_FORCE_F16_TEXTURES")&&de.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),de.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return DA(de.getNumber("WEBGL_VERSION"))}),de.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return PA(de.getNumber("WEBGL_VERSION"))}),de.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return de.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),P2=M2;var wt=N({complex_:function(e,t){var n=_(e,"real","complex"),r=_(t,"imag","complex");return Ne(n.shape,r.shape,"real and imag shapes, "+n.shape+" and "+r.shape+", must match in call to tf.complex()."),F.runKernelFunc(function(o){return o.complex(n,r)},{$real:n,$imag:r})}}),vn=N({real_:function(e){var t=_(e,"input","real");return F.runKernelFunc(function(n){return n.real(t)},{$input:t})}}),Xn=N({imag_:function(e){var t=_(e,"input","imag");return F.runKernelFunc(function(n){return n.imag(t)},{$input:t})}});function Ct(e,t,n){return yo(e,t,go(e,n),n)}function yo(e,t,n,r){if(r==null&&(r=Ds(e)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!er(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){N2(t);var o=oe(t),i=oe(n);I(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<n.length;++a){var s=n[a],u=a!==n.length-1||s!==oe(t.slice(a));I(n[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+n+") does not match the provided shape ("+t+"). "})}}return er(e)||Array.isArray(e)||(e=[e]),t=t||n,e=r!=="string"?A2(e,r,H().getBool("DEBUG")):ta(e,[],!0),F.makeTensor(e,t,r)}function J(e,t){if((er(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&er(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return yo(e,[],[],t)}function nt(e,t){da(e);var n=go(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return yo(e,null,n,t)}function so(e,t,n){if(da(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=go(e,n);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return yo(e,t,r,n)}function tv(e,t,n){if(da(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=go(e,n);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return yo(e,t,r,n)}function jt(e,t,n){if(da(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=go(e,n);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return yo(e,t,r,n)}function BA(e,t,n){if(da(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=go(e,n);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return yo(e,t,r,n)}function LA(e,t,n){if(da(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=go(e,n);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return yo(e,t=t||r,r,n)}function zA(e,t,n,r){return t===void 0&&(t=!0),F.makeVariable(e,t,n,r)}function pa(e,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=pa(e,"float32"),r=Le(e,"float32");return wt(n,r)}var o=T2(oe(e),t);return F.makeTensor(o,e,t)}function Le(e,t){if(t===void 0&&(t="float32"),t==="complex64"){var n=Le(e,"float32"),r=Le(e,"float32");return wt(n,r)}var o=Ps(oe(e),t);return F.makeTensor(o,e,t)}function nr(e,t,n){return F.runKernelFunc(function(r){return r.fill(e,t,n)},{})}function WA(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");return F.runKernelFunc(function(r){return r.linspace(e,t,n)},{})}function Al(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r="float32"),n===0)throw new Error("Cannot have a step of zero");if(e===t||e<t&&n<0||t<e&&n>1)return Le([0],r);var o=Ps(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),o[0]=e;for(var i=1;i<o.length;i++)o[i]=o[i-1]+n;return nt(o,r)}var L2=N({onesLike_:function(e){var t=_(e,"x","onesLike");if(t.dtype==="complex64"){var n=L2(vn(t)),r=_e(Xn(t));return wt(n,r)}return F.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return _e(o)}}})}}),_e=N({zerosLike_:function(e){var t=_(e,"x","zerosLike");return F.runKernelFunc(function(n){return n.zerosLike(t)},{$x:t},function(n,r){return{$x:function(){return _e(n)}}})}}),ut=N({concat_:function(e,t){t===void 0&&(t=0),I(e.length>=1,function(){return"Pass at least one tensor to concat"});var n=Il(e,"tensors","concat");n[0].dtype==="complex64"&&n.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=dt(t,n[0].shape)[0];var r=ra(n.map(function(s){return s.shape}),t);if(oe(r)===0)return Ct([],r);if((n=n.filter(function(s){return s.size>0})).length===1)return n[0];var o=n.map(function(s){return s.shape});MA(o,t);var i=n,a={axis:t};return F.runKernelFunc(function(s){return s.concat(n,t)},i,function(s){var u=o.map(function(l){return l[t]});return nv(s,u,t).map(function(l){return function(){return l}})},"Concat",a)}}),jA=N({concat1d_:function(e){return ut(e,0)}}),$A=N({concat2d_:function(e,t){return ut(e,t)}}),UA=N({concat3d_:function(e,t){return ut(e,t)}}),VA=N({concat4d_:function(e,t){return ut(e,t)}}),nv=N({split_:function(e,t,n){n===void 0&&(n=0);var r,o=_(e,"x","split");return n=dt(n,o.shape)[0],typeof t=="number"?(I(o.shape[n]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[n]/t)):(I(o.shape[n]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),F.runKernelFunc(function(i){return i.split(o,r,n)},{$x:o},function(i){return{$x:function(){return ut(i,n)}}})}});function Yo(e,t){return e(t={exports:{}},t.exports),t.exports}var HA=Yo(function(e){(function(t,n,r){function o(s){var u,l=this,c=(u=4022871197,function(f){f=f.toString();for(var d=0;d<f.length;d++){var p=.02519603282416938*(u+=f.charCodeAt(d));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});l.next=function(){var f=2091639*l.s0+23283064365386963e-26*l.c;return l.s0=l.s1,l.s1=l.s2,l.s2=f-(l.c=0|f)},l.c=1,l.s0=c(" "),l.s1=c(" "),l.s2=c(" "),l.s0-=c(s),l.s0<0&&(l.s0+=1),l.s1-=c(s),l.s1<0&&(l.s1+=1),l.s2-=c(s),l.s2<0&&(l.s2+=1),c=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var l=new o(s),c=u&&u.state,f=l.next;return f.int32=function(){return 4294967296*l.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,c&&(typeof c=="object"&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.alea=a})(0,e,!1)}),GA=Yo(function(e){(function(t,n,r){function o(s){var u=this,l="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:l+=s;for(var c=0;c<l.length+64;c++)u.x^=0|l.charCodeAt(c),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var l=new o(s),c=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},f.int32=l.next,f.quick=f,c&&(typeof c=="object"&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.xor128=a})(0,e,!1)}),qA=Yo(function(e){(function(t,n,r){function o(s){var u=this,l="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:l+=s;for(var c=0;c<l.length+64;c++)u.x^=0|l.charCodeAt(c),c==l.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var l=new o(s),c=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},f.int32=l.next,f.quick=f,c&&(typeof c=="object"&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.xorwow=a})(0,e,!1)}),KA=Yo(function(e){(function(t,n,r){function o(s){var u=this;u.next=function(){var l,c,f=u.x,d=u.i;return l=f[d],c=(l^=l>>>7)^l<<24,c^=(l=f[d+1&7])^l>>>10,c^=(l=f[d+3&7])^l>>>3,c^=(l=f[d+4&7])^l<<7,l=f[d+7&7],c^=(l^=l<<13)^l<<9,f[d]=c,u.i=d+1&7,c},function(l,c){var f,d=[];if(c===(0|c))d[0]=c;else for(c=""+c,f=0;f<c.length;++f)d[7&f]=d[7&f]<<15^c.charCodeAt(f)+d[f+1&7]<<13;for(;d.length<8;)d.push(0);for(f=0;f<8&&d[f]===0;++f);for(f==8?d[7]=-1:d[f],l.x=d,l.i=0,f=256;f>0;--f)l.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var l=new o(s),c=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},f.int32=l.next,f.quick=f,c&&(c.x&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.xorshift7=a})(0,e,!1)}),XA=Yo(function(e){(function(t,n,r){function o(s){var u=this;u.next=function(){var l,c,f=u.w,d=u.X,p=u.i;return u.w=f=f+1640531527|0,c=d[p+34&127],l=d[p=p+1&127],c^=c<<13,l^=l<<17,c^=c>>>15,l^=l>>>12,c=d[p]=c^l,u.i=p,c+(f^f>>>16)|0},function(l,c){var f,d,p,h,m,g=[],v=128;for(c===(0|c)?(d=c,c=null):(c+="\0",d=0,v=Math.max(v,c.length)),p=0,h=-32;h<v;++h)c&&(d^=c.charCodeAt((h+32)%c.length)),h===0&&(m=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,h>=0&&(m=m+1640531527|0,p=(f=g[127&h]^=d+m)==0?p+1:0);for(p>=128&&(g[127&(c&&c.length||0)]=-1),p=127,h=512;h>0;--h)d=g[p+34&127],f=g[p=p+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,g[p]=d^f;l.w=m,l.X=g,l.i=p}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var l=new o(s),c=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},f.int32=l.next,f.quick=f,c&&(c.X&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.xor4096=a})(0,e,!1)}),YA=Yo(function(e){(function(t,n,r){function o(s){var u=this,l="";u.next=function(){var f=u.b,d=u.c,p=u.d,h=u.a;return f=f<<25^f>>>7^d,d=d-p|0,p=p<<24^p>>>8^h,h=h-f|0,u.b=f=f<<20^f>>>12^d,u.c=d=d-p|0,u.d=p<<16^d>>>16^h,u.a=h-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):l+=s;for(var c=0;c<l.length+20;c++)u.b^=0|l.charCodeAt(c),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var l=new o(s),c=u&&u.state,f=function(){return(l.next()>>>0)/4294967296};return f.double=function(){do var d=((l.next()>>>11)+(l.next()>>>0)/4294967296)/2097152;while(d===0);return d},f.int32=l.next,f.quick=f,c&&(typeof c=="object"&&i(c,l),f.state=function(){return i(l,{})}),f}n&&n.exports?n.exports=a:r&&r.amd?r(function(){return a}):this.tychei=a})(0,e,!1)}),So=Yo(function(e){(function(t,n){var r,o=this,i=256,a=6,s="random",u=n.pow(i,a),l=n.pow(2,52),c=2*l,f=i-1;function d(v,y,x){var w=[],b=m(function S(R,k){var D,T=[],z=typeof R;if(k&&z=="object")for(D in R)try{T.push(S(R[D],k-1))}catch{}return T.length?T:z=="string"?R:R+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[v,g(t)]:v??function(){try{var S;return r&&(S=r.randomBytes)?S=S(i):(S=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(S)),g(S)}catch{var R=o.navigator,k=R&&R.plugins;return[+new Date,o,k,o.screen,g(t)]}}(),3),w),C=new p(w),E=function(){for(var S=C.g(a),R=u,k=0;S<l;)S=(S+k)*i,R*=i,k=C.g(1);for(;S>=c;)S/=2,R/=2,k>>>=1;return(S+k)/R};return E.int32=function(){return 0|C.g(4)},E.quick=function(){return C.g(4)/4294967296},E.double=E,m(g(C.S),t),(y.pass||x||function(S,R,k,D){return D&&(D.S&&h(D,C),S.state=function(){return h(C,{})}),k?(n[s]=S,R):S})(E,b,"global"in y?y.global:this==n,y.state)}function p(v){var y,x=v.length,w=this,b=0,C=w.i=w.j=0,E=w.S=[];for(x||(v=[x++]);b<i;)E[b]=b++;for(b=0;b<i;b++)E[b]=E[C=f&C+v[b%x]+(y=E[b])],E[C]=y;(w.g=function(S){for(var R,k=0,D=w.i,T=w.j,z=w.S;S--;)R=z[D=f&D+1],k=k*i+z[f&(z[D]=z[T=f&T+R])+(z[T]=R)];return w.i=D,w.j=T,k})(i)}function h(v,y){return y.i=v.i,y.j=v.j,y.S=v.S.slice(),y}function m(v,y){for(var x,w=v+"",b=0;b<w.length;)y[f&b]=f&(x^=19*y[f&b])+w.charCodeAt(b++);return g(y)}function g(v){return String.fromCharCode.apply(0,v)}if(n["seed"+s]=d,m(n.random(),t),e.exports){e.exports=d;try{r=require("crypto")}catch{}}})([],Math)});So.alea=HA,So.xor128=GA,So.xorwow=qA,So.xorshift7=KA,So.xor4096=XA,So.tychei=YA;var Ec=So.alea,rv=function(){function e(t,n,r,o,i){this.mean=t,this.stdDev=n,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=Ec(a.toString())}return e.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var n,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);n=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(n)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(n)},e.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},e.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},e}(),QA=function(){function e(t,n,r,o){this.alpha=t,this.beta=1/n,this.dtype=r;var i=o||Math.random();this.randu=Ec(i.toString()),this.randn=new rv(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return e.prototype.nextValue=function(){for(var t,n,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,n=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<n||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},e.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},e}(),JA=function(){function e(t,n,r,o){var i=this;if(t===void 0&&(t=0),n===void 0&&(n=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=n-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+n+" <= 1 and dtype is not float");this.random=Ec(o)}return e.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},e.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},e}();function he(e,t,n){return t===void 0&&(t="float32"),t=t||"float32",N2(e),new vs(e,t,n)}function ZA(e,t){t===void 0&&(t=!1),console.log(e.toString(t))}var z2=N({batchToSpaceND_:function(e,t,n){var r=_(e,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return I(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),I(n.length===t.length,function(){return"crops.length is "+n.length+" but should be equal to blockShape.length  "+t.length}),I(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),F.runKernelFunc(function(i){return i.batchToSpaceND(r,t,n)},{$x:r},function(i){return{$x:function(){return i.spaceToBatchND(t,n)}}})}}),eT=N({broadcastTo_:function(e,t){var n=_(e,"broadcastTo","x"),r=n.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<n.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+n.rank+".");if(t.length>n.rank){for(var o=n.shape.slice();o.length<t.length;)o.unshift(1);n=n.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(n.shape[a]===t[a])i[a]=1;else if(n.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,l){return u>1?l:-1}).filter(function(u){return u>=0});return s.length===0?n.clone():F.runKernelFunc(function(u){return u.tile(n,i)},{input:n},function(u){return{input:function(){return u.sum(s,!0)}}})}}),tT=N({cast_:function(e,t){var n=_(e,"x","cast");if(!q4(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return F.runKernelFunc(function(o){return o.cast(n,t)},{x:n},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),nT=N({clone_:function(e){var t=_(e,"x","clone",null);return F.runKernelFunc(function(){return F.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(n){return{$x:function(){return n.toFloat()}}})}}),rT=N({cumsum_:function(e,t,n,r){t===void 0&&(t=0),n===void 0&&(n=!1),r===void 0&&(r=!1);var o=_(e,"x","cumsum"),i=ar([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=sr(1,o.rank)[0],u=F.runKernelFunc(function(l){return l.cumsum(a,s,n,r)},{permutedX:a},function(l){return{permutedX:function(){return l.cumsum(t,n,!r)}}});return i!=null&&(u=u.transpose(i)),u}}),oT=N({depthToSpace_:function(e,t,n){n===void 0&&(n="NHWC");var r=_(e,"x","depthToSpace"),o=n==="NHWC"?r.shape[1]:r.shape[2],i=n==="NHWC"?r.shape[2]:r.shape[3],a=n==="NHWC"?r.shape[3]:r.shape[1];return I(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),I(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape}),I(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape}),F.runKernelFunc(function(s){return s.depthToSpace(r,t,n)},{$x:r})}}),hn=N({expandDims_:function(e,t){t===void 0&&(t=0);var n=_(e,"x","expandDims",null);I(t<=n.rank,function(){return"Axis must be <= rank of the tensor"});var r=n.shape.slice();return t<0&&(I(-(n.rank+1)<=t,function(){return"Axis must be in the interval ["+-(n.rank+1)+", "+n.rank+"]"}),t=n.rank+t+1),r.splice(t,0,1),An(n,r)}}),W2=N({eye_:function(e,t,n,r){r===void 0&&(r="float32"),t==null&&(t=e);for(var o=he([e,t],r),i=e<=t?e:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(e,t);if(n==null)return s;if(n.length===1)return Mi(hn(s,0),[n[0],1,1]);if(n.length===2)return Mi(hn(hn(s,0),0),[n[0],n[1],1,1]);if(n.length===3)return Mi(hn(hn(hn(s,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+n.length+"D.")}}),iT=N({multinomial_:function(e,t,n,r){r===void 0&&(r=!1);var o=_(e,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);n=n||Math.random();var s=a===1?o.as2D(1,-1):o,u=F.runKernelFunc(function(l){return l.multinomial(s,r,t,n)},{logits2D:s});return a===1?u.as1D():u}}),Tp=N({oneHot_:function(e,t,n,r){if(n===void 0&&(n=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=_(e,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),F.runKernelFunc(function(a){return a.oneHot(o,t,n,r)},{$indices:o},function(a){return{$indices:function(){return Le(o.shape,"float32")}}}).reshape(i)}}),Qo=N({pad_:function(e,t,n){n===void 0&&(n=0);var r=_(e,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:n};return F.runKernelFunc(function(i){return i.pad(r,t,n)},{x:r},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,r.shape)}}},"PadV2",o)}}),aT=N({pad1d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Qo(e,[t],n)}}),sT=N({pad2d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Qo(e,t,n)}}),uT=N({pad3d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Qo(e,t,n)}}),lT=N({pad4d_:function(e,t,n){return n===void 0&&(n=0),I(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Qo(e,t,n)}}),cT=N({rand_:function(e,t,n){var r=oe(e),o=null;if(n==null||n==="float32")o=new Float32Array(r);else if(n==="int32")o=new Int32Array(r);else{if(n!=="bool")throw new Error("Unknown data type "+n);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return F.makeTensor(o,e,n)}}),fT=N({randomNormal_:function(e,t,n,r,o){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new rv(t,n,r,!1,o),a=he(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),dT=N({randomGamma_:function(e,t,n,r,o){if(n===void 0&&(n=1),r===void 0&&(r="float32"),n==null&&(n=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new QA(t,n,r,o),a=he(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),j2=N({randomUniform_:function(e,t,n,r,o){t===void 0&&(t=0),n===void 0&&(n=1),r===void 0&&(r="float32");for(var i=he(e,r),a=new JA(t,n,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),An=N({reshape_:function(e,t){var n=_(e,"x","reshape",null);t=H4(t,n.size),I(n.size===oe(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return F.runKernelFunc(function(o){return o.reshape(n,t)},{x:n},function(o){return{x:function(){return o.reshape(n.shape)}}},"Reshape",r)}}),$2=N({spaceToBatchND_:function(e,t,n){var r=_(e,"x","spaceToBatchND");return I(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),I(n.length===t.length,function(){return"paddings.shape[0] "+n.length+" must be equal to [blockShape] "+t.length}),I(r.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+n[a-1][0]+n[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+n.toString()+" must be divisible by blockShapes "+t.toString()}),F.runKernelFunc(function(o){return o.spaceToBatchND(r,t,n)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,n)}}})}}),U2=N({squeeze_:function(e,t){var n=_(e,"x","squeeze");return An(n,_o(n.shape,t).newShape)}}),un=N({stack_:function(e,t){t===void 0&&(t=0);var n=Il(e,"tensors","stack");if(I(n.length>=1,function(){return"Pass at least one tensor to tf.stack"}),n.length===1)return n[0].expandDims(t);var r=n[0].rank,o=n[0].shape,i=n[0].dtype;I(t<=r,function(){return"Axis must be <= rank of the tensor"}),n.forEach(function(s){Ne(o,s.shape,"All tensors passed to stack must have matching shapes")}),n.forEach(function(s){I(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=n.map(function(s){return s.expandDims(t)});return ut(a,t)}}),Mi=N({tile_:function(e,t){var n=_(e,"x","tile",null);I(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of reps "+t+"."});var r=[n],o={reps:t};return F.runKernelFunc(function(i,a){var s=i.tile(n,t);return a([n]),s},{x:n},function(i,a){var s=a[0];return{x:function(){var u=_e(s);if(s.rank===1)for(var l=0;l<t[0];++l)u=u.add(i.slice([l*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(l=0;l<t[0];++l)for(var c=0;c<t[1];++c)u=u.add(i.slice([l*s.shape[0],c*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(l=0;l<t[0];++l)for(c=0;c<t[1];++c)for(var f=0;f<t[2];++f)u=u.add(i.slice([l*s.shape[0],c*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(l=0;l<t[0];++l)for(c=0;c<t[1];++c)for(f=0;f<t[2];++f)for(var d=0;d<t[3];++d)u=u.add(i.slice([l*s.shape[0],c*s.shape[1],f*s.shape[2],d*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,r)}}),pT=N({truncatedNormal_:function(e,t,n,r,o){if(t===void 0&&(t=0),n===void 0&&(n=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new rv(t,n,r,!0,o),a=he(e,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),lt=N({unstack_:function(e,t){t===void 0&&(t=0),t=t||0;var n=_(e,"x","unstack");I(t>=-n.shape.length&&t<n.shape.length,function(){return"Axis = "+t+" is not in [-"+n.shape.length+", "+n.shape.length+")"}),t<0&&(t+=n.shape.length);var r={axis:t};return F.runKernelFunc(function(o){return o.unstack(n,t)},{x:n},function(o){return{x:function(){return un(o,t)}}},"Unpack",r)}}),hT=function(e,t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s,u,l,c,f;return ne(this,function(d){switch(d.label){case 0:return n=_(e,"x","setdiff1d"),r=_(t,"y","setdiff1d"),I(n.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+n.dtype+") and y ("+r.dtype+")."}),I(n.rank===1,function(){return"x should be 1D tensor, but got x ("+n.shape+")."}),I(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,n.data()];case 1:return o=d.sent(),[4,r.data()];case 2:for(i=d.sent(),a=new Set(i),s=0,c=0;c<o.length;c++)a.has(o[c])||s++;for(u=new vs([s],n.dtype),l=new vs([s],"int32"),c=0,f=0;c<o.length;c++)a.has(o[c])||(u.values[f]=o[c],l.values[f]=c,f++);return[2,[u.toTensor(),l.toTensor()]]}})})};function Tl(e,t,n,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(e[0]/n),o=o.concat(e.slice(1));else{o=o.concat(e[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([e[a+1]/t[a],t[a]]);o=o.concat(e.slice(i+1))}return o}function Nl(e,t,n){n===void 0&&(n=!0);var r=[];if(n){r.push(t);for(var o=t+1;o<e;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<e;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function Dl(e,t,n,r){r===void 0&&(r=!0);var o=[];r?o.push(e[0]/n):o.push(e[0]*n);for(var i=1;i<e.length;++i)i<=t.length?r?o.push(t[i-1]*e[i]):o.push(e[i]/t[i-1]):o.push(e[i]);return o}function V2(e,t){for(var n=[0],r=0;r<t;++r)n.push(e[r][0]);return n}function H2(e,t,n){for(var r=e.slice(0,1),o=0;o<n;++o)r.push(e[o+1]-t[o][0]-t[o][1]);return r}function G2(e,t){if(e.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+e.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>e.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+e.rank);if(e.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+e.shape+".");for(var n=t.shape,r=n[n.length-1],o=1,i=0;i<n.length-1;++i)o*=n[i];var a=e.shape,s=n.slice();s.pop();var u=1;for(i=r;i<e.rank;++i)u*=a[i],s.push(a[i]);var l=tr(e.shape).map(function(c){return c/u}).concat([1]).slice(0,r);return[s,o,u,l]}var q2=30;function qf(e){return e<=q2?e:Sp(e,Math.floor(Math.sqrt(e)))}function vT(e,t,n){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+n.shape+", indices.shape: "+t.shape+", shape: "+e+", sliceDim: "+r+", and batchDim: "+o+".";if(n.rank<o)throw new Error(i+" update.rank < "+o+". ");if(e.length<r+(n.rank-o))throw new Error(i+" Output shape length < "+(r+(n.rank-o)));if(n.rank!==o+e.length-r)throw new Error(i+" update.rank != "+(o+e.length-r));for(var a=0;a<o;++a)if(n.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+n.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<n.rank-o;++a)if(n.shape[a+o]!==e[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+n.shape[a+o]+") != shape["+(a+o)+"] ("+e[a+o]+")")}function mT(e,t,n){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(e.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+e.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(n.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+n);if(n.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(e.size===0)throw new Error("Updates specified for empty output. updates shape: "+e.shape)}vT(n,t,e)}function Pl(e,t,n){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=n.length,a=1,s=o;s<i;++s)a*=n[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:oe(t.shape)/u,sliceSize:a,strides:tr(n.slice(0,o)).concat([1]),outputSize:oe(n)}}function gT(e,t,n){I(e.rank===t.length,function(){return"Error in slice"+e.rank+"D: Length of begin "+t+" must match the rank of the array ("+e.rank+")."}),I(e.rank===n.length,function(){return"Error in slice"+e.rank+"D: Length of size "+n+" must match the rank of the array ("+e.rank+")."});for(var r=function(i){I(t[i]+n[i]<=e.shape[i],function(){return"Error in slice"+e.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+n[i])+") would overflow input.shape["+i+"] ("+e.shape[i]+")"})},o=0;o<e.rank;++o)r(o)}function v0(e){for(var t=[],n=0;e>0;)1&e&&t.push(n),e/=2,n++;return t}function ov(e,t,n){for(var r=[],o=0;o<e.length;o++)r[o]=Math.ceil((t[o]-e[o])/n[o]);return r}function yT(e,t,n,r,o){var i=t[o],a=n[o]||1;(e&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=bp(0,i,s-1)}function xT(e,t,n,r,o){var i=t[o],a=n[o]||1;(e&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?bp(0,i,s):bp(-1,i,s-1)}function K2(e,t,n){for(var r=n.length,o=0;o<n.length;o++)if(n[o]>1){r=o;break}for(o=r+1;o<n.length;o++)if(t[o]>0||n[o]!==e[o])return!1;return!0}function X2(e,t){for(var n=e.length>0?e[e.length-1]:1,r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function wT(e,t){I(Ep(e),function(){return"The f passed in variableGrads(f) must be a function"}),I(t==null||Array.isArray(t)&&t.every(function(c){return c instanceof na}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var n=t!=null;if(!n)for(var r in t=[],F.registeredVariables)t.push(F.registeredVariables[r]);var o=n?t.filter(function(c){return!c.trainable}):null,i=t.length;I((t=t.filter(function(c){return c.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=F.gradients(e,t,null,!0),s=a.value,u=a.grads;I(u.some(function(c){return c!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),I(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var l={};return t.forEach(function(c,f){u[f]!=null&&(l[c.name]=u[f])}),o!=null&&o.forEach(function(c){return l[c.name]=null}),{value:s,grads:l}}function Sc(e){return F.customGrad(e)}var Tr=N({softmax_:function(e,t){t===void 0&&(t=-1);var n=_(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and dim was "+t);return F.runKernelFunc(function(r,o){var i=r.softmax(n,t);return o([i]),i},{logits:n},function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),bT=N({logSoftmax_:function(e,t){t===void 0&&(t=-1);var n=_(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+n.rank+" and axis was "+t);return Sc(function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,l){var c=l[0].exp();return u.sub(u.sum(t,!0).mul(c))}}})(n)}}),Y2=function(){function e(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}return e.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},e.prototype.set=function(t,n){this.dataIdsCount++,this.data.set(t,n)},e.prototype.has=function(t){return this.data.has(t)},e.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},e.prototype.numDataIds=function(){return this.dataIdsCount},e}(),Q2=function(){function e(){}return e.prototype.time=function(t){return M("time")},e.prototype.read=function(t){return M("read")},e.prototype.readSync=function(t){return M("readSync")},e.prototype.numDataIds=function(){return M("numDataIds")},e.prototype.disposeData=function(t){return M("disposeData")},e.prototype.write=function(t,n,r){return M("write")},e.prototype.move=function(t,n,r,o){return M("move")},e.prototype.memory=function(){return M("memory")},e.prototype.floatPrecision=function(){return M("floatPrecision")},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.batchMatMul=function(t,n,r,o){return M("batchMatMul")},e.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,M("fusedBatchMatMul")},e.prototype.slice=function(t,n,r){return M("slice")},e.prototype.stridedSlice=function(t,n,r,o){return M("stridedSlice")},e.prototype.unstack=function(t,n){return M("unstack")},e.prototype.reverse=function(t,n){return M("reverse")},e.prototype.concat=function(t,n){return M("concat")},e.prototype.neg=function(t){return M("neg")},e.prototype.add=function(t,n){return M("add")},e.prototype.addN=function(t){return M("addN")},e.prototype.subtract=function(t,n){return M("subtract")},e.prototype.multiply=function(t,n){return M("multiply")},e.prototype.realDivide=function(t,n){return M("realDivide")},e.prototype.floorDiv=function(t,n){return M("floorDiv")},e.prototype.sum=function(t,n){return M("sum")},e.prototype.prod=function(t,n){return M("prod")},e.prototype.unsortedSegmentSum=function(t,n,r){return M("unsortedSegmentSum")},e.prototype.argMin=function(t,n){return M("argMin")},e.prototype.argMax=function(t,n){return M("argMax")},e.prototype.equal=function(t,n){return M("equal")},e.prototype.notEqual=function(t,n){return M("notEqual")},e.prototype.less=function(t,n){return M("less")},e.prototype.lessEqual=function(t,n){return M("lessEqual")},e.prototype.greater=function(t,n){return M("greater")},e.prototype.greaterEqual=function(t,n){return M("greaterEqual")},e.prototype.logicalNot=function(t){return M("logicalNot")},e.prototype.logicalAnd=function(t,n){return M("logicalAnd")},e.prototype.logicalOr=function(t,n){return M("logicalOr")},e.prototype.where=function(t){return M("where")},e.prototype.select=function(t,n,r){return M("select")},e.prototype.topk=function(t,n,r){return M("topk")},e.prototype.min=function(t,n){return M("min")},e.prototype.minimum=function(t,n){return M("minimum")},e.prototype.mod=function(t,n){return M("mod")},e.prototype.max=function(t,n){return M("max")},e.prototype.maximum=function(t,n){return M("maximum")},e.prototype.all=function(t,n){return M("all")},e.prototype.any=function(t,n){return M("any")},e.prototype.squaredDifference=function(t,n){return M("squaredDifference")},e.prototype.ceil=function(t){return M("ceil")},e.prototype.floor=function(t){return M("floor")},e.prototype.round=function(t){return M("round")},e.prototype.sign=function(t){return M("sign")},e.prototype.isNaN=function(t){return M("isNaN")},e.prototype.isInf=function(t){return M("isInf")},e.prototype.isFinite=function(t){return M("isFinite")},e.prototype.pow=function(t,n){return M("pow")},e.prototype.exp=function(t){return M("exp")},e.prototype.expm1=function(t){return M("expm1")},e.prototype.softmax=function(t,n){return M("softmax")},e.prototype.log=function(t){return M("log")},e.prototype.log1p=function(t){return M("log1p")},e.prototype.sqrt=function(t){return M("sqrt")},e.prototype.rsqrt=function(t){return M("rsqrt")},e.prototype.square=function(t){return M("square")},e.prototype.reciprocal=function(t){return M("reciprocal")},e.prototype.relu=function(t){return M("relu")},e.prototype.relu6=function(t){return M("relu6")},e.prototype.prelu=function(t,n){return M("prelu")},e.prototype.elu=function(t){return M("elu")},e.prototype.eluDer=function(t,n){return M("eluDer")},e.prototype.selu=function(t){return M("selu")},e.prototype.int=function(t){return M("int")},e.prototype.clip=function(t,n,r){return M("clip")},e.prototype.abs=function(t){return M("abs")},e.prototype.complexAbs=function(t){return M("complexAbs")},e.prototype.sigmoid=function(t){return M("sigmoid")},e.prototype.softplus=function(t){return M("softplus")},e.prototype.sin=function(t){return M("sin")},e.prototype.cos=function(t){return M("cos")},e.prototype.tan=function(t){return M("tan")},e.prototype.asin=function(t){return M("asin")},e.prototype.acos=function(t){return M("acos")},e.prototype.atan=function(t){return M("atan")},e.prototype.atan2=function(t,n){return M("atan2")},e.prototype.sinh=function(t){return M("sinh")},e.prototype.cosh=function(t){return M("cosh")},e.prototype.tanh=function(t){return M("tanh")},e.prototype.asinh=function(t){return M("asinh")},e.prototype.acosh=function(t){return M("acosh")},e.prototype.atanh=function(t){return M("atanh")},e.prototype.erf=function(t){return M("erf")},e.prototype.step=function(t,n){return M("step")},e.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedConv2d")},e.prototype.conv2d=function(t,n,r){return M("conv2d")},e.prototype.conv2dDerInput=function(t,n,r){return M("conv2dDerInput")},e.prototype.conv2dDerFilter=function(t,n,r){return M("conv2dDerFilter")},e.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedDepthwiseConv2D")},e.prototype.depthwiseConv2D=function(t,n,r){return M("depthwiseConv2D")},e.prototype.depthwiseConv2DDerInput=function(t,n,r){return M("depthwiseConv2DDerInput")},e.prototype.depthwiseConv2DDerFilter=function(t,n,r){return M("depthwiseConv2DDerFilter")},e.prototype.conv3d=function(t,n,r){return M("conv3d")},e.prototype.conv3dDerInput=function(t,n,r){return M("conv3dDerInput")},e.prototype.conv3dDerFilter=function(t,n,r){return M("conv3dDerFilter")},e.prototype.maxPool=function(t,n){return M("maxPool")},e.prototype.maxPoolBackprop=function(t,n,r,o){return M("maxPoolBackprop")},e.prototype.avgPool=function(t,n){return M("avgPool")},e.prototype.avgPoolBackprop=function(t,n,r){return M("avgPoolBackprop")},e.prototype.avgPool3d=function(t,n){return M("avgPool3d")},e.prototype.avgPool3dBackprop=function(t,n,r){return M("avgPool3dBackprop")},e.prototype.maxPool3d=function(t,n){return M("maxPool3d")},e.prototype.maxPool3dBackprop=function(t,n,r,o){return M("maxPool3dBackprop")},e.prototype.reshape=function(t,n){return M("reshape")},e.prototype.cast=function(t,n){return M("cast")},e.prototype.tile=function(t,n){return M("tile")},e.prototype.pad=function(t,n,r){return M("pad")},e.prototype.transpose=function(t,n){return M("transpose")},e.prototype.gather=function(t,n,r){return M("gather")},e.prototype.gatherND=function(t,n){return M("gatherND")},e.prototype.scatterND=function(t,n,r){return M("scatterND")},e.prototype.batchToSpaceND=function(t,n,r){return M("batchToSpaceND")},e.prototype.spaceToBatchND=function(t,n,r){return M("spaceToBatchND")},e.prototype.resizeBilinear=function(t,n,r,o){return M("resizeBilinear")},e.prototype.resizeBilinearBackprop=function(t,n,r){return M("resizeBilinearBackprop")},e.prototype.resizeNearestNeighbor=function(t,n,r,o){return M("resizeNearestNeighbor")},e.prototype.resizeNearestNeighborBackprop=function(t,n,r){return M("resizeNearestNeighborBackprop")},e.prototype.batchNormalization=function(t,n,r,o,i,a){return M("batchNormalization")},e.prototype.localResponseNormalization4D=function(t,n,r,o,i){return M("localResponseNormalization4D")},e.prototype.LRNGrad=function(t,n,r,o,i,a,s){return M("LRNGrad")},e.prototype.multinomial=function(t,n,r,o){return M("multinomial")},e.prototype.oneHot=function(t,n,r,o){return M("oneHot")},e.prototype.cumsum=function(t,n,r,o){return M("cumsum")},e.prototype.nonMaxSuppression=function(t,n,r,o,i){return M("nonMaxSuppression")},e.prototype.fft=function(t){return M("fft")},e.prototype.ifft=function(t){return M("ifft")},e.prototype.complex=function(t,n){return M("complex")},e.prototype.real=function(t){return M("real")},e.prototype.imag=function(t){return M("imag")},e.prototype.cropAndResize=function(t,n,r,o,i,a){return M("cropAndResize")},e.prototype.depthToSpace=function(t,n,r){return M("depthToSpace")},e.prototype.split=function(t,n,r){return M("split")},e.prototype.sparseToDense=function(t,n,r,o){return M("sparseToDense")},e.prototype.diag=function(t){return M("diag")},e.prototype.fill=function(t,n,r){return M("fill")},e.prototype.onesLike=function(t){return M("onesLike")},e.prototype.zerosLike=function(t){return M("zerosLike")},e.prototype.linspace=function(t,n,r){return M("linspace")},e.prototype.dispose=function(){return M("dispose")},e}();function M(e){throw new Error("'"+e+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Xr(e,t){for(var n=e.length,r=[],o=0;o<n;o++){var i=n-1-o,a=e[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function ct(e,t){for(var n=[],r=0;r<t.length;r++){var o=e[e.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&n.unshift(i)}return n}function be(e,t){for(var n=[],r=Math.max(e.length,t.length),o=0;o<r;o++){var i=e[e.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)n.unshift(a);else if(a===1)n.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+e+" and "+t+".");n.unshift(i)}}return n}function gs(e,t,n,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Ml(t),l=u[0],c=u[1];if(a==="channelsLast")s=[l,c,e[3],e[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[l,c,e[1],e[1]]}return Jo(e,s,n,r,o,i,!1,a)}function Fl(e,t,n,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,l=Np(t),c=l[0],f=l[1],d=l[2];if(a==="NDHWC")u="channelsLast",s=[c,f,d,e[4],e[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[c,f,d,e[1],e[1]]}return Ol(e,s,n,r,o,!1,u,i)}function Jo(e,t,n,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],l=u[0],c=u[1],f=u[2],d=u[3];if(s==="channelsLast")l=e[0],c=e[1],f=e[2],d=e[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);l=e[0],d=e[1],c=e[2],f=e[3]}var p,h=t[0],m=t[1],g=t[3],v=Ml(n),y=v[0],x=v[1],w=Ml(r),b=w[0],C=w[1],E=Bi(h,b),S=Bi(m,C),R=function(L,$,V,U,P,O,B,X){var Q,re,ue;if(typeof L=="number"){Q={top:L,bottom:L,left:L,right:L,type:L===0?"VALID":"NUMBER"};var ce=function(Ee,Pe,Re,Xe,je){Xe==null&&(Xe=J2(Ee,Pe,Re));var $e=Ee[0],Ln=Ee[1],zn=Ga(($e-Pe+2*Xe)/Re+1,je);I(Je(zn),function(){return"The output # of rows ("+zn+") must be an integer. Change the stride and/or zero pad parameters"});var Qt=Ga((Ln-Pe+2*Xe)/Re+1,je);return I(Je(Qt),function(){return"The output # of columns ("+Qt+") must be an integer. Change the stride and/or zero pad parameters"}),[zn,Qt]}([$,V],O,U,L,X);re=ce[0],ue=ce[1]}else if(L==="same"){re=Math.ceil($/U),ue=Math.ceil(V/P);var le=Math.max(0,(re-1)*U+O-$),fe=Math.max(0,(ue-1)*P+B-V),ge=Math.floor(le/2),ye=le-ge,Ae=Math.floor(fe/2);Q={top:ge,bottom:ye,left:Ae,right:fe-Ae,type:"SAME"}}else{if(L!=="valid")throw Error("Unknown padding parameter: "+L);Q={top:0,bottom:0,left:0,right:0,type:"VALID"},re=Math.ceil(($-O+1)/U),ue=Math.ceil((V-B+1)/P)}return{padInfo:Q,outHeight:re,outWidth:ue}}(o,c,f,y,x,E,S,i),k=R.padInfo,D=R.outHeight,T=R.outWidth,z=a?g*d:g;return s==="channelsFirst"?p=[l,z,D,T]:s==="channelsLast"&&(p=[l,D,T,z]),{batchSize:l,dataFormat:s,inHeight:c,inWidth:f,inChannels:d,outHeight:D,outWidth:T,outChannels:z,padInfo:k,strideHeight:y,strideWidth:x,filterHeight:h,filterWidth:m,effectiveFilterHeight:E,effectiveFilterWidth:S,dilationHeight:b,dilationWidth:C,inShape:e,outShape:p,filterShape:t}}function Ol(e,t,n,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],l=u[0],c=u[1],f=u[2],d=u[3],p=u[4];if(a==="channelsLast")l=e[0],c=e[1],f=e[2],d=e[3],p=e[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);l=e[0],p=e[1],c=e[2],f=e[3],d=e[4]}var h,m=t[0],g=t[1],v=t[2],y=t[4],x=Np(n),w=x[0],b=x[1],C=x[2],E=Np(r),S=E[0],R=E[1],k=E[2],D=Bi(m,S),T=Bi(g,R),z=Bi(v,k),L=function(B,X,Q,re,ue,ce,le,fe,ge,ye,Ae){var Ee,Pe,Re,Xe;if(typeof B=="number"){Ee={top:B,bottom:B,left:B,right:B,front:B,back:B,type:B===0?"VALID":"NUMBER"};var je=function(ni,cr,zc,ri,Wn,Wc){Wn==null&&(Wn=J2(ni,cr,ri));var Vb=ni[0],Hb=ni[1],Gb=ni[2],jc=Ga((Vb-cr+2*Wn)/ri+1,Wc);I(Je(jc),function(){return"The output # of depths ("+jc+") must be an integer. Change the stride and/or zero pad parameters"});var $c=Ga((Hb-cr+2*Wn)/ri+1,Wc);I(Je($c),function(){return"The output # of rows ("+$c+") must be an integer. Change the stride and/or zero pad parameters"});var Uc=Ga((Gb-cr+2*Wn)/ri+1,Wc);return I(Je(Uc),function(){return"The output # of columns ("+Uc+") must be an integer. Change the stride and/or zero pad parameters"}),[jc,$c,Uc,zc]}([X,Q,re,1],fe,1,ue,B,Ae);Pe=je[0],Re=je[1],Xe=je[2]}else if(B==="same"){Pe=Math.ceil(X/ue),Re=Math.ceil(Q/ce),Xe=Math.ceil(re/le);var $e=(Pe-1)*ue+fe-X,Ln=(Re-1)*ce+ge-Q,zn=(Xe-1)*le+ye-re,Qt=Math.floor($e/2),ti=$e-Qt,ur=Math.floor(Ln/2),Or=Ln-ur,lr=Math.floor(zn/2);Ee={top:ur,bottom:Or,left:lr,right:zn-lr,front:Qt,back:ti,type:"SAME"}}else{if(B!=="valid")throw Error("Unknown padding parameter: "+B);Ee={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Pe=Math.ceil((X-fe+1)/ue),Re=Math.ceil((Q-ge+1)/ce),Xe=Math.ceil((re-ye+1)/le)}return{padInfo:Ee,outDepth:Pe,outHeight:Re,outWidth:Xe}}(o,c,f,d,w,b,C,D,T,z,s),$=L.padInfo,V=L.outDepth,U=L.outHeight,P=L.outWidth,O=i?y*p:y;return a==="channelsFirst"?h=[l,O,V,U,P]:a==="channelsLast"&&(h=[l,V,U,P,O]),{batchSize:l,dataFormat:a,inDepth:c,inHeight:f,inWidth:d,inChannels:p,outDepth:V,outHeight:U,outWidth:P,outChannels:O,padInfo:$,strideDepth:w,strideHeight:b,strideWidth:C,filterDepth:m,filterHeight:g,filterWidth:v,effectiveFilterDepth:D,effectiveFilterHeight:T,effectiveFilterWidth:z,dilationDepth:S,dilationHeight:R,dilationWidth:k,inShape:e,outShape:h,filterShape:t}}function J2(e,t,n,r){r===void 0&&(r=1);var o=Bi(t,r);return Math.floor((e[0]*(n-1)-n+o)/2)}function Ml(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Np(e){return typeof e=="number"?[e,e,e]:e}function Bi(e,t){return t<=1?e:e+(e-1)*(t-1)}function Ga(e,t){if(!t)return e;switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error("Unknown roundingMode "+t)}}function oa(e){var t=Ml(e),n=t[0],r=t[1],o=t[2];return n===1&&r===1&&o===1}function Yt(e,t){return oa(e)||oa(t)}function iv(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+e)}function Z2(e,t,n){if(t==="complex64"){if(e.dtype==="complex64")return e.clone();var r=Le(e.shape),o=e.toFloat(),i=n.complex(o,r);return r.dispose(),o.dispose(),i}if(!K4(e.dtype,t))return F.makeTensorFromDataId(e.dataId,e.shape,t);if(e.dtype==="complex64"){var a=n.real(e);return i=a.cast(t),a.dispose(),i}if(t==="int32")return n.int(e);if(t==="bool"){var s=J(0,e.dtype);return i=n.notEqual(e,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+e.dtype+" to "+t)}function Dp(e,t){return F.makeTensorFromDataId(e.dataId,t,e.dtype)}function ew(e,t,n){var r=(t-e)/(n-1),o=Ps(n,"float32");o[0]=e;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return nt(o,"float32")}function Pp(e,t){if(e.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+e.length+", imag: "+t.length+".");for(var n=new Float32Array(2*e.length),r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function m0(e,t){return{real:e[2*t],imag:e[2*t+1]}}function CT(e,t,n,r){e[2*r]=t,e[2*r+1]=n}function ET(e,t,n){var r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}function ST(e,t,n){var r=function(i,a,s){return function(u,l,c){for(var f=0,d=u.length,p=0,h=!1;f<d;){var m=c(l,u[p=f+(d-f>>>1)]);m>0?f=p+1:(d=p,h=!m)}return h?f:-f-1}(i,a,s||_T)}(e,t,n),o=r<0?-(r+1):r;e.splice(o,0,t)}function _T(e,t){return e>t?1:e<t?-1:0}function av(e,t,n,r,o){return tw(e,t,n,r,o,0).selectedIndices}function sv(e,t,n,r,o,i){var a=tw(e,t,n,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function tw(e,t,n,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(w,b){return{score:w,boxIndex:b,suppressBeginIndex:0}}).filter(function(w){return w.score>o}).sort(g0),l=i>0?-.5/i:0,c=[],f=[];c.length<n&&u.length>0;){var d=u.pop(),p=d.score,h=d.boxIndex,m=d.suppressBeginIndex;if(p<o)break;for(var g=!1,v=c.length-1;v>=m;--v){var y=kT(e,h,c[v]);if(y>=r){g=!0;break}if(d.score=d.score*RT(r,l,y),d.score<=o)break}d.suppressBeginIndex=c.length,g||(d.score===p?(c.push(h),f.push(d.score)):d.score>o&&ST(u,d,g0))}var x=c.length;return s&&(c.fill(0,x),f.fill(0,x)),{selectedIndices:nt(c,"int32"),selectedScores:nt(f,"float32"),numValidOutputs:J(x,"int32")}}function kT(e,t,n){var r=e.subarray(4*t,4*t+4),o=e.subarray(4*n,4*n+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),l=Math.min(o[0],o[2]),c=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),d=Math.max(o[1],o[3]),p=(s-i)*(u-a),h=(f-l)*(d-c);if(p<=0||h<=0)return 0;var m=Math.max(i,l),g=Math.max(a,c),v=Math.min(s,f),y=Math.min(u,d),x=Math.max(v-m,0)*Math.max(y-g,0);return x/(p+h-x)}function RT(e,t,n){var r=Math.exp(t*n*n);return n<=e?r:0}function g0(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}function nw(e,t,n){var r=new Array(e.rank).fill(0),o=e.shape.slice();return t.map(function(i){o[n]=i;var a=e.slice(r,o);return r[n]+=i,a})}function rw(e,t){for(var n=new Array(e.rank),r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];var o=he(n,e.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(e.rank),s=0;s<a.length;s++)a[s]=i[s]%e.shape[s];var u=e.locToIndex(a);o.values[r]=e.values[u]}return o.toTensor()}function ow(e,t,n,r,o){for(var i=t[t.length-1],a=[e.length/i,i],s=a[0],u=a[1],l=hs(n,s*r),c=hs("int32",s*r),f=0;f<s;f++){for(var d=f*u,p=e.subarray(d,d+u),h=[],m=0;m<p.length;m++)h.push({value:p[m],index:m});h.sort(function(w,b){return b.value-w.value});var g=f*r,v=l.subarray(g,g+r),y=c.subarray(g,g+r);for(m=0;m<r;m++)v[m]=h[m].value,y[m]=h[m].index}var x=t.slice();return x[x.length-1]=r,[Ct(l,x,n),Ct(c,x,"int32")]}function uv(e,t){for(var n=[],r=0;r<t.length;r++)t[r]&&n.push(r);var o=he(e,"int32"),i=he([n.length,e.length],"int32");for(r=0;r<n.length;r++){var a=o.indexToLoc(n[r]),s=r*e.length;i.values.set(a,s)}return i.toTensor()}var IT=function(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map(function(o,i){return"T"+i});var n=[];this.variableNames.forEach(function(o){n.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},AT=function(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map(function(o,i){return"T"+i});var n=[];this.variableNames.forEach(function(o){n.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+n.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},TT=function(e,t,n){this.variableNames=["A"];var r=e.windowSize,o=e.batchSize,i=e.inSize,a=Math.ceil(i/r);n||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=n?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function iw(e,t){return["x","y","z","w","u","v"].slice(0,t).map(function(n){return e+"."+n})}function $t(e,t){return t===1?[e]:iw(e,t)}function Nt(){var e,t,n,r,o,i,a,s,u,l;return H().getNumber("WEBGL_VERSION")===2?(e="#version 300 es",t="in",n="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e="",t="attribute",n="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:l}}function No(e,t,n){n===void 0&&(n="index");var r=tr(t);return r.map(function(o,i){return"int "+e[i]+" = "+n+" / "+o+"; "+(i===r.length-1?"int "+e[i+1]+" = "+n+" - "+e[i]+" * "+o:"index -= "+e[i]+" * "+o)+";"}).join("")}function lv(e){var t=tr(e).map(function(n){return n.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var aw=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function NT(e,t,n,r){var o=[];e.forEach(function(p){var h=oe(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(h>1?"["+h+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var i,a,s=o.join(`
`),u=e.map(function(p){return function(h,m,g){g===void 0&&(g=!1);var v="";v+=g?sw(h):di(h);var y=h.shapeInfo.logicalShape,x=m.logicalShape;return y.length<=x.length&&(v+=g?function(w,b){var C,E=w.name,S=E.charAt(0).toUpperCase()+E.slice(1),R="get"+S+"AtOutCoords",k=w.shapeInfo.logicalShape.length,D=b.logicalShape.length,T=Xr(w.shapeInfo.logicalShape,b.logicalShape),z=Oe(D),L=D-k,$=["x","y","z","w","u","v"];C=k===0?"":D<2&&T.length>=1?"coords = 0;":T.map(function(Q){return"coords."+$[Q+L]+" = 0;"}).join(`
`);var V="";V=D<2&&k>0?"coords":w.shapeInfo.logicalShape.map(function(Q,re){return"coords."+$[re+L]}).join(", ");var U="return outputValue;",P=oe(w.shapeInfo.logicalShape)===1,O=oe(b.logicalShape)===1;if(k!==1||P||O){if(P&&!O)U=D===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(T.length){var B=k-2,X=k-1;T.indexOf(B)>-1&&T.indexOf(X)>-1?U="return vec4(outputValue.x);":T.indexOf(B)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":T.indexOf(X)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+z+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+S+"("+V+`);
      `+U+`
    }
  `}(h,m):function(w,b){var C=w.name,E=C.charAt(0).toUpperCase()+C.slice(1),S="get"+E+"AtOutCoords",R=b.texShape,k=w.shapeInfo.texShape,D=w.shapeInfo.logicalShape.length,T=b.logicalShape.length;if(!w.shapeInfo.isUniform&&D===T&&w.shapeInfo.flatOffset==null&&gt(k,R))return`
      float `+S+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var z,L=Oe(T),$=Xr(w.shapeInfo.logicalShape,b.logicalShape),V=T-D,U=["x","y","z","w","u","v"];z=D===0?"":T<2&&$.length>=1?"coords = 0;":$.map(function(O){return"coords."+U[O+V]+" = 0;"}).join(`
`);var P="";return P=T<2&&D>0?"coords":w.shapeInfo.logicalShape.map(function(O,B){return"coords."+U[B+V]}).join(", "),`
    float `+S+`() {
      `+L+` coords = getOutputCoords();
      `+z+`
      return get`+E+"("+P+`);
    }
  `}(h,m)),v}(p,t,r)}).join(`
`),l=t.texShape,c=Nt(),f=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(c),d=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+DT+`
    `+PT+`
    `+FT+`
  `}(c);return t.isPacked?(i=function(p,h){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(w,b){var C=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,h);case 2:return function(w,b){var C=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)];if(gt(w,b))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var E=Math.ceil(w[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+E+`);
      int c = imod(index, `+E+`) * 2;

      return ivec2(r, c);
    }
  `}(p,h);case 3:return m=p,g=h,v=[Math.ceil(g[0]/2),Math.ceil(g[1]/2)],y=Math.ceil(m[2]/2),x=y*Math.ceil(m[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(w,b){for(var C=[Math.ceil(b[0]/2),Math.ceil(b[1]/2)],E=Math.ceil(w[w.length-1]/2),S=E*Math.ceil(w[w.length-2]/2),R=S,k="",D="b, r, c",T=2;T<w.length-1;T++)R*=w[w.length-T-1],k=`
      int b`+T+" = index / "+R+`;
      index -= b`+T+" * "+R+`;
    `+k,D="b"+T+", "+D;return`
    ivec`+w.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+k+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+E+`);
      int c = imod(index, `+E+`) * 2;

      return ivec`+w.length+"("+D+`);
    }
  `}(p,h)}var m,g,v,y,x}(t.logicalShape,l),a=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(c)):(i=function(p,h){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(v,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,h);case 2:return function(v,y){return gt(v,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:v[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:v[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+v[1]+`;
      int c = index - r * `+v[1]+`;
      return ivec2(r, c);
    }
  `}(p,h);case 3:return m=h,g=No(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;
      `+g+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(v,y){var x=No(["r","c","d","d2"],v);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(p,h);case 5:return function(v,y){var x=No(["r","c","d","d2","d3"],v);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,h);case 6:return function(v,y){var x=No(["r","c","d","d2","d3","d4"],v);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,h);default:throw new Error(p.length+"-D output sampling is not yet supported")}var m,g}(t.logicalShape,l),a=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(c)),r&&(d+=OT),[d,f,a,s,i,u,n].join(`
`)}function di(e){var t=e.shapeInfo.logicalShape;switch(t.length){case 0:return function(n){var r=n.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(n.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=n.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=n.shapeInfo.texShape,l=u[0],c=u[1],f=wo(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+l+", "+c+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(e);case 1:return function(n){var r=n.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(n.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+ui(n)+`
      }
    `;var i=n.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=wo(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(e);case 2:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n.shapeInfo.texShape;if(a!=null&&gt(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var l=_o(r),c=l.newShape,f=l.keptDims,d=c;if(d.length<r.length){var p=pi(n,d);return`
      `+di(p)+`
      float `+i+`(int row, int col) {
        return `+i+"("+hi(["row","col"],f)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+ui(n)+`
      }
    `;var h=a[0],m=a[1],g=wo(o);return m===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+h+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:h===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+g+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+m+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+g+`;
    vec2 uv = uvFromFlat(`+h+", "+m+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(e);case 3:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=_o(r),l=u.newShape,c=u.keptDims,f=l;if(f.length<r.length){var d=pi(n,f);return`
        `+di(d)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+hi(["row","col","depth"],c)+`);
        }
      `}if(n.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+ui(n)+`
      }
    `;var p=n.shapeInfo.texShape,h=p[0],m=p[1],g=n.shapeInfo.flatOffset;if(m===a&&g==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+m+".0, "+h+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(m===s&&g==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+m+".0, "+h+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var v=wo(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+v+`;
        vec2 uv = uvFromFlat(`+h+", "+m+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(e);case 4:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,l=_o(r),c=l.newShape,f=l.keptDims;if(c.length<r.length){var d=pi(n,c);return`
      `+di(d)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+hi(["row","col","depth","depth2"],f)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+ui(n)+`
      }
    `;var p=n.shapeInfo.flatOffset,h=n.shapeInfo.texShape,m=h[0],g=h[1];if(g===u&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var v=wo(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+m+", "+g+", index + "+v+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);case 5:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,l=r[1]*u,c=_o(r),f=c.newShape,d=c.keptDims;if(f.length<r.length){var p=pi(n,f);return`
      `+di(p)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+hi(["row","col","depth","depth2","depth3"],d)+`);
      }
    `}if(n.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+l+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+ui(n)+`
      }
    `;var h=n.shapeInfo.flatOffset,m=n.shapeInfo.texShape,g=m[0],v=m[1];if(v===l&&h==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(v===a&&h==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=wo(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+l+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+g+", "+v+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);case 6:return function(n){var r=n.shapeInfo.logicalShape,o=n.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=_o(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var l=pi(n,s);return`
      `+di(l)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+hi(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var c=r[5],f=r[4]*c,d=r[3]*f,p=r[2]*d,h=r[1]*p;if(n.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+h+", "+p+", "+d+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+c+`, 1)));
        `+ui(n)+`
      }
    `;var m=n.shapeInfo.flatOffset,g=n.shapeInfo.texShape,v=g[0],y=g[1];if(y===h&&m==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+d+", "+f+", "+c+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===c&&m==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=wo(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+h+" + col * "+p+" + depth * "+d+` +
          depth2 * `+f+" + depth3 * "+c+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+v+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(e);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function sw(e){var t,n,r;switch(e.shapeInfo.logicalShape.length){case 0:return t=e.name,n="get"+t.charAt(0).toUpperCase()+t.slice(1),r=Nt(),`
    vec4 `+n+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=Nt();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+l.texture2D+"("+i+`, uv);
    }
  `}(e);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,l=u[0],c=u[1],f=Nt();if(u!=null&&gt(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+c+".0, "+l+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var d=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+d[0]+", "+d[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `}(e);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,l=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var c=i.slice(1),f=pi(o,c);return`
        `+sw(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+hi(["b","row","col"],[1,2])+`);
        }
      `}var d=l[0],p=l[1],h=Math.ceil(i[2]/2),m=h*Math.ceil(i[1]/2),g=Nt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+d+", "+p+", "+m+", "+h+`, b, row, col);
      return `+g.texture2D+"("+a+`, uv);
    }
  `}(e);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),l=o.shapeInfo.texShape,c=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)],f=c[0],d=c[1],p=Math.ceil(i[a-1]/2),h=p*Math.ceil(i[a-2]/2),m="int b, int row, int col",g="b * "+h+" + (row / 2) * "+p+" + (col / 2)",v=2;v<a-1;v++)m="int b"+v+", "+m,h*=i[a-v-1],g="b"+v+" * "+h+" + "+g;var y=Nt();return`
    vec4 `+u+"("+m+`) {
      int index = `+g+`;
      int texR = index / `+d+`;
      int texC = index - texR * `+d+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+d+", "+f+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(e)}}var DT=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,PT=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,FT=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,OT=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function wo(e){return"offset"+e}function ui(e){var t=e.name,n=oe(e.shapeInfo.logicalShape);return n<2?"return "+t+";":`
    for (int i = 0; i < `+n+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Oe(e){if(e<=1)return"int";if(e===2)return"ivec2";if(e===3)return"ivec3";if(e===4)return"ivec4";if(e===5)return"ivec5";if(e===6)return"ivec6";throw Error("GPU for rank "+e+" is not yet supported")}function pi(e,t){var n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function hi(e,t){return t.map(function(n){return e[n]}).join(", ")}var MT=function(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,I(e.length>2,function(){return"Packed arg"+(n.charAt(0).toUpperCase()+n.slice(1))+" supports only inputs with rank above 2."});var o=e[e.length-1],i=Math.ceil(o/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,l=u.length,c=Oe(l),f=$t("coords",l);if(i===1){var d=Oe(s=l+1);a=`
        `+d+" sourceLocR = "+d+"("+f.join()+`, 0);
        ++`+f[l-1]+`;
        `+d+" sourceLocG = "+d+"("+f.join()+`, 0);
        ++`+f[l-2]+`;
        `+d+" sourceLocA = "+d+"("+f.join()+`, 0);
        --`+f[l-1]+`;
        `+d+" sourceLocB = "+d+"("+f.join()+`, 0);
        --`+f[l-2]+";"}else s=l,a=`
        `+c+` sourceLocR = coords;
        ++`+f[l-1]+`;
        `+c+` sourceLocG = coords;
        ++`+f[l-2]+`;
        `+c+` sourceLocA = coords;
        --`+f[l-1]+`;
        `+c+` sourceLocB = coords;
        --`+f[l-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),h="."+p[s-1],m=p.map(function(S){return"int "+S}),g=$t("sourceLocR",s-1).concat("inIdx.r"),v=$t("sourceLocG",s-1).concat("inIdx.g"),y=$t("sourceLocB",s-1).concat("inIdx.b"),x=$t("sourceLocA",s-1).concat("inIdx.a"),w=n==="max"?"greaterThan":"lessThan",b=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",C=`vec4(
            getAChannel(`+g.join()+`),
            hasNextCol ? getAChannel(`+v.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",E=r?"":`
      float getBestIndicesAChannel(`+m.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+m.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+E+`
      void main() {
        `+c+` coords = getOutputCoords();
        bool hasNextCol = `+f[l-1]+" < "+(u[l-1]-1)+`;
        bool hasNextRow = `+f[l-2]+" < "+(u[l-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+h+", sourceLocG"+h+`,
          sourceLocB`+h+", sourceLocA"+h+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+b+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+w+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},BT=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterHeight,u=e.effectiveFilterWidth,l=s-1-e.padInfo.top,c=u-1-e.padInfo.left,f=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(`+l+", "+c+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},LT=function(e){this.variableNames=["dy"],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,f=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=c-1-e.padInfo.front,h=f-1-e.padInfo.top,m=d-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+h+", "+m+`);
      const float avgMultiplier = float(`+g+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+c+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+d+`;
                wC += `+l+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},zT=function(e,t,n,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],be(e,t),be(e,n);var a="0.0";r!=null&&(be(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(be(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},WT=function(e,t,n,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],be(e,t),be(e,n);var a="vec4(0.0)";r!=null&&(be(e,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(be(e,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},jT="return areal * breal - aimag * bimag;",$T="return areal * bimag + aimag * breal;",y0=function(e,t,n){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=be(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+e+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Kf="return a + b;",Xf="return a - b;",x0="return a * b;",uw="return (a < 0.) ? b * a : a;",Ye=function(e,t,n){this.variableNames=["A","B"],this.outputShape=be(t,n),this.userCode=`
      float binaryOperation(float a, float b) {
        `+e+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},lw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,pr=function(e,t,n,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=be(t,n);var o=this.outputShape.length,i="";if(r)if(o===0||oe(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+Oe(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=$t("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+e+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},UT=function(){function e(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return e.prototype.getCustomSetupFunc=function(t,n){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,n)}},e}(),VT=function(){function e(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return e.prototype.getCustomSetupFunc=function(t,n){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,n)}},e}(),HT=function(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},GT=function(e){this.outputShape=[],this.outputShape=ra(e,1),this.variableNames=e.map(function(s,u){return"T"+u});var t=new Array(e.length-1);t[0]=e[0][1];for(var n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(n=1;n<t.length;n++){var o=t[n-1];r.push("else if (yC < "+t[n]+") setOutput(getT"+n+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},qT=function(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ra(e,t);var n=this.outputShape,r=n.length,o=Oe(r),i=$t("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=e.map(function(g,v){return"T"+v});var s=new Array(e.length-1);s[0]=e[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+e[u][t];var l=a[t],c=a.slice(-2),f=a.join(),d="if ("+l+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+c.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];d+=`
        if (`+l+" < "+s[u]+"  && "+l+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+hu(a,l,p)+`),
            vec2(`+hu(c,l,p)+`));
        }`}var h=s.length,m=s[s.length-1];d+=`
        return getChannel(
          getT`+h+"("+hu(a,l,m)+`),
          vec2(`+hu(c,l,m)+"));",this.userCode=`
      float getValue(`+a.map(function(g){return"int "+g})+`) {
        `+d+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+n[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+n[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+n[r-2]+` &&
            `+i[r-1]+" < "+n[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function hu(e,t,n){var r=e.indexOf(t);return e.map(function(o,i){return i===r?o+" - "+n:o}).join()}var KT=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},XT=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,s=n-1-e.padInfo.left,u=i?1:2,l=i?2:3,c=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+c+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+l+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},YT=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,o=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yF = 0; yF < `+e.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+e.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+e.outHeight+`; yR++) {
              int xR = wR + yR * `+n+" - "+i+`;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+e.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},QT=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=t-1-e.padInfo.front,u=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+l+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+e.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+n+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+n+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+e.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},JT=function(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;var t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,o=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+e.batchSize+`; b++) {
          for (int yR = 0; yR < `+e.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+e.outWidth+`; yC++) {
              int xC = wC + yC * `+n+" - "+o+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},ZT=function(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;var t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,o=e.strideWidth,i=t-1-e.padInfo.top,a=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+n+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+n+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},w0=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.padInfo.top,i=e.padInfo.left,a=e.strideHeight,s=e.strideWidth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterHeight,f=e.filterWidth,d=4*Math.floor(e.inChannels/4),p=e.inChannels%4,h=e.dataFormat==="channelsLast",m=h?1:2,g=h?2:3,v=h?3:1,y="",x="";n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,x="result = activation(result);");var w=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+v+`];

        ivec2 xRCCorner =
            ivec2(coords[`+m+"], coords["+g+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+c+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+l+`;

            if (xC < 0 || xC >= `+e.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+d+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+h+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+h+`) {
                dotProd +=
                    getX(batch, xR, xC, `+d+`) *
                    getW(wR, wC, `+d+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+d+`, xR, xC) *
                    getW(wR, wC, `+d+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2)
              );

              if (`+h+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2),
                getW(wR, wC, `+d+` + 2, d2)
              );

              if (`+h+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1),
                  getX(batch, xR, xC, `+d+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC),
                  getX(batch, `+d+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+w+`
        `+x+`
        setOutput(result);
      }
    `},eN=function(e){this.variableNames=["x","W"],this.outputShape=e.outShape;var t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.filterDepth,f=e.filterHeight,d=e.filterWidth,p=4*Math.floor(e.inChannels/4),h=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+n+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+c+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+d+`; wC++) {
              int xC = xCCorner + wC * `+l+`;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(h===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(h===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(h===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},b0=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=e.outShape;var o=e.inHeight,i=e.inWidth,a=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,f=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=e.outChannels/e.inChannels,m="",g="";n&&(m=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`
          float activation(float x) {
            `+n+`
          }
        `,g="result = activation(result);");var v=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+m+`

      const ivec2 strides = ivec2(`+u+", "+l+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+h+`;
        int q = d2 - d1 * `+h+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+d+`; wR++) {
          int xR = xRCorner + wR * `+c+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+v+`
        `+g+`
        setOutput(result);
      }
    `},C0=function(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.outShape;for(var o=e.inHeight,i=e.inWidth,a=e.padInfo.top,s=e.padInfo.left,u=e.strideHeight,l=e.strideWidth,c=e.dilationHeight,f=e.dilationWidth,d=e.filterHeight,p=e.filterWidth,h=p,m="int xR; int xC; int xCOffset;",g=0;g<d;g++)for(var v=0;v<p;v++)m+=`
          vec4 xTexelR`+g+"C"+2*v+` = vec4(0.);
          vec4 wR`+g+"C"+v+` = vec4(0.);
          vec4 xR`+g+"C"+v+" = vec4(0.);";for(g=0;g<d;g++)for(var y=0;y<h;y++){if(m+=`
          xR = xRCorner + `+g*c+`;
          xC = xCCorner + `+(v=2*y)*f+`;
        `,l===1){if(v<p&&(m+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+g+"C"+v+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+g+"C"+v+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+g+"C"+v+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+g+"C"+v+" = vec4(previous.zw, xTexelR"+g+"C"+v+`.xy);
                } else {
                  xR`+g+"C"+v+" = vec4(0, 0, xTexelR"+g+"C"+v+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+g+"C"+v+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+v+` = vec4(0.);
                }

                xR`+g+"C"+v+" = xTexelR"+g+"C"+v+`;
              `,v+1<p)){var x=s%2==0?R2(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(m+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+g+"C"+(v+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(m+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+g+"C"+v+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+g+"C"+v+` = vec4(0.);
                    }
                  `),m+=`
                  xR`+g+"C"+(v+1)+` = vec4(
                    xTexelR`+g+"C"+v+".zw, xTexelR"+g+"C"+(v+2)+`.xy);
                `):m+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+g+"C"+(v+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+g+"C"+(v+1)+" = xTexelR"+g+"C"+(v+2)+`;
                `}}else v<p&&(m+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(m+=`
                xCOffset = xC + 1 - `+l+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+g+"C"+v+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+v+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+g+"C"+(v+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+g+"C"+(v+2)+` = vec4(0.);
                }

                xR`+g+"C"+v+` = vec4(
                  xTexelR`+g+"C"+v+".zw, xTexelR"+g+"C"+(v+2)+`.zw);
              `,v+1<p&&(m+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+l+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+g+"C"+(v+1)+" = vec4(xTexelR"+g+"C"+(v+2)+`.xy, final.xy);
                `)):(m+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+g+"C"+v+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+g+"C"+v+` = vec4(0.);
                }

                xCOffset = xC + `+l+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+g+"C"+(v+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+g+"C"+(v+2)+` = vec4(0.);
                }

                xR`+g+"C"+v+` = vec4(
                  xTexelR`+g+"C"+v+".xy, xTexelR"+g+"C"+(v+2)+`.xy);
              `,v+1<p&&(m+=`
                  xR`+g+"C"+(v+1)+` = vec4(
                    xTexelR`+g+"C"+v+".zw, xTexelR"+g+"C"+(v+2)+`.zw);
                `)),m+="}");v<p&&(m+=`
            vec4 wTexelR`+g+"C"+v+" = getW("+g+", "+v+`, d1, q);
            wR`+g+"C"+v+" = vec4(wTexelR"+g+"C"+v+".xz, wTexelR"+g+"C"+v+`.xz);
          `,v+1<p&&(m+=`
              vec4 wTexelR`+g+"C"+(v+1)+" = getW("+g+", "+(v+1)+`, d1, q);
              wR`+g+"C"+(v+1)+` =
                vec4(wTexelR`+g+"C"+(v+1)+".xz, wTexelR"+g+"C"+(v+1)+".xz);"))}for(g=0;g<d;g++)for(v=0;v<p;v++)m+="dotProd += xR"+g+"C"+v+" * wR"+g+"C"+v+";";var w="",b="";n&&(w=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+n+`
        }`:`vec4 activation(vec4 x) {
          `+n+`
        }`,b="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+w+`

      const ivec2 strides = ivec2(`+u+", "+l+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+m+`

        vec4 result = dotProd;
        `+C+`
        `+b+`
        setOutput(result);
      }
    `},tN=function(e,t,n,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=e[0],a=e[1],s=e[2],u=e[3],l=t[0],c=n[0],f=n[1];this.outputShape=[l,c,f,u];var d=r==="bilinear"?1:0,p=[a-1+".0",s-1+".0"],h=p[0],m=p[1],g=c>1?[""+(a-1)/(c-1),"(y2-y1) * height_ratio","y1*"+h+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+h],v=g[0],y=g[1],x=g[2],w=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+m+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+m],b=w[0],C=w[1],E=w[2];this.userCode=`
      const float height_ratio = float(`+v+`);
      const float width_ratio = float(`+b+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+C+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+h+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+E+`;
        if( in_x < 0.0 || in_x > `+m+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+d+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},nN=function(e,t,n){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=e[e.length-1],i=n?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(n?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Oe(r)+` coords = getOutputCoords();
        int end = `+E0(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+E0(r,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function E0(e,t){if(e===1)return""+t;if(e===2)return t+".y";if(e===3)return t+".z";if(e===4)return t+".w";throw Error("Cumulative sum for rank "+e+" is not yet supported")}var rN=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ms.DENSE;var t=Ha(e),n=Nt();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+No(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+n.output+` = result;
      }
    `},oN=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ms.DENSE;var t=Ha(e),n=Nt();this.outputShape=e,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+No(["r","c","d"],e)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+n.output+` = result;
      }
    `},iN=function(){function e(t,n,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=n,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+n+`;
      int offset_h = imod(h, `+n+`);
      int in_w = w / `+n+`;
      int offset_w = imod(w, `+n+`);
      int offset_d = (offset_h * `+n+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return e.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},e.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},e.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},e.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},e.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},e}(),aN=function(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},sN=function(e){this.variableNames=["A"],this.outTexUsage=rn.DOWNLOAD;var t=Nt();this.outputShape=e,this.userCode=`
      `+aw+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},uN=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=rn.DOWNLOAD;var t=Nt();this.outputShape=e,this.userCode=`
      `+aw+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},lN=function(e,t,n){n===void 0&&(n=!1),this.variableNames=["A"];var r=Nt(),o=t[0],i=t[1];this.outputShape=e;var a="result";n&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+lv(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},cN=function(e,t,n){n===void 0&&(n=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=Nt(),o=t[0],i=t[1];this.outputShape=e;var a="",s="result";n&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var l=0;l<=1;l++){var c=2*u+l;a+=`
          localCoords = coords;
          if(localCoords[2] + `+l+" < "+e[2]+`) {
            localCoords[2] += `+l+`;
            if(localCoords[1] + `+u+" < "+e[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+c+`] = values[0];
              } else if(offset == 1) {
                result[`+c+`] = values[1];
              } else if(offset == 2) {
                result[`+c+`] = values[2];
              } else {
                result[`+c+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+lv(e)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},fN="return real * expR - imag * expI;",dN="return real * expI + imag * expR;",S0=function(e,t,n){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=n?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=n?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+e+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},pN=function(){function e(t,n){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;return function(r,o){n.valueLoc==null&&(n.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(n.valueLoc,t)}},e}(),hN=function(e,t,n){this.variableNames=["A","indices"];var r=e.slice();r[n]=t,this.outputShape=r,this.rank=r.length;var o=Oe(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var l=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],f=0;f<a.length;f++)f===s?c.push("int(getIndices("+l[f]+"))"):c.push(""+l[f]);return c.join()}(e,n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},vN=function(e,t,n){this.sliceDim=e,this.strides=t,this.variableNames=["x","indices"],this.outputShape=n;var r=Oe(t.length),o=Oe(n.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function mN(e,t){var n=Nt();return fA(e,t,n.version+`
    precision highp float;
    `+n.attribute+` vec3 clipSpacePos;
    `+n.attribute+` vec2 uv;
    `+n.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function gN(e,t){return mA(e,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function yN(e,t){return gA(e,t,new Uint16Array([0,1,2,2,1,3]))}function Os(e,t,n,r,o,i,a){xA(n,r);var s=yA(e,t),u=e.TEXTURE_2D;return se(e,t,function(){return e.bindTexture(u,s)}),se(e,t,function(){return e.texParameteri(u,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)}),se(e,t,function(){return e.texParameteri(u,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}),se(e,t,function(){return e.texParameteri(u,e.TEXTURE_MIN_FILTER,e.NEAREST)}),se(e,t,function(){return e.texParameteri(u,e.TEXTURE_MAG_FILTER,e.NEAREST)}),se(e,t,function(){return e.texImage2D(u,0,o,n,r,0,i,a,null)}),se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)}),s}function xN(e,t,n,r,o){var i=Cc(n,r);return Os(e,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,e.FLOAT)}function wN(e,t,n,r,o){var i=Cc(n,r);return Os(e,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function bN(e,t,n,r,o){var i=Cc(n,r);return Os(e,t,i[0],i[1],e.RGBA,e.RGBA,e.UNSIGNED_BYTE)}function CN(e,t,n,r,o){var i=Fs(n,r);return Os(e,t,i[0],i[1],o.internalFormatPackedFloat,e.RGBA,e.FLOAT)}function EN(e,t,n,r,o){var i=Fs(n,r);return Os(e,t,i[0],i[1],o.internalFormatPackedHalfFloat,e.RGBA,o.textureTypeHalfFloat)}function SN(e,t,n,r){return se(e,t,function(){return e.bindBuffer(e.ARRAY_BUFFER,r)}),f0(e,t,n,"clipSpacePos",r,3,20,0)&&f0(e,t,n,"uv",r,2,20,12)}function _N(e,t,n,r,o,i,a){var s,u,l;se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=e.UNSIGNED_BYTE,l=e.RGBA):(s=new Float32Array(r*o*4),u=e.FLOAT,l=a.internalFormatPackedFloat),s.set(i),se(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,l,r,o,0,e.RGBA,u,s)}),se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function kN(e,t,n,r){se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,n)}),r.data instanceof Uint8Array?se(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,r.width,r.height,0,e.RGBA,e.UNSIGNED_BYTE,r.data)}):se(e,t,function(){return e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,r)}),se(e,t,function(){return e.bindTexture(e.TEXTURE_2D,null)})}function RN(e,t,n,r,o){var i=e.createBuffer();se(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,i)});var a=16*n*r;return se(e,t,function(){return e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)}),se(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,0)}),se(e,t,function(){return e.bindBuffer(e.PIXEL_PACK_BUFFER,null)}),i}function IN(e,t,n){var r=e,o=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function AN(e,t,n,r,o){var i=Cc(n,r),a=i[0],s=i[1],u=new Uint8Array(n*r*4);return se(e,t,function(){return e.readPixels(0,0,a,s,o.downloadTextureFormat,e.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function TN(e,t,n,r,o,i,a,s){var u=e,l=new Float32Array(function(c,f){var d=Fs(c,f);return d[0]*d[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,l),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),l}function NN(e,t,n,r){var o=new Float32Array(n*r*4);return se(e,t,function(){return e.readPixels(0,0,r,n,e.RGBA,e.FLOAT,o)}),o}var DN=function(){function e(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var n=H().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,aA(n,t)):this.gl=ir(n);var r="WEBGL_color_buffer_float";if(H().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=cu(this.gl,this.debug,"OES_texture_float"),gn(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=cu(this.gl,this.debug,"OES_texture_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),gn(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=cu(this.gl,this.debug,"EXT_color_buffer_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",gn(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!gn(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=gN(this.gl,this.debug),this.indexBuffer=yN(this.gl,this.debug),this.framebuffer=wA(this.gl,this.debug),this.textureConfig=Zh(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(e.prototype,"debug",{get:function(){return H().getBool("DEBUG")},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var n=this.gl;se(n,this.debug,function(){return n.finish()}),se(n,this.debug,function(){return n.bindFramebuffer(n.FRAMEBUFFER,null)}),se(n,this.debug,function(){return n.deleteFramebuffer(t.framebuffer)}),se(n,this.debug,function(){return n.bindBuffer(n.ARRAY_BUFFER,null)}),se(n,this.debug,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,null)}),se(n,this.debug,function(){return n.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},e.prototype.createFloat32MatrixTexture=function(t,n){return this.throwIfDisposed(),xN(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createFloat16MatrixTexture=function(t,n){return this.throwIfDisposed(),wN(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createUnsignedBytesMatrixTexture=function(t,n){return this.throwIfDisposed(),bN(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.uploadPixelDataToTexture=function(t,n){this.throwIfDisposed(),kN(this.gl,this.debug,t,n)},e.prototype.uploadDenseMatrixToTexture=function(t,n,r,o){this.throwIfDisposed(),_N(this.gl,this.debug,t,n,r,o,this.textureConfig)},e.prototype.createFloat16PackedMatrixTexture=function(t,n){return this.throwIfDisposed(),EN(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.createPackedMatrixTexture=function(t,n){return this.throwIfDisposed(),CN(this.gl,this.debug,t,n,this.textureConfig)},e.prototype.deleteMatrixTexture=function(t){var n=this;this.throwIfDisposed(),this.outputTexture===t&&(d0(this.gl,this.debug,this.framebuffer),this.outputTexture=null),se(this.gl,this.debug,function(){return n.gl.deleteTexture(t)})},e.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,n,r){var o=this;return this.downloadMatrixDriver(t,function(){return AN(o.gl,o.debug,n,r,o.textureConfig)})},e.prototype.downloadPackedMatrixFromBuffer=function(t,n,r,o,i,a){return TN(this.gl,t,0,0,0,i,a,this.textureConfig)},e.prototype.downloadFloat32MatrixFromBuffer=function(t,n){return IN(this.gl,t,n)},e.prototype.createBufferFromTexture=function(t,n,r){this.bindTextureToFrameBuffer(t);var o=RN(this.gl,this.debug,n,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},e.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},e.prototype.createFence=function(t){var n,r,o=this;if(H().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},n=a}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(n,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:n,isFencePassed:r}},e.prototype.downloadMatrixFromPackedTexture=function(t,n,r){var o=this;return this.downloadMatrixDriver(t,function(){return NN(o.gl,o.debug,n,r)})},e.prototype.createProgram=function(t){this.throwIfDisposed();var n=this.gl,r=dA(n,this.debug,t),o=mN(n,this.debug),i=hA(n,this.debug);return se(n,this.debug,function(){return n.attachShader(i,o)}),se(n,this.debug,function(){return n.attachShader(i,r)}),vA(n,this.debug,i),this.debug&&Vf(n,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=SN(n,this.debug,this.program,this.vertexBuffer)),i},e.prototype.deleteProgram=function(t){var n=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&se(this.gl,this.debug,function(){return n.gl.deleteProgram(t)})},e.prototype.setProgram=function(t){var n=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Vf(this.gl,this.debug,this.program),se(this.gl,this.debug,function(){return n.gl.useProgram(t)})},e.prototype.getUniformLocation=function(t,n,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?CA(this.gl,this.debug,t,n):EA(this.gl,t,n)},e.prototype.getAttributeLocation=function(t,n){var r=this;return this.throwIfDisposed(),se(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,n)})},e.prototype.getUniformLocationNoThrow=function(t,n){return this.throwIfDisposed(),this.gl.getUniformLocation(t,n)},e.prototype.setInputMatrixTexture=function(t,n,r){this.throwIfDisposed(),this.throwIfNoProgram(),SA(this.gl,this.debug,this.program,t,n,r)},e.prototype.setOutputMatrixTexture=function(t,n,r){this.setOutputMatrixTextureDriver(t,r,n)},e.prototype.setOutputPackedMatrixTexture=function(t,n,r){this.throwIfDisposed();var o=Fs(n,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},e.prototype.setOutputMatrixWriteRegion=function(t,n,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,n)},e.prototype.setOutputPackedMatrixWriteRegion=function(t,n,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},e.prototype.debugValidate=function(){this.program!=null&&Vf(this.gl,this.debug,this.program),fu(this.gl)},e.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),se(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},e.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),se(this.gl,this.debug,function(){return t.gl.finish()})},e.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=cu(this.gl,this.debug,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},e.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},e.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},e.prototype.beginQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(n.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},e.prototype.endQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var n=this.gl,r=this.getQueryTimerExtensionWebGL2();n.endQuery(r.TIME_ELAPSED_EXT)}},e.prototype.waitForQueryAndGetTime=function(t){return te(this,void 0,void 0,function(){var n=this;return ne(this,function(r){switch(r.label){case 0:return[4,i0(function(){return n.disposed||n.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},e.prototype.getQueryTime=function(t,n){if(n===0)return null;if(n===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},e.prototype.isQueryAvailable=function(t,n){if(n===0)return!0;if(n===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},e.prototype.pollFence=function(t){var n=this;return new Promise(function(r){n.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},e.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),n=0;n<=t;++n)(0,this.itemsToPoll[n].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},e.prototype.addItemToPoll=function(t,n){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:n}),this.itemsToPoll.length>1||i0(function(){return r.pollItems(),r.itemsToPoll.length===0})},e.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Hf(this.gl,this.debug,t,this.framebuffer),this.debug&&fu(this.gl)},e.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Hf(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&fu(this.gl)):d0(this.gl,this.debug,this.framebuffer)},e.prototype.downloadMatrixDriver=function(t,n){this.bindTextureToFrameBuffer(t);var r=n();return this.unbindTextureToFrameBuffer(),r},e.prototype.setOutputMatrixTextureDriver=function(t,n,r){this.throwIfDisposed();var o=this.gl;Hf(o,this.debug,t,this.framebuffer),this.debug&&fu(o),this.outputTexture=t,se(o,this.debug,function(){return o.viewport(0,0,n,r)}),se(o,this.debug,function(){return o.scissor(0,0,n,r)})},e.prototype.setOutputMatrixWriteRegionDriver=function(t,n,r,o){var i=this;this.throwIfDisposed(),se(this.gl,this.debug,function(){return i.gl.scissor(t,n,r,o)})},e.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},e.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},e}();function _0(e,t){if(e.length!==t.length)throw Error("Binary was compiled with "+e.length+" inputs, but was executed with "+t.length+" inputs");e.forEach(function(n,r){var o=n.logicalShape,i=t[r],a=i.shape;if(!gt(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!n.isUniform||!i.isUniform){var s=n.texShape,u=i.isUniform?null:i.texData.texShape;if(!gt(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var PN=function(e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var r=n.filterWidth,o=n.inChannels,i=n.strideWidth,a=n.strideHeight,s=n.padInfo,u=n.outWidth,l=n.dilationWidth,c=n.dilationHeight,f=n.dataFormat,d=s.left,p=s.top,h=o*r,m=Nt(),g=f==="channelsLast",v=g?0:1,y=g?1:2,x="",w=0;w<=1;w++)for(var b=0;b<=1;b++)x+=`
          blockIndex = rc.y + `+b+`;
          pos = rc.x + `+w+`;

          if(blockIndex < `+e[1]+" && pos < "+e[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+p+`;
            d0 = offsetY + `+c+" * (pos / "+h+`);

            if(d0 < `+t[v]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+d+`.);
              d1 = offsetX + `+l+" * (int(mod(float(pos), "+h+".) / "+o+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+g+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*w+b)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*w+b)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+m.output+` = result;
      }
    `},FN=function(e,t,n,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},ON=function(e,t,n,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+n+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},MN=function(e,t,n,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=e[3]-1;this.outputShape=e;var u="float("+n+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},BN=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,o=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=o-1-e.padInfo.top,s=i-1-e.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+n+`.0;

            if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},LN=function(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;var t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,o=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,s=e.effectiveFilterDepth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=s-1-e.padInfo.front,f=u-1-e.padInfo.top,d=l-1-e.padInfo.left,p=s*u*l-1;this.userCode=`
      const ivec3 pads = ivec3(`+c+", "+f+", "+d+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+e.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+n+`.0;

            if (dyR < 0.0 || dyR >= `+e.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+l+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+e.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+l+` +
                  wR * `+l+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Yf=function(e,t,n,r,o,i,a){n===void 0&&(n=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=n?e[1]:e[2],u=Math.ceil(s/2),l=n?"i * 2, rc.y":"rc.y, i * 2",c=r?"rc.z, i * 2":"i * 2, rc.z",f=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",h="";i&&(p=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,h="result = activation(result);");var m=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+l+`);
          vec4 b = getMatrixB(rc.x, `+c+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+d[0]+`);
          result += (`+f[1]+" * "+d[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+m+`

        `+h+`

        setOutput(result);
      }
    `},zN=function(){function e(t,n,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(n-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(n-1)+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;return function(r,o){n.seedLoc==null&&(n.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(n.seedLoc,t)}},e}(),WN=function(e,t,n,r){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+n+`),
                      float(index == coords.y)));
      }
    `},jN=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e;var t=e.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var n=$t("rc",t),r=Oe(t),o=function(s,u,l){if(s===1)return"rc > "+u[0];for(var c="",f=s-2;f<s;f++)c+=l[f]+" >= "+u[f],f<s-1&&(c+="||");return c}(t,e,n),i=function(s,u,l,c){if(s===1)return"";var f=c.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+l+`;
  `}(t,e[e.length-1],e[e.length-2],n),a=function(s,u){var l=s.length,c=function(f,d){for(var p=[],h=0;h<=1;h++)for(var m=0;m<=1;m++){for(var g=(h===0?"r":"rp1")+", "+(m===0?"c":"cp1"),v=2;v<f;v++)g=d[d.length-1-v]+","+g;p.push(g)}return p}(l,u);return l===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+c[0]+`),
          cEdge ? 0. : getA(`+c[1]+`),
          rEdge ? 0. : getA(`+c[2]+`),
          rEdge || cEdge ? 0. : getA(`+c[3]+")"}(e,n);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},$N=function(e,t,n){this.variableNames=["x"],this.outputShape=t.map(function(u,l){return u[0]+e[l]+u[1]});var r=e.length,o=Oe(r),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,l){return u[0]+e[l]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+n+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+n+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},UN=function(e,t,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(g,v){return g[0]+e[v]+g[1]});for(var r=e.length,o=Oe(r),i=t.map(function(g){return g[0]}).join(","),a=t.map(function(g,v){return g[0]+e[v]}).join(","),s=$t("rc",r),u=$t("source",r),l=s[r-1]+" < "+this.outputShape[r-1],c=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+l+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+l+") {"],d=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",h=0,m=r===1?2:4;h<m;h++)p+=`
        `+f[h]+`
        if (`+d+`) {
          result[`+h+"] = float("+n+`);
        } else {
          `+o+` source = rc - start;
          result[`+h+"] = getChannel(getX("+u.join()+"), "+c+`);
        }
      `;p+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},Qf=function(e,t,n){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var r=e.filterWidth,o=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,s=e.dilationWidth,u=e.effectiveFilterHeight,l=e.effectiveFilterWidth,c=e.padInfo.top,f=e.padInfo.left;this.outputShape=e.outShape;var d=t==="avg",p="0.0";if(d||(p="-1.0 / 1e-20"),n)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+c+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+l+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+e.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+l+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var h=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(h="avgValue / count");var m=4*Math.floor(r/4),g=r%4,v=`
      if (`+d+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+c+", "+f+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+e.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+m+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+v+`
          }

          int xC = xCCorner + `+m+`;
          if (`+(g===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+v+`
          } else if (`+(g===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+v+`
          } else if (`+(g===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+v+`
          }
        }
        setOutput(`+h+`);
      }
    `}},Jf=function(e,t,n){if(this.variableNames=["x"],t==="avg"&&n)throw new Error("Cannot compute positions for average pool.");var r=e.filterWidth,o=e.strideDepth,i=e.strideHeight,a=e.strideWidth,s=e.dilationDepth,u=e.dilationHeight,l=e.dilationWidth,c=e.effectiveFilterDepth,f=e.effectiveFilterHeight,d=e.effectiveFilterWidth,p=e.padInfo.front,h=e.padInfo.top,m=e.padInfo.left;this.outputShape=e.outShape;var g=t==="avg",v="0.0";if(g||(v="-1.0 / 1e-20"),n)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+p+", "+h+", "+m+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+c+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+e.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+e.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+d+`;
                  wC += `+l+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+e.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+d+` +
                      wR * `+d+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var x=4*Math.floor(r/4),w=r%4,b=`
      if (`+g+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+p+", "+h+", "+m+`);
      const float initializationValue = `+v+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+e.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+v+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+c+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+e.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+e.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+l+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+l+`, ch)
              );

              `+b+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(w===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(w===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                initializationValue,
                initializationValue
              );

              `+b+`
            } else if (`+(w===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+l+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+l+`, ch),
                initializationValue
              );

              `+b+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},VN=function(e,t){this.variableNames=["x"];var n=e.windowSize,r=e.batchSize,o=e.inSize,i=Math.ceil(o/n);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var l=4*Math.floor(n/4),c=n%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,d="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");var p="";o%n>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+l+`; i += 4) {
          int inIdx = inOffset + i;
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+l+`;
        if (`+(c===1)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(c===2)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(c===3)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},HN=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;for(var n="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),n+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+No(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+lv(e)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+e[1]+`;
        int cols = `+e[2]+`;

        `+n+`

        setOutput(result);
      }
    `},GN=function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=e.shape,s=a[1],u=a[2],l=[n&&s>1?o-1:o,n&&u>1?i-1:i],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],f=l[0]/c[0],d=l[1]/c[1],p=1/f,h=1/d,m=2*Math.ceil(p)+2,g=2*Math.ceil(h)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+h+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},qN=function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?i-1:i,r&&n>1?a-1:a],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},KN=function(e,t,n,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?i-1:i,r&&n>1?a-1:a],l=[r&&t>1?t-1:t,r&&n>1?n-1:n];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`,
          `+u[1]/l[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(n-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},XN=function(e,t,n){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=e.shape,s=a[1],u=a[2],l=[n&&s>1?o-1:o,n&&u>1?i-1:i],c=[n&&s>1?s-1:s,n&&u>1?u-1:u],f=l[0]/c[0],d=l[1]/c[1],p=1/f,h=1/d,m=2*Math.ceil(p)+2,g=2*Math.ceil(h)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+h+`);

        const int winHeight = int(`+m+`);
        const int winWidth = int(`+g+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+l[0]+`) *
                (float(dyR) / float(`+c[0]+`));

            float sourceFracCol =
                float(`+l[1]+`) *
                  (float(dyC) / float(`+c[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+n+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+n+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},YN=function(e,t,n,r){this.variableNames=["A"],this.outputShape=[];var o=e[0],i=e[1],a=e[2],s=e[3];this.outputShape=[o,t,n,s];var u=[r&&t>1?i-1:i,r&&n>1?a-1:a],l=[r&&t>1?t-1:t,r&&n>1?n-1:n],c=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/l[0]+`,
          `+u[1]/l[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+c+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},QN=function(e,t){this.variableNames=["x"];var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");if(this.outputShape=e,n!==1){var r=e.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&e[s]!==1?e[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=Oe(n);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+e[0]+` - coord - 1));
        }
      `},JN=function(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var n=e.length;if(n>4)throw new Error("WebGL backend: Reverse of rank-"+n+" tensor is not yet supported");this.outputShape=e;var r=$t("rc",n),o=r[n-1]+" + 1 < "+this.outputShape[n-1],i=r[n-2]+" + 1 < "+this.outputShape[n-2],a=Oe(n);function s(u){var l=e.map(function(c,f){return function(d,p){return t.indexOf(d)!==-1&&e[d]!==1?e[d]+" - "+p[d]+" - 1":""+p[d]}(f,u)});return"getChannel(getX("+l.join(",")+"), vec2("+l.slice(-2).join(",")+"))"}this.userCode=n===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+e[0]+` - rc - 1),
            `+e[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+e[0]+` - (rc  + 1) - 1),
                `+e[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[n-2]="("+u[n-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[n-1]="("+u[n-1]+" + 1)",u[n-2]="("+u[n-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},k0=function(e,t,n,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=Oe(o.length),u=Oe(i.length),l="";n===1?l="i":n===2&&(l="i, j");var c="getIndices("+l+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var d="getUpdates("+f+")",p=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+e+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+c+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+d+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},ZN=function(e,t){this.variableNames=["x","segmentIds"];var n=e.windowSize,r=e.batchSize,o=e.inSize,i=e.numSegments,a=i*Math.ceil(o/n);this.outputShape=[r,a];var s=4*Math.floor(n/4),u=n%4,l=`
        sumValue += dot(values, segFilter);
    `,c="";o%n>0&&(c=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%n>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+c+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+n+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+l+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+l+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+l+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+l+`
        }
        setOutput(sumValue);
      }
    `},eD=function(e,t,n){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,n>4)throw Error("Where for rank "+n+" is not yet supported");if(n===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<e&&a.push(""+i[u]);r=a.join(),o=s.join()}var l=Oe(n);this.userCode=`
      void main() {
        `+l+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},tD=function(){function e(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var n,r=Oe(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return Zf.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);n=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+Zf[s]+" = start["+s+"] + coords."+Zf[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+n+`
        setOutput(getSource(`+i+`));
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){n.startLoc==null&&(n.startLoc=r.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||r.gl.uniform1iv(n.startLoc,t)}},e}(),Zf=["x","y","z","w","u","v"],nD=function(){function e(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var n=Oe(this.rank),r=$t("coords",this.rank),o=$t("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            `+n+"("+t.map(function(c,f){return"start["+f+"]"}).join()+");":t.map(function(c,f){return o[f]+" = "+r[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+n+` coords = getOutputCoords();
        `+n+` sourceLoc;
        `+l+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return e.prototype.getCustomSetupFunc=function(t){var n=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){n.startLoc==null&&(n.startLoc=r.getUniformLocationNoThrow(o,"start"),n.startLoc==null)||r.gl.uniform1iv(n.startLoc,t)}},e}(),rD=function(e,t,n){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=Oe(n.length),i=Oe(n.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=n.map(function(u,l){return s++,n.length===1?"coords * strides["+l+"] + begin["+l+"]":"coords["+(s-1)+"] * strides["+l+"] + begin["+l+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+e+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},oD=function(){function e(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return e.prototype.acquireTexture=function(t,n,r){var o,i=R0(n,r),a=I0(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===en.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===en.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===en.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===en.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===en.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},e.prototype.releaseTexture=function(t,n,r,o){if(this.freeTextures!=null){var i=I0(n,R0(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},e.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},e.prototype.getNumUsedTextures=function(){return this.numUsedTextures},e.prototype.getNumFreeTextures=function(){return this.numFreeTextures},e.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var n in this.freeTextures)this.freeTextures[n].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var n in this.usedTextures)this.usedTextures[n].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},e}();function R0(e,t){if(e===rn.UPLOAD)return en.PACKED_2X2_FLOAT32;if(e===rn.RENDER||e==null)return function(n){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?n?en.PACKED_2X2_FLOAT32:en.UNPACKED_FLOAT32:n?en.PACKED_2X2_FLOAT16:en.UNPACKED_FLOAT16}(t);if(e===rn.DOWNLOAD||e===rn.PIXELS)return en.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+e)}function I0(e,t,n){return e[0]+"_"+e[1]+"_"+t+"_"+n}var iD=function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;var o=Oe(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],l=[],c=0;c<a.length;c++)l.push("imod("+u[c]+", "+a[c]+")");return l.join()}(e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},aD=function(e,t){this.variableNames=["A"];for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;var o=Oe(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],l=new Array(s),c=0;c<a.length;c++)l[a[c]]=u[c];return l.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},sD=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var n=new Array(e.length),r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Oe(this.rank),i=iw("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+n[this.rank-1],l="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+l+`;
      if(`+u+`) {
        result[1] = `+l+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+n[this.rank-2]+`) {
        result[2] = `+l+`;
        if(`+u+`) {
          result[3] = `+l+`;
        }
      }
      setOutput(result);
    }
    `},cv=1.7580993408473768,fv=1.0507009873554805,ve=function(e,t){this.variableNames=["A"],this.outputShape=e,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Mn="if (isnan(x)) return x;",uD="return x;",A0="return abs(x);",cw=Mn+`
  return (x < 0.0) ? 0.0 : x;
`,fw=Mn+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,dw="return (x >= 0.0) ? x : (exp(x) - 1.0);",lD=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+cv+`;
  float scale = `+fv+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,T0="return -x;",N0="return ceil(x);",D0="return floor(x);",P0="return exp(x);",F0="return exp(x) - 1.0;",cD=Mn+`
  return sin(x);
`,fD=Mn+`
  return cos(x);
`,dD=Mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,pD=Mn+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,hD=Mn+`
  return atan(x);
`,vD=Mn+"return log(x + sqrt(x * x + 1.0));",mD=Mn+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,gD=Mn+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,vu="return x;",yD="return x;",pw=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,hw=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,vw=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,Ia=function(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},xD=function(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e;var t=e.length,n=$t("rc",t),r=Oe(t),o=function(s,u){if(s===1)return"rc";for(var l="",c=0;c<s;c++)l+=u[c],c<s-1&&(l+=",");return l}(t,n),i=n.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},mu={};function gu(e,t){if(t===void 0&&(t=!1),e==="linear")return t?yD:uD;if(e==="relu")return t?pw:cw;if(e==="elu")return t?vw:dw;if(e==="relu6")return t?hw:fw;if(e==="prelu")return t?lw:uw;throw new Error("Activation "+e+" has not been implemented for the WebGL backend.")}var wD=600,bD=function(e){function t(n){var r,o=e.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(n==null){var i=ir(H().getNumber("WEBGL_VERSION"));o.binaryCache=((r=H().getNumber("WEBGL_VERSION"))in mu||(mu[r]={}),mu[r]),o.gpgpu=new DN(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=n,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=n.gl.canvas;return o.textureManager=new oD(o.gpgpu),o.numMBBeforeWarning=H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*wD/1024/1024,o.texData=new Y2(o,F),o}return On(t,e),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(n,r,o){if(H().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64"&&n!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:n,usage:rn.UPLOAD}),i},t.prototype.move=function(n,r,o,i){if(H().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(n,{shape:o,dtype:i,values:r,usage:rn.UPLOAD})},t.prototype.readSync=function(n){var r=this.texData.get(n),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,l=r.isPacked;if(s!=null){var c=void 0;c=l?new Ia(u,vu):new ve(u,vu);var f=this.runWebGLProgram(c,[{dataId:n,shape:u,dtype:i}],i),d=this.readSync(f.dataId);return this.disposeData(f.dataId),d}if(o!=null)return this.convertAndCacheOnCPU(n);if(i==="string")return o;var p,h,m=this.activeTimers!=null;return m&&(p=Gn()),i==="complex64"?h=Pp(a.real.dataSync(),a.imag.dataSync()):h=this.getValuesFromTexture(n),m&&(this.downloadWaitMs+=Gn()-p),this.convertAndCacheOnCPU(n,h)},t.prototype.read=function(n){return te(this,void 0,void 0,function(){var r,o,i,a,s,u,l,c,f,d,p,h,m,g,v,y,x,w,b,C,E,S;return ne(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(n))return r=this.pendingRead.get(n),[2,new Promise(function(k){return r.push(k)})];if(o=this.texData.get(n),i=o.values,a=o.shape,s=o.slice,u=o.dtype,l=o.complexTensors,c=o.isPacked,s!=null)return f=void 0,f=c?new Ia(a,vu):new ve(a,vu),d=this.runWebGLProgram(f,[{dataId:n,shape:a,dtype:u}],u),p=this.read(d.dataId),this.disposeData(d.dataId),[2,p];if(i!=null)return[2,this.convertAndCacheOnCPU(n)];if(!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return h=null,u!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")&&(m=this.decode(n),g=this.texData.get(m.dataId),h=(S=this.gpgpu).createBufferFromTexture.apply(S,[g.texture].concat(Ha(a)))),this.pendingRead.set(n,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([l.real.data(),l.imag.data()])];case 3:return y=R.sent(),x=y[0],w=y[1],v=Pp(x,w),[3,5];case 4:h==null?v=this.getValuesFromTexture(n):(b=oe(a),v=this.gpgpu.downloadFloat32MatrixFromBuffer(h,b)),R.label=5;case 5:return m!=null&&this.disposeData(m.dataId),C=this.convertAndCacheOnCPU(n,v),E=this.pendingRead.get(n),this.pendingRead.delete(n),E.forEach(function(k){return k(C)}),this.pendingDisposal.has(n)&&(this.pendingDisposal.delete(n),this.disposeData(n),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(n){if(n!=null)for(var r=0;r<n.length;r++){var o=n[r];if(!lA(o))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(n){var r,o=this.texData.get(n),i=o.shape,a=o.dtype,s=o.isPacked,u=oe(i);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var l=this.decode(n),c=this.texData.get(l.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[c.texture].concat(Ha(i))).subarray(0,u);return this.disposeData(l.dataId),f}var d=H().getBool("WEBGL_PACK")&&s===!0,p=d?Gf(i):i,h=d?new uN(p):new sN(p),m=this.runWebGLProgram(h,[{shape:p,dtype:a,dataId:n}],"float32"),g=this.texData.get(m.dataId),v=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(g.texture,g.texShape[0],g.texShape[1]).subarray(0,u);return this.disposeData(m.dataId),v},t.prototype.time=function(n){return te(this,void 0,void 0,function(){var r,o,i,a,s,u,l;return ne(this,function(c){switch(c.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,n(),a=ta(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=ta(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return l=c.sent(),u.kernelMs=U4(l),u.getExtraProfileInfo=function(){return l.map(function(f,d){return{name:s[d],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},c.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Gn(),endMs:null}},t.prototype.endTimer=function(n){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),n):(n.endMs=Gn(),n)},t.prototype.getQueryTime=function(n){return te(this,void 0,void 0,function(){var r;return ne(this,function(o){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(n)]:[2,(r=n).endMs-r.startMs]})})},t.prototype.disposeData=function(n){if(!this.pendingDisposal.has(n)){if(this.pendingRead.has(n))return this.pendingDisposal.add(n),void this.pendingDeletes++;if(this.texData.has(n)){this.releaseGPUData(n);var r=this.texData.get(n).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(n)}}},t.prototype.releaseGPUData=function(n){var r=this.texData.get(n),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,l=r.slice,c=l&&l.origDataId||n,f=this.dataRefCount.get(c);f>1?this.dataRefCount.set(c,f-1):(this.dataRefCount.delete(c),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var d=this.texData.get(n);d.texture=null,d.texShape=null,d.isPacked=!1,d.slice=null},t.prototype.getTexture=function(n){return this.uploadToGPU(n),this.texData.get(n).texture},t.prototype.getDataInfo=function(n){return this.texData.get(n)},t.prototype.getCPUBackend=function(){return H().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=F.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(n,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&n.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(n,r){var o=this.makeOutput(n.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:F.keep(n.clone()),imag:F.keep(r.clone())},o},t.prototype.real=function(n){return this.texData.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.texData.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,r,o){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.slice(n,r,o);if(oe(o)===0)return Ct([],o,n.dtype);var i=this.texData.get(n.dataId).isPacked,a=K2(n.shape,r,o);if(i||!a){var s=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nD(o):new tD(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[n],null,u)}return this.uploadToGPU(n.dataId),this.shallowSlice(n,r,o)},t.prototype.shallowSlice=function(n,r,o){var i=this.texData.get(n.dataId),a=this.makeOutput(o,n.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=n.dtype;var u=X2(r,n.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||n.dataId};var l=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,l+1),a},t.prototype.stridedSlice=function(n,r,o,i){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.stridedSlice(n,r,o,i);var a=ov(r,o,i);if(a.some(function(u){return u===0}))return Ct([],a);var s=new rD(r,i,a);return this.compileAndRun(s,[n])},t.prototype.reverse=function(n,r){var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new JN(n.shape,r):new QN(n.shape,r);return this.compileAndRun(o,[n])},t.prototype.concat=function(n,r){if(n[0].dtype==="complex64"){var o=n.map(function(p){return vn(p)}),i=n.map(function(p){return Xn(p)});return wt(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(n))return this.cpuBackend.concat(n,r);if(n.length===1)return n[0];if(n.length>H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(n.length/2),s=this.concat(n.slice(0,a),r),u=this.concat(n.slice(a),r);return this.concat([s,u],r)}if(H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&n[0].rank>1){var l=new qT(n.map(function(p){return p.shape}),r);return this.compileAndRun(l,n)}var c=ra(n.map(function(p){return p.shape}),r),f=n.map(function(p){return p.as2D(-1,oe(p.shape.slice(r)))}),d=new GT(f.map(function(p){return p.shape}));return this.compileAndRun(d,f).reshape(c)},t.prototype.neg=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.neg(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,T0,n.dtype);var r=new ve(n.shape,T0);return this.compileAndRun(r,[n])},t.prototype.batchMatMul=function(n,r,o,i){var a=o?n.shape[2]:n.shape[1],s=i?r.shape[1]:r.shape[2],u=o?n.shape[1]:n.shape[2],l=n.shape[0];if((a===1||s===1)&&u>1e3){o&&(n=n.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var c=s===1?n:n.as3D(l,u,1),f=s===1?2:1,d=s===1?r.as3D(l,1,u):r;return this.multiply(c,d).sum(f,!0)}var p=bt(n.dtype,r.dtype),h=new Yf(n.shape,[l,a,s],o,i);return this.compileAndRun(h,[n,r],p)},t.prototype.fusedBatchMatMul=function(n){var r=n.a,o=n.b,i=n.transposeA,a=n.transposeB,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],d=r.shape[0],p=bt(r.dtype,o.dtype),h=s!=null,m=l!=null,g=u?gu(u,!0):null,v=new Yf(r.shape,[d,c,f],i,a,h,g,m),y=[r,o];return s&&y.push(s),l&&y.push(l),this.compileAndRun(v,y,p)},t.prototype.multiply=function(n,r){if(n.dtype==="complex64"){var o=this.texData.get(n.dataId),i=this.texData.get(r.dataId),a=new y0(jT,n.shape,r.shape),s=new y0($T,n.shape,r.shape),u=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],l=this.compileAndRun(a,u),c=this.compileAndRun(s,u),f=this.complex(l,c);return l.dispose(),c.dispose(),f}if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.multiply(n,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,x0,n.dtype);var d=new Ye(x0,n.shape,r.shape);return this.compileAndRun(d,[n,r],n.dtype)},t.prototype.batchNormalization=function(n,r,o,i,a,s){var u=[n,r,o],l=null;s!=null&&(l=s.shape,u.push(s));var c=null;if(a!=null&&(c=a.shape,u.push(a)),H().getBool("WEBGL_PACK_NORMALIZATION")){var f=new WT(n.shape,r.shape,o.shape,l,c,i);return this.compileAndRun(f,u)}var d=new zT(n.shape,r.shape,o.shape,l,c,i);return this.compileAndRun(d,u)},t.prototype.localResponseNormalization4D=function(n,r,o,i,a){var s=H().getBool("WEBGL_PACK_NORMALIZATION")?new MN(n.shape,r,o,i,a):new FN(n.shape,r,o,i,a);return this.compileAndRun(s,[n])},t.prototype.LRNGrad=function(n,r,o,i,a,s,u){var l=new ON(r.shape,i,a,s,u);return this.compileAndRun(l,[r,o,n])},t.prototype.tile=function(n,r){if(n.dtype==="string"){var o=this.readSync(n.dataId).map(function(a){return Sl(a)});return rw(he(n.shape,n.dtype,o),r)}var i=new iD(n.shape,r);return this.compileAndRun(i,[n])},t.prototype.pad=function(n,r,o){var i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new UN(n.shape,r,o):new $N(n.shape,r,o);return this.compileAndRun(i,[n])},t.prototype.transpose=function(n,r){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.transpose(n,r);var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sD(n.shape,r):new aD(n.shape,r);return this.compileAndRun(o,[n])},t.prototype.gather=function(n,r,o){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.gather(n,r,o);var i=new hN(n.shape,r.size,o);return this.compileAndRun(i,[n,r])},t.prototype.batchToSpaceND=function(n,r,o){I(n.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(f,d){return f*d}),a=Tl(n.shape,r,i),s=Nl(a.length,r.length),u=Dl(n.shape,r,i),l=V2(o,r.length),c=H2(u,o,r.length);return n.reshape(a).transpose(s).reshape(u).slice(l,c)},t.prototype.spaceToBatchND=function(n,r,o){I(n.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(d,p){return d*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<n.shape.length;++s)a.push([0,0]);var u=n.pad(a),l=Tl(u.shape,r,i,!1),c=Nl(l.length,r.length,!1),f=Dl(u.shape,r,i,!1);return u.reshape(l).transpose(c).reshape(f)},t.prototype.reduce=function(n,r,o){var i=n.shape[0],a=n.shape[1],s=qf(a),u=new VN({windowSize:s,inSize:a,batchSize:i},r),l=this.compileAndRun(u,[n],o);return l.shape[1]===1?l:this.reduce(l,r,o)},t.prototype.argReduce=function(n,r,o){o===void 0&&(o=null);var i=n.shape[0],a=n.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=qf(a),u=new TT({windowSize:s,inSize:a,batchSize:i},r,o==null),l=[n];o!=null&&l.push(o);var c=this.compileAndRun(u,l,"int32");return c.shape[1]===1?c:this.argReduce(n,r,c)},t.prototype.argReducePacked=function(n,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:n.shape,a=qf(i[i.length-1]),s=new MT(i,a,r,o==null),u=o==null?[n]:[n,o],l=this.compileAndRun(s,u,"int32");return l.rank===n.rank?this.argReducePacked(n,r,l):l},t.prototype.sum=function(n,r){Zt("sum",r,n.rank);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a),u=zf(n.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(n,r){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.prod(n,r);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a),u=zf(n.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(n,r,o){var i=0,a=ar([i],n.rank),s=n;a!=null&&(s=n.transpose(a),i=sr(1,n.rank)[0]);var u=function(p,h,m){for(var g=[],v=p.length,y=0;y<v;y++)y!==h?g.push(p[y]):g.push(m);return g}(s.shape,i,o),l=oe([s.shape[i]]),c=s.as2D(-1,l),f=zf(n.dtype),d=this.segOpCompute(c,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(d=d.transpose(ev(a))),d},t.prototype.segOpCompute=function(n,r,o,i,a){var s=n.shape[0],u=n.shape[1],l=function(d,p){var h,m=!1;for(d<=q2?(h=d,m=!0):h=Sp(d,Math.floor(Math.sqrt(d)));!m;)h>p||h===d?m=!0:h=Sp(d,h+1);return h}(u,a),c=new ZN({windowSize:l,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(c,[n,o],i);return f.shape[1]===a?f:(o=Al(0,a).tile([u/l]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(n,r,o){var i=[r];if(Zt("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,n.rank),!H().getBool("WEBGL_PACK_REDUCE")||n.rank<=2){var a=It(n.shape,i),s=a[0],u=oe(a[1]),l=n.as2D(-1,u);return this.argReduce(l,o).reshape(s)}return this.argReducePacked(n,o)},t.prototype.argMin=function(n,r){return this.argMinMaxReduce(n,r,"min")},t.prototype.argMax=function(n,r){return this.argMinMaxReduce(n,r,"max")},t.prototype.cumsum=function(n,r,o,i){if(r!==n.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(n.rank-1)+" but got axis="+r);var a=new nN(n.shape,o,i);return this.compileAndRun(a,[n])},t.prototype.equal=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Ye("return float(a == b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.notEqual=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Ye("return float(a != b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.less=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.less(n,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Ye("return float(a < b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.lessEqual=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Ye("return float(a <= b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.greater=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.greater(n,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Ye("return float(a > b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.greaterEqual=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Ye("return float(a >= b);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.logicalNot=function(n){var r=new ve(n.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[n])},t.prototype.logicalAnd=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Ye("return float(a >= 1.0 && b >= 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.logicalOr=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Ye("return float(a >= 1.0 || b >= 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r],"bool")},t.prototype.select=function(n,r,o){var i=new eD(n.rank,r.shape,r.rank);return this.compileAndRun(i,[n,r,o],bt(r.dtype,o.dtype))},t.prototype.where=function(n){Rl("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=n.dataSync();return uv(n.shape,r)},t.prototype.topk=function(n,r,o){return ow(n.dataSync(),n.shape,n.dtype,r)},t.prototype.min=function(n,r){Zt("min",r,n.rank);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.minimum(n,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.mod=function(n,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Ye(`if (b == 0.0) return NAN;
  return mod(a, b);`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.max=function(n,r){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.max(n,r);Zt("max",r,n.rank);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(n,r){if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.maximum(n,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.all=function(n,r){Zt("all",r,n.rank);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(n,r){Zt("any",r,n.rank);var o=It(n.shape,r),i=o[0],a=oe(o[1]),s=n.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Ye(`
if (a == b) {
  return 1.0;
};
return a / b;`,n.shape,r.shape);return this.compileAndRun(o,[n,r],"float32")},t.prototype.floorDiv=function(n,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Ye(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,n.shape,r.shape);return this.compileAndRun(o,[n,r],"int32")},t.prototype.add=function(n,r){if(n.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(n,r,Kf);if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.add(n,r);var o=bt(n.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,Kf,o);var i=new Ye(Kf,n.shape,r.shape);return this.compileAndRun(i,[n,r],o)},t.prototype.packedUnaryOp=function(n,r,o){var i=new Ia(n.shape,r);return this.compileAndRun(i,[n],o)},t.prototype.packedBinaryOp=function(n,r,o,i,a){a===void 0&&(a=!1);var s=new pr(o,n.shape,r.shape,a);return this.compileAndRun(s,[n,r],i)},t.prototype.complexSeparableBinaryOp=function(n,r,o){var i=this,a=this.texData.get(n.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(d){var p=d[0],h=d[1],m=i.makeComplexComponentTensorInfo(n,p),g=i.makeComplexComponentTensorInfo(r,h),v=new Ye(o,n.shape,r.shape);return i.compileAndRun(v,[m,g],bt(p.dtype,h.dtype))}),l=u[0],c=u[1],f=this.complex(l,c);return l.dispose(),c.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(n,r){return{dataId:r.dataId,dtype:r.dtype,shape:n.shape}},t.prototype.addN=function(n){if(n.length===1)return n[0];if(n.length>H().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(n.length/2),o=this.addN(n.slice(0,r)),i=this.addN(n.slice(r));return this.addN([o,i])}var a=n.map(function(l){return l.dtype}).reduce(function(l,c){return bt(l,c)}),s=n.map(function(l){return l.shape}),u=H().getBool("WEBGL_PACK")?new AT(n[0].shape,s):new IT(n[0].shape,s);return this.compileAndRun(u,n,a)},t.prototype.subtract=function(n,r){if(n.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(n,r,Xf);if(this.shouldExecuteOnCPU([n,r]))return this.cpuBackend.subtract(n,r);var o=bt(n.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(n,r,Xf,n.dtype);var i=new Ye(Xf,n.shape,r.shape);return this.compileAndRun(i,[n,r],o)},t.prototype.pow=function(n,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Ye(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,n.shape,r.shape),i=bt(n.dtype,r.dtype);return this.compileAndRun(o,[n,r],i)},t.prototype.ceil=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.ceil(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,N0,n.dtype);var r=new ve(n.shape,N0);return this.compileAndRun(r,[n])},t.prototype.floor=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.floor(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,D0,n.dtype);var r=new ve(n.shape,D0);return this.compileAndRun(r,[n])},t.prototype.sign=function(n){var r=new ve(n.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[n])},t.prototype.isNaN=function(n){var r=new ve(n.shape,"return float(isnan(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.isInf=function(n){var r=new ve(n.shape,"return float(isinf(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.isFinite=function(n){var r=new ve(n.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[n],"bool")},t.prototype.round=function(n){var r=new ve(n.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[n])},t.prototype.exp=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.exp(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,P0,n.dtype);var r=new ve(n.shape,P0);return this.compileAndRun(r,[n])},t.prototype.expm1=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.expm1(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,F0,n.dtype);var r=new ve(n.shape,F0);return this.compileAndRun(r,[n])},t.prototype.softmax=function(n,r){var o=dt([r],n.shape),i=this.max(n,o),a=Xt(i.shape,o),s=this.subtract(n,i.reshape(a)),u=this.exp(s),l=this.sum(u,o).reshape(a);return this.realDivide(u,l)},t.prototype.log=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.log(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,n.dtype);var r=new ve(n.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[n])},t.prototype.log1p=function(n){var r=new ve(n.shape,"return log(1.0 + x);");return this.compileAndRun(r,[n])},t.prototype.sqrt=function(n){var r=new ve(n.shape,"return sqrt(x);");return this.compileAndRun(r,[n])},t.prototype.rsqrt=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.rsqrt(n);var r=new ve(n.shape,"return inversesqrt(x);");return this.compileAndRun(r,[n])},t.prototype.reciprocal=function(n){var r=new ve(n.shape,"return 1.0 / x;");return this.compileAndRun(r,[n])},t.prototype.relu=function(n){var r;return r=H().getBool("WEBGL_PACK")?new Ia(n.shape,pw):new ve(n.shape,cw),this.compileAndRun(r,[n])},t.prototype.relu6=function(n){var r;return r=H().getBool("WEBGL_PACK")?new Ia(n.shape,hw):new ve(n.shape,fw),this.compileAndRun(r,[n])},t.prototype.prelu=function(n,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(lw,n.shape,r.shape):new Ye(uw,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.elu=function(n){if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,vw,n.dtype);var r=new ve(n.shape,dw);return this.compileAndRun(r,[n])},t.prototype.eluDer=function(n,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,n.shape,r.shape):new Ye("return (b >= 1.0) ? a : a * (b + 1.0);",n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.selu=function(n){var r=new ve(n.shape,lD);return this.compileAndRun(r,[n])},t.prototype.int=function(n){var r=new ve(n.shape,"return float(int(x));");return this.compileAndRun(r,[n],"int32")},t.prototype.clip=function(n,r,o){var i,a=(i=H().getBool("WEBGL_PACK_CLIP")?new VT(n.shape):new UT(n.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[n],null,a)},t.prototype.abs=function(n){if(this.shouldExecuteOnCPU([n]))return this.cpuBackend.abs(n);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(n,A0,n.dtype);var r=new ve(n.shape,A0);return this.compileAndRun(r,[n])},t.prototype.complexAbs=function(n){var r=this.texData.get(n.dataId),o=new HT(n.shape),i=[this.makeComplexComponentTensorInfo(n,r.complexTensors.real),this.makeComplexComponentTensorInfo(n,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(n){var r=new ve(n.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[n])},t.prototype.softplus=function(n){var r=new ve(n.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[n])},t.prototype.sin=function(n){var r=new ve(n.shape,cD);return this.compileAndRun(r,[n])},t.prototype.cos=function(n){var r=new ve(n.shape,fD);return this.compileAndRun(r,[n])},t.prototype.tan=function(n){var r=new ve(n.shape,"return tan(x);");return this.compileAndRun(r,[n])},t.prototype.asin=function(n){var r=new ve(n.shape,dD);return this.compileAndRun(r,[n])},t.prototype.acos=function(n){var r=new ve(n.shape,pD);return this.compileAndRun(r,[n])},t.prototype.atan=function(n){var r=new ve(n.shape,hD);return this.compileAndRun(r,[n])},t.prototype.atan2=function(n,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,n.shape,r.shape):new Ye(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,n.shape,r.shape);return this.compileAndRun(o,[n,r])},t.prototype.sinh=function(n){var r=new ve(n.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[n])},t.prototype.cosh=function(n){var r=new ve(n.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[n])},t.prototype.tanh=function(n){var r=new ve(n.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[n])},t.prototype.asinh=function(n){var r=new ve(n.shape,vD);return this.compileAndRun(r,[n])},t.prototype.acosh=function(n){var r=new ve(n.shape,mD);return this.compileAndRun(r,[n])},t.prototype.atanh=function(n){var r=new ve(n.shape,gD);return this.compileAndRun(r,[n])},t.prototype.erf=function(n){var r=new ve(n.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[n])},t.prototype.step=function(n,r){var o=new ve(n.shape,function(i){return i===void 0&&(i=0),Mn+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(r));return this.compileAndRun(o,[n])},t.prototype.conv2dByMatMul=function(n,r,o,i,a,s){var u=n.shape,l=this.texData.get(n.dataId),c=o.inChannels,f=u[0]*u[1]*u[2],d=o.outChannels,p=o.dataFormat==="channelsLast",h=(f===1||d===1)&&c>1e3,m=u[2]%2!=0&&!!l.isPacked;if(h||!H().getBool("WEBGL_LAZILY_UNPACK")||!H().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!m){var g=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],v=this.reshape(n,[1,g,o.inChannels]),y=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:v,b:y,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var x=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),w={dataId:n.dataId,shape:[1,x,o.inChannels],dtype:n.dtype},b=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,I(pu(l.shape,w.shape),function(){return"packed reshape "+l.shape+" to "+w.shape+" isn't free"});var C=this.reshape(r,[1,o.inChannels,o.outChannels]),E=this.fusedBatchMatMul({a:w,b:C,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),S=this.texData.get(E.dataId);return I(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),l.shape=b,S.shape=o.outShape,F.makeTensorFromDataId(E.dataId,o.outShape,E.dtype)},t.prototype.conv2dWithIm2Row=function(n,r,o,i,a,s){var u=o.filterWidth,l=o.filterHeight,c=o.inChannels,f=o.outWidth,d=o.outHeight,p=o.dataFormat==="channelsLast",h=u*l*c,m=d*f,g=[h,m],v=n.squeeze([0]),y=r.reshape([1,h,-1]),x=new PN(g,v.shape,o),w=this.compileAndRun(x,[v]).reshape([1,g[0],g[1]]),b=i!=null,C=s!=null,E=a?gu(a,!0):null,S=new Yf(w.shape,[1,m,o.outChannels],!0,!1,b,E,C),R=[w,y];i&&R.push(i),C&&R.push(s);var k=this.compileAndRun(S,R);return p?k.reshape([1,d,f,o.outChannels]):k.reshape([1,o.outChannels,d,f])},t.prototype.fusedConv2d=function(n){var r=n.input,o=n.filter,i=n.convInfo,a=n.bias,s=n.activation,u=n.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(H().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var l=a!=null,c=u!=null,f=s?gu(s,!1):null,d=new w0(i,l,f,c),p=[r,o];return a&&p.push(a),u&&p.push(u),this.compileAndRun(d,p)},t.prototype.conv2d=function(n,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(n,r,o);if(H().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,r,o);var i=new w0(o);return this.compileAndRun(i,[n,r])},t.prototype.conv2dDerInput=function(n,r,o){var i=new XT(o);return this.compileAndRun(i,[n,r])},t.prototype.conv2dDerFilter=function(n,r,o){var i=new KT(o);return this.compileAndRun(i,[n,r])},t.prototype.fusedDepthwiseConv2D=function(n){var r,o=n.input,i=n.filter,a=n.convInfo,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?gu(u,c):null,d=[o,i],p=s!=null,h=l!=null;return p&&d.push(s),h&&d.push(l),c?(r=new C0(a,p,f,h),this.compileAndRun(r,d)):(r=new b0(a,p,f,h),this.compileAndRun(r,d))},t.prototype.depthwiseConv2D=function(n,r,o){var i;return H().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new C0(o),this.compileAndRun(i,[n,r])):(i=new b0(o),this.compileAndRun(i,[n,r]))},t.prototype.depthwiseConv2DDerInput=function(n,r,o){var i=new ZT(o);return this.compileAndRun(i,[n,r])},t.prototype.depthwiseConv2DDerFilter=function(n,r,o){var i=new JT(o);return this.compileAndRun(i,[n,r])},t.prototype.conv3d=function(n,r,o){var i=new eN(o);return this.compileAndRun(i,[n,r])},t.prototype.conv3dDerInput=function(n,r,o){var i=new QT(o);return this.compileAndRun(i,[n,r])},t.prototype.conv3dDerFilter=function(n,r,o){var i=new YT(o);return this.compileAndRun(i,[n,r])},t.prototype.maxPool=function(n,r){var o=new Qf(r,"max",!1);return this.compileAndRun(o,[n])},t.prototype.avgPool=function(n,r){var o=new Qf(r,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPoolBackprop=function(n,r,o,i){var a=new Qf(i,"max",!0),s=this.compileAndRun(a,[r]),u=new BN(i),l=this.compileAndRun(u,[n,s],r.dtype);return s.dispose(),l},t.prototype.avgPoolBackprop=function(n,r,o){var i=new BT(o);return this.compileAndRun(i,[n],r.dtype)},t.prototype.cast=function(n,r){return Z2(n,r,this)},t.prototype.unstack=function(n,r){for(var o=n.shape[r],i=new Array(n.rank-1),a=0,s=0;s<n.rank;s++)s!==r&&(i[a++]=n.shape[s]);var u=new Array(n.rank).fill(0),l=n.shape.slice();l[r]=1;var c=new Array(o);for(s=0;s<c.length;s++)u[r]=s,c[s]=this.slice(n,u,l).reshape(i);return c},t.prototype.avgPool3d=function(n,r){var o=new Jf(r,"avg",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.avgPool3dBackprop=function(n,r,o){var i=new LT(o);return this.compileAndRun(i,[n],r.dtype)},t.prototype.maxPool3d=function(n,r){var o=new Jf(r,"max",!1);return this.compileAndRun(o,[n],"float32")},t.prototype.maxPool3dBackprop=function(n,r,o,i){var a=new Jf(i,"max",!0),s=this.compileAndRun(a,[r]),u=new LN(i),l=this.compileAndRun(u,[n,s],r.dtype);return s.dispose(),l},t.prototype.reshape=function(n,r){var o=this.texData.get(n.dataId);if(o.isPacked&&!pu(n.shape,r)&&(o.texture===null||!pu(o.shape,r))){var i=this.packedReshape(n,r);return F.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return Dp(n,r)},t.prototype.resizeBilinear=function(n,r,o,i){var a=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new KN(n.shape,r,o,i):new qN(n.shape,r,o,i);return this.compileAndRun(a,[n],"float32")},t.prototype.resizeBilinearBackprop=function(n,r,o){var i=new GN(n,r,o);return this.compileAndRun(i,[n])},t.prototype.resizeNearestNeighbor=function(n,r,o,i){var a=new YN(n.shape,r,o,i);return this.compileAndRun(a,[n])},t.prototype.resizeNearestNeighborBackprop=function(n,r,o){var i=new XN(n,r,o);return this.compileAndRun(i,[n])},t.prototype.multinomial=function(n,r,o,i){var a=r?n:Tr(n),s=a.shape[0],u=a.shape[1],l=new zN(s,u,o),c=l.getCustomSetupFunc(i);return this.compileAndRun(l,[a],"int32",c)},t.prototype.oneHot=function(n,r,o,i){var a=new WN(n.size,r,o,i);return this.compileAndRun(a,[n])},t.prototype.diag=function(n){var r=new aN(n.size);return this.compileAndRun(r,[n])},t.prototype.nonMaxSuppression=function(n,r,o,i,a){return Rl("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),av(n.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(n,r,o,i,a,s){var u=new tN(n.shape,r.shape,i,a,s);return this.compileAndRun(u,[n,r,o],"float32")},t.prototype.depthToSpace=function(n,r,o){I(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var i=n.shape[0],a=o==="NHWC"?n.shape[1]:n.shape[2],s=o==="NHWC"?n.shape[2]:n.shape[3],u=o==="NHWC"?n.shape[3]:n.shape[1],l=a*r,c=s*r,f=u/(r*r),d=new iN(o==="NHWC"?[i,l,c,f]:[i,f,l,c],r,o);return this.compileAndRun(d,[n])},t.prototype.split=function(n,r,o){return nw(n,r,o)},t.prototype.scatterND=function(n,r,o){var i=Pl(0,n,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,l=i.strides,c=i.outputSize,f=[c/u,u],d=n.reshape([s,a]),p=r.reshape([s,u]);if(c===0)return Dp(Ct([]),o);var h=J(0),m=new k0(s,a,d.rank,p.rank,l,f);return this.compileAndRun(m,[p,d,h]).reshape(o)},t.prototype.sparseToDense=function(n,r,o,i){var a=Pl(0,n,o),s=a.sliceRank,u=a.numUpdates,l=a.strides,c=a.outputSize,f=new k0(u,s,n.rank,r.rank,l,[c,1]);return this.compileAndRun(f,[r,n,i]).reshape(o)},t.prototype.fft=function(n){return this.fftImpl(n,!1)},t.prototype.ifft=function(n){return this.fftImpl(n,!0)},t.prototype.fftImpl=function(n,r){var o=this.texData.get(n.dataId),i=new S0(fN,n.shape,r),a=new S0(dN,n.shape,r),s=[this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag)],u=this.compileAndRun(i,s),l=this.compileAndRun(a,s),c=this.complex(u,l).as2D(n.shape[0],n.shape[1]);return u.dispose(),l.dispose(),c},t.prototype.gatherND=function(n,r){var o=r.shape,i=o[o.length-1],a=G2(n,r),s=a[0],u=a[1],l=a[2],c=a[3],f=r.reshape([u,i]),d=n.reshape([n.size/l,l]),p=new vN(i,c,[u,l]);return this.compileAndRun(p,[d,f]).reshape(s)},t.prototype.fill=function(n,r,o){if((o=o||Ds(r))==="string"){var i=El(o,oe(n));return i.fill(r),F.makeTensor(i,n,o,this)}var a=new pN(n,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){return this.fill(n.shape,n.dtype==="string"?"":0,n.dtype)},t.prototype.linspace=function(n,r,o){return ew(n,r,o)},t.prototype.makeTensorInfo=function(n,r){var o=this.write(null,n,r);return this.texData.get(o).usage=null,{dataId:o,shape:n,dtype:r}},t.prototype.makeOutput=function(n,r){var o=this.makeTensorInfo(n,r).dataId;return F.makeTensorFromDataId(o,n,r,this)},t.prototype.unpackTensor=function(n){var r=new xD(n.shape);return this.runWebGLProgram(r,[n],n.dtype)},t.prototype.packTensor=function(n){var r=new jN(n.shape);return this.runWebGLProgram(r,[n],n.dtype,null,!0)},t.prototype.packedReshape=function(n,r){var o=[_l(n.shape)].concat(kl(n.shape)),i={dtype:n.dtype,shape:o,dataId:n.dataId},a=[_l(r)].concat(kl(r)),s=new HN(a,o),u=this.runWebGLProgram(s,[i],n.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(n){var r,o=this.texData.get(n),i=o.isPacked,a=o.shape,s=o.dtype,u=Gf(a);return r=i?new oN(u):new rN(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:n}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(n,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(n.outputShape,o),l=this.texData.get(u.dataId);if(n.packedOutput&&(l.isPacked=!0),n.outPackingScheme===ms.DENSE){var c=Ha(n.outputShape);l.texShape=c.map(function(x){return 2*x})}if(n.outTexUsage!=null&&(l.usage=n.outTexUsage),oe(u.shape)===0)return l.values=hs(u.dtype,0),u;var f=[],d=r.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var w=s.texData.get(x.dataId);if(w.texture==null){if(!n.packedInputs&&oe(x.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:w.values};n.packedInputs&&(w.isPacked=!0,w.shape=x.shape)}else if(!!w.isPacked!=!!n.packedInputs)x=w.isPacked?s.unpackTensor(x):s.packTensor(x),f.push(x),w=s.texData.get(x.dataId);else if(w.isPacked&&!pu(w.shape,x.shape)){var b=x,C=x.shape;x.shape=w.shape,x=s.packedReshape(x,C),f.push(x),w=s.texData.get(x.dataId),b.shape=C}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:w,isUniform:!1}});this.uploadToGPU(u.dataId);var p,h={shape:u.shape,texData:l,isUniform:!1},m=function(x,w,b){var C="";w.concat(b).forEach(function(R){var k=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,D=R.isUniform?"uniform":R.texData.texShape;C+=R.shape+"_"+D+"_"+k});var E=x.userCode,S=x.constructor.name;return S+="_"+C+"_"+E}(n,d,h),g=this.getAndSaveBinary(m,function(){return function(x,w,b,C){var E=w.userCode,S=b.map(function(P,O){var B={logicalShape:P.shape,texShape:P.isUniform?null:P.texData.texShape,isUniform:P.isUniform,isPacked:!P.isUniform&&P.texData.isPacked,flatOffset:null};return P.texData!=null&&P.texData.slice!=null&&P.texData.slice.flatOffset>0&&(B.flatOffset=P.texData.slice.flatOffset),{name:w.variableNames[O],shapeInfo:B}}),R=S.map(function(P){return P.shapeInfo}),k={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},D=NT(S,k,E,w.packedInputs),T=x.createProgram(D),z=null,L=x.getUniformLocation(T,"NAN",!1);H().getNumber("WEBGL_VERSION")===1&&(z=x.getUniformLocation(T,"INFINITY",!1));for(var $={},V=0;V<w.variableNames.length;V++){var U=w.variableNames[V];$[U]=x.getUniformLocation(T,U,!1),$["offset"+U]=x.getUniformLocation(T,"offset"+U,!1)}return{program:w,source:D,webGLProgram:T,uniformLocations:$,inShapeInfos:R,outShapeInfo:k,infLoc:z,nanLoc:L}}(s.gpgpu,n,d,h)}),v=this.activeTimers!=null;if(v&&(p=this.startTimer()),function(x,w,b,C,E){_0(w.inShapeInfos,b),_0([w.outShapeInfo],[C]);var S=C.texData.texture,R=C.texData.texShape;C.texData.isPacked?x.setOutputPackedMatrixTexture(S,R[0],R[1]):x.setOutputMatrixTexture(S,R[0],R[1]),x.setProgram(w.webGLProgram),H().getNumber("WEBGL_VERSION")===1&&w.infLoc!==null&&x.gl.uniform1f(w.infLoc,1/0),w.nanLoc!==null&&x.gl.uniform1f(w.nanLoc,NaN),b.forEach(function(k,D){var T=w.program.variableNames[D],z=w.uniformLocations[T],L=w.uniformLocations["offset"+T];if(z!=null)if(k.isUniform)if(oe(k.shape)<2)x.gl.uniform1f(z,k.uniformValues[0]);else{var $=k.uniformValues;$ instanceof Float32Array||($=new Float32Array($)),x.gl.uniform1fv(z,$)}else k.texData.slice!=null&&L!=null&&x.gl.uniform1i(L,k.texData.slice.flatOffset),x.setInputMatrixTexture(k.texData.texture,z,D)}),E!=null&&E(x,w.webGLProgram),x.executeProgram()}(this.gpgpu,g,d,h,i),f.forEach(function(x){return s.disposeData(x.dataId)}),v&&(p=this.endTimer(p),this.activeTimers.push({name:n.constructor.name,query:this.getQueryTime(p)})),!H().getBool("WEBGL_LAZILY_UNPACK")&&l.isPacked&&a===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(n,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(n,r,o,i,a);return F.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(n,r){return n in this.binaryCache||(this.binaryCache[n]=r()),this.binaryCache[n]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var n=this;this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){n.gpgpu.deleteProgram(n.binaryCache[r].webGLProgram),delete n.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var n=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=Z(function(){if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=H().getBool("DEBUG");H().set("DEBUG",!1);var o=n.abs(J(1e-8)).dataSync()[0];if(H().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(n){var r,o=this.texData.get(n),i=o.shape,a=o.dtype,s=o.values,u=o.texture,l=o.usage,c=o.isPacked;if(u==null){var f,d=this.activeTimers!=null;d&&(f=Gn());var p=o.texShape;if(p==null&&(p=RA(i,c),o.texShape=p),s!=null){var h=Gf(i),m=void 0,g=p[1],v=p[0],y=s instanceof Uint8Array;c?(g=(r=Fs(p[0],p[1]))[0],v=r[1],m=new cN(h,[v,g],y)):m=new lN(h,[v,g],y);var x=this.makeTensorInfo([v,g],a);this.texData.get(x.dataId).usage=y?rn.PIXELS:rn.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),g,v,s);var w=this.runWebGLProgram(m,[x],a,null,!0),b=this.texData.get(w.dataId);o.texture=b.texture,o.texShape=b.texShape,o.isPacked=b.isPacked,o.usage=b.usage,this.disposeData(x.dataId),this.texData.delete(w.dataId),o.values=null,d&&(this.uploadWaitMs+=Gn()-f)}else{var C=this.acquireTexture(p,l,a,c);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(n,r){var o=this.texData.get(n),i=o.dtype;return this.releaseGPUData(n),r!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),l=0;l<u.length;++l)u[l]=Math.round(a[l]);return u}throw new Error("Unknown dtype "+s)}(r,i)),o.values},t.prototype.acquireTexture=function(n,r,o,i){if(this.numBytesInGPU+=this.computeBytes(n,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(n,r,i)},t.prototype.computeBytes=function(n,r){return n[0]*n[1]*I2(r)},t}(Q2);O2()&&F.registerBackend("webgl",function(){return new bD},2);var CD=N({square_:function(e){var t=_(e,"x","square"),n=[t];return F.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},n,[])}}),ys="SquaredDifference",mw=N({squaredDifference_:function(e,t){var n,r=_(e,"a","squaredDifference"),o=_(t,"b","squaredDifference");n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return F.runKernelFunc(function(s,u){var l=s.squaredDifference(r,o);return u([r,o]),l},i,function(s,u){var l=u[0],c=u[1],f=J(2);return{a:function(){return s.mul(l.sub(c).mul(f))},b:function(){return s.mul(c.sub(l).mul(f))}}},ys,{},a,[])}}),ED=N({abs_:function(e){var t=_(e,"x","abs");return t.dtype==="complex64"?F.runKernelFunc(function(n){return n.complexAbs(t)},{$x:t}):F.runKernelFunc(function(n,r){var o=n.abs(t);return r([t]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mul(o.toFloat().step(-1))}}},"Abs")}}),SD=N({acos_:function(e){var t=_(e,"x","acos");return F.runKernelFunc(function(n,r){var o=n.acos(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(J(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),_D=N({acosh_:function(e){var t=_(e,"x","acosh");return F.runKernelFunc(function(n,r){var o=n.acosh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),kD=N({asin_:function(e){var t=_(e,"x","asin");return F.runKernelFunc(function(n,r){var o=n.asin(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(J(1).sub(o.toFloat().square()).sqrt())}}})}}),RD=N({asinh_:function(e){var t=_(e,"x","asinh");return F.runKernelFunc(function(n,r){var o=n.asinh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.divStrict(J(1).add(o.toFloat().square()).sqrt())}}})}}),ID=N({atan_:function(e){var t=_(e,"x","atan");return F.runKernelFunc(function(n,r){var o=n.atan(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.toFloat().square().add(1))}}})}}),AD=N({atanh_:function(e){var t=_(e,"x","atanh");return F.runKernelFunc(function(n,r){var o=n.atanh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(J(1).sub(o.toFloat().square()))}}})}}),TD=N({ceil_:function(e){var t=_(e,"x","ceil");return F.runKernelFunc(function(n){return n.ceil(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),dv=N({clipByValue_:function(e,t,n){var r=_(e,"x","clipByValue");I(t<=n,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+n+")."});var o=[r],i={min:t,max:n};return F.runKernelFunc(function(a,s){var u=a.clip(r,t,n);return s([r]),u},{x:r},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(n)),_e(a))}}},"ClipByValue",i,o)}}),ND=N({cos_:function(e){var t=_(e,"x","cos"),n=[t];return F.runKernelFunc(function(r,o){var i=r.cos(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}},"Cos",{},n)}}),DD=N({cosh_:function(e){var t=_(e,"x","cosh");return F.runKernelFunc(function(n,r){var o=n.cosh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(n)}}})}}),PD=N({erf_:function(e){var t=_(e,"x","erf");return I(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),F.runKernelFunc(function(n,r){var o=n.erf(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Fp=N({exp_:function(e){var t=_(e,"x","exp");return F.runKernelFunc(function(n,r){var o=n.exp(t);return r([o]),o},{x:t},function(n,r){return{x:function(){return n.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),FD=N({expm1_:function(e){var t=_(e,"x","expm1");return F.runKernelFunc(function(n,r){var o=n.expm1(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.exp())}}})}}),OD=N({floor_:function(e){var t=_(e,"x","floor");return F.runKernelFunc(function(n){return n.floor(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),MD=N({log_:function(e){var t=_(e,"x","log"),n=[t];return F.runKernelFunc(function(r,o){var i=r.log(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}},"Log",{},n)}}),BD=N({log1p_:function(e){var t=_(e,"x","log1p");return F.runKernelFunc(function(n,r){var o=n.log1p(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.add(1))}}})}}),LD=N({logSigmoid_:function(e){var t=_(e,"x","logSigmoid");return F.runKernelFunc(function(n,r){var o=n.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.neg().sigmoid())}}})}}),Bl=N({neg_:function(e){var t=_(e,"x","neg"),n=[t];return F.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},n)}}),zD=N({reciprocal_:function(e){var t=_(e,"x","reciprocal");return F.runKernelFunc(function(n,r){var o=n.reciprocal(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.square().neg())}}})}}),WD=N({round_:function(e){var t=_(e,"x","round");return F.runKernelFunc(function(n){return n.round(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),gw=N({rsqrt_:function(e){var t=_(e,"x","rsqrt"),n=[t];return F.runKernelFunc(function(r,o){var i=r.rsqrt(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},n)}}),yw=N({sigmoid_:function(e){var t=_(e,"x","sigmoid");return F.runKernelFunc(function(n,r){var o=n.sigmoid(t);return r([o]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mul(o.mul(J(1).sub(o)))}}},"Sigmoid")}}),jD=N({sign_:function(e){var t=_(e,"x","sign");return F.runKernelFunc(function(n){return n.sign(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),$D=N({isNaN_:function(e){var t=_(e,"x","isNaN");return F.runKernelFunc(function(n){return n.isNaN(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),UD=N({isInf_:function(e){var t=_(e,"x","isInf");return F.runKernelFunc(function(n){return n.isInf(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),VD=N({isFinite_:function(e){var t=_(e,"x","isFinite");return F.runKernelFunc(function(n){return n.isFinite(t)},{$x:t},function(n){return{$x:function(){return _e(n)}}})}}),HD=N({sin_:function(e){var t=_(e,"x","sin"),n=[t];return F.runKernelFunc(function(r,o){var i=r.sin(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}},"Sin",{},n)}}),GD=N({sinh_:function(e){var t=_(e,"x","sinh");return F.runKernelFunc(function(n,r){var o=n.sinh(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(n)}}})}}),qD=N({softplus_:function(e){var t=_(e,"x","softplus");return F.runKernelFunc(function(n,r){var o=n.softplus(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.mul(o.sigmoid())}}})}}),KD=N({sqrt_:function(e){var t=_(e,"x","sqrt");return F.runKernelFunc(function(n,r){var o=n.sqrt(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.toFloat().sqrt().mul(2))}}})}}),XD=N({step_:function(e,t){t===void 0&&(t=0);var n=_(e,"x","step");return F.runKernelFunc(function(r){return r.step(n,t)},{$x:n},function(r){return{$x:function(){return _e(r)}}})}}),YD=N({tan_:function(e){var t=_(e,"x","tan");return F.runKernelFunc(function(n,r){var o=n.tan(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return n.div(o.cos().square())}}})}}),QD=N({tanh_:function(e){var t=_(e,"x","tanh");return F.runKernelFunc(function(n,r){var o=n.tanh(t);return r([o]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return J(1).sub(o.square()).mulStrict(n)}}},"Tanh",{},null,[!0])}});function xw(e,t,n,r,o,i){var a,s,u=_(e,"x","batchNorm"),l=_(t,"mean","batchNorm"),c=_(n,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),r!=null&&(s=_(r,"offset","batchNorm")),I(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),I(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+l.rank+"."}),I(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+c.rank+"."}),a!=null&&I(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&I(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Ms(u,l,c,s,a,i)}function ww(e,t,n,r,o,i){var a,s,u=_(e,"x","batchNorm"),l=_(t,"mean","batchNorm"),c=_(n,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),r!=null&&(s=_(r,"offset","batchNorm")),I(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),I(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+l.rank+"."}),I(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+c.rank+"."}),a!=null&&I(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&I(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Ms(u,l,c,s,a,i)}function bw(e,t,n,r,o,i){var a,s,u=_(e,"x","batchNorm"),l=_(t,"mean","batchNorm"),c=_(n,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),r!=null&&(s=_(r,"offset","batchNorm")),I(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),I(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+l.rank+"."}),I(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+c.rank+"."}),a!=null&&I(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&I(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Ms(u,l,c,s,a,i)}function Ms(e,t,n,r,o,i){i==null&&(i=.001);var a,s,u,l=_(e,"x","batchNorm"),c=_(t,"mean","batchNorm"),f=_(n,"variance","batchNorm");o!=null&&(a=_(o,"scale","batchNorm")),r!=null&&(s=_(r,"offset","batchNorm")),I(c.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),I(s==null||c.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),I(a==null||c.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=l.rank===0||l.rank===1?l.as4D(1,1,1,l.size):l.rank===2?l.as4D(1,1,l.shape[0],l.shape[1]):l.rank===3?l.as4D(1,l.shape[0],l.shape[1],l.shape[2]):l;var d=[l,c,f,a];return F.runKernelFunc(function(p,h){var m=p.batchNormalization(u,yu(c),yu(f),i,yu(a),yu(s));return h([l,c,f,a]),m},{x:l,mean:c,variance:f,scale:a,offset:s},function(p,h){var m=h,g=m[0],v=m[1],y=m[2],x=m[3],w=x??J(1),b=ct(v.shape,u.shape),C=[];if(v.rank===1){for(var E=0;E<u.shape.length-1;++E)C.push(u.shape[E]);C.push(1)}var S=g.sub(v),R=p.mul(w),k=gw(y.add(J(i))),D=k.mul(k).mul(k).mul(J(-.5));return{x:function(){return v.rank===1?p.mul(Mi(k.as4D(1,1,1,v.shape[0]),C)).mul(w).reshape(g.shape):p.mul(k).mul(w).reshape(g.shape)},mean:function(){var T=k.mul(J(-1)).mul(R);return v.rank===1&&(T=T.sum(b)),T.reshape(v.shape)},variance:function(){var T=D.mul(S).mul(R);return v.rank===1&&(T=T.sum(b)),T.reshape(v.shape)},scale:function(){var T=S.mul(k),z=p.mul(T);return v.rank===1&&(z=z.sum(b)),z.reshape(v.shape)},offset:function(){var T=p;return v.rank===1&&(T=T.sum(b)),T.reshape(v.shape)}}},"BatchNormalization",{varianceEpsilon:i},d).reshape(l.shape)}function yu(e){return e==null?null:e.rank===0?e.as1D():e.rank===1?e:e.rank===2?e.as4D(1,1,e.shape[0],e.shape[1]):e.rank===3?e.as4D(1,e.shape[0],e.shape[1],e.shape[2]):e}function _c(){M2("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var JD=N({batchNormalization2d_:function(e,t,n,r,o,i){return r===void 0&&(r=.001),_c(),xw(e,t,n,i,o,r)}}),ZD=N({batchNormalization3d_:function(e,t,n,r,o,i){return r===void 0&&(r=.001),_c(),ww(e,t,n,i,o,r)}}),eP=N({batchNormalization4d_:function(e,t,n,r,o,i){return r===void 0&&(r=.001),_c(),bw(e,t,n,i,o,r)}}),tP=N({batchNormalization_:function(e,t,n,r,o,i){return r===void 0&&(r=.001),_c(),Ms(e,t,n,i,o,r)}}),Cw=N({batchNorm_:Ms}),nP=N({batchNorm2d_:xw}),rP=N({batchNorm3d_:ww}),oP=N({batchNorm4d_:bw}),kc=N({logicalAnd_:function(e,t){var n=_(e,"a","logicalAnd","bool"),r=_(t,"b","logicalAnd","bool");return be(n.shape,r.shape),F.runKernelFunc(function(o){return o.logicalAnd(n,r)},{a:n,b:r},null,"LogicalAnd")}}),iP=N({logicalNot_:function(e){var t=_(e,"x","logicalNot","bool");return F.runKernelFunc(function(n){return n.logicalNot(t)},{$x:t})}}),Ew=N({logicalOr_:function(e,t){var n=_(e,"a","logicalOr","bool"),r=_(t,"b","logicalOr","bool");return be(n.shape,r.shape),F.runKernelFunc(function(o){return o.logicalOr(n,r)},{$a:n,$b:r})}}),aP=N({logicalXor_:function(e,t){var n=_(e,"a","logicalXor","bool"),r=_(t,"b","logicalXor","bool");return be(n.shape,r.shape),Ew(e,t).logicalAnd(kc(e,t).logicalNot())}}),Ho=N({where_:function(e,t,n){var r=_(t,"a","where"),o=_(n,"b","where"),i=_(e,"condition","where","bool");return Ne(r.shape,o.shape,"Error in where: "),i.rank===1?I(i.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Ne(i.shape,o.shape,"Error in where: "),F.runKernelFunc(function(a,s){var u=a.select(i,r,o);return s([i]),u},{$condition:i,$a:r,$b:o},function(a,s){var u=s[0];return{$condition:function(){return _e(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),Sw=function(e){return te(this,void 0,void 0,function(){var t,n,r;return ne(this,function(o){switch(o.label){case 0:return[4,(t=_(e,"condition","whereAsync","bool")).data()];case 1:return n=o.sent(),r=uv(t.shape,n),e!==t&&t.dispose(),[2,r]}})})},we=N({add_:function(e,t){var n,r=_(e,"a","add"),o=_(t,"b","add");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a){return a.add(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=ct(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=ct(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),sP=N({addN_:function(e){I(Array.isArray(e),function(){return"The argument passed to tf.addN() must be a list of tensors"}),I(e.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+e.length});var t=e.map(function(o,i){return _(o,"tensors"+i,"addN")}),n=t[0];t.forEach(function(o){if(o.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!gt(o.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return F.runKernelFunc(function(o){return o.addN(t)},r,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),uP=N({addStrict_:function(e,t){var n=_(e,"a","addStrict"),r=_(t,"b","addStrict");return Ne(n.shape,r.shape,"Error in addStrict: "),n.add(r)}}),lP=N({atan2_:function(e,t){var n,r=_(e,"a","atan2"),o=_(t,"b","atan2");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],l=s[1];return{$a:function(){var c=we(u.square(),l.square()),f=a.mul(l.div(c)),d=ct(u.shape,i);return d.length>0&&(f=f.sum(d)),f.reshape(u.shape)},$b:function(){var c=we(u.square(),l.square()),f=Bl(a.mul(u.div(c))),d=ct(l.shape,i);return d.length>0&&(f=f.sum(d)),f.reshape(l.shape)}}})}}),In=N({div_:function(e,t){var n,r=_(e,"a","div"),o=_(t,"b","div");if(n=Ke(r,o),r=n[0],o=n[1],r.dtype==="int32"&&o.dtype==="int32")return _w(r,o);var i=be(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.realDivide(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],l=s[1];return{a:function(){var c=a.div(l.toFloat()),f=ct(u.shape,i);return f.length>0?c.sum(f).reshape(u.shape):c},b:function(){var c=a.mul(u.toFloat()),f=ct(l.shape,i);f.length>0&&(c=c.sum(f).reshape(l.shape));var d=l.square();return c.div(d.toFloat()).neg()}}},"Div")}}),cP=N({divNoNan_:function(e,t){var n,r=_(e,"a","div"),o=_(t,"b","div");r=(n=Ke(r,o))[0],o=n[1];var i=In(r,o),a=_e(i),s=o.equal(a);return Ho(s,a,i)}}),fP=N({divStrict_:function(e,t){var n=_(e,"a","div"),r=_(t,"b","div");return Ne(n.shape,r.shape,"Error in divideStrict: "),n.div(r)}}),_w=N({floorDiv_:function(e,t){var n,r=_(e,"a","floorDiv"),o=_(t,"b","floorDiv");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],l=s[1];return{a:function(){var c=a.div(l.toFloat()),f=ct(u.shape,i);return f.length>0?c.sum(f).reshape(u.shape):c},b:function(){var c=a.mul(u.toFloat()),f=ct(l.shape,i);f.length>0&&(c=c.sum(f).reshape(l.shape));var d=l.square();return c.div(d.toFloat()).neg()}}},"FloorDiv")}}),pv=N({maximum_:function(e,t){var n,r=_(e,"a","maximum"),o=_(t,"b","maximum");return n=Ke(r,o),r=n[0],o=n[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),be(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.maximum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),dP=N({maximumStrict_:function(e,t){var n=_(e,"a","maximumStrict"),r=_(t,"b","maximumStrict");return Ne(n.shape,r.shape,"Error in maximumStrict: "),n.maximum(r)}}),kw=N({minimum_:function(e,t){var n,r=_(e,"a","minimum"),o=_(t,"b","minimum");return n=Ke(r,o),r=n[0],o=n[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),be(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.minimum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),pP=N({minimumStrict_:function(e,t){var n=_(e,"a","minimumStrict"),r=_(t,"b","minimumStrict");return Ne(n.shape,r.shape,"Error in minimumStrict: "),n.minimum(r)}}),hP=N({mod_:function(e,t){var n,r=_(e,"a","mod"),o=_(t,"b","mod");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],l=s[1];return{$a:function(){var c=ct(u.shape,i);return c.length>0?a.sum(c).reshape(u.shape):a},$b:function(){var c=a.mul(u.div(l).floor().neg()),f=ct(l.shape,i);return f.length>0?c.sum(f).reshape(l.shape):c}}})}}),vP=N({modStrict_:function(e,t){var n=_(e,"a","modStrict"),r=_(t,"b","modStrict");return Ne(n.shape,r.shape,"Error in modStrict: "),n.mod(r)}}),Pt=N({mul_:function(e,t){var n,r=_(e,"a","mul"),o=_(t,"b","mul");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],l=s[1];return{a:function(){var c=a.mul(l.toFloat()),f=ct(u.shape,i);return f.length>0?c.sum(f).reshape(u.shape):c},b:function(){var c=a.mul(u.toFloat()),f=ct(l.shape,i);return f.length>0?c.sum(f).reshape(l.shape):c}}},"Mul")}}),mP=N({mulStrict_:function(e,t){var n=_(e,"a","mul"),r=_(t,"b","mul");return Ne(n.shape,r.shape,"Error in multiplyStrict: "),n.mul(r)}}),Ll=N({pow_:function(e,t){var n,r=_(e,"base","pow"),o=_(t,"exp","pow");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape),a=[r,o];return F.runKernelFunc(function(s,u){var l=s.pow(r,o);return u([r,o,l]),l},{a:r,b:o},function(s,u){var l=u[0],c=u[1],f=u[2];return{a:function(){var d=c.toFloat(),p=s.mul(d.mul(l.pow(d.sub(J(1))))),h=ct(l.shape,i);return h.length>0&&(p=p.sum(h)),p.reshape(l.shape)},b:function(){var d=l.greater(0),p=l.log().where(d,_e(l)),h=s.mul(f.mul(p)),m=ct(c.shape,i);return m.length>0&&(h=h.sum(m)),h.reshape(c.shape)}}},"Pow",{},a,[!0])}}),gP=N({powStrict_:function(e,t){return Ne(e.shape,t.shape,"Error in powStrict: "),e.pow(t)}}),yP=N({squaredDifferenceStrict_:function(e,t){var n=_(e,"a","squaredDifferenceStrict"),r=_(t,"b","squaredDifferenceStrict");return Ne(n.shape,r.shape,"Error in squaredDifferenceStrict: "),n.squaredDifference(r)}}),ft=N({sub_:function(e,t){var n,r=_(e,"a","sub"),o=_(t,"b","sub");n=Ke(r,o),r=n[0],o=n[1];var i=be(r.shape,o.shape);return F.runKernelFunc(function(a){return a.subtract(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=ct(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=ct(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),xP=N({subStrict_:function(e,t){var n=_(e,"a","subStrict"),r=_(t,"b","subStrict");return Ne(n.shape,r.shape,"Error in subStrict: "),n.sub(r)}}),Rw=N({equal_:function(e,t){var n,r=_(e,"a","equal"),o=_(t,"b","equal");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i){return i.equal(r,o)},{$a:r,$b:o})}}),wP=N({equalStrict_:function(e,t){var n=_(e,"a","equalStrict"),r=_(t,"b","equalStrict");return Ne(n.shape,r.shape,"Error in equalStrict: "),n.equal(r)}}),bP=N({greater_:function(e,t){var n,r=_(e,"a","greater"),o=_(t,"b","greater");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i){return i.greater(r,o)},{a:r,b:o},null,"Greater")}}),Iw=N({greaterEqual_:function(e,t){var n,r=_(e,"a","greaterEqual"),o=_(t,"b","greaterEqual");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return _e(s)},b:function(){return _e(u)}}},"GreaterEqual")}}),CP=N({greaterEqualStrict_:function(e,t){var n=_(e,"a","greaterEqualStrict"),r=_(t,"b","greaterEqualStrict");return Ne(n.shape,r.shape,"Error in greaterEqualStrict: "),n.greaterEqual(r)}}),EP=N({greaterStrict_:function(e,t){var n=_(e,"a","greaterStrict"),r=_(t,"b","greaterStrict");return Ne(n.shape,r.shape,"Error in greaterStrict: "),n.greater(r)}}),SP=N({less_:function(e,t){var n,r=_(e,"a","less"),o=_(t,"b","less");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i){return i.less(r,o)},{a:r,b:o},null,"Less")}}),_P=N({lessEqual_:function(e,t){var n,r=_(e,"a","lessEqual"),o=_(t,"b","lessEqual");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s},{a:r,b:o},null,"LessEqual")}}),kP=N({lessEqualStrict_:function(e,t){var n=_(e,"a","lessEqualStrict"),r=_(t,"b","lessEqualStrict");return Ne(n.shape,r.shape,"Error in lessEqualStrict: "),n.lessEqual(r)}}),RP=N({lessStrict_:function(e,t){var n=_(e,"a","lessStrict"),r=_(t,"b","lessStrict");return Ne(n.shape,r.shape,"Error in lessStrict: "),n.less(r)}}),IP=N({notEqual_:function(e,t){var n,r=_(e,"a","notEqual"),o=_(t,"b","notEqual");return n=Ke(r,o),r=n[0],o=n[1],be(r.shape,o.shape),F.runKernelFunc(function(i){return i.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),AP=N({notEqualStrict_:function(e,t){var n=_(e,"a","notEqualStrict"),r=_(t,"b","notEqualStrict");return Ne(n.shape,r.shape,"Error in notEqualStrict: "),n.notEqual(r)}});function O0(e,t){for(var n=[],r=e;r<t;++r)n.push(r);return n}function M0(e){for(var t=[],n=0;n<e.length;++n)for(var r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var hv=N({gather_:function(e,t,n){n===void 0&&(n=0);var r=_(e,"x","gather"),o=_(t,"indices","gather","int32");n=dt(n,r.shape)[0];var i=function(a,s,u){for(var l=a.shape[u],c=[],f=1,d=1,p=0;p<u;p++)c.push(a.shape[p]),f*=a.shape[p];for(p=0;p<s.rank;p++)c.push(s.shape[p]);for(p=u+1;p<a.rank;p++)c.push(a.shape[p]),d*=a.shape[p];return{batchSize:f,sliceSize:d,dimSize:l,outputShape:c}}(r,o,n);return F.runKernelFunc(function(a,s){var u=a.gather(r,o.flatten(),n);return s([o]),u},{x:r,indices:o},function(a,s){var u=s[0];return{x:function(){var l=r.shape,c=u.size,f=l.slice(0,n),d=f.length,p=l.slice(n,l.length).slice(1),h=p.length,m=O0(0,d),g=O0(d+1,d+1+h),v=M0([f,[c],p]),y=a.reshape(v),x=u.reshape([c]),w=M0([[d],m,g]),b=y.transpose(w),C=Aw(b,x,r.shape[n]),E=ev(w);return C=C.transpose(E)},indices:function(){return u}}},"Gather",{axis:n}).reshape(i.outputShape)}}),Aw=N({unsortedSegmentSum_:function(e,t,n){var r=_(e,"x","unsortedSegmentSum"),o=_(t,"segmentIds","unsortedSegmentSum","int32");return I(Je(n),function(){return"numSegments must be of dtype int"}),F.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(r,o,n);return a([o]),s},{$x:r},function(i,a){var s=a[0];return{$x:function(){return function(u,l){for(var c=pv(l,_e(l)),f=hv(u,c),d=Iw(l,J(0,"int32")),p=f.rank-d.rank,h=0;h<p;++h)d=hn(d,h+1);d=kc(d,pa(f.shape,"bool"));var m=_e(f);return Ho(d,f,m)}(i,s)}}})}}),TP=function(e,t,n){return te(this,void 0,void 0,function(){var r,o,i,a,s,u,l,c,f,d,p,h,m;return ne(this,function(g){switch(g.label){case 0:for(r=_(e,"tensor","boolMask"),o=_(t,"mask","boolMask","bool"),i=n??0,a=o.rank,s=r.shape,I(a>0,function(){return"mask cannot be scalar"}),Ne(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,l=i;l<i+a;l++)u*=s[l];return c=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(c),d=o.reshape([-1]),[4,Sw(d)];case 1:return p=g.sent(),h=p.squeeze([1]),m=hv(f,h,i),e!==r&&r.dispose(),t!==o&&o.dispose(),h.dispose(),f.dispose(),d.dispose(),p.dispose(),[2,m]}})})};function Tw(e,t,n,r,o,i,a){i===void 0&&(i="NHWC"),I(e.length===t.rank,function(){return"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match"});var s=e,u=t,l=!1;t.rank===3&&(l=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,e[0],e[1],e[2]]),I(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),I(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),I(n.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+n.rank});var c=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];I(c===n.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+c+") must match input depth for filter "+n.shape[2]+"."}),I(f===n.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+n.shape[3]+"."}),a!=null&&I(Je(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var d=iv(i),p=Jo(s,n.shape,r,1,o,a,!1,d),h=F.runKernelFunc(function(m,g){var v=m.conv2dDerInput(u,n,p);return g([n,u]),v},{dy4D:u,filter:n},function(m,g){var v=g[0],y=g[1];return{dy4D:function(){return En(m,v,r,o,i,1,a)},filter:function(){return vv(m,y,v.shape,r,o,i,a)}}});return l?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function ed(e){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(e),n=t[0],r=t[1],o=t[2];return n===1&&r===1&&o===1}function Nw(e,t,n,r,o){I(e.length===t.rank,function(){return"Length of inShape ("+e.length+") and rank of dy ("+t.rank+") must match"});var i=e,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,e[0],e[1],e[2],e[3]]);var u=i[4],l=a.shape[4];I(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),I(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),I(n.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+n.rank}),I(u===n.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+n.shape[3]+"."}),I(l===n.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+l+") must match output depth for filter "+n.shape[4]+"."});var c=Ol(i,n.shape,r,1,o),f=F.runKernelFunc(function(d){return d.conv3dDerInput(a,n,c)},{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var NP=N({conv1d_:function(e,t,n,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=_(e,"x","conv1d"),u=_(t,"filter","conv1d"),l=s,c=!1;s.rank===2&&(c=!0,l=s.as3D(1,s.shape[0],s.shape[1])),I(l.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+l.rank+"."}),I(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&I(Je(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}),I(l.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+l.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),I(Yt(n,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+n+" and dilation '"+i+"'"}),I(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=l.as4D(l.shape[0],1,l.shape[1],l.shape[2]),p=En(d,f,[1,n],r,"NHWC",[1,i],a);return c?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),En=N({conv2d_:function(e,t,n,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=_(e,"x","conv2d"),u=_(t,"filter","conv2d"),l=s,c=!1;s.rank===3&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+l.rank+"."}),I(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&I(Je(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=o==="NHWC"?l.shape[3]:l.shape[1];I(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),I(Yt(n,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"});var d=iv(o),p=Jo(l.shape,u.shape,n,i,r,a,!1,d),h=[u,l],m=F.runKernelFunc(function(g,v){var y=g.conv2d(l,u,p);return v([u,l]),y},{x:l,filter:u},function(g,v){var y=v,x=y[0],w=y[1];return I(oa(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return Dw(w.shape,g,x,n,r,o)},filter:function(){return vv(w,g,x.shape,n,r,o)}}},"Conv2D",p,h);return c?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),DP=N({conv3d_:function(e,t,n,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=_(e,"x","conv3d"),s=_(t,"filter","conv3d"),u=a,l=!1;a.rank===4&&(l=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),I(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),I(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),I(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),I(function(d,p){return ed(d)||ed(p)}(n,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),I(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var c=Ol(u.shape,s.shape,n,i,r),f=F.runKernelFunc(function(d,p){var h=d.conv3d(u,s,c);return p([u,s]),h},{x:u,$filter:s},function(d,p){I(ed(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var h=p[0],m=p[1];return{x:function(){return Nw(h.shape,d,m,n,r)},$filter:function(){return function(g,v,y,x,w){var b=g;g.rank===4&&(b=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3]));var C=v;C.rank===4&&(C=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3])),I(b.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+b.shape+"."}),I(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),I(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),I(b.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+b.shape[4]+") must match input depth in filter ("+y[3]+"."}),I(C.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+y[4]+")."});var E=Ol(b.shape,y,x,1,w);return F.runKernelFunc(function(S){return S.conv3dDerFilter(b,C,E)},{x5D:b,dy5D:C})}(h,d,m.shape,n,r)}}});return l?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),vv=N({conv2dDerFilter_:function(e,t,n,r,o,i,a){i===void 0&&(i="NHWC");var s=e;e.rank===3&&(s=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),I(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),I(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),I(n.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+n+"."});var l=i==="NHWC"?s.shape[3]:s.shape[1],c=i==="NHWC"?u.shape[3]:u.shape[1];I(l===n[2],function(){return"Error in conv2dDerFilter: depth of input "+l+") must match input depth in filter ("+n[2]+"."}),I(c===n[3],function(){return"Error in conv2dDerFilter: depth of dy ("+c+") must match output depth for filter ("+n[3]+")."}),a!=null&&I(Je(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=iv(i),d=Jo(s.shape,n,r,1,o,a,!1,f);return F.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,d)},{x4D:s,dy4D:u})}}),Dw=N({conv2dDerInput_:Tw}),Rc=N({depthwiseConv2d_:function(e,t,n,r,o,i,a){i===void 0&&(i=[1,1]);var s=_(e,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),l=s,c=!1;s.rank===3&&(c=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),I(l.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+l.rank+"."}),I(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),I(l.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+l.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),I(Yt(n,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+i+"'"}),a!=null&&I(Je(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=Jo(l.shape,u.shape,n,i,r,a,!0),d=[l,u],p=F.runKernelFunc(function(h,m){var g=h.depthwiseConv2D(l,u,f);return m([l,u]),g},{x:l,filter:u},function(h,m){I(oa(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var g=m[0],v=m[1];return{x:function(){return Pw(g.shape,h,v,f)},filter:function(){return Fw(g,h,v.shape,f)}}},"DepthwiseConv2dNative",f,d);return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),Pw=N({depthwiseConv2dDerInput_:function(e,t,n,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=F.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,n,r)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),Fw=N({depthwiseConv2dDerFilter_:function(e,t,n,r){var o=e;e.rank===3&&(o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),F.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,r)},{x4D:o,dy4D:i})}}),mv=N({separableConv2d_:function(e,t,n,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=_(e,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),l=_(n,"pointwiseFilter","separableConv2d"),c=s,f=!1;if(s.rank===3&&(f=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");I(c.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+c.rank+"."}),I(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),I(l.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),I(l.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+l.shape[0]+"."}),I(l.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+l.shape[1]+"."});var d=u.shape[2],p=u.shape[3];I(l.shape[2]===d*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+d*p+", but got "+l.shape[2]+"."});var h=Rc(c,u,r,o,a,i),m=En(h,l,1,"valid",a);return f?m.as3D(m.shape[1],m.shape[2],m.shape[3]):m}}),PP=N({conv2dTranspose_:function(e,t,n,r,o,i){return Tw(n,_(e,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),FP=N({conv3dTranspose_:function(e,t,n,r,o){return Nw(n,_(e,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),r,o)}}),Ic=N({matMul_:function(e,t,n,r){var o;n===void 0&&(n=!1),r===void 0&&(r=!1);var i=_(e,"a","matMul"),a=_(t,"b","matMul");o=Ke(i,a),i=o[0],a=o[1];var s=n?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),d=a.shape.slice(0,-2),p=oe(f),h=oe(d);I(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),I(gt(f,d),function(){return"Error in matMul: outer dimensions ("+f+") and ("+d+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),I(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+n+" and transposeB="+r+" must match."});var m=i.shape.slice(0,-2).concat([l,c]),g=n?i.as3D(p,s,l):i.as3D(p,l,s),v=r?a.as3D(h,c,u):a.as3D(h,u,c),y={transposeA:n,transposeB:r};return F.runKernelFunc(function(x,w){var b=x.batchMatMul(g,v,n,r);return w([g,v]),b},{a:g,b:v},function(x,w){var b=w,C=b[0],E=b[1];return n||r?!n&&r?{a:function(){return x.matMul(E,!1,!1)},b:function(){return x.matMul(C,!0,!1)}}:n&&!r?{a:function(){return E.matMul(x,!1,!0)},b:function(){return C.matMul(x,!1,!1)}}:{a:function(){return E.matMul(x,!0,!0)},b:function(){return x.matMul(C,!0,!0)}}:{a:function(){return x.matMul(E,!1,!0)},b:function(){return C.matMul(x,!0,!1)}}},"BatchMatMul",y).reshape(m)}}),OP=N({dot_:function(e,t){var n=_(e,"t1","dot"),r=_(t,"t2","dot");I(!(n.rank!==1&&n.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+n.rank+" and "+r.rank+"."});var o=n.rank===1?n.size:n.shape[1],i=r.rank===1?r.size:r.shape[0];return I(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),n.rank===1&&r.rank===1?n.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():n.rank===1&&r.rank===2?n.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():n.rank===2&&r.rank===1?n.matMul(r.as2D(-1,1)).as1D():n.matMul(r.as2D(r.shape[0],r.shape[1]))}}),MP=N({outerProduct_:function(e,t){var n=_(e,"v1","outerProduct"),r=_(t,"v2","outerProduct");return I(n.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+n.rank+" and "+r.rank+"."}),n.as2D(-1,1).matMul(r.as2D(1,-1))}}),Bs=N({reverse_:function(e,t){var n=_(e,"x","reverse");if(n.rank===0)return n.clone();var r=dt(t,n.shape);return F.runKernelFunc(function(o){return o.reverse(n,r)},{$x:n},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(n)}}),BP=N({reverse1d_:function(e){var t=_(e,"x","reverse");return I(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Bs(t,0)}}),LP=N({reverse2d_:function(e,t){var n=_(e,"x","reverse");return I(n.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+n.rank+"."}),Bs(n,t)}}),zP=N({reverse3d_:function(e,t){var n=_(e,"x","reverse");return I(n.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+n.rank+"."}),Bs(n,t)}}),WP=N({reverse4d_:function(e,t){var n=_(e,"x","reverse");return I(n.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+n.rank+"."}),Bs(n,t)}});function Ow(e,t,n,r,o,i){var a=_(e,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),r==null&&(r=[1,1]),I(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),I(Yt(n,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"}),i!=null&&I(Je(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var l=gs(s.shape,t,n,r,o,i);if(l.filterWidth===1&&l.filterHeight===1&&gt(l.inShape,l.outShape))return a.clone();var c=[s],f=F.runKernelFunc(function(d,p){var h=d.maxPool(s,l);return p([s,h]),h},{x:s},function(d,p){var h=p[0],m=p[1];return{x:function(){return function(g,v,y,x,w,b,C,E){var S=_(g,"dy","maxPoolBackprop"),R=_(v,"input","maxPoolBackprop"),k=_(y,"output","maxPoolBackprop");I(R.rank===S.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+S.rank+")"}),b==null&&(b=[1,1]),I(Yt(w,b),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+w+" and dilations '"+b+"'"}),I(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),I(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."}),E!=null&&I(Je(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+E+" but got pad "+C+"."});var D=gs(R.shape,x,w,b,C,E);return F.runKernelFunc(function(T){return T.maxPoolBackprop(S,R,k,D)},{$dy:S,$input:R})}(d,h,m,t,n,r,o)}}},"MaxPool",l,c);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Mw(e,t,n,r,o,i){var a=_(e,"x","avgPool","float32");r==null&&(r=[1,1]),I(Yt(n,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+r+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&I(Je(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var l=gs(s.shape,t,n,r,o,i);if(l.filterWidth===1&&l.filterHeight===1&&gt(l.inShape,l.outShape))return a.clone();var c=F.runKernelFunc(function(f){return f.avgPool(s,l)},{x:s},function(f){return{x:function(){return function(d,p,h,m,g,v){var y=_(d,"dy","avgPoolBackprop"),x=_(p,"input","avgPoolBackprop");I(x.rank===y.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+y.rank+")"}),g==null&&(g=[1,1]),I(Yt(m,g),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"});var w=x,b=y,C=!1;x.rank===3&&(C=!0,w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),b=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),I(b.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+b.rank+"."}),I(w.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+w.rank+"."});var E=gs(w.shape,h,m,g,v),S=F.runKernelFunc(function(R){return R.avgPoolBackprop(b,w,E)},{dy4D:b,input4D:w});return C?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,n,r,o)}}},"AvgPool",l);return c=c.cast(a.dtype),u?c.as3D(c.shape[1],c.shape[2],c.shape[3]):c}var pt=N({maxPool_:function(e,t,n,r,o){return Ow(e,t,n,1,r,o)}}),Ls=N({avgPool_:function(e,t,n,r,o){return Mw(e,t,n,1,r,o)}}),jP=N({pool_:function(e,t,n,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=_(e,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),I(Yt(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var l,c=gs(s.shape,t,i,o,r),f=[c.dilationHeight,c.dilationWidth];l=r==="same"?function(w,b){var C=w.map(function(R,k){return R+(R-1)*(b[k]-1)}).map(function(R){return R-1}),E=C.map(function(R){return Math.floor(R/2)}),S=C.map(function(R,k){return R-E[k]});return C.map(function(R,k){return[E[k],S[k]]})}([c.filterHeight,c.filterWidth],f):[[0,0],[0,0]];var d=f[0]===1&&f[1]===1,p=function(w,b,C){var E=C.map(function(L){return L[0]}),S=C.map(function(L){return L[1]}),R=w.concat(E,S),k=b.map(function(L,$){return(L-R[$]%L)%L}),D=S.map(function(L,$){return L+k[$]}),T=b.map(function(L,$){return[E[$],D[$]]}),z=b.map(function(L,$){return[0,k[$]]});return[T,z]}([c.inHeight,c.inWidth],f,l),h=p[0],m=p[1],g=d?r:"valid",v=d?s:$2(s,f,h),y=(n==="avg"?function(){return Mw(v,t,i,1,g)}:function(){return Ow(v,t,i,1,g)})(),x=d?y:z2(y,f,m);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),$P=N({maxPool3d_:function(e,t,n,r,o,i,a){i===void 0&&(i="NDHWC");var s=_(e,"x","maxPool3d"),u=s,l=!1;s.rank===4&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),I(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),I(Yt(n,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),o!=null&&I(Je(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=Fl(u.shape,t,n,a,r,o,i),f=F.runKernelFunc(function(d,p){var h=d.maxPool3d(u,c);return p([u,h]),h},{x:u},function(d,p){var h=p[0],m=p[1];return{x:function(){return function(g,v,y,x,w,b,C,E){var S=_(g,"dy","maxPool3dBackprop"),R=_(v,"input","maxPool3dBackprop"),k=_(y,"output","maxPool3dBackprop"),D=S,T=R,z=k,L=!1;R.rank===4&&(L=!0,D=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),T=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),z=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3])),I(D.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+D.rank+"."}),I(T.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),I(z.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+z.rank+"."}),b==null&&(b=[1,1,1]),I(Yt(w,b),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+w+" and dilations '"+b+"'"}),E!=null&&I(Je(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+E+" but got pad "+C+"."});var $=Fl(T.shape,x,w,b,C,E),V=F.runKernelFunc(function(U){return U.maxPool3dBackprop(D,T,z,$)},{dy5D:D,input5D:T});return L?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(d,h,m,t,n,a,r,o)}}});return l?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),UP=N({avgPool3d_:function(e,t,n,r,o,i,a){i===void 0&&(i="NDHWC");var s=_(e,"x","avgPool3d","float32"),u=s,l=!1;s.rank===4&&(l=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),I(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),I(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),I(Yt(n,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+a+"'"}),o!=null&&I(Je(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var c=Fl(u.shape,t,n,a,r,o,i),f=F.runKernelFunc(function(d){return d.avgPool3d(u,c)},{x:u},function(d){return{x:function(){return function(p,h,m,g,v,y,x){var w=_(p,"dy","avgPool3dBackprop"),b=_(h,"input","avgPool3dBackprop"),C=w,E=b,S=!1;b.rank===4&&(S=!0,C=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3]),E=b.as5D(1,b.shape[0],b.shape[1],b.shape[2],b.shape[3])),I(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),I(E.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+E.rank+"."}),v==null&&(v=[1,1,1]),I(Yt(g,v),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+v+"'"}),x!=null&&I(Je(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+y+"."});var R=Fl(E.shape,m,g,v,y,x),k=F.runKernelFunc(function(D){return D.avgPool3dBackprop(C,E,R)},{dy5D:C,input5D:E});return S?k.as4D(k.shape[1],k.shape[2],k.shape[3],k.shape[4]):k}(d,u,t,n,a,r,o)}}});return f=f.cast(u.dtype),l?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),rr=N({slice_:function(e,t,n){var r,o,i=_(e,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){I(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=n==null?new Array(i.rank).fill(-1):typeof n=="number"?[n].concat(new Array(i.rank-1).fill(-1)):n.length<i.rank?n.concat(new Array(i.rank-n.length).fill(-1)):n).map(function(u,l){return u>=0?u:(I(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+l+"."}),i.shape[l]-r[l])}),gT(i,r,o);var a=i.shape,s={begin:r,size:o};return F.runKernelFunc(function(u){return u.slice(i,r,o)},{x:i},function(u){for(var l=[],c=0;c<u.rank;c++)l.push([r[c],a[c]-r[c]-o[c]]);return{x:function(){return u.pad(l)}}},"Slice",s)}}),VP=N({slice1d_:function(e,t,n){var r=_(e,"x","slice1d");return I(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),rr(r,[t],[n])}}),HP=N({slice2d_:function(e,t,n){var r=_(e,"x","slice2d");return I(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),rr(r,t,n)}}),Bw=N({slice3d_:function(e,t,n){var r=_(e,"x","slice3d");return I(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),rr(r,t,n)}}),GP=N({slice4d_:function(e,t,n){var r=_(e,"x","slice4d");return I(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),rr(r,t,n)}});function Lw(e,t,n,r,o){return t.rank<n.rank&&(t=t.reshape(Xt(t.shape,r))),e.rank<n.rank&&(e=e.reshape(Xt(e.shape,r))),{x:function(){var i=e.mul(n.equal(t).cast(e.dtype));return o==null?i:i.transpose(o)}}}var qP=N({all_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","all","bool"),o=dt(t,r.shape),i=o,a=ar(i,r.rank);a!=null&&(r=r.transpose(a),i=sr(i.length,r.rank));var s=F.runKernelFunc(function(l){return l.all(r,i)},{$x:r});if(n){var u=Xt(s.shape,o);return s.reshape(u)}return s}}),KP=N({any_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","any","bool"),o=dt(t,r.shape),i=o,a=ar(i,r.rank);a!=null&&(r=r.transpose(a),i=sr(i.length,r.rank));var s=F.runKernelFunc(function(l){return l.any(r,i)},{$x:r});if(n){var u=Xt(s.shape,o);return s.reshape(u)}return s}}),XP=N({argMax_:function(e,t){t===void 0&&(t=0);var n=_(e,"x","argMax");t==null&&(t=0);var r=dt(t,n.shape),o=ar(r,n.rank);o!=null&&(n=n.transpose(o),r=sr(r.length,n.rank));var i={axis:r[0]},a=[n];return F.runKernelFunc(function(s,u){var l=s.argMax(n,r[0]);return u([n]),l},{x:n},function(s,u){var l=u[0];return{x:function(){return _e(l)}}},"ArgMax",i,a)}}),YP=N({argMin_:function(e,t){t===void 0&&(t=0);var n=_(e,"x","argMin");t==null&&(t=0);var r=dt(t,n.shape),o=ar(r,n.rank);return o!=null&&(n=n.transpose(o),r=sr(r.length,n.rank)),F.runKernelFunc(function(i,a){var s=i.argMin(n,r[0]);return a([n]),s},{$x:n},function(i,a){var s=a[0];return{$x:function(){return _e(s)}}})}}),QP=N({logSumExp_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","logSumExp"),o=dt(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(n){var u=Xt(s.shape,o);return s.reshape(u)}return s}}),Ac=N({max_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","max"),o=r,i=dt(t,r.shape),a=i,s=ar(a,r.rank);s!=null&&(r=r.transpose(s),a=sr(a.length,r.rank));var u=[r],l=F.runKernelFunc(function(f,d){var p=f.max(r,a);return d([o,p]),p},{x:r},function(f,d){return Lw(f,d[1],d[0],i,s)},"Max",{axes:a},u,[!0]);if(n){var c=Xt(l.shape,i);l=l.reshape(c)}return l}}),JP=N({mean_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","mean"),o=dt(t,r.shape),i=oe(It(r.shape,o)[1]);return Sc(function(a){var s=J(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,n),gradFunc:function(u){var l=a.shape.slice();return o.forEach(function(c){l[c]=1}),u.reshape(l).mul(pa(a.shape,"float32")).div(i)}}})(r)}}),ZP=N({min_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","min"),o=r,i=dt(t,r.shape),a=i,s=ar(a,r.rank);s!=null&&(r=r.transpose(s),a=sr(a.length,r.rank));var u=[r],l=F.runKernelFunc(function(f,d){var p=f.min(r,a);return d([o,p]),p},{x:r},function(f,d){return Lw(f,d[1],d[0],i,s)},"Min",{axes:a},u,[!0]);if(n){var c=Xt(l.shape,i);l=l.reshape(c)}return l}}),eF=N({moments_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=dt(t,(e=_(e,"x","moments")).shape),o=e.mean(r,n),i=o.shape;n||(i=Xt(o.shape,r));var a=e.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,n)}}}),zw=N({sum_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=dt(t,r.shape);return Sc(function(i){var a=ar(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=sr(s.length,i.rank));var l=function(p){var h=i.shape.slice();return o.forEach(function(m){h[m]=1}),p.reshape(h).mul(pa(i.shape,"float32"))},c={axes:s},f=F.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return l(p)}}},"Sum",c);if(n){var d=Xt(f.shape,o);f=f.reshape(d)}return{value:f,gradFunc:l}})(r)}}),tF=N({prod_:function(e,t,n){t===void 0&&(t=null),n===void 0&&(n=!1);var r=_(e,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=dt(t,r.shape),i=ar(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=sr(a.length,r.rank));var u=F.runKernelFunc(function(c){return c.prod(s,a)},{permutedX:s});if(n){var l=Xt(u.shape,o);u=u.reshape(l)}return u}}),Ww=N({elu_:function(e){var t=_(e,"x","elu");return F.runKernelFunc(function(n,r){var o=n.elu(t);return r([o]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){return F.runKernelFunc(function(i){return i.eluDer(n,o)},{dy:n,y:o})}}})}}),nF=N({leakyRelu_:function(e,t){t===void 0&&(t=.2);var n=_(e,"x","leakyRelu");return pv(J(t).mul(n),n)}}),jw=N({prelu_:function(e,t){var n=_(e,"x","prelu"),r=_(t,"alpha","prelu");return F.runKernelFunc(function(o,i){var a=o.prelu(n,r);return i([n,r]),a},{x:n,alpha:r},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return Ho(u,o,o.mul(s))},alpha:function(){var l=Ho(u,_e(o),o.mul(a)),c=ct(s.shape,o.shape);return c.length>0&&(l=l.sum(c)),l.reshape(s.shape)}}},"Prelu")}}),He=N({relu_:function(e){var t=_(e,"x","relu");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(n,r){var o=n.relu(t);return r([t]),o},{x:t},function(n,r){var o=r[0];return{x:function(){return n.mulStrict(o.step().toFloat())}}},"Relu")}}),$w=N({relu6_:function(e){var t=_(e,"x","relu6");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(n,r){var o=n.relu6(t);return r([t]),o},{x:t},function(n,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return n.mulStrict(i.toFloat())}}},"Relu6")}}),rF=N({selu_:function(e){var t=_(e,"x","selu");return F.runKernelFunc(function(n,r){var o=n.selu(t);return r([t]),o},{$x:t},function(n,r){var o=r[0];return{$x:function(){var i=o.greater(J(0)),a=J(cv),s=J(fv),u=n.mul(s),l=n.mul(a).mul(o.toFloat().exp());return Ho(i,u,l)}}})}}),po=N({transpose_:function(e,t){var n=_(e,"x","transpose");if(t==null&&(t=n.shape.map(function(o,i){return i}).reverse()),I(n.rank===t.length,function(){return"Error in transpose: rank of input "+n.rank+" must match length of perm "+t+"."}),t.forEach(function(o){I(o>=0&&o<n.rank,function(){return"All entries in 'perm' must be between 0 and "+(n.rank-1)+" but got "+t})}),n.rank<=1)return n.clone();var r={perm:t};return F.runKernelFunc(function(o){return o.transpose(n,t)},{x:n},function(o){var i=ev(t);return{x:function(){return o.transpose(i)}}},"Transpose",r)}}),oF=N({localResponseNormalization_:function(e,t,n,r,o){t===void 0&&(t=5),n===void 0&&(n=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=_(e,"x","localResponseNormalization");I(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),I(Je(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=F.runKernelFunc(function(l,c){var f=l.localResponseNormalization4D(a,t,n,r,o);return c([a,f]),f},{x4D:a},function(l,c){var f=c[0],d=c[1];return{x4D:function(){return F.runKernelFunc(function(p){return p.LRNGrad(l,f,d,t,n,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Uw=N({norm_:function(e,t,n,r){t===void 0&&(t="euclidean"),n===void 0&&(n=null),r===void 0&&(r=!1);var o=function s(u,l,c){if(c===void 0&&(c=null),u.rank===0)return u.abs();if(u.rank!==1&&c===null)return s(u.reshape([-1]),l,c);if(u.rank===1||typeof c=="number"||Array.isArray(c)&&c.length===1){if(l===1)return u.abs().sum(c);if(l===1/0)return u.abs().max(c);if(l===-1/0)return u.abs().min(c);if(l==="euclidean"||l===2)return u.abs().pow(J(2,"int32")).sum(c).sqrt();throw new Error("Error in norm: invalid ord value: "+l)}if(Array.isArray(c)&&c.length===2){if(l===1)return u.abs().sum(c[0]).max(c[1]-1);if(l===1/0)return u.abs().sum(c[1]).max(c[0]);if(l===-1/0)return u.abs().sum(c[1]).min(c[0]);if(l==="fro"||l==="euclidean")return u.square().sum(c).sqrt();throw new Error("Error in norm: invalid ord value: "+l)}throw new Error("Error in norm: invalid axis: "+c)}(e=_(e,"x","norm"),t,n),i=o.shape;if(r){var a=dt(n,e.shape);i=Xt(o.shape,a)}return o.reshape(i)}}),iF=N({basicLSTMCell_:function(e,t,n,r,o,i){var a=_(e,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(n,"lstmBias","basicLSTMCell"),l=_(r,"data","basicLSTMCell"),c=_(o,"c","basicLSTMCell"),f=_(i,"h","basicLSTMCell"),d=l.concat(f,1).matMul(s).add(u),p=d.shape[0],h=d.shape[1]/4,m=[p,h],g=d.slice([0,0],m),v=d.slice([0,h],m),y=d.slice([0,2*h],m),x=d.slice([0,3*h],m),w=g.sigmoid().mulStrict(v.tanh()).addStrict(c.mulStrict(a.add(y).sigmoid())),b=w.tanh().mulStrict(x.sigmoid());return[w,b]}}),aF=N({multiRNNCell_:function(e,t,n,r){for(var o=_(t,"data","multiRNNCell"),i=Il(n,"c","multiRNNCell"),a=Il(r,"h","multiRNNCell"),s=o,u=[],l=0;l<e.length;l++){var c=e[l](s,i[l],a[l]);u.push(c[0]),u.push(c[1]),s=c[1]}var f=[],d=[];for(l=0;l<u.length;l+=2)f.push(u[l]),d.push(u[l+1]);return[f,d]}}),sF=N({movingAverage_:function(e,t,n,r,o){o===void 0&&(o=!0);var i=_(e,"v","movingAverage"),a=_(t,"x","movingAverage"),s=_(n,"decay","movingAverage");oA(i,a),I(gt(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=J(1),l=u.sub(s),c=a.sub(i).mul(l);if(o){I(r!=null,function(){return"When using zeroDebias: true, step is required."});var f=_(r,"step","movingAverage");c=c.div(u.sub(Ll(s,f)))}return i.add(c)}}),uF=N({stridedSlice_:function(e,t,n,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var l=_(e,"x","stridedSlice"),c=v0(s),f=l.shape.slice();c.forEach(function(g){t[g]=0,n[g]=1,f.splice(g,0,1)}),l=l.reshape(f);for(var d=0;d<l.rank;d++)t[d]=yT(o,t,r,l.shape,d),n[d]=xT(i,n,r,l.shape,d),r[d]=r[d]||1;var p=v0(u);p.forEach(function(g){n[g]=t[g]+1,r[g]=1});var h=ov(t,n,r),m=h.filter(function(g,v){return p.indexOf(v)===-1});return r.every(function(g){return g===1})?rr(l,t,h).reshape(m):F.runKernelFunc(function(g){return g.stridedSlice(l,t,n,r)},{$x:l}).reshape(m)}}),lF=N({topk_:function(e,t,n){t===void 0&&(t=1),n===void 0&&(n=!0);var r=_(e,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=F.runKernelFunc(function(a){return a.topk(r,t,n)},{$x:r});return{values:i[0],indices:i[1]}}}),cF=N({scatterND_:function(e,t,n){var r=_(e,"indices","scatterND","int32"),o=_(t,"updates","scatterND");return mT(o,r,n),F.runKernelFunc(function(i){return i.scatterND(r,o,n)},{indices:r,updates:o},null,"ScatterNd",{shape:n})}}),gv=N({fft_:function(e){I(e.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+e.dtype+"."});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return F.runKernelFunc(function(o){return o.fft(r)},{input:e}).reshape(e.shape)}}),zl=N({ifft_:function(e){I(e.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+e.dtype+"."});var t=e.shape[e.shape.length-1],n=e.size/t,r=e.as2D(n,t);return F.runKernelFunc(function(o){return o.ifft(r)},{input:e}).reshape(e.shape)}}),yv=N({rfft_:function(e,t){I(e.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+e.dtype});var n,r=e.shape[e.shape.length-1],o=e.size/r;if(t!=null&&t<r){var i=e.shape.map(function(v){return 0}),a=e.shape.map(function(v){return v});a[e.shape.length-1]=t,n=e.slice(i,a),r=t}else if(t!=null&&t>r){var s=e.shape.map(function(v){return v});s[e.shape.length-1]=t-r,n=e.concat(Le(s),e.shape.length-1),r=t}else n=e;var u=n.zerosLike(),l=wt(n,u).as2D(o,r),c=gv(l),f=Math.floor(r/2)+1,d=vn(c),p=Xn(c),h=d.split([f,r-f],d.shape.length-1),m=p.split([f,r-f],p.shape.length-1),g=n.shape.slice();return g[n.shape.length-1]=f,wt(h[0],m[0]).reshape(g)}}),Vw=N({irfft_:function(e){var t=e.shape[e.shape.length-1],n=e.size/t;if(t<=2){var r=e.as2D(n,t),o=zl(r);return vn(o)}var i=[n,2*(t-1)],a=vn(e).as2D(n,t),s=Xn(e).as2D(n,t),u=a.slice([0,1],[n,t-2]).reverse(1),l=s.slice([0,1],[n,t-2]).reverse(1).mul(J(-1)),c=a.concat(u,1),f=s.concat(l,1);return r=wt(c,f).as2D(i[0],i[1]),o=zl(r),vn(o)}}),fF=Object.freeze({fft:gv,ifft:zl,rfft:yv,irfft:Vw}),dF=N({sparseToDense_:function(e,t,n,r){r===void 0&&(r=0);var o=_(e,"sparseIndices","sparseToDense","int32"),i=_(t,"sparseValues","sparseToDense"),a=_(r,"defaultValue","sparseToDense",i.dtype);return function(s,u,l,c){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,d=s.rank>1?s.shape[1]:1;if(l.length!==d)throw new Error("outputShape has incorrect number of elements:, "+l.length+", should be: "+d+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==c.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,n,a),F.runKernelFunc(function(s){return s.sparseToDense(o,i,n,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),pF=N({gatherND_:function(e,t){var n=_(t,"indices","gatherND","int32"),r=_(e,"x","gatherND");return F.runKernelFunc(function(o){return o.gatherND(r,n)},{x:r,indices:n},null,"GatherNd")}}),hF=N({diag_:function(e){var t=_(e,"x","diag").flatten(),n=e.shape.concat(e.shape);return F.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(n)}}),vF=N({dropout_:function(e,t,n,r){var o=_(e,"x","dropout");if(I(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),I(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return e instanceof Ve?o.clone():o;var i=function(u,l){if(l==null)return u.shape.slice();if(gt(u.shape,l))return l;if(u.shape.length===l.length){for(var c=[],f=0;f<u.shape.length;f++)l[f]==null&&u.shape[f]!=null?c.push(u.shape[f]):c.push(l[f]);return c}return l}(o,n),a=1-t,s=j2(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function Hw(e,t,n){for(var r=1-e%2,o=new Float32Array(e),i=0;i<e;++i){var a=2*Math.PI*i/(e+r-1);o[i]=t-n*Math.cos(a)}return nt(o,"float32")}var xv=N({hannWindow_:function(e){return Hw(e,.5,.5)}}),Gw=N({hammingWindow_:function(e){return Hw(e,.54,.46)}}),wv=N({frame_:function(e,t,n,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=e.size;)a.push(rr(e,i,t)),i+=n;if(r)for(;i<e.size;){var s=i+t-e.size,u=ut([rr(e,i,t-s),nr([s],o)]);a.push(u),i+=n}return a.length===0?so([],[0,t]):ut(a).as2D(a.length,t)}}),qw=N({stft_:function(e,t,n,r,o){var i;o===void 0&&(o=xv),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=wv(e,t,n),s=Pt(a,o(t)),u=[],l=0;l<a.shape[0];l++)u.push(yv(s.slice([l,0],[1,t]),r));return ut(u)}}),mF=Object.freeze({hannWindow:xv,hammingWindow:Gw,frame:wv,stft:qw}),Dt,gF=function(e,t,n){return n===void 0&&(n=1),te(this,void 0,void 0,function(){var r,o,i,a,s,u,l,c,f,d,p,h,m,g;return ne(this,function(v){switch(v.label){case 0:return r=_(e,"predictions","inTopK"),o=_(t,"targets","inTopK"),I(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),I(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),Ne(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],I(n>0&&n<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+n}),[4,r.data()];case 1:return a=v.sent(),[4,o.data()];case 2:for(s=v.sent(),u=[a.length/i,i],c=u[1],f=hs("bool",l=u[0]),d=0;d<l;d++){for(p=d*c,h=a.subarray(p,p+c),m=[],g=0;g<h.length;g++)m.push({value:h[g],index:g});for(m.sort(function(y,x){return x.value-y.value}),f[d]=0,g=0;g<n;g++)if(m[g].index===s[d]){f[d]=1;break}}return e!==r&&r.dispose(),t!==o&&o.dispose(),[2,Ct(f,o.shape,"bool")]}})})};(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Dt||(Dt={}));var yF=N({absoluteDifference_:function(e,t,n,r){r===void 0&&(r=Dt.SUM_BY_NONZERO_WEIGHTS);var o=_(e,"labels","absoluteDifference"),i=_(t,"predictions","absoluteDifference"),a=null;n!=null&&(a=_(n,"weights","absoluteDifference")),Ne(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return Nr(s,a,r)}}),Nr=N({computeWeightedLoss_:function(e,t,n){n===void 0&&(n=Dt.SUM_BY_NONZERO_WEIGHTS);var r=_(e,"losses","computeWeightedLoss"),o=null;t!=null&&(o=_(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(n===Dt.NONE)return i;if(n===Dt.SUM)return i.sum();if(n===Dt.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(J(a)):s}if(n===Dt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(J(r.size));var u=o.mul(pa(r.shape)).notEqual(J(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+n)}}),xF=N({cosineDistance_:function(e,t,n,r,o){o===void 0&&(o=Dt.SUM_BY_NONZERO_WEIGHTS);var i=_(e,"labels","cosineDistance"),a=_(t,"predictions","cosineDistance"),s=null;r!=null&&(s=_(r,"weights","cosineDistance")),Ne(i.shape,a.shape,"Error in cosineDistance: ");var u=J(1).sub(i.mul(a).sum(n,!0));return Nr(u,s,o)}}),wF=N({hingeLoss_:function(e,t,n,r){r===void 0&&(r=Dt.SUM_BY_NONZERO_WEIGHTS);var o=_(e,"labels","hingeLoss"),i=_(t,"predictions","hingeLoss"),a=null;n!=null&&(a=_(n,"weights","hingeLoss")),Ne(o.shape,i.shape,"Error in hingeLoss: ");var s=J(1);o=J(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return Nr(u,a,r)}}),bF=N({huberLoss_:function(e,t,n,r,o){r===void 0&&(r=1),o===void 0&&(o=Dt.SUM_BY_NONZERO_WEIGHTS);var i=_(e,"labels","huberLoss"),a=_(t,"predictions","huberLoss"),s=null;n!=null&&(s=_(n,"weights","huberLoss")),Ne(i.shape,a.shape,"Error in huberLoss: ");var u=J(r),l=a.sub(i).abs(),c=kw(l,u),f=l.sub(c),d=J(.5).mul(c.square()).add(u.mul(f));return Nr(d,s,o)}}),CF=N({logLoss_:function(e,t,n,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=Dt.SUM_BY_NONZERO_WEIGHTS);var i=_(e,"labels","logLoss"),a=_(t,"predictions","logLoss"),s=null;n!=null&&(s=_(n,"weights","logLoss")),Ne(i.shape,a.shape,"Error in logLoss: ");var u=J(1),l=J(r),c=i.mul(a.add(l).log()).neg().sub(u.sub(i).mul(u.sub(a).add(l).log()));return Nr(c,s,o)}}),EF=N({meanSquaredError_:function(e,t,n,r){r===void 0&&(r=Dt.SUM_BY_NONZERO_WEIGHTS);var o=_(e,"labels","meanSquaredError"),i=_(t,"predictions","meanSquaredError"),a=null;n!=null&&(a=_(n,"weights","meanSquaredError")),Ne(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return Nr(s,a,r)}}),SF=N({sigmoidCrossEntropy_:function(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=Dt.SUM_BY_NONZERO_WEIGHTS);var i=_(e,"multiClassLabels","sigmoidCrossEntropy"),a=_(t,"logits","sigmoidCrossEntropy"),s=null;if(n!=null&&(s=_(n,"weights","sigmoidCrossEntropy")),Ne(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=J(r),l=J(1),c=J(.5);i=i.mul(l.sub(u)).add(c.mul(u))}var f=function(d,p){var h=_(d,"labels","sigmoidCrossEntropyWithLogits"),m=_(p,"logits","sigmoidCrossEntropyWithLogits");Ne(h.shape,m.shape,"Error in sigmoidCrossEntropyWithLogits: ");var g=m.relu(),v=m.mul(h),y=m.abs().neg().exp().log1p();return g.sub(v).add(y)}(i,a);return Nr(f,s,o)}}),_F=N({softmaxCrossEntropy_:function(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=Dt.SUM_BY_NONZERO_WEIGHTS);var i=_(e,"onehotLabels","softmaxCrossEntropy"),a=_(t,"logits","softmaxCrossEntropy"),s=null;if(n!=null&&(s=_(n,"weights","softmaxCrossEntropy")),Ne(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=J(r),l=J(1),c=J(i.shape[1]);i=i.mul(l.sub(u)).add(u.div(c))}var f=function(d,p,h){if(h===void 0&&(h=-1),h===-1&&(h=p.rank-1),h!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+h);return Sc(function(m,g,v){var y=g.logSumExp([h],!0),x=g.toFloat().sub(y);return v([m,x]),{value:x.mul(m).neg().sum([h]),gradFunc:function(w,b){var C=b[0],E=b[1],S=Xt(w.shape,[h]);return[w.reshape(S).mul(C.toFloat().sub(E.exp())),w.reshape(S).mul(E.exp().sub(C.toFloat()))]}}})(d,p)}(i,a);return Nr(f,s,o)}}),kF=Object.freeze({get Reduction(){return Dt},absoluteDifference:yF,computeWeightedLoss:Nr,cosineDistance:xF,hingeLoss:wF,huberLoss:bF,logLoss:CF,meanSquaredError:EF,sigmoidCrossEntropy:SF,softmaxCrossEntropy:_F});function B0(e,t){return t===void 0&&(t=!1),F.tidy(function(){if(e.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+e.shape.length+"D Tensor.");for(var n=e.shape[0],r=e.shape[1],o=W2(n),i=e.clone(),a=so([[1]],[1,1]),s=a.clone(),u=n>=r?r:n,l=function(f){var d,p=i,h=s,m=o;d=F.tidy(function(){var g=i.slice([f,f],[n-f,1]),v=g.norm(),y=i.slice([f,f],[1,1]),x=so([[-1]]).where(y.greater(0),so([[1]])),w=y.sub(x.mul(v)),b=g.div(w);s=b.shape[0]===1?a.clone():a.concat(b.slice([1,0],[b.shape[0]-1,b.shape[1]]),0);var C=x.matMul(w).div(v).neg(),E=i.slice([f,0],[n-f,r]),S=C.mul(s);if(f===0)i=E.sub(S.matMul(s.transpose().matMul(E)));else{var R=E.sub(S.matMul(s.transpose().matMul(E)));i=i.slice([0,0],[f,r]).concat(R,0)}var k=o.slice([0,f],[n,o.shape[1]-f]);if(f===0)o=k.sub(k.matMul(s).matMul(S.transpose()));else{var D=k.sub(k.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[n,f]).concat(D,1)}return[s,i,o]}),s=d[0],i=d[1],o=d[2],Kt([p,h,m])},c=0;c<u;++c)l(c);return!t&&n>r&&(o=o.slice([0,0],[n,r]),i=i.slice([0,0],[r,r])),[o,i]})}var RF=N({bandPart_:function(e,t,n){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(n%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+n+".");var r=_(e,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(n<=s))throw new Error("bandPart(): numUpper ("+n+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),n<0&&(n=s);var u=Al(0,a,1,"int32").reshape([-1,1]),l=Al(0,s,1,"int32"),c=ft(u,l),f=kc(c.lessEqual(J(+t,"int32")),c.greaterEqual(J(-n,"int32"))),d=Le([a,s],r.dtype);return un(lt(r.reshape([-1,a,s])).map(function(p){return Ho(f,p,d)})).reshape(o)}}),IF=N({gramSchmidt_:function(e){var t;if(Array.isArray(e)){t=!1,I(e!=null&&e.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var n=e[0].shape[0],r=function(u){I(e[u].shape[0]===n,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+e[u].shape[0]+" vs. "+n+")"})},o=1;o<e.length;++o)r(o)}else t=!0,e=nv(e,e.shape[0],0).map(function(u){return U2(u,[0])});I(e.length<=e[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+e.length+") exceeds number of dimensions ("+e[0].shape[0]+")."});var i=[],a=e,s=function(u){i.push(F.tidy(function(){var l=a[u];if(u>0)for(var c=0;c<u;++c){var f=zw(i[c].mulStrict(l)).mul(i[c]);l=l.sub(f)}return l.div(Uw(l,"euclidean"))}))};for(o=0;o<e.length;++o)s(o);return t?un(i,0):i}}),AF=N({qr_:function(e,t){if(t===void 0&&(t=!1),e.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+e.rank);if(e.rank===2)return B0(e,t);var n=e.shape.slice(0,e.shape.length-2).reduce(function(a,s){return a*s}),r=lt(e.reshape([n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),o=[],i=[];return r.forEach(function(a){var s=B0(a,t),u=s[0],l=s[1];o.push(u),i.push(l)}),[un(o,0).reshape(e.shape),un(i,0).reshape(e.shape)]}}),TF=Object.freeze({bandPart:RF,gramSchmidt:IF,qr:AF});function Tc(e,t,n,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=e.shape[0];return n=Math.min(n,a),I(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),I(e.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+e.rank+"'"}),I(e.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+e.shape[1]}),I(t.rank===1,function(){return"scores must be a 1D tensor"}),I(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),I(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:n,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var NF=N({resizeBilinear_:function(e,t,n){n===void 0&&(n=!1);var r=_(e,"images","resizeBilinear");I(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),I(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=F.runKernelFunc(function(l,c){return c([o]),l.resizeBilinear(o,a,s,n)},{x:o},function(l,c){return{x:function(){return F.runKernelFunc(function(f){return f.resizeBilinearBackprop(l,c[0],n)},{})}}},"ResizeBilinear",{alignCorners:n,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),DF=N({resizeNearestNeighbor_:function(e,t,n){n===void 0&&(n=!1);var r=_(e,"images","resizeNearestNeighbor");I(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),I(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),I(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=F.runKernelFunc(function(l,c){return c([o]),l.resizeNearestNeighbor(o,a,s,n)},{batchImages:o},function(l,c){return{batchImages:function(){return F.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(l,c[0],n)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),PF=N({nonMaxSuppression_:function(e,t,n,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=_(e,"boxes","nonMaxSuppression"),a=_(t,"scores","nonMaxSuppression"),s=Tc(i,a,n,r,o);n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:n,iouThreshold:r,scoreThreshold:o};return F.runKernelFunc(function(l){return l.nonMaxSuppression(i,a,n,r,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),FF=function(e,t,n,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),te(this,void 0,void 0,function(){var i,a,s,u,l,c,f;return ne(this,function(d){switch(d.label){case 0:return i=_(e,"boxes","nonMaxSuppressionAsync"),a=_(t,"scores","nonMaxSuppressionAsync"),s=Tc(i,a,n,r,o),n=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=d.sent(),l=u[0],c=u[1],f=av(l,c,n,r,o),i!==e&&i.dispose(),a!==t&&a.dispose(),[2,f]}})})},OF=N({nonMaxSuppressionWithScore_:function(e,t,n,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=_(e,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=Tc(a,s,n,r,o,i),l={maxOutputSize:n=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},c=F.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},l);return{selectedIndices:c[0],selectedScores:c[1]}}}),MF=function(e,t,n,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),te(this,void 0,void 0,function(){var a,s,u,l,c,f,d;return ne(this,function(p){switch(p.label){case 0:return a=_(e,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=Tc(a,s,n,r,o,i),n=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return l=p.sent(),c=l[0],f=l[1],d=sv(c,f,n,r,o,i),a!==e&&a.dispose(),s!==t&&s.dispose(),[2,d]}})})},BF=N({cropAndResize_:function(e,t,n,r,o,i){var a=_(e,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(n,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var l=s.shape[0];return I(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),I(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+l+",4] but had shape "+s.shape+"."}),I(u.rank===1&&u.shape[0]===l,function(){return"Error in cropAndResize: boxInd must be have size ["+l+"] but had shape "+s.shape+"."}),I(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),I(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),I(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),F.runKernelFunc(function(c,f){return c.cropAndResize(a,s,u,r,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),bv=Object.freeze({resizeBilinear:NF,resizeNearestNeighbor:DF,nonMaxSuppression:PF,nonMaxSuppressionAsync:FF,nonMaxSuppressionWithScore:OF,nonMaxSuppressionWithScoreAsync:MF,cropAndResize:BF}),Cv=function(e,t){return!(e>0)||t==="linear"},Ev=function(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return e.mul(t.step());throw new Error("Gradient for activation "+n+" has not been implemented yet.")},Sv=function(e,t){var n=t,r=ct(e.shape,t.shape);return r.length>0&&(n=n.sum(r)),n.reshape(e.shape)},_v=function(e,t,n){if(t==="linear")return e;if(t==="relu")return He(e);if(t==="elu")return Ww(e);if(t==="relu6")return $w(e);if(t==="prelu")return jw(e,n);throw new Error("Unknown fused activation "+t+".")},LF=N({fusedMatMul_:function(e){var t,n=e.a,r=e.b,o=e.transposeA,i=o!==void 0&&o,a=e.transposeB,s=a!==void 0&&a,u=e.bias,l=e.activation,c=l===void 0?"linear":l,f=e.preluActivationWeights;if(Cv(F.state.gradientDepth,c)===!1){var d=Ic(n,r,i,s);return u!=null&&(d=we(d,u)),_v(d,c,f)}var p=_(n,"a","fused matMul"),h=_(r,"b","fused matMul");t=Ke(p,h),p=t[0],h=t[1];var m=i?p.shape[p.rank-2]:p.shape[p.rank-1],g=s?h.shape[h.rank-1]:h.shape[h.rank-2],v=i?p.shape[p.rank-1]:p.shape[p.rank-2],y=s?h.shape[h.rank-2]:h.shape[h.rank-1],x=p.shape.slice(0,-2),w=h.shape.slice(0,-2),b=oe(x),C=oe(w);I(p.rank>=2&&h.rank>=2&&p.rank===h.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+h.rank+"."}),I(gt(x,w),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+w+") of Tensors with shapes "+p.shape+" and "+h.shape+" must match."}),I(m===g,function(){return"Error in fused matMul: inner shapes ("+m+") and ("+g+") of Tensors with shapes "+p.shape+" and "+h.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var E,S,R=p.shape.slice(0,-2).concat([v,y]),k=i?p.as3D(b,m,v):p.as3D(b,v,m),D=s?h.as3D(C,y,g):h.as3D(C,g,y);u!=null&&be(R,(E=Ke(E=_(u,"bias","fused matMul"),p)[0]).shape),f!=null&&(S=_(f,"prelu weights","fused matMul"));var T={a:k,b:D};u!=null&&(T.bias=E),f!=null&&(T.preluActivationWeights=S);var z=[k,D];return F.runKernelFunc(function(L,$){var V=L.fusedBatchMatMul({a:k,b:D,transposeA:i,transposeB:s,bias:E,activation:c,preluActivationWeights:S});return $([k,D,V]),V},T,function(L,$){var V=$[0],U=$[1],P=$[2],O=Ev(L,P,c),B={};return u!=null&&(B={bias:function(){return Sv(E,O)}}),Object.assign(i||s?!i&&s?{a:function(){return O.matMul(U,!1,!1)},b:function(){return O.matMul(V,!0,!1)}}:i&&!s?{a:function(){return U.matMul(O,!1,!0)},b:function(){return V.matMul(O,!1,!1)}}:{a:function(){return U.matMul(O,!0,!0)},b:function(){return O.matMul(V,!0,!0)}}:{a:function(){return O.matMul(U,!1,!0)},b:function(){return V.matMul(O,!0,!1)}},B)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:c},z,[!0]).reshape(R)}}),zF=N({fusedConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,o=e.pad,i=e.dataFormat,a=i===void 0?"NHWC":i,s=e.dilations,u=s===void 0?[1,1]:s,l=e.dimRoundingMode,c=e.bias,f=e.activation,d=f===void 0?"linear":f,p=e.preluActivationWeights;if(d=d||"linear",Cv(F.state.gradientDepth,d)===!1){var h=En(t,n,r,o,a,u,l);return c!=null&&(h=we(h,c)),_v(h,d,p)}var m=_(t,"x","conv2d"),g=_(n,"filter","conv2d"),v=m,y=!1;m.rank===3&&(y=!0,v=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),I(v.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+v.rank+"."}),I(g.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+g.rank+"."}),l!=null&&I(Je(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+l+" but got pad "+o+"."}),I(v.shape[3]===g.shape[2],function(){return"Error in conv2d: depth of input ("+v.shape[3]+") must match input depth for filter "+g.shape[2]+"."}),I(Yt(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),I(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var x,w,b=Jo(v.shape,g.shape,r,u,o,l);c!=null&&(x=Ke(x=_(c,"bias","fused conv2d"),m)[0],be(b.outShape,x.shape)),p!=null&&(w=_(p,"prelu weights","fused conv2d"));var C={x:v,filter:g};c!=null&&(C.bias=x),p!=null&&(C.preluActivationWeights=w);var E=[g,v],S=F.runKernelFunc(function(R,k){var D=R.fusedConv2d({input:v,filter:g,convInfo:b,bias:x,activation:d,preluActivationWeights:w});return k([g,v,D]),D},C,function(R,k){var D=k,T=D[0],z=D[1],L=D[2],$=Ev(R,L,d);I(oa(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return c!=null&&(V={bias:function(){return Sv(x,$)}}),Object.assign({x:function(){return Dw(z.shape,$,T,r,o)},filter:function(){return vv(z,$,T.shape,r,o)}},V)},"FusedConv2D",{convInfo:b,activation:d},E,[!0]);return y?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),WF=N({fusedDepthwiseConv2d_:function(e){var t=e.x,n=e.filter,r=e.strides,o=e.pad,i=e.dataFormat,a=i===void 0?"NHWC":i,s=e.dilations,u=s===void 0?[1,1]:s,l=e.dimRoundingMode,c=e.bias,f=e.activation,d=f===void 0?"linear":f,p=e.preluActivationWeights;if(Cv(F.state.gradientDepth,d)===!1){var h=Rc(t,n,r,o,a,u,l);return c!=null&&(h=we(h,c)),_v(h,d,p)}var m=_(t,"x","depthwiseConv2d"),g=_(n,"filter","depthwiseConv2d"),v=m,y=!1;m.rank===3&&(y=!0,v=m.as4D(1,m.shape[0],m.shape[1],m.shape[2])),I(v.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+v.rank+"."}),I(g.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+g.rank+"."}),I(v.shape[3]===g.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+v.shape[3]+") must match the inChannels dimension in filter "+g.shape[2]+"."}),u==null&&(u=[1,1]),I(Yt(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),l!=null&&I(Je(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+l+" but got pad "+o+"."});var x,w,b=Jo(v.shape,g.shape,r,u,o,l,!0);c!=null&&(x=Ke(x=_(c,"bias","fused conv2d"),m)[0],be(b.outShape,x.shape)),p!=null&&(w=_(p,"prelu weights","fused depthwiseConv2d"));var C={x:v,filter:g};c!=null&&(C.bias=x),p!=null&&(C.preluActivationWeights=w);var E=[g,v],S=F.runKernelFunc(function(R,k){var D=R.fusedDepthwiseConv2D({input:v,filter:g,convInfo:b,bias:x,activation:d,preluActivationWeights:w});return k([g,v,D]),D},C,function(R,k){I(oa(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var D=k[0],T=k[1],z=k[2],L=Ev(R,z,d),$={};return c!=null&&($={bias:function(){return Sv(x,L)}}),Object.assign({x:function(){return Pw(T.shape,L,D,b)},filter:function(){return Fw(T,L,D.shape,b)}},$)},"FusedDepthwiseConv2D",{convInfo:b,activation:d},E,[!0]);return y?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),jF=Object.freeze({matMul:LF,conv2d:zF,depthwiseConv2d:WF}),$F=Object.freeze({image:bv,linalg:TF,losses:kF,spectral:fF,fused:jF,signal:mF,square:CD,squaredDifference:mw,conv1d:NP,conv2d:En,conv3d:DP,depthwiseConv2d:Rc,separableConv2d:mv,conv2dTranspose:PP,conv3dTranspose:FP,op:N,batchNormalization2d:JD,batchNormalization3d:ZD,batchNormalization4d:eP,batchNormalization:tP,batchNorm:Cw,batchNorm2d:nP,batchNorm3d:rP,batchNorm4d:oP,booleanMaskAsync:TP,complex:wt,real:vn,imag:Xn,concat:ut,concat1d:jA,concat2d:$A,concat3d:UA,concat4d:VA,split:nv,matMul:Ic,dot:OP,outerProduct:MP,reverse:Bs,reverse1d:BP,reverse2d:LP,reverse3d:zP,reverse4d:WP,maxPool:pt,avgPool:Ls,pool:jP,maxPool3d:$P,avgPool3d:UP,slice:rr,slice1d:VP,slice2d:HP,slice3d:Bw,slice4d:GP,abs:ED,acos:SD,acosh:_D,asin:kD,asinh:RD,atan:ID,atanh:AD,ceil:TD,clipByValue:dv,cos:ND,cosh:DD,erf:PD,exp:Fp,expm1:FD,floor:OD,log:MD,log1p:BD,logSigmoid:LD,neg:Bl,reciprocal:zD,round:WD,rsqrt:gw,sigmoid:yw,sign:jD,isNaN:$D,isInf:UD,isFinite:VD,sin:HD,sinh:GD,softplus:qD,sqrt:KD,step:XD,tan:YD,tanh:QD,all:qP,any:KP,argMax:XP,argMin:YP,logSumExp:QP,max:Ac,mean:JP,min:ZP,moments:eF,sum:zw,prod:tF,equal:Rw,equalStrict:wP,greater:bP,greaterEqual:Iw,greaterEqualStrict:CP,greaterStrict:EP,less:SP,lessEqual:_P,lessEqualStrict:kP,lessStrict:RP,notEqual:IP,notEqualStrict:AP,add:we,addN:sP,addStrict:uP,atan2:lP,div:In,divNoNan:cP,divStrict:fP,floorDiv:_w,maximum:pv,maximumStrict:dP,minimum:kw,minimumStrict:pP,mod:hP,modStrict:vP,mul:Pt,mulStrict:mP,pow:Ll,powStrict:gP,squaredDifferenceStrict:yP,sub:ft,subStrict:xP,elu:Ww,leakyRelu:nF,prelu:jw,relu:He,relu6:$w,selu:rF,logicalAnd:kc,logicalNot:iP,logicalOr:Ew,logicalXor:aP,where:Ho,whereAsync:Sw,buffer:he,print:ZA,batchToSpaceND:z2,broadcastTo:eT,cast:tT,clone:nT,cumsum:rT,depthToSpace:oT,expandDims:hn,eye:W2,multinomial:iT,oneHot:Tp,pad:Qo,pad1d:aT,pad2d:sT,pad3d:uT,pad4d:lT,rand:cT,randomNormal:fT,randomGamma:dT,randomUniform:j2,reshape:An,spaceToBatchND:$2,squeeze:U2,stack:un,tile:Mi,truncatedNormal:pT,unstack:lt,setdiff1dAsync:hT,fill:nr,linspace:WA,ones:pa,range:Al,scalar:J,tensor:Ct,tensor1d:nt,tensor2d:so,tensor3d:tv,tensor4d:jt,tensor5d:BA,tensor6d:LA,variable:zA,zeros:Le,onesLike:L2,zerosLike:_e,transpose:po,softmax:Tr,logSoftmax:bT,localResponseNormalization:oF,norm:Uw,gather:hv,unsortedSegmentSum:Aw,basicLSTMCell:iF,multiRNNCell:aF,movingAverage:sF,stridedSlice:uF,topk:lF,scatterND:cF,fft:gv,ifft:zl,rfft:yv,irfft:Vw,sparseToDense:dF,gatherND:pF,diag:hF,dropout:vF,hannWindow:xv,hammingWindow:Gw,frame:wv,stft:qw,inTopKAsync:gF});function q(e,t){Array.isArray(e)||(e=[e]),e.forEach(function(n){n!=null&&I(n.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function td(e,t,n,r){if(n==="linear")return e.linear(t);if(n==="relu")return e.relu(t);if(n==="elu")return e.elu(t);if(n==="relu6")return e.relu6(t);if(n==="prelu")return e.prelu(t,r);throw new Error("Activation "+n+" has not been implemented for the CPU backend.")}var UF=function(e){function t(){var n=e.call(this)||this;return n.blockSize=48,n.firstUse=!0,n.data=new Y2(n,F),n}return On(t,e),t.prototype.write=function(n,r,o){this.firstUse&&(this.firstUse=!1,H().get("IS_NODE")&&Rl(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:n,dtype:o}),i},t.prototype.move=function(n,r,o,i){this.data.set(n,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){return[2,this.readSync(n)]})})},t.prototype.readSync=function(n){var r=this.data.get(n),o=r.dtype,i=r.complexTensors;return o==="complex64"?Pp(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(n).values},t.prototype.bufferSync=function(n){var r=this.readSync(n.dataId),o=r;if(n.dtype==="string")try{o=r.map(function(i){return Sl(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return he(n.shape,n.dtype,o)},t.prototype.makeOutput=function(n,r,o){var i=this.write(n,r,o);return F.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(n){if(this.data.has(n)){var r=this.data.get(n).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(n)}},t.prototype.time=function(n){return te(this,void 0,void 0,function(){var r;return ne(this,function(o){return r=Gn(),n(),[2,{kernelMs:Gn()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(n,r){var o=this.makeOutput(null,n.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:F.keep(n.clone()),imag:F.keep(r.clone())},o},t.prototype.real=function(n){return this.data.get(n.dataId).complexTensors.real.clone()},t.prototype.imag=function(n){return this.data.get(n.dataId).complexTensors.imag.clone()},t.prototype.slice=function(n,r,o){if(q(n,"slice"),K2(n.shape,r,o)){var i=X2(r,n.strides),a=oe(o);return Ct(this.readSync(n.dataId).subarray(i,i+a),o,n.dtype)}for(var s=he(o,n.dtype),u=this.bufferSync(n),l=0;l<s.size;++l){var c=s.indexToLoc(l).map(function(f,d){return f+r[d]});s.values[l]=u.get.apply(u,c)}return s.toTensor()},t.prototype.stridedSlice=function(n,r,o,i){q(n,"stridedSlice");var a=ov(r,o,i);if(a.some(function(p){return p===0}))return Ct([],a);for(var s=he(a,n.dtype),u=this.bufferSync(n),l=0;l<s.size;l++){for(var c=s.indexToLoc(l),f=new Array(c.length),d=0;d<f.length;d++)f[d]=c[d]*i[d]+r[d];s.set.apply(s,[u.get.apply(u,f)].concat(c))}return s.toTensor()},t.prototype.diag=function(n){for(var r=this.readSync(n.dataId),o=he([n.size,n.size],n.dtype),i=o.values,a=0;a<r.length;a++)i[a*n.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(n,r){for(var o=n.shape[r],i=new Array(n.rank-1),a=0,s=0;s<n.rank;s++)s!==r&&(i[a++]=n.shape[s]);var u=new Array(n.rank).fill(0),l=n.shape.slice();l[r]=1;var c=new Array(o);for(s=0;s<c.length;s++)u[r]=s,c[s]=this.slice(n,u,l).reshape(i);return c},t.prototype.reverse=function(n,r){q(n,"reverse");for(var o=he(n.shape,n.dtype),i=this.bufferSync(n),a=function(u){var l=o.indexToLoc(u),c=l.slice();r.forEach(function(f){return c[f]=n.shape[f]-1-c[f]}),o.set.apply(o,[i.get.apply(i,c)].concat(l))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(n,r){var o=this;if(n[0].dtype==="complex64"){var i=n.map(function(p){return vn(p)}),a=n.map(function(p){return Xn(p)});return wt(this.concat(i,r),this.concat(a,r))}var s=n.map(function(p){var h=oe(p.shape.slice(r));return p.as2D(-1,h)}),u=ra(s.map(function(p){return p.shape}),1),l=he(u,n[0].dtype).values;if(s[0].shape[0]===1){var c=0;s.forEach(function(p){l.set(o.readSync(p.dataId),c),c+=p.size})}else{var f=0;s.forEach(function(p){for(var h=o.readSync(p.dataId),m=0,g=0;g<p.shape[0];++g)for(var v=g*u[1]+f,y=0;y<p.shape[1];++y)l[v+y]=h[m++];f+=p.shape[1]})}var d=ra(n.map(function(p){return p.shape}),r);return Ct(l,d,n[0].dtype)},t.prototype.neg=function(n){return q(n,"neg"),this.multiply(J(-1),n)},t.prototype.add=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(n,r,bt(n.dtype,r.dtype),function(o,i){return o+i})},t.prototype.addN=function(n){var r=this;q(n,"addN");for(var o=n.map(function(c){return r.readSync(c.dataId)}),i=he(n[0].shape,n[0].dtype),a=i.values,s=0;s<n.length;s++)for(var u=o[s],l=0;l<a.length;l++)a[l]+=u[l];return i.toTensor()},t.prototype.softmax=function(n,r){var o=dt([r],n.shape),i=this.max(n,o),a=Xt(i.shape,o),s=this.subtract(n,i.reshape(a)),u=this.exp(s),l=this.sum(u,o).reshape(a);return this.realDivide(u,l)},t.prototype.subtract=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(n,r,bt(n.dtype,r.dtype),function(o,i){return o-i})},t.prototype.pow=function(n,r){return q([n,r],"pow"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(n,r,o,i){q([n,r],"matMul");for(var a=o?n.shape[1]:n.shape[2],s=o?n.shape[2]:n.shape[1],u=i?r.shape[1]:r.shape[2],l=n.shape[0],c=this.readSync(n.dataId),f=this.readSync(r.dataId),d=o?[n.strides[0],1,n.strides[1]]:[n.strides[0],n.strides[1],1],p=d[0],h=d[1],m=d[2],g=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],v=g[0],y=g[1],x=g[2],w=s*u,b=he([l,s,u],n.dtype),C=b.values,E=this.blockSize,S=0;S<l;S++)for(var R=0;R<s;R+=E)for(var k=0;k<u;k+=E)for(var D=0;D<a;D+=E)for(var T=Math.min(R+E,s),z=Math.min(k+E,u),L=Math.min(D+E,a),$=R;$<T;$++)for(var V=k;V<z;V++){for(var U=0,P=D;P<L;P++)U+=c[S*p+$*h+P*m]*f[P*v+V*y+S*x];C[S*w+($*u+V)]+=U}return b.toTensor()},t.prototype.fusedBatchMatMul=function(n){var r=n.a,o=n.b,i=n.transposeA,a=n.transposeB,s=n.bias,u=n.activation,l=n.preluActivationWeights,c=this.batchMatMul(r,o,i,a);return s&&(c=this.add(c,s)),u&&(c=td(this,c,u,l)),c},t.prototype.multiply=function(n,r){return n.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(n.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(n,r,bt(n.dtype,r.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(n,r){return q([n,r],"realDivide"),this.broadcastedBinaryOp(n,r,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(n,r){return q([n,r],"floorDiv"),this.broadcastedBinaryOp(n,r,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(n,r){q(n,"sum"),Zt("sum",r,n.rank);for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,bt(n.dtype,"int32")),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=0,h=0;h<u;++h)p+=c[d+h];l[f]=p}return s},t.prototype.prod=function(n,r){q(n,"sum");for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,bt(n.dtype,"int32")),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=1,h=0;h<u;++h)p*=c[d+h];l[f]=p}return s},t.prototype.unsortedSegmentSum=function(n,r,o){q(n,"unsortedSegmentSum");for(var i=[],a=n.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=J(s,"int32"),l=Rw(u,r).asType("float32").mul(n).sum(0);i.push(l)}return un(i)},t.prototype.argMin=function(n,r){q(n,"argMin");var o=[r];Zt("argMin",o,n.rank);for(var i=It(n.shape,o),a=i[0],s=i[1],u=Le(a,"int32"),l=oe(s),c=this.readSync(u.dataId),f=this.readSync(n.dataId),d=0;d<c.length;++d){for(var p=d*l,h=f[p],m=0,g=0;g<l;++g){var v=f[p+g];v<h&&(h=v,m=g)}c[d]=m}return u},t.prototype.argMax=function(n,r){q(n,"argMax");var o=[r];Zt("argMax",o,n.rank);for(var i=It(n.shape,o),a=i[0],s=i[1],u=Le(a,"int32"),l=oe(s),c=this.readSync(u.dataId),f=this.readSync(n.dataId),d=0;d<c.length;++d){for(var p=d*l,h=f[p],m=0,g=0;g<l;++g){var v=f[p+g];v>h&&(h=v,m=g)}c[d]=m}return u},t.prototype.cumsum=function(n,r,o,i){if(q(n,"cumsum"),r!==n.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(n.rank-1)+" but got axis="+r);for(var a=bt(n.dtype,"int32"),s=Le(n.shape,a),u=this.readSync(s.dataId),l=this.readSync(n.dataId),c=n.shape[n.rank-1],f=i?function(g,v){return g+c-v-1}:function(g,v){return g+v},d=0;d<l.length;d+=c)for(var p=0;p<c;p++){var h=f(d,p);if(p===0)u[h]=o?0:l[h];else{var m=f(d,p-1);u[h]=o?l[m]+u[m]:l[h]+u[m]}}return s},t.prototype.equal=function(n,r){return q([n,r],"equal"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(n,r){return q([n,r],"notEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(n,r){return q([n,r],"less"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(n,r){return q([n,r],"lessEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(n,r){return q([n,r],"greater"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(n,r){return q([n,r],"greaterEqual"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(n){q(n,"logicalNot");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,n.shape,"bool")},t.prototype.logicalAnd=function(n,r){return q([n,r],"logicalAnd"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(n,r){return q([n,r],"logicalOr"),this.broadcastedBinaryOp(n,r,"bool",function(o,i){return o||i})},t.prototype.select=function(n,r,o){q([n,r,o],"select");for(var i=this.readSync(n.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=Le(r.shape,bt(r.dtype,o.dtype)),l=this.readSync(u.dataId),c=0,f=n.rank===0||n.rank>1||r.rank===1?1:oe(r.shape.slice(1)),d=0;d<i.length;d++)for(var p=0;p<f;p++)i[d]===1?l[c++]=a[d]:l[c++]=s[d];return u},t.prototype.where=function(n){q([n],"where");var r=this.readSync(n.dataId);return uv(n.shape,r)},t.prototype.topk=function(n,r,o){return q(n,"topk"),ow(this.readSync(n.dataId),n.shape,n.dtype,r)},t.prototype.min=function(n,r){q(n,"min"),Zt("min",r,n.rank);for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,n.dtype),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=c[d],h=0;h<u;++h){var m=c[d+h];m<p&&(p=m)}l[f]=p}return s},t.prototype.minimum=function(n,r){return q([n,r],"minimum"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(n,r){return q([n,r],"mod"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(n,r){q(n,"max"),Zt("max",r,n.rank);for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,n.dtype),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=c[d],h=0;h<u;++h){var m=c[d+h];m>p&&(p=m)}l[f]=p}return s},t.prototype.maximum=function(n,r){return q([n,r],"maximum"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(n,r){q(n,"all"),Zt("all",r,n.rank);for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,n.dtype),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=c[d],h=0;h<u;++h){var m=c[d+h];p=p&&m}l[f]=p}return s},t.prototype.any=function(n,r){q(n,"any"),Zt("any",r,n.rank);for(var o=It(n.shape,r),i=o[0],a=o[1],s=Le(i,n.dtype),u=oe(a),l=this.readSync(s.dataId),c=this.readSync(n.dataId),f=0;f<l.length;++f){for(var d=f*u,p=c[d],h=0;h<u;++h){var m=c[d+h];p=p||m}l[f]=p}return s},t.prototype.squaredDifference=function(n,r){return q([n,r],"squaredDifference"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(n){q(n,"ceil");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,n.shape,"float32")},t.prototype.floor=function(n){q(n,"floor");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,n.shape,"float32")},t.prototype.sign=function(n){q(n,"x");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,n.shape,"float32")},t.prototype.isNaN=function(n){q(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isInf=function(n){q(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.isFinite=function(n){q(n,"x");for(var r=this.readSync(n.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,n.shape,"bool")},t.prototype.round=function(n){q(n,"round");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,n.shape,"float32")},t.prototype.exp=function(n){q(n,"exp");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,n.shape,"float32")},t.prototype.expm1=function(n){q(n,"expm1");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,n.shape,"float32")},t.prototype.log=function(n){q(n,"log");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,n.shape,"float32")},t.prototype.log1p=function(n){q(n,"log1p");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,n.shape,"float32")},t.prototype.sqrt=function(n){q(n,"sqrt");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,n.shape,"float32")},t.prototype.rsqrt=function(n){q(n,"rsqrt");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,n.shape,"float32")},t.prototype.reciprocal=function(n){q(n,"reciprocal");for(var r=this.readSync(n.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,n.shape,"float32")},t.prototype.linear=function(n){return n},t.prototype.relu=function(n){q(n,"relu");for(var r=Le(n.shape,n.dtype),o=this.readSync(r.dataId),i=this.readSync(n.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(n){q(n,"relu");for(var r=Le(n.shape,n.dtype),o=this.readSync(r.dataId),i=this.readSync(n.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(n,r){return q([n,r],"prelu"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(n){q(n,"elu");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,n.shape,"float32")},t.prototype.eluDer=function(n,r){q([n,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(n.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(n){q(n,"selu");for(var r=cv,o=fv,i=new Float32Array(n.size),a=this.readSync(n.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,n.shape,"float32")},t.prototype.clip=function(n,r,o){q(n,"clip");for(var i=new Float32Array(n.size),a=this.readSync(n.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,n.shape,"float32")},t.prototype.abs=function(n){for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.complexAbs=function(n){for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<n.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,n.shape,"float32")},t.prototype.int=function(n){q(n,"int");for(var r=new Int32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,n.shape,"int32")},t.prototype.sigmoid=function(n){q(n,"sigmoid");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,n.shape,"float32")},t.prototype.softplus=function(n){q(n,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(n.size),i=this.readSync(n.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,l=Math.exp(i[a]),c=void 0;c=u?l:s?i[a]:Math.log(1+l),o[a]=c}return this.makeOutput(o,n.shape,"float32")},t.prototype.sin=function(n){q(n,"sin");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.cos=function(n){q(n,"cos");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.tan=function(n){q(n,"tan");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.asin=function(n){q(n,"asin");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.acos=function(n){q(n,"acos");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atan=function(n){q(n,"atan");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atan2=function(n,r){return q([n,r],"atan2"),this.broadcastedBinaryOp(n,r,n.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(n){q(n,"sinh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.cosh=function(n){q(n,"cosh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.tanh=function(n){q(n,"tanh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=V4(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.asinh=function(n){q(n,"asinh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.acosh=function(n){q(n,"acosh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.atanh=function(n){q(n,"atanh");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,n.shape,"float32")},t.prototype.erf=function(n){q(n,"erf");for(var r=new Float32Array(n.size),o=this.readSync(n.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,n.shape,"float32")},t.prototype.step=function(n,r){r===void 0&&(r=0),q(n,"step");for(var o=new Float32Array(n.size),i=this.readSync(n.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,n.shape,"float32")},t.prototype.fusedConv2d=function(n){var r=n.input,o=n.filter,i=n.convInfo,a=n.bias,s=n.activation,u=n.preluActivationWeights,l=this.conv2d(r,o,i);return a&&(l=this.add(l,a)),s&&(l=td(this,l,s,u)),l},t.prototype.conv2d=function(n,r,o){q([n,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,l=o.padInfo.left,c=o.padInfo.top,f=o.dataFormat==="channelsLast",d=he(o.outShape,n.dtype),p=n.strides[0],h=f?n.strides[1]:n.strides[2],m=f?n.strides[2]:1,g=f?1:n.strides[1],v=d.strides[0],y=f?d.strides[1]:d.strides[2],x=f?d.strides[2]:1,w=f?1:d.strides[1],b=this.readSync(n.dataId),C=this.readSync(r.dataId),E=d.values,S=0;S<o.batchSize;++S)for(var R=S*p,k=S*v,D=0;D<o.outHeight;++D)for(var T=k+D*y,z=D*o.strideHeight-c,L=0;L<i;L++){var $=z+L*s;if(!($<0||$>=o.inHeight))for(var V=L*r.strides[0],U=R+$*h,P=0;P<o.outWidth;++P)for(var O=T+P*x,B=P*o.strideWidth-l,X=0;X<a;X++){var Q=B+X*u;if(!(Q<0||Q>=o.inWidth))for(var re=U+Q*m,ue=V+X*r.strides[1],ce=0;ce<o.inChannels;++ce){for(var le=b[re+ce*g],fe=0;fe<o.outChannels;++fe)E[O+fe*w]+=le*C[ue+fe];ue+=o.outChannels}}}return d.toTensor()},t.prototype.conv3d=function(n,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,l=o.dilationHeight,c=o.dilationWidth,f=o.padInfo.front,d=o.padInfo.left,p=o.padInfo.top,h=he(o.outShape,n.dtype),m=this.readSync(n.dataId),g=this.readSync(r.dataId),v=h.values,y=0;y<o.batchSize;++y)for(var x=y*n.strides[0],w=y*h.strides[0],b=0;b<o.outDepth;++b)for(var C=w+b*h.strides[1],E=b*o.strideDepth-f,S=0;S<i;S++){var R=E+S*u;if(!(R<0||R>=o.inDepth))for(var k=S*r.strides[0],D=x+R*n.strides[1],T=0;T<o.outHeight;++T)for(var z=C+T*h.strides[2],L=T*o.strideHeight-p,$=0;$<a;$++){var V=L+$*l;if(!(V<0||V>=o.inHeight))for(var U=k+$*r.strides[1],P=D+V*n.strides[2],O=0;O<o.outWidth;++O)for(var B=z+O*o.outChannels,X=O*o.strideWidth-d,Q=0;Q<s;Q++){var re=X+Q*c;if(!(re<0||re>=o.inWidth))for(var ue=U+Q*r.strides[2],ce=P+re*o.inChannels,le=ue,fe=0;fe<o.inChannels;++fe){for(var ge=m[ce+fe],ye=0;ye<o.outChannels;++ye)v[B+ye]+=ge*g[le+ye];le+=o.outChannels}}}}return h.toTensor()},t.prototype.conv2dDerInput=function(n,r,o){q([n,r],"conv2dDerInput");for(var i=he(o.inShape,"float32"),a=i.values,s=this.readSync(n.dataId),u=this.readSync(r.dataId),l=r.strides,c=l[0],f=l[1],d=l[2],p=o.batchSize,h=o.filterHeight,m=o.filterWidth,g=o.inChannels,v=o.inHeight,y=o.inWidth,x=o.outChannels,w=o.outHeight,b=o.outWidth,C=o.strideHeight,E=o.strideWidth,S=o.dataFormat,R=h-1-o.padInfo.top,k=m-1-o.padInfo.left,D=S==="channelsLast",T=i.strides[0],z=D?i.strides[1]:i.strides[2],L=D?i.strides[2]:1,$=D?1:i.strides[1],V=n.strides[0],U=D?n.strides[1]:n.strides[2],P=D?n.strides[2]:1,O=D?1:n.strides[1],B=0;B<p;++B)for(var X=0;X<g;++X)for(var Q=0;Q<v;++Q)for(var re=Q-R,ue=Math.max(0,Math.ceil(re/C)),ce=Math.min(w,(h+re)/C),le=0;le<y;++le){for(var fe=le-k,ge=Math.max(0,Math.ceil(fe/E)),ye=Math.min(b,(m+fe)/E),Ae=0,Ee=ue;Ee<ce;++Ee)for(var Pe=Ee*C-re,Re=ge;Re<ye;++Re)for(var Xe=V*B+U*Ee+P*Re,je=c*(h-1-Pe)+f*(m-1-(Re*E-fe))+d*X,$e=0;$e<x;++$e)Ae+=s[Xe+O*$e]*u[je+$e];a[T*B+z*Q+L*le+$*X]=Ae}return i.toTensor()},t.prototype.conv3dDerInput=function(n,r,o){for(var i=he(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],l=s[1],c=s[2],f=s[3],d=this.readSync(n.dataId),p=n.strides,h=p[0],m=p[1],g=p[2],v=p[3],y=this.readSync(r.dataId),x=r.strides,w=x[0],b=x[1],C=x[2],E=x[3],S=o.batchSize,R=o.filterDepth,k=o.filterHeight,D=o.filterWidth,T=o.inChannels,z=o.inDepth,L=o.inHeight,$=o.inWidth,V=o.outChannels,U=o.outDepth,P=o.outHeight,O=o.outWidth,B=o.strideDepth,X=o.strideHeight,Q=o.strideWidth,re=R-1-o.padInfo.front,ue=k-1-o.padInfo.top,ce=D-1-o.padInfo.left,le=0;le<S;++le)for(var fe=0;fe<T;++fe)for(var ge=0;ge<z;++ge)for(var ye=ge-re,Ae=Math.max(0,Math.ceil(ye/B)),Ee=Math.min(U,(R+ye)/B),Pe=0;Pe<L;++Pe)for(var Re=Pe-ue,Xe=Math.max(0,Math.ceil(Re/X)),je=Math.min(P,(k+Re)/X),$e=0;$e<$;++$e){for(var Ln=$e-ce,zn=Math.max(0,Math.ceil(Ln/Q)),Qt=Math.min(O,(D+Ln)/Q),ti=0,ur=Ae;ur<Ee;++ur)for(var Or=ur*B-ye,lr=Xe;lr<je;++lr)for(var ni=lr*X-Re,cr=zn;cr<Qt;++cr)for(var zc=h*le+m*ur+g*lr+v*cr,ri=w*(R-1-Or)+b*(k-1-ni)+C*(D-1-(cr*Q-Ln))+E*fe,Wn=0;Wn<V;++Wn)ti+=d[zc+Wn]*y[ri+Wn];a[u*le+l*ge+c*Pe+f*$e+fe]=ti}return i.toTensor()},t.prototype.conv2dDerFilter=function(n,r,o){q([n,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=o.dataFormat==="channelsLast",c=he(o.filterShape,"float32"),f=o.padInfo.left,d=o.padInfo.top,p=this.bufferSync(n),h=this.bufferSync(r),m=0;m<s;++m)for(var g=Math.max(0,Math.ceil((d-m)/i)),v=Math.min(o.outHeight,(o.inHeight+d-m)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((f-y)/a)),w=Math.min(o.outWidth,(o.inWidth+f-y)/a),b=0;b<o.inChannels;++b)for(var C=0;C<o.outChannels;++C){for(var E=0,S=0;S<o.batchSize;++S)for(var R=g;R<v;++R)for(var k=m+R*i-d,D=x;D<w;++D){var T=y+D*a-f;E+=l?p.get(S,k,T,b)*h.get(S,R,D,C):p.get(S,b,k,T)*h.get(S,C,R,D)}c.set(E,m,y,b,C)}return c.toTensor()},t.prototype.conv3dDerFilter=function(n,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,l=o.filterHeight,c=o.filterWidth,f=he(o.filterShape,"float32"),d=f.values,p=f.strides,h=p[0],m=p[1],g=p[2],v=p[3],y=this.readSync(r.dataId),x=r.strides,w=x[0],b=x[1],C=x[2],E=x[3],S=this.readSync(n.dataId),R=n.strides,k=R[0],D=R[1],T=R[2],z=R[3],L=o.padInfo.front,$=o.padInfo.left,V=o.padInfo.top,U=0;U<u;++U)for(var P=Math.max(0,Math.ceil((L-U)/i)),O=Math.min(o.outDepth,(o.inDepth+L-U)/i),B=U*h,X=0;X<l;++X)for(var Q=Math.max(0,Math.ceil((V-X)/a)),re=Math.min(o.outHeight,(o.inHeight+V-X)/a),ue=X*m+B,ce=0;ce<c;++ce)for(var le=Math.max(0,Math.ceil(($-ce)/s)),fe=Math.min(o.outWidth,(o.inWidth+$-ce)/s),ge=ce*g+ue,ye=0;ye<o.inChannels;++ye)for(var Ae=ye*v+ge,Ee=0;Ee<o.outChannels;++Ee){for(var Pe=0,Re=0;Re<o.batchSize;++Re)for(var Xe=Re*k,je=Re*w,$e=P;$e<O;++$e)for(var Ln=(U+$e*i-L)*D+Xe,zn=$e*b+je,Qt=Q;Qt<re;++Qt)for(var ti=(X+Qt*a-V)*T+Ln,ur=Qt*C+zn,Or=le;Or<fe;++Or){var lr=Or*E+ur;Pe+=S[(ce+Or*s-$)*z+ti+ye]*y[lr+Ee]}d[Ae+Ee]=Pe}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(n){var r=n.input,o=n.filter,i=n.convInfo,a=n.bias,s=n.activation,u=n.preluActivationWeights,l=this.depthwiseConv2D(r,o,i);return a&&(l=this.add(l,a)),s&&(l=td(this,l,s,u)),l},t.prototype.depthwiseConv2D=function(n,r,o){q([n,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,l=o.padInfo.left,c=o.padInfo.top,f=o.outChannels/o.inChannels,d=he(o.outShape,n.dtype),p=this.readSync(n.dataId),h=this.readSync(r.dataId),m=d.values,g=0;g<o.batchSize;++g)for(var v=g*n.strides[0],y=g*d.strides[0],x=0;x<o.outHeight;++x)for(var w=y+x*d.strides[1],b=x*o.strideHeight-l,C=0;C<i;++C){var E=b+C*s;if(!(E<0||E>=o.inHeight))for(var S=C*r.strides[0],R=v+E*n.strides[1],k=0;k<o.outWidth;++k)for(var D=w+k*d.strides[2],T=k*o.strideWidth-c,z=0;z<a;++z){var L=T+z*u;if(!(L<0||L>=o.inWidth))for(var $=S+z*r.strides[1],V=R+L*o.inChannels,U=D,P=$,O=0;O<o.inChannels;++O){for(var B=p[V+O],X=0;X<f;++X)m[U+X]+=B*h[P+X];U+=f,P+=f}}}return d.toTensor()},t.prototype.depthwiseConv2DDerInput=function(n,r,o){q([n,r],"depthwiseConv2DDerInput");for(var i=he(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],l=s[1],c=s[2],f=this.readSync(n.dataId),d=n.strides,p=d[0],h=d[1],m=d[2],g=this.readSync(r.dataId),v=r.strides,y=v[0],x=v[1],w=v[2],b=o.batchSize,C=o.filterHeight,E=o.filterWidth,S=o.inChannels,R=o.inHeight,k=o.inWidth,D=o.outChannels,T=o.outHeight,z=o.outWidth,L=o.strideHeight,$=o.strideWidth,V=C-1-o.padInfo.top,U=E-1-o.padInfo.left,P=D/S,O=0;O<b;++O)for(var B=0;B<S;++B)for(var X=0;X<R;++X)for(var Q=X-V,re=Math.max(0,Math.ceil(Q/L)),ue=Math.min(T,(C+Q)/L),ce=0;ce<k;++ce){for(var le=ce-U,fe=Math.max(0,Math.ceil(le/$)),ge=Math.min(z,(E+le)/$),ye=0,Ae=re;Ae<ue;++Ae)for(var Ee=Ae*L-Q,Pe=fe;Pe<ge;++Pe)for(var Re=p*O+h*Ae+m*Pe,Xe=y*(C-1-Ee)+x*(E-1-(Pe*$-le))+w*B,je=0;je<P;++je)ye+=f[Re+(B*P+je)]*g[Xe+je];a[u*O+l*X+c*ce+B]=ye}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(n,r,o){q([n,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=he(o.filterShape,"float32"),c=o.padInfo.left,f=o.padInfo.top,d=o.outChannels/o.inChannels,p=this.bufferSync(n),h=this.bufferSync(r),m=0;m<s;++m)for(var g=Math.max(0,Math.ceil((f-m)/i)),v=Math.min(o.outHeight,(o.inHeight+f-m)/i),y=0;y<u;++y)for(var x=Math.max(0,Math.ceil((c-y)/a)),w=Math.min(o.outWidth,(o.inWidth+c-y)/a),b=0;b<o.outChannels;++b){for(var C=Math.trunc(b/d),E=b%d,S=0,R=0;R<o.batchSize;++R)for(var k=g;k<v;++k)for(var D=m+k*i-f,T=x;T<w;++T){var z=y+T*a-c;S+=p.get(R,D,z,C)*h.get(R,k,T,b)}l.set(S,m,y,C,E)}return l.toTensor()},t.prototype.tile=function(n,r){return q(n,"tile"),rw(this.bufferSync(n),r)},t.prototype.pad=function(n,r,o){q(n,"pad");var i=r.map(function(d,p){return d[0]+n.shape[p]+d[1]}),a=r.map(function(d){return d[0]}),s=this.bufferSync(n),u=he(i,n.dtype);o!==0&&u.values.fill(o);for(var l=0;l<n.size;l++){var c=s.indexToLoc(l),f=c.map(function(d,p){return d+a[p]});u.set.apply(u,[s.get.apply(s,c)].concat(f))}return u.toTensor()},t.prototype.transpose=function(n,r){q(n,"transpose");for(var o=new Array(n.rank),i=0;i<o.length;i++)o[i]=n.shape[r[i]];var a=this.readSync(n.dataId),s=he(o,n.dtype),u=this.bufferSync(n);for(i=0;i<n.size;++i){for(var l=u.indexToLoc(i),c=new Array(l.length),f=0;f<c.length;f++)c[f]=l[r[f]];var d=s.locToIndex(c);s.values[d]=a[i]}return s.toTensor()},t.prototype.gather=function(n,r,o){q([n,r],"gather");var i=n.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=he(i,n.dtype),u=this.bufferSync(n),l=0;l<s.size;++l){var c=s.indexToLoc(l),f=c.slice();f[o]=a[c[o]];var d=u.locToIndex(f);s.values[l]=u.values[d]}return s.toTensor()},t.prototype.batchToSpaceND=function(n,r,o){q([n],"batchToSpaceND");var i=r.reduce(function(f,d){return f*d}),a=Tl(n.shape,r,i),s=Nl(a.length,r.length),u=Dl(n.shape,r,i),l=V2(o,r.length),c=H2(u,o,r.length);return n.reshape(a).transpose(s).reshape(u).slice(l,c)},t.prototype.spaceToBatchND=function(n,r,o){q([n],"spaceToBatchND");var i=r.reduce(function(d,p){return d*p}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<n.shape.length;++s)a.push([0,0]);var u=n.pad(a),l=Tl(u.shape,r,i,!1),c=Nl(l.length,r.length,!1),f=Dl(u.shape,r,i,!1);return u.reshape(l).transpose(c).reshape(f)},t.prototype.pool=function(n,r,o){q(n,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,l=r.effectiveFilterHeight,c=r.effectiveFilterWidth,f=r.padInfo.top,d=r.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,h=this.readSync(n.dataId),m=he(r.outShape,n.dtype),g=m.values,v=r.outShape[1]*r.outShape[2]*r.outShape[3],y=r.outShape[2]*r.outShape[3],x=r.outShape[3],w=0;w<r.batchSize;++w)for(var b=w*v,C=w*n.strides[0],E=0;E<r.inChannels;++E)for(var S=0;S<r.outHeight;++S)for(var R=S*i-f,k=Math.max(0,R),D=Math.min(r.inHeight,l+R),T=b+S*y,z=0;z<r.outWidth;++z){for(var L=z*a-d,$=Math.max(0,L),V=Math.min(r.inWidth,c+L),U=p,P=0,O=0,B=k;B<D;B+=s){for(var X=C+B*n.strides[1],Q=$;Q<V;Q+=u){var re=h[X+Q*n.strides[2]+E];o==="max"&&re>U?U=re:o==="avg"&&(P+=re,O++)}if(isNaN(U))break}g[T+z*x+E]=o==="avg"?P/O:U}return m.toTensor()},t.prototype.maxPool=function(n,r){return this.pool(n,r,"max")},t.prototype.maxPoolPositions=function(n,r){for(var o=he(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,l=r.effectiveFilterHeight,c=r.effectiveFilterWidth,f=r.padInfo.top,d=r.padInfo.left,p=this.bufferSync(n),h=0;h<r.batchSize;++h)for(var m=0;m<r.inChannels;++m)for(var g=0;g<r.outHeight;++g){for(var v=g*i-f,y=v;y<0;)y+=s;for(var x=Math.min(r.inHeight,l+v),w=0;w<r.outWidth;++w){for(var b=w*a-d,C=b;C<0;)C+=u;for(var E=Math.min(r.inWidth,c+b),S=Number.NEGATIVE_INFINITY,R=-1,k=y;k<x;k+=s)for(var D=k-v,T=C;T<E;T+=u){var z=T-b,L=p.get(h,k,T,m);L>S&&(S=L,R=D*c+z)}o.set(R,h,g,w,m)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(n,r,o,i){q([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,l=i.dilationHeight,c=i.dilationWidth,f=i.effectiveFilterHeight,d=i.effectiveFilterWidth,p=d-1-i.padInfo.left,h=f-1-i.padInfo.top,m=he(r.shape,"float32"),g=this.bufferSync(a),v=this.bufferSync(n),y=0;y<i.batchSize;++y)for(var x=0;x<i.inChannels;++x)for(var w=0;w<i.inHeight;++w)for(var b=0;b<i.inWidth;++b){for(var C=w-h,E=b-p,S=0,R=0;R<f;R+=l){var k=(C+R)/s;if(!(k<0||k>=i.outHeight||Math.floor(k)!==k))for(var D=0;D<d;D+=c){var T=(E+D)/u;if(!(T<0||T>=i.outWidth||Math.floor(T)!==T)){var z=f*d-1-g.get(y,k,T,x)===R*d+D?1:0;z!==0&&(S+=v.get(y,k,T,x)*z)}}}m.set(S,y,w,b,x)}return m.toTensor()},t.prototype.avgPoolBackprop=function(n,r,o){q([n,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,l=o.dilationHeight,c=o.dilationWidth,f=o.effectiveFilterHeight,d=o.effectiveFilterWidth,p=d-1-o.padInfo.left,h=f-1-o.padInfo.top,m=he(r.shape,"float32"),g=1/(s*u),v=this.bufferSync(n),y=0;y<o.batchSize;++y)for(var x=0;x<o.inChannels;++x)for(var w=0;w<o.inHeight;++w)for(var b=0;b<o.inWidth;++b){for(var C=w-h,E=b-p,S=0,R=0;R<f;R+=l){var k=(C+R)/i;if(!(k<0||k>=o.outHeight||Math.floor(k)!==k))for(var D=0;D<d;D+=c){var T=(E+D)/a;T<0||T>=o.outWidth||Math.floor(T)!==T||(S+=v.get(y,k,T,x))}}m.set(S*g,y,w,b,x)}return m.toTensor()},t.prototype.pool3d=function(n,r,o){q(n,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,l=r.dilationHeight,c=r.dilationWidth,f=r.effectiveFilterDepth,d=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=r.padInfo.front,m=r.padInfo.top,g=r.padInfo.left,v=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(n.dataId),x=he(r.outShape,n.dtype),w=x.values,b=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],C=r.outShape[2]*r.outShape[3]*r.outShape[4],E=r.outShape[3]*r.outShape[4],S=r.outShape[4],R=0;R<r.batchSize;++R)for(var k=R*b,D=R*n.strides[0],T=0;T<r.inChannels;++T)for(var z=0;z<r.outDepth;++z){for(var L=z*i-h,$=L;$<0;)$+=u;for(var V=Math.min(r.inDepth,f+L),U=k+z*C,P=0;P<r.outHeight;++P){for(var O=P*a-m,B=O;B<0;)B+=l;for(var X=Math.min(r.inHeight,d+O),Q=U+P*E,re=0;re<r.outWidth;++re){for(var ue=re*s-g,ce=ue;ce<0;)ce+=c;for(var le=Math.min(r.inWidth,p+ue),fe=Q+re*S,ge=v,ye=0,Ae=0,Ee=$;Ee<V;Ee+=u){for(var Pe=D+Ee*n.strides[1],Re=B;Re<X;Re+=l){for(var Xe=Pe+Re*n.strides[2],je=ce;je<le;je+=c){var $e=y[Xe+je*n.strides[3]+T];if(o==="max"&&$e>ge?ge=$e:o==="avg"&&(ye+=$e,Ae++),isNaN(ge))break}if(isNaN(ge))break}if(isNaN(ge))break}w[fe+T]=o==="avg"?ye/Ae:ge}}}return x.toTensor()},t.prototype.avgPool3d=function(n,r){return q(n,"avgPool3d"),this.pool3d(n,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(n,r,o){q([n,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,l=o.filterHeight,c=o.filterWidth,f=o.dilationDepth,d=o.dilationHeight,p=o.dilationWidth,h=o.effectiveFilterDepth,m=o.effectiveFilterHeight,g=o.effectiveFilterWidth,v=h-1-o.padInfo.front,y=g-1-o.padInfo.left,x=m-1-o.padInfo.top,w=he(r.shape,"float32"),b=1/(u*l*c),C=this.bufferSync(n),E=0;E<o.batchSize;++E)for(var S=0;S<o.inChannels;++S)for(var R=0;R<o.inDepth;++R)for(var k=0;k<o.inHeight;++k)for(var D=0;D<o.inWidth;++D){for(var T=R-v,z=k-x,L=D-y,$=0,V=0;V<h;V+=f){var U=(T+V)/i;if(!(U<0||U>=o.outDepth||Math.floor(U)!==U))for(var P=0;P<m;P+=d){var O=(z+P)/a;if(!(O<0||O>=o.outHeight||Math.floor(O)!==O))for(var B=0;B<g;B+=p){var X=(L+B)/s;X<0||X>=o.outWidth||Math.floor(X)!==X||($+=C.get(E,U,O,X,S))}}}w.set($*b,E,R,k,D,S)}return w.toTensor()},t.prototype.maxPool3d=function(n,r){return q(n,"maxPool3d"),this.pool3d(n,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(n,r){for(var o=he(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,l=r.dilationHeight,c=r.dilationWidth,f=r.effectiveFilterDepth,d=r.effectiveFilterHeight,p=r.effectiveFilterWidth,h=r.padInfo.front,m=r.padInfo.top,g=r.padInfo.left,v=this.bufferSync(n),y=0;y<r.batchSize;++y)for(var x=0;x<r.inChannels;++x)for(var w=0;w<r.outDepth;++w){for(var b=w*i-h,C=b;C<0;)C+=u;for(var E=Math.min(r.inDepth,f+b),S=0;S<r.outHeight;++S){for(var R=S*a-m,k=R;k<0;)k+=l;for(var D=Math.min(r.inHeight,d+R),T=0;T<r.outWidth;++T){for(var z=T*s-g,L=z;L<0;)L+=c;for(var $=Math.min(r.inWidth,p+z),V=Number.NEGATIVE_INFINITY,U=-1,P=C;P<E;P+=u)for(var O=P-b,B=k;B<D;B+=l)for(var X=B-R,Q=L;Q<$;Q+=c){var re=Q-z,ue=v.get(y,P,B,Q,x);ue>=V&&(V=ue,U=O*d*p+X*d+re)}o.set(U,y,w,S,T,x)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(n,r,o,i){q([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,l=i.strideWidth,c=i.dilationDepth,f=i.dilationHeight,d=i.dilationWidth,p=i.effectiveFilterDepth,h=i.effectiveFilterHeight,m=i.effectiveFilterWidth,g=p-1-i.padInfo.front,v=m-1-i.padInfo.left,y=h-1-i.padInfo.top,x=he(r.shape,"float32"),w=this.bufferSync(a),b=this.bufferSync(n),C=0;C<i.batchSize;++C)for(var E=0;E<i.inChannels;++E)for(var S=0;S<i.inDepth;++S)for(var R=0;R<i.inHeight;++R)for(var k=0;k<i.inWidth;++k){for(var D=S-g,T=R-y,z=k-v,L=0,$=0;$<p;$+=c){var V=(D+$)/s;if(!(V<0||V>=i.outDepth||Math.floor(V)!==V))for(var U=0;U<h;U+=f){var P=(T+U)/u;if(!(P<0||P>=i.outHeight||Math.floor(P)!==P))for(var O=0;O<m;O+=d){var B=(z+O)/l;if(!(B<0||B>=i.outWidth||Math.floor(B)!==B)){var X=p*h*m-1-w.get(C,V,P,B,E)===$*h*m+U*m+O?1:0;X!==0&&(L+=b.get(C,V,P,B,E)*X)}}}}x.set(L,C,S,R,k,E)}return x.toTensor()},t.prototype.cast=function(n,r){return Z2(n,r,this)},t.prototype.reshape=function(n,r){return Dp(n,r)},t.prototype.avgPool=function(n,r){return q(n,"avgPool"),this.pool(n,r,"avg").toFloat()},t.prototype.resizeBilinear=function(n,r,o,i){q(n,"resizeBilinear");for(var a=n.shape,s=a[0],u=a[1],l=a[2],c=a[3],f=this.readSync(n.dataId),d=new Float32Array(oe([s,r,o,c])),p=[i&&r>1?u-1:u,i&&o>1?l-1:l],h=[i&&r>1?r-1:r,i&&o>1?o-1:o],m=0,g=p[0]/h[0],v=p[1]/h[1],y=0;y<s;y++)for(var x=0;x<r;x++)for(var w=g*x,b=Math.floor(w),C=w-b,E=Math.min(u-1,Math.ceil(w)),S=y*n.strides[0]+b*n.strides[1],R=y*n.strides[0]+E*n.strides[1],k=0;k<o;k++)for(var D=v*k,T=Math.floor(D),z=D-T,L=Math.min(l-1,Math.ceil(D)),$=S+T*n.strides[2],V=R+T*n.strides[2],U=S+L*n.strides[2],P=R+L*n.strides[2],O=0;O<c;O++){var B=f[$+O],X=f[V+O],Q=B+(f[U+O]-B)*z,re=Q+(X+(f[P+O]-X)*z-Q)*C;d[m++]=re}return Ct(d,[s,r,o,c])},t.prototype.resizeBilinearBackprop=function(n,r,o){q([n,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],l=i[3],c=n.shape,f=c[1],d=c[2],p=new Float32Array(a*s*u*l),h=[o&&f>1?s-1:s,o&&d>1?u-1:u],m=[o&&f>1?f-1:f,o&&d>1?d-1:d],g=h[0]/m[0],v=h[1]/m[1],y=this.readSync(n.dataId),x=0,w=0;w<a;w++)for(var b=w*r.strides[0],C=0;C<f;C++)for(var E=C*g,S=Math.floor(E),R=Math.min(Math.ceil(E),s-1),k=b+S*r.strides[1],D=b+R*r.strides[1],T=E-S,z=1-T,L=0;L<d;L++)for(var $=L*v,V=Math.floor($),U=Math.min(Math.ceil($),u-1),P=$-V,O=1-P,B=k+V*r.strides[2],X=k+U*r.strides[2],Q=D+V*r.strides[2],re=D+U*r.strides[2],ue=z*O,ce=z*P,le=T*O,fe=T*P,ge=0;ge<l;ge++){var ye=y[x++];p[B+ge]+=ye*ue,p[X+ge]+=ye*ce,p[Q+ge]+=ye*le,p[re+ge]+=ye*fe}return jt(p,[a,u,s,l],r.dtype)},t.prototype.resizeNearestNeighbor=function(n,r,o,i){q(n,"resizeNearestNeighbor");for(var a=n.shape,s=a[0],u=a[1],l=a[2],c=a[3],f=this.readSync(n.dataId),d=new Float32Array(s*r*o*c),p=[i&&r>1?u-1:u,i&&o>1?l-1:l],h=[i&&r>1?r-1:r,i&&o>1?o-1:o],m=p[0]/h[0],g=p[1]/h[1],v=0,y=0;y<s;y++)for(var x=y*n.strides[0],w=0;w<r;w++)for(var b=m*w,C=x+Math.min(u-1,i?Math.round(b):Math.floor(b))*n.strides[1],E=0;E<o;E++)for(var S=g*E,R=C+Math.min(l-1,i?Math.round(S):Math.floor(S))*n.strides[2],k=0;k<c;k++){var D=f[R+k];d[v++]=D}return Ct(d,[s,r,o,c],n.dtype)},t.prototype.resizeNearestNeighborBackprop=function(n,r,o){q([n,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],l=i[3],c=n.shape,f=c[1],d=c[2],p=new Float32Array(a*s*u*l),h=this.readSync(n.dataId),m=[o&&f>1?s-1:s,o&&d>1?u-1:u],g=[o&&f>1?f-1:f,o&&d>1?d-1:d],v=m[0]/g[0],y=m[1]/g[1],x=1/v,w=1/y,b=2*Math.ceil(x)+2,C=2*Math.ceil(w)+2,E=0;E<a;E++)for(var S=E*r.strides[0],R=0;R<s;R++)for(var k=S+R*r.strides[1],D=Math.floor(R*x),T=Math.floor(D-b/2),z=0;z<u;z++)for(var L=k+z*r.strides[2],$=Math.floor(z*w),V=Math.floor($-C/2),U=0;U<l;U++){for(var P=0,O=0;O<b;O++){var B=O+T;if(!(B<0||B>=f)){var X=S+B*n.strides[1],Q=B*v;if(R===Math.min(s-1,o?Math.round(Q):Math.floor(Q)))for(var re=0;re<C;re++){var ue=re+V;if(!(ue<0||ue>=d)){var ce=X+ue*n.strides[2],le=ue*y;z===Math.min(u-1,o?Math.round(le):Math.floor(le))&&(P+=h[ce+U])}}}}p[L+U]=P}return jt(p,r.shape,r.dtype)},t.prototype.batchNormalization=function(n,r,o,i,a,s){q([n,r,o,a,s],"batchNorm");for(var u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),d=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),h=d.length,m=f.length,g=c.length,v=l.length,y=0,x=0,w=0,b=0,C=0;C<u.length;++C)p[C]=d[y++]+(u[C]-l[x++])*f[w++]/Math.sqrt(c[b++]+i),y>=h&&(y=0),x>=v&&(x=0),w>=m&&(w=0),b>=g&&(b=0);return jt(p,n.shape)},t.prototype.localResponseNormalization4D=function(n,r,o,i,a){q(n,"localResponseNormalization4D");var s=n.shape[3],u=s-1,l=this.readSync(n.dataId),c=n.size,f=new Float32Array(c);function d(g){for(var v=g%s,y=g-v+Math.max(0,v-r),x=g-v+Math.min(v+r,u),w=0;y<=x;y++){var b=l[y];w+=b*b}return w}for(var p=0;p<c;p++){var h=d(p),m=l[p]*Math.pow(o+i*h,-a);f[p]=m}return jt(f,n.shape)},t.prototype.LRNGrad=function(n,r,o,i,a,s,u){q(n,"LRNGrad");for(var l=n.shape[3],c=this.readSync(n.dataId),f=this.readSync(r.dataId),d=this.readSync(o.dataId),p=new Float32Array(n.size),h=n.size,m=0;m<h;m++){for(var g=m%l,v=m-g+Math.max(0,g-i),y=m-g+Math.min(l,g+i+1),x=0,w=v;w<y;w++)x+=Math.pow(f[w],2);for(x=s*x+a,w=v;w<y;w++){var b=-2*s*u*f[w]*d[m]/x;m===w&&(b+=Math.pow(x,-u)),b*=c[m],p[w]+=b}}return jt(p,n.shape)},t.prototype.multinomial=function(n,r,o,i){q(n,"multinomial");for(var a=r?n:Tr(n),s=a.shape[0],u=a.shape[1],l=Le([s,o],"int32"),c=this.readSync(l.dataId),f=this.readSync(a.dataId),d=0;d<s;++d){var p=d*u,h=new Float32Array(u-1);h[0]=f[p];for(var m=1;m<h.length;++m)h[m]=h[m-1]+f[p+m];for(var g=Ec(i.toString()),v=d*o,y=0;y<o;++y){var x=g();c[v+y]=h.length;for(var w=0;w<h.length;w++)if(x<h[w]){c[v+y]=w;break}}}return l},t.prototype.oneHot=function(n,r,o,i){q(n,"oneHot");var a=new Float32Array(n.size*r);a.fill(i);for(var s=this.readSync(n.dataId),u=0;u<n.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return so(a,[n.size,r],"int32")},t.prototype.nonMaxSuppression=function(n,r,o,i,a){return q(n,"nonMaxSuppression"),av(this.readSync(n.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(n){return this.fftBatch(n,!1)},t.prototype.ifft=function(n){return this.fftBatch(n,!0)},t.prototype.fftBatch=function(n,r){for(var o=n.shape[0],i=n.shape[1],a=he(n.shape,"float32"),s=he(n.shape,"float32"),u=vn(n).as2D(o,i),l=Xn(n).as2D(o,i),c=0;c<o;c++)for(var f=u.slice([c,0],[1,i]),d=l.slice([c,0],[1,i]),p=wt(f,d),h=this.readSync(this.fftImpl(p,r).dataId),m=0;m<i;m++){var g=m0(h,m);a.values[c*i+m]=g.real,s.values[c*i+m]=g.imag}return wt(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(n,r){var o=n.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(n.shape[0],n.shape[1]);return r&&(a=wt(vn(a).div(J(i)),Xn(a).div(J(i)))),a}var s=this.readSync(n.dataId),u=function(l){for(var c=new Float32Array(l.length/2),f=new Float32Array(l.length/2),d=0;d<l.length;d+=2)c[d/2]=l[d],f[d/2]=l[d+1];return{real:c,imag:f}}(this.fourierTransformByMatmul(s,i,r));return wt(u.real,u.imag).as2D(n.shape[0],n.shape[1])},t.prototype.isExponentOf2=function(n){return(n&n-1)==0},t.prototype.fftRadix2=function(n,r,o){if(r===1)return n;var i=this.readSync(n.dataId),a=r/2,s=function(v){for(var y=Math.ceil(v.length/4),x=new Float32Array(y),w=new Float32Array(y),b=0;b<v.length;b+=4)x[Math.floor(b/4)]=v[b],w[Math.floor(b/4)]=v[b+1];return{real:x,imag:w}}(i),u=wt(s.real,s.imag).as1D(),l=function(v){for(var y=Math.floor(v.length/4),x=new Float32Array(y),w=new Float32Array(y),b=2;b<v.length;b+=4)x[Math.floor(b/4)]=v[b],w[Math.floor(b/4)]=v[b+1];return{real:x,imag:w}}(i),c=wt(l.real,l.imag).as1D();u=this.fftRadix2(u,a,o),c=this.fftRadix2(c,a,o);var f=function(v,y){for(var x=new Float32Array(v/2),w=new Float32Array(v/2),b=0;b<Math.ceil(v/2);b++){var C=(y?2:-2)*Math.PI*(b/v);x[b]=Math.cos(C),w[b]=Math.sin(C)}return{real:x,imag:w}}(r,o),d=wt(f.real,f.imag).mul(c),p=u.add(d),h=u.sub(d),m=vn(p).concat(vn(h)),g=Xn(p).concat(Xn(h));return wt(m,g).as1D()},t.prototype.fourierTransformByMatmul=function(n,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,l=0;l<r;l++){var c=ET(a*l,r,o),f=m0(n,l);s+=f.real*c.real-f.imag*c.imag,u+=f.real*c.imag+f.imag*c.real}o&&(s/=r,u/=r),CT(i,s,u,a)}return i},t.prototype.depthToSpace=function(n,r,o){I(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),I(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var i=n.shape[0],a=n.shape[1],s=n.shape[2],u=n.shape[3],l=a*r,c=s*r,f=u/(r*r),d=this.readSync(n.dataId),p=new Float32Array(i*l*c*f),h=0,m=0;m<i;++m)for(var g=0;g<l;++g)for(var v=Math.floor(g/r),y=g%r,x=0;x<c;++x)for(var w=Math.floor(x/r),b=(y*r+x%r)*f,C=0;C<f;++C){var E=C+b+u*(w+s*(v+a*m));p[h++]=d[E]}return jt(p,[i,l,c,f])},t.prototype.broadcastedBinaryOp=function(n,r,o,i){var a=be(n.shape,r.shape),s=he(a,o),u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=Xr(n.shape,a),f=Xr(r.shape,a),d=s.values;if(c.length+f.length===0)for(var p=0;p<d.length;++p)d[p]=i(u[p%u.length],l[p%l.length]);else{var h=this.bufferSync(n),m=this.bufferSync(r),g=function(v){var y=s.indexToLoc(v),x=y.slice(-n.rank);c.forEach(function(E){return x[E]=0});var w=h.locToIndex(x),b=y.slice(-r.rank);f.forEach(function(E){return b[E]=0});var C=m.locToIndex(b);d[v]=i(u[w],l[C])};for(p=0;p<d.length;++p)g(p)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(n,r,o){var i=be(n.shape,r.shape),a=he(i,"float32"),s=he(i,"float32"),u=this.readSync(n.dataId),l=this.readSync(r.dataId),c=Xr(n.shape,i),f=Xr(r.shape,i),d=a.values,p=s.values;if(c.length+f.length===0)for(var h=0;h<d.length;h++){var m=h%u.length,g=h%l.length,v=o(u[2*m],u[2*m+1],l[2*g],l[2*g+1]);d[h]=v.real,p[h]=v.imag}else{var y=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=this.bufferSync(this.data.get(r.dataId).complexTensors.real),w=function(b){var C=a.indexToLoc(b),E=C.slice(-n.rank);c.forEach(function(T){return E[T]=0});var S=y.locToIndex(E),R=C.slice(-r.rank);f.forEach(function(T){return R[T]=0});var k=x.locToIndex(R),D=o(u[2*S],u[2*S+1],l[2*k],l[2*k+1]);d[b]=D.real,p[b]=D.imag};for(h=0;h<d.length;h++)w(h)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(n,r,o){return nw(n,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(n,r,o,i,a,s){for(var u=n.shape,l=u[0],c=u[1],f=u[2],d=u[3],p=r.shape[0],h=i[0],m=i[1],g=he([p,h,m,d],"float32"),v=this.readSync(r.dataId),y=this.readSync(o.dataId),x=this.readSync(n.dataId),w=n.strides,b=g.strides,C=0;C<p;C++){var E=4*C,S=v[E],R=v[E+1],k=v[E+2],D=v[E+3],T=y[C];if(!(T>=l))for(var z=h>1?(k-S)*(c-1)/(h-1):0,L=m>1?(D-R)*(f-1)/(m-1):0,$=0;$<h;$++){var V=h>1?S*(c-1)+$*z:.5*(S+k)*(c-1);if(V<0||V>c-1)for(var U=0;U<m;U++)for(var P=0;P<d;P++){var O=P+U*b[2]+$*b[1]+C*b[0];g.values[O]=s}else if(a==="bilinear"){var B=Math.floor(V),X=Math.ceil(V),Q=V-B;for(U=0;U<m;U++)if((Ee=m>1?R*(f-1)+U*L:.5*(R+D)*(f-1))<0||Ee>f-1)for(P=0;P<d;P++)O=P+U*b[2]+$*b[1]+C*b[0],g.values[O]=s;else{var re=Math.floor(Ee),ue=Math.ceil(Ee),ce=Ee-re;for(P=0;P<d;P++){var le=x[O=P+re*w[2]+B*w[1]+T*w[0]],fe=x[O=P+ue*w[2]+B*w[1]+T*w[0]],ge=x[O=P+re*w[2]+X*w[1]+T*w[0]],ye=le+(fe-le)*ce,Ae=ge+(x[O=P+ue*w[2]+X*w[1]+T*w[0]]-ge)*ce;O=P+U*b[2]+$*b[1]+C*b[0],g.values[O]=ye+(Ae-ye)*Q}}}else for(U=0;U<m;++U){var Ee;if((Ee=m>1?R*(f-1)+U*L:.5*(R+D)*(f-1))<0||Ee>f-1)for(P=0;P<d;P++)O=P+U*b[2]+$*b[1]+C*b[0],g.values[O]=s;else{var Pe=Math.round(Ee),Re=Math.round(V);for(P=0;P<d;P++){var Xe=P+Pe*w[2]+Re*w[1]+T*w[0],je=P+U*b[2]+$*b[1]+C*b[0];g.values[je]=x[Xe]}}}}}return g.toTensor()},t.prototype.sparseToDense=function(n,r,o,i){var a=Pl(0,n,o),s=a.sliceRank,u=a.numUpdates,l=a.sliceSize,c=a.strides,f=a.outputSize;return this.scatter(n,r,o,f,l,u,s,c,i,!1)},t.prototype.gatherND=function(n,r){var o=r.shape,i=o[o.length-1],a=G2(n,r),s=a[0],u=a[1],l=a[2],c=a[3];if(u===0)return Ct([],s,n.dtype);for(var f=new vs([u,l],n.dtype),d=this.readSync(r.dataId),p=this.readSync(n.dataId),h=0;h<u;h++){for(var m=[],g=0,v=0;v<i;v++){var y=d[h*i+v];g+=y*c[v],m.push(y)}if(g<0||g>=n.size/l)throw new Error("Invalid indices: "+m+" does not index into "+n.shape);for(var x=0;x<l;x++)f.values[h*l+x]=p[g*l+x]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(n,r,o){var i=Pl(0,n,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,l=i.strides,c=i.outputSize,f=J(0);return this.scatter(n,r,o,c,u,s,a,l,f,!0)},t.prototype.fill=function(n,r,o){var i=El(o=o||Ds(r),oe(n));return i.fill(r),F.makeTensor(i,n,o,this)},t.prototype.onesLike=function(n){if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(n.shape,1,n.dtype)},t.prototype.zerosLike=function(n){var r=El(n.dtype,oe(n.shape));return this.makeOutput(r,n.shape,n.dtype)},t.prototype.linspace=function(n,r,o){return ew(n,r,o)},t.prototype.scatter=function(n,r,o,i,a,s,u,l,c,f){var d=[i/a,a],p=this.readSync(n.dataId),h=this.readSync(r.dataId);if(i===0)return Ct([],o,r.dtype);var m=new vs(d,r.dtype);m.values.fill(this.readSync(c.dataId)[0]);for(var g=0;g<s;g++){for(var v=[],y=0,x=0;x<u;x++){var w=p[g*u+x];v.push(w),y+=w*l[x]}if(y<0||y>=i/a)throw new Error("Invalid indices: "+v+" does not index into "+o);for(var b=0;b<a;b++)f?m.values[y*a+b]+=h[g*a+b]:m.values[y*a+b]=r.rank===0?h[0]:h[g*a+b]}return m.toTensor().reshape(o)},t}(Q2);F.registerBackend("cpu",function(){return new UF},1);for(var nd=0,L0=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,l=s.iouThreshold,c=s.scoreThreshold,f=s.softNmsSigma,d=n;q(i,"NonMaxSuppressionWithScore");var p=sv(d.data.get(i.dataId).values,d.data.get(a.dataId).values,u,l,c,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,o=n;q(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:ys,backendName:"cpu",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,o=r.a,i=r.b,a=n;q([o,i],ys);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,l=function(d,p,h,m,g,v){var y=be(d,p),x=y.length,w=tr(y),b=hs(g,oe(y)),C=d.length,E=p.length,S=tr(d),R=tr(p),k=Xr(d,y),D=Xr(p,y);if(k.length+D.length===0)for(var T=0;T<b.length;++T)b[T]=v(h[T%h.length],m[T%m.length]);else{var z=function(L){var $=Z4(L,x,w),V=$.slice(-C);k.forEach(function(B){return V[B]=0});var U=s0(V,C,S),P=$.slice(-E);D.forEach(function(B){return P[B]=0});var O=s0(P,E,R);b[L]=v(h[U],m[O])};for(T=0;T<b.length;++T)z(T)}return[b,y]}(o.shape,i.shape,s,u,o.dtype,function(d,p){var h=d-p;return h*h}),c=l[0],f=l[1];return{dataId:a.write(c,f,o.dtype),shape:f,dtype:o.dtype}}}];nd<L0.length;nd++)_2(L0[nd]);var li,VF=function(e){this.variableNames=["A"];var t=Nt(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+n+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},HF=function(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Nt(),n=e[0],r=e[1];this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+n+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var rd=0,z0=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],l=u[0],c=u[1],f=[c,l],d=[c,l,i];(s||a)&&(li==null&&(li=document.createElement("canvas").getContext("2d")),li.canvas.width=l,li.canvas.height=c,li.drawImage(o,0,0,l,c),o=li.canvas);var p=n.makeTensorInfo(f,"int32");n.texData.get(p.dataId).usage=rn.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(p.dataId),o);var h=H().getBool("WEBGL_PACK")?new HF(d):new VF(d),m=n.runWebGLProgram(h,[p],"int32");return n.disposeData(p.dataId),m}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=e.attrs;Rl("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,l=s.iouThreshold,c=s.scoreThreshold,f=s.softNmsSigma,d=n,p=sv(d.readSync(i.dataId),d.readSync(a.dataId),u,l,c,f);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t.x,o=n,i=new ve(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:ys,backendName:"webgl",kernelFunc:function(e){var t=e.inputs,n=e.backend,r=t,o=r.a,i=r.b,a=n,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new pr("return (a - b) * (a - b);",o.shape,i.shape):new Ye("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];rd<z0.length;rd++)_2(z0[rd]);for(var od=0,W0=[{kernelName:"Square",gradFunc:function(e,t){var n=t[0];return{x:function(){return e.mul(n.toFloat().mul(2))}}}},{kernelName:ys,gradFunc:function(e,t){var n=t[0],r=t[1],o=J(2);return{a:function(){return Pt(e,Pt(o,ft(n,r)))},b:function(){return Pt(e,Pt(o,ft(r,n)))}}}}];od<W0.length;od++)$4(W0[od]);var GF=function(){function e(){}return e.prototype.fetch=function(t,n){return fetch(t,n)},e.prototype.now=function(){return performance.now()},e.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+n);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},e.prototype.decode=function(t,n){return new TextDecoder(n).decode(t)},e}();H().get("IS_BROWSER")&&H().setPlatform("browser",new GF);var id,qF=function(){return require("node-fetch")},KF=function(){function e(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return e.prototype.fetch=function(t,n){return H().global.fetch!=null?H().global.fetch(t,n):(id==null&&(id=qF()),id(t,n))},e.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},e.prototype.encode=function(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+n);return this.textEncoder.encode(t)},e.prototype.decode=function(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)},e}();H().get("IS_NODE")&&H().setPlatform("node",new KF);var Op={float32:4,int32:4,uint16:2,uint8:1,bool:1},Wl=4;function Kw(e,t){for(var n={},r=0,o=function(s){var u=s.name,l=s.dtype,c=s.shape,f=oe(c),d=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var h=Op[p.dtype],m=e.slice(r,r+f*h),g=p.dtype==="uint8"?new Uint8Array(m):new Uint16Array(m);if(l==="float32")d=Float32Array.from(g,function(C){return C*p.scale+p.min});else{if(l!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+l);d=Int32Array.from(g,function(C){return Math.round(C*p.scale+p.min)})}r+=f*h}else if(l==="string"){var v=oe(s.shape);d=[];for(var y=0;y<v;y++){var x=new Uint32Array(e.slice(r,r+Wl))[0];r+=Wl;var w=new Uint8Array(e.slice(r,r+x));d.push(w),r+=x}}else{var b=Op[l];if(m=e.slice(r,r+f*b),l==="float32")d=new Float32Array(m);else if(l==="int32")d=new Int32Array(m);else{if(l!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+l);d=new Uint8Array(m)}r+=f*b}n[u]=Ct(d,c,l)},i=0,a=t;i<a.length;i++)o(a[i]);return n}function XF(e){if(e===null)throw new Error("Invalid input value: "+JSON.stringify(e));var t=0,n=[];e.forEach(function(i){if(t+=i.byteLength,n.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var r=new Uint8Array(t),o=0;return n.forEach(function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),r.buffer}var Mp=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function j0(e){return Mp?Buffer.byteLength(e):new Blob([e]).size}function kv(e){var t=0;e.forEach(function(o){t+=o.byteLength});var n=new Uint8Array(t),r=0;return e.forEach(function(o){n.set(new Uint8Array(o),r),r+=o.byteLength}),n.buffer}function $0(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);var t=e.split("/");return t[t.length-1]}function zs(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:j0(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:j0(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:e.weightData.byteLength}}var on=function(){function e(){this.saveRouters=[],this.loadRouters=[]}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerSaveRouter=function(t){e.getInstance().saveRouters.push(t)},e.registerLoadRouter=function(t){e.getInstance().loadRouters.push(t)},e.getSaveHandlers=function(t){return e.getHandlers(t,"save")},e.getLoadHandlers=function(t,n){return e.getHandlers(t,"load",n)},e.getHandlers=function(t,n,r){var o=[];return(n==="load"?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(function(i){var a=i(t,r);a!==null&&o.push(a)}),o},e}(),Li="://",uo=function(){function e(){this.managers={}}return e.getInstance=function(){return e.instance==null&&(e.instance=new e),e.instance},e.registerManager=function(t,n){I(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Li)&&(t=t.slice(0,t.indexOf(Li))),I(t.length>0,function(){return"scheme must not be an empty string."});var r=e.getInstance();I(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=n},e.getManager=function(t){var n=this.getInstance().managers[t];if(n==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return n},e.getSchemes=function(){return Object.keys(this.getInstance().managers)},e}();function Vu(e){if(e.indexOf(Li)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+uo.getSchemes().join(","));return{scheme:e.split(Li)[0],path:e.split(Li)[1]}}function U0(e,t,n){return n===void 0&&(n=!1),te(this,void 0,void 0,function(){var r,o,i,a,s,u,l,c,f;return ne(this,function(d){switch(d.label){case 0:return I(e!==t,function(){return"Old path and new path are the same: '"+e+"'"}),I((r=on.getLoadHandlers(e)).length>0,function(){return"Copying failed because no load handler is found for source URL "+e+"."}),I(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+e+"."}),o=r[0],I((i=on.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),I(i.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),a=i[0],s=Vu(e).scheme,u=Vu(e).path,l=s===Vu(e).scheme,[4,o.load()];case 1:return c=d.sent(),n&&l?[4,uo.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return[4,a.save(c)];case 4:return f=d.sent(),!n||l?[3,6]:[4,uo.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var Do="models_store",Yr="model_info_store";function Xw(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var e=window||self,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Bp(e){var t=e.result;t.createObjectStore(Do,{keyPath:"modelPath"}),t.createObjectStore(Yr,{keyPath:"modelPath"})}var zi=function(){function e(t){if(this.indexedDB=Xw(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return e.prototype.save=function(t){return te(this,void 0,void 0,function(){return ne(this,function(n){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},e.prototype.load=function(){return te(this,void 0,void 0,function(){return ne(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},e.prototype.databaseAction=function(t,n){var r=this;return new Promise(function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Bp(a)},a.onsuccess=function(){var s=a.result;if(n==null){var u=s.transaction(Do,"readonly"),l=u.objectStore(Do).get(r.modelPath);l.onsuccess=function(){if(l.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(l.result.modelArtifacts)},l.onerror=function(m){return s.close(),i(l.error)},u.oncomplete=function(){return s.close()}}else{var c,f=zs(n),d=s.transaction(Yr,"readwrite"),p=d.objectStore(Yr),h=p.put({modelPath:r.modelPath,modelArtifactsInfo:f});h.onsuccess=function(){var m=(c=s.transaction(Do,"readwrite")).objectStore(Do).put({modelPath:r.modelPath,modelArtifacts:n,modelArtifactsInfo:f});m.onsuccess=function(){return o({modelArtifactsInfo:f})},m.onerror=function(g){var v=(p=d.objectStore(Yr)).delete(r.modelPath);v.onsuccess=function(){return s.close(),i(m.error)},v.onerror=function(y){return s.close(),i(m.error)}}},h.onerror=function(m){return s.close(),i(h.error)},d.oncomplete=function(){c==null?s.close():c.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},e.URL_SCHEME="indexeddb://",e}(),V0=function(e){return H().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(zi.URL_SCHEME)?(t=e.slice(zi.URL_SCHEME.length),new zi(t)):null;var t};on.registerSaveRouter(V0),on.registerLoadRouter(V0);var YF=function(){function e(){this.indexedDB=Xw()}return e.prototype.listModels=function(){return te(this,void 0,void 0,function(){var t=this;return ne(this,function(n){return[2,new Promise(function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Bp(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(Yr,"readonly"),u=s.objectStore(Yr).getAll();u.onsuccess=function(){for(var l={},c=0,f=u.result;c<f.length;c++){var d=f[c];l[d.modelPath]=d.modelArtifactsInfo}r(l)},u.onerror=function(l){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},e.prototype.removeModel=function(t){return te(this,void 0,void 0,function(){var n=this;return ne(this,function(r){var o;return t=(o=t).startsWith(zi.URL_SCHEME)?o.slice(zi.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=n.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Bp(s)},s.onsuccess=function(){var u,l=s.result,c=l.transaction(Yr,"readwrite"),f=c.objectStore(Yr),d=f.get(t);d.onsuccess=function(){if(d.result==null)return l.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var p=f.delete(t),h=function(){var m=(u=l.transaction(Do,"readwrite")).objectStore(Do).delete(t);m.onsuccess=function(){return i(d.result.modelArtifactsInfo)},m.onerror=function(g){return a(d.error)}};p.onsuccess=h,p.onerror=function(m){return h(),l.close(),a(d.error)}},d.onerror=function(p){return l.close(),a(d.error)},c.oncomplete=function(){u==null?l.close():u.oncomplete=function(){return l.close()}}},s.onerror=function(u){return a(s.error)}})]})})},e}();if(H().getBool("IS_BROWSER"))try{uo.registerManager(zi.URL_SCHEME,new YF)}catch{}var gr="/",vi="tensorflowjs_models",Yw="info",QF="model_topology",JF="weight_specs",ZF="weight_data",eO="model_metadata";function Qw(e){return{info:[vi,e,Yw].join(gr),topology:[vi,e,QF].join(gr),weightSpecs:[vi,e,JF].join(gr),weightData:[vi,e,ZF].join(gr),modelMetadata:[vi,e,eO].join(gr)}}function tO(e){var t=e.split(gr);if(t.length<3)throw new Error("Invalid key format: "+e);return t.slice(1,t.length-1).join(gr)}var Wi=function(){function e(t){if(!H().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Qw(this.modelPath)}return e.prototype.save=function(t){return te(this,void 0,void 0,function(){var n,r,o;return ne(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");n=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=zs(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(a){if(Mp)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",l=0,c=s.length;l<c;l++)u+=String.fromCharCode(s[l]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},e.prototype.load=function(){return te(this,void 0,void 0,function(){var t,n,r,o,i,a,s;return ne(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(n={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(n.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(n.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,n.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return n.weightData=function(l){if(Mp){var c=Buffer.from(l,"base64");return c.buffer.slice(c.byteOffset,c.byteOffset+c.byteLength)}for(var f=atob(l),d=new Uint8Array(f.length),p=0;p<f.length;++p)d.set([f.charCodeAt(p)],p);return d.buffer}(s),[2,n]})})},e.URL_SCHEME="localstorage://",e}(),H0=function(e){return H().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(Wi.URL_SCHEME)?(t=e.slice(Wi.URL_SCHEME.length),new Wi(t)):null;var t};on.registerSaveRouter(H0),on.registerLoadRouter(H0);var nO=function(){function e(){I(H().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),I(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return e.prototype.listModels=function(){return te(this,void 0,void 0,function(){var t,n,r,o,i,a;return ne(this,function(s){for(t={},n=vi+gr,r=gr+Yw,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(n)&&i.endsWith(r)&&(a=tO(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},e.prototype.removeModel=function(t){return te(this,void 0,void 0,function(){var n,r;return ne(this,function(o){var i;if(t=(i=t).startsWith(Wi.URL_SCHEME)?i.slice(Wi.URL_SCHEME.length):i,n=Qw(t),this.LS.getItem(n.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(n.info)),this.LS.removeItem(n.info),this.LS.removeItem(n.topology),this.LS.removeItem(n.weightSpecs),this.LS.removeItem(n.weightData),[2,r]})})},e}();if(H().getBool("IS_BROWSER"))try{uo.registerManager(Wi.URL_SCHEME,new nO)}catch{}var rO="model",oO=".json",iO=".weights.bin";function G0(e){return new Promise(function(t){return setTimeout(t)}).then(e)}var ad=function(){function e(t){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),t!=null&&t.length!==0||(t=rO),this.modelTopologyFileName=t+oO,this.weightDataFileName=t+iO}return e.prototype.save=function(t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s;return ne(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(n=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,G0(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=n,[4,G0(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:zs(t)}]}})})},e.URL_SCHEME="downloads://",e}(),aO=function(){function e(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return e.prototype.load=function(){return te(this,void 0,void 0,function(){var t,n,r=this;return ne(this,function(o){return t=this.files[0],n=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var l=JSON.parse(u.target.result),c=l.modelTopology;if(c!=null){n.length===0&&i({modelTopology:c});var f=l.weightsManifest;if(f!=null){var d;try{d=r.checkManifestAndWeightFiles(f,n)}catch(g){return void a(g)}var p=[],h=[],m=[];f.forEach(function(g){g.paths.forEach(function(v){h.push(v),m.push(null)}),p.push.apply(p,g.weights)}),f.forEach(function(g){g.paths.forEach(function(v){var y=new FileReader;y.onload=function(x){var w=x.target.result,b=h.indexOf(v);m[b]=w,m.indexOf(null)===-1&&i({modelTopology:c,weightSpecs:p,weightData:kv(m),format:l.format,generatedBy:l.generatedBy,convertedBy:l.convertedBy,userDefinedMetadata:l.userDefinedMetadata})},y.onerror=function(x){return a("Failed to weights data from file of path '"+v+"'.")},y.readAsArrayBuffer(d[v])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},e.prototype.checkManifestAndWeightFiles=function(t,n){for(var r=[],o=n.map(function(u){return $0(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var l=$0(u);if(r.indexOf(l)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+l+"'");if(r.push(l),o.indexOf(l)===-1)throw new Error("Weight file with basename '"+l+"' is not provided.");i[u]=n[o.indexOf(l)]});if(r.length!==n.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+n.length+").");return i},e}();function q0(e,t,n,r){(function(i){I(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(e),function(i,a){I(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),I(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),I(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(n=n??0,r=r??1);var o=0;return Promise.all(e.map(function(i){return i.then(function(a){var s=n+ ++o/e.length*(r-n);return t(s),a}),i}))}function Jw(e,t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s,u,l,c;return ne(this,function(f){switch(f.label){case 0:return t==null&&(t={}),n=t.fetchFunc==null?H().platform.fetch:t.fetchFunc,r=e.map(function(d){return n(d,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,q0(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map(function(d){return d.arrayBuffer()}),u=.5,l=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return c=f.sent(),[3,8];case 6:return[4,q0(s,t.onProgress,u,l)];case 7:c=f.sent(),f.label=8;case 8:return[2,c]}})})}function K0(e){var t=this;return function(n,r,o){return r===void 0&&(r=""),te(t,void 0,void 0,function(){var i,a,s,u,l,c,f,d,p,h;return ne(this,function(m){switch(m.label){case 0:if(i=n.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],n.forEach(function(g,v){var y=0;g.weights.forEach(function(x){var w="quantization"in x?x.quantization.dtype:x.dtype,b=Op[w]*oe(x.shape),C=function(){i[v]=!0,a[v]==null&&(a[v]=[]),a[v].push({manifestEntry:x,groupOffset:y,sizeBytes:b})};o!=null?o.forEach(function(E,S){E===x.name&&(C(),s[S]=!0)}):C(),u.push(x.name),y+=b})}),!s.every(function(g){return g}))throw l=o.filter(function(g,v){return!s[v]}),new Error("Could not find weights in manifest with names: "+l.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return c=i.reduce(function(g,v,y){return v&&g.push(y),g},[]),f=[],c.forEach(function(g){n[g].paths.forEach(function(v){var y=r+(r.endsWith("/")?"":"/")+v;f.push(y)})}),[4,e(f)];case 1:return d=m.sent(),p={},h=0,c.forEach(function(g){for(var v=n[g].paths.length,y=0,x=0;x<v;x++)y+=d[h+x].byteLength;for(var w=new ArrayBuffer(y),b=new Uint8Array(w),C=0,E=0;E<v;E++){var S=new Uint8Array(d[h+E]);b.set(S,C),C+=S.byteLength}a[g].forEach(function(R){var k=Kw(w.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var D in k)p[D]=k[D]}),h+=v}),[2,p]}})})}}on.registerSaveRouter(function(e){return H().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ad.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ad(t)}(e.slice(ad.URL_SCHEME.length)):null});var Zw=function(){function e(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,n.fetchFunc!=null?(I(typeof n.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=n.fetchFunc):this.fetch=H().platform.fetch,I(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&I(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}return e.prototype.save=function(t){return te(this,void 0,void 0,function(){var n,r,o,i;return ne(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},n.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&n.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,n)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:zs(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},e.prototype.load=function(){return te(this,void 0,void 0,function(){var t,n,r,o,i,a,s,u,l,c,f,d;return ne(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,t.json()];case 3:return n=p.sent(),[3,5];case 4:throw p.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=n.modelTopology,i=n.weightsManifest,a=n.generatedBy,s=n.convertedBy,u=n.format,l=n.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:d=p.sent(),c=d[0],f=d[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:c,weightData:f,userDefinedMetadata:l,generatedBy:a,convertedBy:s,format:u}]}})})},e.prototype.loadWeights=function(t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s,u,l,c,f,d;return ne(this,function(p){switch(p.label){case 0:for(n=Array.isArray(this.path)?this.path[1]:this.path,r=function(h){var m=h.lastIndexOf("/"),g=h.lastIndexOf("?"),v=h.substring(0,m),y=g>m?h.substring(g):"";return[v+"/",y]}(n),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,l=t;u<l.length;u++)c=l[u],s.push.apply(s,c.weights);return f=[],t.forEach(function(h){h.paths.forEach(function(m){f.push(a+m+i)})}),[4,Jw(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=p.sent(),[2,[s,kv(d)]]}})})},e.URL_SCHEME_REGEX=/^https?:\/\//,e}();function Lp(e){return e.match(Zw.URL_SCHEME_REGEX)!=null}var X0=function(e,t){return typeof fetch>"u"?null:(Array.isArray(e)?e.every(function(n){return Lp(n)}):Lp(e))?zp(e,{onProgress:t}):null};function zp(e,t){return new Zw(e,t)}on.registerSaveRouter(X0),on.registerLoadRouter(X0);var sd=function(){function e(t){this.modelArtifacts=t}return e.prototype.load=function(){return te(this,void 0,void 0,function(){return ne(this,function(t){return[2,this.modelArtifacts]})})},e}(),sO=function(){function e(t){this.saveHandler=t}return e.prototype.save=function(t){return te(this,void 0,void 0,function(){return ne(this,function(n){return[2,this.saveHandler(t)]})})},e}(),eb=Object.freeze({browserFiles:function(e){return new aO(e)},browserHTTPRequest:function(e,t){return zp(e,t)},concatenateArrayBuffers:kv,decodeWeights:Kw,encodeWeights:function(e,t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s=this;return ne(this,function(u){switch(u.label){case 0:for(n=[],r=[],o=Array.isArray(e)?e.map(function(l){return l.name}):Object.keys(e),i=function(l){var c=o[l],f=Array.isArray(e)?e[l].tensor:e[c];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+c+"': "+f.dtype);var d={name:c,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var p=new Promise(function(h){return te(s,void 0,void 0,function(){var m,g,v,y,x,w,b;return ne(this,function(C){switch(C.label){case 0:return[4,f.bytes()];case 1:for(m=C.sent(),g=m.reduce(function(E,S){return E+S.length},0)+Wl*m.length,v=new Uint8Array(g),y=0,x=0;x<m.length;x++)w=m[x],b=new Uint8Array(new Uint32Array([w.length]).buffer),v.set(b,y),y+=Wl,v.set(w,y),y+=w.length;return h(v),[2]}})})});r.push(p)}else r.push(f.data());t!=null&&(d.group=t),n.push(d)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:XF(u.sent()),specs:n}]}})})},fromMemory:function(e,t,n,r){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new sd(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new sd({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new sd({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r}))},getLoadHandlers:function(e,t){return on.getLoadHandlers(e,t)},getModelArtifactsInfoForJSON:zs,getSaveHandlers:function(e){return on.getSaveHandlers(e)},http:zp,isHTTPScheme:Lp,loadWeights:function(e,t,n,r){return t===void 0&&(t=""),te(this,void 0,void 0,function(){return ne(this,function(o){return[2,K0(function(i){return Jw(i,{requestInit:r})})(e,t,n)]})})},registerLoadRouter:function(e){return on.registerLoadRouter(e)},registerSaveRouter:function(e){return on.registerSaveRouter(e)},weightsLoaderFactory:K0,withSaveHandler:function(e){return new sO(e)},copyModel:function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){return[2,U0(e,t,!1)]})})},listModels:function(){return te(this,void 0,void 0,function(){var e,t,n,r,o,i,a;return ne(this,function(s){switch(s.label){case 0:e=uo.getSchemes(),t={},n=0,r=e,s.label=1;case 1:return n<r.length?(o=r[n],[4,uo.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+Li+a]=i[a];s.label=3;case 3:return n++,[3,1];case 4:return[2,t]}})})},moveModel:function(e,t){return te(this,void 0,void 0,function(){return ne(this,function(n){return[2,U0(e,t,!0)]})})},removeModel:function(e){return te(this,void 0,void 0,function(){var t;return ne(this,function(n){return t=Vu(e),[2,uo.getManager(t.scheme).removeModel(t.path)]})})}}),ci;N({confusionMatrix_:function(e,t,n){var r=_(e,"labels","confusionMatrix"),o=_(t,"predictions","confusionMatrix");I(n==null||n>0&&Number.isInteger(n),function(){return"If provided, numClasses must be a positive integer, but got "+n}),I(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),I(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),I(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),I(n>0&&Number.isInteger(n),function(){return"numClasses is required to be a positive integer, but got "+n});var i=Tp(r.asType("int32"),n),a=Tp(o.asType("int32"),n);return i.transpose().matMul(a).asType("int32")}});var uO=N({fromPixels_:function(e,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var n=!1,r=!1,o=!1,i=!1,a=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)i=!0;else{if(e.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+e.constructor.name);a=!0}if(o&&o&&e.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(S2("FromPixels",F.backendName)!=null)return F.runKernel("FromPixels",{pixels:e},{numChannels:t});var s,u,l=o?[e.videoWidth,e.videoHeight]:[e.width,e.height],c=l[0],f=l[1];if(a?s=e.getContext("2d").getImageData(0,0,c,f).data:r||n?s=e.data:(i||o)&&(ci==null&&(ci=document.createElement("canvas").getContext("2d")),ci.canvas.width=c,ci.canvas.height=f,ci.drawImage(e,0,0,c,f),s=ci.getImageData(0,0,c,f).data),t===4)u=new Int32Array(s);else{var d=c*f;u=new Int32Array(d*t);for(var p=0;p<d;p++)for(var h=0;h<t;++h)u[p*t+h]=s[4*p+h]}return tv(u,[f,c,t],"int32")}}),Rv=Object.freeze({toPixels:function(e,t){return te(this,void 0,void 0,function(){var n,r,o,i,a,s,u,l,c,f,d,p,h,m,g,v,y,x,w,b,C,E,S;return ne(this,function(R){switch(R.label){case 0:if(n=_(e,"img","toPixels"),e instanceof Ve||(n=n.toInt()),n.rank!==2&&n.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+n.rank+".");if(r=n.shape.slice(0,2),o=r[0],i=r[1],(a=n.rank===2?1:n.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,n.data()];case 1:return s=R.sent(),u=n.min(),l=n.max(),[4,Promise.all([u.data(),l.data()])];case 2:if(c=R.sent(),f=c[0],d=c[1],p=f[0],h=d[0],u.dispose(),l.dispose(),n.dtype==="float32"){if(p<0||h>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+h+"].")}else{if(n.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+n.dtype+". Please use float32 or int32 tensors.");if(p<0||h>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+h+"].")}for(m=n.dtype==="float32"?255:1,g=new Uint8ClampedArray(i*o*4),v=0;v<o*i;++v)y=void 0,x=void 0,w=void 0,b=void 0,a===1?(y=s[v]*m,x=s[v]*m,w=s[v]*m,b=255):a===3?(y=s[3*v]*m,x=s[3*v+1]*m,w=s[3*v+2]*m,b=255):a===4&&(y=s[4*v]*m,x=s[4*v+1]*m,w=s[4*v+2]*m,b=s[4*v+3]*m),g[(C=4*v)+0]=Math.round(y),g[C+1]=Math.round(x),g[C+2]=Math.round(w),g[C+3]=Math.round(b);return t!=null&&(t.width=i,t.height=o,E=t.getContext("2d"),S=new ImageData(g,i,o),E.putImageData(S,0,0)),n!==e&&n.dispose(),[2,g]}})})},fromPixels:uO}),lO=function(){function e(){}return e.prototype.getClassName=function(){return this.constructor.className},e.fromConfig=function(t,n){return new t(n)},e}(),cO=function(){function e(){this.classNameMap={}}return e.getMap=function(){return e.instance==null&&(e.instance=new e),e.instance},e.register=function(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]},e}();function Zo(e){I(e.className!=null,function(){return"Class being registered does not have the static className property defined."}),I(typeof e.className=="string",function(){return"className is required to be a string, but got type "+typeof e.className}),I(e.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),cO.register(e)}var ei=function(e){function t(){return e!==null&&e.apply(this,arguments)||this}return On(t,e),t.prototype.minimize=function(n,r,o){r===void 0&&(r=!1);var i=this.computeGradients(n,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(l){return{name:l.name,tensor:s[l.name]}});this.applyGradients(u)}else this.applyGradients(s);return Kt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(n,r){return wT(n,r)},t.prototype.dispose=function(){this.iterations_!=null&&Kt(this.iterations_)},t.prototype.saveIterations=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:J(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(n){return te(this,void 0,void 0,function(){var r;return ne(this,function(o){switch(o.label){case 0:return r=this,[4,n[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,n.slice(1)]}})})},t}(lO);Object.defineProperty(ei,Symbol.hasInstance,{value:function(e){return e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null}});var fO=function(e){function t(n,r,o){o===void 0&&(o=null);var i=e.call(this)||this;return i.learningRate=n,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=F.backend.epsilon()),i}return On(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:Z(function(){return _e(a).variable(!1)})}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:Z(function(){return _e(a).variable(!1)})});var s=Array.isArray(n)?n[i].tensor:n[o];if(s!=null){var u=r.accumulatedGrads[i].variable,l=r.accumulatedUpdates[i].variable;Z(function(){var c=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=l.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),d=l.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(c),l.assign(d);var p=f.mul(-r.learningRate).add(a);a.assign(p)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Kt(this.accumulatedGrads.map(function(n){return n.variable})),Kt(this.accumulatedUpdates.map(function(n){return n.variable})))},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){var n;return ne(this,function(r){switch(r.label){case 0:return n=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){var r;return ne(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),r=n.length/2,this.accumulatedGrads=n.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=n.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(n,r){return new n(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(ei);Zo(fO);var dO=function(e){function t(n,r){r===void 0&&(r=.1);var o=e.call(this)||this;return o.learningRate=n,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return On(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:Z(function(){return nr(a.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(n)?n[i].tensor:n[o];if(s!=null){var u=r.accumulatedGrads[i].variable;Z(function(){var l=u.add(s.square());u.assign(l);var c=s.div(l.add(F.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(c)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Kt(this.accumulatedGrads.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:return n=r.sent(),this.accumulatedGrads=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(n,r){return new n(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(ei);Zo(dO);var pO=function(e){function t(n,r,o,i){i===void 0&&(i=null);var a=e.call(this)||this;return a.learningRate=n,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],Z(function(){a.accBeta1=J(r).variable(),a.accBeta2=J(o).variable()}),i==null&&(a.epsilon=F.backend.epsilon()),a}return On(t,e),t.prototype.applyGradients=function(n){var r=this,o=Array.isArray(n)?n.map(function(i){return i.name}):Object.keys(n);Z(function(){var i=ft(1,r.accBeta1),a=ft(1,r.accBeta2);o.forEach(function(s,u){var l=F.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Z(function(){return _e(l).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:Z(function(){return _e(l).variable(!1)})});var c=Array.isArray(n)?n[u].tensor:n[s];if(c!=null){var f=r.accumulatedFirstMoment[u].variable,d=r.accumulatedSecondMoment[u].variable,p=f.mul(r.beta1).add(c.mul(1-r.beta1)),h=d.mul(r.beta2).add(c.square().mul(1-r.beta2)),m=p.div(i),g=h.div(a);f.assign(p),d.assign(h);var v=m.div(g.sqrt().add(r.epsilon)).mul(-r.learningRate).add(l);l.assign(v)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Kt(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedSecondMoment!=null&&Kt(this.accumulatedSecondMoment.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){var n;return ne(this,function(r){switch(r.label){case 0:return n=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){var r,o=this;return ne(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(n)];case 1:return n=i.sent(),Z(function(){o.accBeta1.assign(Ll(o.beta1,o.iterations_+1)),o.accBeta2.assign(Ll(o.beta2,o.iterations_+1))}),r=n.length/2,this.accumulatedFirstMoment=n.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=n.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(n,r){return new n(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(ei);Zo(pO);var hO=function(e){function t(n,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=e.call(this)||this;return s.learningRate=n,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],Z(function(){s.iteration=J(0).variable(),s.accBeta1=J(r).variable()}),i==null&&(s.epsilon=F.backend.epsilon()),s}return On(t,e),t.prototype.applyGradients=function(n){var r=this,o=Array.isArray(n)?n.map(function(i){return i.name}):Object.keys(n);Z(function(){var i=ft(1,r.accBeta1),a=In(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var l=F.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:_e(l).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:_e(l).variable(!1)});var c=Array.isArray(n)?n[u].tensor:n[s];if(c!=null){var f=r.accumulatedFirstMoment[u].variable,d=r.accumulatedWeightedInfNorm[u].variable,p=f.mul(r.beta1).add(c.mul(1-r.beta1)),h=d.mul(r.beta2),m=c.abs(),g=h.maximum(m);f.assign(p),d.assign(g);var v=a.div(i).mul(p.div(g.add(r.epsilon))).add(l);l.assign(v)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Kt(this.accumulatedFirstMoment.map(function(n){return n.variable})),this.accumulatedWeightedInfNorm!=null&&Kt(this.accumulatedWeightedInfNorm.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(n,r){return new n(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(ei);Zo(hO);var tb=function(e){function t(n){var r=e.call(this)||this;return r.learningRate=n,r.setLearningRate(n),r}return On(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,i){var a=Array.isArray(n)?n[i].tensor:n[o];if(a!=null){var s=F.registeredVariables[o];Z(function(){var u=r.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(n){this.learningRate=n,this.c!=null&&this.c.dispose(),this.c=FA(J(-n))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()]]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:if((n=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(n,r){return new n(r.learningRate)},t.className="SGD",t}(ei);Zo(tb);var vO=function(e){function t(n,r,o){o===void 0&&(o=!1);var i=e.call(this,n)||this;return i.learningRate=n,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=J(i.momentum),i}return On(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:Z(function(){return _e(a).variable(!1)})});var s=r.accumulations[i].variable,u=Array.isArray(n)?n[i].tensor:n[o];u!=null&&Z(function(){var l,c=r.m.mul(s).add(u);l=r.useNesterov?r.c.mul(u.add(c.mul(r.m))).add(a):r.c.mul(c).add(a),s.assign(c),a.assign(l)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Kt(this.accumulations.map(function(n){return n.variable}))},t.prototype.setMomentum=function(n){this.momentum=n},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){return ne(this,function(n){switch(n.label){case 0:return[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){return ne(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(n)];case 1:return n=r.sent(),this.accumulations=n.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(n,r){return new n(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(tb);Zo(vO);var mO=function(e){function t(n,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=e.call(this)||this;if(s.learningRate=n,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=F.backend.epsilon()),n==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return On(t,e),t.prototype.applyGradients=function(n){var r=this;(Array.isArray(n)?n.map(function(o){return o.name}):Object.keys(n)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:Z(function(){return _e(a).variable(!1)})}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:Z(function(){return _e(a).variable(!1)})}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:Z(function(){return _e(a).variable(!1)})});var s=Array.isArray(n)?n[i].tensor:n[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,l=r.accumulatedMoments[i].variable;Z(function(){var c=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,d=f.mul(r.decay).add(s.mul(1-r.decay)),p=l.mul(r.momentum).add(s.mul(r.learningRate).div(c.sub(d.square().add(r.epsilon)).sqrt()));u.assign(c),f.assign(d),l.assign(p);var h=a.sub(p);a.assign(h)}else{var m=u.mul(r.decay).add(s.square().mul(1-r.decay));p=l.mul(r.momentum).add(s.mul(r.learningRate).div(m.add(r.epsilon).sqrt())),u.assign(m),l.assign(p),h=a.sub(p),a.assign(h)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Kt(this.accumulatedMeanSquares.map(function(n){return n.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Kt(this.accumulatedMeanGrads.map(function(n){return n.variable})),this.accumulatedMoments!=null&&Kt(this.accumulatedMoments.map(function(n){return n.variable}))},t.prototype.getWeights=function(){return te(this,void 0,void 0,function(){var n;return ne(this,function(r){switch(r.label){case 0:return n=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&n.push.apply(n,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(n.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(n){return te(this,void 0,void 0,function(){var r;return ne(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(n)];case 1:return n=o.sent(),r=this.centered?n.length/3:n.length/2,this.accumulatedMeanSquares=n.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=n.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=n.slice(2*r,3*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(n,r){return new n(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(ei);Zo(mO);Ve.prototype.squaredDifference=function(e){return mw(this,e)},W=$F;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wp=function(e,t){return Wp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},Wp(e,t)};function pe(e,t){Wp(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Tt=function(){return Tt=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tt.apply(this,arguments)};function ie(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(c){try{l(r.next(c))}catch(f){a(f)}}function u(c){try{l(r.throw(c))}catch(f){a(f)}}function l(c){c.done?i(c.value):o(c.value).then(s,u)}l((r=r.apply(e,t||[])).next())})}function ae(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(c){l=[6,c],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function qa(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var Lo=function(){function e(t,n){if(!zo(t)||!zo(n))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:n}));this._width=t,this._height=n}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),e.prototype.reverse=function(){return new e(1/this.width,1/this.height)},e}();function Nc(e,t){return e instanceof Ve&&e.shape.length===t}function gO(e){return Nc(e,2)}function Dc(e){return Nc(e,3)}function lo(e){return Nc(e,4)}function yO(e){return e%1!==0}function Y0(e){return e%2===0}function xO(e,t){t===void 0&&(t=2);var n=Math.pow(10,t);return Math.floor(e*n)/n}function Q0(e){return e&&e.width&&e.height}function wO(e,t){var n=e.width,r=e.height,o=t/Math.max(r,n);return new Lo(Math.round(n*o),Math.round(r*o))}function Iv(e){return e.reduce(function(t,n){return t.add(n)},new Ie(0,0)).div(new Ie(e.length,e.length))}function xs(e,t,n){return Array(e).fill(0).map(function(r,o){return t+o*n})}function zo(e){return!!e&&e!==1/0&&e!==-1/0&&!isNaN(e)||e===0}function J0(e){return zo(e)&&0<=e&&e<=1}var Ie=function(){function e(t,n){this._x=t,this._y=n}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.sub=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.mul=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.div=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.abs=function(){return new e(Math.abs(this.x),Math.abs(this.y))},e.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e}(),kr=function(){function e(t,n){n===void 0&&(n=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(zo),i=[r.x,r.y,r.width,r.height].every(zo);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],l=a[2],c=a[3];e.assertIsValidBox({x:s,y:u,width:l,height:c},"Box.constructor",n),this._x=s,this._y=u,this._width=l,this._height=c}return e.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(zo)},e.assertIsValidBox=function(t,n,r){if(r===void 0&&(r=!1),!e.isRect(t))throw new Error(n+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(n+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(e.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topLeft",{get:function(){return new Ie(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"topRight",{get:function(){return new Ie(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomLeft",{get:function(){return new Ie(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bottomRight",{get:function(){return new Ie(this.right,this.bottom)},enumerable:!0,configurable:!0}),e.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),n=t[0],r=t[1],o=t[2],i=t[3];return new e({x:n,y:r,width:o,height:i})},e.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),n=t[0],r=t[1],o=t[2],i=t[3];return new e({x:n,y:r,width:o,height:i})},e.prototype.toSquare=function(){var t=this,n=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(n-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new e({x:n,y:r,width:o,height:i})},e.prototype.rescale=function(t){var n=Q0(t)?t.width:t,r=Q0(t)?t.height:t;return new e({x:this.x*n,y:this.y*r,width:this.width*n,height:this.height*r})},e.prototype.pad=function(t,n){var r=[this.x-t/2,this.y-n/2,this.width+t,this.height+n],o=r[0],i=r[1],a=r[2],s=r[3];return new e({x:o,y:i,width:a,height:s})},e.prototype.clipAtImageBorders=function(t,n){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),l=Math.max(i,0),c=a-u,f=s-l,d=Math.min(c,t-u),p=Math.min(f,n-l);return new e({x:u,y:l,width:d,height:p}).floor()},e.prototype.shift=function(t,n){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+n;return new e({x:a,y:s,width:o,height:i})},e.prototype.padAtBorders=function(t,n){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,l=this.left,c=this.top,f=this.right,d=this.bottom;return f>n&&(s=-f+n+r,f=n),d>t&&(u=-d+t+o,d=t),l<1&&(u=2-l,l=1),c<1&&(u=2-c,c=1),{dy:a,edy:u,dx:i,edx:s,y:c,ey:d,x:l,ex:f,w:r,h:o}},e.prototype.calibrate=function(t){return new e({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},e}(),Pc=function(e){pe(t,e);function t(n,r,o,i,a){return a===void 0&&(a=!1),e.call(this,{left:n,top:r,right:o,bottom:i},a)||this}return t}(kr),nb=function(){function e(t,n,r,o,i){this._imageDims=new Lo(i.width,i.height),this._score=t,this._classScore=n,this._className=r,this._box=new kr(o).rescale(this._imageDims)}return Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeBox",{get:function(){return new kr(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),e.prototype.forSize=function(t,n){return new e(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:n})},e}(),Bn=function(e){pe(t,e);function t(n,r,o){return e.call(this,n,n,"",r,o)||this}return t.prototype.forSize=function(n,r){var o=e.prototype.forSize.call(this,n,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(nb);function bO(e,t,n){n===void 0&&(n=!0);var r=Math.max(0,Math.min(e.right,t.right)-Math.max(e.left,t.left)),o=Math.max(0,Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)),i=r*o;return n?i/(e.area+t.area-i):i/Math.min(e.area,t.area)}function CO(e){var t=e.map(function(s){return s.x}),n=e.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=n.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=n.reduce(function(s,u){return s<u?u:s},0);return new Pc(r,o,i,a)}function ws(e,t,n,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,l=[],c=0;c<u.length;c++){var f=u[c],d=e[s],p=e[f];l.push(bO(d,p,r))}o=o.filter(function(h,m){return l[m]<=n})};o.length>0;)a();return i}function Ws(e,t){return Z(function(){var n=t[0],r=t[1],o=t[2],i=nr(qa(e.shape.slice(0,3),[1]),n),a=nr(qa(e.shape.slice(0,3),[1]),r),s=nr(qa(e.shape.slice(0,3),[1]),o),u=ut([i,a,s],3);return ft(e,u)})}function EO(e,t){return t===void 0&&(t=!1),Z(function(){var n=e.shape.slice(1),r=n[0],o=n[1];if(r===o)return e;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(p){var h=e.shape.slice();return h[s]=p,nr(h,0)},l=u(a),c=i-l.shape[s],f=t&&c?u(c):null,d=[f,e,l].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return ut(d,s)})}function ud(e){return 1/(1+Math.exp(-e))}var Av=function(e){pe(t,e);function t(n,r,o,i,a){return a===void 0&&(a=!1),e.call(this,{x:n,y:r,width:o,height:i},a)||this}return t}(kr),SO=.5,_O=.43,kO=.45,bs=function(){function e(t,n,r){r===void 0&&(r=new Ie(0,0));var o=n.width,i=n.height;this._imgDims=new Lo(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new Ie(o,i)).add(r)})}return Object.defineProperty(e.prototype,"shift",{get:function(){return new Ie(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(n){return n.sub(t._shift).div(new Ie(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),e.prototype.forSize=function(t,n){return new this.constructor(this.relativePositions,{width:t,height:n})},e.prototype.shiftBy=function(t,n){return new this.constructor(this.relativePositions,this._imgDims,new Ie(t,n))},e.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},e.prototype.align=function(t,n){if(n===void 0&&(n={}),t){var r=t instanceof Bn?t.box.floor():new kr(t);return this.shiftBy(r.x,r.y).align(null,n)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},n),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},e.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),n=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(n)+i(r))/2,s=Math.floor(a/kO),u=Iv(t),l=Math.floor(Math.max(0,u.x-SO*s)),c=Math.floor(Math.max(0,u.y-_O*s));return new Av(l,c,Math.min(s,this.imageWidth+l),Math.min(s,this.imageHeight+c))},e.prototype.alignMinBbox=function(t){var n=CO(this.positions);return n.pad(n.width*t,n.height*t)},e.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},e}(),RO=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var n=this.positions;return[n[0],n[1],Iv([n[3],n[4]])]},t}(bs),IO=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Iv)},t}(bs),Z0=function(){function e(t,n){this._label=t,this._distance=n}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),e.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+xO(this.distance)+")":"")},e}(),e1=function(e){pe(t,e);function t(n,r){var o=e.call(this,n)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(n,r){if(kr.assertIsValidBox(n,r),!zo(n.label))throw new Error(r+" - expected property label ("+n.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(kr),Fa=function(){function e(t,n){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(n)||n.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=n}return Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),e.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},e.fromJSON=function(t){var n=t.descriptors.map(function(r){return new Float32Array(r)});return new e(t.label,n)},e}();(function(e){pe(t,e);function t(n,r,o,i){var a=e.call(this,n,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(n,r){if(e1.assertIsValidLabeledBox(n,r),!J0(n.score)||!J0(n.classScore))throw new Error(r+" - expected properties score ("+n.score+") and ("+n.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(e1);function rb(e){return e.detection instanceof Bn}function Cs(e,t){var n={detection:t};return Object.assign({},e,n)}function ob(){var e=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:e,readFile:t}}function ib(e){var t="";if(!e)try{e=require("fs")}catch(r){t=r.toString()}var n=e?function(r){return new Promise(function(o,i){e.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:n}}function ab(){var e=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,n=function(){if(e)return new e;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=ib();return Tt({Canvas:e||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:n,createImageElement:r,fetch:o},i)}function sb(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function ub(){return typeof global=="object"&&typeof require=="function"&&typeof Ub<"u"&&typeof process<"u"&&!!process.version}var ot;function AO(){if(!ot)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return ot}function jp(e){ot=e}function Tv(){sb()&&jp(ob()),ub()&&jp(ab())}function TO(e){if(ot||Tv(),!ot)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=e.Canvas,n=t===void 0?ot.Canvas:t,r=e.Image,o=r===void 0?ot.Image:r;ot.Canvas=n,ot.Image=o,ot.createCanvasElement=e.createCanvasElement||function(){return new n},ot.createImageElement=e.createImageElement||function(){return new o},ot.ImageData=e.ImageData||ot.ImageData,ot.Video=e.Video||ot.Video,ot.fetch=e.fetch||ot.fetch,ot.readFile=e.readFile||ot.readFile}var _t={getEnv:AO,setEnv:jp,initialize:Tv,createBrowserEnv:ob,createFileSystem:ib,createNodejsEnv:ab,monkeyPatch:TO,isBrowser:sb,isNodejs:ub};Tv();function Nv(e){return!_t.isNodejs()&&typeof e=="string"?document.getElementById(e):e}function Rr(e){var t=_t.getEnv(),n=t.Canvas,r=t.CanvasRenderingContext2D;if(e instanceof r)return e;var o=Nv(e);if(!(o instanceof n))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var Qr;(function(e){e.TOP_LEFT="TOP_LEFT",e.TOP_RIGHT="TOP_RIGHT",e.BOTTOM_LEFT="BOTTOM_LEFT",e.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Qr||(Qr={}));var lb=function(){function e(t){t===void 0&&(t={});var n=t.anchorPosition,r=t.backgroundColor,o=t.fontColor,i=t.fontSize,a=t.fontStyle,s=t.padding;this.anchorPosition=n||Qr.TOP_LEFT,this.backgroundColor=r||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=i||14,this.fontStyle=a||"Georgia",this.padding=s||4}return e}(),NO=function(){function e(t,n,r){r===void 0&&(r={}),this.text=typeof t=="string"?[t]:t instanceof e?t.text:t,this.anchor=n,this.options=new lb(r)}return e.prototype.measureWidth=function(t){var n=this.options.padding;return this.text.map(function(r){return t.measureText(r).width}).reduce(function(r,o){return r<o?o:r},0)+2*n},e.prototype.measureHeight=function(){var t=this.options,n=t.fontSize,r=t.padding;return this.text.length*n+2*r},e.prototype.getUpperLeft=function(t,n){var r=this.options.anchorPosition,o=r===Qr.BOTTOM_RIGHT||r===Qr.TOP_RIGHT,i=r===Qr.BOTTOM_LEFT||r===Qr.BOTTOM_RIGHT,a=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-a:this.anchor.x,l=i?this.anchor.y-s:this.anchor.y;if(n){var c=n.width,f=n.height,d=Math.max(Math.min(u,c-a),0),p=Math.max(Math.min(l,f-s),0);return{x:d,y:p}}return{x:u,y:l}},e.prototype.draw=function(t){var n=Nv(t),r=Rr(n),o=this.options,i=o.backgroundColor,a=o.fontColor,s=o.fontSize,u=o.fontStyle,l=o.padding;r.font=s+"px "+u;var c=this.measureWidth(r),f=this.measureHeight();r.fillStyle=i;var d=this.getUpperLeft(r,n);r.fillRect(d.x,d.y,c,f),r.fillStyle=a,this.text.forEach(function(p,h){var m=l+d.x,g=l+d.y+(h+1)*s;r.fillText(p,m,g)})},e}(),DO=function(){function e(t){t===void 0&&(t={});var n=t.boxColor,r=t.lineWidth,o=t.label,i=t.drawLabelOptions;this.boxColor=n||"rgba(0, 0, 255, 1)",this.lineWidth=r||2,this.label=o;var a={anchorPosition:Qr.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new lb(Object.assign({},a,i))}return e}(),PO=function(){function e(t,n){n===void 0&&(n={}),this.box=new kr(t),this.options=new DO(n)}return e.prototype.draw=function(t){var n=Rr(t),r=this.options,o=r.boxColor,i=r.lineWidth,a=this.box,s=a.x,u=a.y,l=a.width,c=a.height;n.strokeStyle=o,n.lineWidth=i,n.strokeRect(s,u,l,c);var f=this.options.label;f&&new NO([f],{x:s-i/2,y:u},this.options.drawLabelOptions).draw(t)},e}();function cb(e){var t=_t.getEnv(),n=t.Image,r=t.Video;return e instanceof n&&e.complete||e instanceof r&&e.readyState>=3}function FO(e){return new Promise(function(t,n){if(e instanceof _t.getEnv().Canvas||cb(e))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),n(i))}e.addEventListener("load",r),e.addEventListener("error",o)})}function OO(e){return new Promise(function(t,n){if(!(e instanceof Blob))return n("bufferToImage - expected buf to be of type: Blob");var r=new FileReader;r.onload=function(){if(typeof r.result!="string")return n("bufferToImage - expected reader.result to be a string, in onload");var o=_t.getEnv().createImageElement();o.onload=function(){return t(o)},o.onerror=n,o.src=r.result},r.onerror=n,r.readAsDataURL(e)})}function Dv(e){var t=_t.getEnv(),n=t.Image,r=t.Video;return e instanceof n?new Lo(e.naturalWidth,e.naturalHeight):e instanceof r?new Lo(e.videoWidth,e.videoHeight):new Lo(e.width,e.height)}function Fc(e){var t=e.width,n=e.height,r=_t.getEnv().createCanvasElement,o=r();return o.width=t,o.height=n,o}function Oc(e,t){var n=_t.getEnv().ImageData;if(!(e instanceof n)&&!cb(e))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=t||Dv(e),o=r.width,i=r.height,a=Fc({width:o,height:i});return e instanceof n?Rr(a).putImageData(e,0,0):Rr(a).drawImage(e,0,0,o,i),a}function MO(e,t){return ie(this,void 0,void 0,function(){var n,r,o,i,a,s;return ae(this,function(u){switch(u.label){case 0:return n=t||_t.getEnv().createCanvasElement(),r=e.shape.slice(lo(e)?1:0),o=r[0],i=r[1],a=r[2],s=Z(function(){return e.as3D(o,i,a).toInt()}),[4,Rv.toPixels(s,n)];case 1:return u.sent(),s.dispose(),[2,n]}})})}function t1(e){var t=_t.getEnv(),n=t.Image,r=t.Canvas,o=t.Video;return e instanceof n||e instanceof r||e instanceof o}function BO(e,t,n){n===void 0&&(n=!1);var r=_t.getEnv(),o=r.Image,i=r.Canvas;if(!(e instanceof o||e instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=Dv(e),s=t/Math.max(a.height,a.width),u=s*a.width,l=s*a.height,c=Fc({width:t,height:t}),f=e instanceof i?e:Oc(e),d=Math.abs(u-l)/2,p=n&&u<l?d:0,h=n&&l<u?d:0;return Rr(c).drawImage(f,p,h,u,l),c}var jl=function(){function e(t,n){var r=this;if(n===void 0&&(n=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=n,this._batchSize=t.length,t.forEach(function(o,i){if(Dc(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(lo(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof _t.getEnv().Canvas?o:Oc(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(e.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"reshapedInputDimensions",{get:function(){var t=this;return xs(this.batchSize,0,1).map(function(n,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),e.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},e.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},e.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},e.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},e.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var n=this.getInputWidth(t),r=this.getInputHeight(t);return wO({width:n,height:r},this.inputSize)},e.prototype.toBatchTensor=function(t,n){var r=this;return n===void 0&&(n=!0),this._inputSize=t,Z(function(){var o=xs(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof Ve){var u=lo(s)?s:s.expandDims();return u=EO(u,n),(u.shape[1]!==t||u.shape[2]!==t)&&(u=bv.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof _t.getEnv().Canvas)return Rv.fromPixels(BO(s,t,n));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=un(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},e}();function yt(e){return ie(this,void 0,void 0,function(){var t,n,r;return ae(this,function(o){switch(o.label){case 0:if(e instanceof jl)return[2,e];if(t=Array.isArray(e)?e:[e],!t.length)throw new Error("toNetInput - empty array passed as input");return n=function(i){return Array.isArray(e)?" at input index "+i+":":""},r=t.map(Nv),r.forEach(function(i,a){if(!t1(i)&&!Dc(i)&&!lo(i))throw typeof t[a]=="string"?new Error("toNetInput -"+n(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+n(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(lo(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+n(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return t1(i)&&FO(i)}))];case 1:return o.sent(),[2,new jl(r,Array.isArray(e))]}})})}function Pv(e,t){return ie(this,void 0,void 0,function(){var n,r,o,i,a,s,u;return ae(this,function(l){switch(l.label){case 0:return n=_t.getEnv().Canvas,r=e,e instanceof n?[3,5]:[4,yt(e)];case 1:if(o=l.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof n?(a=i,[3,4]):[3,2];case 2:return[4,MO(i)];case 3:a=l.sent(),l.label=4;case 4:r=a,l.label=5;case 5:return s=Rr(r),u=t.map(function(c){return c instanceof Bn?c.forSize(r.width,r.height).box.floor():c}).map(function(c){return c.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(c){var f=c.x,d=c.y,p=c.width,h=c.height,m=Fc({width:p,height:h});return Rr(m).putImageData(s.getImageData(f,d,p,h),0,0),m})]}})})}function Fv(e,t){return ie(this,void 0,void 0,function(){return ae(this,function(n){if(!Dc(e)&&!lo(e))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(lo(e)&&e.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,Z(function(){var r=e.shape.slice(lo(e)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(l){return l instanceof Bn?l.forSize(i,o).box:l}).map(function(l){return l.clipAtImageBorders(i,o)}),u=s.map(function(l){var c=l.x,f=l.y,d=l.width,p=l.height;return Bw(e.as3D(o,i,a),[f,c,0],[p,d,a])});return u})]})})}function fb(e,t){return ie(this,void 0,void 0,function(){var n,r;return ae(this,function(o){switch(o.label){case 0:return n=_t.getEnv().fetch,[4,n(e,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function LO(e){return ie(this,void 0,void 0,function(){var t,n;return ae(this,function(r){switch(r.label){case 0:return[4,fb(e)];case 1:return t=r.sent(),[4,t.blob()];case 2:if(n=r.sent(),!n.type.startsWith("image/"))throw new Error("fetchImage - expected blob type to be of type image/*, instead have: "+n.type+", for url: "+t.url);return[2,OO(n)]}})})}function zO(e){return ie(this,void 0,void 0,function(){return ae(this,function(t){switch(t.label){case 0:return[4,fb(e)];case 1:return[2,t.sent().json()]}})})}function db(e,t){var n=t+"-weights_manifest.json";if(!e)return{modelBaseUri:"",manifestUri:n};if(e==="/")return{modelBaseUri:"/",manifestUri:"/"+n};var r=e.startsWith("http://")?"http://":e.startsWith("https://")?"https://":"";e=e.replace(r,"");var o=e.split("/").filter(function(s){return s}),i=e.endsWith(".json")?o[o.length-1]:n,a=r+(e.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=e.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function WO(e,t){return ie(this,void 0,void 0,function(){var n,r,o,i;return ae(this,function(a){switch(a.label){case 0:return n=db(e,t),r=n.manifestUri,o=n.modelBaseUri,[4,zO(r)];case 1:return i=a.sent(),[2,eb.loadWeights(i,o)]}})})}function jO(e,t,n){n===void 0&&(n=!1);var r=n?Dv(t):t,o=r.width,i=r.height;return e.width=o,e.height=i,{width:o,height:i}}var Dr=function(){function e(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(e.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),e.prototype.getParamFromPath=function(t){var n=this.traversePropertyPath(t),r=n.obj,o=n.objProp;return r[o]},e.prototype.reassignParamFromPath=function(t,n){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=n},e.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(n){var r=n.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},e.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof na})},e.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof na)})},e.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(n){var r=n.path,o=n.tensor;t.reassignParamFromPath(r,o.variable())})},e.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(n){var r=n.path,o=n.tensor,i=Ct(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(n){if(t&&n.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+n.path);n.tensor.dispose()}),this._params=void 0},e.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var n=t.tensor;return Array.from(n.dataSync())}).reduce(function(t,n){return t.concat(n)}))},e.prototype.load=function(t){return ie(this,void 0,void 0,function(){return ae(this,function(n){switch(n.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return n.sent(),[2]}})})},e.prototype.loadFromUri=function(t){return ie(this,void 0,void 0,function(){var n;return ae(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,WO(t,this.getDefaultModelName())];case 1:return n=r.sent(),this.loadFromWeightMap(n),[2]}})})},e.prototype.loadFromDisk=function(t){return ie(this,void 0,void 0,function(){var n,r,o,i,a,s,u,l,c,f;return ae(this,function(d){switch(d.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return n=_t.getEnv().readFile,r=db(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(p){return Promise.all(p.map(function(h){return n(h).then(function(m){return m.buffer})}))},s=eb.weightsLoaderFactory(a),c=(l=JSON).parse,[4,n(o)];case 1:return u=c.apply(l,[d.sent().toString()]),[4,s(u,i)];case 2:return f=d.sent(),this.loadFromWeightMap(f),[2]}})})},e.prototype.loadFromWeightMap=function(t){var n=this.extractParamsFromWeigthMap(t),r=n.paramMappings,o=n.params;this._paramMappings=r,this._params=o},e.prototype.extractWeights=function(t){var n=this.extractParams(t),r=n.paramMappings,o=n.params;this._paramMappings=r,this._params=o},e.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var n=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=n.obj,o=n.objProp;if(!r||!o||!(r[o]instanceof Ve))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},e}();function an(e,t,n){return Z(function(){var r=mv(e,t.depthwise_filter,t.pointwise_filter,n,"same");return r=we(r,t.bias),r})}function ld(e,t,n){return n===void 0&&(n=!1),Z(function(){var r=He(n?we(En(e,t.conv0.filters,[2,2],"same"),t.conv0.bias):an(e,t.conv0,[2,2])),o=an(r,t.conv1,[1,1]),i=He(we(r,o)),a=an(i,t.conv2,[1,1]);return He(we(r,we(o,a)))})}function xu(e,t,n,r){return n===void 0&&(n=!1),r===void 0&&(r=!0),Z(function(){var o=He(n?we(En(e,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):an(e,t.conv0,r?[2,2]:[1,1])),i=an(o,t.conv1,[1,1]),a=He(we(o,i)),s=an(a,t.conv2,[1,1]),u=He(we(o,we(i,s))),l=an(u,t.conv3,[1,1]);return He(we(o,we(i,we(s,l))))})}function Pn(e,t,n,r){return n===void 0&&(n="same"),r===void 0&&(r=!1),Z(function(){var o=we(En(e,t.filters,[1,1],n),t.bias);return r?He(o):o})}function Pr(e,t){Object.keys(e).forEach(function(n){t.some(function(r){return r.originalPath===n})||e[n].dispose()})}function Mc(e,t){return function(n,r,o,i){var a=jt(e(n*r*o*o),[o,o,n,r]),s=nt(e(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function Ov(e,t){return function(n,r,o){var i=so(e(n*r),[n,r]),a=nt(e(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var pb=function(){function e(t,n,r){this.depthwise_filter=t,this.pointwise_filter=n,this.bias=r}return e}();function Mv(e,t){return function(n,r,o){var i=jt(e(9*n),[3,3,n,1]),a=jt(e(n*r),[1,1,n,r]),s=nt(e(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new pb(i,a,s)}}function Bv(e){return function(t){var n=e(t+"/depthwise_filter",4),r=e(t+"/pointwise_filter",4),o=e(t+"/bias",1);return new pb(n,r,o)}}function xo(e,t){return function(n,r,o){var i=e[n];if(!Nc(i,r))throw new Error("expected weightMap["+n+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:n,paramPath:o||n}),i}}function Fr(e){var t=e;function n(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:n,getRemainingWeights:r}}function hb(e,t){var n=Mc(e,t),r=Mv(e,t);function o(a,s,u,l){l===void 0&&(l=!1);var c=l?n(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),d=r(s,s,u+"/conv2");return{conv0:c,conv1:f,conv2:d}}function i(a,s,u,l){l===void 0&&(l=!1);var c=o(a,s,u,l),f=c.conv0,d=c.conv1,p=c.conv2,h=r(s,s,u+"/conv3");return{conv0:f,conv1:d,conv2:p,conv3:h}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function $O(e){var t=[],n=Fr(e),r=n.extractWeights,o=n.getRemainingWeights,i=hb(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),l=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:l}}}function vb(e){return function(t){var n=e(t+"/filters",4),r=e(t+"/bias",1);return{filters:n,bias:r}}}function mb(e,t){var n=xo(e,t),r=vb(n),o=Bv(n);function i(s,u){u===void 0&&(u=!1);var l=u?r(s+"/conv0"):o(s+"/conv0"),c=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:l,conv1:c,conv2:f}}function a(s,u){u===void 0&&(u=!1);var l=u?r(s+"/conv0"):o(s+"/conv0"),c=o(s+"/conv1"),f=o(s+"/conv2"),d=o(s+"/conv3");return{conv0:l,conv1:c,conv2:f,conv3:d}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function UO(e){var t=[],n=mb(e,t).extractDenseBlock4Params,r={dense0:n("dense0",!0),dense1:n("dense1"),dense2:n("dense2"),dense3:n("dense3")};return Pr(e,t),{params:r,paramMappings:t}}var gb=function(e){pe(t,e);function t(){return e.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(n){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return Z(function(){var o=n.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Ws(o,i).div(J(255)),s=xu(a,r.dense0,!0);return s=xu(s,r.dense1),s=xu(s,r.dense2),s=xu(s,r.dense3),s=Ls(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(n){return UO(n)},t.prototype.extractParams=function(n){return $O(n)},t}(Dr);function Qn(e,t){return Z(function(){return we(Ic(e,t.weights),t.bias)})}function VO(e,t,n){var r=[],o=Fr(e),i=o.extractWeights,a=o.getRemainingWeights,s=Ov(i,r),u=s(t,n,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function HO(e){var t=[],n=xo(e,t);function r(i){var a=n(i+"/weights",2),s=n(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return Pr(e,t),{params:o,paramMappings:t}}function yb(e){var t={},n={};return Object.keys(e).forEach(function(r){var o=r.startsWith("fc")?n:t;o[r]=e[r]}),{featureExtractorMap:t,classifierMap:n}}var xb=function(e){pe(t,e);function t(n,r){var o=e.call(this,n)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(n){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return Z(function(){var i=n instanceof jl?r.faceFeatureExtractor.forwardInput(n):n;return Qn(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(n){n===void 0&&(n=!0),this.faceFeatureExtractor.dispose(n),e.prototype.dispose.call(this,n)},t.prototype.loadClassifierParams=function(n){var r=this.extractClassifierParams(n),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(n){return VO(n,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(n){var r=yb(n),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),HO(i)},t.prototype.extractParams=function(n){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=n.slice(0,n.length-i),s=n.slice(n.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(Dr),n1=["neutral","happy","sad","angry","fearful","disgusted","surprised"],GO=function(){function e(t){var n=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);n1.forEach(function(r,o){n[r]=t[o]})}return e.prototype.asSortedArray=function(){var t=this;return n1.map(function(n){return{expression:n,probability:t[n]}}).sort(function(n,r){return r.probability-n.probability})},e}(),qO=function(e){pe(t,e);function t(n){return n===void 0&&(n=new gb),e.call(this,"FaceExpressionNet",n)||this}return t.prototype.forwardInput=function(n){var r=this;return Z(function(){return Tr(r.runNet(n))})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(n){return ie(this,void 0,void 0,function(){var r,o,i,a,s=this;return ae(this,function(u){switch(u.label){case 0:return[4,yt(n)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(lt(o).map(function(l){return ie(s,void 0,void 0,function(){var c;return ae(this,function(f){switch(f.label){case 0:return[4,l.data()];case 1:return c=f.sent(),l.dispose(),[2,c]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(l){return new GO(l)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(xb);function wb(e,t){var n={expressions:t};return Object.assign({},e,n)}function bb(e){return rb(e)&&e.landmarks instanceof bs&&e.unshiftedLandmarks instanceof bs&&e.alignedRect instanceof Bn}function Bc(e,t){var n=e.detection.box,r=t.shiftBy(n.x,n.y),o=r.align(),i=e.detection.imageDims,a=new Bn(e.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},e,s)}function KO(e,t){var n=Mc(e,t),r=Mv(e,t);function o(a,s,u){var l=r(a,s,u+"/separable_conv0"),c=r(s,s,u+"/separable_conv1"),f=n(a,s,1,u+"/expansion_conv");return{separable_conv0:l,separable_conv1:c,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),l=r(a,a,s+"/separable_conv1"),c=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:l,separable_conv2:c}}return{extractConvParams:n,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function XO(e,t){var n=[],r=Fr(e),o=r.extractWeights,i=r.getRemainingWeights,a=KO(o,n),s=a.extractConvParams,u=a.extractSeparableConvParams,l=a.extractReductionBlockParams,c=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),d=l(32,64,"entry_flow/reduction_block_0"),p=l(64,128,"entry_flow/reduction_block_1"),h={conv_in:f,reduction_block_0:d,reduction_block_1:p},m={};xs(t,0,1).forEach(function(x){m["main_block_"+x]=c(128,"middle_flow/main_block_"+x)});var g=l(128,256,"exit_flow/reduction_block"),v=u(256,512,"exit_flow/separable_conv"),y={reduction_block:g,separable_conv:v};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{entry_flow:h,middle_flow:m,exit_flow:y}}}function YO(e,t){var n=xo(e,t),r=vb(n),o=Bv(n);function i(s){var u=o(s+"/separable_conv0"),l=o(s+"/separable_conv1"),c=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:l,expansion_conv:c}}function a(s){var u=o(s+"/separable_conv0"),l=o(s+"/separable_conv1"),c=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:l,separable_conv2:c}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function QO(e,t){var n=[],r=YO(e,n),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),l=a("entry_flow/reduction_block_0"),c=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:l,reduction_block_1:c},d={};xs(t,0,1).forEach(function(g){d["main_block_"+g]=s("middle_flow/main_block_"+g)});var p=a("exit_flow/reduction_block"),h=i("exit_flow/separable_conv"),m={reduction_block:p,separable_conv:h};return Pr(e,n),{params:{entry_flow:f,middle_flow:d,exit_flow:m},paramMappings:n}}function Cb(e,t,n){return we(En(e,t.filters,n,"same"),t.bias)}function cd(e,t,n){n===void 0&&(n=!0);var r=n?He(e):e;return r=an(r,t.separable_conv0,[1,1]),r=an(He(r),t.separable_conv1,[1,1]),r=pt(r,[3,3],[2,2],"same"),r=we(r,Cb(e,t.expansion_conv,[2,2])),r}function JO(e,t){var n=an(He(e),t.separable_conv0,[1,1]);return n=an(He(n),t.separable_conv1,[1,1]),n=an(He(n),t.separable_conv2,[1,1]),n=we(n,e),n}var ZO=function(e){pe(t,e);function t(n){var r=e.call(this,"TinyXception")||this;return r._numMainBlocks=n,r}return t.prototype.forwardInput=function(n){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return Z(function(){var i=n.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=Ws(i,a).div(J(256)),u=He(Cb(s,o.entry_flow.conv_in,[2,2]));return u=cd(u,o.entry_flow.reduction_block_0,!1),u=cd(u,o.entry_flow.reduction_block_1),xs(r._numMainBlocks,0,1).forEach(function(l){u=JO(u,o.middle_flow["main_block_"+l])}),u=cd(u,o.exit_flow.reduction_block),u=He(an(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(n){return QO(n,this._numMainBlocks)},t.prototype.extractParams=function(n){return XO(n,this._numMainBlocks)},t}(Dr);function eM(e){var t=[],n=Fr(e),r=n.extractWeights,o=n.getRemainingWeights,i=Ov(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function tM(e){var t=[],n=xo(e,t);function r(i){var a=n(i+"/weights",2),s=n(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Pr(e,t),{params:o,paramMappings:t}}var $l;(function(e){e.FEMALE="female",e.MALE="male"})($l||($l={}));var nM=function(e){pe(t,e);function t(n){n===void 0&&(n=new ZO(2));var r=e.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=n,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(n){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return Z(function(){var i=n instanceof jl?r.faceFeatureExtractor.forwardInput(n):n,a=Ls(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=Qn(a,o.fc.age).as1D(),u=Qn(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(n){var r=this;return Z(function(){var o=r.runNet(n),i=o.age,a=o.gender;return{age:i,gender:Tr(a)}})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(n){return ie(this,void 0,void 0,function(){var r,o,i,a,s,u,l=this;return ae(this,function(c){switch(c.label){case 0:return[4,yt(n)];case 1:return r=c.sent(),[4,this.forwardInput(r)];case 2:return o=c.sent(),i=lt(o.age),a=lt(o.gender),s=i.map(function(f,d){return{ageTensor:f,genderTensor:a[d]}}),[4,Promise.all(s.map(function(f){var d=f.ageTensor,p=f.genderTensor;return ie(l,void 0,void 0,function(){var h,m,g,v,y;return ae(this,function(x){switch(x.label){case 0:return[4,d.data()];case 1:return h=x.sent()[0],[4,p.data()];case 2:return m=x.sent()[0],g=m>.5,v=g?$l.MALE:$l.FEMALE,y=g?m:1-m,d.dispose(),p.dispose(),[2,{age:h,gender:v,genderProbability:y}]}})})}))];case 3:return u=c.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(n){n===void 0&&(n=!0),this.faceFeatureExtractor.dispose(n),e.prototype.dispose.call(this,n)},t.prototype.loadClassifierParams=function(n){var r=this.extractClassifierParams(n),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(n){return eM(n)},t.prototype.extractParamsFromWeigthMap=function(n){var r=yb(n),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),tM(i)},t.prototype.extractParams=function(n){var r=1539,o=n.slice(0,n.length-r),i=n.slice(n.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(Dr),Eb=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.postProcess=function(n,r,o){var i=o.map(function(s){var u=s.width,l=s.height,c=r/Math.max(l,u);return{width:u*c,height:l*c}}),a=i.length;return Z(function(){var s=function(d,p){return un([nr([68],d),nr([68],p)],1).as2D(1,136).as1D()},u=function(d,p){var h=i[d],m=h.width,g=h.height;return p(m,g)?Math.abs(m-g)/2:0},l=function(d){return u(d,function(p,h){return p<h})},c=function(d){return u(d,function(p,h){return h<p})},f=n.mul(nr([a,136],r)).sub(un(Array.from(Array(a),function(d,p){return s(l(p),c(p))}))).div(un(Array.from(Array(a),function(d,p){return s(i[p].width,i[p].height)})));return f})},t.prototype.forwardInput=function(n){var r=this;return Z(function(){var o=r.runNet(n);return r.postProcess(o,n.inputSize,n.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(n){return ie(this,void 0,void 0,function(){var r,o,i,a=this;return ae(this,function(s){switch(s.label){case 0:return[4,yt(n)];case 1:return r=s.sent(),o=Z(function(){return lt(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,l){return ie(a,void 0,void 0,function(){var c,f,d,p,h;return ae(this,function(m){switch(m.label){case 0:return d=(f=Array).from,[4,u.data()];case 1:return c=d.apply(f,[m.sent()]),p=c.filter(function(g,v){return Y0(v)}),h=c.filter(function(g,v){return!Y0(v)}),[2,new IO(Array(68).fill(0).map(function(g,v){return new Ie(p[v],h[v])}),{height:r.getInputHeight(l),width:r.getInputWidth(l)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(xb),Sb=function(e){pe(t,e);function t(n){return n===void 0&&(n=new gb),e.call(this,"FaceLandmark68Net",n)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Eb);function rM(e){var t=[],n=mb(e,t).extractDenseBlock3Params,r={dense0:n("dense0",!0),dense1:n("dense1"),dense2:n("dense2")};return Pr(e,t),{params:r,paramMappings:t}}function oM(e){var t=[],n=Fr(e),r=n.extractWeights,o=n.getRemainingWeights,i=hb(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var iM=function(e){pe(t,e);function t(){return e.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(n){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return Z(function(){var o=n.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Ws(o,i).div(J(255)),s=ld(a,r.dense0,!0);return s=ld(s,r.dense1),s=ld(s,r.dense2),s=Ls(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(n){return rM(n)},t.prototype.extractParams=function(n){return oM(n)},t}(Dr),aM=function(e){pe(t,e);function t(n){return n===void 0&&(n=new iM),e.call(this,"FaceLandmark68TinyNet",n)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Eb);(function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t})(Sb);function sM(e,t){return we(Pt(e,t.weights),t.biases)}function Lv(e,t,n,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=En(e,a,n,o);return u=we(u,s),u=sM(u,t.scale),r?He(u):u}function uM(e,t){return Lv(e,t,[1,1],!0)}function _b(e,t){return Lv(e,t,[1,1],!1)}function kb(e,t){return Lv(e,t,[2,2],!0,"valid")}function lM(e,t){function n(s,u,l){var c=e(s),f=c.length/(u*l*l);if(yO(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+c.length+", numFilters: "+u+", filterSize: "+l);return Z(function(){return po(jt(c,[u,f,l,l]),[2,3,1,0])})}function r(s,u,l,c){var f=n(s,u,l),d=nt(e(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/bias"}),{filters:f,bias:d}}function o(s,u){var l=nt(e(s)),c=nt(e(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:l,biases:c}}function i(s,u,l,c){var f=r(s,u,l,c+"/conv"),d=o(u,c+"/scale");return{conv:f,scale:d}}function a(s,u,l,c,f){f===void 0&&(f=!1);var d=i((f?.5:1)*s,u,l,c+"/conv1"),p=i(s,u,l,c+"/conv2");return{conv1:d,conv2:p}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function cM(e){var t=Fr(e),n=t.extractWeights,r=t.getRemainingWeights,o=[],i=lM(n,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),l=s(9216,32,3,"conv32_1"),c=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),d=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),h=s(36864,64,3,"conv64_2"),m=s(36864,64,3,"conv64_3"),g=s(147456,128,3,"conv128_down",!0),v=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),w=s(589824,256,3,"conv256_1"),b=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),E=Z(function(){return po(so(n(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var S={conv32_down:u,conv32_1:l,conv32_2:c,conv32_3:f,conv64_down:d,conv64_1:p,conv64_2:h,conv64_3:m,conv128_down:g,conv128_1:v,conv128_2:y,conv256_down:x,conv256_1:w,conv256_2:b,conv256_down_out:C,fc:E};return{params:S,paramMappings:o}}function fM(e,t){var n=xo(e,t);function r(a){var s=n(a+"/scale/weights",1),u=n(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=n(a+"/conv/filters",4),u=n(a+"/conv/bias",1),l=r(a);return{conv:{filters:s,bias:u},scale:l}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function dM(e){var t=[],n=fM(e,t),r=n.extractConvLayerParams,o=n.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),l=o("conv64_down"),c=o("conv64_1"),f=o("conv64_2"),d=o("conv64_3"),p=o("conv128_down"),h=o("conv128_1"),m=o("conv128_2"),g=o("conv256_down"),v=o("conv256_1"),y=o("conv256_2"),x=o("conv256_down_out"),w=e.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!gO(w))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+w);var b={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:l,conv64_1:c,conv64_2:f,conv64_3:d,conv128_down:p,conv128_1:h,conv128_2:m,conv256_down:g,conv256_1:v,conv256_2:y,conv256_down_out:x,fc:w};return Pr(e,t),{params:b,paramMappings:t}}function $n(e,t){var n=uM(e,t.conv1);return n=_b(n,t.conv2),n=we(n,e),n=He(n),n}function wu(e,t){var n=kb(e,t.conv1);n=_b(n,t.conv2);var r=Ls(e,2,2,"valid"),o=Le(r.shape),i=r.shape[3]!==n.shape[3],a=r.shape[1]!==n.shape[1]||r.shape[2]!==n.shape[2];if(a){var s=qa(n.shape);s[1]=1;var u=Le(s);n=ut([n,u],1);var l=qa(n.shape);l[2]=1;var c=Le(l);n=ut([n,c],2)}return r=i?ut([r,o],3):r,n=we(r,n),n=He(n),n}var pM=function(e){pe(t,e);function t(){return e.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(n){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return Z(function(){var o=n.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=Ws(o,i).div(J(256)),s=kb(a,r.conv32_down);s=pt(s,3,2,"valid"),s=$n(s,r.conv32_1),s=$n(s,r.conv32_2),s=$n(s,r.conv32_3),s=wu(s,r.conv64_down),s=$n(s,r.conv64_1),s=$n(s,r.conv64_2),s=$n(s,r.conv64_3),s=wu(s,r.conv128_down),s=$n(s,r.conv128_1),s=$n(s,r.conv128_2),s=wu(s,r.conv256_down),s=$n(s,r.conv256_1),s=$n(s,r.conv256_2),s=wu(s,r.conv256_down_out);var u=s.mean([1,2]),l=Ic(u,r.fc);return l})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(n){return ie(this,void 0,void 0,function(){var r,o,i,a=this;return ae(this,function(s){switch(s.label){case 0:return[4,yt(n)];case 1:return r=s.sent(),o=Z(function(){return lt(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(n){return dM(n)},t.prototype.extractParams=function(n){return cM(n)},t}(Dr);function Rb(e,t){var n={descriptor:t};return Object.assign({},e,n)}function Ib(e,t){var n={age:t};return Object.assign({},e,n)}function Ab(e,t,n){var r={gender:t,genderProbability:n};return Object.assign({},e,r)}var Tb=function(){function e(t){var n=t===void 0?{}:t,r=n.minFaceSize,o=n.scaleFactor,i=n.maxNumScales,a=n.scoreThresholds,s=n.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(e.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),e}();function hM(e,t){function n(u,l){var c=jt(e(9*u),[3,3,u,1]),f=nt(e(u)),d=nt(e(u)),p=nt(e(u)),h=nt(e(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/batch_norm_scale"},{paramPath:l+"/batch_norm_offset"},{paramPath:l+"/batch_norm_mean"},{paramPath:l+"/batch_norm_variance"}),{filters:c,batch_norm_scale:f,batch_norm_offset:d,batch_norm_mean:p,batch_norm_variance:h}}function r(u,l,c,f,d){var p=jt(e(u*l*c*c),[c,c,u,l]),h=nt(e(l));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(d?"batch_norm_offset":"bias")}),{filters:p,bias:h}}function o(u,l,c,f){var d=r(u,l,c,f,!0),p=d.filters,h=d.bias;return{filters:p,batch_norm_offset:h}}function i(u,l,c){var f=n(u,c+"/depthwise_conv"),d=o(u,l,1,c+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:d}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),l=i(32,64,"mobilenetv1/conv_1"),c=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),d=i(128,256,"mobilenetv1/conv_4"),p=i(256,256,"mobilenetv1/conv_5"),h=i(256,512,"mobilenetv1/conv_6"),m=i(512,512,"mobilenetv1/conv_7"),g=i(512,512,"mobilenetv1/conv_8"),v=i(512,512,"mobilenetv1/conv_9"),y=i(512,512,"mobilenetv1/conv_10"),x=i(512,512,"mobilenetv1/conv_11"),w=i(512,1024,"mobilenetv1/conv_12"),b=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:l,conv_2:c,conv_3:f,conv_4:d,conv_5:p,conv_6:h,conv_7:m,conv_8:g,conv_9:v,conv_10:y,conv_11:x,conv_12:w,conv_13:b}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),l=o(256,512,3,"prediction_layer/conv_1"),c=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),d=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),h=o(256,64,1,"prediction_layer/conv_6"),m=o(64,128,3,"prediction_layer/conv_7"),g=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),v=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),w=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),b=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),E=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),R=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),k=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),D=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),T={box_encoding_predictor:g,class_predictor:v},z={box_encoding_predictor:y,class_predictor:x},L={box_encoding_predictor:w,class_predictor:b},$={box_encoding_predictor:C,class_predictor:E},V={box_encoding_predictor:S,class_predictor:R},U={box_encoding_predictor:k,class_predictor:D};return{conv_0:u,conv_1:l,conv_2:c,conv_3:f,conv_4:d,conv_5:p,conv_6:h,conv_7:m,box_predictor_0:T,box_predictor_1:z,box_predictor_2:L,box_predictor_3:$,box_predictor_4:V,box_predictor_5:U}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function vM(e){var t=[],n=Fr(e),r=n.extractWeights,o=n.getRemainingWeights,i=hM(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),l=s(),c=tv(r(5118*4),[1,5118,4]),f={extra_dim:c};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:l,output_layer:f},paramMappings:t}}function mM(e,t){var n=xo(e,t);function r(l,c,f){var d=n(l+"/Conv2d_"+c+"_pointwise/weights",4,f+"/filters"),p=n(l+"/Conv2d_"+c+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:d,batch_norm_offset:p}}function o(l){var c="mobilenetv1/conv_"+l,f="MobilenetV1/Conv2d_"+l+"_depthwise",d=c+"/depthwise_conv",p=c+"/pointwise_conv",h=n(f+"/depthwise_weights",4,d+"/filters"),m=n(f+"/BatchNorm/gamma",1,d+"/batch_norm_scale"),g=n(f+"/BatchNorm/beta",1,d+"/batch_norm_offset"),v=n(f+"/BatchNorm/moving_mean",1,d+"/batch_norm_mean"),y=n(f+"/BatchNorm/moving_variance",1,d+"/batch_norm_variance");return{depthwise_conv:{filters:h,batch_norm_scale:m,batch_norm_offset:g,batch_norm_mean:v,batch_norm_variance:y},pointwise_conv:r("MobilenetV1",l,p)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(l,c){var f=n(l+"/weights",4,c+"/filters"),d=n(l+"/biases",1,c+"/bias");return{filters:f,bias:d}}function s(l){var c=a("Prediction/BoxPredictor_"+l+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+l+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+l+"/ClassPredictor","prediction_layer/box_predictor_"+l+"/class_predictor");return{box_encoding_predictor:c,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function gM(e){var t=[],n=mM(e,t),r=n.extractMobilenetV1Params,o=n.extractPredictionLayerParams,i=e["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!Dc(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return Pr(e,t),{params:a,paramMappings:t}}function Vn(e,t,n){return Z(function(){var r=En(e,t.filters,n,"same");return r=we(r,t.batch_norm_offset),dv(r,0,6)})}var yM=.0010000000474974513;function xM(e,t,n){return Z(function(){var r=Rc(e,t.filters,n,"same");return r=Cw(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,yM),dv(r,0,6)})}function wM(e){return[2,4,6,12].some(function(t){return t===e})?[2,2]:[1,1]}function bM(e,t){return Z(function(){var n=null,r=Vn(e,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=wM(s);r=xM(r,i.depthwise_conv,u),r=Vn(r,i.pointwise_conv,[1,1]),s===11&&(n=r)}),n===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:n}})}function CM(e,t,n,r,o){var i=e.shape[0],a=Math.min(n,i),s=t.map(function(c,f){return{score:c,boxIndex:f}}).filter(function(c){return c.score>o}).sort(function(c,f){return f.score-c.score}),u=function(c){return c<=r?1:0},l=[];return s.forEach(function(c){if(!(l.length>=a)){for(var f=c.score,d=l.length-1;d>=0;--d){var p=EM(e,c.boxIndex,l[d]);if(p!==0&&(c.score*=u(p),c.score<=o))break}f===c.score&&l.push(c.boxIndex)}}),l}function EM(e,t,n){var r=e.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[n][0],r[n][2]),l=Math.min(r[n][1],r[n][3]),c=Math.max(r[n][0],r[n][2]),f=Math.max(r[n][1],r[n][3]),d=(a-o)*(s-i),p=(c-u)*(f-l);if(d<=0||p<=0)return 0;var h=Math.max(o,u),m=Math.max(i,l),g=Math.min(a,c),v=Math.min(s,f),y=Math.max(g-h,0)*Math.max(v-m,0);return y/(d+p-y)}function SM(e){var t=lt(po(e,[1,0])),n=[ft(t[2],t[0]),ft(t[3],t[1])],r=[we(t[0],In(n[0],J(2))),we(t[1],In(n[1],J(2)))];return{sizes:n,centers:r}}function _M(e,t){var n=SM(e),r=n.sizes,o=n.centers,i=lt(po(t,[1,0])),a=In(Pt(Fp(In(i[2],J(5))),r[0]),J(2)),s=we(Pt(In(i[0],J(10)),r[0]),o[0]),u=In(Pt(Fp(In(i[3],J(5))),r[1]),J(2)),l=we(Pt(In(i[1],J(10)),r[1]),o[1]);return po(un([ft(s,a),ft(l,u),we(s,a),we(l,u)]),[1,0])}function kM(e,t,n){return Z(function(){var r=e.shape[0],o=_M(An(Mi(n.extra_dim,[r,1,1]),[-1,4]),An(e,[-1,4]));o=An(o,[r,o.shape[0]/r,4]);var i=yw(rr(t,[0,0,1],[-1,-1,-1])),a=rr(i,[0,0,0],[-1,-1,1]);a=An(a,[r,a.shape[1]]);var s=lt(o),u=lt(a);return{boxes:s,scores:u}})}function fi(e,t){return Z(function(){var n=e.shape[0],r=An(Pn(e,t.box_encoding_predictor),[n,-1,1,4]),o=An(Pn(e,t.class_predictor),[n,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function RM(e,t,n){return Z(function(){var r=Vn(e,n.conv_0,[1,1]),o=Vn(r,n.conv_1,[2,2]),i=Vn(o,n.conv_2,[1,1]),a=Vn(i,n.conv_3,[2,2]),s=Vn(a,n.conv_4,[1,1]),u=Vn(s,n.conv_5,[2,2]),l=Vn(u,n.conv_6,[1,1]),c=Vn(l,n.conv_7,[2,2]),f=fi(t,n.box_predictor_0),d=fi(e,n.box_predictor_1),p=fi(o,n.box_predictor_2),h=fi(a,n.box_predictor_3),m=fi(u,n.box_predictor_4),g=fi(c,n.box_predictor_5),v=ut([f.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,h.boxPredictionEncoding,m.boxPredictionEncoding,g.boxPredictionEncoding],1),y=ut([f.classPrediction,d.classPrediction,p.classPrediction,h.classPrediction,m.classPrediction,g.classPrediction],1);return{boxPredictions:v,classPredictions:y}})}var js=function(){function e(t){var n=t===void 0?{}:t,r=n.minConfidence,o=n.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(e.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),e}(),Nb=function(e){pe(t,e);function t(){return e.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(n){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return Z(function(){var o=n.toBatchTensor(512,!1).toFloat(),i=ft(Pt(o,J(.007843137718737125)),J(1)),a=bM(i,r.mobilenetv1),s=RM(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,l=s.classPredictions;return kM(u,l,r.output_layer)})},t.prototype.forward=function(n){return ie(this,void 0,void 0,function(){var r;return ae(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,yt(n)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(n,r){return r===void 0&&(r={}),ie(this,void 0,void 0,function(){var o,i,a,s,u,l,c,f,d,p,h,m,g,v,y,x,w,b,C,E,S;return ae(this,function(R){switch(R.label){case 0:return o=new js(r),i=o.maxResults,a=o.minConfidence,[4,yt(n)];case 1:for(s=R.sent(),u=this.forwardInput(s),l=u.boxes,c=u.scores,f=l[0],d=c[0],p=1;p<l.length;p++)l[p].dispose(),c[p].dispose();return g=(m=Array).from,[4,d.data()];case 2:return h=g.apply(m,[R.sent()]),v=.5,y=CM(f,h,i,v,a),x=s.getReshapedInputDimensions(0),w=s.inputSize,b=w/x.width,C=w/x.height,E=f.arraySync(),S=y.map(function(k){var D=[Math.max(0,E[k][0]),Math.min(1,E[k][2])].map(function(U){return U*C}),T=D[0],z=D[1],L=[Math.max(0,E[k][1]),Math.min(1,E[k][3])].map(function(U){return U*b}),$=L[0],V=L[1];return new Bn(h[k],new Av($,T,V-$,z-T),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),d.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(n){return gM(n)},t.prototype.extractParams=function(n){return vM(n)},t}(Dr);(function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t})(Nb);var IM=.4,AM=[new Ie(.738768,.874946),new Ie(2.42204,2.65704),new Ie(4.30971,7.04493),new Ie(10.246,4.59428),new Ie(12.6868,11.8741)],TM=[new Ie(1.603231,2.094468),new Ie(6.041143,7.080126),new Ie(2.882459,3.518061),new Ie(4.266906,5.178857),new Ie(9.041765,10.66308)],NM=[117.001,114.697,97.404],DM="tiny_yolov2_model",PM="tiny_yolov2_separable_conv_model",bu=function(e){return typeof e=="number"};function FM(e){if(!e)throw new Error("invalid config: "+e);if(typeof e.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+e.withSeparableConvs);if(!bu(e.iouThreshold)||e.iouThreshold<0||e.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+e.iouThreshold);if(!Array.isArray(e.classes)||!e.classes.length||!e.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(e.classes));if(!Array.isArray(e.anchors)||!e.anchors.length||!e.anchors.map(function(t){return t||{}}).every(function(t){return bu(t.x)&&bu(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(e.anchors));if(e.meanRgb&&(!Array.isArray(e.meanRgb)||e.meanRgb.length!==3||!e.meanRgb.every(bu)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(e.meanRgb))}function zv(e){return Z(function(){var t=Pt(e,J(.10000000149011612));return we(He(ft(e,t)),t)})}function Lr(e,t){return Z(function(){var n=Qo(e,[[0,0],[1,1],[1,1],[0,0]]);return n=En(n,t.conv.filters,[1,1],"valid"),n=ft(n,t.bn.sub),n=Pt(n,t.bn.truediv),n=we(n,t.conv.bias),zv(n)})}function zr(e,t){return Z(function(){var n=Qo(e,[[0,0],[1,1],[1,1],[0,0]]);return n=mv(n,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),n=we(n,t.bias),zv(n)})}function OM(e,t){var n=Mc(e,t);function r(a,s){var u=nt(e(a)),l=nt(e(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:l}}function o(a,s,u){var l=n(a,s,3,u+"/conv"),c=r(s,u+"/bn");return{conv:l,bn:c}}var i=Mv(e,t);return{extractConvParams:n,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function MM(e,t,n,r){var o=Fr(e),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=OM(i,s),l=u.extractConvParams,c=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,d;if(t.withSeparableConvs){var p=r[0],h=r[1],m=r[2],g=r[3],v=r[4],y=r[5],x=r[6],w=r[7],b=r[8],C=t.isFirstLayerConv2d?l(p,h,3,"conv0"):f(p,h,"conv0"),E=f(h,m,"conv1"),S=f(m,g,"conv2"),R=f(g,v,"conv3"),k=f(v,y,"conv4"),D=f(y,x,"conv5"),T=w?f(x,w,"conv6"):void 0,z=b?f(w,b,"conv7"):void 0,L=l(b||w||x,5*n,1,"conv8");d={conv0:C,conv1:E,conv2:S,conv3:R,conv4:k,conv5:D,conv6:T,conv7:z,conv8:L}}else{var p=r[0],h=r[1],m=r[2],g=r[3],v=r[4],y=r[5],x=r[6],w=r[7],b=r[8],C=c(p,h,"conv0"),E=c(h,m,"conv1"),S=c(m,g,"conv2"),R=c(g,v,"conv3"),k=c(v,y,"conv4"),D=c(y,x,"conv5"),T=c(x,w,"conv6"),z=c(w,b,"conv7"),L=l(b,5*n,1,"conv8");d={conv0:C,conv1:E,conv2:S,conv3:R,conv4:k,conv5:D,conv6:T,conv7:z,conv8:L}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:d,paramMappings:s}}function BM(e,t){var n=xo(e,t);function r(s){var u=n(s+"/sub",1),l=n(s+"/truediv",1);return{sub:u,truediv:l}}function o(s){var u=n(s+"/filters",4),l=n(s+"/bias",1);return{filters:u,bias:l}}function i(s){var u=o(s+"/conv"),l=r(s+"/bn");return{conv:u,bn:l}}var a=Bv(n);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function LM(e,t){var n=[],r=BM(e,n),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Pr(e,n),{params:s,paramMappings:n}}var r1;(function(e){e[e.XS=224]="XS",e[e.SM=320]="SM",e[e.MD=416]="MD",e[e.LG=608]="LG"})(r1||(r1={}));var Wv=function(){function e(t){var n=t===void 0?{}:t,r=n.inputSize,o=n.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(e.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),e}(),Db=function(e){pe(t,e);function t(n){var r=e.call(this,"TinyYolov2")||this;return FM(n),r._config=n,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(n,r){var o=Lr(n,r.conv0);return o=pt(o,[2,2],[2,2],"same"),o=Lr(o,r.conv1),o=pt(o,[2,2],[2,2],"same"),o=Lr(o,r.conv2),o=pt(o,[2,2],[2,2],"same"),o=Lr(o,r.conv3),o=pt(o,[2,2],[2,2],"same"),o=Lr(o,r.conv4),o=pt(o,[2,2],[2,2],"same"),o=Lr(o,r.conv5),o=pt(o,[2,2],[1,1],"same"),o=Lr(o,r.conv6),o=Lr(o,r.conv7),Pn(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(n,r){var o=this.config.isFirstLayerConv2d?zv(Pn(n,r.conv0,"valid",!1)):zr(n,r.conv0);return o=pt(o,[2,2],[2,2],"same"),o=zr(o,r.conv1),o=pt(o,[2,2],[2,2],"same"),o=zr(o,r.conv2),o=pt(o,[2,2],[2,2],"same"),o=zr(o,r.conv3),o=pt(o,[2,2],[2,2],"same"),o=zr(o,r.conv4),o=pt(o,[2,2],[2,2],"same"),o=zr(o,r.conv5),o=pt(o,[2,2],[1,1],"same"),o=r.conv6?zr(o,r.conv6):o,o=r.conv7?zr(o,r.conv7):o,Pn(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(n,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return Z(function(){var a=n.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?Ws(a,o.config.meanRgb):a,a=a.div(J(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(n,r){return ie(this,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,yt(n)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(n,r){return r===void 0&&(r={}),ie(this,void 0,void 0,function(){var o,i,a,s,u,l,c,f,d,p,h,m,g,v,y=this;return ae(this,function(x){switch(x.label){case 0:return o=new Wv(r),i=o.inputSize,a=o.scoreThreshold,[4,yt(n)];case 1:return s=x.sent(),[4,this.forwardInput(s,i)];case 2:return u=x.sent(),l=Z(function(){return lt(u)[0].expandDims()}),c={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(l,s.getReshapedInputDimensions(0),a)];case 3:return f=x.sent(),u.dispose(),l.dispose(),d=f.map(function(w){return w.box}),p=f.map(function(w){return w.score}),h=f.map(function(w){return w.classScore}),m=f.map(function(w){return y.config.classes[w.label]}),g=ws(d.map(function(w){return w.rescale(i)}),p,this.config.iouThreshold,!0),v=g.map(function(w){return new nb(p[w],h[w],m[w],d[w],c)}),[2,v]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(n){return LM(n,this.config)},t.prototype.extractParams=function(n){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return MM(n,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(n,r,o){return ie(this,void 0,void 0,function(){var i,a,s,u,l,c,f,d,p,h,m,g,v,y,x,w,b,C,E,S,R,k,D,T,z,L,$,V,U,P=this;return ae(this,function(O){switch(O.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,l=s/a,c=n.shape[1],f=this.config.anchors.length,d=Z(function(){var B=n.reshape([c,c,f,P.boxEncodingSize]),X=B.slice([0,0,0,0],[c,c,f,4]),Q=B.slice([0,0,0,4],[c,c,f,1]),re=P.withClassScores?Tr(B.slice([0,0,0,5],[c,c,f,P.config.classes.length]),3):J(0);return[X,Q,re]}),p=d[0],h=d[1],m=d[2],g=[],[4,h.array()];case 1:return v=O.sent(),[4,p.array()];case 2:y=O.sent(),x=0,O.label=3;case 3:if(!(x<c))return[3,12];w=0,O.label=4;case 4:if(!(w<c))return[3,11];b=0,O.label=5;case 5:return b<f?(C=ud(v[x][w][b][0]),!o||C>o?(E=(w+ud(y[x][w][b][0]))/c*u,S=(x+ud(y[x][w][b][1]))/c*l,R=Math.exp(y[x][w][b][2])*this.config.anchors[b].x/c*u,k=Math.exp(y[x][w][b][3])*this.config.anchors[b].y/c*l,D=E-R/2,T=S-k/2,z={row:x,col:w,anchor:b},this.withClassScores?[4,this.extractPredictedClass(m,z)]:[3,7]):[3,9]):[3,10];case 6:return U=O.sent(),[3,8];case 7:U={classScore:1,label:0},O.label=8;case 8:L=U,$=L.classScore,V=L.label,g.push(Tt({box:new Pc(D,T,D+R,T+k),score:C,classScore:C*$,label:V},z)),O.label=9;case 9:return b++,[3,5];case 10:return w++,[3,4];case 11:return x++,[3,3];case 12:return p.dispose(),h.dispose(),m.dispose(),[2,g]}})})},t.prototype.extractPredictedClass=function(n,r){return ie(this,void 0,void 0,function(){var o,i,a,s;return ae(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,n.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(l,c){return s[o][i][a][c]}).map(function(l,c){return{classScore:l,label:c}}).reduce(function(l,c){return l.classScore>c.classScore?l:c})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(Dr),zM=function(e){pe(t,e);function t(n){n===void 0&&(n=!0);var r=this,o=Object.assign({},{withSeparableConvs:n,iouThreshold:IM,classes:["face"]},n?{anchors:TM,meanRgb:NM}:{anchors:AM,withClassScores:!0});return r=e.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(n,r){return ie(this,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return[4,this.detect(n,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Bn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?PM:DM},t.prototype.extractParamsFromWeigthMap=function(n){return e.prototype.extractParamsFromWeigthMap.call(this,n)},t}(Db),WM=function(e){pe(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._name="TinyFaceDetectorOptions",n}return t}(Wv),$s=function(){function e(){}return e.prototype.then=function(t){return ie(this,void 0,void 0,function(){var n;return ae(this,function(r){switch(r.label){case 0:return n=t,[4,this.run()];case 1:return[2,n.apply(void 0,[r.sent()])]}})})},e.prototype.run=function(){return ie(this,void 0,void 0,function(){return ae(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},e}();function Lc(e,t,n,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),ie(this,void 0,void 0,function(){var i,a,s,u,l;return ae(this,function(c){switch(c.label){case 0:return i=e.map(function(f){return bb(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof Ve?[4,Fv(t,i)]:[3,2];case 1:return u=c.sent(),[3,4];case 2:return[4,Pv(t,i)];case 3:u=c.sent(),c.label=4;case 4:s=u,c.label=5;case 5:return a=s,[4,n(a)];case 6:return l=c.sent(),a.forEach(function(f){return f instanceof Ve&&f.dispose()}),[2,l]}})})}function jv(e,t,n,r,o){return ie(this,void 0,void 0,function(){var i=this;return ae(this,function(a){return[2,Lc([e],t,function(s){return ie(i,void 0,void 0,function(){return ae(this,function(u){return[2,n(s[0])]})})},r,o)]})})}function jM(e){return Z(function(){return un(lt(e,3).reverse(),3)})}var Cu=2,Ul=12;function $M(e,t){var n=Mc(e,t),r=Ov(e,t);function o(l,c){var f=nt(e(l));return t.push({paramPath:c}),f}function i(l,c,f){f===void 0&&(f=!1);var d=n(l[0],l[1],3,c+"/conv1"),p=o(l[1],c+"/prelu1_alpha"),h=n(l[1],l[2],3,c+"/conv2"),m=o(l[2],c+"/prelu2_alpha"),g=n(l[2],l[3],f?2:3,c+"/conv3"),v=o(l[3],c+"/prelu3_alpha");return{conv1:d,prelu1_alpha:p,conv2:h,prelu2_alpha:m,conv3:g,prelu3_alpha:v}}function a(){var l=i([3,10,16,32],"pnet"),c=n(32,2,1,"pnet/conv4_1"),f=n(32,4,1,"pnet/conv4_2");return Tt(Tt({},l),{conv4_1:c,conv4_2:f})}function s(){var l=i([3,28,48,64],"rnet",!0),c=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),d=r(128,2,"rnet/fc2_1"),p=r(128,4,"rnet/fc2_2");return Tt(Tt({},l),{fc1:c,prelu4_alpha:f,fc2_1:d,fc2_2:p})}function u(){var l=i([3,32,64,64],"onet"),c=n(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),d=r(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),h=r(256,2,"onet/fc2_1"),m=r(256,4,"onet/fc2_2"),g=r(256,10,"onet/fc2_3");return Tt(Tt({},l),{conv4:c,prelu4_alpha:f,fc1:d,prelu5_alpha:p,fc2_1:h,fc2_2:m,fc2_3:g})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function UM(e){var t=Fr(e),n=t.extractWeights,r=t.getRemainingWeights,o=[],i=$M(n,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,l=a(),c=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:l,rnet:c,onet:f},paramMappings:o}}function VM(e,t){var n=xo(e,t);function r(c){var f=n(c+"/weights",4,c+"/filters"),d=n(c+"/bias",1);return{filters:f,bias:d}}function o(c){var f=n(c+"/weights",2),d=n(c+"/bias",1);return{weights:f,bias:d}}function i(c){return n(c,1)}function a(c){var f=r(c+"/conv1"),d=i(c+"/prelu1_alpha"),p=r(c+"/conv2"),h=i(c+"/prelu2_alpha"),m=r(c+"/conv3"),g=i(c+"/prelu3_alpha");return{conv1:f,prelu1_alpha:d,conv2:p,prelu2_alpha:h,conv3:m,prelu3_alpha:g}}function s(){var c=a("pnet"),f=r("pnet/conv4_1"),d=r("pnet/conv4_2");return Tt(Tt({},c),{conv4_1:f,conv4_2:d})}function u(){var c=a("rnet"),f=o("rnet/fc1"),d=i("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),h=o("rnet/fc2_2");return Tt(Tt({},c),{fc1:f,prelu4_alpha:d,fc2_1:p,fc2_2:h})}function l(){var c=a("onet"),f=r("onet/conv4"),d=i("onet/prelu4_alpha"),p=o("onet/fc1"),h=i("onet/prelu5_alpha"),m=o("onet/fc2_1"),g=o("onet/fc2_2"),v=o("onet/fc2_3");return Tt(Tt({},c),{conv4:f,prelu4_alpha:d,fc1:p,prelu5_alpha:h,fc2_1:m,fc2_2:g,fc2_3:v})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:l}}function HM(e){var t=[],n=VM(e,t),r=n.extractPNetParams,o=n.extractRNetParams,i=n.extractONetParams,a=r(),s=o(),u=i();return Pr(e,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function $p(e,t){var n=t[0],r=t[1];return{height:Math.floor(n*e),width:Math.floor(r*e)}}function GM(e,t,n){for(var r=n[0],o=n[1],i=Ul/e,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var $v=function(e){pe(t,e);function t(n,r,o,i){return e.call(this,{left:n,top:r,right:o,bottom:i},!0)||this}return t}(kr);function Pb(e){return Z(function(){return Pt(ft(e,J(127.5)),J(.0078125))})}function ji(e,t){return Z(function(){return we(He(e),Pt(t,Bl(He(Bl(e)))))})}function Uv(e,t,n){return n===void 0&&(n=!1),Z(function(){var r=Pn(e,t.conv1,"valid");return r=ji(r,t.prelu1_alpha),r=pt(r,n?[2,2]:[3,3],[2,2],"same"),r=Pn(r,t.conv2,"valid"),r=ji(r,t.prelu2_alpha),r=n?r:pt(r,[3,3],[2,2],"valid"),r=Pn(r,t.conv3,"valid"),r=ji(r,t.prelu3_alpha),r})}function qM(e,t){return Z(function(){var n=Uv(e,t,!0),r=Pn(n,t.conv4_1,"valid"),o=hn(Ac(r,3),3),i=Tr(ft(r,o),3),a=Pn(n,t.conv4_2,"valid");return{prob:i,regions:a}})}function KM(e,t){return Z(function(){var n=$p(t,e.shape.slice(1)),r=n.height,o=n.width,i=bv.resizeBilinear(e,[r,o]),a=Pb(i);return po(a,[0,2,1,3])})}function XM(e,t,n,r){for(var o=[],i=e.arraySync(),a=0;a<e.shape[0];a++)for(var s=0;s<e.shape[1];s++)i[a][s]>=r&&o.push(new Ie(s,a));var u=o.map(function(l){var c=new Pc(Math.round((l.y*Cu+1)/n),Math.round((l.x*Cu+1)/n),Math.round((l.y*Cu+Ul)/n),Math.round((l.x*Cu+Ul)/n)),f=i[l.y][l.x],d=t.arraySync(),p=new $v(d[l.y][l.x][0],d[l.y][l.x][1],d[l.y][l.x][2],d[l.y][l.x][3]);return{cell:c,score:f,region:p}});return u}function YM(e,t,n,r,o){o.stage1=[];var i=t.map(function(d){return Z(function(){var p={scale:d},h=KM(e,d),m=Date.now(),g=qM(h,r),v=g.prob,y=g.regions;p.pnet=Date.now()-m;var x=lt(lt(v,3)[1])[0],w=lt(y)[0];return{scoresTensor:x,regionsTensor:w,scale:d,statsForScale:p}})}),a=i.map(function(d){var p=d.scoresTensor,h=d.regionsTensor,m=d.scale,g=d.statsForScale,v=XM(p,h,m,n);if(p.dispose(),h.dispose(),!v.length)return o.stage1.push(g),[];var y=Date.now(),x=ws(v.map(function(w){return w.cell}),v.map(function(w){return w.score}),.5);return g.nms=Date.now()-y,g.numBoxes=x.length,o.stage1.push(g),x.map(function(w){return v[w]})}),s=a.reduce(function(d,p){return d.concat(p)},[]),u=[],l=[];if(s.length>0){var c=Date.now(),f=ws(s.map(function(d){return d.cell}),s.map(function(d){return d.score}),.7);o.stage1_nms=Date.now()-c,l=f.map(function(d){return s[d].score}),u=f.map(function(d){return s[d]}).map(function(d){var p=d.cell,h=d.region;return new Pc(p.left+h.left*p.width,p.top+h.top*p.height,p.right+h.right*p.width,p.bottom+h.bottom*p.height).toSquare().round()})}return{boxes:u,scores:l}}function Fb(e,t,n){var r=n.width,o=n.height;return ie(this,void 0,void 0,function(){var i,a,s,u=this;return ae(this,function(l){switch(l.label){case 0:return i=Rr(e),[4,Promise.all(t.map(function(c){return ie(u,void 0,void 0,function(){var f,d,p,h,m,g,v,y;return ae(this,function(x){return f=c.padAtBorders(e.height,e.width),d=f.y,p=f.ey,h=f.x,m=f.ex,g=h-1,v=d-1,y=i.getImageData(g,v,m-g,p-v),[2,_t.isNodejs()?Oc(y):createImageBitmap(y)]})})}))];case 1:return a=l.sent(),s=[],a.forEach(function(c){var f=Fc({width:r,height:o}),d=Rr(f);d.drawImage(c,0,0,r,o);for(var p=d.getImageData(0,0,r,o).data,h=[],m=0;m<p.length;m+=4)h.push(p[m+2]),h.push(p[m+1]),h.push(p[m]);s.push(h)}),[2,s.map(function(c){var f=Z(function(){var d=po(jt(c,[1,r,o,3]),[0,2,1,3]).toFloat();return Pb(d)});return f})]}})})}function QM(e,t){return Z(function(){var n=Uv(e,t),r=An(n,[n.shape[0],t.fc1.weights.shape[0]]),o=Qn(r,t.fc1),i=ji(o,t.prelu4_alpha),a=Qn(i,t.fc2_1),s=hn(Ac(a,1),1),u=Tr(ft(a,s),1),l=Qn(i,t.fc2_2),c=lt(u,1)[1];return{scores:c,regions:l}})}function JM(e,t,n,r,o){return ie(this,void 0,void 0,function(){var i,a,s,u,l,c,f,d,p,h,m,g,v,y;return ae(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,Fb(e,t,{width:24,height:24})];case 1:return a=x.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var b=QM(w,r);return w.dispose(),b}),o.stage2_rnet=Date.now()-i,u=s.length>1?ut(s.map(function(w){return w.scores})):s[0].scores,f=(c=Array).from,[4,u.data()];case 2:return l=f.apply(c,[x.sent()]),u.dispose(),d=l.map(function(w,b){return{score:w,idx:b}}).filter(function(w){return w.score>n}).map(function(w){var b=w.idx;return b}),p=d.map(function(w){return t[w]}),h=d.map(function(w){return l[w]}),m=[],g=[],p.length>0&&(i=Date.now(),v=ws(p,h,.7),o.stage2_nms=Date.now()-i,y=v.map(function(w){var b=s[d[w]].regions.arraySync();return new $v(b[0][0],b[0][1],b[0][2],b[0][3])}),g=v.map(function(w){return h[w]}),m=v.map(function(w,b){return p[w].calibrate(y[b])})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose()}),[2,{boxes:m,scores:g}]}})})}function ZM(e,t){return Z(function(){var n=Uv(e,t);n=pt(n,[2,2],[2,2],"same"),n=Pn(n,t.conv4,"valid"),n=ji(n,t.prelu4_alpha);var r=An(n,[n.shape[0],t.fc1.weights.shape[0]]),o=Qn(r,t.fc1),i=ji(o,t.prelu5_alpha),a=Qn(i,t.fc2_1),s=hn(Ac(a,1),1),u=Tr(ft(a,s),1),l=Qn(i,t.fc2_2),c=Qn(i,t.fc2_3),f=lt(u,1)[1];return{scores:f,regions:l,points:c}})}function eB(e,t,n,r,o){return ie(this,void 0,void 0,function(){var i,a,s,u,l,c,f,d,p,h,m,g,v,y,x;return ae(this,function(w){switch(w.label){case 0:return i=Date.now(),[4,Fb(e,t,{width:48,height:48})];case 1:return a=w.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(b){var C=ZM(b,r);return b.dispose(),C}),o.stage3_onet=Date.now()-i,u=s.length>1?ut(s.map(function(b){return b.scores})):s[0].scores,f=(c=Array).from,[4,u.data()];case 2:return l=f.apply(c,[w.sent()]),u.dispose(),d=l.map(function(b,C){return{score:b,idx:C}}).filter(function(b){return b.score>n}).map(function(b){var C=b.idx;return C}),p=d.map(function(b){var C=s[b].regions.arraySync();return new $v(C[0][0],C[0][1],C[0][2],C[0][3])}),h=d.map(function(b,C){return t[b].calibrate(p[C])}),m=d.map(function(b){return l[b]}),g=[],v=[],y=[],h.length>0&&(i=Date.now(),x=ws(h,m,.7,!1),o.stage3_nms=Date.now()-i,g=x.map(function(b){return h[b]}),v=x.map(function(b){return m[b]}),y=x.map(function(b,C){return Array(5).fill(0).map(function(E,S){var R=s[b].points.arraySync();return new Ie(R[0][S]*(g[C].width+1)+g[C].left,R[0][S+5]*(g[C].height+1)+g[C].top)})})),s.forEach(function(b){b.regions.dispose(),b.scores.dispose(),b.points.dispose()}),[2,{boxes:g,scores:v,points:y}]}})})}var tB=function(e){pe(t,e);function t(){return e.call(this,"Mtcnn")||this}return t.prototype.load=function(n){return ie(this,void 0,void 0,function(){return ae(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,e.prototype.load.call(this,n)]})})},t.prototype.loadFromDisk=function(n){return ie(this,void 0,void 0,function(){return ae(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,e.prototype.loadFromDisk.call(this,n)]})})},t.prototype.forwardInput=function(n,r){return r===void 0&&(r={}),ie(this,void 0,void 0,function(){var o,i,a,s,u,l,c,f,d,p,h,m,g,v,y,x,w,b,C,E,S;return ae(this,function(R){switch(R.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=n.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=Z(function(){return jM(hn(Rv.fromPixels(i)).toFloat())}),l=function(k){return u.dispose(),a.total=Date.now()-s,k},c=u.shape.slice(1),f=c[0],d=c[1],p=new Tb(r),h=p.minFaceSize,m=p.scaleFactor,g=p.maxNumScales,v=p.scoreThresholds,y=p.scaleSteps,x=(y||GM(h,m,[f,d])).filter(function(k){var D=$p(k,[f,d]);return Math.min(D.width,D.height)>Ul}).slice(0,g),a.scales=x,a.pyramid=x.map(function(k){return $p(k,[f,d])}),w=Date.now(),[4,YM(u,x,v[0],o.pnet,a)];case 1:return b=R.sent(),a.total_stage1=Date.now()-w,b.boxes.length?(a.stage2_numInputBoxes=b.boxes.length,w=Date.now(),[4,JM(i,b.boxes,v[1],o.rnet,a)]):[2,l({results:[],stats:a})];case 2:return C=R.sent(),a.total_stage2=Date.now()-w,C.boxes.length?(a.stage3_numInputBoxes=C.boxes.length,w=Date.now(),[4,eB(i,C.boxes,v[2],o.onet,a)]):[2,l({results:[],stats:a})];case 3:return E=R.sent(),a.total_stage3=Date.now()-w,S=E.boxes.map(function(k,D){return Bc(Cs({},new Bn(E.scores[D],new Av(k.left/d,k.top/f,k.width/d,k.height/f),{height:f,width:d})),new RO(E.points[D].map(function(T){return T.sub(new Ie(k.left,k.top)).div(new Ie(k.width,k.height))}),{width:k.width,height:k.height}))}),[2,l({results:S,stats:a})]}})})},t.prototype.forward=function(n,r){return r===void 0&&(r={}),ie(this,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,yt(n)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(n,r){return r===void 0&&(r={}),ie(this,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,yt(n)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(n){return HM(n)},t.prototype.extractParams=function(n){return UM(n)},t}(Dr),nB=.4,rB=[new Ie(1.603231,2.094468),new Ie(6.041143,7.080126),new Ie(2.882459,3.518061),new Ie(4.266906,5.178857),new Ie(9.041765,10.66308)],oB=[117.001,114.697,97.404],iB=function(e){pe(t,e);function t(){var n=this,r={withSeparableConvs:!0,iouThreshold:nB,classes:["face"],anchors:rB,meanRgb:oB,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return n=e.call(this,r)||this,n}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(n,r){return ie(this,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return[4,this.detect(n,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new Bn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(n){return e.prototype.extractParamsFromWeigthMap.call(this,n)},t}(Db),Mt={ssdMobilenetv1:new Nb,tinyFaceDetector:new iB,tinyYolov2:new zM,mtcnn:new tB,faceLandmark68Net:new Sb,faceLandmark68TinyNet:new aM,faceRecognitionNet:new pM,faceExpressionNet:new qO,ageGenderNet:new nM},Ob=function(e){pe(t,e);function t(n,r,o){var i=e.call(this)||this;return i.parentTask=n,i.input=r,i.extractedFaces=o,i}return t}($s),Vv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o=this;return ae(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return n=i.sent(),[4,Lc(n,this.input,function(a){return ie(o,void 0,void 0,function(){return ae(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Mt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,n.map(function(a,s){return wb(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Kv(this,this.input)},t}(Ob),Hv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r;return ae(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return n=o.sent(),n?[4,jv(n,this.input,function(i){return Mt.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,wb(n,r)]}})})},t.prototype.withAgeAndGender=function(){return new Xv(this,this.input)},t}(Ob),Gv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Yv(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jv(this,this.input)},t}(Vv),qv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Qv(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zv(this,this.input)},t}(Hv),Mb=function(e){pe(t,e);function t(n,r,o){var i=e.call(this)||this;return i.parentTask=n,i.input=r,i.extractedFaces=o,i}return t}($s),Kv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o=this;return ae(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return n=i.sent(),[4,Lc(n,this.input,function(a){return ie(o,void 0,void 0,function(){return ae(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return Mt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,n.map(function(a,s){var u=r[s],l=u.age,c=u.gender,f=u.genderProbability;return Ib(Ab(a,c,f),l)})]}})})},t.prototype.withFaceExpressions=function(){return new Vv(this,this.input)},t}(Mb),Xv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o,i,a;return ae(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return n=s.sent(),n?[4,jv(n,this.input,function(u){return Mt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,Ib(Ab(n,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new Hv(this,this.input)},t}(Mb),Yv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Gv(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jv(this,this.input)},t}(Kv),Qv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new qv(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zv(this,this.input)},t}(Xv),Bb=function(e){pe(t,e);function t(n,r){var o=e.call(this)||this;return o.parentTask=n,o.input=r,o}return t}($s),Jv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r;return ae(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return n=o.sent(),[4,Lc(n,this.input,function(i){return Promise.all(i.map(function(a){return Mt.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return Rb(n[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new Gv(this,this.input)},t.prototype.withAgeAndGender=function(){return new Yv(this,this.input)},t}(Bb),Zv=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r;return ae(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return n=o.sent(),n?[4,jv(n,this.input,function(i){return Mt.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,Rb(n,r)]}})})},t.prototype.withFaceExpressions=function(){return new qv(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qv(this,this.input)},t}(Bb),Lb=function(e){pe(t,e);function t(n,r,o){var i=e.call(this)||this;return i.parentTask=n,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Mt.faceLandmark68TinyNet:Mt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}($s),aB=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o,i,a,s=this;return ae(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return n=u.sent(),r=n.map(function(l){return l.detection}),this.input instanceof Ve?[4,Fv(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,Pv(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(l){return s.landmarkNet.detectLandmarks(l)}))];case 6:return a=u.sent(),o.forEach(function(l){return l instanceof Ve&&l.dispose()}),[2,n.map(function(l,c){return Bc(l,a[c])})]}})})},t.prototype.withFaceExpressions=function(){return new Gv(this,this.input)},t.prototype.withAgeAndGender=function(){return new Yv(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Jv(this,this.input)},t}(Lb),sB=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o,i,a;return ae(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return n=s.sent(),n?(r=n.detection,this.input instanceof Ve?[4,Fv(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,Pv(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof Ve&&u.dispose()}),[2,Bc(n,a)]}})})},t.prototype.withFaceExpressions=function(){return new qv(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qv(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zv(this,this.input)},t}(Lb),zb=function(e){pe(t,e);function t(n,r){r===void 0&&(r=new js);var o=e.call(this)||this;return o.input=n,o.options=r,o}return t}($s),Wb=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r,o,i;return ae(this,function(a){switch(a.label){case 0:return n=this,r=n.input,o=n.options,o instanceof Tb?[4,Mt.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof WM?function(s){return Mt.tinyFaceDetector.locateFaces(s,o)}:o instanceof js?function(s){return Mt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Wv?function(s){return Mt.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var n=this;return new Promise(function(r){return ie(n,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return Cs({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(n){return n===void 0&&(n=!1),new aB(this.runAndExtendWithFaceDetections(),this.input,n)},t.prototype.withFaceExpressions=function(){return new Vv(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Kv(this.runAndExtendWithFaceDetections(),this.input)},t}(zb),uB=function(e){pe(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.run=function(){return ie(this,void 0,void 0,function(){var n,r;return ae(this,function(o){switch(o.label){case 0:return[4,new Wb(this.input,this.options)];case 1:return n=o.sent(),r=n[0],n.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var n=this;return new Promise(function(r){return ie(n,void 0,void 0,function(){var o;return ae(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?Cs({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(n){return n===void 0&&(n=!1),new sB(this.runAndExtendWithFaceDetection(),this.input,n)},t.prototype.withFaceExpressions=function(){return new Hv(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Xv(this.runAndExtendWithFaceDetection(),this.input)},t}(zb);function lB(e,t){return t===void 0&&(t=new js),new uB(e,t)}function cB(e,t){return t===void 0&&(t=new js),new Wb(e,t)}function fB(e,t){if(e.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var n=Array.from(e),r=Array.from(t);return Math.sqrt(n.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}var dB=function(){function e(t,n){n===void 0&&(n=.6),this._distanceThreshold=n;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof Fa)return a;if(a instanceof Float32Array)return new Fa(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new Fa(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(e.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),e.prototype.computeMeanDistance=function(t,n){return n.map(function(r){return fB(r,t)}).reduce(function(r,o){return r+o},0)/(n.length||1)},e.prototype.matchDescriptor=function(t){var n=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new Z0(i,n.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},e.prototype.findBestMatch=function(t){var n=this.matchDescriptor(t);return n.distance<this.distanceThreshold?n:new Z0("unknown",n.distance)},e.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},e.fromJSON=function(t){var n=t.labeledDescriptors.map(function(r){return Fa.fromJSON(r)});return new e(n,t.distanceThreshold)},e}();function jb(e,t){var n=new Lo(t.width,t.height),r=n.width,o=n.height;if(r<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:r,height:o}));if(Array.isArray(e))return e.map(function(s){return jb(s,{width:r,height:o})});if(bb(e)){var i=e.detection.forSize(r,o),a=e.unshiftedLandmarks.forSize(i.box.width,i.box.height);return Bc(Cs(e,i),a)}return rb(e)?Cs(e,e.detection.forSize(r,o)):e instanceof bs||e instanceof Bn?e.forSize(r,o):e}const pB=async e=>{const t="/Models";Promise.all([Mt.ssdMobilenetv1.loadFromUri(t),Mt.faceLandmark68Net.loadFromUri(t),Mt.faceRecognitionNet.loadFromUri(t)]).then(e(!0))},hB=(e,t,n)=>{e(!0),t(!0),navigator.mediaDevices.getUserMedia({video:{width:300}}).then(r=>{let o=n.current;o.srcObject=r,o.play()}).catch(r=>{console.error("error:",r)})};async function vB(){const e=["Fellipe","Picanha","Victor","Caio"];return Promise.all(e.map(async t=>{const n=[];for(let r=1;r<=3;r++){const o=await LO(`./Labels/${t}/${r}.jpg`),i=await lB(o).withFaceLandmarks().withFaceDescriptor();n.push(i.descriptor)}return new Fa(t,n)}))}const mB=async(e,t,n,r,o,i,a)=>{const s=await vB(),u=new dB(s);e.current.innerHTML=Oc(t.current);const l={width:n,height:r};jO(e.current,l),setInterval(async()=>{if(e&&e.current){const c=await cB(t.current).withFaceLandmarks().withFaceDescriptors();o(!1);const f=jb(c,l);e&&e.current&&e.current.getContext("2d").clearRect(0,0,n,r);const d=f.map(p=>u.findBestMatch(p.descriptor));d.forEach((p,h)=>{const m=f[h].detection.box,g=new PO(m,{label:p});e&&e.current&&g.draw(e.current)}),d[0]._label!="unknown"&&setTimeout(()=>{i(d[0]._label),$b(t,a)},2e3)}},100)},$b=(e,t)=>{e&&e.current&&e.current.pause(),e&&e.current&&e.current.srcObject.getTracks()[0].stop(),t(!1)},gB=({setPerson:e})=>{const t=K.useRef(null),n=K.useRef(null),r=260,o=480,[i,a]=K.useState(!1),[s,u]=K.useState(!1),[l,c]=K.useState(!1);return K.useEffect(()=>{pB(a)},[]),A.jsxs(F4,{children:[A.jsx("div",{style:{textAlign:"center",padding:"10px"},children:s&&i?A.jsx("button",{onClick:()=>$b(t,u),style:{cursor:"pointer",backgroundColor:"green",color:"white",padding:"15px",fontSize:"25px",border:"none",borderRadius:"10px"},children:"Close Webcam"}):A.jsx(L4,{onClick:()=>hB(c,u,t),children:"Efetuar verificação"})}),s?i?A.jsxs(O4,{children:[A.jsx(Bf,{style:{display:l?"none":"initial"},children:"Centralize seu rosto e espere 2 segundos"}),A.jsx(M4,{style:{display:l?"none":"initial"},ref:t,height:r,width:o,onPlay:()=>mB(n,t,o,r,c,e,u)}),A.jsx(B4,{style:{display:l?"none":"initial"},ref:n}),l?A.jsxs(r0,{children:[A.jsx(n0,{src:xp,alt:"Carregando verificação..."}),A.jsx(Bf,{children:"Aguarde enquanto configuramos o reconhecimento facial..."})]}):null]}):A.jsxs(r0,{children:[A.jsx(n0,{src:xp,alt:"Carregando verificação..."}),A.jsx(Bf,{children:"Aguarde enquanto configuramos o reconhecimento facial..."})]}):null]})},yB=()=>{const e=Xo(),[t,n]=K.useState(""),[r,o]=K.useState(""),[i,a]=K.useState(""),[s,u]=K.useState(""),l=As(),{content:c}=l.state,{user:f}=K.useContext(Hh);return K.useEffect(()=>{s&&(s===f.Nome?(console.log(s),e("/verification/final",{state:{content:c,user:!0}}),window.scrollTo(0,0)):(e("/verification/final",{state:{content:c,user:!1}}),window.scrollTo(0,0)))},[s]),A.jsxs(E4,{children:[A.jsxs(e0,{children:[A.jsx(S4,{children:"Para a sua segurança, complete o seu cadastro"}),A.jsx(t0,{title:"Nome Completo *",value:t,onChangeFuntion:n,placeholder:"Nome completo igual ao seu RG"}),A.jsxs(_4,{children:[A.jsx(t0,{title:"CPF *",value:r,onChangeFuntion:o,placeholder:"000.000.000-00"}),A.jsx(P4,{title:"Data de nascimento *",value:i,onChangeFuntion:a,placeholder:"DD-MM-AAAA"})]})]}),A.jsx(e0,{children:A.jsx(k4,{children:A.jsx(gB,{setPerson:u})})})]})};function xB(){const e=[{url:"/",element:A.jsx(B3,{})},{url:"/verification",element:A.jsx(yB,{})},{url:"/verification/final",element:A.jsx(V3,{})},{url:"/verification/final/:result",element:A.jsx(C4,{})},{url:"/announce",element:A.jsx(OR,{})}];return A.jsx("div",{className:"App",children:A.jsx(_k,{basename:"hack-olx-2023",children:A.jsxs(kk,{children:[A.jsx(Ik,{}),A.jsx(Ek,{children:e.map((t,n)=>A.jsx(Xx,{path:t.url,element:t.element},n))})]})})})}fd.createRoot(document.getElementById("root")).render(A.jsx(xe.StrictMode,{children:A.jsx(xB,{})}))});export default wB();
