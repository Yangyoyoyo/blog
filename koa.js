const Koa = require('koa');
const router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const server = new Koa();
const fs = require('fs');

server.use(bodyparser());

// get 请求

// server.use(async (ctx) => {
//     let url = ctx.url;
//     //  从request 接受请求
//     let req = ctx.request;
//     let req_query = req.query;
//     let req_string = req.querystring;
//     // 从上下文中接受请求
//     let ctx_query = ctx.query;
//     let ctx_queryString = ctx.querystring;
//     // 获取响应体
//     ctx.body = {
//         url,
//         req_query,
//         req_string,
//         ctx_query,
//         ctx_queryString
//     }
//
// });

// post 请求

// server.use(async (ctx) => {
//     if (ctx.url === '/' && ctx.method === 'GET') {
//         // 显示表单页面
//         let html = `
//         <h1>表单</h1>
//         <form method="post" action="/">
//             <input type="text" name="username" /><br />    
//             <input type="text" name="age" /> <br/>
//             <input type="text" name="web" /> <br/>
//             <button type="submit">提交</button>
//         </form>`;
//         ctx.body = html;
//     } else if (ctx.url === '/' && ctx.method === 'POST') {
//         let postDate = await ctx.request.body;
//         ctx.body = postDate
//     } else {
//         let url = ctx.request.url;
//         let html = await route(url);
//         ctx.body = html
//     }
// });

// route 

function render(page) {
    return new Promise( (resolve, reject) => {
        let pageUrl = `./page/${page}`;
        fs.readFile(pageUrl,'binary',(err,data) => {
            if(err){
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}
async function route(url) {
    let page = '404.html';
    switch (url) {
        case "/":
            page = 'index.html';
            break;
        case  '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html = await render(page);
    console.log(html);
    return html;
}

server.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url);
    ctx.body = html;
});

// function parsesPostDate(ctx) {
//     return new Promise((resolve, reject) => {
//         try {
//             let postStr = '';
//             ctx.req.addListener('data', (data) => {
//                 postStr += data;
//             });
//             ctx.req.on('end', () => {
//                 let parseDate = parseQueryString(postStr);
//                 resolve(parseDate)
//             });
//         } catch (err) {
//             reject(err)
//         }
//     })
// }
//
// function parseQueryString(queryStr) {
//     let queryData = {};
//     let queryStrList = queryStr.split('&');
//     // console.log(queryStrList);
//     // console.log(queryStrList.entries());
//     // entries 返回数组的键值对
//     for (let [index, queryStr] of queryStrList.entries()) {
//         let itemList = queryStr.split('=');
//         // console.log(itemList);
//         // decodeURIComponent 解决 // 转化不是乱码的问题
//         queryData[itemList[0]] = decodeURIComponent(itemList[1]);
//     }
//     return queryData;
// }

server.listen(3333, () => {
    console.log('server is start at port 3333')
});