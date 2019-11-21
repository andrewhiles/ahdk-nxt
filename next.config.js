const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  handleImages: ['jpg','jpeg'],
  optimizeImagesInDev: false
});