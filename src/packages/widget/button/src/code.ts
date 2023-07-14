import { transfromObject, omit } from "@/utils";

const renderCode = (config: any) => {
    const props = omit(config.props, "title");
    return `<el-button ${transfromObject(props)}>${config.props.title}</el-button>`;
};

export default renderCode;
