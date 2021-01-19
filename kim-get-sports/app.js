const db = require('./db');

exports.handler = async (event) => {

    await db.initDb((err, dab) => {
        if (err) {
            console.log(err);
        } else {
            console.log('db started');
        }
    });

    const sports = [];
    await db.getDb().db()
        .collection('sports')
        .find().forEach(sportDoc => {
            sports.push(sportDoc);
        })

    const response = {
        statusCode: 200,
        body: JSON.stringify({ data: sports }),
    };

    return response;
};
