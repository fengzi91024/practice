const express = require("express");
// 创建router 对象 处理老师的业务
const router = express.Router();
//导入数据库配置
const { Teacher } = require("../db/db_config.js");
const {Sequelize,} = require('sequelize');

//导入api辅助函数模块
const $utils = require("../utils/apiHelpers.js");

// 访问路径list 返回数据库Teachers表中的数据
router.get("/list", async(req, res) => {
   try{
    const data = await $utils.queryTableData(Teacher)
    res.send({
      status: "ok",
      // 给客户端
      data,
    });
   }catch(error){
      res.status(500).send("<h1>服务器错误500</h1>"+ error.message)
   }

});

// 查询单个老师的数据
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const Teacher = await $utils.queryId(id, Teacher);
    res.json({
      status: "ok",
      data: Teacher,
    });
  } catch (error) {
    res.status(500).send("<h1>服务器错误500</h1>"+ error.message)
  }
});

//向Teachers 表添加信息
router.post("/add", async (req, res) => {
  const message = req.body;
  console.log(message);
  try {
    const data = await $utils.addData(message, Teacher);
    res.json({
      status: "ok",
      data,
    });
  } catch (error) {
    //判断错误是否违法数据库唯一性
    if (error instanceof Sequelize.UniqueConstraintError) {
      res.status(404).send("<h1>客户端问题</h1>");
    }
  }
});

//修改老师信息
router.put("/update", async (req, res) => {
  //要修改的信息配置项
  const update_message = req.body;
  try {
    const data = await $utils.updateData(update_message, Teacher);
    res.send({
      status: "ok",
      data,
    });
  } catch (error) {
    res.status(500).send("<h1>服务器错误500</h1>"+ error.message)
  }
});

//删除老师信息
router.delete("/delete", async (req, res) => {
  try {
    const id = 1;
    const data = await $utils.deleteId(id, Teacher);
    res.json({
      status: "ok",
      data,
    });
  } catch (error) { 
    res.status(500).send("<h1>服务器错误500</h1>"+ error.message)
  }
});

module.exports = router;
