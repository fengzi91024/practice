<template>
  <Checkout @close="showCheckout = false" :is-show="showCheckout"></Checkout>
  <CarDetails :is-show="showDetails" @hide="showDetails=false"></CarDetails>
  <div class="cart-bar">
    <div class="cart-bag">
      <img :src="CartBag" alt="购物袋">
      <span class="total-count">{{ useMeals.totalCount }}</span>
    </div>
    <div class="total-amount">
      <p class="no-goods" v-show="useMeals.amount<=0">
        为选购商品
      </p>
      <p class="has-goods" @click="showDetails = true" v-show="useMeals.amount>0">
        {{ useMeals.amount }}
      </p>
    </div>
    <button
        @click="showCheckout = useMeals.totalCount > 0"
        class="checkout-btn"
    >
      去结算
    </button>
  </div>
</template>

<script setup>
import CartBag from "@/assets/bag.png"
import {useMealsStore} from "@/store/meals.js";
import {ref} from "vue";
import CarDetails from "@/components/Cart/CarDetails.vue";
import Checkout from "@/components/Checkout/Checkout.vue";

const showDetails = ref(false)
const useMeals = useMealsStore()
const showCheckout = ref(false)

</script>

<style scoped>
.cart-bar {
  width: 710rem;
  height: 100rem;
  position: fixed;
  background-color: rgb(58, 58, 58);
  bottom: 40rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 60rem;
  z-index: 9999;
}

.cart-bag {
  width: 100rem;
  position: absolute;
  bottom: -10rem;
}

.total-count {
  width: 40rem;
  height: 40rem;
  text-align: center;
  line-height: 40rem;
  font-size: 24rem;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  right: -20rem;
  color: #ffffff;
  font-weight: bold;
}

.total-amount {
  margin-left: 140rem;
  line-height: 100rem;
}

.no-goods, .has-goods {
  color: rgb(148, 148, 148);
  font-size: 36rem;
  font-weight: bold;
}

.has-goods {
  color: #ffffff;
}

.has-goods::before {
  content: "￥";
  font-size: 26rem;
}

.checkout-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 200rem;
  width: 200rem;
  height: 100%;
  border-radius: 60rem;
  border: none;
  background-color: rgb(248, 188, 0);
  font-size: 36rem;
}
</style>