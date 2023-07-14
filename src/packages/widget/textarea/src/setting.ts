/*
 * @Author: lzy
 * @Date: 2023-05-26 17:43:58
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-31 16:29:13
 * @FilePath: \vue3-form-drag\src\packages\widget\textarea\src\setting.ts
 *
 */
const inputSetting = [
    {
        type: "group",
        name: "基础配置",
        description: "关于textarea的基础配置",
        children: [
            {
                name: "最小长度",
                field: "minlength",
                componentName: "input",
                description: "这是textarea的minlength属性"
            },
            {
                name: "最大长度",
                field: "maxlength",
                componentName: "input",
                description: "这是textarea的maxlength属性"
            },
            {
                name: "占位文本",
                field: "placeholder",
                props: {},
                componentName: "input",
                description: "这是textarea的placeholder属性"
            },
            {
                name: "显示字数",
                field: "show-word-limit",
                componentName: "switch",
                description: "这是textarea的show-word-limit属性"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch",
                description: "这是textarea的disabled属性"
            },
            {
                name: "是否只读",
                field: "readonly",
                componentName: "switch",
                description: "这是textarea的readonly属性"
            },
            {
                name: "自动聚焦",
                field: "autofocus",
                componentName: "switch",
                description: "这是textarea的autofocus属性"
            },
            {
                name: "高度自适应",
                field: "autosize",
                componentName: "switch",
                description: "这是textarea的autosize属性"
            },
            {
                name: "行数",
                field: "rows",
                componentName: "number",
                props: {
                    min: 1
                },
                description: "这是textarea的rows属性"
            }
        ]
    }
];

export default inputSetting;
