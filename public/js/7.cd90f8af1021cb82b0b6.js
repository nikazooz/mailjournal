(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+SZM":function(t,e,s){"use strict";var a=s("XA51"),n=s("8L3F"),r={props:{placement:{type:String,default:"bottom-end"},boundary:{type:String,default:"scrollParent"}},data:function(){return{show:!1}},watch:{show:function(t){var e=this;t?this.$nextTick(function(){e.popper=new n.a(e.$el,e.$refs.dropdown,{placement:e.placement,modifiers:{preventOverflow:{boundariesElement:e.boundary}}})}):this.popper&&setTimeout(function(){return e.popper.destroy()},100)}},mounted:function(){var t=this;document.addEventListener("keydown",function(e){27===e.keyCode&&t.close()})},methods:{close:function(){this.show=!1},toggle:function(){this.show=!this.show}}},i=s("KHd+"),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"button"},on:{click:t.toggle}},[t._t("default"),t._v(" "),t.show?s("portal",{attrs:{to:"dropdown"}},[s("div",[s("div",{staticStyle:{position:"fixed",top:"0",right:"0",left:"0",bottom:"0","z-index":"99998"},on:{click:t.toggle}}),t._v(" "),s("div",{ref:"dropdown",staticStyle:{position:"absolute","z-index":"99999"},on:{click:function(t){t.stopPropagation()}}},[t._t("dropdown")],2)])]):t._e()],2)},[],!1,null,null,null).exports,l=s("MY0P"),h={components:{InertiaLink:a.b,Icon:l.a},methods:{isUrl:function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];return""===e[0]?""===location.pathname.substr(1):e.filter(function(t){return location.pathname.substr(1).startsWith(t)}).length}}},c=Object(i.a)(h,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-4"},[s("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("dashboard")}},[s("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("dashboard")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"dashboard"}}),t._v(" "),s("div",{class:t.isUrl("dashboard")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Dashboard")])],1)],1),t._v(" "),s("div",{staticClass:"mb-4"},[s("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("questions")}},[s("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("questions")||t.isUrl("entries")?"fill-white":"fill-green-400 group-hover:fill-white",attrs:{name:"book"}}),t._v(" "),s("div",{class:t.isUrl("questions")||t.isUrl("entries")?"text-white":"text-green-300 group-hover:text-white"},[t._v("Questions")])],1)],1)])},[],!1,null,null,null).exports,d={components:{InertiaLink:a.b,Dropdown:o,Icon:l.a,MainMenu:c},inject:["page"],props:{title:String},data:function(){return{showUserMenu:!1,accounts:null}},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.page.props.app.name):this.page.props.app.name},hideDropdownMenus:function(){this.showUserMenu=!1}}},p=Object(i.a)(d,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal-target",{attrs:{name:"dropdown",slim:""}}),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("div",{staticClass:"min-h-screen flex flex-col",on:{click:t.hideDropdownMenus}},[s("div",{staticClass:"md:flex"},[s("div",{staticClass:"bg-green-800 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"},[s("inertia-link",{staticClass:"mt-1",attrs:{href:"/"}},[s("span",{staticClass:"text-white text-xl font-extrabold"},[t._v("MailJournal")])]),t._v(" "),s("dropdown",{staticClass:"md:hidden",attrs:{placement:"bottom-end"}},[s("svg",{staticClass:"fill-white w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})]),t._v(" "),s("div",{staticClass:"mt-2 px-8 py-4 shadow-lg bg-green-700 rounded",attrs:{slot:"dropdown"},slot:"dropdown"},[s("main-menu")],1)])],1),t._v(" "),s("div",{staticClass:"bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-end items-center"},[s("dropdown",{staticClass:"mt-1",attrs:{placement:"bottom-end"}},[s("div",{staticClass:"flex items-center cursor-pointer select-none group"},[s("div",{staticClass:"text-gray-800 group-hover:text-green-600 focus:text-green-600 mr-1 whitespace-no-wrap"},[s("span",[t._v(t._s(t.page.props.auth.user.name))])]),t._v(" "),s("icon",{staticClass:"w-5 h-5 group-hover:fill-green-600 fill-gray-800 focus:fill-green-600",attrs:{name:"cheveron-down"}})],1),t._v(" "),s("div",{staticClass:"mt-2 py-2 shadow bg-white rounded text-sm",attrs:{slot:"dropdown"},slot:"dropdown"},[s("inertia-link",{staticClass:"block px-6 py-2 hover:bg-green-500 hover:text-white",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)])],1)]),t._v(" "),s("div",{staticClass:"flex flex-grow"},[s("div",{staticClass:"bg-green-700 flex-shrink-0 w-56 p-12 hidden md:block"},[s("main-menu")],1),t._v(" "),s("div",{staticClass:"w-full overflow-hidden px-4 py-8 md:p-12"},[t._t("default")],2)])])])],1)},[],!1,null,null,null);e.a=p.exports},"2eZv":function(t,e,s){"use strict";s.r(e);s("LvDl");var a=s("XA51"),n=s("MY0P"),r=s("+SZM"),i=s("DORU"),o={components:{InertiaLink:a.b,Icon:n.a,Layout:r.a,Pagination:i.a},props:{questions:Object}},l=s("KHd+"),h=Object(l.a)(o,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("layout",{attrs:{title:"Questions"}},[s("h1",{staticClass:"mb-8 font-bold text-3xl"},[t._v("Questions")]),t._v(" "),s("div",{staticClass:"mb-6 flex justify-between items-center"},[s("inertia-link",{staticClass:"btn-green",attrs:{href:t.route("questions.create")}},[s("span",[t._v("Create")]),t._v(" "),s("span",{staticClass:"hidden md:inline"},[t._v("Question")])])],1),t._v(" "),s("div",{staticClass:"bg-white rounded shadow overflow-x-auto"},[s("table",{staticClass:"w-full whitespace-no-wrap"},[s("tr",{staticClass:"text-left font-bold"},[s("th",{staticClass:"px-6 pt-6 pb-4"},[t._v("Message")])]),t._v(" "),t._l(t.questions.data,function(e){return s("tr",{key:e.id,staticClass:"hover:bg-gray-200 focus-within:bg-gray-200"},[s("td",{staticClass:"border-t"},[s("inertia-link",{staticClass:"px-6 py-4 flex items-center focus:text-green-500",attrs:{href:t.route("questions.show",e.id)}},[t._v("\n            "+t._s(e.message)+"\n          ")])],1),t._v(" "),s("td",{staticClass:"border-t w-px"},[s("inertia-link",{staticClass:"px-4 flex items-center",attrs:{href:t.route("questions.show",e.id),tabindex:"-1"}},[s("icon",{staticClass:"block w-6 h-6 fill-gray-500",attrs:{name:"cheveron-right"}})],1)],1)])}),t._v(" "),0===t.questions.data.length?s("tr",[s("td",{staticClass:"border-t px-6 py-4",attrs:{colspan:"4"}},[t._v("No questions found.")])]):t._e()],2)]),t._v(" "),s("pagination",{attrs:{links:t.questions.links}})],1)},[],!1,null,null,null);e.default=h.exports},DORU:function(t,e,s){"use strict";var a={components:{InertiaLink:s("XA51").b},props:{links:Array}},n=s("KHd+"),r=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.links,function(e,a){return[null===e.url?s("div",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-500",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:a,staticClass:"mr-1 mb-1 px-4 py-3 text-sm border rounded hover:bg-white focus:border-green-500 focus:text-green-500",class:{"bg-white":e.active,"ml-auto":"Next"===e.label},attrs:{replace:"",href:e.url}},[t._v(t._s(e.label))])]})],2)},[],!1,null,null,null);e.a=r.exports},MY0P:function(t,e,s){"use strict";var a={props:{name:String}},n=s("KHd+"),r=Object(n.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return"apple"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[s("g",{attrs:{"fill-rule":"nonzero"}},[s("path",{attrs:{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}}),s("path",{attrs:{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"}})])]):"book"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}})]):"cheveron-down"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):"cheveron-right"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("polygon",{attrs:{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"}})]):"dashboard"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]):"location"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]):"office"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"}})]):"printer"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"}})]):"shopping-cart"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})]):"store-front"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"}})]):"trash"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})]):"users"===t.name?s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}})]):t._e()},[],!1,null,null,null);e.a=r.exports}}]);