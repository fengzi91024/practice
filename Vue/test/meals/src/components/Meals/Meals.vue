<template>
<!--所有汉堡的容器-->
  <div class="meals">
    <Meal v-for="item in props.meals" :meal="item" :desc="$attrs.desc"></Meal>
    <h2 v-if="!props.meals ||props.meals.length == 0">没有指定的商品</h2>
  </div>
</template>

<script setup>
import Meal from "@/components/Meals/Meal.vue";
import {useMealsStore} from "@/store/meals.js";
const meals = useMealsStore()
const props = defineProps(["meals"])

</script>

<style scoped>
  .meals{
    height: calc(100vh -  120rem);
    padding-bottom: 140px;
    overflow: auto;
  }
</style>