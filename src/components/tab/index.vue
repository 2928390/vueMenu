<template>
  <div class="courseBox">
    <div
      class="course"
      v-for="(item, index) in courseList"
      :key="index"
      :style="{ color: curIndex === index ? 'rgb(45, 101, 240)' : 'rgb(150, 151, 153)' }"
      @click="courseChange(index)"
    >
      {{ item.name }}
    </div>
    <div class="courseBorder" :style="{ left: `${borderLeft}px`, width: `${borderWidth}PX` }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const curIndex = ref(0);
const borderWidth = ref(0);
const borderLeft = ref(0);
const courseList = ref([
  {
    id: 0,
    name: '语文'
  },
  {
    id: 1,
    name: '数学'
  },
  {
    id: 2,
    name: '英语'
  }
]);

const courseChange = (index = 0) => {
  // 获取一个元素的宽
  borderWidth.value = document.querySelector('.course').offsetWidth;

  curIndex.value = index;

  borderLeft.value = borderWidth.value * index;
};

onMounted(() => {
  courseChange();
});
</script>

<style lang="scss" scoped>
.courseBox {
  margin: 20px auto;
  // 宽、高度不固定
  width: 500px;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 88px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  .course {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .courseBorder {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    height: 6px;
    background-color: rgb(18, 105, 247);
    border-radius: 1.5px;
    transition: all 0.3s;
  }
}
</style>
