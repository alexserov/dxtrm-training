const path = require('path');

module.exports = {
  entry: './src/entrypoint.js',  
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',       
  },
};