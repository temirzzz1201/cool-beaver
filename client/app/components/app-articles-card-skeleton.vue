<template>
  <div
    v-for="n in count"
    :key="n"
    class="flex flex-col rounded-2xl shadow-md overflow-hidden bg-white dark:bg-gray-800 p-4"
  >
    <USkeleton class="h-6 w-3/4 mb-3" />

    <USkeleton class="aspect-[16/9] w-full rounded-lg mb-3" />

    <USkeleton class="h-4 w-full mb-2" />
    <USkeleton class="h-4 w-5/6 mb-2" />
    <USkeleton class="h-4 w-2/3" />

    <div class="mt-auto pt-3">
      <USkeleton class="h-3 w-1/3" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ count?: number }>();
const count = props.count ?? 6;
</script>
