import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.json';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
