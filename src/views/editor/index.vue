<template>
    <el-container class="editor-container all-container">
        <el-header height="48px">
            <Header />
        </el-header>
        <el-container class="mian-container">
            <el-aside width="300px">
                <WidgetPanel />
            </el-aside>
            <el-main>
                <FormWidget />
            </el-main>
            <el-aside width="300px">
                <SettingPanel />
            </el-aside>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import Header from "./components/header/index.vue";
import WidgetPanel from "./components/widget-panel/index.vue";
import FormWidget from "./components/form-widget/index.vue";
import SettingPanel from "./components/setting-panel/index.vue";
</script>

<style lang="scss">
@use "./editor.scss";
</style>
