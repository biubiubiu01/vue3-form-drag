<script lang="tsx">
export default defineComponent({
    props: {
        collapse: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        },
        item: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, context) {
        const { slots } = context;

        const renderCollapse = () => {
            const { name } = props;
            return (
                <el-collapse model-value={name}>
                    <el-collapse-item title={name} name={name}>
                        {props.item.children.map((child: any) => slots.item?.({ element: child }))}
                    </el-collapse-item>
                </el-collapse>
            );
        };

        return () => {
            if (props.collapse) {
                return renderCollapse();
            }
            return <div>{slots.item?.({ element: props.item })}</div>;
        };
    }
});
</script>
