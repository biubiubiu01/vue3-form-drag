import { useStorage } from "./useStorage";
import { ElMessage } from "element-plus";
import { deepClone } from "@/utils";
import { useNanoid } from "./useNanoid";

const { setItem, getItem } = useStorage();
const sessionKey = "PAGE_SCHEMA";

const state = reactive<any>({
    formJson: [],
    formModel: {},
    activeId: "",
    formSetting: {}
});

const cacheSchema = JSON.parse(getItem(sessionKey));

if (cacheSchema) {
    Object.assign(state, cacheSchema);
}

export const useFormData = () => {
    const getFormJson = computed(() => state.formJson);
    const getFormModel = computed(() => state.formModel);
    const getActiveId = computed(() => state.activeId);
    const getFormSetting = computed(() => state.formSetting);
    const getActiveInfo = computed(() => {
        return getFlatJson(unref(getFormJson)).find((item: any) => item.id === state.activeId) ?? {};
    });
    const getFlagFormJson = computed(() => getFlatJson(state.formJson));

    const getFlatJson = (list: any[]): any[] => {
        const arr: any[] = [];
        list.forEach((item) => {
            arr.push(item);
            if (item.children) {
                arr.push(...getFlatJson(item.children));
            }
        });
        return arr;
    };

    const createJson = (json: any) => {
        const newClone = deepClone(json);

        const id = useNanoid();
        newClone.id = id;
        if (newClone.formItem) {
            newClone.formItem.prop = `${json.componentName}_${id}`;
        }

        return newClone;
    };

    const setFormJson = (json: any[]) => {
        state.formJson = json;
    };

    const addJson = (json: any, index: number = state.formJson.length) => {
        const newJson = createJson(json);
        state.formJson.splice(index, 0, newJson);
        setActive(newJson.id);
    };

    const deleteJson = (index: number) => {
        state.formJson.splice(index, 1);
        let activeIndex = index + 1;
        if (index === 0) {
            activeIndex = 0;
        }
        if (activeIndex > state.formJson.length - 1) {
            activeIndex = state.formJson.length - 1;
        }
        setActive(state.formJson[activeIndex]?.id || "");
    };

    const clearJson = () => {
        state.formJson = [];
        state.formModel = {};
        state.formSetting = {};
        state.activeId = "";
        saveSession(false);
    };

    const setActive = (id: string) => {
        if (state.activeId === id) return;
        state.activeId = id;
    };

    const saveSession = (message = true) => {
        setItem(sessionKey, JSON.stringify(state));
        if (message) {
            ElMessage.success("保存到本地成功");
        }
    };

    return {
        getFormJson,
        getFormModel,
        getActiveId,
        getActiveInfo,
        getFlagFormJson,
        getFormSetting,

        setFormJson,
        addJson,
        createJson,
        deleteJson,
        clearJson,
        saveSession,
        setActive
    };
};
