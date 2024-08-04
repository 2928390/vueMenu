<template>
  <div class="mourseMoveContent"></div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const body = document.querySelector('.mourseMoveContent');

  body.addEventListener('mousemove', function (e) {
    const star = document.createElement('span');

    const size = Math.random() * 20;
    const transformValue = Math.random() * 360;

    star.style.left = e.offsetX + 'px';
    star.style.top = e.offsetY + 'px';
    star.style.fontSize = 10 + size + 'px';
    star.style.transform = `rotate(${transformValue}deg)`;

    body.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 1000);
  });
});
</script>

<!-- 不可加 scoped -->
<style lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.mourseMoveContent {
  position: relative;
  min-height: 100vh;
  background-color: #111;
  overflow: hidden;

  span {
    position: absolute;
    /* 该元素变得不可交互 */
    pointer-events: none;

    /* 
    CSS滤镜（filter）属性，用于给元素添加一个阴影效果
    drop-shadow: 指定应用的滤镜类型为投影或阴影效果
    (0 0): 阴影的水平偏移和垂直偏移
    5px: 这个值定义了阴影的模糊半径
    rgba(0, 0, 0, 0.5): 这定义了阴影的颜色和透明度
    */
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));

    &::before {
      content: '\f005';
      font-family: fontAwesome;
      color: #1ceb6b;
      position: absolute;
      animation: moveShape 1s linear forwards;
    }
  }
}

@keyframes moveShape {
  0% {
    transform: translate(0) rotate(0deg);
    opacity: 0;
  }

  20%,
  80% {
    opacity: 1;
  }

  100% {
    /* translate(100px)：沿着X轴（水平方向）移动100像素。如果没有指定Y轴的值，就只在X轴上进行移动 */
    transform: translate(100px) rotate(360deg);
    opacity: 0;
  }
}
</style>
