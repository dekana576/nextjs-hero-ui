"use client";

import axios from "axios";
import CardList from "../components/CardList";
import LinkButtonDanger from "../components/LinkButtonDanger";
import Link from "next/link";
import LinkButtonPrimary from "../components/LinkButtonPrimary";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@heroui/react";
import { useState } from "react";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Ipost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const queryClient = useQueryClient();

  const {data: posts, isLoading, isError, error} = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get<Ipost[]>(base_url);
      return response.data;
    }
});

  if (isLoading) return <p>Loading...</p>;
  if (isError) throw error;

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`${base_url}/${id}`);

      queryClient.setQueryData(["posts"], (prevPosts: any) => {
        return prevPosts.filter((post: any) => post.id !== id);
      });
      alert("Post deleted successfully.");
      console.log(`Post with id ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete the post. Please try again.");
    }
  };

  const totalPages = Math.ceil((posts?.length || 0) / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentPosts = posts?.slice(start, end);
  return (
    <div>
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Posts</h1>
        <Link href="/posts/create">
          <LinkButtonPrimary>Create New Post (Formik)</LinkButtonPrimary>
        </Link>
      </CardList>

      {currentPosts?.map((post) => (
        <CardList key={post.id}>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <LinkButtonDanger onClick={() => handleDelete(post.id)}>
            Delete
          </LinkButtonDanger>
        </CardList>
      ))}
      <div className="flex justify-center my-6">
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
            showControls
            isCompact
            color="secondary"
          />
        </div>
    </div>
  );
}
