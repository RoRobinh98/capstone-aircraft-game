var express = require('express');
var router = express.Router();

const Question = require('../models/Option')
const questions = require('../controllers/option-controller');

/* GET role listing. */
router.get('/', questions.getOption);
router.post('/', questions.newAllOptions);
router.post('/drop', questions.dropOption);

module.exports = router;