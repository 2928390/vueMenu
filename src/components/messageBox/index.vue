<template>
  <div class="modal">
    <div class="box">
      <div class="test">{{ msg }}</div>
      <button @click="onClick">确定</button>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const emit = defineProps(['msg', 'onClick']);
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #33333322;

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow:
      20px 20px 60px #bebebe,
      -20px -20px 60px #ffffff;
  }
}
</style>
