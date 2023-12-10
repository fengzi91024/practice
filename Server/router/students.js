const express = require("express");
// 创建router 对象 处理学生的业务
const router = express.Router();
//导入模块
const { sequelize, Student } = require("../db/table_Model");

// 访问路径list 返回数据库students表中的数据
router.get("/list", (req, res) => {
  (async () => {
    //查询表中的所有信息
    const list = await Student.findAll();
    //格式化数据
    let temp = JSON.stringify(list, null, 1);
    temp = JSON.parse(temp);
    res.send({
      status: "ok",
      // 给客户端
      data: temp,
    });
  })();
});

// 查询单个学生的数据
router.get("/:id", (req, res) => {
  const id = req.params.id;
});

//向students 表添加信息
router.post("/add", (req, res) => {
  //创建实列
  const message = {
    student_number: "S1001",
    name: "张三",
    gender: "男",
    date_of_birth: "2001-01-01",
    major: "计算机科学",
    grade: "大一",
    class: "1班",
    contact: "13800138000",
    address: "北京市海淀区",
    registration_date: "2021-09-01",
  };
  const student = Student.build(message);
  (async () => {
    try {
      const instance = await student.save();
      console.log("以添加入数据库");
      res.send({
        status: "ok",
        data: instance.toJSON(),
      });
    } catch (error) {
      console.log("Student表,数据库添加失败" + error);
    }
  })();
});

//修改学生信息
router.put("/update", (req, res) => {
  //要修改的信息配置项
  const update_message = {
    student_number: "S1001",
    name: "张三",
    gender: "男",
    date_of_birth: "2001-01-01",
    major: "计算机科学",
    grade: "大一",
    class: "1班",
    contact: "13800138000",
    address: "北京市海淀区",
    registration_date: "2021-09-02",
  };
  (async () => {
    //更新数据库信息
    await Student.update(update_message, {
      where: { student_number: update_message.student_number },
    });
    console.log("更新数据成功");

    res.send({
      status: "ok",
      data: "更新成功",
    });
  })();
});

//删除学生信息
router.delete("/delete", (req, res) => []);

module.exports = router;
