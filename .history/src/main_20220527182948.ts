import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'

import ElementPlus from 'element-plus'
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

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

console.log(ElementPlusIconsVue)

// const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app.use(router).use(ElementPlus).mount('#app')


