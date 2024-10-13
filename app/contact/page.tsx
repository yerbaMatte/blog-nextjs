import { Link } from "@nextui-org/react";
import ContactForm from "../../components/contact/contact_form/ContactForm";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-42 my-12 w-full">
      <h2 className="text-h2">Contact</h2>
      <p className="text-center">
        You can also shoot me an email directly on{" "}
        <Link
          className="text-base font-bold"
          href="mailto: milosz.lewandowski@icloud.com"
        >
          milosz.lewandowski@icloud.com
        </Link>
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
