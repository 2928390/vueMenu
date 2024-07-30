import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';

export const routerList = [
  {
    path: '/random-tree',
    name: '随机树',
    component: () => import('../views/radom-tree/index.vue'),
    meta: {}
  },
  {
    path: '/starry-sky',
    name: '星空',
    component: () => import('../views/starry-sky/index.vue'),
    meta: {}
  },
  {
    path: '/ball-connection',
    name: '小球连线',
    component: () => import('../views/ball-connection/index.vue'),
    meta: {}
  },
  {
    path: '/show-message',
    name: '公共弹窗组件',
    component: () => import('../views/show-message/index.vue'),
    meta: {}
  },
  {
    path: '/my-component',
    name: '组件间传参',
    component: () => import('../views/my-component/index.vue'),
    meta: {}
  },
  {
    path: '/grid-layout',
    name: '网格布局',
    component: () => import('../views/grid-layout/index.vue'),
    meta: {}
  },
  {
    path: '/card-3d',
    name: '3D卡片',
    component: () => import('../views/card-3d/index.vue'),
    meta: {}
  },
  {
    path: '/parallax-scrolling',
    name: '视差滚动',
    component: () => import('../views/parallax-scrolling/index.vue'),
    meta: {}
  },
  {
    path: '/tab',
    name: 'tab 切换',
    component: () => import('../views/tab/index.vue'),
    meta: {}
  },
  {
    path: '/text-image',
    name: '文字图片',
    component: () => import('../views/text-image/index.vue'),
    meta: {}
  },
  {
    path: '/box-3d',
    name: '3d盒子',
    component: () => import('../views/box-3d/index.vue'),
    meta: {}
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      // 重定向，即默认页面
      redirect: '/parallax-scrolling',
      component: Layout,
      meta: {
        name: 'Layout'
      },
      children: routerList
    }
  ]
});

export default router;
