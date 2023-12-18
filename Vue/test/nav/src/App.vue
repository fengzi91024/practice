<template>
  <div class="tab-wrapper">
    <header class="tab-head">
      <!--定义两个按钮-->
      <div @click="current=0" class="tab-button" :class="{active:current===0}">热门球员</div>
      <div @click="current=1" class="tab-button" :class="{active:current===1}">热门球队</div>
    </header>
    <div class="main">
      <div v-show="current === 0">
          <div class="tab-list">
           <TableItem :item="player"></TableItem>
          </div>
      </div>

      <div v-show="current === 1">
        <div class="tab-list">
        <TableItem :item="team"></TableItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//创建一个变量记录选项卡的状态

import {reactive, ref} from "vue";
import TableItem from "@/components/TableItem.vue";

const current = ref(0)

const player = reactive({
  name:"梅西",
  img:"/images/messi.png",
  rate:1,
  hot:433760
})

const team = reactive({
  name:"法国队",
  img:"/images/法国.jpg",
  rate:1,
  hot:333760
})
</script>


<style scoped>
  .tab-wrapper{
    box-sizing: border-box;
    padding: 20px;
    width: 800px;
    background-color: rgb(40, 77, 198);
  }
  .tab-head{
    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }
  .tab-button{
    background-color: #fff;
    font-size: 30px;
    padding: 10px 0;
    flex: auto;
    text-align: center;
    cursor: pointer;
    transition: 0.5s;
  }
  .tab-button:not(.active):hover{
    color: rgb(187,3,52);
  }

  .active{
    background-color: rgb(187,3,52);
    color: #ffffff;
  }

  .tab-list{
    margin:20px;
  }



</style>