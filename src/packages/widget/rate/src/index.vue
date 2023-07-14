<template>
    <el-rate v-model="color" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: Number
    },
    defaultValue: {
        type: Number,
        default: 0
    }
});

const emit = defineEmits(["update:modelValue"]);

const color: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });
</script>

<style scoped></style>
