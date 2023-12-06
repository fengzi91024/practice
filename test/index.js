const { Sequelize, DataTypes, Model } = require("sequelize");

/* 
    模型实例
    Model Instances
*/

// 连接数据库
const sequelize = new Sequelize("test", "root", "p@ssw0rd", {
  host: "localhost",
  dialect: "mysql",
  define:{
    timestamps:false
  }
});


async function test(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been establicshed successfully');
    } catch(err){
        console.error('Unable to connect to the databases:',err);
    }

}

test();

//创建模型
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

const jane = User.build({ name: "Jane" });
console.log(jane instanceof User);
console.log(jane.name);




//创建实列   尽管模型是一个类，但是不是用new运算符创建实列，应该使用build 方法：


(async () => {
    // 同步数据库（等待操作完成）
    await sequelize.sync({ force: true });
  
    // 创建并保存实例（等待操作完成）
    await jane.save();
    console.log('Jane 已保存到数据库!');
  })();
  
