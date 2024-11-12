import styles from "./PostMetadata.module.scss";
import Tag from "../tag/Tag";
import { compareCreateAndUpdateDate } from "@/utils/utils";

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
  const isPostUpdated = compareCreateAndUpdateDate(createdAt, updatedAt);

  return (
    <div
      className={`${styles.time_tags_wrapper} ${
        isBlogList ? "items-center" : styles.justify_between
      }`}
    >
      <div className="flex flex-row gap-x-2">
        {isPostUpdated ? (
          <>
            {isPostUpdated && <time className={styles.time}>{updatedAt}</time>}
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
