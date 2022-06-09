import 'vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon/index.vue')['default'],
    ElTooltip: typeof import('element-plus'),
  }
}

export {}