<script setup>
import LanguageSwitchComponent from '../LanguageSwitchComponent.vue';

const router = useRouter()
const props = defineProps({
    propData: Object
})
const user = {
    firstname: 'Alaine',
    lastname: 'Smith',
    email: 'alainesmith003@yahoo.com',
}
const fullName = computed(() => {
    return `${user.firstname} ${user.lastname}`
});
</script>
<template>
    <header class="rounded-2xl p-5 m-2 shadow-lg backdrop-blur-md">
        <div class="flex flex-row gap-4 items-center  justify-end text-white">
            <!-- Start::header-link|dropdown-toggle -->
            <el-dropdown>
                <el-badge is-dot class="item"><i class="bx bx-bell header-link-icon text-white"></i></el-badge>
                <template #dropdown>
                    <div class="flex justify-center items-center text-grey-500 italic h-12 w-24 text-center">No
                        Notification</div>
                </template>
            </el-dropdown>
            <LanguageSwitchComponent/>

            <el-dropdown>
                <div class="flex flex-wrap items-center">
                    <el-avatar
                        src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="></el-avatar>
                    <div class="flex flex-col items-start ml-2 text-white ">
                        <div class="flex items-center gap-3 text-base">{{ fullName }}<i class='bx bx-chevron-down'></i></div>
                        <div class="text-xs">{{ user.email }}</div>
                    </div>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="navigateTo('/profile')">
                            <div class="flex flex-wrap gap-2 p-0.5">
                                <i class='bx bxs-user-rectangle'></i>Profile
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item @click="navigateTo('/auth/login')">
                            <div class="flex flex-wrap gap-2 p-0.5">
                                <i class='bx bx-log-in'></i>logout
                                <!-- <div class="text-base"></div> -->
                            </div>

                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

    </header>
</template>