/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var express = require('express');
// var mongoose = require('mongoose');
var SocketIo = require('socket.io');
var devMiddleware = require('webpack-dev-middleware');
var hotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var compiler = webpack(config);
var app = express();


//set env vars
// process.env.MONGOLAB_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/chat_example_dev';
process.env.PORT = process.env.PORT || 8080;

// connect our DB
// mongoose.connect(process.env.MONGOLAB_URI);


app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}));

app.use(hotMiddleware(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(process.env.PORT, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('server listening on port: %s', process.env.PORT);
});

var io = new SocketIo(server, {path: '/api/chat'})
const socketEvents = require('./utils/sockets/socketEvents')(io);
/* eslint-ensable */
