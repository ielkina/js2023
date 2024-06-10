const path = require('path');
//плагины
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  //режим сборки
  mode: 'development',
  // entry: {
  //   index: './src/index.js',
  //   // search: './src/search.js',
  // },
  // output: {
  //   path: __dirname + '/dist',
  //   filename: '[name].js',
  // },
  //точка входа (src)
  entry: './src/index.js', //общий файл точки входа
  //точка выхода (dist ... и.д)
  output: {
    path: path.resolve(__dirname, 'build_webpack'), //папка точки выхода(готовый проект)
    filename: 'webpack.bundle.js', //название файла (готового проекта)
  },
  //модули
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      // },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        // use: {
        //   loader: 'babel-loader',
          // options: {
          //   presets: [['@babel/preset-env', { targets: 'defaults' }]],
          // },
        // },
      },
    ],
  },
  //плагины
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' }), new MiniCssExtractPlugin()],
  //настройки сервера
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    // compress: true,
    port: 9000,
    // clientLogLevel: 'error',
    open: true,
    // Stats: 'errors-only',
  },
};
