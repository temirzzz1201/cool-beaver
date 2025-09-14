<template>
  <nuxt-link
    v-for="article in articles"
    :key="article.id"
    :to="`/articles/${article.id}`"
    class="group block"
  >
    <div
      class="flex flex-col h-full rounded-xl shadow overflow-hidden transition hover:shadow-lg bg-white dark:bg-gray-800"
    >
      <div v-if="article.images?.length" class="relative">
        <nuxt-img
          :src="`${imageUrl}${
            article.images[getActiveIndex(article.id)]?.path
          }`"
          :alt="`Изображение статьи ${article.id}`"
          class="w-full object-cover aspect-video"
          loading="lazy"
        />
        <div class="flex space-x-2 p-2 overflow-x-auto">
          <div
            v-for="(img, index) in article.images"
            :key="index"
            class="flex-none w-16 h-16 rounded-md overflow-hidden border cursor-pointer transition"
            :class="
              getActiveIndex(article.id) === index
                ? 'border-blue-500'
                : 'border-gray-200 hover:border-blue-400'
            "
            @click.prevent="setActiveIndex(article.id, index)"
          >
            <nuxt-img
              :src="`${imageUrl}${img.path}`"
              :alt="`thumbnail ${article.id}`"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <u-badge
          class="absolute bottom-2 right-2 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-full"
        >
          {{ article.images.length }} фото
        </u-badge>
      </div>

      <div class="p-4 flex flex-col flex-1">
        <h2
          class="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2"
        >
          {{ article.title }}
        </h2>
        <p
          class="flex-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-2"
        >
          {{ getShortContent(article.content) }}
        </p>
        <u-separator class="my-2" />
        <small
          v-if="article.createdAt"
          class="text-xs text-gray-500 dark:text-gray-400"
        >
          {{ formatDate(article.createdAt) }}
        </small>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { type Article } from "~/types";
import { formatDate } from "#imports";

const activeIndexes = ref<Record<number, number>>({});
const getActiveIndex = (id: number) => activeIndexes.value[id] ?? 0;
const setActiveIndex = (id: number, index: number) => {
  activeIndexes.value[id] = index;
};

const getShortContent = (content?: string) => {
  if (!content) return "";
  return content.replace(/\s+/g, " ").trim().slice(0, 200);
};

defineProps<{
  articles: (Article & { images?: { path: string }[] })[];
  isDetail?: boolean;
}>();
</script>
