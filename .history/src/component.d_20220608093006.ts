import 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon/index.vue')['default']
  }
}

export {}