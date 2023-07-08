<script setup lang="ts">
import { reactive, computed } from 'vue'
import AboutNavComponent from '../components/AboutNavComponent.vue'
import HeaderParticles from '@/components/HeaderParticles.vue'
import { ClickEvent, ClickMode } from 'tsparticles-engine'

interface headerState {
  typeValue: string
  typeStatus: boolean
  typeArray: Array<string>
  typeSpeed: number
  erasingSpeed: number
  newTextDelay: number
  typeArrayIndex: number
  charIndex: number
}

const state = reactive<headerState>({
  typeValue: '',
  typeStatus: false,
  typeArray: [
    'Welcome to @Ulrich.dev !',
    "I'm Ulrich Janse van Rensburg",
    'Delve into my coding journey!'
  ],
  erasingSpeed: 100,
  typeSpeed: 200,
  newTextDelay: 2000,
  typeArrayIndex: 0,
  charIndex: 0
})

function typeText() {
  if (state.charIndex < state.typeArray[state.typeArrayIndex].length) {
    if (!state.typeStatus) state.typeStatus = true
    state.typeValue += state.typeArray[state.typeArrayIndex].charAt(state.charIndex)
    state.charIndex += 1

    setTimeout(typeText, state.typeSpeed)
  } else {
    state.typeStatus = false
    setTimeout(eraseText, state.newTextDelay)
  }
}

function eraseText() {
  if (state.charIndex > 0) {
    if (!state.typeStatus) state.typeStatus = true

    state.typeValue = state.typeArray[state.typeArrayIndex].substring(0, state.charIndex - 1)
    state.charIndex -= 1
    setTimeout(eraseText, state.erasingSpeed)
  } else {
    state.typeStatus = false
    state.typeArrayIndex += 1
    if (state.typeArrayIndex >= state.typeArray.length) state.typeArrayIndex = 0

    setTimeout(typeText, state.typeSpeed + 1000)
  }
}

setTimeout(typeText, state.newTextDelay + 1000)
</script>

<template>
  <header class="w-full h-32 shadow-lg">
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
      <AboutNavComponent class="absolute" />
    </RouterLink>

    <HeaderParticles class="h-32" />
  </header>
  <main>
    <div class="flex justify-between">
      <div class="p-20 font-mPlus1Code font-bold">Testing deployment</div>
      <div class="flex justify-end">
        <div class="p-32 mr-4 mt-11 bg-[#9292C8] rounded-full"></div>
        <div class="p-24 mr-7 mt-16 absolute bg-[#BFBFE2] rounded-full"></div>
        <img src="../assets/Ulrichdev.png" class="h-80 drop-shadow-2xl absolute" />
      </div>
    </div>

    <div class="font-mPlus1Code">d</div>
  </main>
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
