<script lang="ts" setup>
import { reactive } from "vue";
import HeaderParticles from "@/components/HeaderParticles.vue";

interface headerState {
  typeValue: string;
  typeStatus: boolean;
  typeArray: Array<string>;
  typeSpeed: number;
  erasingSpeed: number;
  newTextDelay: number;
  typeArrayIndex: number;
  charIndex: number;
}

const state = reactive<headerState>({
  typeValue: "",
  typeStatus: false,
  typeArray: [
    "Welcome to @Ulrich.dev !",
    "I'm Ulrich Janse van Rensburg",
    "Delve into my coding journey!",
  ],
  erasingSpeed: 100,
  typeSpeed: 200,
  newTextDelay: 2000,
  typeArrayIndex: 0,
  charIndex: 0,
});

function typeText() {
  if (state.charIndex < state.typeArray[state.typeArrayIndex].length) {
    if (!state.typeStatus) state.typeStatus = true;
    state.typeValue += state.typeArray[state.typeArrayIndex].charAt(
      state.charIndex
    );
    state.charIndex += 1;

    setTimeout(typeText, state.typeSpeed);
  } else {
    state.typeStatus = false;
    setTimeout(eraseText, state.newTextDelay);
  }
}

function eraseText() {
  if (state.charIndex > 0) {
    if (!state.typeStatus) state.typeStatus = true;

    state.typeValue = state.typeArray[state.typeArrayIndex].substring(
      0,
      state.charIndex - 1
    );
    state.charIndex -= 1;
    setTimeout(eraseText, state.erasingSpeed);
  } else {
    state.typeStatus = false;
    state.typeArrayIndex += 1;
    if (state.typeArrayIndex >= state.typeArray.length)
      state.typeArrayIndex = 0;

    setTimeout(typeText, state.typeSpeed + 1000);
  }
}

setTimeout(typeText, state.newTextDelay + 1000);
</script>
<template>
  <header class="w-full h-32">
    <!-- -->

    <div
      class="text-6xl absolute text-gray-300 opacity-80 place-items-center mt-14 pr-8 font-libreBarcode128Text w-full flex justify-end"
    >
      <!-- bg-primary-black-50 bg-opacity-60 rounded-full -->
      <h1>
        <!-- Hello, I am Ulrich.dev -->
        <span class="typed-text">{{ state.typeValue }}</span>
        <span class="cursor" :class="{ typing: state.typeStatus }">&nbsp;</span>
      </h1>
    </div>
    <RouterLink to="/about">
      <slot name="headerNav"></slot>
      <!-- <AboutNavComponent class="absolute" /> -->
    </RouterLink>

    <HeaderParticles class="h-32" />
  </header>
  <!-- <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div> -->
</template>
