import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 7,
    componentName: "time-select",
    title: "时间选择",
    icon: "svg-timeSelect",
    formItem: {
        label: "时间选择"
    },
    col: {
        span: 24
    },
    description: "时间选择组件",
    renderCode,
    props: {
        format: "HH:mm",
        start: "09:00",
        end: "18:00",
        step: "00:30",
        clearable: true
    },
    config: setting
};
