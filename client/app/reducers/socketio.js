import { Map } from 'immutable';

const initialSettings = Map({
  userList: '',
});

export default function (state = initialSettings, action) {
  switch (action.type) {
    case 'CONNECTED_USERS':
      return state.setIn(['connectedUsers'], action.data);
    case 'NEW_USER_NAME':
      return state.setIn(['newUserName'], action.data);
    default:
      return state;
  }
}
