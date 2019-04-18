(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-vue */ "./node_modules/inertia-vue/src/index.js");
/* harmony import */ var _Utils_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Utils/Form */ "./resources/js/Utils/Form.js");
/* harmony import */ var _Shared_AuthLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/AuthLayout */ "./resources/js/Shared/AuthLayout.vue");
/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/LoadingButton */ "./resources/js/Shared/LoadingButton.vue");
/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/TextInput */ "./resources/js/Shared/TextInput.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AuthLayout: _Shared_AuthLayout__WEBPACK_IMPORTED_MODULE_2__["default"],
    LoadingButton: _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    TextInput: _Shared_TextInput__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    token: String,
    email: String
  },
  inject: ['page'],
  data: function data() {
    return {
      form: new _Utils_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        email: null,
        password: null,
        password_confirmation: null,
        token: this.token
      })
    };
  },
  watch: {
    token: function token(value) {
      this.form.fields.token = value;
    }
  },
  methods: {
    submit: function submit() {
      this.status = null;
      this.form.post({
        url: this.route('password.update').url(),
        then: function then(response) {
          return inertia_vue__WEBPACK_IMPORTED_MODULE_0__["Inertia"].visit(response.redirectTo);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("auth-layout", { attrs: { title: "Reset Password" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
          }
        }
      },
      [
        _c(
          "div",
          { staticClass: "px-10 py-12" },
          [
            _c("h1", { staticClass: "text-center font-bold text-3xl" }, [
              _vm._v("Reset Password")
            ]),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "mt-10",
              attrs: {
                label: "Email",
                error: _vm.form.errors.first("email"),
                type: "email",
                autofocus: "",
                autocapitalize: "off",
                required: ""
              },
              model: {
                value: _vm.form.fields.email,
                callback: function($$v) {
                  _vm.$set(_vm.form.fields, "email", $$v)
                },
                expression: "form.fields.email"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "mt-6",
              attrs: {
                label: "Password",
                error: _vm.form.errors.first("password"),
                type: "password",
                autocapitalize: "off",
                required: ""
              },
              model: {
                value: _vm.form.fields.password,
                callback: function($$v) {
                  _vm.$set(_vm.form.fields, "password", $$v)
                },
                expression: "form.fields.password"
              }
            }),
            _vm._v(" "),
            _c("text-input", {
              staticClass: "mt-6",
              attrs: {
                label: "Password Confirmation",
                error: _vm.form.errors.first("password_confirmation"),
                type: "password",
                autocapitalize: "off",
                required: ""
              },
              model: {
                value: _vm.form.fields.password_confirmation,
                callback: function($$v) {
                  _vm.$set(_vm.form.fields, "password_confirmation", $$v)
                },
                expression: "form.fields.password_confirmation"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "px-10 py-4 bg-gray-100 border-t border-gray-300 flex justify-end items-center"
          },
          [
            _c(
              "loading-button",
              {
                staticClass: "btn-green",
                attrs: { loading: _vm.form.sending, type: "submit" }
              },
              [_vm._v("Reset Password")]
            )
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/Reset.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/Reset.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reset.vue?vue&type=template&id=6fce07ba& */ "./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba&");
/* harmony import */ var _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reset.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Auth/Passwords/Reset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reset.vue?vue&type=template&id=6fce07ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Auth/Passwords/Reset.vue?vue&type=template&id=6fce07ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_template_id_6fce07ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);