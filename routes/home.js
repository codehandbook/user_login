const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentication');

router.get('/', auth.isAuthenticated , function(req, res){
	res.render('home');
});

module.exports = router;


