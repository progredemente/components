const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const webpack = require('webpack');
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
        './Icon': './src/bootstrap',
        './AppsBar': './src/bootstrap',
        './appsBarForVue': './src/bootstrap',
        './appList': './src/bootstrap',
        './GIFer': './src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      resourcesUrl: process.env.RESOURCES_URL
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
