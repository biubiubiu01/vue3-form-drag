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
    description: "时间选择组件",
    renderCode,
    props: {},
    config: setting
};
