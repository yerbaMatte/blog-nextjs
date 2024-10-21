import { Divider } from "@nextui-org/react";
import PostItem from "@/components/blog/post_item/PostItem";

const BlogPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-h2 mt-8 text-center">Blog</h2>
      <p className="mb-8 text-center">
        Latest news, tips, updates, and stories for developers
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-[900px]">
          <ul>
            <Divider />
            <li key="1">
              <PostItem
                title="7 Reasons why I dont write"
                description="I didnt write a lot last year, even though I wanted to. Here
                are the things I tell myself that keep me from writing, and why
                they are probably bullshit."
                tags={["dev-ops", "nodejs", "UX"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
            <li key="2">
              <PostItem
                title="What are numeric separators?"
                description="Numeric separators are a JavaScript feature that allows you to
                use underscore as a separator in numeric literals, for example,
                you can write 10000 as 10_000."
                tags={["code"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
            <li key="3">
              <PostItem
                title="JavaScript array methods and how to use them"
                description="Arrays are as central to JavaScript as in many other languages,
                in this article we will go through the most useful array methods
                along with creative usage examples."
                tags={["gearing", "life"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
            <li key="4">
              <PostItem
                title="7 Reasons why I dont write"
                description="I didnt write a lot last year, even though I wanted to. Here
                are the things I tell myself that keep me from writing, and why
                they are probably bullshit."
                tags={["dev-ops", "nodejs", "UX"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
            <li key="5">
              <PostItem
                title="What are numeric separators?"
                description="Numeric separators are a JavaScript feature that allows you to
                use underscore as a separator in numeric literals, for example,
                you can write 10000 as 10_000."
                tags={["code"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
            <li key="6">
              <PostItem
                title="JavaScript array methods and how to use them"
                description="Arrays are as central to JavaScript as in many other languages,
                in this article we will go through the most useful array methods
                along with creative usage examples."
                tags={["gearing", "life"]}
                publicationDate="30 Jan 2023"
              />
            </li>
            <Divider />
          </ul>
        </div>
        {/* <aside className="grow">
          <LastCreatedPosts />
        </aside> */}
      </div>
    </div>
  );
};

export default BlogPage;
