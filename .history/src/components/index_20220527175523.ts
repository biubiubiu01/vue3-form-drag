import type { App } from 'vue'

export function setupComponent(app: App<Element>) {
  const req=import.meta.globEager("./*/*.js")
  const requireAll = (requireContext: any) => {
    console.log(requireContext)
    Object.keys(requireContext).map(component=>{
        //  app.component('svg-icon', SvgIcon)
        console.log(component);
        
    })
  }
  requireAll(req)
}
