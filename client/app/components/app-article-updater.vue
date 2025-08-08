<template>
  <div class="w-full space-y-4 pb-4">
    <UTable
      ref="table"
      v-model:pagination="pagination"
      :data="tableDataArray"
      :columns="columns"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel(),
      }"
      class="flex-1"
    />

    <div class="flex justify-center border-t border-default pt-4">
      <UPagination
        :default-page="
          (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
        "
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPaginationRowModel } from "@tanstack/vue-table";
import type { TableColumn } from "@nuxt/ui";
import { type Article } from "~/types";

const table = useTemplateRef("table");

const tableDataArray = ref<Article[]>([]);

const fetchArticles = async () => {
  try {
    const response = await fetch(`${mainUrl}/api/articles`);
    const data = await response.json();
    tableDataArray.value = data;
    console.log("response ", data);
  } catch (error) {
    throw new Error(`Ошибка получения статей: ${error}`);
  }
};

onMounted(() => {
  fetchArticles();
});

const columns: TableColumn<Article>[] = [
  {
    accessorKey: "id",
    header: "#id",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },

  {
    accessorKey: "title",
    header: "Заголовок Статьи",
  },
  {
    accessorKey: "content",
    header: "Контент",
  },
  {
    accessorKey: "createdAt",
    header: "Создано",
    cell: ({ row }) => `${timeCreator(row.getValue("createdAt"))}`,
  },
  {
    accessorKey: "updatedAt",
    header: "Обновлено",
    cell: ({ row }) => `${timeCreator(row.getValue("updatedAt"))}`,
  },
];

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
});
</script>
