<template>
  <client-only>
    <div v-if="authorized">
      <h1>Admin Panel</h1>
      <p>Welcome, {{ user?.email }}</p>
      <u-button @click="logout">Logout</u-button>
    </div>

    <div v-else>
      <p>
        Access denied. Please <NuxtLink to="/login">login</NuxtLink> as admin.
      </p>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  middleware: "auth",
});

const { user, logout, isAdmin } = useAuth();

const authorized = computed(() => !!user.value && isAdmin());
</script>
