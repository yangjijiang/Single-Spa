const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseConfig, {
    output: {
        // publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        host:'localhost',
        port:8081,
        proxy: {
            '**' : {
                //target: `http://localhost:8088`,
                target: 'https://www.fastmock.site/mock/fff42ff666b9a968bbf224163d67d9b5',
                bypass: function(req, res, proxyOptions) {
                    if (!req.headers.accept || req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html'
                    }
                },
                changeOrigin: true,
                secure: false,
                logLevel:'info'
            }
        },
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
    module: {
        rules: [
        ]
    },
    plugins: [
    ]
});
