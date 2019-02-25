const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入依赖包
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'index': './src/index/js/index.js'
  },
  output: { // 生成 dist目录并打包出文件 bundle.js 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index/index.html',
      minify: true,
      chunks: ['index']                        // 引入的 js
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // 将 JS 字符串生成为 style 节点
          },
          {
            loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}