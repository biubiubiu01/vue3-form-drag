import { sizeOption } from "@/constant/size";
import { typeOption } from "@/constant/type";

const buttonSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于button的基础配置",
        children: [
            {
                name: "按钮内容",
                field: "title",
                componentName: "input"
            },
            {
                name: "图标按钮",
                field: "icon",
                componentName: "icon-select"
            },
            {
                name: "按钮类型",
                field: "type",
                props: {
                    options: typeOption
                },
                componentName: "select"
            },
            {
                name: "朴素按钮",
                field: "plain",
                componentName: "switch"
            },
            {
                name: "文字按钮",
                field: "text",
                componentName: "switch"
            },
            {
                name: "文字按钮背景",
                field: "bg",
                componentName: "switch",
                show: (config: any) => {
                    return config.text;
                }
            },
            {
                name: "链接按钮",
                field: "link",
                componentName: "switch"
            },
            {
                name: "圆角按钮",
                field: "round",
                componentName: "switch"
            },
            {
                name: "圆形按钮",
                field: "circle",
                componentName: "switch"
            },
            {
                name: "加载中",
                field: "loading",
                componentName: "switch"
            },
            {
                name: "加载中图标",
                field: "loading-icon",
                componentName: "icon-select"
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
            }
        ]
    }
];

export default buttonSetting;
