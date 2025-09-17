<template>
  <div class="flex">
    <SideNav />
    <main class="flex-1 ml-56">
      <Header />
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav.vue";
</script>
