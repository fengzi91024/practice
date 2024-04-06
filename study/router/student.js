const express = require("express")
const router = express.Router()

const { Student } = require("../db.config.js");
const $utils = require("../utils/apiHelpers.js");
const { Sequelize, } = require('sequelize');





// 访问路径list 返回数据库students表中的数据
router.get("/list", async (req, res) => {
  try {
    const {student_number} = req.query
    let data

    if(student_number){
      data = await $utils.queryField(student_number,Student)
    }else{
      data = await $utils.queryTableData(Student)
    }
    
    res.send({
      status: "ok",
      // 给客户端
      data,
    });
  } catch (error) {
    res.status(500).send("<h1>服务器错误500</h1>" + error.message)
  }

});



















module.exports = router


