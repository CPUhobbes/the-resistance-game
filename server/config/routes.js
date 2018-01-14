const express = require('express');
const Index = require('../controllers/');
const Game = require('../controllers/game/');
const Util = require('../util/');

const Router = express.Router();

module.exports = (io) => {
  /*
 * --- Index Route ---
 */
  Router.get('/', Index.loadIndex);
  /*
 * --- API Routes ---
 */

  // Generate New GameName
  Router.get('/game/newGameName', (req, res) =>
    Game.createNewGameName(req, res, io));

  return Router;
};
