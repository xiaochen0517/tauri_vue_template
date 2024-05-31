import {createRouter, createWebHashHistory} from "vue-router";

export type RouteType = {
    path: string;
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: () => Promise<any>
};

const routes: RouteType[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
    },
    {
        path: "/settings",
        name: "Settings",
        component: () => import("@/views/SettingsPage.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
