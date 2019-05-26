var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

router.post('/add-clinic', function(req, res, next) {
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("doktor");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  console.log(myobj);
  dbo.collection("clinics").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
});


module.exports = router;
