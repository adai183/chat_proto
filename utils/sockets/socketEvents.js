/*eslint-disable*/
exports = module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.join('Lobby');
    socket.on('chat mounted', function(user) {
      // TODO: Does the server need to know the user?
      console.log(console.log(`${user} joined`));
      socket.emit('receive socket', socket.id)
    })
    socket.on('leave channel', function(channel) {
      socket.leave(channel)
    })
    socket.on('join channel', function(channel) {
      socket.join(channel.name)
    })
    socket.on('new message', function(msg) {
      console.log(`New message from ${msg.user}:`);
      console.log(msg);
      // socket.broadcast.to(msg.channelID).emit('new bc message', msg);
    });
    socket.on('new channel', function(channel) {
      socket.broadcast.emit('new channel', channel)
    });
    socket.on('typing', function (user) {
      console.log(console.log(`${user} is typing`));
      socket.broadcast.emit('typing bc', user);
      // socket.broadcast.to(data.channel).emit('typing bc', user);
    });
    socket.on('stop typing', function (user) {
      console.log(console.log(`${user} stopped typing`));
      socket.broadcast.emit('stop typing bc', user);
      // socket.broadcast.to(data.channel).emit('stop typing bc', user);
    });
    socket.on('new private channel', function(socketID, channel) {
      socket.broadcast.to(socketID).emit('receive private channel', channel);
    })
  });
}
