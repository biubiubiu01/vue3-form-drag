import { saveAs } from "file-saver";
import { format } from "prettier";
import parserHtml from "prettier/parser-html";
import parserTypeScript from "prettier/parser-typescript";
import parserPostcss from "prettier/parser-postcss";
import { transfromObject, omit } from "@/utils";
import { useFormData } from "./useFormData";

export const useGennerateCode = () => {
    const gennerateCode = (params: any) => {
        const template = gennerateTemplate(params);
        const script = gennerateScript(params.model);
        const style = gennerateStyle();
        return format(template + script + style, {
            semi: true,
            parser: "vue",
            plugins: [parserHtml, parserTypeScript, parserPostcss]
        });
    };

    const gennerateTemplate = ({ schema }: any) => {
        const { getFormConfig } = useFormData();
        const formConfig: any = { ...omit(unref(getFormConfig), "show-suffix") };
        if (formConfig["show-suffix"]) {
            formConfig["label-suffix"] = "：";
        }
        return `<template>
                    <el-form :model="formModel" ${transfromObject(formConfig)} @submit.prevent>
                        ${gennerateFormItem(schema)}
                    </el-form>
                </template>`;
    };

    const gennerateFormItem = (schema: any[]) => {
        return schema.reduce((t: string, c: any) => {
            return (
                t +
                `<el-form-item prop="${c.model}" ${transfromObject(c.formItem)}>
                    ${c?.renderCode?.(c)}
                </el-form-item>\n\n`
            );
        }, "");
    };

    const gennerateScript = (model: any) => {
        return `<script lang="ts" setup>
                    import {reactive} from "vue"
                    const formModel=reactive(${JSON.stringify(model)})  
                </script>`;
    };

    const gennerateStyle = () => {
        return `<style lang="scss" scope>
        </style>`;
    };

    const outputFile = (code: string, name: string) => {
        if (!code) return;
        const fileBlob = new Blob([code], { type: "text/plain;charset=utf-8" });
        saveAs(fileBlob, name);
    };

    return {
        gennerateCode,
        gennerateTemplate,
        gennerateScript,
        gennerateStyle,
        outputFile
    };
};
