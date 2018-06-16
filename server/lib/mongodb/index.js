const mongodb = require('mongodb').MongoClient;
const logger = require('../logger');

const mongo = {};
let db;

// Use connect method to connect to the server
mongo.connect = () => (
  mongodb.connect(process.env.MONGODB_URI)
    .then((client) => {
      logger.info('Connected to MongoDB successfully.');
      db = client.db(process.env.MONGODB_COLLECTION);
      return client;
    })
    .catch((err) => {
      logger.error(`Error connecting to MongoDB: ${err}`);
      return err;
    })
);

mongo.getDB = () => (db);

mongo.disconnect = (client) => {
  client.close();
};

module.exports = mongo;
