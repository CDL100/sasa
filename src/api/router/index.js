const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.urlencoded({extended: false}));

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, auth, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

const users = require('./users')
const typelist = require('./typelist')

module.exports = {
    start(_port = 88){
        users.register(app);
        users.login(app);
        typelist.getType(app);
        typelist.getList(app);
        app.listen(_port);
    }
}