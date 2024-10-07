<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: aliceblue;
}
.container {
  background-color: white;
  box-shadow: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
  min-height: 100vh;
}
</style>
