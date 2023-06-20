<!--
 * @Author: lzy
 * @Date: 2023-05-29 14:22:05
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-31 14:59:47
 * @FilePath: \vue3-form-drag\src\packages\widget\switch\src\index.vue
 * 
-->
<template>
    <el-switch v-model="value" v-bind="$attrs" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [Number, String, Boolean]
    },
    defaultValue: {
        type: [Number, String, Boolean]
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });

if (props.defaultValue) {
    emit("update:modelValue", unref(value));
}
</script>
