import { Input } from "@nextui-org/react";
import Tag from "../tag/Tag";
import { TagResponseType, TagType } from "@/types/blog/blogPostTypes";

type SearchAndBlogFiltersProps = {
  onSearch: (e: string) => void;
  selectedFilters: string[];
  toggleFilter: (tag: string) => void;
  value: string;
  tags: TagType[];
};

const SearchAndBlogFilters = ({
  onSearch,
  toggleFilter,
  value,
  selectedFilters,
  tags,
}: SearchAndBlogFiltersProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6">
      <Input
        size="lg"
        label="Search"
        value={value}
        variant="bordered"
        placeholder="Find your interested post here ..."
        onChange={handleSearch}
        classNames={{
          inputWrapper: ["border-divider border-[1px] mb-4"],
          label: ["!text-foreground"],
          input: ["placeholder:text-sm"],
        }}
      />
      <p className="my-1 text-md">Choose your filters:</p>
      {tags.map((tag: TagResponseType, index: number) => (
        <Tag
          isFilter
          title={tag.title}
          key={index}
          isSelected={selectedFilters.includes(tag.title)}
          amount={tag.posts!.length}
          onClick={() => toggleFilter(tag.title)}
        />
      ))}
    </div>
  );
};

export default SearchAndBlogFilters;
