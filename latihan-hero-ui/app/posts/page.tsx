"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import CardList from "../components/CardList"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Ipost {
  userId: number
  id: number
  title: string
  body: string
}

export default function Posts() {

  const [posts, setPosts] = useState<Ipost[]>([])

  useEffect(() => {
    axios.get<Ipost[]>(base_url)
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div>
        <CardList>
          
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
        </CardList>

      {posts.map((post) => (
        <CardList key={post.id}>
          <p>{post.id}</p>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </CardList>
      ))}
    </div>
  )
}