const express = require('express');
const db = require('../models/index');
const User = db.sequelize.models.User;
const router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res) {
	return User.findAll({
		raw: true
	})
	.then(function(result){
		res.send(result);
	})
});

router.post('/validateLogin', function(req, res) {
	const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
	res.json({'token' : token })
	res.redirect('/home')
})

module.exports = router;
