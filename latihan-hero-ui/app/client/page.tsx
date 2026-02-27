"use client";

import { Button } from "@heroui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";

export default function ClientPage() {
    const router = useRouter()

  const handleLogout = async () => {
    await axios.post("/api/logout")
    router.push("/login")
  }
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Client Page</h1>
      <p>This is a client-side rendered page. You can add interactive components and client-side logic here.</p>
      <Button color="danger" onClick={handleLogout}>
      Logout
    </Button>
    </div>
  );
}