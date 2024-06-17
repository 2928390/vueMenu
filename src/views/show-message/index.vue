<template>
  <div class="testMessage">
    <button @click="clickHandler">打开弹窗</button>
  </div>
</template>

<script setup>
import { showMsg } from './showMsg';

const clickHandler = () => {
  // 执行 close 关闭弹窗
  const close = showMsg('显示消息', () => {
    close();
  });

  setTimeout(close, 2000);
};
</script>

<style lang="scss"></style>
