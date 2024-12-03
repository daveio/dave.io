<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template lang="html">
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>

<style lang="css" scoped></style>
