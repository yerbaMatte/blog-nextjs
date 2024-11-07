import { Divider } from "@nextui-org/react";
import { BlogDataResponse } from "@/types/blog/blogPostTypes";
import { getAllPosts } from "@/lib/api/blogQueries";
import SearchAndBlogFilters from "@/components/blog/search_and_filters/SearchAndBlogFilters";
import TitleSection from "@/components/ui/title-section/TitleSection";
import PostList from "@/components/blog/post_list/PostList";

const BlogPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?${getAllPosts}`,
    { cache: "no-store" }
  );

  const json: BlogDataResponse = await response.json();

  const { data } = json;

  return (
    <div className="container mx-auto grow">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <TitleSection className="my-8" title="Blog">
            Latest news, tips, updates, and stories for developers
          </TitleSection>
          <Divider />
          <SearchAndBlogFilters />
          <Divider />
          <PostList blogList={data} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
