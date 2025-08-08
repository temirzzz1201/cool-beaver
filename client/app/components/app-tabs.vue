<script setup lang="ts">
const items = [
  {
    label: "График",
    icon: "i-lucide-bar-chart",
  },
  {
    label: "Создать статью",
    icon: "i-lucide-file-text",
  },
  {
    label: "Обновить статью",
    icon: "i-lucide-file-text",
  },
];
</script>

<template>
  <UTabs
    orientation="vertical"
    variant="link"
    :items="items"
    class="w-full h-[400px] text-white"
  >
    <template #content="{ item }">
      <section class="p-4">
        <app-chart v-if="item.label === 'График'" />
        <div v-else-if="item.label === 'Создать статью'">
          <app-article-creator />
        </div>
        <div v-else-if="item.label === 'Обновить статью'">
          <app-article-updater />
        </div>
      </section>
    </template>
  </UTabs>
</template>
