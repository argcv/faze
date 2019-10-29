const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// https://github.com/johnagan/clean-webpack-plugin
let cleanOptions = {
  // Simulate the removal of files
  //
  // default: false
  dry: false,

  // Write Logs to Console
  // (Always enabled when dry is true)
  //
  // default: false
  verbose: true,

  // Automatically remove all unused webpack assets on rebuild
  //
  // default: true
  cleanStaleWebpackAssets: false,

  // Do not allow removal of current webpack assets
  //
  // default: true
  protectWebpackAssets: false,

  // **WARNING**
  //
  // Notes for the below options:
  //
  // They are unsafe...so test initially with dry: true.
  //
  // Relative to webpack's output.path directory.
  // If outside of webpack's output.path directory,
  //    use full path. path.join(process.cwd(), 'build/**/*')
  //
  // These options extend del's pattern matching API.
  // See https://github.com/sindresorhus/del#patterns
  //    for pattern matching documentation

  // Removes files once prior to Webpack compilation
  //   Not included in rebuilds (watch mode)
  //
  // Use !negative patterns to exclude files
  //
  // default: ['**/*']
  // cleanOnceBeforeBuildPatterns: ['**/*', '!static-files*'],
  cleanOnceBeforeBuildPatterns: [], // disables cleanOnceBeforeBuildPatterns

  // Removes files after every build (including watch mode) that match this pattern.
  // Used for files that are not created directly by Webpack.
  //
  // Use !negative patterns to exclude files
  //
  // default: []
  // cleanAfterEveryBuildPatterns: ['static*.*', '!static1.js'],
  cleanAfterEveryBuildPatterns: [],

  // Allow clean patterns outside of process.cwd()
  //
  // requires dry option to be explicitly set
  //
  // default: false
  dangerouslyAllowCleanPatternsOutsideProject: true,
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
    new CleanWebpackPlugin(cleanOptions),
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
