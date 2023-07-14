<template>
    <div class="all-container form-widget-container">
        <el-scrollbar view-class="h100">
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
                <template #item="{ element }">
                    <el-form>
                        <render-item :element="element" />
                    </el-form>
                </template>
            </draggable>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useHistory } from "@/hooks/useHistory";
import draggable from "vuedraggable";

const { getFormJson, setActive } = useFormData();
const { executeRecord } = useHistory();

const handleDragEnd = (e: any) => {
    setActive(getFormJson.value[e.newIndex].id);
    // executeRecord();
};

const handleDragUpdate = (e: any) => {
    // executeRecord();
};
</script>

<style scoped></style>
