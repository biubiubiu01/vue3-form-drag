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
    description: "日期区间组件",
    renderCode,
    props: {},
    config: setting
};
