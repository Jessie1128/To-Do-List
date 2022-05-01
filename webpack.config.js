const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index:path.join(__dirname, 'src', 'index.js')
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        // index: '/',
        path: path.resolve('./')
    },
    
    plugins: [
      new htmlWebpackPlugin({
        template:path.resolve('index.html'),
        favicon: path.resolve('./public/favicon.ico')
      })]
    ,

    devServer: {
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        //   exclude: /node_modules/,
        //   use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
        // }
      ]
    },
};