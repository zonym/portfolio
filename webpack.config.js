const { resolve } = require('node:path');

const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env['NODE_ENV'] === 'development';

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: resolve(__dirname, 'src/index.ts'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: `scripts/${isDev ? '[name]' : '[chunkhash]'}.js`,
        clean: !isDev
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                include: resolve(__dirname, 'src'),
                test: /\.[jt]sx?$/,
                loader: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCSSExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        isDev
            ? void 0
            : new MiniCSSExtractPlugin({
                  filename: 'styles/[chunkhash].css'
              }),
        new HTMLWebpackPlugin({
            template: resolve(__dirname, 'public/index.html')
        })
    ],
    devServer: {
        hot: true,
        static: {
            directory: resolve(__dirname, 'static')
        }
    },
    optimization: isDev
        ? {}
        : {
              splitChunks: {
                  cacheGroups: {
                      defaultVendors: false,
                      defaults: {
                          reuseExistingChunk: true,
                          minChunks: 2,
                          priority: -20
                      },
                      common: {
                          test: /[/\\]node_modules[/\\]/,
                          priority: -5,
                          reuseExistingChunk: true,
                          chunks: 'initial',
                          name: 'common',
                          minSize: 0
                      },
                      react: {
                          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                          name: 'vendor@react',
                          chunks: 'all',
                          priority: 10
                      }
                  }
              }
          }
};
