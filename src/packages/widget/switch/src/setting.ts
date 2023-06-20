import { sizeOption } from "@/constant/size";

const switchSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于switch的基础配置",
        children: [
            {
                name: "宽度",
                field: "width",
                componentName: "input"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch"
            },
            {
                name: "加载中",
                field: "loading",
                componentName: "switch"
            },
            {
                name: "点内显示",
                field: "inline-prompt",
                componentName: "switch"
            },
            {
                name: "大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption,
                    defaultValue: "default"
                }
            },
            {
                name: "打开值",
                field: "active-value",
                componentName: "input"
            },
            {
                name: "关闭值",
                field: "inactive-value",
                componentName: "input"
            },
            {
                name: "打开图标",
                field: "active-icon",
                componentName: "icon-select"
            },
            {
                name: "关闭图标",
                field: "inactive-icon",
                componentName: "icon-select"
            },
            {
                name: "打开文字",
                field: "active-text",
                componentName: "input"
            },
            {
                name: "关闭文字",
                field: "inactive-text",
                componentName: "input"
            }
        ]
    }
];

export default switchSetting;
