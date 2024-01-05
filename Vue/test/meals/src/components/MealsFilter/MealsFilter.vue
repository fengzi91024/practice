<template>
  <div class="filter">
    <div class="filter-inner">
      <input
          class="filter-input"
          type="text"
          placeholder="请输入关键字" v-model="useMeals.keyword">
      <i class="ri-search-line"></i>
    </div>
  </div>
</template>

<script setup>
import {useMealsStore} from "@/store/meals.js";
const useMeals = useMealsStore();
</script>

<style scoped>
.filter {
  padding: 20rem 40rem;
  border: 1px solid #e6e6e6;
}

.filter-inner {
  display: flex;
  align-items: center;
  height: 80rem;
  position: relative;
}

.filter-input {
  background-color: rgb(242, 242, 242);
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 40rem;
  outline: none;
  padding: 0 40rem 0 80rem;
}
.filter-inner i{
  position: absolute;
  font-size: 40rem;
  color: rgb(184,184,184);
  left: 30rem;

}
</style>