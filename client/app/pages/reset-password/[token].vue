<template>
  <div class="flex flex-col items-center justify-center h-[70vh]">
    <h1 class="text-2xl mb-8">Сброс пароля</h1>
    <app-form
      :schema="schema"
      :state="state"
      @submit="handleSubmit"
      class="space-y-4"
    >
      <u-form-field label="Новый пароль" name="password">
        <u-input
          v-model="state.password"
          type="password"
          class="min-w-[320px]"
        />
      </u-form-field>

      <u-form-field label="Подтвердите новый пароль" name="confirmPassword">
        <u-input
          v-model="state.confirmPassword"
          type="password"
          class="min-w-[320px]"
        />
      </u-form-field>
    </app-form>
  </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import { useToast } from "#imports";
import { useAuth } from "~/composables/useAuth";

const state = ref({
  password: "",
  confirmPassword: "",
});

const schema = v.object({
  password: v.pipe(v.string(), v.minLength(8, "Минимум 8 символов")),
});

const { resetPassword } = useAuth();
const toast = useToast();
const route = useRoute();
const router = useRouter();

const resetToken = route.params.token as string;

async function handleSubmit() {
  if (state.value.password !== state.value.confirmPassword) {
    toast.add({
      title: "Ошибка",
      description: "Пароли не совпадают",
      color: "error",
    });
    return;
  }

  try {
    const response = await resetPassword(resetToken, state.value.password);
    console.log("response ", response);

    toast.add({
      title: "Успех",
      description: "Пароль успешно изменен",
      color: "success",
    });
    router.push("/login");
  } catch (error) {
    toast.add({
      title: "Ошибка",
      description: "Не удалось сбросить пароль",
      color: "error",
    });
    throw new Error(`Reset password error: ${error}`);
  }
}
</script>
