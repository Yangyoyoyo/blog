const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './static/src');
const outputPath = path.join(__dirname, './static/output/dist/src');

module.exports = {
    entry: {
        'admin': './staic/src/page/admin.js',
        vender: ['react', 'react-dom', 'whatwg-fetch']
    },
    output: {
        path: outputPath,
        publicPath: '/static/output/dist/', //输出解析文件的目录 url 相对于 HTML 页面
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test:/\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','less-loader']
                })
            },


        ]
    },
    resolve: {
        extensions: ['.js','.jsx'],
        modules: [
            sourcePath,
            'node_modules'
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor'],
            minChunks:Infinity,
            filename: 'js/[name].js'
        }),
        new webpack.optimize.BannerPlugin('Yangyoyoyo版权所有，翻版必究, 说着玩测试一下'),
    ]
}