type TitleSectionProps = {
  className?: string;
  children: React.ReactNode;
  title: string;
};

const TitleSection = ({
  className = "",
  children,
  title,
}: TitleSectionProps) => {
  return (
    <div className={className}>
      <h2 className="text-h2 text-center">{title}</h2>
      <div className="text-center">{children}</div>
    </div>
  );
};

export default TitleSection;
