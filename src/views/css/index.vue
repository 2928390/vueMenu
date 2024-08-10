<template>
  <div class="cssContent clearfix">
    <div class="cssItem">
      <cloudRain />
    </div>
    <div class="cssItem">
      <radius3d />
    </div>
    <div class="cssItem">
      <borderRadius />
    </div>
  </div>
</template>

<script setup>
import borderRadius from './components/border-radius.vue';
import radius3d from './components/radius-3d.vue';
import cloudRain from './components/cloud-rain.vue';
</script>

<style lang="scss" scoped>
// 双伪元素清除法
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
}
.clearfix::after {
  clear: both;
}

.cssContent {
  position: relative;
  height: 100vh;
  overflow-y: scroll;

  @for $i from 1 through 10 {
    .cssItem:nth-child(#{$i}) {
      position: sticky;
      top: 0;
      height: 100%;
      // unquote() 去掉引号，unquote('#345') => #345
      background-color: unquote('##{random(10)}#{random(10)}#{random(10)}');
    }
  }
}
</style>
