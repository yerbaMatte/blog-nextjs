import qs from "qs";

export const getAllPosts = qs.stringify({
  populate: {
    tags: {
      fields: ["title", "id"],
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
    },
  });
