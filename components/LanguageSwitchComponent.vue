<script lang="ts" setup>

const { locale, locales, setLocale } = useI18n({ useScope: "global" });

interface FlagImage {
    src: string,
    srcset: string,
    width: string,
    height: string,
    alt: string
}
const flagMap: Record<string, FlagImage> = {
    km: {
        src: "https://flagcdn.com/24x18/kh.png",
        srcset: "https://flagcdn.com/32x24/kh.png 2x, https://flagcdn.com/48x36/kh.png 3x",
        width: "24",
        height: "18",
        alt: "Cambodia"
    },
    en: {
        src: "https://flagcdn.com/24x18/us.png",
        srcset: "https://flagcdn.com/32x24/us.png 2x, https://flagcdn.com/48x36/us.png 3x",
        width: "24",
        height: "18",
        alt: "United States",
    },
};
watch(locale, (value) => {
    setLocale(value)
})
</script>
<template>
    <el-radio-group v-model="locale" size="small" fill="#207e8d">
        <el-radio-button v-for="loc in locales" :key="loc.code" ref="langRefs" :value="loc.code"> <img
                :src="flagMap[loc.code]?.src" :srcset="flagMap[loc.code]?.srcset" :width="flagMap[loc.code]?.width"
                :height="flagMap[loc.code]?.height" :alt="flagMap[loc.code]?.alt" />
        </el-radio-button>
    </el-radio-group>
</template>
<style scoped>
:deep(.el-radio-button__inner) {
    padding: 5px 10px !important;
    /* Set your desired vertical and horizontal padding */
}
</style>