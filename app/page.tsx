import { Link as NextUILink } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex items-center">
      <div className="w-1/2">
        <h1 className="text-h1 font-normal leading-tight mb-4">
          Welcome to <span className="font-bold">CODE BREW!</span>
        </h1>
        <p className="py-1 leading-7">
          <span className="font-bold">CODE BREW</span> by{" "}
          <NextUILink
            href="/about"
            className="text-base font-bold p-0"
            as={Link}
          >
            @yerbaMatte
          </NextUILink>{" "}
          is a blog for Software Engineers focused on enhancing productivity and
          optimizing workflows.
        </p>
        <p className="py-1 leading-7">
          It offers insights on a wide range of topics, from mobile and web
          development to general software engineering.
        </p>
      </div>
    </div>
  );
}
