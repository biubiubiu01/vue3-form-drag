import { sizeOption } from "@/constant/size";

export default [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "占位符",
                field: "placeholder",
                componentName: "input"
            },
            {
                name: "悬浮宽度",
                field: "width",
                componentName: "input"
            },
            {
                name: "显示格式",
                field: "format",
                componentName: "input"
            },
            {
                name: "显示清空",
                field: "clearable",
                componentName: "switch"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch"
            },
            {
                name: "大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption
                }
            },
            {
                name: "前缀图标",
                field: "prefix-icon",
                componentName: "icon-select"
            }
        ]
    }
];
