import { getAllPosts, getBlogPost } from "@/lib/api/blogQueries";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import { CustomRenderer } from "@/components/blog/renderers/CustomRenderer";
import { BlogDataResponse, BlogPost } from "@/types/blog/blogPostTypes";
import { notFound } from "next/navigation";
import PostMetadata from "@/components/blog/post_metadata/PostMetadata";
import { formatDate } from "@/utils/utils";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getBlogPost(slug)}`,
    { cache: "no-store" }
  );

  const json: BlogDataResponse = await response.json();

  const { data } = json;

  const { title, description } = data[0];

  return {
    title,
    description,
    metadataBase: new URL(`https://blog.yerbamatte.com/blog`),
    authors: [
      { name: "Miłosz Lewandowski", url: "https://github.com/yerbaMatte" },
    ],
    openGraph: {
      title,
      description,
      url: `https://blog.yerbamatte.com/blog/${slug}`,
      images: [
        {
          url: "/images/preview.png",
          width: 1200,
          height: 630,
          alt: "Full-page preview of Code Brew",
        },
      ],
      type: "website",
      locale: "en_US",
      siteName: "Code Brew",
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getAllPosts}`,
    { cache: "no-store" }
  );

  const json: BlogDataResponse = await response.json();

  const { data } = json;

  return data.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getBlogPost(slug)}`,
    { cache: "no-store" }
  );

  const json: BlogDataResponse = await response.json();

  const { data } = json;

  if (!data || data.length === 0) return notFound();

  const blogData = data[0].content;
  const { title, description, tags, updatedAt, createdAt } = data[0];

  return (
    <div className="container mx-auto grow">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px] prose">
          <h2 className="mt-8 mb-2 text-center text-primary-500 text-2xl leading-8 font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-center text-sm md:text-base">{description}</p>
          <PostMetadata
            createdAt={formatDate(createdAt)}
            updatedAt={formatDate(updatedAt)}
            tags={tags}
          />
          {blogData.map((c: FeatureComponent, i: number) => (
            <CustomRenderer item={c} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
