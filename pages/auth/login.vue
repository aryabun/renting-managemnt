<script setup>

definePageMeta({
    layout: 'auth',
});
</script>

<template>
    <div class="rounded-2xl bg-white/20 p-8 shadow-2xl backdrop-blur-md dark:bg-slate-900/90">
        <div class="mb-6 text-center">
            <div class="flex justify-center items-center">
                <div class="flex-1">
                    <div class="flex justify-start">
                        <img src="~/assets/images/style2.png" alt="style img"
                            class="h-10 w-auto object-contain" /></div>
                    </div>
                <div class="flex-none">
                    <h1 class="text-2xl font-bold text-white">Welcome Back</h1>
                </div>
                <div class="flex-1">
                    <div class="flex justify-end">
                        <img src="~/assets/images/style2.png" alt="style img"
                            class="h-10 w-auto object-contain" /></div>
                    </div>
            </div>
            <p class="text-sm text-slate-200">Please sign in to your account</p>
        </div>

        <form @submit.prevent class="space-y-4">
            <div>
                <label class="block text-sm font-medium  text-white">Email</label>
                <input type="email" class="mt-1 w-full rounded-lg border px-4 py-2 text-white bg-white/30 placeholder:text-slate-200"
                    placeholder="you@example.com" />
            </div>

            <div>
                <label class="block text-sm font-medium text-white">Password</label>
                <input type="password" class="mt-1 w-full rounded-lg border px-4 py-2 text-white bg-white/30 placeholder:text-slate-200"
                    placeholder="••••••••" />
            </div>
            <div class="flex justify-center items-center">
                <button type="submit"
                    class="w-full bg-white hover:bg-amber-100  text-slate-800 font-bold py-2.5 rounded-lg shadow-md transition-colors">
                    Sign In
                </button>
            </div>
            <div class="flex justify-center items-center">
                <p class="text-slate-200">Or <NuxtLink to="./register"  class="text-amber-100 text-bold no-underline hover:underline">register</NuxtLink> as property owner</p>
            </div>
        </form>
    </div>
</template>