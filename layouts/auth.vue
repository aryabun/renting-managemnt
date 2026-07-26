<template>
<div class="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('~/assets/images/green-gradient.png')]" >
    <!-- Main Content Slot (Login/Register Forms) -->
    <main class="relative z-10 w-full max-w-md p-6">
      <slot />
    </main>
  </div>
</template>