"use client";

import { Card, CardBody } from "@heroui/react";

const CardList = ({ children }: any) => {
  return (
    <Card className="max-w-4xl mx-auto p-8 my-5">
      <CardBody className="space-y-4">{children}</CardBody>
    </Card>
  );
};

export default CardList;
