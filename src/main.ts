import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import 'normalize.css';
import 'boxicons';

import './index.css';

const app = createApp(App);
app.use(PrimeVue).use(router).use(PrimeVue).use(ToastService).mount('#app');
