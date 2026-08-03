<template>
  <div
    class="relative min-h-screen w-full flex overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('~/assets/images/armchair-green-living-room-with-copy-space.jpg')]">
    <div class="p-3 flex items-start justify-top">
      <LanguageSwitchComponent />
    </div>
    <!-- Main Content Slot (Login/Register Forms) -->
    <slot />
  </div>
</template>
