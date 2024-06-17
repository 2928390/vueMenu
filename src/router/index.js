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
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      meta: {
        name: 'Layout'
      },
      children: routerList
    }
  ]
});

export default router;
