const path = require('path')
const webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: NODE_ENV,
    entry: NODE_ENV === 'development' ? './src/main.js' : './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: 'vue-virtual-scroll-tree.js',
        library: 'vue-virtual-scroll-tree',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          template: path.resolve("./index.html"),
          minify: {
            removeComments: true, //移除HTML中的注释
            collapseWhitespace: true, //删除空符与换符
            minifyCSS: true //压缩内联css
          }
        }),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(ttf|woff|eot|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: 'fonts'
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
    },
    optimization: {
          minimizer: [
              new UglifyJsPlugin(),
          ],
    },
}

