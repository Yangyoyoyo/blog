const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const server = new Koa();
server.listen(3000, () => {
    console.log(`server is on 3000 port!`);
});


const staticPath = './static';
server.use(static(path.join(__dirname, staticPath)));
server.use(async (ctx) => {
    ctx.body = 'hello world'
});
