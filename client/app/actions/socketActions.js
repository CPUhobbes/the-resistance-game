import Types from './socketActionTypes';

export function addUser(name) {
  return {
    type: Types.ADD_USER,
    meta: {
      channel: 'ADD_USER',
      data: name,
    },
  };
}

export function sendChoice(choice) {
  return {
    type: Types.SEND_CHOICE,
    meta: {
      channel: 'SEND_CHOICE',
      data: choice,
    },
  };
}
