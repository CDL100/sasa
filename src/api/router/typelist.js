const db = require('../db/dbhelper')

let result;
module.exports = {
    //获取前端资料，引用db方法操作数据库
    getType(app){
        app.get('/type',async (req,res)=>{
            let type_id = req.query.data;
            result = await db.select('goodstype',{type_id});
            res.send(result);
        })
    },
    getList(app){
        app.get('/datalist',async (req,res)=>{
            let type_id = req.query.type;
            console.log(type_id)
            result = await db.select('goods',{type_id});
            res.send(result);
        })
    }
}

