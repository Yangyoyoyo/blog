const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const mySqlStore = require('koa-mysql-session');
const koaStatic = require('koa-static');
const koaLogger = require('koa-logger');

// 数据库配置
const db = require('./../config/db');
// 路由
const routers = require('./routers/index');

const app = new Koa();

// session 存储配置
const sessionMySQLconfig = {
    user: db.database.username,
    password: db.database.password,
    host: db.database.host,
    database: db.database.database,
};
// 配置 session
console.log(sessionMySQLconfig);

app.use(session({
    key: 'SESSION_ID',
    store: new mySqlStore(sessionMySQLconfig)
}));

// 配置控制台日志
app.use(koaLogger());
//
app.use(bodyParser());

// 配置静态资源
app.use(koaStatic(
    path.join(__dirname, './../static')
));
// 配置模板
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));
// 初始化路由
app.use(routers.routes()).use(routers.allowedMethods());

app.listen(db.port, () => {
    console.log(`server is start at ${db.port} port! `)
});