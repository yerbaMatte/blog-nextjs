import styles from "./Tag.module.scss";
import { Chip } from "@nextui-org/react";
import { Badge } from "@nextui-org/badge";

type TagType = {
  title: string;
  amount?: number;
  isFilter?: boolean;
};

const Tag = ({ title, amount, isFilter }: TagType) => {
  const BasicTag = ({ name }: { name: string }) => (
    <Chip className={styles.chip} size="md">
      {title}
    </Chip>
  );

  return isFilter ? (
    <Badge
      content={amount}
      classNames={{
        base: ["mr-4", "my-2"],
        badge: [
          "bg-background",
          "text-foreground",
          "border-[#818A91]",
          "border-[1px]",
          "text-sm",
          "font-thin",
        ],
      }}
    >
      <BasicTag name={title} />
    </Badge>
  ) : (
    <BasicTag name={title} />
  );
};

export default Tag;
