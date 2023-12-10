// Model Querying  查询
const { Sequelize, DataTypes, Model } = require("sequelize");

// 连接数据库
const sequelize = new Sequelize("test", "root", "p@ssw0rd", {
  host: "localhost",
  dialect: "mysql",

  define: {
    freezeTableName: true, //全局配置停止模型名称复数自动化
    noPrimaryKay: true, // 防止Sequelize 自动将主键属性id 添加到每个模型
  },
});
//创建模型
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    //默认值
    defaultValue: "green",
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

(async () => {
    await sequelize.sync()
  //创建一个新的用户
  //fields 创建实列只更新fields 也可以做对应的数据库修改数据的权限，只允许修改对应的数据
  const jane = await User.create(
    { name: "Jane", age: 18, cash: 28 },
    { fields: ["name","age"] }
  );
    // 查询表
    const users = await User.findAll({attributes:['name','age']});
    //嵌套结构可以修改表结构的字段
    // const users = await User.findAll({attributes:['name',['age','nian']]});
    
    console.log(users.every(user => user instanceof User));
    console.log("All users:", JSON.stringify(users,null,2));
})();
