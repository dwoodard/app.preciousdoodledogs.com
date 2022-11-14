"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Home_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {},
  data: function data() {
    return {
      drawerSort: false,
      drawerFilter: false,
      dialogSelectedDog: false,
      scrollInvoked: 0,
      search: '',
      selectedDog: null,
      sortPrice: null,
      sortPosted: null,
      sortPostedItems: [{
        text: 'Posted: Newest',
        value: 'newest'
      }, {
        text: 'Posted: Oldest',
        value: 'oldest'
      }],
      sortPriceItems: [{
        text: 'Price: Low to High',
        value: 'priceLow'
      }, {
        text: 'Price: High to Low',
        value: 'priceHigh'
      }],
      sortAge: null,
      sortAgeItems: [{
        text: 'Age: Youngest',
        value: 'ageYoung'
      }, {
        text: 'Age: Oldest',
        value: 'ageOld'
      }],
      // Filter
      filterType: null,
      filterTypeItems: ['puppy', 'stud'],
      filterBreed: null,
      filterBreedItems: ['labradoodle', 'goldendoodle'],
      filterAge: null,
      filterGender: null,
      filterGenderItems: ['male', 'female'],
      filterSize: null,
      filterSizeItems: ['teacup', 'toy', 'mini'],
      filterPriceLow: null,
      filterPriceHigh: null,
      dogs: [{
        name: 'Fido',
        breed: 'labradoodle',
        description: 'Fido is a Labradoodle. He is a very good boy!',
        age: 3,
        images: ['https://images.dog.ceo/breeds/labradoodle/labradoodle-forrest.png', 'https://images.dog.ceo/breeds/labradoodle/Cali.jpeg', 'https://images.dog.ceo/breeds/labradoodle/lola.jpg', 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2678.jpg', 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_683.jpg']
      }]
    };
  },
  methods: {
    selectDog: function selectDog(dog) {
      this.selectedDog = dog;
      this.dialogSelectedDog = true;
    },
    toggleFavorite: function toggleFavorite(dog) {
      dog.favorite = !dog.favorite;
    },
    clearSort: function clearSort() {
      this.sortPrice = null;
      this.sortPosted = null;
      this.sortAge = null;
    },
    clearFilter: function clearFilter() {
      this.filterType = null;
      this.filterBreed = null;
      this.filterAge = null;
      this.filterGender = null;
      this.filterSize = null;
      this.filterPriceLow = null;
      this.filterPriceHigh = null;
    },
    onScroll: function onScroll() {
      this.scrollInvoked++;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true& ***!
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
  return _c("v-main", {
    staticClass: "pa-0 ma-0"
  }, [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-toolbar", [_c("v-text-field", {
    attrs: {
      "append-icon": "mdi-magnify",
      label: "Search",
      "single-line": "",
      "hide-details": "",
      clearable: ""
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.drawerSort = !_vm.drawerSort;
      }
    }
  }, [_vm._v(" Sort ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.drawerFilter = !_vm.drawerFilter;
      }
    }
  }, [_vm._v(" Filter ")])], 1), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }],
    staticClass: "overflow-y-auto",
    attrs: {
      "max-height": "100%"
    }
  }, [_c("v-card-text", _vm._l(_vm.dogs, function (dog, i) {
    return _c("div", {
      key: i,
      staticClass: "mb-4"
    }, [_c("v-card", [_c("v-card-text", [_c("v-row", [_c("v-col", {
      attrs: {
        cols: "12",
        sm: "4",
        md: "3"
      }
    }, [_c("v-icon", {
      attrs: {
        color: "red"
      },
      on: {
        click: function click($event) {
          return _vm.toggleFavorite(dog);
        }
      }
    }, [_vm._v("mdi-heart-outline")]), _vm._v(" "), _c("v-img", {
      attrs: {
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        "aspect-ratio": "1.75",
        contain: ""
      },
      on: {
        click: function click($event) {
          return _vm.selectDog(dog);
        }
      }
    })], 1), _vm._v(" "), _c("v-col", {
      attrs: {
        cols: "12",
        sm: "8",
        md: "9"
      }
    }, [_c("div", [_vm._v(_vm._s(dog.name) + " " + _vm._s(i))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(dog.breed))]), _vm._v(" "), _c("div", [_vm._v("\n                    " + _vm._s(dog.description) + "\n                  ")])])], 1)], 1)], 1)], 1);
  }), 0)], 1)], 1), _vm._v(" "), _c("div", {
    attrs: {
      id: "drawers"
    }
  }, [_c("v-navigation-drawer", {
    attrs: {
      absolute: "",
      temporary: "",
      app: ""
    },
    scopedSlots: _vm._u([{
      key: "prepend",
      fn: function fn() {
        return [_c("v-list-item", {
          attrs: {
            "two-line": ""
          }
        }, [_c("v-list-item-content", [_c("v-list-item-title", [_vm._v("Sort")])], 1)], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.drawerSort,
      callback: function callback($$v) {
        _vm.drawerSort = $$v;
      },
      expression: "drawerSort"
    }
  }, [_vm._v(" "), _c("v-list", [_c("v-list-item-group", [_c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.sortPriceItems,
      label: "Sort Price",
      outlined: "",
      dense: "",
      "hide-details": ""
    },
    model: {
      value: _vm.sortPrice,
      callback: function callback($$v) {
        _vm.sortPrice = $$v;
      },
      expression: "sortPrice"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list-item-group", [_c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.sortPostedItems,
      label: "Sort Posted",
      outlined: "",
      dense: "",
      "hide-details": ""
    },
    model: {
      value: _vm.sortPosted,
      callback: function callback($$v) {
        _vm.sortPosted = $$v;
      },
      expression: "sortPosted"
    }
  })], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list-item-group", [_c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.sortAgeItems,
      label: "Sort Age",
      outlined: "",
      dense: "",
      "hide-details": ""
    },
    model: {
      value: _vm.sortAge,
      callback: function callback($$v) {
        _vm.sortAge = $$v;
      },
      expression: "sortAge"
    }
  })], 1)], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list-item", [_c("v-list-item-content", [_c("v-list-item-title", [_vm._v("Clear Sort")])], 1), _vm._v(" "), _c("v-list-item-action", [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        return _vm.clearSort();
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-refresh")])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-navigation-drawer", {
    attrs: {
      absolute: "",
      temporary: "",
      right: ""
    },
    scopedSlots: _vm._u([{
      key: "prepend",
      fn: function fn() {
        return [_c("v-list-item", {
          attrs: {
            "two-line": ""
          }
        }, [_c("v-list-item-content", [_c("v-list-item-title", [_vm._v("Filter Dogs")]), _vm._v(" "), _c("v-list-item-subtitle", [_vm._v("Total Dogs: " + _vm._s(_vm.dogs.length) + " / " + _vm._s(_vm.dogs.length))])], 1)], 1)];
      },
      proxy: true
    }]),
    model: {
      value: _vm.drawerFilter,
      callback: function callback($$v) {
        _vm.drawerFilter = $$v;
      },
      expression: "drawerFilter"
    }
  }, [_vm._v(" "), _c("v-list", [_c("v-list-item", [_c("v-text-field", {
    attrs: {
      label: "Low",
      type: "tel",
      min: "0",
      max: "5000",
      "hide-details": "",
      "prepend-icon": "mdi-currency-usd"
    },
    model: {
      value: _vm.filterPriceLow,
      callback: function callback($$v) {
        _vm.filterPriceLow = $$v;
      },
      expression: "filterPriceLow"
    }
  }), _vm._v(" "), _c("v-text-field", {
    attrs: {
      label: "High",
      type: "tel",
      min: "0",
      max: "5000",
      "hide-details": "",
      "prepend-icon": "mdi-currency-usd"
    },
    model: {
      value: _vm.filterPriceHigh,
      callback: function callback($$v) {
        _vm.filterPriceHigh = $$v;
      },
      expression: "filterPriceHigh"
    }
  })], 1), _vm._v(" "), _c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.filterTypeItems,
      label: "Type",
      "hide-details": ""
    },
    model: {
      value: _vm.filterType,
      callback: function callback($$v) {
        _vm.filterType = $$v;
      },
      expression: "filterType"
    }
  })], 1), _vm._v(" "), _c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.filterBreedItems,
      label: "Breed",
      chips: "",
      multiple: "",
      "hide-details": "",
      "prepend-icon": "mdi-dog"
    },
    model: {
      value: _vm.filterBreed,
      callback: function callback($$v) {
        _vm.filterBreed = $$v;
      },
      expression: "filterBreed"
    }
  })], 1), _vm._v(" "), _c("v-list-item", [_c("v-text-field", {
    attrs: {
      label: "Age",
      type: "tel",
      min: "0",
      max: "5000",
      "hide-details": "",
      "prepend-icon": "mdi-calendar"
    },
    model: {
      value: _vm.filterAge,
      callback: function callback($$v) {
        _vm.filterAge = $$v;
      },
      expression: "filterAge"
    }
  })], 1), _vm._v(" "), _c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.filterGenderItems,
      label: "Gender"
    },
    model: {
      value: _vm.filterGender,
      callback: function callback($$v) {
        _vm.filterGender = $$v;
      },
      expression: "filterGender"
    }
  })], 1), _vm._v(" "), _c("v-list-item", [_c("v-select", {
    attrs: {
      items: _vm.filterSizeItems,
      label: "Size",
      multiple: "",
      "hide-details": ""
    },
    model: {
      value: _vm.filterSize,
      callback: function callback($$v) {
        _vm.filterSize = $$v;
      },
      expression: "filterSize"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("v-list-item", [_c("v-list-item-content", [_c("v-list-item-title", [_vm._v("Clear Filter")])], 1), _vm._v(" "), _c("v-list-item-action", [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        return _vm.clearFilter();
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-refresh")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
    attrs: {
      "hide-overlay": "",
      scrollable: "",
      fullscreen: "",
      transition: "dialog-bottom-transition"
    },
    model: {
      value: _vm.dialogSelectedDog,
      callback: function callback($$v) {
        _vm.dialogSelectedDog = $$v;
      },
      expression: "dialogSelectedDog"
    }
  }, [_vm.selectedDog ? _c("v-card", {
    directives: [{
      name: "touch",
      rawName: "v-touch",
      value: {
        down: function down() {
          return _vm.dialogSelectedDog = false;
        }
      },
      expression: "{ down: () => dialogSelectedDog = false }"
    }]
  }, [_c("v-card-text", [_c("v-toolbar", [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.dialogSelectedDog = false;
      }
    }
  }, [_c("v-icon", [_vm._v("mdi-close")])], 1), _vm._v(" "), _c("v-toolbar-title", [_vm._v(_vm._s(_vm.selectedDog.name))])], 1), _vm._v(" "), _c("v-carousel", {
    attrs: {
      "hide-delimiters": ""
    },
    scopedSlots: _vm._u([{
      key: "controls",
      fn: function fn() {
        return [_vm._v("\n            test\n          ")];
      },
      proxy: true
    }], null, false, 4227830623)
  }, [_vm._v(" "), _vm._l(_vm.selectedDog.images, function (item, i) {
    return _c("v-carousel-item", {
      directives: [{
        name: "touch",
        rawName: "v-touch",
        value: {
          down: function down() {
            return _vm.dialogSelectedDog = false;
          }
        },
        expression: "{ down: () => dialogSelectedDog = false }"
      }],
      key: i
    }, [_c("v-img", {
      attrs: {
        src: item,
        "aspect-ratio": "1.75"
      }
    })], 1);
  })], 2), _vm._v(" "), _c("v-card", {
    staticClass: "mx-auto mt-n4",
    attrs: {
      "max-width": "500"
    }
  }, [_c("v-card-text", [_vm._v("\n            " + _vm._s(_vm.selectedDog.description) + "\n          ")])], 1)], 1)], 1) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/Home/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Home/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=033fb0eb&scoped=true& */ "./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "033fb0eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Home/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_033fb0eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=033fb0eb&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Home/index.vue?vue&type=template&id=033fb0eb&scoped=true&");


/***/ })

}]);