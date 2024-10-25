import { getBlogPost } from "@/lib/api/blogQueries";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import { apiFetch } from "@/lib/api/apiClient";
import { CustomRenderer } from "@/components/blog/renderers/CustomRenderer";

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // TODO: correct the type
  const response = await apiFetch<{ data: any[] }>(
    `http://localhost:1337/api/posts?${getBlogPost(slug)}`
  );

  const { data } = response;

  const blogData = data[0].content;

  const { title } = data[0];

  return (
    <div className="container mx-auto grow">
      <h2 className="text-h2 mt-8 text-center text-primary-500">{title}</h2>
      <p className="mb-8 text-center">
        Latest news, tips, updates, and stories for developers
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-[900px] prose prose-gray prose-lg">
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
};

export default BlogPostPage;
