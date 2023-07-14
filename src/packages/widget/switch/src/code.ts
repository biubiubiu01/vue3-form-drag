import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-switch v-model="formModel.${config.formItem.prop}" ${transfromObject(config.props)} />`;
};

export default renderCode;
