var express = require('express');
var router = express.Router();
var models = require('../models');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// app.use(bodyParser.urlencoded({
// 	extended: false
// }));

router.get('/', function(req,res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req,res) {
	models.burger.findAll().then(function(data){
		var hbsObject = {burger : data};
		console.log(data);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
  console.log('post requested');
  console.log(req.body);
	models.burger.create({
        name: req.body.name,
        devoured: false,
    }).then(function(){
			res.redirect('/burgers');
		});

	// burger.insertOne(req.body.name, false, function(data){
	// 	res.redirect('/burgers');
	// });
});
//
// router.put('/burgers/update/:id', function(req,res) {
//
//  	burger.updateOne(req.params.id, req.body.eat, function(data){
//  		res.redirect('/burgers');
//    	});
// });

module.exports = router;
