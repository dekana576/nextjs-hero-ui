"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import CardList from "../components/CardList"
import LinkButtonDanger from "../components/LinkButtonDanger"

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

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?")
    if (!confirmDelete) return
  
    try {
      await axios.delete(`${base_url}/${id}`)

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
      alert("Post deleted successfully.")
      console.log(`Post with id ${id} deleted successfully.`)
    } catch (error) {
      console.error("Error deleting post:", error)
      alert("Failed to delete the post. Please try again.")
    }
  }
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
          <LinkButtonDanger onClick={() => handleDelete(post.id)}>Delete</LinkButtonDanger>
        </CardList>
      ))}
    </div>
  )
}