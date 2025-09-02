<template>
  <client-only>
    <section class="max-w-4xl mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Личный кабинет</h1>

      <UTabs :items="items" class="w-full">
        <!-- Профиль -->
        <template #profile>
          <div class="space-y-4">
            <p><b>Имя:</b> {{ user?.name }}</p>
            <p><b>Email:</b> {{ user?.email }}</p>
            <p><b>Дата регистрации:</b> {{ formatDate(user?.creationDate) }}</p>
            <u-button @click="logout" color="error">Выйти</u-button>
          </div>
        </template>

        <!-- Мои заказы -->
        <template #orders>
          <div v-if="orders?.length" class="space-y-4">
            <u-card v-for="order in orders" :key="order.id" class="p-4">
              <h3 class="font-semibold text-lg">{{ order.title }}</h3>
              <p class="text-gray-600">{{ order.description }}</p>
              <p class="text-sm text-gray-500">
                Статус: <b>{{ order.status }}</b> —
                {{ formatDate(order.createdAt) }}
              </p>
            </u-card>
          </div>
          <p v-else class="text-gray-500">Пока заказов нет.</p>
        </template>

        <!-- Создать заказ -->
        <template #create>
          <app-form
            :schema="schema"
            :state="state"
            @submit="createOrder"
            class="mb-4"
          >
            <u-form-field label="Название заказа" name="title">
              <u-input v-model="state.title" class="min-w-[320px]" />
            </u-form-field>

            <u-form-field label="Описание" name="description">
              <u-textarea v-model="state.description" class="min-w-[320px]" />
            </u-form-field>

            <u-button type="submit" color="primary">Создать заказ</u-button>
          </app-form>
        </template>
      </UTabs>
    </section>
  </client-only>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import * as v from "valibot";
import { useAuth } from "~/composables/useAuth";
import { formatDate } from "#imports";

definePageMeta({ middleware: ["auth-user"] });

const { user, logout } = useAuth();
const orders = ref<any[]>([]);

const schema = v.object({
  title: v.string("Введите заголовок"),
  description: v.pipe(
    v.string(),
    v.minLength(8, "Описание должно быть минимум 8 символов")
  ),
});
type Schema = v.InferOutput<typeof schema>;

const state = reactive({
  title: "",
  description: "",
});

// const fetchOrders = async () => {
//   orders.value = await $fetch(`${mainUrl}/api/orders/my`, {
//     method: "GET",
//   });
// };

const createOrder = async () => {
  if (!state.title) return;

  // await $fetch(`${mainUrl}/api/orders`, {
  //   method: "POST",
  //   body: { ...state },
  // });

  // state.title = "";
  // state.description = "";
  // await fetchOrders();
};

// onMounted(fetchOrders);

const items: TabsItem[] = [
  { label: "Профиль", icon: "i-lucide-user", slot: "profile" },
  { label: "Мои заказы", icon: "i-lucide-list", slot: "orders" },
  { label: "Создать заказ", icon: "i-lucide-plus-circle", slot: "create" },
];
</script>
