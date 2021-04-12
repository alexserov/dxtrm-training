const path = require('path');

module.exports = {
  entry: './src/sources.js',  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};