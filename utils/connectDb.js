const mongo = require("mongodb");
const { MongoClient } = require("mongodb");
const config = require("config");
const mongoUri = config.get("mongoUri");
const dbName = "test";

const connectDb = async () => {
  mongo.connect(
    mongoUri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      if (err) {
        console.log(err);
        process.exit(0);
      }
      const db = client.db("test");
      const customers = db.collection("customers");
      const allCustomers = db
        .collection("customers")
        .find({})
        .toArray((err, results) => {
          if (err) {
            console.log(err);
            process.exit(0);
          }
          console.log(results);
        });
    }
  );
};

module.exports = connectDb;
