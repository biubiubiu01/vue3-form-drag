/*
 * @Author: lzy
 * @Date: 2023-05-29 15:00:53
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-30 14:42:34
 * @FilePath: \vue3-form-drag\src\views\editor\components\setting-panel\components\column.data.ts
 *
 */
import { sizeOption } from "@/constant/size";

export const formSetting = {};

export const formItemSetting = [
    {
        type: "group",
        key: "formItem",
        name: "FormItem配置",
        description: "关于form-item的一些配置",
        children: [
            {
                name: "标题",
                field: "label",
                componentName: "input",
                description: "这是form-item的label属性，修改form-item的标题"
            },
            {
                name: "标题宽度",
                field: "label-width",
                componentName: "input",
                description: "这是form-item的label-width属性，修改form-item的标题宽度"
            },
            {
                name: "是否必填",
                field: "required",
                componentName: "switch",
                description: "这是form-item的required属性，修改form-item的是否必填"
            },
            // {
            //     name: "校验规则",
            //     field: "rules",
            //     componentName: "switch",
            //     description: "这是form-item的rules属性，修改form-item的校验规则"
            // },
            {
                name: "显示错误",
                field: "show-message",
                componentName: "switch",
                description: "这是form-item的show-message属性，是否显示错误信息"
            },
            {
                name: "行内显示",
                field: "inline-message",
                componentName: "switch",
                description: "这是form-item的inline-message属性，可以让错误信息是否行内信息"
            },
            {
                name: "表单大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption,
                    defaultValue: "default"
                },
                description: "这是form-item的size属性，可以修改表单大小"
            }
        ]
    }
];
