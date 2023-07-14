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
    col: {
        span: 24
    },
    description: "select下拉组件",
    renderCode,
    props: {
        options: [
            {
                label: "下拉一",
                value: "1"
            },
            {
                label: "下拉二",
                value: "2"
            }
        ],
        "collapse-tags": true,
        "multiple-limit": 0,
        "max-collapse-tags": 1,
        "loading-text": "加载中"
    },
    config: setting
};
