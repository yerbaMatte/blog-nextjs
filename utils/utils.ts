export const formatDate = (publishedAt: string) =>
  new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

type date = string | number | Date;

export const compareCreateAndUpdateDate = (
  created: date,
  updated: date
): boolean => {
  const createdDate = new Date(created);
  const updatedDate = new Date(updated);

  const dayDifference =
    (updatedDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);

  return dayDifference >= 3;
};
