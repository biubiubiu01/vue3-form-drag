import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-color-picker v-model="formModel.${config.model}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
