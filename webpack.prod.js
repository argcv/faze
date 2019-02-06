// const webpack = require('webpack')
const merge = require('webpack-merge')
// uglifyjs-webpack-plugin does not work now: 
// see: https://stackoverflow.com/questions/47439067
// we could use "uglifyjs-webpack-plugin": "1.0.0" force
// however, an alternative solution is to use terser-webpack-plugin instead
// see: https://git.io/fhSjx
// 
// For this discussion, see also: https://git.io/fhSjA


// const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // plugins: [
  //   new UglifyJSPlugin({
  //     sourceMap: true,
  //     parallel: true,
  //     // exclude: /query-string/,
  //   }),
  // ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        // cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
})