var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var extractPlugin = new ExtractTextPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: './src/js/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                  cacheDirectory: true,
                  plugins: ['transform-decorators-legacy' ],
                  presets: ['es2015', 'react']
                }
              },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['env', 'react']
                  }
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract ({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin,
    ]
}