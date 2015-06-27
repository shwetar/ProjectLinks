### Installations

```
$ npm install
```

### Run

```
$ npm start
$ node ./bin/www
http://localhost:3000/signup
```


###Debugging

http://www.100percentjs.com/best-way-debug-node-js/


curl -X POST -d "title=Some cool Job&Location=San Jose&Description=Love this cool job" http://localhost:3000/listings
Shwetas-MacBook-Pro:jobs shwetarao$ mongo
MongoDB shell version: 2.6.5
connecting to: test
Server has startup warnings: 
2015-05-11T13:17:04.722-0700 [initandlisten] 
2015-05-11T13:17:04.722-0700 [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use favlinks
switched to db favlinks
> db.users.find()
{ "_id" : ObjectId("554a60d79a72505a947c39e0"), "username" : "John@gmail.com", "password" : "test", "parentId" : 1, "childId" : 0 }
{ "_id" : ObjectId("554a60d79a72505a947c39e1"), "username" : "Mary@gmail.com", "password" : "test", "parentId" : 2, "childId" : 0 }
> db.children.find()
{ "_id" : ObjectId("554a632d9a72505a947c39e6"), "id" : 1, "name" : "Amy", "parentID" : 1, "private" : "N", "links" : [ "www.google.com", "www.yahoo.com" ] }
{ "_id" : ObjectId("554a632d9a72505a947c39e7"), "id" : 2, "name" : "Brian", "parentID" : 1, "private" : "N", "links" : [ "www.cnn.com", "www.msn.com" ] }
{ "_id" : ObjectId("554a632d9a72505a947c39e8"), "id" : 3, "name" : "Grace", "parentID" : 2, "private" : "N" }
{ "_id" : ObjectId("554a632d9a72505a947c39e9"), "id" : 4, "name" : "Marcel", "parentID" : 2, "private" : "N" }
> db.users.find()
{ "_id" : ObjectId("554a60d79a72505a947c39e0"), "username" : "John@gmail.com", "password" : "test", "parentId" : 1, "childId" : 0 }
{ "_id" : ObjectId("554a60d79a72505a947c39e1"), "username" : "Mary@gmail.com", "password" : "test", "parentId" : 2, "childId" : 0 }
{ "_id" : ObjectId("5553d9bc94f59f8ec033bbc6") }
{ "_id" : ObjectId("5553dd4bde1226bbc1c08792") }
{ "_id" : ObjectId("5553de17d8ede6fcc166b562") }
{ "_id" : ObjectId("5553de53264aa82cc20aa534"), "userName" : "Grace@gmail.com", "password" : "test" }
{ "_id" : ObjectId("5553e0392d97952ec31e36d2"), "username" : "Grace@gmail.com", "password" : "test" }
{ "_id" : ObjectId("5553e14bfc71c8a9c3e06440"), "username" : "Grace@gmail.com", "password" : "test" }
{ "_id" : ObjectId("5553e3ae152ff364c46fc4b8"), "username" : "Grace@gmail.com", "password" : "test" }
{ "_id" : ObjectId("55550e33c983e1bfdab58f41"), "username" : "Grace@gmail.com", "password" : "test" }
{ "_id" : ObjectId("555ac0f0c983e1bfdab58f42"), "username" : "Anu@gmail.com", "password" : "test" }
> db.parents.find()
{ "_id" : ObjectId("554a629e9a72505a947c39e3"), "id" : 1, "name" : "John Sebastian" }
{ "_id" : ObjectId("554a62c59a72505a947c39e4"), "id" : 1, "name" : "John Sebastian" }
{ "_id" : ObjectId("554a62c59a72505a947c39e5"), "id" : 2, "name" : "Mary Childers" }
> 
