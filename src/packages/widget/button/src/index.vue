<template>
    <el-button v-bind="$attrs">
        {{ title }}
    </el-button>
</template>

<script lang="ts" setup>
const props = defineProps({
    title: {
        type: String,
        default: "按钮"
    }
});
</script>
