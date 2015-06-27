var express = require('express');
var router = express.Router();
var ChildrenModel= require("../model/children");

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.post('/search', function(req, res) {
	console.log("reached search in children");
    ChildrenModel.getChildren(req,function(resp){
		res.send({
    		success:resp.length > 0,children:resp
    	});
    });
});

router.post('/addlink', function(req, res) {
	console.log("reached addlink in children");
    ChildrenModel.addLink(req,function(resp){
		res.send({
    		success:resp.ok
    	});
    });
});

router.post('/deletelink', function(req, res) {
    console.log("reached deletelink in children");
    ChildrenModel.deleteLink(req,function(resp){
        res.send({
            success:resp.ok
        });
    });
});


module.exports = router;
