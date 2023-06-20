/*
 * @Author: lzy
 * @Date: 2023-06-02 11:54:03
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-05 16:25:21
 * @FilePath: \vue3-form-drag\src\packages\widget\select\src\setting.ts
 *
 */
import { sizeOption } from "@/constant/size";

const selectSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于select的基础配置",
        children: [
            {
                name: "占位文本",
                field: "placeholder",
                componentName: "input"
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
                name: "是否多选",
                field: "multiple",
                componentName: "switch"
            },
            {
                name: "显示清除",
                field: "clearable",
                componentName: "switch",
                show: (config: any) => {
                    return !config.multiple;
                }
            },
            {
                name: "折叠选项",
                field: "collapse-tags",
                componentName: "switch",
                props: {
                    defaultValue: true
                },
                show: (config: any) => {
                    return config.multiple;
                }
            },
            {
                name: "折叠悬浮",
                field: "collapse-tags-tooltip",
                componentName: "switch",
                show: (config: any) => {
                    return config.multiple && config["collapse-tags"];
                }
            },
            {
                name: "最多选择",
                field: "multiple-limit",
                componentName: "number",
                props: {
                    defaultValue: 0
                },
                show: (config: any) => {
                    return config.multiple;
                }
            },
            {
                name: "显示折叠数量",
                field: "max-collapse-tags",
                componentName: "number",
                props: {
                    defaultValue: 1
                },
                show: (config: any) => {
                    return config["collapse-tags"];
                }
            },
            {
                name: "是否可搜索",
                field: "filterable",
                componentName: "switch"
            },
            {
                name: "创建新条目",
                field: "allow-create",
                componentName: "switch",
                show: (config: any) => {
                    return config.filterable;
                }
            },
            {
                name: "可否远程加载",
                field: "remote",
                componentName: "switch"
            },
            {
                name: "远程加载后缀",
                field: "remote-show-suffix",
                componentName: "switch",
                show: (config: any) => {
                    return config.remote && config.filterable;
                }
            },
            {
                name: "保留关键字",
                field: "reserve-keyword",
                componentName: "switch",
                show: (config: any) => {
                    return config.remote && config.filterable;
                }
            },
            {
                name: "回车默认选中",
                field: "default-first-option",
                componentName: "switch",
                show: (config: any) => {
                    return config.remote || config.filterable;
                }
            },
            {
                name: "是否加载中",
                field: "loading",
                componentName: "switch",
                show: (config: any) => {
                    return config.remote;
                }
            },
            {
                name: "加载中文本",
                field: "loading-text",
                componentName: "input",
                props: {
                    defaultValue: "加载中"
                },
                show: (config: any) => {
                    return config.remote;
                }
            },
            {
                name: "下拉宽度跟随",
                field: "fit-input-width",
                componentName: "switch"
            }
        ]
    },
    {
        type: "group",
        name: "选项配置",
        description: "关于select的选项配置",
        children: [
            {
                field: "options",
                componentName: "group-table",
                props: {
                    defaultValue: [
                        {
                            label: "下拉一",
                            value: "1"
                        },
                        {
                            label: "下拉二",
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

export default selectSetting;
