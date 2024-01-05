<template>

  <table>
    <caption>学生列表</caption>
    <thead>
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>住址</th>
      <th>操作</th>
    </tr>
    </thead>
    <StudentItem></StudentItem>
  </table>
</template>

<script setup>
  import StudentItem from "@/components/StudentItem.vue";
  const props = defineProps(["students"])
  const emits = defineEmits(["delStu"])

  const delStuHandler = (index) =>{
    if(confirm("该操作不可恢复，请确认")){
      emits('delStu',index);
    }
  }
</script>

<style scoped>
caption {
  font-size: 36px;
  font-weight: bold;
}

table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 400px;
  text-align: center;
}

th {
  border: 1px solid black;

}


</style>