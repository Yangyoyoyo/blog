const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const ejs = require('ejs');

const server = new Koa();
server.use(views(path.join(__dirname,'./view'),{
    extension:'ejs',
}));
server.use(async(ctx)=>{
   let title = 'hello ejs';
   let name = 'welcome koa ejs'
   await ctx.render('index',{title,name});
});

server.listen('3000',()=>{
    console.log('server is on 3000 port');
});
