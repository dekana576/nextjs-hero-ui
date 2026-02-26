"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CardList from "../components/CardList";



const base_url = "https://jsonplaceholder.typicode.com/albums";

interface Ialbum {
  userId: number;
  id: number;
  title: string;
}



export default function Albums() {
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
  return (
    <div>
        <CardList>
            <h1 className="text-4xl font-bold mb-8">Albums</h1>

        </CardList>
        {albums?.map ((album) => (
        <CardList key={album.id}>
            <p><strong>ID:</strong> {album.id}</p>
            <h2><strong>Title:</strong> {album.title}</h2>
        </CardList>
       ) )}
    </div>
  );
}