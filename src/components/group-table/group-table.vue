<template>
    <draggable :list="list" :animation="100" item-key="index" :forceFallback="true" handle=".move">
        <template #item="{ element, index }">
            <div class="flex-row-center">
                <div class="group-item" v-for="item in columns" :key="item.value">
                    <component :is="getComponent(item.componentName)" v-model="element[item.value]" v-bind="item.props" />
                </div>
                <div class="group-item flex-row-center justify-end" style="width: 70px">
                    <base-icon icon="delete" class="mr5 pointer" :size="14" @click="handleDeleteRow(index)" />
                    <base-icon icon="rank" class="move pointer" :size="14" />
                </div>
            </div>
        </template>
    </draggable>
    <div class="flex-row-center mt5 pointer action" @click="handleAddRow">添加一项<base-icon icon="plus" /></div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";
import { useVModel } from "@vueuse/core";
import { useWidgetList } from "@/hooks/useWidgetList";

const props = defineProps({
    columns: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    modelValue: {
        type: Array,
        default: () => []
    },
    defaultValue: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(["update:modelValue"]);

const list: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });

const { getComponent } = useWidgetList();

if (props.defaultValue) {
    emit("update:modelValue", props.defaultValue);
}

const handleAddRow = () => {
    list.value.push({});
};

const handleDeleteRow = (index: number) => {
    list.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.group-item {
    box-sizing: border-box;
    padding: 2px;
}
.action {
    color: var(--el-color-primary);
}
</style>
