const {Sequelize, DataTypes, Model} = require('sequelize');



/* 
    模型实例
    Model Instances
*/


// 连接数据库
const sequelize = new Sequelize('test','root','p@ssw0rd',{
    host:'localhost',
    dialect:'mysql',
    
    define:{
        freezeTableName:true,    //全局配置停止模型名称复数自动化
        noPrimaryKay:true    // 防止Sequelize 自动将主键属性id 添加到每个模型
    }
});



//创建模型
const User = sequelize.define("user",{
    name:DataTypes.TEXT,
    favoriteColor:{
        type:DataTypes.TEXT,
        defaultValue:'green'
    },
    age:DataTypes.INTEGER,
    cash:DataTypes.INTEGER
});


// 同步数据
(async () => {
    await sequelize.sync({ force: true });
    // 这里是代码
  })();
