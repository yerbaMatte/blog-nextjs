import styles from "./PostItem.module.scss";
import Link from "next/link";
import { BlogPostItem } from "@/types/blog/blogPostTypes";
import PostItemMetadata from "../post_metadata/PostMetadata";
import { formatDate } from "@/utils/utils";

const PostItem = ({
  title,
  description,
  tags,
  slug,
  isUpdated,
  createdAt,
  updatedAt,
}: BlogPostItem) => {
  return (
    <div className={styles.post_item}>
      <Link href={`/blog/${slug}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <PostItemMetadata
        isBlogList
        createdAt={formatDate(createdAt)}
        updatedAt={formatDate(updatedAt)}
        isUpdated={isUpdated}
        tags={tags}
      />
      <p>{description}</p>
    </div>
  );
};

export default PostItem;
