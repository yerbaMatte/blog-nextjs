import Image from "next/image";
import ParagraphList from "../../components/blog/paragraph_list/ParagraphList";
import { aboutParagraphs } from "./aboutParagraphs";
import { Divider } from "@nextui-org/react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full grow">
      <div>
        <h2 className="text-h2 mt-8 text-center">About</h2>
        <p className="text-center mb-8">
          Hey there! 👋🏽 I&apos;m your host, Miłosz - a Polish software engineer
        </p>
        <Divider />
      </div>
      <div className="container flex flex-col items-center justify-center md:flex-row md:gap-x-8 lg:gap-x-16 mt-6 px-0 grow">
        <div className="flex flex-col items-center">
          <div className="w-72 md:w-80">
            <Image
              alt="profile image"
              src="/images/profile_img.webp"
              className="w-full h-auto rounded-full"
              style={{ objectFit: "contain" }}
              quality={100}
              priority
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <ParagraphList
          paragraphs={aboutParagraphs}
          classname="max-w-[600px] max-h-fit px-4 md:px-2"
        />
      </div>
    </div>
  );
};

export default AboutPage;
