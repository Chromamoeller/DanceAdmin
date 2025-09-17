<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Kurse</h1>

    <!-- Suchfeld + Button -->
    <div class="flex flex-wrap items-center gap-4 mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Kurs suchen…"
        class="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      />
      <button
        @click="addCourse"
        class="rounded-lg bg-blue-500 px-5 py-2 text-white font-medium shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Neuer Kurs
      </button>
    </div>

    <!-- Kursliste -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="course in filteredCourses"
        :key="course.id"
        class="rounded-xl bg-white p-6 shadow hover:shadow-lg transition-shadow border border-gray-200"
      >
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          {{ course.name }}
        </h2>
        <p class="text-gray-600 mb-4">{{ course.day }} • {{ course.time }}</p>
        <button
          class="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Details
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Course {
  id: number;
  name: string;
  day: string;
  time: string;
}

const search = ref("");
const courses = ref<Course[]>([
  { id: 1, name: "Salsa Anfänger", day: "Montag", time: "19:00" },
  { id: 2, name: "Standard Fortgeschritten", day: "Dienstag", time: "20:00" },
]);

const filteredCourses = computed(() =>
  courses.value.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

function addCourse() {
  // einfache Eingabedialoge für Demo
  const name = prompt("Name des Kurses:");
  if (!name) return;

  const day = prompt("Wochentag des Kurses:");
  if (!day) return;

  const time = prompt("Uhrzeit des Kurses (z. B. 19:00):");
  if (!time) return;

  // neue ID = max + 1
  const nextId =
    courses.value.length > 0
      ? Math.max(...courses.value.map((c) => c.id)) + 1
      : 1;

  courses.value.push({
    id: nextId,
    name,
    day,
    time,
  });
}
</script>
