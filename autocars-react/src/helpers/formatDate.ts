export const formatDate = (date: Date) => {
  const newDate = `${date?.toLocaleString("default", {
    month: "long",
  })} ${date?.getDate()}, ${date?.toLocaleString("default", {
    year: "numeric",
  })}`;
  return newDate;
};
