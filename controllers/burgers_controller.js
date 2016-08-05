var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


router.get('/', function(req,res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res) {
	models.burger.findAll().then(function(data){
		var hbsObject = {burger : data};
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
	models.burger.create({
        name: req.body.name,
        devoured: false,
    }).then(function(){
			res.redirect('/burgers');
		});
});

router.put('/burgers/update/:id', function(req,res) {
	models.burger.findOne({ where: {id: req.params.id} }).then(function(burger) {
  if (burger) { // if the record exists in the db
    burger.updateAttributes({
      devoured: true
    }).then(function() {
			res.redirect('/burgers');
		});
  }
	});
});

module.exports = router;
