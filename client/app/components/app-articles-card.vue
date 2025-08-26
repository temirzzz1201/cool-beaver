<template>
  <nuxt-link
    v-for="article in props?.articles"
    :key="article.id"
    :to="`/articles/${article.id}`"
    class="h-full"
  >
    <article
      class="flex flex-col h-full rounded-lg bg-blue-50 shadow p-3 text-black dark:bg-gray-900 dark:text-white"
    >
      <UCard class="flex flex-col h-full">
        <h2 class="text-xl font-semibold line-clamp-2">
          {{ article.title }}
        </h2>

        <p class="flex-1 line-clamp-3">
          {{ article.content }}
        </p>

        <template #footer>
          <small
            v-if="article?.createdAt"
            class="text-gray-500 dark:text-gray-400"
          >
            {{ formatDate(article.createdAt) }}
          </small>
        </template>
      </UCard>
    </article>
  </nuxt-link>
</template>

<script setup lang="ts">
import { type Article } from "~/types";

const props = defineProps<{
  articles: Article[];
}>();
</script>
