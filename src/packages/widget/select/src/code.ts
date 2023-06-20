import { transfromObject, omit } from "@/utils";

const renderCode = (config: any) => {
    const setting = transfromObject(omit(config.props, ["options"]));

    return `<el-select v-model="formModel.${config.model}" ${setting}>
        ${renderOption(config.props.options)}
    </el-select>`;
};

const renderOption = (options: any[]) => {
    return options.reduce((t: string, c: any) => {
        return (t += `<el-option label=${c.label} value=${c.value}></el-option>\n`);
    }, "");
};

export default renderCode;
