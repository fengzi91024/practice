const express = require("express");
const app = express();



// 注册学生的路由
app.use("/students",require("./router/students.js"))


// 注册用户的路由
app.use("/user",require("./router/user.js"))






















































































// 打开端口4000

app.listen(4000, () => {
  console.log("Server running 4000 ports,http://127.0.0.1:4000/students/list");
});
