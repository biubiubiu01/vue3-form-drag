<template>
  <div class="page-container relative">
    <div class="page-header">
      <Header />
    </div>
    <div class="main-container flex">
      <div class="left flex"></div>
      <div class="center">
        <el-cascader
          ref="provinceCascader"
          v-model="value"
          :filterable="true"
          :options="cityList"
          :props="{ checkStrictly: true }"
          @change="handleCityChange"
          class="w"
        ></el-cascader>
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

const value=[]
const cityList=[{
  label:'北京',
  value:'0',
  children:[{
    label:'北京市',
    value:'1',
    children:[{
      label:'西城区',
      value:2,
    },{
      label:'东城区',
      value:3,
    }]
  }]
}]
const provinceCascader=ref(null)
 const handleCityChange=(value)=>{
    // let nameArray=provinceCascader.getCheckedNodes();
    // console.log(nameArray) 
    console.log(provinceCascader)

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
