const express = require('express');
const Index = require('../controllers/');
const Players = require('../controllers/players/');

const Router = express.Router();
/*
 * --- Index Route ---
 */
Router.get('/', Index.loadIndex);

/*
 * --- API Routes ---
 */

// Get all Players
Router.get('/player/:playerID', Players.getAllPlayers);

module.exports = Router;
