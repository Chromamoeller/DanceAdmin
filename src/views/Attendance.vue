<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Anwesenheit</h1>

    <!-- Filterbereich -->
    <div class="flex flex-wrap items-center gap-4 mb-6">
      <select
        v-model="selectedCourse"
        class="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
      >
        <option value="">Alle Kurse</option>
        <option v-for="c in courses" :key="c" :value="c">{{ c }}</option>
      </select>
      <input
        type="date"
        v-model="selectedDate"
        class="rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
      />
    </div>

    <!-- Tabelle -->
    <div class="overflow-x-auto bg-white shadow rounded-xl">
      <table class="min-w-full text-left">
        <thead class="bg-indigo-100 text-indigo-800 uppercase text-sm">
          <tr>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Kurs</th>
            <th class="px-4 py-3">Datum</th>
            <th class="px-4 py-3">Anwesend</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="a in filteredAttendance"
            :key="a.id"
            class="border-b last:border-none hover:bg-gray-50"
          >
            <td class="px-4 py-2">{{ a.name }}</td>
            <td class="px-4 py-2">{{ a.course }}</td>
            <td class="px-4 py-2">{{ a.date }}</td>
            <td class="px-4 py-2">
              <span
                class="px-3 py-1 rounded-full text-white text-sm"
                :class="a.present ? 'bg-green-500' : 'bg-red-400'"
              >
                {{ a.present ? "Ja" : "Nein" }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Attendance {
  id: number;
  name: string;
  course: string;
  date: string;
  present: boolean;
}

// Demo-Daten
const courses = ["Salsa", "Standard", "HipHop", "Bachata"];
const names = [
  "Tina Müller",
  "Sven Kalt",
  "Lena Hoffmann",
  "Jonas Richter",
  "Mara Vogel",
  "Finn Bauer",
  "Clara Neumann",
  "Noah König",
  "Emma Scholz",
  "Paul Zimmer",
];

const attendance = ref<Attendance[]>(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    course: courses[Math.floor(Math.random() * courses.length)],
    date: randomDate(),
    present: Math.random() > 0.3,
  }))
);

function randomDate() {
  const start = new Date();
  start.setDate(start.getDate() - 30);
  const d = new Date(start.getTime() + Math.random() * 30 * 86400000);
  return d.toISOString().split("T")[0];
}

const selectedCourse = ref("");
const selectedDate = ref("");

const filteredAttendance = computed(() =>
  attendance.value.filter((a) => {
    const courseMatch = selectedCourse.value
      ? a.course === selectedCourse.value
      : true;
    const dateMatch = selectedDate.value ? a.date === selectedDate.value : true;
    return courseMatch && dateMatch;
  })
);
</script>
