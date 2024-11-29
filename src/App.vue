<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import MainContent from './components/MainContent.vue'
import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <header>
    <MainHeader />
  </header>
  <main>
    <MainContent />
  </main>
  <footer>
    <MainFooter />
  </footer>
  <!-- Icon picker will be enabled for the "name" prop of any component with a prefix/suffix "icon". -->
  <BaseIcon name="i-mdi-home" />
  <VIcon>
    <IconVue name="i-logos-vue" />
    <!-- Icon component used via slot -->
  </VIcon>
  <!-- Icon picker will be enabled for props (of any component) with a prefix/suffix "icon". -->
  <div icon="i-mdi-home"></div>
  <VIcon icon="i-mdi-thumb-up"></VIcon>
  <MyButton prefixIcon="i-mdi-thumb-up">Click here!</MyButton>
</template>

<style scoped></style>
