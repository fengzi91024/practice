<template>
  <div class="tab-item">
    <div class="photo">
      <img :src="item.img" :alt="item.name">
      <span>{{item.rate}}</span>
    </div>
    <div class="desc">
      <span class="name">{{item.name}}</span>
      <div class="hot-bar">
        <div class="inner">{{item.hot}}热度</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(["item"])
  const item = props.item
</script>

<style scoped>
.tab-item{
  display: flex;
  margin-bottom: 30px;
}

/*容器*/
.photo{
  width: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}
/*图片*/
.photo img{
  width: 100%;
  vertical-align: top;
}
/*排名*/
.photo span{
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(245,102,1);
  top: 0;
  left: 0;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
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
.hot-bar{
  background-color: rgb(3,37,103);
  border-radius: 20px;
  text-indent: 0.5em;
}

.inner{
  background-color: red;
  border-radius: 20px;
  background-image: linear-gradient(90deg,rgb(187,3,52)50%,rgb(66,2,12));
  white-space: nowrap;
}

</style>