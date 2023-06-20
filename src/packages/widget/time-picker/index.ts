import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 7,
    componentName: "time-picker",
    title: "时间选择器",
    icon: "svg-timePicker",
    formItem: {
        label: "时间选择器"
    },
    description: "时间选择器组件",
    renderCode,
    props: {},
    config: setting
};
