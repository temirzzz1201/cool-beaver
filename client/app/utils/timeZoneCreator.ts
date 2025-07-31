export const timeCreator = (rowTime: string): string => {
  const date = new Date(rowTime);

  const moscowOffset = 3 * 60;
  const localOffset = date.getTimezoneOffset();

  const moscowDate = new Date(
    date.getTime() + (moscowOffset + localOffset) * 60000
  );

  const formattedDate = moscowDate.toLocaleDateString("ru-RU");
  const formattedTime = moscowDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${formattedDate}, ${formattedTime}`;
};
