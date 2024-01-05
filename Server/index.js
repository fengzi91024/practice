const express = require("express");
const app = express();
// 导入模块
const { User, sequelize } = require("./db/table_Model.js");


//解析json 和url 请求的中间件
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// 注册学生的路由，处理学生的路由
app.use("/student",require("./router/students.js"));


//设置响应头
app.use((req,res,next)=>{
  //设置响应头
  res.setHeader("Access-Control-Allow-Origin","*")
  //设置允许的请求方式
  res.setHeader("Access-Control-Allow-Methods","GET,POST")
  //运行传递的请求头
  res.setHeader("Access-Control-Allow-Headers","Content-type")

  next();
})


app.get("/users",(req,res)=>{
  ;(async () => {
    const result = await User.findAll();
    res.send({
        status:"ok",
        data:result
    })
  })();
})



//登录
app.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log(username,password);
  ;(async () => {
    const result = await User.findAll({where:{username:username,password:password}});
    res.send({
        status:"ok",
        data:result
    })
  })();
});

// 注册
app.post("/register", (req, res) => {
  //获取用户名和密码
    (async()=>{
        await User.create({username:"wagnwu",password:"123456",user_type:"user"})
        res.send({
            status:"ok",
            data:"注册成功"
        })
    })();
});



app.post("/update",(req,res)=>{
  console.log(req.body);
})






















































































// 打开端口4000

app.listen(4000, () => {
  console.log("Server running 4000 ports,http://127.0.0.1:4000/");
});
