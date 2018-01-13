class helpers {
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
