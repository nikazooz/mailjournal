(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-vue */ "./node_modules/inertia-vue/src/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
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
    InertiaLink: inertia_vue__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"],
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Entry #" + _vm.entry.id } }, [
    _c(
      "h1",
      { staticClass: "mb-8 font-bold text-3xl" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "text-green-400 hover:text-green-600",
            attrs: { href: _vm.route("questions") }
          },
          [_vm._v("Questions")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "text-green-400 font-medium" }, [
          _vm._v("/")
        ]),
        _vm._v(" "),
        _c(
          "inertia-link",
          {
            staticClass: "text-green-400 hover:text-green-600",
            attrs: { href: _vm.route("questions.show", _vm.entry.question_id) }
          },
          [_vm._v(_vm._s(_vm.entry.question_id))]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "text-green-400 font-medium" }, [
          _vm._v("/")
        ]),
        _vm._v("\n    Entries\n    "),
        _c("span", { staticClass: "text-green-400 font-medium" }, [
          _vm._v("/")
        ]),
        _vm._v("\n    " + _vm._s(_vm.entry.id) + "\n  ")
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "bg-white rounded shadow overflow-hidden max-w-lg" },
      [
        _c("div", { staticClass: "p-8 flex flex-wrap" }, [
          _c("div", { staticClass: "mb-8 w-full" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "message" } },
              [_vm._v("Sent At:")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",
                attrs: { id: "message" }
              },
              [
                _vm._v(
                  _vm._s(_vm._f("formatDatetime")(_vm.entry.question_sent_at))
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-8 w-full" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "message" } },
              [_vm._v("Replied At:")]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "py-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative",
                attrs: { id: "message" }
              },
              [_vm._v(_vm._s(_vm._f("formatDatetime")(_vm.entry.replied_at)))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-full" }, [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "timezone" } },
              [_vm._v("Reply:")]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass:
                "p-2 leading-normal block w-full text-gray-700 bg-white font-sans text-left appearance-none relative border rounded",
              attrs: { id: "timezone" },
              domProps: { innerHTML: _vm._s(_vm.entry.reply) }
            })
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Entries/Show.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Entries/Show.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=05d06536& */ "./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Entries/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Entries/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=05d06536& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Entries/Show.vue?vue&type=template&id=05d06536&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_05d06536___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);