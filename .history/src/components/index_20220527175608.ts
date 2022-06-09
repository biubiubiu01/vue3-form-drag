import type { App } from 'vue'

export function setupComponent(app: App<Element>) {
  const req=import.meta.globEager("./*/*")
  const requireAll = (requireContext: any) => {
    Object.keys(requireContext).map(component=>{
      console.log(component);
      
        //  app.component('svg-icon', SvgIcon)
        
    })
  }
  requireAll(req)
}
