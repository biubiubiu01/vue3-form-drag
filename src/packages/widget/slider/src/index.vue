<template>
    <el-slider v-model="color" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [Number, Array]
    },
    defaultValue: {
        type: [Number, Array],
        default: 0
    }
});

const emit = defineEmits(["update:modelValue"]);

const color: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });
</script>

<style scoped></style>
