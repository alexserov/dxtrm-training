import {resolve, dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


export default {
  entry: {
    playground: './src/entrypoint.js',
    playgroundStyles: './src/styles.less'
  },  
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
                  plugins: ["@babel/plugin-proposal-class-properties"]
              }
          }
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ]   
      },      
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',       
    environment: {
      arrowFunction: false,
      module: false
    }    
  },
};
