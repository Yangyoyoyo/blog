const Koa = require('koa');
// 适用于koa2 的session中间件，提供存储介质的读写接口 。
const session = require('koa-session-minimal');
// 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
const MysqlSession = require('koa-mysql-session');


const app = new Koa();

let store = new MysqlSession({
    user: 'root',
    password: 'root',
    database: 'test',
    host: 'localhost',
});
let cookie = {
    maxAge: '',
    expires: '',
    path: '',
    domain: '',
    httpOnly: '',
    overwrite: '',
};

app.use(session({
    key: 'session_id',
    store: store,
    cookie: cookie
}));

app.use(async (ctx) => {
    // 设置session
    if ( ctx.url === '/set' ) {
        ctx.session = {
            user_id: Math.random().toString(36).substr(2),
            count: 0
        };
        ctx.body = ctx.session
    } else if ( ctx.url === '/' ) {

        // 读取session信息
        ctx.session.count = ctx.session.count + 1;
        ctx.body = ctx.session
    }

});

app.listen(3000,()=>{
    console.log('[demo] session is starting on port 3000');
});








