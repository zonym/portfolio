const { resolve } = require('node:path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src/index.ts'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
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
