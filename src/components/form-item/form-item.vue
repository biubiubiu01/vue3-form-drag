<template>
    <el-form-item :prop="name">
        <template #label>
            {{ label }}
            <!-- <el-popover v-bind="getBindValue">
                <template #reference>
                    <base-icon :icon="getLabelRemark.icon" v-if="labelRemark" />
                </template>
            </el-popover> -->
        </template>
        <slot></slot>
    </el-form-item>
</template>

<script lang="ts" setup>
import { isString, isObject } from "@/utils/is";
import { omit } from "@/utils";
import { readonly } from "vue";

const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    name: {
        type: String
    },
    labelRemark: {
        type: [String, Object],
        default: ""
    }
});

const defaultRemark = readonly({
    icon: "",
    trigger: "hover",
    placement: "top",
    title: "",
    content: ""
});

const getLabelRemark = computed(() => {
    const { labelRemark } = props;
    if (isString(labelRemark)) {
        return Object.assign({}, defaultRemark, { content: labelRemark });
    } else if (isObject(labelRemark)) {
        return Object.assign({}, defaultRemark, { ...labelRemark });
    }
});

const getBindValue = computed(() => {
    return { ...omit(getLabelRemark.value, "icon") };
});
</script>

<style scoped></style>
