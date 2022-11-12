"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_profile_LogoutOtherBrowserSessionsForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['on']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ActionMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ActionMessage */ "./resources/js/components/ActionMessage.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['sessions'],
  data: function data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        password: ''
      })
    };
  },
  methods: {
    confirmLogout: function confirmLogout() {
      var _this = this;
      this.confirmingLogout = true;
      setTimeout(function () {
        var _this$$refs$password;
        return (_this$$refs$password = _this.$refs.password) === null || _this$$refs$password === void 0 ? void 0 : _this$$refs$password.focus();
      }, 250);
    },
    logoutOtherBrowserSessions: function logoutOtherBrowserSessions() {
      var _this2 = this;
      this.form["delete"](route('other-browser-sessions.destroy'), {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          return _this2.closeModal();
        },
        onError: function onError() {
          return _this2.$refs.password.focus();
        },
        onFinish: function onFinish() {
          return _this2.form.reset();
        }
      });
    },
    closeModal: function closeModal() {
      this.confirmingLogout = false;
      this.form.reset();
    }
  },
  components: {
    ActionMessage: _components_ActionMessage__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", [_c("transition", {
    attrs: {
      "leave-active-class": "transition ease-in duration-1000",
      "leave-class": "opacity-100",
      "leave-to-class": "opacity-0"
    }
  }, [_c("span", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.on,
      expression: "on"
    }],
    staticClass: "gray-text"
  }, [_vm._t("default")], 2)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-layout", {
    attrs: {
      row: "",
      wrap: ""
    },
    scopedSlots: _vm._u([{
      key: "content",
      fn: function fn() {
        return undefined;
      },
      proxy: true
    }])
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm6: ""
    }
  }, [_c("h3", [_vm._v("Browser Sessions")]), _vm._v(" "), _c("h5", [_vm._v("Manage and logout your active sessions on other browsers and devices.")])]), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      sm6: ""
    }
  }, [_c("v-card", {
    staticClass: "pa-3"
  }, [_c("div", {
    staticClass: "max-w-xl text-sm text-gray-600"
  }, [_vm._v("\n        If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.\n      ")]), _vm._v(" "), _vm.sessions.length > 0 ? _c("div", {
    staticClass: "mt-5 space-y-6"
  }, _vm._l(_vm.sessions, function (session, i) {
    return _c("div", {
      key: i,
      staticClass: "flex items-center"
    }, [_c("div", [session.agent.is_desktop ? _c("v-icon", [_vm._v("mdi-laptop")]) : _vm._e()], 1), _vm._v(" "), _c("div", {
      staticClass: "ml-3"
    }, [_c("div", {
      staticClass: "text-sm text-gray-600"
    }, [_vm._v("\n              " + _vm._s(session.agent.platform) + " - " + _vm._s(session.agent.browser) + "\n            ")]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "text-xs text-gray-500"
    }, [_vm._v("\n                " + _vm._s(session.ip_address) + ",\n\n                "), session.is_current_device ? _c("span", {
      staticClass: "text-green-500 font-semibold"
    }, [_vm._v("This device")]) : _c("span", [_vm._v("Last active " + _vm._s(session.last_active))])])])])]);
  }), 0) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "flex items-center mt-5"
  }, [_c("v-btn", {
    nativeOn: {
      click: function click($event) {
        return _vm.confirmLogout.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Logout Other Browser Sessions\n        ")]), _vm._v(" "), _c("ActionMessage", {
    staticClass: "ml-3",
    attrs: {
      on: _vm.form.recentlySuccessful
    }
  }, [_vm._v("\n          Done.\n        ")])], 1), _vm._v(" "), _c("v-dialog", {
    on: {
      close: _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v("\n          Logout Other Browser Sessions\n        ")];
      },
      proxy: true
    }, {
      key: "content",
      fn: function fn() {
        return [_vm._v("\n          Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices.\n\n          "), _c("div", {
          staticClass: "mt-4"
        }, [_c("v-text-field", {
          ref: "current_password",
          attrs: {
            "error-messages": _vm.form.errors.password,
            label: "Password",
            type: "password",
            autocomplete: "password"
          },
          nativeOn: {
            keyup: function keyup($event) {
              if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
              return _vm.logoutOtherBrowserSessions.apply(null, arguments);
            }
          },
          model: {
            value: _vm.form.password,
            callback: function callback($$v) {
              _vm.$set(_vm.form, "password", $$v);
            },
            expression: "form.password"
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("v-btn", {
          nativeOn: {
            click: function click($event) {
              return _vm.closeModal.apply(null, arguments);
            }
          }
        }, [_vm._v("\n            Nevermind\n          ")]), _vm._v(" "), _c("v-btn", {
          nativeOn: {
            click: function click($event) {
              return _vm.logoutOtherBrowserSessions.apply(null, arguments);
            }
          }
        }, [_vm._v("\n            Logout Other Browser Sessions\n          ")])];
      },
      proxy: true
    }]),
    model: {
      value: _vm.confirmingLogout,
      callback: function callback($$v) {
        _vm.confirmingLogout = $$v;
      },
      expression: "confirmingLogout"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/ActionMessage.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/ActionMessage.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionMessage.vue?vue&type=template&id=00580c16& */ "./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16&");
/* harmony import */ var _ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionMessage.vue?vue&type=script&lang=js& */ "./resources/js/components/ActionMessage.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ActionMessage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c& */ "./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c&");
/* harmony import */ var _LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ActionMessage.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/ActionMessage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionMessage_vue_vue_type_template_id_00580c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionMessage.vue?vue&type=template&id=00580c16& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ActionMessage.vue?vue&type=template&id=00580c16&");


/***/ }),

/***/ "./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LogoutOtherBrowserSessionsForm_vue_vue_type_template_id_d2ab3f9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/LogoutOtherBrowserSessionsForm.vue?vue&type=template&id=d2ab3f9c&");


/***/ })

}]);