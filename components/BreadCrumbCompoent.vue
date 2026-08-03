<script lang="ts" setup>
interface BreadCrumbItem {
    title: string,
    link?: string
}
interface PropData {
    current?: string,
    list: BreadCrumbItem[]
}
const props = defineProps<{
    propData: PropData
}>()
</script>
<template>
    <div class="flex flex-row items-center justify-between me-5 ms-2">
        <h5>{{ propData?.current }}</h5>
        <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="(value, key) in propData.list" :key="key" :to="{ path: value.link }">
                <span class="text-gray-500" :class="value.link ? 'underline' : 'no-underline'">{{ value.title }}</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>

</template>