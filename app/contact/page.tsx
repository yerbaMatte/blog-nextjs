import { Divider, Link } from "@nextui-org/react";

import TitleSection from "@/components/ui/title-section/TitleSection";
import ContactForm from "@/components/contact/contact_form/ContactForm";

const ContactPage = () => {
  return (
    <div className="container mx-auto grow">
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <TitleSection title="Contact" className="my-8">
            You can also shoot me an email directly on:{" "}
            <Link
              className="text-base font-bold"
              href="mailto: milosz1lewandowski@gmail.com"
            >
              milosz1lewandowski@gmail.com
            </Link>
          </TitleSection>
          <ContactForm className="flex-grow justify-start" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
