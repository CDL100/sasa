const jwt = require('jsonwebtoken')
const db = require('../db/dbhelper')
const apiResult = require('../utils/apiResult')

module.exports = {
    //获取前端资料，引用db方法操作数据库
    register(app){
        app.post('/register',async (req,res)=>{
            let username = req.body.username;
            let password = req.body.password;
            let nickname = req.body.nickname;
            let result = await db.insert('users',{username,password,nickname});
            res.send(result);
        })
    },
    login(app){
        app.post('/login', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let result = await db.select('users', {username, password});
            if(result.status){
                let token = jwt.sign({username}, '123456', {expiresIn: 60 * 60});
                let ar = apiResult(result.status, token);
                res.send(ar);
            } else {
                res.send(result);
            }
        })
    }
}