const webpack = require('webpack');
const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const  { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
                'css-loader',
                'sass-loader',
              ]
              
           },
          
           {
               test: /\.(jpg|png|gif)$/,
               type: 'asset/resource'
            //    use: ["file-loader?name=img/[name].[ext]", "image-webpack-loader"]
           },
           {
               test: /\.(woff2?|svg)$/,
               type: 'asset/resource'
            //    use: ["url-loader?name=fonts/[name].[ext]&limit=10000" ]
           },
           {
              test: /\.(ttf|eot)$/,
              type: 'asset/resource'
            //    use: ["file-loader?name=fonts/[name].[ext]"] 
           }
       ]
   },
   plugins: [
     new BrowserSyncPlugin({
            port: 3000,
            proxy: 'http://localhost/yourdir/',
            files: ['**/*.php']
        }),
        new MiniCssExtractPlugin({
          filename: 'bundle.css',
          chunkFilename: '[id].css'
        }), 
        
      new CleanWebpackPlugin()
   ]
};
