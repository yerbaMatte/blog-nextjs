import { Link as NextUILink } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <p className="py-2">
        This is Code Brew by{" "}
        <NextUILink href="/about" className="text-base font-bold p-0" as={Link}>
          @yerbaMatte
        </NextUILink>
        , the place where I&apos;ve been writing about essential insights for
        Software Engineers. I&apos;m always thinking a lot about how to make you
        more productive with tools that improve your workflow help you make
        slicker, sexier, mobile web sites and webapps.
      </p>
    </div>
  );
}
