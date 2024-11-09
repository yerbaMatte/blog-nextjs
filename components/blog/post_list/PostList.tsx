import PostItem from "../post_item/PostItem";
import { Divider } from "@nextui-org/react";
import { BlogPostItemList } from "@/types/blog/blogPostTypes";

type PostListProps = {
  blogList: BlogPostItemList[];
};

const PostList = ({ blogList }: PostListProps) => {
  return (
    <div className="flex flex-col gap-x-2">
      <ul className="grow">
        {blogList.length ? (
          blogList.map((p: BlogPostItemList) => (
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
          ))
        ) : (
          <li>
            <PostItem
              title="No results"
              description="There are currently no blog posts available."
              tags={[]}
              createdAt=""
              updatedAt=""
              slug=""
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default PostList;
