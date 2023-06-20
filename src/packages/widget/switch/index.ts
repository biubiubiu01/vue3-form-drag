/*
 * @Author: lzy
 * @Date: 2023-05-29 14:21:34
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-02 11:30:51
 * @FilePath: \vue3-form-drag\src\packages\widget\switch\index.ts
 *
 */
import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 5,
    componentName: "switch",
    title: "switch开关",
    icon: "svg-switch",
    formItem: {
        label: "switch开关"
    },
    description: "switch开关",
    renderCode,
    props: {},
    config: setting
};
