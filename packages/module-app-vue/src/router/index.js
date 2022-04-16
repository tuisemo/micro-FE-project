import HomeView from '../views/HomeView.vue';

const RoutePrefix = (url) => {
  /* eslint-disable-next-line */
  if (window.__POWERED_BY_QIANKUN__) {
    return `/microApp/vue${url}`;
  }
  return url;
};
const routes = [
  {
    path: RoutePrefix('/'),
    redirect: RoutePrefix('/home'),
  },
  {
    path: RoutePrefix('/home'),
    name: 'home',
    component: HomeView,
  },
  {
    path: RoutePrefix('/about'),
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

export default routes;
