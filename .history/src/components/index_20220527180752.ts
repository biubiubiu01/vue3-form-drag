import type { App } from 'vue'

import svgIcon from "./SvgIcon/index.vue"

console.log(svgIcon)

export function setupComponent(app: App<Element>) {
  const req = import.meta.globEager('./*/*')
  const requireAll = (requireContext: any) => {
    Object.keys(requireContext).forEach((component) => {
      app.component(requireContext[component].default.name, requireContext[component])
    })
  }
  requireAll(req)
}
