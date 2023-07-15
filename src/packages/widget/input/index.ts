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
    col: {
        span: 12
    },
    description: "单行文本",
    renderCode,
    props: {},
    config: setting
};
