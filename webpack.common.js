const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://github.com/johnagan/clean-webpack-plugin
// the path(s) that should be cleaned
let pathsToClean = ['build']

// the clean options to use
let cleanOptions = {
  root: __dirname,
  exclude: [],
  watch: false,
  verbose: true,
  dry: false
}


module.exports = ({
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    // submodules start
    // app: path.resolve(__dirname, 'src/App.js'),
    // about: path.resolve(__dirname, 'src/views/About.js'),
    // articles: path.resolve(__dirname, 'src/views/Articles.js'),
    // home: path.resolve(__dirname, 'src/views/Home.js'),
    // news: path.resolve(__dirname, 'src/views/News.js'),
    // poweredby: path.resolve(__dirname, 'src/views/PoweredBy.js'),
    // submodules end
    vendors: ['react', 'react-dom']
  },
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[name].[hash:8].bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.sass$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      {
        test: /\.jsx?$/, exclude: /node_modules/, use: {
          loader: 'babel-loader', options: {
            cacheDirectory: true,
          }
        }
      },
      { test: /\.(png|jpg|jpeg|gif|ico)$/, use: 'url-loader?limit=1024&name=images/[name].[hash:8].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, use: 'url-loader' },
    ]
  },
  plugins: [
    // remove/clean your build folder(s) before building
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Material Dashboard',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.json', '.jsx'],
  },
})
