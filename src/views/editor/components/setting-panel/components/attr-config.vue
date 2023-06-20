<template>
    <el-form size="small" label-width="100px" label-position="left" v-if="getCurrentConfig.componentName" :key="getCurrentConfig.id">
        <el-form-item label="组件类型">
            <el-tag> {{ getCurrentConfig.componentName }}</el-tag>
        </el-form-item>
        <RenderWrapper
            v-for="item in [...formItemSetting, ...getCurrentConfig.config]"
            :key="item.name"
            :name="item.name"
            :collapse="item.type === 'group'"
            class="field-item"
        >
            <template v-for="child in item.children" :key="child.field">
                <el-form-item v-if="isUndefined(child.show) || child.show?.(getCurrentConfig.props)" :class="{ 'not-label': !child.name }">
                    <template #label>
                        <div class="flex-center">
                            {{ child.name }}
                            <el-tooltip effect="dark" :content="child.description" v-if="child.description">
                                <base-icon icon="svg-info" class="ml5" :size="12" />
                            </el-tooltip>
                        </div>
                    </template>
                    <component
                        :is="getComponent(child.componentName)"
                        v-model="getCurrentConfig[item.key ?? 'props'][child.field]"
                        v-bind="child.props"
                    />
                </el-form-item>
            </template>
        </RenderWrapper>
    </el-form>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useWidgetList } from "@/hooks/useWidgetList";
import { formItemSetting } from "./column.data";
import RenderWrapper from "./render-wrapper.vue";
import { isUndefined } from "@/utils";

const { getCurrentConfig } = useFormData();

const { getComponent } = useWidgetList();
</script>
