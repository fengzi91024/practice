class Database {
    constructor(config) {
      this.connection = mysql.createConnection(config);
    }
  
    // 连接数据库
    connect() {
      return new Promise((resolve, reject) => {
        this.connection.connect((err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      });
    }
  
}
  
  const { rejects } = require("assert");
  const { time, error, table } = require("console");
  const mysql = require("mysql");
  const { resolve } = require("path");
  
  // 使用这个类
  const db = new Database({
    host: "localhost",
    port:"3306",
    user: "root",
    password: "p@ssw0rd",
    database: "system",
  });
  //判断连接状态
  db.connect()
    .then(() => {
      console.log("数据库连接成功");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  module.exports = db;
  