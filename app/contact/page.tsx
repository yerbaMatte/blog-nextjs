import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Textarea,
  Button,
} from "@nextui-org/react";

import { Input, Link } from "@nextui-org/react";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center h-42 my-2 w-full">
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
      <Card className="my-8 w-full max-w-[800px] bg-background border border-divider">
        <CardHeader className="flex">
          <Image
            data-hide-on-theme="light"
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={32}
            height={32}
            style={{
              filter: "invert(100%)",
            }}
          />
          <Image
            data-hide-on-theme="dark"
            src="svg/mate.svg"
            alt="yerba mate drink"
            width={32}
            height={32}
          />
          <p className="text-md ml-2 py-2">
            Fill out the form below, and I&apos;ll be in touch!
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-col gap-y-3">
          <Input
            isClearable
            variant="bordered"
            type="name"
            label="Name"
            classNames={{
              inputWrapper: ["border-[1px]"],
            }}
          />
          <Input
            isClearable
            variant="bordered"
            type="email"
            label="Email"
            classNames={{
              inputWrapper: ["border-[1px]"],
            }}
          />
          <Input
            isClearable
            variant="bordered"
            type="subject"
            label="Subject"
            classNames={{
              inputWrapper: ["border-[1px]"],
            }}
          />
          <Textarea
            variant="bordered"
            label="Description"
            classNames={{
              inputWrapper: ["border-[1px]"],
            }}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button
            variant="bordered"
            className="w-full border-[1px] hover:border-foreground"
          >
            SEND MESSAGE
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactPage;
