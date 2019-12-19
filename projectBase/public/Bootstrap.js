import 'systemjs/dist/system'
import * as singleSpa from 'single-spa'
import {loaderApp,loadjs} from './Loader'
import {registerApp} from './Register'




async function bootstrap() {
    // 文件为所有模块的配置集合
    //let projectConfig = await System.import('./project.config.js')
    //console.log("-----projectConfig----",projectConfig)

    const projectConfig = await new Promise((resolve, reject) => {
        loadjs(`${process.env.NODE_ENV==="development"?"/projectBase":""}/project.config.js`, {
            success: () => {
              resolve({ default: window['$SYS_PROJECT_CONFIG'] })
            },
            error: () => {
                reject(null)
            }
        })
    })

    // 并发加载与并注册所有模块
    Promise.all(projectConfig.default.map(x => loaderApp(x))).then(modules => {
        modules.forEach(response => {
            if (response && response.default) {
                let element = response.default
                registerApp({
                    name: element.name,
                    path: element.path,
                    main: Promise.resolve(response),
                    base: element.base,
                    store: element.store,
                    // url: element.prefix,
                })
            }
        })
    })

    // 项目启动
    singleSpa.start();
}


bootstrap()
