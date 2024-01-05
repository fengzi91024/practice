<script setup>
import {inject} from "vue";

const props = defineProps(["student"])
const {students,delHandlerIndex} = inject("student")
</script>
<template>
  <tbody>
  <tr v-for="(stu,index) in students" :key="stu.id">
    <td>{{stu.id}}</td>
    <td>{{ stu.name }}</td>
    <td>{{stu.age}}</td>
    <td>{{stu.gender}}</td>
    <td>{{stu.address}}</td>
    <td>
      <a href="#" @click.prevent="delHandlerIndex(index)">删除</a>
    </td>
  </tr>
  </tbody>
</template>
<style scoped>
td {
  border: 1px solid black;
}
</style>