import { registerComponent, createFormWidget, createCustomWidget } from "@/packages";

const componentList = registerComponent();

const formWidgetList = createFormWidget();
const customWidgetList = createCustomWidget();

export const useWidgetList = () => {
    const getFormWidgetList = formWidgetList.sort((a: any, b: any) => a.sort - b.sort);

    const getCustomWidgetList = customWidgetList.sort((a: any, b: any) => a.sort - b.sort);

    const getComponent = (key: string) => componentList.get(key);

    return {
        getFormWidgetList,
        getCustomWidgetList,

        getComponent
    };
};
