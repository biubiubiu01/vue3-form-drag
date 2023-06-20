<!--
 * @Author: lzy
 * @Date: 2023-05-29 14:14:31
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-31 15:00:45
 * @FilePath: \vue3-form-drag\src\packages\widget\textarea\src\index.vue
 * 
-->
<template>
    <el-input v-model="value" v-bind="$attrs" type="textarea" />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = defineProps({
    modelValue: {
        type: [String, Number]
    },
    defaultValue: {
        type: [Number, String]
    }
});

const emit = defineEmits(["update:modelValue"]);

const value: any = useVModel(props, "modelValue", emit, { passive: true, defaultValue: props.defaultValue });

if (props.defaultValue) {
    emit("update:modelValue", unref(value));
}
</script>
