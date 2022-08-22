var express = require('express');
var router = express.Router();

const Question = require('../models/Question')
const questions = require('../controllers/question-controller');

/* GET role listing. */
router.get('/', questions.getQuestion);
router.post('/', questions.newAllQuestions);
router.post('/drop', questions.dropQuestion);

module.exports = router;