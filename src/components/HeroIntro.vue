<script setup lang="ts">
import UlrichSelf from "@/components/shared/UlrichSelf.vue";
import DonutDecorComponent from "@/components/shared/DonutDecorComponent.vue";
import IconLinks from "@/components/IconLinks.vue";
</script>

<template>
  <div class="flex shadow-lg">
    <IconLinks />
    <UlrichSelf class="w-[35%] h-1/6 -mt-20 -ml-11 -mb-[18px]" />
    <div class="text-4xl font-mPlus1Code text-[#A9BAC8] font-semibold pt-5">
      <div class="flex items-center">
        <span class="text-[#AB5E5C] text-2xl">&#x2329;&nbsp;</span>
        I Am
        <span class="text-[#73B9AA] text-2xl">&nbsp;&#x3009;</span>
      </div>
      <!-- &#169; -->
      <div class="font-normal text-xl p-5">
        <span>Web dev</span>
        <span class="text-[#5E8B81] font-extrabold">&nbsp;&bull;</span
        ><span>&nbsp;Mobile dev</span>
        <span class="text-[#8A4F4D] font-extrabold">&nbsp;&bull;</span
        ><span>&nbsp;UI dev</span>
        <span class="text-[#3A6E8D] font-extrabold">&nbsp;&bull;</span
        ><span>&nbsp;Backend dev</span>
      </div>
      <div class="font-light text-lg pl-5 w-4/5">
        A.K.A Full Stack Software Engineer from CPT South-Africa.<br />
        I possess an enormous passion for building anything from mobile to web,
        including rest api’s.
      </div>
    </div>
    <DonutDecorComponent class="absolute h-64 w-64 -end-5 top-60" />
  </div>
</template>
