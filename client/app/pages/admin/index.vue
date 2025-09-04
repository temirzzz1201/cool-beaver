<template>
  <client-only>
    <section v-if="authorized" class="mt-30 max-[768px]:mt-20">
      <div class="flex mb-10">
        <div>
          <h1 class="text-2xl mb-2">Панель администратора</h1>
          <p class="mb-4">
            Привет,
            <span
              :class="{ 'text-orange-600': user.role === 'admin' }"
              class="text-3xl text-emerald-500"
              >{{ user?.name }}</span
            >
          </p>
        </div>
        <u-button class="ml-6 h-[36px] cursor-pointer" @click="logout"
          >Выйти</u-button
        >
      </div>
      <u-separator class="mb-10" />
    </section>

    <section v-else>
      <p>
        Доступ запрещен, войдите <NuxtLink to="/login">login</NuxtLink> как
        админ.
      </p>
    </section>
    <section>
      <app-tabs />
    </section>
  </client-only>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

definePageMeta({ middleware: ["auth-admin"] });

const { user, logout, isAdmin } = useAuth();

const authorized = computed(() => !!user.value && isAdmin());
</script>
