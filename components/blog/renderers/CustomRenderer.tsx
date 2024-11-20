import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Code } from "@/components/blog/renderers/Code";
import { FeatureComponent } from "@/types/blog/featurePostTypes";
import styles from "./CustomRenderer.module.scss";
import Image from "next/image";

export const CustomRenderer = ({ item }: { item: FeatureComponent }) => {
  const { __component } = item;

  switch (__component) {
    case "features.richarea":
      return (
        <div className={styles.custom_render}>
          <BlocksRenderer content={item.content} />
        </div>
      );
    case "features.poster":
      return (
        <div className="w-full h-32 md:h-52 relative">
          <Image
            alt="image"
            src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      );
    case "features.image":
      return (
        <Image
          alt="image"
          src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
          width={500}
          className="w-full m-0"
          height={500}
          quality={100}
        />
      );
    case "features.code":
      return <Code code={item.code} />;

    default:
      console.error(`Unknown component: ${__component}`);
      return null;
  }
};
