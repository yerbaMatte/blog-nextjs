import Image from "next/image";
import type { Metadata } from "next";
import { Divider } from "@nextui-org/react";
import TitleSection from "@/components/ui/title-section/TitleSection";

export const metadata: Metadata = {
  title: "About me",
  description: "Hey there! I'm your host, Miłosz - a Polish software developer",
  metadataBase: new URL("https://www.blog.yerbamatte.com"),
  authors: [
    { name: "Miłosz Lewandowski", url: "https://github.com/yerbaMatte" },
  ],
  openGraph: {
    title: "About",
    description:
      "Hey there! I'm your host, Miłosz - a Polish software developer.",
    url: "https://www.blog.yerbamatte.com/about",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Full-page preview of Code Brew",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Code Brew",
  },
};

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center w-full grow max-w-[900px]">
      <TitleSection title="About" className="my-8">
        Hey there! 👋🏽 I&apos;m your host, Miłosz - a Polish software developer
      </TitleSection>
      <Divider />
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
            2020. During my service, I contributed to developing a front-end
            application for my unit as part of a project with NATO, requiring
            security clearances to handle NATO Secret confidential information.
          </p>
          <p className="py-2 text-justify">
            Outside of front-end development, I also work with Python in a
            commercial setting. I&apos;m passionate about Linux and run a
            Proxmox server at home with several virtual machines. This lets me
            dive into server management, networking, and virtualization,
            expanding my skills across different tech areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
