<!-- 
// 语法：
transform-style: flat|preserve-3d;
transform-style: flat; // 默认，子元素将不保留其 3D 位置
transform-style: preserve-3d; // 子元素将保留其 3D 位置 ！！！！！


perspective 为一个元素设置三维透视的距离，仅作用于元素的后代，而不是其元素本身（这里未使用）
perspective: number|none;
perspective-origin: x-axis y-axis;
// x-axis : 定义该视图在 x 轴上的位置。默认值：50%
// y-axis : 定义该视图在 y 轴上的位置。默认值：50%
-->
<template>
  <div class="content">
    <div class="cube">
      <div class="top">X</div>
      <div class="side front"></div>
      <div class="side back"></div>
      <div class="side left"></div>
      <div class="side right"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.content {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  // 此动画不能和旋转添加到一起
  animation: myColor 8s infinite linear;

  @keyframes myColor {
    0% {
      // 相当于滤镜的效果
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }

  .cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(30deg);
    animation: myRotate 4s infinite linear;

    @keyframes myRotate {
      0% {
        transform: rotateX(-30deg) rotateY(0deg);
      }

      100% {
        transform: rotateX(-30deg) rotateY(360deg);
      }
    }

    .side {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-color: antiquewhite;
      background-image: linear-gradient(to bottom, #310f19 30%, #d9000a 100%);
    }

    .front {
      transform: rotateY(180deg) translateZ(100px);
    }

    .left {
      transform: rotateY(-90deg) translateZ(100px);
    }

    .back {
      transform: rotateY(0deg) translateZ(100px);
    }

    .right {
      transform: rotateY(90deg) translateZ(100px);
    }

    .top {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 38px;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #310f19;
      transform: rotateX(90deg) translateZ(100px);
      transform-style: preserve-3d;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #930610;
        transform: translateZ(-150px);
        box-shadow: 0px 0px 20px 20px #930610;
      }
    }
  }
}
</style>
