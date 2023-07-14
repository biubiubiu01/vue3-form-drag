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
    col: {
        span: 24
    },
    config: setting
};
