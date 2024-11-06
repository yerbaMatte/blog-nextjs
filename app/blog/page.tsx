import { Divider } from "@nextui-org/react";
import PostItem from "@/components/blog/post_item/PostItem";
import { BlogDataResponse, BlogPostItemList } from "@/types/blog/blogPostTypes";
import { getAllPosts } from "@/lib/api/blogQueries";
import SearchAndBlogFilters from "@/components/blog/search_and_filters/SearchAndBlogFilters";
import TitleSection from "@/components/ui/title-section/TitleSection";

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
          <ul>
            <Divider />
            <SearchAndBlogFilters />
            <Divider />
            {data.map((p: BlogPostItemList) => (
              <li key={p.documentId}>
                <PostItem
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  createdAt={p.createdAt}
                  updatedAt={p.updatedAt}
                  slug={p.slug}
                />
                <Divider />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
