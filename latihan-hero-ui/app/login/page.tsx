"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import CardList from "../components/CardList";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("client");
  const router = useRouter();

  const handleLogin = async () => {
    await axios.post("/api/login", { username, role });
    router.push(`/${role}`);
  };

  return (
    <div className="my-8">
      <CardList>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Select
        label="Role"
        selectedKeys={[role]}
        onSelectionChange={(keys) => setRole(Array.from(keys)[0] as string)}
      >
        <SelectItem key="admin">Admin</SelectItem>
        <SelectItem key="client">Client</SelectItem>
        <SelectItem key="driver">Driver</SelectItem>
      </Select>

      <Button onClick={handleLogin} color="primary">Login</Button>
      </CardList>
    </div>
  );
}
