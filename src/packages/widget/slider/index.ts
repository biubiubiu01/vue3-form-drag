import setting from "./src/setting";
import renderCode from "./src/code";

export default {
    sort: 9,
    componentName: "slider",
    title: "滑块",
    icon: "svg-slider",
    formItem: {
        label: "滑块"
    },
    col: {
        span: 24
    },
    description: "滑块组件",
    renderCode,
    props: {
        min: 0,
        max: 100,
        step: 1,
        "show-input-controls": true,
        debounce: 300
    },
    config: setting
};
