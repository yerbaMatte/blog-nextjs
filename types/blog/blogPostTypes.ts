import { FeatureComponent } from "./featurePostTypes";

export type BlogPostItem = {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  documentId?: string;
  isUpdated?: boolean;
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
  content: FeatureComponent[];
  tags: { title: string }[];
};

export type PostMetadataType = {
  createdAt: string;
  updatedAt: string;
  isUpdated?: boolean;
  tags: { title: string }[];
  isBlogList?: boolean;
};

export type TagType = {
  title: string;
  amount?: number;
  isFilter?: boolean;
};

export type TagResponseType = {
  id?: number;
  documentId?: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  posts?: object[];
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
