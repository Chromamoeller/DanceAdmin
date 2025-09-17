<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Teilnehmer</h1>

    <!-- Suchfeld -->
    <div class="mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Teilnehmer suchen…"
        class="w-full max-w-md rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      />
    </div>

    <!-- Tabelle -->
    <div class="overflow-x-auto bg-white shadow rounded-xl">
      <table class="min-w-full text-left">
        <thead class="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            <th class="px-4 py-3">ID</th>
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Email</th>
            <th class="px-4 py-3">Kurs</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="p in filteredParticipants"
            :key="p.id"
            class="border-b last:border-none hover:bg-gray-50"
          >
            <td class="px-4 py-2">{{ p.id }}</td>
            <td class="px-4 py-2">{{ p.name }}</td>
            <td class="px-4 py-2">{{ p.email }}</td>
            <td class="px-4 py-2">{{ p.course }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Participant {
  id: number;
  name: string;
  email: string;
  course: string;
}

const search = ref("");
const courses = ["Salsa", "Standard", "HipHop", "Bachata"];

// 50 fiktive Namen
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
  "Laura Hartmann",
  "Max Becker",
  "Sarah Klein",
  "Leon Schuster",
  "Nina Dietrich",
  "Tom Faber",
  "Jana Lorenz",
  "Philipp Seidel",
  "Isabel Otto",
  "Erik Maier",
  "Sophie Krüger",
  "David Busch",
  "Mira Stein",
  "Felix Brandt",
  "Anna Köhler",
  "Moritz Frank",
  "Julia Peters",
  "Kevin Haas",
  "Franziska Berger",
  "Simon Adler",
  "Klara Wendt",
  "Niklas Sauer",
  "Lisa Hahn",
  "Marc Voigt",
  "Selina Graf",
  "Patrick Kranz",
  "Amelie Kern",
  "Julian Wolff",
  "Vanessa Blum",
  "Fabian Herzog",
  "Lea Günther",
  "Tim Seifert",
  "Miriam Horn",
  "Dominik Paulus",
  "Carla Vogt",
  "Sebastian Marx",
  "Helena Förster",
  "Daniel Scholze",
  "Nora Kuhn",
  "Lukas Reuter",
];

// Hilfsfunktion: Umlaute & Leerzeichen für Mailadresse anpassen
function toEmailFormat(name: string): string {
  const map: Record<string, string> = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    Ä: "ae",
    Ö: "oe",
    Ü: "ue",
    ß: "ss",
  };
  return name
    .replace(/\s+/g, " ") // Mehrfach-Leerzeichen
    .trim()
    .split(" ")
    .map((part) => part.replace(/[äöüÄÖÜß]/g, (c) => map[c] || c).toLowerCase())
    .join(".");
}

const participants = ref<Participant[]>(
  names.map((name, i) => ({
    id: i + 1,
    name,
    email: `${toEmailFormat(name)}@example.com`,
    course: courses[Math.floor(Math.random() * courses.length)],
  }))
);

const filteredParticipants = computed(() =>
  participants.value.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>
