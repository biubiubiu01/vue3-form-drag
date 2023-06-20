/*
 * @Author: lzy
 * @Date: 2023-05-29 14:13:34
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-31 16:31:53
 * @FilePath: \vue3-form-drag\src\packages\widget\number\index.ts
 *
 */
import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 2,
    componentName: "number",
    title: "数字输入框",
    icon: "svg-number",
    formItem: {
        label: "数字输入框"
    },
    description: "数字输入框",
    renderCode,
    props: {},
    config: setting
};
