<template>
  <div class="my-component">
    <div>父组件：</div>
    <div>将此对象传入子组件</div>
    {{ courseData }}
    <list :courseData="courseData" @changeCourseSon="changeCourse" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import list from './component/list.vue';

const courseData = ref([
  {
    name: '语文',
    id: 10
  },
  {
    name: '数学',
    id: 20
  },
  {
    name: '英语',
    id: 30
  }
]);

const changeCourse = (index) => {
  courseData.value.splice(index, 1);
};
</script>

<style lang="scss">
.my-component {
  transition: all 0.5s;
}
</style>
