"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_profile_DeleteUserForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      confirmingUserDeletion: false,
      form: this.$inertia.form({
        password: ''
      })
    };
  },
  methods: {
    confirmUserDeletion: function confirmUserDeletion() {
      var _this = this;
      this.confirmingUserDeletion = true;
      setTimeout(function () {
        return _this.$refs.password.focus();
      }, 250);
    },
    deleteUser: function deleteUser() {
      var _this2 = this;
      this.form["delete"](route('current-user.destroy'), {
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
      this.confirmingUserDeletion = false;
      this.form.reset();
    }
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-10",
    attrs: {
      row: "",
      wrap: ""
    }
  }, [_c("v-flex", {
    attrs: {
      xs12: "",
      sm6: ""
    }
  }, [_c("h3", [_vm._v("Delete Account")]), _vm._v(" "), _c("h5", [_vm._v("Permanently delete your account.")])]), _vm._v(" "), _c("v-flex", {
    attrs: {
      xs12: "",
      sm6: ""
    }
  }, [_c("v-card", {
    staticClass: "pa-3"
  }, [_c("div", [_vm._v("\n        Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("v-btn", {
    attrs: {
      color: "red",
      dark: ""
    },
    nativeOn: {
      click: function click($event) {
        return _vm.confirmUserDeletion.apply(null, arguments);
      }
    }
  }, [_vm._v("\n          Delete Account\n        ")])], 1), _vm._v(" "), _c("portal", {
    attrs: {
      to: "modals"
    }
  }, [_c("v-dialog", {
    on: {
      close: _vm.closeModal
    },
    model: {
      value: _vm.confirmingUserDeletion,
      callback: function callback($$v) {
        _vm.confirmingUserDeletion = $$v;
      },
      expression: "confirmingUserDeletion"
    }
  }, [_c("v-card", [_c("v-card-title", {
    staticClass: "text-h5"
  }, [_vm._v("\n              Delete Account?\n            ")]), _vm._v(" "), _c("v-card-text", [_vm._v("\n              Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.\n\n              "), _c("v-text-field", {
    ref: "password",
    attrs: {
      "error-messages": _vm.form.errors.password,
      label: "Password",
      type: "password",
      autocomplete: "password"
    },
    nativeOn: {
      keyup: function keyup($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return _vm.deleteUser.apply(null, arguments);
      }
    },
    model: {
      value: _vm.form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "password", $$v);
      },
      expression: "form.password"
    }
  })], 1), _vm._v(" "), _c("v-card-actions", [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    nativeOn: {
      click: function click($event) {
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                Nevermind\n              ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      color: "green darken-1",
      text: ""
    },
    nativeOn: {
      click: function click($event) {
        return _vm.deleteUser.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                Delete Account\n              ")])], 1)], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/profile/DeleteUserForm.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/profile/DeleteUserForm.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteUserForm.vue?vue&type=template&id=dff7602e& */ "./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e&");
/* harmony import */ var _DeleteUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteUserForm.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__.render,
  _DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/DeleteUserForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteUserForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUserForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DeleteUserForm_vue_vue_type_template_id_dff7602e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DeleteUserForm.vue?vue&type=template&id=dff7602e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/DeleteUserForm.vue?vue&type=template&id=dff7602e&");


/***/ })

}]);