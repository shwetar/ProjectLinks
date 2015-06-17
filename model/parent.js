var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/favlinks',{safe:true});

exports.newParent = function(req, cb){
    req.collection= db.collection('parents');
    console.log("Body", req.body);
    req.collection.insert(req.body,{},function(e,results){
        if(e){
            console.log(e);
        }
        cb.call(this, e, results);
    });
};


exports.getParent = function(req,cb){
    console.log("reached parents model");
    req.collection= db.collection('parents');
    console.log("id of parent:"+req.body.id)
     req.collection.find({
        id: parseInt(req.body.id)
    }).toArray(function(e, results){
        cb.call(this, results);
    });
};


