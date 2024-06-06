const path = require('path');
//плагины
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  //режим сборки
  mode: 'development',
  //точка входа (src)
  entry: './src/index.js', //общий файл точки входа
  //точка выхода (dist ... и.д)
  output: {
    path: path.resolve(__dirname, 'build_webpack'), //папка точки выхода(готовый проект)
    filename: 'webpack.bundle.js', //название файла (готового проекта)
  },
  //модули
  // module: {
  //   rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  //   rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  // },

  //плагины
  // plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
