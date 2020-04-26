
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:543H8HZttUI20gwH@damodaran-lzxh8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

/*
//insert inside collection <==> table
client.connect(function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {_id:0,email:"",password:"70337336763979244226452948404D635166546A576E5A7234743777217A25432A462D4A614E645267556B58703273357638782F413F4428472B4B6250655368566D597133743677397A244226452948404D635166546A576E5A7234753778214125442A462D4A614E645267556B58703273357638792F423F4528482B4B6250",adminFlag:"true",token:""}
  dbo.collection("users").remove({adminFlag:"false"}, {$multi:true}, function(err, res) {
    if (err) throw err;
    console.log("deleted");
    db.close();
  });
});
*/

client.connect( function(err, db) {
  if (err) throw err;
  var dbo = db.db("dg");
  var myobj = { pageId: "hros" ,title: "HISTORICAL RETURNS ON STOCKS, BONDS AND BILLS - UNITED STATES", link1: "./graphs/test.html", img:"./images/img-1.jpg", titleG: "test1", desc:"bla bla bla" };
  dbo.collection("pages").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
