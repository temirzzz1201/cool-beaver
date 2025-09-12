<template>
  <div
    class="relative inline-flex items-center justify-center cursor-pointer group"
  >
    <button
      v-if="src"
      @click.stop="deleteAvatar"
      class="absolute top-[-6px] right-[-6px] text-2xl text-gray-900 rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
    >
      ×
    </button>

    <nuxt-img
      v-if="src"
      :src="src"
      :alt="alt"
      :width="sizePx"
      :height="sizePx"
      class="rounded-full object-cover border border-gray-200"
      :style="`max-height: ${sizePx}px; max-width: ${sizePx}px;`"
      @click="triggerFileInput"
    />

    <div
      v-else
      class="flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 text-white font-semibold"
      :style="{
        width: `${sizePx}px`,
        height: `${sizePx}px`,
        fontSize: `${sizePx / 2.5}px`,
      }"
      @click="triggerFileInput"
    >
      {{ initials }}
    </div>

    <input
      type="file"
      accept="image/*"
      ref="fileInput"
      class="hidden"
      @change="onFileChange"
    />
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

const props = defineProps<{
  src?: string | null;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  userId: number;
}>();

const { token, user } = useAuth();
const fileInput = ref<HTMLInputElement | null>(null);

const sizePx = computed(() => {
  switch (props.size) {
    case "sm":
      return 40;
    case "lg":
      return 96;
    default:
      return 64;
  }
});

const initials = computed(() => {
  if (!props.name) return "?";
  return props.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const triggerFileInput = () => {
  fileInput.value?.click();
};

const onFileChange = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (!target.files?.length) return;
  const file = target.files[0];

  if (!file) return;

  const formData = new FormData();
  formData.append("avatar", file);

  try {
    const response = await $fetch<{ avatar: string }>(
      `${mainUrl}/users/avatar/${props.userId}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        method: "POST",
        body: formData,
      }
    );

    if (user.value) {
      user.value.avatar = response.avatar
        ? `${response.avatar}?v=${Date.now()}`
        : null;
    }
  } catch (error) {
    console.error("Ошибка загрузки аватара", error);
  } finally {
    if (fileInput.value) fileInput.value.value = "";
  }
};

const deleteAvatar = async () => {
  try {
    const response = await $fetch<{ avatar: string | null }>(
      `${mainUrl}/users/avatar/${props.userId}`,
      {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
        method: "DELETE",
      }
    );

    if (user.value) {
      user.value.avatar = null;
    }
  } catch (error) {
    console.error("Ошибка удаления аватара", error);
  }
};
</script>
