import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 4,
    componentName: "radio",
    title: "单选框",
    icon: "svg-radio",
    formItem: {
        label: "单选框"
    },
    description: "radio单选组件",
    renderCode,
    props: {
        options: []
    },
    config: setting
};
