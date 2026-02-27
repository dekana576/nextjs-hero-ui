"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Button, Input, Select, SelectItem } from "@heroui/react"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [role, setRole] = useState("client")
  const router = useRouter()

  const handleLogin = async () => {
    await axios.post("/api/login", { username, role })
    router.push("/dashboard")
  }

  return (
    <div className="max-w-sm mx-auto mt-20 flex flex-col gap-4">
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Select
        label="Role"
        selectedKeys={[role]}
        onSelectionChange={(keys) =>
          setRole(Array.from(keys)[0] as string)
        }
      >
        <SelectItem key="admin">Admin</SelectItem>
        <SelectItem key="client">Client</SelectItem>
        <SelectItem key="driver">Driver</SelectItem>
      </Select>

      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}