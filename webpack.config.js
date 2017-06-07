var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/app/'
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              include: path.resolve(__dirname, 'src'),
              use: [{
                loader: 'babel-loader',
                options: {
                  presets: ['react', 'env', 'stage-0']
                }
              }]
          },
        //   {
        //     test: /\.scss$/,
        //     use: [{
        //         loader: 'style-loader'
        //     }, {
        //         loader: 'css-loader'
        //     }, {
        //         loader: 'sass-loader'
        //     }]
        //   },
        //   {
        //     test: /\.(png|svg)$/,
        //     use: ['url-loader']
        //   }
      ]
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery",
    //         "Tether": 'tether'
    //     })
    // ]
};
