const db = require('/opt/db');
let _db;

exports.handler = async (event) => {
    await db.initDb((err, connection) => {
        if (err) {
            console.log(err);
        } else {
            _db = connection;
            console.log('db started');
        }
    });
    
    const sports = await _db.db()
        .collection('sports')
        .find().toArray()

    const response = {
        statusCode: 200,
        body: JSON.stringify({ data: sports }),
    };

    return response;
};
