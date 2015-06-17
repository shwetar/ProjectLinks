var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/favlinks',{safe:true});

exports.newUser = function(req, cb){
    req.collection= db.collection('users');
    console.log("Body", req.body);
    req.collection.insert(req.body,{},function(e,results){
        cb.call(this, e, results);
    });
};


exports.getUser = function(req,cb){
    console.log("reached model");
    req.collection= db.collection('users');
    console.log("username:"+req.body.userName)
     req.collection.find({
        username: req.body.userName,
        password: req.body.password
    }).toArray(function(e, results){
        cb.call(this, results);
    });
};


