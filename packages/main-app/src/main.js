import { registerMicroApps, start } from 'qiankun';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css'
// 子应用路由激活规则
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);
// 子应用列表
const apps = [
  {
    name: 'microAppVue',
    entry: '//localhost:3000',
    container: '#micro-app',
    activeRule: getActiveRule('#/microApp/vue'),
  },
];
// 注册子应用
registerMicroApps(apps);
// 启动
start();

createApp(App).use(store).use(router).mount('#app');
