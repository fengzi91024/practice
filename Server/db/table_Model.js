const {Sequelize, DataTypes} = require('sequelize');


//创建数据库连接
const sequelize = new Sequelize('stu_sys','root','p@ssw0rd',{
    host:'localhost',
    dialect:'mysql',
    //设置时间为东八区
    timezone:"Asia/Shanghai",
    dialectOptions:{
        //传递到数据库时，转为本地时间
        timezone:"local",
        //设置字符串设置
        charset:"utf8mb4"
    },
    

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


//创建student表模型
const Student = sequelize.define('student',{
    //学号
    student_number:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    //姓名
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //性别
    gender:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //出生日期
    date_of_birth:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    //专业
    major:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //年级
    grade:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //班级
    class:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //联系方式
    contact:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //地址
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //注册日期
    registration_date:{
        type:DataTypes.DATEONLY,
        allowNull:false
    }
})

//创建grade表模型
const Grade = sequelize.define('grade',{
    //学生ID
    student_id:{
        type:DataTypes.INTEGER,
        //创建外键
        references:{
            model:Student,
            key:'id',    
        },
        allowNull:false
    },
    //学科
    subject:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //成绩
    score:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    //评分时间
    evaluation_date:{
        type:DataTypes.DATEONLY,
         // 默认当前时间
        defaultValue: DataTypes.NOW 
    }

})

//创建teacher表模型
const Teacher = sequelize.define('teachers',{
    //姓名
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //教学专业
    field_of_study:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //联系方式
    contact:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //办公地址
    office_address:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

//创建announcements表模型
const Announcement = sequelize.define('announcement',{
    //标题
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    //内容
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    //发布日期
    date_posted:{
        type:DataTypes.DATE,
        allowNull:false
    },
    //发布ID
    author_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Teacher,
            key:'id'
        },
        allowNull:false
    }
})

//创建User 表模型
const User = sequelize.define('user',{
    username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_type:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

;(async ()=>{
    try{
        //同步数据库表结构
        await sequelize.sync({force:true});    
    }catch(error){
        console.error("同步数据库结构失败",error);
    }
})();




//给实例对象
module.exports={
    sequelize,
    User,
    Announcement,
    Teacher,
    Student,
    Grade
}