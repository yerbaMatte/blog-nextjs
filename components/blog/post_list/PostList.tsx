import PostItem from "../post_item/PostItem";
import { Divider } from "@nextui-org/react";
import { BlogPostItemList } from "@/types/blog/blogPostTypes";
// import styles from "./PostList.module.scss";

type PostListProps = {
  blogList: BlogPostItemList[];
};

const PostList = ({ blogList }: PostListProps) => {
  return (
    <>
      <ul>
        {blogList.map((p: BlogPostItemList) => (
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
    </>
  );
};

export default PostList;
