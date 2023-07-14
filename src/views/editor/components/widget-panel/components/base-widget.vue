<template>
    <div class="base-widget-container flex-direction-column">
        <div class="base-widget-input">
            <el-input v-model="keyword" placeholder="搜索组件" suffix-icon="search" @input="handleSearch" />
        </div>
        <el-scrollbar wrap-class="h100">
            <el-collapse :modelValue="openList">
                <el-collapse-item v-for="item in componentList" :key="item.type" :name="item.type">
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
import { useDebounceFn } from "@vueuse/core";
import { deepClone } from "@/utils";

const { createJson } = useFormData();

const keyword = ref("");

const componentList = ref<any[]>(basicComponents);

const openList = computed(() => {
    return unref(componentList).map((item) => item.type);
});

const handleClone = (e: any) => {
    return createJson(e);
};

const handleSearch = useDebounceFn((val: string) => {
    const deepList = deepClone(basicComponents);
    if (!val) {
        componentList.value = deepList;
        return;
    }
    deepList.forEach((item: any) => {
        item.children = item.children.filter((child: any) => child.title.includes(val));
    });
    componentList.value = deepList.filter((item: any) => item.children.length > 0);
}, 100);

watch(keyword, (val) => {
    handleSearch(val);
});
</script>

<style scoped></style>
