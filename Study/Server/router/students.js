const express = require("express");



// 处理学生的业务
// 创建router 对象
const router = express.Router()





// 访问路径list 返回数据库students表中的数据
router.get("/list",(req,res)=>{
    // 传入要查询的students 表
    sqldb.getAllUser("students")
    .then((result)=>{
        // 返回数据给客户端
        res.send({
            // 状态ok
            status:"ok",
            data:result
        })
    })
    .catch((err)=>{
        res.statusCode(500).send("服务器错误")
        console.log(err)
    })
})


// 查询单个学生的数据
router.get("/:id",(req,res)=>{
    
    const id = req.params.id

    sqldb.getUser(id,"students")
    .then((result)=>{
        res.send({
            status:"ok",
            data:result
        })
    })
    .catch((err)=>{
        res.send(err)
    })
})





module.exports = router
