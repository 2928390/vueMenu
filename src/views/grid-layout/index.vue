<template>
  <div class="wrapper">
    <div class="item" v-for="(item, index) of list" :key="index">{{ index }}</div>
  </div>
</template>

<script setup>
const list = new Array(15).fill(0);
</script>

<style lang="scss">
.wrapper {
  display: grid;
  grid-gap: 20px 40px;
  // 确保每一行的高度为 100px，这样所有的行高都将保持一致
  grid-auto-rows: 100px;
  // 确保每一列的宽度为 200px，自适应列数
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-between;
  width: 80%;
  min-height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.item {
  background-color: antiquewhite;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  text-align: center;
  border-radius: 5px;
}
</style>
