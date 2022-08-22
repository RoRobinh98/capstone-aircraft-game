var express = require('express');
var router = express.Router();

const Outcome = require('../models/Outcome');
const outcomes = require('../controllers/outcome-controller');

router.get('/', outcomes.getOutcome);
router.post('/', outcomes.newOutcome);

module.exports = router;