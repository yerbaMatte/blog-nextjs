import { getAllPosts, getBlogPost } from "@/lib/api/blogQueries";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import { CustomRenderer } from "@/components/blog/renderers/CustomRenderer";
import { BlogDataResponse, BlogPost } from "@/types/blog/blogPostTypes";
import { notFound } from "next/navigation";
import { Divider } from "@nextui-org/react";
import PostMetadata from "@/components/blog/post_metadata/PostMetadata";
import { formatDate } from "@/utils/formatDate";

export const dynamicParams = true;

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

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getBlogPost(slug)}`
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
            <h2 className="text-h2 mt-8 mb-2 text-center text-primary-500">
              {title}
            </h2>
            <p className="mb-8 text-center text-sm">{description}</p>
            <PostMetadata
              createdAt={formatDate(createdAt)}
              updatedAt={formatDate(updatedAt)}
              tags={tags}
            />
            <Divider />
            {blogData.map((c: FeatureComponent, i: number) => (
              <CustomRenderer item={c} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return notFound();
  }
};

export default BlogPostPage;
