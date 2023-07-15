import attrConfig from "./attr-config.vue";
import formConfig from "./form-config.vue";
import { sizeOption } from "@/constant/size";
import { formPositionOption } from "@/constant/position";

export const tabList = [
    {
        title: "组件属性",
        key: "attr",
        component: attrConfig
    },
    {
        title: "表单属性",
        key: "form",
        component: formConfig
    }
];

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

export const formSetting = [
    {
        name: "表单名",
        field: "ref",
        componentName: "input"
    },
    {
        name: "标签宽度",
        field: "label-width",
        componentName: "number"
    },
    {
        name: "标签位置",
        field: "label-position",
        componentName: "radio",
        props: {
            options: formPositionOption
        }
    },
    {
        name: "隐藏必填",
        field: "hide-required-asterisk",
        componentName: "switch"
    },
    {
        name: "显示错误",
        field: "show-message",
        componentName: "switch"
    },
    {
        name: "显示通过图标",
        field: "status-icon",
        componentName: "switch"
    },
    {
        name: "是否禁用",
        field: "disabled",
        componentName: "switch"
    }
];
