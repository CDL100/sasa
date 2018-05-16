const mc = require('mongodb').MongoClient;
const ar = require('../utils/apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('sasa');
})

module.exports = {
    async select(_collection, _condition = {}){
        const result = await db.collection(_collection).find(_condition).toArray();
        return ar(result.length > 0, result);
    },
    async insert(_collection){
        try{
            let result = await db.collection(_collection).insert('users');
            return apiReulst(result.insertedCount > 0, result.result);
        }catch(error){
            return apiReulst(false, error);
        }
    }
}


