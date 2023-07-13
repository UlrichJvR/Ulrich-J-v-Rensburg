<script lang="ts" setup>
import InstaComponent from "@/components/shared/InstaComponent.vue";
import GitIconComponent from "@/components/shared/GitIconComponent.vue";
import LinkedInComponent from "@/components/shared/LinkedInComponent.vue";
</script>
<template>
  <div class="flex top-0 items-center">
    <div class="text-white px-10 space-y-5">
      <a href="" class="h-12 w-12 flex items-center justify-center">
        <Insta-Component
          class="h-10 w-10 hover:h-12 hover:w-12 transition-all hover:duration-100 hover:delay-75"
        />
      </a>
      <a
        href="https://github.com/UlrichJvR"
        class="h-12 w-12 flex items-center justify-center"
      >
        <GitIconComponent
          class="h-10 w-10 hover:h-12 hover:w-12 transition-all hover:duration-100"
        />
      </a>
      <a href="" class="h-12 w-12 flex items-center justify-center">
        <LinkedInComponent
          class="h-10 w-10 hover:h-12 hover:w-12 transition-all hover:duration-100"
        />
      </a>
    </div>
  </div>
</template>
