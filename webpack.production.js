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
          }
      ]
    },
    plugins: [
        new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
