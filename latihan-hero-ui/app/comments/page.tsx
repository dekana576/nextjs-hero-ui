"use client";

import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import axios from "axios";


const base_url = "https://jsonplaceholder.typicode.com/comments";

interface Icomment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Icomment[]>([]);

  useEffect(() => {
    axios
      .get<Icomment[]>(base_url)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Comments</h1>
      </CardList>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {comments.map((comment) => (
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
    </div>
  );
}
