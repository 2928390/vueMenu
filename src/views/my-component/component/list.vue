<template>
  <div class="courseList">
    子组件：
    <div class="select">
      <!-- 执行父组件中传来的函数，来改变父组件中的变量 -->
      <!-- 参数1 是函数名字，参数2、3 ....，是调用 changeCourseSon 时传入的参数 -->
      <div
        class="option"
        @click="myEmit('changeCourseSon', index)"
        v-for="(course, index) in courseData"
        :key="course.id"
      >
        delete: {{ course.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['courseData', 'course']);

// 推荐拿变量接收 defineEmits，否则只能在 template 中使用 $emit('changeCourseSon', index) 调用函数
const myEmit = defineEmits(['changeCourseSon']);
</script>

<style lang="scss">
.courseList {
  background-color: antiquewhite;

  .option {
    &:hover {
      cursor: pointer;
      background-color: aquamarine;
    }
  }
}
</style>
