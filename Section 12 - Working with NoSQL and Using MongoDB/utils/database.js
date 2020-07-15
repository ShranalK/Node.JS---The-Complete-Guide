const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://shranal:Sonushinu13@cluster0.ghrgp.mongodb.net/test?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("CONNECTED!");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;