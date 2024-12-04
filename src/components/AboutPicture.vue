<script lang="ts" setup>
import BaseIcon from '@/components/BaseIcon.vue'
</script>
<template>
  <div>
    <img src="@/assets/self.jpg" alt="Dave Williams" class="w-[300px] rounded-2xl" />
    <p class="text-4xl text-center pt-3 font-header">Dave Williams</p>
    <div class="pt-3 text-center">
      <span class="pr-2">
        <BaseIcon link="https://basilisk.gallery/@dave" name="i-fa6-brands-mastodon" /> </span
      ><span class="pr-2">
        <BaseIcon link="https://bsky.app/profile/dave.io" name="i-ph-butterfly-fill" /> </span
      ><span class="pr-2"> <BaseIcon name="i-heroicons-at-symbol-20-solid" /> </span
      ><span class="pr-2"> <BaseIcon name="i-fa6-brands-square-tumblr" /> </span
      ><span class="pr-2"> <BaseIcon name="i-fa6-brands-twitter" /> </span
      ><span class="pr-2"> <BaseIcon name="i-fa6-brands-facebook-f" /> </span
      ><span>
        <BaseIcon name="i-fa6-brands-github" />
      </span>
    </div>
  </div>
</template>
<style lang="css" scoped></style>
