(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function py(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var qh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function YE(){if(Om)return Se;Om=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),A=Symbol.iterator;function C(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,H={};function B(O,$,ae){this.props=O,this.context=$,this.refs=H,this.updater=ae||z}B.prototype.isReactComponent={},B.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ge(){}ge.prototype=B.prototype;function le(O,$,ae){this.props=O,this.context=$,this.refs=H,this.updater=ae||z}var me=le.prototype=new ge;me.constructor=le,q(me,B.prototype),me.isPureReactComponent=!0;var Ee=Array.isArray,qe=Object.prototype.hasOwnProperty,Ae={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function I(O,$,ae){var we,Ie={},ke=null,Le=null;if($!=null)for(we in $.ref!==void 0&&(Le=$.ref),$.key!==void 0&&(ke=""+$.key),$)qe.call($,we)&&!D.hasOwnProperty(we)&&(Ie[we]=$[we]);var Me=arguments.length-2;if(Me===1)Ie.children=ae;else if(1<Me){for(var Be=Array(Me),mt=0;mt<Me;mt++)Be[mt]=arguments[mt+2];Ie.children=Be}if(O&&O.defaultProps)for(we in Me=O.defaultProps,Me)Ie[we]===void 0&&(Ie[we]=Me[we]);return{$$typeof:i,type:O,key:ke,ref:Le,props:Ie,_owner:Ae.current}}function R(O,$){return{$$typeof:i,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return $[ae]})}var x=/\/+/g;function S(O,$){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):$.toString(36)}function et(O,$,ae,we,Ie){var ke=typeof O;(ke==="undefined"||ke==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(ke){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case i:case e:Le=!0}}if(Le)return Le=O,Ie=Ie(Le),O=we===""?"."+S(Le,0):we,Ee(Ie)?(ae="",O!=null&&(ae=O.replace(x,"$&/")+"/"),et(Ie,$,ae,"",function(mt){return mt})):Ie!=null&&(k(Ie)&&(Ie=R(Ie,ae+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(x,"$&/")+"/")+O)),$.push(Ie)),1;if(Le=0,we=we===""?".":we+":",Ee(O))for(var Me=0;Me<O.length;Me++){ke=O[Me];var Be=we+S(ke,Me);Le+=et(ke,$,ae,Be,Ie)}else if(Be=C(O),typeof Be=="function")for(O=Be.call(O),Me=0;!(ke=O.next()).done;)ke=ke.value,Be=we+S(ke,Me++),Le+=et(ke,$,ae,Be,Ie);else if(ke==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(O,$,ae){if(O==null)return O;var we=[],Ie=0;return et(O,we,"","",function(ke){return $.call(ae,ke,Ie++)}),we}function Nt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},J={transition:null},ue={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:J,ReactCurrentOwner:Ae};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(O,$,ae){kt(O,function(){$.apply(this,arguments)},ae)},count:function(O){var $=0;return kt(O,function(){$++}),$},toArray:function(O){return kt(O,function($){return $})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=B,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=le,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,Se.act=ee,Se.cloneElement=function(O,$,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var we=q({},O.props),Ie=O.key,ke=O.ref,Le=O._owner;if($!=null){if($.ref!==void 0&&(ke=$.ref,Le=Ae.current),$.key!==void 0&&(Ie=""+$.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(Be in $)qe.call($,Be)&&!D.hasOwnProperty(Be)&&(we[Be]=$[Be]===void 0&&Me!==void 0?Me[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)we.children=ae;else if(1<Be){Me=Array(Be);for(var mt=0;mt<Be;mt++)Me[mt]=arguments[mt+2];we.children=Me}return{$$typeof:i,type:O.type,key:Ie,ref:ke,props:we,_owner:Le}},Se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Se.createElement=I,Se.createFactory=function(O){var $=I.bind(null,O);return $.type=O,$},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:m,render:O}},Se.isValidElement=k,Se.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:Nt}},Se.memo=function(O,$){return{$$typeof:v,type:O,compare:$===void 0?null:$}},Se.startTransition=function(O){var $=J.transition;J.transition={};try{O()}finally{J.transition=$}},Se.unstable_act=ee,Se.useCallback=function(O,$){return Ue.current.useCallback(O,$)},Se.useContext=function(O){return Ue.current.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Se.useEffect=function(O,$){return Ue.current.useEffect(O,$)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(O,$,ae){return Ue.current.useImperativeHandle(O,$,ae)},Se.useInsertionEffect=function(O,$){return Ue.current.useInsertionEffect(O,$)},Se.useLayoutEffect=function(O,$){return Ue.current.useLayoutEffect(O,$)},Se.useMemo=function(O,$){return Ue.current.useMemo(O,$)},Se.useReducer=function(O,$,ae){return Ue.current.useReducer(O,$,ae)},Se.useRef=function(O){return Ue.current.useRef(O)},Se.useState=function(O){return Ue.current.useState(O)},Se.useSyncExternalStore=function(O,$,ae){return Ue.current.useSyncExternalStore(O,$,ae)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var xm;function my(){return xm||(xm=1,qh.exports=YE()),qh.exports}var wr=my();const xe=py(wr);var pu={},Kh={exports:{}},Yt={},Gh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function XE(){return Lm||(Lm=1,function(i){function e(J,ue){var ee=J.length;J.push(ue);e:for(;0<ee;){var O=ee-1>>>1,$=J[O];if(0<o($,ue))J[O]=ue,J[ee]=$,ee=O;else break e}}function t(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var ue=J[0],ee=J.pop();if(ee!==ue){J[0]=ee;e:for(var O=0,$=J.length,ae=$>>>1;O<ae;){var we=2*(O+1)-1,Ie=J[we],ke=we+1,Le=J[ke];if(0>o(Ie,ee))ke<$&&0>o(Le,Ie)?(J[O]=Le,J[ke]=ee,O=ke):(J[O]=Ie,J[we]=ee,O=we);else if(ke<$&&0>o(Le,ee))J[O]=Le,J[ke]=ee,O=ke;else break e}}return ue}function o(J,ue){var ee=J.sortIndex-ue.sortIndex;return ee!==0?ee:J.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],v=[],w=1,A=null,C=3,z=!1,q=!1,H=!1,B=typeof setTimeout=="function"?setTimeout:null,ge=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function me(J){for(var ue=t(v);ue!==null;){if(ue.callback===null)s(v);else if(ue.startTime<=J)s(v),ue.sortIndex=ue.expirationTime,e(g,ue);else break;ue=t(v)}}function Ee(J){if(H=!1,me(J),!q)if(t(g)!==null)q=!0,Nt(qe);else{var ue=t(v);ue!==null&&Ue(Ee,ue.startTime-J)}}function qe(J,ue){q=!1,H&&(H=!1,ge(I),I=-1),z=!0;var ee=C;try{for(me(ue),A=t(g);A!==null&&(!(A.expirationTime>ue)||J&&!V());){var O=A.callback;if(typeof O=="function"){A.callback=null,C=A.priorityLevel;var $=O(A.expirationTime<=ue);ue=i.unstable_now(),typeof $=="function"?A.callback=$:A===t(g)&&s(g),me(ue)}else s(g);A=t(g)}if(A!==null)var ae=!0;else{var we=t(v);we!==null&&Ue(Ee,we.startTime-ue),ae=!1}return ae}finally{A=null,C=ee,z=!1}}var Ae=!1,D=null,I=-1,R=5,k=-1;function V(){return!(i.unstable_now()-k<R)}function x(){if(D!==null){var J=i.unstable_now();k=J;var ue=!0;try{ue=D(!0,J)}finally{ue?S():(Ae=!1,D=null)}}else Ae=!1}var S;if(typeof le=="function")S=function(){le(x)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,kt=et.port2;et.port1.onmessage=x,S=function(){kt.postMessage(null)}}else S=function(){B(x,0)};function Nt(J){D=J,Ae||(Ae=!0,S())}function Ue(J,ue){I=B(function(){J(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(J){J.callback=null},i.unstable_continueExecution=function(){q||z||(q=!0,Nt(qe))},i.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<J?Math.floor(1e3/J):5},i.unstable_getCurrentPriorityLevel=function(){return C},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(J){switch(C){case 1:case 2:case 3:var ue=3;break;default:ue=C}var ee=C;C=ue;try{return J()}finally{C=ee}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(J,ue){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ee=C;C=J;try{return ue()}finally{C=ee}},i.unstable_scheduleCallback=function(J,ue,ee){var O=i.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?O+ee:O):ee=O,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ee+$,J={id:w++,callback:ue,priorityLevel:J,startTime:ee,expirationTime:$,sortIndex:-1},ee>O?(J.sortIndex=ee,e(v,J),t(g)===null&&J===t(v)&&(H?(ge(I),I=-1):H=!0,Ue(Ee,ee-O))):(J.sortIndex=$,e(g,J),q||z||(q=!0,Nt(qe))),J},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(J){var ue=C;return function(){var ee=C;C=ue;try{return J.apply(this,arguments)}finally{C=ee}}}}(Qh)),Qh}var Mm;function JE(){return Mm||(Mm=1,Gh.exports=XE()),Gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function ZE(){if(bm)return Yt;bm=1;var i=my(),e=JE();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},A={};function C(n){return g.call(A,n)?!0:g.call(w,n)?!1:v.test(n)?A[n]=!0:(w[n]=!0,!1)}function z(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function q(n,r,a,c){if(r===null||typeof r>"u"||z(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(n,r,a,c,d,p,_){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new H(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];B[r]=new H(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new H(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new H(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new H(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new H(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new H(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new H(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new H(n,5,!1,n.toLowerCase(),null,!1,!1)});var ge=/[\-:]([a-z])/g;function le(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(ge,le);B[r]=new H(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(ge,le);B[r]=new H(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(ge,le);B[r]=new H(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new H(n,1,!1,n.toLowerCase(),null,!0,!0)});function me(n,r,a,c){var d=B.hasOwnProperty(r)?B[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,a,d,c)&&(a=null),c||d===null?C(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var Ee=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qe=Symbol.for("react.element"),Ae=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),V=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),et=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),J=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ae=!1;function we(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var c=F}Reflect.construct(n,[],r)}else{try{r.call()}catch(F){c=F}n.call(r.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),p=c.stack.split(`
`),_=d.length-1,T=p.length-1;1<=_&&0<=T&&d[_]!==p[T];)T--;for(;1<=_&&0<=T;_--,T--)if(d[_]!==p[T]){if(_!==1||T!==1)do if(_--,T--,0>T||d[_]!==p[T]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=T);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Ie(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Ae:return"Portal";case R:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case et:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case x:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return r=n.displayName||null,r!==null?r:ke(n.type)||"Memo";case Nt:r=n._payload,n=n._init;try{return ke(n(r))}catch{}}return null}function Le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function mt(n){var r=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,p.call(this,_)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rr(n){n._valueTracker||(n._valueTracker=mt(n))}function us(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ii(n,r){var a=r.checked;return ee({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function cs(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Me(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Co(n,r){r=r.checked,r!=null&&me(n,"checked",r,!1)}function Po(n,r){Co(n,r);var a=Me(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hs(n,r.type,a):r.hasOwnProperty("defaultValue")&&hs(n,r.type,Me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Za(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function hs(n,r,a){(r!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ir=Array.isArray;function sr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ko(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ds(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Me(a)}}function fs(n,r){var a=Me(r.value),c=Me(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?at(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,Do=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Vr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ai=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(n){Ai.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Si[r]=Si[n]})});function Vo(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Si.hasOwnProperty(n)&&Si[n]?(""+r).trim():r+"px"}function Oo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Vo(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var xo=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,r){if(r){if(xo[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Mo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function ps(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ms=null,un=null,Un=null;function gs(n){if(n=oa(n)){if(typeof ms!="function")throw Error(t(280));var r=n.stateNode;r&&(r=kl(r),ms(n.stateNode,n.type,r))}}function zn(n){un?Un?Un.push(n):Un=[n]:un=n}function bo(){if(un){var n=un,r=Un;if(Un=un=null,gs(n),r)for(n=0;n<r.length;n++)gs(r[n])}}function Ci(n,r){return n(r)}function Fo(){}var ar=!1;function Uo(n,r,a){if(ar)return n(r,a);ar=!0;try{return Ci(n,r,a)}finally{ar=!1,(un!==null||Un!==null)&&(Fo(),bo())}}function tt(n,r){var a=n.stateNode;if(a===null)return null;var c=kl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var ys=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ys=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ys=!1}function Pi(n,r,a,c,d,p,_,T,P){var F=Array.prototype.slice.call(arguments,3);try{r.apply(a,F)}catch(K){this.onError(K)}}var ki=!1,_s=null,Tn=!1,zo=null,Ec={onError:function(n){ki=!0,_s=n}};function vs(n,r,a,c,d,p,_,T,P){ki=!1,_s=null,Pi.apply(Ec,arguments)}function el(n,r,a,c,d,p,_,T,P){if(vs.apply(this,arguments),ki){if(ki){var F=_s;ki=!1,_s=null}else throw Error(t(198));Tn||(Tn=!0,zo=F)}}function In(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ni(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function tl(n){var r=n.alternate;if(!r){if(r=In(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return Sn(d),n;if(p===c)return Sn(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var _=!1,T=d.child;T;){if(T===a){_=!0,a=d,c=p;break}if(T===c){_=!0,c=d,a=p;break}T=T.sibling}if(!_){for(T=p.child;T;){if(T===a){_=!0,a=p,c=d;break}if(T===c){_=!0,c=p,a=d;break}T=T.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Bo(n){return n=tl(n),n!==null?Es(n):null}function Es(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Es(n);if(r!==null)return r;n=n.sibling}return null}var ws=e.unstable_scheduleCallback,jo=e.unstable_cancelCallback,nl=e.unstable_shouldYield,wc=e.unstable_requestPaint,je=e.unstable_now,rl=e.unstable_getCurrentPriorityLevel,Di=e.unstable_ImmediatePriority,Or=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,$o=e.unstable_LowPriority,il=e.unstable_IdlePriority,Vi=null,en=null;function sl(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Vi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:al,Ho=Math.log,ol=Math.LN2;function al(n){return n>>>=0,n===0?32:31-(Ho(n)/ol|0)|0}var Ts=64,Is=4194304;function xr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Oi(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,_=a&268435455;if(_!==0){var T=_&~d;T!==0?c=xr(T):(p&=_,p!==0&&(c=xr(p)))}else _=a&~d,_!==0?c=xr(_):p!==0&&(c=xr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-Ut(r),d=1<<a,c|=n[a],r&=~d;return c}function Tc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var _=31-Ut(p),T=1<<_,P=d[_];P===-1?((T&a)===0||(T&c)!==0)&&(d[_]=Tc(T,r)):P<=r&&(n.expiredLanes|=T),p&=~T}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Ts;return Ts<<=1,(Ts&4194240)===0&&(Ts=64),n}function Lr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function Mr(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ut(r),n[r]=a}function ze(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function br(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Fr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ll,Ss,ul,cl,hl,Wo=!1,Bn=[],wt=null,An=null,Rn=null,Ur=new Map,hn=new Map,jn=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(n,r){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Ur.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=oa(r),r!==null&&Ss(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function Sc(n,r,a,c,d){switch(r){case"focusin":return wt=$t(wt,n,r,a,c,d),!0;case"dragenter":return An=$t(An,n,r,a,c,d),!0;case"mouseover":return Rn=$t(Rn,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Ur.set(p,$t(Ur.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,hn.set(p,$t(hn.get(p)||null,n,r,a,c,d)),!0}return!1}function fl(n){var r=Ui(n.target);if(r!==null){var a=In(r);if(a!==null){if(r=a.tag,r===13){if(r=Ni(a),r!==null){n.blockedOn=r,hl(n.priority,function(){ul(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ur(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=As(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ri=c,a.target.dispatchEvent(c),Ri=null}else return r=oa(a),r!==null&&Ss(r),n.blockedOn=a,!1;r.shift()}return!0}function Li(n,r,a){ur(n)&&a.delete(r)}function pl(){Wo=!1,wt!==null&&ur(wt)&&(wt=null),An!==null&&ur(An)&&(An=null),Rn!==null&&ur(Rn)&&(Rn=null),Ur.forEach(Li),hn.forEach(Li)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Wo||(Wo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pl)))}function Pn(n){function r(d){return Cn(d,n)}if(0<Bn.length){Cn(Bn[0],n);for(var a=1;a<Bn.length;a++){var c=Bn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Cn(wt,n),An!==null&&Cn(An,n),Rn!==null&&Cn(Rn,n),Ur.forEach(r),hn.forEach(r),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)fl(a),a.blockedOn===null&&jn.shift()}var cr=Ee.ReactCurrentBatchConfig,zr=!0;function Ke(n,r,a,c){var d=Pe,p=cr.transition;cr.transition=null;try{Pe=1,qo(n,r,a,c)}finally{Pe=d,cr.transition=p}}function Ac(n,r,a,c){var d=Pe,p=cr.transition;cr.transition=null;try{Pe=4,qo(n,r,a,c)}finally{Pe=d,cr.transition=p}}function qo(n,r,a,c){if(zr){var d=As(n,r,a,c);if(d===null)Mc(n,r,c,Mi,a),dl(n,c);else if(Sc(d,n,r,a,c))c.stopPropagation();else if(dl(n,c),r&4&&-1<Ic.indexOf(n)){for(;d!==null;){var p=oa(d);if(p!==null&&ll(p),p=As(n,r,a,c),p===null&&Mc(n,r,c,Mi,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Mc(n,r,c,null,a)}}var Mi=null;function As(n,r,a,c){if(Mi=null,n=ps(c),n=Ui(n),n!==null)if(r=In(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ni(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Mi=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rl()){case Di:return 1;case Or:return 4;case cn:case $o:return 16;case il:return 536870912;default:return 16}default:return 16}}var nn=null,Rs=null,Ht=null;function Go(){if(Ht)return Ht;var n,r=Rs,a=r.length,c,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&r[a-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Cs(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function $n(){return!0}function Qo(){return!1}function Tt(n){function r(a,c,d,p,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=_,this.currentTarget=null;for(var T in n)n.hasOwnProperty(T)&&(a=n[T],this[T]=a?a(p):p[T]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?$n:Qo,this.isPropagationStopped=Qo,this}return ee(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ps=Tt(kn),Hn=ee({},kn,{view:0,detail:0}),Rc=Tt(Hn),ks,hr,Br,bi=ee({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(ks=n.screenX-Br.screenX,hr=n.screenY-Br.screenY):hr=ks=0,Br=n),ks)},movementY:function(n){return"movementY"in n?n.movementY:hr}}),Ns=Tt(bi),Yo=ee({},bi,{dataTransfer:0}),ml=Tt(Yo),Ds=ee({},Hn,{relatedTarget:0}),Vs=Tt(Ds),gl=ee({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),dr=Tt(gl),yl=ee({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_l=Tt(yl),vl=ee({},kn,{data:0}),Xo=Tt(vl),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},El={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=El[n])?!!r[n]:!1}function Wn(){return wl}var l=ee({},Hn,{key:function(n){if(n.key){var r=Os[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Cs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(n){return n.type==="keypress"?Cs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Cs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),y=ee({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Tt(y),L=ee({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn}),U=Tt(L),X=ee({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=Tt(X),ut=ee({},bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Tt(ut),gt=[9,13,27,32],it=m&&"CompositionEvent"in window,dn=null;m&&"documentMode"in document&&(dn=document.documentMode);var rn=m&&"TextEvent"in window&&!dn,Fi=m&&(!it||dn&&8<dn&&11>=dn),xs=" ",Cf=!1;function Pf(n,r){switch(n){case"keyup":return gt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function Kv(n,r){switch(n){case"compositionend":return kf(r);case"keypress":return r.which!==32?null:(Cf=!0,xs);case"textInput":return n=r.data,n===xs&&Cf?null:n;default:return null}}function Gv(n,r){if(Ls)return n==="compositionend"||!it&&Pf(n,r)?(n=Go(),Ht=Rs=nn=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fi&&r.locale!=="ko"?null:r.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Qv[n.type]:r==="textarea"}function Df(n,r,a,c){zn(c),r=Rl(r,"onChange"),0<r.length&&(a=new Ps("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Jo=null,Zo=null;function Yv(n){Qf(n,0)}function Tl(n){var r=zs(n);if(us(r))return n}function Xv(n,r){if(n==="change")return r}var Vf=!1;if(m){var Cc;if(m){var Pc="oninput"in document;if(!Pc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),Pc=typeof Of.oninput=="function"}Cc=Pc}else Cc=!1;Vf=Cc&&(!document.documentMode||9<document.documentMode)}function xf(){Jo&&(Jo.detachEvent("onpropertychange",Lf),Zo=Jo=null)}function Lf(n){if(n.propertyName==="value"&&Tl(Zo)){var r=[];Df(r,Zo,n,ps(n)),Uo(Yv,r)}}function Jv(n,r,a){n==="focusin"?(xf(),Jo=r,Zo=a,Jo.attachEvent("onpropertychange",Lf)):n==="focusout"&&xf()}function Zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Zo)}function eE(n,r){if(n==="click")return Tl(r)}function tE(n,r){if(n==="input"||n==="change")return Tl(r)}function nE(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Nn=typeof Object.is=="function"?Object.is:nE;function ea(n,r){if(Nn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Nn(n[d],r[d]))return!1}return!0}function Mf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bf(n,r){var a=Mf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mf(a)}}function Ff(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ff(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Uf(){for(var n=window,r=Dr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Dr(n.document)}return r}function kc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function rE(n){var r=Uf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=bf(a,p);var _=bf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(_.node,_.offset)):(r.setEnd(_.node,_.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iE=m&&"documentMode"in document&&11>=document.documentMode,Ms=null,Nc=null,ta=null,Dc=!1;function zf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||Ms==null||Ms!==Dr(c)||(c=Ms,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ta&&ea(ta,c)||(ta=c,c=Rl(Nc,"onSelect"),0<c.length&&(r=new Ps("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ms)))}function Il(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var bs={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Vc={},Bf={};m&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Sl(n){if(Vc[n])return Vc[n];if(!bs[n])return n;var r=bs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Bf)return Vc[n]=r[a];return n}var jf=Sl("animationend"),$f=Sl("animationiteration"),Hf=Sl("animationstart"),Wf=Sl("transitionend"),qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(n,r){qf.set(n,r),u(r,[n])}for(var Oc=0;Oc<Kf.length;Oc++){var xc=Kf[Oc],sE=xc.toLowerCase(),oE=xc[0].toUpperCase()+xc.slice(1);jr(sE,"on"+oE)}jr(jf,"onAnimationEnd"),jr($f,"onAnimationIteration"),jr(Hf,"onAnimationStart"),jr("dblclick","onDoubleClick"),jr("focusin","onFocus"),jr("focusout","onBlur"),jr(Wf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Gf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,el(c,r,void 0,n),n.currentTarget=null}function Qf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var _=c.length-1;0<=_;_--){var T=c[_],P=T.instance,F=T.currentTarget;if(T=T.listener,P!==p&&d.isPropagationStopped())break e;Gf(d,T,F),p=P}else for(_=0;_<c.length;_++){if(T=c[_],P=T.instance,F=T.currentTarget,T=T.listener,P!==p&&d.isPropagationStopped())break e;Gf(d,T,F),p=P}}}if(Tn)throw n=zo,Tn=!1,zo=null,n}function He(n,r){var a=r[jc];a===void 0&&(a=r[jc]=new Set);var c=n+"__bubble";a.has(c)||(Yf(r,n,2,!1),a.add(c))}function Lc(n,r,a){var c=0;r&&(c|=4),Yf(a,n,c,r)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Al]){n[Al]=!0,s.forEach(function(a){a!=="selectionchange"&&(aE.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Al]||(r[Al]=!0,Lc("selectionchange",!1,r))}}function Yf(n,r,a,c){switch(Ko(r)){case 1:var d=Ke;break;case 4:d=Ac;break;default:d=qo}a=d.bind(null,r,a,n),d=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Mc(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var T=c.stateNode.containerInfo;if(T===d||T.nodeType===8&&T.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;T!==null;){if(_=Ui(T),_===null)return;if(P=_.tag,P===5||P===6){c=p=_;continue e}T=T.parentNode}}c=c.return}Uo(function(){var F=p,K=ps(a),Q=[];e:{var W=qf.get(n);if(W!==void 0){var Z=Ps,re=n;switch(n){case"keypress":if(Cs(a)===0)break e;case"keydown":case"keyup":Z=f;break;case"focusin":re="focus",Z=Vs;break;case"focusout":re="blur",Z=Vs;break;case"beforeblur":case"afterblur":Z=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=U;break;case jf:case $f:case Hf:Z=dr;break;case Wf:Z=Fe;break;case"scroll":Z=Rc;break;case"wheel":Z=Ne;break;case"copy":case"cut":case"paste":Z=_l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=E}var ie=(r&4)!==0,nt=!ie&&n==="scroll",M=ie?W!==null?W+"Capture":null:W;ie=[];for(var N=F,b;N!==null;){b=N;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=tt(N,M),Y!=null&&ie.push(ia(N,Y,b)))),nt)break;N=N.return}0<ie.length&&(W=new Z(W,re,null,a,K),Q.push({event:W,listeners:ie}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",Z=n==="mouseout"||n==="pointerout",W&&a!==Ri&&(re=a.relatedTarget||a.fromElement)&&(Ui(re)||re[fr]))break e;if((Z||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(re=a.relatedTarget||a.toElement,Z=F,re=re?Ui(re):null,re!==null&&(nt=In(re),re!==nt||re.tag!==5&&re.tag!==6)&&(re=null)):(Z=null,re=F),Z!==re)){if(ie=Ns,Y="onMouseLeave",M="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ie=E,Y="onPointerLeave",M="onPointerEnter",N="pointer"),nt=Z==null?W:zs(Z),b=re==null?W:zs(re),W=new ie(Y,N+"leave",Z,a,K),W.target=nt,W.relatedTarget=b,Y=null,Ui(K)===F&&(ie=new ie(M,N+"enter",re,a,K),ie.target=b,ie.relatedTarget=nt,Y=ie),nt=Y,Z&&re)t:{for(ie=Z,M=re,N=0,b=ie;b;b=Fs(b))N++;for(b=0,Y=M;Y;Y=Fs(Y))b++;for(;0<N-b;)ie=Fs(ie),N--;for(;0<b-N;)M=Fs(M),b--;for(;N--;){if(ie===M||M!==null&&ie===M.alternate)break t;ie=Fs(ie),M=Fs(M)}ie=null}else ie=null;Z!==null&&Xf(Q,W,Z,ie,!1),re!==null&&nt!==null&&Xf(Q,nt,re,ie,!0)}}e:{if(W=F?zs(F):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var se=Xv;else if(Nf(W))if(Vf)se=tE;else{se=Zv;var ce=Jv}else(Z=W.nodeName)&&Z.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(se=eE);if(se&&(se=se(n,F))){Df(Q,se,a,K);break e}ce&&ce(n,W,F),n==="focusout"&&(ce=W._wrapperState)&&ce.controlled&&W.type==="number"&&hs(W,"number",W.value)}switch(ce=F?zs(F):window,n){case"focusin":(Nf(ce)||ce.contentEditable==="true")&&(Ms=ce,Nc=F,ta=null);break;case"focusout":ta=Nc=Ms=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,zf(Q,a,K);break;case"selectionchange":if(iE)break;case"keydown":case"keyup":zf(Q,a,K)}var he;if(it)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ls?Pf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Fi&&a.locale!=="ko"&&(Ls||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ls&&(he=Go()):(nn=K,Rs="value"in nn?nn.value:nn.textContent,Ls=!0)),ce=Rl(F,ye),0<ce.length&&(ye=new Xo(ye,n,null,a,K),Q.push({event:ye,listeners:ce}),he?ye.data=he:(he=kf(a),he!==null&&(ye.data=he)))),(he=rn?Kv(n,a):Gv(n,a))&&(F=Rl(F,"onBeforeInput"),0<F.length&&(K=new Xo("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:F}),K.data=he))}Qf(Q,r)})}function ia(n,r,a){return{instance:n,listener:r,currentTarget:a}}function Rl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=tt(n,a),p!=null&&c.unshift(ia(n,p,d)),p=tt(n,r),p!=null&&c.push(ia(n,p,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,r,a,c,d){for(var p=r._reactName,_=[];a!==null&&a!==c;){var T=a,P=T.alternate,F=T.stateNode;if(P!==null&&P===c)break;T.tag===5&&F!==null&&(T=F,d?(P=tt(a,p),P!=null&&_.unshift(ia(a,P,T))):d||(P=tt(a,p),P!=null&&_.push(ia(a,P,T)))),a=a.return}_.length!==0&&n.push({event:r,listeners:_})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(lE,`
`).replace(uE,"")}function Cl(n,r,a){if(r=Jf(r),Jf(n)!==r&&a)throw Error(t(425))}function Pl(){}var bc=null,Fc=null;function Uc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,hE=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(dE)}:zc;function dE(n){setTimeout(function(){throw n})}function Bc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Pn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pn(r)}function $r(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qn="__reactFiber$"+Us,sa="__reactProps$"+Us,fr="__reactContainer$"+Us,jc="__reactEvents$"+Us,fE="__reactListeners$"+Us,pE="__reactHandles$"+Us;function Ui(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[fr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=ep(n);n!==null;){if(a=n[qn])return a;n=ep(n)}return r}n=a,a=n.parentNode}return null}function oa(n){return n=n[qn]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function zs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function kl(n){return n[sa]||null}var $c=[],Bs=-1;function Hr(n){return{current:n}}function We(n){0>Bs||(n.current=$c[Bs],$c[Bs]=null,Bs--)}function $e(n,r){Bs++,$c[Bs]=n.current,n.current=r}var Wr={},Dt=Hr(Wr),Wt=Hr(!1),zi=Wr;function js(n,r){var a=n.type.contextTypes;if(!a)return Wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Nl(){We(Wt),We(Dt)}function tp(n,r,a){if(Dt.current!==Wr)throw Error(t(168));$e(Dt,r),$e(Wt,a)}function np(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Le(n)||"Unknown",d));return ee({},a,c)}function Dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,zi=Dt.current,$e(Dt,n),$e(Wt,Wt.current),!0}function rp(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=np(n,r,zi),c.__reactInternalMemoizedMergedChildContext=n,We(Wt),We(Dt),$e(Dt,n)):We(Wt),$e(Wt,a)}var pr=null,Vl=!1,Hc=!1;function ip(n){pr===null?pr=[n]:pr.push(n)}function mE(n){Vl=!0,ip(n)}function qr(){if(!Hc&&pr!==null){Hc=!0;var n=0,r=Pe;try{var a=pr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}pr=null,Vl=!1}catch(d){throw pr!==null&&(pr=pr.slice(n+1)),ws(Di,qr),d}finally{Pe=r,Hc=!1}}return null}var $s=[],Hs=0,Ol=null,xl=0,fn=[],pn=0,Bi=null,mr=1,gr="";function ji(n,r){$s[Hs++]=xl,$s[Hs++]=Ol,Ol=n,xl=r}function sp(n,r,a){fn[pn++]=mr,fn[pn++]=gr,fn[pn++]=Bi,Bi=n;var c=mr;n=gr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var p=32-Ut(r)+d;if(30<p){var _=d-d%5;p=(c&(1<<_)-1).toString(32),c>>=_,d-=_,mr=1<<32-Ut(r)+d|a<<d|c,gr=p+n}else mr=1<<p|a<<d|c,gr=n}function Wc(n){n.return!==null&&(ji(n,1),sp(n,1,0))}function qc(n){for(;n===Ol;)Ol=$s[--Hs],$s[Hs]=null,xl=$s[--Hs],$s[Hs]=null;for(;n===Bi;)Bi=fn[--pn],fn[pn]=null,gr=fn[--pn],fn[pn]=null,mr=fn[--pn],fn[pn]=null}var sn=null,on=null,Ge=!1,Dn=null;function op(n,r){var a=_n(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function ap(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,sn=n,on=$r(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,sn=n,on=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Bi!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=_n(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(Ge){var r=on;if(r){var a=r;if(!ap(n,r)){if(Kc(n))throw Error(t(418));r=$r(a.nextSibling);var c=sn;r&&ap(n,r)?op(c,a):(n.flags=n.flags&-4097|2,Ge=!1,sn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,sn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ll(n){if(n!==sn)return!1;if(!Ge)return lp(n),Ge=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Uc(n.type,n.memoizedProps)),r&&(r=on)){if(Kc(n))throw up(),Error(t(418));for(;r;)op(n,r),r=$r(r.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){on=$r(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}on=null}}else on=sn?$r(n.stateNode.nextSibling):null;return!0}function up(){for(var n=on;n;)n=$r(n.nextSibling)}function Ws(){on=sn=null,Ge=!1}function Qc(n){Dn===null?Dn=[n]:Dn.push(n)}var gE=Ee.ReactCurrentBatchConfig;function aa(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(_){var T=d.refs;_===null?delete T[p]:T[p]=_},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function cp(n){var r=n._init;return r(n._payload)}function hp(n){function r(M,N){if(n){var b=M.deletions;b===null?(M.deletions=[N],M.flags|=16):b.push(N)}}function a(M,N){if(!n)return null;for(;N!==null;)r(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ei(M,N),M.index=0,M.sibling=null,M}function p(M,N,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<N?(M.flags|=2,N):b):(M.flags|=2,N)):(M.flags|=1048576,N)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function T(M,N,b,Y){return N===null||N.tag!==6?(N=zh(b,M.mode,Y),N.return=M,N):(N=d(N,b),N.return=M,N)}function P(M,N,b,Y){var se=b.type;return se===D?K(M,N,b.props.children,Y,b.key):N!==null&&(N.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Nt&&cp(se)===N.type)?(Y=d(N,b.props),Y.ref=aa(M,N,b),Y.return=M,Y):(Y=ou(b.type,b.key,b.props,null,M.mode,Y),Y.ref=aa(M,N,b),Y.return=M,Y)}function F(M,N,b,Y){return N===null||N.tag!==4||N.stateNode.containerInfo!==b.containerInfo||N.stateNode.implementation!==b.implementation?(N=Bh(b,M.mode,Y),N.return=M,N):(N=d(N,b.children||[]),N.return=M,N)}function K(M,N,b,Y,se){return N===null||N.tag!==7?(N=Yi(b,M.mode,Y,se),N.return=M,N):(N=d(N,b),N.return=M,N)}function Q(M,N,b){if(typeof N=="string"&&N!==""||typeof N=="number")return N=zh(""+N,M.mode,b),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case qe:return b=ou(N.type,N.key,N.props,null,M.mode,b),b.ref=aa(M,null,N),b.return=M,b;case Ae:return N=Bh(N,M.mode,b),N.return=M,N;case Nt:var Y=N._init;return Q(M,Y(N._payload),b)}if(ir(N)||ue(N))return N=Yi(N,M.mode,b,null),N.return=M,N;Ml(M,N)}return null}function W(M,N,b,Y){var se=N!==null?N.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return se!==null?null:T(M,N,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qe:return b.key===se?P(M,N,b,Y):null;case Ae:return b.key===se?F(M,N,b,Y):null;case Nt:return se=b._init,W(M,N,se(b._payload),Y)}if(ir(b)||ue(b))return se!==null?null:K(M,N,b,Y,null);Ml(M,b)}return null}function Z(M,N,b,Y,se){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,T(N,M,""+Y,se);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case qe:return M=M.get(Y.key===null?b:Y.key)||null,P(N,M,Y,se);case Ae:return M=M.get(Y.key===null?b:Y.key)||null,F(N,M,Y,se);case Nt:var ce=Y._init;return Z(M,N,b,ce(Y._payload),se)}if(ir(Y)||ue(Y))return M=M.get(b)||null,K(N,M,Y,se,null);Ml(N,Y)}return null}function re(M,N,b,Y){for(var se=null,ce=null,he=N,ye=N=0,vt=null;he!==null&&ye<b.length;ye++){he.index>ye?(vt=he,he=null):vt=he.sibling;var Oe=W(M,he,b[ye],Y);if(Oe===null){he===null&&(he=vt);break}n&&he&&Oe.alternate===null&&r(M,he),N=p(Oe,N,ye),ce===null?se=Oe:ce.sibling=Oe,ce=Oe,he=vt}if(ye===b.length)return a(M,he),Ge&&ji(M,ye),se;if(he===null){for(;ye<b.length;ye++)he=Q(M,b[ye],Y),he!==null&&(N=p(he,N,ye),ce===null?se=he:ce.sibling=he,ce=he);return Ge&&ji(M,ye),se}for(he=c(M,he);ye<b.length;ye++)vt=Z(he,M,ye,b[ye],Y),vt!==null&&(n&&vt.alternate!==null&&he.delete(vt.key===null?ye:vt.key),N=p(vt,N,ye),ce===null?se=vt:ce.sibling=vt,ce=vt);return n&&he.forEach(function(ti){return r(M,ti)}),Ge&&ji(M,ye),se}function ie(M,N,b,Y){var se=ue(b);if(typeof se!="function")throw Error(t(150));if(b=se.call(b),b==null)throw Error(t(151));for(var ce=se=null,he=N,ye=N=0,vt=null,Oe=b.next();he!==null&&!Oe.done;ye++,Oe=b.next()){he.index>ye?(vt=he,he=null):vt=he.sibling;var ti=W(M,he,Oe.value,Y);if(ti===null){he===null&&(he=vt);break}n&&he&&ti.alternate===null&&r(M,he),N=p(ti,N,ye),ce===null?se=ti:ce.sibling=ti,ce=ti,he=vt}if(Oe.done)return a(M,he),Ge&&ji(M,ye),se;if(he===null){for(;!Oe.done;ye++,Oe=b.next())Oe=Q(M,Oe.value,Y),Oe!==null&&(N=p(Oe,N,ye),ce===null?se=Oe:ce.sibling=Oe,ce=Oe);return Ge&&ji(M,ye),se}for(he=c(M,he);!Oe.done;ye++,Oe=b.next())Oe=Z(he,M,ye,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&he.delete(Oe.key===null?ye:Oe.key),N=p(Oe,N,ye),ce===null?se=Oe:ce.sibling=Oe,ce=Oe);return n&&he.forEach(function(QE){return r(M,QE)}),Ge&&ji(M,ye),se}function nt(M,N,b,Y){if(typeof b=="object"&&b!==null&&b.type===D&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case qe:e:{for(var se=b.key,ce=N;ce!==null;){if(ce.key===se){if(se=b.type,se===D){if(ce.tag===7){a(M,ce.sibling),N=d(ce,b.props.children),N.return=M,M=N;break e}}else if(ce.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Nt&&cp(se)===ce.type){a(M,ce.sibling),N=d(ce,b.props),N.ref=aa(M,ce,b),N.return=M,M=N;break e}a(M,ce);break}else r(M,ce);ce=ce.sibling}b.type===D?(N=Yi(b.props.children,M.mode,Y,b.key),N.return=M,M=N):(Y=ou(b.type,b.key,b.props,null,M.mode,Y),Y.ref=aa(M,N,b),Y.return=M,M=Y)}return _(M);case Ae:e:{for(ce=b.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===b.containerInfo&&N.stateNode.implementation===b.implementation){a(M,N.sibling),N=d(N,b.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else r(M,N);N=N.sibling}N=Bh(b,M.mode,Y),N.return=M,M=N}return _(M);case Nt:return ce=b._init,nt(M,N,ce(b._payload),Y)}if(ir(b))return re(M,N,b,Y);if(ue(b))return ie(M,N,b,Y);Ml(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,b),N.return=M,M=N):(a(M,N),N=zh(b,M.mode,Y),N.return=M,M=N),_(M)):a(M,N)}return nt}var qs=hp(!0),dp=hp(!1),bl=Hr(null),Fl=null,Ks=null,Yc=null;function Xc(){Yc=Ks=Fl=null}function Jc(n){var r=bl.current;We(bl),n._currentValue=r}function Zc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Gs(n,r){Fl=n,Yc=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var r=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:r,next:null},Ks===null){if(Fl===null)throw Error(t(308));Ks=n,Fl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return r}var $i=null;function eh(n){$i===null?$i=[n]:$i.push(n)}function fp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,eh(r)):(a.next=d.next,d.next=a),r.interleaved=a,yr(n,c)}function yr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Kr=!1;function th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Gr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,yr(n,a)}return d=c.interleaved,d===null?(r.next=r,eh(c)):(r.next=d.next,d.next=r),c.interleaved=r,yr(n,a)}function Ul(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}function mp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=_:p=p.next=_,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function zl(n,r,a,c){var d=n.updateQueue;Kr=!1;var p=d.firstBaseUpdate,_=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var P=T,F=P.next;P.next=null,_===null?p=F:_.next=F,_=P;var K=n.alternate;K!==null&&(K=K.updateQueue,T=K.lastBaseUpdate,T!==_&&(T===null?K.firstBaseUpdate=F:T.next=F,K.lastBaseUpdate=P))}if(p!==null){var Q=d.baseState;_=0,K=F=P=null,T=p;do{var W=T.lane,Z=T.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:Z,lane:0,tag:T.tag,payload:T.payload,callback:T.callback,next:null});e:{var re=n,ie=T;switch(W=r,Z=a,ie.tag){case 1:if(re=ie.payload,typeof re=="function"){Q=re.call(Z,Q,W);break e}Q=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ie.payload,W=typeof re=="function"?re.call(Z,Q,W):re,W==null)break e;Q=ee({},Q,W);break e;case 2:Kr=!0}}T.callback!==null&&T.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[T]:W.push(T))}else Z={eventTime:Z,lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},K===null?(F=K=Z,P=Q):K=K.next=Z,_|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do _|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);qi|=_,n.lanes=_,n.memoizedState=Q}}function gp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Kn=Hr(la),ua=Hr(la),ca=Hr(la);function Hi(n){if(n===la)throw Error(t(174));return n}function nh(n,r){switch($e(ca,r),$e(ua,n),$e(Kn,la),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:lt(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=lt(r,n)}We(Kn),$e(Kn,r)}function Qs(){We(Kn),We(ua),We(ca)}function yp(n){Hi(ca.current);var r=Hi(Kn.current),a=lt(r,n.type);r!==a&&($e(ua,n),$e(Kn,a))}function rh(n){ua.current===n&&(We(Kn),We(ua))}var Ye=Hr(0);function Bl(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ih=[];function sh(){for(var n=0;n<ih.length;n++)ih[n]._workInProgressVersionPrimary=null;ih.length=0}var jl=Ee.ReactCurrentDispatcher,oh=Ee.ReactCurrentBatchConfig,Wi=0,Xe=null,ct=null,yt=null,$l=!1,ha=!1,da=0,yE=0;function Vt(){throw Error(t(321))}function ah(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Nn(n[a],r[a]))return!1;return!0}function lh(n,r,a,c,d,p){if(Wi=p,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,jl.current=n===null||n.memoizedState===null?wE:TE,n=a(c,d),ha){p=0;do{if(ha=!1,da=0,25<=p)throw Error(t(301));p+=1,yt=ct=null,r.updateQueue=null,jl.current=IE,n=a(c,d)}while(ha)}if(jl.current=ql,r=ct!==null&&ct.next!==null,Wi=0,yt=ct=Xe=null,$l=!1,r)throw Error(t(300));return n}function uh(){var n=da!==0;return da=0,n}function Gn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Xe.memoizedState=yt=n:yt=yt.next=n,yt}function gn(){if(ct===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var r=yt===null?Xe.memoizedState:yt.next;if(r!==null)yt=r,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Xe.memoizedState=yt=n:yt=yt.next=n}return yt}function fa(n,r){return typeof r=="function"?r(n):r}function ch(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var _=d.next;d.next=p.next,p.next=_}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var T=_=null,P=null,F=p;do{var K=F.lane;if((Wi&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var Q={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(T=P=Q,_=c):P=P.next=Q,Xe.lanes|=K,qi|=K}F=F.next}while(F!==null&&F!==p);P===null?_=c:P.next=T,Nn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=_,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Xe.lanes|=p,qi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function hh(n){var r=gn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do p=n(p,_.action),_=_.next;while(_!==d);Nn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function _p(){}function vp(n,r){var a=Xe,c=gn(),d=r(),p=!Nn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,dh(Tp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,pa(9,wp.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Wi&30)!==0||Ep(a,r,d)}return d}function Ep(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function wp(n,r,a,c){r.value=a,r.getSnapshot=c,Ip(r)&&Sp(n)}function Tp(n,r,a){return a(function(){Ip(r)&&Sp(n)})}function Ip(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Nn(n,a)}catch{return!0}}function Sp(n){var r=yr(n,1);r!==null&&Ln(r,n,1,-1)}function Ap(n){var r=Gn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},r.queue=n,n=n.dispatch=EE.bind(null,Xe,n),[r.memoizedState,n]}function pa(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function Rp(){return gn().memoizedState}function Hl(n,r,a,c){var d=Gn();Xe.flags|=n,d.memoizedState=pa(1|r,a,void 0,c===void 0?null:c)}function Wl(n,r,a,c){var d=gn();c=c===void 0?null:c;var p=void 0;if(ct!==null){var _=ct.memoizedState;if(p=_.destroy,c!==null&&ah(c,_.deps)){d.memoizedState=pa(r,a,p,c);return}}Xe.flags|=n,d.memoizedState=pa(1|r,a,p,c)}function Cp(n,r){return Hl(8390656,8,n,r)}function dh(n,r){return Wl(2048,8,n,r)}function Pp(n,r){return Wl(4,2,n,r)}function kp(n,r){return Wl(4,4,n,r)}function Np(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Dp(n,r,a){return a=a!=null?a.concat([n]):null,Wl(4,4,Np.bind(null,r,n),a)}function fh(){}function Vp(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ah(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function Op(n,r){var a=gn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&ah(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function xp(n,r,a){return(Wi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Nn(a,r)||(a=xi(),Xe.lanes|=a,qi|=a,n.baseState=!0),r)}function _E(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=oh.transition;oh.transition={};try{n(!1),r()}finally{Pe=a,oh.transition=c}}function Lp(){return gn().memoizedState}function vE(n,r,a){var c=Jr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(n))bp(r,a);else if(a=fp(n,r,a,c),a!==null){var d=jt();Ln(a,n,c,d),Fp(a,r,c)}}function EE(n,r,a){var c=Jr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))bp(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var _=r.lastRenderedState,T=p(_,a);if(d.hasEagerState=!0,d.eagerState=T,Nn(T,_)){var P=r.interleaved;P===null?(d.next=d,eh(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=fp(n,r,d,c),a!==null&&(d=jt(),Ln(a,n,c,d),Fp(a,r,c))}}function Mp(n){var r=n.alternate;return n===Xe||r!==null&&r===Xe}function bp(n,r){ha=$l=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Fp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,br(n,a)}}var ql={readContext:mn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},wE={readContext:mn,useCallback:function(n,r){return Gn().memoizedState=[n,r===void 0?null:r],n},useContext:mn,useEffect:Cp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Hl(4194308,4,Np.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Hl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Hl(4,2,n,r)},useMemo:function(n,r){var a=Gn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Gn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=vE.bind(null,Xe,n),[c.memoizedState,n]},useRef:function(n){var r=Gn();return n={current:n},r.memoizedState=n},useState:Ap,useDebugValue:fh,useDeferredValue:function(n){return Gn().memoizedState=n},useTransition:function(){var n=Ap(!1),r=n[0];return n=_E.bind(null,n[1]),Gn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Xe,d=Gn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Wi&30)!==0||Ep(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,Cp(Tp.bind(null,c,p,n),[n]),c.flags|=2048,pa(9,wp.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Gn(),r=_t.identifierPrefix;if(Ge){var a=gr,c=mr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=da++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=yE++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},TE={readContext:mn,useCallback:Vp,useContext:mn,useEffect:dh,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:kp,useMemo:Op,useReducer:ch,useRef:Rp,useState:function(){return ch(fa)},useDebugValue:fh,useDeferredValue:function(n){var r=gn();return xp(r,ct.memoizedState,n)},useTransition:function(){var n=ch(fa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1},IE={readContext:mn,useCallback:Vp,useContext:mn,useEffect:dh,useImperativeHandle:Dp,useInsertionEffect:Pp,useLayoutEffect:kp,useMemo:Op,useReducer:hh,useRef:Rp,useState:function(){return hh(fa)},useDebugValue:fh,useDeferredValue:function(n){var r=gn();return ct===null?r.memoizedState=n:xp(r,ct.memoizedState,n)},useTransition:function(){var n=hh(fa)[0],r=gn().memoizedState;return[n,r]},useMutableSource:_p,useSyncExternalStore:vp,useId:Lp,unstable_isNewReconciler:!1};function Vn(n,r){if(n&&n.defaultProps){r=ee({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function ph(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:ee({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Jr(n),p=_r(c,d);p.payload=r,a!=null&&(p.callback=a),r=Gr(n,p,d),r!==null&&(Ln(r,n,d,c),Ul(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=jt(),d=Jr(n),p=_r(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Gr(n,p,d),r!==null&&(Ln(r,n,d,c),Ul(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=jt(),c=Jr(n),d=_r(a,c);d.tag=2,r!=null&&(d.callback=r),r=Gr(n,d,c),r!==null&&(Ln(r,n,c,a),Ul(r,n,c))}};function Up(n,r,a,c,d,p,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,_):r.prototype&&r.prototype.isPureReactComponent?!ea(a,c)||!ea(d,p):!0}function zp(n,r,a){var c=!1,d=Wr,p=r.contextType;return typeof p=="object"&&p!==null?p=mn(p):(d=qt(r)?zi:Dt.current,c=r.contextTypes,p=(c=c!=null)?js(n,d):Wr),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Kl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Bp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Kl.enqueueReplaceState(r,r.state,null)}function mh(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},th(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=mn(p):(p=qt(r)?zi:Dt.current,d.context=js(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(ph(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Kl.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,r){try{var a="",c=r;do a+=Ie(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function gh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function yh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var SE=typeof WeakMap=="function"?WeakMap:Map;function jp(n,r,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){eu||(eu=!0,Vh=c),yh(n,r)},a}function $p(n,r,a){a=_r(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){yh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){yh(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var _=r.stack;this.componentDidCatch(r.value,{componentStack:_!==null?_:""})}),a}function Hp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new SE;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=FE.bind(null,n,r,a),r.then(n,n))}function Wp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function qp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=_r(-1,1),r.tag=2,Gr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var AE=Ee.ReactCurrentOwner,Kt=!1;function Bt(n,r,a,c){r.child=n===null?dp(r,null,a,c):qs(r,n.child,a,c)}function Kp(n,r,a,c,d){a=a.render;var p=r.ref;return Gs(r,d),c=lh(n,r,a,c,p,d),a=uh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,vr(n,r,d)):(Ge&&a&&Wc(r),r.flags|=1,Bt(n,r,c,d),r.child)}function Gp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!Uh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Qp(n,r,p,c,d)):(n=ou(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var _=p.memoizedProps;if(a=a.compare,a=a!==null?a:ea,a(_,c)&&n.ref===r.ref)return vr(n,r,d)}return r.flags|=1,n=ei(p,c),n.ref=r.ref,n.return=r,r.child=n}function Qp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(ea(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,vr(n,r,d)}return _h(n,r,a,c,d)}function Yp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Js,an),an|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,$e(Js,an),an|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,$e(Js,an),an|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,$e(Js,an),an|=c;return Bt(n,r,d,a),r.child}function Xp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function _h(n,r,a,c,d){var p=qt(a)?zi:Dt.current;return p=js(r,p),Gs(r,d),a=lh(n,r,a,c,p,d),c=uh(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,vr(n,r,d)):(Ge&&c&&Wc(r),r.flags|=1,Bt(n,r,a,d),r.child)}function Jp(n,r,a,c,d){if(qt(a)){var p=!0;Dl(r)}else p=!1;if(Gs(r,d),r.stateNode===null)Ql(n,r),zp(r,a,c),mh(r,a,c,d),c=!0;else if(n===null){var _=r.stateNode,T=r.memoizedProps;_.props=T;var P=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=mn(F):(F=qt(a)?zi:Dt.current,F=js(r,F));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";Q||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==c||P!==F)&&Bp(r,_,c,F),Kr=!1;var W=r.memoizedState;_.state=W,zl(r,c,_,d),P=r.memoizedState,T!==c||W!==P||Wt.current||Kr?(typeof K=="function"&&(ph(r,a,K,c),P=r.memoizedState),(T=Kr||Up(r,a,T,c,W,P,F))?(Q||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),_.props=c,_.state=P,_.context=F,c=T):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{_=r.stateNode,pp(n,r),T=r.memoizedProps,F=r.type===r.elementType?T:Vn(r.type,T),_.props=F,Q=r.pendingProps,W=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=mn(P):(P=qt(a)?zi:Dt.current,P=js(r,P));var Z=a.getDerivedStateFromProps;(K=typeof Z=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Q||W!==P)&&Bp(r,_,c,P),Kr=!1,W=r.memoizedState,_.state=W,zl(r,c,_,d);var re=r.memoizedState;T!==Q||W!==re||Wt.current||Kr?(typeof Z=="function"&&(ph(r,a,Z,c),re=r.memoizedState),(F=Kr||Up(r,a,F,c,W,re,P)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,re,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,re,P)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=re),_.props=c,_.state=re,_.context=P,c=F):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return vh(n,r,a,c,p,d)}function vh(n,r,a,c,d,p){Xp(n,r);var _=(r.flags&128)!==0;if(!c&&!_)return d&&rp(r,a,!1),vr(n,r,p);c=r.stateNode,AE.current=r;var T=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&_?(r.child=qs(r,n.child,null,p),r.child=qs(r,null,T,p)):Bt(n,r,T,p),r.memoizedState=c.state,d&&rp(r,a,!0),r.child}function Zp(n){var r=n.stateNode;r.pendingContext?tp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&tp(n,r.context,!1),nh(n,r.containerInfo)}function em(n,r,a,c,d){return Ws(),Qc(d),r.flags|=256,Bt(n,r,a,c),r.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,r,a){var c=r.pendingProps,d=Ye.current,p=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(d&2)!==0),T?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),$e(Ye,d&1),n===null)return Gc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(_=c.children,n=c.fallback,p?(c=r.mode,p=r.child,_={mode:"hidden",children:_},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=_):p=au(_,c,0,null),n=Yi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=wh(a),r.memoizedState=Eh,n):Th(r,_));if(d=n.memoizedState,d!==null&&(T=d.dehydrated,T!==null))return RE(n,r,_,c,T,d,a);if(p){p=c.fallback,_=r.mode,d=n.child,T=d.sibling;var P={mode:"hidden",children:c.children};return(_&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=ei(d,P),c.subtreeFlags=d.subtreeFlags&14680064),T!==null?p=ei(T,p):(p=Yi(p,_,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,_=n.child.memoizedState,_=_===null?wh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},p.memoizedState=_,p.childLanes=n.childLanes&~a,r.memoizedState=Eh,c}return p=n.child,n=p.sibling,c=ei(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function Th(n,r){return r=au({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Gl(n,r,a,c){return c!==null&&Qc(c),qs(r,n.child,null,a),n=Th(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function RE(n,r,a,c,d,p,_){if(a)return r.flags&256?(r.flags&=-257,c=gh(Error(t(422))),Gl(n,r,_,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=au({mode:"visible",children:c.children},d,0,null),p=Yi(p,d,_,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&qs(r,n.child,null,_),r.child.memoizedState=wh(_),r.memoizedState=Eh,p);if((r.mode&1)===0)return Gl(n,r,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var T=c.dgst;return c=T,p=Error(t(419)),c=gh(p,c,void 0),Gl(n,r,_,c)}if(T=(_&n.childLanes)!==0,Kt||T){if(c=_t,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,yr(n,d),Ln(c,n,d,-1))}return Fh(),c=gh(Error(t(421))),Gl(n,r,_,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=UE.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,on=$r(d.nextSibling),sn=r,Ge=!0,Dn=null,n!==null&&(fn[pn++]=mr,fn[pn++]=gr,fn[pn++]=Bi,mr=n.id,gr=n.overflow,Bi=r),r=Th(r,c.children),r.flags|=4096,r)}function nm(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Zc(n.return,r,a)}function Ih(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function rm(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(Bt(n,r,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,a,r);else if(n.tag===19)nm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if($e(Ye,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),Ih(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ih(r,!0,a,null,p);break;case"together":Ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ql(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function vr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),qi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=ei(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=ei(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function CE(n,r,a){switch(r.tag){case 3:Zp(r),Ws();break;case 5:yp(r);break;case 1:qt(r.type)&&Dl(r);break;case 4:nh(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;$e(bl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?tm(n,r,a):($e(Ye,Ye.current&1),n=vr(n,r,a),n!==null?n.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return r.lanes=0,Yp(n,r,a)}return vr(n,r,a)}var im,Sh,sm,om;im=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sh=function(){},sm=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,Hi(Kn.current);var p=null;switch(a){case"input":d=Ii(n,d),c=Ii(n,c),p=[];break;case"select":d=ee({},d,{value:void 0}),c=ee({},c,{value:void 0}),p=[];break;case"textarea":d=ko(n,d),c=ko(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Pl)}Lo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var T=d[F];for(_ in T)T.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?p||(p=[]):(p=p||[]).push(F,null));for(F in c){var P=c[F];if(T=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==T&&(P!=null||T!=null))if(F==="style")if(T){for(_ in T)!T.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&T[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(p||(p=[]),p.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,T=T?T.__html:void 0,P!=null&&T!==P&&(p=p||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&He("scroll",n),p||T===P||(p=[])):(p=p||[]).push(F,P))}a&&(p=p||[]).push("style",a);var F=p;(r.updateQueue=F)&&(r.flags|=4)}},om=function(n,r,a,c){a!==c&&(r.flags|=4)};function ma(n,r){if(!Ge)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function PE(n,r,a){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(r),null;case 1:return qt(r.type)&&Nl(),Ot(r),null;case 3:return c=r.stateNode,Qs(),We(Wt),We(Dt),sh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ll(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dn!==null&&(Lh(Dn),Dn=null))),Sh(n,r),Ot(r),null;case 5:rh(r);var d=Hi(ca.current);if(a=r.type,n!==null&&r.stateNode!=null)sm(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ot(r),null}if(n=Hi(Kn.current),Ll(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[qn]=r,c[sa]=p,n=(r.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<na.length;d++)He(na[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":cs(c,p),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},He("invalid",c);break;case"textarea":ds(c,p),He("invalid",c)}Lo(a,p),d=null;for(var _ in p)if(p.hasOwnProperty(_)){var T=p[_];_==="children"?typeof T=="string"?c.textContent!==T&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",T]):typeof T=="number"&&c.textContent!==""+T&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,T,n),d=["children",""+T]):o.hasOwnProperty(_)&&T!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":rr(c),Za(c,p,!0);break;case"textarea":rr(c),No(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Pl)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[qn]=r,n[sa]=c,im(n,r,!1,!1),r.stateNode=n;e:{switch(_=Mo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<na.length;d++)He(na[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":cs(n,c),d=Ii(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ee({},c,{value:void 0}),He("invalid",n);break;case"textarea":ds(n,c),d=ko(n,c),He("invalid",n);break;default:d=c}Lo(a,d),T=d;for(p in T)if(T.hasOwnProperty(p)){var P=T[p];p==="style"?Oo(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Do(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Vr(n,P):typeof P=="number"&&Vr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&He("scroll",n):P!=null&&me(n,p,P,_))}switch(a){case"input":rr(n),Za(n,c,!1);break;case"textarea":rr(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?sr(n,!!c.multiple,p,!1):c.defaultValue!=null&&sr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Pl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ot(r),null;case 6:if(n&&r.stateNode!=null)om(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=Hi(ca.current),Hi(Kn.current),Ll(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(p=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Cl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return Ot(r),null;case 13:if(We(Ye),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&on!==null&&(r.mode&1)!==0&&(r.flags&128)===0)up(),Ws(),r.flags|=98560,p=!1;else if(p=Ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=r}else Ws(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ot(r),p=!1}else Dn!==null&&(Lh(Dn),Dn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ye.current&1)!==0?ht===0&&(ht=3):Fh())),r.updateQueue!==null&&(r.flags|=4),Ot(r),null);case 4:return Qs(),Sh(n,r),n===null&&ra(r.stateNode.containerInfo),Ot(r),null;case 10:return Jc(r.type._context),Ot(r),null;case 17:return qt(r.type)&&Nl(),Ot(r),null;case 19:if(We(Ye),p=r.memoizedState,p===null)return Ot(r),null;if(c=(r.flags&128)!==0,_=p.rendering,_===null)if(c)ma(p,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=Bl(n),_!==null){for(r.flags|=128,ma(p,!1),c=_.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,_=p.alternate,_===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=_.childLanes,p.lanes=_.lanes,p.child=_.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=_.memoizedProps,p.memoizedState=_.memoizedState,p.updateQueue=_.updateQueue,p.type=_.type,n=_.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),r.child}n=n.sibling}p.tail!==null&&je()>Zs&&(r.flags|=128,c=!0,ma(p,!1),r.lanes=4194304)}else{if(!c)if(n=Bl(_),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ma(p,!0),p.tail===null&&p.tailMode==="hidden"&&!_.alternate&&!Ge)return Ot(r),null}else 2*je()-p.renderingStartTime>Zs&&a!==1073741824&&(r.flags|=128,c=!0,ma(p,!1),r.lanes=4194304);p.isBackwards?(_.sibling=r.child,r.child=_):(a=p.last,a!==null?a.sibling=_:r.child=_,p.last=_)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=je(),r.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),r):(Ot(r),null);case 22:case 23:return bh(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(an&1073741824)!==0&&(Ot(r),r.subtreeFlags&6&&(r.flags|=8192)):Ot(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function kE(n,r){switch(qc(r),r.tag){case 1:return qt(r.type)&&Nl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qs(),We(Wt),We(Dt),sh(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return rh(r),null;case 13:if(We(Ye),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ws()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return We(Ye),null;case 4:return Qs(),null;case 10:return Jc(r.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var Yl=!1,xt=!1,NE=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Xs(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,r,c)}else a.current=null}function Ah(n,r,a){try{a()}catch(c){Ze(n,r,c)}}var am=!1;function DE(n,r){if(bc=zr,n=Uf(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var _=0,T=-1,P=-1,F=0,K=0,Q=n,W=null;t:for(;;){for(var Z;Q!==a||d!==0&&Q.nodeType!==3||(T=_+d),Q!==p||c!==0&&Q.nodeType!==3||(P=_+c),Q.nodeType===3&&(_+=Q.nodeValue.length),(Z=Q.firstChild)!==null;)W=Q,Q=Z;for(;;){if(Q===n)break t;if(W===a&&++F===d&&(T=_),W===p&&++K===c&&(P=_),(Z=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=Z}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},zr=!1,ne=r;ne!==null;)if(r=ne,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ne=n;else for(;ne!==null;){r=ne;try{var re=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ie=re.memoizedProps,nt=re.memoizedState,M=r.stateNode,N=M.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Vn(r.type,ie),nt);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){Ze(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,ne=n;break}ne=r.return}return re=am,am=!1,re}function ga(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Ah(r,a,p)}d=d.next}while(d!==c)}}function Xl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function Rh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function lm(n){var r=n.alternate;r!==null&&(n.alternate=null,lm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[sa],delete r[jc],delete r[fE],delete r[pE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ch(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Pl));else if(c!==4&&(n=n.child,n!==null))for(Ch(n,r,a),n=n.sibling;n!==null;)Ch(n,r,a),n=n.sibling}function Ph(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ph(n,r,a),n=n.sibling;n!==null;)Ph(n,r,a),n=n.sibling}var It=null,On=!1;function Qr(n,r,a){for(a=a.child;a!==null;)hm(n,r,a),a=a.sibling}function hm(n,r,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Vi,a)}catch{}switch(a.tag){case 5:xt||Xs(a,r);case 6:var c=It,d=On;It=null,Qr(n,r,a),It=c,On=d,It!==null&&(On?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(On?(n=It,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),Pn(n)):Bc(It,a.stateNode));break;case 4:c=It,d=On,It=a.stateNode.containerInfo,On=!0,Qr(n,r,a),It=c,On=d;break;case 0:case 11:case 14:case 15:if(!xt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,_=p.destroy;p=p.tag,_!==void 0&&((p&2)!==0||(p&4)!==0)&&Ah(a,r,_),d=d.next}while(d!==c)}Qr(n,r,a);break;case 1:if(!xt&&(Xs(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(T){Ze(a,r,T)}Qr(n,r,a);break;case 21:Qr(n,r,a);break;case 22:a.mode&1?(xt=(c=xt)||a.memoizedState!==null,Qr(n,r,a),xt=c):Qr(n,r,a);break;default:Qr(n,r,a)}}function dm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new NE),r.forEach(function(c){var d=zE.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function xn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,_=r,T=_;e:for(;T!==null;){switch(T.tag){case 5:It=T.stateNode,On=!1;break e;case 3:It=T.stateNode.containerInfo,On=!0;break e;case 4:It=T.stateNode.containerInfo,On=!0;break e}T=T.return}if(It===null)throw Error(t(160));hm(p,_,d),It=null,On=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){Ze(d,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)fm(r,n),r=r.sibling}function fm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xn(r,n),Qn(n),c&4){try{ga(3,n,n.return),Xl(3,n)}catch(ie){Ze(n,n.return,ie)}try{ga(5,n,n.return)}catch(ie){Ze(n,n.return,ie)}}break;case 1:xn(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(xn(r,n),Qn(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var d=n.stateNode;try{Vr(d,"")}catch(ie){Ze(n,n.return,ie)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,_=a!==null?a.memoizedProps:p,T=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{T==="input"&&p.type==="radio"&&p.name!=null&&Co(d,p),Mo(T,_);var F=Mo(T,p);for(_=0;_<P.length;_+=2){var K=P[_],Q=P[_+1];K==="style"?Oo(d,Q):K==="dangerouslySetInnerHTML"?Do(d,Q):K==="children"?Vr(d,Q):me(d,K,Q,F)}switch(T){case"input":Po(d,p);break;case"textarea":fs(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Z=p.value;Z!=null?sr(d,!!p.multiple,Z,!1):W!==!!p.multiple&&(p.defaultValue!=null?sr(d,!!p.multiple,p.defaultValue,!0):sr(d,!!p.multiple,p.multiple?[]:"",!1))}d[sa]=p}catch(ie){Ze(n,n.return,ie)}}break;case 6:if(xn(r,n),Qn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ie){Ze(n,n.return,ie)}}break;case 3:if(xn(r,n),Qn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pn(r.containerInfo)}catch(ie){Ze(n,n.return,ie)}break;case 4:xn(r,n),Qn(n);break;case 13:xn(r,n),Qn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Dh=je())),c&4&&dm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(xt=(F=xt)||K,xn(r,n),xt=F):xn(r,n),Qn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&(n.mode&1)!==0)for(ne=n,K=n.child;K!==null;){for(Q=ne=K;ne!==null;){switch(W=ne,Z=W.child,W.tag){case 0:case 11:case 14:case 15:ga(4,W,W.return);break;case 1:Xs(W,W.return);var re=W.stateNode;if(typeof re.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,re.props=r.memoizedProps,re.state=r.memoizedState,re.componentWillUnmount()}catch(ie){Ze(c,a,ie)}}break;case 5:Xs(W,W.return);break;case 22:if(W.memoizedState!==null){gm(Q);continue}}Z!==null?(Z.return=W,ne=Z):gm(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,F?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(T=Q.stateNode,P=Q.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,T.style.display=Vo("display",_))}catch(ie){Ze(n,n.return,ie)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=F?"":Q.memoizedProps}catch(ie){Ze(n,n.return,ie)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:xn(r,n),Qn(n),c&4&&dm(n);break;case 21:break;default:xn(r,n),Qn(n)}}function Qn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vr(d,""),c.flags&=-33);var p=cm(n);Ph(n,p,d);break;case 3:case 4:var _=c.stateNode.containerInfo,T=cm(n);Ch(n,T,_);break;default:throw Error(t(161))}}catch(P){Ze(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function VE(n,r,a){ne=n,pm(n)}function pm(n,r,a){for(var c=(n.mode&1)!==0;ne!==null;){var d=ne,p=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Yl;if(!_){var T=d.alternate,P=T!==null&&T.memoizedState!==null||xt;T=Yl;var F=xt;if(Yl=_,(xt=P)&&!F)for(ne=d;ne!==null;)_=ne,P=_.child,_.tag===22&&_.memoizedState!==null?ym(d):P!==null?(P.return=_,ne=P):ym(d);for(;p!==null;)ne=p,pm(p),p=p.sibling;ne=d,Yl=T,xt=F}mm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ne=p):mm(n)}}function mm(n){for(;ne!==null;){var r=ne;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xt||Xl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!xt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&gp(r,p,c);break;case 3:var _=r.updateQueue;if(_!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}gp(r,_,a)}break;case 5:var T=r.stateNode;if(a===null&&r.flags&4){a=T;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Pn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xt||r.flags&512&&Rh(r)}catch(W){Ze(r,r.return,W)}}if(r===n){ne=null;break}if(a=r.sibling,a!==null){a.return=r.return,ne=a;break}ne=r.return}}function gm(n){for(;ne!==null;){var r=ne;if(r===n){ne=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ne=a;break}ne=r.return}}function ym(n){for(;ne!==null;){var r=ne;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Xl(4,r)}catch(P){Ze(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){Ze(r,d,P)}}var p=r.return;try{Rh(r)}catch(P){Ze(r,p,P)}break;case 5:var _=r.return;try{Rh(r)}catch(P){Ze(r,_,P)}}}catch(P){Ze(r,r.return,P)}if(r===n){ne=null;break}var T=r.sibling;if(T!==null){T.return=r.return,ne=T;break}ne=r.return}}var OE=Math.ceil,Jl=Ee.ReactCurrentDispatcher,kh=Ee.ReactCurrentOwner,yn=Ee.ReactCurrentBatchConfig,Ve=0,_t=null,st=null,St=0,an=0,Js=Hr(0),ht=0,ya=null,qi=0,Zl=0,Nh=0,_a=null,Gt=null,Dh=0,Zs=1/0,Er=null,eu=!1,Vh=null,Yr=null,tu=!1,Xr=null,nu=0,va=0,Oh=null,ru=-1,iu=0;function jt(){return(Ve&6)!==0?je():ru!==-1?ru:ru=je()}function Jr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&St!==0?St&-St:gE.transition!==null?(iu===0&&(iu=xi()),iu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n)}function Ln(n,r,a,c){if(50<va)throw va=0,Oh=null,Error(t(185));Mr(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Zl|=a),ht===4&&Zr(n,St)),Qt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Zs=je()+500,Vl&&qr()))}function Qt(n,r){var a=n.callbackNode;lr(n,r);var c=Oi(n,n===_t?St:0);if(c===0)a!==null&&jo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&jo(a),r===1)n.tag===0?mE(vm.bind(null,n)):ip(vm.bind(null,n)),hE(function(){(Ve&6)===0&&qr()}),a=null;else{switch(Fr(c)){case 1:a=Di;break;case 4:a=Or;break;case 16:a=cn;break;case 536870912:a=il;break;default:a=cn}a=Cm(a,_m.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function _m(n,r){if(ru=-1,iu=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(eo()&&n.callbackNode!==a)return null;var c=Oi(n,n===_t?St:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=su(n,c);else{r=c;var d=Ve;Ve|=2;var p=wm();(_t!==n||St!==r)&&(Er=null,Zs=je()+500,Gi(n,r));do try{ME();break}catch(T){Em(n,T)}while(!0);Xc(),Jl.current=p,Ve=d,st!==null?r=0:(_t=null,St=0,r=ht)}if(r!==0){if(r===2&&(d=tn(n),d!==0&&(c=d,r=xh(n,d))),r===1)throw a=ya,Gi(n,0),Zr(n,c),Qt(n,je()),a;if(r===6)Zr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!xE(d)&&(r=su(n,c),r===2&&(p=tn(n),p!==0&&(c=p,r=xh(n,p))),r===1))throw a=ya,Gi(n,0),Zr(n,c),Qt(n,je()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Qi(n,Gt,Er);break;case 3:if(Zr(n,c),(c&130023424)===c&&(r=Dh+500-je(),10<r)){if(Oi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){jt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(Qi.bind(null,n,Gt,Er),r);break}Qi(n,Gt,Er);break;case 4:if(Zr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);p=1<<_,_=r[_],_>d&&(d=_),c&=~p}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*OE(c/1960))-c,10<c){n.timeoutHandle=zc(Qi.bind(null,n,Gt,Er),c);break}Qi(n,Gt,Er);break;case 5:Qi(n,Gt,Er);break;default:throw Error(t(329))}}}return Qt(n,je()),n.callbackNode===a?_m.bind(null,n):null}function xh(n,r){var a=_a;return n.current.memoizedState.isDehydrated&&(Gi(n,r).flags|=256),n=su(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Lh(r)),n}function Lh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function xE(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Nn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Zr(n,r){for(r&=~Nh,r&=~Zl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Ut(r),c=1<<a;n[a]=-1,r&=~c}}function vm(n){if((Ve&6)!==0)throw Error(t(327));eo();var r=Oi(n,0);if((r&1)===0)return Qt(n,je()),null;var a=su(n,r);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(r=c,a=xh(n,c))}if(a===1)throw a=ya,Gi(n,0),Zr(n,r),Qt(n,je()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Qi(n,Gt,Er),Qt(n,je()),null}function Mh(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Zs=je()+500,Vl&&qr())}}function Ki(n){Xr!==null&&Xr.tag===0&&(Ve&6)===0&&eo();var r=Ve;Ve|=1;var a=yn.transition,c=Pe;try{if(yn.transition=null,Pe=1,n)return n()}finally{Pe=c,yn.transition=a,Ve=r,(Ve&6)===0&&qr()}}function bh(){an=Js.current,We(Js)}function Gi(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,cE(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Qs(),We(Wt),We(Dt),sh();break;case 5:rh(c);break;case 4:Qs();break;case 13:We(Ye);break;case 19:We(Ye);break;case 10:Jc(c.type._context);break;case 22:case 23:bh()}a=a.return}if(_t=n,st=n=ei(n.current,null),St=an=r,ht=0,ya=null,Nh=Zl=qi=0,Gt=_a=null,$i!==null){for(r=0;r<$i.length;r++)if(a=$i[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var _=p.next;p.next=d,c.next=_}a.pending=c}$i=null}return n}function Em(n,r){do{var a=st;try{if(Xc(),jl.current=ql,$l){for(var c=Xe.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$l=!1}if(Wi=0,yt=ct=Xe=null,ha=!1,da=0,kh.current=null,a===null||a.return===null){ht=1,ya=r,st=null;break}e:{var p=n,_=a.return,T=a,P=r;if(r=St,T.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=T,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var Z=Wp(_);if(Z!==null){Z.flags&=-257,qp(Z,_,T,p,r),Z.mode&1&&Hp(p,F,r),r=Z,P=F;var re=r.updateQueue;if(re===null){var ie=new Set;ie.add(P),r.updateQueue=ie}else re.add(P);break e}else{if((r&1)===0){Hp(p,F,r),Fh();break e}P=Error(t(426))}}else if(Ge&&T.mode&1){var nt=Wp(_);if(nt!==null){(nt.flags&65536)===0&&(nt.flags|=256),qp(nt,_,T,p,r),Qc(Ys(P,T));break e}}p=P=Ys(P,T),ht!==4&&(ht=2),_a===null?_a=[p]:_a.push(p),p=_;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=jp(p,P,r);mp(p,M);break e;case 1:T=P;var N=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Yr===null||!Yr.has(b)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=$p(p,T,r);mp(p,Y);break e}}p=p.return}while(p!==null)}Im(a)}catch(se){r=se,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function wm(){var n=Jl.current;return Jl.current=ql,n===null?ql:n}function Fh(){(ht===0||ht===3||ht===2)&&(ht=4),_t===null||(qi&268435455)===0&&(Zl&268435455)===0||Zr(_t,St)}function su(n,r){var a=Ve;Ve|=2;var c=wm();(_t!==n||St!==r)&&(Er=null,Gi(n,r));do try{LE();break}catch(d){Em(n,d)}while(!0);if(Xc(),Ve=a,Jl.current=c,st!==null)throw Error(t(261));return _t=null,St=0,ht}function LE(){for(;st!==null;)Tm(st)}function ME(){for(;st!==null&&!nl();)Tm(st)}function Tm(n){var r=Rm(n.alternate,n,an);n.memoizedProps=n.pendingProps,r===null?Im(n):st=r,kh.current=null}function Im(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=PE(a,r,an),a!==null){st=a;return}}else{if(a=kE(a,r),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(r=r.sibling,r!==null){st=r;return}st=r=n}while(r!==null);ht===0&&(ht=5)}function Qi(n,r,a){var c=Pe,d=yn.transition;try{yn.transition=null,Pe=1,bE(n,r,a,c)}finally{yn.transition=d,Pe=c}return null}function bE(n,r,a,c){do eo();while(Xr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(ze(n,p),n===_t&&(st=_t=null,St=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tu||(tu=!0,Cm(cn,function(){return eo(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=yn.transition,yn.transition=null;var _=Pe;Pe=1;var T=Ve;Ve|=4,kh.current=null,DE(n,a),fm(a,n),rE(Fc),zr=!!bc,Fc=bc=null,n.current=a,VE(a),wc(),Ve=T,Pe=_,yn.transition=p}else n.current=a;if(tu&&(tu=!1,Xr=n,nu=d),p=n.pendingLanes,p===0&&(Yr=null),sl(a.stateNode),Qt(n,je()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(eu)throw eu=!1,n=Vh,Vh=null,n;return(nu&1)!==0&&n.tag!==0&&eo(),p=n.pendingLanes,(p&1)!==0?n===Oh?va++:(va=0,Oh=n):va=0,qr(),null}function eo(){if(Xr!==null){var n=Fr(nu),r=yn.transition,a=Pe;try{if(yn.transition=null,Pe=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,nu=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,ne=n.current;ne!==null;){var p=ne,_=p.child;if((ne.flags&16)!==0){var T=p.deletions;if(T!==null){for(var P=0;P<T.length;P++){var F=T[P];for(ne=F;ne!==null;){var K=ne;switch(K.tag){case 0:case 11:case 15:ga(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,ne=Q;else for(;ne!==null;){K=ne;var W=K.sibling,Z=K.return;if(lm(K),K===F){ne=null;break}if(W!==null){W.return=Z,ne=W;break}ne=Z}}}var re=p.alternate;if(re!==null){var ie=re.child;if(ie!==null){re.child=null;do{var nt=ie.sibling;ie.sibling=null,ie=nt}while(ie!==null)}}ne=p}}if((p.subtreeFlags&2064)!==0&&_!==null)_.return=p,ne=_;else e:for(;ne!==null;){if(p=ne,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ga(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ne=M;break e}ne=p.return}}var N=n.current;for(ne=N;ne!==null;){_=ne;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,ne=b;else e:for(_=N;ne!==null;){if(T=ne,(T.flags&2048)!==0)try{switch(T.tag){case 0:case 11:case 15:Xl(9,T)}}catch(se){Ze(T,T.return,se)}if(T===_){ne=null;break e}var Y=T.sibling;if(Y!==null){Y.return=T.return,ne=Y;break e}ne=T.return}}if(Ve=d,qr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Vi,n)}catch{}c=!0}return c}finally{Pe=a,yn.transition=r}}return!1}function Sm(n,r,a){r=Ys(a,r),r=jp(n,r,1),n=Gr(n,r,1),r=jt(),n!==null&&(Mr(n,1,r),Qt(n,r))}function Ze(n,r,a){if(n.tag===3)Sm(n,n,a);else for(;r!==null;){if(r.tag===3){Sm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Ys(a,n),n=$p(r,n,1),r=Gr(r,n,1),n=jt(),r!==null&&(Mr(r,1,n),Qt(r,n));break}}r=r.return}}function FE(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=jt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(St&a)===a&&(ht===4||ht===3&&(St&130023424)===St&&500>je()-Dh?Gi(n,0):Nh|=a),Qt(n,r)}function Am(n,r){r===0&&((n.mode&1)===0?r=1:(r=Is,Is<<=1,(Is&130023424)===0&&(Is=4194304)));var a=jt();n=yr(n,r),n!==null&&(Mr(n,r,a),Qt(n,a))}function UE(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),Am(n,a)}function zE(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Am(n,a)}var Rm;Rm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,CE(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ge&&(r.flags&1048576)!==0&&sp(r,xl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ql(n,r),n=r.pendingProps;var d=js(r,Dt.current);Gs(r,a),d=lh(null,r,c,n,d,a);var p=uh();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qt(c)?(p=!0,Dl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,th(r),d.updater=Kl,r.stateNode=d,d._reactInternals=r,mh(r,c,n,a),r=vh(null,r,c,!0,p,a)):(r.tag=0,Ge&&p&&Wc(r),Bt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ql(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=jE(c),n=Vn(c,n),d){case 0:r=_h(null,r,c,n,a);break e;case 1:r=Jp(null,r,c,n,a);break e;case 11:r=Kp(null,r,c,n,a);break e;case 14:r=Gp(null,r,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),_h(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Jp(n,r,c,d,a);case 3:e:{if(Zp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,pp(n,r),zl(r,c,null,a);var _=r.memoizedState;if(c=_.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Ys(Error(t(423)),r),r=em(n,r,c,a,d);break e}else if(c!==d){d=Ys(Error(t(424)),r),r=em(n,r,c,a,d);break e}else for(on=$r(r.stateNode.containerInfo.firstChild),sn=r,Ge=!0,Dn=null,a=dp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ws(),c===d){r=vr(n,r,a);break e}Bt(n,r,c,a)}r=r.child}return r;case 5:return yp(r),n===null&&Gc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,_=d.children,Uc(c,d)?_=null:p!==null&&Uc(c,p)&&(r.flags|=32),Xp(n,r),Bt(n,r,_,a),r.child;case 6:return n===null&&Gc(r),null;case 13:return tm(n,r,a);case 4:return nh(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=qs(r,null,c,a):Bt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Kp(n,r,c,d,a);case 7:return Bt(n,r,r.pendingProps,a),r.child;case 8:return Bt(n,r,r.pendingProps.children,a),r.child;case 12:return Bt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,_=d.value,$e(bl,c._currentValue),c._currentValue=_,p!==null)if(Nn(p.value,_)){if(p.children===d.children&&!Wt.current){r=vr(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var T=p.dependencies;if(T!==null){_=p.child;for(var P=T.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=_r(-1,a&-a),P.tag=2;var F=p.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),Zc(p.return,a,r),T.lanes|=a;break}P=P.next}}else if(p.tag===10)_=p.type===r.type?null:p.child;else if(p.tag===18){if(_=p.return,_===null)throw Error(t(341));_.lanes|=a,T=_.alternate,T!==null&&(T.lanes|=a),Zc(_,a,r),_=p.sibling}else _=p.child;if(_!==null)_.return=p;else for(_=p;_!==null;){if(_===r){_=null;break}if(p=_.sibling,p!==null){p.return=_.return,_=p;break}_=_.return}p=_}Bt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Gs(r,a),d=mn(d),c=c(d),r.flags|=1,Bt(n,r,c,a),r.child;case 14:return c=r.type,d=Vn(c,r.pendingProps),d=Vn(c.type,d),Gp(n,r,c,d,a);case 15:return Qp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Vn(c,d),Ql(n,r),r.tag=1,qt(c)?(n=!0,Dl(r)):n=!1,Gs(r,a),zp(r,c,d),mh(r,c,d,a),vh(null,r,c,!0,n,a);case 19:return rm(n,r,a);case 22:return Yp(n,r,a)}throw Error(t(156,r.tag))};function Cm(n,r){return ws(n,r)}function BE(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(n,r,a,c){return new BE(n,r,a,c)}function Uh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jE(n){if(typeof n=="function")return Uh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===x)return 11;if(n===kt)return 14}return 2}function ei(n,r){var a=n.alternate;return a===null?(a=_n(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ou(n,r,a,c,d,p){var _=2;if(c=n,typeof n=="function")Uh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case D:return Yi(a.children,d,p,r);case I:_=8,d|=8;break;case R:return n=_n(12,a,r,d|2),n.elementType=R,n.lanes=p,n;case S:return n=_n(13,a,r,d),n.elementType=S,n.lanes=p,n;case et:return n=_n(19,a,r,d),n.elementType=et,n.lanes=p,n;case Ue:return au(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case V:_=9;break e;case x:_=11;break e;case kt:_=14;break e;case Nt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_n(_,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function Yi(n,r,a,c){return n=_n(7,n,c,r),n.lanes=a,n}function au(n,r,a,c){return n=_n(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function zh(n,r,a){return n=_n(6,n,null,r),n.lanes=a,n}function Bh(n,r,a){return r=_n(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function $E(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function jh(n,r,a,c,d,p,_,T,P){return n=new $E(n,r,a,T,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=_n(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(p),n}function HE(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ae,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function Pm(n){if(!n)return Wr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return np(n,a,r)}return r}function km(n,r,a,c,d,p,_,T,P){return n=jh(a,c,!0,n,d,p,_,T,P),n.context=Pm(null),a=n.current,c=jt(),d=Jr(a),p=_r(c,d),p.callback=r??null,Gr(a,p,d),n.current.lanes=d,Mr(n,d,c),Qt(n,c),n}function lu(n,r,a,c){var d=r.current,p=jt(),_=Jr(d);return a=Pm(a),r.context===null?r.context=a:r.pendingContext=a,r=_r(p,_),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Gr(d,r,_),n!==null&&(Ln(n,d,_,p),Ul(n,d,_)),_}function uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function $h(n,r){Nm(n,r),(n=n.alternate)&&Nm(n,r)}function WE(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}cu.prototype.render=Hh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));lu(n,r,null,null)},cu.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ki(function(){lu(null,n,null,null)}),r[fr]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var r=cl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<jn.length&&r!==0&&r<jn[a].priority;a++);jn.splice(a,0,n),a===0&&fl(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function qE(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var F=uu(_);p.call(F)}}var _=km(r,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=_,n[fr]=_.current,ra(n.nodeType===8?n.parentNode:n),Ki(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var T=c;c=function(){var F=uu(P);T.call(F)}}var P=jh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=P,n[fr]=P.current,ra(n.nodeType===8?n.parentNode:n),Ki(function(){lu(r,P,a,c)}),P}function du(n,r,a,c,d){var p=a._reactRootContainer;if(p){var _=p;if(typeof d=="function"){var T=d;d=function(){var P=uu(_);T.call(P)}}lu(r,_,n,d)}else _=qE(a,r,n,d,c);return uu(_)}ll=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=xr(r.pendingLanes);a!==0&&(br(r,a|1),Qt(r,je()),(Ve&6)===0&&(Zs=je()+500,qr()))}break;case 13:Ki(function(){var c=yr(n,1);if(c!==null){var d=jt();Ln(c,n,1,d)}}),$h(n,1)}},Ss=function(n){if(n.tag===13){var r=yr(n,134217728);if(r!==null){var a=jt();Ln(r,n,134217728,a)}$h(n,134217728)}},ul=function(n){if(n.tag===13){var r=Jr(n),a=yr(n,r);if(a!==null){var c=jt();Ln(a,n,r,c)}$h(n,r)}},cl=function(){return Pe},hl=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},ms=function(n,r,a){switch(r){case"input":if(Po(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=kl(c);if(!d)throw Error(t(90));us(c),Po(c,d)}}}break;case"textarea":fs(n,a);break;case"select":r=a.value,r!=null&&sr(n,!!a.multiple,r,!1)}},Ci=Mh,Fo=Ki;var KE={usingClientEntryPoint:!1,Events:[oa,zs,kl,zn,bo,Mh]},Ea={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GE={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Bo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||WE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Vi=fu.inject(GE),en=fu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE,Yt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(r))throw Error(t(200));return HE(n,r,null,a)},Yt.createRoot=function(n,r){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=Dm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=jh(n,1,!1,null,null,a,!1,c,d),n[fr]=r.current,ra(n.nodeType===8?n.parentNode:n),new Hh(r)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Bo(r),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Ki(n)},Yt.hydrate=function(n,r,a){if(!hu(r))throw Error(t(200));return du(null,n,r,!0,a)},Yt.hydrateRoot=function(n,r,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",_=Dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),r=km(r,null,n,1,a??null,d,!1,p,_),n[fr]=r.current,ra(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new cu(r)},Yt.render=function(n,r,a){if(!hu(r))throw Error(t(200));return du(null,n,r,!1,a)},Yt.unmountComponentAtNode=function(n){if(!hu(n))throw Error(t(40));return n._reactRootContainer?(Ki(function(){du(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Mh,Yt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!hu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return du(n,r,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Fm;function ew(){if(Fm)return Kh.exports;Fm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Kh.exports=ZE(),Kh.exports}var Um;function tw(){if(Um)return pu;Um=1;var i=ew();return pu.createRoot=i.createRoot,pu.hydrateRoot=i.hydrateRoot,pu}var nw=tw();const rw=py(nw),iw=()=>{};var zm={};/**
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
 */const gy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},sw=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},yy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,v=g?i[o+2]:0,w=u>>2,A=(u&3)<<4|m>>4;let C=(m&15)<<2|v>>6,z=v&63;g||(z=64,h||(C=64)),s.push(t[w],t[A],t[C],t[z])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(gy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):sw(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const v=o<i.length?t[i.charAt(o)]:64;++o;const A=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||v==null||A==null)throw new ow;const C=u<<2|m>>4;if(s.push(C),v!==64){const z=m<<4&240|v>>2;if(s.push(z),A!==64){const q=v<<6&192|A;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class ow extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aw=function(i){const e=gy(i);return yy.encodeByteArray(e,!0)},Vu=function(i){return aw(i).replace(/\./g,"")},_y=function(i){try{return yy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uw=()=>lw().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof zm>"u")return;const i=zm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},hw=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&_y(i[1]);return e&&JSON.parse(e)},Ju=()=>{try{return iw()||uw()||cw()||hw()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},vy=i=>{var e,t;return(t=(e=Ju())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},dw=i=>{const e=vy(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ey=()=>{var i;return(i=Ju())===null||i===void 0?void 0:i.config},wy=i=>{var e;return(e=Ju())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class fw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Eo(i){return i.endsWith(".cloudworkstations.dev")}async function Ty(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function pw(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Vu(JSON.stringify(t)),Vu(JSON.stringify(h)),""].join(".")}const Ca={};function mw(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ca))Ca[e]?i.emulator.push(e):i.prod.push(e);return i}function gw(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Bm=!1;function Iy(i,e){if(typeof window>"u"||typeof document>"u"||!Eo(window.location.host)||Ca[i]===e||Ca[i]||Bm)return;Ca[i]=e;function t(C){return`__firebase__banner__${C}`}const s="__firebase__banner",u=mw().prod.length>0;function h(){const C=document.getElementById(s);C&&C.remove()}function m(C){C.style.display="flex",C.style.background="#7faaf0",C.style.position="fixed",C.style.bottom="5px",C.style.left="5px",C.style.padding=".5em",C.style.borderRadius="5px",C.style.alignItems="center"}function g(C,z){C.setAttribute("width","24"),C.setAttribute("id",z),C.setAttribute("height","24"),C.setAttribute("viewBox","0 0 24 24"),C.setAttribute("fill","none"),C.style.marginLeft="-6px"}function v(){const C=document.createElement("span");return C.style.cursor="pointer",C.style.marginLeft="16px",C.style.fontSize="24px",C.innerHTML=" &times;",C.onclick=()=>{Bm=!0,h()},C}function w(C,z){C.setAttribute("id",z),C.innerText="Learn more",C.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",C.setAttribute("target","__blank"),C.style.paddingLeft="5px",C.style.textDecoration="underline"}function A(){const C=gw(s),z=t("text"),q=document.getElementById(z)||document.createElement("span"),H=t("learnmore"),B=document.getElementById(H)||document.createElement("a"),ge=t("preprendIcon"),le=document.getElementById(ge)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(C.created){const me=C.element;m(me),w(B,H);const Ee=v();g(le,ge),me.append(le,q,B,Ee),document.body.appendChild(me)}u?(q.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,q.innerText="Preview backend running in this workspace."),q.setAttribute("id",z)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function _w(){var i;const e=(i=Ju())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ew(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ww(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tw(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Iw(){return!_w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const Rw="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Rw,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?Cw(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,m,s)}}function Cw(i,e){return i.replace(Pw,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const Pw=/\{\$([^}]+)}/g;function kw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Zi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(jm(u)&&jm(h)){if(!Zi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function jm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ha(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wa(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ta(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function Nw(i,e){const t=new Dw(i,e);return t.subscribe.bind(t)}class Dw{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");Vw(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Yh),o.error===void 0&&(o.error=Yh),o.complete===void 0&&(o.complete=Yh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vw(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Yh(){}/**
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
 */function Ct(i){return i&&i._delegate?i._delegate:i}class es{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class Ow{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new fw;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lw(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xw(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xw(i){return i===Xi?void 0:i}function Lw(i){return i.instantiationMode==="EAGER"}/**
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
 */class Mw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ow(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const bw={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},Fw=Re.INFO,Uw={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},zw=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=Uw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xd{constructor(e){this.name=e,this._logLevel=Fw,this._logHandler=zw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const Bw=(i,e)=>e.some(t=>i instanceof t);let $m,Hm;function jw(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $w(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,ld=new WeakMap,Ay=new WeakMap,Xh=new WeakMap,Ld=new WeakMap;function Hw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(li(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Sy.set(t,i)}).catch(()=>{}),Ld.set(e,i),e}function Ww(i){if(ld.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});ld.set(i,e)}let ud={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return ld.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ay.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return li(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function qw(i){ud=i(ud)}function Kw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Jh(this),e,...t);return Ay.set(s,e.sort?e.sort():[e]),li(s)}:$w().includes(i)?function(...e){return i.apply(Jh(this),e),li(Sy.get(this))}:function(...e){return li(i.apply(Jh(this),e))}}function Gw(i){return typeof i=="function"?Kw(i):(i instanceof IDBTransaction&&Ww(i),Bw(i,jw())?new Proxy(i,ud):i)}function li(i){if(i instanceof IDBRequest)return Hw(i);if(Xh.has(i))return Xh.get(i);const e=Gw(i);return e!==i&&(Xh.set(i,e),Ld.set(e,i)),e}const Jh=i=>Ld.get(i);function Qw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=li(h);return s&&h.addEventListener("upgradeneeded",g=>{s(li(h.result),g.oldVersion,g.newVersion,li(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const Yw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],Zh=new Map;function Wm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zh.get(e))return Zh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=Xw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Yw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),o&&g.done]))[0]};return Zh.set(e,u),u}qw(i=>({...i,get:(e,t,s)=>Wm(e,t)||i.get(e,t,s),has:(e,t)=>!!Wm(e,t)||i.has(e,t)}));/**
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
 */class Jw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Zw(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Zw(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",qm="0.13.1";/**
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
 */const Rr=new xd("@firebase/app"),e0="@firebase/app-compat",t0="@firebase/analytics-compat",n0="@firebase/analytics",r0="@firebase/app-check-compat",i0="@firebase/app-check",s0="@firebase/auth",o0="@firebase/auth-compat",a0="@firebase/database",l0="@firebase/data-connect",u0="@firebase/database-compat",c0="@firebase/functions",h0="@firebase/functions-compat",d0="@firebase/installations",f0="@firebase/installations-compat",p0="@firebase/messaging",m0="@firebase/messaging-compat",g0="@firebase/performance",y0="@firebase/performance-compat",_0="@firebase/remote-config",v0="@firebase/remote-config-compat",E0="@firebase/storage",w0="@firebase/storage-compat",T0="@firebase/firestore",I0="@firebase/ai",S0="@firebase/firestore-compat",A0="firebase",R0="11.9.0";/**
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
 */const hd="[DEFAULT]",C0={[cd]:"fire-core",[e0]:"fire-core-compat",[n0]:"fire-analytics",[t0]:"fire-analytics-compat",[i0]:"fire-app-check",[r0]:"fire-app-check-compat",[s0]:"fire-auth",[o0]:"fire-auth-compat",[a0]:"fire-rtdb",[l0]:"fire-data-connect",[u0]:"fire-rtdb-compat",[c0]:"fire-fn",[h0]:"fire-fn-compat",[d0]:"fire-iid",[f0]:"fire-iid-compat",[p0]:"fire-fcm",[m0]:"fire-fcm-compat",[g0]:"fire-perf",[y0]:"fire-perf-compat",[_0]:"fire-rc",[v0]:"fire-rc-compat",[E0]:"fire-gcs",[w0]:"fire-gcs-compat",[T0]:"fire-fst",[S0]:"fire-fst-compat",[I0]:"fire-vertex","fire-js":"fire-js",[A0]:"fire-js-all"};/**
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
 */const Ou=new Map,P0=new Map,dd=new Map;function Km(i,e){try{i.container.addComponent(e)}catch(t){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ho(i){const e=i.name;if(dd.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;dd.set(e,i);for(const t of Ou.values())Km(t,i);for(const t of P0.values())Km(t,i);return!0}function Md(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function vn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const k0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new $a("app","Firebase",k0);/**
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
 */class N0{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const wo=R0;function Ry(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ui.create("bad-app-name",{appName:String(o)});if(t||(t=Ey()),!t)throw ui.create("no-options");const u=Ou.get(o);if(u){if(Zi(t,u.options)&&Zi(s,u.config))return u;throw ui.create("duplicate-app",{appName:o})}const h=new Mw(o);for(const g of dd.values())h.addComponent(g);const m=new N0(t,s,h);return Ou.set(o,m),m}function Cy(i=hd){const e=Ou.get(i);if(!e&&i===hd&&Ey())return Ry();if(!e)throw ui.create("no-app",{appName:i});return e}function ci(i,e,t){var s;let o=(s=C0[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(m.join(" "));return}ho(new es(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const D0="firebase-heartbeat-database",V0=1,Oa="firebase-heartbeat-store";let ed=null;function Py(){return ed||(ed=Qw(D0,V0,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Oa)}catch(t){console.warn(t)}}}}).catch(i=>{throw ui.create("idb-open",{originalErrorMessage:i.message})})),ed}async function O0(i){try{const t=(await Py()).transaction(Oa),s=await t.objectStore(Oa).get(ky(i));return await t.done,s}catch(e){if(e instanceof Nr)Rr.warn(e.message);else{const t=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(t.message)}}}async function Gm(i,e){try{const s=(await Py()).transaction(Oa,"readwrite");await s.objectStore(Oa).put(e,ky(i)),await s.done}catch(t){if(t instanceof Nr)Rr.warn(t.message);else{const s=ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Rr.warn(s.message)}}}function ky(i){return`${i.name}!${i.options.appId}`}/**
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
 */const x0=1024,L0=30;class M0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new F0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>L0){const h=U0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Rr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qm(),{heartbeatsToSend:s,unsentEntries:o}=b0(this._heartbeatsCache.heartbeats),u=Vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Rr.warn(t),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function b0(i,e=x0){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Ym(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Ym(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class F0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await O0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Ym(i){return Vu(JSON.stringify({version:2,heartbeats:i})).length}function U0(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function z0(i){ho(new es("platform-logger",e=>new Jw(e),"PRIVATE")),ho(new es("heartbeat",e=>new M0(e),"PRIVATE")),ci(cd,qm,i),ci(cd,qm,"esm2017"),ci("fire-js","")}z0("");var B0="firebase",j0="11.9.1";/**
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
 */ci(B0,j0,"app");var Xm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hi,Ny;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,I){function R(){}R.prototype=I.prototype,D.D=I.prototype,D.prototype=new R,D.prototype.constructor=D,D.C=function(k,V,x){for(var S=Array(arguments.length-2),et=2;et<arguments.length;et++)S[et-2]=arguments[et];return I.prototype[V].apply(k,S)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(D,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var V=0;16>V;++V)k[V]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(V=0;16>V;++V)k[V]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=D.g[0],R=D.g[1],V=D.g[2];var x=D.g[3],S=I+(x^R&(V^x))+k[0]+3614090360&4294967295;I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+k[1]+3905402710&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+k[2]+606105819&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+k[3]+3250441966&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+k[4]+4118548399&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+k[5]+1200080426&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+k[6]+2821735955&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+k[7]+4249261313&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+k[8]+1770035416&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+k[9]+2336552879&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+k[10]+4294925233&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+k[11]+2304563134&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(x^R&(V^x))+k[12]+1804603682&4294967295,I=R+(S<<7&4294967295|S>>>25),S=x+(V^I&(R^V))+k[13]+4254626195&4294967295,x=I+(S<<12&4294967295|S>>>20),S=V+(R^x&(I^R))+k[14]+2792965006&4294967295,V=x+(S<<17&4294967295|S>>>15),S=R+(I^V&(x^I))+k[15]+1236535329&4294967295,R=V+(S<<22&4294967295|S>>>10),S=I+(V^x&(R^V))+k[1]+4129170786&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+k[6]+3225465664&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+k[11]+643717713&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+k[0]+3921069994&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+k[5]+3593408605&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+k[10]+38016083&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+k[15]+3634488961&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+k[4]+3889429448&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+k[9]+568446438&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+k[14]+3275163606&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+k[3]+4107603335&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+k[8]+1163531501&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(V^x&(R^V))+k[13]+2850285829&4294967295,I=R+(S<<5&4294967295|S>>>27),S=x+(R^V&(I^R))+k[2]+4243563512&4294967295,x=I+(S<<9&4294967295|S>>>23),S=V+(I^R&(x^I))+k[7]+1735328473&4294967295,V=x+(S<<14&4294967295|S>>>18),S=R+(x^I&(V^x))+k[12]+2368359562&4294967295,R=V+(S<<20&4294967295|S>>>12),S=I+(R^V^x)+k[5]+4294588738&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+k[8]+2272392833&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+k[11]+1839030562&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+k[14]+4259657740&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+k[1]+2763975236&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+k[4]+1272893353&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+k[7]+4139469664&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+k[10]+3200236656&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+k[13]+681279174&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+k[0]+3936430074&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+k[3]+3572445317&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+k[6]+76029189&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(R^V^x)+k[9]+3654602809&4294967295,I=R+(S<<4&4294967295|S>>>28),S=x+(I^R^V)+k[12]+3873151461&4294967295,x=I+(S<<11&4294967295|S>>>21),S=V+(x^I^R)+k[15]+530742520&4294967295,V=x+(S<<16&4294967295|S>>>16),S=R+(V^x^I)+k[2]+3299628645&4294967295,R=V+(S<<23&4294967295|S>>>9),S=I+(V^(R|~x))+k[0]+4096336452&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+k[7]+1126891415&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+k[14]+2878612391&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+k[5]+4237533241&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+k[12]+1700485571&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+k[3]+2399980690&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+k[10]+4293915773&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+k[1]+2240044497&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+k[8]+1873313359&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+k[15]+4264355552&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+k[6]+2734768916&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+k[13]+1309151649&4294967295,R=V+(S<<21&4294967295|S>>>11),S=I+(V^(R|~x))+k[4]+4149444226&4294967295,I=R+(S<<6&4294967295|S>>>26),S=x+(R^(I|~V))+k[11]+3174756917&4294967295,x=I+(S<<10&4294967295|S>>>22),S=V+(I^(x|~R))+k[2]+718787259&4294967295,V=x+(S<<15&4294967295|S>>>17),S=R+(x^(V|~I))+k[9]+3951481745&4294967295,D.g[0]=D.g[0]+I&4294967295,D.g[1]=D.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,D.g[2]=D.g[2]+V&4294967295,D.g[3]=D.g[3]+x&4294967295}s.prototype.u=function(D,I){I===void 0&&(I=D.length);for(var R=I-this.blockSize,k=this.B,V=this.h,x=0;x<I;){if(V==0)for(;x<=R;)o(this,D,x),x+=this.blockSize;if(typeof D=="string"){for(;x<I;)if(k[V++]=D.charCodeAt(x++),V==this.blockSize){o(this,k),V=0;break}}else for(;x<I;)if(k[V++]=D[x++],V==this.blockSize){o(this,k),V=0;break}}this.h=V,this.o+=I},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var I=1;I<D.length-8;++I)D[I]=0;var R=8*this.o;for(I=D.length-8;I<D.length;++I)D[I]=R&255,R/=256;for(this.u(D),D=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)D[R++]=this.g[I]>>>k&255;return D};function u(D,I){var R=m;return Object.prototype.hasOwnProperty.call(R,D)?R[D]:R[D]=I(D)}function h(D,I){this.h=I;for(var R=[],k=!0,V=D.length-1;0<=V;V--){var x=D[V]|0;k&&x==I||(R[V]=x,k=!1)}this.g=R}var m={};function g(D){return-128<=D&&128>D?u(D,function(I){return new h([I|0],0>I?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return A;if(0>D)return B(v(-D));for(var I=[],R=1,k=0;D>=R;k++)I[k]=D/R|0,R*=4294967296;return new h(I,0)}function w(D,I){if(D.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(D.charAt(0)=="-")return B(w(D.substring(1),I));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(I,8)),k=A,V=0;V<D.length;V+=8){var x=Math.min(8,D.length-V),S=parseInt(D.substring(V,V+x),I);8>x?(x=v(Math.pow(I,x)),k=k.j(x).add(v(S))):(k=k.j(R),k=k.add(v(S)))}return k}var A=g(0),C=g(1),z=g(16777216);i=h.prototype,i.m=function(){if(H(this))return-B(this).m();for(var D=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);D+=(0<=k?k:4294967296+k)*I,I*=4294967296}return D},i.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(q(this))return"0";if(H(this))return"-"+B(this).toString(D);for(var I=v(Math.pow(D,6)),R=this,k="";;){var V=Ee(R,I).g;R=ge(R,V.j(I));var x=((0<R.g.length?R.g[0]:R.h)>>>0).toString(D);if(R=V,q(R))return x+k;for(;6>x.length;)x="0"+x;k=x+k}},i.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function q(D){if(D.h!=0)return!1;for(var I=0;I<D.g.length;I++)if(D.g[I]!=0)return!1;return!0}function H(D){return D.h==-1}i.l=function(D){return D=ge(this,D),H(D)?-1:q(D)?0:1};function B(D){for(var I=D.g.length,R=[],k=0;k<I;k++)R[k]=~D.g[k];return new h(R,~D.h).add(C)}i.abs=function(){return H(this)?B(this):this},i.add=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0,V=0;V<=I;V++){var x=k+(this.i(V)&65535)+(D.i(V)&65535),S=(x>>>16)+(this.i(V)>>>16)+(D.i(V)>>>16);k=S>>>16,x&=65535,S&=65535,R[V]=S<<16|x}return new h(R,R[R.length-1]&-2147483648?-1:0)};function ge(D,I){return D.add(B(I))}i.j=function(D){if(q(this)||q(D))return A;if(H(this))return H(D)?B(this).j(B(D)):B(B(this).j(D));if(H(D))return B(this.j(B(D)));if(0>this.l(z)&&0>D.l(z))return v(this.m()*D.m());for(var I=this.g.length+D.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<D.g.length;V++){var x=this.i(k)>>>16,S=this.i(k)&65535,et=D.i(V)>>>16,kt=D.i(V)&65535;R[2*k+2*V]+=S*kt,le(R,2*k+2*V),R[2*k+2*V+1]+=x*kt,le(R,2*k+2*V+1),R[2*k+2*V+1]+=S*et,le(R,2*k+2*V+1),R[2*k+2*V+2]+=x*et,le(R,2*k+2*V+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function le(D,I){for(;(D[I]&65535)!=D[I];)D[I+1]+=D[I]>>>16,D[I]&=65535,I++}function me(D,I){this.g=D,this.h=I}function Ee(D,I){if(q(I))throw Error("division by zero");if(q(D))return new me(A,A);if(H(D))return I=Ee(B(D),I),new me(B(I.g),B(I.h));if(H(I))return I=Ee(D,B(I)),new me(B(I.g),I.h);if(30<D.g.length){if(H(D)||H(I))throw Error("slowDivide_ only works with positive integers.");for(var R=C,k=I;0>=k.l(D);)R=qe(R),k=qe(k);var V=Ae(R,1),x=Ae(k,1);for(k=Ae(k,2),R=Ae(R,2);!q(k);){var S=x.add(k);0>=S.l(D)&&(V=V.add(R),x=S),k=Ae(k,1),R=Ae(R,1)}return I=ge(D,V.j(I)),new me(V,I)}for(V=A;0<=D.l(I);){for(R=Math.max(1,Math.floor(D.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),x=v(R),S=x.j(I);H(S)||0<S.l(D);)R-=k,x=v(R),S=x.j(I);q(x)&&(x=C),V=V.add(x),D=ge(D,S)}return new me(V,D)}i.A=function(D){return Ee(this,D).h},i.and=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&D.i(k);return new h(R,this.h&D.h)},i.or=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|D.i(k);return new h(R,this.h|D.h)},i.xor=function(D){for(var I=Math.max(this.g.length,D.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^D.i(k);return new h(R,this.h^D.h)};function qe(D){for(var I=D.g.length+1,R=[],k=0;k<I;k++)R[k]=D.i(k)<<1|D.i(k-1)>>>31;return new h(R,D.h)}function Ae(D,I){var R=I>>5;I%=32;for(var k=D.g.length-R,V=[],x=0;x<k;x++)V[x]=0<I?D.i(x+R)>>>I|D.i(x+R+1)<<32-I:D.i(x+R);return new h(V,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ny=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=w,hi=h}).apply(typeof Xm<"u"?Xm:typeof self<"u"?self:typeof window<"u"?window:{});var mu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dy,Ia,Vy,Tu,fd,Oy,xy,Ly;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof mu=="object"&&mu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function C(l,f,y){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:A,C.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function q(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var X=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)X[Fe-2]=arguments[Fe];return f.prototype[L].apply(E,X)}}function H(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function B(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let X=0;X<U;X++)l[L+X]=E[X]}else l.push(E)}}class ge{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function le(l){return/^[\s\xa0]*$/.test(l)}function me(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function Ee(l){return Ee[" "](l),l}Ee[" "]=function(){};var qe=me().indexOf("Gecko")!=-1&&!(me().toLowerCase().indexOf("webkit")!=-1&&me().indexOf("Edge")==-1)&&!(me().indexOf("Trident")!=-1||me().indexOf("MSIE")!=-1)&&me().indexOf("Edge")==-1;function Ae(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function D(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function I(l){const f={};for(const y in l)f[y]=l[y];return f}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<R.length;U++)y=R[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function V(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function x(l){m.setTimeout(()=>{throw l},0)}function S(){var l=ue;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class et{constructor(){this.h=this.g=null}add(f,y){const E=kt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var kt=new ge(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,J=!1,ue=new et,ee=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(O)}};var O=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(y){x(y)}var f=kt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}J=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var we=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(qe){e:{try{Ee(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ke[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}q(Ie,ae);var ke={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Me,this.da=this.fa=!1}function mt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function rr(l){this.src=l,this.g={},this.h=0}rr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var X=Dr(l,f,E,L);return-1<X?(f=l[X],y||(f.fa=!1)):(f=new Be(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function us(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(mt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Dr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var Ii="closure_lm_"+(1e6*Math.random()|0),cs={};function Co(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)Co(l,f[U],y,E,L);return null}return y=No(y),l&&l[Le]?l.K(f,y,v(E)?!!E.capture:!1,L):Po(l,f,y,!1,E,L)}function Po(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var X=v(L)?!!L.capture:!!L,Fe=ds(l);if(Fe||(l[Ii]=Fe=new rr(l)),y=Fe.add(f,y,E,X,U),y.proxy)return y;if(E=Za(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)we||(L=X),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(sr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Za(){function l(y){return f.call(l.src,l.listener,y)}const f=ko;return l}function hs(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)hs(l,f[U],y,E,L);else E=v(E)?!!E.capture:!!E,y=No(y),l&&l[Le]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Dr(U,y,E,L),-1<y&&(mt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ds(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Dr(f,y,E,L)),(y=-1<l?f[l]:null)&&ir(y))}function ir(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Le])us(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(sr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ds(f))?(us(y,l),y.h==0&&(y.src=null,f[Ii]=null)):mt(l)}}}function sr(l){return l in cs?cs[l]:cs[l]="on"+l}function ko(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ir(l),l=y.call(E,f)}return l}function ds(l){return l=l[Ii],l instanceof rr?l:null}var fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[fs]||(l[fs]=function(f){return l.handleEvent(f)}),l[fs])}function at(){$.call(this),this.i=new rr(this),this.M=this,this.F=null}q(at,$),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,f,y,E){hs(this,l,f,y,E)};function lt(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),k(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var X=f.g=y[U];L=or(X,E,!0,f)&&L}if(X=f.g=l,L=or(X,E,!0,f)&&L,L=or(X,E,!1,f)&&L,y)for(U=0;U<y.length;U++)X=f.g=y[U],L=or(X,E,!1,f)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)mt(y[E]);delete l.g[f],l.h--}}this.F=null},at.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},at.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function or(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var X=f[U];if(X&&!X.da&&X.capture==y){var Fe=X.listener,ut=X.ha||X.src;X.fa&&us(l.i,X),L=Fe.call(ut,E)!==!1&&L}}return L&&!E.defaultPrevented}function Do(l,f,y){if(typeof l=="function")y&&(l=C(l,y));else if(l&&typeof l.handleEvent=="function")l=C(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function Vr(l){l.g=Do(()=>{l.g=null,l.i&&(l.i=!1,Vr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Si extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(l){$.call(this),this.h=l,this.g={}}q(Ai,$);var Vo=[];function Oo(l){Ae(l.g,function(f,y){this.g.hasOwnProperty(y)&&ir(f)},l),l.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Oo(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xo=m.JSON.stringify,Lo=m.JSON.parse,Mo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ri(){}Ri.prototype.h=null;function ps(l){return l.h||(l.h=l.i())}function ms(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){ae.call(this,"d")}q(Un,ae);function gs(){ae.call(this,"c")}q(gs,ae);var zn={},bo=null;function Ci(){return bo=bo||new at}zn.La="serverreachability";function Fo(l){ae.call(this,zn.La,l)}q(Fo,ae);function ar(l){const f=Ci();lt(f,new Fo(f))}zn.STAT_EVENT="statevent";function Uo(l,f){ae.call(this,zn.STAT_EVENT,l),this.stat=f}q(Uo,ae);function tt(l){const f=Ci();lt(f,new Uo(f,l))}zn.Ma="timingevent";function ys(l,f){ae.call(this,zn.Ma,l),this.size=f}q(ys,ae);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function ki(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var X="",Fe=U.split("&"),ut=0;ut<Fe.length;ut++){var Ne=Fe[ut].split("=");if(1<Ne.length){var gt=Ne[0];Ne=Ne[1];var it=gt.split("_");X=2<=it.length&&it[1]=="type"?X+(gt+"="+Ne+"&"):X+(gt+"=redacted&")}}else X=null;else X=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+X})}function _s(l,f,y,E,L,U,X){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+X})}function Tn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ec(l,y)+(E?" "+E:"")})}function zo(l,f){l.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function Ec(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return xo(y)}catch{return f}}var vs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},el={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function Ni(){}q(Ni,Ri),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},In=new Ni;function Sn(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tl}function tl(){this.i=null,this.g="",this.h=!1}var Bo={},Es={};function ws(l,f,y){l.L=1,l.v=br(tn(f)),l.m=y,l.P=!0,jo(l,null)}function jo(l,f){l.F=Date.now(),je(l),l.A=tn(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Ur(y.i,"t",E),l.C=0,y=l.j.J,l.h=new tl,l.g=vl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Si(C(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Vo[0]=L.toString()),L=Vo);for(var U=0;U<L.length;U++){var X=Co(y,L[U],E||f.handleEvent,!1,f.h||f);if(!X)break;f.g[X.key]=X}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ar(),ki(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var f=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||it!=4||f==7||(f==8||0>=dn?ar(3):ar(2)),Di(this);var y=this.g.Z();this.X=y;t:if(nl(this)){var E=Go(this.g);l="";var L=E.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Or(this);var X="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=y==200,_s(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ut=this.g;if((Fe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(Fe)){var Ne=Fe;break t}}Ne=null}if(y=Ne)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$o(this,y);else{this.o=!1,this.s=3,tt(12),cn(this),Or(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<X.length;)if(rn=wc(this,X),rn==Es){it==4&&(this.s=4,tt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bo){this.s=4,tt(15),Tn(this.i,this.l,X,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,rn,null),$o(this,rn);if(nl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||X.length!=0||this.h.h||(this.s=1,tt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,X,"[Invalid Chunked Response]"),cn(this),Or(this);else if(0<X.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Yo(gt),gt.M=!0,tt(11))}}else Tn(this.i,this.l,X,null),$o(this,X);it==4&&cn(this),this.o&&!this.J&&(it==4?Vs(this.j,this):(this.o=!1,je(this)))}else Cs(this.g),y==400&&0<X.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),cn(this),Or(this)}}}catch{}finally{}};function nl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?Es:(y=Number(f.substring(y,E)),isNaN(y)?Bo:(E+=1,E+y>f.length?Es:(f=f.slice(E,E+y),l.C=E+y,f)))}Sn.prototype.cancel=function(){this.J=!0,cn(this)};function je(l){l.S=Date.now()+l.I,rl(l,l.I)}function rl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(C(l.ba,l),f)}function Di(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(ar(),tt(17)),cn(this),this.s=2,Or(this)):rl(this,this.S-l)};function Or(l){l.j.G==0||l.J||Vs(l.j,l)}function cn(l){Di(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Oo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function $o(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ds(y),kn(y);else break e;Ns(y),tt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(C(y.Za,y),6e3));if(1>=sl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else dr(y,11)}else if((l.K||y.g==l)&&Ds(y),!le(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Ne=L[f];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const gt=Ne[3];gt!=null&&(y.la=gt,y.j.info("VER="+y.la));const it=Ne[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const dn=Ne[5];dn!=null&&typeof dn=="number"&&0<dn&&(E=1.5*dn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const rn=l.g;if(rn){const Fi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var U=E.h;U.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ho(U,U.h),U.h=null))}if(E.D){const xs=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(E.ya=xs,ze(E.I,E.D,xs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var X=l;if(E.qa=_l(E,E.J?E.ia:null,E.W),X.K){ol(E.h,X);var Fe=X,ut=E.L;ut&&(Fe.I=ut),Fe.B&&(Di(Fe),je(Fe)),E.g=X}else bi(E);0<y.i.length&&Hn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||dr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?dr(y,7):Tt(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}ar(4)}catch{}}var il=class{constructor(l,f){this.g=l,this.map=f}};function Vi(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function sl(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Ho(l,f){l.g?l.g.add(f):l.h=f}function ol(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Vi.prototype.cancel=function(){if(this.i=al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function al(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return H(l.i)}function Ts(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function Is(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function xr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Is(l),E=Ts(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var Oi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function lr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof lr){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,Lr(this,l.s),this.l=l.l;var f=l.i,y=new Bn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Mr(this,y),this.m=l.m}else l&&(f=String(l).match(Oi))?(this.h=!1,xi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Lr(this,f[4]),this.l=Pe(f[5]||"",!0),Mr(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Bn(null,this.h))}lr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fr(f,Ss,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fr(f,Ss,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fr(y,y.charAt(0)=="/"?cl:ul,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fr(y,Wo)),l.join("")};function tn(l){return new lr(l)}function xi(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Lr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Mr(l,f,y){f instanceof Bn?(l.i=f,jn(l.i,l.h)):(y||(f=Fr(f,hl)),l.i=new Bn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function br(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ll),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ll(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ss=/[#\/\?@]/g,ul=/[#\?:]/g,cl=/[#\?]/g,hl=/[#\?@]/g,Wo=/#/g;function Bn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&Tc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Bn.prototype,i.add=function(l,f){wt(this),this.i=null,l=hn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function An(l,f){wt(l),f=hn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Rn(l,f){return wt(l),f=hn(l,f),l.g.has(f)}i.forEach=function(l,f){wt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){wt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){wt(this);let f=[];if(typeof l=="string")Rn(this,l)&&(f=f.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return wt(this),this.i=null,l=hn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ur(l,f,y){An(l,f),0<y.length&&(l.i=null,l.g.set(hn(l,f),H(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),X=this.V(E);for(E=0;E<X.length;E++){var L=U;X[E]!==""&&(L+="="+encodeURIComponent(String(X[E]))),l.push(L)}}return this.i=l.join("&")};function hn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(An(this,E),Ur(this,L,y))},l)),l.j=f}function Ic(l,f){const y=new Pi;if(m.Image){const E=new Image;E.onload=z($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=z($t,y,"TestLoadImage: error",!1,f,E),E.onabort=z($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=z($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function dl(l,f){const y=new Pi,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function Sc(){this.g=new Mo}function fl(l,f,y){const E=y||"";try{xr(l,function(L,U){let X=L;v(L)&&(X=xo(L)),f.push(E+U+"="+encodeURIComponent(X))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ur(l){this.l=l.Ub||null,this.j=l.eb||!1}q(ur,Ri),ur.prototype.g=function(){return new Li(this.l,this.j)},ur.prototype.i=function(l){return function(){return l}}({});function Li(l,f){at.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(Li,at),i=Li.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Pn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function pl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):Pn(this),this.readyState==3&&pl(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Pn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Pn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function cr(l){let f="";return Ae(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function zr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=cr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Ke(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(Ke,at);var Ac=/^https?$/i,qo=["POST","PUT"];i=Ke.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?ps(this.o):ps(In),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Mi(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(qo,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,X]of y)this.g.setRequestHeader(U,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rs(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Mi(this,U)}};function Mi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,As(l),nn(l)}function As(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),nn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},i.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Do(l.Ea,0,l);else if(lt(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=X===0){var L=String(l.D).match(Oi)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!Ac.test(L?L.toLowerCase():"")}y=E}if(y)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",As(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Rs(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||lt(l,"ready");try{y.onreadystatechange=E}catch{}}}function Rs(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Go(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Cs(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(le(l[E]))continue;var y=V(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}D(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $n(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Qo(l){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$n("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$n("baseRetryDelayMs",5e3,l),this.cb=$n("retryDelaySeedMs",1e4,l),this.Wa=$n("forwardChannelMaxRetries",2,l),this.wa=$n("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Vi(l&&l.concurrentRequestLimit),this.Da=new Sc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Qo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){tt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=_l(this,null,this.W),Hn(this)};function Tt(l){if(Ps(l),l.G==3){var f=l.U++,y=tn(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),hr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=br(tn(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=vl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),je(f)}yl(l)}function kn(l){l.g&&(Yo(l),l.g.cancel(),l.g=null)}function Ps(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ds(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Hn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.B=0}}function Rc(l,f){return sl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(C(l.Ga,l,f),gl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Sn(this,this.j,l);let U=this.o;if(this.S&&(U?(U=I(U),k(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Br(this,L,f),y=tn(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),hr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(cr(U)))+"&"+f:this.m&&zr(y,this.m,U)),Ho(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),L.T=!0,ws(L,y,null)):ws(L,y,f),this.G=2}}else this.G==3&&(l?ks(this,l):this.i.length==0||en(this.h)||ks(this))};function ks(l,f){var y;f?y=f.l:y=l.U++;const E=tn(l.I);ze(E,"SID",l.K),ze(E,"RID",y),ze(E,"AID",l.T),hr(l,E),l.m&&l.o&&zr(E,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Br(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ho(l.h,y),ws(y,E,f)}function hr(l,f){l.H&&Ae(l.H,function(y,E){ze(f,E,y)}),l.l&&xr({},function(y,E){ze(f,E,y)})}function Br(l,f,y){y=Math.min(l.i.length,y);var E=l.l?C(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const X=["count="+y];U==-1?0<y?(U=L[0].g,X.push("ofs="+U)):U=0:X.push("ofs="+U);let Fe=!0;for(let ut=0;ut<y;ut++){let Ne=L[ut].g;const gt=L[ut].map;if(Ne-=U,0>Ne)U=Math.max(0,L[ut].g-100),Fe=!1;else try{fl(gt,X,"req"+Ne+"_")}catch{E&&E(gt)}}if(Fe){E=X.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function bi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||ee(),J||(Ue(),J=!0),ue.add(f,l),l.v=0}}function Ns(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(C(l.Fa,l),gl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(C(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),kn(this),ml(this))};function Yo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function ml(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),hr(l,f),l.m&&l.o&&zr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=br(tn(f)),y.m=null,y.P=!0,jo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),Ns(this),tt(19))};function Ds(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Vs(l,f){var y=null;if(l.g==f){Ds(l),Yo(l),l.g=null;var E=2}else if(Ut(l.h,f))y=f.D,ol(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ci(),lt(E,new ys(E,y)),Hn(l)}else bi(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&Rc(l,f)||E==2&&Ns(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:dr(l,5);break;case 4:dr(l,10);break;case 3:dr(l,6);break;default:dr(l,2)}}}function gl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function dr(l,f){if(l.j.info("Error code "+f),f==2){var y=C(l.fb,l),E=l.Xa;const L=!E;E=new lr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||xi(E,"https"),br(E),L?Ic(E.toString(),y):dl(E.toString(),y)}else tt(2);l.G=0,l.l&&l.l.sa(f),yl(l),Ps(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function yl(l){if(l.G=0,l.ka=[],l.l){const f=al(l.h);(f.length!=0||l.i.length!=0)&&(B(l.ka,f),B(l.ka,l.i),l.h.i.length=0,H(l.i),l.i.length=0),l.l.ra()}}function _l(l,f,y){var E=y instanceof lr?tn(y):new lr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Lr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new lr(null);E&&xi(U,E),f&&(U.g=f),L&&Lr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&ze(E,y,f),ze(E,"VER",l.la),hr(l,E),E}function vl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new ur({eb:y})):new Ke(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}i=Xo.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Os(){}Os.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){at.call(this),this.g=new Qo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!le(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!le(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Wn(this)}q(zt,at),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Tt(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=xo(l),l=y);f.i.push(new il(f.Ya++,l)),f.G==3&&Hn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,zt.aa.N.call(this)};function El(l){Un.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}q(El,Un);function wl(){gs.call(this),this.status=1}q(wl,gs);function Wn(l){this.g=l}q(Wn,Xo),Wn.prototype.ua=function(){lt(this.g,"a")},Wn.prototype.ta=function(l){lt(this.g,new El(l))},Wn.prototype.sa=function(l){lt(this.g,new wl)},Wn.prototype.ra=function(){lt(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Ly=function(){return new Os},xy=function(){return Ci()},Oy=zn,fd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,Tu=vs,el.COMPLETE="complete",Vy=el,ms.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",at.prototype.listen=at.prototype.K,Ia=ms,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,Dy=Ke}).apply(typeof mu<"u"?mu:typeof self<"u"?self:typeof window<"u"?window:{});const Jm="@firebase/firestore",Zm="4.7.17";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let To="11.9.0";/**
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
 */const ts=new xd("@firebase/firestore");function to(){return ts.logLevel}function te(i,...e){if(ts.logLevel<=Re.DEBUG){const t=e.map(bd);ts.debug(`Firestore (${To}): ${i}`,...t)}}function Cr(i,...e){if(ts.logLevel<=Re.ERROR){const t=e.map(bd);ts.error(`Firestore (${To}): ${i}`,...t)}}function fo(i,...e){if(ts.logLevel<=Re.WARN){const t=e.map(bd);ts.warn(`Firestore (${To}): ${i}`,...t)}}function bd(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function pe(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,My(i,s,t)}function My(i,e,t){let s=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Cr(s),new Error(s)}function be(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||My(e,o,s)}function ve(i,e){return i}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class by{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class H0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class W0{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){be(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Sr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Sr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(be(typeof s.accessToken=="string",31837,{l:s}),new by(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class q0{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class K0{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new q0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class G0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){be(this.o===void 0,3512);const s=u=>{u.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,te("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new eg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(be(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new eg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Q0(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Fy(){return new TextEncoder}/**
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
 */class Uy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=Q0(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Te(i,e){return i<e?-1:i>e?1:0}function pd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Te(s,o);{const u=Fy(),h=Y0(u.encode(tg(i,t)),u.encode(tg(e,t)));return h!==0?h:Te(s,o)}}t+=s>65535?2:1}return Te(i.length,e.length)}function tg(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function Y0(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Te(i[t],e[t]);return Te(i.length,e.length)}function po(i,e,t){return i.length===e.length&&i.every((s,o)=>t(s,e[o]))}/**
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
 */const ng=-62135596800,rg=1e6;class ft{static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*rg);return new ft(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ng)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rg}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ng;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ft(0,0))}static max(){return new _e(new ft(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ig="__name__";class Yn{constructor(e,t,s){t===void 0?t=0:t>e.length&&pe(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&pe(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Yn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Yn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Te(e.length,t.length)}static compareSegments(e,t){const s=Yn.isNumericId(e),o=Yn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Yn.extractNumericId(e).compare(Yn.extractNumericId(t)):pd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return hi.fromString(e.substring(4,e.length-2))}}class Qe extends Yn{construct(e,t,s){return new Qe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const X0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Yn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return X0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ig}static keyField(){return new Rt([ig])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new oe(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new oe(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new oe(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new oe(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Qe.fromString(e))}static fromName(e){return new de(Qe.fromString(e).popFirst(5))}static empty(){return new de(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Qe(e.slice()))}}/**
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
 */const xa=-1;function J0(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new ft(t+1,0):new ft(t,s));return new fi(o,de.empty(),e)}function Z0(i){return new fi(i.readTime,i.key,xa)}class fi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new fi(_e.min(),de.empty(),xa)}static max(){return new fi(_e.max(),de.empty(),xa)}}function eT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(i.documentKey,e.documentKey),t!==0?t:Te(i.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Io(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==tT)throw i;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof j?t:j.resolve(t)}catch(t){return j.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,s)=>{t(e)})}static reject(e){return new j((t,s)=>{s(e)})}static waitFor(e){return new j((t,s)=>{let o=0,u=0,h=!1;e.forEach(m=>{++o,m.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=j.resolve(!1);for(const s of e)t=t.next(o=>o?j.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new j((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(w=>{h[v]=w,++m,m===u&&s(h)},w=>o(w))}})}static doWhile(e,t){return new j((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function rT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function So(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Zu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Zu.le=-1;/**
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
 */const Fd=-1;function ec(i){return i==null}function xu(i){return i===0&&1/i==-1/0}function iT(i){return typeof i=="number"&&Number.isInteger(i)&&!xu(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const zy="";function sT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=sg(e)),e=oT(i.get(t),e);return sg(e)}function oT(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case zy:t+="";break;default:t+=u}}return t}function sg(i){return i+zy+""}/**
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
 */function og(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function vi(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function By(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class Je{constructor(e,t){this.comparator=e,this.root=t||At.EMPTY}insert(e,t){return new Je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new gu(this.root,e,this.comparator,!0)}}class gu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??At.RED,this.left=o??At.EMPTY,this.right=u??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new At(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return At.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new At(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ag(this.data.getIterator())}getIteratorFrom(e){return new ag(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pt(this.comparator);return t.data=e,t}}class ag{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new ln([])}unionWith(e){let t=new pt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new jy("Invalid base64 string: "+u):u}}(e);return new Pt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new Pt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const aT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pi(i){if(be(!!i,39018),typeof i=="string"){let e=0;const t=aT.exec(i);if(be(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:rt(i.seconds),nanos:rt(i.nanos)}}function rt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function mi(i){return typeof i=="string"?Pt.fromBase64String(i):Pt.fromUint8Array(i)}/**
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
 */const $y="server_timestamp",Hy="__type__",Wy="__previous_value__",qy="__local_write_time__";function Ud(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hy])===null||t===void 0?void 0:t.stringValue)===$y}function tc(i){const e=i.mapValue.fields[Wy];return Ud(e)?tc(e):e}function La(i){const e=pi(i.mapValue.fields[qy].timestampValue);return new ft(e.seconds,e.nanos)}/**
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
 */class lT{constructor(e,t,s,o,u,h,m,g,v,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=v,this.isUsingEmulator=w}}const Lu="(default)";class Ma{constructor(e,t){this.projectId=e,this.database=t||Lu}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database===Lu}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ky="__type__",uT="__max__",yu={mapValue:{}},Gy="__vector__",Mu="value";function gi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Ud(i)?4:hT(i)?9007199254740991:cT(i)?10:11:pe(28295,{value:i})}function tr(i,e){if(i===e)return!0;const t=gi(i);if(t!==gi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return La(i).isEqual(La(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=pi(o.timestampValue),m=pi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(o,u){return mi(o.bytesValue).isEqual(mi(u.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(o,u){return rt(o.geoPointValue.latitude)===rt(u.geoPointValue.latitude)&&rt(o.geoPointValue.longitude)===rt(u.geoPointValue.longitude)}(i,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return rt(o.integerValue)===rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=rt(o.doubleValue),m=rt(u.doubleValue);return h===m?xu(h)===xu(m):isNaN(h)&&isNaN(m)}return!1}(i,e);case 9:return po(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(og(h)!==og(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!tr(h[g],m[g])))return!1;return!0}(i,e);default:return pe(52216,{left:i})}}function ba(i,e){return(i.values||[]).find(t=>tr(t,e))!==void 0}function mo(i,e){if(i===e)return 0;const t=gi(i),s=gi(e);if(t!==s)return Te(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(i.booleanValue,e.booleanValue);case 2:return function(u,h){const m=rt(u.integerValue||u.doubleValue),g=rt(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(i,e);case 3:return lg(i.timestampValue,e.timestampValue);case 4:return lg(La(i),La(e));case 5:return pd(i.stringValue,e.stringValue);case 6:return function(u,h){const m=mi(u),g=mi(h);return m.compareTo(g)}(i.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),g=h.split("/");for(let v=0;v<m.length&&v<g.length;v++){const w=Te(m[v],g[v]);if(w!==0)return w}return Te(m.length,g.length)}(i.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Te(rt(u.latitude),rt(h.latitude));return m!==0?m:Te(rt(u.longitude),rt(h.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return ug(i.arrayValue,e.arrayValue);case 10:return function(u,h){var m,g,v,w;const A=u.fields||{},C=h.fields||{},z=(m=A[Mu])===null||m===void 0?void 0:m.arrayValue,q=(g=C[Mu])===null||g===void 0?void 0:g.arrayValue,H=Te(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((w=q==null?void 0:q.values)===null||w===void 0?void 0:w.length)||0);return H!==0?H:ug(z,q)}(i.mapValue,e.mapValue);case 11:return function(u,h){if(u===yu.mapValue&&h===yu.mapValue)return 0;if(u===yu.mapValue)return 1;if(h===yu.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),v=h.fields||{},w=Object.keys(v);g.sort(),w.sort();for(let A=0;A<g.length&&A<w.length;++A){const C=pd(g[A],w[A]);if(C!==0)return C;const z=mo(m[g[A]],v[w[A]]);if(z!==0)return z}return Te(g.length,w.length)}(i.mapValue,e.mapValue);default:throw pe(23264,{Pe:t})}}function lg(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Te(i,e);const t=pi(i),s=pi(e),o=Te(t.seconds,s.seconds);return o!==0?o:Te(t.nanos,s.nanos)}function ug(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return Te(t.length,s.length)}function go(i){return md(i)}function md(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=pi(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return mi(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return de.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=md(u);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${md(t.fields[h])}`;return o+"}"}(i.mapValue):pe(61005,{value:i})}function Iu(i){switch(gi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tc(i);return e?16+Iu(e):16;case 5:return 2*i.stringValue.length;case 6:return mi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Iu(u),0)}(i.arrayValue);case 10:case 11:return function(s){let o=0;return vi(s.fields,(u,h)=>{o+=u.length+Iu(h)}),o}(i.mapValue);default:throw pe(13486,{value:i})}}function gd(i){return!!i&&"integerValue"in i}function zd(i){return!!i&&"arrayValue"in i}function cg(i){return!!i&&"nullValue"in i}function hg(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Su(i){return!!i&&"mapValue"in i}function cT(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ky])===null||t===void 0?void 0:t.stringValue)===Gy}function Pa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return vi(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Pa(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Pa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function hT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===uT}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Su(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Pa(h):o.push(m.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Su(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Su(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){vi(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Jt(Pa(this.value))}}function Qy(i){const e=[];return vi(i.fields,(t,s)=>{const o=new Rt([t]);if(Su(s)){const u=Qy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new ln(e)}/**
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
 */class bt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new bt(e,0,_e.min(),_e.min(),_e.min(),Jt.empty(),0)}static newFoundDocument(e,t,s,o){return new bt(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new bt(e,2,t,_e.min(),_e.min(),Jt.empty(),0)}static newUnknownDocument(e,t){return new bt(e,3,t,_e.min(),_e.min(),Jt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bu{constructor(e,t){this.position=e,this.inclusive=t}}function dg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=de.comparator(de.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function fg(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fu{constructor(e,t="asc"){this.field=e,this.dir=t}}function dT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Yy{}class dt extends Yy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new pT(e,t,s):t==="array-contains"?new yT(e,s):t==="in"?new _T(e,s):t==="not-in"?new vT(e,s):t==="array-contains-any"?new ET(e,s):new dt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new mT(e,s):new gT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(mo(t,this.value)):t!==null&&gi(this.value)===gi(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends Yy{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new nr(e,t)}matches(e){return Xy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Xy(i){return i.op==="and"}function Jy(i){return fT(i)&&Xy(i)}function fT(i){for(const e of i.filters)if(e instanceof nr)return!1;return!0}function yd(i){if(i instanceof dt)return i.field.canonicalString()+i.op.toString()+go(i.value);if(Jy(i))return i.filters.map(e=>yd(e)).join(",");{const e=i.filters.map(t=>yd(t)).join(",");return`${i.op}(${e})`}}function Zy(i,e){return i instanceof dt?function(s,o){return o instanceof dt&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)}(i,e):i instanceof nr?function(s,o){return o instanceof nr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,m)=>u&&Zy(h,o.filters[m]),!0):!1}(i,e):void pe(19439)}function e_(i){return i instanceof dt?function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`}(i):i instanceof nr?function(t){return t.op.toString()+" {"+t.getFilters().map(e_).join(" ,")+"}"}(i):"Filter"}class pT extends dt{constructor(e,t,s){super(e,t,s),this.key=de.fromName(s.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class mT extends dt{constructor(e,t){super(e,"in",t),this.keys=t_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gT extends dt{constructor(e,t){super(e,"not-in",t),this.keys=t_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function t_(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>de.fromName(s.referenceValue))}class yT extends dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zd(t)&&ba(t.arrayValue,this.value)}}class _T extends dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class vT extends dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ba(this.value.arrayValue,t)}}class ET extends dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ba(this.value.arrayValue,s))}}/**
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
 */class wT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function pg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new wT(i,e,t,s,o,u,h)}function Bd(i){const e=ve(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>yd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ec(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>go(s)).join(",")),e.Ie=t}return e.Ie}function jd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!dT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Zy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!fg(i.startAt,e.startAt)&&fg(i.endAt,e.endAt)}function _d(i){return de.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class nc{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function TT(i,e,t,s,o,u,h,m){return new nc(i,e,t,s,o,u,h,m)}function $d(i){return new nc(i)}function mg(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function IT(i){return i.collectionGroup!==null}function ka(i){const e=ve(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new pt(Rt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(m=m.add(v.field))})}),m})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Fu(u,s))}),t.has(Rt.keyField().canonicalString())||e.Ee.push(new Fu(Rt.keyField(),s))}return e.Ee}function Xn(i){const e=ve(i);return e.de||(e.de=ST(e,ka(i))),e.de}function ST(i,e){if(i.limitType==="F")return pg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Fu(o.field,u)});const t=i.endAt?new bu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new bu(i.startAt.position,i.startAt.inclusive):null;return pg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function vd(i,e,t){return new nc(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function rc(i,e){return jd(Xn(i),Xn(e))&&i.limitType===e.limitType}function n_(i){return`${Bd(Xn(i))}|lt:${i.limitType}`}function no(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>e_(o)).join(", ")}]`),ec(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>go(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>go(o)).join(",")),`Target(${s})`}(Xn(i))}; limitType=${i.limitType})`}function ic(i,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):de.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(i,e)&&function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(i,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(i,e)&&function(s,o){return!(s.startAt&&!function(h,m,g){const v=dg(h,m,g);return h.inclusive?v<=0:v<0}(s.startAt,ka(s),o)||s.endAt&&!function(h,m,g){const v=dg(h,m,g);return h.inclusive?v>=0:v>0}(s.endAt,ka(s),o))}(i,e)}function AT(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function r_(i){return(e,t)=>{let s=!1;for(const o of ka(i)){const u=RT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function RT(i,e,t){const s=i.field.isKeyField()?de.comparator(e.key,t.key):function(u,h,m){const g=h.data.field(u),v=m.data.field(u);return g!==null&&v!==null?mo(g,v):pe(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return pe(19790,{direction:i.dir})}}/**
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
 */class ss{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return By(this.inner)}size(){return this.innerSize}}/**
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
 */const CT=new Je(de.comparator);function Pr(){return CT}const i_=new Je(de.comparator);function Sa(...i){let e=i_;for(const t of i)e=e.insert(t.key,t);return e}function s_(i){let e=i_;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Ji(){return Na()}function o_(){return Na()}function Na(){return new ss(i=>i.toString(),(i,e)=>i.isEqual(e))}const PT=new Je(de.comparator),kT=new pt(de.comparator);function Ce(...i){let e=kT;for(const t of i)e=e.add(t);return e}const NT=new pt(Te);function DT(){return NT}/**
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
 */function Hd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function a_(i){return{integerValue:""+i}}function VT(i,e){return iT(e)?a_(e):Hd(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class sc{constructor(){this._=void 0}}function OT(i,e,t){return i instanceof Uu?function(o,u){const h={fields:{[Hy]:{stringValue:$y},[qy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Ud(u)&&(u=tc(u)),u&&(h.fields[Wy]=u),{mapValue:h}}(t,e):i instanceof Fa?u_(i,e):i instanceof Ua?c_(i,e):function(o,u){const h=l_(o,u),m=gg(h)+gg(o.Re);return gd(h)&&gd(o.Re)?a_(m):Hd(o.serializer,m)}(i,e)}function xT(i,e,t){return i instanceof Fa?u_(i,e):i instanceof Ua?c_(i,e):t}function l_(i,e){return i instanceof zu?function(s){return gd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Uu extends sc{}class Fa extends sc{constructor(e){super(),this.elements=e}}function u_(i,e){const t=h_(e);for(const s of i.elements)t.some(o=>tr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ua extends sc{constructor(e){super(),this.elements=e}}function c_(i,e){let t=h_(e);for(const s of i.elements)t=t.filter(o=>!tr(o,s));return{arrayValue:{values:t}}}class zu extends sc{constructor(e,t){super(),this.serializer=e,this.Re=t}}function gg(i){return rt(i.integerValue||i.doubleValue)}function h_(i){return zd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function LT(i,e){return i.field.isEqual(e.field)&&function(s,o){return s instanceof Fa&&o instanceof Fa||s instanceof Ua&&o instanceof Ua?po(s.elements,o.elements,tr):s instanceof zu&&o instanceof zu?tr(s.Re,o.Re):s instanceof Uu&&o instanceof Uu}(i.transform,e.transform)}class MT{constructor(e,t){this.version=e,this.transformResults=t}}class En{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Au(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class oc{}function d_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Wd(i.key,En.none()):new Wa(i.key,i.data,En.none());{const t=i.data,s=Jt.empty();let o=new pt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ei(i.key,s,new ln(o.toArray()),En.none())}}function bT(i,e,t){i instanceof Wa?function(o,u,h){const m=o.value.clone(),g=_g(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(i,e,t):i instanceof Ei?function(o,u,h){if(!Au(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=_g(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(f_(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(i,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Da(i,e,t,s){return i instanceof Wa?function(u,h,m,g){if(!Au(u.precondition,h))return m;const v=u.value.clone(),w=vg(u.fieldTransforms,g,h);return v.setAll(w),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(i,e,t,s):i instanceof Ei?function(u,h,m,g){if(!Au(u.precondition,h))return m;const v=vg(u.fieldTransforms,g,h),w=h.data;return w.setAll(f_(u)),w.setAll(v),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(i,e,t,s):function(u,h,m){return Au(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(i,e,t)}function FT(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=l_(s.transform,o||null);u!=null&&(t===null&&(t=Jt.empty()),t.set(s.field,u))}return t||null}function yg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,(u,h)=>LT(u,h))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Wa extends oc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ei extends oc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function f_(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function _g(i,e,t){const s=new Map;be(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,xT(h,m,t[o]))}return s}function vg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,OT(u,h,e))}return s}class Wd extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UT extends oc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zT{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&bT(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Da(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=o_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=d_(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ce())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(t,s)=>yg(t,s))&&po(this.baseMutations,e.baseMutations,(t,s)=>yg(t,s))}}class qd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){be(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=function(){return PT}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new qd(e,t,s,o)}}/**
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
 */class BT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class jT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ot,De;function $T(i){switch(i){case G.OK:return pe(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return pe(15467,{code:i})}}function p_(i){if(i===void 0)return Cr("GRPC error has no .code"),G.UNKNOWN;switch(i){case ot.OK:return G.OK;case ot.CANCELLED:return G.CANCELLED;case ot.UNKNOWN:return G.UNKNOWN;case ot.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case ot.INTERNAL:return G.INTERNAL;case ot.UNAVAILABLE:return G.UNAVAILABLE;case ot.UNAUTHENTICATED:return G.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case ot.NOT_FOUND:return G.NOT_FOUND;case ot.ALREADY_EXISTS:return G.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return G.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case ot.ABORTED:return G.ABORTED;case ot.OUT_OF_RANGE:return G.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return G.UNIMPLEMENTED;case ot.DATA_LOSS:return G.DATA_LOSS;default:return pe(39323,{code:i})}}(De=ot||(ot={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const HT=new hi([4294967295,4294967295],0);function Eg(i){const e=Fy().encode(i),t=new Ny;return t.update(e),new Uint8Array(t.digest())}function wg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new hi([t,s],0),new hi([o,u],0)]}class Kd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Aa(`Invalid padding: ${t}`);if(s<0)throw new Aa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=hi.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(hi.fromNumber(s)));return o.compare(HT)===1&&(o=new hi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Eg(e),[s,o]=wg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Kd(u,o,t);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.pe===0)return;const t=Eg(e),[s,o]=wg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ac{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,qa.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ac(_e.min(),o,new Je(Te),Pr(),Ce())}}class qa{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new qa(s,t,Ce(),Ce(),Ce())}}/**
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
 */class Ru{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class m_{constructor(e,t){this.targetId=e,this.Ce=t}}class g_{constructor(e,t,s=Pt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Tg{constructor(){this.Fe=0,this.Me=Ig(),this.xe=Pt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ce(),t=Ce(),s=Ce();return this.Me.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:pe(38017,{changeType:u})}}),new qa(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=Ig()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,be(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class WT{constructor(e){this.ze=e,this.je=new Map,this.He=Pr(),this.Je=_u(),this.Ye=_u(),this.Ze=new Je(Te)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:pe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((s,o)=>{this.it(o)&&t(o)})}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(_d(u))if(s===0){const h=new de(u.path);this.tt(t,h,bt.newNoDocument(h,_e.min()))}else be(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),g=m?this.lt(m,e,h):1;if(g!==0){this.st(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,v)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=mi(s).toUint8Array()}catch(g){if(g instanceof jy)return fo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Kd(h,o,u)}catch(g){return fo(g instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)}),o}It(e){const t=new Map;this.je.forEach((u,h)=>{const m=this._t(h);if(m){if(u.current&&_d(m.target)){const g=new de(m.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,bt.newNoDocument(g,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}});let s=Ce();this.Ye.forEach((u,h)=>{let m=!0;h.forEachWhile(g=>{const v=this._t(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(e));const o=new ac(e,t,this.Ze,this.He,s);return this.He=Pr(),this.Je=_u(),this.Ye=_u(),this.Ze=new Je(Te),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Tg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new pt(Te),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new pt(Te),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Tg),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function _u(){return new Je(de.comparator)}function Ig(){return new Je(de.comparator)}const qT={asc:"ASCENDING",desc:"DESCENDING"},KT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GT={and:"AND",or:"OR"};class QT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ed(i,e){return i.useProto3Json||ec(e)?e:{value:e}}function Bu(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function YT(i,e){return Bu(i,e.toTimestamp())}function Jn(i){return be(!!i,49232),_e.fromTimestamp(function(t){const s=pi(t);return new ft(s.seconds,s.nanos)}(i))}function Gd(i,e){return wd(i,e).canonicalString()}function wd(i,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(i).child("documents");return e===void 0?t:t.child(e)}function __(i){const e=Qe.fromString(i);return be(I_(e),10190,{key:e.toString()}),e}function Td(i,e){return Gd(i.databaseId,e.path)}function td(i,e){const t=__(e);if(t.get(1)!==i.databaseId.projectId)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new oe(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new de(E_(t))}function v_(i,e){return Gd(i.databaseId,e)}function XT(i){const e=__(i);return e.length===4?Qe.emptyPath():E_(e)}function Id(i){return new Qe(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function E_(i){return be(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function Sg(i,e,t){return{name:Td(i,e),fields:t.value.mapValue.fields}}function JT(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:pe(39313,{state:v})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,w){return v.useProto3Json?(be(w===void 0||typeof w=="string",58123),Pt.fromBase64String(w||"")):(be(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),Pt.fromUint8Array(w||new Uint8Array))}(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(v){const w=v.code===void 0?G.UNKNOWN:p_(v.code);return new oe(w,v.message||"")}(h);t=new g_(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=td(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):_e.min(),m=new Jt({mapValue:{fields:s.document.fields}}),g=bt.newFoundDocument(o,u,h,m),v=s.targetIds||[],w=s.removedTargetIds||[];t=new Ru(v,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=td(i,s.document),u=s.readTime?Jn(s.readTime):_e.min(),h=bt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Ru([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=td(i,s.document),u=s.removedTargetIds||[];t=new Ru([],u,o,null)}else{if(!("filter"in e))return pe(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new jT(o,u),m=s.targetId;t=new m_(m,h)}}return t}function ZT(i,e){let t;if(e instanceof Wa)t={update:Sg(i,e.key,e.value)};else if(e instanceof Wd)t={delete:Td(i,e.key)};else if(e instanceof Ei)t={update:Sg(i,e.key,e.data),updateMask:lI(e.fieldMask)};else{if(!(e instanceof UT))return pe(16599,{ft:e.type});t={verify:Td(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Uu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Fa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof zu)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw pe(20930,{transform:h.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:YT(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:pe(27497)}(i,e.precondition)),t}function eI(i,e){return i&&i.length>0?(be(e!==void 0,14353),i.map(t=>function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(_e.min())&&(h=Jn(u)),new MT(h,o.transformResults||[])}(t,e))):[]}function tI(i,e){return{documents:[v_(i,e.path)]}}function nI(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=v_(i,o);const u=function(v){if(v.length!==0)return T_(nr.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(w=>function(C){return{field:ro(C.field),direction:sI(C.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=Ed(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{gt:t,parent:o}}function rI(i){let e=XT(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){be(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=function(A){const C=w_(A);return C instanceof nr&&Jy(C)?C.getFilters():[C]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(C=>function(q){return new Fu(io(q.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(q.direction))}(C))}(t.orderBy));let m=null;t.limit&&(m=function(A){let C;return C=typeof A=="object"?A.value:A,ec(C)?null:C}(t.limit));let g=null;t.startAt&&(g=function(A){const C=!!A.before,z=A.values||[];return new bu(z,C)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const C=!A.before,z=A.values||[];return new bu(z,C)}(t.endAt)),TT(e,o,h,u,m,"F",g,v)}function iI(i,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function w_(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=io(t.unaryFilter.field);return dt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=io(t.unaryFilter.field);return dt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=io(t.unaryFilter.field);return dt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=io(t.unaryFilter.field);return dt.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}}(i):i.fieldFilter!==void 0?function(t){return dt.create(io(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return nr.create(t.compositeFilter.filters.map(s=>w_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return pe(1026)}}(t.compositeFilter.op))}(i):pe(30097,{filter:i})}function sI(i){return qT[i]}function oI(i){return KT[i]}function aI(i){return GT[i]}function ro(i){return{fieldPath:i.canonicalString()}}function io(i){return Rt.fromServerFormat(i.fieldPath)}function T_(i){return i instanceof dt?function(t){if(t.op==="=="){if(hg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NAN"}};if(cg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NAN"}};if(cg(t.value))return{unaryFilter:{field:ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(t.field),op:oI(t.op),value:t.value}}}(i):i instanceof nr?function(t){const s=t.getFilters().map(o=>T_(o));return s.length===1?s[0]:{compositeFilter:{op:aI(t.op),filters:s}}}(i):pe(54877,{filter:i})}function lI(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function I_(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class ai{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=Pt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new ai(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ai(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uI{constructor(e){this.wt=e}}function cI(i){const e=rI({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
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
 */class hI{constructor(){this.Cn=new dI}addToCollectionParentIndex(e,t){return this.Cn.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(fi.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(fi.min())}updateCollectionGroup(e,t,s){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}}class dI{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new pt(Qe.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new pt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},S_=41943040;class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(S_,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class yo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new yo(0)}static lr(){return new yo(-1)}}/**
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
 */const Rg="LruGarbageCollector",fI=1048576;function Cg([i,e],[t,s]){const o=Te(i,t);return o===0?Te(e,s):o}class pI{constructor(e){this.Er=e,this.buffer=new pt(Cg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Cg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mI{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te(Rg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){So(t)?te(Rg,"Ignoring IndexedDB error during garbage collection: ",t):await Io(t)}await this.mr(3e5)})}}class gI{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return j.resolve(Zu.le);const s=new pI(t);return this.gr.forEachTarget(e,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(e,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Ag)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ag):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,g,v;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,m=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),to()<=Re.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-w}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function yI(i,e){return new gI(i,e)}/**
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
 */class _I{constructor(){this.changes=new ss(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?j.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class vI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class EI{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Da(s.mutation,o,ln.empty(),ft.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Ce()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Ce()){const o=Ji();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Sa();return u.forEach((m,g)=>{h=h.insert(m,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Ji();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Ce()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,m)=>{t.set(h,m)})})}computeViews(e,t,s,o){let u=Pr();const h=Na(),m=function(){return Na()}();return t.forEach((g,v)=>{const w=s.get(v.key);o.has(v.key)&&(w===void 0||w.mutation instanceof Ei)?u=u.insert(v.key,v):w!==void 0?(h.set(v.key,w.mutation.getFieldMask()),Da(w.mutation,v,w.mutation.getFieldMask(),ft.now())):h.set(v.key,ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,w)=>h.set(v,w)),t.forEach((v,w)=>{var A;return m.set(v,new vI(w,(A=h.get(v))!==null&&A!==void 0?A:null))}),m))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new Je((h,m)=>h-m),u=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const m of h)m.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let w=s.get(g)||ln.empty();w=m.applyToLocalView(v,w),s.set(g,w);const A=(o.get(m.batchId)||Ce()).add(g);o=o.insert(m.batchId,A)})}).next(()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),v=g.key,w=g.value,A=o_();w.forEach(C=>{if(!u.has(C)){const z=d_(t.get(C),s.get(C));z!==null&&A.set(C,z),u=u.add(C)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return j.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return de.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):IT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):j.resolve(Ji());let m=xa,g=u;return h.next(v=>j.forEach(v,(w,A)=>(m<A.largestBatchId&&(m=A.largestBatchId),u.get(w)?j.resolve():this.remoteDocumentCache.getEntry(e,w).next(C=>{g=g.insert(w,C)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Ce())).next(w=>({batchId:m,changes:s_(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next(s=>{let o=Sa();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Sa();return this.indexManager.getCollectionParents(e,u).next(m=>j.forEach(m,g=>{const v=function(A,C){return new nc(C,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(w=>{w.forEach((A,C)=>{h=h.insert(A,C)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const w=v.getKey();h.get(w)===null&&(h=h.insert(w,bt.newInvalidDocument(w)))});let m=Sa();return h.forEach((g,v)=>{const w=u.get(g);w!==void 0&&Da(w.mutation,v,ln.empty(),ft.now()),ic(t,v)&&(m=m.insert(g,v))}),m})}}/**
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
 */class wI{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return j.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}}(t)),j.resolve()}getNamedQuery(e,t){return j.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(o){return{name:o.name,query:cI(o.bundledQuery),readTime:Jn(o.readTime)}}(t)),j.resolve()}}/**
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
 */class TI{constructor(){this.overlays=new Je(de.comparator),this.Qr=new Map}getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ji();return j.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.St(e,t,u)}),j.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),j.resolve()}getOverlaysForCollection(e,t,s){const o=Ji(),u=t.length+1,h=new de(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return j.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Je((v,w)=>v-w);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let w=u.get(v.largestBatchId);w===null&&(w=Ji(),u=u.insert(v.largestBatchId,w)),w.set(v.getKey(),v)}}const m=Ji(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,w)=>m.set(v,w)),!(m.size()>=o)););return j.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new BT(t,s));let u=this.Qr.get(t);u===void 0&&(u=Ce(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class II{constructor(){this.sessionToken=Pt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,j.resolve()}}/**
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
 */class Qd{constructor(){this.$r=new pt(Et.Ur),this.Kr=new pt(Et.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new Et(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.zr(new Et(e,t))}jr(e,t){e.forEach(s=>this.removeReference(s,t))}Hr(e){const t=new de(new Qe([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new de(new Qe([])),s=new Et(t,e),o=new Et(t,e+1);let u=Ce();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return de.comparator(e.key,t.key)||Te(e.Zr,t.Zr)}static Wr(e,t){return Te(e.Zr,t.Zr)||de.comparator(e.key,t.key)}}/**
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
 */class SI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new pt(Et.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new zT(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new Et(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return j.resolve(h)}lookupMutationBatch(e,t){return j.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return j.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Fd:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const m=this.ei(h.Zr);u.push(m)}),j.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new pt(Te);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],m=>{s=s.add(m.Zr)})}),j.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;de.isDocumentKey(u)||(u=u.child(""));const h=new Et(new de(u),0);let m=new pt(Te);return this.Xr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(m=m.add(g.Zr)),!0)},h),j.resolve(this.ni(m))}ni(e){const t=[];return e.forEach(s=>{const o=this.ei(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){be(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return j.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,t){const s=new Et(t,0),o=this.Xr.firstAfterOrEqual(s);return j.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class AI{constructor(e){this.ii=e,this.docs=function(){return new Je(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return j.resolve(s?s.document.mutableCopy():bt.newInvalidDocument(t))}getEntries(e,t){let s=Pr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():bt.newInvalidDocument(o))}),j.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Pr();const h=t.path,m=new de(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:v,value:{document:w}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||eT(Z0(w),s)<=0||(o.has(w.key)||ic(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return j.resolve(u)}getAllFromCollectionGroup(e,t,s,o){pe(9500)}si(e,t){return j.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new RI(this)}getSize(e){return j.resolve(this.size)}}class RI extends _I{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)}),j.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class CI{constructor(e){this.persistence=e,this.oi=new ss(t=>Bd(t),jd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this._i=0,this.ai=new Qd,this.targetCount=0,this.ui=yo.cr()}forEachTarget(e,t){return this.oi.forEach((s,o)=>t(o)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),j.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new yo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Tr(t),j.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)}),j.waitFor(u).next(()=>o)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return j.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),j.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),j.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),j.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return j.resolve(s)}containsKey(e,t){return j.resolve(this.ai.containsKey(t))}}/**
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
 */class A_{constructor(e,t){this.ci={},this.overlays={},this.li=new Zu(0),this.hi=!1,this.hi=!0,this.Pi=new II,this.referenceDelegate=e(this),this.Ti=new CI(this),this.indexManager=new hI,this.remoteDocumentCache=function(o){return new AI(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new uI(t),this.Ei=new wI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new SI(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){te("MemoryPersistence","Starting transaction:",e);const o=new PI(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(e,t){return j.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,t)))}}class PI extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class Yd{constructor(e){this.persistence=e,this.Vi=new Qd,this.mi=null}static fi(e){return new Yd(e)}get gi(){if(this.mi)return this.mi;throw pe(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),j.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),j.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,s=>{const o=de.fromPath(s);return this.pi(e,o).next(u=>{u||t.removeEntry(o,_e.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return j.or([()=>j.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.yi=new ss(s=>sT(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=yI(this,t)}static fi(e,t){return new ju(e,t)}di(){}Ai(e){return j.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}br(e){let t=0;return this.yr(e,s=>{t++}).next(()=>t)}yr(e,t){return j.forEach(this.yi,(s,o)=>this.Dr(e,s,o).next(u=>u?j.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,h=>this.Dr(e,h,t).next(m=>{m||(s++,u.removeEntry(h,_e.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),j.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),j.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Iu(e.data.value)),t}Dr(e,t,s){return j.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return j.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=Ce(),o=Ce();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Xd(e,t.fromCache,s,o)}}/**
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
 */class kI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NI{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Iw()?8:rT(Ft())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.bs(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new kI;return this.Ss(e,t,h).next(m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)})}).next(()=>u.result)}Ds(e,t,s,o){return s.documentReadCount<this.gs?(to()<=Re.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",no(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(to()<=Re.DEBUG&&te("QueryEngine","Query:",no(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(to()<=Re.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",no(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(t))):j.resolve())}ws(e,t){if(mg(t))return j.resolve(null);let s=Xn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vd(t,null,"F"),s=Xn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ce(...u);return this.ys.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.vs(t,m);return this.Cs(t,v,h,g.readTime)?this.ws(e,vd(t,null,"F")):this.Fs(e,v,t,g)}))})))}bs(e,t,s,o){return mg(t)||o.isEqual(_e.min())?j.resolve(null):this.ys.getDocuments(e,s).next(u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?j.resolve(null):(to()<=Re.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),no(t)),this.Fs(e,h,t,J0(o,xa)).next(m=>m))})}vs(e,t){let s=new pt(r_(e));return t.forEach((o,u)=>{ic(e,u)&&(s=s.add(u))}),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return to()<=Re.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",no(t)),this.ys.getDocumentsMatchingQuery(e,t,fi.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Jd="LocalStore",DI=3e8;class VI{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new Je(Te),this.Os=new ss(u=>Bd(u),jd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EI(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function OI(i,e,t,s){return new VI(i,e,t,s)}async function R_(i,e){const t=ve(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let g=Ce();for(const v of o){h.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}for(const v of u){m.push(v.batchId);for(const w of v.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next(v=>({ks:v,removedBatchIds:h,addedBatchIds:m}))})})}function xI(i,e){const t=ve(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return function(m,g,v,w){const A=v.batch,C=A.keys();let z=j.resolve();return C.forEach(q=>{z=z.next(()=>w.getEntry(g,q)).next(H=>{const B=v.docVersions.get(q);be(B!==null,48541),H.version.compareTo(B)<0&&(A.applyToRemoteDocument(H,v),H.isValidDocument()&&(H.setReadTime(v.commitVersion),w.addEntry(H)))})}),z.next(()=>m.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Ce();for(let v=0;v<m.mutationResults.length;++v)m.mutationResults[v].transformResults.length>0&&(g=g.add(m.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function C_(i){const e=ve(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function LI(i,e){const t=ve(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach((w,A)=>{const C=o.get(A);if(!C)return;m.push(t.Ti.removeMatchingKeys(u,w.removedDocuments,A).next(()=>t.Ti.addMatchingKeys(u,w.addedDocuments,A)));let z=C.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(Pt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(w.resumeToken,s)),o=o.insert(A,z),function(H,B,ge){return H.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=DI?!0:ge.addedDocuments.size+ge.modifiedDocuments.size+ge.removedDocuments.size>0}(C,z,w)&&m.push(t.Ti.updateTargetData(u,z))});let g=Pr(),v=Ce();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))}),m.push(MI(u,h,e.documentUpdates).next(w=>{g=w.qs,v=w.Qs})),!s.isEqual(_e.min())){const w=t.Ti.getLastRemoteSnapshotVersion(u).next(A=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(w)}return j.waitFor(m).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.xs=o,u))}function MI(i,e,t){let s=Ce(),o=Ce();return t.forEach(u=>s=s.add(u)),e.getEntries(i,s).next(u=>{let h=Pr();return t.forEach((m,g)=>{const v=u.get(m);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):te(Jd,"Ignoring outdated watch update for ",m,". Current version:",v.version," Watch version:",g.version)}),{qs:h,Qs:o}})}function bI(i,e){const t=ve(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Fd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function FI(i,e){const t=ve(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Ti.getTargetData(s,e).next(u=>u?(o=u,j.resolve(o)):t.Ti.allocateTargetId(s).next(h=>(o=new ai(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s})}async function Sd(i,e,t){const s=ve(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!So(h))throw h;te(Jd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function Pg(i,e,t){const s=ve(i);let o=_e.min(),u=Ce();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,w){const A=ve(g),C=A.Os.get(w);return C!==void 0?j.resolve(A.xs.get(C)):A.Ti.getTargetData(v,w)}(s,h,Xn(e)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next(g=>{u=g})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:Ce())).next(m=>(UI(s,AT(e),m),{documents:m,$s:u})))}function UI(i,e,t){let s=i.Ns.get(e)||_e.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),i.Ns.set(e,s)}class kg{constructor(){this.activeTargetIds=DT()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zI{constructor(){this.xo=new kg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new kg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BI{No(e){}shutdown(){}}/**
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
 */const Ng="ConnectivityMonitor";class Dg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(Ng,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(Ng,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vu=null;function Ad(){return vu===null?vu=function(){return 268435456+Math.round(2147483648*Math.random())}():vu++,"0x"+vu.toString(16)}/**
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
 */const nd="RestConnection",jI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $I{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Lu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=Ad(),m=this.jo(e,t.toUriEncodedString());te(nd,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:v}=new URL(m),w=Eo(v);return this.Jo(e,m,g,s,w).then(A=>(te(nd,`Received RPC '${e}' ${h}: `,A),A),A=>{throw fo(nd,`RPC '${e}' ${h} failed with error: `,A,"url: ",m,"request:",s),A})}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}jo(e,t){const s=jI[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class HI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Lt="WebChannelConnection";class WI extends $I{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=Ad();return new Promise((m,g)=>{const v=new Dy;v.setWithCredentials(!0),v.listenOnce(Vy.COMPLETE,()=>{try{switch(v.getLastErrorCode()){case Tu.NO_ERROR:const A=v.getResponseJson();te(Lt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(A)),m(A);break;case Tu.TIMEOUT:te(Lt,`RPC '${e}' ${h} timed out`),g(new oe(G.DEADLINE_EXCEEDED,"Request time out"));break;case Tu.HTTP_ERROR:const C=v.getStatus();if(te(Lt,`RPC '${e}' ${h} failed with status:`,C,"response text:",v.getResponseText()),C>0){let z=v.getResponseJson();Array.isArray(z)&&(z=z[0]);const q=z==null?void 0:z.error;if(q&&q.status&&q.message){const H=function(ge){const le=ge.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(le)>=0?le:G.UNKNOWN}(q.status);g(new oe(H,q.message))}else g(new oe(G.UNKNOWN,"Server responded with status "+v.getStatus()))}else g(new oe(G.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{h_:e,streamId:h,P_:v.getLastErrorCode(),T_:v.getLastError()})}}finally{te(Lt,`RPC '${e}' ${h} completed.`)}});const w=JSON.stringify(o);te(Lt,`RPC '${e}' ${h} sending request:`,o),v.send(t,"POST",w,s,15)})}I_(e,t,s){const o=Ad(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ly(),m=xy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");te(Lt,`Creating RPC '${e}' stream ${o}: ${w}`,g);const A=h.createWebChannel(w,g);this.E_(A);let C=!1,z=!1;const q=new HI({Zo:B=>{z?te(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(C||(te(Lt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),C=!0),te(Lt,`RPC '${e}' stream ${o} sending:`,B),A.send(B))},Xo:()=>A.close()}),H=(B,ge,le)=>{B.listen(ge,me=>{try{le(me)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return H(A,Ia.EventType.OPEN,()=>{z||(te(Lt,`RPC '${e}' stream ${o} transport opened.`),q.__())}),H(A,Ia.EventType.CLOSE,()=>{z||(z=!0,te(Lt,`RPC '${e}' stream ${o} transport closed`),q.u_(),this.d_(A))}),H(A,Ia.EventType.ERROR,B=>{z||(z=!0,fo(Lt,`RPC '${e}' stream ${o} transport errored. Name:`,B.name,"Message:",B.message),q.u_(new oe(G.UNAVAILABLE,"The operation could not be completed")))}),H(A,Ia.EventType.MESSAGE,B=>{var ge;if(!z){const le=B.data[0];be(!!le,16349);const me=le,Ee=(me==null?void 0:me.error)||((ge=me[0])===null||ge===void 0?void 0:ge.error);if(Ee){te(Lt,`RPC '${e}' stream ${o} received error:`,Ee);const qe=Ee.status;let Ae=function(R){const k=ot[R];if(k!==void 0)return p_(k)}(qe),D=Ee.message;Ae===void 0&&(Ae=G.INTERNAL,D="Unknown error status: "+qe+" with message "+Ee.message),z=!0,q.u_(new oe(Ae,D)),A.close()}else te(Lt,`RPC '${e}' stream ${o} received:`,le),q.c_(le)}}),H(m,Oy.STAT_EVENT,B=>{B.stat===fd.PROXY?te(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===fd.NOPROXY&&te(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{q.a_()},0),q}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function rd(){return typeof document<"u"?document:null}/**
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
 */function lc(i){return new QT(i,!0)}/**
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
 */class P_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&te("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Vg="PersistentStream";class k_{constructor(e,t,s,o,u,h,m,g){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new P_(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Cr(t.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.v_===t&&this.z_(s,o)},s=>{e(()=>{const o=new oe(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)})})}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.j_(o))}),this.stream.onMessage(o=>{s(()=>++this.M_==1?this.J_(o):this.onNext(o))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return te(Vg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(te(Vg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qI extends k_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=JT(this.serializer,e),s=function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?Jn(h.readTime):_e.min()}(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=Id(this.serializer),t.addTarget=function(u,h){let m;const g=h.target;if(m=_d(g)?{documents:tI(u,g)}:{query:nI(u,g).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=y_(u,h.resumeToken);const v=Ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Bu(u,h.snapshotVersion.toTimestamp());const v=Ed(u,h.expectedCount);v!==null&&(m.expectedCount=v)}return m}(this.serializer,e);const s=iI(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=Id(this.serializer),t.removeTarget=e,this.Q_(t)}}class KI extends k_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=eI(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=Id(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>ZT(this.serializer,s))};this.Q_(t)}}/**
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
 */class GI{}class QI extends GI{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(e,wd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new oe(G.UNKNOWN,u.toString())})}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Yo(e,wd(t,s),o,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(G.UNKNOWN,h.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class YI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Cr(t),this.ua=!1):te("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const ns="RemoteStore";class XI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No(h=>{s.enqueueAndForget(async()=>{os(this)&&(te(ns,"Restarting streams for network reachability change."),await async function(g){const v=ve(g);v.da.add(4),await Ka(v),v.Va.set("Unknown"),v.da.delete(4),await uc(v)}(this))})}),this.Va=new YI(s,o)}}async function uc(i){if(os(i))for(const e of i.Aa)await e(!0)}async function Ka(i){for(const e of i.Aa)await e(!1)}function N_(i,e){const t=ve(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),nf(t)?tf(t):Ao(t).N_()&&ef(t,e))}function Zd(i,e){const t=ve(i),s=Ao(t);t.Ea.delete(e),s.N_()&&D_(t,e),t.Ea.size===0&&(s.N_()?s.k_():os(t)&&t.Va.set("Unknown"))}function ef(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ao(i).Z_(e)}function D_(i,e){i.ma.Ke(e),Ao(i).X_(e)}function tf(i){i.ma=new WT({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),Ao(i).start(),i.Va.ca()}function nf(i){return os(i)&&!Ao(i).O_()&&i.Ea.size>0}function os(i){return ve(i).da.size===0}function V_(i){i.ma=void 0}async function JI(i){i.Va.set("Online")}async function ZI(i){i.Ea.forEach((e,t)=>{ef(i,e)})}async function eS(i,e){V_(i),nf(i)?(i.Va.Pa(e),tf(i)):i.Va.set("Unknown")}async function tS(i,e,t){if(i.Va.set("Online"),e instanceof g_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))}(i,e)}catch(s){te(ns,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await $u(i,s)}else if(e instanceof Ru?i.ma.Xe(e):e instanceof m_?i.ma.ot(e):i.ma.nt(e),!t.isEqual(_e.min()))try{const s=await C_(i.localStore);t.compareTo(s)>=0&&await function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ea.get(v);w&&u.Ea.set(v,w.withResumeToken(g.resumeToken,h))}}),m.targetMismatches.forEach((g,v)=>{const w=u.Ea.get(g);if(!w)return;u.Ea.set(g,w.withResumeToken(Pt.EMPTY_BYTE_STRING,w.snapshotVersion)),D_(u,g);const A=new ai(w.target,g,v,w.sequenceNumber);ef(u,A)}),u.remoteSyncer.applyRemoteEvent(m)}(i,t)}catch(s){te(ns,"Failed to raise snapshot:",s),await $u(i,s)}}async function $u(i,e,t){if(!So(e))throw e;i.da.add(1),await Ka(i),i.Va.set("Offline"),t||(t=()=>C_(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{te(ns,"Retrying IndexedDB access"),await t(),i.da.delete(1),await uc(i)})}function O_(i,e){return e().catch(t=>$u(i,t,e))}async function cc(i){const e=ve(i),t=yi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Fd;for(;nS(e);)try{const o=await bI(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,rS(e,o)}catch(o){await $u(e,o)}x_(e)&&L_(e)}function nS(i){return os(i)&&i.Ia.length<10}function rS(i,e){i.Ia.push(e);const t=yi(i);t.N_()&&t.ea&&t.ta(e.mutations)}function x_(i){return os(i)&&!yi(i).O_()&&i.Ia.length>0}function L_(i){yi(i).start()}async function iS(i){yi(i).ia()}async function sS(i){const e=yi(i);for(const t of i.Ia)e.ta(t.mutations)}async function oS(i,e,t){const s=i.Ia.shift(),o=qd.from(s,e,t);await O_(i,()=>i.remoteSyncer.applySuccessfulWrite(o)),await cc(i)}async function aS(i,e){e&&yi(i).ea&&await async function(s,o){if(function(h){return $T(h)&&h!==G.ABORTED}(o.code)){const u=s.Ia.shift();yi(s).L_(),await O_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await cc(s)}}(i,e),x_(i)&&L_(i)}async function Og(i,e){const t=ve(i);t.asyncQueue.verifyOperationInProgress(),te(ns,"RemoteStore received new credentials");const s=os(t);t.da.add(3),await Ka(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await uc(t)}async function lS(i,e){const t=ve(i);e?(t.da.delete(2),await uc(t)):e||(t.da.add(2),await Ka(t),t.Va.set("Unknown"))}function Ao(i){return i.fa||(i.fa=function(t,s,o){const u=ve(t);return u.oa(),new qI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:JI.bind(null,i),n_:ZI.bind(null,i),i_:eS.bind(null,i),Y_:tS.bind(null,i)}),i.Aa.push(async e=>{e?(i.fa.L_(),nf(i)?tf(i):i.Va.set("Unknown")):(await i.fa.stop(),V_(i))})),i.fa}function yi(i){return i.ga||(i.ga=function(t,s,o){const u=ve(t);return u.oa(),new KI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:iS.bind(null,i),i_:aS.bind(null,i),na:sS.bind(null,i),ra:oS.bind(null,i)}),i.Aa.push(async e=>{e?(i.ga.L_(),await cc(i)):(await i.ga.stop(),i.Ia.length>0&&(te(ns,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))})),i.ga}/**
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
 */class rf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new rf(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sf(i,e){if(Cr("AsyncQueue",`${e}: ${i}`),So(i))return new oe(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||de.comparator(t.key,s.key):(t,s)=>de.comparator(t.key,s.key),this.keyedMap=Sa(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new oo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class xg{constructor(){this.pa=new Je(de.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):pe(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,s)=>{e.push(s)}),e}}class _o{constructor(e,t,s,o,u,h,m,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(m=>{h.push({type:0,doc:m})}),new _o(e,t,oo.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class uS{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class cS{constructor(){this.queries=Lg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=ve(t),u=o.queries;o.queries=Lg(),u.forEach((h,m)=>{for(const g of m.Sa)g.onError(s)})})(this,new oe(G.ABORTED,"Firestore shutting down"))}}function Lg(){return new ss(i=>n_(i),rc)}async function M_(i,e){const t=ve(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new uS,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=sf(h,`Initialization of query '${no(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&of(t)}async function b_(i,e){const t=ve(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function hS(i,e){const t=ve(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&of(t)}function dS(i,e,t){const s=ve(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function of(i){i.Ca.forEach(e=>{e.next()})}var Rd,Mg;(Mg=Rd||(Rd={})).xa="default",Mg.Cache="cache";class F_{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new _o(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Rd.Cache}}/**
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
 */class U_{constructor(e){this.key=e}}class z_{constructor(e){this.key=e}}class fS{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ce(),this.mutatedKeys=Ce(),this.Za=r_(e),this.Xa=new oo(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new xg,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,A)=>{const C=o.get(w),z=ic(this.query,A)?A:null,q=!!C&&this.mutatedKeys.has(C.key),H=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let B=!1;C&&z?C.data.isEqual(z.data)?q!==H&&(s.track({type:3,doc:z}),B=!0):this.ru(C,z)||(s.track({type:2,doc:z}),B=!0,(g&&this.Za(z,g)>0||v&&this.Za(z,v)<0)&&(m=!0)):!C&&z?(s.track({type:0,doc:z}),B=!0):C&&!z&&(s.track({type:1,doc:C}),B=!0,(g||v)&&(m=!0)),B&&(z?(h=h.add(z),u=H?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort((w,A)=>function(z,q){const H=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe(20277,{Vt:B})}};return H(z)-H(q)}(w.type,A.type)||this.Za(w.doc,A.doc)),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],g=this.Ya.size===0&&this.current&&!o?1:0,v=g!==this.Ja;return this.Ja=g,h.length!==0||v?{snapshot:new _o(this.query,e.Xa,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new xg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Ce(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new z_(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new U_(s))}),t}au(e){this.Ha=e.$s,this.Ya=Ce();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return _o.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const af="SyncEngine";class pS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class mS{constructor(e){this.key=e,this.cu=!1}}class gS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new ss(m=>n_(m),rc),this.Pu=new Map,this.Tu=new Set,this.Iu=new Je(de.comparator),this.Eu=new Map,this.du=new Qd,this.Au={},this.Ru=new Map,this.Vu=yo.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function yS(i,e,t=!0){const s=q_(i);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await B_(s,e,t,!0),o}async function _S(i,e){const t=q_(i);await B_(t,e,!0,!1)}async function B_(i,e,t,s){const o=await FI(i.localStore,Xn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await vS(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&N_(i.remoteStore,o),m}async function vS(i,e,t,s,o){i.fu=(A,C,z)=>async function(H,B,ge,le){let me=B.view.tu(ge);me.Cs&&(me=await Pg(H.localStore,B.query,!1).then(({documents:D})=>B.view.tu(D,me)));const Ee=le&&le.targetChanges.get(B.targetId),qe=le&&le.targetMismatches.get(B.targetId)!=null,Ae=B.view.applyChanges(me,H.isPrimaryClient,Ee,qe);return Fg(H,B.targetId,Ae.ou),Ae.snapshot}(i,A,C,z);const u=await Pg(i.localStore,e,!0),h=new fS(e,u.$s),m=h.tu(u.documents),g=qa.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),v=h.applyChanges(m,i.isPrimaryClient,g);Fg(i,t,v.ou);const w=new pS(e,t,h);return i.hu.set(e,w),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),v.snapshot}async function ES(i,e,t){const s=ve(i),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter(h=>!rc(h,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Sd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Zd(s.remoteStore,o.targetId),Cd(s,o.targetId)}).catch(Io)):(Cd(s,o.targetId),await Sd(s.localStore,o.targetId,!0))}async function wS(i,e){const t=ve(i),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Zd(t.remoteStore,s.targetId))}async function TS(i,e,t){const s=kS(i);try{const o=await function(h,m){const g=ve(h),v=ft.now(),w=m.reduce((z,q)=>z.add(q.key),Ce());let A,C;return g.persistence.runTransaction("Locally write mutations","readwrite",z=>{let q=Pr(),H=Ce();return g.Bs.getEntries(z,w).next(B=>{q=B,q.forEach((ge,le)=>{le.isValidDocument()||(H=H.add(ge))})}).next(()=>g.localDocuments.getOverlayedDocuments(z,q)).next(B=>{A=B;const ge=[];for(const le of m){const me=FT(le,A.get(le.key).overlayedDocument);me!=null&&ge.push(new Ei(le.key,me,Qy(me.value.mapValue),En.exists(!0)))}return g.mutationQueue.addMutationBatch(z,v,ge,m)}).next(B=>{C=B;const ge=B.applyToLocalDocumentSet(A,H);return g.documentOverlayCache.saveOverlays(z,B.batchId,ge)})}).then(()=>({batchId:C.batchId,changes:s_(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,m,g){let v=h.Au[h.currentUser.toKey()];v||(v=new Je(Te)),v=v.insert(m,g),h.Au[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ga(s,o.changes),await cc(s.remoteStore)}catch(o){const u=sf(o,"Failed to persist write");t.reject(u)}}async function j_(i,e){const t=ve(i);try{const s=await LI(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Eu.get(u);h&&(be(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?be(h.cu,14607):o.removedDocuments.size>0&&(be(h.cu,42227),h.cu=!1))}),await Ga(t,s,e)}catch(s){await Io(s)}}function bg(i,e,t){const s=ve(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)}),function(h,m){const g=ve(h);g.onlineState=m;let v=!1;g.queries.forEach((w,A)=>{for(const C of A.Sa)C.Fa(m)&&(v=!0)}),v&&of(g)}(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function IS(i,e,t){const s=ve(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new Je(de.comparator);h=h.insert(u,bt.newNoDocument(u,_e.min()));const m=Ce().add(u),g=new ac(_e.min(),new Map,new Je(Te),h,m);await j_(s,g),s.Iu=s.Iu.remove(u),s.Eu.delete(e),lf(s)}else await Sd(s.localStore,e,!1).then(()=>Cd(s,e,t)).catch(Io)}async function SS(i,e){const t=ve(i),s=e.batch.batchId;try{const o=await xI(t.localStore,e);H_(t,s,null),$_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ga(t,o)}catch(o){await Io(o)}}async function AS(i,e,t){const s=ve(i);try{const o=await function(h,m){const g=ve(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let w;return g.mutationQueue.lookupMutationBatch(v,m).next(A=>(be(A!==null,37113),w=A.keys(),g.mutationQueue.removeMutationBatch(v,A))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,w,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,w)).next(()=>g.localDocuments.getDocuments(v,w))})}(s.localStore,e);H_(s,e,t),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ga(s,o)}catch(o){await Io(o)}}function $_(i,e){(i.Ru.get(e)||[]).forEach(t=>{t.resolve()}),i.Ru.delete(e)}function H_(i,e,t){const s=ve(i);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function Cd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Pu.get(e))i.hu.delete(s),t&&i.lu.gu(s,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach(s=>{i.du.containsKey(s)||W_(i,s)})}function W_(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&(Zd(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),lf(i))}function Fg(i,e,t){for(const s of t)s instanceof U_?(i.du.addReference(s.key,e),RS(i,s)):s instanceof z_?(te(af,"Document no longer in limbo: "+s.key),i.du.removeReference(s.key,e),i.du.containsKey(s.key)||W_(i,s.key)):pe(19791,{pu:s})}function RS(i,e){const t=e.key,s=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(s)||(te(af,"New document in limbo: "+t),i.Tu.add(s),lf(i))}function lf(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new de(Qe.fromString(e)),s=i.Vu.next();i.Eu.set(s,new mS(t)),i.Iu=i.Iu.insert(t,s),N_(i.remoteStore,new ai(Xn($d(t.path)),s,"TargetPurposeLimboResolution",Zu.le))}}async function Ga(i,e,t){const s=ve(i),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach((m,g)=>{h.push(s.fu(g,e,t).then(v=>{var w;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Xd.Rs(g.targetId,v);u.push(A)}}))}),await Promise.all(h),s.lu.Y_(o),await async function(g,v){const w=ve(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>j.forEach(v,C=>j.forEach(C.ds,z=>w.persistence.referenceDelegate.addReference(A,C.targetId,z)).next(()=>j.forEach(C.As,z=>w.persistence.referenceDelegate.removeReference(A,C.targetId,z)))))}catch(A){if(!So(A))throw A;te(Jd,"Failed to update sequence numbers: "+A)}for(const A of v){const C=A.targetId;if(!A.fromCache){const z=w.xs.get(C),q=z.snapshotVersion,H=z.withLastLimboFreeSnapshotVersion(q);w.xs=w.xs.insert(C,H)}}}(s.localStore,u))}async function CS(i,e){const t=ve(i);if(!t.currentUser.isEqual(e)){te(af,"User change. New user:",e.toKey());const s=await R_(t.localStore,e);t.currentUser=e,function(u,h){u.Ru.forEach(m=>{m.forEach(g=>{g.reject(new oe(G.CANCELLED,h))})}),u.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ga(t,s.ks)}}function PS(i,e){const t=ve(i),s=t.Eu.get(e);if(s&&s.cu)return Ce().add(s.key);{let o=Ce();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function q_(i){const e=ve(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=j_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IS.bind(null,e),e.lu.Y_=hS.bind(null,e.eventManager),e.lu.gu=dS.bind(null,e.eventManager),e}function kS(i){const e=ve(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AS.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return OI(this.persistence,new NI,e.initialUser,this.serializer)}Su(e){return new A_(Yd.fi,this.serializer)}bu(e){return new zI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class NS extends Hu{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){be(this.persistence.referenceDelegate instanceof ju,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new mI(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new A_(s=>ju.fi(s,t),this.serializer)}}class Pd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>bg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=CS.bind(null,this.syncEngine),await lS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cS}()}createDatastore(e){const t=lc(e.databaseInfo.databaseId),s=function(u){return new WI(u)}(e.databaseInfo);return function(u,h,m,g){return new QI(u,h,m,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,m){return new XI(s,o,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,t=>bg(this.syncEngine,t,0),function(){return Dg.C()?new Dg:new BI}())}createSyncEngine(e,t){return function(o,u,h,m,g,v,w){const A=new gS(o,u,h,m,g,v);return w&&(A.mu=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=ve(o);te(ns,"RemoteStore shutting down."),u.da.add(5),await Ka(u),u.Ra.shutdown(),u.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pd.provider={build:()=>new Pd};/**
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
 *//**
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
 */class K_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const _i="FirestoreClient";class DS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Uy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{te(_i,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(te(_i,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=sf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function id(i,e){i.asyncQueue.verifyOperationInProgress(),te(_i,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async o=>{s.isEqual(o)||(await R_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Ug(i,e){i.asyncQueue.verifyOperationInProgress();const t=await VS(i);te(_i,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>Og(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,o)=>Og(e.remoteStore,o)),i._onlineComponents=e}async function VS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){te(_i,"Using user provided OfflineComponentProvider");try{await id(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;fo("Error using user provided cache. Falling back to memory cache: "+t),await id(i,new Hu)}}else te(_i,"Using default OfflineComponentProvider"),await id(i,new NS(void 0));return i._offlineComponents}async function G_(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(te(_i,"Using user provided OnlineComponentProvider"),await Ug(i,i._uninitializedComponentsProvider._online)):(te(_i,"Using default OnlineComponentProvider"),await Ug(i,new Pd))),i._onlineComponents}function OS(i){return G_(i).then(e=>e.syncEngine)}async function Q_(i){const e=await G_(i),t=e.eventManager;return t.onListen=yS.bind(null,e.syncEngine),t.onUnlisten=ES.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_S.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=wS.bind(null,e.syncEngine),t}function xS(i,e,t={}){const s=new Sr;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new K_({next:C=>{w.xu(),h.enqueueAndForget(()=>b_(u,A));const z=C.docs.has(m);!z&&C.fromCache?v.reject(new oe(G.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&C.fromCache&&g&&g.source==="server"?v.reject(new oe(G.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(C)},error:C=>v.reject(C)}),A=new F_($d(m.path),w,{includeMetadataChanges:!0,Qa:!0});return M_(u,A)}(await Q_(i),i.asyncQueue,e,t,s)),s.promise}function LS(i,e,t={}){const s=new Sr;return i.asyncQueue.enqueueAndForget(async()=>function(u,h,m,g,v){const w=new K_({next:C=>{w.xu(),h.enqueueAndForget(()=>b_(u,A)),C.fromCache&&g.source==="server"?v.reject(new oe(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(C)},error:C=>v.reject(C)}),A=new F_(m,w,{includeMetadataChanges:!0,Qa:!0});return M_(u,A)}(await Q_(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Y_(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const zg=new Map;/**
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
 */function X_(i,e,t){if(!t)throw new oe(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function MS(i,e,t,s){if(e===!0&&s===!0)throw new oe(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Bg(i){if(!de.isDocumentKey(i))throw new oe(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function jg(i){if(de.isDocumentKey(i))throw new oe(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function uf(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":pe(12329,{type:typeof i})}function bn(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new oe(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uf(i);throw new oe(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const J_="firestore.googleapis.com",$g=!0;class Hg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=J_,this.ssl=$g}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$g;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=S_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fI)throw new oe(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Y_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new oe(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new $0;switch(s.type){case"firstParty":return new K0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=zg.get(t);s&&(te("ComponentProvider","Removing Datastore"),zg.delete(t),s.terminate())}(this),Promise.resolve()}}function bS(i,e,t,s={}){var o;i=bn(i,hc);const u=Eo(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(Ty(`https://${g}`),Iy("Firestore",!0)),h.host!==J_&&h.host!==g&&fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Zi(v,m)&&(i._setSettings(v),s.mockUserToken)){let w,A;if(typeof s.mockUserToken=="string")w=s.mockUserToken,A=Mt.MOCK_USER;else{w=pw(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const C=s.mockUserToken.sub||s.mockUserToken.user_id;if(!C)throw new oe(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new Mt(C)}i._authCredentials=new H0(new by(w,A))}}/**
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
 */class dc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new dc(this.firestore,e,this._query)}}class Zt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class di extends dc{constructor(e,t,s){super(e,t,$d(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new de(e))}withConverter(e){return new di(this.firestore,e,this._path)}}function Z_(i,e,...t){if(i=Ct(i),X_("collection","path",e),i instanceof hc){const s=Qe.fromString(e,...t);return jg(s),new di(i,null,s)}{if(!(i instanceof Zt||i instanceof di))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return jg(s),new di(i.firestore,null,s)}}function za(i,e,...t){if(i=Ct(i),arguments.length===1&&(e=Uy.newId()),X_("doc","path",e),i instanceof hc){const s=Qe.fromString(e,...t);return Bg(s),new Zt(i,null,new de(s))}{if(!(i instanceof Zt||i instanceof di))throw new oe(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Qe.fromString(e,...t));return Bg(s),new Zt(i.firestore,i instanceof di?i.converter:null,new de(s))}}/**
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
 */const Wg="AsyncQueue";class qg{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new P_(this,"async_queue_retry"),this.rc=()=>{const s=rd();s&&te(Wg,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=rd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=rd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Sr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!So(e))throw e;te(Wg,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,Cr("INTERNAL UNHANDLED ERROR: ",Kg(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=rf.createAndSchedule(this,e,t,s,u=>this.uc(u));return this.Zu.push(o),o}oc(){this.Xu&&pe(47125,{cc:Kg(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Kg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class as extends hc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new qg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qg(e),this._firestoreClient=void 0,await e}}}function FS(i,e){const t=typeof i=="object"?i:Cy(),s=typeof i=="string"?i:Lu,o=Md(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=dw("firestore");u&&bS(o,...u)}return o}function cf(i){if(i._terminated)throw new oe(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||US(i),i._firestoreClient}function US(i){var e,t,s;const o=i._freezeSettings(),u=function(m,g,v,w){return new lT(m,g,v,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Y_(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new DS(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(i._componentsProvider))}/**
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
 */class vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vo(Pt.fromBase64String(e))}catch(t){throw new oe(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new vo(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class fc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hf{constructor(e){this._methodName=e}}/**
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
 */class df{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ff{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const zS=/^__.*__$/;class BS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wa(e,this.data,t,this.fieldTransforms)}}class ev{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ei(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{Ic:i})}}class pf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Wu(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(tv(this.Ic)&&zS.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class jS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||lc(e)}bc(e,t,s,o=!1){return new pf({Ic:e,methodName:t,wc:s,path:Rt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mf(i){const e=i._freezeSettings(),t=lc(i._databaseId);return new jS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function nv(i,e,t,s,o,u={}){const h=i.bc(u.merge||u.mergeFields?2:0,e,t,o);gf("Data must be an object, but it was:",h,s);const m=rv(s,h);let g,v;if(u.merge)g=new ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const A of u.mergeFields){const C=kd(e,A,t);if(!h.contains(C))throw new oe(G.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);sv(w,C)||w.push(C)}g=new ln(w),v=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,v=h.fieldTransforms;return new BS(new Jt(m),g,v)}class pc extends hf{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function $S(i,e,t,s){const o=i.bc(1,e,t);gf("Data must be an object, but it was:",o,s);const u=[],h=Jt.empty();vi(s,(g,v)=>{const w=yf(e,g,t);v=Ct(v);const A=o.mc(w);if(v instanceof pc)u.push(w);else{const C=mc(v,A);C!=null&&(u.push(w),h.set(w,C))}});const m=new ln(u);return new ev(h,m,o.fieldTransforms)}function HS(i,e,t,s,o,u){const h=i.bc(1,e,t),m=[kd(e,s,t)],g=[o];if(u.length%2!=0)throw new oe(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(kd(e,u[C])),g.push(u[C+1]);const v=[],w=Jt.empty();for(let C=m.length-1;C>=0;--C)if(!sv(v,m[C])){const z=m[C];let q=g[C];q=Ct(q);const H=h.mc(z);if(q instanceof pc)v.push(z);else{const B=mc(q,H);B!=null&&(v.push(z),w.set(z,B))}}const A=new ln(v);return new ev(w,A,h.fieldTransforms)}function mc(i,e){if(iv(i=Ct(i)))return gf("Unsupported field value:",e,i),rv(i,e);if(i instanceof hf)return function(s,o){if(!tv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const m of s){let g=mc(m,o.fc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(i,e)}return function(s,o){if((s=Ct(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return VT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ft.fromDate(s);return{timestampValue:Bu(o.serializer,u)}}if(s instanceof ft){const u=new ft(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bu(o.serializer,u)}}if(s instanceof df)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof vo)return{bytesValue:y_(o.serializer,s._byteString)};if(s instanceof Zt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Gd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ff)return function(h,m){return{mapValue:{fields:{[Ky]:{stringValue:Gy},[Mu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw m.gc("VectorValues must only contain numeric values.");return Hd(m.serializer,v)})}}}}}}(s,o);throw o.gc(`Unsupported field value: ${uf(s)}`)}(i,e)}function rv(i,e){const t={};return By(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vi(i,(s,o)=>{const u=mc(o,e.Ac(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function iv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ft||i instanceof df||i instanceof vo||i instanceof Zt||i instanceof hf||i instanceof ff)}function gf(i,e,t){if(!iv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=uf(t);throw s==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+s)}}function kd(i,e,t){if((e=Ct(e))instanceof fc)return e._internalPath;if(typeof e=="string")return yf(i,e);throw Wu("Field path arguments must be of type string or ",i,!1,void 0,t)}const WS=new RegExp("[~\\*/\\[\\]]");function yf(i,e,t){if(e.search(WS)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new fc(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Wu(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new oe(G.INVALID_ARGUMENT,m+i+g)}function sv(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class ov{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(av("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qS extends ov{data(){return super.data()}}function av(i,e){return typeof e=="string"?yf(i,e):e instanceof fc?e._internalPath:e._delegate._internalPath}/**
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
 */function KS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new oe(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class GS{convertValue(e,t="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw pe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return vi(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Mu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>rt(h.doubleValue));return new ff(u)}convertGeoPoint(e){return new df(rt(e.latitude),rt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=tc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(La(e));default:return null}}convertTimestamp(e){const t=pi(e);return new ft(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Qe.fromString(e);be(I_(s),9688,{name:e});const o=new Ma(s.get(1),s.get(3)),u=new de(s.popFirst(5));return o.isEqual(t)||Cr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function lv(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class Ra{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uv extends ov{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(av("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Cu extends uv{data(e={}){return super.data(e)}}class QS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ra(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Cu(this._firestore,this._userDataWriter,s.key,s,new Ra(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(m=>{const g=new Cu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ra(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new Cu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ra(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,w=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:YS(m.type),doc:g,oldIndex:v,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function YS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe(61501,{type:i})}}/**
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
 */function XS(i){i=bn(i,Zt);const e=bn(i.firestore,as);return xS(cf(e),i._key).then(t=>n1(e,i,t))}class cv extends GS{constructor(e){super(),this.firestore=e}convertBytes(e){return new vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,t)}}function hv(i){i=bn(i,dc);const e=bn(i.firestore,as),t=cf(e),s=new cv(e);return KS(i._query),LS(t,i._query).then(o=>new QS(e,s,i,o))}function JS(i,e,t){i=bn(i,Zt);const s=bn(i.firestore,as),o=lv(i.converter,e);return gc(s,[nv(mf(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,En.none())])}function ZS(i,e,t,...s){i=bn(i,Zt);const o=bn(i.firestore,as),u=mf(o);let h;return h=typeof(e=Ct(e))=="string"||e instanceof fc?HS(u,"updateDoc",i._key,e,t,s):$S(u,"updateDoc",i._key,e),gc(o,[h.toMutation(i._key,En.exists(!0))])}function e1(i){return gc(bn(i.firestore,as),[new Wd(i._key,En.none())])}function t1(i,e){const t=bn(i.firestore,as),s=za(i),o=lv(i.converter,e);return gc(t,[nv(mf(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,En.exists(!1))]).then(()=>s)}function gc(i,e){return function(s,o){const u=new Sr;return s.asyncQueue.enqueueAndForget(async()=>TS(await OS(s),o,u)),u.promise}(cf(i),e)}function n1(i,e,t){const s=t.docs.get(e._key),o=new cv(i);return new uv(i,o,e._key,s,new Ra(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){To=o})(wo),ho(new es("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new as(new W0(s.getProvider("auth-internal")),new G0(h,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new oe(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(v.options.projectId,w)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ci(Jm,Zm,e),ci(Jm,Zm,"esm2017")})();function _f(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function dv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r1=dv,fv=new $a("auth","Firebase",dv());/**
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
 */const qu=new xd("@firebase/auth");function i1(i,...e){qu.logLevel<=Re.WARN&&qu.warn(`Auth (${wo}): ${i}`,...e)}function Pu(i,...e){qu.logLevel<=Re.ERROR&&qu.error(`Auth (${wo}): ${i}`,...e)}/**
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
 */function Fn(i,...e){throw vf(i,...e)}function Zn(i,...e){return vf(i,...e)}function pv(i,e,t){const s=Object.assign(Object.assign({},r1()),{[e]:t});return new $a("auth","Firebase",s).create(e,{appName:i.name})}function Ar(i){return pv(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function vf(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return fv.create(i,...e)}function fe(i,e,...t){if(!i)throw vf(e,...t)}function Tr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Pu(e),new Error(e)}function kr(i,e){i||Tr(e)}/**
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
 */function Nd(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function s1(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function o1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(s1()||Ew()||"connection"in navigator)?navigator.onLine:!0}function a1(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=yw()||ww()}get(){return o1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(i,e){kr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class mv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const l1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const u1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c1=new Qa(3e4,6e4);function wi(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Ti(i,e,t,s,o={}){return gv(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ha(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const v=Object.assign({method:e,headers:g},u);return vw()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(v.credentials="include"),mv.fetch()(await yv(i,i.config.apiHost,t,m),v)})}async function gv(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},l1),e);try{const o=new d1(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Eu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,v]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Eu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw Eu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw pv(i,w,v);Fn(i,w)}}catch(o){if(o instanceof Nr)throw o;Fn(i,"network-request-failed",{message:String(o)})}}async function Ya(i,e,t,s,o={}){const u=await Ti(i,e,t,s,o);return"mfaPendingCredential"in u&&Fn(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function yv(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?Ef(i.config,o):`${i.config.apiScheme}://${o}`;return u1.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function h1(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),c1.get())})}}function Eu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(i,e,s);return o.customData._tokenResponse=t,o}function Qg(i){return i!==void 0&&i.enterprise!==void 0}class f1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return h1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function p1(i,e){return Ti(i,"GET","/v2/recaptchaConfig",wi(i,e))}/**
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
 */async function m1(i,e){return Ti(i,"POST","/v1/accounts:delete",e)}async function Ku(i,e){return Ti(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Va(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g1(i,e=!1){const t=Ct(i),s=await t.getIdToken(e),o=wf(s);fe(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Va(sd(o.auth_time)),issuedAtTime:Va(sd(o.iat)),expirationTime:Va(sd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function sd(i){return Number(i)*1e3}function wf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Pu("JWT malformed, contained fewer than 3 sections"),null;try{const o=_y(t);return o?JSON.parse(o):(Pu("Failed to decode base64 JWT payload"),null)}catch(o){return Pu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Yg(i){const e=wf(i);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ba(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&y1(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function y1({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class _1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Dd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Va(this.lastLoginAt),this.creationTime=Va(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Gu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ba(i,Ku(t,{idToken:s}));fe(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?_v(u.providerUserInfo):[],m=E1(i.providerData,h),g=i.isAnonymous,v=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new Dd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,A)}async function v1(i){const e=Ct(i);await Gu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function E1(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function _v(i){return i.map(e=>{var{providerId:t}=e,s=_f(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function w1(i,e){const t=await gv(i,{},async()=>{const s=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await yv(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:m,body:s};return i.emulatorConfig&&Eo(i.emulatorConfig.host)&&(g.credentials="include"),mv.fetch()(h,g)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function T1(i,e){return Ti(i,"POST","/v2/accounts:revokeToken",wi(i,e))}/**
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
 */class ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const t=Yg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await w1(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new ao;return s&&(fe(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(fe(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(fe(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ao,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
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
 */function ni(i,e){fe(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Dd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return fe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return g1(this,e)}reload(){return v1(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Gu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await Ba(this,m1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,v,w;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,C=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,q=(h=t.photoURL)!==null&&h!==void 0?h:void 0,H=(m=t.tenantId)!==null&&m!==void 0?m:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,ge=(v=t.createdAt)!==null&&v!==void 0?v:void 0,le=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:me,emailVerified:Ee,isAnonymous:qe,providerData:Ae,stsTokenManager:D}=t;fe(me&&D,e,"internal-error");const I=ao.fromJSON(this.name,D);fe(typeof me=="string",e,"internal-error"),ni(A,e.name),ni(C,e.name),fe(typeof Ee=="boolean",e,"internal-error"),fe(typeof qe=="boolean",e,"internal-error"),ni(z,e.name),ni(q,e.name),ni(H,e.name),ni(B,e.name),ni(ge,e.name),ni(le,e.name);const R=new Mn({uid:me,auth:e,email:C,emailVerified:Ee,displayName:A,isAnonymous:qe,photoURL:q,phoneNumber:z,tenantId:H,stsTokenManager:I,createdAt:ge,lastLoginAt:le});return Ae&&Array.isArray(Ae)&&(R.providerData=Ae.map(k=>Object.assign({},k))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new ao;o.updateFromServerResponse(t);const u=new Mn({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Gu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];fe(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?_v(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ao;m.updateFromIdToken(s);const g=new Mn({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Dd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const Xg=new Map;function Ir(i){kr(i instanceof Function,"Expected a class definition");let e=Xg.get(i);return e?(kr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Xg.set(i,e),e)}/**
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
 */class vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vv.type="NONE";const Jg=vv;/**
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
 */function ku(i,e,t){return`firebase:${i}:${e}:${t}`}class lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=ku(this.userKey,o.apiKey,u),this.fullPersistenceKey=ku("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ku(this.auth,{idToken:e}).catch(()=>{});return t?Mn._fromGetAccountInfoResponse(this.auth,t,e):null}return Mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new lo(Ir(Jg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Ir(Jg);const h=ku(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const w=await v._get(h);if(w){let A;if(typeof w=="string"){const C=await Ku(e,{idToken:w}).catch(()=>{});if(!C)break;A=await Mn._fromGetAccountInfoResponse(e,C,w)}else A=Mn._fromJSON(e,w);v!==u&&(m=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new lo(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new lo(u,e,s))}}/**
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
 */function Zg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ev(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(Rv(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Sv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ev(i=Ft()){return/firefox\//i.test(i)}function wv(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(i=Ft()){return/crios\//i.test(i)}function Iv(i=Ft()){return/iemobile/i.test(i)}function Sv(i=Ft()){return/android/i.test(i)}function Av(i=Ft()){return/blackberry/i.test(i)}function Rv(i=Ft()){return/webos/i.test(i)}function Tf(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function I1(i=Ft()){var e;return Tf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S1(){return Tw()&&document.documentMode===10}function Cv(i=Ft()){return Tf(i)||Sv(i)||Rv(i)||Av(i)||/windows phone/i.test(i)||Iv(i)}/**
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
 */function Pv(i,e=[]){let t;switch(i){case"Browser":t=Zg(Ft());break;case"Worker":t=`${Zg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wo}/${s}`}/**
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
 */class A1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function R1(i,e={}){return Ti(i,"GET","/v2/passwordPolicy",wi(i,e))}/**
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
 */const C1=6;class P1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:C1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class k1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ey(this),this.idTokenSubscription=new ey(this),this.beforeStateQueue=new A1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ir(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ku(this,{idToken:e}),s=await Mn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=a1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vn(this.app))return Promise.reject(Ar(this));const t=e?Ct(e):null;return t&&fe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ir(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R1(this),t=new P1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await T1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ir(e)||this._popupRedirectResolver;fe(t,this,"argument-error"),this.redirectPersistenceManager=await lo.create(this,[Ir(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(vn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&i1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ls(i){return Ct(i)}class ey{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nw(t=>this.observer=t)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N1(i){yc=i}function kv(i){return yc.loadJS(i)}function D1(){return yc.recaptchaEnterpriseScript}function V1(){return yc.gapiScript}function O1(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class x1{constructor(){this.enterprise=new L1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class L1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const M1="recaptcha-enterprise",Nv="NO_RECAPTCHA";class b1{constructor(e){this.type=M1,this.auth=ls(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,m)=>{p1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const v=new f1(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{m(g)})})}function o(u,h,m){const g=window.grecaptcha;Qg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(Nv)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new x1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(m=>{if(!t&&Qg(window.grecaptcha))o(m,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=D1();g.length!==0&&(g+=m),kv(g).then(()=>{o(m,u,h)}).catch(v=>{h(v)})}}).catch(m=>{h(m)})})}}async function ty(i,e,t,s=!1,o=!1){const u=new b1(i);let h;if(o)h=Nv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const m=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,v=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:h}):Object.assign(m,{captchaResponse:h}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function Vd(i,e,t,s,o){var u;if(!((u=i._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ty(i,e,t,t==="getOobCode");return s(i,h)}else return s(i,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await ty(i,e,t,t==="getOobCode");return s(i,m)}else return Promise.reject(h)})}/**
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
 */function F1(i,e){const t=Md(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Zi(u,e??{}))return o;Fn(o,"already-initialized")}return t.initialize({options:e})}function U1(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ir);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function z1(i,e,t){const s=ls(i);fe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Dv(e),{host:h,port:m}=B1(e),g=m===null?"":`:${m}`,v={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){fe(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),fe(Zi(v,s.config.emulator)&&Zi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Eo(h)?(Ty(`${u}//${h}${g}`),Iy("Auth",!0)):j1()}function Dv(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function B1(i){const e=Dv(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:ny(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:ny(h)}}}function ny(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function j1(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class If{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}async function $1(i,e){return Ti(i,"POST","/v1/accounts:signUp",e)}/**
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
 */async function H1(i,e){return Ya(i,"POST","/v1/accounts:signInWithPassword",wi(i,e))}/**
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
 */async function W1(i,e){return Ya(i,"POST","/v1/accounts:signInWithEmailLink",wi(i,e))}async function q1(i,e){return Ya(i,"POST","/v1/accounts:signInWithEmailLink",wi(i,e))}/**
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
 */class ja extends If{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ja(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ja(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,t,"signInWithPassword",H1);case"emailLink":return W1(e,{email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vd(e,s,"signUpPassword",$1);case"emailLink":return q1(e,{idToken:t,email:this._email,oobCode:this._password});default:Fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function uo(i,e){return Ya(i,"POST","/v1/accounts:signInWithIdp",wi(i,e))}/**
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
 */const K1="http://localhost";class rs extends If{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=_f(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new rs(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return uo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,uo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,uo(e,t)}buildRequest(){const e={requestUri:K1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ha(t)}return e}}/**
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
 */function G1(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q1(i){const e=wa(Ta(i)).link,t=e?wa(Ta(e)).deep_link_id:null,s=wa(Ta(i)).deep_link_id;return(s?wa(Ta(s)).link:null)||s||t||e||i}class Sf{constructor(e){var t,s,o,u,h,m;const g=wa(Ta(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,w=(s=g.oobCode)!==null&&s!==void 0?s:null,A=G1((o=g.mode)!==null&&o!==void 0?o:null);fe(v&&w&&A,"argument-error"),this.apiKey=v,this.operation=A,this.code=w,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.lang)!==null&&h!==void 0?h:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(e){const t=Q1(e);try{return new Sf(t)}catch{return null}}}/**
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
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return ja._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Sf.parseLink(t);return fe(s,"argument-error"),ja._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xa extends Vv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ri extends Xa{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";/**
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
 */class ii extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rs._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
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
 */class si extends Xa{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.GITHUB_SIGN_IN_METHOD="github.com";si.PROVIDER_ID="github.com";/**
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
 */class oi extends Xa{constructor(){super("twitter.com")}static credential(e,t){return rs._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return oi.credential(t,s)}catch{return null}}}oi.TWITTER_SIGN_IN_METHOD="twitter.com";oi.PROVIDER_ID="twitter.com";/**
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
 */async function Y1(i,e){return Ya(i,"POST","/v1/accounts:signUp",wi(i,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Mn._fromIdTokenResponse(e,s,o),h=ry(s);return new is({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=ry(s);return new is({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function ry(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class Qu extends Nr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Qu(e,t,s,o)}}function Ov(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Qu._fromErrorAndOperation(i,u,e,s):u})}async function X1(i,e,t=!1){const s=await Ba(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return is._forOperation(i,"link",s)}/**
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
 */async function J1(i,e,t=!1){const{auth:s}=i;if(vn(s.app))return Promise.reject(Ar(s));const o="reauthenticate";try{const u=await Ba(i,Ov(s,o,e,i),t);fe(u.idToken,s,"internal-error");const h=wf(u.idToken);fe(h,s,"internal-error");const{sub:m}=h;return fe(i.uid===m,s,"user-mismatch"),is._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
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
 */async function xv(i,e,t=!1){if(vn(i.app))return Promise.reject(Ar(i));const s="signIn",o=await Ov(i,s,e),u=await is._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}async function Z1(i,e){return xv(ls(i),e)}/**
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
 */async function Lv(i){const e=ls(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eA(i,e,t){if(vn(i.app))return Promise.reject(Ar(i));const s=ls(i),h=await Vd(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y1).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Lv(i),g}),m=await is._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(m.user),m}function tA(i,e,t){return vn(i.app)?Promise.reject(Ar(i)):Z1(Ct(i),Ro.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Lv(i),s})}function nA(i,e,t,s){return Ct(i).onIdTokenChanged(e,t,s)}function rA(i,e,t){return Ct(i).beforeAuthStateChanged(e,t)}function iA(i,e,t,s){return Ct(i).onAuthStateChanged(e,t,s)}function sA(i){return Ct(i).signOut()}const Yu="__sak";/**
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
 */class Mv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Yu,"1"),this.storage.removeItem(Yu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oA=1e3,aA=10;class bv extends Mv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);S1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,aA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},oA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const lA=bv;/**
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
 */class Fv extends Mv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fv.type="SESSION";const Uv=Fv;/**
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
 */function uA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async v=>v(t.origin,u)),g=await uA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
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
 */function Af(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class cA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const v=Af("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const C=A;if(C.data.eventId===v)switch(C.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function hA(i){er().location.href=i}/**
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
 */function zv(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function dA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function pA(){return zv()?self:null}/**
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
 */const Bv="firebaseLocalStorageDb",mA=1,Xu="firebaseLocalStorage",jv="fbase_key";class Ja{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function vc(i,e){return i.transaction([Xu],e?"readwrite":"readonly").objectStore(Xu)}function gA(){const i=indexedDB.deleteDatabase(Bv);return new Ja(i).toPromise()}function Od(){const i=indexedDB.open(Bv,mA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Xu,{keyPath:jv})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Xu)?e(s):(s.close(),await gA(),e(await Od()))})})}async function iy(i,e,t){const s=vc(i,!0).put({[jv]:e,value:t});return new Ja(s).toPromise()}async function yA(i,e){const t=vc(i,!1).get(e),s=await new Ja(t).toPromise();return s===void 0?null:s.value}function sy(i,e){const t=vc(i,!0).delete(e);return new Ja(t).toPromise()}const _A=800,vA=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>vA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(pA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dA(),!this.activeServiceWorker)return;this.sender=new cA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await iy(e,Yu,"1"),await sy(e,Yu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>iy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yA(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=vc(o,!1).getAll();return new Ja(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const EA=$v;new Qa(3e4,6e4);/**
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
 */function wA(i,e){return e?Ir(e):(fe(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Rf extends If{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function TA(i){return xv(i.auth,new Rf(i),i.bypassAuthState)}function IA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),J1(t,new Rf(i),i.bypassAuthState)}async function SA(i){const{auth:e,user:t}=i;return fe(t,e,"internal-error"),X1(t,new Rf(i),i.bypassAuthState)}/**
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
 */class Hv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return SA;case"reauthViaPopup":case"reauthViaRedirect":return IA;default:Fn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AA=new Qa(2e3,1e4);class so extends Hv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,so.currentPopupAction&&so.currentPopupAction.cancel(),so.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,so.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}so.currentPopupAction=null;/**
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
 */const RA="pendingRedirect",Nu=new Map;class CA extends Hv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Nu.get(this.auth._key());if(!e){try{const s=await PA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Nu.set(this.auth._key(),e)}return this.bypassAuthState||Nu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PA(i,e){const t=DA(e),s=NA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function kA(i,e){Nu.set(i._key(),e)}function NA(i){return Ir(i._redirectPersistence)}function DA(i){return ku(RA,i.config.apiKey,i.name)}async function VA(i,e,t=!1){if(vn(i.app))return Promise.reject(Ar(i));const s=ls(i),o=wA(s,e),h=await new CA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const OA=10*60*1e3;class xA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Wv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(oy(e))}saveEventToCache(e){this.cachedEventUids.add(oy(e)),this.lastProcessedEventTime=Date.now()}}function oy(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Wv({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wv(i);default:return!1}}/**
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
 */async function MA(i,e={}){return Ti(i,"GET","/v1/projects",e)}/**
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
 */const bA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FA=/^https?/;async function UA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await MA(i);for(const t of e)try{if(zA(t))return}catch{}Fn(i,"unauthorized-domain")}function zA(i){const e=Nd(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!FA.test(t))return!1;if(bA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const BA=new Qa(3e4,6e4);function ay(){const i=er().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function jA(i){return new Promise((e,t)=>{var s,o,u;function h(){ay(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ay(),t(Zn(i,"network-request-failed"))},timeout:BA.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const m=O1("iframefcb");return er()[m]=()=>{gapi.load?h():t(Zn(i,"network-request-failed"))},kv(`${V1()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Du=null,e})}let Du=null;function $A(i){return Du=Du||jA(i),Du}/**
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
 */const HA=new Qa(5e3,15e3),WA="__/auth/iframe",qA="emulator/auth/iframe",KA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QA(i){const e=i.config;fe(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ef(e,qA):`https://${i.config.authDomain}/${WA}`,s={apiKey:e.apiKey,appName:i.name,v:wo},o=GA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ha(s).slice(1)}`}async function YA(i){const e=await $A(i),t=er().gapi;return fe(t,i,"internal-error"),e.open({where:document.body,url:QA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(i,"network-request-failed"),m=er().setTimeout(()=>{u(h)},HA.get());function g(){er().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const XA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JA=500,ZA=600,eR="_blank",tR="http://localhost";class ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nR(i,e,t,s=JA,o=ZA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},XA),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(m=Tv(v)?eR:t),Ev(v)&&(e=e||tR,g.scrollbars="yes");const w=Object.entries(g).reduce((C,[z,q])=>`${C}${z}=${q},`,"");if(I1(v)&&m!=="_self")return rR(e||"",m),new ly(null);const A=window.open(e||"",m,w);fe(A,i,"popup-blocked");try{A.focus()}catch{}return new ly(A)}function rR(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const iR="__/auth/handler",sR="emulator/auth/handler",oR=encodeURIComponent("fac");async function uy(i,e,t,s,o,u){fe(i.config.authDomain,i,"auth-domain-config-required"),fe(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:wo,eventId:o};if(e instanceof Vv){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",kw(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,A]of Object.entries({}))h[w]=A}if(e instanceof Xa){const w=e.getScopes().filter(A=>A!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),v=g?`#${oR}=${encodeURIComponent(g)}`:"";return`${aR(i)}?${Ha(m).slice(1)}${v}`}function aR({config:i}){return i.emulator?Ef(i,sR):`https://${i.authDomain}/${iR}`}/**
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
 */const od="webStorageSupport";class lR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uv,this._completeRedirectFn=VA,this._overrideRedirectResult=kA}async _openPopup(e,t,s,o){var u;kr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await uy(e,t,s,Nd(),o);return nR(e,h,Af())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await uy(e,t,s,Nd(),o);return hA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(kr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await YA(e),s=new xA(e);return t.register("authEvent",o=>(fe(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(od,{type:od},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[od];h!==void 0&&t(!!h),Fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=UA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cv()||wv()||Tf()}}const uR=lR;var cy="@firebase/auth",hy="1.10.7";/**
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
 */class cR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hR(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dR(i){ho(new es("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;fe(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pv(i)},v=new k1(s,o,u,g);return U1(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ho(new es("auth-internal",e=>{const t=ls(e.getProvider("auth").getImmediate());return(s=>new cR(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(cy,hy,hR(i)),ci(cy,hy,"esm2017")}/**
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
 */const fR=5*60,pR=wy("authIdTokenMaxAge")||fR;let dy=null;const mR=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pR)return;const o=t==null?void 0:t.token;dy!==o&&(dy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gR(i=Cy()){const e=Md(i,"auth");if(e.isInitialized())return e.getImmediate();const t=F1(i,{popupRedirectResolver:uR,persistence:[EA,lA,Uv]}),s=wy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=mR(u.toString());rA(t,h,()=>h(t.currentUser)),nA(t,m=>h(m))}}const o=vy("auth");return o&&z1(t,`http://${o}`),t}function yR(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}N1({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",yR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dR("Browser");const _R={apiKey:"AIzaSyCcEJx4mPP5yMARHz5lInaSI2-yx3IVHXg",authDomain:"crud-ee5b6.firebaseapp.com",projectId:"crud-ee5b6",storageBucket:"crud-ee5b6.appspot.com",messagingSenderId:"219080446809",appId:"1:219080446809:web:4559b22fb0f1a8d4b93248",measurementId:"G-EZ2D6DL82R"},qv=Ry(_R),co=FS(qv),wu=gR(qv),fy={display:"inline-block",margin:"10px 10px 10px 0",padding:"8px",width:"200px",borderRadius:"5px",border:"1px solid #ccc"},ad={padding:"8px 12px",margin:"0 5px",borderRadius:"5px",border:"none",background:"#28a745",color:"white",cursor:"pointer"},vR=({role:i})=>{const[e,t]=wr.useState([]),[s,o]=wr.useState({username:"",password:""}),u=Z_(co,"users"),h=i==="admin",m=async()=>{const C=(await hv(u)).docs.map(z=>({...z.data(),id:z.id}));t(C)},g=async()=>{if(!h)return alert("Not authorized to add users.");s.username&&s.password&&(await t1(u,s),o({username:"",password:""}),m())},v=async A=>{if(!h)return alert("Not authorized to delete users.");const C=za(co,"users",A);await e1(C),m()},w=async(A,C,z)=>{if(!h)return alert("Not authorized to update users.");const q=prompt("Enter new username:",C),H=prompt("Enter new password:",z);if(q&&H){const B=za(co,"users",A);await ZS(B,{username:q,password:H}),m()}};return wr.useEffect(()=>{m()},[]),xe.createElement("div",{style:{marginTop:40}},xe.createElement("h3",null,"Firestore User List 📄"),!h&&xe.createElement("p",{style:{color:"gray"}},"You are logged in as a user. You can only view the posts."),h&&xe.createElement("div",null,xe.createElement("input",{type:"text",placeholder:"Username",value:s.username,onChange:A=>o({...s,username:A.target.value}),style:fy}),xe.createElement("input",{type:"text",placeholder:"Password",value:s.password,onChange:A=>o({...s,password:A.target.value}),style:fy}),xe.createElement("button",{onClick:g,style:ad},"➕ Add User")),xe.createElement("ul",{style:{listStyle:"none",padding:0}},e.map(A=>xe.createElement("li",{key:A.id,style:{marginBottom:10,padding:10,background:"#f1f1f1",borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"space-between"}},xe.createElement("span",null,xe.createElement("b",null,A.username)," | ",A.password),h&&xe.createElement("div",null,xe.createElement("button",{onClick:()=>v(A.id),style:{...ad,background:"#dc3545"}},"❌"),xe.createElement("button",{onClick:()=>w(A.id,A.username,A.password),style:{...ad,background:"#ffc107",color:"#000"}},"✏️"))))))},ER=()=>{const[i,e]=wr.useState(""),[t,s]=wr.useState(""),[o,u]=wr.useState(null),[h,m]=wr.useState(null),g=async H=>{const B=za(co,"roles",H),ge=await XS(B);ge.exists()&&m(ge.data().role)},v=async H=>{const B=Z_(co,"roles"),le=(await hv(B)).empty?"admin":"user";await JS(za(co,"roles",H),{role:le}),m(le)},w=async()=>{try{const B=(await eA(wu,i,t)).user.uid;await v(B),e(""),s("")}catch(H){alert(H.message)}},A=async()=>{try{const H=await tA(wu,i,t);await g(H.user.uid),e(""),s("")}catch(H){alert(H.message)}},C=async()=>{await sA(wu),u(null),m(null)};wr.useEffect(()=>{const H=iA(wu,async B=>{u(B),B&&await g(B.uid)});return()=>H()},[]);const z={display:"block",margin:"10px 0",padding:"8px",width:"100%",maxWidth:"300px",borderRadius:"5px",border:"1px solid #ccc"},q={padding:"8px 16px",margin:"5px",borderRadius:"5px",border:"none",background:"#007bff",color:"white",cursor:"pointer"};return xe.createElement("div",{style:{padding:30,fontFamily:"sans-serif"}},xe.createElement("h2",null,"User Manager 🔐"),o?xe.createElement(xe.Fragment,null,xe.createElement("p",null,"Logged in as: ",xe.createElement("b",null,o.email)," | Role: ",xe.createElement("b",null,h)),xe.createElement("button",{style:{...q,background:"#dc3545"},onClick:C},"Logout"),h&&xe.createElement(vR,{role:h})):xe.createElement(xe.Fragment,null,xe.createElement("input",{type:"text",placeholder:"Email",value:i,onChange:H=>e(H.target.value),style:z}),xe.createElement("input",{type:"password",placeholder:"Password",value:t,onChange:H=>s(H.target.value),style:z}),xe.createElement("button",{onClick:w,style:q},"Signup"),xe.createElement("button",{onClick:A,style:q},"Login")))};rw.createRoot(document.getElementById("root")).render(xe.createElement(xe.Fragment,null,xe.createElement(ER,null)));
