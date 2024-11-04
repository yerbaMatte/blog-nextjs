import styles from "./PostMetadata.module.scss";
import { Chip } from "@nextui-org/react";

type PostMetadataType = {
  publishedAt: string;
  tags: { title: string }[];
  isBlogList?: boolean;
};

const PostMetadata = ({
  publishedAt,
  tags,
  isBlogList = false,
}: PostMetadataType) => {
  return (
    <div
      className={`${styles.time_tags_wrapper} ${
        isBlogList ? "!justify-between" : "items-center"
      }`}
    >
      <time className={styles.time}>{publishedAt}</time>
      <div>
        {tags.map((t, i) => (
          <Chip className={styles.chip} size="md" key={i}>
            {t.title}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export default PostMetadata;
