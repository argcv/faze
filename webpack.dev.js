// const { merge } = require('webpack-merge') # for higher webpack
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const devServer = {
    // contentBase: './build',
    contentBase: __dirname + '/build',
    historyApiFallback: {
        rewrites: [],
    }
}

module.exports = merge(common, {
    // https://webpack.js.org/concepts/mode/
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: devServer
})
