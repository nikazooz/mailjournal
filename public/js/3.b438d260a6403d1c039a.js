(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+SZM":function(t,e,n){"use strict";var r=n("XA51"),i=n("8L3F"),s={props:{placement:{type:String,default:"bottom-end"},boundary:{type:String,default:"scrollParent"}},data:function(){return{show:!1}},watch:{show:function(t){var e=this;t?this.$nextTick(function(){e.popper=new i.a(e.$el,e.$refs.dropdown,{placement:e.placement,modifiers:{preventOverflow:{boundariesElement:e.boundary}}})}):this.popper&&setTimeout(function(){return e.popper.destroy()},100)}},mounted:function(){var t=this;document.addEventListener("keydown",function(e){27===e.keyCode&&t.close()})},methods:{close:function(){this.show=!1},toggle:function(){this.show=!this.show}}},o=n("KHd+"),a=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._t("default"),t._v(" "),t.show?n("portal",{attrs:{to:"dropdown"}},[n("div",[n("div",{staticStyle:{position:"fixed",top:"0",right:"0",left:"0",bottom:"0","z-index":"99998"},on:{click:t.toggle}}),t._v(" "),n("div",{ref:"dropdown",staticStyle:{position:"absolute","z-index":"99999"},on:{click:function(t){t.stopPropagation()}}},[t._t("dropdown")],2)])]):t._e()],2)},[],!1,null,null,null).exports,u=n("MY0P"),l={components:{InertiaLink:r.b,Icon:u.a},methods:{isUrl:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return""===e[0]?""===location.pathname.substr(1):e.filter(function(t){return location.pathname.substr(1).startsWith(t)}).length}}},c=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-4"},[n("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("dashboard")}},[n("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("dashboard")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"dashboard"}}),t._v(" "),n("div",{class:t.isUrl("dashboard")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Dashboard")])],1)],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("questions")}},[n("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("questions")||t.isUrl("entries")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"book"}}),t._v(" "),n("div",{class:t.isUrl("questions")||t.isUrl("entries")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Questions")])],1)],1)])},[],!1,null,null,null).exports,h={components:{InertiaLink:r.b,Dropdown:a,Icon:u.a,MainMenu:c},inject:["page"],props:{title:String},data:function(){return{showUserMenu:!1,accounts:null}},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.page.props.app.name):this.page.props.app.name},hideDropdownMenus:function(){this.showUserMenu=!1},logout:function(){r.a.visit(this.route("logout").url(),{method:"post"})}}},p=Object(o.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("portal-target",{attrs:{name:"dropdown",slim:""}}),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"min-h-screen flex flex-col",on:{click:t.hideDropdownMenus}},[n("div",{staticClass:"md:flex"},[n("div",{staticClass:"bg-green-800 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"},[n("inertia-link",{staticClass:"mt-1",attrs:{href:"/"}},[n("span",{staticClass:"text-white text-xl font-extrabold"},[t._v("MailJournal")])]),t._v(" "),n("dropdown",{staticClass:"md:hidden",attrs:{placement:"bottom-end"}},[n("svg",{staticClass:"fill-white w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})]),t._v(" "),n("div",{staticClass:"mt-2 px-8 py-4 shadow-lg bg-green-700 rounded",attrs:{slot:"dropdown"},slot:"dropdown"},[n("main-menu")],1)])],1),t._v(" "),n("div",{staticClass:"bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-end items-center"},[n("dropdown",{staticClass:"mt-1",attrs:{placement:"bottom-end"}},[n("div",{staticClass:"flex items-center cursor-pointer select-none group"},[n("div",{staticClass:"text-gray-800 group-hover:text-green-600 focus:text-green-600 mr-1 whitespace-no-wrap"},[n("span",[t._v(t._s(t.page.props.auth.user.name))])]),t._v(" "),n("icon",{staticClass:"w-5 h-5 group-hover:fill-green-600 fill-gray-800 focus:fill-green-600",attrs:{name:"cheveron-down"}})],1),t._v(" "),n("div",{staticClass:"mt-2 py-2 shadow bg-white rounded text-sm",attrs:{slot:"dropdown"},slot:"dropdown"},[n("inertia-link",{staticClass:"block px-6 py-2 hover:bg-green-500 hover:text-white",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")]),t._v(" "),n("a",{staticClass:"block px-6 py-2 hover:bg-green-500 hover:text-white",attrs:{href:t.route("logout")},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])],1)])],1)]),t._v(" "),n("div",{staticClass:"flex flex-grow"},[n("div",{staticClass:"bg-green-700 flex-shrink-0 w-56 p-12 hidden md:block"},[n("main-menu")],1),t._v(" "),n("div",{staticClass:"w-full overflow-hidden px-4 py-8 md:p-12"},[t._t("default")],2)])])])],1)},[],!1,null,null,null);e.a=p.exports},"2OGF":function(t,e,n){"use strict";var r=n("vDqi"),i=n.n(r);function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.record(e)}var e,n,r;return e=t,(n=[{key:"record",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.errors=t}},{key:"all",value:function(){return this.errors}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"has",value:function(t){return t in this.errors}},{key:"first",value:function(t){return this.get(t)[0]}},{key:"get",value:function(t){return this.errors[t]||[]}}])&&s(e.prototype,n),r&&s(e,r),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.fields=e,this.sending=!1,this.errors=new o,this.http=i.a.create({headers:{"X-Requested-With":"XMLHttpRequest"}})}var e,n,r;return e=t,(n=[{key:"delete",value:function(t){var e=t.url,n=t.then;this.request(this.http.delete(e),n)}},{key:"post",value:function(t){var e=t.url,n=t.data,r=void 0===n?this.fields:n,i=t.then;this.request(this.http.post(e,r),i)}},{key:"put",value:function(t){var e=t.url,n=t.data,r=void 0===n?this.fields:n,i=t.then;this.request(this.http.put(e,r),i)}},{key:"request",value:function(t,e){var n=this;this.errors.record(),this.sending=!0,t.then(function(t){n.sending=!1,e(t.data)}).catch(function(t){if(n.sending=!1,!t.response||422!==t.response.status)return Promise.reject(t);n.errors.record(t.response.data.errors)})}}])&&a(e.prototype,n),r&&a(e,r),t}();e.a=u},DORU:function(t,e,n){"use strict";var r={components:{InertiaLink:n("XA51").b},props:{links:Array}},i=n("KHd+"),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.links,function(e,r){return[null===e.url?n("div",{key:r,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-500",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):n("inertia-link",{key:r,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-green-500 focus:text-green-500",class:{"bg-white":e.active,"ml-auto":"Next"===e.label},attrs:{replace:"",href:e.url}},[t._v(t._s(e.label))])]})],2)},[],!1,null,null,null);e.a=s.exports},J3Jp:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=n(2),s=function(){function t(e,n){this.expression=e,this.options=n,this.expressionParts=new Array(5),t.locales[n.locale]?this.i18n=t.locales[n.locale]:(console.warn("Locale '"+n.locale+"' could not be found; falling back to 'en'."),this.i18n=t.locales.en),void 0===n.use24HourTimeFormat&&(n.use24HourTimeFormat=this.i18n.use24HourTimeFormatByDefault())}return t.toString=function(e,n){var r=void 0===n?{}:n,i=r.throwExceptionOnParseError,s=void 0===i||i,o=r.verbose,a=void 0!==o&&o,u=r.dayOfWeekStartIndexZero,l=void 0===u||u,c=r.use24HourTimeFormat,h=r.locale;return new t(e,{throwExceptionOnParseError:s,verbose:a,dayOfWeekStartIndexZero:l,use24HourTimeFormat:c,locale:void 0===h?"en":h}).getFullDescription()},t.initialize=function(e){t.specialCharacters=["/","-",",","*"],e.load(t.locales)},t.prototype.getFullDescription=function(){var t="";try{var e=new i.CronParser(this.expression,this.options.dayOfWeekStartIndexZero);this.expressionParts=e.parse();var n=this.getTimeOfDayDescription(),r=this.getDayOfMonthDescription(),s=this.getMonthDescription();t+=n+r+this.getDayOfWeekDescription()+s+this.getYearDescription(),t=(t=this.transformVerbosity(t,this.options.verbose)).charAt(0).toLocaleUpperCase()+t.substr(1)}catch(e){if(this.options.throwExceptionOnParseError)throw""+e;t=this.i18n.anErrorOccuredWhenGeneratingTheExpressionD()}return t},t.prototype.getTimeOfDayDescription=function(){var e=this.expressionParts[0],n=this.expressionParts[1],i=this.expressionParts[2],s="";if(r.StringUtilities.containsAny(n,t.specialCharacters)||r.StringUtilities.containsAny(i,t.specialCharacters)||r.StringUtilities.containsAny(e,t.specialCharacters))if(e||!(n.indexOf("-")>-1)||n.indexOf(",")>-1||n.indexOf("/")>-1||r.StringUtilities.containsAny(i,t.specialCharacters))if(!e&&i.indexOf(",")>-1&&-1==i.indexOf("-")&&-1==i.indexOf("/")&&!r.StringUtilities.containsAny(n,t.specialCharacters)){var o=i.split(",");s+=this.i18n.at();for(var a=0;a<o.length;a++)s+=" ",s+=this.formatTime(o[a],n,""),a<o.length-2&&(s+=","),a==o.length-2&&(s+=this.i18n.spaceAnd())}else{var u=this.getSecondsDescription(),l=this.getMinutesDescription(),c=this.getHoursDescription();(s+=u).length>0&&l.length>0&&(s+=", "),(s+=l).length>0&&c.length>0&&(s+=", "),s+=c}else{var h=n.split("-");s+=r.StringUtilities.format(this.i18n.everyMinuteBetweenX0AndX1(),this.formatTime(i,h[0],""),this.formatTime(i,h[1],""))}else s+=this.i18n.atSpace()+this.formatTime(i,n,e);return s},t.prototype.getSecondsDescription=function(){var t=this;return this.getSegmentDescription(this.expressionParts[0],this.i18n.everySecond(),function(t){return t},function(e){return r.StringUtilities.format(t.i18n.everyX0Seconds(),e)},function(e){return t.i18n.secondsX0ThroughX1PastTheMinute()},function(e){return"0"==e?"":parseInt(e)<20?t.i18n.atX0SecondsPastTheMinute():t.i18n.atX0SecondsPastTheMinuteGt20()||t.i18n.atX0SecondsPastTheMinute()})},t.prototype.getMinutesDescription=function(){var t=this,e=this.expressionParts[0];return this.getSegmentDescription(this.expressionParts[1],this.i18n.everyMinute(),function(t){return t},function(e){return r.StringUtilities.format(t.i18n.everyX0Minutes(),e)},function(e){return t.i18n.minutesX0ThroughX1PastTheHour()},function(n){try{return"0"==n&&""==e?"":parseInt(n)<20?t.i18n.atX0MinutesPastTheHour():t.i18n.atX0MinutesPastTheHourGt20()||t.i18n.atX0MinutesPastTheHour()}catch(e){return t.i18n.atX0MinutesPastTheHour()}})},t.prototype.getHoursDescription=function(){var t=this,e=this.expressionParts[2];return this.getSegmentDescription(e,this.i18n.everyHour(),function(e){return t.formatTime(e,"0","")},function(e){return r.StringUtilities.format(t.i18n.everyX0Hours(),e)},function(e){return t.i18n.betweenX0AndX1()},function(e){return t.i18n.atX0()})},t.prototype.getDayOfWeekDescription=function(){var t=this,e=this.i18n.daysOfTheWeek();return"*"==this.expressionParts[5]?"":this.getSegmentDescription(this.expressionParts[5],this.i18n.commaEveryDay(),function(t){var n=t;return t.indexOf("#")>-1?n=t.substr(0,t.indexOf("#")):t.indexOf("L")>-1&&(n=n.replace("L","")),e[parseInt(n)]},function(e){return r.StringUtilities.format(t.i18n.commaEveryX0DaysOfTheWeek(),e)},function(e){return t.i18n.commaX0ThroughX1()},function(e){var n=null;if(e.indexOf("#")>-1){var r=null;switch(e.substring(e.indexOf("#")+1)){case"1":r=t.i18n.first();break;case"2":r=t.i18n.second();break;case"3":r=t.i18n.third();break;case"4":r=t.i18n.fourth();break;case"5":r=t.i18n.fifth()}n=t.i18n.commaOnThe()+r+t.i18n.spaceX0OfTheMonth()}else n=e.indexOf("L")>-1?t.i18n.commaOnTheLastX0OfTheMonth():"*"!=t.expressionParts[3]?t.i18n.commaAndOnX0():t.i18n.commaOnlyOnX0();return n})},t.prototype.getMonthDescription=function(){var t=this,e=this.i18n.monthsOfTheYear();return this.getSegmentDescription(this.expressionParts[4],"",function(t){return e[parseInt(t)-1]},function(e){return r.StringUtilities.format(t.i18n.commaEveryX0Months(),e)},function(e){return t.i18n.commaMonthX0ThroughMonthX1()||t.i18n.commaX0ThroughX1()},function(e){return t.i18n.commaOnlyInX0()})},t.prototype.getDayOfMonthDescription=function(){var t=this,e=null,n=this.expressionParts[3];switch(n){case"L":e=this.i18n.commaOnTheLastDayOfTheMonth();break;case"WL":case"LW":e=this.i18n.commaOnTheLastWeekdayOfTheMonth();break;default:var i=n.match(/(\d{1,2}W)|(W\d{1,2})/);if(i){var s=parseInt(i[0].replace("W","")),o=1==s?this.i18n.firstWeekday():r.StringUtilities.format(this.i18n.weekdayNearestDayX0(),s.toString());e=r.StringUtilities.format(this.i18n.commaOnTheX0OfTheMonth(),o);break}var a=n.match(/L-(\d{1,2})/);if(a){var u=a[1];e=r.StringUtilities.format(this.i18n.commaDaysBeforeTheLastDayOfTheMonth(),u);break}e=this.getSegmentDescription(n,this.i18n.commaEveryDay(),function(e){return"L"==e?t.i18n.lastDay():e},function(e){return"1"==e?t.i18n.commaEveryDay():t.i18n.commaEveryX0Days()},function(e){return t.i18n.commaBetweenDayX0AndX1OfTheMonth()},function(e){return t.i18n.commaOnDayX0OfTheMonth()})}return e},t.prototype.getYearDescription=function(){var t=this;return this.getSegmentDescription(this.expressionParts[6],"",function(t){return/^\d+$/.test(t)?new Date(parseInt(t),1).getFullYear().toString():t},function(e){return r.StringUtilities.format(t.i18n.commaEveryX0Years(),e)},function(e){return t.i18n.commaYearX0ThroughYearX1()||t.i18n.commaX0ThroughX1()},function(e){return t.i18n.commaOnlyInX0()})},t.prototype.getSegmentDescription=function(t,e,n,i,s,o){var a=this,u=null;if(t)if("*"===t)u=e;else if(r.StringUtilities.containsAny(t,["/","-",","]))if(t.indexOf("/")>-1){var l=t.split("/");if(u=r.StringUtilities.format(i(l[1]),n(l[1])),l[0].indexOf("-")>-1)0!=(f=this.generateBetweenSegmentDescription(l[0],s,n)).indexOf(", ")&&(u+=", "),u+=f;else if(!r.StringUtilities.containsAny(l[0],["*",","])){var c=r.StringUtilities.format(o(l[0]),n(l[0]));c=c.replace(", ",""),u+=r.StringUtilities.format(this.i18n.commaStartingX0(),c)}}else if(t.indexOf(",")>-1){l=t.split(",");for(var h="",p=0;p<l.length;p++){var f;p>0&&l.length>2&&(h+=",",p<l.length-1&&(h+=" ")),p>0&&l.length>1&&(p==l.length-1||2==l.length)&&(h+=this.i18n.spaceAnd()+" "),l[p].indexOf("-")>-1?h+=f=(f=this.generateBetweenSegmentDescription(l[p],function(t){return a.i18n.commaX0ThroughX1()},n)).replace(", ",""):h+=n(l[p])}u=r.StringUtilities.format(o(t),h)}else t.indexOf("-")>-1&&(u=this.generateBetweenSegmentDescription(t,s,n));else u=r.StringUtilities.format(o(t),n(t));else u="";return u},t.prototype.generateBetweenSegmentDescription=function(t,e,n){var i="",s=t.split("-"),o=n(s[0]),a=n(s[1]);a=a.replace(":00",":59");var u=e(t);return i+=r.StringUtilities.format(u,o,a)},t.prototype.formatTime=function(t,e,n){var r=parseInt(t),i="";this.options.use24HourTimeFormat||(i=r>=12?" PM":" AM",r>12&&(r-=12),0===r&&(r=12));var s=e,o="";return n&&(o=":"+("00"+n).substring(n.length)),("00"+r.toString()).substring(r.toString().length)+":"+("00"+s.toString()).substring(s.toString().length)+o+i},t.prototype.transformVerbosity=function(t,e){return e||(t=(t=(t=(t=t.replace(new RegExp(this.i18n.commaEveryMinute(),"g"),"")).replace(new RegExp(this.i18n.commaEveryHour(),"g"),"")).replace(new RegExp(this.i18n.commaEveryDay(),"g"),"")).replace(/\, ?$/,"")),t},t.locales={},t}();e.ExpressionDescriptor=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.format=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t.replace(/%s/g,function(){return e.shift()})},t.containsAny=function(t,e){return e.some(function(e){return t.indexOf(e)>-1})},t}();e.StringUtilities=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){void 0===e&&(e=!0),this.expression=t,this.dayOfWeekStartIndexZero=e}return t.prototype.parse=function(){var t=this.extractParts(this.expression);return this.normalize(t),this.validate(t),t},t.prototype.extractParts=function(t){if(!this.expression)throw new Error("Expression is empty");var e=t.trim().split(/[ ]+/);if(e.length<5)throw new Error("Expression has only "+e.length+" part"+(1==e.length?"":"s")+". At least 5 parts are required.");if(5==e.length)e.unshift(""),e.push("");else if(6==e.length)/\d{4}$/.test(e[5])?e.unshift(""):e.push("");else if(e.length>7)throw new Error("Expression has "+e.length+" parts; too many!");return e},t.prototype.normalize=function(t){var e=this;if(t[3]=t[3].replace("?","*"),t[5]=t[5].replace("?","*"),0==t[0].indexOf("0/")&&(t[0]=t[0].replace("0/","*/")),0==t[1].indexOf("0/")&&(t[1]=t[1].replace("0/","*/")),0==t[2].indexOf("0/")&&(t[2]=t[2].replace("0/","*/")),0==t[3].indexOf("1/")&&(t[3]=t[3].replace("1/","*/")),0==t[4].indexOf("1/")&&(t[4]=t[4].replace("1/","*/")),0==t[5].indexOf("1/")&&(t[5]=t[5].replace("1/","*/")),0==t[6].indexOf("1/")&&(t[6]=t[6].replace("1/","*/")),t[5]=t[5].replace(/(^\d)|([^#\/\s]\d)/g,function(t){var n=t.replace(/\D/,""),r=n;return e.dayOfWeekStartIndexZero?"7"==n&&(r="0"):r=(parseInt(n)-1).toString(),t.replace(n,r)}),"L"==t[5]&&(t[5]="6"),"?"==t[3]&&(t[3]="*"),t[3].indexOf("W")>-1&&(t[3].indexOf(",")>-1||t[3].indexOf("-")>-1))throw new Error("The 'W' character can be specified only when the day-of-month is a single day, not a range or list of days.");var n={SUN:0,MON:1,TUE:2,WED:3,THU:4,FRI:5,SAT:6};for(var r in n)t[5]=t[5].replace(new RegExp(r,"gi"),n[r].toString());var i={JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12};for(var s in i)t[4]=t[4].replace(new RegExp(s,"gi"),i[s].toString());"0"==t[0]&&(t[0]=""),/\*|\-|\,|\//.test(t[2])||!/\*|\//.test(t[1])&&!/\*|\//.test(t[0])||(t[2]+="-"+t[2]);for(var o=0;o<t.length;o++)if("*/1"==t[o]&&(t[o]="*"),t[o].indexOf("/")>-1&&!/^\*|\-|\,/.test(t[o])){var a=null;switch(o){case 4:a="12";break;case 5:a="6";break;case 6:a="9999";break;default:a=null}if(null!=a){var u=t[o].split("/");t[o]=u[0]+"-"+a+"/"+u[1]}}},t.prototype.validate=function(t){this.assertNoInvalidCharacters("DOW",t[5]),this.assertNoInvalidCharacters("DOM",t[3])},t.prototype.assertNoInvalidCharacters=function(t,e){var n=e.match(/[A-KM-VX-Z]+/gi);if(n&&n.length)throw new Error(t+" part contains invalid values: '"+n.toString()+"'")},t}();e.CronParser=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.prototype.atX0SecondsPastTheMinuteGt20=function(){return null},t.prototype.atX0MinutesPastTheHourGt20=function(){return null},t.prototype.commaMonthX0ThroughMonthX1=function(){return null},t.prototype.commaYearX0ThroughYearX1=function(){return null},t.prototype.use24HourTimeFormatByDefault=function(){return!1},t.prototype.anErrorOccuredWhenGeneratingTheExpressionD=function(){return"An error occured when generating the expression description.  Check the cron expression syntax."},t.prototype.everyMinute=function(){return"every minute"},t.prototype.everyHour=function(){return"every hour"},t.prototype.atSpace=function(){return"At "},t.prototype.everyMinuteBetweenX0AndX1=function(){return"Every minute between %s and %s"},t.prototype.at=function(){return"At"},t.prototype.spaceAnd=function(){return" and"},t.prototype.everySecond=function(){return"every second"},t.prototype.everyX0Seconds=function(){return"every %s seconds"},t.prototype.secondsX0ThroughX1PastTheMinute=function(){return"seconds %s through %s past the minute"},t.prototype.atX0SecondsPastTheMinute=function(){return"at %s seconds past the minute"},t.prototype.everyX0Minutes=function(){return"every %s minutes"},t.prototype.minutesX0ThroughX1PastTheHour=function(){return"minutes %s through %s past the hour"},t.prototype.atX0MinutesPastTheHour=function(){return"at %s minutes past the hour"},t.prototype.everyX0Hours=function(){return"every %s hours"},t.prototype.betweenX0AndX1=function(){return"between %s and %s"},t.prototype.atX0=function(){return"at %s"},t.prototype.commaEveryDay=function(){return", every day"},t.prototype.commaEveryX0DaysOfTheWeek=function(){return", every %s days of the week"},t.prototype.commaX0ThroughX1=function(){return", %s through %s"},t.prototype.first=function(){return"first"},t.prototype.second=function(){return"second"},t.prototype.third=function(){return"third"},t.prototype.fourth=function(){return"fourth"},t.prototype.fifth=function(){return"fifth"},t.prototype.commaOnThe=function(){return", on the "},t.prototype.spaceX0OfTheMonth=function(){return" %s of the month"},t.prototype.lastDay=function(){return"the last day"},t.prototype.commaOnTheLastX0OfTheMonth=function(){return", on the last %s of the month"},t.prototype.commaOnlyOnX0=function(){return", only on %s"},t.prototype.commaAndOnX0=function(){return", and on %s"},t.prototype.commaEveryX0Months=function(){return", every %s months"},t.prototype.commaOnlyInX0=function(){return", only in %s"},t.prototype.commaOnTheLastDayOfTheMonth=function(){return", on the last day of the month"},t.prototype.commaOnTheLastWeekdayOfTheMonth=function(){return", on the last weekday of the month"},t.prototype.commaDaysBeforeTheLastDayOfTheMonth=function(){return", %s days before the last day of the month"},t.prototype.firstWeekday=function(){return"first weekday"},t.prototype.weekdayNearestDayX0=function(){return"weekday nearest day %s"},t.prototype.commaOnTheX0OfTheMonth=function(){return", on the %s of the month"},t.prototype.commaEveryX0Days=function(){return", every %s days"},t.prototype.commaBetweenDayX0AndX1OfTheMonth=function(){return", between day %s and %s of the month"},t.prototype.commaOnDayX0OfTheMonth=function(){return", on day %s of the month"},t.prototype.commaEveryMinute=function(){return", every minute"},t.prototype.commaEveryHour=function(){return", every hour"},t.prototype.commaEveryX0Years=function(){return", every %s years"},t.prototype.commaStartingX0=function(){return", starting %s"},t.prototype.daysOfTheWeek=function(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},t.prototype.monthsOfTheYear=function(){return["January","February","March","April","May","June","July","August","September","October","November","December"]},t}();e.en=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n(5);r.ExpressionDescriptor.initialize(new i.enLocaleLoader),e.default=r.ExpressionDescriptor;var s=r.ExpressionDescriptor.toString;e.toString=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=function(){function t(){}return t.prototype.load=function(t){t.en=new r.en},t}();e.enLocaleLoader=i}])},MY0P:function(t,e,n){"use strict";var r={props:{name:String}},i=n("KHd+"),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return"apple"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[n("g",{attrs:{"fill-rule":"nonzero"}},[n("path",{attrs:{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}}),n("path",{attrs:{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"}})])]):"book"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}})]):"cheveron-down"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):"cheveron-right"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("polygon",{attrs:{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"}})]):"dashboard"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]):"location"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]):"office"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"}})]):"printer"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"}})]):"shopping-cart"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})]):"store-front"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"}})]):"trash"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})]):"users"===t.name?n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}})]):t._e()},[],!1,null,null,null);e.a=s.exports},UhB0:function(t,e,n){"use strict";n.r(e);var r=n("XA51"),i=n("J3Jp"),s=n.n(i),o=n("2OGF"),a=n("MY0P"),u=n("+SZM"),l=n("Z84v"),c=n("DORU"),h=n("Ujtf"),p=n("pF+r"),f={components:{InertiaLink:r.b,Icon:a.a,Layout:u.a,LoadingButton:l.a,Pagination:c.a,SelectInput:h.a,TextInput:p.a},props:{question:Object,entries:Object},data:function(){return{form:new o.a}},computed:{humanReadableExpression:function(){return s.a.toString(this.question.expression)}},methods:{destroy:function(){var t=this;confirm("Are you sure you want to delete this question?")&&this.form.delete({url:this.route("questions.destroy",this.question.id).url(),then:function(){return r.a.replace(t.route("questions").url())}})},trimString:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=t.substring(0,50);return e===t?e:"".concat(e,"...")}}},d=n("KHd+"),v=Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{attrs:{title:t.form.fields.name}},[n("h1",{staticClass:"mb-8 font-bold text-3xl"},[n("inertia-link",{staticClass:"text-green-400 hover:text-green-600",attrs:{href:t.route("questions")}},[t._v("Questions")]),t._v(" "),n("span",{staticClass:"text-green-400 font-medium"},[t._v("/")]),t._v("\n    "+t._s(t.question.id)+"\n  ")],1),t._v(" "),n("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-lg"},[n("div",{staticClass:"p-8 flex flex-wrap"},[n("div",{staticClass:"mb-8 w-full"},[n("label",{staticClass:"form-label",attrs:{for:"message"}},[t._v("Message:")]),t._v(" "),n("div",{staticClass:"py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",attrs:{id:"message"}},[t._v(t._s(t.question.message))])]),t._v(" "),n("div",{staticClass:"mb-8 w-full"},[n("label",{staticClass:"form-label",attrs:{for:"expression"}},[t._v("Recurrence:")]),t._v(" "),n("div",{staticClass:"py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",attrs:{id:"expression"}},[t._v(t._s(t.humanReadableExpression))])]),t._v(" "),n("div",{staticClass:"w-full"},[n("label",{staticClass:"form-label",attrs:{for:"timezone"}},[t._v("Timezone:")]),t._v(" "),n("div",{staticClass:"py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",attrs:{id:"timezone"}},[t._v(t._s(t.question.timezone||"Default"))])])]),t._v(" "),n("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-300 flex items-center"},[n("button",{staticClass:"text-red-500 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("Delete")]),t._v(" "),n("inertia-link",{staticClass:"btn-green ml-auto",attrs:{href:t.route("questions.edit",t.question.id)}},[t._v("Edit")])],1)]),t._v(" "),n("h2",{staticClass:"mt-12 font-bold text-2xl"},[t._v("Replies")]),t._v(" "),n("div",{staticClass:"mt-6 bg-white rounded shadow overflow-x-auto"},[n("table",{staticClass:"w-full whitespace-no-wrap"},[n("thead",[n("tr",{staticClass:"text-left font-bold"},[n("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("Sent At")]),t._v(" "),n("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("Text")]),t._v(" "),n("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("Replied At")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t.entries.data.length?t._l(t.entries.data,function(e){return n("tr",{staticClass:"hover:bg-gray-200 focus-within:bg-gray-200"},[n("td",{staticClass:"border-t"},[n("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("entries.show",e.id),tabindex:"-1"}},[t._v("\n              "+t._s(t._f("formatDatetime")(e.question_sent_at))+"\n            ")])],1),t._v(" "),n("td",{staticClass:"border-t"},[n("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("entries.show",e.id),tabindex:"-1"},domProps:{innerHTML:t._s(e.reply)}})],1),t._v(" "),n("td",{staticClass:"border-t"},[n("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("entries.show",e.id),tabindex:"-1"}},[t._v("\n              "+t._s(t._f("formatDatetime")(e.replied_at))+"\n            ")])],1),t._v(" "),n("td",{staticClass:"border-t w-px"},[n("inertia-link",{staticClass:"px-6 py-4 flex items-center",attrs:{href:t.route("entries.show",e.id),tabindex:"-1"}},[n("icon",{staticClass:"block w-6 h-6 fill-gray-500",attrs:{name:"cheveron-right"}})],1)],1)])}):n("tr",[n("td",{staticClass:"border-t px-6 py-4",attrs:{colspan:"4"}},[t._v("No replies found.")])])],2)])]),t._v(" "),n("pagination",{attrs:{links:t.entries.links}})],1)},[],!1,null,null,null);e.default=v.exports},Ujtf:function(t,e,n){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"select-input-".concat(this._uid)}},value:[String,Number,Boolean,Array],label:String,error:String},data:function(){return{selected:this.value}},watch:{selected:function(t){this.$emit("input",t)}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()}}},i=n("KHd+"),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),n("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],ref:"input",staticClass:"form-select",class:{error:t.error},attrs:{id:t.id},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selected=e.target.multiple?n:n[0]}}},"select",t.$attrs,!1),[t._t("default")],2),t._v(" "),t.error?n("div",{staticClass:"form-error"},[t._v(t._s(t.error))]):t._e()])},[],!1,null,null,null);e.a=s.exports},Z84v:function(t,e,n){"use strict";var r={props:{loading:Boolean}},i=n("KHd+"),s=Object(i.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"flex items-center",class:{"is-loading":this.loading},attrs:{disabled:this.loading}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},"pF+r":function(t,e,n){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,error:String},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},i=n("KHd+"),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.label?n("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),n("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.error},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.error?n("div",{staticClass:"form-error"},[t._v(t._s(t.error))]):t._e()])},[],!1,null,null,null);e.a=s.exports}}]);