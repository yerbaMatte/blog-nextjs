export type BlogPostItemList = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  documentId?: string;
  tags: { title: string }[];
  slug: string;
};

export type BlogPost = {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: any[];
  tags: { title: string }[];
};

export type PaginationMeta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type BlogDataResponse = {
  data: BlogPost[];
  meta: { pagination: PaginationMeta };
};
