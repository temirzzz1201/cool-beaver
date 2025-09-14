<template>
  <client-only>
    <section v-if="authorized" class="mt-30 max-[768px]:mt-20">
      <div class="flex items-center gap-4 mt-26 mb-10">
        <app-avatar
          :src="user?.avatar ? `${imageUrl}${user.avatar}` : null"
          :name="user?.name"
          :user-id="user?.id"
          size="md"
        />

        <span class="font-medium text-gray-800 dark:text-white">
          Привет {{ user?.name || "" }} :)</span
        >
        <u-button
          class="ml-6 h-[36px] cursor-pointer"
          @click="logout"
          aria-label="Выйти"
          >Выйти</u-button
        >
      </div>
      <u-separator />
    </section>

    <section v-else>
      <p>
        Доступ запрещен, войдите <NuxtLink to="/login">login</NuxtLink> как
        админ.
      </p>
    </section>
    <section>
      <app-tabs class="mt-8" />
    </section>
  </client-only>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

definePageMeta({ middleware: ["auth-admin"] });

const { user, logout, isAdmin } = useAuth();

const authorized = computed(() => !!user.value && isAdmin());
</script>
