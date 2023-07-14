import { registerSetting } from "@/packages";

const settingList = registerSetting();

export const useSetting = () => {
    const getComponentSetting = (key: string) => settingList.get(key);

    return {
        getComponentSetting
    };
};
