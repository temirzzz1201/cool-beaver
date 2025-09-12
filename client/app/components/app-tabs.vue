<template>
  <u-tabs variant="pill" :items="adminTabsItems" class="w-full text-white">
    <template #content="{ item }">
      <section class="p-4 pt-16">
        <app-chart v-if="item.label === TabLabel.Chart" />
        <div v-else-if="item.label === TabLabel.Create">
          <app-article-creator />
        </div>
        <div v-else-if="item.label === TabLabel.Update">
          <app-article-table />
        </div>
        <div v-else-if="item.label === TabLabel.Users">
          <app-users-table />
        </div>
        <div v-else-if="item.label === TabLabel.Orders">
          <app-orders-table />
        </div>
      </section>
    </template>
  </u-tabs>
</template>

<script setup lang="ts">
import { TabLabel } from "~/types";
import { useMainStore } from "#imports";
import { storeToRefs } from "#imports";
const store = useMainStore();

const { adminTabsItems } = storeToRefs(store);
</script>
