// 首页
module.exports = async (ctx) => {
    const title = '首页';
    // if(ctx.session && ctx.session.login && ctx.session.usrname){
    //
    // }
    await ctx.render('home',{
        title
    });
};