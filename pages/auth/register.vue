<script setup lang="ts">
import { useRouter } from 'vue-router';
const route = useRouter();

const register = ():void =>{
    route.push('/');
}
definePageMeta({
    layout: 'auth',
});
</script>
<template>
    <CardComponent class="w-1/4 ms-auto !rounded-none flex flex-col justify-center">
        <div class="mb-8 text-center">
            <div class="flex justify-center items-center">
                <div class="flex-1">
                    <div class="flex justify-start">
                        <img src="~/assets/images/style.png" alt="style img" class="h-10 w-auto object-contain" />
                    </div>
                </div>
                <div class="flex-none">
                    <h1 class="text-2xl font-bold text-white">Welcome!</h1>
                </div>
                <div class="flex-1">
                    <div class="flex justify-end">
                        <img src="~/assets/images/style.png" alt="style img" class="h-10 w-auto object-contain" />
                    </div>
                </div>
            </div>
            <p class="text-sm text-slate-200">Please fill in informations below</p>
        </div>

        <form @submit.prevent class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-white">Email</label>
                <div class="relative">
                    <div class="m-0 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <div class="flex items-center">
                            <i class='bx bx-envelope text-white'></i>
                        </div>
                    </div>
                    <input type="email"
                        class="mt-1 w-full rounded-lg border py-2 text-white bg-white/30 placeholder:text-slate-200 ps-10 pe-3 focus:border-amber-100 focus:outline-none"
                        placeholder="you@example.com" />
                </div>
            </div>

            <div>
                <label class="block text-sm font-medium text-white">Password</label>
                <div class="relative">
                    <div class="m-0 absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <div class="flex items-center">
                            <i class='bx bx-key text-white'></i>
                        </div>
                    </div>
                    <input type="password"
                        class="mt-1 w-full rounded-lg border px-4 py-2 text-white bg-white/30 placeholder:text-slate-200 ps-10 pe-3 focus:border-amber-100 focus:outline-none"
                        placeholder="Enter Password" />
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button type="submit" @click="register"
                    class="w-full bg-white hover:bg-amber-100  text-slate-800 font-bold py-2.5 rounded-lg shadow-md transition-colors">
                    Register
                </button>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-slate-200">Already has an account, <NuxtLink to="./login"
                        class="text-amber-100 text-bold no-underline hover:underline">login</NuxtLink> here!</p>
            </div>
        </form>
    </CardComponent>
</template>
<style scoped>
a{
    @apply text-amber-100 no-underline hover:underline !important;
}
</style>