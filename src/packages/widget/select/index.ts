import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 6,
    componentName: "select",
    title: "下拉框",
    icon: "svg-select",
    formItem: {
        label: "下拉框"
    },
    description: "select下拉组件",
    renderCode,
    props: {
        options: []
    },
    config: setting
};
