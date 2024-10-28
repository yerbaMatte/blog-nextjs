import { Button, Divider } from "@nextui-org/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
  description: "Could not find requested resource",
};

export default function NotFound() {
  return (
    <div className="flex flex-col justify-around items-center w-full grow px-4">
      <div className="max-w-[900px] flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-h2 max-w-[300px] sm:max-w-full md:text-h1 text-center">
          Lost in the Brew! ☕️ | 404
        </h1>
        <Divider />
        <p className="text-center ">
          Oops! We tried brewing up the page you requested, but something went
          wrong...
        </p>
        <Divider />
        <Button
          variant="bordered"
          className="mt-8 bg-foreground text-background hover:bg-background hover:text-foreground px-6 py-4 w-full sm:max-w-fit"
          as={Link}
          href="/"
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
}
