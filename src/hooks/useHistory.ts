import { useFormData } from "./useFormData";

const state = reactive<any>({
    index: -1,
    recordList: []
});

const { getFormJson, getFormModel, getActiveId } = useFormData();

export const useHistory = () => {
    const getRecord = computed(() => state.recordList);
    const getStep = computed(() => state.index);
    const redoDisabled = computed(() => state.index < 0);
    const undoDisabled = computed(() => state.recordList.length === 0 || state.index >= state.recordList.length - 1);

    const executeRedo = () => {
        // state.index -= 1;
    };

    const executeUndo = () => {};

    const executeRecord = () => {
        // state.index += 1;
        // state.recordList[state.index] = {
        //     formJson: getFormJson.value,
        //     formModel: getFormModel.value,
        //     activeId: getActiveId.value
        // };
    };

    return {
        getRecord,
        getStep,
        redoDisabled,
        undoDisabled,

        executeRedo,
        executeUndo,
        executeRecord
    };
};
