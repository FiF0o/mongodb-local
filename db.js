var MongoClient = require('mongodb').MongoClient;
/**
 * Connection URL where mongodb opens up a port for our local machine
 * We create mongot DB
 */
var url = 'mongodb://localhost:27017/mongot';

var insertDocuments = function(something, db, cb) {
    // Get the documents collection
    var collection = db.collection('documents');
    // Insert some documents
    collection.insertOne({
        something: something
        }, function (err, item) {
            if (err) return cb(err)
            console.log("2 - Inserted document into the documents collection");
            // could process the DB here and return a promise as mongod is returning a promise
            collection.find({}).toArray(function(err, item) {
                if (err) return cb(err)
                // got all the list
                console.log("3 - Returned from DB after write")
                cb(null, item);
            })
    })
}

// MongoClient.connect(url, function(err, db) {
//     console.log("Connected correctly to server");
//     insertDocuments(db, function() {
//         db.close();
//     });
// })
module.exports = {
    logRequest: function(something, cb) {
        MongoClient.connect(url, function(err, db) {
            console.log("1 - Connected correctly to server");
            insertDocuments(something, db, function(err, result) {
                if (err) return cb(err)
                db.close();
                console.log("4 - End of stack DB side, sending data to client...")
                cb(err, result)
            });
        })
    }
}