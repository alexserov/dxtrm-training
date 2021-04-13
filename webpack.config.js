import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
  entry: './src/entrypoint.js',  
  mode: 'production',
  module: {
    rules: [
      {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: ["@babel/preset-env"],                
              }
          }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',       
    environment: {
      arrowFunction: false,
      module: false
    }    
  },
};