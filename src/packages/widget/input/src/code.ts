/*
 * @Author: lzy
 * @Date: 2023-05-26 16:24:00
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-31 16:19:57
 * @FilePath: \vue3-form-drag\src\packages\widget\input\src\code.ts
 */
import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-input v-model="formModel.${config.model}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
