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
        <div class="header-actions-item pointer">
          <svg-icon :icon="item.icon" :size="18" class="pointer header-actions-icon" />
          <span class="header-actions-name">{{ item.title }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface detail={
  title:String,
  icon:String
}
const headerList:detail[] = [
  {
    title: '预览',
    icon: 'preview'
  },
  {
    title: '清除',
    icon: 'clear'
  },
  {
    title: '生成项目',
    icon: 'createMajor'
  },
  {
    title: '生成图片',
    icon: 'createImage'
  }
]
</script>
<style lang="scss" scoped>
$logoColor: rgb(0, 190, 180);
$actionColor: rgba(0, 0, 0, 0.65);

.header-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 12px;
  .header-logo {
    height: 100%;
    .header-title {
      margin-left: 5px;
      color: $logoColor;
      font-size: 17px;
      font-weight: 600;
    }
  }
  .header-actions {
    .header-actions-item {
      margin-right: 20px;
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
