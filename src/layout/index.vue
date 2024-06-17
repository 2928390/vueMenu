<template>
  <div class="layout">
    <div class="meun hide-scrollbar">
      <div v-for="item in routerList" :key="item.path" class="menuItem">
        <router-link :to="item.path" class="menuLink">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { routerList } from '../router/index';
</script>

<style lang="scss">
.layout {
  display: flex;
  // background-color: #165dff;

  .meun {
    width: 190px;
    min-height: 100vh;
    overflow: auto;
    // background-color: rgb(189, 233, 255);
    .menuItem {
      .menuLink {
        padding: 0 12px;
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        text-decoration-line: none;
        color: #4e5969;

        &:hover {
          background-color: #f2f3f5;
        }
      }
    }
  }

  .content {
    width: 100%;
    min-height: 100vh;
    background-color: #f2f3f5;
  }

  .router-link-active {
    color: #165dff !important;
    background-color: #f2f3f5;
    transition: all 0.5s;
  }

  // 隐藏滚动条
  .hide-scrollbar::-webkit-scrollbar {
    width: 0; /* 隐藏垂直滚动条 */
    height: 0; /* 隐藏水平滚动条 */
  }

  .hide-scrollbar {
    -ms-overflow-style: none; /* IE 和 Edge */
    scrollbar-width: none; /* Firefox */
    overflow: auto;
  }
}
</style>
