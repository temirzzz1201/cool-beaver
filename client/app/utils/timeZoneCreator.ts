export const formatDate = (dateStr: string | undefined) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const getRussianMonthName = (dateString: string): string => {
  const months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const date = new Date(dateString);
  return months[date.getMonth()] ?? "неизвестно";
};
