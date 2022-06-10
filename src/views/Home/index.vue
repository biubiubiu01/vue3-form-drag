<template>
  <div class="page-container relative">
    <div class="page-header border-box bg-white">
      <Header />
    </div>
    <div class="main-container flex">
      <left-component />
      <div class="center flex-sub bg-white relative" ref="cutScreen">
        <draggable
          group="componentDrag"
          animation="340"
          v-model="drawingList"
          ghostClass="opacity-zero"
          style="height: 100%"
          item-key="id"
        >
          <template #item="{ element }">
            <div class="border-box relative components-item text-center"></div>
          </template>
        </draggable>
      </div>
      <right-setting />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/header.vue'
import leftComponent from './components/leftComponent.vue'
import RightSetting from './components/rightSetting.vue'
import draggable from 'vuedraggable'

const drawingList = []
</script>

<style lang="scss" scoped>
$pageBgColor: rgb(231, 231, 231);

.page-container {
  background: $pageBgColor;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .page-header {
    height: 52px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .main-container {
    width: 100%;
    position: relative;
    height: calc(100% - 44px);
  }
}
</style>
