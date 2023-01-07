import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// Vue.use(BootstrapVue).use(IconsPlugin);
createApp(App).use(store).use(router).mount('#app');
