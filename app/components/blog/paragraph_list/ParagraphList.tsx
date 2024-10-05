import styles from "./ParagraphList.module.scss";

const ParagraphList = ({
  paragraphs,
  classname,
}: {
  paragraphs: string[];
  classname?: string;
}) => {
  return (
    <div className={classname}>
      {paragraphs.map((p, i) => (
        <p className={styles.paragraph_item} key={i}>
          {p}
        </p>
      ))}
    </div>
  );
};

export default ParagraphList;
