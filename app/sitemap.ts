import { getAllPosts } from "@/lib/api/blogQueries";
import type { MetadataRoute } from "next";

async function generatePostSitemapData() {
  const postsFetch = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getAllPosts}`
  );

  const postsJson = await postsFetch.json();
  const { data } = postsJson;

  return data.map((post: { slug: string; updatedAt: string }) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postSitemapData = await generatePostSitemapData();

  const staticRoutes = [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
      lastModified: new Date(),
    },
  ];

  return [...staticRoutes, ...postSitemapData];
}
