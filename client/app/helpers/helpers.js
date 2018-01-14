import axios from 'axios';

class helpers {
  static getNewGameName() {
    return axios
      .get('/game/NewGameName')
      .then(res => res.data)
      .catch(error => error);
  }

  static loadAPI() {
    return { success: true };
    // return fetch('http://localhost:3000').then(res => {
    //   return res.json({ success });
    // }).catch(error => {
    //   return error;
    // });
  }
}

export default helpers;
