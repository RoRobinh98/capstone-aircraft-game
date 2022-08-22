var mongoose = require('mongoose');
const Game = require('../models/Game');
const Decision = require('../models/Decision');
const DecisionList =require('../models/DecisionList');
const Option = require('../models/Option');
const Question = require('../models/Question');
const Company = require('../models/Company');
const Outcome = require('../models/Outcome');
const FinalOption = require('../models/FinalOptionList')


const games = require('../controllers/game-controller');

var express = require('express');
var router = express.Router();


router.post('/new', games.newGame);
router.post('/join/:gameID',games.joinGame);
router.get('/wait/:gameID',games.getPlayerStatus);
router.get('/:gameID/status/',games.getGameStatus);
router.get('/background/:gameID', games.getBackground);
router.get('/:gameID/roles/',games.getRolesInfo);
// router.get('/choose-role/:gameID',games.showRoles);
router.get('/choose-role/:gameID',games.showAllRoles);
router.post('/choose-role/:gameID',games.chooseRoles);
router.get('/make-decision/:gameID',games.fetchDecision);
router.post('/make-decision/:gameID',games.makeDecision);
router.post('/:gameID/start-discussion/',games.readyToDiscuss);
router.get('/:gameID/round/', games.getRoundDescription);
router.get('/:gameID/round-status', games.getRoundStatus);
router.get('/:gameID/round-outcome', games.getRoundOutcome);
router.get('/:gameID/game-outcome', games.getGameOutcome);

module.exports = router;