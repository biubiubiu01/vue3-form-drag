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
                description: "这是textarea的minlength属性"
            },
            {
                name: "最大长度",
                field: "maxlength",
                componentName: "input",
                description: "这是textarea的maxlength属性"
            },
            {
                name: "占位文本",
                field: "placeholder",
                props: {},
                componentName: "input",
                description: "这是textarea的placeholder属性"
            },
            {
                name: "显示字数",
                field: "show-word-limit",
                componentName: "switch",
                description: "这是textarea的show-word-limit属性"
            },
            {
                name: "是否清除",
                field: "clearable",
                componentName: "switch"
            },
            {
                name: "切换密码框",
                field: "show-password",
                componentName: "switch"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch",
                description: "这是textarea的disabled属性"
            },
            {
                name: "是否只读",
                field: "readonly",
                componentName: "switch",
                description: "这是textarea的readonly属性"
            },
            {
                name: "自动聚焦",
                field: "autofocus",
                componentName: "switch",
                description: "这是textarea的autofocus属性"
            },
            {
                name: "输入框大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption
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
