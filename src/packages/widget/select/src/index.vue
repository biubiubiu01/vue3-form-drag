<template>
    <el-select ref="baseSelectRef" v-model="selectValue" v-bind="$attrs">
        <el-option v-for="item in filterOptions" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import { isEmpty } from "@/utils";

const props = defineProps({
    options: {
        type: Array as PropType<any[]>,
        default: () => []
    },
    modelValue: {
        type: [Array, Object, String, Number, Boolean]
    },
    defaultValue: {
        type: [Array, Object, String, Number, Boolean],
        default: ""
    }
});

const emit = defineEmits(["update:modelValue"]);

const filterOptions = computed(() => {
    return props.options.filter((item) => !isEmpty(item.value));
});

const selectValue = useVModel(props, "modelValue", emit, { defaultValue: props.defaultValue });
</script>

<style scoped></style>
