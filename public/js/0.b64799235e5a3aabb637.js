(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
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
  props: {
    placement: {
      type: String,
      "default": 'bottom-end'
    },
    boundary: {
      type: String,
      "default": 'scrollParent'
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  watch: {
    show: function show(_show) {
      var _this = this;

      if (_show) {
        this.$nextTick(function () {
          _this.popper = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](_this.$el, _this.$refs.dropdown, {
            placement: _this.placement,
            modifiers: {
              preventOverflow: {
                boundariesElement: _this.boundary
              }
            }
          });
        });
      } else if (this.popper) {
        setTimeout(function () {
          return _this.popper.destroy();
        }, 100);
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    document.addEventListener('keydown', function (e) {
      if (e.keyCode === 27) {
        _this2.close();
      }
    });
  },
  methods: {
    close: function close() {
      this.show = false;
    },
    toggle: function toggle() {
      this.show = !this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Icon.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Icon.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-vue */ "./node_modules/inertia-vue/src/index.js");
/* harmony import */ var _Shared_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Dropdown */ "./resources/js/Shared/Dropdown.vue");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");
/* harmony import */ var _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Shared/MainMenu */ "./resources/js/Shared/MainMenu.vue");
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
    Dropdown: _Shared_Dropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_2__["default"],
    MainMenu: _Shared_MainMenu__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  inject: ['page'],
  props: {
    title: String
  },
  data: function data() {
    return {
      showUserMenu: false,
      accounts: null
    };
  },
  watch: {
    title: function title(_title) {
      this.updatePageTitle(_title);
    }
  },
  mounted: function mounted() {
    this.updatePageTitle(this.title);
  },
  methods: {
    updatePageTitle: function updatePageTitle(title) {
      document.title = title ? "".concat(title, " | ").concat(this.page.props.app.name) : this.page.props.app.name;
    },
    hideDropdownMenus: function hideDropdownMenus() {
      this.showUserMenu = false;
    },
    logout: function logout() {
      Inertia.visit(route('logout'), {
        method: 'post'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inertia-vue */ "./node_modules/inertia-vue/src/index.js");
/* harmony import */ var _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Shared/Icon */ "./resources/js/Shared/Icon.vue");
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
    Icon: _Shared_Icon__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    isUrl: function isUrl() {
      for (var _len = arguments.length, urls = new Array(_len), _key = 0; _key < _len; _key++) {
        urls[_key] = arguments[_key];
      }

      if (urls[0] === '') {
        return location.pathname.substr(1) === '';
      }

      return urls.filter(function (url) {
        return location.pathname.substr(1).startsWith(url);
      }).length;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    { attrs: { type: "button" }, on: { click: _vm.toggle } },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.show
        ? _c("portal", { attrs: { to: "dropdown" } }, [
            _c("div", [
              _c("div", {
                staticStyle: {
                  position: "fixed",
                  top: "0",
                  right: "0",
                  left: "0",
                  bottom: "0",
                  "z-index": "99998"
                },
                on: { click: _vm.toggle }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  ref: "dropdown",
                  staticStyle: { position: "absolute", "z-index": "99999" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                    }
                  }
                },
                [_vm._t("dropdown")],
                2
              )
            ])
          ])
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355& ***!
  \***************************************************************************************************************************************************************************************************/
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
  return _vm.name === "apple"
    ? _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
          }
        },
        [
          _c("g", { attrs: { "fill-rule": "nonzero" } }, [
            _c("path", {
              attrs: {
                d:
                  "M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"
              }
            })
          ])
        ]
      )
    : _vm.name === "book"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"
            }
          })
        ]
      )
    : _vm.name === "cheveron-down"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            }
          })
        ]
      )
    : _vm.name === "cheveron-right"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("polygon", {
            attrs: {
              points:
                "12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
            }
          })
        ]
      )
    : _vm.name === "dashboard"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
            }
          })
        ]
      )
    : _vm.name === "location"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            }
          })
        ]
      )
    : _vm.name === "office"
    ? _c(
        "svg",
        {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100",
            height: "100",
            viewBox: "0 0 100 100"
          }
        },
        [
          _c("path", {
            attrs: {
              "fill-rule": "evenodd",
              d:
                "M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"
            }
          })
        ]
      )
    : _vm.name === "printer"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"
            }
          })
        ]
      )
    : _vm.name === "shopping-cart"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            }
          })
        ]
      )
    : _vm.name === "store-front"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"
            }
          })
        ]
      )
    : _vm.name === "trash"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
            }
          })
        ]
      )
    : _vm.name === "users"
    ? _c(
        "svg",
        {
          attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20" }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
            }
          })
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("portal-target", { attrs: { name: "dropdown", slim: "" } }),
      _vm._v(" "),
      _c("div", { staticClass: "flex flex-col" }, [
        _c(
          "div",
          {
            staticClass: "min-h-screen flex flex-col",
            on: { click: _vm.hideDropdownMenus }
          },
          [
            _c("div", { staticClass: "md:flex" }, [
              _c(
                "div",
                {
                  staticClass:
                    "bg-green-800 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"
                },
                [
                  _c(
                    "inertia-link",
                    { staticClass: "mt-1", attrs: { href: "/" } },
                    [
                      _c(
                        "span",
                        { staticClass: "text-white text-xl font-extrabold" },
                        [_vm._v("MailJournal")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "dropdown",
                    {
                      staticClass: "md:hidden",
                      attrs: { placement: "bottom-end" }
                    },
                    [
                      _c(
                        "svg",
                        {
                          staticClass: "fill-white w-6 h-6",
                          attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-2 px-8 py-4 shadow-lg bg-green-700 rounded",
                          attrs: { slot: "dropdown" },
                          slot: "dropdown"
                        },
                        [_c("main-menu")],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-base flex justify-end items-center"
                },
                [
                  _c(
                    "dropdown",
                    { staticClass: "mt-1", attrs: { placement: "bottom-end" } },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex items-center cursor-pointer select-none group"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-gray-800 group-hover:text-green-600 focus:text-green-600 mr-1 whitespace-no-wrap"
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.page.props.auth.user.name))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("icon", {
                            staticClass:
                              "w-5 h-5 group-hover:fill-green-600 fill-gray-800 focus:fill-green-600",
                            attrs: { name: "cheveron-down" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-2 py-2 shadow bg-white rounded text-sm",
                          attrs: { slot: "dropdown" },
                          slot: "dropdown"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass:
                                "block px-6 py-2 hover:bg-green-500 hover:text-white",
                              on: { click: _vm.logout }
                            },
                            [_vm._v("Logout")]
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex flex-grow" }, [
              _c(
                "div",
                {
                  staticClass:
                    "bg-green-700 flex-shrink-0 w-56 p-12 hidden md:block"
                },
                [_c("main-menu")],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full overflow-hidden px-4 py-8 md:p-12" },
                [_vm._t("default")],
                2
              )
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.route("dashboard") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class: _vm.isUrl("dashboard")
                ? "fill-white"
                : "fill-green-400 group-hover:fill-white",
              attrs: { name: "dashboard" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class: _vm.isUrl("dashboard")
                  ? "text-white"
                  : "text-green-300 group-hover:text-white"
              },
              [_vm._v("Dashboard")]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mb-4" },
      [
        _c(
          "inertia-link",
          {
            staticClass: "flex items-center group py-3",
            attrs: { href: _vm.route("questions") }
          },
          [
            _c("icon", {
              staticClass: "w-4 h-4 mr-2",
              class:
                _vm.isUrl("questions") || _vm.isUrl("entries")
                  ? "fill-white"
                  : "fill-green-400 group-hover:fill-white",
              attrs: { name: "book" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                class:
                  _vm.isUrl("questions") || _vm.isUrl("entries")
                    ? "text-white"
                    : "text-green-300 group-hover:text-white"
              },
              [_vm._v("Questions")]
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Shared/Dropdown.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/Dropdown.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=77cb9ced& */ "./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Dropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dropdown.vue?vue&type=template&id=77cb9ced& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Dropdown.vue?vue&type=template&id=77cb9ced&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_77cb9ced___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/Icon.vue":
/*!**************************************!*\
  !*** ./resources/js/Shared/Icon.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon.vue?vue&type=template&id=75bd2355& */ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355&");
/* harmony import */ var _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355&":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Icon.vue?vue&type=template&id=75bd2355& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Icon.vue?vue&type=template&id=75bd2355&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_template_id_75bd2355___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/Layout.vue":
/*!****************************************!*\
  !*** ./resources/js/Shared/Layout.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=6bf30086& */ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=6bf30086& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/Layout.vue?vue&type=template&id=6bf30086&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_6bf30086___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue":
/*!******************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=template&id=fb328fd8& */ "./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&");
/* harmony import */ var _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainMenu.vue?vue&type=script&lang=js& */ "./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Shared/MainMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&":
/*!*************************************************************************!*\
  !*** ./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MainMenu.vue?vue&type=template&id=fb328fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Shared/MainMenu.vue?vue&type=template&id=fb328fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainMenu_vue_vue_type_template_id_fb328fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);