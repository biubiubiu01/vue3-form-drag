<template>
    <div class="setting-panel panel-container">
        <el-tabs v-model="activeTab" class="h100 flex-direction-column">
            <el-tab-pane v-for="tab in tabList" :key="tab.key" :name="tab.key" lazy>
                <template #label>
                    <div class="panel-item">
                        {{ tab.title }}
                    </div>
                </template>
                <el-scrollbar wrap-class="h100">
                    <component :is="tab.component" />
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { tabList } from "./components/column";

const activeTab = ref("attr");
</script>
