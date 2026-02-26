"use client";
import { Form } from "@heroui/form";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { useState } from "react";
import React from "react";
import CardList from "../../components/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await axios.post(base_url, {
        username: username,
        email: email,
        userId: 1,
      });
      console.log("User created:", response.data);
      setStatus("success");
      setUsername("");
      setEmail("");
    } catch (error) {
      console.error("Error creating user:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-md mx-auto p-8">
      <CardList>
        <Form
          className="w-full max-w-xs flex flex-col gap-4"
          onSubmit={handleSubmit}
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
            <p className="text-green-500 text-sm">User created successfully!</p>
          )}

          {status === "error" && (
            <p className="text-red-500 text-sm">Failed to create user.</p>
          )}

          {status === "reset" && (
            <p className="text-gray-500 text-sm">Form has been reset.</p>
          )}
        </Form>
      </CardList>
    </div>
  );
}
