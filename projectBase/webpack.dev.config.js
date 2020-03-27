const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * 模块整合的代理服务器配置
 */
module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    output: {
        // publicPath: '/',
        path: path.join(__dirname, `/`),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        host:'localhost',
        port:8088,
        proxy: {
            '/projectA':{
                target: `http://localhost:8081`,
                bypass: function(req, res, proxyOptions) {
                    if (!req.headers.accept || req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html' //当前8088服务器首页
                    }
                },
                // changeOrigin: true,
                // secure: false,
                // logLevel:'info',
                pathRewrite: {"^/projectA/test" : "/test"}
            },
            '/projectC':{
                target: `http://localhost:8082`,
                bypass: function(req, res, proxyOptions) {
                    if (!req.headers.accept || req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html'
                    }
                },
                pathRewrite: {"^/projectC/passport" : "/passport"}
            }
        }
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: path.join(__dirname,'./public/project.config.js'), to:  path.join(__dirname, `project.config.js`) },
        ])
    ]
});
