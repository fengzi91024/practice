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

  // 获取表的所有数据
  getAllUser() {
    // 使用变量，传递要查询的表
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM users`,(error, results) => {
        if (error) {
          reject(error);
        } else {
          // 将结果存储在resolve中
          resolve(results);
        }
      });
    });
  }

  //查询单个用户
  getUser(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `SELECT * FROM users WHERE id = ?`,
        [id],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          // 判断数组长度是否为0
          if (results.length !== 0) {
            resolve(results[0]);
          } else {
            reject("查无此用户");
          }
        }
      );
    });
  }
  //添加数据
  addUser(username, password) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `INSERT INTO users (username, password) VALUES (?, ?)`,
        [username, password],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            //自增长id 插入时，会返回insertId
            const userId = results.insertId;
            //传给getUser 方法去查询添加的用户返回给客户端
            this.getUser(userId)
              .then((data)=>{
                resolve(data)
              })
          }
        }
      );
    });
  }

  //通过id删除用户
  //删除就查不到，所以先通过id,使用getUser 
  delUser(userid) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `DELETE FROM users WHERE id = ?`,
        [userid],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  // 修改信息
  updateUser(id, username, password,table) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `UPDATE users SET username = ?, password = ? WHERE id = ?`,
        [username, password, id],
        (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        }
      );
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
