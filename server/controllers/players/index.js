const Players = require('../../models/Players');

const PlayersController = {
  // Get all players from DB
  getAllPlayers: (req, res) => {
    Players.findAll().exec((err, results) => {
      res.json(results);
    });
  },
};

module.exports = PlayersController;
