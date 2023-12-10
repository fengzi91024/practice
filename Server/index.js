const express = require("express");
const app = express();



//设置响应头
app.use((req,res,next)=>{
  //设置响应头
  res.setHeader("Access-Control-Allow-Origin","*")

  next();
})




// 注册学生的路由
app.use("/student",require("./router/students.js"))


// 注册用户的路由
app.use("/user",require("./router/user.js"))






















































































// 打开端口4000

app.listen(4000, () => {
  console.log("Server running 4000 ports,http://127.0.0.1:4000/");
});
