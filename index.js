var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const mongo = require("./db/connection");
var mong = require('mongodb')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var PORT = process.env.PORT || 8080;

mongo.connectToServer( function( err, client ) {
  if (err) console.log(err);
  app.listen(PORT, function(){
    console.log("Listening at port 8080");
  });
});

app.get('/graphsPage', function (req, res) {
  var db = mongo.getDb();
  pagName = req.query.id
  var query = { pageId: pagName };
  db.collection("pages").find(query).toArray(function(err, result) {
    if (err) throw err;
    res.send(result)
  });
})
