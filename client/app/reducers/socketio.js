import { Map } from 'immutable';

const initialSettings = Map({
  userList: '',
});

export default function (state = initialSettings, action) {
  switch (action.type) {
    case 'CONNECTED_USERS':
      return state.setIn(['numUsers'], action.data);
    case 'NEW_USER_NAME':
      return state.setIn(['newUserName'], action.data);
    case 'USER_ID':
      return state.setIn(['userId'], action.data);
    default:
      return state;
  }
}
