(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/uub":function(t,e,s){"use strict";s.r(e);var n=s("WKAJ"),i=s("Z84v"),r=s("pF+r"),a={components:{AuthLayout:n.a,LoadingButton:i.a,TextInput:r.a},props:{errors:Object,status:String},data:function(){return{sending:!1,form:{email:null}}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("password.email"),this.form).then((function(){t.sending=!1}))}}},o=s("KHd+"),l=Object(o.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("auth-layout",{attrs:{title:"Reset Password"}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"px-10 py-12"},[s("h1",{staticClass:"text-center font-bold text-3xl"},[t._v("Reset Password")]),t._v(" "),t.status?s("div",{staticClass:"bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mt-6",attrs:{role:"alert"}},[s("p",[t._v(t._s(t.status))])]):t._e(),t._v(" "),s("text-input",{staticClass:"mt-10",attrs:{label:"Email",errors:t.errors.email,type:"email",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),s("div",{staticClass:"px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center"},[s("loading-button",{staticClass:"btn-green",attrs:{loading:t.sending,type:"submit"}},[t._v("Send Password Reset Link")])],1)])])}),[],!1,null,null,null);e.default=l.exports},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,i,r,a,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),n&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}s.d(e,"a",(function(){return n}))},WKAJ:function(t,e,s){"use strict";var n={props:{title:String},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.$page.app.name):this.$page.app.name}}},i=s("KHd+"),r=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-6 bg-green-700 min-h-screen flex justify-center items-center"},[e("div",{staticClass:"w-full max-w-sm"},[this.$slots.heading?e("div",{staticClass:"block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold"},[this._t("heading")],2):this._e(),this._v(" "),e("div",{staticClass:"mt-8 bg-white rounded-lg shadow-lg overflow-hidden"},[this._t("default")],2)])])}),[],!1,null,null,null);e.a=r.exports},Z84v:function(t,e,s){"use strict";var n={props:{loading:Boolean}},i=s("KHd+"),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"flex items-center",class:{"is-loading":this.loading},attrs:{disabled:this.loading}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},"pF+r":function(t,e,s){"use strict";var n={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},i=s("KHd+"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?s("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=r.exports}}]);