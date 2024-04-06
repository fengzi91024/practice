const express = require("express");
const app = express();
const db = require("./db.config")




app.use((req, res, next) => {
  // 允许哪些源访问资源
  res.header('Access-Control-Allow-Origin', '*'); // '*' 表示允许所有域的请求，出于安全考虑，你可能希望指定特定的域名     
  next()
})


// 注册学生路由
app.use("/student",require("./router/student.js"))








app.listen(8881, () => {
  console.log("http://127.0.0.1:8881/");
})