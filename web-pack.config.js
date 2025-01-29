const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production', 
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile modern JS
        },
      },
    ],
  },
  plugins: [
    new InjectManifest({
      swSrc: './src/service-worker.js', // Path to custom service worker file
      swDest: 'service-worker.js', // Output location for the processed service worker
    }),
  ],
};
