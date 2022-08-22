var express = require('express');
var router = express.Router();

const User = require('../models/User')
const users = require('../controllers/users');

/* GET users listing. */
router.get('/',users.getUser);
router.post('/',users.newUser);

module.exports = router;
