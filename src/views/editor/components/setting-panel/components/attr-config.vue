<template>
    <el-form size="small" label-width="100px" label-position="left" v-if="getActiveInfo.componentName" :key="getActiveInfo.id">
        <el-form-item label="组件类型">
            <el-tag> {{ getActiveInfo.componentName }}</el-tag>
        </el-form-item>
        <el-form-item label="绑定字段" v-if="getActiveInfo.formItem">
            <el-input v-model="getActiveInfo.formItem.prop" clearable />
        </el-form-item>
        <RenderWrapper v-for="item in [...formItemSetting, ...getActiveInfo.config]" :key="item.name" :name="item.name" :item="item" :collapse="item.type === 'group'" class="field-item">
            <template #item="{ element }">
                <el-form-item v-if="isUndefined(element.show) || element.show?.(getActiveInfo.props)" :class="{ 'not-label': !element.name }">
                    <template #label>
                        <div class="flex-center">
                            {{ element.name }}
                            <el-tooltip effect="dark" :content="element.description" v-if="element.description">
                                <base-icon icon="svg-info" class="ml5" :size="12" />
                            </el-tooltip>
                        </div>
                    </template>
                    <component :is="getComponent(element.componentName)" v-model="getActiveInfo[item.key ?? 'props'][element.field]" v-bind="element.props" />
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
import { formItemSetting } from "./column";

const { getActiveInfo } = useFormData();

const { getComponent } = useWidgetList();
</script>
