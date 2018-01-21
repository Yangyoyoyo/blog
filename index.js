const Sequelize = require('sequelize');
const Koa = require('koa');
const config = require('./config');
const server = new Koa();
server.listen(3000);

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})

const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
});

User.sync({focus: true}).then(() => {
    return User.create({
        firstName: "gao",
        lastName: "yang"
    })
})

// User.findOne().then(user => {
//     console.log(user.get('firstName'));
// });

// async function test() {
//     user = await User.findOne(),
//     console.log('--------')
//     console.log(user.get('firstName'))
// }
async (ctx) => {
    user = await User.findOne(),
    console.log('--------')
    console.log(user.get('firstName'))
}

