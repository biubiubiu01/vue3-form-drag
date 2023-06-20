import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 5,
    componentName: "checkbox",
    title: "多选框",
    icon: "svg-checkbox",
    formItem: {
        label: "多选框"
    },
    description: "checkbox多选组件",
    renderCode,
    props: {
        options: []
    },
    config: setting
};
