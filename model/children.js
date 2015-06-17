var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://@localhost:27017/favlinks',{safe:true});

exports.newChild = function(req, cb){
    req.collection= db.collection('children');
    console.log("Body", req.body);
    req.collection.insert(req.body,{},function(e,results){
        if(e){
            console.log(e);
        }
        cb.call(this, e, results);
    });
};


exports.getChildren = function(req,cb){
    console.log("reached children model");
    req.collection= db.collection('children');
    console.log("id of parent:"+req.body.parentId)
     req.collection.find({
        parentID: parseInt(req.body.parentId)
    }).toArray(function(e, results){
        cb.call(this, results);
    });
};


