<template>
  <u-form
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit.prevent="(e) => emit('submit', e)"
  >
    <slot></slot>
    <u-button color="secondary" type="submit" class="cursor-pointer">
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
