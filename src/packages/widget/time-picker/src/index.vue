<template>
    <el-time-picker v-model="value" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [Date, String, Number, Array]
    },
    defaultValue: {
        type: [String, Number],
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });

if (props.defaultValue) {
    emit("update:modelValue", unref(value));
}
</script>

<style scoped></style>
