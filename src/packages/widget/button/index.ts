import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 10,
    componentName: "button",
    title: "按钮",
    icon: "svg-button",
    formItem: {
        label: ""
    },
    col: {},
    description: "按钮组件",
    renderCode,
    props: {
        title: "按钮",
        "loading-icon": "Loading"
    },
    config: setting
};
