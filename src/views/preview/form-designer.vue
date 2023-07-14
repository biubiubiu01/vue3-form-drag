<script lang="tsx">
import { useWidgetList } from "@/hooks/useWidgetList";

export default defineComponent({
    props: {
        json: {
            type: Array,
            default: () => []
        },
        model: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, context) {
        const { getComponent } = useWidgetList();

        const renderWrapper = (element: any) => {
            return <>{h(getComponent(element.componentName), { parent: element, preview: true })}</>;
        };

        const renderComponent = (element: any) => {
            const value = props.model;
            const getBind = {
                ...element.props,
                modelValue: value[element.formItem.prop],
                "onUpdate:modelValue": (val: any) => (value[element.formItem.prop] = val)
            };
            return <>{h(getComponent(element.componentName), { ...getBind, preview: true })}</>;
        };

        return () => {
            return (
                <div class="preview-container">
                    {props.json.map((item: any, index: number) => {
                        return <div class="preview-item">{item.type === "wrapper" ? renderWrapper(item) : renderComponent(item)}</div>;
                    })}
                </div>
            );
        };
    }
});
</script>

<style lang="scss" scoped>
.preview-container {
    padding: 20px;
    box-sizing: border-box;
    .preview-item + .preview-item {
        margin-top: 15px;
    }
}
</style>
