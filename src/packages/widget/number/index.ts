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
    col: {
        span: 12
    },
    description: "数字输入框",
    renderCode,
    props: {},
    config: setting
};
