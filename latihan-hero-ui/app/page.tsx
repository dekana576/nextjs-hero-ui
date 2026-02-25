"use client";

import { Card, CardBody, Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="p-4 max-w-sm">
        <CardBody className="gap-3">
          <h2 className="text-xl font-bold">HeroUI Works 🚀</h2>
          <Button color="primary">Click Me</Button>
        </CardBody>
      </Card>
    </div>
  );
}
