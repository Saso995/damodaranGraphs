var express = require("express");
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  console.log("Listening at port 8080");
});
