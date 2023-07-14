/*
 * @Author: lzy
 * @Date: 2023-06-19 14:53:19
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-19 15:37:56
 * @FilePath: \vue3-form-drag\src\packages\widget\time-select\src\setting.ts
 *
 */
import { sizeOption } from "@/constant/size";

const inputSetting = [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "占位文本",
                field: "placeholder",
                componentName: "input"
            },
            {
                name: "显示格式",
                field: "format",
                componentName: "input",
                props: {}
            },
            {
                name: "开始时间",
                field: "start",
                componentName: "time-picker",
                props: {
                    format: "HH:mm",
                    "value-format": "HH:mm"
                }
            },
            {
                name: "结束时间",
                field: "end",
                componentName: "time-picker",
                props: {
                    format: "HH:mm",
                    "value-format": "HH:mm"
                }
            },
            {
                name: "间隔时间",
                field: "step",
                componentName: "time-picker",
                props: {
                    format: "HH:mm",
                    "value-format": "HH:mm"
                }
            },
            {
                name: "最小时间",
                field: "min-time",
                componentName: "time-picker",
                props: {
                    format: "HH:mm",
                    "value-format": "HH:mm"
                }
            },
            {
                name: "最大时间",
                field: "max-time",
                componentName: "time-picker",
                props: {
                    format: "HH:mm",
                    "value-format": "HH:mm"
                }
            },
            {
                name: "显示清空",
                field: "clearable",
                props: {},
                componentName: "switch"
            },
            {
                name: "是否只读",
                field: "readonly",
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
            }
        ]
    }
];

export default inputSetting;
