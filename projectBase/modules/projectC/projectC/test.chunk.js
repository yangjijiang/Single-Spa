(window["webpackJsonpprojectC"] = window["webpackJsonpprojectC"] || []).push([[3],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Test.vue?vue&type=template&id=dc87507c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [_vm._v("四: api异步请求隔离")]),
    _vm._v(" "),
    _c("h1", [
      _vm._v(
        "Vue AppB Test.vue--" +
          _vm._s(_vm.msg) +
          "--AppBApi: " +
          _vm._s(_vm.appData)
      )
    ]),
    _vm._v(" "),
    _c("button", { on: { click: _vm.getApp } }, [_vm._v("提交")])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Test.vue?vue&type=template&id=dc87507c&

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(19);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/service/serverApi.js


//require('./mockApi')


axios_default.a.interceptors.request.use(function (config) {
    // const token = sessionStorage.token
    // if (token) {
    //     config.headers.common['Authorization'] = `Bearer ${sessionStorage.token}`
    // }
    // //根据vuex store内容动态设置baseurl
    // config.baseURL = store.getters.baseUrl

    console.log("=BBBB==axios.interceptors==",config);
    return config
}, function (error) {
    console.log("==BBB=&********=",error);
    // 对请求错误做些什么
    return Promise.reject(error)
})


const app1Api = () => axios_default.a.get("/passport")


// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/Test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//



/* harmony default export */ var Testvue_type_script_lang_js_ = ({
    data() {
        return {
            msg: 'test hello world!!!',
            appData: null
        }
    },
    methods: {
        getApp() {
            app1Api().then(response => {
                this.appData = response.data
            })
        }
    },
    mounted() {
        this.getApp()
    }
});

// CONCATENATED MODULE: ./src/components/Test.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Testvue_type_script_lang_js_ = (Testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./src/components/Test.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/Test.vue"
/* harmony default export */ var Test = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);