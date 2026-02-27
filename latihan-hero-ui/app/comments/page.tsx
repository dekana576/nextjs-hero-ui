"use client";

import CardList from "../components/CardList";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "@heroui/react";
import { useState } from "react";

const base_url = "https://jsonplaceholder.typicode.com/comments";

interface Icomment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const queryClient = useQueryClient();
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = await axios.get<Icomment[]>(base_url);
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) throw error;

  const totalPages = Math.ceil((comments?.length || 0) / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentComments = comments?.slice(start, end);
  return (
    <div>
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Comments</h1>
      </CardList>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentComments?.map((comment) => (
          <CardList key={comment.id}>
            <p>
              <strong>ID:</strong> {comment.id}
            </p>
            <h2>
              <strong>Name:</strong> {comment.name}
            </h2>
            <h2>
              <strong>Email:</strong> {comment.email}
            </h2>
            <p>
              <strong>Body:</strong> {comment.body}
            </p>
          </CardList>
        ))}
      </div>
        <div className="flex justify-center my-6">
          <Pagination
            total={totalPages}
            page={currentPage}
            onChange={setCurrentPage}
            showControls
            isCompact
            color="warning"
          />
        </div>
    </div>
  );
}
