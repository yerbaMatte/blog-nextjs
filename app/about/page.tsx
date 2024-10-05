import Image from "next/image";
import ParagraphList from "../components/blog/paragraph_list/ParagraphList";
import { aboutParagraphs } from "./aboutParagraphs";

const AboutPage = () => {
  return (
    <div className="flex flex-col md:gap-x-12 lg:gap-x-8 justify-around md:flex-row md:items-center">
      <div className="flex flex-col items-center h-42 my-2">
        <div className="w-72 md:w-80">
          <Image
            alt="profile image"
            src="/images/profile_img.webp"
            className="w-full h-auto rounded-full"
            style={{ objectFit: "contain" }}
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <h2 className="text-h2">About me</h2>
      </div>
      <ParagraphList paragraphs={aboutParagraphs} classname="md:w-1/2" />
    </div>
  );
};

export default AboutPage;
