import Link from "next/link";

const LastCreatedPosts = () => {
  return (
    <div className="lg:my-6 rounded-lg lg:fixed p-4 bg-graish">
      <h4 className="text-h4 underline">Fresh Brews</h4>
      <ul className="list-decimal list-inside">
        <li className="mt-2">
          <Link href="#">7 Reasons why I dont write</Link>
        </li>
        <li className="mt-2">What are numeric separators?</li>
        <li className="mt-2">JavaScript array methods and how to use them</li>
        <li className="mt-2">What are numeric separators?</li>
        <li className="mt-2">The last 5th post</li>
      </ul>
    </div>
  );
};

export default LastCreatedPosts;
