import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 7,
    componentName: "date-picker",
    title: "日期选择器",
    icon: "svg-datePicker",
    formItem: {
        label: "日期选择器"
    },
    col: {
        span: 24
    },
    description: "日期选择器组件",
    renderCode,
    props: {
        type: "date",
        format: "YYYY/MM/DD",
        "value-format": "YYYY-MM-DD",
        clearable: true,
        "prefix-icon": "Calendar"
    },
    config: setting
};
