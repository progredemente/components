const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname,'../.env.development') });


const devConfig = {
  mode: 'development',
  devServer: {
    port: 3001,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'components',
      filename: 'remoteEntry.js',
      exposes: {
        './Icon': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      resourcesUrl: process.env.RESOURCES_URL
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
