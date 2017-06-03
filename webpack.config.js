const webpack = require('webpack');
const PATH = require('path');

module.exports = {

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: PATH.resolve(__dirname),

    output: {
        path: PATH.resolve(__dirname, 'bundles'),
        publicPath: '/',
        filename: 'ng4publish.umd.js',
        libraryTarget: 'umd',
        library: 'ng4publish'
    },

    externals: [/^\@angular\//, /^rxjs\//],

    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader?declaration=false',
            exclude: [/\.e2e\.ts$/]
        }]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            PATH.resolve(__dirname, 'src')
        )
    ]
};

