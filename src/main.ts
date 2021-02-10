import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import routes from 'voie-pages';
import './assets/index.css'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App).use(router)

app.config.globalProperties.$filters = {
    relative(value: string) {
        return dayjs().to(dayjs(value))
    }
}

app.mount('#app')