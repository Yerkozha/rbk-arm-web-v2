const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path')
module.exports = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts$|tsx/,
            exclude: /node_modules/,
            loader: require.resolve("babel-loader"),
            options: {
              plugins: [
                require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          }]
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '..', './.env.development'),
        }),
        new ReactRefreshWebpackPlugin({
            overlay: false
        }),
    ],
    devtool: 'eval-source-map',
};