var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var Promise = require('es6-promise').polyfill();


module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './static',
        port: 8080
    },
    entry: {
        app: ['react-hot-loader/patch',
        './app/components']
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        publicPath: "/static/",
        filename: 'bundle.js'
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    //specify that we will be dealing with React code
                    presets: [require('babel-preset-es2015'), 'react'],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    ]
            },
            {
                test: /\.woff[2]?(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            },
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    }

};
