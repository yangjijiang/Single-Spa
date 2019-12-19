import singleSpaVue from 'single-spa-vue'
import {Vue, AppOptions, project} from './common'
// import * as storeInstance from './globalStore' // 要抽出去

import axios from 'axios'
// api异步请求隔离
axios.defaults.baseURL = '/projectC';

const {el, ...appOptions} = AppOptions
const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: appOptions
})

export const bootstrap = (props) => {
    Vue.prototype.$reduxStore = props
    return vueLifecycles.bootstrap(props)
}
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount
export default {...project}