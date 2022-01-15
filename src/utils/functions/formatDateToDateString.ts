const formatDateToDateString = function (date: Date): string {
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export default formatDateToDateString;
