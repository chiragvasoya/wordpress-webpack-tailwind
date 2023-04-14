const webpack = require('webpack');
const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';



module.exports = {
  entry: path.resolve(__dirname, 'src')+'/js/app.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
   module: {
       rules: [
           {
               test: /\.(sa|sc|c)ss$/,
               use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
                'postcss-loader',
              ]
              
           },
          
           {
               test: /\.(jpg|png|gif)$/,
               type: 'asset/resource'
        
           },
           {
               test: /\.(woff2?|svg)$/,
               type: 'asset/resource'
           
           },
           {
              test: /\.(ttf|eot)$/,
              type: 'asset/resource'
  
           }
       ]
   },
   plugins: [
     new BrowserSyncPlugin({
            port: 3000,
            proxy: 'http://virtualhost:8080',    // virtualhost on server
            files: ['**/*.php']
        }),
        new MiniCssExtractPlugin({
          filename: 'bundle.css',
          chunkFilename: '[id].css'
        }), 
        
      new CleanWebpackPlugin()
   ]
};
