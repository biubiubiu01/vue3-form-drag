import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 1,
    componentName: "quarter-picker",
    title: "季度选择",
    icon: "svg-quarter",
    formItem: {
        label: "季度选择"
    },
    col: {
        span: 24
    },
    description: "季度选择器",
    renderCode,
    props: {
        clearable: true,
        placeholder: "请选择季度",
        "prefix-icon": "Calendar",
        format: "YYYY-第q季度",
        width: "324px"
    },
    config: setting
};
