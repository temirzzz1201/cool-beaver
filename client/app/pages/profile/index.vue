<template>
  <client-only>
    <div>
      <h1>Профиль пользователя</h1>
      <p>Email: {{ user?.email }}</p>
      <u-button @click="logout">Logout</u-button>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  middleware: "auth-user",
});

const { user, logout } = useAuth();
</script>
