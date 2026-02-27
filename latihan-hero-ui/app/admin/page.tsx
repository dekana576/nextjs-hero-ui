"use client";

import { Button } from "@heroui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";
import CardList from "../components/CardList";

export default function Admin() {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post("/api/logout");
    router.push("/login");
  };
  return (
    <div>
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Admin Page</h1>
        <p>
          Welcome to the admin dashboard. Here you can manage your application
          settings and data.
        </p>
        <Button color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </CardList>
    </div>
  );
}
