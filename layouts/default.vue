<script setup lang="ts">
import FooterComponent from '~/components/layout/FooterComponent.vue';
import HeaderComponent from '~/components/layout/HeaderComponent.vue';
import SidebarComponent from '~/components/layout/SidebarComponent.vue';


</script>

<template>
    <div class="flex flex-row">
        <sidebar-component />
        <main class="flex-1">
            <header-component />
            <div class="h-[calc(100vh-7rem)] rounded-2xl m-2">
                <slot></slot>
            </div>
            <footer-component />
        </main>
    </div>
</template>