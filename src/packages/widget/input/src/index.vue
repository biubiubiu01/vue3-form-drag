<template>
    <form-item v-bind="$attrs">
        <el-input v-model="value" v-bind="$attrs" />
    </form-item>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [String, Number]
    },
    defaultValue: {
        type: [String, Number],
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });
</script>
