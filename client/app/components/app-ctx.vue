<template>
  <h2 class="text-2xl font-semibold mb-4"><slot name="title"></slot></h2>
  <p class="mb-6 text-gray-600 dark:text-gray-300">
    <slot name="text"></slot>
  </p>
  <NuxtLink
    to="/contacts"
    class="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    Связаться
  </NuxtLink>
</template>
