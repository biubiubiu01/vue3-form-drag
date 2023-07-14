import setting from "./src/setting";
import renderCode from "../time-picker/src/code";

export default {
    sort: 7,
    componentName: "time-range-picker",
    title: "时间区间",
    icon: "svg-timeRange",
    formItem: {
        label: "时间区间"
    },
    description: "时间区间组件",
    renderCode,
    props: {
        "is-range": true,
        format: "HH:mm:ss",
        clearable: true,
        "prefix-icon": "Calendar"
    },
    col: {
        span: 24
    },
    config: setting
};
