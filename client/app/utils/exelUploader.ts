export const downloadExcel = async (type: "orders" | "users" | "articles") => {
  try {
    const response = await fetch(`${mainUrl}/excel/export?type=${type}`, {
      method: "POST",
      body: JSON.stringify({ type }),
    });

    if (!response.ok) throw new Error(`Ошибка экспорта: ${response.status}`);

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${type}-${formatDate(new Date().toLocaleDateString())}.xlsx`;
    a.click();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Ошибка скачивания Excel:", error);
  }
};
