import { useStorage } from "./useStorage";
import { ElMessage } from "element-plus";
import { deepClone } from "@/utils";
import { useNanoid } from "./useNanoid";

const { setItem, getItem } = useStorage();
const sessionKey = "PAGE_SCHEMA";

const state = reactive<any>({
    formJson: [],
    formConfig: {
        ref: "myForm",
        "show-message": true,
        "label-position": "right",
        "label-width": 100
    },
    formModel: {},
    activeId: ""
});

const cacheState = JSON.parse(getItem(sessionKey));

if (cacheState) {
    Object.assign(state, cacheState);
}

export const useFormData = () => {
    const getFormJson = computed(() => state.formJson);
    const getFormConfig = computed(() => state.formConfig);
    const getFormModel = computed(() => state.formModel);
    const getCurrentConfig = computed(() => getFormJson.value.find((item: any) => item.id === state.activeId) ?? {});
    const getActiveId = computed(() => state.activeId);

    const createJson = (json: any) => {
        const newClone = deepClone(json);
        const id = useNanoid();
        newClone.id = id;
        newClone.model = `${json.componentName}_${id}`;
        return newClone;
    };

    const addJson = (json: any, index: number = state.formJson.length) => {
        const newJson = createJson(json);
        state.formModel[newJson.model] = state.formModel[json.model];
        state.formJson.splice(index, 0, newJson);
        setActive(newJson.id);
    };

    const deleteJson = (index: number) => {
        delete state.formModel[state.formJson[index].model];
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
        getFormConfig,
        getFormModel,
        getCurrentConfig,
        getActiveId,

        addJson,
        createJson,
        deleteJson,
        clearJson,
        saveSession,
        setActive
    };
};
