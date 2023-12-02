const {Sequelize, DataTypes} = require('sequelize');


// 连接数据库
const sequelize = new Sequelize('system','root','p@ssw0rd',{
    host:'localhost',
    dialect:'mysql',
    //全局配置停止模型名称复数自动化
    define:{
        freezeTableName:true
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


const User = sequelize.define('User',{
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING
    }
},{
    
})

console.log(User === sequelize.models.User)




/*
    关闭数据库连接

*/
// sequelize.close();
