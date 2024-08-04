<template>
  <div class="wrapper">
    <!-- class: {} 中 value 为 true 时，添加 key 为类名 -->
    <div
      v-for="n of 14"
      :key="n"
      :class="{ item: true, action: curIndex == n }"
      @click="curIndex = n"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let curIndex = ref(1);
</script>

<style lang="scss">
$itemSize: 180px;

.wrapper {
  display: grid;
  // 第一个值20px指定了行间的垂直间距，第二个值40px指定了列间的水平间距
  grid-gap: 20px 40px;
  // 每一行的高度
  grid-auto-rows: $itemSize;
  // 确保每一列的宽度，自适应列数
  grid-template-columns: repeat(auto-fit, $itemSize);
  justify-content: space-between;
  width: 80%;
  min-height: 80%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.item {
  background-color: antiquewhite;
  box-shadow:
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
  border-radius: 5px;
  // bg-------------------------------------------
  // div 宽高为 $itemSize
  background-image: url('@/assets/jingling-1.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% auto;
  // 可以通过 scale 来控制大小，width 只能为 180px (图片的宽度)
  scale: (0.5);

  &:hover {
    // 图片尺寸：180 * 5880
    // 共 31 帧，31 * 180 = 5880
    // steps(30)表示将动画分成 30 步
    // 1 表示动画只播放一次，不会循环
    // forwards 确保动画结束时保持在最后一帧
    animation: play 1s steps(30) 1 forwards;
  }
}

@keyframes play {
  to {
    // 5880 - 180 = 5700
    background-position-y: -5700px;
  }
}

.action {
  background-color: rgb(198, 223, 255);
}
</style>
