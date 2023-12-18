
<template>
    <h1>{{message}}</h1>
    <MyButton></MyButton>
    <h2>{{a}}</h2>
</template>

<script>

import MyButton from "./components/MyButton.vue";

export default {
  components: {MyButton},

  data(){
    const a = 10
    return{
      message:"我爱Vue",
      a
    }
  }
}
</script>

<style scoped>

</style>