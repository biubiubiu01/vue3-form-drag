import { sizeOption } from "@/constant/size";
import { dateRangeOption } from "@/constant/date";
import { useFormData } from "@/hooks/useFormData";

const { getCurrentConfig } = useFormData();

const inputSetting = [
    {
        type: "group",
        name: "基础配置",
        children: [
            {
                name: "开始占位文本",
                field: "start-placeholder",
                componentName: "input"
            },
            {
                name: "结束占位文本",
                field: "end-placeholder",
                componentName: "input"
            },
            {
                name: "分割符",
                field: "range-separator",
                componentName: "input"
            },
            {
                name: "日期类型",
                field: "type",
                props: {
                    defaultValue: "daterange",
                    options: dateRangeOption,
                    onChange: (val: string) => {
                        const findItem = dateRangeOption.find((item) => item.value === val);
                        unref(getCurrentConfig).props.format = findItem?.format;
                        unref(getCurrentConfig).props["value-format"] = findItem?.valueFormat;
                    }
                },
                componentName: "select"
            },
            {
                name: "显示格式",
                field: "format",
                componentName: "input",
                props: {
                    defaultValue: "YYYY/MM/DD"
                }
            },
            {
                name: "值格式",
                field: "value-format",
                componentName: "input",
                props: {
                    defaultValue: "YYYY-MM-DD"
                }
            },
            {
                name: "显示清空",
                field: "clearable",
                props: {
                    defaultValue: true
                },
                componentName: "switch"
            },
            {
                name: "是否只读",
                field: "readonly",
                componentName: "switch"
            },
            {
                name: "是否禁用",
                field: "disabled",
                componentName: "switch"
            },
            {
                name: "大小",
                field: "size",
                componentName: "radio",
                props: {
                    options: sizeOption,
                    defaultValue: "default"
                }
            },
            {
                name: "前缀图标",
                field: "prefix-icon",
                componentName: "icon-select",
                props: {
                    defaultValue: "Date"
                }
            }
        ]
    }
];

export default inputSetting;
