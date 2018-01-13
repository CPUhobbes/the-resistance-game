const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Players = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('Players', Players);
