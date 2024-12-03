import qs from "qs";

export const getAllPosts = qs.stringify({
  sort: ["updatedAt:desc", "createdAt:desc"],
  populate: {
    tags: {
      fields: ["title", "id"],
    },
  },
});

export const getAllTags = qs.stringify({
  populate: {
    posts: {
      fields: ["title"],
    },
  },
});

export const getBlogPost = (slug: string) =>
  qs.stringify({
    filters: {
      slug,
    },
    populate: {
      content: {
        populate: "*",
      },
      tags: {
        fields: ["title", "id"],
      },
    },
  });
