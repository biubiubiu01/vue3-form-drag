<template>
    <el-color-picker v-model="color" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: String
    },
    defaultValue: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const color: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });

if (props.defaultValue) {
    emit("update:modelValue", unref(color));
}
</script>

<style scoped></style>
