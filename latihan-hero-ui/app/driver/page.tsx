"use client";

import { Button, Card } from "@heroui/react";
import axios from "axios";
import { useRouter } from "next/dist/client/components/navigation";
import CardList from "../components/CardList";

export default function DriverPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post("/api/logout");
    router.push("/login");
  };
  return (
    <div>
      <CardList>
        <h1 className="text-4xl font-bold mb-8">Driver Page</h1>
        <p>
          This is the driver dashboard page. You can manage your driving
          assignments and related tasks here.
        </p>
        <Button color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </CardList>
    </div>
  );
}
