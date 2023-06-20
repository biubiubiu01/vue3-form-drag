/*
 * @Author: lzy
 * @Date: 2023-05-29 10:20:48
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-01 11:34:56
 * @FilePath: \vue3-form-drag\src\packages\widget\input\index.ts
 *
 */
import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 1,
    componentName: "input",
    title: "单行文本",
    icon: "svg-input",
    formItem: {
        label: "单行文本"
    },
    description: "单行文本输入框",
    renderCode,
    props: {},
    config: setting
};
