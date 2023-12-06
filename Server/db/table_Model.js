const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require("./mysql");

//创建student表模型
const student = sequelize.define('student',{
    //学号
    student_number:{
        type:DataTypes.STRING,
        unique:true
    },
    //姓名
    name:{
        type:DataTypes.STRING,
    },
    //性别
    gender:{
        type:DataTypes.STRING,
    },
    //出生日期
    date_of_birth:{
        type:DataTypes.DATE
    },
    //专业
    major:{
        type:DataTypes.STRING,
    },
    //年级
    grade:{
        type:DataTypes.STRING,
    },
    //班级
    class:{
        type:DataTypes.STRING,
    },
    //联系方式
    contact:{
        type:DataTypes.STRING,
    },
    //地址
    address:{
        type:DataTypes.STRING,
    },
    //注册日期
    registration_date:{
        type:DataTypes.DATE,
    }
})

//创建grade表模型
const grade = sequelize.define('grade',{
    //学生ID
    student_id:{
        type:DataTypes.INTEGER,
        //创建外键
        references:{
            model:student,
            key:'id',    
        }
    },
    //学分
    subject:{
        type:DataTypes.STRING,
    },
    //时间
    score:{
        type:DataTypes.FLOAT
    },
    //评分时间
    evaluation_date:{
        type:DataTypes.DATE,
         // 默认当前时间
        defaultValue: DataTypes.NOW 
    }

})

//创建teacher表模型
const teacher = sequelize.define('teachers',{
    //姓名
    name:{
        type:DataTypes.STRING
    },
    //教学专业
    field_of_study:{
        type:DataTypes.STRING
    },
    //联系方式
    contact:{
        type:DataTypes.STRING
    },
    //办公地址
    office_address:{
        type:DataTypes.STRING
    }
})

//创建announcements表模型
const announcement = sequelize.define('announcement',{
    //标题
    title:{
        type:DataTypes.STRING
    },
    //内容
    content:{
        type:DataTypes.TEXT
    },
    //发布日期
    date_posted:{
        type:DataTypes.DATE
    },
    //发布ID
    author_id:{
        type:DataTypes.INTEGER,
        references:{
            model:teacher,
            key:'id'
        }
    }
})

//创建User 表模型
const user = sequelize.define('user',{
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    user_type:{
        type:DataTypes.STRING
    }
})



module.exports={
    sequelize,
    user,
    announcement,
    teacher,
    student,
    grade
}