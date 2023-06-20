<template>
    <el-button @click="toggle()">
        <base-icon :svg-name="isDark ? 'dark' : 'light'" class="pointer" :size="18" />
    </el-button>
</template>

<script lang="ts" setup>
import { useDark } from "@/hooks/useDark";

const { isDark, toggle } = useDark();
</script>

<style lang="scss" scoped></style>
