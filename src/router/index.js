import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../layout/index.vue';

// vue-cli: 用 require.context 导入

// vite: 用 import.meta.glob 导入
// 双星号**是一个通配符，表示任意层级的目录
//    仅匹配 views 目录下一级子目录中的 page.js 文件: ../views/*/page.js
// pages: {'../views/css/page.js': { title: 'Css 页面', menuOrder: 1, show: true }}
let pages = import.meta.glob('../views/**/page.js', {
  // 应用启动时立即加载(eager loading)所有匹配到的模块，而不是等到实际使用时按需加载(lazy loading)
  eager: true,
  // 指定了从每个模块中导入什么
  import: 'default'
});

// 懒加载的话，不加第二个参数
// pageComps: [{'../views/css/index.vue': () => import('/src/views/css/index.vue')}]
const pageComps = import.meta.glob('../views/**/index.vue');

// entries: [['../views/css/page.js', { title: 'Css 页面', menuOrder: 1, show: true }]]
// filter: 去掉 show === false 的页面
// map: 生成最终路由列表
export const routerList = Object.entries(pages)
  .filter((item) => item[1].show === true)
  .map(([path, meta]) => {
    const pageJspath = path;

    // path: ../views/css/page.js
    // 目标: path: /css
    path = path.replace('../views', '').replace('/page.js', '');
    path = path || '/';

    // name 文件名-子文件名
    // filter(Boolean): 去掉空字符串
    const name = path.split('/').filter(Boolean).join('-');

    // compPath: ../views/css/index.vue
    const compPath = pageJspath.replace('page.js', 'index.vue');

    return {
      path,
      name,
      // xxx: 不能使用变量，会影响打包（打包时会静态分析（不运行），变量只有运行才知道结果，导致分析不出来这个模块依赖哪些模块）
      // component: import('xxx'),
      component: pageComps[compPath],
      meta
    };
  })
  .sort((a, b) => a.meta.menuOrder - b.meta.menuOrder);

console.log(routerList);

// export const routerList = [
//   {
//     path: '/random-tree',
//     name: '随机树',
//     component: () => import('../views/radom-tree/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/starry-sky',
//     name: '星空',
//     component: () => import('../views/starry-sky/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/ball-connection',
//     name: '小球连线',
//     component: () => import('../views/ball-connection/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/show-message',
//     name: '公共弹窗组件',
//     component: () => import('../views/show-message/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/my-component',
//     name: '组件间传参',
//     component: () => import('../views/my-component/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/grid-layout',
//     name: '网格布局',
//     component: () => import('../views/grid-layout/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/card-3d',
//     name: '3D卡片',
//     component: () => import('../views/card-3d/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/parallax-scrolling',
//     name: '视差滚动',
//     component: () => import('../views/parallax-scrolling/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/text-image',
//     name: '文字图片',
//     component: () => import('../views/text-image/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/mouse-movement',
//     name: '鼠标移动',
//     component: () => import('../views/mouse-movement/index.vue'),
//     meta: {}
//   },
//   {
//     path: '/css',
//     name: 'CSS',
//     component: () => import('../views/css/index.vue'),
//     meta: {}
//   }
// ];

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
