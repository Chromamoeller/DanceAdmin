<template>
  <header
    class="flex items-center justify-between bg-white shadow-md px-6 py-4"
  >
    <!-- Logo oder Titel -->
    <h1 class="text-2xl font-semibold text-gray-800">DanceAdmin</h1>

    <!-- Suchfeld -->
    <div class="flex-1 mx-6 max-w-lg">
      <input
        type="text"
        v-model="query"
        placeholder="Suche Kurse oder Teilnehmer…"
        class="w-full rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
    </div>

    <!-- Login-Button -->
    <LoginButton />
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LoginButton from "./LoginButton.vue";

const query = ref("");
</script>
