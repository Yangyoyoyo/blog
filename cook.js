const Koa = require('koa');
server = new Koa();
server.use(async(ctx)=>{
    if(ctx.url === '/index'){
        ctx.cookies.set(
        'MyName','JSPang',{
            domain:'127.0.0.1', // 写cookie所在的域名
            path:'/index',       // 写cookie所在的路径
            maxAge:1000*60*60*24,   // cookie有效时长
            expires:new Date('2018-12-31'), // cookie失效时间
            httpOnly:false,  // 是否只用于http请求中获取
            overwrite:false  // 是否允许重写
        });
        ctx.body = 'cookies is set';
    }else {
        if(ctx.cookies.get('MyName')){
            ctx.body = ctx.cookies.get('MyName')
        }else {
            ctx.body = 'cookies is none';
        }

    }

});
server.listen('9999',()=>{
    console.log('server is on port 9999');
});