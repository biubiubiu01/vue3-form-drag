<template>
  <div class="page-container relative">
    <div class="page-header">
      <Header />
    </div>
    <div class="main-container flex">
      <div class="left flex"></div>
      <div class="center">
        <button @click="openClose">点击</button>
      </div>
      <div class="right">
        <!-- <right-setting /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RightSetting from './components/rightSetting.vue'
import Header from './components/header.vue'
import { ElMessageBox } from 'element-plus'

const openClose = async () => {
  console.log(open())
}

const open = async () => {
  let bool = false
  try {
    await ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    })
    bool = true
  } catch {
    bool = false
  }
  return bool
}
</script>

<style lang="scss" scoped>
.page-container {
  background: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .page-header {
    height: 52;
    line-height: 50px;
    box-shadow: 0 1px 4px #d9d9d9;
  }
}
</style>
