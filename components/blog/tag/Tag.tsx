import styles from "./Tag.module.scss";
import { Chip } from "@nextui-org/react";
import { Badge } from "@nextui-org/badge";

type TagProps = {
  title: string;
  isSelected?: boolean;
  amount?: number;
  isFilter?: boolean;
  onClick?: () => void;
};

const Tag = ({ title, amount, isFilter, isSelected, onClick }: TagProps) => {
  const BasicTag = ({
    name,
    onClick,
    isSelected,
  }: {
    name: string;
    onClick?: () => void;
    isSelected?: boolean;
  }) => (
    <Chip
      onClick={onClick}
      className={`${styles.chip} ${isSelected ? styles.chip_selected : ""}`}
      size="md"
    >
      {name}
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
      <BasicTag name={title} onClick={onClick} isSelected={isSelected} />
    </Badge>
  ) : (
    <BasicTag name={title} onClick={onClick} isSelected={isSelected} />
  );
};

export default Tag;
