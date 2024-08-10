<template>
  <div class="cloudRainContent">
    <div class="cloud"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const createEl = () => {
    const cloud = document.querySelector('.cloud');
    const span = document.createElement('span');

    // 添加类名
    span.classList.add('rain');

    cloud.appendChild(span);
  };

  createEl();
});
</script>

<style lang="scss" scoped>
.cloudRainContent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .cloud {
    position: relative;
    width: 400px;
    height: 100px;
    background-color: #92f14d;
    border-radius: 100px;
    // filter: ;
    animation: myColor 5s linear infinite;

    @keyframes myColor {
      0% {
        filter: drop-shadow(0 0 35px #92f14d) hue-rotate(0deg);
      }
      100% {
        filter: drop-shadow(0 0 35px #92f14d) hue-rotate(360deg);
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      top: -40px;
      left: 60px;
      background-color: #92f14d;
    }

    &::after {
      content: '';
      position: absolute;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      top: -100px;
      left: 140px;
      background-color: #92f14d;
    }

    .rain {
      position: absolute;
      color: #92f14d;
    }
  }
}
</style>
