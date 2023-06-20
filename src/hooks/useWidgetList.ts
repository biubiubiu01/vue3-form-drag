/*
 * @Author: lzy
 * @Date: 2023-05-29 11:44:39
 * @LastEditors: lzy
 * @LastEditTime: 2023-06-02 10:22:12
 * @FilePath: \vue3-form-drag\src\hooks\useWidgetList.ts
 *
 */
import { createComponent, createFormWidget, createCustomWidget, registerComponent } from "@/packages";

const componentList = createComponent();

const formWidgetList = createFormWidget();
const customWidgetList = createCustomWidget();

export const useWidgetList = () => {
    const getFormWidgetList = formWidgetList.sort((a: any, b: any) => a.sort - b.sort);

    const getCustomWidgetList = customWidgetList.sort((a: any, b: any) => a.sort - b.sort);

    const getComponent = (key: string) => componentList.get(key);

    return {
        getFormWidgetList,
        getCustomWidgetList,

        getComponent,
        registerComponent
    };
};
