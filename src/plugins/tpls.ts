const tpls: {
    [propName: string]: any;
} = {};

export const getSchemaTpl = (name: string, options?: any) => {
    const tpl = tpls[name];

    return typeof tpl === "function" ? tpl(options) : tpl ?? {};
};

export const setSchemaTpl = (name: string, value: any) => {
    tpls[name] = value;
};

setSchemaTpl("model", {
    label: "绑定字段",
    name: "model",
    type: "input"
});

setSchemaTpl("minlength", {
    label: "最小长度",
    name: "minlength",
    type: "number"
});

setSchemaTpl("maxlength", {
    label: "最大长度",
    name: "maxlength",
    type: "number"
});

setSchemaTpl("show-word-limit", {
    label: "显示字数",
    name: "show-word-limit",
    type: "switch"
});

setSchemaTpl("width", (title: string) => {
    return {
        label: title,
        name: "width",
        type: "input"
    };
});

setSchemaTpl("clearable", {
    label: "可清除",
    name: "clearable",
    type: "switch"
});

setSchemaTpl("disabled", {
    label: "禁用",
    name: "disabled",
    type: "switch"
});

setSchemaTpl("readonly", {
    label: "只读",
    name: "readonly",
    type: "switch"
});

setSchemaTpl("autofocus", {
    label: "自动聚焦",
    name: "autofocus",
    type: "switch"
});

setSchemaTpl("labelRemark", {
    label: "标题提示",
    name: "labelRemark",
    type: "switch"
});

setSchemaTpl(
    "collapse",
    (
        config: Array<{
            label: string;
            children: any[];
        }>
    ) => {
        return {
            label: "",
            name: "collapse",
            type: "collapse",
            defaultExpandAll: true,
            children: config
        };
    }
);

setSchemaTpl("basic", (config: any[]) => {
    return {
        label: "基础配置",
        name: "basic",
        type: "collapse-item",
        children: config
    };
});

setSchemaTpl("status", (config: any[]) => {
    return {
        label: "状态配置",
        name: "status",
        type: "collapse-item",
        children: config
    };
});

setSchemaTpl("validate", (config: any[]) => {
    return {
        label: "校验配置",
        name: "validate",
        type: "collapse-item",
        children: config
    };
});
