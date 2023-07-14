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
    col: {
        span: 24
    },
    description: "checkbox多选组件",
    renderCode,
    props: {
        options: [
            {
                label: "选项一",
                value: "1"
            },
            {
                label: "选项二",
                value: "2"
            }
        ],
        shape: "",
        "text-color": "#ffffff",
        fill: "#409EFF"
    },
    config: setting
};
