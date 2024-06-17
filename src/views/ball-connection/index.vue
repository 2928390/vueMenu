<template>
  <div class="ball-connection-Body">
    <canvas></canvas>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // 获取 canvas 元素
  const cvs = document.querySelector('canvas');
  // 获取 2D 绘图上下文
  const ctx = cvs.getContext('2d');

  // 初始化函数
  function init() {
    // 设置 canvas 的宽度为当前窗口的内部宽度
    cvs.width = window.innerWidth;
    // 设置 canvas 的高度为当前窗口的内部高度
    cvs.height = window.innerHeight;
  }

  // 调用初始化函数
  init();

  /**
   * 获取 [min, max] 范围内的随机整数
   * @returns {Number}
   */
  function getRandom(min, max) {
    // 返回指定范围内的随机整数
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }

  // 定义一个点类
  class Point {
    constructor() {
      // 点的半径
      this.r = 6;
      // 随机生成点的初始 x 坐标
      this.x = getRandom(0, cvs.width - this.r / 2);
      // 随机生成点的初始 y 坐标
      this.y = getRandom(0, cvs.height - this.r / 2);
      // 随机生成点的 x 轴速度
      this.xSpeed = getRandom(-50, 50);
      // 随机生成点的 y 轴速度
      this.ySpeed = getRandom(-50, 50);
      // 上一次移动的时间
      this.lastMoveTime = null;
    }

    // 绘制点的方法
    draw() {
      // 如果上一次的移动时间有值的话
      if (this.lastMoveTime) {
        // 计算新的位置
        const t = (Date.now() - this.lastMoveTime) / 1000;
        const x = this.x + this.xSpeed * t;
        const y = this.y + this.ySpeed * t;

        // 判断是否超出边界，超出则改变方向
        if (x < 0 || x > cvs.width - this.r) {
          this.xSpeed = -this.xSpeed;
        }

        if (y < 0 || y > cvs.height - this.r) {
          this.ySpeed = -this.ySpeed;
        }

        // 更新点的坐标
        this.x = x;
        this.y = y;
      }

      // 绘制点
      // ctx.beginPath();：这行代码开始一个新的路径或重置当前路径以便绘制
      // ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);：这行代码绘制一个圆弧。它接受几个参数：
      // this.x：圆弧的中心点的 x 坐标
      // this.y：圆弧的中心点的 y 坐标
      // this.r：圆弧的半径
      // 0：圆弧的起始角度，以弧度表示。这里的 0 表示圆弧从圆的最右侧点开始
      // 2 * Math.PI：圆弧的结束角度，以弧度表示。这里的 2 * Math.PI 表示一个完整的圆，因此绘制的是整个圆
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgb(200, 200, 200)';
      ctx.fill();

      // 更新上一次移动的时间
      this.lastMoveTime = Date.now();
    }
  }

  // 定义一个图类
  class Graph {
    // pointNumber：点的数量，默认为 30
    // maxDis：最大距离，两点之间超过最大距离则连线透明，默认为 500
    constructor(pointNumber = 30, maxDis = 500) {
      // 生成一组点
      this.points = new Array(pointNumber).fill(0).map(() => new Point());
      // 最大距离
      this.maxDis = maxDis;
    }

    // 绘制图的方法
    draw() {
      // 下一次绘制前请求浏览器执行动画帧
      // 它接受一个回调函数作为参数，在下一次浏览器重绘之前执行这个回调函数
      // 表示在下一帧绘制之前请求执行当前对象的 draw() 方法，从而实现动画的连续播放效果
      requestAnimationFrame(() => this.draw());
      // 清空 canvas
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      // 遍历所有点
      for (let i = 0; i < this.points.length; i++) {
        const p1 = this.points[i];
        // 绘制点
        p1.draw();

        for (let j = i + 1; j < this.points.length; j++) {
          const p2 = this.points[j];
          // 计算两点之间的距离
          const d = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

          // 如果距离小于最大距离，则绘制连线
          if (d <= this.maxDis) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.closePath();
            // 根据距离设置连线的透明度
            ctx.strokeStyle = `rgba(200, 200, 200, ${1 - d / this.maxDis})`;
            // 绘制当前路径的轮廓线条，如果路径没有被定义或者路径为空，则不会执行任何绘制操作
            // 被用于绘制点之间的连线，因为在此之前已经使用 ctx.moveTo() 和 ctx.lineTo() 方法定义了路径
            // ctx.stroke(); 是用于绘制当前路径的方法，以实际绘制路径的方式呈现出来
            // 在画布上使用此方法时，它会将当前路径的轮廓线条绘制出来，而不填充图形
            ctx.stroke();
          }
        }
      }
    }
  }

  // 创建一个 Graph 实例
  const g = new Graph();
  // 绘制图
  g.draw();
});
</script>

<style>
.ball-connection-Body {
  background-color: #000;
}
canvas {
  width: 100%;
  height: 100%;
}
</style>
