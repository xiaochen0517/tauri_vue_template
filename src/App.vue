<script setup lang="ts">
import {useAppConfigStore} from "./stores/AppConfigStore.ts";
import {watch} from "vue";

const appConfigStore = useAppConfigStore();

const initDarkMode = (value: boolean) => {
  if (value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

watch(
    () => appConfigStore.isDarkMode,
    (value) => {
      initDarkMode(value);
    },
    {
      immediate: true,
    },
);
</script>

<template>
  <div class="p-2 w-full h-full bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-200">
    <router-view/>
  </div>
</template>
