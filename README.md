# koa2  学习搭建博客后台
## koa2 介绍
```
koa2 是由 Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的 Web 框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。
```
```
Koa2 需要 node v7.6.0或更高版本来支持ES2015、异步方法
``` 

## koa2 安装
```
    npm init 
    npm install koa
```

## async 函数
```
http://es6.ruanyifeng.com/?search=async&x=8&y=6#docs/async
```

es2017 标准引入async函数 使得异步操作变的更加方便。
就是 generator 的语法糖
sync函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
await 必须在 async 函数里， await 可以接受普通参数 和 promise

## get 请求

```
server.use(async (ctx) => {
    let url = ctx.url;
    //  从request 接受请求
    let req = ctx.request;
    let req_query = req.query;
    let req_string = req.querystring;
    // 从上下文中接受请求
    let ctx_query = ctx.query;
    let ctx_queryString = ctx.querystring;
    // 获取响应体
    ctx.body = {
        url,
        req_query,
        req_string,
        ctx_query,
        ctx_queryString
    }
});
```


