import groupTable from "@/components/group-table/group-table.vue";

const componentMap = new Map<string, any>();

export const registerComponent = (key: string, component: any) => componentMap.set(key, component);

export const createComponent = () => {
    const modules: any = import.meta.glob("./**/*.vue", { eager: true, import: "default" });

    Object.keys(modules).forEach((key: string) => {
        const name = key.replace(/\.\/(.*)\/(.*)\/src\/index\.vue/, "$2");
        registerComponent(name, modules[key]?.default || modules[key]);
    });

    registerComponent("group-table", groupTable);

    return componentMap;
};

export const createFormWidget = () => {
    const modules: any = import.meta.glob("./widget/**/index.ts", { eager: true, import: "default" });
    return Object.values(modules);
};

export const createCustomWidget = () => {
    const modules: any = import.meta.glob("./custom/**/index.ts", { eager: true, import: "default" });
    return Object.values(modules);
};

export const createLayoutWidget = () => {
    const modules: any = import.meta.glob("./layout/**/index.ts", { eager: true, import: "default" });
    return Object.values(modules);
};
