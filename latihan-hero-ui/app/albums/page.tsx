"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CardList from "../components/CardList";
import { Pagination } from "@heroui/react";
import { useState } from "react";



const base_url = "https://jsonplaceholder.typicode.com/albums";

interface Ialbum {
  userId: number;
  id: number;
  title: string;
}



export default function Albums() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const queryClient = useQueryClient();

    const {data: albums, isLoading, isError, error} = useQuery({
        queryKey: ["albums"],
        queryFn: async () => {
            const response = await axios.get<Ialbum[]>(base_url);
            return response.data;
        }
    })

    if (isLoading) return <p>Loading...</p>;
    if (isError) throw error;

    const totalPages = Math.ceil((albums?.length || 0) / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentAlbums = albums?.slice(start, end);

  return (
    <div>
        <CardList>
            <h1 className="text-4xl font-bold mb-8">Albums</h1>

        </CardList>
        {currentAlbums?.map ((album) => (
        <CardList key={album.id}>
            <p><strong>ID:</strong> {album.id}</p>
            <h2><strong>Title:</strong> {album.title}</h2>
        </CardList>
       ) )}
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