<p align="center">
  <a href="https://github.com/biubiubiu01/vue3-form-drag/">
    <img src="https://images.gitee.com/uploads/images/2020/0906/151518_824b889d_7647779.png" alt="Logo" width="250">
   <h3 align="center"> vue3-form-drag</h3>
  </a>
</p>

  <p align="center">
    <a href="https://github.com/biubiubiu01/vue3-form-drag"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="vue3-form-drag">在线预览</a>
    ·
    <a href="https://github.com/biubiubiu01/vue3-form-drag/issues">提出Bug</a>
    ·
    <a href="https://github.com/biubiubiu01/vue3-form-drag/issues">提出新特性</a>
  </p>
  




## 简介

[vue3-form-drag](https://gist006.gitee.io/vue3-form-drag)基于**vue3**+**element-plus**实现的**form表单**拖拽系统，可在线拖拽配置表单的属性，并支持撤销、重做、预览，生成JSON，导出原始组件代码文件等功能。

> vue3-basic-admin后台管理系统(强烈推荐！),地址：[vue3-basic-admin](https://github.com/biubiubiu01/vue3-basic-admin)

> vue-antd-admin后台管理系统，有兴趣可以看看：[vue-antd-admin](https://github.com/biubiubiu01/vue-antd-admin)


主界面:
![输入图片说明](https://gitee.com/gist006/vue3-form-drag/raw/main/preview/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230716102034.png)

预览页面：
![输入图片说明](https://gitee.com/gist006/vue3-form-drag/raw/169f9f37ebda531d6969be0ec5898c5aa737b5cf/preview/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230716102039.png)

出码导出文件页面：
![输入图片说明](https://gitee.com/gist006/vue3-form-drag/raw/169f9f37ebda531d6969be0ec5898c5aa737b5cf/preview/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230716102043.png)


## 使用说明
```
1.从左侧选择你想要的form组件可以拖拽到中间画布区域
2.右边设置区域可以设置表单属性和当前选中的表单组件属性
3.左边区域可以切换查看当前Tree和模板组件
4.导航区功能包括 全屏、切换黑暗模式、撤销、重做、保存到本地、重置页面、出码、生产json；
5.出码功能不同于常规表单拖拽导出的json然后使用规定的组件，而是导出原子组件代码类似el-input这种
6.扩展：想要扩展左边的组件，可直接在package文件夹下按照规定格式添加文件，vite会自动导入该组件，无需其他配置。
```


### 文件目录说明
```
├── public                           ---静态资源文件
├── src          
│  ├── assets                        ---图片和字体
│  ├── components                    ---可复用的vue组件
│  ├── constant                    
│  ├── enums                       
│  ├── hooks
│  ├── icons
│  ├── packages
│  ├── plugins                          
│  ├── router                        ---路由
│  ├── store                        
│  ├── styles                        ---sass样式
│  ├── utils                         ---方法函数
│  ├── views                         ---页面
│  ├── App.vue                       
│  ├── main.ts                       
├── types                            
├── .cz-config.cjs
├── .eslintrc.cjs
├── .prettierrc.cjs
├──  package.json
├──  package-lock.json
├──  README.md
├──  commitlint.config.cjs
├──  index.html
├──  tsconfig.json
├──  tsconfig.node.json
└──  vite.config.ts                   


```


 
## 安装

```
# 克隆项目
git clone https://github.com/biubiubiu01/vue3-form-drag.git
# 进入项目目录
cd vue3-form-drag
# 安装依赖
pnpm i
# 本地开发 启动项目
pnpm start
```

### 提交代码

```
# 添加到git
git add 文件
# 提交commit并自动格式化,提交格式规范已设定好，选择即可
npm run commit
# 推送
git push
```

### 部署

```
# 打包项目
npm run build
```

## Online Demo

[在线 Demo](https://gist006.gitee.io/vue3-form-drag/#/)

## 捐赠

开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/biubiubiu01/vue3-form-drag)，欢迎提出建议和bug :smile: 。如果这个项目对你有所帮助，可以给作者买杯咖啡，欢迎投喂，捐赠加好友问题咨询。

<img src="https://i.328888.xyz/2023/02/28/zV27Q.jpeg" alt="alipay" width="250"><img src="https://i.328888.xyz/2023/02/28/zVw2H.jpeg" alt="wechat" width="250">







