import { Divider } from "@nextui-org/react";
import PostItem from "@/components/blog/post_item/PostItem";
import { PostItemList } from "@/types/blog/blogPostTypes";
import { getAllPosts } from "@/lib/api/blogQueries";
import { apiFetch } from "@/lib/api/apiClient";

const BlogPage = async () => {
  const data = await apiFetch<{ data: PostItemList[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getAllPosts}`
  );

  return (
    <div className="container mx-auto grow">
      <h2 className="text-h2 mt-8 text-center">Blog</h2>
      <p className="mb-8 text-center">
        Latest news, tips, updates, and stories for developers
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <ul>
            <Divider />
            {data.data.map((p: PostItemList) => (
              <li key={p.documentId}>
                <PostItem
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  publishedAt={p.publishedAt}
                  slug={p.slug}
                />
                <Divider />
              </li>
            ))}
          </ul>
        </div>
        {/* <aside className="grow">
          <LastCreatedPosts />
        </aside> */}
      </div>
    </div>
  );
};

export default BlogPage;
