import { createPinia } from "pinia";
import type { App } from "vue";

const store = createPinia();

export function setupPinia(app: App<Element>) {
    app.use(store);
}

export function storeReset() {}

export { store };
