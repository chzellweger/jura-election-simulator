/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_js, 'main.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        
        //include jQuery
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //create seperate css-files
       new ExtractTextPlugin("[name].css"),

       new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////

/* global __dirname */
/*
var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var dir_js = path.resolve(__dirname, 'js');
var dir_html = path.resolve(__dirname, 'html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_js, 'main.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin(),
        
        //include jQuery
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //create seperate css-files
       new ExtractTextPlugin("[name].css")
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////