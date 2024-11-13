import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Code } from "@/components/blog/renderers/Code";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import Image from "next/image";

export const CustomRenderer = ({ item }: { item: FeatureComponent }) => {
  const { __component } = item;

  switch (__component) {
    case "features.richarea":
      return <BlocksRenderer content={item.content} />;
    case "features.image":
      const { url: imgPath } = item.image;

      return (
        <div className="w-full h-32 md:h-52 relative">
          <Image
            alt="image"
            src={`${process.env.NEXT_PUBLIC_API_URL}${imgPath}`}
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      );
    case "features.code":
      return <Code code={item.code} />;

    default:
      console.error(`Unknown component: ${__component}`);
      return null;
  }
};
