var express = require('express');
var router = express.Router();

const Role = require('../models/Role')
const roles = require('../controllers/role-controller');

/* GET role listing. */
router.get('/', roles.getRole);
router.post('/', roles.newRole);
router.get('/introduction', roles.getRolesIntro);

module.exports = router;
