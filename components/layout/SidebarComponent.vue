<script setup lang="ts">
const { t } = useI18n();
const isCollapsed = ref<boolean>(false);

const toggleSidebar = (): void => {
    isCollapsed.value = !isCollapsed.value;
    console.log("toggle");

};

const sidebarItems = computed(() => [
    {
        "title": t("main_title.muted.general"),
        "sub": [
            {
                "icon": "bx bxs-dashboard",
                "title": t("main_title.dashboard"),
                "path": "/"
            }
        ]
    },
    {
        "title": t("main_title.property"),
        "sub": [
            {
                "icon": "bx bx-building-house",
                "title": t("main_title.property"),
                "path": "/property"
            },
            {
                "icon": "bx bx-receipt",
                "title": t("main_title.billing"),
                "path": "/billing"
            },
            {
                "icon": "bx bxs-report",
                "title": t("main_title.report"),
                "path": "/report"
            },
        ]
    },
    {
        "title": t("main_title.muted.other"),
        "sub": [
            {
                "icon": "bx bxs-user-badge",
                "title": t("main_title.tenant"),
                "path": "/tenant"
            },
            {
                "icon": "bx bx-calendar",
                "title": t("main_title.schedule"),
                "path": "/schedule"
            },
            {
                "icon": "bx bx-error",
                "title": t("main_title.comment"),
                "path": "/comment"
            },
        ]
    },
]);
</script>
<template>
    <aside :class="['transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-[60px]' : 'w-48']"
        class="m-2 text-[var(--teal)] p-3 rounded-2xl h-[calc(100vh-1rem)]bg-white/20 shadow-2xl backdrop-blur-md">
        <div class=" flex flex-col w-full">
            <div class="flex flex-row py-5 w-full  justify-center items-center">
                <div :class="[
                    isCollapsed ? 'hidden' : 'flex flex-1 justify-center items-center'
                ]">
                    <img src="~/assets/images/usagi.png" alt="style img" class="h-16 w-auto object-contain" />
                </div>
                <button @click="toggleSidebar">
                    <i class="bx transition-all duration-300 ease-in-out justify-end"
                        :class="[isCollapsed ? 'bx-chevron-left-square' : 'bx bx-chevron-right-square']"></i>
                </button>
            </div>
            <div class="flex flex-col py-2 text-slate-800" v-for="(item, i) in sidebarItems" :key="i">
                <p class="pb-2" :class="[
                    isCollapsed ? 'collapse' : 'text-slate-500 visible'
                ]">
                    {{ item.title }}
                </p>
                <NuxtLink v-for="(sub, j) in item.sub" :key="j" :to="sub.path"
                    class="relative group flex flex-row gap-2 rounded-2xl items-center transition-colors ease-in-out hover:scale-110 hover:no-underline"
                    active-class="rounded-2xl bg-[var(--teal)] text-amber-100 !hover:scale-none" :class="[
                        isCollapsed
                            ? 'justify-center p-2 w-full'
                            : 'justify-start px-4 py-2 w-full'
                    ]">
                    <!-- ICON -->
                    <i :class="[sub.icon, 'flex-shrink-0']"></i>
                    <!-- TITLE -->
                    <p v-if="!isCollapsed" class="whitespace-nowrap">{{ sub.title }}</p>
                    <!-- Collapsed Floating Hover Tooltip -->
                    <div v-if="isCollapsed" class="pointer-events-none absolute bottom-full ml-3 z-2000
                   opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                   transition-all delay-200 duration-100 ease-out 
                   whitespace-nowrap rounded-lg bg-white  px-3 py-1.5 text-xs text-[var(--teal)] shadow-xl">
                        {{ sub.title }}
                    </div>
                </NuxtLink>
            </div>
        </div>
    </aside>
</template>