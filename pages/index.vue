<script setup lang="ts">
const route = useRouter();
const logOut = ():void =>{
    route.push('/auth/login');
}
</script>
<template>
    <div class="space-y-4">
        <button @click="logOut" type="button" class="bg-amber-100 border rounded-2xl m-10 p-3 shadow-sm border-amber-600">
            Logout
        </button>
    </div>
</template>