import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
dayjs.extend(relativeTime)

const app = createApp(App)

app.config.globalProperties.$filters = {
    relative(value: string) {
        return dayjs().to(dayjs(value))
    }
}

app.mount('#app')