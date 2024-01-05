<template>
  <form @submit.prevent="submitHandler">
    <div>姓名 <input type="text" v-model="newStu.name"></div>
    <div>年龄 <input type="number" min="1" v-model="newStu.age"></div>
    <div>性别
      <input type="radio" name="gender" value="男" v-model="newStu.gender"> 男
      <input type="radio" name="gender" value="女" v-model="newStu.gender"> 女
    </div>
    <div>
      住址
      <input type="text" v-model="newStu.address">
    </div>
    <div>
      <button>添加</button>
    </div>

  </form>
</template>

<script setup>
    import {ref,inject} from "vue";
    const {addNewStudent} = inject("student")

    const newStu = ref({
      name:"",
      age:1,
      gender:"男",
      address:""
    })


    const submitHandler = ()=>{
      addNewStudent({...newStu.value})

      newStu.value.name = ""
      newStu.value.age = 1
      newStu.value.gender = "男"
      newStu.value.address = ""
    }
</script>

<style scoped>

</style>