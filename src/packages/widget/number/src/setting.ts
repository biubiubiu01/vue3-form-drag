import { createAttrSetting, createStyleSetting, createEventSetting } from "@/plugins/create";
import { getSchemaTpl } from "@/plugins/tpls";

// const numberSetting = [
//     {
//         type: "group",
//         name: "基础配置",
//         description: "关于number的基础配置",
//         children: [
//             {
//                 name: "占位文本",
//                 field: "placeholder",
//                 componentName: "input",
//                 description: "这是number的placeholder属性"
//             },
//             {
//                 name: "最小值",
//                 field: "min",
//                 componentName: "number",
//                 description: "这是number的min属性"
//             },
//             {
//                 name: "最大值",
//                 field: "max",
//                 componentName: "number",
//                 description: "这是number的max属性"
//             },
//             {
//                 name: "小数位数",
//                 field: "precision",
//                 componentName: "number",
//                 description: "这是number的precision属性"
//             },
//             {
//                 name: "步进",
//                 field: "step",
//                 componentName: "number",
//                 description: "这是number的step属性"
//             },
//             {
//                 name: "严格步进",
//                 field: "step-strictly",
//                 componentName: "switch",
//                 description: "这是number的step-strictly属性"
//             },
//             {
//                 name: "是否禁用",
//                 field: "disabled",
//                 componentName: "switch",
//                 description: "这是number的disabled属性"
//             },
//             {
//                 name: "是否只读",
//                 field: "readonly",
//                 componentName: "switch",
//                 description: "这是number的readonly属性"
//             },
//             {
//                 name: "是否控制",
//                 field: "controls",
//                 componentName: "switch",
//                 description: "这是number的controls属性"
//             },
//             {
//                 name: "按钮位置",
//                 field: "controls-position",
//                 componentName: "radio",
//                 props: {
//                     options: positionOption
//                 },
//                 description: "这是number的controls-position属性",
//                 show: (config: any) => {
//                     return config.controls;
//                 }
//             },
//             {
//                 name: "输入框大小",
//                 field: "size",
//                 componentName: "radio",
//                 props: {
//                     options: sizeOption
//                 },
//                 description: "这是number的size属性"
//             }
//         ]
//     }
// ];

const attrSetting = createAttrSetting([
    getSchemaTpl("model"),
    getSchemaTpl("collapse", [getSchemaTpl("basic", [getSchemaTpl("placeholder")]), getSchemaTpl("status", []), getSchemaTpl("validate", [])])
]);

const styleSetting = createStyleSetting([]);

const eventSetting = createEventSetting([]);

export default attrSetting.concat(styleSetting).concat(eventSetting);
