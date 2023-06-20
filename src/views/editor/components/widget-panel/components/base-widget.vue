<!--
 * @Author: lzy
 * @Date: 2023-05-19 17:19:34
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-13 14:48:56
 * @FilePath: \vue3-form-drag\src\views\editor\components\widget-panel\components\base-widget.vue
 * 
-->
<template>
    <div class="base-widget-container flex-direction-column">
        <div class="base-widget-input">
            <el-input v-model="keyword" placeholder="搜索组件" suffix-icon="search" />
        </div>
        <el-scrollbar wrap-class="h100">
            <el-collapse v-model="collapseList">
                <el-collapse-item v-for="item in basicComponents" :key="item.type" :name="item.type">
                    <template #title>
                        <div class="pl20 flex-row-center bold">
                            <base-icon :icon="item.icon" class="mr5" :size="20" />
                            {{ item.title }}
                        </div>
                    </template>
                    <draggable
                        :group="{ name: 'componentDrag', pull: 'clone', put: false }"
                        :sort="false"
                        animation="300"
                        draggable=".components-item"
                        :clone="handleClone"
                        :list="item.children"
                        item-key="componentName"
                        class="drag-list"
                    >
                        <template #item="{ element }">
                            <div class="components-item">
                                <base-icon :icon="element.icon" :size="28" class="mb5 components-item-icon" />
                                {{ element.title }}
                            </div>
                        </template>
                    </draggable>
                </el-collapse-item>
            </el-collapse>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { basicComponents } from "./column.data";
import { useFormData } from "@/hooks/useFormData";

const keyword = ref("");
const { createJson } = useFormData();

const collapseList = ref<string[]>([]);

collapseList.value = basicComponents.map((item) => item.type);

const handleClone = (e: any) => {
    return createJson(e);
};
</script>

<style scoped></style>
