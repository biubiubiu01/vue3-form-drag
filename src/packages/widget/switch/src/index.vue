<template>
    <form-item :label="label" :prop="name">
        <el-switch v-model="value" v-bind="$attrs" />
    </form-item>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [Number, String, Boolean]
    },
    defaultValue: {
        type: [Number, String, Boolean]
    },
    label: {
        type: String
    },
    name: {
        type: String
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });
</script>
