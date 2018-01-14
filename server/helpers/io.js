const Util = require('../util/');

const userData = new WeakMap();

const ioSocket = (io) => {
  // Socket.io connection
  io.on('connection', (client) => {
    console.log('a user connected');
    io.emit('action', {
      type: 'CONNECTED_USERS',
      data: Object.keys(io.sockets.sockets).length,
    });

    client.emit('action', {
      type: 'USER_ID',
      data: client.id,
    });

    client.on('disconnect', () => {
      console.log('user disconnected');

      io.emit('action', {
        type: 'CONNECTED_USERS',
        data: Object.keys(io.sockets.sockets).length,
      });
    });

    client.on('action', (action) => {
      if (action.meta) {
        const { channel } = action.meta;
        const { data } = action.meta;

        switch (channel) {
          case 'ADD_USER': {
            console.log(`WELCOME ${data}`);
            io.emit('action', {
              type: 'NEW_USER_NAME',
              data,
            });
            break;
          }
          default:
            break;
        }
      }
    });
  });
};

module.exports = ioSocket;
