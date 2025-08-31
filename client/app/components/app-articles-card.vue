<template>
  <nuxt-link
    v-for="article in props.articles"
    :key="article.id"
    :to="`/articles/${article.id}`"
    class="h-full group block"
    v-if="props.articles?.length > 0"
  >
    <u-card
      class="flex flex-col h-full rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg relative"
      :class="props.isDetail ? 'max-w-full' : 'max-w-[450px]'"
    >
      <h2
        class="text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2 mb-3"
      >
        {{ article.title }}
      </h2>

      <!-- Фото -->
      <div v-if="article.images?.length" class="mb-2 relative">
        <!-- Основное фото -->
        <nuxt-img
          :src="`${mainUrl}${article.images[getActiveIndex(article.id)]?.path}`"
          alt="article image"
          class="w-full rounded-lg mb-2 object-cover aspect-[16/9]"
          loading="lazy"
          width="800"
          height="500"
        />

        <!-- Миниатюры -->
        <div class="flex space-x-2 overflow-x-auto">
          <div
            v-for="(img, index) in article.images"
            :key="index"
            class="flex-none w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-lg overflow-hidden border-2 cursor-pointer transition"
            :class="
              getActiveIndex(article.id) === index
                ? 'border-blue-500'
                : 'border-transparent hover:border-blue-400'
            "
            @click.prevent="setActiveIndex(article.id, index)"
          >
            <nuxt-img
              :src="`${mainUrl}${img.path}`"
              alt="thumbnail"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Бейдж количества -->
        <u-badge
          class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full transition-colors duration-200 group-hover:bg-black/50 group-hover:text-yellow-300"
        >
          {{ article.images.length }} фото
        </u-badge>
      </div>

      <!-- Контент -->
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

/**
 * Храним выбранный индекс для каждой статьи
 * { [articleId]: number }
 */
const activeIndexes = ref<Record<number, number>>({});

const getActiveIndex = (id: number) => activeIndexes.value[id] ?? 0;
const setActiveIndex = (id: number, index: number) => {
  activeIndexes.value[id] = index;
};

const props = defineProps<{
  articles: (Article & { images?: { path: string }[] })[];
  isDetail?: boolean;
}>();
</script>
