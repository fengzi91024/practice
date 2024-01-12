const express = require("express");
// 创建router 对象 处理成绩的业务
const router = express.Router();
//导入模块
const { sequelize, Grade } = require("../db/table_Model");

// 访问路径list 返回数据库grades表中的数据
router.get("/list", (req, res) => {
  (async () => {
    //查询表中的所有信息
    const list = await Grade.findAll();
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

//向grades 表添加信息
router.post("/add", (req, res) => {
  //创建实列
  const message = {

  };
  const grade = Grade.build(message);
  (async () => {
    try {
      const instance = await grade.save();
      console.log("以添加入数据库");
      res.send({
        status: "ok",
        data: instance.toJSON(),
      });
    } catch (error) {
      console.log("Grade表,数据库添加失败" + error);
    }
  })();
});

//修改grades信息
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

//删除成绩信息
router.delete("/delete", (req, res) => []);

module.exports = router;
