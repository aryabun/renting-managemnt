<script setup lang="ts">
const { t } = useI18n();
const breadCrum = computed(() => ({
  current: t("main_title.property"),
  list: [
    {
      title: t("main_title.property"),
      link: ""
    }
  ]
}))
</script>
<template>
  <BreadCrumbCompoent :prop-data="breadCrum" />
  <div class="h-[calc(100vh-10rem)] rounded-2xl mt-3  m-2 p-5  bg-white/20 shadow-2xl backdrop-blur-md">
  </div>
</template>