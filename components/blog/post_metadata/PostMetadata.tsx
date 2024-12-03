import styles from "./PostMetadata.module.scss";
import Tag from "../tag/Tag";

type PostMetadataType = {
  createdAt: string;
  updatedAt: string;
  isUpdated?: boolean;
  tags: { title: string }[];
  isBlogList?: boolean;
};

const PostMetadata = ({
  createdAt,
  updatedAt,
  isUpdated,
  tags,
  isBlogList = false,
}: PostMetadataType) => {
  return (
    <div
      className={`${styles.time_tags_wrapper} ${
        isBlogList ? "items-center" : styles.justify_between
      }`}
    >
      <div className="flex flex-row gap-x-2">
        {isUpdated ? (
          <>
            {isUpdated && <time className={styles.time}>{updatedAt}</time>}
            {isBlogList && (
              <time className={`${styles.time} line-through decoration-2`}>
                {createdAt}{" "}
              </time>
            )}
          </>
        ) : (
          <time className={styles.time}>{updatedAt}</time>
        )}
      </div>
      <div>
        {tags.map((t, i) => (
          <Tag title={t.title} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PostMetadata;
