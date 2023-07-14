<template>
    <form-designer :json="getFormJson" :model="getFormModel" />
</template>

<script lang="ts" setup>
import formDesigner from "./form-designer.vue";
import { useFormData } from "@/hooks/useFormData";

const { getFormJson, getFormModel } = useFormData();
</script>

<style scoped></style>
