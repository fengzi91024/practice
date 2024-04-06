/* 
    安装环境
    yarn add sequelize 
    安装数据库驱动
    yarn add mysql2
*/
const { log } = require("node:console");
const fs = require("node:fs")
const path = require("node:path")
//导入sequelize 模块
const { Sequelize } = require("sequelize");

// 文件系统创建文件
const logStream = fs.createWriteStream(path.join(__dirname,'sequelize.log'),{flags:'a'});

//配置数据库信息
const sequelize = new Sequelize("test", "root", "p@ssw0rd", {
  host: "localhost",
  //选择数据库
  dialect: "mysql",
  // logging选择一种日志记录参数
  /* 
  logging: console.log,                  // 默认值,显示日志函数调用的第一个参数
  logging: (...msg) => console.log(msg), // 显示所有日志函数调用参数
  logging: false,                        // 禁用日志记录
  logging: msg => logger.debug(msg),     // 使用自定义记录器(例如Winston 或 Bunyan),显示第一个参数
  logging: logger.debug.bind(logger)     // 使用自定义记录器的另一种方法,显示所有消息
    */
  logging: (...msg) => {logging(msg)},
  dialectOptions:{
    charset: 'utf8mb4',
  }
});

// 测试连接 .authenticate() 函数测试连接是否正常：
(async () => {
    try {
      await sequelize.authenticate();
      console.log("连接成功");
    } catch (error) {
      console.log("连接数据库错误", error);
    }
  })();

  function logging(msg) {
    console.log(msg);
    logStream.write(`${new Date().toISOString()} - ${msg}\n`)
  }



module.exports = {
  logging,
  sequelize
}
