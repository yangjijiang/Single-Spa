(window["webpackJsonpprojectC"] = window["webpackJsonpprojectC"] || []).push([[2],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/nonedata.png";

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_2_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=template&id=469af010&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-color-red" }, [
    _c("hr"),
    _vm._v(" "),
    _c("div", [_vm._v("二：样式与静态资源（如：img）隔离")]),
    _vm._v(" "),
    _c("h1", { attrs: { id: "sdf" } }, [_vm._v("App B HelloWorld.vue")]),
    _vm._v(" "),
    _c("img", {
      staticStyle: { border: "2px solid red" },
      attrs: { src: __webpack_require__(40) }
    }),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("div", {}, [
      _vm._v(
        "三：消息总线（即：全模板之间通信）- 计数器：" + _vm._s(_vm.number)
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "btn-box" }, [
      _c(
        "button",
        { staticClass: "btn", on: { click: _vm.handleAddBtnClick } },
        [_vm._v(" + ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn", on: { click: _vm.handleMinusBtnClick } },
        [_vm._v(" - ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "btn-box" }, [
      _c(
        "button",
        { staticClass: "btn", on: { click: _vm.handleRemoveListenerBtnClick } },
        [_vm._v("打印监听")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=template&id=469af010&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/HelloWorld.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HelloWorldvue_type_script_lang_js_ = ({
    data(){
        return{
            number : 0,
        }
    },
    computed: {
        $globalStore(){
            return this.$reduxStore && this.$reduxStore.globalEventDistributor  // 全局派发器
        }
    },
    methods : {
        //计数器加一
        handleAddBtnClick(){
            this.$globalStore && this.$globalStore.dispatch({type: 'REFRESH_ADD'})
        },
        //计数器减一
        handleMinusBtnClick(){
            this.$globalStore && this.$globalStore.dispatch({type: 'REFRESH_MINUS'})
        },
        //取消打印事件监听
        handleRemoveListenerBtnClick(){
            this.number =  this.$globalStore && this.$globalStore.getState("projectA").render.refresh
        }
    },
    mounted() {
        this.handleRemoveListenerBtnClick()
    }
});

// CONCATENATED MODULE: ./src/components/HelloWorld.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HelloWorldvue_type_script_lang_js_ = (HelloWorldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/HelloWorld.vue?vue&type=style&index=0&lang=less&
var HelloWorldvue_type_style_index_0_lang_less_ = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/HelloWorld.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HelloWorldvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/HelloWorld.vue"
/* harmony default export */ var HelloWorld = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);