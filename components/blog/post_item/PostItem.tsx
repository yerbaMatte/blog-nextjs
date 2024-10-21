import styles from "./PostItem.module.scss";
import { Chip } from "@nextui-org/react";
import { PostItemType } from "@/types/blog/blogPostTypes";

const PostItem = ({
  title,
  description,
  tags,
  publicationDate,
}: PostItemType) => {
  return (
    <div className={styles.post_item}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.time_tags_wrapper}>
        <time className={styles.time}>{publicationDate}</time>
        {tags.map((t, i) => (
          <Chip className={styles.chip} size="md" key={i}>
            {t}
          </Chip>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default PostItem;
