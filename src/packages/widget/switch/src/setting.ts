import { createAttrSetting, createStyleSetting, createEventSetting } from "@/plugins/create";
import { getSchemaTpl } from "@/plugins/tpls";

// const switchSetting = [
//     {
//         type: "group",
//         name: "基础配置",
//         description: "关于switch的基础配置",
//         children: [
//             {
//                 name: "是否禁用",
//                 field: "disabled",
//                 componentName: "switch"
//             },
//             {
//                 name: "加载中",
//                 field: "loading",
//                 componentName: "switch"
//             },
//             {
//                 name: "点内显示",
//                 field: "inline-prompt",
//                 componentName: "switch"
//             },
//             {
//                 name: "大小",
//                 field: "size",
//                 componentName: "radio",
//                 props: {
//                     options: sizeOption
//                 }
//             },
//             {
//                 name: "打开值",
//                 field: "active-value",
//                 componentName: "input"
//             },
//             {
//                 name: "关闭值",
//                 field: "inactive-value",
//                 componentName: "input"
//             },
//             {
//                 name: "打开图标",
//                 field: "active-icon",
//                 componentName: "icon-select"
//             },
//             {
//                 name: "关闭图标",
//                 field: "inactive-icon",
//                 componentName: "icon-select"
//             },
//             {
//                 name: "打开文字",
//                 field: "active-text",
//                 componentName: "input"
//             },
//             {
//                 name: "关闭文字",
//                 field: "inactive-text",
//                 componentName: "input"
//             }
//         ]
//     }
// ];

// export default switchSetting;

const attrSetting = createAttrSetting([
    getSchemaTpl("model"),
    getSchemaTpl("collapse", [getSchemaTpl("basic", [getSchemaTpl("width", "宽度")]), getSchemaTpl("status", []), getSchemaTpl("validate", [])])
]);

const styleSetting = createStyleSetting([]);

const eventSetting = createEventSetting([]);

export default attrSetting.concat(styleSetting).concat(eventSetting);
