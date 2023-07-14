/*
 * @Author: lzy
 * @Date: 2023-06-19 16:15:02
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-19 16:17:32
 * @FilePath: \vue3-form-drag\src\packages\widget\slider\src\code.ts
 *
 */
import { transfromObject } from "@/utils";

const renderCode = (config: any) => {
    return `<el-slider v-model="formModel.${config.formItem.prop}" ${transfromObject(config.props)}/>`;
};

export default renderCode;
