(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7iAi":function(t,e,s){"use strict";s.r(e);var n={inject:["page"],watch:{code:function(){this.updatePageTitle(this.message)}},computed:{code:function(){return this.page.props.code},message:function(){return this.page.props.message}},mounted:function(){this.updatePageTitle(this.message)},methods:{updatePageTitle:function(t){document.title=t?"".concat(t," | ").concat(this.page.props.app.name):this.page.props.app.name}}},i=s("KHd+"),o=Object(i.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"error-page"},[e("div",{staticClass:"code"},[this._v(this._s(this.code))]),this._v(" "),e("div",{staticClass:"message"},[this._v(this._s(this.message))])])},[],!1,null,null,null);e.default=o.exports},"KHd+":function(t,e,s){"use strict";function n(t,e,s,n,i,o,a,r){var c,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=s,p._compiled=!0),n&&(p.functional=!0),o&&(p._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=c):i&&(c=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(p.functional){p._injectStyles=c;var d=p.render;p.render=function(t,e){return c.call(e),d(t,e)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:p}}s.d(e,"a",function(){return n})}}]);