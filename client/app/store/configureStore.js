import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import socketIO from 'socket.io-client';
import rootReducer from '../reducers/rootReducer';
import socketIoMiddleware from '../util/middleware';

const io = socketIO.connect('http://localhost:3000');

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, socketIoMiddleware(io)),
  );
  return store;
}
