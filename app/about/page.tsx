import Image from "next/image";
import ParagraphList from "../components/blog/paragraph_list/ParagraphList";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:gap-x-12 justify-around md:flex-row md:items-center">
      <div className="flex flex-col items-center h-42 my-2">
        <Image
          alt="profile image"
          width={240}
          height={240}
          src="/images/profile_img.webp"
          className="rounded-full"
          quality={100}
        />
        <h2 className="text-h2">About me</h2>
      </div>
      <ParagraphList />
    </div>
  );
};

export default AboutPage;
