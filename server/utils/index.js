const db = require('./../../config/db');
const dbConfig = db.database;
const mysql = require('mysql');

// 连接池
const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database
});

// 连接
let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        // 获取连接
        pool.getConnection(function (err, connection) {
            if (err) {
                throw error
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        console.log(err, "Get connection from mysql pool failed !");
                        throw error
                        resolve(err)
                    } else {
                        resolve(rows)
                    }
                    // 释放资源
                    connection.release()
                })
            }
        })
    })
};
// 建表
let createTable = function (sql) {
    return query(sql, [])
};
//  查找数据id
let findDataById = function (table, id, start, end) {
    let _sql = "SELECT * FROM ?? WHERE id = ?"
    return query(_sql, [table, id, start, end])
};
// 分页查找数据
let findDataByPage = function (table, keys, start, end) {
    let _sql = "SELECT ?? FROM ?? LIMIT ? , ?"
    return query(_sql, [keys, table, start, end])
}
// 插入数据
let insertData = function (table, values, start, end) {
    let _sql = "SELECT ?? FROM ?? LIMIT ? , ?"
    return query(_sql, [keys, table, start, end])
}
// 更新数据
let updateDate = function (table, values, id) {
    let _sql = "UPDATE ?? SET? WHERE id = ?"
    return query(_sql, [table, values, id])
}
// 删除数据ID
let deleteDateById = function (table, id) {
    let _sql = "DELETE FROM ?? WHERE id = ?"
    return query(_sql, [table, id])
}
// 查询
let select = function (table, keys) {
    let _sql = "SELECT ?? FROM ??"
    return query(_sql, [keys, table])
}
// 连接
let count = function (table) {
    let _sql = "SELECT COUNT(*) AS total_count FROM ??"
    return query(_sql, [table])
}

module.exports = {
    query,
    createTable,
    findDataById,
    findDataByPage,
    deleteDateById,
    insertData,
    updateDate,
    select,
    count,
}


































