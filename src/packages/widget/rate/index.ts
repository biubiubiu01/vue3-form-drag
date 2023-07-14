import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 8,
    componentName: "rate",
    title: "评分",
    icon: "svg-rate",
    formItem: {
        label: "评分"
    },
    col: {
        span: 24
    },
    description: "评分组件",
    renderCode,
    props: {
        max: 5,
        "low-threshold": 2,
        "high-threshold": 4
    },
    config: setting
};
