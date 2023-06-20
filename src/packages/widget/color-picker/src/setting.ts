import { sizeOption } from "@/constant/size";

const colorPickerSetting = [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch"
            },
            {
                name: "选择透明度",
                field: "show-alpha",
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
