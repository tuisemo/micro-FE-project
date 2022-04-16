import './public-path';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  instance = createApp(App);
  instance.use(store);
  instance.use(router);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
/* eslint-disable-next-line */
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.unmount();
  /* eslint-disable-next-line */
  instance._container.innerHTML = '';
  instance = null;
  router = null;
}
