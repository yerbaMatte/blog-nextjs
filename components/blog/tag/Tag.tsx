import styles from "./Tag.module.scss";
import { Chip } from "@nextui-org/react";

const Tag = ({ tag, key }: { tag: { title: string }; key: number }) => {
  return (
    <Chip className={styles.chip} size="md" key={key}>
      {tag.title}
    </Chip>
  );
};

export default Tag;
