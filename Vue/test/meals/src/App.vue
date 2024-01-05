<template>
  <div>
    <MealsFilter></MealsFilter>
    <Meals :meals="meals.filterMeals" :desc="true"></Meals>
    <CartBar></CartBar>
  </div>
</template>

<script setup>

import Meals from "@/components/Meals/Meals.vue";
import MealsFilter from "@/components/MealsFilter/MealsFilter.vue";
import CartBar from "@/components/Cart/CartBar.vue";
import {useMealsStore} from "@/store/meals.js";

const meals = useMealsStore()

</script>

<style lang="scss" scoped>

</style>