<template>
  <div class="tab-item">
    <Photo :src="item.img" :alt="item.name" :rate="item.rate"></Photo>
    <div class="desc">
      <span class="name">{{item.name}}</span>
      <HotBar :hot="item.hot" :maxHot="props.maxHot"></HotBar>
    </div>
  </div>
</template>

<script setup>
import Photo from "@/components/Photo.vue";
import HotBar from "@/components/HotBar.vue";
  const props = defineProps(["item","maxHot"])
  const item = props.item
console.log()
</script>

<style scoped>
.tab-item{
  display: flex;
  margin-bottom: 30px;
}
.desc{
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  font-size: 30px;
  color: #ffffff;
  flex: auto;
  margin-left: 30px;
}
</style>