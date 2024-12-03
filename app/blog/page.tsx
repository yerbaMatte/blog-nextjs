import { getAllPosts, getAllTags } from "@/lib/api/blogQueries";
import TitleSection from "@/components/ui/title-section/TitleSection";
import type { Metadata } from "next";
import BlogSection from "@/components/blog/blog_section/BlogSection";
import { sortPosts } from "@/utils/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore my blog where I share insights, tips, and ideas on web development, programming, and tech topics.",
  metadataBase: new URL("https://blog.yerbamatte.com"),
  authors: [
    { name: "Miłosz Lewandowski", url: "https://github.com/yerbamatte" },
  ],
  openGraph: {
    title: "Blog",
    description:
      "Explore my blog where I share insights, tips, and ideas on web development, programming, and tech topics.",
    url: "https://www.blog.yerbamatte.com/blog",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Blog preview image",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Code Brew",
  },
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "software engineering",
    "coding tips",
    "developer insights",
    "programming resources",
    "web development",
    "newsletter for developers",
    "technology news",
    "developer tools",
    "full-stack development",
    "JavaScript",
    "ReactJS tutorials",
    "Next.js guide",
    "web performance optimization",
    "CSS best practices",
    "API design",
    "cloud computing",
    "DevOps",
    "backend programming",
    "machine learning for developers",
    "developer productivity",
    "coding interview tips",
    "code quality",
  ],
};

const BlogPage = async () => {
  const postsFetch = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getAllPosts}`,
    { cache: "no-store" }
  );

  const tagsFetch = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tags?${getAllTags}`,
    {
      cache: "no-store",
    }
  );

  const [postsResponse, tagsResponse] = await Promise.all([
    postsFetch,
    tagsFetch,
  ]);

  const postsJson = await postsResponse.json();
  const tagsJson = await tagsResponse.json();

  const posts = sortPosts(postsJson.data);

  const tags = tagsJson.data;

  return (
    <div className="container mx-auto grow">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <TitleSection className="my-8" title="Blog">
            Latest news, tips, updates, and stories for developers
          </TitleSection>
          <BlogSection blogList={posts} tagList={tags} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
