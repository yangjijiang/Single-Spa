//module.exports = [
window.$SYS_PROJECT_CONFIG = [
    // 远程模块
    {
        "name": "projectBase",
        "main": "http://localhost:8088/projectBase/index.js",
        "base": true
    },
    {
        "name": "projectA",
        "main": "http://localhost:8081/projectA/index.js"
    },
    {
        "name": "projectC",
        "main": "http://localhost:8082/projectC/index.js"
    },

    // 本地模块
    // {
    //     "name": "projectBase",
    //     //"main": "./projectBase/index.js",
    //     "main": "http://localhost:8080/projectBase/index.js",
    //     "base": true
    // },
    // {
    //     "name": "projectA",
    //     "main": "../modules/projectA/index.js",
    // },
    // {
    //     "name": "projectC",
    //     "main": "../modules/projectC/index.js"
    // }


    // 本地+远程模块
    // {
    //     "name": "projectBase",
    //     "main": "http://localhost:8080/index.js",
    //     "base": true
    // },
    // {
    //     "name": "projectA",
    //     "main": "../modules/projectA/index.js",
    // },
    // {
    //     "name": "projectC",
    //     "main": "http://localhost:8082/projectC/index.js"
    // }
]