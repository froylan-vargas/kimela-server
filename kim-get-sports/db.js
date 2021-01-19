const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const mongoDbUrl = `mongodb+srv://${user}:${pass}@${host}/kimapp?retryWrites=true&w=majority`;

let _db;

const initDb = async callback => {
    if (_db) {
        console.log('Database is already initialized');
        return callback(null, _db);
    }

    try {
        _db = await MongoClient.connect(mongoDbUrl);
        return callback(null, _db);
    } catch (ex) {
        return callback(err);
    }

    /* await MongoClient.connect(mongoDbUrl)
        .then(client => {
            _db = client;
            return callback(null, _db);
        })
        .catch(err => {
            return callback(err);
        }); */
};

const getDb = () => {
    if (!_db) {
        throw Error('Database not initialized');
    }
    return _db
}

module.exports = {
    initDb,
    getDb
}