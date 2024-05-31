import {defineStore} from "pinia";

export type AppConfig = {
    isDarkMode: boolean;
};

export const useAppConfigStore = defineStore("app-config", {
    state: (): AppConfig => {
        return {
            isDarkMode: true,
        };
    },
    actions: {
        switchDarkMode() {
            this.isDarkMode = !this.isDarkMode;
        },
    },
});
