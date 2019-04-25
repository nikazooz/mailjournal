(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1PdU":function(t,e,s){"use strict";s.r(e);var r=s("WKAJ"),n=s("Z84v"),a=s("pF+r"),i={components:{AuthLayout:r.a,LoadingButton:n.a,TextInput:a.a},props:{errors:Object},inject:["page"],data:function(){return{sending:!1,form:{email:null,password:null,remember:null}}},computed:{appName:function(){return this.page.props.app.name}},methods:{submit:function(){var t=this;this.sending=!0,this.$inertia.post(this.route("login"),this.form).then(function(){t.sending=!1})}}},o=s("KHd+"),l=Object(o.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("auth-layout",{attrs:{title:"Login"}},[s("div",{staticClass:"block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold",attrs:{scope:"heading"}},[t._v(t._s(t.appName))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"px-10 py-12"},[s("h1",{staticClass:"text-center font-bold text-3xl"},[t._v("Welcome Back!")]),t._v(" "),s("div",{staticClass:"mx-auto mt-6 w-24 border-b-2"}),t._v(" "),s("text-input",{staticClass:"mt-10",attrs:{type:"email",name:"email",label:"Email",errors:t.errors.email,autocapitalize:"off",autofocus:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("text-input",{staticClass:"mt-6",attrs:{type:"password",name:"password",label:"Password",errors:t.errors.password},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("label",{staticClass:"mt-6 select-none flex items-center",attrs:{for:"remember"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.remember,expression:"form.remember"}],staticClass:"mr-1",attrs:{id:"remember",type:"checkbox",name:"remember"},domProps:{checked:Array.isArray(t.form.remember)?t._i(t.form.remember,null)>-1:t.form.remember},on:{change:function(e){var s=t.form.remember,r=e.target,n=!!r.checked;if(Array.isArray(s)){var a=t._i(s,null);r.checked?a<0&&t.$set(t.form,"remember",s.concat([null])):a>-1&&t.$set(t.form,"remember",s.slice(0,a).concat(s.slice(a+1)))}else t.$set(t.form,"remember",n)}}}),t._v(" "),s("span",{staticClass:"text-sm"},[t._v("Remember Me")])])],1),t._v(" "),s("div",{staticClass:"px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-between items-center"},[s("inertia-link",{staticClass:"hover:underline",attrs:{tabindex:"-1",href:t.route("password.request")}},[t._v("Forget password?")]),t._v(" "),s("loading-button",{staticClass:"btn-green",attrs:{loading:t.sending,type:"submit"}},[t._v("Login")])],1)])])},[],!1,null,null,null);e.default=l.exports},"KHd+":function(t,e,s){"use strict";function r(t,e,s,r,n,a,i,o){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=s,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=l):n&&(l=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:t,options:c}}s.d(e,"a",function(){return r})},WKAJ:function(t,e,s){"use strict";var r={inject:["page"],props:{title:String},watch:{title:function(t){this.updatePageTitle(t)}},mounted:function(){this.updatePageTitle(this.title)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.page.props.app.name):this.page.props.app.name}}},n=s("KHd+"),a=Object(n.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-6 bg-green-700 min-h-screen flex justify-center items-center"},[e("div",{staticClass:"w-full max-w-sm"},[this.$slots.heading?e("div",{staticClass:"block mx-auto w-full max-w-xs text-white text-4xl text-center font-bold"},[this._t("heading")],2):this._e(),this._v(" "),e("div",{staticClass:"mt-8 bg-white rounded-lg shadow-lg overflow-hidden"},[this._t("default")],2)])])},[],!1,null,null,null);e.a=a.exports},Z84v:function(t,e,s){"use strict";var r={props:{loading:Boolean}},n=s("KHd+"),a=Object(n.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"flex items-center",class:{"is-loading":this.loading},attrs:{disabled:this.loading}},[this._t("default")],2)},[],!1,null,null,null);e.a=a.exports},"pF+r":function(t,e,s){"use strict";var r={inheritAttrs:!1,props:{id:{type:String,default:function(){return"text-input-".concat(this._uid)}},type:{type:String,default:"text"},value:String,label:String,errors:{type:Array,default:function(){return[]}}},methods:{focus:function(){this.$refs.input.focus()},select:function(){this.$refs.input.select()},setSelectionRange:function(t,e){this.$refs.input.setSelectionRange(t,e)}}},n=s("KHd+"),a=Object(n.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label",attrs:{for:t.id}},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("input",t._b({ref:"input",staticClass:"form-input",class:{error:t.errors.length},attrs:{id:t.id,type:t.type},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}},"input",t.$attrs,!1)),t._v(" "),t.errors.length?s("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])},[],!1,null,null,null);e.a=a.exports}}]);