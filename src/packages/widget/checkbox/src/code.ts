import { transfromObject, omit } from "@/utils";

const renderCode = (config: any) => {
    return `<el-checkbox-group v-model="formModel.${config.model}">
         ${renderCheckbox(config.props)}
    </el-checkbox-group>`;
};

const renderCheckbox = (props: any) => {
    const tag = props.shape === "button" ? "el-checkbox-button" : "el-checkbox";
    const config = transfromObject(omit(props, ["shape", "options"]));
    return props.options.reduce((t: string, c: any) => {
        return (t += `<${tag} label=${c.value} ${config}>${c.label}</${tag}>\n`);
    }, "");
};

export default renderCode;
