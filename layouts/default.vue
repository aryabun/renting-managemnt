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
            <div class="h-[calc(100vh-7rem)] rounded-2xl mt-3  m-2 p-5  bg-white/20 shadow-2xl backdrop-blur-md">
                <slot></slot>
            </div>
            <footer-component />
        </main>
    </div>
</template>
<style scoped>
/* footer{
    position: fixed;
    padding: 10px;
    bottom: 0;
    width: 100%;
    background-color: #f1f1f1;
    text-align: center;
    z-index: 1000;
} */
</style>