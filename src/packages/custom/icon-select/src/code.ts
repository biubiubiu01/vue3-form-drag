import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<icon-select v-model="formModel.${config.formItem.prop}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
