<script setup>
//创建一个变量记录选项卡的状态
import {reactive, ref} from "vue";
import Tab from "@/components/Tab.vue";
import TableList from "@/components/TableList.vue";



const players = reactive([
  {
    name:"梅西",
    img:"/images/messi.png",
    rate:1,
    hot:433760
  },
  {
    name:"C罗",
    img:"/images/ronaldo.png",
    rate: 2,
    hot:333460
  },
  {
    name:"内马尔",
    img:"/images/neymar.png",
    rate:3,
    hot:233460
  }
])

const teams = reactive([
  {
    name:"法国队",
    img:"/images/法国.jpg",
    rate:1,
    hot:333760
  },
  {
    name: "巴西队",
    img:"/images/巴西.jpg",
    rate:2,
    hot:233760
  },
  {
    name:"荷兰队",
    img:"/images/荷兰.jpg",
    rate:3,
    hot:133760
  }
])

const playerMaxHot = players[0].hot
const teamMaxHot = teams[0].hot
</script>



<template>
    <Tab>
      <template #0>
        <TableList :items="players" :max-hot="playerMaxHot"></TableList>
      </template>
      <template #1>
        <TableList :items="teams" :max-hot="teamMaxHot"></TableList>
      </template>
    </Tab>
</template>


<style scoped>




</style>