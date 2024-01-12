const express = require("express");
// 创建router 对象 处理老师的业务
const router = express.Router();
//导入模块
const { sequelize, Teacher } = require("../db/table_Model");

// 访问路径list 返回数据库Teacher表中的数据
router.get("/list", (req, res) => {
  (async () => {
    //查询表中的所有信息
    const list = await Teacher.findAll();
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

// 查询单个老师的数据
router.get("/:id", (req, res) => {
  const id = req.params.id;
});

//向Teacher 表添加信息
router.post("/add", (req, res) => {
  //创建实列
  const message = {

  };
  const teacher = Teacher.build(message);
  (async () => {
    try {
      const instance = await teacher.save();
      console.log("以添加入数据库");
      res.send({
        status: "ok",
        data: instance.toJSON(),
      });
    } catch (error) {
      console.log("Teacher表,数据库添加失败" + error);
    }
  })();
});

//修改老师信息
router.put("/update", (req, res) => {
  //要修改的信息配置项
  const update_message = {

  };
  (async () => {
    //更新数据库信息
    await Teacher.update(update_message, {
        //where 配置信息
      where: { },
    });
    console.log("更新数据成功");

    res.send({
      status: "ok",
      data: "更新成功",
    });
  })();
});

//删除老师信息
router.delete("/delete", (req, res) => []);

module.exports = router;
