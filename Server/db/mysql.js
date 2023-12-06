const {Sequelize} = require("sequelize");

//创建数据库连接
const sequelize = new Sequelize('stu_sys','root','p@ssw0rd',{
    host:'localhost',
    dialect:'mysql',

})

//测试连接
async function test_Connection(){
    try{
        await sequelize.authenticate();
        console.log('Connection has been establicshed successfully');
    } catch(err){
        console.error('Unable to connect to the databases:',err);
    }
}

test_Connection();







module.exports = sequelize