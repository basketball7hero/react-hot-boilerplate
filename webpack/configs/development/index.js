import 'babel-polyfill';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

export default merge([{
    name: 'Development Builder',
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        main: ['webpack-hot-middleware/client', 'babel-polyfill', path.resolve(__dirname, '../../../src/index')],
    },
    output: {
        path: path.resolve(__dirname, '../../../dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, '../../../src/')
            }
        ]
    }
}]);