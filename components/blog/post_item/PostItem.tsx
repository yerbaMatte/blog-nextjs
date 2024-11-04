import styles from "./PostItem.module.scss";
import Link from "next/link";
import { BlogPostItemList } from "@/types/blog/blogPostTypes";
import PostItemMetadata from "../post_metadata/PostMetadata";
import { formatDate } from "@/utils/formatDate";

const PostItem = ({
  title,
  description,
  tags,
  slug,
  publishedAt,
}: BlogPostItemList) => {
  return (
    <div className={styles.post_item}>
      <Link href={`/blog/${slug}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <PostItemMetadata
        isBlogList
        publishedAt={formatDate(publishedAt)}
        tags={tags}
      />
      <p>{description}</p>
    </div>
  );
};

export default PostItem;
