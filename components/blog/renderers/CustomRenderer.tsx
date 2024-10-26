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
        <div className="w-full aspect-video relative">
          <Image
            alt="image"
            src={`http://localhost:1337${imgPath}`}
            fill
            quality={100}
            className="object-contain"
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
