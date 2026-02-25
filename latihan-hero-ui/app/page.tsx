"use client";

import { Card, CardBody } from "@heroui/react";

import DateExample from "./components/DateExample";
import HeroUiButton from "./components/HeroUiButton";
import CardExample from "./components/CardExample";
import FormExample from "./components/FormExample";
import ImageExample from "./components/ImageExample";
import CheckBoxExample from "./components/CheckBoxExample";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold mb-8">HeroUI Components</h1>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Buttons</h2>
          <HeroUiButton />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Card Examples</h2>
          <CardExample />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Example</h2>
          <FormExample />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Image Example</h2>
          <ImageExample />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Checkbox Example</h2>
          <CheckBoxExample />
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">Date Input Example</h2>
          <DateExample />
        </CardBody>
      </Card>
    </div>
  );
}
