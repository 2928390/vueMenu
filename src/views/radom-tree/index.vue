<template>
  <div class="radom-tree">
    <canvas></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const radomTree = document.querySelector('.radom-tree');
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = radomTree.offsetWidth;
  canvas.height = radomTree.offsetHeight;
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;

  // 将坐标系向右移动画布的一半，向下移动 100%
  ctx.translate(canvas.width / 2, canvas.height);
  ctx.scale(1, -1);

  drawBranch([0, 0], 170, 20, 90);

  /**
   *
   * @param {Array} v0 起点坐标
   * @param {Number} len 分支长度
   * @param {Number} thick 分支的粗细
   * @param {Number} angle 分支夹角
   */
  function drawBranch(v0, len, thick, angle) {
    if (thick < 2 && Math.random() < 0.3) {
      // 有一定几率不再长了
      return;
    }

    if (thick < 2) {
      // 开花 - 画个圈
      ctx.beginPath();
      ctx.arc(...v0, 10, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(...v0);
    const v1 = [
      v0[0] + len * Math.cos((angle * Math.PI) / 180),
      v0[1] + len * Math.sin((angle * Math.PI) / 180)
    ];
    ctx.lineTo(...v1);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = thick;
    // 线头-圆角
    ctx.lineCap = 'round';
    ctx.stroke();

    // 左分支
    drawBranch(v1, len * 0.8, thick * 0.7, angle + Math.random() * 30);
    // 右分支
    drawBranch(v1, len * 0.8, thick * 0.7, angle - Math.random() * 30);
  }
});
</script>

<style lang="scss">
.radom-tree {
  height: 100%;
  background-color: rgb(156, 225, 186);
}
</style>
