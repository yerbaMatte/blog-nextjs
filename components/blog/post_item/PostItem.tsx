import styles from "./PostItem.module.scss";
import { Chip } from "@nextui-org/react";
import Link from "next/link";
import { BlogPostItemList } from "@/types/blog/blogPostTypes";

const PostItem = ({
  title,
  description,
  tags,
  slug,
  publishedAt,
}: BlogPostItemList) => {
  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={styles.post_item}>
      <Link href={`/blog/${slug}`}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.time_tags_wrapper}>
        <time className={styles.time}>{formattedDate}</time>
        {tags.map((t, i) => (
          <Chip className={styles.chip} size="md" key={i}>
            {t.title}
          </Chip>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default PostItem;
