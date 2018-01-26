// 总路由
const router = require('koa-router')();

const home = require('./home');
const admin = require('./admin');

router.use('/', home.routes(), home.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

module.exports = router;