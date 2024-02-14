const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /GIFEncoder\.js$/,
        use: {
          loader: 'script-loader',
          options: {
            plugins: [
              new TerserPlugin({
                terserOptions: {
                  keep_fnames: true,
                  keep_classnames: true
                }
              })
            ]
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
          keep_classnames: true
        }
      })
    ]
  }
};
