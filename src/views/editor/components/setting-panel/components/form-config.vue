<template>
    <el-form size="small" label-width="100px" label-position="left">
        <el-form-item label="表单名">
            <el-input v-model="getFormConfig.ref" />
        </el-form-item>
        <el-form-item label="标签宽度">
            <el-input-number v-model="getFormConfig['label-width']" />
        </el-form-item>
        <el-form-item label="标签位置">
            <el-radio-group v-model="getFormConfig['label-position']">
                <el-radio label="left">左</el-radio>
                <el-radio label="right">右</el-radio>
                <el-radio label="top">顶部</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="隐藏必填">
            <el-switch v-model="getFormConfig['hide-required-asterisk']" />
        </el-form-item>
        <el-form-item label="显示后缀">
            <el-switch v-model="getFormConfig['show-suffix']" />
        </el-form-item>
        <el-form-item label="显示错误">
            <el-switch v-model="getFormConfig['show-message']" />
        </el-form-item>
        <el-form-item label="显示通过图标" v-if="getFormConfig['status-icon']">
            <el-switch v-model="getFormConfig['status-icon']" />
        </el-form-item>
        <el-form-item label="禁用表单" v-if="getFormConfig['disabled']">
            <el-switch v-model="getFormConfig['disabled']" />
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";

const { getFormConfig } = useFormData();
</script>

<style scoped></style>
