<template>
  <div class="component-list flex">
    <div class="tab-list bg-white">
      <div
        v-for="item in tabList"
        :key="item.icon"
        class="tab-item pointer text-center relative"
        @click.capture="currentTab = item.icon"
        :class="{ active: currentTab === item.icon }"
      >
        <svg-icon :icon="item.icon" :size="20"></svg-icon>
        <div class="tab-item-title">{{ item.title }}</div>
      </div>
    </div>
    <el-scrollbar style="width: 295px; height: 100%" class="scrollbar-wrapper">
      <draggable
        :group="{ name: 'componentDrag', pull: 'clone' }"
        :sort="false"
        animation="300"
        draggable=".components-item"
        @end="handleEnd"
        v-model="currentList"
        :clone="cloneComponent"
        item-key="icon"
        class="components-all flex flex-wrap justify-between align-center"
      >
        <template #item="{ element }">
          <div class="border-box relative components-item text-center">
            <svg-icon :icon="element.icon" :size="24" />
            <div class="components-item-title">{{ element.title }}</div>
          </div>
        </template>
      </draggable>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import draggable from 'vuedraggable'
import { tabList, componentList, IComponentType, IComponentChildrenType } from './data'

const currentTab = ref(componentList[0].icon)

const currentList = computed(() => {
  return (componentList as any).find((item: IComponentType) => item.icon === currentTab.value)
    .children
})

const cloneComponent = (e: IComponentChildrenType) => {

}

const handleEnd = () => {
  console.log(123)
}
</script>

<style lang="scss" scoped>
$baseTabColor: rgba(0, 0, 0, 0.65);
$activeTabColor: rgb(0, 190, 180);
$componentColor: rgba(0, 0, 0, 0.65);

.component-list {
  position: relative;
  height: 100%;
  .tab-list {
    width: 85px;
    height: 100%;
    box-shadow: 0.5px 0 4px #dedede;
    .tab-item {
      padding: 20px 10px;
      color: $baseTabColor;
      &.active {
        color: $activeTabColor;
      }
      &.active::before {
        content: '';
        width: 2px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 190, 180, 0.7), rgba(0, 190, 180, 0.2));
      }
      &:first-of-type {
        margin-top: 25px;
      }
      .tab-item-title {
        margin-top: 5px;
      }
    }
  }

  .components-all {
    padding: 10px;
    box-sizing: border-box;
    .components-item {
      padding: 12px;
      cursor: move;
      margin-bottom: 15px;
      width: 48%;
      border-radius: 4px;
      background: #fff;
      .components-item-title {
        color: $componentColor;
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>
