<template>
  <u-form
    :schema="schema"
    :state="state"
    class="space-y-4 w-full"
    @submit="onSubmit"
  >
    <u-form-field label="Заголовок" name="title">
      <u-input
        placeholder="Заголовок..."
        v-model="state.title"
        class="w-full"
      />
    </u-form-field>

    <u-form-field label="Контент" name="content">
      <u-textarea
        placeholder="Текст статьи..."
        autoresize
        v-model="state.content"
        :rows="12"
        class="w-full"
      />
    </u-form-field>

    <u-form-field label="Изображения" name="images">
      <input type="file" multiple @change="handleFiles" />
    </u-form-field>

    <u-button type="submit">Создать</u-button>
  </u-form>
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
  files: [] as File[],
});

const toast = useToast();

function handleFiles(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    state.files = Array.from(target.files);
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    const formData = new FormData();
    formData.append("title", event.data.title);
    formData.append("content", event.data.content);

    if (state.files.length > 0) {
      state.files.forEach((file) => formData.append("images", file));
    }

    const res = await fetch(`${mainUrl}/api/articles/create`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Ошибка на сервере при создании статьи");
    }

    toast.add({
      title: "Успех",
      description: "Статья успешно создана",
      color: "success",
    });

    state.title = "";
    state.content = "";
    state.files = [];
  } catch (error) {
    console.error(error);
    toast.add({
      title: "Ошибка",
      description: "Не удалось создать статью",
      color: "error",
    });
  }
}
</script>
