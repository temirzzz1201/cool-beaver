<template>
  <nuxt-link
    v-for="article in props.articles"
    :key="article.id"
    :to="`/articles/${article.id}`"
    class="h-full group"
    v-if="props.articles?.length > 0"
  >
    <u-card
      class="flex flex-col h-full rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg relative"
    >
      <h2
        class="text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 mb-3"
      >
        {{ article.title }}
      </h2>

      <div v-if="article.images?.length" class="mb-2 relative">
        <img
          :src="`${mainUrl}${article?.images[0]?.path}`"
          alt="article image"
          class="w-full h-48 object-cover rounded-lg mb-2"
        />

        <div class="flex space-x-2 overflow-x-auto">
          <div
            v-for="(img, index) in article.images.slice(1)"
            :key="index"
            class="flex-none w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-400 transition"
          >
            <img
              :src="`${mainUrl}${img.path}`"
              alt="thumbnail"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <u-badge
          class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full transition-colors duration-200 group-hover:bg-black/50 group-hover:text-yellow-300"
          >{{ article.images.length }} фото</u-badge
        >
      </div>

      <p class="flex-1 text-gray-600 dark:text-gray-400 line-clamp-3 mb-3">
        {{ article.content }}
      </p>

      <template #footer>
        <small
          v-if="article.createdAt"
          class="text-gray-500 dark:text-gray-400"
        >
          {{ formatDate(article.createdAt) }}
        </small>
      </template>
    </u-card>
  </nuxt-link>
  <h2 class="text-2xl text-red-500" v-else>Пока статей нет... (:</h2>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { formatDate } from "#imports";

const props = defineProps<{
  articles: (Article & { images?: { path: string }[] })[];
}>();
</script>
