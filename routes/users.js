const express = require('express');
const db = require('../models/index');
const User = db.sequelize.models.User;
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	return User.findAll({
		raw: true
	}).then(function(result){
		res.send(result);
	});
});

module.exports = router;
