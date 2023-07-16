<template>
    <el-scrollbar>
        <el-form class="padding20" v-bind="getFormSetting">
            <div class="tr mb10">
                <el-button type="primary" @click="handleReturn">返回</el-button>
            </div>
            <el-form-item v-for="element in getFormJson" :key="element.id" class="drag-form-item" v-bind="element.formItem">
                <component :is="getComponent(element.componentName)" v-model="getFormModel[element.formItem.prop]" v-bind="element.props" />
            </el-form-item>
        </el-form>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useWidgetList } from "@/hooks/useWidgetList";
import { useRouter } from "vue-router";

const { getFormJson, getFormModel, getFormSetting } = useFormData();
const { getComponent } = useWidgetList();
const router = useRouter();

const handleReturn = () => {
    router.push("/");
};
</script>

<style scoped></style>
