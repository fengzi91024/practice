<template>
  <div class="counter">
    <template v-if="props.meal.count > 0">
      <button class="sub" @click="meals.subMealFromCart(props.meal)"><i class="ri-subtract-line"></i></button>
      <span class="count">{{props.meal.count}}</span>
    </template>
    <button class="add" @click="meals.addMealToCart(props.meal)"><i class="ri-add-line"></i></button>
  </div>
</template>

<script setup>
    import {ref} from "vue"
    import {useMealsStore} from "@/store/meals.js";
    const count = ref(0)
    const meals = useMealsStore()
    const props = defineProps(["meal"]);
</script>

<style scoped>
.counter {
  display: flex;
}

.sub, .add {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36rem;
  height: 36rem;
  background-color: rgb(234, 178, 0);
  border-radius: 50%;
  border: none;
  font-weight: bold;
}

span {
  font-size: 24rem;
}

.sub {
  background-color: #fff;
  border: 1px solid #000000;
}

.count{
  font-size: 30rem;
  margin: 0 10rem;
}
</style>