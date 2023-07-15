<template>
    <el-form size="small" label-width="100px" label-position="left">
        <el-form-item v-for="item in formSetting" :key="item.field" :label="item.name">
            <component :is="getComponent(item.componentName)" v-model="getFormSetting[item.field]" v-bind="item.props" />
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useWidgetList } from "@/hooks/useWidgetList";
import { formSetting } from "./column";

const { getFormSetting } = useFormData();

const { getComponent } = useWidgetList();
</script>
