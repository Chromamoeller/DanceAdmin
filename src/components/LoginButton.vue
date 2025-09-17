<template>
  <button
    class="rounded-full bg-blue-500 px-5 py-2 text-white font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
    @click="$emit('open')"
  >
    Login
  </button>
</template>

<script setup lang="ts">
// keine Logik – gibt nur Event nach außen
</script>
