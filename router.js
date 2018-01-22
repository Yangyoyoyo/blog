const Koa = require('koa');
const Router = require('koa-router');
const server = new Koa();
const router = new Router()
// const router = new Router({
//     prefix: '/img' // 前缀
// });

// router
//     .get('/',(ctx,next)=>{
//         ctx.body = "hello world";
//     })
//     .get('/todo',(ctx,next) => {
//         ctx.body = 'todo pages';
//     })


// let homeRouter = new Router();
// homeRouter.get('/', async (ctx) => {
//     ctx.body = '首页下的页面';
// }).get('/todo', async (ctx) => {
//     ctx.body = 'todo下的页面'
// });
//
// let pageRouter = new Router();
// pageRouter.get('/',async(ctx) => {
//     ctx.body = '我是page首页'
// }).get("/page1", async(ctx)=>{
//     ctx.body = '我是page1的页面'
// })
//
// let router = new Router({})
// router.use('/home', homeRouter.routes(), homeRouter.allowedMethods());
// router.use('/page', pageRouter.routes(), pageRouter.allowedMethods());

router.get('/',async(ctx,next)=>{
    ctx.body = ctx.query;
});

server
    .use(router.routes())
    .use(router.allowedMethods());

server.listen('3213', () => {
    console.log('server on 3213 port');
});