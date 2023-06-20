import BaseWidget from "./components/base-widget.vue";
import PageTree from "./components/page-tree.vue";
import TemplateWidget from "./components/template-widget.vue";

const componentList = [
    {
        icon: "baseWidget",
        name: "组件库",
        comp: BaseWidget
    },
    {
        icon: "pageTree",
        name: "大纲树",
        comp: PageTree
    },
    {
        icon: "templateWidget",
        name: "模板库",
        comp: TemplateWidget
    }
];

export default componentList;
