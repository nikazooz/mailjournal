"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[892],{4519:(t,e,n)=>{function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function o(t){return t instanceof r(t).Element||t instanceof Element}function i(t){return t instanceof r(t).HTMLElement||t instanceof HTMLElement}function s(t){return"undefined"!=typeof ShadowRoot&&(t instanceof r(t).ShadowRoot||t instanceof ShadowRoot)}n.d(e,{fi:()=>dt});var a=Math.max,l=Math.min,f=Math.round;function c(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),r=1,o=1;if(i(t)&&e){var s=t.offsetHeight,a=t.offsetWidth;a>0&&(r=f(n.width)/a||1),s>0&&(o=f(n.height)/s||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function p(t){var e=r(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function d(t){return t?(t.nodeName||"").toLowerCase():null}function u(t){return((o(t)?t.ownerDocument:t.document)||window.document).documentElement}function h(t){return c(u(t)).left+p(t).scrollLeft}function v(t){return r(t).getComputedStyle(t)}function m(t){var e=v(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function g(t,e,n){void 0===n&&(n=!1);var o,s,a=i(e),l=i(e)&&function(t){var e=t.getBoundingClientRect(),n=f(e.width)/t.offsetWidth||1,r=f(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),v=u(e),g=c(t,l),w={scrollLeft:0,scrollTop:0},x={x:0,y:0};return(a||!a&&!n)&&(("body"!==d(e)||m(v))&&(w=(o=e)!==r(o)&&i(o)?{scrollLeft:(s=o).scrollLeft,scrollTop:s.scrollTop}:p(o)),i(e)?((x=c(e,!0)).x+=e.clientLeft,x.y+=e.clientTop):v&&(x.x=h(v))),{x:g.left+w.scrollLeft-x.x,y:g.top+w.scrollTop-x.y,width:g.width,height:g.height}}function w(t){var e=c(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function x(t){return"html"===d(t)?t:t.assignedSlot||t.parentNode||(s(t)?t.host:null)||u(t)}function b(t){return["html","body","#document"].indexOf(d(t))>=0?t.ownerDocument.body:i(t)&&m(t)?t:b(x(t))}function y(t,e){var n;void 0===e&&(e=[]);var o=b(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),s=r(o),a=i?[s].concat(s.visualViewport||[],m(o)?o:[]):o,l=e.concat(a);return i?l:l.concat(y(x(a)))}function _(t){return["table","td","th"].indexOf(d(t))>=0}function O(t){return i(t)&&"fixed"!==v(t).position?t.offsetParent:null}function C(t){for(var e=r(t),n=O(t);n&&_(n)&&"static"===v(n).position;)n=O(n);return n&&("html"===d(n)||"body"===d(n)&&"static"===v(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&i(t)&&"fixed"===v(t).position)return null;for(var n=x(t);i(n)&&["html","body"].indexOf(d(n))<0;){var r=v(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}var z="top",H="bottom",M="right",k="left",L="auto",E=[z,H,M,k],V="start",j="end",D="viewport",A="popper",B=E.reduce((function(t,e){return t.concat([e+"-"+V,e+"-"+j])}),[]),S=[].concat(E,[L]).reduce((function(t,e){return t.concat([e,e+"-"+V,e+"-"+j])}),[]),P=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function R(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}var T={placement:"bottom",modifiers:[],strategy:"absolute"};function W(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function q(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,i=e.defaultOptions,s=void 0===i?T:i;return function(t,e,n){void 0===n&&(n=s);var i,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},T,s),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},f=[],c=!1,p={state:l,setOptions:function(n){var i="function"==typeof n?n(l.options):n;d(),l.options=Object.assign({},s,l.options,i),l.scrollParents={reference:o(t)?y(t):t.contextElement?y(t.contextElement):[],popper:y(e)};var a=function(t){var e=R(t);return P.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,l.options.modifiers)));return l.orderedModifiers=a.filter((function(t){return t.enabled})),l.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,o=t.effect;if("function"==typeof o){var i=o({state:l,name:e,instance:p,options:r}),s=function(){};f.push(i||s)}})),p.update()},forceUpdate:function(){if(!c){var t=l.elements,e=t.reference,n=t.popper;if(W(e,n)){l.rects={reference:g(e,C(n),"fixed"===l.options.strategy),popper:w(n)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(t){return l.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<l.orderedModifiers.length;r++)if(!0!==l.reset){var o=l.orderedModifiers[r],i=o.fn,s=o.options,a=void 0===s?{}:s,f=o.name;"function"==typeof i&&(l=i({state:l,options:a,name:f,instance:p})||l)}else l.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(t){p.forceUpdate(),t(l)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(i())}))}))),a}),destroy:function(){d(),c=!0}};if(!W(t,e))return p;function d(){f.forEach((function(t){return t()})),f=[]}return p.setOptions(n).then((function(t){!c&&n.onFirstUpdate&&n.onFirstUpdate(t)})),p}}var U={passive:!0};function $(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function N(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function I(t){var e,n=t.reference,r=t.element,o=t.placement,i=o?$(o):null,s=o?Z(o):null,a=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(i){case z:e={x:a,y:n.y-r.height};break;case H:e={x:a,y:n.y+n.height};break;case M:e={x:n.x+n.width,y:l};break;case k:e={x:n.x-r.width,y:l};break;default:e={x:n.x,y:n.y}}var f=i?N(i):null;if(null!=f){var c="y"===f?"height":"width";switch(s){case V:e[f]=e[f]-(n[c]/2-r[c]/2);break;case j:e[f]=e[f]+(n[c]/2-r[c]/2)}}return e}var F={top:"auto",right:"auto",bottom:"auto",left:"auto"};function X(t){var e,n=t.popper,o=t.popperRect,i=t.placement,s=t.variation,a=t.offsets,l=t.position,c=t.gpuAcceleration,p=t.adaptive,d=t.roundOffsets,h=t.isFixed,m=!0===d?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:f(e*r)/r||0,y:f(n*r)/r||0}}(a):"function"==typeof d?d(a):a,g=m.x,w=void 0===g?0:g,x=m.y,b=void 0===x?0:x,y=a.hasOwnProperty("x"),_=a.hasOwnProperty("y"),O=k,L=z,E=window;if(p){var V=C(n),D="clientHeight",A="clientWidth";if(V===r(n)&&"static"!==v(V=u(n)).position&&"absolute"===l&&(D="scrollHeight",A="scrollWidth"),V=V,i===z||(i===k||i===M)&&s===j)L=H,b-=(h&&E.visualViewport?E.visualViewport.height:V[D])-o.height,b*=c?1:-1;if(i===k||(i===z||i===H)&&s===j)O=M,w-=(h&&E.visualViewport?E.visualViewport.width:V[A])-o.width,w*=c?1:-1}var B,S=Object.assign({position:l},p&&F);return c?Object.assign({},S,((B={})[L]=_?"0":"",B[O]=y?"0":"",B.transform=(E.devicePixelRatio||1)<=1?"translate("+w+"px, "+b+"px)":"translate3d("+w+"px, "+b+"px, 0)",B)):Object.assign({},S,((e={})[L]=_?b+"px":"",e[O]=y?w+"px":"",e.transform="",e))}const Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=void 0===o?[0,0]:o,s=S.reduce((function(t,n){return t[n]=function(t,e,n){var r=$(t),o=[k,z].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*o,[k,M].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,i),t}),{}),a=s[e.placement],l=a.x,f=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=f),e.modifiersData[r]=s}};var Y={left:"right",right:"left",bottom:"top",top:"bottom"};function J(t){return t.replace(/left|right|bottom|top/g,(function(t){return Y[t]}))}var G={start:"end",end:"start"};function K(t){return t.replace(/start|end/g,(function(t){return G[t]}))}function tt(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&s(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function et(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function nt(t,e){return e===D?et(function(t){var e=r(t),n=u(t),o=e.visualViewport,i=n.clientWidth,s=n.clientHeight,a=0,l=0;return o&&(i=o.width,s=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,l=o.offsetTop)),{width:i,height:s,x:a+h(t),y:l}}(t)):o(e)?function(t){var e=c(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):et(function(t){var e,n=u(t),r=p(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=a(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=a(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-r.scrollLeft+h(t),f=-r.scrollTop;return"rtl"===v(o||n).direction&&(l+=a(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:l,y:f}}(u(t)))}function rt(t,e,n){var r="clippingParents"===e?function(t){var e=y(x(t)),n=["absolute","fixed"].indexOf(v(t).position)>=0,r=n&&i(t)?C(t):t;return o(r)?e.filter((function(t){return o(t)&&tt(t,r)&&"body"!==d(t)&&(!n||"static"!==v(t).position)})):[]}(t):[].concat(e),s=[].concat(r,[n]),f=s[0],c=s.reduce((function(e,n){var r=nt(t,n);return e.top=a(r.top,e.top),e.right=l(r.right,e.right),e.bottom=l(r.bottom,e.bottom),e.left=a(r.left,e.left),e}),nt(t,f));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function ot(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function it(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function st(t,e){void 0===e&&(e={});var n=e,r=n.placement,i=void 0===r?t.placement:r,s=n.boundary,a=void 0===s?"clippingParents":s,l=n.rootBoundary,f=void 0===l?D:l,p=n.elementContext,d=void 0===p?A:p,h=n.altBoundary,v=void 0!==h&&h,m=n.padding,g=void 0===m?0:m,w=ot("number"!=typeof g?g:it(g,E)),x=d===A?"reference":A,b=t.rects.popper,y=t.elements[v?x:d],_=rt(o(y)?y:y.contextElement||u(t.elements.popper),a,f),O=c(t.elements.reference),C=I({reference:O,element:b,strategy:"absolute",placement:i}),k=et(Object.assign({},b,C)),L=d===A?k:O,V={top:_.top-L.top+w.top,bottom:L.bottom-_.bottom+w.bottom,left:_.left-L.left+w.left,right:L.right-_.right+w.right},j=t.modifiersData.offset;if(d===A&&j){var B=j[i];Object.keys(V).forEach((function(t){var e=[M,H].indexOf(t)>=0?1:-1,n=[z,H].indexOf(t)>=0?"y":"x";V[t]+=B[n]*e}))}return V}function at(t,e,n){return a(t,l(e,n))}const lt={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=void 0===o||o,s=n.altAxis,f=void 0!==s&&s,c=n.boundary,p=n.rootBoundary,d=n.altBoundary,u=n.padding,h=n.tether,v=void 0===h||h,m=n.tetherOffset,g=void 0===m?0:m,x=st(e,{boundary:c,rootBoundary:p,padding:u,altBoundary:d}),b=$(e.placement),y=Z(e.placement),_=!y,O=N(b),L="x"===O?"y":"x",E=e.modifiersData.popperOffsets,j=e.rects.reference,D=e.rects.popper,A="function"==typeof g?g(Object.assign({},e.rects,{placement:e.placement})):g,B="number"==typeof A?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,P={x:0,y:0};if(E){if(i){var R,T="y"===O?z:k,W="y"===O?H:M,q="y"===O?"height":"width",U=E[O],I=U+x[T],F=U-x[W],X=v?-D[q]/2:0,Q=y===V?j[q]:D[q],Y=y===V?-D[q]:-j[q],J=e.elements.arrow,G=v&&J?w(J):{width:0,height:0},K=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},tt=K[T],et=K[W],nt=at(0,j[q],G[q]),rt=_?j[q]/2-X-nt-tt-B.mainAxis:Q-nt-tt-B.mainAxis,ot=_?-j[q]/2+X+nt+et+B.mainAxis:Y+nt+et+B.mainAxis,it=e.elements.arrow&&C(e.elements.arrow),lt=it?"y"===O?it.clientTop||0:it.clientLeft||0:0,ft=null!=(R=null==S?void 0:S[O])?R:0,ct=U+ot-ft,pt=at(v?l(I,U+rt-ft-lt):I,U,v?a(F,ct):F);E[O]=pt,P[O]=pt-U}if(f){var dt,ut="x"===O?z:k,ht="x"===O?H:M,vt=E[L],mt="y"===L?"height":"width",gt=vt+x[ut],wt=vt-x[ht],xt=-1!==[z,k].indexOf(b),bt=null!=(dt=null==S?void 0:S[L])?dt:0,yt=xt?gt:vt-j[mt]-D[mt]-bt+B.altAxis,_t=xt?vt+j[mt]+D[mt]-bt-B.altAxis:wt,Ot=v&&xt?function(t,e,n){var r=at(t,e,n);return r>n?n:r}(yt,vt,_t):at(v?yt:gt,vt,v?_t:wt);E[L]=Ot,P[L]=Ot-vt}e.modifiersData[r]=P}},requiresIfExists:["offset"]};const ft={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,r=t.name,o=t.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=$(n.placement),l=N(a),f=[k,M].indexOf(a)>=0?"height":"width";if(i&&s){var c=function(t,e){return ot("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:it(t,E))}(o.padding,n),p=w(i),d="y"===l?z:k,u="y"===l?H:M,h=n.rects.reference[f]+n.rects.reference[l]-s[l]-n.rects.popper[f],v=s[l]-n.rects.reference[l],m=C(i),g=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,x=h/2-v/2,b=c[d],y=g-p[f]-c[u],_=g/2-p[f]/2+x,O=at(b,_,y),L=l;n.modifiersData[r]=((e={})[L]=O,e.centerOffset=O-_,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&tt(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ct(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function pt(t){return[z,M,H,k].some((function(e){return t[e]>=0}))}var dt=q({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,i=o.scroll,s=void 0===i||i,a=o.resize,l=void 0===a||a,f=r(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&c.forEach((function(t){t.addEventListener("scroll",n.update,U)})),l&&f.addEventListener("resize",n.update,U),function(){s&&c.forEach((function(t){t.removeEventListener("scroll",n.update,U)})),l&&f.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=I({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,l=void 0===a||a,f={placement:$(e.placement),variation:Z(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,X(Object.assign({},f,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,X(Object.assign({},f,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},r=e.attributes[t]||{},o=e.elements[t];i(o)&&d(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(t){var e=r[t];!1===e?o.removeAttribute(t):o.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],o=e.attributes[t]||{},s=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});i(r)&&d(r)&&(Object.assign(r.style,s),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},Q,{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,s=n.altAxis,a=void 0===s||s,l=n.fallbackPlacements,f=n.padding,c=n.boundary,p=n.rootBoundary,d=n.altBoundary,u=n.flipVariations,h=void 0===u||u,v=n.allowedAutoPlacements,m=e.options.placement,g=$(m),w=l||(g===m||!h?[J(m)]:function(t){if($(t)===L)return[];var e=J(t);return[K(t),e,K(e)]}(m)),x=[m].concat(w).reduce((function(t,n){return t.concat($(n)===L?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,f=void 0===l?S:l,c=Z(r),p=c?a?B:B.filter((function(t){return Z(t)===c})):E,d=p.filter((function(t){return f.indexOf(t)>=0}));0===d.length&&(d=p);var u=d.reduce((function(e,n){return e[n]=st(t,{placement:n,boundary:o,rootBoundary:i,padding:s})[$(n)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}(e,{placement:n,boundary:c,rootBoundary:p,padding:f,flipVariations:h,allowedAutoPlacements:v}):n)}),[]),b=e.rects.reference,y=e.rects.popper,_=new Map,O=!0,C=x[0],j=0;j<x.length;j++){var D=x[j],A=$(D),P=Z(D)===V,R=[z,H].indexOf(A)>=0,T=R?"width":"height",W=st(e,{placement:D,boundary:c,rootBoundary:p,altBoundary:d,padding:f}),q=R?P?M:k:P?H:z;b[T]>y[T]&&(q=J(q));var U=J(q),N=[];if(i&&N.push(W[A]<=0),a&&N.push(W[q]<=0,W[U]<=0),N.every((function(t){return t}))){C=D,O=!1;break}_.set(D,N)}if(O)for(var I=function(t){var e=x.find((function(e){var n=_.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return C=e,"break"},F=h?3:1;F>0;F--){if("break"===I(F))break}e.placement!==C&&(e.modifiersData[r]._skip=!0,e.placement=C,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},lt,ft,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,s=st(e,{elementContext:"reference"}),a=st(e,{altBoundary:!0}),l=ct(s,r),f=ct(a,o,i),c=pt(l),p=pt(f);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:f,isReferenceHidden:c,hasPopperEscaped:p},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":p})}}]})},9892:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var r=n(6454);const o={components:{Layout:n(5965).Z,Link:r.rU},props:{entry:{type:Object,required:!0}}};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"Entry #"+t.entry.id}},[n("h1",{staticClass:"mb-8 font-bold text-3xl"},[n("Link",{staticClass:"text-green-400 hover:text-green-600",attrs:{href:t.route("questions")}},[t._v("Questions")]),t._v(" "),n("span",{staticClass:"text-green-400 font-medium"},[t._v("/")]),t._v(" "),n("Link",{staticClass:"text-green-400 hover:text-green-600",attrs:{href:t.route("questions.show",t.entry.question_id)}},[t._v(t._s(t.entry.question_id))]),t._v(" "),n("span",{staticClass:"text-green-400 font-medium"},[t._v("/")]),t._v("\n    Entries\n    "),n("span",{staticClass:"text-green-400 font-medium"},[t._v("/")]),t._v("\n    "+t._s(t.entry.id)+"\n  ")],1),t._v(" "),n("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-lg"},[n("div",{staticClass:"p-8 flex flex-wrap"},[n("div",{staticClass:"mb-8 w-full"},[n("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Sent At:")]),t._v(" "),n("div",{staticClass:"py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",attrs:{id:"message"}},[t._v(t._s(t._f("formatDatetime")(t.entry.question_sent_at)))])]),t._v(" "),n("div",{staticClass:"mb-8 w-full"},[n("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Replied At:")]),t._v(" "),n("div",{staticClass:"py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",attrs:{id:"message"}},[t._v(t._s(t._f("formatDatetime")(t.entry.replied_at)))])]),t._v(" "),n("div",{staticClass:"w-full"},[n("label",{staticClass:"form-label",attrs:{for:"timezone"}},[t._v("Reply:")]),t._v(" "),n("div",{staticClass:"p-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative border rounded",attrs:{id:"timezone"},domProps:{innerHTML:t._s(t.entry.reply)}})])])])])}),[],!1,null,null,null).exports},6253:(t,e,n)=>{n.d(e,{Z:()=>o});const r={props:{name:String}};const o=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"apple"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[n("g",{attrs:{"fill-rule":"nonzero"}},[n("path",{attrs:{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}}),n("path",{attrs:{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"}})])]):"book"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}})]):"cheveron-down"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):"cheveron-right"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("polygon",{attrs:{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"}})]):"dashboard"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]):"location"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]):"office"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"}})]):"printer"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"}})]):"shopping-cart"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})]):"store-front"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"}})]):"trash"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})]):"users"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}})]):t._e()}),[],!1,null,null,null).exports},5965:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(6454),o=n(4519);const i={props:{placement:{type:String,default:"bottom-end"},boundary:{type:String,default:"scrollParent"}},data:function(){return{show:!1}},watch:{show:function(t){var e=this;t?this.$nextTick((function(){e.popper=(0,o.fi)(e.$el,e.$refs.dropdown,{placement:e.placement,modifiers:[{name:"preventOverflow",options:{boundary:e.boundary}}]})})):this.popper&&setTimeout((function(){return e.popper.destroy()}),100)}},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27===e.keyCode&&t.close()}))},methods:{close:function(){this.show=!1},toggle:function(){this.show=!this.show}}};var s=n(1900);const a=(0,s.Z)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._t("default"),t._v(" "),t.show?n("portal",{attrs:{to:"dropdown"}},[n("div",[n("div",{staticStyle:{position:"fixed",top:"0",right:"0",left:"0",bottom:"0","z-index":"99998"},on:{click:t.toggle}}),t._v(" "),n("div",{ref:"dropdown",staticStyle:{position:"absolute","z-index":"99999"},on:{click:function(t){t.stopPropagation()}}},[t._t("dropdown")],2)])]):t._e()],2)}),[],!1,null,null,null).exports;var l=n(6253);const f={components:{Icon:l.Z,Link:r.rU},methods:{isUrl:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return""===e[0]?""===location.pathname.substr(1):e.filter((function(t){return location.pathname.substr(1).startsWith(t)})).length}}};const c=(0,s.Z)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-4"},[n("Link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("dashboard")}},[n("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("dashboard")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"dashboard"}}),t._v(" "),n("div",{class:t.isUrl("dashboard")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Dashboard")])],1)],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("Link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("questions")}},[n("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("questions")||t.isUrl("entries")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"book"}}),t._v(" "),n("div",{class:t.isUrl("questions")||t.isUrl("entries")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Questions")])],1)],1)])}),[],!1,null,null,null).exports,p={components:{Dropdown:a,Head:r.Fb,Icon:l.Z,MainMenu:c,Link:r.rU},props:{title:String},data:function(){return{showUserMenu:!1,accounts:null}},methods:{hideDropdownMenus:function(){this.showUserMenu=!1}}};const d=(0,s.Z)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Head",{attrs:{title:t.title}}),t._v(" "),n("portal-target",{attrs:{name:"dropdown",slim:""}}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"min-h-screen flex flex-col",on:{click:t.hideDropdownMenus}},[n("div",{staticClass:"md:flex"},[n("div",{staticClass:"bg-green-800 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"},[n("Link",{staticClass:"mt-1",attrs:{href:"/"}},[n("span",{staticClass:"text-white text-xl font-extrabold"},[t._v("MailJournal")])]),t._v(" "),n("dropdown",{staticClass:"md:hidden",attrs:{placement:"bottom-end"}},[n("svg",{staticClass:"fill-white w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})]),t._v(" "),n("div",{staticClass:"mt-2 px-8 py-4 shadow-lg bg-green-700 rounded",attrs:{slot:"dropdown"},slot:"dropdown"},[n("MainMenu")],1)])],1),t._v(" "),n("div",{staticClass:"bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-end items-center"},[n("dropdown",{staticClass:"mt-1",attrs:{placement:"bottom-end"}},[n("div",{staticClass:"flex items-center cursor-pointer select-none group"},[n("div",{staticClass:"text-gray-800 group-hover:text-green-600 focus:text-green-600 mr-1 whitespace-no-wrap"},[n("span",[t._v(t._s(t.$page.props.auth.user.name))])]),t._v(" "),n("icon",{staticClass:"w-5 h-5 group-hover:fill-green-600 fill-gray-800 focus:fill-green-600",attrs:{name:"cheveron-down"}})],1),t._v(" "),n("div",{staticClass:"mt-2 py-2 shadow bg-white rounded text-sm",attrs:{slot:"dropdown"},slot:"dropdown"},[n("Link",{staticClass:"block px-6 py-2 hover:bg-green-500 hover:text-white",attrs:{href:t.route("logout"),method:"post",as:"button"}},[t._v("Logout")])],1)])],1)]),t._v(" "),n("div",{staticClass:"flex flex-grow"},[n("div",{staticClass:"bg-green-700 flex-shrink-0 w-56 p-12 hidden md:block"},[n("MainMenu")],1),t._v(" "),n("div",{staticClass:"w-full overflow-hidden px-4 py-8 md:p-12"},[t._t("default")],2)])])])],1)}),[],!1,null,null,null).exports},1900:(t,e,n)=>{function r(t,e,n,r,o,i,s,a){var l,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):o&&(l=a?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var c=f.render;f.render=function(t,e){return l.call(e),c(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:f}}n.d(e,{Z:()=>r})}}]);