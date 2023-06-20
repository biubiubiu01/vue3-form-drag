import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 8,
    componentName: "color-picker",
    title: "颜色选择器",
    icon: "svg-colorPicker",
    formItem: {
        label: "颜色选择器"
    },
    description: "颜色选择器",
    renderCode,
    props: {},
    config: setting
};
