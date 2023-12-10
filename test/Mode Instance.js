const { Sequelize, DataTypes, Model } = require("sequelize");
/* 
    模型实例
    Model Instances

    # 使用 yarn
      yarn add sequelize
      yarn add mysql2     # MySQL

*/

// 连接数据库
const sequelize = new Sequelize("test", "root", "p@ssw0rd", {
  host: "localhost",
  dialect: "mysql",
  timezone: "Asia/Shanghai",
  dialectOptions: {
    timezone: "local",
  },
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been establicshed successfully");
  } catch (err) {
    console.error("Unable to connect to the databases:", err);
  }
}

test();

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

//创建实列   尽管模型是一个类，但是不是用new运算符创建实列，应该使用build 方法：
// const jane = User.build({ name: "Jane" });
// console.log(jane instanceof User);
// console.log(jane.name);

(async () => {
  try {
    //creat 方法  创建实列并保存入数据库中，build save 二合一
    const jane = await User.create({ name: "Jane" });

    //更新实列,需要再次调用save()方法,更新单个数据

    await jane.save();

    //set方法可以一次更新多个字段
    jane.set({
      favoriteColor: "red",
    });

    await jane.save();

    //使用update 可以直接使用模型进行修改,指定的id对象
    await User.update(
      { name: "LinXun" },
      {
        where: { id: 1 },
      }
    );
    //删除实列
    await jane.destroy();
    console.log("删除实列成功");

    //重载返回数据库的值
    // const jane = await User.create({ name: "Jane" });
    console.log(jane.name); // "Jane"
    jane.name = "Ada";
    // 数据库中的名称依然是 "Jane"
    await jane.reload();
    console.log(jane.name); // "Jane"

    //查看实列记录，使用Json 格式的数据进行查看,sequelize中有许多附加条件
    console.log(jane.toJSON());

    //直接获取默认值
    console.log(jane.favoriteColor);
  } catch (err) {
    console.log(err);
  }
})();
