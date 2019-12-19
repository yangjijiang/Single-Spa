const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const project = require('./project')
const postcssrc = require("./postcssrc")({globalClsName: `#${project.name}`})

module.exports = {
    entry: {
        index: path.join(__dirname, './src/index.js'),
        bootstrap: path.join(__dirname, './public/Bootstrap.js')
    },
    output: {
        publicPath: project.prefix,
        library: project.name,
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [
                            postcssrc,
                            require('autoprefixer')
                        ]
                    }
                }]
            },
            {
                test: /\.less/,
                use: [MiniCssExtractPlugin.loader, "css-loader", {
                    loader: "postcss-loader",
                    options: {
                        plugins: () => [
                            postcssrc,
                            require('autoprefixer')
                        ]
                    }
                }, "less-loader"]
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    limit: 1024,
                    name: path.posix.join("", "images/[name].[ext]?[hash]")
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}],
                },
                canPrint: true
            })
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // filename: '[name].[contenthash:7].css', //main.css
            // chunkFilename: '[name].[contenthash:7].chunk.css',
            filename: '[name].css',
            chunkFilename: '[name].chunk.css',
            ignoreOrder: false
        })
    ]
}
