import { createApp } from 'vue'
import './assets/style/index.less'
import App from './App.vue'

import pinia from "@/pinia";
import router from "@/router";

// 所有组件
import globalComponents from "@/components/index";
// 所有指令
import directives from "@/directives/index";

// createApp(App).mount('#app')
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(globalComponents)
app.use(directives)
app.mount('#app');