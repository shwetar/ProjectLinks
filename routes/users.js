var express = require('express');
var router = express.Router();
var UserModel= require("../model/user");

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.post('/login', function(req, res) {
	//console.log("reached route");
    UserModel.getUser(req,function(resp){
		res.send({
    		success:resp.length > 0,id:resp[0].parentId
    	});
    });
});

router.post('/signup', function(req, res) {

    UserModel.newUser(req,function(e,resp){
    	res.send({
    		success:resp.length > 0
    	});
    });
});

module.exports = router;
