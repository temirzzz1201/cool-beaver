<template>
  <client-only>
    <div class="flex items-center gap-4 mt-26">
      <app-avatar
        :src="user?.avatar ? `${imageUrl}${user.avatar}` : null"
        :name="user?.name"
        :user-id="user?.id"
        size="md"
      />

      <span class="font-medium text-gray-800 dark:text-white">
        Привет {{ user?.name || "" }} :)</span
      >
    </div>
    <section class="max-w-4xl mx-auto py-10">
      <u-tabs :items="profileTabsItems" class="w-full">
        <template #profile>
          <div class="space-y-4">
            <p class="text-gray-600 font-bold">Имя: {{ user?.name }}</p>
            <p class="text-gray-600 font-bold">Email: {{ user?.email }}</p>
            <p class="text-gray-600 font-bold">
              Дата регистрации: {{ formatDate(user?.creationDate) }}
            </p>
            <u-button @click="logout" color="error">Выйти</u-button>
          </div>
        </template>

        <template #orders>
          <p
            class="text-lg md:text-2xl mb-12 mt-4 max-w-[540px] text-gray-600 font-bold"
          >
            История ваших заказов
          </p>
          <div v-if="orders?.length" class="space-y-4">
            <u-card
              v-for="order in paginatedOrders"
              :key="order.id"
              class="p-4"
            >
              <h3 class="font-semibold text-lg">{{ order.title }}</h3>
              <p class="text-gray-600">{{ order.description }}</p>
              <p class="text-sm text-gray-500 font-bold">
                Статус: {{ order.status }} —
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
          <div class="flex flex-col items-center">
            <p
              class="text-lg md:text-2xl mb-12 mt-4 max-w-[540px] text-gray-600 font-bold text-center"
            >
              Здесь вы&nbsp;можете офрмить свой заказ и&nbsp;мы&nbsp;обязательно
              свяжимся с&nbsp;вами!
            </p>
            <app-form
              :schema="schema"
              :state="state"
              @submit="createOrder"
              class="mb-8"
              button-title="создать заказ"
            >
              <u-form-field label="Название заказа" name="title">
                <u-input v-model="state.title" class="min-w-[320px]" />
              </u-form-field>

              <u-form-field label="Номер для связи" name="phone">
                <input
                  v-model="state.phone"
                  placeholder="+7 (___) ___-__-__"
                  class="min-w-[320px] bg-white h-[32px] px-1.5 rounded"
                  type="tel"
                  v-inputmask="{ mask: '+7 (999) 999-99-99' }"
                />
              </u-form-field>
              <u-form-field label="Описание" name="description">
                <u-textarea v-model="state.description" class="min-w-[320px]" />
              </u-form-field>
            </app-form>
          </div>
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

console.log("user ", user.value);

const page = ref(1);
const limit = 5;
const paginatedOrders = computed(() =>
  orders.value.slice((page.value - 1) * limit, page.value * limit)
);

const schema = v.object({
  title: v.string("Введите заголовок"),
  phone: v.pipe(
    v.string(),
    v.regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона"
    )
  ),
  description: v.pipe(
    v.string(),
    v.minLength(8, "Описание должно быть минимум 8 символов")
  ),
});

const state = reactive({
  title: "",
  phone: "",
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

  Object.assign(state, { title: "", phone: "", description: "" });
  await fetchOrders();
};

onMounted(fetchOrders);
</script>
