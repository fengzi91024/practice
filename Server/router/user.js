const express = require("express");
const router = express.Router();
//导入数据库模块
const { User, sequelize } = require("../db/table_Model");

//解析json 和url 请求的中间件
router.use(express.json())
router.use(express.urlencoded({extended:true}))


//登录
router.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log(req.body);
  ;(async () => {
    const result = await User.findAll({where:{username:username,password:password}});
    res.send({
        status:"ok",
        data:result
    })
  })();
});

// 注册
router.post("/register", (req, res) => {
    (async()=>{
        await User.create({username:"root",password:"123456",user_type:"admin"})
        res.send({
            status:"ok",
            data:"注册成功"
        })
    })();
});

module.exports = router;
