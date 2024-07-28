<template>
  <div class="layout">
    <div :class="{ meun: true, 'hide-scrollbar': true, showMenu: showMenu }">
      <div v-for="item in routerList" :key="item.path" class="menuItem">
        <router-link :to="item.path" class="menuLink">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="layoutContent">
      <router-view></router-view>
      <div class="menuSwitch">
        <img src="@/assets/迈克尔杰克驴.png" @click="showMenu = !showMenu" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { routerList } from '../router/index';
import { ref } from 'vue';

// true 隐藏
const showMenu = ref(true);
</script>

<style lang="scss">
.layout {
  display: flex;

  .meun {
    width: 190px;
    min-height: 100vh;
    overflow: auto;
    transition: all 0.5s;

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

  .layoutContent {
    width: 100%;
    min-height: 100vh;
    background-color: #f2f3f5;
    overflow: auto;

    .menuSwitch {
      position: fixed;
      top: 30vh;
      right: 0;
      width: 50px;
      height: 100%;

      img {
        // position: sticky;
        // top: 30vh;
        width: 100%;
        cursor: pointer;
      }
    }
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

.showMenu {
  transform: translateX(-100%);
  width: 0 !important;
}
</style>
