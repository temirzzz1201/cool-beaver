<template>
  <div class="flex items-center justify-center h-[70vh]">
    <form class="flex flex-col min-w-[320px]" @submit.prevent="onSubmit">
      <h1 class="text-3xl mb-8">Регистрация</h1>
      <input
        class="border-b-2 mb-4 border-e-amber-500"
        v-model="email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        class="border-b-2 mb-6 border-e-amber-500"
        v-model="password"
        type="password"
        placeholder="Password"
        required
      />
      <button
        class="flex justify-center items-center bg-blue-400 cursor-pointer text-white py-1 mb-2"
        type="submit"
      >
        Регистрация
      </button>
      <p class="flex text-orange-800" v-if="error">{{ error }}</p>
      <p>
        Уже есть аккаунт?
        <NuxtLink class="text-cyan-300 underline pl-2" to="/login"
          >Войти</NuxtLink
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuth } from "~/composables/useAuth";

const email = ref("");
const password = ref("");
const error = ref("");

const { register } = useAuth();

async function onSubmit() {
  error.value = "";
  try {
    await register(email.value, password.value);
  } catch (e: any) {
    error.value = e.message || "Registration error";
  }
}
</script>
