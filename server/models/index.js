const dbUtils = require('./../utils/index');

const user = {
    async create (model) {
        let result = await dbUtils.insertData('user_table', model);
        return result
    },
    async getUser (options){
        let _sql = `SELECT * FROM user_info WHERE name='${options.username}' limit 1`

    }

}