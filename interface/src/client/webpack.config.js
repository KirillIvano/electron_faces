const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    target: 'electron-renderer',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader'}]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: path.resolve(__dirname, './src/index.html')
        })
    ]
};
