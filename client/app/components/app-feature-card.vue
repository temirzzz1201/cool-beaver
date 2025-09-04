<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  text: string;
}>();
</script>

<template>
  <div
    class="p-6 rounded-xl bg-blue-100 dark:bg-gray-400 shadow flex flex-col items-center text-center h-full"
  >
    <u-icon
      :name="icon"
      class="w-8 h-8 mb-4 text-blue-600 dark:text-blue-200"
    />
    <p class="font-medium mb-2 text-lg text-gray-700 dark:text-white">
      {{ title }}
    </p>
    <p class="text-sm text-gray-600 dark:text-gray-200 line-clamp-3">
      {{ text }}
    </p>
  </div>
</template>
