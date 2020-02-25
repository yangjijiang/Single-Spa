const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        publicPath: `/dist${project.prefix}`,
        path: path.join(__dirname, `./target/dist/${project.name}/`),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        rules: [
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: path.join(__dirname, `./target/index.html`),
            template: path.join(__dirname, './index.ejs'),
            inject: false
        })
    ]
});