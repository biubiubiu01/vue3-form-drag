<template>
    <el-popover :visible="pickerVisible" placement="bottom" :width="width" trigger="click">
        <template #reference>
            <el-input v-model="state.iconValue" class="base-icon-picker" :placeholder="placeholder" readonly @click="pickerVisible = true" v-if="!$slots.reference" :disabled="disabled" :size="size">
                <template #append>
                    <base-icon :icon="state.iconValue" v-if="state.iconValue" :size="20" />
                </template>
            </el-input>
            <slot name="reference"></slot>
        </template>
        <div class="base-icon-content" v-click-outside="closePopover">
            <el-input v-model="state.iconFilter" placeholder="搜索图标" @input="handleSearchDebounce" />
            <el-scrollbar height="230px" style="margin-top: 8px">
                <div class="base-icon-list">
                    <div class="icon-item flex-center" v-for="icon in state.iconList" :key="icon" @click="handleChooseIcon(icon)">
                        <base-icon :icon="icon" :size="16" />
                    </div>
                </div>
            </el-scrollbar>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import { ClickOutside as vClickOutside } from "element-plus";
import { Icons } from "@/plugins/icon";
import { useDebounceFn } from "@vueuse/core";
import { deepClone } from "@/utils";

interface IconState {
    iconValue: undefined | string;
    iconFilter: string;
    iconList: string[];
}

const props = defineProps({
    modelValue: {
        type: String
    },
    width: {
        type: String,
        default: "300px"
    },
    size: {
        type: String
    },
    placeholder: {
        type: String,
        default: "点击右侧选择图标"
    },
    disabled: Boolean
});

const emit = defineEmits(["update:modelValue", "change"]);

const allIconList = Object.keys(Icons);

const pickerVisible = ref(false);

const state = reactive<IconState>({
    iconValue: "",
    iconFilter: "",
    iconList: deepClone(allIconList)
});

const handleSearchDebounce = useDebounceFn(handleSearchChange, 650);

function handleChooseIcon(val: string) {
    state.iconValue = val;
    pickerVisible.value = false;
}

function handleSearchChange() {
    state.iconList = state.iconFilter ? allIconList.filter((item) => item.toLowerCase().includes(state.iconFilter.toLowerCase())) : deepClone(allIconList);
}

const closePopover = () => {
    pickerVisible.value = false;
};

watch(
    () => props.modelValue,
    () => {
        state.iconValue = props.modelValue;
    },
    {
        immediate: true
    }
);

watch(
    () => state.iconValue,
    (v) => {
        emit("update:modelValue", v);
        emit("change", v);
    }
);
</script>

<style lang="scss">
.base-icon-picker {
    .el-input-group__append {
        cursor: pointer;
    }
}
.base-icon-content {
    .base-icon-list {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-auto-rows: 32px;
        grid-gap: 7px 7px;
        .icon-item {
            color: var(--el-text-color-regular);
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid var(--el-border-color);
            border-radius: 4px;
            &:hover {
                color: var(--el-text-color-primary);
                background-color: var(--el-border-color-extra-light);
            }
        }
    }
}
</style>
