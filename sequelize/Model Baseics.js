const { DataTypes } = require('sequelize');
const sequelize = require('./db.config');

const Log = sequelize.define('Log', { // 模型名称首字母大写
    id: {
        type: DataTypes.INTEGER, // 使用 INTEGER
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    logtype:{
        type:DataTypes.STRING,
        allowNull:false
    }
    ,
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER, // 使用 INTEGER
        allowNull: false
    }
}, {
    // 其它参数配置
    timestamps: true
});

(async () => {
    await Log.sync({force:true}); // 或 Log.sync({ force: true }) 重置表结构
    console.log("Log 模型表刚刚(重新)创建！");
})();


module.exports = Log