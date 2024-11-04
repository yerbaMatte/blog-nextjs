import { Input } from "@nextui-org/react";
import { getAllTags } from "@/lib/api/blogQueries";
import Tag from "../tag/Tag";

const SearchAndBlogFilters = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/tags?${getAllTags}`,
    {
      cache: "no-store",
    }
  );

  const json = await response.json();

  const { data } = json;

  console.log(data);

  return (
    <div className="my-6">
      <Input
        size="lg"
        label="Search"
        variant="bordered"
        placeholder="Find your interested post here ..."
        classNames={{
          inputWrapper: ["border-divider border-[1px] mb-4"],
          label: ["!text-foreground"],
          input: ["placeholder:text-sm"],
        }}
      />
      {data.map((tag: { title: string; posts: Object[] }, index: number) => (
        <Tag isFilter title={tag.title} key={index} amount={tag.posts.length} />
      ))}
    </div>
  );
};

export default SearchAndBlogFilters;
