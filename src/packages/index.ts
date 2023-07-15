import groupTable from "@/components/group-table/group-table.vue";

export const registerComponent = () => {
    const componentMap = new Map<string, any>();
    const modules: any = import.meta.glob("./**/*.vue", { eager: true, import: "default" });

    Object.keys(modules).forEach((key: string) => {
        const name = key.replace(/\.\/(.*)\/(.*)\/src\/index\.vue/, "$2");
        componentMap.set(name, modules[key]?.default || modules[key]);
    });
    componentMap.set("group-table", groupTable);

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
