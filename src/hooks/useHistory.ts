import { deepClone } from "@/utils";
import { useFormData } from "./useFormData";

const state = reactive<any>({
    index: -1,
    recordList: []
});

const MAX_STEP = 20;

const { getFormJson, setActive, getActiveId, setFormJson } = useFormData();

export const useHistory = () => {
    const getStep = computed(() => state.index);
    const getStepJson = computed(() => state.recordList[unref(getStep)]?.formJson || []);
    const getStepId = computed(() => state.recordList[unref(getStep)]?.activeId || "");
    const redoDisabled = computed(() => state.index < 0);
    const undoDisabled = computed(() => state.recordList.length === 0 || state.index >= state.recordList.length - 1);

    // 撤销
    const executeUndo = () => {
        state.index = Math.max(-1, state.index - 1);
        setJson();
    };

    // 重做
    const executeRedo = () => {
        state.index = Math.min(state.recordList.length - 1, state.index + 1);
        setJson();
    };

    const setJson = () => {
        setFormJson(deepClone(getStepJson.value));
        setActive(getStepId.value);
    };

    const executeRecord = () => {
        state.recordList = state.recordList.slice(0, state.index + 1);
        state.recordList.push({
            formJson: deepClone(getFormJson.value),
            activeId: getActiveId.value
        });
        state.recordList = state.recordList.slice(-MAX_STEP);
        state.index = state.recordList.length - 1;
    };

    return {
        getStep,
        redoDisabled,
        undoDisabled,

        executeRedo,
        executeUndo,
        executeRecord
    };
};
