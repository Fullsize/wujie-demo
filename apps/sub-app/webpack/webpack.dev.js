const { merge } = require('webpack-merge');
const base = require('./webpack.base.js');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = merge(base, {
  mode: 'development', // 开发模式
  devtool: 'inline-source-map',
  devServer: {
    // open: true, // 编译完自动打开浏览器
    port: process.env.PORT ?? 'auto',
    historyApiFallback: true,
    client: {
      overlay: false,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'assets', to: 'assets' }],
    }),
  ],
});
