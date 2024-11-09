import { getAllPosts, getAllTags } from "@/lib/api/blogQueries";
import TitleSection from "@/components/ui/title-section/TitleSection";
import BlogSection from "@/components/blog/blog_section/BlogSection";

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

  const posts = postsJson.data;
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
