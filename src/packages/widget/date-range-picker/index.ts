import setting from "./src/setting";
import renderCode from "../date-picker/src/code";

export default {
    sort: 7,
    componentName: "date-range-picker",
    title: "日期区间",
    icon: "svg-dateRange",
    formItem: {
        label: "日期区间"
    },
    col: {
        span: 24
    },
    description: "日期区间组件",
    renderCode,
    props: {
        type: "daterange",
        format: "YYYY/MM/DD",
        "value-format": "YYYY-MM-DD",
        clearable: true,
        "prefix-icon": "Calendar"
    },
    config: setting
};
