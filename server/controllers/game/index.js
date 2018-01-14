const Util = require('../../util');
// const Game = require('../../models/Game');

const GameController = {
  // Get all players from DB
  createNewGameName: (req, res, io) => {
    const gameList = Util.getAllGames(io.sockets.adapter.rooms);
    const gameName = Util.generateGameName(gameList);
    res.json({ data: gameName });
  },
};

module.exports = GameController;
