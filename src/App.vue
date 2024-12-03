<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import BaseIcon from '@/components/BaseIcon.vue'
</script>
<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
      <header class="flex flex-row space-x-5 pt-5 pb-5 pl-5 font-header bg-slate-500 bg-opacity-40">
        <h1><BaseIcon name="i-mdi-account-box" /> &nbsp; <RouterLink to="/">about</RouterLink></h1>
        <h1>
          <BaseIcon name="i-ph-gender-nonbinary-fill" /> &nbsp;
          <RouterLink to="/gender">gender</RouterLink>
        </h1>
        <h1>
          <BaseIcon name="i-ph-read-cv-logo-fill" /> &nbsp;
          <RouterLink to="/cv">cv / resumé</RouterLink>
        </h1>
      </header>
      <div class="flex flex-row justify-center">
        <main class="mb-auto mt-5 bg-red-500 flex flex-row justify-center space-x-10 w-3/5">
          <div>
            <p>Picture</p>
          </div>
          <div>
            <RouterView />
          </div>
        </main>
      </div>
    </div>
    <div>
      <footer class="font-footer text-right pb-5 pr-5 bg-slate-500 bg-opacity-40 pt-5">
        <h2>All junk copyright literally nobody.</h2>
        <h2>
          Feel free to yoink any of <a href="https://github.com/daveio/dave.io">the code</a> if it
          helps you.
        </h2>
        <h2>
          Just do me a favour and
          <a href="https://github.com/daveio/dave.io/issues/new">submit a ticket</a> telling me what
          you make?
        </h2>
      </footer>
    </div>
  </div>
</template>
<style scoped></style>
