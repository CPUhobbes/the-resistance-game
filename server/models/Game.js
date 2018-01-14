const mongoose = require('mongoose');

const { Schema } = mongoose;

const Game = new Schema({
  username: String,
  password: String,
});

module.exports = mongoose.model('Game', Game);
