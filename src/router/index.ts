/*
 * @Author: lzy
 * @Date: 2023-05-12 15:46:47
 * @LastEditors: lzy
 * @LastEditTime: 2023-05-19 12:04:40
 * @FilePath: \vue3-form-drag\src\router\index.ts
 */
import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Editor",
            component: () => import("@/views/editor/index.vue")
        },
        {
            path: "/preview",
            name: "Preivew",
            component: () => import("@/views/preview/index.vue")
        }
    ],
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
