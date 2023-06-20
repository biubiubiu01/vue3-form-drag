import { sizeOption } from "@/constant/size";

const checkboxSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于checkbox的基础配置",
        children: [
            {
                name: "最少勾选数量",
                field: "min",
                componentName: "number"
            },
            {
                name: "最大勾选数量",
                field: "max",
                componentName: "number"
            },
            {
                name: "形状",
                field: "shape",
                componentName: "radio",
                props: {
                    options: [
                        {
                            label: "默认",
                            value: ""
                        },
                        {
                            label: "按钮",
                            value: "button"
                        }
                    ],
                    defaultValue: ""
                }
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
                name: "是否禁用",
                field: "disabled",
                componentName: "switch"
            },
            {
                name: "选中文本颜色",
                field: "text-color",
                componentName: "color-picker",
                props: {
                    defaultValue: "#ffffff"
                },
                show: (config: any) => {
                    return config.shape === "button";
                }
            },
            {
                name: "选中背景颜色",
                field: "fill",
                componentName: "color-picker",
                props: {
                    defaultValue: "#409EFF"
                },
                show: (config: any) => {
                    return config.shape === "button";
                }
            }
        ]
    },
    {
        type: "group",
        name: "选项配置",
        description: "关于radio的选项配置",
        children: [
            {
                field: "options",
                componentName: "group-table",
                props: {
                    defaultValue: [
                        {
                            label: "选项一",
                            value: "1"
                        },
                        {
                            label: "选项二",
                            value: "2"
                        }
                    ],
                    columns: [
                        {
                            label: "名称",
                            value: "label",
                            componentName: "input"
                        },
                        {
                            label: "值",
                            value: "value",
                            componentName: "input"
                        }
                    ]
                }
            }
        ]
    }
];

export default checkboxSetting;
