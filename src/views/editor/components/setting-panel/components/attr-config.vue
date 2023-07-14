<template>
    <el-form size="small" label-width="100px" label-position="left" v-if="getCurrentConfig.componentName" :key="getCurrentConfig.id">
        <el-form-item label="组件类型">
            <el-tag> {{ getCurrentConfig.componentName }}</el-tag>
        </el-form-item>
        <el-form-item label="绑定字段" v-if="getCurrentConfig.formItem">
            <el-input v-model="getCurrentConfig.formItem.prop" clearable />
        </el-form-item>
        <RenderWrapper v-for="item in getCurrentConfig.config" :key="item.name" :name="item.name" :item="item" :collapse="item.type === 'group'" class="field-item">
            <template #item="{ element }">
                <el-form-item v-if="isUndefined(element.show) || element.show?.(getCurrentConfig.props)" :class="{ 'not-label': !element.name }">
                    <template #label>
                        <div class="flex-center">
                            {{ element.name }}
                            <el-tooltip effect="dark" :content="element.description" v-if="element.description">
                                <base-icon icon="svg-info" class="ml5" :size="12" />
                            </el-tooltip>
                        </div>
                    </template>
                    <component :is="getComponent(element.componentName)" v-model="getCurrentConfig[item.key ?? 'props'][element.field]" v-bind="element.props" />
                </el-form-item>
            </template>
        </RenderWrapper>
    </el-form>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useWidgetList } from "@/hooks/useWidgetList";
import RenderWrapper from "./render-wrapper.vue";
import { isUndefined } from "@/utils";

const { getCurrentConfig } = useFormData();

const { getComponent } = useWidgetList();
</script>
