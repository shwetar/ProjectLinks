var express = require('express');
var router = express.Router();
var ParentModel= require("../model/parent");

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.post('/search', function(req, res) {
	console.log("reached search");
    ParentModel.getParent(req,function(resp){
		res.send({
    		success:resp.length > 0,parent:resp[0]
    	});
    });
});

router.post('/signup', function(req, res) {

    UserModel.newUser(req,function(resp){
    	res.send({
    		success:resp.length > 0
    	});
    });
});

module.exports = router;
