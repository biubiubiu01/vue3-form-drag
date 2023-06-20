<template>
    <el-form class="all-container form-widget-container" v-bind="getFilterConfig">
        <el-scrollbar view-class="h100">
            <draggable
                group="componentDrag"
                animation="340"
                ghost-class="drag-ghost"
                :list="getFormJson"
                item-key="model"
                class="h100 drag-editor padding10"
                @add="handleDragEnd"
                @update="handleDragUpdate"
            >
                <template #item="{ element, index }">
                    <div class="drag-form-item" :class="{ active: getActiveId === element.id }" @click="setActive(element.id)">
                        <el-form-item v-bind="element.formItem">
                            <component :is="getComponent(element.componentName)" v-model="getFormModel[element.model]" v-bind="element.props" />
                        </el-form-item>
                        <div class="drag-form-item-operate">
                            <base-icon
                                icon="CopyDocument"
                                class="mr5 operate-icon pointer"
                                title="复制"
                                :size="14"
                                @click.stop="addJson(element, index + 1)"
                            />
                            <base-icon icon="Delete" class="pointer operate-icon" :size="14" title="删除" @click.stop="deleteJson(index)" />
                        </div>
                    </div>
                </template>
            </draggable>
        </el-scrollbar>
    </el-form>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useWidgetList } from "@/hooks/useWidgetList";
import { useHistory } from "@/hooks/useHistory";
import draggable from "vuedraggable";
import { omit } from "@/utils";

const { getFormJson, getFormModel, getFormConfig, setActive, addJson, deleteJson, getActiveId } = useFormData();
const { getComponent } = useWidgetList();
const { executeRecord } = useHistory();

const getFilterConfig = computed(() => {
    const newConfig: any = { ...unref(getFormConfig) };
    if (newConfig["show-suffix"]) {
        newConfig["label-suffix"] = "：";
    }
    return newConfig;
});

const handleDragEnd = (e: any) => {
    setActive(getFormJson.value[e.newIndex].id);
    executeRecord();
};

const handleDragUpdate = (e: any) => {
    console.log(e);
};
</script>

<style scoped></style>
