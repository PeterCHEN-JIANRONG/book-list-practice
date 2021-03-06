import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2'; // VueSweetalert2
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';
import './assets/stylesheets/helps/tailwindcss.css';

// vee-validate
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules'; // 規則
import { localize, setLocale } from '@vee-validate/i18n'; // 語系
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

// 載入規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.provide('axios', app.config.globalProperties.axios); // provide 'axios'
app.mount('#app');
