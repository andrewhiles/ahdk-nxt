const webpack = require('webpack');
const path = require('path');
const withOptimizedImages = require('next-optimized-images');

module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);

    config.plugins.push(
      new webpack.EnvironmentPlugin({
        API: 'http://localhost:3000/api',
        SECRET : 'camitlon'
      })
    );

    return config;
  },
};

module.exports = withOptimizedImages({
  handleImages: ['jpg','jpeg'],
  optimizeImagesInDev: true
});