<template>
    <div class="setting-panel panel-container">
        <el-tabs v-model="activeTab" class="h100 flex-direction-column">
            <el-tab-pane v-for="tab in getTabs" :key="tab.title" :name="tab.title" lazy>
                <template #label>
                    <div class="panel-item">
                        {{ tab.title }}
                    </div>
                </template>
                <el-scrollbar wrap-class="h100">
                    <el-form size="small" label-width="90px" label-position="left">
                        <el-form-item label="组件类型">
                            <el-tag> {{ getActiveInfo.type }}</el-tag>
                        </el-form-item>
                        <div v-for="item in tab.children" :key="item.name">
                            <render-item :element="item" />
                        </div>
                    </el-form>
                </el-scrollbar>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { useFormData } from "@/hooks/useFormData";
import { useSetting } from "@/hooks/useSetting";

const { getActiveInfo } = useFormData();
const { getComponentSetting } = useSetting();

const getTabs = computed(() => getComponentSetting(unref(getActiveInfo).type));

const activeTab = ref("常规");
</script>
