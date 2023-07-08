<script setup lang="ts">
import { reactive } from 'vue'
interface aboutNavState {
  hover: boolean
  hidden: boolean
}

const state = reactive<aboutNavState>({
  hover: false,
  hidden: true
})

function animationEffect(isActive: boolean): Promise<boolean> {
  return new Promise(() => {
    setTimeout(() => {
      state.hidden = isActive
    }, 300)
  })
}
</script>

<template>
  <div
    @mouseover=";(state.hover = true), (state.hidden = false)"
    @mouseleave=";(state.hover = false), animationEffect(true)"
    class="rounded-br-full cursor-pointer bg-primary-blue-50"
    :class="[
      {
        'h-24 w-24  duration-300 p-0': !state.hover,
        'h-32 w-32 bg-blue-500 p-2 duration-500': state.hover
      }
    ]"
  >
    <div class="p-2 rounded-br-full">
      <div class="h-3 w-3 rounded-3xl bg-primary-black-50 flex">
        <div
          class="-mt-1.5 text-primary-black-50 font-bold text-base"
          :class="[
            state.hover
              ? 'transform transition-all translate-x-4'
              : 'transform transition-all translate-x-0',
            {
              'animated-text-enter': state.hover,
              'animated-text-leave': !state.hover,
              hidden: state.hidden
            }
          ]"
        >
          About
        </div>
      </div>
      <img
        alt="Vue logo"
        class="logo rounded-full"
        :class="{
          'transform translate-y-2 duration-500': state.hover,
          'transform translate-y-0 duration-300': !state.hover
        }"
        src="@/assets/logo.png"
        width="70"
        height="70"
      />
    </div>
  </div>
</template>

<style type="postcss">
@keyframes translateXAnimationEnter {
  0% {
    transform: translateX(0);
    font-size: 2px;
  }
  100% {
    transform: translateX(16px);
    font-size: 16px;
  }
}

@keyframes translateXAnimationLeave {
  0% {
    transform: translateX(16px);
    font-size: 17px;
  }
  100% {
    transform: translateX(-2px);
    font-size: 2px;
  }
}

.animated-text-enter {
  animation: translateXAnimationEnter 0.7s;
}

.animated-text-leave {
  animation: translateXAnimationLeave 0.5s;
}
</style>
