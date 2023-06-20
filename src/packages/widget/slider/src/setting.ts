import { sizeOption } from "@/constant/size";

const colorPickerSetting = [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "最小值",
                field: "min",
                componentName: "number",
                props: {
                    defaultValue: 0
                }
            },
            {
                name: "最大值",
                field: "max",
                componentName: "number",
                props: {
                    defaultValue: 100
                }
            },
            {
                name: "步长",
                field: "step",
                componentName: "number",
                props: {
                    defaultValue: 1
                }
            },
            {
                name: "显示输入框",
                field: "show-input",
                componentName: "switch"
            },
            {
                name: "输入框控制",
                field: "show-input-controls",
                componentName: "switch",
                show: (config: any) => {
                    return config["show-input"];
                },
                props: {
                    defaultValue: true
                }
            },
            {
                name: "输入框防抖",
                field: "debounce",
                componentName: "number",
                show: (config: any) => {
                    return config["show-input"];
                },
                props: {
                    defaultValue: 300
                }
            },
            {
                name: "显示间断点",
                field: "show-stops",
                componentName: "switch"
            },
            {
                name: "显示提示信息",
                field: "show-tooltip",
                componentName: "switch"
            },
            {
                name: "标签",
                field: "label",
                componentName: "input",
                show: (config: any) => {
                    return !config.range;
                }
            },
            {
                name: "范围选择",
                field: "range",
                componentName: "switch"
            },
            {
                name: "范围开始标签",
                field: "range-start-label",
                componentName: "input",
                show: (config: any) => {
                    return config.range;
                }
            },
            {
                name: "范围结束标签",
                field: "range-end-label",
                componentName: "input",
                show: (config: any) => {
                    return config.range;
                }
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
                    options: sizeOption,
                    defaultValue: "default"
                }
            }
        ]
    }
];

export default colorPickerSetting;
