(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BO3k:function(t,e,n){"use strict";n.r(e);var i={components:{AuthLayout:n("WKAJ").a},props:{resent:Boolean}},s=n("KHd+"),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("auth-layout",{attrs:{title:"Verify Your Email Address"}},[n("div",{staticClass:"px-10 py-12"},[n("h1",{staticClass:"text-center font-bold text-3xl"},[t._v("Verify Your Email Address")]),t._v(" "),n("div",{staticClass:"mx-auto mt-6 w-24 border-b-2"}),t._v(" "),t.resent?n("div",{staticClass:"bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mt-6",attrs:{role:"alert"}},[n("p",[t._v("A fresh verification link has been sent to your email address.")])]):t._e(),t._v(" "),n("div",{staticClass:"mt-10"},[t._v("\n      Before proceeding, please check your email for a verification link.\n\n      If you did not receive the email "),n("inertia-link",{staticClass:"text-green-500 hover:underline",attrs:{href:t.route("verification.resend")}},[t._v("click here to request another")]),t._v(".\n    ")],1)])])}),[],!1,null,null,null);e.default=r.exports},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,s,r,a,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):s&&(l=o?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},WKAJ:function(t,e,n){"use strict";var i={props:{title:String},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.$page.app.name):this.$page.app.name}}},s=n("KHd+"),r=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-6 bg-green-700 min-h-screen flex justify-center items-center"},[e("div",{staticClass:"w-full max-w-sm"},[this.$slots.heading?e("div",{staticClass:"block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold"},[this._t("heading")],2):this._e(),this._v(" "),e("div",{staticClass:"mt-8 bg-white rounded-lg shadow-lg overflow-hidden"},[this._t("default")],2)])])}),[],!1,null,null,null);e.a=r.exports}}]);