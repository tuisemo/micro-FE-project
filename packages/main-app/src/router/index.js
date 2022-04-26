import { createRouter, createWebHashHistory } from 'vue-router';
import BaseLayoutView from '@/layout/BaseView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: BaseLayoutView,
    children: [
      {
        title: '',
        path: '/',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      },
      // 子应用路由容器，存在routerName的路由则渲染主路由内容，否则挂载子应用
      {
        path: 'microApp',
        name: 'microApp',
        component: () => import('../layout/MicroAppView.vue'),
        children: [
          {
            path: '',
            name: 'microAppBase',
            component: () => import('../views/AboutView.vue'),
          },
        ],
      },
      {
        path: 'microApp/:routerName(\\w*)+',
        component: () => import('../layout/MicroAppView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
