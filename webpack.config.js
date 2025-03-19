const { resolve } = require('node:path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        hot: true,
        static: {
            directory: resolve(__dirname, 'static')
        }
    }
};
