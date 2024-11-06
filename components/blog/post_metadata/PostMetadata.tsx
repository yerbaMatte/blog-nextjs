import styles from "./PostMetadata.module.scss";
import Tag from "../tag/Tag";

type PostMetadataType = {
  createdAt: string;
  updatedAt: string;
  tags: { title: string }[];
  isBlogList?: boolean;
};

const PostMetadata = ({
  createdAt,
  updatedAt,
  tags,
  isBlogList = false,
}: PostMetadataType) => {
  const isPostUpdated = createdAt !== updatedAt;

  return (
    <div
      className={`${styles.time_tags_wrapper} ${
        isBlogList ? "items-center" : styles.justify_between
      }`}
    >
      {isPostUpdated && <time className={styles.time}>{updatedAt}</time>}

      {isBlogList && (
        <time className={`${styles.time} line-through`}>{createdAt}</time>
      )}

      <div>
        {tags.map((t, i) => (
          <Tag title={t.title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PostMetadata;
