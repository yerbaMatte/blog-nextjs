import { Input } from "@nextui-org/react";
import { getAllTags } from "@/lib/api/blogQueries";

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
    <div>
      <Input
        size="lg"
        label="Search"
        variant="bordered"
        placeholder="Find your interested post here ..."
        classNames={{
          inputWrapper: ["border-divider border-[1px] my-4"],
          label: ["text-xl", "!text-foreground"],
          input: ["placeholder:text-sm"],
        }}
      />
    </div>
  );
};

export default SearchAndBlogFilters;
