// 首页
module.exports = async (ctx) => {
    const title = '首页';
    await ctx.render('home',{
        title
    });
};