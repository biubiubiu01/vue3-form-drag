/*
 * @Author: lzy
 * @Date: 2023-05-29 14:13:40
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-01 10:10:55
 * @FilePath: \vue3-form-drag\src\packages\widget\number\src\code.ts
 *
 */
import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-input-number  v-model="formModel.${config.model}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
