<script lang="tsx">
import { useWidgetList } from "@/hooks/useWidgetList";
import { useFormData } from "@/hooks/useFormData";
import { useHistory } from "@/hooks/useHistory";
export default defineComponent({
    props: {
        element: {
            type: Object,
            default: () => {}
        },
        index: {
            type: Number,
            default: 0
        },
        parent: {
            type: Object,
            default: () => {}
        },
        preview: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const { getComponent } = useWidgetList();
        const { setActive, addJson, deleteJson, getActiveId, getFormModel } = useFormData();
        const { executeRecord } = useHistory();

        const isWrapper = computed(() => props.element.type === "wrapper");

        const renderWrapper = () => {
            const { element, index, preview } = props;
            return (
                <>
                    {h(getComponent(element.componentName), { parent: element, preview: props.preview })}
                    {!preview && renderOperate(element, index)}
                    {!preview ? <div class="drag-form-item-name">{element.title}</div> : null}
                </>
            );
        };

        const renderComponent = (element: any, index: number) => {
            const getBind = {
                ...element.props,
                modelValue: getFormModel.value[element.formItem.prop],
                "onUpdate:modelValue": (val: any) => (getFormModel.value[element.formItem.prop] = val)
            };
            return (
                <>
                    {h(getComponent(element.componentName), { ...getBind })}
                    {!props.preview && renderOperate(element, index)}
                </>
            );
        };

        const renderOperate = (element: any, index: number) => {
            return (
                <div class="drag-form-item-operate">
                    <base-icon
                        icon="CopyDocument"
                        class="mr5 operate-icon pointer"
                        title="复制"
                        size={14}
                        onClick={(e: any) => {
                            e.stopPropagation();
                            addJson(element, index + 1, props.parent?.children);
                            executeRecord();
                        }}
                    />
                    <base-icon
                        icon="Delete"
                        class="pointer operate-icon"
                        size={14}
                        title="删除"
                        onClick={(e: any) => {
                            e.stopPropagation();
                            deleteJson(index, props.parent?.children);
                            executeRecord();
                        }}
                    />
                </div>
            );
        };

        return () => {
            const { element, index } = props;
            const child = unref(isWrapper) ? renderWrapper() : renderComponent(element, index);
            const itemClass = {
                active: unref(getActiveId) === element.id,
                "is-wrapper": element.type === "wrapper",
                "drag-form-item": true
            };
            return (
                <div
                    class={itemClass}
                    onClick={(e: Event) => {
                        e.stopPropagation();
                        setActive(element.id);
                    }}
                >
                    {child}
                </div>
            );
        };
    }
});
</script>
