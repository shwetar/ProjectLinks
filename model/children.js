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

exports.addLink = function(req,cb){
    console.log("reached children addLink model");
    req.collection= db.collection('children');
    console.log("id of parent:"+req.body.parentId);
     req.collection.update(
        {$and:[{parentID: parseInt(req.body.parentId)},{id:parseInt(req.body.id)}]},
        { $set:{$push: { links: req.body.link } }},
        function(e, count,status){
        cb.call(this, status);
    });
};
//need to fix
exports.deleteLink = function(req,cb){
    console.log("reached children deletelink model");
    req.collection= db.collection('children');
    console.log("id of parent:"+req.body.parentId);
     req.collection.update(
        {$and:[{parentID: parseInt(req.body.parentId)},{id:parseInt(req.body.id)}]},
        { $set:{links: req.body.link }},
        function(e, count,status){
        cb.call(this, status);
    });
};


