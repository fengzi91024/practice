const {Sequelize, DataTypes, Model} = require('sequelize');


/*
        基于promise API
        异步函数，返回值为promise

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

//测试连接

async function test(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been establicshed successfully');
    } catch(err){
        console.error('Unable to connect to the databases:',err);
    }

}

test();

//Model Basics - 模型基础
/* const User = sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
},{
    
})

console.log(User === sequelize.models.User) */

class User extends Model{}

/* 
    默认值
        默认情况，Sequelize 假定列的默认值为Null
        可以通过将特定的defaultValue 传递给列定义来更改此行为
*/

User.init({
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
    
},{
    sequelize,
    modelName:'User',
    // 自定义表名
    tableName:'Users',
   // timestamps: false,   不自动生成createdAt 和  updatedAt   创建时间和更新时间，用于追踪数据，审计数据 
   // createdAt:false,     不想使用
   // updateAt:'updateTimestamp' 修改名字
 
});

console.log(User === sequelize.models.User);


/*
    如果模型的定义与数据库中的字段和列数不同时，可以使用sequelize 自动化查询SQL 数据库，不更改JavaScript的模型
User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.

*/

async function syncSQL(){
    //await User.sync({force: true});   // 创建表，已存在，则先删除
    
    //await sequelize.sync({force:true});  //一次性同步所有模型
    
    //await User.drop();      // 删除表

    //console.log("以删除表");

    /*
        数据库安全检查
            对于sync和drop 操作具有破坏性的，Sequlize 使用match 参数作为附加的安全检查，RegExp 使用正则
    */
       sequelize.sync({ force: true, match: /test$/ });
}

syncSQL();
