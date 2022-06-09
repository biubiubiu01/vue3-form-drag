<template>
  <div class="page-container relative">
    <div class="page-header">
      <Header />
    </div>
    <div class="main-container flex">
      <div class="left flex"></div>
      <div class="center"></div>
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

const openClose=()=>{
   console.log(open())
}

const open = () => {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(() => {
       return true
    })
    .catch(() => {
      return false
    })
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
