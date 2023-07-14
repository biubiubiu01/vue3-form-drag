export const registerComponent = () => {
    const componentMap = new Map<string, any>();
    const modules: any = import.meta.glob("./**/*.vue", { eager: true, import: "default" });

    Object.keys(modules).forEach((key: string) => {
        const name = key.replace(/\.\/(.*)\/(.*)\/src\/index\.vue/, "$2");
        componentMap.set(name, modules[key]?.default || modules[key]);
    });

    return componentMap;
};

export const registerSetting = () => {
    const settingMap = new Map<string, any>();
    const modules: any = import.meta.glob("./**/setting.ts", { eager: true, import: "default" });

    Object.keys(modules).forEach((key: string) => {
        const name = key.replace(/\.\/(.*)\/(.*)\/src\/setting\.ts/, "$2");
        settingMap.set(name, modules[key]?.default || modules[key]);
    });
    return settingMap;
};

export const registerCode = () => {
    const codeMap = new Map<string, any>();
    const modules: any = import.meta.glob("./**/code.ts", { eager: true, import: "default" });
    Object.keys(modules).forEach((key: string) => {
        const name = key.replace(/\.\/(.*)\/(.*)\/src\/code\.ts/, "$2");
        codeMap.set(name, modules[key]?.default || modules[key]);
    });
    return codeMap;
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
