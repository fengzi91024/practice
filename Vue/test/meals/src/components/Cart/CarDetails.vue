<template>
  <Mask style="z-index: 999">
    <Dialog :is-show="showDialog" @hide="showDialog=false" @ok="okHandler">确认清空购物车吗？</Dialog>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a href="javascript:;" @click="showDialog = true">
          <i class="ri-delete-bin-line"></i>
          清空购物车
        </a>
      </div>
      <Meals :meals="meals.cartMeals" :desc="false"></Meals>
    </div>
  </Mask>
</template>

<script setup>
import Mask from "@/components/UI/Mask.vue";
import Meals from "@/components/Meals/Meals.vue"
import {useMealsStore} from "@/store/meals.js";
import Dialog from "@/components/UI/Dialog.vue";
import {ref} from "vue";

const meals = useMealsStore()
const showDialog = ref(false)
const emits = defineEmits()
const okHandler = ()=>{

  meals.clearCart()
  emits('hide')
}

</script>

<style scoped>

.cart-details {
  position: absolute;
  bottom: 0;
  width: 750rem;
  max-height: 70%;
  background-color: #ffffff;
  font-size: 28rem;
  /*overflow: auto;*/
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
}

.meals {
  height: auto;
  max-height: calc(280rem * 4);
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 20rem 40rem;
}

.header h2 {
  font-size: 28rem;
}

.header a {
  display: flex;
  align-items: center;
  color: #9f9f9f;
  font-size: 22rem;
}

.header i {
  font-size: 26rem;
  margin-right: 6rem;
}
</style>