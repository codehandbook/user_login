const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  	res.render('index');
});

router.get('/home', function(req, res){
	res.render('home')
})

module.exports = router;
