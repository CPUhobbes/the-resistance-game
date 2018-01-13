export default (socket, channelName = 'action') => (store) => {
  socket.on(channelName, store.dispatch);

  return next => (action) => {
    if (action.meta) {
      socket.emit(channelName, action);
    }
    return next(action);
  };
};
