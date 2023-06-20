<script lang="tsx">
export default defineComponent({
    props: {
        collapse: {
            type: Boolean,
            default: false
        },
        name: {
            type: String
        }
    },
    setup(props, context) {
        const { slots } = context;

        const renderCollapse = () => {
            const { name } = props;
            return (
                <el-collapse model-value={name}>
                    <el-collapse-item title={name} name={name}>
                        {slots.default?.()}
                    </el-collapse-item>
                </el-collapse>
            );
        };

        return () => {
            if (props.collapse) {
                return renderCollapse();
            }
            return slots.default?.();
        };
    }
});
</script>
