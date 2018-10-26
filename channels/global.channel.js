module.exports = rapid => {
  rapid.io()
    .on('connect', socket => {
      // socket.on('echo', data => socket.emit(data));
    });
};