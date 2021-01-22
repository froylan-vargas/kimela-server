const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const initDb = async callback => {
    if (_db) {
        console.log('Database is already initialized');
        return callback(null, _db);
    }

    try {
        console.log('trying to connect');
        _db = await MongoClient.connect(process.env.MONGODB_URI, {
            native_parser: true,
            useUnifiedTopology: true
        });
        console.log('logged again');
        return callback(null, _db);
    } catch (ex) {
        return callback(err);
    }
};

module.exports = {
    initDb
}