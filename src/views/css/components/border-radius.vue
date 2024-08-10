<template>
  <div class="borderRadiusContent">
    <div class="box">
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index"
        :style="{ '--i': index + 1 }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const list = new Array(8);
</script>

<style lang="scss" scoped>
.borderRadiusContent {
  // 父元素必须有高度，align-items: center; 才可以让子元素上下居中
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    position: relative;

    .item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(50px + var(--i) * 30px);
      height: calc(50px + var(--i) * 30px);
      box-shadow: 0 0 10px rgb(106, 84, 84);
      animation: move 5s linear infinite;
      background-color: rgb(142, 170, 103);
      border-radius: 5%;
      z-index: calc(10 / var(--i) * 10);
      // 动画开始时延迟
      animation-delay: calc(var(--i) * 0.2s);
    }

    @keyframes move {
      0% {
        border-radius: 10%;
        transform: translate(-50%, -50%) rotate(0deg);
        // 颜色滤镜
        filter: hue-rotate(0deg);
      }
      10% {
        border-radius: 10%;
        transform: translate(-50%, -50%) rotate(0deg);
        filter: hue-rotate(0deg);
      }
      40% {
        border-radius: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      60% {
        border-radius: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      90% {
        border-radius: 10%;
        transform: translate(-50%, -50%) rotate(0deg);
        filter: hue-rotate(360deg);
      }
      100% {
        border-radius: 10%;
        transform: translate(-50%, -50%) rotate(0deg);
        filter: hue-rotate(360deg);
      }
    }
  }
}
</style>
