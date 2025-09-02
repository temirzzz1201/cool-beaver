<template>
  <app-spinner v-if="isLoading" />
  <Bar
    v-if="chartData.labels.length"
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script setup lang="ts">
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { type Users } from "~/types";
import { getRussianMonthName } from "#imports";
import type { Ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const isLoading = ref(true);
const usersData = ref<Users[]>([]);

const chartData: Ref<{
  labels: string[];
  datasets: [
    {
      label: string;
      backgroundColor: string;
      data: number[];
    }
  ];
}> = ref({
  labels: [],
  datasets: [
    {
      label: "Количество зарегестрированых пользователей",
      backgroundColor: "#42A5F5",
      data: [],
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Пользователи по месяцам",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

const getChartData = async () => {
  try {
    isLoading.value = true;
    const res = await fetch(`${mainUrl}/users/all`);
    const data: Users[] = await res.json();
    usersData.value = data;

    const monthMap = new Map<string, number>();

    data.forEach((user) => {
      const month = getRussianMonthName(user.creationDate);
      monthMap.set(month, (monthMap.get(month) || 0) + 1);
    });

    chartData.value.labels = Array.from(monthMap.keys());
    chartData.value.datasets[0].data = Array.from(monthMap.values());
  } catch (error) {
    throw new Error(`Ошибка при получении данных пользователей: ${error}`);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getChartData();
});
</script>

<style scoped>
#my-chart-id {
  max-height: 400px;
}
</style>
