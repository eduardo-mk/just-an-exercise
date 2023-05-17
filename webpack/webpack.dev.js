const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 8080,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Hey new environment var.'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
}
