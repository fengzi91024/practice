<template>
  <div class="tab-list">
    <TableItem v-for="item in items" :item="item" :max-hot="maxHot"></TableItem>
  </div>
</template>

<script setup>
  import TableItem from "@/components/TableItem.vue";
  const props = defineProps(["items","maxHot"])

</script>

<style scoped>
.tab-list{
  margin:20px;
}

</style>