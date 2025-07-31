<template>
  <nuxt-link
    v-for="article in props?.articles"
    :key="article.id"
    :to="`/articles/${article.id}`"
  >
    <article
      class="flex flex-col mr-1.5 border rounded-sm border-cyan-50 radius bg-blue-50 shadow p-3 text-black dark:bg-gray-900 dark:text-white"
    >
      <UCard>
        <template #header>
          <!-- <Placeholder class="h-4" /> -->
          <h2 class="text-2xl">
            {{ article.title }}
          </h2>
        </template>

        <!-- <Placeholder class="h-32" /> -->
        <p>{{ article.content }}</p>

        <template #footer>
          <!-- <Placeholder class="h-8" /> -->
          <small v-if="article?.createdAt">{{
            timeCreator(article.createdAt)
          }}</small>
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
