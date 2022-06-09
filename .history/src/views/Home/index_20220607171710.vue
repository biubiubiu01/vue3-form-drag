<template>
  <div class="page-container relative">
    <div class="page-header">
      <Header />
    </div>
    <div class="main-container flex">
      <div class="component-list">
        <el-scrollbar style="width: 256px; height: 100%" class="scrollbar-wrapper">
          <draggable
            :group="{ name: 'componentDrag', pull: 'clone' }"
            :sort="false"
            animation="300"
            draggable=".components-item"
            @end="handleEnd"
            v-model="componentList"
            :clone="cloneComponent"
          >
            <!-- <div
              v-for="item in comList"
              :key="item.id"
              style="padding: 10px 16px"
              class="boxder-box relative components-item"
            >
              <p class="text-center title">{{ item.title }}</p>
              <img :src="item.img" class="components-img" alt="" />
            </div> -->
          </draggable>
        </el-scrollbar>
      </div>
      <div class="center flex-sub relative"></div>
      <div class="right">
        <!-- <right-setting /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RightSetting from './components/rightSetting.vue'
import Header from './components/header.vue'
import draggable from 'vuedraggable'

const componentList = [{}]

const drawList = reactive([])

let currentMove=reactive({})

let boxId=1

//点击选中该盒子，克隆
const cloneComponent = (e:any) => {
  currentMove = {
    id:boxId++,
    ...e
  }
}
//拖动结束，从左边拖到右边
const handleEnd = () => {
  drawList.push({
    // ...currentMove
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
    height: 52px;
    line-height: 50px;
    box-shadow: 0 1px 4px #d9d9d9;
  }
  .main-container {
    width: 100%;
    position: relative;
    height: calc(100% - 44px);
  }
}
</style>
