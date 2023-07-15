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
    col: {
        span: 12
    },
    description: "switch开关",
    renderCode,
    props: {},
    config: setting
};
