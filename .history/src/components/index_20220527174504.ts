import type { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export function setupComponent(app: App<Element>) {
  app.component('svg-icon', SvgIcon)
}
