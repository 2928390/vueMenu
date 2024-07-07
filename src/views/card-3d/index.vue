<template>
  <div class="content">
    <div class="card">
      <img src="https://picsum.photos/200/300" alt="" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const card = document.querySelector('.card');
  const yRange = [-10, 10];
  const xRange = [-10, 10];

  // 获取旋转角度，（范围，鼠标的位置(在横穿卡片的线中的位置)，横穿卡片线的长度）
  function getRotate(range, value, max) {
    return (value / max) * (range[1] - range[0] + range[0]);
  }

  card.onmousemove = (e) => {
    // 获取鼠标位置
    const { offsetX, offsetY } = e;
    // 获取卡片宽高
    const { offsetWidth, offsetHeight } = card;
    const ry = -getRotate(yRange, offsetX, offsetWidth);
    const rx = getRotate(xRange, offsetY, offsetHeight);

    // 把变量设置到css变量中
    card.style.setProperty('--rx', `${rx}deg`);
    card.style.setProperty('--ry', `${ry}deg`);
  };

  card.onmouseout = () => {
    card.style.setProperty('--rx', `0deg`);
    card.style.setProperty('--ry', `0deg`);
  };
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.content {
  position: relative;
  .card {
    margin: 100px auto;
    width: 300px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:
      20px 20px 60px #bebebe,
      -20px -20px 60px #ffffff;
    background-color: rgb(219, 166, 128);
    /* 设置 3D,设置旋转变量，默认值为0deg */
    transform: perspective(500px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  }

  .card img {
    width: 100%;
    height: 100%;
  }
}
</style>
