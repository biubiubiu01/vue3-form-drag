/*
 * @Author: lzy
 * @Date: 2023-05-30 10:24:24
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-05 11:53:43
 * @FilePath: \vue3-form-drag\src\packages\widget\radio\src\code.ts
 *
 */
import { transfromObject, omit } from "@/utils";

const renderCode = (config: any) => {
    return `<el-radio-group v-model="formModel.${config.model}">
         ${renderRadio(config.props)}
    </el-radio-group>`;
};

const renderRadio = (props: any) => {
    const raidoTag = props.shape === "button" ? "el-radio-button" : "el-radio";
    const config = transfromObject(omit(props, ["shape", "options"]));
    return props.options.reduce((t: string, c: any) => {
        return (t += `<${raidoTag} label=${c.value} ${config}>${c.label}</${raidoTag}>\n`);
    }, "");
};

export default renderCode;
