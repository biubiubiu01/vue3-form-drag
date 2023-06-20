<template>
    <div class="panel-container">
        <el-tabs v-model="activeTab" class="h100 flex-direction-column">
            <el-tab-pane v-for="tab in component" :key="tab.name" :name="tab.name" lazy>
                <template #label>
                    <el-tooltip effect="dark" :content="tab.name" placement="bottom">
                        <base-icon :icon="`svg-${tab.icon}`" class="w30" />
                    </el-tooltip>
                </template>
                <component :is="tab.comp" />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import component from "./column.data";

const activeTab = ref(component[0].name);
</script>
