<template>
  <u-form
    :schema="schema"
    :state="state"
    class="space-y-4 flex flex-col"
    @submit.prevent="(e) => emit('submit', e)"
  >
    <slot></slot>
    <u-button
      color="secondary"
      type="submit"
      class="cursor-pointer px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold shadow hover:bg-indigo-700 hover:text-white dark:bg-gray-200 dark:text-gray-800 transition self-start"
      :aria-label="buttonTitle || 'Отправить'"
    >
      {{ buttonTitle || "Отправить" }}
    </u-button>
  </u-form>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "submit", payload: any): void;
}>();

defineProps<{
  schema: any;
  state: Record<string, any>;
  buttonTitle: string;
}>();
</script>
