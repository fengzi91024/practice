//检查数据
const CHECK_DATA = {
  //没有数据
  NOT_DATA: 0,
};

//添加数据方法
const addData = async (addMessage, table) => {
  const item = await table.create(addMessage);
  return item;
};

//通过ID,删除方法
const deleteId = async (id, table) => {
  const item = await table.destroy({
    where: {
      id,
    },
  });

  if (item === CHECK_DATA.NOT_DATA) {
    return "删除失败";
  }

  return "删除成功";
};

//更新数据库信息
const updateData = async (update_message, table) => {
  const { student_number } = update_message;
  const item = await table.update(update_message, {
    where: { student_number },
  });

  if (item[0] === CHECK_DATA.NOT_DATA) {
    return "更新失败";
  }
  return "更新成功";
};

//通过ID 查询数据
const queryId = async (id, table) => {
  const item = await table.findAll({
    where: {
      id,
    },
  });

  if (item.length > 0) {
    return item[0];
  }

  if (item.length === CHECK_DATA.NOT_DATA) {
    return "查询ID为空";
  }
};

//查询表中数据ALL
const queryTableData = async (table) => {
  //查询表中的所有信息
  const list = await table.findAll();
  //格式化数据
  let items = JSON.stringify(list, null, 1);
  items = JSON.parse(items);

  if (items.length > 0) {
    return items;
  }

  if (items.length === CHECK_DATA.NOT_DATA) {
    return "表为空";
  }
};

module.exports = { queryId, deleteId, addData, updateData, queryTableData };
