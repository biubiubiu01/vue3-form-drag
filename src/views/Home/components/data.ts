export interface IHeaderType {
  title: string
  icon: string
  callFunction?: VoidFunction
}

export interface ITabType {
  title: string
  icon: string
}

export interface IComponentType {
  icon: string
  children: IComponentChildrenType[]
}

export interface IComponentChildrenType {
  type?: string
  title?: string
  icon?: string
  config?: IComponentProps,
  id?:string
}

export interface IComponentProps {
  title?: string
}

export const tabList: ITabType[] = [
  {
    title: '组件库',
    icon: 'component'
  },
  {
    title: '布局容器',
    icon: 'layout', 
  },
  {
    title: '模板库',
    icon: 'template'
  }
]

export const componentList: IComponentType[] = [
  {
    icon: 'component',
    children: [
      {
        type: 'input',
        title: '输入框',
        icon: 'form-input'
      },
      {
        type: 'textarea',
        title: '多行输入',
        icon: 'form-textarea'
      },
      {
        type: 'input-number',
        title: '数字输入',
        icon: 'form-number'
      }
    ]
  },
  {
    icon: 'layout',
    children: []
  },
  {
    icon: 'template',
    children: []
  }
]
