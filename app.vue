<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const { locale } = useI18n()

useHead(() => ({
  htmlAttrs: {
    class: locale.value === 'km' ? 'lang-km' : 'lang-en'
  }
}))
</script>
