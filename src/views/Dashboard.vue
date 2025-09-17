<template>
  <div class="p-8 bg-gray-50 min-h-screen space-y-12">
    <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>

    <section>
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        Teilnehmer pro Kurs
      </h2>
      <div class="h-104 bg-white p-4 rounded-xl shadow">
        <BarChart :chart-data="barData" :chart-options="barOptions" />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        Anwesenheit gesamt
      </h2>
      <div class="h-80 w-80 bg-white p-4 rounded-xl shadow">
        <DoughnutChart
          :chart-data="doughnutData"
          :chart-options="doughnutOptions"
        />
      </div>
    </section>

    <section>
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        Neue Anmeldungen pro Monat
      </h2>
      <div class="h-80 bg-white p-4 rounded-xl shadow">
        <LineChart :chart-data="lineData" :chart-options="lineOptions" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  PointElement,
  LineElement,
  LineController,
} from "chart.js";
import { BarChart, DoughnutChart, LineChart } from "vue-chart-3";
import { ref } from "vue";

// alle benötigten Controller & Elemente registrieren
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  ArcElement,
  DoughnutController,
  PointElement,
  LineElement,
  LineController
);

function randomSixNumbers(): number[] {
  return Array.from({ length: 6 }, () => Math.floor(Math.random() * 30) + 1);
}

const barData = ref({
  labels: ["Salsa", "Standard", "HipHop", "Bachata", "Kizomba", "Zumba"],
  datasets: [
    {
      label: "Teilnehmer",
      data: randomSixNumbers(),
      backgroundColor: [
        "#f87171",
        "#60a5fa",
        "#34d399",
        "#fbbf24",
        "#a78bfa",
        "#fb7185",
      ],
      borderRadius: 8,
    },
  ],
});
const barOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true } },
});

const doughnutData = ref({
  labels: ["Anwesend", "Abwesend"],
  datasets: [{ data: [135, 25], backgroundColor: ["#34d399", "#f87171"] }],
});
const doughnutOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: { legend: { position: "bottom" } },
});

const lineData = ref({
  labels: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
  ],
  datasets: [
    {
      label: "Neue Anmeldungen",
      data: [10, 15, 8, 20, 18, 22, 30, 25, 28, 35],
      borderColor: "#3b82f6",
      backgroundColor: "#93c5fd",
      tension: 0.3,
      fill: true,
      pointBackgroundColor: "#1d4ed8",
    },
  ],
});
const lineOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true } },
});
</script>
