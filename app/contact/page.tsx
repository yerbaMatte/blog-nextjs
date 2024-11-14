import { Divider, Link } from "@nextui-org/react";
import type { Metadata } from "next";
import TitleSection from "@/components/ui/title-section/TitleSection";
import ContactForm from "@/components/contact/contact_form/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miłosz Lewandowski, a software developer passionate about web development, programming, and tech. Reach out for collaborations, inquiries, or just to chat!",
  metadataBase: new URL("https://blog.yerbamatte.com"),
  authors: [
    { name: "Miłosz Lewandowski", url: "https://github.com/yerbamatte" },
  ],
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with Miłosz Lewandowski, a software developer passionate about web development, programming, and tech. Reach out for collaborations, inquiries, or just to chat!",
    url: "https://www.blog.yerbamatte.com/contact",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Contact page preview",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Code Brew",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const ContactPage = () => {
  return (
    <div className="container mx-auto grow flex flex-col">
      <div className="flex justify-center grow">
        <div className="w-full max-w-[900px] flex flex-col items-center">
          <TitleSection title="Contact" className="my-8">
            You can also shoot me an email directly on:{" "}
            <Link
              className="text-base font-bold"
              href="mailto: milosz1lewandowski@gmail.com"
            >
              milosz1lewandowski@gmail.com
            </Link>
          </TitleSection>
          <Divider />
          <ContactForm className="flex-grow justify-center" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
