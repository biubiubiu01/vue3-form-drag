import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'

import 'element-plus/dist/index.css'

import '@/styles/common.scss'

import 'normalize.css'

import 'vue-global-api'

import 'virtual:svg-icons-register'

const app = createApp(App)

import { setupStore } from './store'

import { setupComponent } from './components'

setupStore(app)

setupComponent(app)


app.use(router).use(ElementPlus).mount('#app')


