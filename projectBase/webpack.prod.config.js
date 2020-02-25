const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    output: {
        // publicPath: project.prefix,
        path: path.join(__dirname, `./target/${project.name}/`),
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
        }),
        new CopyWebpackPlugin([
            // { from: path.join(__dirname,'./modules'), to:  path.join(__dirname, 'target/modules'),toType: 'dir' },
            { from: path.join(__dirname,'./dist'), to:  path.join(__dirname, 'target/dist'),toType: 'dir' },
            { from: path.join(__dirname,'./public/project.config.js'), to:  path.join(__dirname, `target/project.config.js`) },
        ])
    ]
});