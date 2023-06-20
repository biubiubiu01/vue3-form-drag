import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-date-picker v-model="formModel.${config.model}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
