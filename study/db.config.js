const {Sequelize,DataTypes} =  require("sequelize");

const sequelize = new Sequelize("stu_sys","root","p@ssw0rd",{
    host:"localhost",
    dialect:"mysql",
    define:{
      //关闭自动生成复数表明
      freezeTableName:true,
      timestamps:false
    },
    
})


// 测试连接 .authenticate() 函数测试连接是否正常：
;(async () => {
  try {
    await sequelize.authenticate();
    console.log("连接成功");
  } catch (error) {
    console.log("连接数据库错误", error);
  }
})();


// 创建表模型
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

//创建成绩表模型
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
const Teacher = sequelize.define('teacher',{
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
      await sequelize.sync({});    
  }catch(error){
      console.error("同步数据库结构失败",error);
  }
})();


  module.exports = {
    sequelize,
    Student
  }