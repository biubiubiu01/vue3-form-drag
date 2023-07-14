import { saveAs } from "file-saver";
import { format } from "prettier";
import parserHtml from "prettier/parser-html";
import parserTypeScript from "prettier/parser-typescript";
import parserPostcss from "prettier/parser-postcss";

export const useGennerateCode = () => {
    const gennerateCode = (params: any) => {
        const template = gennerateTemplate(params);
        const script = gennerateScript();
        const style = gennerateStyle();
        return format(template + script + style, {
            semi: true,
            parser: "vue",
            plugins: [parserHtml, parserTypeScript, parserPostcss]
        });
    };

    const gennerateTemplate = ({ schema }: any) => {
        return `<template>
                   ${schema.reduce((t: string, c: any) => {
                       return t + ` ${c?.renderCode?.(c)}`;
                   }, "")}
                </template>`;
    };

    const gennerateScript = () => {
        return `<script lang="ts" setup>
                    import {reactive} from "vue"
                    const formModel=reactive({})  
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
