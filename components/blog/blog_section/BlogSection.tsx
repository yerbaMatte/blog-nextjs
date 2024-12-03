"use client";

import SearchAndBlogFilters from "@/components/blog/search_and_filters/SearchAndBlogFilters";
import PostList from "@/components/blog/post_list/PostList";
import { BlogPostItem } from "@/types/blog/blogPostTypes";
import { Divider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import NewsletterBanner from "../newsletter-banner/NewsletterBanner";

type BlogSectionProps = {
  blogList: BlogPostItem[];
  tagList: { title: string }[];
};

const BlogSection = ({ blogList, tagList }: BlogSectionProps) => {
  const [selectedPosts, setSelectedPosts] = useState<BlogPostItem[]>(blogList);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  useEffect(() => {
    const filteredPosts = blogList.filter((post) => {
      const matchesSearchTerm =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSelectedFilters =
        selectedFilters.length === 0 ||
        post.tags.some((tag) => selectedFilters.includes(tag.title));

      return matchesSearchTerm && matchesSelectedFilters;
    });

    setSelectedPosts(filteredPosts);
  }, [searchTerm, selectedFilters, blogList]);

  const toggleFilter = (tag: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(tag)
        ? prevFilters.filter((f) => f !== tag)
        : [...prevFilters, tag]
    );
  };

  return (
    <>
      <NewsletterBanner />
      <SearchAndBlogFilters
        onSearch={(term) => setSearchTerm(term)}
        value={searchTerm}
        tags={tagList}
        selectedFilters={selectedFilters}
        toggleFilter={toggleFilter}
      />
      <Divider />
      <PostList blogList={selectedPosts} />
    </>
  );
};

export default BlogSection;
