<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="pt-3 flex flex-row space-x-5">
    <h1><RouterLink to="/">about</RouterLink></h1>
    <h1><RouterLink to="/gender">gender</RouterLink></h1>
    <h1><RouterLink to="/cv">cv / resumé</RouterLink></h1>
  </header>
  <main class="flex justify-center pt-6">
    <div class="size-full ml-6 mr-9 min-h-96 bg-black">
      <RouterView />
      <p class="min-h-full">boop</p>
      <p>barf</p>
    </div>
  </main>
  <footer class="mt-auto pb-3">
    <h2>All junk copyright literally nobody.</h2>
    <h2>
      Feel free to yoink any of
      <a href="https://github.com/daveio/dave.io">the code</a> if it helps you.
    </h2>
    <h2>
      Just do me a favour and
      <a href="https://github.com/daveio/dave.io/issues/new">submit a ticket</a>
      telling me what you make?
    </h2>
  </footer>
</template>

<style scoped></style>
