<template>
  <div class="space-y-4 mt-60">
    <u-table
      v-if="tableDataArray.length > 0"
      ref="table"
      v-model:sorting="sorting"
      v-model:pagination="pagination"
      :data="tableDataArray || []"
      :columns="columns"
      :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }"
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
import type { Users } from "~/types";

const table = useTemplateRef("table");
const UButton = resolveComponent("UButton");
const UDropdownMenu = resolveComponent("UDropdownMenu");
const UInput = resolveComponent("UInput");
const tableDataArray = ref<Users[]>([]);
const isTableDataLoading = ref(false);

const { token } = useAuth();

const fetchUsers = async () => {
  console.log(token.value);
  try {
    isTableDataLoading.value = true;

    const response = await fetch(`${mainUrl}/users/all`, {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data = await response.json();
    tableDataArray.value = data;
  } catch (error) {
    console.error("Ошибка получения пользователей:", error);
  } finally {
    isTableDataLoading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});

const updateUser = async (user: Users) => {
  try {
    const {
      id,
      password,
      role,
      resetPasswordToken,
      resetPasswordExpires,
      ...updateData
    } = user;
    await fetch(`${mainUrl}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify(updateData),
    });
  } catch (error) {
    console.error("Ошибка обновления:", error);
  }
};

const deleteUser = async (id: number) => {
  try {
    const confirmed = confirm("Удалить пользователя?");
    if (!confirmed) return;

    await fetch(`${mainUrl}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    tableDataArray.value = tableDataArray.value.filter(
      (v: Users) => v.id !== id
    );
  } catch (error) {
    console.error("Ошибка удаления:", error);
  }
};

const columns: TableColumn<Users>[] = [
  {
    accessorKey: "id",
    header: "#id",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },
  {
    accessorKey: "name",
    header: ({ column }) => getHeader(column, "Имя"),
    cell: ({ row }) => {
      const user = row.original;
      return h(UInput, {
        modelValue: user.name,
        "onUpdate:modelValue": async (value: string) => {
          user.name = value;
          await updateUser(user);
        },
      });
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => getHeader(column, "Email"),
    cell: ({ row }) => row.getValue("email"),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => getHeader(column, "Телефон"),
    cell: ({ row }) => row.getValue("phone"),
  },
  {
    accessorKey: "role",
    header: "Роль",
    cell: ({ row }) => row.getValue("role"),
  },
  {
    id: "actions",
    header: "Действия",
    cell: ({ row }) =>
      h(UButton, {
        icon: "i-lucide-trash-2",
        color: "red",
        variant: "ghost",
        title: "Удалить пользователя",
        onClick: () => deleteUser(row.original.id),
      }),
  },
];

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
});

function getHeader(column: Column<Users>, label: string) {
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

const sorting = ref([
  {
    id: "id",
    desc: false,
  },
]);
</script>
