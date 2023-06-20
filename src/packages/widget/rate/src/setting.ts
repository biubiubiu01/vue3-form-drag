import { sizeOption } from "@/constant/size";

const colorPickerSetting = [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "最大分值",
                field: "max",
                componentName: "number",
                props: {
                    defaultValue: 5
                }
            },
            {
                name: "低到中阈值",
                field: "low-threshold",
                componentName: "number",
                props: {
                    defaultValue: 2
                }
            },
            {
                name: "中到高阈值",
                field: "high-threshold",
                componentName: "number",
                props: {
                    defaultValue: 4
                }
            },
            {
                name: "允许半选",
                field: "allow-half",
                componentName: "switch"
            },
            {
                name: "显示分数",
                field: "show-score",
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
                    options: sizeOption,
                    defaultValue: "default"
                }
            }
        ]
    }
];

export default colorPickerSetting;
