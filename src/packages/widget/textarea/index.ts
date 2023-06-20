import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 3,
    componentName: "textarea",
    title: "多行文本",
    icon: "svg-textarea",
    formItem: {
        label: "文本输入框"
    },
    description: "文本输入框",
    renderCode,
    props: {},
    config: setting
};
