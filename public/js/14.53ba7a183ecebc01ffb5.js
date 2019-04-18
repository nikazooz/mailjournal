(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-vue */ "./node_modules/inertia-vue/src/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Layout */ "./resources/js/Shared/Layout.vue");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");
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
    Layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    entries: Array,
    status: String
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { title: "Dashboard" } }, [
    _vm.status
      ? _c(
          "div",
          {
            staticClass:
              "bg-blue-100 border-l-4 border-blue-400 text-blue-700 p-4 mb-8",
            attrs: { role: "alert" }
          },
          [_c("p", [_vm._v(_vm._s(_vm.status))])]
        )
      : _vm._e(),
    _vm._v(" "),
    _c("h1", { staticClass: "mb-8 font-bold text-3xl" }, [_vm._v("Dashboard")]),
    _vm._v(" "),
    _c("p", { staticClass: "mb-12 leading-normal" }, [
      _vm._v(
        "Hey there! Welcome to MailJournal, an app that allows you to schedule questions and make a journal by responding to them."
      )
    ]),
    _vm._v(" "),
    _vm.entries.length
      ? _c("h2", { staticClass: "mb-8 font-bold text-3xl" }, [
          _vm._v("Latest Entries")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.entries.length
      ? _c(
          "div",
          { staticClass: "mt-6 bg-white rounded shadow overflow-x-auto" },
          [
            _c("table", { staticClass: "w-full whitespace-no-wrap" }, [
              _c("thead", [
                _c("tr", { staticClass: "text-left font-bold" }, [
                  _c("th", { staticClass: "px-6 pt-6 pb-4" }, [
                    _vm._v("Question Sent At")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "px-6 pt-6 pb-4" }, [
                    _vm._v("Question")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "px-6 pt-6 pb-4" }, [
                    _vm._v("Reply")
                  ]),
                  _vm._v(" "),
                  _c("th", { staticClass: "px-6 pt-6 pb-4" }, [
                    _vm._v("Replied At")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.entries, function(entry) {
                  return _c(
                    "tr",
                    {
                      staticClass: "hover:bg-gray-200 focus-within:bg-gray-200"
                    },
                    [
                      _c("td", { staticClass: "border-t px-6 py-4" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("formatDatetime")(entry.question_sent_at)
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border-t px-6 py-4" },
                        [
                          _c(
                            "inertia-link",
                            {
                              staticClass:
                                "text-blue-500 hover:text-blue-600 underline",
                              attrs: {
                                href: _vm.route(
                                  "questions.show",
                                  entry.question_id
                                )
                              }
                            },
                            [_vm._v(_vm._s(entry.question_message))]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", {
                        staticClass: "border-t px-6 py-4",
                        domProps: { innerHTML: _vm._s(entry.reply) }
                      }),
                      _vm._v(" "),
                      _c("td", { staticClass: "border-t px-6 py-4" }, [
                        _vm._v(
                          _vm._s(_vm._f("formatDatetime")(entry.replied_at))
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "border-t w-px" },
                        [
                          _c(
                            "inertia-link",
                            {
                              staticClass: "px-6 py-4 flex items-center",
                              attrs: {
                                href: _vm.route("entries.show", entry.id),
                                tabindex: "-1"
                              }
                            },
                            [
                              _c("icon", {
                                staticClass: "block w-6 h-6 fill-gray-500",
                                attrs: { name: "cheveron-right" }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]
                  )
                }),
                0
              )
            ])
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=48cd2f5e& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=48cd2f5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard/Index.vue?vue&type=template&id=48cd2f5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_48cd2f5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);