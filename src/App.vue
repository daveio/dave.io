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
        <div class="size-full min-h-full ml-6 mr-9 bg-black">
            <RouterView/>
        </div>
    </main>
    <footer class="mt-auto pb-3">
        <h2>All junk copyright literally nobody.</h2>
        <h2>
      Feel free to yoink any of <a href="https://github.com/daveio/dave.io">the code</a> if it helps
      you. </h2>
        <h2>
      Just do me a favour and <a href="https://github.com/daveio/dave.io/issues/new">submit a ticket</a> telling me what you
      make? </h2>
    </footer>
</template>
<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
