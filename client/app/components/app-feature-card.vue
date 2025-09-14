<template>
  <div
    class="p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:shadow-lg transition flex flex-col items-center text-center h-full"
  >
    <u-icon
      :name="icon"
      class="w-10 h-10 mb-4 text-indigo-600 dark:text-blue-400"
      :aria-hidden="true"
    />

    <h3 class="font-semibold text-lg mb-2 text-gray-800 dark:text-white">
      {{ title }}
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-300 md:max-w-[450px]">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  text: string;
}>();
</script>
