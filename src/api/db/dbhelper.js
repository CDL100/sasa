const mc = require('mongodb').MongoClient;
const ar = require('../utils/apiResult');

var db;
var result;

mc.connect('mongodb://localhost:27017', (error, client) => {
    db = client.db('sasa');
})

module.exports = {
    async select(_collection, _condition = {},type=''){ 
        let result;
        if(type == 'brand_name'){
            result = await db.collection(_collection).find(_condition).sort({"brand_name":1}).toArray(); 
        }else{
            result = await db.collection(_collection).find(_condition).toArray();
        }
        return ar(result.length > 0, result);
    },
    async insert(_collection,_data){
        try{
            let result = await db.collection(_collection).insert(_data);
            return ar(result.insertedCount > 0, result.result);
        }catch(error){
            return ar(false, error);
        }
    }
}


