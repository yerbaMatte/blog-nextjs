import Image from "next/image";
import { Divider } from "@nextui-org/react";

//TODO:
//1/ change blog posts displaying newset-oldest
//2/ change next images - avoid layout shift
//3/ thumbnails in blog posts when posting on SM?

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
      <div className="container flex flex-col items-center justify-center md:flex-row md:gap-x-8 lg:gap-x-16 mt-2 px-0 grow">
        <div className="min-w-[250px] my-4">
          <Image
            alt="profile image"
            src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/profile_img_5a3ee5f766.webp`}
            className="w-full h-auto rounded-full"
            style={{ objectFit: "contain" }}
            quality={100}
            priority
            width={250}
            height={250}
          />
        </div>
        <div className="max-w-[600px] max-h-fit px-4 md:px-2">
          <p className="py-2 text-justify">
            Professionally, I&apos;m a front-end developer who&apos;s passionate
            about web development, performance optimization, and best practices.
          </p>
          <p className="py-2 text-justify">
            I previously served as an Imagery Intelligence Officer in the Polish
            Army and graduated from the Military University of Technology in
            2020. During my service, I contributed to developing a frontend app
            for my unit.
          </p>
          <p className="py-2 text-justify">
            In my free time, I enjoy working with Python, DevOps, automation,
            and VPS. Outside the digital world, I love staying active through
            travel and sports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
