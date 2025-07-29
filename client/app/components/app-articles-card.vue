<template>
  <article
    class="flex mr-1.5 border rounded-sm border-cyan-50 radius bg-blue-50 shadow p-3"
    v-for="article in props?.articles"
    :key="article.id"
  >
    <h2>
      <nuxt-link :to="`/articles/${article.id}`">
        {{ article.title }}
      </nuxt-link>
    </h2>
  </article>
</template>

<script setup lang="ts">
interface Article {
  id: number;
  title: string;
  content: string;
}

const props = defineProps<{
  articles: Article[];
}>();
</script>
