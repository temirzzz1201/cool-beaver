<template>
  <client-only>
    <section class="max-w-4xl mx-auto py-10">
      <h1 class="text-3xl font-bold mb-6">Личный кабинет</h1>

      <u-tabs :items="profileTabsItems" class="w-full">
        <template #profile>
          <div class="space-y-4">
            <p><b>Имя:</b> {{ user?.name }}</p>
            <p><b>Email:</b> {{ user?.email }}</p>
            <p><b>Дата регистрации:</b> {{ formatDate(user?.creationDate) }}</p>
            <u-button @click="logout" color="error">Выйти</u-button>
          </div>
        </template>

        <template #orders>
          <div v-if="orders?.length" class="space-y-4">
            <u-card
              v-for="order in paginatedOrders"
              :key="order.id"
              class="p-4"
            >
              <h3 class="font-semibold text-lg">{{ order.title }}</h3>
              <p class="text-gray-600">{{ order.description }}</p>
              <p class="text-sm text-gray-500">
                Статус: <b>{{ order.status }}</b> —
                {{ formatDate(order.createdAt) }}
              </p>
            </u-card>

            <div v-if="orders.length > limit" class="flex justify-center mt-4">
              <u-pagination
                v-model:page="page"
                :items-per-page="limit"
                :total="orders.length"
                show-edges
                color="secondary"
                active-color="secondary"
              />
            </div>
          </div>
          <p v-else class="text-gray-500">Пока заказов нет.</p>
        </template>

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
          </app-form>
        </template>
      </u-tabs>
    </section>
  </client-only>
</template>

<script setup lang="ts">
import * as v from "valibot";
import { useAuth } from "~/composables/useAuth";
import { formatDate } from "#imports";
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";

definePageMeta({ middleware: ["auth-user"] });

const store = useMainStore();

const { profileTabsItems } = storeToRefs(store);

const { $api } = useNuxtApp();

const { user, logout } = useAuth();
const orders = ref<any[]>([]);

const page = ref(1);
const limit = 5;
const paginatedOrders = computed(() =>
  orders.value.slice((page.value - 1) * limit, page.value * limit)
);

const schema = v.object({
  title: v.string("Введите заголовок"),
  description: v.pipe(
    v.string(),
    v.minLength(8, "Описание должно быть минимум 8 символов")
  ),
});

const state = reactive({
  title: "",
  description: "",
});

const fetchOrders = async () => {
  orders.value = await $api("/orders/my-orders");
};

const createOrder = async () => {
  if (!state.title) return;

  await $api("/orders/create", {
    method: "POST",
    body: { ...state },
  });

  state.title = "";
  state.description = "";
  await fetchOrders();
};

onMounted(fetchOrders);
</script>
