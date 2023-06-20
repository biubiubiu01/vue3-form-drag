<template>
    <div class="setting-panel panel-container">
        <el-tabs v-model="activeTab" class="h100 flex-direction-column">
            <el-tab-pane v-for="tab in component" :key="tab.name" :name="tab.name" lazy>
                <template #label>
                    <div class="flex-center panel-item">
                        <base-icon :icon="`svg-${tab.icon}`" :size="18" class="mr5" />
                        {{ tab.name }}
                    </div>
                </template>
                <el-scrollbar wrap-class="h100">
                    <component :is="tab.comp" />
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import component from "./column.data";

const activeTab = ref(component[0].name);
</script>
