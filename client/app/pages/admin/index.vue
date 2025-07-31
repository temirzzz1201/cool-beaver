<template>
  <div v-if="authorized">
    <h1>Admin Panel</h1>
    <p>Welcome, {{ user?.email }}</p>
    <button @click="logout">Logout</button>
  </div>

  <div v-else>
    <p>
      Access denied. Please <NuxtLink to="/login">login</NuxtLink> as admin.
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";

definePageMeta({
  middleware: "auth",
});

const { user, logout, isAdmin } = useAuth();

const authorized = computed(() => !!user.value && isAdmin());
</script>
