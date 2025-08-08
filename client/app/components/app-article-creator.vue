<template>
  <UForm
    :schema="schema"
    :state="state"
    class="space-y-4 w-full"
    @submit="onSubmit"
  >
    <UFormField label="Заголовок" name="title">
      <UInput placeholder="Заголовок..." v-model="state.title" class="w-full" />
    </UFormField>

    <UFormField label="Контент" name="content">
      <UTextarea
        placeholder="Текст статьи..."
        autoresize
        v-model="state.content"
        type="content"
        :rows="12"
        class="w-full"
      />
    </UFormField>

    <UButton type="submit"> Создать </UButton>
  </UForm>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";

const schema = v.object({
  title: v.pipe(v.string(), v.title("Неправильный заголовок")),
  content: v.pipe(v.string(), v.minLength(8, "Минимум 8 символов")),
});

type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  title: "",
  content: "",
});

const toast = useToast();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await fetch(`${mainUrl}/api/articles/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: event.data.title,
        content: event.data.content,
      }),
    });
    toast.add({
      title: "Success",
      description: "Статья быда успешно создана",
      color: "success",
    });
  } catch (error) {
    toast.add({
      title: "Success",
      description: "Ошибка создания статьи",
      color: "success",
    });
    throw new Error(`Ошибка создания статьи: ${error}`);
  }
}
</script>
