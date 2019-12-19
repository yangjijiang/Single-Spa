// import 'systemjs/dist/system'
import * as singleSpa from 'single-spa'
import {GlobalEventDistributor} from './GlobalEventDistributor'

const globalEventDistributor = new GlobalEventDistributor();

// hash 模式,项目路由用的是hash模式会用到该函数
// export function hashPrefix(app) {
//     return function (location) {
//         let isShow = false
//         //如果该应用 有多个需要匹配的路劲
//         if(Array.isArray(app.path)){
//             app.path.forEach(path => {
//                 if(location.hash.startsWith(`#${path}`)){
//                     isShow = true
//                 }
//             });
//         }
//         // 普通情况
//         else if(location.hash.startsWith(`#${app.path || app.url}`)){
//             isShow = true
//         }
//         return isShow;
//     }
// }

// pushState 模式
export function pathPrefix(app) {
    return function (location) {
        let isShow = false
        //如果该模块 有多个需要匹配的路径
        if (Array.isArray(app.path)) {
            app.path.forEach(path => {
                if (location.pathname.startsWith(`${path}`)) {
                    isShow = true
                }
            });
        }
        // 普通情况
        // else if(location.pathname.indexOf(`${app.path}`) === 0){
        else if (location.pathname.startsWith(`${app.path}`)) {
            isShow = true
        }
        return isShow;
    }
}

/**
 * 模块包装器（应用注册器）
 * @param params
 * @returns {Promise<void>}
 */
export function registerApp(params) {
    window.$REGISTER_SPA_MODULES_SUCCESS = window.$REGISTER_SPA_MODULES_SUCCESS || []
    try{
        // 导入派发器
        let storeModule = {}, customProps = {globalEventDistributor: globalEventDistributor};

        // 在这里,我们会用SystemJS来导入模块的对外输出的Store(后续会被称作模块对外API),统一挂载到消息总线上
        // storeModule = params.store ? await System.import(params.store) : {storeInstance: null};
        // storeModule = params.store ? await System.import('../../../app/src/globalStore.js') : {storeInstance: null};
        storeModule = params.store ? params.store : {storeInstance: null};

        // 注册应用于事件派发器
        if (storeModule.storeInstance && globalEventDistributor) {
            //取出 redux storeInstance
            customProps.store = storeModule.storeInstance;
            // 注册到全局
            globalEventDistributor.registerStore(storeModule.storeInstance);
        }

        //当与派发器一起组装成一个对象之后,在这里以这种形式传入每一个单独模块(store:自己模块的状态管理，globalEventDistributor：所有模块状态管理集合)
        customProps = {store: storeModule, globalEventDistributor: globalEventDistributor};

        // 在注册的时候传入 customProps
        singleSpa.registerApplication(params.name, () => params.main, params.base ? (() => true) : pathPrefix(params), customProps);

        window.$REGISTER_SPA_MODULES_SUCCESS.push(params.name)
    }catch (e) {
        console.warn("****App "+params.name+" register failure****")
    }
}