// 登录页
module.exports = async(ctx) => {
    const title = '登录页面';
    await ctx.render('admin',{
        title
    })
};