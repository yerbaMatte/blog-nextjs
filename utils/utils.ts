import { BlogPostItem } from "@/types/blog/blogPostTypes";

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

export const sortPosts = (posts: BlogPostItem[]) => {
  return posts.sort((a, b) => {
    if (a.isUpdated && !b.isUpdated) return -1;
    if (!a.isUpdated && b.isUpdated) return 1;

    const dateA = new Date(a.updatedAt || a.createdAt).getTime();
    const dateB = new Date(b.updatedAt || b.createdAt).getTime();

    return dateB - dateA;
  });
};
