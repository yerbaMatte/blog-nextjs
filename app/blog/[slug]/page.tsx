import { getBlogPost } from "@/lib/api/blogQueries";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import { apiFetch } from "@/lib/api/apiClient";
import { CustomRenderer } from "@/components/blog/renderers/CustomRenderer";
import { BlogDataResponse } from "@/types/blog/blogPostTypes";
import { notFound } from "next/navigation";
import { Divider } from "@nextui-org/react";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  try {
    const response = await apiFetch<BlogDataResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getBlogPost(slug)}`
    );

    const { data } = response;

    if (!data || data.length === 0) return notFound();

    const blogData = data[0].content;
    const { title, description } = data[0];

    return (
      <div className="container mx-auto grow">
        <div className="flex justify-center">
          <div className="w-full max-w-[900px] prose">
            <h2 className="text-h2 mt-8 mb-2 text-center text-primary-500">
              {title}
            </h2>
            <p className="mb-8 text-center text-sm">{description}</p>
            <Divider />
            {blogData.map((c: FeatureComponent, i: number) => (
              <CustomRenderer item={c} key={i} />
            ))}
          </div>
          {/* <aside className="grow">
            <LastCreatedPosts />
          </aside> */}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return notFound();
  }
};

export default BlogPostPage;
