<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeroIntro from "@/components/HeroIntro.vue";
import AboutNavComponent from "@/components/AboutNavComponent.vue";
</script>

<template>
  <!-- header moet eie comp word -->
  <HeaderComponent>
    <template #headerNav> <AboutNavComponent class="absolute" /> </template>
  </HeaderComponent>
  <!-- <main> -->
  <main>
    <HeroIntro></HeroIntro>
    <div class="font-mPlus1Code h-96">Gibberich</div>
  </main>
  <!-- </main> -->
</template>

<style type="postcss">
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cursor {
  @apply inline-block ml-1 w-1 bg-white;
  animation: cursorBlink 1s infinite;
}

.cursor.typing {
  animation: none;
}

@keyframes cursorBlink {
  49% {
    background-color: white;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
