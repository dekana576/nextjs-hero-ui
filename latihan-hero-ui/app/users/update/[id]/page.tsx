"use client";

import CardList from "@/app/components/CardList";
import { Button, Form, Input } from "@heroui/react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function UpdateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const params = useParams();
  const id = params.id;

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          username: username,
          email: email,
          userId: id,
        },
      );
      console.log("User updated:", response.data);
      setStatus("success");
    } catch (error) {
      console.error("Error updating user:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8">
      <CardList>
        <h1 className="text-3xl font-bold mb-6">Update User</h1>
        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          onSubmit={handleUpdate}
        >
          <Input
            isRequired
            errorMessage="Please enter a valid username"
            label="Username"
            labelPlacement="outside"
            name="username"
            placeholder="Enter your username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            isRequired
            errorMessage="Please enter a valid email"
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <Button color="primary" type="submit" isLoading={loading}>
              Submit
            </Button>
            <Button
              type="reset"
              variant="flat"
              onClick={() => {
                setUsername("");
                setEmail("");
                setStatus("reset");
              }}
            >
              Reset
            </Button>
          </div>
          {status === "success" && (
            <p className="text-green-500 text-sm">User Updated successfully!</p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm">Failed to update user.</p>
          )}

          {status === "reset" && (
            <p className="text-gray-500 text-sm">Form has been reset.</p>
          )}
        </Form>
      </CardList>
    </div>
  );
}
