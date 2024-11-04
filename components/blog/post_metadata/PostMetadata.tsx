import styles from "./PostMetadata.module.scss";
import Tag from "../tag/Tag";

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
        isBlogList ? "items-center" : "justify-between"
      }`}
    >
      <time className={styles.time}>{publishedAt}</time>
      <div>
        {tags.map((t, i) => (
          <Tag tag={t} key={i} />
        ))}
      </div>
    </div>
  );
};

export default PostMetadata;
