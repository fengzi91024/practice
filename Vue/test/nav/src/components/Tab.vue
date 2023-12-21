<template>
  <div class="tab-wrapper">
    <header class="tab-head">
      <!--定义两个按钮-->
      <div @click="current=0" class="tab-button" :class="{active:current===0}">热门球员</div>
      <div @click="current=1" class="tab-button" :class="{active:current===1}">热门球队</div>
    </header>
    <div class="main">
      <div v-show="current === 0">
<!--        <TableList :items="players" :max-hot="playerMaxHot"></TableList>-->

          <slot name="0"></slot>
      </div>

      <div v-show="current === 1">
        <slot name="1"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
  import TableList from "@/components/TableList.vue";
  import {ref} from "vue";
  const current = ref(0)
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
</style>