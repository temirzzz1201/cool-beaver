<template>
  <div class="space-y-4">
    <u-table
      v-if="tableDataArray.length > 0"
      ref="table"
      v-model:sorting="sorting"
      v-model:pagination="pagination"
      :data="tableDataArray || []"
      :columns="columns"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel(),
      }"
      class="flex-1"
      :loading="isTableDataLoading"
      loading-color="primary"
      loading-animation="carousel"
    />

    <app-spinner v-else />

    <div class="flex justify-center border-t border-default pt-4">
      <u-pagination
        :default-page="
          (table?.tableApi?.getState().pagination.pageIndex || 0) + 1
        "
        :items-per-page="table?.tableApi?.getState().pagination.pageSize"
        :total="table?.tableApi?.getFilteredRowModel().rows.length"
        @update:page="(p: any) => table?.tableApi?.setPageIndex(p - 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPaginationRowModel } from "@tanstack/vue-table";
import { h, resolveComponent } from "vue";
import type { TableColumn } from "@nuxt/ui";
import type { Column } from "@tanstack/vue-table";
import { type Article } from "~/types";

const table = useTemplateRef("table");
const UButton = resolveComponent("UButton");
const UDropdownMenu = resolveComponent("UDropdownMenu");
const UInput = resolveComponent("UInput");
const UTextarea = resolveComponent("UTextarea");
const tableDataArray = ref<Article[]>([]);
const isTableDataLoading = ref(false);

const fetchArticles = async () => {
  try {
    isTableDataLoading.value = true;
    const response = await fetch(`${mainUrl}/articles`);
    const data = await response.json();
    tableDataArray.value = data;
  } catch (error) {
    throw new Error(`Ошибка получения статей: ${error}`);
  } finally {
    isTableDataLoading.value = false;
  }
};

onMounted(() => {
  fetchArticles();
});

const updateArticle = async (article: Article) => {
  try {
    const { id, createdAt, updatedAt, images, ...updateData } = article;
    await fetch(`${mainUrl}/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
  } catch (error) {
    console.error("Ошибка обновления:", error);
  }
};

const deleteArticle = async (id: number) => {
  try {
    const confirmed = confirm("Вы точно хотите удалить статью?");
    if (!confirmed) return;

    await fetch(`${mainUrl}/articles/${id}`, {
      method: "DELETE",
    });

    tableDataArray.value = tableDataArray.value.filter((a) => a.id !== id);
  } catch (error) {
    console.error("Ошибка удаления:", error);
  }
};

const columns: TableColumn<Article>[] = [
  {
    accessorKey: "id",
    header: "#id",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },

  {
    accessorKey: "title",
    header: ({ column }) => getHeader(column, "Заголовок Статьи"),
    cell: ({ row }) => {
      const article = row.original;
      return h(UInput, {
        modelValue: article.title,
        "onUpdate:modelValue": async (value: string) => {
          article.title = value;
          await updateArticle(article);
        },
      });
    },
  },
  {
    accessorKey: "content",
    header: ({ column }) => getHeader(column, "Контент"),
    cell: ({ row }) => {
      const article = row.original;
      return h(UTextarea, {
        modelValue: article.content,
        autoresize: true,
        "onUpdate:modelValue": async (value: string) => {
          article.content = value;
          await updateArticle(article);
        },
      });
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => getHeader(column, "Создано"),

    cell: ({ row }) => `${formatDate(row.getValue("createdAt"))}`,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => getHeader(column, "Обновлено"),

    cell: ({ row }) => `${formatDate(row.getValue("updatedAt"))}`,
  },
  {
    id: "actions",
    header: "Действия",
    cell: ({ row }) => {
      const article = row.original;
      return h(UButton, {
        icon: "i-lucide-trash-2",
        color: "red",
        variant: "ghost",
        title: "Удалить статью",
        onClick: () => deleteArticle(article.id),
      });
    },
  },
];

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
});

const sorting = ref([
  {
    id: "id",
    desc: false,
  },
]);

function getHeader(column: Column<Article>, label: string) {
  const isSorted = column.getIsSorted();

  return h(
    UDropdownMenu,
    {
      content: {
        align: "start",
      },
      "aria-label": "Actions dropdown",
      items: [
        {
          label: "Asc",
          type: "checkbox",
          icon: "i-lucide-arrow-up-narrow-wide",
          checked: isSorted === "asc",
          onSelect: () => {
            if (isSorted === "asc") {
              column.clearSorting();
            } else {
              column.toggleSorting(false);
            }
          },
        },
        {
          label: "Desc",
          icon: "i-lucide-arrow-down-wide-narrow",
          type: "checkbox",
          checked: isSorted === "desc",
          onSelect: () => {
            if (isSorted === "desc") {
              column.clearSorting();
            } else {
              column.toggleSorting(true);
            }
          },
        },
      ],
    },
    () =>
      h(UButton, {
        color: "neutral",
        variant: "ghost",
        label,
        icon: isSorted
          ? isSorted === "asc"
            ? "i-lucide-arrow-up-narrow-wide"
            : "i-lucide-arrow-down-wide-narrow"
          : "i-lucide-arrow-up-down",
        class: "-mx-2.5 data-[state=open]:bg-elevated",
        "aria-label": `Sort by ${
          isSorted === "asc" ? "descending" : "ascending"
        }`,
      })
  );
}
</script>
