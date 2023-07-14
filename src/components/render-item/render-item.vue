<script lang="tsx">
import { useWidgetList } from "@/hooks/useWidgetList";
import { useFormData } from "@/hooks/useFormData";
import { omit } from "@/utils";

export default defineComponent({
    props: {
        element: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, context) {
        const { getComponent } = useWidgetList();

        const { getActiveInfo } = useFormData();

        const getBindValue = computed(() => {
            const { element } = props;

            return {
                modelValue: getActiveInfo.value[element.name],
                "onUpdate:modelValue": (val: any) => {
                    getActiveInfo.value[element.name] = val;
                },
                ...omit(element, ["type"])
            };
        });

        const renderComponent = () => {
            const { element } = props;
            if (!element.type) {
                console.warn("组件类型不能为空");
                return;
            }
            if (!getComponent(element.type)) {
                console.warn(`未找到与${element.type}匹配的组件`);
                return;
            }

            return h(getComponent(element.type), { ...getBindValue.value });
        };

        return () => {
            return renderComponent();
        };
    }
});
</script>
