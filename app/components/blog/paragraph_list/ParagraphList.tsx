import styles from "./ParagraphList.module.scss";

const ParagraphList = () => {
  return (
    <div className="md:w-1/2">
      <p className={styles.paragraph_item}>Hey there! 👋🏽</p>
      <p className={styles.paragraph_item}>
        I&apos;m your host, Miłosz - a Polish software engineer and freelance
        developer. Professionally, I&apos;m a front-end developer who’s
        passionate about web development, performance optimization, and best
        practices.
      </p>
      <p className={styles.paragraph_item}>
        I previously served as an Imagery Intelligence Officer in the Polish
        Army and graduated from the Military University of Technology in 2020.
        During my service, I contributed to developing a frontend app for my
        unit.
      </p>
      <p className={styles.paragraph_item}>
        In my free time, I enjoy working with Python, DevOps, automation, and
        VPS. Outside the digital world, I love staying active through travel and
        sports.
      </p>
    </div>
  );
};

export default ParagraphList;
