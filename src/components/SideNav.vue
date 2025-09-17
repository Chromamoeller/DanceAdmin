<template>
  <aside
    class="fixed left-0 top-0 h-screen w-56 bg-white shadow-lg border-r border-gray-200 flex flex-col items-start px-4 py-6 space-y-4"
  >
    <h2 class="text-xl font-semibold text-gray-800 mb-6">DanceAdmin</h2>

    <RouterLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="w-full rounded-md px-3 py-2 text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
      active-class="bg-blue-500 text-white"
    >
      {{ link.name }}
    </RouterLink>
  </aside>
</template>

<script setup lang="ts">
const links = [
  { name: "Dashboard", path: "/" },
  { name: "Kurse", path: "/courses" },
  { name: "Teilnehmer", path: "/participants" },
  { name: "Anwesenheit", path: "/attendance" },
];
</script>
