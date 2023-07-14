import { createAttrSetting, createStyleSetting, createEventSetting } from "@/plugins/create";
import { getSchemaTpl } from "@/plugins/tpls";

// const inputSetting = [
//     {
//         type: "group",
//         name: "基础配置",
//         description: "关于input的基础配置",
//         children: [
//             {
//                 name: "输入框大小",
//                 field: "size",
//                 componentName: "radio",
//                 props: {
//                     options: sizeOption
//                 },
//                 description: "这是input的size属性"
//             },
//             {
//                 name: "前缀图标",
//                 field: "prefix-icon",
//                 componentName: "icon-select",
//                 description: "这是input的prefix-icon属性"
//             },
//             {
//                 name: "后缀图标",
//                 field: "suffix-icon",
//                 componentName: "icon-select",
//                 description: "这是input的suffix-icon属性"
//             }
//         ]
//     }
// ];

const attrSetting = createAttrSetting([
    getSchemaTpl("model"),
    getSchemaTpl("collapse", [
        getSchemaTpl("basic", [
            getSchemaTpl("placeholder"),
            getSchemaTpl("minlength"),
            getSchemaTpl("maxlength"),
            getSchemaTpl("show-word-limit"),
            getSchemaTpl("clearable"),
            {
                label: "密码框",
                name: "show-password",
                type: "switch"
            }
        ]),
        getSchemaTpl("status", [getSchemaTpl("disabled"), getSchemaTpl("readonly"), getSchemaTpl("autofocus")]),
        getSchemaTpl("validate", [])
    ])
]);

const styleSetting = createStyleSetting([]);

const eventSetting = createEventSetting([]);

export default attrSetting.concat(styleSetting).concat(eventSetting);
