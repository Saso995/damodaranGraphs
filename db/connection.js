const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGODB_URL || "mongodb+srv://admin:543H8HZttUI20gwH@damodaran-lzxh8.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});

var _db;

module.exports = {

  connectToServer: function( callback ) {
    client.connect(function( err, client ) {
      _db  = client.db('dg');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
