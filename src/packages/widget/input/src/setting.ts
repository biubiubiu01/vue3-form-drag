/*
 * @Author: lzy
 * @Date: 2023-05-26 17:43:58
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-05 14:13:18
 * @FilePath: \vue3-form-drag\src\packages\widget\input\src\setting.ts
 *
 */
import { sizeOption } from "@/constant/size";
const inputSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于input的基础配置",
        children: [
            {
                name: "最小长度",
                field: "minlength",
                componentName: "input",
                description: "这是input的minlength属性"
            },
            {
                name: "最大长度",
                field: "maxlength",
                componentName: "input",
                description: "这是input的maxlength属性"
            },
            {
                name: "占位文本",
                field: "placeholder",
                props: {
                    defaultValue: "请输入"
                },
                componentName: "input",
                description: "这是input的placeholder属性"
            },
            {
                name: "显示字数",
                field: "show-word-limit",
                componentName: "switch",
                description: "这是input的show-word-limit属性"
            },
            {
                name: "显示清空",
                field: "clearable",
                props: {
                    defaultValue: true
                },
                componentName: "switch",
                description: "这是input的clearable属性"
            },
            {
                name: "切换密码框",
                field: "show-password",
                componentName: "switch",
                description: "这是input的show-password属性"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch",
                description: "这是input的disabled属性"
            },
            {
                name: "是否只读",
                field: "readonly",
                componentName: "switch",
                description: "这是input的readonly属性"
            },
            {
                name: "自动聚焦",
                field: "autofocus",
                componentName: "switch",
                description: "这是input的autofocus属性"
            },
            {
                name: "输入框大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption,
                    defaultValue: "default"
                },
                description: "这是input的size属性"
            },
            {
                name: "前缀图标",
                field: "prefix-icon",
                componentName: "icon-select",
                description: "这是input的prefix-icon属性"
            },
            {
                name: "后缀图标",
                field: "suffix-icon",
                componentName: "icon-select",
                description: "这是input的suffix-icon属性"
            }
        ]
    }
];

export default inputSetting;
