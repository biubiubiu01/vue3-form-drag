<template>
    <div class="editor-header flex-row-center justify-between">
        <div class="editor-header-left flex-row-center">
            <div class="editor-header-logo"></div>
            <div class="editor-header-github ml20 flex-row-center">
                <base-icon icon="svg-github" :size="20" class="mr5" />
                GitHub
            </div>
        </div>
        <div class="editor-header-right">
            <FullScreen />
            <Switch />
            <el-button-group style="margin: 0 12px">
                <el-tooltip effect="dark" content="撤销" placement="bottom">
                    <el-button :disabled="redoDisabled" @click="executeRedo">
                        <base-icon icon="svg-back" />
                    </el-button>
                </el-tooltip>
                <el-tooltip effect="dark" content="恢复" placement="bottom">
                    <el-button :disabled="undoDisabled" @click="executeUndo">
                        <base-icon icon="svg-next" />
                    </el-button>
                </el-tooltip>
            </el-button-group>

            <el-button @click="saveSession">保存到本地</el-button>
            <el-button @click="clearJson">重置页面</el-button>
            <el-button type="primary" @click="handleCreateJSON">生成JSON</el-button>
            <el-button type="primary" @click="handleOutputCode">出码</el-button>
            <el-button type="primary">预览</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import FullScreen from "./components/fullscreen.vue";
import Switch from "./components/switch.vue";
import { useFormData } from "@/hooks/useFormData";
import { useGennerateCode } from "@/hooks/useGennerateCode";
import { useHistory } from "@/hooks/useHistory";

const { getFormJson, getFormModel, saveSession, clearJson } = useFormData();
const { gennerateCode, outputFile } = useGennerateCode();
const { redoDisabled, undoDisabled, executeRedo, executeUndo } = useHistory();

const handleCreateJSON = () => {
    console.log(getFormJson);
};

const handleOutputCode = () => {
    const code = gennerateCode({ schema: getFormJson.value, model: getFormModel.value });
    console.log(code);

    // outputFile(code, "form.vue");
};
</script>

<style lang="scss" scoped></style>
