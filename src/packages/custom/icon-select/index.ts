import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 0,
    componentName: "icon-select",
    title: "图标选择器",
    icon: "svg-icon",
    col: {
        span: 24
    },
    formItem: {
        label: "图标选择器"
    },
    description: "图标选择器",
    renderCode,
    props: {
        placeholder: "点击右侧选择图标",
        width: "300px"
    },
    config: setting
};
