<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  text: string;
}>();
</script>

<template>
  <div
    class="p-6 rounded-xl bg-blue-50 dark:bg-gray-900 shadow flex flex-col items-center text-center h-full"
  >
    <UIcon :name="icon" class="w-8 h-8 mb-3 text-blue-600" />
    <p class="font-medium text-lg mb-1">{{ title }}</p>
    <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
      {{ text }}
    </p>
  </div>
</template>
