<template>
  <div class="header-container border-box flex justify-between">
    <div class="header-logo flex align-center">
      <svg-icon icon="logo" :size="30" class="pointer" />
      <span class="header-title">Vue3 From Drag</span>
    </div>
    <div class="header-actions flex align-center">
      <el-tooltip
        v-for="(item, index) in headerList"
        :key="index"
        :content="item.title"
        placement="bottom-start"
      >
        <div class="header-actions-item pointer" @click.capture="item.callFunction">
          <svg-icon :icon="item.icon" :size="18" class="pointer header-actions-icon" />
          <span class="header-actions-name">{{ item.title }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>

type headerType={
  title:string,
  icon:string,
  callFunction?:VoidFunction
}

//预览
const handlePreview=()=>{
  console.log(123)
}

//保存模板
const handleSaveTemplate=()=>{
  console.log(778)
}



const headerList=<Array<headerType>>[  
  {
    title: '预览',
    icon: 'preview',
    callFunction:handlePreview
  },
  {
    title: '保存模板',
    icon: 'save'
  },
  {
    title: '清除',
    icon: 'clear'
  },
  {
    title: '导入JSON',
    icon: 'import'
  },
  {
    title: '导出JSON',
    icon: 'export'
  },
  {
    title: '生成代码',
    icon: 'createCode'
  },
  {
    title: '生成图片',
    icon: 'createImage'
  },
   {
    title: '生成项目',
    icon: 'createMajor'
  },
]
</script>
<style lang="scss" scoped>
$logoColor: rgb(0, 190, 180);
$actionColor: rgba(0, 0, 0, 0.65);

.header-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 5%;
  .header-logo {
    height: 100%;
    .header-title {
      margin-left: 5px;
      color: $logoColor;
      font-size: 22px;
      font-weight: 600;
    }
  }
  .header-actions {
    .header-actions-item {
      margin-right: 25px;
      .header-actions-icon {
        color: $actionColor;
      }
      .header-actions-name {
        color: $actionColor;
        margin-left: 5px;
      }
    }
  }
}
</style>
