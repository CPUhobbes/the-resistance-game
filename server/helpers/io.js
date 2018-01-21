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
    console.log(io.sockets.adapter.rooms); // Show room list
    client.emit('action', {
      type: 'USER_ID',
      data: client.id,
    });

    io.sockets.in('knowledgeable art').emit('action', {
      type: 'MESSAGE',
      data: 'TESTING 123 MESSAGE',
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
          case 'CREATE_GAME': {
            const roomName = Object.keys(data)[0];
            io.emit('action', {
              type: 'GAME_LIST',
              data,
            });
            client.join('knowledgeable art'); // roomName
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
