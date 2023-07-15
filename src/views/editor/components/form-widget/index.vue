<template>
    <div class="all-container form-widget-container">
        <el-scrollbar view-class="h100">
            <el-form class="h100" v-bind="getFormSetting">
                <draggable
                    group="componentDrag"
                    animation="340"
                    ghost-class="drag-ghost"
                    :list="getFormJson"
                    item-key="id"
                    class="h100 drag-editor padding10"
                    @add="handleDragEnd"
                    @update="handleDragUpdate"
                >
                    <template #item="{ element, index }">
                        <el-form-item
                            class="drag-form-item"
                            @click="setActive(element.id)"
                            :class="{ active: getActiveId === element.id, 'not-label': !element.formItem.label }"
                            v-bind="element.formItem"
                        >
                            <component :is="getComponent(element.componentName)" v-model="getFormModel[element.formItem.prop]" v-bind="element.props" />
                            <div class="drag-form-item-operate">
                                <base-icon icon="CopyDocument" class="mr5 operate-icon pointer" title="复制" :size="14" @click="handleCopy(element, index)" />
                                <base-icon icon="Delete" class="pointer operate-icon" :size="14" title="删除" @click="handleDelete(index)" />
                            </div>
                        </el-form-item>
                    </template>
                </draggable>
            </el-form>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useHistory } from "@/hooks/useHistory";
import draggable from "vuedraggable";
import { useWidgetList } from "@/hooks/useWidgetList";

const { getFormJson, setActive, addJson, deleteJson, getActiveId, getFormModel, getFormSetting } = useFormData();
const { executeRecord } = useHistory();
const { getComponent } = useWidgetList();

const handleDragEnd = (e: any) => {
    setActive(getFormJson.value[e.newIndex].id);
    executeRecord();
};

const handleDragUpdate = (e: any) => {
    executeRecord();
};

const handleCopy = (element: any, index: number) => {
    addJson(element, index + 1);
    executeRecord();
};

const handleDelete = (index: number) => {
    deleteJson(index);
    executeRecord();
};
</script>

<style scoped></style>
