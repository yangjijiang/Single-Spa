import loadjs from "loadjs";

/**
 * 模块加载器
 * @param module
 * @returns {Promise<any | never>}
 */
export function loaderApp(module) {
    window.$LOADER_SPA_MODULES = window.$LOADER_SPA_MODULES || []
    return new Promise((resolve, reject) => {
        loadjs([module.main, module.main.replace(".js",".css")], {
            success: () => {
                if (window[module.name].default) {
                    // 记录加载成功的模块
                    Object.assign(window[module.name].default, {loaderStat: 1}, module)
                    window.$LOADER_SPA_MODULES.push(window[module.name].default)
                    resolve(window[module.name])
                } else {
                    // 记录加载失败的模块
                    Object.assign(window[module.name].default, {loaderStat: 0}, module)
                    window.$LOADER_SPA_MODULES.push(window[module.name].default)
                    reject('SPA_MODULES_FAILURE')
                }
            },
            error: (e) => {
                console.warn("==error==", e);
                // 记录加载失败的模块
                Object.assign(module, {loaderStat: 0}, module)
                window.$LOADER_SPA_MODULES.push(module)
                reject(e)
            }
        })
    }).then(response => {
        return response
    }).catch(err => {
        return err
    })
}

export { loadjs }
