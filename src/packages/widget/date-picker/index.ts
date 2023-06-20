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
    description: "日期选择器组件",
    renderCode,
    props: {},
    config: setting
};
