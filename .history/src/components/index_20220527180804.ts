import type { App } from 'vue'

export function setupComponent(app: App<Element>) {
  const req = import.meta.globEager('./*/*')
  const requireAll = (requireContext: any) => {
    Object.keys(requireContext).forEach((component) => {
      app.component(requireContext[component].default.name, requireContext[component].default)
    })
  }
  requireAll(req)
}
