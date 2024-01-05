<script setup>
import StudentList from "@/components/StudentList.vue";
import {ref,provide} from "vue";
import StudentForm from "@/components/StudentForm.vue";
import {useCountStore} from "./store/countStore.js";



  //定义一组数据
const STU_ARR = ref([
  {
    id:1,
    name:"孙悟空",
    age:18,
    gender:"男",
    address:"水帘洞"
  },
  {
    id:2,
    name:"沙悟净",
    age:28,
    gender:"男",
    address:"流沙河"
  },
  {
    id:3,
    name:"猪八戒",
    age:38,
    gender:"男",
    address:"高老庄"
  }
])


// 定义一个删除学生的方法
const delHandlerIndex = (index)=>{
  STU_ARR.value.splice(index,1)
}
// 定义一个添加学生的方法
const addNewStudent = (student )=>{
  const lastId = STU_ARR.value.at(-1)?.id
  const newId = !isNaN(lastId) ? lastId + 1 : 1
  student.id = newId
  STU_ARR.value.push(student)
}

provide("student",{
  students:STU_ARR,
  delHandlerIndex,
  addNewStudent
})

const countStore = useCountStore()

</script>
<template>
  <StudentList></StudentList>
  <hr>
  <StudentForm></StudentForm>
  <hr>
  <h1>
    {{countStore.count}}
   
  </h1>
</template>


<style scoped>

</style>