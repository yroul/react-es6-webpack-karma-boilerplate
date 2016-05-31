/* eslint-disable no-var, strict */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

//--------your proxy----------------------
var app = express();
//proxy the request for static assets
app.use('/api', proxy(url.parse('API_END_POINT')));




new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(5000, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:5000');
  });
app.listen(5001);