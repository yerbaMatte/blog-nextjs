export type PostItemType = {
  title: string;
  description: string;
  publishedAt: string;
  documentId?: string;
  tags: string[];
  slug: string;
};

export type LastCreatedPosts = {
  postTitles: string[];
};
