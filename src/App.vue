<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavItem from '@/components/NavItem.vue'
import FooterContent from '@/components/FooterContent.vue'
</script>
<template>
  <div class="text-white flex flex-col h-screen justify-between">
    <div>
      <header class="flex flex-row space-x-5 pt-5 pb-5 pl-5 font-header bg-slate-500 bg-opacity-40">
        <NavItem iconName="i-mdi-account-box" linkText="about" linkTarget="/" />
        <NavItem iconName="i-mdi-account-box" linkText="gender" linkTarget="/gender" />
        <NavItem iconName="i-mdi-account-box" linkText="cv / resumé" linkTarget="/cv" />
      </header>
      <div class="flex flex-row justify-center">
        <main class="mb-auto mt-5 bg-red-500 flex flex-row justify-center space-x-10 w-3/5">
          <RouterView />
        </main>
      </div>
    </div>
    <footer class="font-footer text-right pb-5 pr-5 bg-slate-500 bg-opacity-40 pt-5">
      <FooterContent />
    </footer>
  </div>
</template>
<style scoped></style>
