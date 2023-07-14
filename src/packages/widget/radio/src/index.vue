<template>
    <el-radio-group v-model="value">
        <template v-if="shape === 'button'">
            <el-radio-button v-for="item in options" :key="item.value" :label="item.value">{{ item.label }}</el-radio-button>
        </template>
        <template v-else>
            <el-radio v-for="item in options" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
        </template>
    </el-radio-group>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean]
    },
    options: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    defaultValue: {
        type: [String, Number, Boolean]
    },
    shape: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });
</script>
